---
name: android-code-reviewer
description: Reviews native Android code changes against the org's standards — not yet authored, currently a structure-only placeholder. Used by /review-code for Android-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for Android work. It mirrors `agents/rn-code-reviewer.md`'s role for React Native.

Until authored, invoking this agent for real Android code review will not produce standards-grounded findings — `standards/android/*` is also placeholder-only right now. Author both together before relying on `/review-code` for real Android review coverage.

## Intended role (once authored)

- Review Android-attributed files against `standards/android/*` (correctness, style, standards-adherence — not performance or security).
- Populate `templates/code-review-template.md` findings tagged `[android]`, merging with `android-performance-reviewer` and any other platform's reviewers for a mixed-repo review.
- Don't comment on performance or security — those are `android-performance-reviewer`'s and the shared `mobile-security-reviewer`'s job.
