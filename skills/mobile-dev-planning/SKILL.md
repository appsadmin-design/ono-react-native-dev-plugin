---
name: mobile-dev-planning
description: "[Deprecated] Superseded by the dev-design-start (design) and dev-feature-start (task-generation) skills, which split this stage in two. Retained only to back the deprecated /create-dev-plan alias for one release; do not use for new work."
---

## Methodology

1. **Start from the Analyze-stage output.** Use the approved feature analysis's proposed technical approach and `repo-analyst`'s detected conventions as the basis for the plan — don't re-derive them from scratch. Read the `platform` frontmatter field to know which platform-specific dev-planning skill(s) to consult for step 2.

2. **Populate `templates/dev-plan-template.md`'s frontmatter** (`feature`, `dd_link`, `author`, `status: draft`, `date`) and its Overview, Impacted Areas, and Technical Approach sections. For the Technical Approach section, delegate the platform vocabulary and standard-ID citations to the matching platform-specific dev-planning skill — a single flat section for one platform, or platform-tagged subsections when `platform: mixed`, one per touched platform.

3. **Decompose the technical approach into discrete tasks** in `templates/task-breakdown-template.md`, including a `platform` column per task (always filled — even for a single-platform feature, so `/implement-task` never has to guess). Each task must be small enough for a single `/implement-task` run and carry concrete, checkable acceptance criteria — avoid vague criteria like "works correctly."

4. **Record dependencies between tasks** in the `depends-on` column so `/implement-task` can be run in a valid order, including cross-platform dependencies (e.g. a React-web task depending on a backend contract an RN task also depends on).

5. **Flag risks and open questions explicitly** in the dev plan's Risks & Open Questions section rather than silently picking an assumption — anything that would change the technical approach if answered differently belongs here. For mixed-platform features, call out cross-platform coordination risks (API contracts, shared event/flag names) explicitly.

6. **Write a Rollback Plan** before task breakdown is considered final — how this change gets reverted if it ships broken (feature flag, revert commit, migration reversal).

7. **Leave `status: draft`** until a human explicitly approves the plan — `/implement-task` should not run against a plan still in draft.
