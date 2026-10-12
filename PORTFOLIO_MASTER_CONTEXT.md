# PORTFOLIO MASTER CONTEXT

## Original IDE restoration (user preference) — 2026-10-12

**Latest explicit UI directive:** User found Java Run different from old HTML/CSS/JavaScript Run, and chose the **old original IDE** as the standard. Continue with that exact direction; don't reintroduce a full-width embedded vendor IDE that replaces the user's editor.

- Restored the **same dark two-column Knowledge Lab IDE shell** for Java, using the original `kl-ide-head`, `kl-ide-workspace`, code editor left, Result/Console right, mobile stacking and matching Run/Reset/Copy/Full Screen/Stop toolbar; Ctrl/⌘+Enter works. Java IDE appears before the reference panel like the original browser runner. English/Filipino title is `Browser IDE · Java`.
- Removed the previous separate Java 'Enable IDE then hide source editor' experience. The **first Run** now reveals a clear third-party consent control in the normal Result pane; until the user explicitly chooses Enable Java compiler, no external iframe is created and no source is sent. After consent the first-party Java source textarea remains visible; Run syncs the source to the exact `https://onecompiler.com` origin and requests actual Java compilation using documented `triggerRun`. The provider iframe is confined to the Result pane. Its vendor-owned editor/console may have different *internal* appearance, because the documented free embed doesn't expose output-only stdout, and the site does not fabricate first-party Java stdout. Console tab tells users where actual output is. Stop closes local iframe; an already-running remote execution might continue. No popup allowance in iframe; no referrer; HTML/CSS/JS runner untouched.
- Kept previous safeguard: language-only rerenders preserve Java source and active compiler; switching lessons closes the old instance. Original Java source and **expected** output are shown separately after the IDE rather than misleading visitors into believing they are edited-run results. No secrets should be pasted into third-party code compilers.
- Expanded browser regression code to assert desktop two-column and responsive one-column layouts, identical toolbar, consent gate, fake OneCompiler message fixture + actual `triggerRun` request, reset, tabs, language persistence, and Stop teardown. Independently checked updated Java controller/main runner/CI inlined scripts for syntax, HTML section balance and hook presence, and controlled event behavior including no pre-consent iframe, exact-origin messaging, original draft preservation, Run and Stop: PASS. **Full GitHub Actions, real provider execution and latest deployed Pages still UNVERIFIED.**
- Repo remains at 401 source Knowledge Lab records (91 Java, 59 JavaScript, etc.); the curriculum is still genuinely **IN PROGRESS**, not full expert completion. Last course continuity details and 33-question Filipino reviewer retained, no course changes in this UI patch.
- Key commits this patch: Java markup `e9adc1338b15227620a64569af9363d0e970b6eb`, Java controller `442f4638b35557625c2082ac7a7d8259341f949d`, original CSS split layout `aabbbe946b3d1ec23b881d3c7d0222793128fce3`, positioning parity `a912b909be0aa6da56255ce1f237bb501fca6bed`, Java title locale `bb3a4da398f1505b6054548367431e3bee52141c`, truthful iframe-ready status `8e3c5fd7e3aabc64f902fa347beb27f6c4d241fa`, responsive and workflow tests `831cd5c9b93fa1f99517aac87af72898b546c3b6` + `269cb5b3b759cf767586229f592c60c6134ed8d5` + `ed595aa244bf1fad60cd5370ec5301e6050f3bef`, tighter popup sandbox `9160517d50267951335d78a1cfba60c6f9722de6`, coverage note `88878a944b85d0e84cdc6f5993fce954833896b7`.
- **Risk Medium**, main issue third-party code disclosure/provider uptime and CSS browser regressions; safeguards explicit consent, precise origin, iframe sandbox, public separate result, maintained browser sandbox, CI gate. No Admin Publish Live, backend/security, Supabase, or POS inventory/accounting mutated. Normal Git revert of IDE commits restores prior view; do not force push.



## Latest 2026-10-12 handoff — Java IDE language-preservation and verified-output clarity

**Continue from this checkpoint and the real latest GitHub HEAD; do not restart older 87/91 lesson work.**

- Reconciled repository as **401 unique Knowledge Lab records**, with Java 91, JavaScript 59, HTML 52, CSS 176, CSS Reference 20 and proof-backed creative 3. Source QA found no duplicate IDs, missing required teaching fields/quiz explanations or missing Java/JS stage mapping; **307** browser JavaScript snippets parsed without syntax errors. This is *source QA*, NOT proof of successful remote Playwright/CI/Pages deployment.
- Added a **reproducible Java 21 verifier** at `scripts/verify-knowledge-lab-java.cjs`, full gate count **91**, including `knowledge-lab-java-capstone-projects.js`. It compiles each `Main.java` source in its own temporary directory, runs it with Java 21, compares stdout to `expectedOutput`, verifies practice and reviewer schema, and cleans files in a `finally`. It may also run one named lesson with `--lesson <id>`. CI calls this helper directly in a separate step, replacing the previous shared-directory inline compile loop; previous schema/security gates remain intact. The authoritative remote CI result remains **unverified**.
- Hardened `assets/js/knowledge-lab-java-ide.js` so an English↔Filipino language change on the *same lesson* preserves in-progress Java code and the open external compiler iframe, while navigating to a different lesson closes it. Browser regression added for both draft and live iframe preservation. Independent mocked DOM integration PASS: no frame before consent, strict origin for source/run postMessage, `triggerRun` emitted, draft retained, iframe retained on language switch and torn down on departure.
- Added fully **manually authored 33-question Filipino Java exam reviewer** in `assets/js/knowledge-lab-java-exam-reviewer-tl.js`, loaded after existing curated Java localization. Every question has a reasoned answer; correct positions A/B/C distributed 11/11/11. English version also remains; normal language switch selects the matching reviewer, with browser/CI regression. Full manually reviewed lesson language versions now **53**: HTML20, CSS18, JS3, Java12. Other lessons visibly fall back to English, not automatic machine translation.
- Corrected visitor-facing wording from *'verified Java output'* / *'compile-tested in CI'* to **'expected example output (original code)'** and **'Java 21 · Run in practice IDE'** because the latest external workflow conclusion has not been confirmed. The independent third-party OneCompiler editor provides genuine Java Run via documented postMessage event and shows its own actual stdout; user consent and privacy warning remain. Source/skin is first-party consistent but external iframe has vendor-controlled internal appearance and availability.
- QA executed in this chat: full Java/JS source assembly audit PASS for counts, structure, unique IDs, quiz answer indices, stage mapping, and browser-snippet JS syntax. CI inline JavaScript syntactically parsed, and Java IDE event mocks passed. **NOT VERIFIED**: all 91 actual JDK source compilations, full Playwright workflow result, latest GitHub Pages deployment, actual remote OneCompiler execution. Do not invent confirmations or label all 91 compile-tested until authoritative run is read.
- GitHub commits this batch: isolated Java test script `b93aba54d55b99fdec4aa7a51bf2e7ccbe71f67b`, fixed environment `5c585ae05ed4b399ab648f0e620f84ec78b52a06`, isolated CI gate `bd87062f2b15b237d442498c9b40de0288597414`, Java IDE same-lesson draft safeguard `0ed53bdd3cfb5686bb57d235d01af08bfef7d039`, capstone count reconciliation `3c4d1ef21d8ecfae0484bbf334f1581a10d7f8eb`, language regression `cf7e0db739ad567aa162517f26bcba7b7caac93c`, Filipino exam source `52c2d046388b4a5488d4b4a3f07ae81a308c317c`, exam page integration `280697ae573b74cee9dee24f93d87dd164977461`, Filipino exam CI `d2af737f5b40d2c2d3d0bcbd3c72dcdc91f9506b`, honest expected-output labels `63d0efa21263ef1a1aecb698fd829509c87c555a` and `c199c3646b71af182a80320ac51f85eb077f5785`, coverage blueprint `066fddf593384de8c00383c2e0f1212e703ebe00`.
- **Pending top priority**: read actual green GitHub Actions Run, deployed Pages source and browser behavior, and live Java compiler editing/run/output with real third-party provider. Continue filling advanced JS module/API and Java Maven/JUnit/database integration gaps before claiming beginner-to-expert COMPLETE. Owner alone controls any backend Admin Publish Live.
- **Risk: Medium**. Possible UI/CI regression, external provider outages/privacy/code transfer. Safeguards: explicit user opt-in, exact-origin postMessage, iframe sandbox/referrer/CSP restrictions, no secret sending at rest, mock regressions, isolated JDK verification, no backend/POS changes. Rollback: standard revert of named commits; revert Java iframe source/UI/CSP as a unit if external integration proves problematic. No force push.



## Latest Knowledge Lab checkpoint — October 12, 2026 (87-reviewer + 4-capstone phase)

**This section supersedes all older Java/JavaScript counts in this document. DO NOT restart completed work.**

- Repository: `Knowlexit09/noel-labasan-portfolio`, branch `main`. Java **91** lesson records, JavaScript **59**; all Knowledge Lab records total **401** (HTML52 + CSS176 + CSS reference20 + Java91 + JS59 + creative proof3). Courses remain explicitly **Curriculum expansion in progress**; NEVER mark beginner-to-expert complete while gaps remain.
- User's specific preference: preserve the **original HTML/CSS/JavaScript Knowledge Lab editor design** across languages, with working **Run Java ▶**, edit/reset functionality and visible real output. Achieved a shared first-party-looking dark IDE shell with `Main.java` and toolbar. Java compilation itself is **external OneCompiler**: user must click Enable Java IDE; Run uses documented `triggerRun` postMessage to the trusted `https://onecompiler.com` iframe. No Java simulation masquerading as execution. Cross-origin OneCompiler editor/output can look different within the consistent shell; do not claim exact pixel equality or provider end-to-end verification.
- Security boundary: no OneCompiler iframe before explicit consent; strict outbound `postMessage` target and inbound origin/source checks, sandboxed iframe, referrerpolicy no-referrer, single provider allowlisted via `frame-src` only. Warn not to paste passwords, private code, API keys or personal/business secrets. Original HTML/CSS/JS runner sandbox and CSP preserved. No Admin Publish Live or backend/Supabase data modification.
- Added **17** corrected exam fundamentals in `assets/js/knowledge-lab-java-exam-fundamentals.js`: class/object, constructors, primitives/wrappers/null, type precision, methods, inheritance, interface method bodies, Throwable hierarchy, checked and unchecked exceptions, AutoCloseable and suppressed exceptions. Correct misleading simplifications from user notes: Throwable—not Exception—is parent of Error; modern interface permits default/static/private methods; checked-exception enforcement occurs at compile time but exceptions at runtime; long→double widening can lose precision; default constructor vs no-arg constructor differ.
- Added **16** DAO/SOLID/JDBC lessons in `assets/js/knowledge-lab-java-design-jdbc.js`: DAO/DTO/POJO, SRP/DRY/OCP/LSP/ISP/DIP, coupling/cohesion, composition/association/aggregation, DI, instanceof, PreparedStatement, ResultSet, Connection, SQL injection, transaction/rollback with a **method-owned DataSource Connection**. JDBC demos that need a real DB intentionally do not claim to connect or produce database results. Resource closure is deterministic, but does not imply all statements lock every other user or always cause a heap leak.
- Added `assets/js/knowledge-lab-java-exam-reviewer.js`: **33 explained multiple-choice questions**, with balanced A/B/C correct-answer positions 11/11/11, independent Java 21 Throwable demo and actionable learning challenge. New 11 manually authored Tagalog/Taglish Java versions in `assets/js/knowledge-lab-java-review-tl.js`, not machine translation. Total curated language versions **52** (HTML20,CSS18,JavaScript3,Java11), others have English fallback; Java IDE buttons and stage titles localized.
- Added **4 compiling/runnable Java 21 capstones** in `assets/js/knowledge-lab-java-capstone-projects.js`: DAO CRUD with in-memory Map and service validation, AutoCloseable reverse closure, SOLID/DI checkout and discount policies, AtomicInteger/virtual-thread stock competition. Each has real code, verified expected output, learning objectives, standalone practice challenge, mistake, shortcut, and explained quiz. Java 21 local `javac Main.java && java Main` compiled and matched outputs **4/4** (via `/tmp/check_java_projects.py`). The atomic sample is JVM-local learning only, **not** durable multi-user POS validation.
- Added real Java practices for five older Java reference topics. All 91 Java lessons are required to have practice + expected output in `.github/workflows/validate-knowledge-lab-ide.yml`. CI now imports all 91 Java lessons, `node --check` new source modules, checks explicit capstone IDs, compiles/runs canonical Java sources, verifies 33-question exam and 11 curated Java translations, and extends Playwright smoke to capstone reference outputs and mock OneCompiler consent/code-sync/triggerRun/reset/close behavior. Existing fail-closed assertions preserved.
- **Verification limits:** GitHub Actions final conclusion, latest GitHub Pages deployment, full Playwright run, and real OneCompiler compile/run are still **UNVERIFIED**: GitHub connector commit-run lookup only exposes PR-triggered runs and direct public URLs failed. Local source/DOM event mock passed previously; compiling four newest canonical project sources was independently reproduced and passed. Do not claim production-ready until remote browser/provider testing succeeds.
- **Remaining to reach genuinely comprehensive Java beginner→expert:** multi-file Maven/Gradle/JUnit5 practical training, true isolated JDBC testing with test database/migrations and secure credentials, advanced JVM/concurrency and design projects, more deep Filipino originals, browser/accessibility QA. JavaScript still lacks full modules/network testing/architecture capstones. Resist padding with low-value lessons or false verified badges.
- **Risk: Medium.** External third-party code transfer/privacy + provider availability and UI/CI regression; safeguards above. Roll back with standard Git revert; do not force push or rewrite history. No POS accounting/inventory, admin authentication/authorization, RLS or owner-only Publish Live changed.



## Knowledge Lab follow-up: 363 records and practical DOM/Java projects — 2026-10-12

**Authoritative newer checkpoint; supersedes the earlier 347-record total in this file.**

- User goal remains *truly comprehensive and beginner-to-expert*, not merely a W3Schools-comparable raw count. Both JavaScript and Java still show **Curriculum expansion in progress**.
- Added `assets/js/knowledge-lab-javascript-dom-practice.js` with **8 beginner/intermediate browser lessons**: DOM selection, classList + aria-pressed, safe createElement/textContent, bubbling, removing event listeners, FormData handling, Escape key interaction, and explicit focus management. Each has unique learning goals, working code, explained quizzes, mistake/hack/tip and practice instructions. HTML now loads module before main runner.
- Added `assets/js/knowledge-lab-java-applied.js` with **8 genuine Java 21 references**: composition, abstract methods, generic methods, immutable collections, regex, grouping reports, timezone conversion, and a guarded in-memory inventory mini project. JAVA remains Java 21 compile/output reference or opt-in external OneCompiler IDE; no fake local Java runner. The stock project is **not** a production POS or backend transaction system.
- New source counts: **363 unique records** = HTML 52; CSS 176; CSS Reference 20; JavaScript **59**; Java **53**; Photoshop, Canva, CapCut proof records 1 each. Git/GitHub, Apps Script and proof-gated Blender/Roblox Studio remain empty roadmap categories. Manually curated Filipino/Taglish lesson versions remain **41** (HTML20/CSS18/JS3); existing visible English fallback preserved.
- CI updated to require JS **59** and Java **53** lessons, lint new source files, compile all canonical Java 21 reference samples and check stdout, and use Playwright checks for DOM selection, aria-pressed toggle and FormData behavior. The existing Java third-party IDE opt-in/sandbox/CSP/mocked code-sync tests and prior tests remain in place, not weakened.
- Local verification: assembled 363 unique records, no missing required teaching/quiz fields, no duplicate IDs, no invalid stage mapping; all **307** browser code examples JavaScript syntax-checked, both embedded CI Node programs parsed, and loaded script order verified. **34/34** standalone JavaScript output tests passed via controlled DOM (earlier batch); Java 21 representative compile/run tests passed for 8 new examples across the professional and applied batches (canonical full run still CI-dependent). New DOM behaviors are covered by added Playwright test code, but a complete actual browser run has not been confirmed.
- **Remote workflow / latest successful GitHub Pages deployment / live OneCompiler compile-run are STILL UNVERIFIED** because GitHub connector exposes no current workflow checks and web access to Pages/Actions is blocked. Never report Live/Pages or CI PASS without authoritative run result.
- Relevant new commits: JS DOM module `76b2314dcc87e58c7394861b8967722ff7487715`; HTML integration `b36f972d6f75ca36b3b21a1d0963f3a420bb23cf`; Java applied module `89c6f1cee09440fc47ee06ce8d7a0b89116fccf6`; Java HTML integration `275239efa55558b0cacd12844cd5146ecd4f2fdf`; CI updated `c69defc8466079a8ea9f3387315b8bb65cf7bc3e` (JS DOM) and `de4bafa2ae443c1662fd818cfdeff9f79ee86de6` (Java); roadmap `d4ab74fd094e2539e81b672bac047ed0daf8cf84`.
- Next: verify latest GitHub Actions and deployed Pages, then close missing JS module/fetch/browser-api/testing gaps and Java JUnit/Maven/deep concurrency/projects; add meaningful authored Taglish. Do not use filler lessons, fake proof or fake Run buttons to raise counts.
- Risk **Medium**, dominated by the external OneCompiler code-transfer privacy/trust boundary, possible provider outage, and CI/browser regressions. Protections: explicit click and disclosure before external iframe loads, exact-origin postMessage, iframe sandbox/restrictive CSP, no backend credentials, original JS runner isolation unchanged, CI gates and editable original reference code. No Draft/Publish Live, POS records, RLS/MFA, or backend security settings changed. Rollback by normal git revert of affected commits, not force push/history rewrite.



## Knowledge Lab Java IDE + curriculum expansion — 2026-10-12 latest continuation

- Reconciled live repository before editing, starting from `62877ab563f4d764f62d9e8a198bffbefdbe13c0`; older stage/lesson counts were superseded by newer live source.
- JavaScript grew **37 → 51** lessons; Java grew **31 → 45** reference lessons. Knowledge Lab now **347 unique published records** (HTML 52, CSS 176, CSS Reference 20, JavaScript 51, Java 45, 3 proof-backed creative). Both large courses remain explicitly **Curriculum expansion in progress**; do NOT call complete beginner-to-expert until the full coverage roadmap and tests pass.
- 14 new JavaScript lessons in `assets/js/knowledge-lab-javascript-deep-dive.js`: callback functions, recursion/base cases, immutable-style object updates, some/every, basic regex, UTC dates, BigInt, prototypes, extends/super, generators, allSettled, microtask scheduling, Object.freeze limitations, and this binding. Includes standalone definitions, learning goals, runnable editable code, expected output, real-work use, common pitfalls, shortcut, specific practice and explained quizzes.
- 14 new Java 21 reference lessons in `assets/js/knowledge-lab-java-professional.js`: static/final, String formatting, 2D arrays, equals/hashCode, Set, UTF-8 file I/O with cleanup, path normalization/security caveats, Predicate/lambdas, method references, Collectors, Thread+join, CompletableFuture, Java 21 virtual-thread executor, and *plain-Java testing assertions* (truthfully NOT JUnit). Java remains JDK21 compiled in the CI reference gate, not run inside the JS sandbox.
- **Actual Java IDE option added:** `assets/js/knowledge-lab-java-ide.js` + `knowledge/index.html` + `assets/css/knowledge-lab.css` + lifecycle call in `assets/js/knowledge-lab-runner.js`. The user explicitly wanted more than verified output. The UI provides a locally editable Java source textarea and, only after a deliberate user click, embeds the external OneCompiler Java IDE whose genuine Java compile/run happens on OneCompiler infrastructure. The original verified output is clearly labeled and is NOT presented as the output of edited code. User can resync Java code, reset, close iframe, or open provider separately.
- **Privacy/security boundary:** explicit disclosure that Java code leaves our site to third-party OneCompiler only after opting into online IDE; no keys/accounts/sensitive business data should be pasted. `postMessage` uses target `https://onecompiler.com` (never '*'), fixed `Main.java` Java filename and Java language. External iframe lazy-instantiated only upon activation, sandboxed without top-navigation, `referrerpolicy=no-referrer`. CSP only adds exact `https://onecompiler.com` to `frame-src`; existing local JS runner sandbox/CSP, `connect-src 'none'`, no backend API secrets, and Admin authentication remain untouched. External provider can change availability, terms, and privacy behavior; not a first-party private code executor.
- **Testing:** parsed all **299 browser-code lesson JS snippets** for syntax, all 347 unique lesson IDs and complete teaching fields, script load order, 51 JS/45 Java stage mapping and both embedded CI JavaScript programs; no found schema/parse errors. Ran all **34/34** authored JavaScript sample-output checks in controlled DOM execution, including async microtasks; opt-in Java IDE module behavior tested with mocked DOM/iframe source/close/exact-origin sends. Representative **4/4** newer Java sources (UTF-8 file, equals/hashCode, thread/join, virtual-thread executor) compiled/run with OpenJDK 21 and matched expected output. All 45 canonical Java sources are configured for compile/output checks in CI, but full authoritative GitHub Actions result not yet available.
- Expanded `.github/workflows/validate-knowledge-lab-ide.yml` with JS source/output, exact Java 21 reference compilation, source presence, opt-in Java IDE UI, synthetic OneCompiler iframe source synchronization, no auto-loading, safe cleanup and previous Playwright behavior. No assertions were weakened; fixed async cross-frame test timing via Playwright waitFor.
- **Full GitHub Actions/PAGES status and external OneCompiler actual compilation are UNVERIFIED at this checkpoint**. The GitHub commit-status connector returned no checks/runs and GitHub Pages/Actions public inspection was inaccessible. Do not claim deployed live success until verified. Browser regression mock tests added but their remote workflow conclusion remains unknown.
- Main patch commits: external IDE markup `49dcd5d032d966c834551231acff583e8f7a73c1`; integration code `321c9b2ed20cd9b351421b4623a39eb92a0a1318`; runner hook `c00977f18de16dc183a745adbe4da34782ae3e1e`; CSS `e8c58b9fdea2357e6f1bd643f8f907a38ed4af18`; JS deep dive `412f468c017bb71653d00b558aa2ac54e8e7f3a8`; Java professional `7fcf102376a5ebce0ada364fb44ca08169447965`; HTML integration `c6f7f66366205ff045bf04bc574646ccf185b1d3`; CI expansion `0a76cf031e1179276e5ed607887b7ef36e6299c9`; cross-frame timing fix `34ce3a1b22d22783a9a25d2cef87f0749bdc6dbb`; roadmap update `29af0d67c16d20ff22f179f2fc2486d3a721129b`.
- **Remaining:** complete breadth of beginner→intermediate→advanced JavaScript (DOM/browser APIs, modules, secure remote API work as *reference* while offline runner blocks networking, testing and capstones); Java JUnit 5/Maven/build systems/advanced JVM and full applications; more manually authored Filipino (currently HTML20, CSS18, JS3; all other lessons visibly fall back to English), detailed pedagogy QA and real end-to-end browser/provider/Pages validation.
- **Risk: Medium** because new third-party frame exposes code to an outside service and may fail if remote provider changes, alongside ordinary static lesson/CI regressions. Safeguards: consent-first external frame, exact postMessage origin, restrictive frame allowlist, existing sandbox/CI checks, no secret transfer at rest, unmodified backend. Backend Draft/Publish Live, Supabase AAL2/RLS, POS/accounting/inventory all unchanged. Rollback via normal git revert of affected commits (first remove OneCompiler frame script/markup and restore previous CSP) without force-pushing or rewriting history.



### JavaScript project + Java entry follow-up — 2026-10-12

- Added 2 substantial runnable browser projects in `assets/js/knowledge-lab-js-projects.js`: a stock-aware cart (quantity capped by stock, state-derived total, status messages, no fake server inventory reservation) and keyboard-accessible tabs (roles, ARIA selected state, roving tabIndex, Arrow/Home/End focus navigation). Each has beginner-first explanations, real working HTML/CSS/JS, tasks, quiz and real-world guidance.
- Added 2 explicit early Java 21 CI reference lessons in `assets/js/knowledge-lab-java-intro.js`: **What is Java?** and **JDK/JRE/JVM with javac/java setup**. No fake browser-run Java. Both examples compiled and produced expected output locally using Java 21.
- New assembled source total: **319 unique records** = HTML 52, CSS 176, CSS Reference 20, JavaScript **37**, Java **31**, proof-backed creative **3**. Language-curated versions still **41** (HTML20, CSS18, JS3) with English fallback for the rest. Categories explicitly say `Curriculum expansion in progress`, never deceptively `complete`.
- Updated `knowledge/index.html` to load both new modules; updated CI to require 37 JS and 31 Java records, Java exact-source compilation/output comparison, stock cart maximum/subtotal/remove, keyboard tabs and safe text-rendering browser smoke tests. Fixed Playwright API mistake: page.keyboard.press rather than nonexistent frame.keyboard.press. Existing accessibility, sandbox/CSP, and previous tests preserved.
- Local quality checks: repository assembly confirmed 319 unique records, 285 browser-code snippets syntax-parsed, no missing required fields/stages, and both embedded CI scripts parsed. Twenty standalone JS output cases were executed and matched expectations; two interactive projects passed controlled click/keyboard DOM behavior tests. 22 newly authored Java examples compiled and ran locally on OpenJDK 21 with expected results (local source formatting may differ; canonical repository Java sources are compiled separately by CI).
- New commits: JS projects `4c96630c00a50c6366a0fa59050ea47a35491be3`, Java intro `b6026dc4bc2edb135af796cca9b81957c5cd1ba4`, code integration `7d895774dd8fdb0416e9d96c3c3ec7e4cd4de28e0d968`, expanded CI `98f8c7eec59cd0f15afeb5e0127af3fe8a327bb4`, Playwright keyboard API fix `9d1e30c8c2ce5b1d5984351efc155961ede5130c`, roadmap update `765d590ab3c972e7214efa97ac5ebf31dbbc5cc5`.
- **Remote workflow & GitHub Pages success still NOT verified** (commit-status connector returns no checks and commit-workflow-run lookup returns no runs). Do not claim a completed browser/CI/Pages release until authoritative run and deployed site pass.
- Pending topics: remaining advanced JS/browser APIs/modules/architecture/testing, Java tests/dependency management/concurrency/performance/file I/O, meaningful capstones, independently written Filipino lessons, detailed teaching QA, and final browser/deployment verification. Comprehensive beginner-to-expert goal NOT YET ACHIEVED.
- Risk Low–Medium: static course/CI regression risk; additive modules, output checks, and unchanged sandbox security. No server Draft/Publish Live, Supabase security, or POS data changes. Roll back with normal git revert; no force/history rewrite.



## Java + JavaScript comprehensive curriculum correction — 2026-10-12 (new phase)

**User correction:** previous 15 JavaScript / 9 Java lessons did not genuinely cover beginner-to-expert. Do not label these tracks COMPLETE based merely on structural lesson completeness or W3Schools comparison. W3Schools is an independent coverage benchmark, NOT content to copy.

- Added exact-scope coverage/acceptance map: `docs/KNOWLEDGE_LAB_JAVA_JAVASCRIPT_COVERAGE.md` commit `f16b5b949ecc9b5fd2a7e9a6f7af8ec181dcc7ee`; contains 10 JS groups, 11 Java groups, staged gaps and conditions for eventual complete classification. Checklists intentionally not marked done wholesale.
- **New JavaScript lessons: 20** in `assets/js/knowledge-lab-js-core-expansion.js` (10) and `assets/js/knowledge-lab-js-collections-quality.js` (10). Categories include statements/comments, math precedence, strict comparison, boolean logic, switch, nullish defaults, while, strings, number conversion, closures, array mutation/copy/sort, Set, Map, destructuring, JSON, classes, Promise.all, try/catch, and secure textContent output. Each has independently authored explanation, definition, practice/check, expected output and explained quiz. Original 15 JavaScript lessons preserved; **35 JavaScript lessons total**. 10-stage ordered curriculum is marked **Curriculum expansion in progress**, not complete.
- **New Java lessons: 20** in `assets/js/knowledge-lab-java-core-expansion.js` (10) and `assets/js/knowledge-lab-java-modern-expansion.js` (10). Topics cover typing/casting, Strings, arrays, switch expression, constructors/encapsulation, inheritance/polymorphism, interfaces, exceptions, generics, Streams, overloading, recursion, StringBuilder, enums, comparators, records, Optional, explicit BigDecimal rounding, LocalDate and try-with-resources. Original 9 Java references preserved; **29 Java reference lessons total** in 10 ordered stages. No fake Java Run button. Java 21 reference-only / compile-and-output-verification CI remains required.
- The two JS/Java extension modules were loaded into `knowledge/index.html` in order before the runner; no backend or Publish Live change.
- Updated `.github/workflows/validate-knowledge-lab-ide.yml`: validates 35 JS records + stage coverage + output simulation, 29 Java references compiled via Java 21 with expected stdout checked; Playwright checks arithmetic, closures, safe HTML display, inheritance reference and prior browser exercises. Dedicated file `scripts/verify-knowledge-lab-js-examples.cjs` checks output from 20 new JS snippets as an independent CI step, besides real Playwright tests.
- **Local independent verification before recording:** Assembled **315 unique Knowledge Lab records**, including HTML 52, CSS 176, CSS reference 20, JS 35, Java 29, and creative proof 3; no duplicate IDs, missing required fields or missing stage mappings. **283 code-lesson JavaScript bodies parsed**; both embedded CI JS scripts parsed. All 20 new JavaScript browser-oriented snippets were executed with controlled DOM text-node stubs, expected text matched **20/20** (asynchronous Promise microtasks included). Separately compiled/executed **20/20 semantically equivalent new Java sources under local OpenJDK 21**, expected stdout matches; CI still checks exact canonical source from repo.
- New test status is **local checks PASS; current remote workflow and Pages deployment STILL UNVERIFIED**, no claim of successful remote Actions/Pages or end-to-end browser testing. GitHub combined statuses/workflow listing are not available via current connector; browser access to GitHub Actions Pages was unsuccessful at check time.
- Core expansion commits: JS first `83da3e588aa736aa03e7d96bba55704a780d4000`, Java first `1c04a1a640ab55d459bc6dd64d68e4d69a0e853d`, JS second `989f9feafcc84014d0335dc16d558f31e568e667`, Java second `82fa16250d13ce5fb5af8518bd82d97cea4ae331`. QA script `61708724bc8e2b1c821ff8f248bf00feb9df4df1`. Latest CI revision `4dd74a5aedadc39a1f2bc1b7786b927c96b14a71` (recheck live head before future work).
- Remaining completion blockers: full breadth/quality of JavaScript advanced APIs/modules/event loop/DOM workflows/real projects, Java deeper testing/Maven/JVM/concurrency/File I/O/projects; curated Filipino/Taglish beyond the 3 prior JS lessons; final browser regression, CI run confirmation and published Pages smoke. Never claim full beginner-to-expert based solely on these increases.
- Risk **Low–Medium**: static lesson rendering/CI failures possible, so source validation + additive modules + preserved CSP/isolated iframe and existing assertions are safeguards; no POS, Supabase, authentication or live metadata changes. Rollback via normal git revert of the listed commits, no force-push or history rewrite.



## Knowledge Lab curriculum + practice expansion — 2026-10-12

### Latest repository implementation state (verify live HEAD again before future edits)

- Expanded JavaScript from 7 to **15 runnable browser lessons** with 8 more concepts: arrays, objects, map/reduce, defensive form validation, event delegation, local-Promise async/await, error handling/debugging, and a working offline live product-search project. Added curriculum stage ordering instead of a flat list. All 15 JavaScript lessons now have specific, actionable **Practice Challenge** prompts and check conditions.
- Added optional, safely text-rendered Practice Challenge panel to Knowledge Lab, separate from the Learn explanation, runnable IDE, expected result, application, and quizzes. Legacy lessons remain valid without challenge metadata; future pedagogical audit should curate specific challenges rather than generate generic filler.
- Curated **3 full Filipino/Taglish JavaScript lesson versions** (first interaction, variables/types, input validation), including definitions, learning goals, explanations, hacks, mistakes, quiz questions/reasons, and practice tasks; authorship is manual, not auto translation. Full curated lesson versions now **41**: 20 HTML + 18 CSS + 3 JavaScript. Unreviewed lessons retain the visible English-source fallback.
- Expanded Java from 5 to **9 CI-tested/reference lessons**, adding first program/types, stock conditions/loops, reusable methods/parameter contracts, and ArrayList vs HashMap. Each new example was **compiled and executed locally using Java 21**, with output matching documented expectedOutput. They must remain reference-only in the site, with no pretend browser Java execution.
- Current assembled published lesson/reference/proof records: **275**, all unique IDs, by category: HTML 52, CSS 176, CSS Reference 20, JavaScript 15, Java 9, Photoshop 1, Canva 1, CapCut 1. Roadmap categories Git/GitHub, Apps Script, Blender, Roblox Studio remain empty; never replace proof requirement with invented creative tutorials.
- New modules: `assets/js/knowledge-lab-javascript-intermediate.js`, `assets/js/knowledge-lab-javascript-tl.js`, `assets/js/knowledge-lab-java-foundations.js`. Loaded by `knowledge/index.html` before the main runner. New UI markup, styling, renderer and localized labels are in `knowledge/index.html`, `assets/css/knowledge-lab.css`, `assets/js/knowledge-lab-runner.js`, and `assets/js/knowledge-lab-i18n.js`.
- Expanded `.github/workflows/validate-knowledge-lab-ide.yml` without removing earlier guards: validates new JS and Java modules, 15 JS entries/stages/challenges, curated Filipino records, all 9 Java 21 references (compile/run/output), no fake Java run, and Playwright scenarios for first interaction, Filipino practice, form boundaries, offline live search, and Java first-program output.
- **Independent validation performed this chat:** assembled 275 unique lessons, required teaching fields complete, 263 JavaScript code-lesson snippets syntax-checked, main runner and both CI embedded JavaScript programs parsed, and simulated event/form/product-search behavior passed. All four new Java sources compiled/run with expected output on Java 21. These do **not** substitute for the full Playwright regression or real deployed-site smoke test.
- **GitHub Actions/Pages deployment result remains UNVERIFIED** because the available GitHub interface does not expose a usable current workflow-run listing, and public GitHub/Pages URLs could not be accessed by the browsing environment. Do not claim CI PASS or Pages SUCCESS until independently confirmed by reading the actual workflow run and deployed page.
- Relevant implementation commits: JavaScript extension `842cadc628f639f47aaedb183e98fdd394b9a255`; 3 curated Filipino JS `7a902b5a78a2d9863bfb7e236be5854c390bc0fc`; Playwright/CI JS coverage `6e454f0e0f2591444bff3207c527f346b7140bf1`; Java module `dd1720445d67eb313ca1b9bd8a2ff24526cbe08b`; Java integration `6109fc15016f207abd6d7d4dc1e292673c4cd4e0`; Java CI assertion + newline fix `a23777c1dea810bd898e028f5c6869834e898bab`.
- **Pending priorities:** verify current GitHub Actions/Pages run success; expand JavaScript into DOM architecture, async design and additional real projects; expand Java 21 OOP, testing, I/O, exception handling; create Git/GitHub and Google Apps Script tracks with actual CI-tested reproduction, not fake browser runners; curate focused practice tasks across the current 176 CSS/52 HTML lessons; increase manually authored Filipino coverage; keep Creative/Blender/Roblox proof-gated.
- **Risk: Low–Medium**. Risks: new lesson rendering, layout, quiz and regression-test failures; safeguards: additive modules, preserved existing lessons/tests, unchanged runner iframe sandbox/CSP, local syntax and Java 21 compilation, explicit language fallback. Backend Draft/Live, Publish Live, MFA/AAL2/RLS, POS accounting/inventory, and secrets were not touched. Roll back relevant commits with a normal git revert; no force push or history rewrite.



### Follow-up JavaScript foundation batch — 2026-10-12

- Added **3 more runnable lessons** to the additive module: if/else conditions with stock boundaries, reusable functions/parameters/return, and for...of loops using safe DOM textContent.
- JavaScript totals **7 lessons** including 2 original lessons + 5 new beginner foundations; all original records preserved.
- New JavaScript examples parsed successfully with the JavaScript Function constructor in preparation; browser runtime and published Pages verification not established by this check.
- Implementation commit: `5fe9c43c033c7c22ebb3496e61e282ed3e634a24`; expanded CI assertions commit: `32a1cb0383c78302b9c0c824b00e0216f1913418`.
- Remaining: intermediate JavaScript (arrays, objects, forms, promises, fetch with real runner constraints), projects, Java, Git/GitHub, Apps Script, curated Filipino and broader lesson quality audits. No backend Live publishing performed.
- Risk: Low–Medium UI/content regression; additive design and CI assertions retained. Rollback with normal git revert, not history rewrite.



## Knowledge Lab expansion checkpoint — 2026-10-12 (latest GitHub batch)

- Audited the live lesson source: **258 records** before this batch = HTML 52, CSS 176, CSS Reference 20, JavaScript 2, Java 5, Photoshop/Canva/CapCut 1 each. Published records meet existing structural teaching-schema and 2-quiz minimum checks. **Structural completeness does not establish deep pedagogical quality or complete subject coverage.**
- Manual Filipino/Taglish lesson versions: **38** (HTML 20, CSS 18); others must retain the explicit English-source fallback and must not be auto-translated.
- Remaining broad gaps: JavaScript and Java fundamentals-to-advanced sequencing; Git/GitHub and Apps Script tracks; more hands-on practice/challenges; selective HTML/CSS pedagogy refinements; additional curated Filipino lessons. Blender/Roblox Studio and any creative walkthrough expansion remain proof-gated.
- Implemented first JavaScript expansion batch with **2 independently written runnable beginner lessons**: JavaScript/DOM/click introduction and variables/types. Each includes explanation, definitions, goals, tips/hacks, mistakes, expected output, real work, code, Try It Yourself prompt and 2 explained quiz questions. Existing JavaScript lessons preserved, bringing total to **4** after extension loads.
- The additive module `assets/js/knowledge-lab-javascript-foundations.js` is loaded between the core data and the runner; the extension checks existing IDs to avoid duplicate loading. `knowledge/index.html` loads it. Updated `.github/workflows/validate-knowledge-lab-ide.yml` checks its JS syntax, inclusion, count, lesson schema and example syntax. Existing CI assertions were not removed/weakened.
- Commits: module `3a9cf4de0c8bc2a6e060f593135c57b0ef5bb813`; loader `efe967b9f2156ccd953a2cf614600393e3183af1`; CI `1972409f454421d8eaf217a32446c155ccc5b00a`.
- Validation: standalone new JavaScript snippets passed JavaScript parsing in patch preparation. **Full browser, workflow result, and Pages deployment remain unverified at this checkpoint**; do not report SUCCESS until live run confirmed.
- Next: verify CI/Pages, add conditions/functions/loops/arrays/DOM/forms/fetch/async lessons in focused batches, add practice progression and CI checks; expand Java and Git/Apps Script without filler.
- Publication: no Supabase Draft or Live mutation, and no Admin Publish Live action.
- Risk **low–medium**: new lessons may have runner or pedagogy regressions; safeguards include additive module, existing CSP/sandbox, unchanged earlier records and CI checks. No accounting/inventory/backend/security data affected. Roll back via normal revert of these commits, never force-push.



> **Primary continuity/source-of-truth for future chats**
>
> Repository: `Knowlexit09/noel-labasan-portfolio`  
> Public site: `https://knowlexit09.github.io/noel-labasan-portfolio/`  
> Admin: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`  
> Last consolidated: **2026-10-12 (Asia/Manila) — Knowledge Lab published-lesson completeness audit**  
> Verified deployment baseline before the exact Exponify cover update: **GitHub Pages Run #282 — success**, head `c853ca7b41f4920e2dc6c9856d5ec3197616be3f`.
> Exponify cover integration validation: **Validate Exponify cover integration Run #1 — success** (`37590939117`), including JS syntax checks, exact PNG SHA-256/size verification, active-path SVG/old-preview absence checks, and preserved MP4 assertions.
> Knowledge Lab V1 staging baseline before merge: `main` / Pages Run #286 were verified successful at `9a37d7a32631a77b406d0a958c6803bb5f01390e`.
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

# 11. Knowledge Lab — V3 DEDICATED LEARNING SITE

Core user goal:

- Knowledge Lab content lives only at `/knowledge/`, not as inline tutorial cards on the portfolio homepage.
- The experience should be easier to understand than a typical documentation site: simple explanations first, then examples, practice, quizzes, tips/hacks, and real-world use.
- Coding content should progress from Foundation → Applied / Intermediate → Advanced; do not claim a generic “Expert” track until the curriculum really supports it.
- Coding lessons must be working/tested; no fake Run buttons.
- Creative/non-coding lessons should show real proof, project artifacts, or video when available.
- Empty roadmap categories are allowed internally/publicly if clearly marked, but do not invent lessons to fill space.

Current category structure:

- Code & Development: HTML, CSS, JavaScript, Java, Git & GitHub, Google Apps Script.
- CSS now has a **49-lesson** structured course: CSS Fundamentals → Visual Styling → Sizing & Box Model → Selectors & Cascade → Layout Foundations → Flexbox → Grid → Responsive Design → Modern CSS → UI & Media → Animation & Accessibility → Architecture & Expert Practice.
- The first CSS lesson now visibly defines **CSS = Cascading Style Sheets** in a dedicated Definition panel, followed by explicit “You Will Learn” goals.
- A dedicated “Why is it called Cascading Style Sheets?” lesson explains the cascade before later specificity/inheritance lessons.
- Missing fundamentals were added, including CSS comments/formatting, basic element/class/ID/universal selectors, backgrounds/gradients, text formatting, links/lists, width/height/min/max sizing, Flexbox alignment and sizing, Grid placement/named areas, subgrid, mobile-first CSS, responsive media, native CSS nesting, logical properties, @supports feature queries, form styling, table styling, CSS accessibility, rendering containment/content-visibility, and print styles.
- CSS starts from “What is CSS?” and progresses through syntax, stylesheet methods, colors, units, typography, display, box model, selectors, specificity, Flexbox, Grid, positioning, media queries, auto-fit/minmax responsive Grid, clamp/min/max fluid sizing, custom properties, :is/:where/:has, container queries, transforms/transitions, keyframes + reduced motion, cascade layers, component architecture, DevTools debugging, and a final integrated responsive component challenge.
- Every CSS lesson has a simple explanation, working browser example, Tip, Useful Hack, Common Mistake, Expected Result, real-work use, and quiz. Selected lessons also show Long Form vs shorthand (background, margin/padding, flex, transition).
- The CSS CI/browser gate validates the expanded CSS curriculum, required milestone lessons/quizzes, the visible “CSS = Cascading Style Sheets” definition, and the working browser example.
- HTML now has a **52-lesson** course: HTML Fundamentals → Text & Semantic Content → Links & Images → Forms & User Input → Tables & Structured Data → Media & Embeds → Accessibility by Default → Head, Metadata & SEO → Modern HTML & Performance → Architecture & Expert Practice.
- HTML begins with a visible **“What is HTML?”** definition that explicitly teaches **HTML = HyperText Markup Language**, then covers document anatomy, elements/tags/attributes, nesting, comments/entities, DOM parsing, headings, text semantics, lists, semantic landmarks, links/paths, images/alt text, responsive images, forms, validation, fieldset/legend, tables, media, captions, sandboxed iframes, native HTML vs ARIA, buttons vs links, hidden/inert, details/summary, dialog, metadata/SEO, script loading, lazy loading, resource hints, data-* attributes, template, popover, progressive enhancement, security, content models, and final expert practice.
- HTML includes an **Emmet shortcut lesson** and explicitly teaches that Emmet is editor tooling, not HTML syntax; current example compares expanded list markup with `ul>li*3`.
- All HTML lessons include definition, learning goals, simple explanation, Tip, Practical Hack, Common Mistake, Expected Result, real-work use, runnable example, and quiz.
- The existing accessible-form regression remains preserved: entering **Juan Dela Cruz** and submitting must produce exactly **Hello, Juan Dela Cruz!** in the sandboxed browser runner.
- Filipino/Taglish currently has **20 manually authored HTML lessons**, covering the foundations, text/semantic content, links/images, responsive-image basics, and the first accessible-form lesson. These are separate reviewed lesson versions, not machine translations.
- HTML learning-stage labels also localize in the Filipino/Taglish view.
- If Filipino is selected on an HTML lesson that has not been manually reviewed, the site visibly falls back to the original English source instead of auto-translating it.
- HTML regression checks enforce at least 45 published HTML lessons, required milestone lessons, visible HyperText Markup Language definition, Emmet shortcut content, quizzes, 20+ curated Filipino HTML lessons, the Filipino **“Ano ang HTML?”** version, safe English fallback, and the original accessible-form interaction.
- Latest combined HTML/language/IDE regression: **Validate Knowledge Lab IDE Run #44 — SUCCESS** at `1b7d0da190889cbb2b37c07d57713aff7b55fc83`.
- Matching Pages deployment: **Run #371 — SUCCESS**.

- CSS course expanded from 49 to **176 focused learning lessons**, plus a separate **20-page CSS Reference** category for quick lookup.
- A second systematic CSS gap audit was performed against the current W3Schools CSS tutorial menu and modern MDN CSS references. The public course now covers the remaining major tutorial-level gaps instead of stopping at the earlier 128-lesson expansion.
- Newly added gap-audit lessons include: CSS parser recovery/errors; selector lists; @import/order; global inheritance keywords; !important; background shorthand/origin/clip; modern Lab/LCH/OKLab/OKLCH colors; color-mix()/light-dark(); focused box-shadow; border-image; @font-face; font shorthand/variable fonts; overflow-wrap/word-break/hyphens; writing-mode; text-wrap; line clamping; list markers; generated content; ::selection/::placeholder; focus/form-state selectors; centering; vertical-align; flow-root/block formatting context; multi-column layout and rules/span; navbars; dropdowns; tooltips; button systems; pagination; CSS counters; @counter-style; responsive galleries; legacy image sprites (with modern-context caveat); shape-outside; resize/caret-color; dynamic viewport units; user-preference media features; @starting-style; transition-behavior; scroll-driven animation; View Transition CSS; anchor positioning; field-sizing; reset strategy; utility-vs-component architecture; and a semantic responsive website-layout pattern.
- These additions are **focused lessons**, not raw reference stubs: every CSS course lesson is required to have definition, learning goals, explanation, tip, practical hack, common mistake, expected result, real-world use, runnable HTML/CSS example, and at least two quiz questions.
- The course intentionally does **not** turn every single CSS property or experimental spec feature into a standalone lesson. Niche/experimental details belong in Reference or future advanced updates; tutorial coverage is optimized for learning value, production relevance, and maintainability.
- Current CSS coverage gate requires exactly **176 course lessons** and keeps the **20 CSS Reference pages** separate.
- Browser regression additionally checks the multi-column lesson, navbar lesson, CSS counters lesson, product-grid project, color explorer, CSS Reference category, and existing core CSS/HTML/Java regressions.
- Latest comprehensive CSS validation: **Validate Knowledge Lab IDE Run #66 — SUCCESS** at `8ed24e58f0f95696b3cc6dfe783038506e8ef947`.
- Matching Pages deployment: **Run #397 — SUCCESS**.

- Added **CSS Colors: names, HEX, RGB, and complete color codes** under Colors & Backgrounds. It teaches color formats and includes an interactive searchable explorer with **all 148 opaque standardized CSS named colors**.
- The color explorer shows each CSS keyword, HEX code, and RGB value, supports search by name/HEX/RGB, and separately calls out `transparent` and `currentColor` as special color keywords.
- The existing CSS Reference color page was upgraded to the same complete searchable color-code explorer instead of creating a duplicate reference category.
- A manually authored Filipino/Taglish version of the CSS color lesson is included; it is not auto-translated.
- Color-explorer regression verifies exactly 148 color cards and checks `tomato` → `#FF6347` → `rgb(255 99 71)`.
- Latest color-explorer validation: **Validate Knowledge Lab IDE Run #56 — SUCCESS** at `5a7587a4cabf7ac276f1f7fad1e947ed5600063e`.
- Matching Pages deployment: **Run #385 — SUCCESS**.

- CSS learning path now uses finer-grained stages: CSS Fundamentals → Colors & Backgrounds → Typography & Text → Box Model & Sizing → Selectors & Cascade → Display & Positioning → Flexbox → Grid → Responsive Design → Images & Visual Effects → Transforms & Animation → Forms, Tables & UI → Modern CSS → Accessibility → Architecture & Performance → Projects & Expert Practice.
- Newly split/focused CSS topics include named/HEX/RGB/HSL colors, currentColor, opacity, background layers/repeat/position/size/attachment, multiple backgrounds, linear/radial/conic gradients, font stacks, font weight/style, text alignment/decoration/transform/spacing/indent/white-space/ellipsis/shadow, margin + margin collapse, padding, border/outline, aspect-ratio, calc(), attribute selectors, :not/:is/:where, :nth-child patterns, float/clear, inline-block, sticky positioning, stacking contexts, focused Flexbox axis/wrap/alignment lessons, explicit/implicit Grid, auto-placement, spanning, Grid alignment, auto-fill vs auto-fit, orientation/hover/pointer/color-scheme media features, object-fit/object-position, filters, blend modes, clip-path, masking, 2D/3D transforms, transform-origin, easing, animation direction/fill, accent-color/appearance, cursor/user-select, scroll offsets/snap, @property, @scope, color-scheme, forced-colors, and visually-hidden patterns.
- CSS course now includes **8 practical projects**: Profile Card, Responsive Navbar, Responsive Product Grid, Pricing Cards, Dashboard Layout, Modal Styling, Responsive Landing Hero, and a Final Mini Design System project. The prior resilient-card expert challenge remains as an additional advanced practice lesson.
- New CSS Reference category is intentionally separate from the learning path and currently includes **20 runnable lookup pages** for selectors, specificity, units, spacing, borders/outlines, colors, typography, display, positioning, Flexbox, Grid, media queries, container queries, transforms, transitions, animation, custom properties, functions, pseudo selectors, and at-rules.
- CSS quality gate now enforces exactly 127 course lessons, complete definition/learning-goal/teaching/quiz fields for every course lesson, exactly 20 reference pages, required milestone topics/projects, browser rendering of the Responsive Product Grid project, CSS Reference category visibility, and a runnable Flexbox reference example.
- Latest CSS expansion regression: **Validate Knowledge Lab IDE Run #52 — SUCCESS** at `4f26e1d65b0527bc891b0cac5feca67db69c3e14`.
- Matching Pages deployment at that code state: **Run #380 — SUCCESS**.
- New CSS lessons remain English source until each Filipino/Taglish version is manually reviewed. The existing curated Filipino CSS lessons remain intact; no automatic translation is introduced.

- Published-lesson completeness audit (2026-10-12): all **210 currently published Knowledge Lab lesson/reference/proof records** now pass the full teaching-schema requirement: Definition, 3+ You Will Learn items, Objective, Explanation, Tip, Hack, Common Mistake, Expected Result, Real Work Use, and 2+ quiz questions.
- Closed the previously missing fields on the 2 JavaScript lessons, 5 Java lessons, and the three proof-backed creative lessons (Photoshop, Canva, CapCut).
- Added quizzes to all **20 CSS Reference** pages, including the full named-color reference.
- Creative quizzes are based only on the documented proof-backed workflow/result; no unsupported project claims or invented metrics were added.
- CI now fails if **any published lesson** is missing required teaching fields or at least two quiz questions.
- Latest global completeness regression: **Validate Knowledge Lab IDE Run #59 — SUCCESS** at `1a8e79cbd067692586e3f2143e517f0f94706c20`.
- Matching Pages deployment: **Run #389 — SUCCESS**.
- Important scope boundary: this means all *currently published lesson records* are structurally complete. Empty roadmap categories are still intentionally not fabricated: Git & GitHub and Google Apps Script are future code-course tracks; Blender and Roblox Studio remain proof-gated until real walkthrough/proof material is attached.

- Language UX rule (2026-10-12): do **not** use automatic/literal translation for learning content. Filipino must be an authored/curated lesson version, written naturally for comprehension while preserving real technical terms (CSS, selector, property, cascade, Flexbox, Grid, etc.) in English when that is clearer and industry-standard.
- Knowledge Lab now has a persistent top-bar language switch: **English** ↔ **Filipino / Taglish**.
- Language preference is stored locally in the visitor browser.
- Static Knowledge Lab UI labels are localized.
- CSS currently has **17 manually curated Filipino/Taglish lessons** covering the early course through Sizing & Box Model. Their titles, definitions, learning goals, explanations, tips/hacks, mistakes, expected results, real-work notes, and quizzes are separately authored rather than auto-translated.
- When Filipino is selected and a lesson has a reviewed version, the lesson shows **“Curated Filipino / Taglish • hindi auto-translate.”**
- Lessons that do not yet have manually reviewed Filipino copy fail safely to the original English source and visibly show **“English source • Filipino version is still under manual review.”** Never silently machine-translate those lessons just to increase coverage.
- Localization regression checks verify language switching, the curated “Ano ang CSS?” lesson/definition, the curated-status badge, safe English fallback for an unreviewed lesson, and switching back to English.
- Latest language regression: **Validate Knowledge Lab IDE Run #39 — SUCCESS** at `da29c6bdb43725c7902e0e05d5c9e1546ed79c06`.
- Matching Pages deployment: **Run #365 — SUCCESS**.

- Creative & Multimedia: Photoshop, Canva, CapCut, Blender, Roblox Studio.
- Java now has an explicit learning path: Foundation → OOP Foundations → Problem Solving → Applied Java.
- Category pages show lesson counts, quiz progress, stages, and per-lesson quiz status saved locally in the browser.

Teaching / lesson pattern:

- simple explanation / analogy before formal terminology,
- runnable browser code for HTML/CSS/JavaScript,
- Java reference examples compile-tested and executed with Java 21 in CI,
- Tip,
- Useful Hack,
- Common Mistake,
- Expected Result,
- Real Work use case,
- optional Cleaner / Shorter Way (shorthand) section,
- optional interactive explainer,
- Knowledge Check quiz with answer explanations,
- quiz progress saved via localStorage; current pass mark is 70%.

Current shorthand rule:

- shorter code is presented only when it is still readable,
- lesson format compares Long Form vs Short Form,
- explicitly includes when to use it and when not to force it,
- current Java example: if/else vs ternary operator.

Current Java learning examples:

- defensive numeric input validation,
- BigDecimal for exact money calculations,
- ternary / cleaner conditional code,
- OOP made simple: Class vs Object using a Car blueprint/object analogy,
- Big O without scary math using the “find Juan in a student list” analogy.

Big O lesson:

- explains O(1), O(log n), O(n), O(n log n), and O(n²) as growth/scaling behavior,
- does not claim Big O is exact runtime,
- includes an interactive input-size simulator with rough work units for intuition,
- Java example compares a linear scan with a HashMap ID lookup,
- quiz checks scaling concepts and explicitly teaches that O(n) does not automatically mean “slow”.

Quiz / growth system:

- quizzes render one question at a time,
- selected answers receive Correct / Not quite feedback plus explanation,
- best score and pass status are saved locally on the visitor device,
- category progress shows passed lesson quizzes,
- current browser regression gate verifies quiz selection/advance behavior.

Creative proof-backed lessons remain:

- Photoshop — Smart Object / non-destructive product-layout workflow backed by the actual Gatchalian Meatshop campaign result,
- Canva — reusable brand-system workflow backed by the actual Qyntro Daily portfolio video,
- CapCut — vertical-ad story/pacing workflow backed by the actual Exponify PH campaign video,
- Blender / Roblox Studio stay evidence-gated; do not publish invented workflow tutorials before real proof/walkthrough material is attached.

Homepage / Admin behavior:

- portfolio homepage does not render the legacy Knowledge Lab card/dialog section,
- the `knowledgeLab` module switch controls the dedicated sidebar link,
- sidebar Knowledge Lab link routes directly to `knowledge/`,
- legacy server `content.knowledgeLab` rows are preserved but no longer drive homepage rendering,
- Creative Admin links to the dedicated Knowledge Lab rather than exposing the retired legacy entry editor.

Runner / security:

- iframe uses `sandbox="allow-scripts allow-forms"`,
- `allow-forms` is required so form submit events can reach lesson handlers,
- outbound form submission remains blocked by runner CSP `form-action 'none'`,
- iframe has no `allow-same-origin`,
- network remains blocked via `connect-src 'none'`,
- JavaScript executes only inside the isolated runner document,
- runtime failures surface in Console instead of pretending the lesson worked.

Regression / quality gate status:

- Playwright verifies Knowledge Lab home does not auto-open the IDE,
- required category cards are present,
- accessible-form lesson produces `Hello, Juan Dela Cruz!`,
- JavaScript counter increments to `1`,
- Java reference lessons do not expose a fake browser Run IDE,
- all verified Java reference lessons are compiled/executed with Java 21 and expected output is compared,
- shorthand panel rendering is checked,
- Big O interactive preset update is checked,
- quiz option selection / correct-answer feedback / question advance is checked,
- proof-backed lessons are validated for real media + case-study links,
- latest Knowledge Lab validation: **Validate Knowledge Lab IDE Run #27 — SUCCESS** at `f32fb2ccd70bb2ec4c6fcdacbad52bef607cf48c`,
- matching Pages deployment: **Run #352 — SUCCESS**.

Do not Publish Live backend metadata on the user's behalf. The user remains the owner of Draft → Preview → Publish Live.


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
