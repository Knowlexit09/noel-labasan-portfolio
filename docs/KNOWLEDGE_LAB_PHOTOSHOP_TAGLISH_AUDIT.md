# Photoshop Knowledge Lab — Filipino / Taglish full-lesson audit

**Date:** October 13, 2026 (Asia/Manila)  
**Repository:** `Knowlexit09/noel-labasan-portfolio`  
**Source of truth:** Current `main` GitHub files, not an assumed Photoshop course count.

## Actual current inventory

**Exactly one Photoshop lesson is published in Knowledge Lab**. This is a proof-backed, portfolio-linked creative lesson:

| # | Lesson ID | Lesson topic | Filipino/Taglish coverage |
| --- | --- | --- | --- |
| 1 | `photoshop-smart-object-workflow` | Smart Objects and non-destructive product editing | Complete manual overlay |

This is **not** a claim that Photoshop has a full beginner-to-expert syllabus, or that the site contains 91 Photoshop lessons (91 refers to **Java**, not Photoshop). Existing HTML, CSS, JavaScript, Java, Canva, CapCut and other topics were not added to or removed from the Photoshop inventory.

## Field-by-field scope

The manual Filipino/Taglish overlay in `assets/js/knowledge-lab-photoshop-tl.js` covers all preexisting prose and quiz fields:

- Lesson title, level, summary, definition, four learning points, objective.
- Complete explanation with real Photoshop terminology and actionable guidance.
- Tip, hack, common mistake, expected result and real-world use.
- Portfolio proof label, accessible alt text, honest proof note, case-study link label, and **all four workflow steps**.
- All two quiz questions, four options each and full correct-answer explanations; existing correct-answer indices remain unchanged.
- Photoshop category status and description; the single-lesson limit is explicitly disclosed.
- **Additional bilingual practical exercise** with prompt and concrete verification criteria. The English learning source receives a matching practice, not a Taglish-only instruction.

## Technical correction

The original English tip could be misunderstood as suggesting ordinary duplication creates independent Smart Object **contents**. In Photoshop, normal duplicated Smart Object layers often share the same embedded contents; **Layer > Smart Objects > New Smart Object via Copy** is the separate-content command. Correct English and Filipino guidance now explains that difference. A Smart Object does **not** guarantee lossless enlargement beyond the source photo's resolution.

## Content/proof integrity and privacy

- Original finished Gatchalian Meatshop portfolio image URL, case-study link, image kind and proof asset remain unchanged. The proof is of a finished campaign and its documented tool workflow, **not** a recording of every Photoshop action.
- All original English narration remains available, except for the intentional accuracy correction and additive hands-on practice.
- No automatic Photoshop operation, Adobe app integration, image changes, uploads, fake editing runs, or claim of having executed Photoshop itself.
- Existing Java historical inline Practice IDE, runnable HTML/CSS/JS IDE, test fixtures, Supabase/Auth/Admin Publish Live, CSP and security rules are unchanged.
- A CI source gate checks the actual Photoshop inventory, required translated fields, four steps, source URL parity, both quiz answers, correct Adobe command and bilingual practice.
- Playwright browser regression visits the actual Photoshop proof lesson, checks English->Taglish->English switching, four localized workflow steps, translated quiz, preserved image and proof link.

## Release evidence

**Verified remote application-code run:** [GitHub Actions #38282711361](https://github.com/Knowlexit09/noel-labasan-portfolio/actions/runs/38282711361) completed **SUCCESS** against `64594d79a53bd74d15c6b7fe758ca784d0bfdd45`. It passed all steps, including field-level Photoshop localization, 91 Java 21 source/output checks and real Chromium UI interactions. A follow-on docs-only GitHub Pages run should be independently checked for matching final documentation HEAD; the application source was already committed and tested. Independent Adobe Photoshop program execution and human editorial review are not part of this CI.

**Adobe official reference:** https://helpx.adobe.com/photoshop/desktop/create-manage-layers/smart-objects/duplicate-an-embedded-smart-object.html — regular Smart Object duplicates share content; New Smart Object Via Copy separates it.

Validate latest GitHub Actions **Validate Knowledge Lab IDE** and matching **Deploy portfolio to GitHub Pages** run for the exact code commit before calling release green. No independent manual Photoshop application session or professional editorial sign-off has been performed.

## Current gap and sensible next learning path

**Not yet published:** a genuine beginner-to-expert Photoshop course. High-value future topics include first workspace/documents; image resolution, PPI and export; layers and groups; selection and Layer Masks; adjustments and clipping masks; retouching; typography and hierarchy; Smart Objects, Smart Filters; product mockups; color management; accessibility and production handoff; multi-size social campaigns; and genuinely reviewed portfolio capstones. Any added creative lessons must follow the project's proof requirements; do not fabricate portfolio screenshots or mark unverified tool demonstrations as real proof.

## Patch risk and rollback

**Risk: Low–Medium** for inaccurate wording, locale merging, proof instructions, quiz UI, or category display. **Data/accounting/security impact:** no data mutation, no auth changes and no change to Java external compiler consent. Safeguards: untouched underlying proof URLs and original creative assets; English/source separation; automated static/content/browser checks; additive translation-only module loaded before runner. **Rollback:** ordinary targeted `git revert` of the new Photoshop translation file, the `knowledge/index.html` script-loader insertion and matching CI edits. Do not force-push or revert 91 Java language work.
