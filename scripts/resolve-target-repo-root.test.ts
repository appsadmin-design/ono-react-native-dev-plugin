/**
 * resolve-target-repo-root.test.ts
 *
 * Self-contained tests for scripts/resolve-target-repo-root.ts. Builds throwaway
 * git repositories in a temp dir and exercises the CLI end-to-end (stdout JSON
 * + exit code), covering the scenarios the command relies on:
 *   1. normal repository root
 *   2. execution from a subdirectory
 *   3. execution inside .claude/worktrees/... (agent worktree is unwrapped)
 *   4. ambiguous / non-git paths (non-git dir, nonexistent path, and a
 *      .claude/worktrees path that cannot be unwrapped -> loud failure)
 *
 * No external test framework. Run with:
 *   node scripts/resolve-target-repo-root.test.ts
 *   bun  scripts/resolve-target-repo-root.test.ts
 */

import { execFileSync } from "child_process";
import { mkdtempSync, mkdirSync, writeFileSync, realpathSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const HELPER = join(import.meta.dirname ?? __dirname, "resolve-target-repo-root.ts");
const RUNTIME = process.execPath; // node or bun, whichever ran this file

interface CliRun {
  code: number;
  json: Record<string, unknown> | null;
  stdout: string;
  stderr: string;
}

function runHelper(candidate: string): CliRun {
  try {
    const stdout = execFileSync(RUNTIME, [HELPER, candidate], {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { code: 0, json: safeParse(stdout), stdout, stderr: "" };
  } catch (err: any) {
    const stdout = err.stdout?.toString() ?? "";
    return {
      code: typeof err.status === "number" ? err.status : 1,
      json: safeParse(stdout),
      stdout,
      stderr: err.stderr?.toString() ?? "",
    };
  }
}

function safeParse(s: string): Record<string, unknown> | null {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function git(cwd: string, ...args: string[]): void {
  execFileSync("git", args, { cwd, stdio: "ignore" });
}

function initRepo(dir: string): void {
  mkdirSync(dir, { recursive: true });
  git(dir, "init", "-q");
  git(dir, "config", "user.email", "test@example.com");
  git(dir, "config", "user.name", "Test");
  writeFileSync(join(dir, "README.md"), "# test\n");
  git(dir, "add", "-A");
  git(dir, "commit", "-qm", "init");
}

let failures = 0;
function check(name: string, cond: boolean, detail = ""): void {
  if (cond) {
    console.log(`PASS  ${name}`);
  } else {
    failures++;
    console.log(`FAIL  ${name}${detail ? `  — ${detail}` : ""}`);
  }
}

const root = mkdtempSync(join(realpathSync(tmpdir()), "rtrr-"));
try {
  // --- Scenario 1: normal repository root ---
  const repo = join(root, "main");
  initRepo(repo);
  const repoReal = realpathSync(repo);
  {
    const r = runHelper(repo);
    check("1 normal-root: exit 0", r.code === 0, `code=${r.code} stderr=${r.stderr}`);
    check("1 normal-root: targetRoot == repo", r.json?.targetRoot === repoReal, `${r.json?.targetRoot} != ${repoReal}`);
    check("1 normal-root: isGit true", r.json?.isGit === true);
    check("1 normal-root: ok true", r.json?.ok === true);
    check("1 normal-root: not unwrapped", r.json?.unwrapped === false);
  }

  // --- Scenario 2: execution from a subdirectory ---
  {
    const sub = join(repo, "src", "features");
    mkdirSync(sub, { recursive: true });
    const r = runHelper(sub);
    check("2 subdir: exit 0", r.code === 0, `code=${r.code}`);
    check("2 subdir: targetRoot == repo root", r.json?.targetRoot === repoReal, `${r.json?.targetRoot}`);
    check("2 subdir: ok true", r.json?.ok === true);
  }

  // --- Scenario 3: inside .claude/worktrees/... (unwrap to main) ---
  {
    const wt = join(repo, ".claude", "worktrees", "agent-1");
    git(repo, "worktree", "add", "-q", wt);
    const r = runHelper(wt);
    check("3 worktree: exit 0", r.code === 0, `code=${r.code} stderr=${r.stderr}`);
    check("3 worktree: isClaudeWorktree true", r.json?.isClaudeWorktree === true);
    check("3 worktree: unwrapped true", r.json?.unwrapped === true);
    check("3 worktree: targetRoot == main repo", r.json?.targetRoot === repoReal, `${r.json?.targetRoot} != ${repoReal}`);
    check("3 worktree: targetIsWorktree false", r.json?.targetIsWorktree === false);
    check("3 worktree: ok true", r.json?.ok === true);
  }

  // --- Scenario 4a: non-git path (not ambiguous, just not a repo) ---
  {
    const plain = join(root, "plain");
    mkdirSync(plain, { recursive: true });
    const r = runHelper(plain);
    check("4a non-git: isGit false", r.json?.isGit === false);
    check("4a non-git: exit 0 (not a worktree)", r.code === 0, `code=${r.code}`);
    check("4a non-git: targetRoot == candidate", r.json?.targetRoot === realpathSync(plain));
  }

  // --- Scenario 4b: nonexistent path -> exit 1 ---
  {
    const r = runHelper(join(root, "does-not-exist"));
    check("4b missing: exit 1", r.code === 1, `code=${r.code}`);
  }

  // --- Scenario 4c: worktree path that cannot be unwrapped -> exit 3 (loud) ---
  {
    const trapped = join(root, "trap", ".claude", "worktrees", "standalone");
    initRepo(trapped); // its own main worktree IS under the marker -> unsafe
    const r = runHelper(trapped);
    check("4c unsafe-worktree: exit 3", r.code === 3, `code=${r.code}`);
    check("4c unsafe-worktree: ok false", r.json?.ok === false);
    check("4c unsafe-worktree: warning present", typeof r.json?.warning === "string" && (r.json?.warning as string).length > 0);
  }
} finally {
  rmSync(root, { recursive: true, force: true });
}

console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures > 0 ? 1 : 0);
