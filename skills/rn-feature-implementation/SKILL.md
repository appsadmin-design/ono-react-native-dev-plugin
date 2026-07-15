---
name: rn-feature-implementation
description: Methodology for implementing a planned task in a React Native codebase per org standards. Used by /implement-task via the rn-feature-developer agent.
---

## Resolved inputs from `/implement-task`

When `/implement-task` invokes this skill it passes resolved, verified, absolute inputs: the target repository root, the Feature Analysis / DD / Dev Plan / Task Breakdown paths, the selected task id, the selected task-row content, the platform, and the Figma link. **When these are provided, they are authoritative** — use them directly and do not re-resolve by searching the workspace or guessing filenames. Only fall back to locating the task breakdown yourself if the command did not pass these inputs.

## Methodology

1. **Resolve the task.** Use the task-row content passed by `/implement-task` for `[task-id]` (description, files touched, depends-on, size, acceptance criteria). If it was not passed, look it up in the resolved Task Breakdown path — not a guessed one.

2. **Check dependencies.** Confirm every task listed in `depends-on` is already implemented; if not, stop and surface that instead of guessing at missing context.

3. **If the task touches UI, resolve the Figma link.** Check the dev plan's `figma_link`. If it's empty, stop and ask the human for one — don't guess spacing/color/typography from the task description. If present, pull Dev Mode specs and Code Connect mappings for the relevant frame via the `figma` MCP server and implement to match.

4. **Identify applicable standards** for the files/surfaces the task touches:
   - Coding conventions: `standards/react-native/react-native-coding-standards.md`.
   - Data fetching: `standards/react-native/rn-api-service-layer.md`.
   - Shared state: `standards/react-native/rn-state-management.md`.
   - UI text/layout direction: `standards/shared/i18n-rtl.md`.
   - UI accessibility: `standards/shared/accessibility.md`.
   - Folder placement/dependency direction: `standards/react-native/rn-architecture.md`.
   - Screen/route changes: `standards/react-native/react-navigation.md`.

5. **Implement the change**, applying each identified standard's checklist as you go rather than as an afterthought.

6. **Self-check against the task's acceptance criteria** line by line before reporting the task done.

7. **Record which standard IDs were applied** (e.g. `RN-TS-1`, `API-CACHE-2`) in the output summary — this is the trace `rn-code-reviewer`, `rn-performance-reviewer`, and the QA handoff skill rely on to know what to check without re-deriving it from scratch.
