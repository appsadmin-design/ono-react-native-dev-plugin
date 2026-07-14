---
description: Break an approved Detailed Design (DD) into a development task breakdown.
argument-hint: [feature-name]
---

Break an approved Detailed Design (DD) into a development task breakdown and a thin feature plan.

1. Take `$ARGUMENTS` as the feature name and locate its `templates/dd-template.md` from a prior `/dev-design-start` run. Confirm its frontmatter `status` is `approved` — if it's still `draft`, stop and ask a human to review it first.
2. Read the `platform` and `figma_link` fields from the approved DD — do not re-run platform detection.
3. Verify the DD's Definition of Ready for Development (§26) is satisfied and that no blocking Open Questions (§24) or Risks (§22) remain. If unresolved blockers exist, stop and surface them — do not generate tasks against an unstable design.
4. Apply the `dev-feature-start` skill methodology (shared mechanics) together with the matching platform-specific dev-planning skill(s) — `rn-dev-planning` / `ios-dev-planning` / `android-dev-planning` / `react-dev-planning` — via the matching platform architect agent(s), to decompose the DD into tasks. For `platform: mixed`, invoke each touched platform's planning skill/architect independently and tag tasks per platform.
5. Decompose the DD's Technical Implementation Approach (§19) and Impacted Modules (§20) into `templates/task-breakdown-template.md` rows — each task small enough for a single `/implement-task` run, each with an explicit `platform` value (exactly one platform per row), `depends-on` dependencies, and explicit acceptance criteria sourced from the DD's Acceptance Criteria Mapping (§25). Populate the task breakdown's frontmatter (`feature`, `feature_analysis_link`, `dd_link`, `dev_plan_link`, `figma_link`, `platform`, `status: draft`, `date`) with links to the actual generated feature artifacts — not plugin templates — so `/implement-task` can resolve the upstream documents deterministically.
6. Populate the thin feature plan in `templates/dev-plan-template.md` in full, including its frontmatter (`dd_link`, `figma_link` and `platform` carried over from the DD, `author`, `status: draft`, `date`) and its Overview, Task Breakdown, Sequencing & Dependencies, and Rollback Plan sections.
7. Leave `status: draft` in the feature plan's frontmatter — do not mark it `approved`. A human reviews and flips that status before `/implement-task` work begins.
