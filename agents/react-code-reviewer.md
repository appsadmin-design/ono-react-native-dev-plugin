---
name: react-code-reviewer
description: Reviews React web code changes against the org's standards — not yet authored, currently a structure-only placeholder. Used by /review-code for React-web-only or mixed-platform work.
---

## Status: Not yet authored

This agent is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration so routing resolves to a real file for React (web) work. It mirrors `agents/rn-code-reviewer.md`'s role for React Native — but is a fully separate module, not shared with it.

Until authored, invoking this agent for real React (web) code review will not produce standards-grounded findings — `standards/react/*` is also placeholder-only right now. Author both together before relying on `/review-code` for real React (web) review coverage.

## Intended role (once authored)

- Review React-attributed files against `standards/react/*` (correctness, style, standards-adherence — not performance or security).
- Populate `templates/code-review-template.md` findings tagged `[react]`, merging with `react-performance-reviewer` and any other platform's reviewers for a mixed-repo review.
- Don't comment on performance or security — those are `react-performance-reviewer`'s and the shared `mobile-security-reviewer`'s job (noting the shared security standard currently has no web-specific XSS/CSRF/CSP coverage — flag that gap rather than silently skip it).
