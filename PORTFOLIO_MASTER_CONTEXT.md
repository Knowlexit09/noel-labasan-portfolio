# PORTFOLIO MASTER CONTEXT

> **Primary continuity file for future chats**
>
> Repository: `Knowlexit09/noel-labasan-portfolio`
> Public site: `https://knowlexit09.github.io/noel-labasan-portfolio/`
> Admin: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`
> Last consolidated: **2026-10-02**
>
> This file is the working source of truth for the portfolio project. A future chat should read this file first, then verify the current repository state before making changes. Do not restart the architecture or repeat finished work unless the repository proves that something is missing or broken.

---

## 1. Continuity protocol for the next chat

When continuing this project in a new chat:

1. Read this file first.
2. Check the actual `main` branch before editing anything.
3. Re-fetch every file immediately before changing it; do not rely on an old SHA.
4. Preserve the current security model, Draft -> Preview -> Publish Live workflow, MFA/AAL2 controls, analytics/privacy behavior, and existing working modules.
5. Do not silently redesign previously approved UX or branding.
6. Do not call something "final" until the final QA checklist passes.
7. For multimedia work, distinguish **real work**, **personal project**, **concept/spec work**, and **learning work** honestly.
8. Never place passwords, service-role keys, GitHub tokens, recovery codes, secret keys, or private authentication data in this public repository.
9. Keep public creative modules OFF until content is ready and intentionally published.
10. After a major milestone, update this file so the next chat can continue from one source of truth.

If this document conflicts with the live repository, the repository is authoritative for code state, while this document remains authoritative for product intent, approved direction, pending work, and continuity decisions.

---

# 2. Project goal

The portfolio started as a professional **Junior Programmer / Java Developer / Application Support / Technical Support** portfolio and is now being expanded into a broader hybrid portfolio that can also support applications for **Multimedia Artist / Creative roles**.

The goal is not to turn the site into a generic template. It should show that Noel can:

- build practical business software,
- understand support and operations,
- think about security and maintainability,
- create polished visual and video campaigns,
- document his process,
- learn new creative and technical tools openly,
- share practical knowledge through a Knowledge Lab.

Core personal positioning already used in the portfolio:

- **Build · Support · Improve.**
- **I build practical systems and help people make technology work.**

The portfolio should remain believable and interview-defensible. Do not exaggerate experience or present learning tools as expert-level skills.

---

# 3. Career/profile context

## Education and training

- BS Information Technology, Polytechnic University of the Philippines - San Juan, 2017.
- Programming (Java) NC III Training, Center for International Industries Competence Corp. / TWSP Scholar, June 13 to July 31, 2026, 241 hours.
- Supervised Industry Learning: 15 days, August 3 to August 19, 2026.
- AWS Cloud Quest: Cloud Practitioner, 2026.

## Professional experience

### PCN PROMOPRO INC.

- **HRIS Specialist** — September 24, 2018 to December 31, 2024.
- **IT Support** — March 4, 2018 to September 23, 2018.

The portfolio should use this background as a strength: software + support + real operational workflow awareness.

## Technical stack currently represented

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

AI tools may be described as assistants used in the workflow, with manual review/testing of output. Do not imply AI output is accepted blindly.

---

# 4. Main software portfolio projects

## BankFlow / PHBank

Portfolio banking desktop application using Java 21, JavaFX, MySQL, Maven, JUnit 5, Apache POI and layered architecture.

Important themes already represented:

- service / DAO separation,
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

Major workflow areas:

- stock receiving,
- box / KG / pack inventory,
- open box,
- repacking,
- internal stock use,
- sales,
- receivables,
- payables,
- finance,
- returns,
- reports,
- audit-friendly records.

This remains an active build and is a strong example of business workflow thinking.

## PHP + Google Sheets CRUD

Smaller learning project using PHP, Google Sheets and XAMPP to practice CRUD workflows.

---

# 5. Current portfolio architecture

The website is hosted through GitHub Pages from `main` using `.github/workflows/pages.yml`.

The frontend is a modular static portfolio with a secure Supabase-backed maintenance/admin layer.

Current public fallback configuration is in:

- `assets/js/config.js`

Current future/optional module markup is in:

- `assets/js/fragments/future.js`

Admin enhancements are dynamically loaded by:

- `assets/js/backend-config.js`

The site uses static fallback data when secure backend content is unavailable, while the admin workflow manages remote Draft and Live state.

### Important verified state on 2026-10-02

The repository currently contains:

- `admin/admin-creative-manager.js`
- a backend enhancement loader that loads `admin-creative-manager.js`
- a successful Pages deployment for commit `48c35305f946c91eafed8da4d4376971d1d058f4`
- workflow run #127 completed successfully.

However, a fresh repository check on 2026-10-02 also showed that the current `assets/js/config.js` fallback does **not yet include `multimedia` or `knowledgeLab` module keys**, and `assets/js/fragments/future.js` does **not yet contain the public Multimedia or Knowledge Lab sections**.

Therefore:

> **Treat the creative public integration as incomplete until the actual public rendering path is rechecked and finished.**

Do not assume an earlier attempted creative commit means the public modules are fully working. The Admin creative manager exists, but the public side still needs verification/integration.

---

# 6. Public site direction and approved visual behavior

The existing technical portfolio visual style is considered professional and suitable for developer/support roles:

- dark navy shell,
- clean cards,
- strong blue/white contrast,
- responsive sidebar/navigation,
- light/dark support,
- project case studies,
- search,
- feature flags.

The multimedia area should **not** simply reuse the same dense technical card style. It should feel more visual, like a small curated Behance-style section while still belonging to the same portfolio brand.

Approved creative direction:

- larger images/video previews,
- less text above the fold,
- visual-first cards,
- strong campaign thumbnails,
- clear category filtering,
- professional case-study presentation,
- consistent dark portfolio shell with bolder creative accents.

Suggested navigation concept:

`Home -> About -> Projects -> Multimedia -> Knowledge Lab -> Experience -> Skills -> Certificates -> Resume -> Contact`

Do not remove or weaken the existing software Projects section to make room for Multimedia. They should coexist.

---

# 7. Existing completed/working portfolio systems

The following areas were already built or materially hardened before the creative expansion. Preserve them unless a verified bug exists.

## Public UX / accessibility / performance

- Responsive layout and mobile navigation.
- Visible keyboard focus.
- Skip link.
- Navigation ARIA improvements.
- Escape key closes mobile navigation.
- Reduced-motion support.
- Image lazy loading / priority tuning.
- Safer external links.
- Project case-study accessibility improvements.
- Supabase preconnect / loading optimizations.
- About approach cards polished for desktop/tablet/mobile.

## Visitor counter

Public display under the name:

`@knowlexit · N visit(s)`

Grammar handling exists for visit/visits.

## Contact delivery + Admin Inbox

Considered complete and user-tested in the previous work. Do not reopen unless the user reports a problem.

## Resume manager

Current portfolio supports:

- `resume.html` fallback,
- optional PDF upload/replace,
- preview/fallback,
- draft-before-publish,
- title / fallback URL / description,
- view/download button controls,
- labels,
- PDF metadata.

Possible future improvements are listed later in this document.

## Project manager

A prior Add Project modal cancellation issue was patched via:

- `admin/admin-project-dialog-fix.js`

Expected behavior includes Cancel/X/Escape/backdrop close and focus return. It still belongs in final one-bagsak QA.

---

# 8. Backend/admin/security architecture

The backend uses Supabase.

Browser code must contain only public-safe project configuration and the publishable key. Never add a service-role key or another secret to frontend code.

The admin model uses:

- password login,
- verified TOTP MFA,
- session stored in browser session storage,
- exact-owner checks,
- RLS,
- AAL2 enforcement for sensitive writes.

Sensitive writes previously hardened to require AAL2 include areas such as:

- portfolio state writes,
- revision/history operations,
- inbox mutation,
- storage upload/replace/delete.

Public live reads remain available as designed.

### Recovery/security systems already created

- TOTP MFA UI.
- Custom recovery-code flow.
- Emergency recovery flow with cooldown/verification states.
- Security page/status support.
- Audit/error/operations diagnostics.

Do not weaken authentication or RLS just to make maintenance easier.

### Advisor caveat

Do not claim the backend has zero advisor findings. Some intentionally accepted warnings/information may remain, such as service-only RLS patterns, a security-definer status helper, leaked-password protection plan limitation, and unused-index informational items.

---

# 9. Analytics/privacy architecture

The admin includes analytics/overview support and the public visit counter.

Privacy direction:

- no raw IP should be stored for ordinary analytics,
- use random identifiers/server-side hashing patterns,
- filter obvious bots where implemented,
- avoid inflated repeated visits through deduplication.

Test analytics data may exist during development.

After full final QA, planned production cleanup includes:

- reset test analytics,
- exclude the owner's browser/device from production counting if practical.

Do not reset test analytics early if they are still needed for QA.

---

# 10. Multimedia Artist expansion

The user wants to apply for Multimedia Artist roles and currently needs a stronger visual portfolio.

The strategy is to create **5-7 strong works**, not many weak samples.

Recommended portfolio mix:

- static social ads,
- campaign/carousel work,
- short-form video ad,
- branding/identity concept,
- banner/hero/thumbnail work,
- motion/logo animation,
- photo manipulation/before-after work,
- optional 3D piece later.

Every non-client piece must be honestly labeled as one of:

- Concept Project
- Sample Campaign
- Spec Ad / Spec Work
- Personal Project
- Learning Project

Do not invent a client relationship.

---

# 11. Multimedia tools and truthful levels

Current intended tool display:

### Working / comfortable

- Canva
- Photoshop
- CapCut

### Learning

- Blender
- Adobe Illustrator
- Adobe Premiere Pro
- DaVinci Resolve

Do not label the Learning tools as expert/proficient unless the user later confirms real capability.

Learning direction:

### Illustrator

- vector basics,
- shapes / Pathfinder,
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

Eventually create a simple 3D product/scene render for the multimedia portfolio.

---

# 12. Multimedia public module plan

Create a dedicated **Multimedia** section instead of mixing creative work into software Projects.

Suggested categories:

- Graphic Design
- Video Editing
- Branding
- Ads & Campaigns
- Motion Graphics
- 3D / Renders

Each multimedia work should be able to contain:

- title,
- category,
- work label/type,
- objective,
- target audience,
- role,
- tools,
- short description,
- tags,
- cover image / video poster,
- image/video URL,
- optional full case-study link,
- published/draft state.

Recommended portfolio case-study structure:

1. Hero visual.
2. Project title + honest project label.
3. Brief / objective.
4. Target audience.
5. Creative direction.
6. Role and tools used.
7. Main final output.
8. Supporting outputs.
9. Video/storyboard where applicable.
10. Process / decisions.
11. What was learned / improved.

---

# 13. Gatchalian Meatshop — Featured Multimedia Project #1

This is the first major multimedia case study being developed.

## Official brand reference

The latest logo uploaded by the user is the authoritative original/master logo.

Key characteristics:

- square red background,
- white `Gatchalian` script,
- green leaf accent above/right,
- white banner with red `MEATSHOP`,
- spaced white `PREMIUM MEAT`,
- chicken / pig / cow icons across the top,
- decorative flourishes.

Do **not** redesign or reinterpret the official logo unless the user explicitly requests a rebrand concept.

AI-generated mockups may distort logo lettering. For final brand-accurate material, use the exact original logo as an overlay in Canva/Photoshop rather than trusting generative text/logo reproduction.

## Existing user-made work

The user supplied several existing Gatchalian promotional designs. They are useful references for:

- product photography style,
- price-card layout,
- red brand palette,
- sales messaging,
- product groupings,
- retail/reseller promotion ideas.

One supplied pork price creative visibly referenced values such as:

- Pork Liver — ₱65
- Kasim/Laman — ₱115
- Ground Pork — ₱125
- Belly/Liempo — ₱145
- Porkchop — ₱105
- Riblets — ₱95
- Spareribs — ₱140
- Jowls/Batok — ₱110

**These are reference values from an existing creative, not a permanent authoritative price list. Prices must be reconfirmed before a live campaign is published.**

Other prices that appeared in AI storyboard drafts must not automatically be treated as current real prices.

## Selected campaign direction

The user preferred the cleaner campaign/case-study presentation over the later busier variants.

Approved strengths of the selected direction:

- cleaner layout,
- professional portfolio presentation,
- main campaign poster + supporting pieces,
- less crowded,
- stronger hierarchy,
- looks like a real case study rather than a single social post,
- supports discussion of branding, campaign thinking, social ad design, and video.

Working project title:

**Gatchalian Meatshop — Social Media Campaign**

Suggested classification:

- Graphic Design / Social Media Advertising
- Personal business project or promotional concept campaign, depending on what the user confirms is most accurate.

Do not invent ownership/client relationship language.

## Planned deliverables

1. Main campaign board.
2. Main Fresh Meat Deals poster.
3. Supporting Product Spotlight creative.
4. Supporting Order Now / Delivery creative.
5. Vertical short-form video ad.
6. Storyboard.
7. Portfolio case-study writeup.

## Video direction

Target format:

- 9:16 vertical,
- 1080 x 1920,
- approximately 15-20 seconds,
- Facebook Reels / Stories / TikTok style,
- energetic but readable,
- red / white / warm gold branding,
- realistic food/product visuals,
- clear price cards,
- simple zoom / swipe / pop motion,
- strong final CTA.

Earlier working storyboard concept:

- 0:00-0:02 brand/hook,
- 0:02-0:05 pork product highlights,
- 0:05-0:08 chicken/seafood or additional product highlights,
- 0:08-0:11 vacuum-sealed/value section,
- 0:11-0:14 trust/benefit section,
- 0:14-0:18 Order Now CTA.

The user asked the assistant to generate as much as possible.

### Important tool/cost decision

The user does **not** want to pay for video generation tools for this project.

- HeyGen: explicitly rejected for this campaign.
- Runway: connected and verified, but the current workspace is a Free plan with no usable video-generation credits/access. User said not to use it if payment is required.

Therefore the current preferred free path is:

- use the existing/generated campaign images,
- prepare exact video frames/assets/timing in ChatGPT,
- assemble/render the MP4 using a free tool already available to the user, especially CapCut.

Do not push the user into a paid video subscription unless they explicitly change this decision.

---

# 14. Recommended multimedia roadmap after Gatchalian

To avoid a portfolio that looks like only food/retail work, diversify the next pieces.

## Project #2 — Exponify

Create a different visual language, more corporate/tech/business oriented.

Possible deliverables:

- business problem/solution social ad,
- short explainer/video ad,
- carousel,
- branded CTA motion piece.

This is useful for showing the user can adapt beyond meat/retail imagery.

## Project #3 — Brand identity concept

Create a concise fictional or personal brand system:

- logo/mark,
- palette,
- typography,
- social applications,
- mockups.

Label clearly as concept work.

## Project #4 — Photo manipulation / product composite

Show Photoshop skill through before/after presentation.

## Project #5 — Motion / logo animation

Short motion piece using CapCut now, Premiere/After Effects-style learning later if available.

## Project #6 — 3D / Blender learning piece

Simple product/scene render with honest `Learning Project` label.

---

# 15. Knowledge Lab plan

The user wants a W3Schools-like practical knowledge-sharing section, but focused on shortcuts, experiments, tips and reusable snippets rather than a giant formal course.

Working name:

**Knowledge Lab**

Suggested subtitle:

**Shortcuts, snippets, experiments, and practical tips I use.**

Content examples:

- Photoshop tips/shortcuts,
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

## Entry structure

Recommended pattern:

`Problem -> Quick Tip -> Example -> Try It -> Why It Works -> Common Mistake`

Suggested metadata:

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

## Safe runnable code direction

HTML/CSS preview may use a sandboxed iframe.

V1 should not allow arbitrary JavaScript/network access from user-authored snippets.

Java should **not** be advertised as natively executable in-browser. V1 can provide:

- Java code,
- explanation,
- copy button,
- simulated visual output/example.

A future true Java playground would require a properly isolated execution service with strict CPU/time/memory/filesystem/network controls.

---

# 16. Admin Creative Manager current design

The repository currently contains `admin/admin-creative-manager.js`.

Its intended safety behavior includes:

- signed-in Supabase session only,
- AAL2 requirement before save,
- creative changes save to Draft first,
- preserves unrelated state keys,
- public Multimedia/Knowledge Lab modules stay OFF until explicitly enabled and published,
- tool levels default to honest Working/Learning labels.

The creative manager currently models:

- multimedia module toggle,
- Knowledge Lab module toggle,
- multimedia tools,
- multimedia work entries,
- Knowledge Lab entries.

Before relying on this feature, final QA must verify:

- page injection/navigation,
- load latest Draft,
- add/edit/delete/reorder,
- AAL2 save requirement,
- preservation of unrelated Draft fields,
- module toggles,
- Preview draft,
- Publish live,
- refresh/reload behavior,
- public rendering.

---

# 17. Current biggest gap: public creative rendering

This is the most important continuity note as of this consolidation.

Fresh repository inspection showed:

- `admin/admin-creative-manager.js` exists and is loaded by `assets/js/backend-config.js`.
- The current static `assets/js/config.js` does not yet expose Multimedia/Knowledge Lab fallback module keys/content.
- The current `assets/js/fragments/future.js` does not yet contain the public sections for Multimedia/Knowledge Lab.

Next implementation work should therefore begin by tracing the actual public rendering pipeline and completing creative rendering safely rather than assuming the public module is done.

Recommended next technical sequence:

1. Inspect all public fragment/render scripts that consume `PORTFOLIO_CONFIG` and remote Live state.
2. Add `multimedia` and `knowledgeLab` module support without changing existing module behavior.
3. Add visual-first Multimedia markup/styles.
4. Add Knowledge Lab markup/styles/filter/search/copy behavior.
5. Implement safe HTML/CSS preview only.
6. Make media loading lazy and responsive.
7. Keep modules OFF by default.
8. Populate Draft with the first Gatchalian item only when the creative asset is genuinely ready.
9. Preview Draft.
10. Publish only after focused creative QA.

---

# 18. Better architecture ideas for the creative expansion

These improvements are recommended because they make the portfolio easier to maintain and more credible long-term.

## A. Separate creative metadata from heavy media

Do not store large media files directly in JSON state.

Store only:

- URLs,
- poster/thumbnail URLs,
- captions,
- metadata,
- labels.

Keep image/video binaries in appropriate storage.

## B. Use image variants

For every portfolio work, prefer:

- thumbnail,
- medium/preview,
- full image,
- optional video poster.

This avoids loading giant artwork on the homepage.

## C. Add provenance/work-type labels

Every creative item should have a visible type such as:

- Real Project
- Personal Project
- Concept Project
- Spec Work
- Learning Project

This improves recruiter trust.

## D. Add process proof

For multimedia hiring, showing only a finished AI-looking visual is weaker than showing process.

For important pieces, include at least some of:

- original/reference material,
- layout draft,
- color/typography decisions,
- storyboard,
- before/after,
- editing timeline screenshot,
- final output.

The goal is to demonstrate that Noel can explain and reproduce the work, not merely prompt for it.

## E. Media performance budget

Set practical limits before the section grows:

- compressed WebP/AVIF thumbnails where practical,
- lazy-load offscreen creative images,
- poster image for videos,
- no autoplay with sound,
- defer heavy embeds,
- avoid multiple full-resolution videos loading at once.

## F. Case-study templates

Create one reusable visual case-study layout for Multimedia and one reusable entry layout for Knowledge Lab so future content can be added through Admin rather than coded manually.

## G. Search/filter consistency

Multimedia filters should be simple category filters plus text search.

Knowledge Lab should support search and categories such as:

- All
- Design
- Video
- 3D
- Java
- Web
- Automation

Do not build a complex indexing system until content volume justifies it.

---

# 19. Resume direction

The resume has been updated in prior work to better support hybrid development/application-support applications.

Future resume direction for Multimedia applications:

Do **not** replace the software resume with a fake pure-design resume.

Better approach:

- maintain a core/hybrid resume,
- optionally create a Multimedia-focused variant,
- emphasize Canva/Photoshop/CapCut projects honestly,
- include a direct Multimedia portfolio link/section,
- keep Blender/Illustrator/Premiere/DaVinci labeled as learning until proven otherwise.

Potential Resume Manager enhancements later:

- Live PDF vs Draft PDF indicator,
- revert/remove PDF cleanly,
- previous PDF cleanup,
- version history,
- cleaner public download filename,
- actual PDF signature validation,
- multiple resume variants.

These are future enhancements, not current blockers.

---

# 20. Final QA plan

The user previously preferred a **one-bagsak final QA near the end**, not constant repeated full testing after every small patch.

Focused checks are still allowed after risky changes, but the complete end-to-end pass remains pending.

Final QA should include at minimum:

## Public site

- home/navigation,
- mobile layout,
- theme,
- project case studies,
- counter,
- contact,
- resume,
- accessibility,
- keyboard navigation,
- reduced motion,
- media loading/performance,
- Multimedia hidden state,
- Multimedia visible/published state,
- Knowledge Lab hidden state,
- Knowledge Lab visible/published state,
- search/filters,
- copy code,
- safe HTML/CSS preview.

## Admin

- password login,
- TOTP MFA,
- AAL2 state,
- Overview,
- analytics,
- project add/edit/cancel behavior,
- image/media operations,
- resume manager,
- inbox,
- contact settings,
- Creative manager add/edit/delete/reorder,
- Draft save,
- Preview Draft,
- Publish Live,
- Operations/audit/error views,
- recovery-code status,
- emergency recovery non-destructive path,
- logout.

## Security

- confirm AAL1 cannot perform protected writes,
- confirm AAL2 protected writes work,
- RLS/public-read behavior,
- no secrets in browser source,
- advisor review with intentional findings documented.

## Last/destructive tests

Recovery flows that remove factors or force logout should be tested last because they may require re-enrollment.

## After QA

- clean/reset test analytics as appropriate,
- exclude owner browser if planned,
- update docs,
- create production baseline/release marker,
- update this master context file.

---

# 21. Documentation already in the repository

Existing docs include:

- `docs/PORTFOLIO_MAINTENANCE_GUIDE.md`
- `docs/BACKUP_RECOVERY_CHECKLIST.md`
- `docs/FINAL_QA_CHECKLIST.md`

These remain useful specialized documents.

This `PORTFOLIO_MASTER_CONTEXT.md` file is the high-level continuity/source-of-truth document that ties together product direction, creative direction, implementation status, risks, pending work and future roadmap.

Eventually update the specialized docs to include Multimedia/Knowledge Lab once those modules are finalized.

---

# 22. GitHub/deployment working rules

- Default branch: `main`.
- GitHub Pages deploys from pushes through the existing workflow.
- Always re-fetch a file before write and use its current SHA.
- Never perform simultaneous writes to the same path.
- After meaningful code commits, check the latest Pages workflow result.
- Hard refresh may be needed because browser cache can retain old JS/CSS.
- Do not force-push or rewrite history for ordinary portfolio maintenance.

Latest verified deployment at the time of this consolidation:

- workflow: `Deploy portfolio to GitHub Pages`
- run: `#127`
- status: completed
- conclusion: success
- head SHA: `48c35305f946c91eafed8da4d4376971d1d058f4`
- display title: `Bust caches for Creative portfolio modules`

This is a historical checkpoint, not permission to assume all creative functionality is correct.

---

# 23. Risk policy for future changes

For material portfolio/system changes, explain risk concisely.

Use this pattern:

- **What could go wrong**
- **Risk level**
- **Safeguards/mitigations**
- **Does this affect data/security/public content?**
- **Rollback path**

Examples:

### Creative public rendering

- Risk: malformed Live state could break a section or create layout/performance issues.
- Level: Low-Medium.
- Safeguards: OFF by default, Draft preview, schema normalization, escaped text, lazy media.
- Data/security: should not affect authentication/accounting; mainly presentation/public content.
- Rollback: turn module OFF or revert the specific frontend commit.

### Admin creative write logic

- Risk: accidental overwrite of unrelated Draft keys.
- Level: Medium.
- Safeguards: merge only creative keys into latest Draft, require AAL2, validate state before write.
- Data/security: could affect portfolio content if merge logic is wrong; should not weaken auth.
- Rollback: restore previous Draft/revision and revert code commit.

---

# 24. What is DONE vs PENDING

## Done / materially implemented

- GitHub Pages portfolio foundation.
- Developer/Application Support visual identity.
- Software project case studies.
- Responsive/navigation/accessibility work.
- Public visitor counter.
- Contact delivery/Admin Inbox.
- Supabase Draft/Live content architecture.
- Password + TOTP MFA.
- AAL2 hardening for sensitive writes.
- Recovery and emergency recovery systems.
- Analytics and Operations/Audit/Error tooling.
- Resume management foundation.
- Project manager + modal close fix.
- Admin Creative Manager foundation.
- Initial Multimedia portfolio strategy.
- Initial Knowledge Lab architecture/design direction.
- Gatchalian campaign concept exploration.
- Gatchalian preferred campaign presentation selected.
- Gatchalian video storyboard/direction drafted.

## Pending / not yet considered final

- Verify/finish public Multimedia rendering.
- Verify/finish public Knowledge Lab rendering.
- Make public creative modules visually match the approved visual-first direction.
- Add/populate actual first Gatchalian portfolio item.
- Produce final brand-accurate Gatchalian creative assets using exact logo overlay.
- Produce the first actual video ad using a free workflow.
- Add Exponify creative campaign.
- Add more varied multimedia work.
- Add first real Knowledge Lab entries.
- Complete final one-bagsak QA.
- Update maintenance/QA docs for creative modules.
- Reset test analytics / production cleanup after QA.
- Establish production v1 release marker/changelog.

---

# 25. Recommended immediate next steps

Unless the user changes priority, continue in this order:

1. **Finish Gatchalian Project #1 assets** using the selected campaign direction and exact official logo.
2. **Create the free-render video package**: exact vertical frames, overlay text, motion/timing map, voiceover/SFX suggestions, and CapCut assembly plan.
3. **Inspect and complete public Multimedia + Knowledge Lab rendering** in the repository.
4. Add the first Gatchalian entry through Draft and test Preview.
5. Keep public module OFF until the result looks recruiter-ready.
6. Build **Exponify Project #2** with a distinctly different corporate/tech style.
7. Seed Knowledge Lab with 3-5 useful real entries rather than empty placeholders.
8. Run focused creative QA.
9. Continue portfolio content expansion.
10. Run the final full QA and production cleanup.

---

# 26. Suggested first Knowledge Lab seed content

Good starter entries because they match actual skills/projects:

1. **Canva — Fast Product Price Card Layout**
2. **Photoshop — Clean Product Cutout / Background Workflow**
3. **CapCut — 15-Second Product Ad Timing Pattern**
4. **Java — Searchable ComboBox / Dropdown Pattern**
5. **Apps Script — Debounced Search + Pagination Pattern**
6. **Git — Safe Pull / Commit / Push Routine**

Only publish entries the user can explain.

---

# 27. Quality bar for Multimedia hiring

Before a creative work becomes Featured, check:

- Is the logo/brand accurate?
- Is typography clean and readable?
- Is spacing deliberate?
- Are prices/details verified?
- Is the work labeled honestly?
- Does it show a specific design objective?
- Can Noel explain how it was made?
- Does the final image/video look good on mobile?
- Is the presentation stronger than merely showing the raw ad?
- Is there enough variety across the whole portfolio?

A recruiter should see **campaign thinking + execution + process**, not just isolated generated images.

---

# 28. Things NOT to do

- Do not silently publish placeholder prices as real current Gatchalian offers.
- Do not invent delivery coverage, business claims, client relationships, metrics or results.
- Do not use a distorted AI recreation of the official Gatchalian logo as the final brand mark.
- Do not pay for Runway/HeyGen or another generator unless the user explicitly changes the current no-paid-tools decision.
- Do not present Blender/Illustrator/Premiere/DaVinci as mastered skills yet.
- Do not expose service-role keys or private auth data.
- Do not weaken MFA/AAL2/RLS.
- Do not rebuild working Contact/Inbox systems without a verified reason.
- Do not call the whole portfolio finished before QA.
- Do not let Multimedia make the software portfolio disappear; hybrid capability is the differentiator.

---

# 29. Future high-value ideas

These are optional improvements after core creative content works.

## Recruiter mode / focused landing paths

Instead of one generic homepage trying to serve everyone, later consider lightweight focus links such as:

- `/` — hybrid overview,
- `?focus=developer` — prioritize Projects/technical skills,
- `?focus=creative` — prioritize Multimedia/creative tools.

Do not build this until the creative content is strong enough.

## Creative project detail modal/page

A full-screen visual case-study view could show:

- campaign board,
- individual images,
- video,
- storyboard,
- process notes,
- tools,
- work classification.

## Knowledge Lab learning timeline

Entries can show honest progress like `Learning`, `Practicing`, `Working`, without turning the portfolio into fake certification.

## Portfolio asset health checks

Admin could later flag:

- missing alt text,
- broken URLs,
- oversized images,
- items without project labels,
- unpublished drafts,
- missing thumbnails/posters.

## Resume variants

Later maintain targeted resume variants:

- Developer/Application Support
- Multimedia/Creative
- Hybrid

All should stay factually consistent.

---

# 30. Handoff prompt for a new chat

Use this text when the chat reaches its limit:

> Continue my portfolio project from the current repository state. First read `PORTFOLIO_MASTER_CONTEXT.md` in `Knowlexit09/noel-labasan-portfolio`, then verify the actual `main` branch and current Git state before changing anything. Treat that file as the product/continuity source of truth, but trust the live repository for actual code state. Do not restart completed architecture, do not weaken security, do not publish creative placeholders as real facts, and keep Multimedia/Knowledge Lab OFF until they are ready. Continue from the highest-priority pending item and update `PORTFOLIO_MASTER_CONTEXT.md` after major milestones.

---

# 31. Maintenance rule for this file

After a meaningful milestone, update these sections at minimum:

- **Last consolidated date**
- **Current verified repository state**
- **Done vs Pending**
- **Immediate next steps**
- any changed decisions under Multimedia / Knowledge Lab / Security / QA

The purpose is simple: **a new chat should be able to continue the project correctly after reading one file, without requiring the user to retell the entire history.**
