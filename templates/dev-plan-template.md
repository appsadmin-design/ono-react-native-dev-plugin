# Dev Plan Template

```yaml
feature: # feature name
dd_link: # link to the Detailed Design doc, if one exists
figma_link: # carried over from templates/feature-analysis-template.md
platform: # react-native | ios | android | react | mixed — carried over from templates/feature-analysis-template.md, not re-detected
author: # the relevant platform architect / human author
status: draft # draft | approved
date: # YYYY-MM-DD
```

<!-- 2-4 sentences: what is being built and why, in plain language. Carried over from the approved templates/feature-analysis-template.md this plan was built from. -->
## Overview

<!-- Screens/views, features, state/data layer, navigation/routing, and native/platform config this change touches. List by path/name, not prose. -->
## Impacted Areas

<!-- The chosen technical approach, supplied by the shared mobile-dev-planning skill (mechanics) plus the matching platform dev-planning skill (vocabulary/standard IDs) — e.g. for react-native: new/changed state slices or endpoints, navigation changes, folder placement, citing ARCH-*/API-*/STATE-*/NAV-*. For platform: mixed, use subheadings — ### React Native / ### iOS / ### Android / ### React / ### Cross-Platform Coordination — one per platform actually touched. -->
## Technical Approach

<!-- Populated from templates/task-breakdown-template.md — embed the table here or link to it. -->
## Task Breakdown

<!-- Anything uncertain, any assumption that needs a human decision before /implement-task starts. Do not silently resolve these. -->
## Risks & Open Questions

<!-- How to revert this change if it ships broken: feature flag, revert commit, migration reversal, etc. -->
## Rollback Plan
