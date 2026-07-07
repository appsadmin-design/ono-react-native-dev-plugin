---
name: react-dev-planning
description: React (web)-specific vocabulary and standard IDs for the Technical Approach section of a dev plan — not yet authored, currently a structure-only placeholder. Used by /create-dev-plan alongside the shared mobile-dev-planning skill, which owns the plan's overall mechanics.
---

## Status: Not yet authored

This skill is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration. It mirrors `skills/rn-dev-planning/SKILL.md`'s role for React Native — but is a fully separate module, not shared with it. It supplies only the React (web)-specific vocabulary and standard-ID citations for the Technical Approach section, while `mobile-dev-planning` owns the shared mechanics.

Until this is authored, React (web)-specific dev plans will not cite grounded `standards/react/*` IDs — those standards are also placeholder-only right now. Author both together before relying on `/create-dev-plan` for real React (web) planning.

## Intended methodology (once authored)

1. Use `react-architect`'s technical approach and `repo-analyst`'s detected React (web) conventions as the basis for the approach.
2. Cite the relevant `standards/react/*` standard IDs the approach follows.
3. Write the approach in web vocabulary (views, state & data, routing, folder placement) — the flat Technical Approach section for a React-only feature, or the `### React` subsection for a mixed-platform feature.
