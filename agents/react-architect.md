---
name: react-architect
description: Designs the technical approach for a React web feature (views, state & data, routing, folder placement) — not yet authored, currently a structure-only placeholder. Used by /analyze-feature and /create-dev-plan for React-web-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for React (web) work. It mirrors `agents/rn-architect.md`'s role for React Native — but is a fully separate module, not shared with it, despite overlapping JS/TS/React fundamentals.

Until authored, invoking this agent for real React (web) feature analysis/planning will not produce grounded, standards-cited output — `standards/react/*` is also placeholder-only right now. Author both together before relying on `/analyze-feature`/`/create-dev-plan` for real React (web) work.

## Intended role (once authored)

- Ground every recommendation in `repo-analyst`'s React (web) stack detection (bundler/framework, routing library, state-management library).
- Propose views, state & data approach, routing changes, and folder placement, citing `standards/react/*` IDs.
- Gate UI proposals on a Figma link, same as `rn-architect`.
- Don't write code — that's `react-feature-developer`'s job.
