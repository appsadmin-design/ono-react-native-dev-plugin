# Feature Plan Template

<!--
The thin delivery-plan wrapper produced by /dev-feature-start alongside templates/task-breakdown-template.md, from an APPROVED Detailed Design (templates/dd-template.md).
The DD owns the design (overview, technical approach, impacted modules, risks, acceptance criteria). This doc owns only what the DD does not: task sequencing and the rollback plan — plus the frontmatter /implement-task reads (notably figma_link).
-->

```yaml
feature: # feature name
dd_link: # path to the approved templates/dd-template.md this plan was built from
figma_link: # carried over from the DD — /implement-task reads this before implementing UI tasks
platform: # react-native | ios | android | react | mixed — carried over from the DD, not re-detected
device_type: # mobile | tv — carried over from the DD, not re-detected. No "mixed".
author: # the relevant platform architect / human author
status: draft # draft | approved
date: # YYYY-MM-DD
```

<!-- 2-4 sentences: what is being built and why, in plain language. Carried over from the approved DD this plan was built from. -->
## Overview

<!-- Populated from templates/task-breakdown-template.md — embed the table here or link to it. -->
## Task Breakdown

<!-- The order tasks should be implemented in, and why — surfacing the cross-task and cross-platform dependencies captured in the task breakdown's depends-on column. -->
## Sequencing & Dependencies

<!-- How to revert this change if it ships broken: feature flag, revert commit, migration reversal, etc. Owned here, deliberately NOT folded into the DD. -->
## Rollback Plan

<!-- Flip `status` to `approved` once a human has reviewed the plan and task breakdown. /implement-task refuses to run against a plan still in draft. -->
## Approval
