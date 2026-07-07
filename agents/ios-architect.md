---
name: ios-architect
description: Designs the technical approach for a native iOS feature (views/screens, state & data, navigation, module placement) — not yet authored, currently a structure-only placeholder. Used by /analyze-feature and /create-dev-plan for iOS-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for iOS work. It mirrors `agents/rn-architect.md`'s role for React Native.

Until authored, invoking this agent for real iOS feature analysis/planning will not produce grounded, standards-cited output — `standards/ios/*` is also placeholder-only right now. Author both together before relying on `/analyze-feature`/`/create-dev-plan` for real iOS work.

## Intended role (once authored)

- Ground every recommendation in `repo-analyst`'s iOS stack detection (SwiftUI vs. UIKit, dependency manager, architecture pattern).
- Propose views/screens, state & data approach, navigation changes, and module/folder placement, citing `standards/ios/*` IDs.
- Gate UI proposals on a Figma link, same as `rn-architect`.
- Don't write code — that's `ios-feature-developer`'s job.
