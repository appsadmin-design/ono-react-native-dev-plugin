# QA Handoff

<!-- One paragraph: what was built, for which feature, and why — written for someone who did not see the dev plan. -->
## Feature Summary

<!-- Numbered, step-by-step instructions a non-engineer QA person can follow exactly as written. -->
## How to Test

<!-- Test accounts/credentials (reference a secrets vault, never inline real credentials — see SEC-SECRETS-1 in standards/shared/mobile-security.md), target environment/build, feature flags to enable. -->
## Test Accounts & Environment

<!-- Boundary/error conditions explicitly exercised: empty states, offline, slow network, permission-denied, validation errors, etc. Per QA-EDGE-1 in standards/shared/qa-handoff.md. -->
## Edge Cases

<!-- Anything intentionally not handled in this change, with the reason and (if applicable) a follow-up task reference. Use "None" if empty — don't omit the section. Per QA-LIMIT-1. -->
## Known Limitations

<!-- Every screen/flow touched, so QA can map test steps back to the UI. -->
## Screens & Flows Touched

<!-- One subsection per platform this feature touches: RN — how to run via Metro/Expo Go, simulator/device, or an internal build link; iOS — Xcode run, TestFlight; Android — Android Studio run, internal APK/Play Console track; React (web) — local dev server, preview/staging URL. -->
## Build / Install / Testing Instructions

<!-- Which I18N-* standard IDs (standards/shared/i18n-rtl.md) were checked, and the result of manual LTR/RTL walkthroughs (I18N-TEST-1). Per QA-A11Y-1 in standards/shared/qa-handoff.md. -->
## i18n / RTL Check

<!-- Which A11Y-* standard IDs (standards/shared/accessibility.md) were checked, and the result of the VoiceOver/TalkBack (or web screen-reader) walkthrough (A11Y-SR-1). Per QA-A11Y-1. -->
## Accessibility Check
