---
description: Analyze a feature request against the current repo's conventions before planning it.
argument-hint: [feature-description-or-requirement]
---

Analyze the feature described in `$ARGUMENTS` (a feature description, product requirement, or user story, optionally including a Figma link) against this repo's actual conventions.

**No DD exists at this stage.** A Detailed Design (DD) is produced later by `/dev-design-start` from the *approved* Feature Analysis this command creates. Do not ask for a DD, do not expect one as input, and do not treat `$ARGUMENTS` as a DD link — this command is the step that produces the Feature Analysis which later feeds `/dev-design-start`.

1. Apply the `mobile-repo-analysis` skill methodology. Invoke the `repo-analyst` agent first to **detect the platform** (React Native, native iOS, native Android, React web, or a mix) using its platform-detection algorithm, before anything else.
2. **Present the detected context to the user and require confirmation before using it — always, even when detection confidence is high.** Detection is a recommendation, not the authoritative context. Show the detected values and ask:

   ```
   Detected development context:

   Platform: <detected platform>
   Device type: <detected device type>

   Is the current feature intended for this context?
   1. Yes, continue
   2. No, select another context
   ```

   - **Yes** → the detected `platform` and `device_type` become the authoritative context for this feature.
   - **No** → have the user select the platform (`react-native` / `react` / `ios` / `android`) and the device type (`mobile` / `tv`); use the selection as the authoritative context.
   - The confirmed context must always resolve to **exactly one** platform (`react-native` / `react` / `ios` / `android`) and **exactly one** device type (`mobile` / `tv`). Validate the values; reject empty or invalid input and re-ask. There is no `mixed` authoritative platform and no `mixed` device type.
   - **If `repo-analyst` detected multiple platforms or a mixed repository state, do not offer a "Yes, continue" path.** Present the detected candidate platforms and **require the user to select the single active platform and device type for the current feature** before continuing.
   - This gate subsumes the previous Low-confidence/ambiguous prompt — do not additionally stop-and-ask; an uncertain detection is presented as the recommendation and resolved through this same confirm/select step.
3. Once the platform is confirmed by the user (step 2), `repo-analyst` runs platform-specific stack detection for the confirmed platform (for React Native: navigation library, state-management library, data-fetching layer, testing setup, monorepo tooling, folder structure, lint/format config; for iOS/Android/React: lightweight existence checks only, per the current placeholder depth of those standards).
4. Invoke the confirmed platform's architect agent with those findings to propose a technical approach — `rn-architect` / `ios-architect` / `android-architect` / `react-architect` (one architect, matching the single confirmed platform) — grounded in what was actually detected, not assumed defaults. If the feature involves new or changed UI and `$ARGUMENTS` didn't include a Figma link, the architect agent asks for one before proposing screens/views.
5. Populate `templates/feature-analysis-template.md` in full: the feature request, `repo-analyst`'s findings verbatim (including the Platform Detection section), the **confirmed** `platform` (a single value — never `mixed`) and the **confirmed** `device_type` (`mobile` or `tv`) frontmatter fields, the confirmed platform architect's proposed approach as a single flat "Proposed Technical Approach" section, the `figma_link` used (if any), and any open questions/risks. Leave `status: proposed` in the frontmatter — do not mark it `approved`.
6. This is a proposal, not a design. A human reviews the populated feature analysis and flips its status to `approved` before `/dev-design-start` turns it into a Detailed Design (DD).
