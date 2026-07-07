---
description: Implement a single task from an approved dev plan.
argument-hint: [task-id]
---

Implement a single task from an approved dev plan.

1. Resolve `$ARGUMENTS` as a task id and look it up in the current feature's `templates/task-breakdown-template.md` row.
2. Read the `platform` value from that row — do not re-run platform detection.
3. Confirm every task listed in that row's "depends-on" column is already done — do not start if a dependency is still outstanding.
4. Apply the matching platform's feature-implementation skill — `rn-feature-implementation` / `ios-feature-implementation` / `android-feature-implementation` / `react-feature-implementation` — via the matching feature-developer agent, to implement the task against all applicable standards. If the task touches UI and the dev plan has no `figma_link`, the agent asks for one before implementing.
5. **Do not edit any code file until the existing `require-approval-before-code` hook's approval gate is satisfied** — this gate is unchanged by platform routing and applies identically regardless of which platform's feature-developer agent is implementing the task.
6. Self-check the implementation against the task's acceptance criteria before reporting done.
7. Report which standard IDs were applied (e.g. `RN-*`/`API-*`/`STATE-*` for react-native, or the equivalent for the platform actually used) so `/review-code` and `/create-dev-qa-notes` can trace them later.

Do not expand scope beyond this one task's acceptance criteria — a task that turns out to need more work should be flagged, not silently absorbed.
