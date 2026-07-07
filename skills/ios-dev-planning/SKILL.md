---
name: ios-dev-planning
description: iOS-specific vocabulary and standard IDs for the Technical Approach section of a dev plan — not yet authored, currently a structure-only placeholder. Used by /create-dev-plan alongside the shared mobile-dev-planning skill, which owns the plan's overall mechanics.
---

## Status: Not yet authored

This skill is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration. It mirrors `skills/rn-dev-planning/SKILL.md`'s role for React Native: supplying only the iOS-specific vocabulary and standard-ID citations for the Technical Approach section, while `mobile-dev-planning` owns the shared mechanics (frontmatter, task decomposition, dependencies, risks, rollback plan, draft-until-approved gate).

Until this is authored, iOS-specific dev plans will not cite grounded `standards/ios/*` IDs — those standards are also placeholder-only right now. Author both together before relying on `/create-dev-plan` for real iOS planning.

## Intended methodology (once authored)

1. Use `ios-architect`'s technical approach and `repo-analyst`'s detected iOS conventions as the basis for the approach.
2. Cite the relevant `standards/ios/*` standard IDs the approach follows.
3. Write the approach in iOS vocabulary (views/screens, state & data, navigation, module/folder placement) — the flat Technical Approach section for an iOS-only feature, or the `### iOS` subsection for a mixed-platform feature.
