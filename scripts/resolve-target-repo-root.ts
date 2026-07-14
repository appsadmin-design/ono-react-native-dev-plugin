/**
 * resolve-target-repo-root.ts
 *
 * Deterministic helper that resolves the *real* target repository root for
 * `/implement-task` (and any other command that needs one authoritative repo
 * root), unwrapping Claude Code agent worktrees. It never writes anything.
 *
 * Why this exists: Claude Code may run an agent inside an isolated git worktree
 * at `<repo>/.claude/worktrees/agent-<id>/`. Inside that worktree, CWD and
 * `git rev-parse --show-toplevel` both point at the worktree — itself a
 * legitimate git root — not the developer's main working tree. Resolving
 * feature documents or writing code there silently strands the work in a
 * throwaway copy. This helper collapses that ambiguity to a single
 * authoritative absolute path, or fails loudly when it cannot.
 *
 * This is ono-mobile-dev-plugin's own self-contained copy. Its algorithm and
 * JSON/exit-code contract intentionally mirror the proven
 * `resolve-repo-root.ts` design from the sibling ono-project-inspector plugin;
 * it is duplicated here (not imported) so this plugin has no cross-plugin
 * runtime dependency.
 *
 * Runtime: runs under Node >= 23.6 (`node scripts/resolve-target-repo-root.ts`)
 * or Bun (`bun scripts/resolve-target-repo-root.ts`). No external deps, and it
 * does NOT rely on CLAUDE_PLUGIN_ROOT or CLAUDE_PROJECT_DIR.
 *
 * Usage:
 *   node scripts/resolve-target-repo-root.ts [candidate-path]   (default: CWD)
 *
 * Stdout: a single JSON object (see ResolveResult).
 * Exit codes:
 *   0 - resolved a safe, non-worktree targetRoot (read targetRoot from stdout)
 *   1 - candidate path does not exist
 *   3 - resolution is ambiguous/unsafe (e.g. a Claude worktree that could not
 *       be unwrapped to a main working tree); callers MUST NOT proceed
 */

import { existsSync, realpathSync } from "fs";
import { execFileSync } from "child_process";
import { resolve, sep } from "path";

const CLAUDE_WORKTREE_MARKER = `${sep}.claude${sep}worktrees${sep}`;

interface ResolveResult {
  candidate: string;
  targetRoot: string;
  isGit: boolean;
  isClaudeWorktree: boolean;
  unwrapped: boolean;
  mainWorktree: string | null;
  targetIsWorktree: boolean;
  ok: boolean;
  warning: string | null;
}

function git(args: string[], cwd: string): string | null {
  try {
    return execFileSync("git", args, {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

/** The first `worktree <path>` line of `git worktree list --porcelain` is always the main working tree. */
function mainWorktree(cwd: string): string | null {
  const out = git(["worktree", "list", "--porcelain"], cwd);
  if (!out) return null;
  for (const line of out.split("\n")) {
    if (line.startsWith("worktree ")) return line.slice("worktree ".length).trim();
  }
  return null;
}

export function resolveTargetRepoRoot(candidatePath: string): ResolveResult {
  const candidateAbs = resolve(candidatePath);
  if (!existsSync(candidateAbs)) {
    // Signalled to callers via exit code 1 in main(); represented here so the
    // function stays pure for tests.
    throw new PathNotFoundError(candidateAbs);
  }
  const candidate = realpathSync(candidateAbs);

  const toplevel = git(["rev-parse", "--show-toplevel"], candidate);
  const isGit = toplevel !== null;
  const isClaudeWorktree = candidate.includes(CLAUDE_WORKTREE_MARKER);
  const main = isGit ? mainWorktree(candidate) : null;

  let targetRoot = toplevel ? realpathSync(toplevel) : candidate;
  let unwrapped = false;
  let warning: string | null = null;

  if (isClaudeWorktree) {
    if (main && existsSync(main) && !main.includes(CLAUDE_WORKTREE_MARKER)) {
      targetRoot = realpathSync(main);
      unwrapped = true;
    } else {
      warning =
        "Candidate is inside .claude/worktrees but the main working tree could not be resolved; refusing to treat the worktree as the target repository root.";
    }
  }

  const targetIsWorktree = targetRoot.includes(CLAUDE_WORKTREE_MARKER);
  const ok = !targetIsWorktree && !warning;

  return {
    candidate,
    targetRoot,
    isGit,
    isClaudeWorktree,
    unwrapped,
    mainWorktree: main,
    targetIsWorktree,
    ok,
    warning,
  };
}

export class PathNotFoundError extends Error {
  readonly path: string;
  constructor(path: string) {
    super(`Candidate path not found: ${path}`);
    this.name = "PathNotFoundError";
    this.path = path;
  }
}

function main(): void {
  const candidateArg = process.argv[2] ?? process.cwd();
  let result: ResolveResult;
  try {
    result = resolveTargetRepoRoot(candidateArg);
  } catch (err) {
    if (err instanceof PathNotFoundError) {
      console.error(err.message);
      process.exit(1);
    }
    throw err;
  }
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 3);
}

// Only run the CLI when executed directly, so the test file can import the
// pure function without triggering process.exit.
const invokedDirectly =
  typeof process !== "undefined" &&
  process.argv[1] !== undefined &&
  /resolve-target-repo-root\.ts$/.test(realpathSync(process.argv[1]));

if (invokedDirectly) {
  main();
}
