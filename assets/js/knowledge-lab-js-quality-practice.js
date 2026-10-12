(function () {
  'use strict';
  const data = window.KNOWLEDGE_LAB_V2;
  if (!data || !Array.isArray(data.lessons)) return;
  const additions = [
  {
    "id": "js-quality-unit-tests",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Projects & Practice",
    "order": 65,
    "title": "Test a pure stock rule with real assertions",
    "summary": "Write a small deterministic function, test normal cases and boundaries, and see failing assertions instead of trusting an example.",
    "definition": "A unit test calls a small unit of behavior with known inputs and checks the actual result against an expected result. A pure function returns the same result for the same inputs without changing external state.",
    "learn": [
      "Separate inventory quantity rules from DOM updates",
      "Write assertions that fail loudly when a result is wrong",
      "Test zero, upper bounds, and invalid numeric inputs",
      "Understand why browser tests cannot replace backend transaction tests"
    ],
    "objective": "Implement an actual six-case test runner for a pure stock-quantity rule.",
    "explanation": "A stock button is easy to demo, but what happens at quantity zero, at maximum stock, or when a decimal sneaks into the input? Put the rule in a pure changeQuantity function so it can be tested without clicking UI elements. The tests deliberately check both valid results and rejected inputs.\n\nRead the results, then change the maximum stock rule to deliberately break a test. Observe FAIL instead of assuming the software works. This is an offline browser exercise, not a production inventory transaction: simultaneous customers still require an atomic backend update.\n\nTry It Yourself: add a seventh test for stock = 0, and verify it passes.",
    "tip": "Name every test for one observable requirement; failing results should tell you exactly what broke.",
    "hack": "Keep the business rule free of DOM code so it can later be imported and tested by a real test runner such as Vitest or Jest.",
    "mistake": "Checking only a successful happy path misses quantity overflows, underflows and unexpected input types. Client-side checks cannot guarantee server inventory integrity.",
    "expected": "Six named tests show PASS, with a summary of 6/6 tests passed. Changing a rule or expected value makes at least one case fail.",
    "realUse": "Product counters, order validation, pricing rules, API helpers, and regression tests.",
    "html": "<main><h1>Stock rule unit tests</h1><p>These assertions execute in your browser.</p><ol id=\"tests\"></ol><p id=\"summary\" role=\"status\" aria-live=\"polite\"></p></main>",
    "css": "body{font:16px/1.6 system-ui;padding:24px;background:#eef3fb;color:#132b42}main{max-width:660px;margin:auto;background:#fff;padding:24px;border-radius:16px}li{padding:5px}#summary{font-weight:700}",
    "js": "function changeQuantity(current, delta, stock) {\n  if (![current, delta, stock].every(Number.isInteger) ||\n      current < 0 || stock < 0 || current > stock) {\n    throw new TypeError('Invalid quantity, delta, or stock');\n  }\n  return Math.max(0, Math.min(stock, current + delta));\n}\nfunction assertEqual(actual, expected) {\n  if (!Object.is(actual, expected)) {\n    throw new Error('Expected ' + expected + ', got ' + actual);\n  }\n}\nfunction assertTypeError(action) {\n  let rejected = false;\n  try { action(); }\n  catch (error) {\n    if (!(error instanceof TypeError)) throw error;\n    rejected = true;\n  }\n  if (!rejected) throw new Error('Expected invalid input to be rejected');\n}\nconst tests = [\n  ['add one', () => assertEqual(changeQuantity(0, 1, 3), 1)],\n  ['stop at maximum stock', () => assertEqual(changeQuantity(3, 1, 3), 3)],\n  ['never go below zero', () => assertEqual(changeQuantity(0, -1, 3), 0)],\n  ['remove two', () => assertEqual(changeQuantity(3, -2, 3), 1)],\n  ['reject fractional stock', () => assertTypeError(() => changeQuantity(0, 1, 1.5))],\n  ['reject impossible starting stock', () => assertTypeError(() => changeQuantity(4, 0, 3))]\n];\nconst list = document.querySelector('#tests');\nlet passed = 0;\nfor (const [name, test] of tests) {\n  const item = document.createElement('li');\n  try {\n    test();\n    passed += 1;\n    item.textContent = 'PASS — ' + name;\n  } catch (error) {\n    item.textContent = 'FAIL — ' + name + ': ' + error.message;\n  }\n  list.append(item);\n}\ndocument.querySelector('#summary').textContent = passed + '/' + tests.length + ' tests passed';",
    "practice": {
      "prompt": "Add a test named zero stock that expects changeQuantity(0, 1, 0) to return 0. Then intentionally change one expected value to see a FAIL before restoring it.",
      "check": "All seven tests pass after fixing the assertion. A deliberately wrong expected value causes one visible FAIL."
    },
    "quiz": [
      {
        "question": "Why is the changeQuantity rule easier to unit test when it does not read the DOM?",
        "options": [
          "Its result depends only on its inputs",
          "The browser automatically tests it",
          "Pure functions guarantee database transactions"
        ],
        "correctIndex": 0,
        "explanation": "Deterministic behavior lets assertions compare inputs and outputs without UI setup."
      },
      {
        "question": "What is missing before this rule could safely commit real inventory?",
        "options": [
          "A prettier summary",
          "A backend transaction that validates and atomically updates stock",
          "More CSS animations"
        ],
        "correctIndex": 1,
        "explanation": "Browser-only validation cannot coordinate multiple customers or prevent concurrent sales."
      }
    ]
  },
  {
    "id": "js-async-debounced-filter",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Asynchronous Thinking",
    "order": 75,
    "title": "Debounce a real-time product search",
    "summary": "Reduce repeated filter work while someone types by cancelling pending timers, then render safe and accessible results.",
    "definition": "Debouncing delays an action until no new event has arrived for a chosen interval. clearTimeout cancels a callback that has not run yet.",
    "learn": [
      "Explain the difference between immediate input events and delayed filter work",
      "Use clearTimeout and setTimeout to debounce locally",
      "Render matching products using createElement and textContent",
      "Know that cancelling a timer does not cancel a request already sent to a server"
    ],
    "objective": "Create a testable offline product finder that updates after typing stops.",
    "explanation": "Typing Chicken fires several input events. If a page performs expensive work on every event, it may waste resources. This example waits 180 milliseconds after the latest keystroke before filtering an in-memory catalog. The search input remains responsive, while the result list changes only after the pause.\n\nEverything runs locally within the sandbox; this lesson does not make network requests. With real fetch calls, also use AbortController or a request identity check to prevent stale asynchronous responses from overwriting new results. A timer alone is not enough.\n\nTry It Yourself: type chi, then erase it. Wait for the results after each pause.",
    "tip": "Debounce work that benefits from a pause; do not debounce keyboard feedback, focus, or essential accessibility state.",
    "hack": "Keep the latest input value in a local constant inside the event handler so the scheduled callback processes that snapshot.",
    "mistake": "clearTimeout cannot undo filtering that already ran or cancel a fetch already in progress. The example intentionally uses no external API.",
    "expected": "Initially three products appear. Typing chi shows one result (Chicken) after a short pause. Clearing the query restores all three.",
    "realUse": "Local catalog search, large table filters, preview generation, and client-side suggestions.",
    "html": "<main><h1>Find a product</h1><label for=\"search\">Search products</label><input id=\"search\" type=\"search\" autocomplete=\"off\" placeholder=\"Try chi\" /><p id=\"status\" role=\"status\" aria-live=\"polite\"></p><ul id=\"results\"></ul></main>",
    "css": "body{font:16px/1.6 system-ui;padding:24px;background:#edf3fa;color:#122e45}main{max-width:540px;margin:auto;background:#fff;padding:24px;border-radius:16px}label{display:block;font-weight:700}input{box-sizing:border-box;width:100%;padding:10px;margin:8px 0;border:1px solid #657a89;border-radius:8px;font:inherit}input:focus-visible{outline:3px solid #ffbb50;outline-offset:2px}li{padding:5px}",
    "js": "const products = ['Liempo', 'Chicken', 'Fish Fillet'];\nconst input = document.querySelector('#search');\nconst resultList = document.querySelector('#results');\nconst status = document.querySelector('#status');\nlet pendingTimer;\nfunction renderProducts(query) {\n  const normalized = query.trim().toLocaleLowerCase();\n  const matching = products.filter(product =>\n    product.toLocaleLowerCase().includes(normalized)\n  );\n  resultList.replaceChildren();\n  for (const product of matching) {\n    const item = document.createElement('li');\n    item.textContent = product;\n    resultList.append(item);\n  }\n  status.textContent = matching.length + ' matching product(s)';\n}\ninput.addEventListener('input', () => {\n  clearTimeout(pendingTimer);\n  status.textContent = 'Waiting for typing to pause…';\n  const typed = input.value;\n  pendingTimer = setTimeout(() => {\n    renderProducts(typed);\n    pendingTimer = undefined;\n  }, 180);\n});\nrenderProducts('');",
    "practice": {
      "prompt": "Change the debounce delay to 400 ms. Quickly type fi, then erase the search before the timeout ends. Check that only the final search is rendered.",
      "check": "The list shows the current search after the pause, never an earlier keystroke's result; all three products return on clear."
    },
    "quiz": [
      {
        "question": "What does clearTimeout(pendingTimer) accomplish?",
        "options": [
          "Cancels a scheduled callback that has not fired",
          "Cancels an already completed API request",
          "Deletes all items from the catalog"
        ],
        "correctIndex": 0,
        "explanation": "It stops a pending timer; it cannot reverse completed work or a separate network request."
      },
      {
        "question": "How should a real async API search avoid old responses replacing newer results?",
        "options": [
          "Only increase the debounce time",
          "Use AbortController or a request identity guard alongside appropriate error handling",
          "Disable the label"
        ],
        "correctIndex": 1,
        "explanation": "Debouncing event timing and preventing stale network results solve different problems."
      }
    ]
  }
];
  const ids = new Set(data.lessons.map(lesson => lesson.id));
  for (const lesson of additions) {
    if (!ids.has(lesson.id)) { data.lessons.push(lesson); ids.add(lesson.id); }
  }
})();
