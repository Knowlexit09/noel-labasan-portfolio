# Backup & Recovery Checklist

Last updated: 2026-09-16

Use this checklist before risky changes, after major releases, and during account/content recovery.

## Routine Backup Checklist

- [ ] Export the current portfolio JSON backup from the Admin System page.
- [ ] Keep the backup filename dated and store it outside the GitHub repository.
- [ ] Keep at least one recent known-good backup and one older fallback copy.
- [ ] Record the current production Git commit SHA before major changes.
- [ ] Confirm the latest GitHub Pages deployment completed successfully.
- [ ] Keep critical original media/resume files in a separate trusted folder or cloud backup.
- [ ] Confirm the authenticator app still contains the portfolio MFA factor.
- [ ] Confirm recovery codes were saved securely and are still available.
- [ ] Never store recovery codes, TOTP secrets, passwords, or service-role keys in GitHub.

## Before a High-Risk Security or Database Change

- [ ] Export portfolio JSON.
- [ ] Confirm normal password + authenticator login works.
- [ ] Confirm the current session reaches AAL2.
- [ ] Verify recovery-code status without consuming a code.
- [ ] Confirm there is no unfinished emergency-recovery request.
- [ ] Inspect current RLS policies, functions, storage policies, and Edge Function behavior.
- [ ] Use a named Supabase migration for DDL changes.
- [ ] Keep a written rollback/corrective migration plan.
- [ ] Run Supabase Security and Performance Advisors after the change.

## Recovery Scenarios

### 1. Public portfolio is visually broken after a code deployment

1. Identify the last known-good Git commit.
2. Revert the bad frontend commit or restore the affected files from the known-good commit.
3. Let GitHub Pages redeploy.
4. Verify public desktop/mobile rendering and the Admin console.

Data impact: normally none if only frontend files changed.

### 2. Wrong content was published

1. Do not edit the database directly unless necessary.
2. Restore a known-good JSON backup into the working draft.
3. Preview Draft.
4. Confirm all important sections, media URLs, and contact details.
5. Publish Live.
6. Confirm the public portfolio reflects the restored state.

Data impact: live content changes only after republishing.

### 3. Draft data is wrong but Live is correct

Use the current Live state as the recovery source, rebuild the working draft from it, then continue editing. Do not publish until reviewed.

### 4. Uploaded media is wrong or missing

1. Find the original/local backup of the media file.
2. Re-upload it through Admin.
3. Update the draft reference if the URL changed.
4. Preview Draft.
5. Publish Live after confirmation.

Do not assume deleted storage objects are automatically recoverable.

### 5. Password forgotten

Use the Admin password-recovery flow. After resetting the password, normal MFA requirements still apply.

### 6. Authenticator device lost but recovery code is available

Use a single recovery code only through the intended recovery flow. A recovery-code reset is destructive to the current MFA factor and can log out active sessions. Re-enroll a new authenticator immediately afterward and generate/store a fresh recovery-code batch.

### 7. Authenticator device lost and recovery codes are also unavailable

Use the delayed Emergency Recovery flow. It is intentionally not an instant bypass.

Expected protection:

- password authentication
- email verification stages
- 24-hour cooling period
- server-side recovery request state
- fresh verification before final reset
- MFA re-enrollment afterward

If a valid AAL2 session or backup authenticator still exists, prefer that over emergency recovery.

### 8. Recovery code fails unexpectedly

Do not repeatedly guess codes. The recovery endpoint has attempt protection/rate limiting. Check that the code belongs to the latest generated batch and has not already been used. If still signed in at AAL2, regenerate a new set instead of weakening security controls.

### 9. Analytics numbers are polluted by testing

1. Exclude the owner/test browser from analytics.
2. Use Admin Analytics reset only when intentionally clearing test data.
3. Confirm the destructive phrase exactly as requested by the UI.
4. Reopen the public portfolio from a non-excluded browser/device to confirm new tracking.

Analytics reset must not affect content, inbox, media, auth, MFA, recovery codes, or public username settings.

### 10. Admin write actions suddenly fail

Check session AAL first. Sensitive database/storage writes require AAL2. If the session dropped to AAL1, complete the authenticator challenge again rather than weakening RLS/storage policies.

If AAL2 is valid but writes still fail, inspect the latest migration/policy change and use a corrective forward migration.

### 11. Public site cannot read live content

Treat this as a high-priority regression. Verify the public `live` read policy and backend-loader behavior. Do not restore broad anonymous write access. Public users should only receive the minimum read access required for approved live content.

## Production Launch Cleanup

After final QA:

- [ ] Reset test analytics data if desired.
- [ ] Exclude the owner's normal browser from tracking.
- [ ] Confirm the public counter starts from the intended baseline.
- [ ] Export a fresh production JSON backup.
- [ ] Save the final known-good Git commit SHA.
- [ ] Confirm GitHub Pages deployment success.
- [ ] Confirm password + TOTP MFA login.
- [ ] Confirm AAL2 status.
- [ ] Confirm recovery codes are stored securely.
- [ ] Confirm no pending emergency recovery request.
- [ ] Run Security Advisor.
- [ ] Run Performance Advisor.
- [ ] Record any accepted/intentional advisor notices.

## Recovery Priority Order

Use the least destructive option first:

1. Existing valid AAL2 session
2. Primary authenticator
3. Backup authenticator factor, if enrolled
4. Recovery code
5. 24-hour Emergency Recovery
6. Manual backend intervention only after verifying identity, current policies, and the exact failure mode

Do not create a temporary browser-side MFA bypass as a recovery shortcut.

## Emergency Stop Rule

If a recovery or security change behaves differently from the documented flow, stop before deleting MFA factors, recovery-code batches, production storage objects, or live portfolio state. Preserve the current working access and diagnose the exact layer first.
