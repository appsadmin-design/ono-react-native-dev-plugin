---
name: ios-code-reviewer
description: Reviews native iOS code changes against the org's standards — not yet authored, currently a structure-only placeholder. Used by /review-code for iOS-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for iOS work. It mirrors `agents/rn-code-reviewer.md`'s role for React Native.

Until authored, invoking this agent for real iOS code review will not produce standards-grounded findings — `standards/ios/*` is also placeholder-only right now. Author both together before relying on `/review-code` for real iOS review coverage.

## Intended role (once authored)

- Review iOS-attributed files against `standards/ios/*` (correctness, style, standards-adherence — not performance or security).
- Populate `templates/code-review-template.md` findings tagged `[ios]`, merging with `ios-performance-reviewer` and any other platform's reviewers for a mixed-repo review.
- Don't comment on performance or security — those are `ios-performance-reviewer`'s and the shared `mobile-security-reviewer`'s job.
