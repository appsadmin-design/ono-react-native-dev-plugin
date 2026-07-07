---
name: mobile-dev-planning
description: "[Deprecated] Do not use. Superseded by the dev-design-start and dev-feature-start skills. Retained only for backward compatibility and scheduled for removal in the next major version."
---

# mobile-dev-planning — Deprecated

**This skill is deprecated and must not be used for new work.** It is retained only for backward compatibility with the deprecated `/create-dev-plan` alias, and is scheduled for removal in the next major version.

## Active workflow

Planning is now two gated stages. Use these instead:

```
/analyze-feature   → /dev-design-start   → /dev-feature-start   → /implement-task
```

- **`/dev-design-start`** (skill: `dev-design-start`) turns an approved feature analysis into a Detailed Design (DD).
- **`/dev-feature-start`** (skill: `dev-feature-start`) turns an approved DD into a task breakdown and thin feature plan.

New development must use the new commands.
