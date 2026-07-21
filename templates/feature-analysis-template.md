# Feature Analysis Template

```yaml
feature: # feature name
dd_link: # link to the Detailed Design doc, if one exists
figma_link: # link to the Figma file/frame(s) for this feature's UI, if any — required before proposing screens for a UI-facing feature
platform: # react-native | ios | android | react | mixed — set by repo-analyst's platform detection; ask the human if confidence was Low
device_type: # mobile | tv — the mobile-vs-TV target for this feature, resolved by repo-analyst; ask the human if ambiguous. No "mixed" — resolve to exactly one.
author: # the relevant platform architect / human author
status: proposed # proposed | approved
date: # YYYY-MM-DD
```

<!-- 2-4 sentences: what was asked for, in plain language. -->
## Feature Request

<!-- repo-analyst's structured findings, verbatim: Platform Detection (raw signals, candidate platform(s), confidence) first, then the platform-specific stack section (for react-native: Navigation, State Management, Data Fetching, Testing, Monorepo/Workspace, Folder Structure, Lint/Format; for ios/android/react: lightweight existence-check findings). Every section present even if "not detected". -->
## Repo Conventions Detected

<!-- The relevant platform architect's proposed approach: Screens/Views / State & Data / Navigation-Routing / Folder Placement. Cite each platform's standard IDs (ARCH-*/NAV-* for react-native, etc.) each part follows. Grounded strictly in the conventions detected above, not assumed defaults. For platform: mixed, use subheadings — ### React Native / ### iOS / ### Android / ### React / ### Cross-Platform Coordination — one per platform actually touched, each populated independently by that platform's architect and merged here. -->
## Proposed Technical Approach

<!-- Anything uncertain, any assumption that needs a human decision before /dev-design-start turns this into a Detailed Design. Do not silently resolve these. -->
## Open Questions & Risks

<!-- Flip to `approved` once a human has reviewed the above. /dev-design-start reads only an approved feature analysis. -->
## Approval
