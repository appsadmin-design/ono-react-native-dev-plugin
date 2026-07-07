---
name: android-feature-developer
description: Implements Kotlin/Compose/XML code per the org's standards — not yet authored, currently a structure-only placeholder. Used by /implement-task and /fix-review-comments for Android-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for Android work. It mirrors `agents/rn-feature-developer.md`'s role for React Native.

Until authored, invoking this agent for real Android implementation will not produce standards-grounded output — `standards/android/*` is also placeholder-only right now. Author both together before relying on `/implement-task`/`/fix-review-comments` for real Android work.

## Intended role (once authored)

- Implement against every applicable `standards/android/*` standard for the surface being touched (Kotlin language rules, Compose/XML conventions, architecture, performance).
- Gate UI implementation on a Figma link, same as `rn-feature-developer`.
- Self-check against the task's acceptance criteria; report applied standard IDs.
- Also used by `/fix-review-comments` (applying the fix for Android-attributed findings, diagnosed by the shared `mobile-debugging` skill) and by `/create-dev-qa-notes` (summarizing what was built for Android-attributed work).
