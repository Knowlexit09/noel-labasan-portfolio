# PORTFOLIO MASTER CONTEXT

> **Primary continuity/source-of-truth for future chats**
>
> Repository: `Knowlexit09/noel-labasan-portfolio`  
> Public site: `https://knowlexit09.github.io/noel-labasan-portfolio/`  
> Admin: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`  
> Last consolidated: **2026-10-07 (Asia/Manila) — exact Exponify cover/poster asset update + partner-collaboration continuity**  
> Verified deployment baseline before the exact Exponify cover update: **GitHub Pages Run #282 — success**, head `c853ca7b41f4920e2dc6c9856d5ec3197616be3f`.
> Exponify cover integration validation: **Validate Exponify cover integration Run #1 — success** (`37590939117`), including JS syntax checks, exact PNG SHA-256/size verification, active-path SVG/old-preview absence checks, and preserved MP4 assertions.
>
> **New chats must read this file first, then verify actual `main` and the latest Pages deployment before editing. Do not restart completed work.**

---

# 1. Current user directive — IMPORTANT

The workflow changed after Gatchalian visual QA:

> **Finish and stage the portfolio first. The user will review the completed Draft/release candidate and personally perform the final Publish Live action.**

Therefore:

- do not Publish Live on the user's behalf unless they explicitly change this instruction,
- do not bypass AAL2/RLS with management SQL just to make staging easier,
- keep staging case pages `noindex,nofollow` until final approval,
- use Draft/Preview for final review,
- preserve the owner's final control over publication.

There was one earlier intentional Gatchalian Publish Live action before this directive changed. As a result, backend Live contained the approved Gatchalian Multimedia item at that checkpoint. The Gatchalian case page was subsequently returned to `noindex,nofollow` for prepublication staging. Do not silently rewrite Live through management SQL; use the authenticated Admin workflow for future Live changes.

**2026-10-07 owner update:** the user explicitly confirmed that they clicked **Publish Live** after the Qyntro work. Treat that as an owner-authorized publication event, but do not assume the exact current Live payload without a fresh read-only verification. Continue to leave future publication actions to the owner unless they explicitly request otherwise.

---

# 2. Continuity protocol

1. Read this file first.
2. Verify current `main` and latest Pages run.
3. Re-fetch every file immediately before editing; never use stale SHAs.
4. Preserve **Draft → Preview → Publish Live**.
5. Preserve MFA/AAL2, RLS, analytics/privacy, audit/error logging, and working modules.
6. Keep labels truthful: Client Work, Personal Project, Spec Work, Concept Project, Learning Project.
7. Never expose service-role keys, passwords, recovery codes, GitHub tokens, or other secrets.
8. Do not invent missing portfolio pieces merely to reach a target count.
9. Do not claim the whole portfolio production-final until the final review checklist passes.
10. Update this context after major milestones.

Repository code is authoritative for implementation details. This file is authoritative for accepted intent, decisions, safety rules, status, and roadmap.

---

# 3. Portfolio goal and positioning

The portfolio began as a **Junior Programmer / Java Developer / Application Support / Technical Support** portfolio and is being expanded into a credible hybrid portfolio that can also support **Multimedia Artist / Creative** applications.

Core positioning:

- **Build · Support · Improve.**
- **I build practical systems and help people make technology work.**

Show evidence that Noel can:

- build practical software/business systems,
- understand real operational workflows,
- support/troubleshoot users and systems,
- think about security, auditability, maintainability, and performance,
- create social graphics and short-form advertising concepts,
- explain process/decisions honestly,
- use AI as an assistant while manually reviewing/editing output,
- learn new tools without exaggerating proficiency,
- share useful knowledge through a safe Knowledge Lab.

## Career facts represented

- BS Information Technology — Polytechnic University of the Philippines, San Juan, 2017.
- Programming (Java) NC III Training / TWSP Scholar — 2026, 241 hours.
- Supervised Industry Learning — Aug 3–19, 2026.
- AWS Cloud Quest: Cloud Practitioner — 2026.
- PCN PROMOPRO INC. HRIS Specialist — Sep 2018–Dec 2024.
- PCN PROMOPRO INC. IT Support — Mar–Sep 2018.

Core technical stack represented includes Java 21, JavaFX, SQL/MySQL, Maven, JUnit 5, Google Apps Script/Sheets, PHP, HTML/CSS/JS, Git/GitHub, Postman, XAMPP, Windows troubleshooting, basic networking, and AWS fundamentals.

---

# 4. Main software projects

## BankFlow / PHBank

Java 21 / JavaFX / MySQL / Maven / JUnit 5 / Apache POI banking portfolio with layered architecture, RBAC, KYC, audit history, transactions, loans, security controls, pagination, and export workflows.

## Frozen Meatshop POS

Google Apps Script + Google Sheets + HTML/CSS/JS business operating/POS system covering receiving, box/KG/pack inventory, Open Box, repacking, stock use, sales, receivables/payables, finance, returns, reporting, and audit-friendly records.

## PHP + Google Sheets CRUD

Learning project for CRUD workflows using PHP, Google Sheets, and XAMPP.

Do not let Multimedia work overwrite or diminish these developer/support projects.

---

# 5. Architecture and working systems

Hosted through GitHub Pages from `main` via `.github/workflows/pages.yml`.

Important public/runtime files:

- `assets/js/config.js` — static fallback core content.
- `assets/js/backend-config.js` — public-safe Supabase config + Admin extension loader.
- `assets/js/backend-loader.js` — merges static fallback with remote Live/Draft Preview state.
- `assets/js/future-modules.js` — public Multimedia + Knowledge Lab renderer.
- `assets/css/future.css` — creative module styling.
- `assets/js/multimedia-seed.js` — fail-closed fallback/staging schema.
- `assets/js/multimedia-case-links.js` — homepage case-study routing.
- `assets/js/gatchalian-case-runtime.js` — Gatchalian hero/video/carousel runtime.
- `assets/css/multimedia-case.css` — Gatchalian visual-first case styling.
- `assets/js/gatchalian-client-gallery.js` + `assets/css/gatchalian-client-gallery.css` — More Work gallery/viewer.
- `multimedia/gatchalian-meatshop.html` — Gatchalian case page.
- `multimedia/exponify.html` + `assets/css/exponify-case.css` — Exponify staging case.
- `multimedia/seedlandia.html` + `assets/css/seedlandia-case.css` — Seedlandia staging case.

Important Admin files:

- `admin/admin-creative-manager.js` — Multimedia tools/works + Knowledge Lab Draft manager.
- `admin/admin-creative-media-upload.js` — AAL2-protected featured Gatchalian media uploads.
- `admin/admin-gatchalian-gallery.js` — AAL2-protected Gatchalian clientGallery editor; Draft only.
- `admin/admin-prepublish-staging.js` — idempotent AAL2 Draft-only release-candidate importer.
- `admin/admin-scroll-reset.js` — prevents stale/deep browser scroll from making Admin/login look blank.

Existing systems to preserve:

- responsive shell/mobile nav,
- accessibility/performance hardening,
- visitor counter,
- Contact Delivery + Admin Inbox,
- Resume Manager,
- Project Manager + dialog cancellation fix,
- Analytics / Operations / Audit / Error systems,
- TOTP/AAL2 security,
- recovery/emergency-recovery architecture.

---

# 6. Backend/security architecture

Backend: Supabase project `noel-labasan-portfolio-admin`.

Security model:

- password login,
- verified TOTP MFA,
- owner checks,
- RLS,
- AAL2 for sensitive writes,
- browser contains only public-safe/publishable config,
- no service-role key client-side.

Sensitive areas include portfolio-state writes, revisions/history, inbox mutation, and storage upload/replace/delete.

## Expired-session hardening

Admin REST/Storage calls automatically refresh an expired short-lived access token when a valid refresh token remains. Retry occurs only for real expired-JWT failures. If the refreshed session no longer satisfies AAL2, the owner must verify MFA again. This does **not** bypass RLS/AAL2.

## Current advisor caveats

Do not claim “zero findings.” Known notices remain:

- INFO: RLS enabled with no direct policy on several service-oriented tables.
- WARN: `public.portfolio_security_status()` is a SECURITY DEFINER function callable by authenticated users.
- WARN: Supabase leaked-password protection disabled.
- INFO: several low-traffic indexes are currently reported unused.

Do not blindly remove indexes or change policy/function architecture solely to silence advisors.

---

# 7. Multimedia tools and truthful levels

Working / comfortable:

- Canva
- Photoshop
- CapCut

Learning:

- Blender
- Adobe Illustrator
- Adobe Premiere Pro
- DaVinci Resolve

Do not present learning tools as expert-level skills.

Long-term Multimedia target remains **5–7 strong works**, but quality/truthfulness is more important than reaching a number. Do not turn portfolio mockups into fake completed projects.

---

# 8. Gatchalian Meatshop — Multimedia Project #1

Classification: **Client Work**.

Confirmed:

- real client/business work,
- portfolio display permission okay,
- finished work may be shown,
- current featured campaign pricing confirmed.

## Locked design rule

The approved main campaign visual is **LOCKED**. Do not redesign or replace it unless the user explicitly asks. Factual corrections may be applied without treating them as a redesign.

## Current featured campaign pricing

- Pork Liver — ₱65
- Kasim/Laman — ₱120
- Belly/Liempo — **₱150**
- Drumstick — ₱90
- Fish Fillet — ₱130
- Frozen Pompano — **₱310/kg**

Older ₱145 Liempo and ₱260/kg Pompano values are historical/outdated for the current featured campaign.

## Final video

Canonical final file: `gatchalian campaign meta ads updated.mp4`.

Preferred flow remains food/liempo hook → grouped pricing → vacuum-sealed freshness → cooked-food payoff → branded Order Now CTA. Do not revert to six independent one-second product cards without a new reason.

## Storage/state

Approved cover/video are stored in Supabase Storage under `portfolio-media` and wired to remote portfolio state.

Gatchalian `clientGallery` contains two historical pieces:

1. `Murang Karne — Retail Promo` — Retail Promotion — Previous campaign.
2. `Negosyo Package` — Reseller / Business Promotion — Previous campaign.

Both have explicit historical notes so old pricing is not presented as current.

## Accepted visual direction

Visual-first case study:

1. title/project details + actual vertical campaign video,
2. Featured Campaign slider,
3. More Work for Gatchalian Meatshop,
4. concise Project Overview,
5. concise Creative Process,
6. small client/AI-assistance disclosure.

The More Work gallery uses count-aware two-card desktop layout, one-column mobile, complete contained artwork, readable metadata, historical badges, and enlarged viewer.

User-side visual QA passed after the portrait-card overlap fix. Accepted Gatchalian card-containment runtime anchor: `18711cdd51f49827b21014ed0a4673d39877013f`.

## Current publication caveat

The owner previously clicked Publish Live for Gatchalian before changing the workflow. Backend Live therefore currently contains Gatchalian and Multimedia is ON. After the workflow changed to “finish everything first,” `multimedia/gatchalian-meatshop.html` was returned to `noindex,nofollow` for staging. Do not manipulate Live with management SQL.

---

# 9. Exponify — Multimedia Project #2

Current classification: **Partner Collaboration / Business Development Campaign**.

The user explicitly clarified that Exponify PH is a business partner/collaboration, not a paying client. The portfolio must not label this as Client Work. The work is presented as advertising and client-acquisition material created to help the partnership attract prospective clients.

Case:

- `multimedia/exponify.html`
- `assets/css/exponify-case.css`
- `assets/js/exponify-case-runtime.js`
- remains `noindex,nofollow` until a separate indexing approval/pass
- approved proposal cover/design: Canva `DAHXThERlt8`
- current Canva view URL: `https://www.canva.com/d/s1WqbUAYLo4TXrM`
- canonical static portfolio cover/poster: `assets/images/exponify-ph-client-acquisition-cover.png` — exact uploaded final Exponify PH Digital Growth Blueprint image (1536×1024; SHA-256 `aca4f00204dc1c52f6d3103b2cfbb516fcaae47e35a4804f76275ab322cb92d1`)
- the same canonical PNG is forced on the Multimedia card, case hero/featured campaign artwork, and video poster so stale Draft/Live/Canva thumbnails cannot reappear
- verified uploaded MP4 remains bound as the campaign video

Approved campaign/proposal direction includes:

- Free Business Growth Audit,
- Stop Losing Leads / follow-up campaign,
- Inquiry → Lead → Follow-up → Sales → Reports funnel,
- 30-Day Growth Starter,
- Ads + CRM + Follow-up + reporting integration,
- industry-specific campaign concepts,
- before/after workflow messaging,
- partner/referral program,
- growth/consultation CTAs.

Portfolio role: **Campaign Concept · Ad Creative · Visual Direction · Client-Acquisition Materials · Video Editing**.

Truthfulness rule: do not use fake client status, fabricated testimonials, or unverified metrics/results. Concept messaging may describe intended benefits, but performance claims must be verified before presenting them as actual outcomes.

---

# 10. Seedlandia — Multimedia Project #3

Classification: **Personal Project / Game Development Planning**.

Case:

- `multimedia/seedlandia.html`
- `assets/css/seedlandia-case.css`
- remains `noindex,nofollow` until a separate indexing approval/pass
- hero/card now use the approved world-layout proposal through a one-page Canva embed (`DAHXTcAQrGU`)
- full approved 10-board set is embedded from Canva design `DAHXTb6It3w`
- current Canva view URL: `https://www.canva.com/d/H-8a-K479ugaQwY`

Approved planning boards cover: world-layout proposal, Rootstep Valley map proposal, Crescentwild Isle map proposal, HUD/game-interface proposal, Lumi/Pebblekin/Sprig pet direction, progression/discovery/growth systems, boss encounters and raid features, community/economy/world features, gear/equipment/upgrade systems, and wings/flight/gliding systems.

Case-study scope includes:

- Mother Tree Village / central home landmark,
- four starter Player Lands,
- Green Meadows,
- Whispering Forest,
- Crystal Cavern,
- Mountain Region,
- Duel Arena,
- future biome/expansion planning,
- compact/mobile-friendly HUD direction,
- farming/discovery/collection/progression thinking.

Truthfulness rule: Seedlandia is shown as an ongoing personal game-development planning project. Map/HUD/pet/feature boards are concepts/planning proposals, not final in-game screenshots, and roadmap systems are not claimed as already implemented.

---

# 11. Knowledge Lab — STAGED

Public runtime already supports:

- category/search,
- detail dialog,
- copyable code,
- sandboxed HTML/CSS preview,
- CSP that prevents arbitrary scripts/network use,
- Java and other runtimes as copy/explanation only.

Prepared Draft review set contains three starter entries:

1. Photoshop — Smart Object / non-destructive transform workflow.
2. HTML/CSS — responsive `repeat(auto-fit, minmax(...))` grid recipe; safe preview enabled.
3. Java — defensive numeric input validation/parsing; copy-only.

Do not enable arbitrary browser JavaScript execution in v1.

---

# 12. Prepublication Draft staging tool

`admin/admin-prepublish-staging.js` adds **Prepare review set** to Creative Admin.

It is the intended bridge between repository staging and the actual server Draft.

Behavior:

- requires signed-in AAL2,
- refuses while unrelated Admin changes are unsaved,
- reads latest server state,
- writes **Draft only**,
- preserves unrelated state and Gatchalian data,
- upserts Exponify + Seedlandia by title,
- upserts 3 Knowledge Lab starter entries,
- enables Multimedia + Knowledge Lab in Draft for Preview,
- uses public-safe absolute cover URLs,
- is idempotent,
- never writes Live.

This exists because management SQL must not be used to bypass the user's authenticated publication architecture.

---

# 13. Admin UX fixes completed

- Project dialog Cancel/Close bypasses required-field validation and supports Escape/backdrop/focus return.
- Creative Manager edits preserve richer specialized metadata instead of replacing whole objects.
- Expired Supabase Admin token refresh/retry is hardened.
- Gatchalian gallery uploader is Draft-only and AAL2-protected.
- `admin-scroll-reset.js` disables stale browser scroll restoration and resets to top when login/Admin views become visible, addressing the blank-dark-page symptom observed in Chrome.

---

# 14. Non-destructive QA completed for this release candidate

Backend check at the QA checkpoint:

- open error events: **0**
- error events in previous 7 days: **0**
- audit failures in previous 7 days: **0**

Repository secret sanity searches found no `service_role`, `SUPABASE_SERVICE_ROLE`, or `ghp_` token strings.

Indexing safety:

- `/admin/` remains disallowed by `robots.txt`,
- Gatchalian/Exponify/Seedlandia staging pages are `noindex,nofollow`,
- staging case pages are not currently in `sitemap.xml`.

Security/performance advisors were reviewed; known caveats above remain and no new Multimedia-specific security regression was identified.

Full release-candidate checklist: `docs/PREPUBLICATION_RELEASE_CANDIDATE.md`.

---

# 15. Remote-state note — historical checkpoint; re-verify before current Live claims

The read-only verification below is the **2026-10-04 historical checkpoint**. It is no longer authoritative for current Live because the owner later confirmed a Publish Live action after Qyntro. Run a fresh read-only check before stating current server Draft/Live counts.

Historical 2026-10-04 state:

Draft:

- Multimedia enabled: true
- Multimedia items: 1 (Gatchalian)
- Knowledge Lab enabled: false
- Knowledge Lab items: 0

Live:

- Multimedia enabled: true
- Multimedia items: 1 (Gatchalian; from the earlier owner publication)
- Knowledge Lab enabled: false
- Knowledge Lab items: 0

The Exponify/Seedlandia/Knowledge Lab release-candidate content is currently staged in repository code and the secure Draft-only import tool. It must not be described as already present in server Draft until the owner runs **Prepare review set** successfully.

---

# 16. Review workflow from here

The owner has already confirmed a Publish Live action after Qyntro. For new Seedlandia metadata changes, keep the same owner-controlled workflow:

1. Review the deployed Seedlandia public card/case page on desktop and mobile.
2. If backend metadata should match the new Seedlandia title/description, open Admin → Creative and verify AAL2.
3. Run **Prepare review set** once; it now upgrades the legacy Seedlandia title idempotently rather than creating a duplicate.
4. Click **Preview draft** and verify Seedlandia is **Personal Project / Game Development Planning** with the updated description/tags.
5. Only the owner should click **Publish live** again when satisfied.
6. Remove `noindex,nofollow` and update sitemap only in a separate explicit indexing pass.

The user owns the final Publish Live action.

---

# 17. What is intentionally NOT called complete

Long-term target remains 5–7 strong creative works. Current release candidate has three evidence-backed case directions plus Knowledge Lab starters.

Do not fabricate:

- Brand Identity Concept,
- Product Photo Enhancement,
- Motion Logo Intro,
- Social Media Thumbnail Set,
- standalone 3D render,

merely because older portfolio mockup images depict cards with those names. Add them only when genuine standalone source/final work is verified and truthfully classifiable.

Verified Library does contain some product flyer/template assets and Gatchalian label/design collections, but they are not automatically separate publication-ready portfolio projects.

---

# 18. DONE vs PENDING

## DONE / materially complete

- core developer/support portfolio foundation,
- GitHub Pages deployment,
- responsive/a11y/performance foundation,
- visitor counter,
- Contact Delivery + Admin Inbox,
- Resume Manager,
- Project Manager/dialog fix,
- secure Supabase Admin foundation,
- TOTP/AAL2 + recovery architecture,
- analytics/operations/audit/error systems,
- Creative Manager + safe public Multimedia/Knowledge Lab runtime,
- Gatchalian real-client case, stored cover/video, final visual layout, two historical More Work pieces, and visual QA pass,
- auth-expiry refresh hardening,
- Admin scroll-restoration guard,
- Exponify Partner Collaboration / Business Development Campaign case with approved client-acquisition proposal cover and verified video,
- Seedlandia Personal Project / Game Development Planning case with an approved embedded 10-board Canva planning set,
- 3 Knowledge Lab starter drafts in prepared release pack,
- AAL2 Draft-only Prepare review set tool,
- non-destructive backend/security/performance/repository sanity pass,
- prepublication release-candidate checklist.

## PENDING / next work

1. Review the deployed Seedlandia card and case page across desktop/mobile.
2. If desired, owner runs **Prepare review set** so Draft/backend metadata matches the new Seedlandia title and planning-board scope, then verifies Preview Draft and personally Publish Live again.
3. Apply any final visual/content corrections found in review.
4. Keep Exponify classified as **Partner Collaboration / Business Development Campaign** unless the real relationship changes; do not relabel as Client Work without new verified facts.
5. Remove approved case-page noindex directives and update sitemap only in a separate explicit indexing pass.
6. Perform final public smoke check and create production baseline/changelog marker.
7. Continue toward 5–7 strong creative works later only with verified genuine assets.

---

# 19. Immediate prompt for a new chat

> Continue my `Knowlexit09/noel-labasan-portfolio` project. First read `PORTFOLIO_MASTER_CONTEXT.md` and `docs/PREPUBLICATION_RELEASE_CANDIDATE.md`, then verify actual `main` and the latest GitHub Pages deployment. Do not restart completed work. Preserve Draft → Preview → Publish Live, MFA/AAL2, RLS, audit/error logging, and truthful work labels. The current directive is: finish/stage everything first; I will review and personally perform the final Publish Live action. Gatchalian visual QA already passed and its case page is back to noindex staging. Exponify is staged as Partner Collaboration / Business Development Campaign, Seedlandia as Personal Project, and a secure Draft-only Prepare review set Admin action is available to load those plus 3 Knowledge Lab starters into server Draft. Continue from the latest PENDING section.

---

# 20. Risk standard and rollback

For every meaningful patch report:

- what could go wrong,
- risk level,
- safeguards,
- data/security impact,
- rollback path.

Current release-candidate risk: **Low–Medium**.

Primary risks:

- premature publication/indexing,
- stale Draft state,
- incorrect work classification,
- broken media URLs,
- old pricing shown as current,
- responsive regressions,
- weakening auth/RLS for convenience.

Safeguards:

- staging pages use noindex,
- Draft-only AAL2 staging importer,
- RLS,
- historical labels,
- fail-closed modules,
- explicit Client/Spec/Personal labels,
- non-destructive QA first,
- user-owned final Publish action.

Business-data impact: none. Portfolio work does not modify Frozen Meatshop POS sales, accounting, inventory, or operational records.

Rollback anchors:

- pre-gallery infrastructure: `040c4a2edb2b6117dfb645541378187c7ce8430b`
- pre-final-gallery/auth baseline: `a3b1cd15dafb2de17ba3b00672a3ab2cbd03922f`
- Gatchalian accepted containment runtime: `18711cdd51f49827b21014ed0a4673d39877013f`
- start of new prepublication staging phase: `73d1911eabb992ae0d344b25303f503665f2c23d`
- verified staging/checklist baseline immediately before this context update: `23ae1a750091d5d49e5b5cbe95fa20e20058abd5`
