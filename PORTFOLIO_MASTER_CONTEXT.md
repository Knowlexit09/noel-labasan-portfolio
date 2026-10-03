# PORTFOLIO MASTER CONTEXT

> **Primary continuity/source-of-truth file for future chats**
>
> Repository: `Knowlexit09/noel-labasan-portfolio`
> Public site: `https://knowlexit09.github.io/noel-labasan-portfolio/`
> Admin: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`
> Last consolidated: **2026-10-03 evening (Asia/Manila)**
> Latest verified GitHub Pages deployment at consolidation: **Run #158 — success**, head `014255df5fc262e642d905f62956975526e8bcc6`.
>
> **New chats must read this file first, then verify the actual `main` branch and latest deployment before changing anything. Do not restart finished work or silently redesign approved assets.**

---

# 1. Continuity protocol

When continuing this portfolio project:

1. Read this file first.
2. Verify current `main` and the latest GitHub Pages workflow before editing.
3. Re-fetch every file immediately before changing it; never rely on stale SHAs.
4. Preserve the existing **Draft -> Preview -> Publish Live** workflow.
5. Preserve MFA/AAL2, RLS, analytics/privacy, audit/error logging, and existing working modules.
6. Keep work labels truthful: Client Work, Personal Project, Concept Project, Spec Work, or Learning Project.
7. Never expose service-role keys, passwords, recovery codes, GitHub tokens, or other secrets in this public repository.
8. Creative modules remain fail-closed until intentionally published.
9. Do not call the whole portfolio final until the final QA checklist passes.
10. Update this file after each major milestone.

If this file conflicts with actual repository code, repository code is authoritative for implementation state; this file remains authoritative for accepted product intent, decisions, work status, and roadmap.

---

# 2. Overall goal and positioning

The portfolio started as a **Junior Programmer / Java Developer / Application Support / Technical Support** portfolio and is being expanded into a credible hybrid portfolio that can also support **Multimedia Artist / Creative** applications.

Core positioning:

- **Build · Support · Improve.**
- **I build practical systems and help people make technology work.**

The portfolio should show that Noel can:

- build practical software/business systems,
- understand real operational workflows,
- support users and troubleshoot systems,
- think about security, auditability, and maintainability,
- create social media graphics and short-form video campaigns,
- explain process and decisions,
- use AI as an assistant while manually reviewing/editing output,
- learn new tools honestly,
- share useful knowledge through a Knowledge Lab.

Do not exaggerate skill levels or present learning tools as expert-level skills.

---

# 3. Career/profile context

## Education / training

- BS Information Technology — Polytechnic University of the Philippines, San Juan, 2017.
- Programming (Java) NC III Training — Center for International Industries Competence Corp. / TWSP Scholar, Jun 13–Jul 31, 2026, 241 hours.
- Supervised Industry Learning — 15 days, Aug 3–19, 2026.
- AWS Cloud Quest: Cloud Practitioner — 2026.

## Experience

### PCN PROMOPRO INC.

- HRIS Specialist — Sep 24, 2018 to Dec 31, 2024.
- IT Support — Mar 4, 2018 to Sep 23, 2018.

## Technical stack represented

- Java 21 / Core Java
- JavaFX
- SQL / MySQL
- Maven
- JUnit 5
- Google Apps Script
- Google Sheets
- PHP
- HTML / CSS / JavaScript
- Git / GitHub
- Postman
- XAMPP
- Windows troubleshooting
- basic networking
- AWS fundamentals

---

# 4. Main software projects

## BankFlow / PHBank

Java 21 / JavaFX / MySQL / Maven / JUnit 5 / Apache POI project showing layered architecture, RBAC, KYC, audit history, transactions, loans, security controls, pagination, and Excel export.

## Frozen Meatshop POS

Google Apps Script + Google Sheets + HTML/CSS/JS business operating/POS system covering stock receiving, box/KG/pack inventory, Open Box, repacking, stock use, sales, receivables, payables, finance, returns, reporting, and audit-friendly records.

## PHP + Google Sheets CRUD

Smaller learning project using PHP, Google Sheets, and XAMPP to practice CRUD workflows.

---

# 5. Portfolio architecture and working systems

Hosted through GitHub Pages from `main` using `.github/workflows/pages.yml`.

Important public files include:

- `assets/js/config.js` — static fallback content.
- `assets/js/backend-config.js` — public-safe backend config.
- `assets/js/backend-loader.js` — merges static fallback with remote Live / Draft Preview state.
- `assets/js/future-modules.js` — public Multimedia + Knowledge Lab rendering/runtime.
- `assets/css/future.css` — creative/future module styling.
- `assets/js/multimedia-seed.js` — staged creative fallback schema.
- `assets/js/gatchalian-case-runtime.js` — Gatchalian case-study media + carousel runtime.
- `assets/css/multimedia-case.css` — Gatchalian visual showcase styling.
- `multimedia/gatchalian-meatshop.html` — Gatchalian case-study/showcase page.

Important Admin file:

- `admin/admin-creative-manager.js` — manages Multimedia tools, Multimedia works, Knowledge Lab entries, module toggles, and media upload through Draft first.

Existing systems to preserve:

- responsive shell / mobile nav,
- accessibility/performance hardening,
- visitor counter,
- Contact Delivery + Admin Inbox,
- Resume Manager foundation,
- Project Manager + cancellation patch,
- Analytics / Operations / Audit / Error systems,
- TOTP/AAL2 security,
- recovery/emergency-recovery architecture,
- public `future-modules.js` creative renderer.

---

# 6. Backend/security architecture

Backend: Supabase.

Security model:

- password login,
- verified TOTP MFA,
- exact-owner checks,
- RLS,
- AAL2 required for sensitive writes,
- browser contains only public-safe config,
- no service-role key client-side.

Sensitive AAL2 areas include portfolio-state writes, revision/history operations, inbox mutation, and storage upload/replace/delete.

Do not weaken authentication or RLS to simplify maintenance.

Known advisor caveat: do not claim “zero findings.” Previously accepted/informational findings may include service-only RLS patterns, SECURITY DEFINER warning for the security-status helper, leaked-password protection plan limitation, and unused-index information.

---

# 7. Multimedia tools and truthful levels

## Working / comfortable

- Canva
- Photoshop
- CapCut

## Learning

- Blender
- Adobe Illustrator
- Adobe Premiere Pro
- DaVinci Resolve

Learning roadmap remains:

- Illustrator: vector basics -> shapes/Pathfinder -> Pen Tool -> typography -> logo/poster -> export.
- Premiere: import -> timeline -> cuts/transitions -> text/subtitles -> audio -> basic color -> vertical reel -> export.
- Blender: later create a simple 3D product/scene render and label it `Learning Project`.

---

# 8. Multimedia portfolio strategy

Target **5–7 strong creative works**, not many weak pieces.

Recommended mix:

- social ad campaign,
- carousel/campaign system,
- short-form video ad,
- branding/identity concept,
- banner/hero/thumbnail,
- motion/logo animation,
- Photoshop before/after or composite,
- optional 3D learning piece.

Public Multimedia categories:

- Graphic Design
- Video Editing
- Branding
- Ads & Campaigns
- Motion Graphics
- 3D / Renders

The Multimedia presentation should feel more visual/editorial than the software-project pages: larger artwork/video, less report-like text, minimal borders, more open space.

Do not fake process evidence. Only show genuine drafts, before/after material, storyboard/timeline screenshots, or source-process proof that actually exists.

---

# 9. Gatchalian Meatshop — Featured Multimedia Project #1

## Classification

**Client Work**

The user confirmed:

- Gatchalian Meatshop is real client/business work,
- portfolio display permission is okay,
- finished work may be shown publicly,
- current campaign pricing used in the final revision was confirmed.

Recommended disclosure:

> Client work: Gatchalian Meatshop. Social media campaign (graphics + short-form video). AI-assisted visuals were used in parts of the workflow; final selection, layout, branding, text/pricing, sequencing, and editing were manually reviewed and assembled.

## Official logo rule

The latest original logo supplied by the user is authoritative. Do not redesign/reinterpret it unless explicitly asked for a rebrand concept.

## Locked campaign artwork

The approved top/main Gatchalian campaign visual is **LOCKED**.

> **Do not redesign or replace the approved main campaign visual.**

Only explicit factual/data corrections requested by the user may be applied without treating it as a redesign.

## Current approved pricing

### Pork

- Pork Liver — ₱65
- Kasim/Laman — ₱120
- Belly/Liempo — **₱150**

### Chicken

- Drumstick — ₱90

### Seafood

- Fish Fillet — ₱130
- Frozen Pompano — **₱310/kg**

Older ₱145 Belly/Liempo and ₱260/kg Frozen Pompano values are archived/outdated for the current campaign revision.

## Contact/store details used in campaign

- Phone: `0968-129-3003`
- Facebook: Gatchalian Meatshop Premium Meat
- Address: D. Vicencio cor. A. Bonifacio St., Brgy. Sta. Lucia, San Juan City
- Store hours: Mon–Sat 7:00 AM–6:00 PM

## Final video

Canonical current final file:

**`gatchalian campaign meta ads updated.mp4`**

Archive/backup:

- `gatchalian campaign meta ads.mp4`
- `gatchalian campaign ads.mp4`

Master narration direction:

> Fresh meat deals para sa mas sulit na ulam! Pork, chicken, at seafood—quality meat sa presyong swak sa budget. Selected items are vacuum sealed para fresh, safe, at convenient. Handa na para sa ulam ng buong pamilya. Order na sa Gatchalian Meatshop Premium Meat!

Preferred video flow:

- food/liempo hook,
- grouped Pork + Chicken + Seafood pricing visual,
- vacuum-sealed/freshness section,
- cooked-food/ulam payoff,
- branded Order Now CTA.

Do not return to six independent one-second product cards unless there is a specific new reason.

## Tool/cost decisions

- HeyGen: explicitly rejected.
- Runway: do not use if paid credits/subscription are required.
- Google Flow: used selectively while credits were available; do not assume old credit pricing.
- CapCut: preferred final assembly/editor.
- Separate AI voice used for consistent narration.

---

# 10. Gatchalian media/storage state — CURRENT

The earlier “media not wired” blocker is **resolved**.

The corrected campaign board and final updated MP4 were uploaded through the Admin to Supabase Storage under the `portfolio-media` bucket, in the Gatchalian Multimedia path.

Current storage workflow:

- `portfolio-media` supports the required PNG/JPEG/WebP/MP4 MIME types.
- bucket limit was adjusted to accommodate the final video; Admin uploader remains intentionally below that ceiling.
- uploads remain owner/AAL2 protected.
- Admin Creative flow now supports the Gatchalian starter + campaign cover + final campaign video upload.

Current portfolio state:

- Draft contains the Gatchalian Multimedia item and stable media URLs.
- Draft Multimedia is enabled for preview/QA.
- Live Multimedia remains intentionally **OFF**.
- case-study page remains `noindex,nofollow` until intentional publication.
- direct case-study runtime received a fix so the approved stored video/cover can render for case-page QA even when the Live Multimedia module is still off.
- latest verified deployment for that direct-media/cache fix: **GitHub Pages Run #158 — success**.
- post-deploy visual verification of the direct-video fix should still be performed in the browser before final publication.

Do not publish Live until focused Gatchalian QA passes.

---

# 11. Current Gatchalian case-study layout — ACCEPTED DIRECTION

The old report/document-style case study was rejected because it did not feel like a creative portfolio.

Current accepted direction is a **visual-first showcase**:

1. Hero: project title/details on the left, **actual vertical campaign video on the right**.
2. Campaign creatives below the hero.
3. Concise Project Overview cards.
4. Concise Creative Process: Concept -> Design -> Motion -> Final.
5. Small client/AI-assistance disclosure in the footer.

The Draft Preview badge is **not a live-site issue**; it is expected QA UI and should disappear outside Draft Preview.

## Current highest-priority visual issue

The campaign carousel still needs improvement.

Current implementation derives multiple carousel views by cropping one full campaign-board image. This creates:

- cropped artwork,
- cut-off poster details,
- caption overlap with the artwork,
- a weaker portfolio impression.

**Next carousel fix should:**

- use full-contained artwork instead of aggressive cropping,
- keep the main campaign poster fully visible,
- keep the supporting Liempo + Order Now pair fully visible,
- keep the full campaign board fully visible,
- place captions in a separate dark caption bar below each image, not over the artwork,
- optionally support click/tap lightbox/enlarged viewing,
- use `object-fit: contain` / equivalent visual behavior,
- preserve swipe/slider behavior on mobile.

Also improve muted-gray text contrast slightly where needed.

Video should remain fully visible in its 9:16 frame; do not CSS-crop meaningful text from the actual video.

---

# 12. NEW client-work collection plan — Gatchalian

The user supplied many other real Gatchalian Meatshop creatives. Do **not** dump all of them into the Featured Campaign carousel.

Preferred information architecture:

**Multimedia -> Client Work -> Gatchalian Meatshop**

Inside Gatchalian:

### A. Featured Campaign

Current `Pork, Chicken at Seafood` campaign + final Meta video. This remains the strongest hero project.

### B. More Work for Gatchalian Meatshop

Create a clean gallery/slider/collection for other finished client work, such as:

- Fresh Meat Deals / promotional posters,
- Murang Karne-type retail promos,
- Discover Meat Satisfaction-style campaign pieces,
- Negosyo Package materials,
- Retail Pricelist designs,
- Fresh Vegetables & Fruits / Fresh Produce Pricelist,
- reseller/business materials,
- other promotional flyers/posts supplied by the user.

A file/library search already found Gatchalian assets including examples such as `Gatchalian Meatshop Negosyo Package.png`, `Gatchalian Meatshop Promo Flyer.png`, and `Gatchalian Meatshop Fresh Produce Pricelist.png`. Verify each actual asset before publishing it.

### Client-work safety rules

Finished client work may be shown because the user confirmed permission, but:

- do not expose confidential/internal information,
- do not expose personal/customer data,
- do not redistribute licensed/stock source assets separately; show finished compositions,
- do not imply ownership of the client brand/logo,
- historical posters with older prices must be labeled as previous/historical campaign work, not current offers.

Suggested context label for older pieces:

> Selected client work · Previous campaign. Pricing shown reflects the original campaign period.

If the Gatchalian collection becomes large, later create a dedicated client collection route such as `/clients/gatchalian-meatshop/` while keeping the current campaign as the featured case study.

---

# 13. Multimedia roadmap after Gatchalian

## Project #2 — Exponify

Corporate/tech/business visual language, deliberately different from Gatchalian.

Possible deliverables:

- problem/solution social ad,
- short explainer/video ad,
- carousel,
- branded CTA motion piece.

## Project #3 — Brand identity concept

Fictional/personal brand system: logo/mark, palette, typography, social applications, mockups. Label as concept work.

## Project #4 — Photo manipulation / product composite

Show Photoshop skill with a genuine before/after presentation.

## Project #5 — Motion / logo animation

Short motion piece; can begin in CapCut and later expand to Premiere/other tools.

## Project #6 — 3D / Blender learning piece

Simple product/scene render labeled `Learning Project`.

---

# 14. Knowledge Lab plan

Working name: **Knowledge Lab**

Subtitle: **Shortcuts, snippets, experiments, and practical tips I use.**

Possible content:

- Photoshop shortcuts/tips,
- Canva tricks,
- Blender shortcuts,
- Premiere / DaVinci / Illustrator notes,
- Java snippets/components,
- HTML/CSS/JS examples,
- Apps Script automation,
- Google Sheets techniques,
- Git/GitHub commands.

Recommended entry structure:

`Problem -> Quick Tip -> Example -> Try It -> Why It Works -> Common Mistake`

Safe runnable direction:

- HTML/CSS preview may use a sandboxed iframe.
- V1 should not allow arbitrary user-authored JavaScript/network execution.
- Java should be code + explanation + copy + simulated output, not advertised as browser-native runnable.
- A true Java playground later requires isolated server/container execution with CPU/time/memory/filesystem/network limits.

---

# 15. Final QA preference

The user prefers **one-bagsak final QA near the end**, not destructive retesting after every small patch.

Before production baseline/release verify:

## Public site

- main sections,
- visitor counter,
- mobile nav,
- keyboard/a11y,
- responsive layout,
- light/dark themes,
- search,
- external links.

## Multimedia

- Gatchalian case layout desktop + mobile,
- direct and Draft Preview video playback,
- corrected campaign board,
- carousel full-image presentation / no caption overlap,
- category filter/search,
- correct `Client Work` label,
- no broken media URLs,
- no autoplay sound,
- current featured campaign prices correct,
- historical work clearly distinguished from current campaign pricing,
- `noindex` removed only when publication is intended.

## Admin

- password + TOTP AAL2,
- Creative Manager load/save,
- media upload,
- Draft -> Preview -> Publish Live,
- unrelated state preserved,
- Resume Manager,
- Project Manager close behavior,
- Inbox,
- Analytics,
- Operations/Audit/Error logs.

## Security

- AAL1 sensitive writes blocked,
- AAL2 writes succeed where expected,
- RLS remains fail-closed,
- no secrets in frontend/repo,
- recovery flows non-destructive tests first,
- destructive recovery tests last,
- review advisor findings without falsely claiming accepted findings are fixed.

After final QA:

- reset analytics test data if appropriate,
- exclude owner browser if practical,
- create production baseline / changelog / release marker.

---

# 16. Current DONE vs PENDING

## DONE / materially complete

- core developer/support portfolio foundation,
- GitHub Pages deployment,
- responsive/accessibility/performance foundation,
- visitor counter,
- Contact Delivery + Admin Inbox,
- Resume Manager foundation,
- Project Manager + cancel patch,
- Supabase secure Admin foundation,
- TOTP/AAL2,
- recovery/emergency-recovery architecture,
- analytics/operations/audit/error systems,
- Admin Creative Manager foundation,
- public Multimedia/Knowledge Lab renderer foundation,
- Gatchalian real-client confirmation + portfolio permission,
- Gatchalian locked campaign design,
- corrected current prices: Belly/Liempo ₱150 and Frozen Pompano ₱310/kg,
- final updated video selected,
- corrected poster + final MP4 uploaded to stable Supabase Storage,
- Draft Gatchalian Multimedia item with stored media URLs,
- video-led visual portfolio case layout,
- direct case runtime fallback/media fix deployed,
- latest verified Pages deployment #158 successful,
- decision made to create a broader Gatchalian Client Work collection instead of stuffing all posters into the Featured Campaign slider.

## PENDING / next work

1. Browser-verify the latest direct video fix after Run #158.
2. Fix Featured Campaign carousel: full-contained visuals, no crop, separate captions, optional lightbox.
3. Slightly improve muted-text contrast where needed.
4. Build **More Work for Gatchalian Meatshop** client gallery using verified finished client assets.
5. Mark historical-price pieces clearly as previous campaigns.
6. Focused desktop/mobile QA of Gatchalian page.
7. Remove `noindex,nofollow` only when intentional publication is approved.
8. Publish/enable Multimedia through Draft -> Preview -> Publish Live only after QA.
9. Add Exponify as Project #2 with a different corporate/tech visual language.
10. Build toward 5–7 strong creative works.
11. Populate Knowledge Lab after Multimedia has at least one strong public case study.
12. Perform final one-bagsak QA and production cleanup.

---

# 17. Immediate prompt for a new chat

Send this in a new chat:

> Continue my `Knowlexit09/noel-labasan-portfolio` project. First read `PORTFOLIO_MASTER_CONTEXT.md` from the repository and use it as the primary continuity/source-of-truth. Then verify the actual current `main` branch and latest GitHub Pages deployment before making changes. Do not restart completed architecture or redesign approved assets unless repository evidence or I explicitly ask. Preserve Draft -> Preview -> Publish Live, MFA/AAL2, RLS, analytics/privacy, audit/error logging, and existing working modules. Continue from the latest PENDING section. Current priority is the Gatchalian Multimedia client-work presentation: verify the latest direct video fix, repair the Featured Campaign carousel so artwork is fully visible with separate captions, then build the `More Work for Gatchalian Meatshop` client gallery from verified finished client assets. Live Multimedia must remain fail-closed until focused QA passes.

---

# 18. Risk standard for portfolio/system changes

For every meaningful patch, report:

- what could go wrong,
- risk level,
- safeguards/mitigations,
- whether data/security/business records are affected,
- rollback path.

Current Multimedia work:

- **Risk level:** Low to Medium depending on storage/state changes.
- **Primary risks:** stale Draft state, wrong/old creative linked, broken media URL, historical pricing shown as current, layout regressions, or premature Live publication.
- **Safeguards:** Draft Preview first, AAL2 owner uploads, Live Multimedia remains OFF until approval, case page stays noindex until intended publication, stable stored media, explicit current/historical campaign distinction.
- **Data/security impact:** no effect on POS, accounting, inventory, or client operational data; auth/RLS must remain unchanged.
- **Rollback:** revert the relevant GitHub commit and/or restore prior Draft media metadata; stored media can remain unused without affecting Live.