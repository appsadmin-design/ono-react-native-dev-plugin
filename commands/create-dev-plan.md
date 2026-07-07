---
description: "[Deprecated] Planning is now split into /dev-design-start then /dev-feature-start."
argument-hint: [feature-name]
---

**`/create-dev-plan` is deprecated and will be removed in a future release.** The single planning stage has been split into two gated stages:

1. **`/dev-design-start $ARGUMENTS`** — turns the approved feature analysis into a Detailed Design (DD). A human reviews and approves the DD.
2. **`/dev-feature-start $ARGUMENTS`** — turns the approved DD into a task breakdown and thin feature plan. A human reviews and approves it before `/implement-task`.

Do not produce a dev plan from this command. Instead:

1. Tell the developer that `/create-dev-plan` is deprecated and show them the two-command flow above.
2. If they want to proceed now, start the design stage by running the `dev-design-start` skill methodology for the feature named in `$ARGUMENTS` (which itself requires an approved feature analysis). Do not skip the DD — `/dev-feature-start` reads only an approved DD.
