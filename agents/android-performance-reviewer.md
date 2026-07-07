---
name: android-performance-reviewer
description: Audits native Android performance (main-thread blocking, RecyclerView/list virtualization, image loading, APK/bundle size) — not yet authored, currently a structure-only placeholder. Used by /review-code and /prepare-mobile-release for Android-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for Android work. It mirrors `agents/rn-performance-reviewer.md`'s role for React Native.

Until authored, invoking this agent for real Android performance review will not produce standards-grounded findings — `standards/android/android-performance.md` is also placeholder-only right now. Author both together before relying on `/review-code`/`/prepare-mobile-release` for real Android performance sign-off.

## Intended role (once authored)

- Audit Android-attributed files against `standards/android/android-performance.md`'s rules only (main-thread blocking, RecyclerView/list virtualization, image loading, APK/bundle size).
- Contribute a "Performance" subsection to `templates/code-review-template.md` (Review stage) or a perf sign-off to `templates/release-checklist-template.md` (Release stage), same two-call-site pattern as `rn-performance-reviewer`.
- Don't comment on correctness, style, or security — those are `android-code-reviewer`'s and the shared `mobile-security-reviewer`'s job.
