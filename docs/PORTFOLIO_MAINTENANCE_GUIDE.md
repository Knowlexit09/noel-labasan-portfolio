# Portfolio Maintenance Guide

Last updated: 2026-09-16

This document is the operational reference for Noel Labasan's portfolio and private Maintenance Console.

## Production URLs

- Public portfolio: `https://knowlexit09.github.io/noel-labasan-portfolio/`
- Admin console: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`
- Source repository: `Knowlexit09/noel-labasan-portfolio`
- Production branch: `main`

## Architecture

The portfolio is a GitHub Pages static frontend backed by Supabase.

Main responsibilities:

- GitHub Pages: public portfolio and private admin frontend.
- Supabase Auth: owner authentication, password recovery, TOTP MFA, AAL1/AAL2 session state.
- Supabase Postgres: live/draft state, revision history, inbox, analytics, MFA recovery metadata.
- Supabase Storage: portfolio media and document uploads.
- Supabase Edge Functions: public contact submission, analytics processing, and MFA recovery actions.

Do not place service-role keys, passwords, recovery codes, authenticator secrets, or other private credentials in GitHub files or browser JavaScript.

## Publishing Model

The site follows a controlled workflow:

1. Edit content in Maintenance Console.
2. Save Draft.
3. Preview Draft.
4. Publish Live only after review.

Public visitors should read only the approved `live` portfolio state. Draft data and admin-only records must remain private.

## Security Baseline

Current design rules:

- Public portfolio content can be read without login only where explicitly allowed.
- Sensitive database and storage writes require an authenticated owner session at AAL2.
- TOTP authenticator MFA is the normal second factor.
- Recovery codes are emergency credentials and must never be committed to GitHub.
- The delayed emergency recovery path uses a 24-hour cooling period.
- Analytics and recovery tables are server-side only and intentionally have no direct browser RLS policies.
- Raw visitor IP addresses are not stored by portfolio analytics.
- Public browser code uses only the Supabase project URL and publishable key.

## Admin Areas

### Overview

Shows portfolio status, published modules, managed media, testimonials, and analytics summary cards.

### Modules

Controls which public sections are visible. Changing a module in Admin affects the working draft until published.

### Projects / Content / Testimonials

Used to maintain public portfolio content without editing source files manually.

### Media / Resume

Used to upload and assign portfolio images and documents. Upload/write operations are protected by AAL2.

### Inbox

Owner-only contact-message management. Public visitors submit messages through the contact-delivery flow rather than direct table access.

### Security

Contains session information, password recovery, authenticator MFA, recovery codes, and emergency recovery controls.

### Analytics

Admin analytics includes visitor and page-view information. The public site shows only the simple counter format:

`@knowlexit · N visit(s)`

The public username is configurable from Admin Analytics.

## Analytics Definitions

Keep these labels distinct:

- **Visitors Today**: estimated unique browser visitors today.
- **Visitors · 7 Days**: estimated unique browser visitors during the last seven days.
- **Total Views**: recorded public page views.
- **Public Visits**: session-oriented visit count displayed publicly as `N visit(s)`.

Analytics is privacy-aware and approximate. Incognito mode, cleared browser storage, blockers, multiple devices, and bot filtering can cause counts to differ from real-world people.

Use **Exclude this browser** when doing repeated owner/admin testing from the same browser. Use **Reset analytics data** only after intentional confirmation; it must not delete portfolio content, media, inbox records, authentication data, or MFA configuration.

## Safe Change Procedure

Before a medium/high-risk change:

1. Confirm the current production Git commit.
2. Export the current portfolio JSON backup from Admin.
3. Verify the current TOTP authenticator still works and recovery codes are stored safely.
4. For database changes, inspect current policies/functions before applying migrations.
5. Use forward migrations for schema changes; do not edit production schema blindly.
6. Deploy frontend changes to `main` and confirm GitHub Pages workflow success.
7. Run Supabase Security Advisor and Performance Advisor after database/security changes.
8. Perform targeted testing before declaring the change complete.

## Rollback Rules

### Frontend/code regression

Revert to the last known-good GitHub commit, redeploy GitHub Pages, then verify the public and admin pages.

### Bad portfolio content publish

Restore a known-good JSON backup into the working draft, preview it, and publish only after verification. Revision history may also help identify an earlier published state.

### Database/security regression

Prefer a new corrective forward migration. Avoid manually deleting or rewriting migration history. Preserve public live-read behavior while repairing admin-write authorization.

### Media/document problem

Re-upload from a trusted local backup if available, update the draft reference, preview, then publish. Do not assume a deleted storage object can always be recovered.

### Analytics problem

Analytics can be reset independently. Do not reset portfolio states, inbox, media, authentication, MFA, or recovery data when the issue is only analytics.

## Known Advisor Notes

Some Supabase advisor notices are expected by design:

- Server-only tables may report `RLS Enabled No Policy` because browser roles intentionally receive no direct table policies.
- `portfolio_security_status()` is an intentional owner-restricted SECURITY DEFINER function and may be flagged by the advisor.
- Leaked-password protection availability depends on the Supabase plan/configuration.
- Newly created or low-volume indexes may temporarily appear as unused.

Do not change a security control only to make an informational advisor notice disappear. Confirm whether the notice reflects an actual exposure first.

## Final QA Gate

Before considering the portfolio production-ready, complete the separate final QA checklist covering public rendering, analytics, AAL2 admin writes, publishing, uploads, inbox, sessions, recovery codes, emergency recovery, logout behavior, and Supabase advisors.
