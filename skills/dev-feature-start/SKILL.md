---
name: dev-feature-start
description: Shared methodology for turning an approved Detailed Design (DD) into a development task breakdown and a thin feature plan, across any platform. Used by /dev-feature-start alongside the platform-specific dev-planning skill (rn-/ios-/android-/react-dev-planning) for task vocabulary and standard IDs. It consumes an approved DD (from /dev-design-start) and produces the task breakdown /implement-task runs from. It NEVER modifies source code.
---

## Methodology

Turn an approved DD into discrete, implementable tasks — the task-generation stage that sits between design (`/dev-design-start`) and implementation (`/implement-task`). This skill **never** modifies source code.

1. **Locate the approved DD (input gate).** Resolve the feature name to its `templates/dd-template.md` from a prior `/dev-design-start` run. **Confirm its frontmatter `status` is `approved`** — if it is still `draft`, stop and ask a human to review and approve it first. Do not generate tasks against an unapproved design.

2. **Read the `platform` frontmatter field** to know which platform-specific dev-planning skill(s) to consult, and read `figma_link` to carry forward. **Do not re-run platform detection** — the DD carries the platform decided at Analyze time.

3. **Verify the DD's Definition of Ready (§26).** Before decomposing, confirm §26's checklist is satisfied and that §24 Open Questions and §22 Risks contain nothing that would block delivery. If unresolved blockers remain, stop and surface them rather than generating tasks against an unstable design.

4. **Decompose the DD into discrete tasks** in `templates/task-breakdown-template.md`, driven by the DD's Technical Implementation Approach (§19) and Impacted Modules (§20). Each task must be small enough for a single `/implement-task` run, carry a `platform` value (always filled — even for a single-platform feature, so `/implement-task` never has to guess), and have concrete, checkable acceptance criteria — sourced from the DD's Acceptance Criteria Mapping (§25). Avoid vague criteria like "works correctly." For `platform: mixed`, different rows can target different platforms.

5. **Delegate platform vocabulary and standard-ID citations** to the matching platform-specific dev-planning skill (`rn-/ios-/android-/react-dev-planning`) via the matching architect — so each task's description and acceptance criteria use the right platform terms and cite the right standard IDs.

6. **Record dependencies between tasks** in the `depends-on` column so `/implement-task` can be run in a valid order, including cross-platform dependencies (e.g. a React-web task depending on a backend contract an RN task also depends on).

7. **Write the thin feature plan** in `templates/dev-plan-template.md`: frontmatter (`dd_link` → the approved DD path, `figma_link` and `platform` carried from the DD, `status: draft`), a plain-language Overview, the Task Breakdown (embed or link the table), Sequencing & Dependencies, and a **Rollback Plan** (how this ships-broken change gets reverted — feature flag, revert commit, migration reversal). Rollback lives here by design, not in the DD.

8. **Leave `status: draft`** in the feature plan until a human explicitly approves — `/implement-task` must not run against a plan still in draft.
