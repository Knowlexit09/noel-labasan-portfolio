# Photoshop Knowledge Lab — Beginner-to-Expert course, shortcuts and QA

**Date:** October 13, 2026 (Asia/Manila)  
**Repository:** `Knowlexit09/noel-labasan-portfolio`  
**Scope:** Desktop Adobe Photoshop learning guides, not a browser-hosted Photoshop editor.

## Published course inventory — 49 lessons

This replaces the previous source-of-truth statement that Photoshop had only one lesson. The course now includes **48 original English+Taglish guided lessons across eight stages**, plus **one existing proof-backed real portfolio lesson**. Guided exercises teach actual actions to practice in Photoshop desktop; they **do not** claim that Photoshop was executed in the browser or that student output has been inspected. The established real Gatchalian Meatshop campaign proof remains unchanged.

| Stage | Topic | Guided lessons |
| --- | --- | ---: |
| 01 · Beginner Foundations | Workspace, new documents, pixels/PPI, zoom, crop, PSD vs exports | 6 |
| 02 · Essential Tools & Layers | Layers, Move, duplicates/groups, Free Transform, opacity, brush/eraser | 6 |
| 03 · Selections, Masks & Retouching | Marquee, Lasso/Quick Select, Layer Masks, clipping masks, Spot Healing, Clone Stamp | 6 |
| 04 · Typography & Design | Text, visual hierarchy, guides, editable shape badges, Pen Tool, Layer Styles | 6 |
| 05 · Color & Delivery | Adjustment layers, histogram/Levels, Curves, Camera Raw, RGB/CMYK profiles, social exports | 6 |
| 06 · Advanced Compositing | Smart Objects, Smart Filters, Select and Mask, perspective, lighting/shadows, ethical content-aware editing | 6 |
| 07 · Expert Production | Brand consistency, Actions, mockups, legibility/QA, asset rights, source/project handoff | 6 |
| 08 · Portfolio Projects | Six applied Photoshop projects from cutouts and price cards to complete client handoff | 6 |
| 09 · Real Portfolio Evidence | Existing Smart Object workflow linked to actual Gatchalian Meatshop campaign | 1 |

## Every one of the 48 new guided lessons contains

- A specific topic title, accurate English definition/summary and individually written Filipino/Taglish definition/summary.
- Concept-specific explanation in both languages with an example or real Photoshop workflow.
- Learning objective and three learning points in each language.
- Concrete, step-numbered **hands-on desktop exercise**, expected visible result and checking criteria in both languages.
- Practical tip, keyboard workflow hint, common mistake and real-world application.
- Two formative quizzes: one about the taught concept and one about a context-appropriate **default Photoshop desktop shortcut**, each with feedback. The second is a memory check, **not** a claim that Photoshop ran or checked the file.
- A dedicated **Windows / macOS shortcut panel**. Keys were selected from Adobe desktop shortcut documentation: tool selection letters, file operations, Free Transform, Layer via Copy, brush size, selecting/deselecting and related controls.
- A caution that keyboard mappings are customizable; Photoshop on the **web has different shortcuts**, particularly Free Transform. Users can inspect their installed app at **Edit > Keyboard Shortcuts**.

The existing Smart Object proof lesson gains the same two-platform shortcut panel. Its unmodified finished campaign image and case-study links remain real portfolio proof; guided lessons do **not** fabricate images, screen recordings, live IDE execution, or verified client deliverables.

## Implementation and architectural continuity

- `assets/js/knowledge-lab-photoshop-course-core.js` — eight-stage curriculum, Windows/macOS desktop shortcut bank, bilingual lesson assembly, separate original proof, and strict unique-ID/field checks.
- `assets/js/knowledge-lab-photoshop-course-01.js` through `-08.js` — six individually authored guided lessons per stage.
- `assets/js/knowledge-lab-photoshop-tl.js` — retained fully authored bilingual Smart Object proof lesson and actual unchanged portfolio evidence.
- `knowledge/index.html` — course loader after original Photoshop language overlay, before `knowledge-lab-runner.js`.
- `assets/js/knowledge-lab-runner.js` — marks guides as **GUIDED PRACTICE**, never as REAL PROOF or a fake Java/browser compiler; renders shortcut section with truthful **Photoshop keyboard shortcuts**, Windows and macOS labels, cautions, and retains existing code-language shortcut UI for other categories.
- `.github/workflows/validate-knowledge-lab-ide.yml` — requires 49 unique Photoshop lessons, exactly eight stages × six guides + separate proof, two languages with complete lessons, practice, quizzes and keyboard mappings, plus Chromium language/quiz/shortcut browsing and existing Java/html/css/js regressions.

All other course IDs, the **91 Java lessons**, their Java 21 compile/output checks, original Java Practice IDE and consent-gated external OneCompiler, HTML/CSS/JavaScript practice, Supabase/Auth/Admin Publish Live and portfolio media remain intact. Old quiz scores for existing lesson IDs are preserved by their unchanged localStorage keys.

## Key factual/editorial boundaries

- Desktop Photoshop default shortcut examples are **Ctrl + T / Cmd + T** Free Transform and **Ctrl + J / Cmd + J** layer via copy. Photoshop on the web is **not** the same: some browser-held shortcuts differ.
- Tool-group letters (such as W, J, G or U) can cycle among tools and behave differently depending on keymap and focus.
- Smart Objects preserve editable transformations but do **not** invent new detail when enlarging a low-resolution photo. Normal Smart Object duplicate contents are often shared; **New Smart Object via Copy** gives independent embedded contents.
- The curriculum teaches PSD preservation, legal asset sourcing, color-profile-dependent print, truthful product editing, client handoff and appropriate mockup labeling; it does not claim client commissioning or generated images as actual proof.
- The 48 guided practice outputs and six capstones have **not** been independently produced or reviewed with an installed copy of Adobe Photoshop. They are exercises and acceptance criteria, not tested Photoshop files.

## Primary Adobe documentation

- https://helpx.adobe.com/photoshop/desktop/get-started/settings-and-preferences/view-keyboard-shortcuts.html — desktop shortcut dialog, Windows and macOS
- https://helpx.adobe.com/content/dam/help/en/photoshop/using/default-keyboard-shortcuts/photoshop-keyboard-shortcuts.pdf — common desktop shortcuts for Free Transform, layer copy, brush size etc.
- https://helpx.adobe.com/photoshop/desktop/create-manage-layers/get-started-layers/work-with-the-layers-panel.html — Layers panel reference
- https://helpx.adobe.com/photoshop/desktop/get-started/learn-the-basics/hide-show-panels.html — Tab panel-visibility key
- https://helpx.adobe.com/photoshop/desktop/create-manage-layers/smart-objects/duplicate-an-embedded-smart-object.html — independent Smart Object copies

## Release verification
**Verified PASS on application-code commit `1f1e13ed7d6c1c1d95e5fb4a93ad749c50f6c942`:** [Validate Knowledge Lab IDE #38285977284](https://github.com/Knowlexit09/noel-labasan-portfolio/actions/runs/38285977284) completed **SUCCESS**. Every required job step is green: static JS/source, 49 Photoshop bilingual shortcut+quiz integrity, all 91 Java 21 lesson outputs in isolated compilation folders, and Playwright browser journeys (beginner / expert / capstone / original proof, switching English↔Taglish, Windows/macOS shortcut labels, no fake browser editor). [Matching GitHub Pages deployment #38285977278](https://github.com/Knowlexit09/noel-labasan-portfolio/actions/runs/38285977278) completed **SUCCESS** on that same application commit. A later documentation-only deploy is not required for app-code acceptance, but may independently complete.


Source-only and GitHub Actions checks must be recorded for the **exact current application-code SHA**. Passing CI verifies JavaScript load, static schema/source invariants and browser behavior; it is not a substitute for an installed Adobe Photoshop practical examination or native-speaker human copy-editing. Document the last confirmed successful GitHub Actions / Pages run separately.

## Risks, safeguards and rollback

**Patch risk: Medium**, because a new curriculum + language packs + renderer + browser tests touch user-facing UX and grow the content count. Potential defects: wrong shortcut keys for a customized install, overly broad editorial wording, incorrect quiz translation, slow category list with 49 lessons, or localized shortcut headers spilling into other language tracks. **Integrity impact:** No changes to user account security, database, financial/inventory state, permission checks, or media rights.

**Mitigations:** use Adobe documentation to validate desktop shortcut defaults; display custom-shortcut caveat; keep real portfolio proof separate; use strict module checks and targeted Playwright browser regression; preserve existing English and Filipino lessons and original code IDE behavior. **Rollback:** ordinary targeted Git revert of the eight content batch files, course core, `knowledge/index.html` loader, `knowledge-lab-runner.js` guide/shortcut UI and relevant CI adjustments; no force-push and no unrelated Java rollback.
