# Knowledge Lab — JavaScript & Java Complete-Coverage Blueprint

Updated 2026-10-12. **This is an honest coverage map, not a claim that every topic below is already taught.** W3Schools and modern language fundamentals are topic *benchmarks*, not source content. Author all explanations and quizzes independently.

## Acceptance criteria for a course marked COMPLETE

1. Each essential concept has a focused, sequenced lesson or explicitly labeled **Reference** entry (lookup entries are not counted as deep learning lessons).
2. Beginner explanations precede formal definitions; learning goals, example, expected output, real-world use, shortcut when relevant, mistake, explained quiz, and editable practice/challenge are present.
3. Browser JavaScript examples run inside existing sandboxed offline runner and pass representative browser checks; external APIs are not simulated as live. Java examples remain **reference-only** and must compile + match output on Java 21 in CI.
4. Milestone projects must be genuinely reproducible and tested, not merely suggested. Filipino/Taglish is separately written and reviewed; unreviewed content retains visibly marked English fallback.
5. Security, accessibility, responsive design, runner isolation, and existing regression tests remain intact. Final completion requires full GitHub CI and Pages browser verification.


## Verified local progress — October 12, 2026 curriculum correction

- **Implemented records (not a complete-course claim):** JavaScript **37** lessons including two interactive application projects; Java **31** Java 21 reference lessons. Overall Knowledge Lab **319** published records, with pre-existing 52 HTML, 176 CSS, 20 CSS Reference, and 3 proof-backed creative records unchanged.
- The JS course now includes focused exercises for decisions/loops, strings and types, arrays/collections, closures, JSON, async Promises, error handling and safe DOM output, plus a stock-limited cart and keyboard-accessible tabs. Important topics remain, especially complete module architecture, fetch/network architecture without compromising runner CSP, the full event loop, performance, accessibility and larger capstone projects.
- Java now includes introductory What-is-Java/JDK/JVM entry, foundational code, OOP and interfaces, exceptions, Strings/arrays, generics/collections, Streams, records, Optional, explicit money rounding, time and resource cleanup. Major gaps still include full JUnit 5/Maven tracks, production file I/O, concurrency, architecture/design patterns, security and capstone projects.
- **Local validation:** 20/20 standalone JS result snippets matched expected output in controlled execution; two full browser projects passed scripted interaction simulations; 22/22 newly authored Java 21 examples were compiled/run locally with expected results (minor formatting differences in the local verification source). CI is configured to compile/run canonical Java repo sources. Static audit showed no duplicate IDs, missing teaching fields, broken JS syntax, or misplaced stages.
- **Not yet verified:** GitHub Actions workflow conclusion; GitHub Pages deployment; entire Playwright browser run. Do not mark this roadmap complete or use a success badge for the entire course.
- **No automatic translation:** just 3 curated Filipino/Taglish JS lessons beyond the prior 38 HTML/CSS versions. All other content must keep the visible English fallback.

## Coverage roadmap — core lesson groups

### JavaScript

- [ ] **Orientation & Fundamentals** — What JavaScript is; where it runs; first output; statements; comments; script loading; const vs let; primitives; typeof; type conversion; strict equality. (Audit each concept individually before checking complete.)
- [ ] **Operators & Logic** — Arithmetic; precedence; assignment; comparisons; boolean operators; if/else; switch; ternary; truthy/falsy; nullish coalescing. (Audit each concept individually before checking complete.)
- [ ] **Loops & Strings** — for; while; break/continue; for...of; string interpolation; string methods; searching; number precision; safe conversion; Math; Date. (Audit each concept individually before checking complete.)
- [ ] **Functions & Scope** — Declarations; expressions; arrows; default/rest parameters; return; callbacks; lexical scope; closures; hoisting; this; recursion. (Audit each concept individually before checking complete.)
- [ ] **Arrays & Collections** — Array indexing; push/pop/splice/slice; iteration; map/filter/find; some/every; reduce; sorting and nonmutation; Set; Map; iterables. (Audit each concept individually before checking complete.)
- [ ] **Objects & Data** — Object properties; computed keys; optional chaining; destructuring; spread/rest; JSON; structured data validation; prototypes; classes; inheritance. (Audit each concept individually before checking complete.)
- [ ] **DOM & Forms** — DOM selection; textContent vs innerHTML; createElement; classList; events; bubbling and delegation; keyboard access; forms; input validation; focus management. (Audit each concept individually before checking complete.)
- [ ] **Async & Browser APIs** — Promises; async/await; reject/catch/finally; Promise.all/allSettled; microtasks/event loop; Fetch conceptual (sandbox isolated); AbortController; storage constraints; URL. (Audit each concept individually before checking complete.)
- [ ] **Architecture & Quality** — Modules import/export (no fake browser module execution); pure functions; error modeling; unit testing; XSS/CSP basics; performance; accessibility; maintainability. (Audit each concept individually before checking complete.)
- [ ] **Project & Expert Practice** — Counter; validated order form; filterable catalog; cart totals; accessible tabs/modal; multi-feature mini app; review/repair/performance challenges. (Audit each concept individually before checking complete.)

### Java

- [ ] **Orientation & Fundamentals** — What Java is; JDK/JVM/JRE; installing JDK 21; javac/java; source structure; output; comments; variables/final; primitive vs reference types. (Audit each concept individually before checking complete.)
- [ ] **Expressions & Decisions** — Type casting; arithmetic and precedence; comparisons; booleans; if/else; switch and switch expressions; for; while; do-while; break/continue. (Audit each concept individually before checking complete.)
- [ ] **Strings, Arrays & Methods** — String immutability; String methods; StringBuilder; arrays; multidimensional arrays; parameters and returns; overloads; scope; recursion; var local inference. (Audit each concept individually before checking complete.)
- [ ] **OOP Essentials** — Class/object; constructors; this; static vs instance; encapsulation; getters/setters; packages; access modifiers; composition. (Audit each concept individually before checking complete.)
- [ ] **OOP Advanced** — Inheritance; super; overrides; polymorphism; abstraction; interfaces; default methods; enums; nested classes; records; sealed types overview. (Audit each concept individually before checking complete.)
- [ ] **Collections & Generics** — ArrayList; List/Set/Map; HashMap; generics; interfaces; equals/hashCode; sorting/comparators; iteration; immutability. (Audit each concept individually before checking complete.)
- [ ] **Exceptions, IO & Time** — Checked vs unchecked exceptions; throw/throws; try/catch/finally; try-with-resources; NIO Path/Files; Scanner; UTF-8; java.time; secure input handling. (Audit each concept individually before checking complete.)
- [ ] **Functional & Modern Java** — Lambdas; method references; Streams; Optional; collectors; BigDecimal rounding; pattern matching; records; defensive programming. (Audit each concept individually before checking complete.)
- [ ] **Concurrency & JVM** — Threads; ExecutorService; concurrent collections; synchronization; race conditions; CompletableFuture; memory management; GC concepts; profiling. (Audit each concept individually before checking complete.)
- [ ] **Testing & Professional Delivery** — JUnit 5 basics; assertions; edge cases; Maven/Gradle; project structure; logging; dependency hygiene; Git/CI; code review; security. (Audit each concept individually before checking complete.)
- [ ] **Projects & Expert Practice** — CLI inventory practice; test-driven validation; collections reporting; file import/export with review; service-layer design; concurrency-safe design; performance audit. (Audit each concept individually before checking complete.)

## Ground truth at start of this phase

- Live repository before expansion: JavaScript **15** lessons, Java **9** (Java 21 compile-tested references), HTML 52, CSS 176, CSS reference 20, 3 proof-backed creative lessons.
- A structural completeness pass did **not** establish end-to-end curriculum completeness; this gap is formally acknowledged.
- Do not mark a stage complete merely because it contains one or two examples. Maintain staged TODO gaps after every batch.

## Batch order

- Batch A: fill missing JavaScript operators/strings/functions/scope/arrays/core DOM with individually runnable lessons.
- Batch B: fill Java values, methods/arrays, core OOP, exceptions, collections with Java 21 CI compilation and reproducible outputs.
- Batch C: advanced JS and modern Java + projects and reference index where lookup is better than tutorial.
- Batch D: pedagogy review per lesson, curated Taglish, browser and deployment verification, security/accessibility and regression audit.



## October 12 continuation — real Java practice IDE and curriculum expansion

- Source lesson totals now **JavaScript 51** and **Java 45** (overall Knowledge Lab **347** records). These are still **in progress**, not complete beginner-to-expert courses. Do not conflate 2-question/field schema coverage with deep learning quality.
- Added **14 new original JavaScript deep-dive lessons** covering callbacks, recursion, object-spread updates, some/every, regex, UTC dates, BigInt, prototypes, class inheritance, generators, allSettled, microtasks, shallow Object.freeze, and `this` bindings. Each has its own definition, goals, explanatory example, practice check and explained quiz. Added output checks for all 14 to the existing JavaScript verification script; **34/34 combined source examples passed in controlled local execution**.
- Added **14 Java 21 professional reference lessons**: static/final, String formatting, 2D arrays, equals/hashCode, Sets, UTF-8 file I/O, path handling, Predicates/lambdas, method references, collectors, threads and join, CompletableFuture, virtual-thread executor, and standalone assertion testing. Existing CI is configured to compile all canonical Java reference sources and compare stdout. Representative samples for virtual threads, UTF-8 file I/O, equals/hashCode, and thread/join compiled and executed successfully with local Java 21.
- **Java IDE solution:** `assets/js/knowledge-lab-java-ide.js` adds an *opt-in external* embedded OneCompiler Java editor to Java reference lessons. Java source can be edited locally, then a deliberate click loads the real third-party compiler; it receives the source via `postMessage` to the exact `https://onecompiler.com` origin. Embedded editor offers its own actual Run/output; our original sample output remains clearly labelled CI-verified. No fake browser Java execution. CSP only extends `frame-src` for that specific origin, iframe is sandboxed and referrer suppressed. The browser's isolated HTML/CSS/JavaScript runner remains unchanged. The third-party compiler **must not** be treated as a private or first-party service; consent and no-secret warning are visible.
- If OneCompiler is unavailable/blocked, users can still copy code and open the Java editor in a separate tab or run with a locally installed JDK. The remote provider's end-to-end availability and compile experience were **not independently verified** from this environment.
- CI regression now checks Java IDE opt-in/no automatic iframe/network request, mocked third-party code sync and teardown, presence of strict-origin frame CSP, and 51 JS/45 Java curriculum and source gates. External provider traffic is mocked in CI, not counted as a real Java provider execution.
- **Remaining:** in-depth Java JUnit5/Maven/Gradle and production project workflows, exception/file/path security, concurrency/jvm, comprehensive JavaScript modules/fetch/network APIs subject to secure runner policy, deeper DOM/a11y examples, more capstones and targeted beginner-level rewriting. Curated Filipino remains 41 records (HTML20/CSS18/JS3) with explicit English fallback. Complete only after per-topic coverage, real exercises and full CI+Pages smoke pass.


### Follow-up curriculum depth and verification — 2026-10-12

- Added 8 focused JavaScript DOM/Form lessons in `assets/js/knowledge-lab-javascript-dom-practice.js`: querySelectorAll/NodeList, aria-pressed/classList, createElement/textContent, event bubbling, removeEventListener, FormData and submit, Escape keyboard handling, and deliberate focus management. All are real browser examples, not pseudocode. Browser CI now exercises DOM query result, toggle state, and a submitted FormData sample.
- Added 8 more Java 21 lessons in `assets/js/knowledge-lab-java-applied.js`: composition, abstract class and override, typed generic methods, immutable collections, regex Pattern/Matcher, groupingBy with TreeMap, Instant→Asia/Manila local time, and a **guarded in-memory stock mini project**. The project rejects invalid stock use but does NOT claim database persistence, concurrent transactions, or production POS integrity.
- New total: **JavaScript 59**, **Java 53**, **363 Knowledge Lab published records**. Existing HTML 52, CSS 176, CSS Reference 20, proof-backed creative 3 remain untouched. The two curricula are STILL explicitly expansion-in-progress.
- Independent local QA: 363 unique IDs, zero missing teaching fields or quiz explanations, correct Java/JS stage mapping, all 307 browser-code bodies syntactically valid, all loaded scripts/inline CI test blocks parse, 34/34 previously added JavaScript controlled output assertions passed; exact-source-looking Java samples for grouping, timezone, generics and guarded stock project compiled/run successfully on OpenJDK 21 (four additional cases). Remote full Playwright, all-53 Java CI and Pages run success are still **unverified**.
- Remaining highest-priority gaps: JavaScript modules, network-aware architecture and Fetch teaching consistent with isolated CSP, deeper browser APIs, a full browser app; Java Maven/JUnit 5 build and testing, robust filesystem/security, JVM/concurrency internals, full multi-class production-grade projects; manually curated Taglish lesson versions; deployed browser/third-party compiler validation.


## 2026-10-12 — Unified Java Run IDE + exam reviewer corrections

**Implementation state (still NOT a completed beginner-to-expert course):** Java **87 lessons**, JavaScript **59 lessons**; overall Knowledge Lab **397 unique records**. Java gained 33 focused lessons plus one 33-question cumulative reviewer. Existing JavaScript lesson count unchanged this batch.

### One consistent IDE design

- Kept the original Knowledge Lab HTML/CSS/JavaScript IDE look and toolbar as the design standard. Java now uses the same workspace/editor chrome, with `Main.java`, Reset, Enable Java IDE and a visible **Run Java ▶** after optional activation. The unmodified original reference code and output are retained behind a collapsed reference area; the current edited code is separate from that verified output.
- The **Run Java ▶** button sends OneCompiler's documented `{ eventType: 'triggerRun' }` event to the embedded external Java runtime, not a fake local JavaScript evaluator. The provider's iframe contains Java code editing and real output, so the inner third-party surface still differs from the first-party editor. The iframe starts only with a deliberate user click; otherwise source stays local. `populateCode` initially syncs current source; `codeChangeEvent` may sync remote changes into the local draft. Remote provider version, availability, privacy policy, and frame behavior are dependencies, not under our control.
- Security protections: exact `https://onecompiler.com` postMessage target and accepted origin/source, opt-in load, no network API keys or credentials, iframe sandbox without top-level navigation, referrer suppression, and only this origin added to frame-src. Existing isolated HTML/CSS/JS local runner and `connect-src 'none'` were retained. Never send private/sensitive data into the third-party compiler.
- Source component: `assets/js/knowledge-lab-java-ide.js`; UI in `knowledge/index.html`, CSS in `assets/css/knowledge-lab.css`. CI mocks provider iframe to check consent, code sync, Reset, actual triggerRun event transport, close and lifecycle; **mocked protocol success is not proof of a live OneCompiler run**. Native in-house Java execution would require separately authorized sandboxing architecture and costs.

### New reviewer curriculum

- `assets/js/knowledge-lab-java-exam-fundamentals.js` adds **17** lessons: class/object/instantiation; primitives/wrappers/autoboxing; references/null; widening/narrowing with long→double precision caveat; naming; compiler-generated default vs authored no-arg constructors; methods/void/parameters/arguments; this/super; access modifiers; legal inheritance types; modern interfaces including default/static/private implementation; Throwable hierarchy; checked and unchecked; try/catch/finally; AutoCloseable; suppressed exceptions.
- `assets/js/knowledge-lab-java-design-jdbc.js` adds **16** lessons: DAO and interfaces; DTO/POJO; SRP/DRY/OCP/LSP/ISP/DIP; coupling/cohesion; association/aggregation/composition; dependency injection types; instanceof patterns; PreparedStatement with typed parameters; JDBC Connection/ResultSet ownership; SQL injection defenses; and transaction/rollback with a method-owned `DataSource` connection. The JDBC examples compile as Java 21 references **without pretending a live database connection**; actual SQL execution needs an authorized database, schema and JDBC driver. Clarify transaction locks/resource exhaustion vs blanket 'memory leak' claims.
- Original 5 Java references now have individual hands-on practice tasks. Added `assets/js/knowledge-lab-java-exam-reviewer.js`: a **33-question** cumulative assessment with explanations and balanced correct-answer positions (11 in each of options A/B/C).
- Added `assets/js/knowledge-lab-java-review-tl.js`: **11 manually authored Filipino/Taglish lesson versions** and Filipino headings for Java stages, plus Java IDE control labels; no machine translation. Other lessons use visible English fallback. Total manually curated lesson versions across Knowledge Lab is now **52** (HTML20, CSS18, JS3, Java11).

### Definitions corrected from supplied exam notes

- `Throwable` is superclass of `Exception` and `Error`; `Error` is not a subclass of Exception. `RuntimeException` subclasses Exception. Checked exceptions are checked by compiler for catch-or-declare but are thrown during program execution; Error and RuntimeException families are unchecked.
- Modern interfaces permit implemented default/static/private methods, not just method declarations; a class extends only one class but can implement multiple interfaces.
- A compiler-generated default constructor exists only when no constructor is declared; an author-created no-arg constructor is not automatically the compiler default.
- Widening numeric conversion can lose precision (e.g. `long` to `double`). Package names are conventionally lowercase, not generally described as arbitrary snake_case class naming.
- `PreparedStatement` extends `Statement` which is `AutoCloseable`; try-with-resources invokes close() on exiting. Unclosed resources risk exhausting connections/handles/cursors, and locking behavior depends on transaction/driver/database, not an automatic whole-database lock or guaranteed Java heap memory leak. Under connection pools, `Connection.close()` generally returns the logical handle to the pool.
- SRP means one coherent reason to change, not one method per class. DRY targets duplicated knowledge, not every similar line. DTO purpose differs from POJO class style. DIP principle differs from dependency-injection technique.

### Verification and remaining gaps

- Local source review: 87 Java records with unique IDs, valid stage mapping, complete practice and quiz fields, cumulative 33-question reviewer and manually curated lesson structure. Updated CI executes every canonical Java 21 reference via javac/java and compares stdout, validates the 33-question exam, locale versions, and provider transport mock. Six representative Java concepts plus the corrected JDBC transaction template were independently compiled and run on local OpenJDK 21 with matching output.
- **Do not claim remote CI PASS, Pages deployed or live OneCompiler execution success**: current GitHub connector only offers pull-request-filtered workflow association and public Actions/Pages URLs were inaccessible from this environment.
- Still needed for full beginner→expert: multi-file Java Maven/Gradle/JUnit 5 real project and dependency testing, real JDBC integration against a safe test database with migrations and secure credentials, larger exercises and expert concurrency/JVM work, more independently authored Filipino lessons, and JavaScript/browser-api architecture + final capstones. Preserve original JavaScript/HTML/CSS UX and security integrity.
- Risk **Medium**: third-party Java compiler code transfer, potential external outage/protocol changes, static lesson/quiz regressions and not-yet-run full CI. Rollback by normal revert of relevant commits; restore prior UI and `frame-src` if eliminating provider, no force push or history rewrite. No POS ledger, Supabase backend, Admin Publish Live or authentication change.


## Follow-up: four runnable Java 21 capstones (October 12, 2026)

- Assembled Knowledge Lab source now has **401 unique lesson/proof/reference records**: **91 Java**, 59 JavaScript, 52 HTML, 176 CSS, 20 CSS reference, 3 creative proof. Earlier numbers in this document are historical.
- Four new runnable Java 21 references in `assets/js/knowledge-lab-java-capstone-projects.js`: **DAO CRUD** (interface + memory Map + DTO record + validation service), **AutoCloseable close order** (three nested handles in reverse close order), **SOLID Checkout** (discount strategies, constructor injection, separate Receipt), **Atomic Stock** (compareAndSet across two Java 21 virtual threads, guaranteed one success for one in-memory unit). Each contains a real independent practice, quizzes and explanation; all four Java sources compiled on local JDK 21 and matched expected stdout, in addition to CI checks.
- These are *educational projects*, not production POS code. Map CRUD is volatile; AtomicInteger protects one JVM process rather than durable or distributed stock; real stock transactions must be enforced atomically by the authoritative server/database with auditing and authorization.
- Existing `knowledge/index.html` loads new projects before i18n/runner. CI requires `javaLessons.length >= 91`, checks the four explicit IDs, Java 21 compilation/stdout, and Playwright reference display checks. Full remote GitHub Actions, Pages and actual OneCompiler browser execution remain UNVERIFIED.
- Browser IDE visual priority: Java uses shared original Knowledge Lab chrome and Run Java button, but the provider's inner remote editor remains third-party. Only initial Enable click loads the service; never claim zero external privacy impact.
- Next major learning gap: full **Maven/Gradle + JUnit 5** build/test experience, and actual JDBC integration in a disposable safe test database (not production), plus a cumulative system project and more original Filipino lessons. Current JavaScript browser API/module/capstone gaps also remain. Do not mark the course complete yet.
