(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;
const additions=[
  {
    "id": "js-callback-values",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Functions & Scope",
    "order": 80,
    "level": "Intermediate",
    "title": "Callbacks are functions you can pass around",
    "summary": "Imagine a product printer that accepts your own formatting rule instead of always using the same style.",
    "definition": "A callback is a function passed as an argument for another function to invoke.",
    "learn": [
      "Pass a function as an argument",
      "Recognize when a callback actually executes",
      "Choose a readable arrow function"
    ],
    "objective": "Apply callbacks are functions you can pass around in a reproducible small example.",
    "explanation": "Imagine a product printer that accepts your own formatting rule instead of always using the same style.\n\nA callback may run immediately, later, or multiple times depending on its receiving function. Passing format is different from calling format() before passing the result.\n\nTry it yourself: Change the callback so it adds the text 'Fresh: ' before the name.",
    "tip": "Use a named function when the callback grows beyond one clear expression.",
    "hack": "Functions are values: assign them to variables or pass them as arguments.",
    "mistake": "Passing myFunction() calls the function immediately; pass myFunction when a callback is expected.",
    "expected": "LIEMPO",
    "realUse": "Click handlers, validators, and array transformations.",
    "html": "<main><h1>Callbacks are functions you can pass around</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nfunction formatProduct(name,formatter){return formatter(name);}\nshow(formatProduct('Liempo',name=>name.toUpperCase()));",
    "practice": {
      "prompt": "Change the callback so it adds the text 'Fresh: ' before the name.",
      "check": "The displayed text becomes Fresh: Liempo."
    },
    "quiz": [
      {
        "question": "What does a callback argument hold?",
        "options": [
          "A function",
          "Always a DOM node",
          "A stylesheet"
        ],
        "correctIndex": 0,
        "explanation": "Functions are ordinary JavaScript values."
      },
      {
        "question": "What is the difference between format and format()?",
        "options": [
          "format passes a function, format() invokes it",
          "They always do the same thing",
          "format is only for CSS"
        ],
        "correctIndex": 0,
        "explanation": "Parentheses invoke the function now."
      }
    ]
  },
  {
    "id": "js-recursion-base-case",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Functions & Scope",
    "order": 85,
    "level": "Intermediate",
    "title": "Recursion: solve a smaller version of a problem",
    "summary": "You can count down from three by printing three, then asking the same helper to count down from two.",
    "definition": "Recursion is a function calling itself until it reaches a stopping base case.",
    "learn": [
      "Find the base case",
      "Trace a recursive call",
      "Recognize when a loop is simpler"
    ],
    "objective": "Apply recursion: solve a smaller version of a problem in a reproducible small example.",
    "explanation": "You can count down from three by printing three, then asking the same helper to count down from two.\n\nEvery recursive call adds stack work. Prefer a loop for simple counting; recursion becomes valuable for tree-shaped or nested data. A reachable base case is essential.\n\nTry it yourself: Change countdown(3) to countdown(5).",
    "tip": "Trace n=2 on paper before using larger input.",
    "hack": "Handle the base case first to keep the recursive branch short.",
    "mistake": "Without a reachable base case, repeated calls can overflow the stack.",
    "expected": "3 → 2 → 1 → Done",
    "realUse": "Nested menu data and tree traversal.",
    "html": "<main><h1>Recursion: solve a smaller version of a problem</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nfunction countdown(n){return n<=0?'Done':n+' → '+countdown(n-1);}\nshow(countdown(3));",
    "practice": {
      "prompt": "Change countdown(3) to countdown(5).",
      "check": "The output begins with 5 and ends with Done."
    },
    "quiz": [
      {
        "question": "What stops this recursion?",
        "options": [
          "n<=0",
          "The function name",
          "The CSS rule"
        ],
        "correctIndex": 0,
        "explanation": "The base case returns without calling itself again."
      },
      {
        "question": "What is a recursion risk?",
        "options": [
          "Stack overflow at extreme depth",
          "Every function becomes async",
          "Strings stop working"
        ],
        "correctIndex": 0,
        "explanation": "Each recursive call consumes stack space."
      }
    ]
  },
  {
    "id": "js-spread-immutable-update",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Objects & Data",
    "order": 75,
    "level": "Intermediate",
    "title": "Spread syntax for readable object updates",
    "summary": "You can prepare an updated sale record without changing the product's original catalog entry.",
    "definition": "Object spread copies enumerable own properties into a new object, producing a shallow copy.",
    "learn": [
      "Copy a record with spread syntax",
      "Add or override a property",
      "Explain shallow copying"
    ],
    "objective": "Apply spread syntax for readable object updates in a reproducible small example.",
    "explanation": "You can prepare an updated sale record without changing the product's original catalog entry.\n\nSpread makes a shallow copy only. Nested objects remain shared references; do not mistake it for deep cloning.\n\nTry it yourself: Change the quantity to four and inspect product.quantity in Console.",
    "tip": "Preserve original data when multiple UI components depend on it.",
    "hack": "Use {...record, status:'paid'} for a clear shallow state update.",
    "mistake": "Changing a nested object in the new copy may affect the original record.",
    "expected": "Liempo: 250",
    "realUse": "Immutable UI state and cart line creation.",
    "html": "<main><h1>Spread syntax for readable object updates</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst product={name:'Liempo',price:125};\nconst sale={...product,quantity:2};\nshow(sale.name+': '+sale.price*sale.quantity);",
    "practice": {
      "prompt": "Change the quantity to four and inspect product.quantity in Console.",
      "check": "The total becomes 500; the original product has no quantity property."
    },
    "quiz": [
      {
        "question": "Is object spread a deep copy?",
        "options": [
          "No",
          "Yes",
          "Only with arrays"
        ],
        "correctIndex": 0,
        "explanation": "Nested references remain shared."
      },
      {
        "question": "What does {...a,x:1} create?",
        "options": [
          "A new object with copied properties and x updated",
          "A changed class",
          "A file"
        ],
        "correctIndex": 0,
        "explanation": "Spread copies enumerable own properties into the new object."
      }
    ]
  },
  {
    "id": "js-some-every",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Arrays",
    "order": 80,
    "level": "Intermediate",
    "title": "some() and every(): any versus all",
    "summary": "One empty product line is enough to warn someone, while checkout requires all requested lines to be in stock.",
    "definition": "Array.some returns true when any element passes a predicate; Array.every returns true when all do.",
    "learn": [
      "Choose any or all deliberately",
      "Use boolean predicates",
      "Handle empty collection semantics"
    ],
    "objective": "Apply some() and every(): any versus all in a reproducible small example.",
    "explanation": "One empty product line is enough to warn someone, while checkout requires all requested lines to be in stock.\n\nBoth methods short-circuit when the answer becomes known. Be careful with empty arrays: some([]) is false while every([]) is true.\n\nTry it yourself: Replace the zero stock with three.",
    "tip": "State the business rule in words before selecting a method.",
    "hack": "Use some to avoid manually managing a found flag.",
    "mistake": "every([]) being true does not mean a cart contains a valid order.",
    "expected": "Any empty: true; All stocked: false",
    "realUse": "Order validation and form error summaries.",
    "html": "<main><h1>some() and every(): any versus all</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst stock=[4,0,2];\nshow('Any empty: '+stock.some(x=>x===0)+'; All stocked: '+stock.every(x=>x>0));",
    "practice": {
      "prompt": "Replace the zero stock with three.",
      "check": "Any empty becomes false and All stocked becomes true."
    },
    "quiz": [
      {
        "question": "What checks for at least one matching item?",
        "options": [
          "some()",
          "every()",
          "map()"
        ],
        "correctIndex": 0,
        "explanation": "some returns true after the first matching value."
      },
      {
        "question": "What does every([]) return?",
        "options": [
          "true",
          "false",
          "undefined"
        ],
        "correctIndex": 0,
        "explanation": "An all-items condition is vacuously true on an empty array."
      }
    ]
  },
  {
    "id": "js-regex-test",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Strings & Numbers",
    "order": 70,
    "level": "Intermediate",
    "title": "Regex basics: validate a simple product code",
    "summary": "An inventory code might require two capital letters followed by exactly three digits.",
    "definition": "A regular expression specifies a text pattern; its test method returns a boolean match result.",
    "learn": [
      "Read anchors and simple character classes",
      "Use regex.test",
      "Distinguish format checks from database validation"
    ],
    "objective": "Apply regex basics: validate a simple product code in a reproducible small example.",
    "explanation": "An inventory code might require two capital letters followed by exactly three digits.\n\n^ and $ anchor the beginning and end, while {3} means an exact count. Regex format checking cannot confirm whether an identifier actually exists.\n\nTry it yourself: Change the item code to AB12.",
    "tip": "Start with small understandable patterns before exploring advanced regex features.",
    "hack": "Use named validation helpers instead of scattering the same regex throughout an app.",
    "mistake": "Overly strict regex can reject real names, so reserve this exact pattern for a known SKU format.",
    "expected": "true",
    "realUse": "SKU identifiers and structured code validation.",
    "html": "<main><h1>Regex basics: validate a simple product code</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst itemCode='AB123';\nshow(/^[A-Z]{2}\\d{3}$/.test(itemCode));",
    "practice": {
      "prompt": "Change the item code to AB12.",
      "check": "The result becomes false because a digit is missing."
    },
    "quiz": [
      {
        "question": "What does ^ anchor?",
        "options": [
          "Start of a string",
          "End of a string",
          "A digit"
        ],
        "correctIndex": 0,
        "explanation": "The caret anchors the start."
      },
      {
        "question": "What does test return?",
        "options": [
          "Boolean",
          "An object automatically",
          "CSS"
        ],
        "correctIndex": 0,
        "explanation": "RegExp.test reports match success or failure."
      }
    ]
  },
  {
    "id": "js-utc-date",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Strings & Numbers",
    "order": 80,
    "level": "Intermediate",
    "title": "Dates and UTC: avoid timezone confusion",
    "summary": "A transaction timestamp should be consistent even when the customer visits from another timezone.",
    "definition": "A JavaScript Date represents an instant in time; toISOString displays its UTC representation.",
    "learn": [
      "Create a timestamp from UTC components",
      "Read ISO date strings",
      "Understand zero-indexed months"
    ],
    "objective": "Apply dates and utc: avoid timezone confusion in a reproducible small example.",
    "explanation": "A transaction timestamp should be consistent even when the customer visits from another timezone.\n\nDate.UTC uses zero-indexed months, so month 9 is October. Use a date-only model when the business value is a calendar date rather than an instant.\n\nTry it yourself: Change the date from day 12 to day 13.",
    "tip": "Specify whether a business value is a calendar date or an exact timestamp.",
    "hack": "Use ISO strings for stable UTC transport and Intl for user-facing localized display.",
    "mistake": "Month 9 is October in Date.UTC, not September.",
    "expected": "2026-10-12",
    "realUse": "Audit logs and order time records.",
    "html": "<main><h1>Dates and UTC: avoid timezone confusion</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst date=new Date(Date.UTC(2026,9,12));\nshow(date.toISOString().slice(0,10));",
    "practice": {
      "prompt": "Change the date from day 12 to day 13.",
      "check": "The output becomes 2026-10-13."
    },
    "quiz": [
      {
        "question": "What month does Date.UTC(2026,9,12) refer to?",
        "options": [
          "October",
          "September",
          "November"
        ],
        "correctIndex": 0,
        "explanation": "Numeric month indexes start at zero."
      },
      {
        "question": "Does toISOString use UTC?",
        "options": [
          "Yes",
          "No",
          "Only in Chrome"
        ],
        "correctIndex": 0,
        "explanation": "It formats a UTC ISO timestamp."
      }
    ]
  },
  {
    "id": "js-bigint-integers",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Strings & Numbers",
    "order": 90,
    "level": "Intermediate",
    "title": "BigInt: exact very large integers",
    "summary": "Some record identifiers can exceed JavaScript Number's exact whole-number capacity.",
    "definition": "BigInt stores integer values beyond Number's safe integer precision range.",
    "learn": [
      "Recognize BigInt literals",
      "Understand Number safe-integer limits",
      "Avoid accidental mixed-type arithmetic"
    ],
    "objective": "Apply bigint: exact very large integers in a reproducible small example.",
    "explanation": "Some record identifiers can exceed JavaScript Number's exact whole-number capacity.\n\nBigInt is for integers, not fractional money. Arithmetic mixing BigInt with Number throws unless you explicitly convert suitable values.\n\nTry it yourself: Change the final digit in the BigInt literal from 3 to 4.",
    "tip": "Prefer stable text IDs when the value is an identifier, not something you calculate with.",
    "hack": "Create from exact strings with BigInt('9007199254740993').",
    "mistake": "JSON.stringify does not directly serialize BigInt without a custom conversion policy.",
    "expected": "9007199254740993",
    "realUse": "Large counters and exact numeric IDs.",
    "html": "<main><h1>BigInt: exact very large integers</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst id=9007199254740993n;\nshow(String(id));",
    "practice": {
      "prompt": "Change the final digit in the BigInt literal from 3 to 4.",
      "check": "The printed identifier ends in 994 without losing integer precision."
    },
    "quiz": [
      {
        "question": "What suffix marks a BigInt literal?",
        "options": [
          "n",
          "f",
          "d"
        ],
        "correctIndex": 0,
        "explanation": "BigInt literals end with n."
      },
      {
        "question": "Can you directly add 1n + 1?",
        "options": [
          "No",
          "Yes",
          "Only in modules"
        ],
        "correctIndex": 0,
        "explanation": "BigInt and Number need explicit compatible conversion."
      }
    ]
  },
  {
    "id": "js-prototype-lookup",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Objects & Data",
    "order": 95,
    "level": "Intermediate",
    "title": "Prototype chain: understand shared JavaScript behavior",
    "summary": "Multiple product records can reuse the same label method instead of storing duplicate functions.",
    "definition": "The prototype chain lets objects inherit access to properties and methods through delegated lookup.",
    "learn": [
      "Build an object with Object.create",
      "Trace own versus inherited properties",
      "Explain prototypes behind class syntax"
    ],
    "objective": "Apply prototype chain: understand shared javascript behavior in a reproducible small example.",
    "explanation": "Multiple product records can reuse the same label method instead of storing duplicate functions.\n\nObject.create sets a prototype. If the object has its own matching property, it wins before looking up the prototype chain. This underpins class syntax.\n\nTry it yourself: Define item.label = ()=>'Custom' before calling show.",
    "tip": "Use ordinary class syntax for apps when it expresses the intent more clearly.",
    "hack": "Inspect Object.getPrototypeOf(item) to understand lookup.",
    "mistake": "Never modify Object.prototype globally to attach application helper methods.",
    "expected": "CHICKEN",
    "realUse": "Understanding library objects and shared methods.",
    "html": "<main><h1>Prototype chain: understand shared JavaScript behavior</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst methods={label(){return this.name.toUpperCase();}};\nconst item=Object.create(methods);\nitem.name='Chicken';\nshow(item.label());",
    "practice": {
      "prompt": "Define item.label = ()=>'Custom' before calling show.",
      "check": "The object's own method overrides the inherited method."
    },
    "quiz": [
      {
        "question": "Where is label initially found?",
        "options": [
          "Prototype",
          "Stylesheet",
          "Server"
        ],
        "correctIndex": 0,
        "explanation": "Lookup falls back to the prototype."
      },
      {
        "question": "What wins after adding item.label?",
        "options": [
          "Own property",
          "Prototype always",
          "Neither"
        ],
        "correctIndex": 0,
        "explanation": "An own property shadows inherited properties."
      }
    ]
  },
  {
    "id": "js-extends-super",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Objects & Data",
    "order": 100,
    "level": "Intermediate",
    "title": "JavaScript class inheritance with extends and super",
    "summary": "A premium product can keep a common label behavior and add a prefix.",
    "definition": "extends creates a subclass of another class; super can call inherited constructor or method behavior.",
    "learn": [
      "Write extends",
      "Use super.method()",
      "Compare inheritance and composition"
    ],
    "objective": "Apply javascript class inheritance with extends and super in a reproducible small example.",
    "explanation": "A premium product can keep a common label behavior and add a prefix.\n\nInheritance should describe a real is-a relationship. Consider composition when the goal is only to share a utility function.\n\nTry it yourself: Remove the Premium prefix in the override.",
    "tip": "Avoid class trees that grow only to reuse a few lines of code.",
    "hack": "Use super.label() when an override intentionally builds on base behavior.",
    "mistake": "A subclass constructor cannot access this before calling super().",
    "expected": "Premium Beef",
    "realUse": "Component specializations and genuine subtypes.",
    "html": "<main><h1>JavaScript class inheritance with extends and super</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nclass Product{constructor(name){this.name=name;}label(){return this.name;}}\nclass Premium extends Product{label(){return 'Premium '+super.label();}}\nshow(new Premium('Beef').label());",
    "practice": {
      "prompt": "Remove the Premium prefix in the override.",
      "check": "The output becomes Beef."
    },
    "quiz": [
      {
        "question": "What does extends declare?",
        "options": [
          "Subclass relationship",
          "CSS variable",
          "Import URL"
        ],
        "correctIndex": 0,
        "explanation": "extends creates inheritance."
      },
      {
        "question": "What does super.label() run?",
        "options": [
          "Inherited method",
          "Fetch request",
          "DOM query"
        ],
        "correctIndex": 0,
        "explanation": "super refers to superclass behavior."
      }
    ]
  },
  {
    "id": "js-generators-yield",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Functions & Scope",
    "order": 90,
    "level": "Intermediate",
    "title": "Generators: yield values one at a time",
    "summary": "A sequence of sizes can be produced as each value is requested.",
    "definition": "A generator function produces an iterator whose values are emitted with yield.",
    "learn": [
      "Recognize function* and yield",
      "Iterate a generator",
      "Explain lazy sequence generation"
    ],
    "objective": "Apply generators: yield values one at a time in a reproducible small example.",
    "explanation": "A sequence of sizes can be produced as each value is requested.\n\nCalling a generator does not eagerly run the entire body. Its execution is driven by iteration or next() calls.\n\nTry it yourself: Add yield 'extra-large' at the end.",
    "tip": "For a short fixed list, a normal array is often easier to read.",
    "hack": "Use for...of to consume generator values naturally.",
    "mistake": "A generator call returns an iterator, not the first yielded item automatically.",
    "expected": "small, medium, large",
    "realUse": "Iterators and traversal of hierarchical data.",
    "html": "<main><h1>Generators: yield values one at a time</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nfunction* sizes(){yield 'small';yield 'medium';yield 'large';}\nshow([...sizes()].join(', '));",
    "practice": {
      "prompt": "Add yield 'extra-large' at the end.",
      "check": "The displayed sequence includes extra-large."
    },
    "quiz": [
      {
        "question": "Which keyword emits a generator value?",
        "options": [
          "yield",
          "returnOnly",
          "awaitOnly"
        ],
        "correctIndex": 0,
        "explanation": "yield pauses and produces an iterator value."
      },
      {
        "question": "When does the generator advance?",
        "options": [
          "When iteration requests another value",
          "On CSS repaint",
          "Automatically forever"
        ],
        "correctIndex": 0,
        "explanation": "Calling next or iterating drives it."
      }
    ]
  },
  {
    "id": "js-allsettled",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Asynchronous Thinking",
    "order": 60,
    "level": "Advanced",
    "title": "Promise.allSettled(): preserve partial results",
    "summary": "A dashboard may show the sections that succeeded while separately explaining which requests failed.",
    "definition": "Promise.allSettled resolves to a result object for every input promise, even when some fail.",
    "learn": [
      "Choose allSettled over all when needed",
      "Read fulfillment or rejection statuses",
      "Handle independent failures intentionally"
    ],
    "objective": "Apply promise.allsettled(): preserve partial results in a reproducible small example.",
    "explanation": "A dashboard may show the sections that succeeded while separately explaining which requests failed.\n\nUnlike Promise.all, allSettled does not reject merely because one input rejects. Inspect each result.status before reading value or reason.\n\nTry it yourself: Replace the rejected Promise with Promise.resolve(2).",
    "tip": "Show visitors which sections failed instead of silently hiding missing results.",
    "hack": "Map status first, then safely access value or reason in the corresponding branch.",
    "mistake": "An allSettled result with rejected items is not full task success.",
    "expected": "fulfilled, rejected",
    "realUse": "Independent dashboard widgets and batch summaries.",
    "html": "<main><h1>Promise.allSettled(): preserve partial results</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nPromise.allSettled([Promise.resolve(1),Promise.reject(new Error('demo'))])\n.then(results=>show(results.map(x=>x.status).join(', ')));",
    "practice": {
      "prompt": "Replace the rejected Promise with Promise.resolve(2).",
      "check": "Both entries are fulfilled."
    },
    "quiz": [
      {
        "question": "What happens if one input rejects?",
        "options": [
          "allSettled still reports each outcome",
          "allSettled always rejects",
          "All results disappear"
        ],
        "correctIndex": 0,
        "explanation": "It resolves with individual outcomes."
      },
      {
        "question": "Which field distinguishes successes and failures?",
        "options": [
          "status",
          "typeName",
          "id"
        ],
        "correctIndex": 0,
        "explanation": "Each result has a status."
      }
    ]
  },
  {
    "id": "js-microtask-order",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Asynchronous Thinking",
    "order": 70,
    "level": "Advanced",
    "title": "Event loop: synchronous code before microtasks",
    "summary": "An action queued for the next microtask does not interrupt instructions already running.",
    "definition": "Promise reactions execute as microtasks after the current synchronous work completes.",
    "learn": [
      "Predict synchronous execution order",
      "Recognize Promise microtasks",
      "Debug event-loop timing"
    ],
    "objective": "Apply event loop: synchronous code before microtasks in a reproducible small example.",
    "explanation": "An action queued for the next microtask does not interrupt instructions already running.\n\nA resolved Promise callback is still asynchronous. In browser event-loop reasoning, microtasks are processed at checkpoints before advancing to another task.\n\nTry it yourself: Put steps.push('sync end') before scheduling the Promise.",
    "tip": "Annotate the expected order before running async examples.",
    "hack": "Use numbered console logs to trace whether code runs synchronously or in a microtask.",
    "mistake": "Promise.resolve().then(...) does not execute the callback inline immediately.",
    "expected": "start → sync end → microtask",
    "realUse": "Debugging asynchronous UI rendering.",
    "html": "<main><h1>Event loop: synchronous code before microtasks</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst steps=['start'];\nPromise.resolve().then(()=>{steps.push('microtask');show(steps.join(' → '));});\nsteps.push('sync end');",
    "practice": {
      "prompt": "Put steps.push('sync end') before scheduling the Promise.",
      "check": "The microtask still appears at the end."
    },
    "quiz": [
      {
        "question": "When do Promise.then reactions run?",
        "options": [
          "At a microtask checkpoint",
          "Before all synchronous code",
          "Only after fetch"
        ],
        "correctIndex": 0,
        "explanation": "Promise reactions use the microtask queue."
      },
      {
        "question": "Does this lesson access a network?",
        "options": [
          "No",
          "Yes",
          "Only on mobile"
        ],
        "correctIndex": 0,
        "explanation": "The Promise is locally resolved."
      }
    ]
  },
  {
    "id": "js-freeze-shallow",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Architecture & Quality",
    "order": 60,
    "level": "Advanced",
    "title": "Object.freeze: immutable top-level state",
    "summary": "A settings object can resist accidental top-level edits without granting any server security.",
    "definition": "Object.freeze prevents changing an object's own property descriptors, but only shallowly.",
    "learn": [
      "Recognize a frozen object",
      "Explain shallow versus deep immutability",
      "Separate client safeguards from security"
    ],
    "objective": "Apply object.freeze: immutable top-level state in a reproducible small example.",
    "explanation": "A settings object can resist accidental top-level edits without granting any server security.\n\nObject.freeze does not recursively protect nested object references. It cannot replace backend validation, authorization, or audit trails.\n\nTry it yourself: Remove Object.freeze and rerun the example.",
    "tip": "Use immutable data patterns when several UI parts share state.",
    "hack": "Object.isFrozen helps confirm whether an object is frozen.",
    "mistake": "Freezing browser data does not stop malicious requests to a server.",
    "expected": "true",
    "realUse": "Client configuration and predictable state.",
    "html": "<main><h1>Object.freeze: immutable top-level state</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst options=Object.freeze({mode:'safe'});\nshow(String(Object.isFrozen(options)));",
    "practice": {
      "prompt": "Remove Object.freeze and rerun the example.",
      "check": "Object.isFrozen becomes false."
    },
    "quiz": [
      {
        "question": "Is Object.freeze deep by default?",
        "options": [
          "No",
          "Yes",
          "Only for strings"
        ],
        "correctIndex": 0,
        "explanation": "Nested references are still mutable unless separately frozen."
      },
      {
        "question": "Does it enforce server permissions?",
        "options": [
          "No",
          "Yes",
          "Only in strict mode"
        ],
        "correctIndex": 0,
        "explanation": "Authorization must be enforced server-side."
      }
    ]
  },
  {
    "id": "js-this-binding",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Functions & Scope",
    "order": 95,
    "level": "Intermediate",
    "title": "this in regular object methods",
    "summary": "A product object can speak about its own name through a method.",
    "definition": "For a regular method call, this usually refers to the object used to call the method.",
    "learn": [
      "Recognize method calls",
      "Explain dynamic this in a regular method",
      "Avoid unbound method surprises"
    ],
    "objective": "Apply this in regular object methods in a reproducible small example.",
    "explanation": "A product object can speak about its own name through a method.\n\nthis depends on how a normal function is called, not where it is written. Arrow functions capture lexical this instead; they are not interchangeable for every object method.\n\nTry it yourself: Add price:130 and change label() to return name plus price.",
    "tip": "Prefer concise method syntax for object behavior that needs this.",
    "hack": "Use .bind(obj) when passing a regular method as a callback that must preserve its receiver.",
    "mistake": "Extracting const fn = product.label; then calling fn() can lose the original this binding.",
    "expected": "Fish Fillet",
    "realUse": "Class and object behavior in application models.",
    "html": "<main><h1>this in regular object methods</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.6 system-ui;background:#edf4fa;padding:25px;color:#17344b}main{background:#fff;padding:24px;border-radius:14px;max-width:640px;margin:auto}pre{white-space:pre-wrap;overflow-wrap:anywhere;padding:16px;background:#edf3f8;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst product={name:'Fish Fillet',label(){return this.name;}};\nshow(product.label());",
    "practice": {
      "prompt": "Add price:130 and change label() to return name plus price.",
      "check": "The display includes Fish Fillet and 130."
    },
    "quiz": [
      {
        "question": "In product.label(), what is this?",
        "options": [
          "product",
          "window always",
          "The HTML document"
        ],
        "correctIndex": 0,
        "explanation": "The receiver object supplies this to a regular method call."
      },
      {
        "question": "Why can extracting the method break this?",
        "options": [
          "The call loses its receiver",
          "Because strings disappear",
          "Because CSS changes"
        ],
        "correctIndex": 0,
        "explanation": "The calling form determines the this binding."
      }
    ]
  }
];
const ids=new Set(data.lessons.map(l=>l.id));for(const lesson of additions){if(!ids.has(lesson.id)){data.lessons.push(lesson);ids.add(lesson.id);}}
})();
