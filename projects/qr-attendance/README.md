# Clockwise QR Attendance — Setup & Verification

Status (2026-10-22): **public browser demo + owner-deployable Google Apps Script/Sheets source**, NOT an already configured company HR system. No production Google Sheet or Apps Script web-app URL is committed.

## Try the live portfolio demo

Open \`https://knowlexit09.github.io/noel-labasan-portfolio/projects/qr-attendance/\`.

The public preview starts with five fictional employees and synthetic punches. It uses this browser's \`localStorage\`, **not Google Sheets**. Select **Employees** to create/edit employee records, view/download a QR card, or press **Test Scan**. In **QR Scanner**, click Time In/Time Out. **Test Clock** edits simulation time (Philippine local time). Test Present, Late, Absent, On Leave, same-day Time Out, duplicate punches, and CSV export. **Reset Demo** wipes only browser demo storage.

## Deploy the private Google Sheets edition

1. Open Google Apps Script at https://script.google.com/, select **New project** (using the Google account that will manage attendance).
2. Paste \`apps-script/Code.gs\` into the editor's \`Code.gs\` file. Add an **HTML** file named **Index** and paste \`apps-script/Index.html\` (not the GitHub Pages index). Save. Do not publish employee data or deploy open to strangers.
3. In **Project Settings**, set **Time zone: (GMT+08:00) Philippine Standard Time**. In the editor, run **setupAttendance** **once**; grant Google Sheets permission. The function automatically creates a spreadsheet named **Clockwise QR Attendance - Company Database** (or reuses the same ID saved in Script Properties) and four tabs: **Employees**, **Attendance**, **Leaves**, **Audit**. Retrieve the Google Sheet URL from the Apps Script execution logs.
4. Under **Project Settings → Script properties**, verify \`ATTENDANCE_SHEET_ID\` and \`ATTENDANCE_ADMIN_EMAILS\`. The first run adds the owner's active email as the sole admin. To add authorized managers, set \`ATTENDANCE_ADMIN_EMAILS\` to comma-separated exact Google-account emails and **share the backing Google Sheet** with those managers; only add trusted administrators. Do not store passwords or private employee data on GitHub.
5. **Deploy → New deployment → Web app.** Choose **Execute as: User accessing the web app**; **Who has access: Only myself** for an owner-only pilot, or **Only users in your Google Workspace domain** for an internal company domain deployment. **Never use Anyone / Anyone anonymous**, and never use **Execute as me** for this personnel-data version. Share the resulting internal Apps Script web app URL with authorized admins; NOT the public portfolio link.
6. Open the Apps Script web app while signed into an authorized Google account. Add employees and test QR scanning. Official Time In/Time Out use server timestamps, regardless of browser clock or test controls. The production UI loads its frontend from **an immutable GitHub commit pinned in \`apps-script/Index.html\`** plus versioned QR library CDNs.
7. Treat the generated badge value and QR as a credential. Restrict their distribution and supervise the kiosk. Anyone with a copy of an active badge **could impersonate that employee**; this MVP does not offer anti-passback, geofencing, face recognition, individual employee logins, or cryptographically rotating QR proofs.

## Status and record rules

- **Present**: time in at or before \`shiftStart + grace\`; for active employee.
- **Late**: time in after the grace window; still Late after Time Out.
- **Absent**: no time-in 30 minutes after shift start (for today); missing punches on past days are Absent.
- **On Leave**: approved date range overrides Absent. Manager records/revokes leave.
- **Not Yet In**: before today's 30-minute absent cutoff.
- **Timed Out**: after a valid prior Time In. Only one in and one out per employee per Philippine date. Currently same-day day shifts only, no overnight shift support.
- **Inactive**: disabled employee cannot punch and is excluded from active counts.

## Test matrix (recommended manual verification)

| Scenario | Expected |
| --- | --- |
| Create employee | New employee card and unique QR credential appear |
| Edit existing employee | Same ID and token; edited shift/status visible |
| Two employees with different QR codes | Valid credentials map to their own IDs |
| On-time Time In | Present |
| Late Time In | Late |
| Time Out after valid Time In | Timed Out (or Late · Out), retains late minutes |
| Time Out without Time In | Rejected |
| Duplicate Time In / Time Out | Rejected |
| Approved leave and attempted punch | Rejected |
| Inactive employee badge | Rejected |
| Demo test clock +30 min after shift | Unpunched employee becomes Absent |
| CSV export | Only selected date exported, fields quoted safely |
| Live browser test clock | Disabled; production writes server time |
| Unauthorized Google account | Backend rejects access |
| Parallel duplicate same-employee punches | LockScript serializes updates |

## Important limitations / security boundary

- Public demo is only mock data. It is NOT a real employee account system; do not enter real staff details into its sample UI.
- The Google Sheets edition is a **small-company admin-operated MVP**: it loads all rows at startup and is not load-tested for high volume, simultaneous kiosks, payroll, or legal attendance compliance. Apps Script quotas and internet availability apply.
- Google account access, manager allowlist, Sheets sharing and Apps Script locks protect the backend from unauthenticated writes. A copied static QR badge is still replayable at an authorized kiosk. Use stronger identity checks before payroll or disciplinary use.
- Each official punch is saved with Asia/Manila server time and a manager audit entry. Avoid manual edits directly in Sheets; they bypass validation and audit.
- Third-party scanner/QR JS libraries need internet access. Camera works only under HTTPS and with browser permission; manual credential input is provided for accessibility and testing, not as a secure alternative.
- The Apps Script HTML references a **pinned source-code commit** hosted by jsDelivr, which in turn depends on a public GitHub repository. If CDN hosting is blocked or unavailable, UI loading may fail; self-host or bundle approved assets for hardened deployment.
- Data retention, overtime, night shifts, holidays, weekends, shifting schedules, payroll integration, comprehensive PTO approvals and biometric verification are out of MVP scope.
- Back up the Google Sheet and set sensible editor permissions before onboarding real employees. Never publish real attendance exports in the public repository.

## Developer paths

- \`index.html\`: public demo / browser UI
- \`attendance.js\`: client controller with DEMO localStorage and PRODUCTION google.script.run adapters
- \`attendance.css\`: responsive dashboard styles
- \`apps-script/Code.gs\`: Google Sheet creation, authorized CRUD, lock-protected punches, audit log
- \`apps-script/Index.html\`: Apps Script HTML Service copy of UI with immutable asset links
- \`../qr-attendance.html\`: recruiter-facing portfolio case study

## Rollback

All additions are isolated under \`projects/qr-attendance/\` plus new case-study/cover/card entries in existing portfolio files. Revert the feature merge or the targeted project-card config/fragment and new files, without touching other featured projects or Supabase/Admin. Removing static files **does not delete deployed Google Sheets data**; separately revoke Apps Script deployment, retain/back up real business records as needed.