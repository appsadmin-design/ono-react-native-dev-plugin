# Changelog

All notable changes to this plugin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this plugin adheres to [Semantic Versioning](https://semver.org/). The
version below is the plugin's own `version` in
[`plugin.json`](.claude-plugin/plugin.json).

## [Unreleased]

### Changed
- Evolved the plugin from a React-Native-only workflow into a mobile-division
  plugin: platform detection (React Native, native iOS, native Android,
  React web, or a mix) now runs before every command, with shared process
  loaded always and platform-specific standards/skills/agents loaded only
  for the platform(s) actually touched.
- Renamed the plugin from `ono-react-native-dev-plugin` to
  `ono-mobile-dev-plugin` to reflect the broader scope. `plugin.json`'s
  `name` and this repository were both renamed to match.
- Restructured `standards/` into `shared/`, `react-native/`, `ios/`,
  `android/`, and `react/` subfolders. `agents/` and `skills/` stay flat
  with prefix-based naming (`rn-`/`ios-`/`android-`/`react-`, unprefixed for
  shared), since Claude Code's plugin loader doesn't support a second
  nesting level for those component types.
- All 8 commands (`/analyze-feature`, `/create-dev-plan`, `/implement-task`,
  `/review-code`, `/review-security`, `/fix-review-comments`,
  `/create-dev-qa-notes`, `/prepare-mobile-release`) are now platform-aware:
  they detect/read the platform and route to the matching platform's
  skill/agent, merging output across platforms for mixed-repo work.
- Folded the `rn-debugger` agent's methodology into the shared
  `mobile-debugging` skill; `/fix-review-comments` now delegates the actual
  fix to whichever platform's feature-developer agent owns the finding.

### Added
- New shared standards: `standards/shared/release-readiness.md` and
  `qa-handoff.md`, extracted from prior skill prose into citable
  `REL-*`/`QA-*` IDs. New `standards/react-native/rn-performance.md`,
  extracted from `rn-performance-reviewer`'s prior inline instructions.
- Structure-only placeholder standards, skills, and agents for the iOS,
  Android, and React (web) platforms, mirroring the React Native module's
  shape, ready to be authored.
- A `platform` field/column across `templates/feature-analysis-template.md`,
  `dev-plan-template.md`, and `task-breakdown-template.md`; platform-tagged
  findings in `code-review-template.md`; platform-specific subsections in
  `qa-handoff-template.md` and `release-checklist-template.md`.

### Fixed
- `hooks/require-approval-before-code.sh` now also matches `.kts` (Kotlin
  build-script) files.

## [0.1.0] - 2026-07-05

### Added
- Initial React Native SDLC plugin: `/analyze-feature`, `/create-dev-plan`,
  `/implement-task`, `/review-code`, `/review-security`,
  `/fix-review-comments`, `/create-dev-qa-notes`, and
  `/prepare-mobile-release` commands, backed by matching skills
  (`rn-repo-analysis`, `rn-dev-planning`, `rn-feature-implementation`,
  `rn-code-review`, `rn-security-review`, `rn-debugging`,
  `rn-testing-and-qa-handoff`, `rn-release-readiness`), agents
  (`repo-analyst`, `rn-architect`, `rn-feature-developer`,
  `rn-code-reviewer`, `rn-performance-reviewer`, `rn-security-reviewer`,
  `rn-debugger`, `rn-release-engineer`), eight standards documents, seven
  pipeline templates, and three safety hooks (`protect-secrets`,
  `require-approval-before-code`, `block-main-branch-changes`).
