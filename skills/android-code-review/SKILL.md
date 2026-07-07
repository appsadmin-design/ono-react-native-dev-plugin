---
name: android-code-review
description: Methodology for reviewing native Android code changes against org standards — not yet authored, currently a structure-only placeholder. Used by /review-code, scoped to files attributed to the Android platform, via the android-code-reviewer and android-performance-reviewer agents.
---

## Status: Not yet authored

This skill is a structure-only placeholder, scaffolded as part of the mobile-division plugin migration. It mirrors `skills/rn-code-review/SKILL.md`'s role for React Native.

Until this is authored, Android-attributed files in a review will not be checked against grounded `standards/android/*` IDs — those standards are also placeholder-only right now. Author both together before relying on `/review-code` for real Android review coverage.

## Intended methodology (once authored)

This skill runs only against files the command has attributed to the Android platform — for a mixed-repo review, other platforms' files are handled by their own platform's code-review skill in parallel, merged into one `templates/code-review-template.md` with `[platform]` tags.

1. Triage changed files into `standards/android/*`-relevant buckets; `android-code-reviewer` walks correctness/style/standards-adherence, `android-performance-reviewer` independently audits performance.
2. Merge both agents' findings, tagged `[android]`, into the shared `templates/code-review-template.md`.
3. Exclude security findings — defer to `mobile-security-review`'s methodology.
