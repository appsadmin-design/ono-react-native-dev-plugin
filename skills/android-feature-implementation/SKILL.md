---
name: android-feature-implementation
description: Methodology for implementing a planned task in a native Android codebase per org standards — not yet authored, currently a structure-only placeholder. Used by /implement-task via the android-feature-developer agent.
---

## Status: Not yet authored

This skill is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration. It mirrors `skills/rn-feature-implementation/SKILL.md`'s role for React Native.

Until this is authored, Android implementation guidance will not cite grounded `standards/android/*` IDs — those standards are also placeholder-only right now. Author both together before relying on `/implement-task` for real Android work.

## Intended methodology (once authored)

1. Resolve the task from `templates/task-breakdown-template.md`, check dependencies, resolve a Figma link for UI-touching tasks — same process shape as `rn-feature-implementation`.
2. Identify applicable `standards/android/*` standards for the surface touched (Kotlin coding conventions, Compose/XML conventions, architecture, performance).
3. Implement, self-check against acceptance criteria, and record applied standard IDs in the output summary.
