---
description: Turn an approved feature analysis into a Detailed Design (DD) document.
argument-hint: [feature-name]
---

Turn an approved feature analysis into a Detailed Design (DD).

1. Take `$ARGUMENTS` as the feature name and locate its `templates/feature-analysis-template.md` from a prior `/analyze-feature` run. Confirm its frontmatter `status` is `approved` — if it's still `proposed`, stop and ask a human to review it first.
2. Read the `platform` and `figma_link` fields from the approved feature analysis — do not re-run platform detection.
3. Apply the `dev-design-start` skill methodology (shared mechanics) together with the matching platform-specific dev-planning skill(s) — `rn-dev-planning` / `ios-dev-planning` / `android-dev-planning` / `react-dev-planning` — via the matching platform architect agent(s), to build the DD's Technical Implementation Approach and Impacted Modules. For `platform: mixed`, invoke each touched platform's architect independently and merge into platform-tagged subsections.
4. Read the design via the Figma MCP if `figma_link` is set; if Figma access fails, stop with the exact error and do not generate any part of the DD.
5. Populate `templates/dd-template.md` in full, including its frontmatter (`feature_analysis_link`, `figma_link` and `platform` carried over from the feature analysis, `author`, `status: draft`, `detail_level`, `date`). Honour the skill's existing-file strategy — never blindly overwrite an existing DD.
6. Leave `status: draft` in the DD's frontmatter — do not mark it `approved`. This is a design, not a task list. A human reviews and flips that status before `/dev-feature-start` turns the DD into a task breakdown.
