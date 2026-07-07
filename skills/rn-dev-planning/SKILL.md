---
name: rn-dev-planning
description: React Native-specific vocabulary and standard IDs for the Technical Approach section of a dev plan. Used by /create-dev-plan alongside the shared mobile-dev-planning skill, which owns the plan's overall mechanics.
---

## Methodology

The shared `mobile-dev-planning` skill owns dev-plan mechanics (frontmatter, task decomposition, dependencies, risks, rollback plan, draft-until-approved gate). This skill supplies only the React Native-specific content for the Technical Approach section:

1. **Use `rn-architect`'s technical approach and `repo-analyst`'s detected conventions** (nav library, state mgmt, folder structure) as the basis for the approach — don't re-derive them from scratch.

2. **Cite the relevant standard IDs** (`ARCH-*` from `standards/react-native/rn-architecture.md`, `API-*` from `standards/react-native/rn-api-service-layer.md`, `STATE-*` from `standards/react-native/rn-state-management.md`, `NAV-*` from `standards/react-native/react-navigation.md`) the approach follows.

3. **Write the approach in RN vocabulary** (screens, state/data slices or equivalents, navigation routes/params, feature-folder placement) — this becomes the flat Technical Approach section for a react-native-only feature, or the `### React Native` subsection for a mixed-platform feature.
