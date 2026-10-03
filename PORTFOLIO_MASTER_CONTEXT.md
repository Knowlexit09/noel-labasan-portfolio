# PORTFOLIO MASTER CONTEXT

> **Primary continuity/source-of-truth file for future chats**
>
> Repository: `Knowlexit09/noel-labasan-portfolio`
> Public site: `https://knowlexit09.github.io/noel-labasan-portfolio/`
> Admin: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`
> Last consolidated: **2026-10-03**
>
> Read this file first in a new chat, then verify the actual `main` branch before changing anything. Do not restart finished work or rebuild the architecture from scratch unless repository evidence shows that something is missing or broken.

---

# 1. Continuity protocol

When continuing this portfolio project:

1. Read this file first.
2. Verify the current `main` branch and recent GitHub Pages workflow before editing.
3. Re-fetch every file immediately before changing it; never rely on stale SHAs.
4. Preserve the existing Draft -> Preview -> Publish Live workflow and Supabase security model.
5. Preserve MFA/AAL2, RLS, analytics/privacy, audit/error logging, and all previously working public modules.
6. Do not silently redesign approved portfolio or client branding.
7. Keep work labels truthful: Client Work, Personal Project, Concept Project, Spec Work, or Learning Project.
8. Never put service-role keys, GitHub tokens, passwords, recovery codes, or other secrets in this public repository.
9. Creative modules remain fail-closed until their content and media are intentionally ready.
10. Do not call the entire portfolio “final” until the final QA checklist passes.
11. Update this file after each major milestone.

If this document conflicts with repository code, the repository is authoritative for implementation state; this file remains authoritative for product intent, accepted decisions, work status, and continuity.

---

# 2. Overall goal

The portfolio began as a professional **Junior Programmer / Java Developer / Application Support / Technical Support** portfolio and is being expanded into a credible hybrid portfolio that can also support **Multimedia Artist / Creative** applications.

The portfolio should show that Noel can:

- build practical software and business systems,
- understand real operational workflows,
- support users and troubleshoot systems,
- think about security, auditability, and maintainability,
- create social media graphics and short-form video campaigns,
- explain his process and decisions,
- use AI as an assistant while manually reviewing and editing outputs,
- learn new creative/technical tools honestly,
- share useful knowledge through a Knowledge Lab.

Core positioning already used:

- **Build · Support · Improve.**
- **I build practical systems and help people make technology work.**

Do not exaggerate experience or portray learning tools as expert-level skills.

---

# 3. Career/profile context

## Education and training

- BS Information Technology — Polytechnic University of the Philippines, San Juan, 2017.
- Programming (Java) NC III Training — Center for International Industries Competence Corp. / TWSP Scholar, June 13 to July 31, 2026, 241 hours.
- Supervised Industry Learning — 15 days, August 3 to August 19, 2026.
- AWS Cloud Quest: Cloud Practitioner — 2026.

## Professional experience

### PCN PROMOPRO INC.

- **HRIS Specialist** — September 24, 2018 to December 31, 2024.
- **IT Support** — March 4, 2018 to September 23, 2018.

The portfolio should use the combination of software + support + real workflow awareness as a strength.

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
- Basic networking
- AWS fundamentals

AI tools may be described as workflow assistants, with manual review/testing. Never imply AI output is accepted blindly.

---

# 4. Main software projects

## BankFlow / PHBank

Java 21 / JavaFX / MySQL / Maven / JUnit 5 / Apache POI banking portfolio project.

Important themes:

- layered services / DAO separation,
- RBAC / role-aware workflows,
- KYC review,
- audit history,
- transactions,
- loans,
- security controls,
- pagination,
- Excel export.

## Frozen Meatshop POS

Google Apps Script + Google Sheets + HTML/CSS/JS business operating/POS system.

Major areas:

- stock receiving,
- box/KG/pack inventory,
- Open Box,
- repacking,
- internal stock use,
- sales,
- receivables,
- payables,
- finance,
- returns,
- reporting,
- audit-friendly records.

This remains an active project and is a major example of business-workflow thinking.

## PHP + Google Sheets CRUD

Smaller learning project using PHP, Google Sheets and XAMPP to practice CRUD workflows.

---

# 5. Portfolio architecture

The portfolio is hosted through GitHub Pages from `main` using `.github/workflows/pages.yml`.

The frontend is a modular static portfolio with a Supabase-backed Admin/Maintenance layer.

Important public files include:

- `assets/js/config.js` — static fallback content.
- `assets/js/backend-config.js` — public-safe backend configuration and Admin enhancement loader.
- `assets/js/backend-loader.js` — merges static fallback with remote Live/Draft-preview state.
- `assets/js/future-modules.js` — public Multimedia + Knowledge Lab injection/rendering/runtime.
- `assets/css/future.css` — optional/future module styling, including creative modules.
- `assets/js/multimedia-seed.js` — staged static fallback schema created 2026-10-03.

Important Admin file:

- `admin/admin-creative-manager.js` — manages Multimedia tools, Multimedia works, Knowledge Lab entries, and creative module toggles through Draft first.

## Important correction to earlier continuity notes

An earlier repository check incorrectly treated the public creative rendering as missing because `config.js` and `fragments/future.js` did not directly contain Multimedia/Knowledge Lab sections.

A later direct repository verification found that **`assets/js/future-modules.js` already injects and renders the public Multimedia and Knowledge Lab sections**, including:

- Multimedia navigation link,
- Knowledge Lab navigation link,
- tool-level badges,
- Multimedia category filters,
- Multimedia search,
- visual-first Multimedia cards,
- Knowledge Lab category filters/search,
- safe code display/copy,
- restricted HTML/CSS preview behavior.

Therefore the public creative rendering foundation exists. The current work is now focused on **content/media wiring + focused QA + intentional publishing**, not rebuilding the entire creative renderer.

## Current staged creative fallback

Created on 2026-10-03:

- `assets/js/multimedia-seed.js`
- `assets/css/multimedia-case.css`
- `multimedia/gatchalian-meatshop.html`

`index.html` now loads `assets/js/multimedia-seed.js` after `config.js` and before `backend-loader.js`.

Safety state:

- `multimedia` remains OFF by default.
- `knowledgeLab` remains OFF by default.
- the staged Gatchalian fallback item is `published:false`.
- the case-study page is currently `noindex,nofollow` while binary media is not yet wired.

GitHub Pages run #132 for commit `fd4383813b01efdf0d71c6992d1aeab1ef7cb3b4` completed successfully.

---

# 6. Existing completed/working systems to preserve

## Public UX / accessibility / performance

- responsive layout and mobile navigation,
- visible keyboard focus,
- skip link,
- navigation ARIA improvements,
- Escape closes mobile navigation,
- reduced-motion support,
- image lazy loading/priority tuning,
- safer external links,
- project case-study accessibility improvements,
- Supabase preconnect/loading optimization,
- About approach cards polished for desktop/tablet/mobile.

## Visitor counter

Public display under the name:

`@knowlexit · N visit(s)`

Correct visit/visits grammar is expected.

## Contact Delivery + Admin Inbox

Previously considered complete and user-tested. Do not reopen unless a verified problem is reported.

## Resume Manager

Current behavior supports:

- `resume.html` fallback,
- optional PDF upload/replace,
- preview/fallback,
- Draft-before-Publish,
- title/fallback URL/description,
- view/download button controls,
- labels,
- PDF metadata.

Potential future improvements:

- Live vs Draft PDF indicator,
- revert/remove PDF,
- cleanup old PDF versions,
- version history,
- cleaner public download filename,
- real PDF-signature validation,
- multiple resume variants.

## Project Manager

A prior Add Project modal cancellation issue was patched via:

- `admin/admin-project-dialog-fix.js`

Expected close paths include Cancel / X / Escape / backdrop and focus return. Keep this in final QA.

---

# 7. Backend/admin/security architecture

The backend uses Supabase.

Browser code must contain public-safe project configuration only. Never expose a service-role key or another private secret client-side.

The Admin model uses:

- password login,
- verified TOTP MFA,
- browser session storage,
- exact-owner checks,
- RLS,
- AAL2 requirements for sensitive writes.

Sensitive areas previously hardened for AAL2 include:

- portfolio-state writes,
- revision/history operations,
- inbox mutation,
- storage upload/replace/delete.

Public Live reads remain available as designed.

## Recovery/security systems

- TOTP MFA UI,
- custom recovery-code flow,
- delayed emergency recovery flow,
- security status page/helper,
- audit/error/operations diagnostics.

Do not weaken authentication/RLS just to simplify maintenance.

## Advisor caveat

Do not claim “zero findings.” Previously accepted/informational findings may include:

- service-only RLS patterns,
- SECURITY DEFINER warning for the security-status helper,
- leaked-password protection plan limitation,
- unused-index informational findings.

---

# 8. Analytics/privacy

The Admin includes analytics/overview support and the public visit counter.

Privacy direction:

- no raw IP storage for ordinary analytics,
- random identifiers/server-side hashing patterns where implemented,
- obvious-bot filtering,
- deduplication to avoid inflated repeated visits.

Test analytics data may remain during development.

After full final QA:

- reset test analytics,
- exclude the owner's browser/device if practical.

Do not reset analytics early while they are still useful for QA.

---

# 9. Multimedia Artist expansion

The strategy is **5–7 strong pieces**, not a large collection of weak work.

Recommended mix:

- static social ad campaign,
- carousel/campaign system,
- short-form video ad,
- branding/identity concept,
- banner/hero/thumbnail work,
- motion/logo animation,
- photo manipulation / before-after,
- optional 3D piece.

Every non-client item must be labeled honestly:

- Concept Project,
- Sample Campaign,
- Spec Work,
- Personal Project,
- Learning Project.

Never invent a client relationship.

---

# 10. Multimedia tools and truthful levels

## Working / comfortable

- Canva
- Photoshop
- CapCut

## Learning

- Blender
- Adobe Illustrator
- Adobe Premiere Pro
- DaVinci Resolve

Do not display Learning tools as expert/proficient until the user confirms real capability.

## Learning direction

### Illustrator

- vector basics,
- shapes/Pathfinder,
- Pen Tool,
- typography,
- logo/poster exercises,
- export workflow.

### Premiere Pro

- media import,
- timeline editing,
- cuts/transitions,
- text/subtitles,
- audio,
- basic color,
- vertical reels,
- export.

### Blender

Build a simple 3D product/scene render later and label it honestly as learning work.

---

# 11. Multimedia public module direction

Keep a dedicated **Multimedia** section separate from software Projects.

Categories:

- Graphic Design
- Video Editing
- Branding
- Ads & Campaigns
- Motion Graphics
- 3D / Renders

Each work should support:

- title,
- category,
- work label/type,
- objective,
- target audience,
- role,
- tools,
- description,
- tags,
- cover/poster image,
- video/media URL,
- full case-study link,
- published/draft state.

Preferred case-study structure:

1. Hero visual.
2. Project title + honest label.
3. Brief/objective.
4. Audience.
5. Creative direction.
6. Role/tools.
7. Main final output.
8. Supporting outputs.
9. Video/storyboard.
10. Process/decisions.
11. Learning/improvements.

Media performance rules:

- do not put large binary media inside JSON state,
- store URLs/metadata in state,
- use compressed thumbnails,
- lazy-load offscreen images,
- use poster images for videos,
- no autoplay with sound,
- avoid loading several full-resolution videos simultaneously.

---

# 12. Gatchalian Meatshop — Featured Multimedia Project #1

This is now the first substantially completed multimedia campaign.

## Work classification

**Client Work**

The user confirmed:

- Gatchalian Meatshop is a real client/business campaign,
- the campaign may be shown in the user's portfolio,
- the current campaign prices used in the finished work were confirmed for the campaign.

Do not label this project as Concept Campaign anymore.

Recommended portfolio disclosure:

> Client work: Gatchalian Meatshop. Social media campaign (graphics + short-form video). AI-assisted visuals were used in parts of the workflow; final selection, layout, branding, text/pricing, sequencing, and editing were manually reviewed and assembled.

## Official logo rule

The latest original logo supplied by the user is authoritative.

Key characteristics:

- red brand field/source,
- white `Gatchalian` script,
- green leaf accent,
- `MEATSHOP` banner,
- spaced `PREMIUM MEAT`,
- chicken/pig/cow icons,
- decorative flourishes.

Do not redesign/reinterpret the official logo unless the user explicitly asks for a rebrand concept.

AI-generated logo/text may be inaccurate. Final production should use the actual original logo asset.

## Locked campaign artwork

The user explicitly approved and LOCKED the campaign board shown in the conversation on 2026-10-03.

Important rule:

> **DO NOT redesign or replace the approved top/main campaign visual. It is the reference all supporting pieces must follow.**

The approved campaign set contains:

- main campaign visual / grouped product poster,
- supporting Pork Belly/Liempo product spotlight,
- supporting Order Now / CTA post.

The user preferred this existing board over later redesign attempts. If future supporting posts are added, they should look like the same campaign family rather than changing the main visual.

## Current campaign message

Primary spoken/visual direction:

**“Pork, chicken, at seafood—quality meat sa presyong swak sa budget.”**

Product grouping used in the campaign/video:

### Pork

- Pork Liver — ₱65
- Kasim/Laman — ₱120
- Belly/Liempo — ₱145

### Chicken

- Drumstick — ₱90

### Seafood

- Fish Fillet — ₱130
- Frozen Pompano — ₱260/kg

Selected-items packaging message:

- Vacuum Sealed
- fresh / safe / convenient wording may be used where accurate.

## Contact/store information used for final campaign

- Phone: `0968-129-3003`
- Facebook: Gatchalian Meatshop Premium Meat
- Address: D. Vicencio cor. A. Bonifacio St., Brgy. Sta. Lucia, San Juan City
- Store hours: Mon–Sat 7:00 AM–6:00 PM

Never use AI-invented addresses or substitute locations.

## Video campaign status

The user completed the assembled video in CapCut.

Selected final video file:

**`gatchalian campaign meta ads.mp4`**

Previous/backup version:

**`gatchalian campaign ads.mp4`**

Use the **Meta Ads** file as the canonical final campaign video unless the user later supplies a newer approved revision.

The user also generated Flow clips during production, including:

- pork belly/liempo opening hook,
- meat-shop commercial footage,
- Filipino cooked-food payoff footage.

The final narration was generated separately to avoid inconsistent Flow voices.

Final narration copy used as the master direction:

> Fresh meat deals para sa mas sulit na ulam! Pork, chicken, at seafood—quality meat sa presyong swak sa budget. Selected items are vacuum sealed para fresh, safe, at convenient. Handa na para sa ulam ng buong pamilya. Order na sa Gatchalian Meatshop Premium Meat!

## Final video structure direction

The stronger revised structure replaced the earlier one-product-per-second storyboard because 1 second per product was too fast to read.

Preferred flow:

- food/liempo hook,
- grouped Pork + Chicken + Seafood pricing visual,
- vacuum-sealed/freshness section,
- cooked-food/ulam payoff,
- branded Order Now CTA.

Do not return to six independent 1-second product cards unless there is a specific new reason.

## Tool/cost decisions

- HeyGen: explicitly rejected for this campaign.
- Runway: do not use when payment/credits are required.
- Google Flow: used selectively while credits were available; generation cost changed during the session, so do not assume old credit pricing.
- CapCut: preferred final free assembly/editor.
- AI voice: generated separately for consistency.

The user does not want to pay for unnecessary AI video subscriptions for this project.

## Current portfolio integration state

Completed on 2026-10-03:

- staged fallback item in `assets/js/multimedia-seed.js`,
- case-study stylesheet `assets/css/multimedia-case.css`,
- staged case page `multimedia/gatchalian-meatshop.html`,
- index loader updated so the creative fallback schema exists before backend merge,
- public Multimedia/Knowledge Lab remain OFF,
- Gatchalian staged item remains `published:false`,
- case-study page remains `noindex,nofollow`.

### Current blocker before public publish

The final **binary media files are not yet wired into the GitHub repository** through the available connector workflow.

Required assets:

1. the locked/approved Gatchalian campaign board image,
2. `gatchalian campaign meta ads.mp4`.

After those files are placed in stable public storage/repository paths:

- wire the hero image and video into the case-study page,
- set the staged Multimedia item thumbnail/media URLs,
- run focused QA,
- then enable/publish Multimedia intentionally.

Do not publish a broken card with missing media.

---

# 13. Recommended Multimedia roadmap after Gatchalian

To avoid a portfolio that looks like only food/retail work, use different visual languages for the next projects.

## Project #2 — Exponify

Corporate/tech/business-oriented campaign.

Possible deliverables:

- business problem/solution social ad,
- short explainer/video ad,
- carousel,
- branded CTA motion piece.

## Project #3 — Brand identity concept

Create a concise fictional/personal brand system:

- logo/mark,
- palette,
- typography,
- social applications,
- mockups.

Label clearly as concept work.

## Project #4 — Photo manipulation / product composite

Show Photoshop skill through a before/after presentation.

## Project #5 — Motion / logo animation

Short motion piece in CapCut now; expand to Premiere/other motion tools later as skills grow.

## Project #6 — 3D / Blender learning piece

Simple product/scene render labeled `Learning Project`.

---

# 14. Knowledge Lab plan

Working name:

**Knowledge Lab**

Suggested subtitle:

**Shortcuts, snippets, experiments, and practical tips I use.**

Possible content:

- Photoshop shortcuts/tips,
- Canva tricks,
- Blender shortcuts,
- Premiere Pro learning notes,
- DaVinci Resolve notes,
- Illustrator notes,
- Java snippets/components,
- HTML/CSS/JS examples,
- Apps Script automation,
- Google Sheets techniques,
- Git/GitHub commands.

Recommended entry pattern:

`Problem -> Quick Tip -> Example -> Try It -> Why It Works -> Common Mistake`

Metadata:

- title,
- category/tool,
- type: Tip / Shortcut / Code Recipe / Tutorial,
- difficulty,
- summary,
- code/example,
- explanation,
- image/video,
- tags,
- runnable on/off,
- published on/off.

## Safe runnable direction

HTML/CSS preview may use a sandboxed iframe with network/script restrictions.

V1 should not offer arbitrary user-authored JavaScript/network execution.

Java should not be advertised as browser-native runnable. V1 can show:

- Java code,
- explanation,
- copy button,
- simulated output/example.

A true Java playground later requires isolated server/container execution with strict CPU/time/memory/filesystem/network limits.

---

# 15. Admin Creative Manager

`admin/admin-creative-manager.js` exists and is loaded by the Admin enhancement loader.

Intended safety behavior:

- signed-in Supabase session only,
- AAL2 before save,
- creative changes save to Draft first,
- preserve unrelated state keys,
- public Multimedia/Knowledge Lab stay OFF until explicitly enabled and published,
- tool levels use truthful Working/Learning labels.

It models:

- Multimedia module toggle,
- Knowledge Lab module toggle,
- Multimedia tools,
- Multimedia work entries,
- Knowledge Lab entries.

Final QA must verify:

- page/nav injection,
- load latest Draft,
- add/edit/delete/reorder,
- AAL2 save requirement,
- preservation of unrelated Draft fields,
- module toggles,
- Preview Draft,
- Publish Live,
- refresh/reload behavior,
- public rendering.

---

# 16. Better architecture principles for creative work

## A. Separate metadata from heavy media

State should store only URLs, captions, labels, tags, and metadata. Heavy images/video belong in stable media storage/repository assets.

## B. Use media variants

Prefer:

- thumbnail,
- medium preview,
- full image,
- video poster.

## C. Provenance/work labels

Every creative item should clearly show one of:

- Client Work
- Personal Project
- Concept Project
- Spec Work
- Learning Project

## D. Show process proof

For strong multimedia case studies, include some combination of:

- source/reference material,
- layout drafts,
- color/typography decisions,
- storyboard,
- before/after,
- timeline/process screenshot,
- final output.

The purpose is to show reproducible creative thinking rather than only a finished AI-looking visual.

## E. Media performance budget

- compressed WebP/AVIF thumbnails where practical,
- lazy-load offscreen media,
- poster image for videos,
- no autoplay with sound,
- defer heavy embeds,
- avoid multiple full videos loading simultaneously.

## F. Reusable case-study templates

Maintain one reusable Multimedia case-study layout and one reusable Knowledge Lab entry layout so future content is added through Admin instead of hard-coded every time.

## G. Keep search/filter simple

Multimedia: category filters + text search.

Knowledge Lab: search + categories such as:

- All
- Design
- Video
- 3D
- Java
- Web
- Automation

Do not build complex indexing until content volume justifies it.

---

# 17. Resume direction for Multimedia applications

Do not replace the software/hybrid resume with a fake pure-design resume.

Better approach:

- retain the core/hybrid resume,
- optionally create a Multimedia-focused variant,
- emphasize real Canva/Photoshop/CapCut work,
- link directly to the Multimedia section/case studies,
- keep Blender/Illustrator/Premiere/DaVinci labeled Learning until proven otherwise.

---

# 18. Final QA plan

The user prefers **one-bagsak final QA near the end**, not constant destructive retesting after every small patch.

Before production baseline/release, verify:

## Public site

- Home/About/Projects/Experience/Skills/Certificates/Resume/Contact.
- visitor counter.
- mobile navigation.
- keyboard navigation/accessibility.
- responsive layout.
- light/dark themes.
- search.
- external links.

## Multimedia

- module OFF by default before intended publication.
- staged Gatchalian card/case study.
- image loading and video poster.
- final Meta ad video playback.
- category filter/search.
- correct Client Work label.
- no broken media URLs.
- mobile readability.
- no autoplay sound.

## Knowledge Lab

- module toggles.
- filters/search.
- Copy Code.
- safe HTML/CSS preview.
- Java shown as non-browser-native execution.
- security sandbox/CSP behavior.

## Admin

- password + TOTP AAL2.
- Admin navigation.
- Creative Manager load/save.
- Draft -> Preview -> Publish Live.
- unrelated state preserved.
- Resume Manager.
- Project Manager cancel/X/Esc/backdrop behavior.
- Inbox.
- Analytics.
- Operations/Audit/Error log.

## Security

- AAL1 sensitive writes blocked.
- AAL2 writes succeed where expected.
- RLS remains fail-closed.
- no secrets in frontend/repo.
- recovery flows non-destructive tests first.
- destructive recovery tests last.
- review Supabase advisor findings without claiming intentional findings are “fixed” when they are accepted.

After final QA:

- reset analytics test data if appropriate,
- exclude owner browser if practical,
- create production baseline / changelog / release marker.

---

# 19. GitHub working rules

- Always re-fetch current file before update/delete.
- Use the current SHA for `update_file`.
- Do not run same-path writes in parallel.
- Main pushes trigger GitHub Pages.
- Verify the latest workflow after writes.
- Expect browser cache; use a cache-buster or Ctrl+Shift+R when needed.
- Do not force-push or rewrite history for normal portfolio work.

---

# 20. Current DONE vs PENDING

## DONE / materially complete

- core developer/support portfolio foundation,
- GitHub Pages deployment,
- public responsive shell,
- accessibility/performance hardening,
- visitor counter,
- Contact Delivery + Admin Inbox,
- Resume Manager foundation,
- Project Manager and cancellation patch,
- Supabase secure Admin foundation,
- TOTP/AAL2,
- recovery/emergency-recovery architecture,
- analytics/operations/audit/error systems,
- Admin Creative Manager foundation,
- public `future-modules.js` creative renderer,
- Gatchalian locked campaign design direction,
- Gatchalian real-client confirmation/portfolio permission,
- Gatchalian confirmed campaign prices,
- Gatchalian final assembled video selected: `gatchalian campaign meta ads.mp4`,
- staged Gatchalian case-study page/CSS/fallback metadata,
- GitHub Pages run #132 successful.

## PENDING / next work

1. Put the locked campaign-board image into a stable public media path.
2. Put `gatchalian campaign meta ads.mp4` into a stable public media path.
3. Wire both assets into `multimedia/gatchalian-meatshop.html` and the Multimedia item metadata.
4. Focused QA of the Gatchalian case study/video on desktop + mobile.
5. Change case-study robots from `noindex,nofollow` only when publication is intended.
6. Mark the staged Gatchalian item `published:true` only after media wiring/QA.
7. Enable Multimedia through the intended Draft -> Preview -> Publish workflow.
8. Add Project #2 — Exponify with a clearly different corporate/tech visual language.
9. Add additional creative works until the portfolio has roughly 5–7 strong pieces.
10. Populate Knowledge Lab after Multimedia has at least one strong public case study.
11. Perform the one-bagsak final QA and production cleanup.

---

# 21. Immediate next-step instruction for a future chat

Use this prompt if the current chat reaches its limit:

> Continue my `Knowlexit09/noel-labasan-portfolio` project. Read `PORTFOLIO_MASTER_CONTEXT.md` first and verify the current `main` branch. Do not restart completed architecture. The current priority is to finish/publicly wire Featured Multimedia Project #1, Gatchalian Meatshop. The locked campaign-board artwork must not be redesigned. The canonical final video is `gatchalian campaign meta ads.mp4`; the older `gatchalian campaign ads.mp4` is backup only. Keep Multimedia fail-closed until the final image/video assets are in stable public paths and focused QA passes. Preserve Draft -> Preview -> Publish, MFA/AAL2, RLS, analytics/privacy, and all existing working modules.

---

# 22. Risk standard for portfolio/system changes

For every meaningful patch, report:

- what could go wrong,
- risk level,
- safeguards/mitigations,
- whether data/security/accounting/business records are affected,
- rollback path.

For current Multimedia staging changes:

- **Risk level:** Low.
- **Main risk:** incomplete media wiring could produce a broken/empty creative card if published too early.
- **Safeguard:** Multimedia remains OFF; Gatchalian item remains unpublished; case page remains noindex.
- **Data/security impact:** none to business data, authentication, Supabase security, accounting, inventory, or analytics.
- **Rollback:** revert/delete the staged Multimedia files and remove the `multimedia-seed.js` loader from `index.html`.
