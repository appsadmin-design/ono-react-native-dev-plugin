---
name: mobile-repo-analysis
description: Methodology for detecting a repo's platform (React Native, native iOS, native Android, React web, or mixed) and its stack/conventions before proposing feature work. Used by /analyze-feature via the repo-analyst agent and the platform-specific architect agent(s).
---

## Methodology

1. **Detect platform first, before anything else.** Run `repo-analyst`'s platform-detection algorithm (raw signal checks → RN/iOS/Android/React verdicts → RN-native-shell linkage check → final routing). See `agents/repo-analyst.md` for the full decision procedure. If monorepo tooling is present, run detection per touched workspace/package, not once for the whole repo.

2. **If detection confidence is Low, stop and ask the human to pick the platform** (React Native / iOS / Android / React / Mixed) before continuing — never guess a default.

3. **Once platform is confirmed, run platform-specific stack detection.** For React Native: enumerate `package.json` dependencies to identify the navigation library, state-management library, data-fetching layer, and test runner in use; detect monorepo/workspace tooling; scan the folder structure against `standards/react-native/rn-architecture.md`'s expected layering (`ARCH-LAYERS-*`, `ARCH-FOLDERS-*`); note lint/format tooling. For iOS/Android/React (web): lightweight existence checks only for now (see `agents/repo-analyst.md` — deep convention detection is deferred until each platform's standards are authored).

4. **Hand the structured findings summary (Platform Detection section + stack-detection section) to the matching platform architect agent(s)** — `rn-architect`/`ios-architect`/`android-architect`/`react-architect`. For a `mixed` platform, hand the same findings to each touched platform's architect independently; there is no single "lead" architect.

5. **If the feature involves new or changed UI, resolve the Figma link first.** If one wasn't provided, the architect agent stops and asks the human for it before proposing screens/views; if one is provided, it inspects the relevant frames via the `figma` MCP server.

6. **Each invoked architect proposes an approach** (screens/views, state/data, navigation/routing, folder placement) citing that platform's standard IDs, grounded strictly in what was detected and (for UI) the Figma frames.

7. **Populate `templates/feature-analysis-template.md`** with the feature request, the findings summary, the detected `platform` (frontmatter field), the `figma_link` used (if any), and the proposed approach — a single flat "Proposed Technical Approach" section for one platform, or platform-tagged subsections (`### React Native` / `### iOS` / `### Android` / `### React` / `### Cross-Platform Coordination`) merged from each architect's output when `platform: mixed`. Leave `status: proposed` for a human to review and approve.
