# Task Breakdown Template

```yaml
feature: # feature name/slug — must match the DD and Dev Plan for this feature
feature_analysis_link: # path to the approved feature analysis (the generated feature file, NOT templates/feature-analysis-template.md)
dd_link: # path to the approved DD (the generated {FEATURE-NAME}-DD.md, NOT templates/dd-template.md)
dev_plan_link: # path to the approved Dev Plan (the generated feature plan file, NOT templates/dev-plan-template.md)
figma_link: # carried over from the DD / Dev Plan — /implement-task reads this before implementing UI tasks
platform: # react-native | ios | android | react | mixed — carried over from the DD, not re-detected. For a mixed feature, individual rows still carry a single platform each.
status: draft # draft | approved — mirrors the Dev Plan's approval; /implement-task refuses to run against a breakdown still in draft
date: # YYYY-MM-DD
```

<!--
Produced by /dev-feature-start from an APPROVED Detailed Design (templates/dd-template.md), alongside the thin Dev Plan (templates/dev-plan-template.md).
The frontmatter above makes this breakdown self-describing: /implement-task resolves the Feature Analysis, DD, and Dev Plan from these link fields rather than guessing filenames. Every link MUST point to the actual generated feature artifact in the target repository (e.g. docs/biometric-login-DD.md), never to a plugin template under templates/. Fill every link — /implement-task stops if a required link is missing.
-->

<!-- One row per task. Each task must be small enough for a single /implement-task run and have acceptance criteria concrete enough to verify without re-reading the whole dev plan. `platform` is always filled — even for a single-platform feature, so /implement-task never has to guess which platform skill/agent to route to. Each row carries exactly ONE platform: the task model is single-platform-per-row, so a task spanning multiple platforms must be split into one task per platform. For a mixed feature, different rows can target different platforms. -->

| id | description | platform | files touched | depends-on | size | acceptance criteria |
|---|---|---|---|---|---|---|
| T1 | Short imperative description of the task | react-native | `src/features/example/exampleSlice.ts` | — | S / M / L | Concrete, checkable condition(s) that mean this task is done |
