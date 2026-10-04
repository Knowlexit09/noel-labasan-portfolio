# Portfolio Prepublication Release Candidate

> Repository: `Knowlexit09/noel-labasan-portfolio`  
> Status: **STAGING / REVIEW — DO NOT TREAT AS FINAL PUBLIC RELEASE**  
> Date: 2026-10-05 (Asia/Manila)

This file is the final-review checklist for the current portfolio expansion. The owner asked to finish/stage the work first, review it, and personally perform the final **Publish live** action afterward.

## Publication rule

- Do not bypass the Admin Draft → Preview → Publish Live workflow.
- Do not write Live state through management SQL.
- The prepared Admin staging pack writes **Draft only** and requires the owner's AAL2 session.
- Staging case pages remain `noindex,nofollow` until the owner approves the release.
- Do not add staging case pages to `sitemap.xml` until publication is intentional.

## Current release-candidate creative set

### 1. Gatchalian Meatshop — Social Media Campaign

Classification: **Client Work**  
Status: visual QA accepted; case page remains noindex for prepublication review.

Approved current featured campaign values:

- Pork Liver — ₱65
- Kasim/Laman — ₱120
- Belly/Liempo — ₱150
- Drumstick — ₱90
- Fish Fillet — ₱130
- Frozen Pompano — ₱310/kg

More Work historical gallery:

- `Murang Karne — Retail Promo` — Previous campaign
- `Negosyo Package` — Reseller / Business Promotion — Previous campaign

Historical artwork is explicitly labeled so old prices are not represented as current offers.

Staging route:

`/multimedia/gatchalian-meatshop.html`

### 2. Exponify — Business Operations Campaign

Classification: **Spec Work / Campaign Concept** until ownership/client status and public-display permission are explicitly confirmed.  
Status: staged, noindex.

Direction:

- problem-first business ad
- manual-work / missed-follow-up tension
- Exponify solution reveal
- Sales / CRM / Inventory / Reports feature grouping
- verified product UI only if/when real screenshots are added
- single CTA: personalized demo
- corporate blue/teal visual language deliberately different from Gatchalian
- final optimized vertical MP4 is uploaded and the preferred storage URL is prepared for Draft binding
- one campaign image source drives the hero background, video poster, and Featured Campaign image

Staging route:

`/multimedia/exponify.html`

### 3. Seedlandia — Game Visual Development

Classification: **Personal Project**  
Status: staged, noindex.

Portfolio scope:

- world-map planning
- four starter player plots
- Mother Tree Village
- Green Meadows
- Whispering Forest
- Crystal Cavern
- Duel Arena
- future biome/expansion planning
- compact game HUD direction
- farming/discovery/collection/progression design

The case explicitly distinguishes concept/system planning from final in-game screenshots and does not claim roadmap features are already implemented.

Staging route:

`/multimedia/seedlandia.html`

### 4. Qyntro Daily — Brand Identity & Packaging

Classification: **Personal Project**  
Status: verified genuine personal project, staged, noindex.

Verified source:

- 10-page editable Canva brand guide, design ID `DAHXE6rHNGs`
- public portfolio uses only the Canva **view-only** link; the collaboration/edit URL is not exposed
- `Qyntro Daily` is the core brand name and `Coffee` is the descriptor

Portfolio scope:

- primary logo, icon-only mark, and monochrome application
- warm coffee-inspired visual identity and color palette
- typography system
- three packaging variants: Dark Roast, House Blend, and Smooth Blend
- takeaway cups, signage, retail bag, and membership-card applications
- social media campaign concepts and CTA directions
- promotional material and lifestyle/workspace mockups
- transparent Personal Project / AI-assisted and template-supported workflow disclosure

Staging route:

`/multimedia/qyntro-daily.html`

Canva view-only presentation:

`https://www.canva.com/d/kuS8O6vPKjTqtMl`

## Knowledge Lab review set

The prepared Draft pack contains three starter entries:

1. Photoshop — Smart Object / non-destructive transform workflow
2. HTML/CSS — responsive CSS Grid with `repeat(auto-fit, minmax(...))`
3. Java — defensive numeric input parsing/validation

Safety:

- HTML/CSS safe preview uses the existing sandboxed preview path.
- Arbitrary JavaScript/network execution remains disabled.
- Java remains copy/explanation only, not browser-native runnable code.

## Admin prepublication tools

### Prepare review set

Creative Admin includes a **Prepare review set** action implemented by `admin/admin-prepublish-staging.js`.

It:

- requires AAL2,
- reads the latest Draft/Live state,
- writes **Draft only**,
- preserves unrelated state and the existing Gatchalian data,
- upserts Exponify, Seedlandia, Qyntro Daily, and the three Knowledge Lab starters by title,
- enables Multimedia + Knowledge Lab in Draft for Preview,
- is idempotent,
- never writes Live.

### Admin scroll restoration guard

`admin/admin-scroll-reset.js` prevents an old deep browser scroll position from making the Admin/login shell look like a blank dark page after authentication/view switching.

## Non-destructive QA completed

### Backend health

At the prior QA checkpoint:

- open error events: **0**
- error events in the previous 7 days: **0**
- audit failures in the previous 7 days: **0**

These are checkpoint values, not a claim that no later errors can occur; re-check before final publication.

### Security advisor status

Do not claim “zero findings.” Current known notices include:

- RLS enabled/no direct policy on service-oriented tables (informational; access architecture must be reviewed in context)
- authenticated-callable `SECURITY DEFINER` warning for `portfolio_security_status()`
- leaked-password protection disabled at the Supabase Auth plan/settings level

References:

- RLS linter: https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy
- SECURITY DEFINER linter: https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable
- password protection: https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection

These are not newly introduced by the Multimedia work and should not be “fixed” blindly without confirming intended architecture/cost implications.

### Performance advisor status

Unused-index notices remain informational in this low-traffic portfolio. Do not delete indexes solely because the advisor has not observed usage yet.

### Repository secret sanity

Prior repository searches found no `service_role`, `SUPABASE_SERVICE_ROLE`, or `ghp_` token strings. The browser Supabase key is a publishable key by design; authorization remains enforced through Auth/RLS.

### Search/indexing safety

- `/admin/` is disallowed in `robots.txt`.
- Gatchalian, Exponify, Seedlandia, and Qyntro Daily staging pages use `noindex,nofollow`.
- Staging case pages are not in `sitemap.xml`.

## Final visual review checklist

### Homepage — Draft Preview

- Multimedia navigation appears only when Draft Multimedia is ON.
- Gatchalian, Exponify, Seedlandia, and Qyntro Daily cards render with readable thumbnails/titles/labels.
- Labels are truthful: Client Work / Spec Work / Personal Project.
- Category filters work, including Brand Identity for Qyntro Daily.
- Multimedia search works.
- All known cards route to their internal case studies while preserving the Draft Preview nonce.
- Knowledge Lab appears in Draft Preview.
- Knowledge filters/search work.
- HTML/CSS safe preview works without allowing scripts/network access.
- Java entry remains copy-only.
- No horizontal overflow at phone width.
- Light/dark theme remains readable.

### Gatchalian

- hero video is playable and has no autoplay sound
- campaign carousel preserves meaningful artwork/text
- two More Work cards are fully contained
- no image/text overlap
- historical labels are visible
- enlarged viewer works
- desktop/mobile spacing remains acceptable

### Exponify

- corporate/tech visual language is clearly different from Gatchalian
- title and Spec Work label are visible
- uploaded MP4 is playable
- hero background, video poster, and Featured Campaign image use the intended campaign image source
- cover is readable on desktop/mobile
- flow reads Problem → Tension → Solution → Features → Proof → CTA
- no claim implies verified client status or unverified business performance

### Seedlandia

- Personal Project label is visible
- map cover remains readable on desktop/mobile
- zone cards stack correctly
- concept-vs-implemented disclaimer is visible
- no claim says the concept art is a final Roblox screenshot

### Qyntro Daily

- Personal Project label is visible
- `Qyntro Daily` reads as the brand and `Coffee` as the descriptor
- Q-led coffee/steam identity direction is recognizable without claiming trademark registration
- Dark Roast, House Blend, and Smooth Blend are legible and visually distinct
- palette/type and brand-application sections remain readable on desktop/mobile
- the Canva button opens the view-only presentation and never exposes the edit/collaboration URL
- no copy implies a real client, operating coffee business, sales result, or trademark clearance
- AI-assisted ideation / template-supported workflow disclosure is visible
- final Canva copy is reviewed for obvious typos before public publication

### Core portfolio

- Home/About/Projects/Experience/Skills/Certificates/Resume/Contact still render
- BankFlow / Frozen POS / CRUD internal links work
- mobile sidebar/nav works
- portfolio search works
- Contact form remains usable
- Resume page/view/download controls remain usable
- no Admin navigation appears publicly

## Final publication sequence — only after owner approval

1. Owner runs **Prepare review set** from Creative Admin with AAL2 so the latest four-project candidate set is in Draft.
2. Owner reviews **Preview Draft** and all staging case pages.
3. Resolve any visual/content corrections in Draft/code/Canva.
4. Owner explicitly approves the release.
5. Owner performs the final **Publish live** action through Admin/AAL2.
6. After Live state is verified, remove `noindex,nofollow` only from approved public case pages.
7. Add approved public case pages to `sitemap.xml`.
8. Verify the corresponding GitHub Pages deployment.
9. Verify public Live state and navigation.
10. Create final production baseline/changelog marker.

## Items intentionally not fabricated

The long-term Multimedia goal remains 5–7 strong works, but the release candidate does **not** invent missing projects simply to reach a number. Qyntro Daily now provides a verified Brand Identity & Packaging personal project. Future photo-manipulation, motion-logo, and standalone 3D learning pieces should be added only when genuine source/final work exists and can be labeled truthfully.

## Rollback anchors

- Pre-gallery infrastructure: `040c4a2edb2b6117dfb645541378187c7ce8430b`
- Pre-final-gallery/auth baseline: `a3b1cd15dafb2de17ba3b00672a3ab2cbd03922f`
- Gatchalian accepted card-containment runtime: `18711cdd51f49827b21014ed0a4673d39877013f`
- Prepublication staging started from `73d1911eabb992ae0d344b25303f503665f2c23d`
- Qyntro Daily case-study introduction: `baca707c34dfa968e5024fc45f228fcb03b1e080`

## Risk summary

Risk level: **Low–Medium**.

Primary risks:

- publishing before review,
- stale Draft state,
- wrong project classification,
- broken media or Canva links,
- old campaign pricing shown as current,
- responsive regressions,
- accidentally exposing staging pages to indexing,
- accidentally publishing an editable Canva collaboration link,
- weakening AAL2/RLS for convenience.

Safeguards:

- Draft-only staging pack,
- AAL2 + RLS,
- explicit project labels,
- noindex staging pages,
- historical-price labels,
- Canva view-only link for Qyntro Daily,
- fail-closed modules,
- non-destructive QA first,
- user-owned final Publish action.

Business/system data impact: **none**. Portfolio changes do not modify Frozen Meatshop POS accounting, inventory, sales, or other operational records.
