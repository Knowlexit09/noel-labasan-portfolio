# Final QA Checklist

Last updated: 2026-09-16

Do not mark production ready until the non-destructive checks pass. Destructive recovery tests are intentionally last.

## Public Portfolio

- [ ] Public home loads without authentication.
- [ ] Desktop layout is visually correct.
- [ ] Mobile layout is visually correct.
- [ ] Profile photo, name, role, and availability render correctly.
- [ ] Public counter appears below the name as `@knowlexit · N visit(s)`.
- [ ] Singular/plural grammar is correct (`1 visit`, `2 visits`).
- [ ] Enabled modules appear; disabled modules stay hidden.
- [ ] Search behaves correctly if enabled.
- [ ] Projects, experience, skills, credentials, resume, and contact links render correctly.
- [ ] Public visitors cannot see draft/admin-only data.

## Analytics

- [ ] Visitors Today reports estimated unique visitors, not page views.
- [ ] Visitors · 7 Days reports estimated unique visitors.
- [ ] Total Views reports page views.
- [ ] Daily chart loads.
- [ ] Device mix loads.
- [ ] Referrer/source list loads.
- [ ] Public username can be changed and saved from Admin.
- [ ] Public counter reflects the saved username.
- [ ] Exclude-this-browser works.
- [ ] Excluded browser does not add new tracked visits/views.
- [ ] Rapid refreshes are de-duplicated as designed.
- [ ] Reset Analytics clears analytics data only after explicit confirmation.
- [ ] Reset Analytics does not alter content, inbox, media, auth, MFA, or recovery configuration.

## Authentication & MFA

- [ ] Password login works for the owner account.
- [ ] Verified TOTP factor triggers an authenticator challenge.
- [ ] Correct TOTP code completes login.
- [ ] Session reaches AAL2.
- [ ] Wrong TOTP code is rejected.
- [ ] Sign out current session works.
- [ ] Sign out other/all sessions behaves as labeled.
- [ ] Password recovery opens the intended recovery flow.

## AAL2 Enforcement

- [ ] Save Draft succeeds at AAL2.
- [ ] Publish Live succeeds at AAL2.
- [ ] Media upload/write succeeds at AAL2.
- [ ] Resume/document write succeeds at AAL2.
- [ ] Inbox update/delete succeeds at AAL2.
- [ ] Sensitive AAL1 write attempt is rejected by backend authorization.
- [ ] Public live reads continue working while admin writes require AAL2.

## Draft & Publishing

- [ ] Edit a harmless field in the working draft.
- [ ] Unsaved-changes indicator appears.
- [ ] Save Draft succeeds.
- [ ] Preview Draft opens the draft state without publishing it.
- [ ] Public site remains unchanged before Publish Live.
- [ ] Publish Live succeeds after confirmation.
- [ ] Public site reflects the published state.
- [ ] Revision/history entry is created where expected.
- [ ] Restore-from-live behavior works if used.

## Media & Resume

- [ ] Profile image preview loads.
- [ ] Test image upload succeeds.
- [ ] Draft uses uploaded image before publish.
- [ ] Reset/replacement behavior works.
- [ ] Resume/document manager loads.
- [ ] Test document operation succeeds.
- [ ] No storage write is possible from an unauthorized/AAL1 browser session.

## Contact & Inbox

- [ ] Public contact form submits successfully.
- [ ] Direct Inbox mode works.
- [ ] Gmail mode works if enabled.
- [ ] Both mode works if configured.
- [ ] Invalid configuration with both delivery destinations OFF is prevented.
- [ ] New message appears in Admin Inbox.
- [ ] Read/archive/reply-status actions work.
- [ ] Inbox deletion works only for the authorized owner at AAL2.

## Recovery Codes — Non-Destructive

- [ ] Recovery Codes card loads.
- [ ] Remaining-code count is correct.
- [ ] Generate/regenerate requires AAL2.
- [ ] Plaintext codes are shown only when generated.
- [ ] Done button stays disabled until the saved-codes checkbox is checked.
- [ ] Copy/download/print controls work.
- [ ] Closing the recovery-code display does not allow retrieving plaintext again.

## 24-Hour Emergency Recovery — Safe Test

- [ ] Lost-access path is reachable from the MFA challenge.
- [ ] Emergency recovery requires the expected authentication/verification steps.
- [ ] Initial email verification starts the cooling period.
- [ ] Exact eligible time/countdown is shown.
- [ ] A valid AAL2 session can cancel the pending request.
- [ ] Cancel leaves the existing authenticator and recovery codes intact.

## Destructive Recovery Tests — LAST ONLY

These tests can remove the current MFA factor and log out active sessions.

- [ ] Recovery-code consume/reset works.
- [ ] Used recovery code cannot be reused.
- [ ] MFA factor reset logs out sessions as expected.
- [ ] New authenticator can be enrolled after recovery.
- [ ] New recovery-code batch can be generated and stored.
- [ ] Full emergency-recovery completion works after the cooling period.
- [ ] Final emergency completion invalidates old recovery credentials as designed.

## Security & Performance Final Checks

- [ ] Supabase Security Advisor reviewed.
- [ ] Supabase Performance Advisor reviewed.
- [ ] Intentional `RLS Enabled No Policy` server-only tables documented.
- [ ] Intentional owner-restricted `portfolio_security_status()` SECURITY DEFINER warning documented.
- [ ] Leaked-password protection plan limitation/configuration documented.
- [ ] No service-role secret exists in GitHub/browser files.
- [ ] No recovery code or TOTP secret exists in GitHub history created during testing.
- [ ] GitHub Pages deployment for the final commit is successful.

## Production Launch Finish

- [ ] Reset test analytics if desired.
- [ ] Exclude owner browser from tracking.
- [ ] Export fresh production JSON backup.
- [ ] Save final known-good Git commit SHA.
- [ ] Store recovery codes securely outside the repository.
- [ ] Confirm no pending emergency-recovery request.
- [ ] Record final accepted advisor notices.
- [ ] Mark release as production-ready only after all required checks pass.
