---
name: android-architect
description: Designs the technical approach for a native Android feature (screens, state & data, navigation, module placement) — not yet authored, currently a structure-only placeholder. Used by /analyze-feature, /dev-design-start, and /dev-feature-start for Android-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for Android work. It mirrors `agents/rn-architect.md`'s role for React Native.

Until authored, invoking this agent for real Android feature analysis/planning will not produce grounded, standards-cited output — `standards/android/*` is also placeholder-only right now. Author both together before relying on `/analyze-feature`/`/dev-design-start`/`/dev-feature-start` for real Android work.

## Intended role (once authored)

- Ground every recommendation in `repo-analyst`'s Android stack detection (Compose vs. XML views, Gradle DSL, architecture pattern).
- Propose screens, state & data approach, navigation changes, and module/folder placement, citing `standards/android/*` IDs.
- Gate UI proposals on a Figma link, same as `rn-architect`.
- Don't write code — that's `android-feature-developer`'s job.
