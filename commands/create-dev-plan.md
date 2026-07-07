---
description: Turn a feature analysis into a dev plan and task breakdown.
argument-hint: [feature-name]
---

Turn a feature analysis into an approved-ready dev plan.

1. Take `$ARGUMENTS` as the feature name and locate its `templates/feature-analysis-template.md` from a prior `/analyze-feature` run. Confirm its frontmatter `status` is `approved` — if it's still `proposed`, stop and ask a human to review it first.
2. Read the `platform` field from the approved feature analysis — do not re-run platform detection.
3. Apply the `mobile-dev-planning` skill methodology (shared mechanics) together with the matching platform-specific dev-planning skill(s) — `rn-dev-planning` / `ios-dev-planning` / `android-dev-planning` / `react-dev-planning` — via the matching platform architect agent(s), to turn the approved analysis into a technical approach. For `platform: mixed`, invoke each touched platform's planning skill/architect independently and merge into platform-tagged subsections.
4. Populate `templates/dev-plan-template.md` in full, including its frontmatter (`feature`, `dd_link`, `figma_link` and `platform` carried over from the feature analysis, `author`, `status: draft`, `date`).
5. Decompose the approach into `templates/task-breakdown-template.md` rows — each task small enough for a single `/implement-task` run, each with an explicit `platform` value and explicit acceptance criteria. A mixed-platform feature can have different tasks targeting different platforms.
6. Leave `status: draft` in the dev plan's frontmatter — do not mark it `approved`. A human reviews and flips that status before `/implement-task` work begins.
