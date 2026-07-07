---
description: Analyze a feature request against the current repo's conventions before planning it.
argument-hint: [feature-description-or-dd-link]
---

Analyze the feature described in `$ARGUMENTS` (a description or a DD link, optionally including a Figma link) against this repo's actual conventions.

1. Apply the `mobile-repo-analysis` skill methodology. Invoke the `repo-analyst` agent first to **detect the platform** (React Native, native iOS, native Android, React web, or a mix) using its platform-detection algorithm, before anything else.
2. If platform-detection confidence is Low, **stop and ask the human to choose the platform** (React Native / iOS / Android / React / Mixed) before continuing — do not guess.
3. Once platform is confirmed, `repo-analyst` runs platform-specific stack detection (for React Native: navigation library, state-management library, data-fetching layer, testing setup, monorepo tooling, folder structure, lint/format config; for iOS/Android/React: lightweight existence checks only, per the current placeholder depth of those standards).
4. Invoke the matching platform architect agent(s) with those findings to propose a technical approach — `rn-architect` / `ios-architect` / `android-architect` / `react-architect` — grounded in what was actually detected, not assumed defaults. For a `mixed` platform, invoke each touched platform's architect independently and merge their output; there is no single "lead" architect. If the feature involves new or changed UI and `$ARGUMENTS` didn't include a Figma link, the architect agent asks for one before proposing screens/views.
5. Populate `templates/feature-analysis-template.md` in full: the feature request, `repo-analyst`'s findings verbatim (including the Platform Detection section), the detected `platform` (frontmatter field), each invoked architect's proposed approach, the `figma_link` used (if any), and any open questions/risks. For `platform: mixed`, use the `### React Native` / `### iOS` / `### Android` / `### React` / `### Cross-Platform Coordination` subheadings, one per platform actually touched. Leave `status: proposed` in the frontmatter — do not mark it `approved`.
6. This is a proposal, not a plan. A human reviews the populated feature analysis and flips its status to `approved` before `/create-dev-plan` turns it into a formal dev plan and task breakdown.
