(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;const additions=[
  {
    "id": "js-array-slice-splice",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Arrays",
    "order": 45,
    "title": "slice() vs splice(): copy or edit an array",
    "summary": "A product picker may need a temporary preview of items without deleting the master list.",
    "definition": "slice returns a portion of an array without changing it; splice changes the original array by removing or inserting entries.",
    "learn": [
      "Describe slice() vs splice(): copy or edit an array",
      "slice returns a portion of an array without changing it; splice changes the original array by removing or inserting entries.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use slice() vs splice(): copy or edit an array appropriately in maintainable code.",
    "explanation": "A product picker may need a temporary preview of items without deleting the master list.\n\nUse slice for a nonmutating copy. Use splice when you intentionally want to edit an array. The two similar names have very different effects.\n\nTry it yourself: Change splice(2,1) to splice(1,1) and predict which item is removed.",
    "tip": "Decide whether the original array is allowed to change before choosing an array method.",
    "hack": "Use slice() without arguments for a shallow array copy when that improves readability.",
    "mistake": "splice mutates the source. Accidentally calling it on shared state can break another UI view.",
    "expected": "Preview: Liempo, Chicken; after edit: Liempo, Chicken; removed: Fish",
    "realUse": "List editing and nonmutating previews.",
    "html": "<main><h1>slice() vs splice(): copy or edit an array</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst products=['Liempo','Chicken','Fish'];\nconst preview=products.slice(0,2);\nconst removed=products.splice(2,1);\nshow('Preview: '+preview.join(', ')+'; after edit: '+products.join(', ')+'; removed: '+removed.join(', '));",
    "practice": {
      "prompt": "Change splice(2,1) to splice(1,1) and predict which item is removed.",
      "check": "Chicken is removed; the original products array becomes Liempo, Fish."
    },
    "quiz": [
      {
        "question": "Which method mutates its source?",
        "options": [
          "slice",
          "splice",
          "includes"
        ],
        "correctIndex": 1,
        "explanation": "splice changes the original array."
      },
      {
        "question": "What does slice(0,2) include?",
        "options": [
          "Index 0 and 1",
          "Index 2 only",
          "All values"
        ],
        "correctIndex": 0,
        "explanation": "The end index is exclusive."
      }
    ]
  },
  {
    "id": "js-array-sort-safely",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Arrays",
    "order": 55,
    "title": "Numeric sorting without changing the original",
    "summary": "A catalog may offer sorted prices while the original source order remains important.",
    "definition": "Array.sort sorts in place; copying before sorting preserves the original array.",
    "learn": [
      "Describe numeric sorting without changing the original",
      "Array.sort sorts in place; copying before sorting preserves the original array.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use numeric sorting without changing the original appropriately in maintainable code.",
    "explanation": "A catalog may offer sorted prices while the original source order remains important.\n\nDefault sort compares strings. For numeric ascending order, use a comparator (a,b)=>a-b. Copy with spread first to avoid mutating shared data.\n\nTry it yourself: Remove the comparator and inspect the difference.",
    "tip": "Choose a comparator matching the actual value type.",
    "hack": "Where supported, toSorted() can provide an immutable result more directly.",
    "mistake": "Without a numeric comparator, default sort would place 100 before 25 before 9.",
    "expected": "Sorted: 9, 25, 100 / Original: 100, 9, 25",
    "realUse": "Product sorting and report views.",
    "html": "<main><h1>Numeric sorting without changing the original</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst prices=[100,9,25];\nconst sorted=[...prices].sort((a,b)=>a-b);\nshow('Sorted: '+sorted.join(', ')+' / Original: '+prices.join(', '));",
    "practice": {
      "prompt": "Remove the comparator and inspect the difference.",
      "check": "Default lexicographic sorting yields 100, 25, 9."
    },
    "quiz": [
      {
        "question": "Why write (a,b)=>a-b?",
        "options": [
          "Numeric ascending order",
          "String concatenation",
          "Server requests"
        ],
        "correctIndex": 0,
        "explanation": "The comparator orders numbers by difference."
      },
      {
        "question": "Does [...prices].sort mutate prices?",
        "options": [
          "No",
          "Yes",
          "Only on mobile"
        ],
        "correctIndex": 0,
        "explanation": "It mutates the shallow copied array."
      }
    ]
  },
  {
    "id": "js-set-unique-values",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Arrays",
    "order": 60,
    "title": "Set: unique primitive values",
    "summary": "A category picker should not list the same category twice when imported records repeat it.",
    "definition": "A Set collection stores distinct values using SameValueZero equality.",
    "learn": [
      "Describe set: unique primitive values",
      "A Set collection stores distinct values using SameValueZero equality.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use set: unique primitive values appropriately in maintainable code.",
    "explanation": "A category picker should not list the same category twice when imported records repeat it.\n\nSet deduplicates primitive entries. Two different objects with identical fields remain different references, so normalize identifiers instead of expecting deep equality.\n\nTry it yourself: Add uppercase 'Chicken' and examine why it remains.",
    "tip": "Normalize letter case when users should see only one variation of a label.",
    "hack": "[...new Set(values)] is readable when you want unique primitive values.",
    "mistake": "'Chicken' and 'chicken' are different strings, so both can appear in the Set.",
    "expected": "beef, chicken, fish",
    "realUse": "Category filter options and import cleanup.",
    "html": "<main><h1>Set: unique primitive values</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst tags=['beef','chicken','beef','fish'];\nconst unique=[...new Set(tags)];\nshow(unique.join(', '));",
    "practice": {
      "prompt": "Add uppercase 'Chicken' and examine why it remains.",
      "check": "Uppercase Chicken is a distinct entry until normalized."
    },
    "quiz": [
      {
        "question": "What does Set remove?",
        "options": [
          "Duplicate equal entries",
          "All objects",
          "Empty strings automatically"
        ],
        "correctIndex": 0,
        "explanation": "Set retains one of each equal value."
      },
      {
        "question": "Are differently capitalized words equal in a Set?",
        "options": [
          "Yes",
          "No",
          "Always with trim"
        ],
        "correctIndex": 1,
        "explanation": "String values are case-sensitive."
      }
    ]
  },
  {
    "id": "js-map-keyed-lookup",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Arrays",
    "order": 65,
    "title": "Map: store and look up values by key",
    "summary": "A stock lookup needs a product identifier and its remaining quantity.",
    "definition": "A Map associates keys with values and preserves insertion order during iteration.",
    "learn": [
      "Describe map: store and look up values by key",
      "A Map associates keys with values and preserves insertion order during iteration.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use map: store and look up values by key appropriately in maintainable code.",
    "explanation": "A stock lookup needs a product identifier and its remaining quantity.\n\nMap.get returns undefined for a missing key; Map.has lets you distinguish missing from an explicitly stored undefined value.\n\nTry it yourself: Add stock.set('fish',2) and print stock.get('fish').",
    "tip": "Store stable IDs as keys when names might change.",
    "hack": "Map is useful when keys are not limited to string or symbol properties.",
    "mistake": "A missing key is not automatically a numeric zero.",
    "expected": "Liempo: 4; Chicken exists: true",
    "realUse": "In-memory lookup indexes and caches.",
    "html": "<main><h1>Map: store and look up values by key</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst stock=new Map([['liempo',4],['chicken',0]]);\nshow('Liempo: '+stock.get('liempo')+'; Chicken exists: '+stock.has('chicken'));",
    "practice": {
      "prompt": "Add stock.set('fish',2) and print stock.get('fish').",
      "check": "The new key returns 2."
    },
    "quiz": [
      {
        "question": "What does has return?",
        "options": [
          "Whether a key exists",
          "Its quantity",
          "A whole array"
        ],
        "correctIndex": 0,
        "explanation": "Map.has explicitly checks key presence."
      },
      {
        "question": "What does get return for a missing key?",
        "options": [
          "undefined",
          "0",
          "false"
        ],
        "correctIndex": 0,
        "explanation": "Missing entries yield undefined."
      }
    ]
  },
  {
    "id": "js-object-destructuring",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Objects & Data",
    "order": 20,
    "title": "Destructuring and sensible defaults",
    "summary": "A product card needs only a few fields from a much larger record.",
    "definition": "Object destructuring extracts selected properties into local bindings; defaults apply for missing or undefined values.",
    "learn": [
      "Describe destructuring and sensible defaults",
      "Object destructuring extracts selected properties into local bindings; defaults apply for missing or undefined values.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use destructuring and sensible defaults appropriately in maintainable code.",
    "explanation": "A product card needs only a few fields from a much larger record.\n\nDestructuring can clarify which properties matter. Defaults apply to undefined, not to null or zero, so do not mistake a meaningful value for a missing one.\n\nTry it yourself: Add stock:3 to product and verify it overrides the default.",
    "tip": "Dot notation is still preferable when destructuring makes a tiny example harder to read.",
    "hack": "Use destructuring for well-defined fields received by a function.",
    "mistake": "stock=0 does not override an explicit stock:null value.",
    "expected": "Liempo: 125; stock: 0",
    "realUse": "Object response handling and rendering UI cards.",
    "html": "<main><h1>Destructuring and sensible defaults</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst product={name:'Liempo',price:125};\nconst {name,price,stock=0}=product;\nshow(name+': '+price+'; stock: '+stock);",
    "practice": {
      "prompt": "Add stock:3 to product and verify it overrides the default.",
      "check": "Stock displays 3."
    },
    "quiz": [
      {
        "question": "When does stock=0 default apply?",
        "options": [
          "When missing or undefined",
          "When stock is 2",
          "When null"
        ],
        "correctIndex": 0,
        "explanation": "Destructuring defaults activate for undefined."
      },
      {
        "question": "Does destructuring mutate product?",
        "options": [
          "No",
          "Yes",
          "Always when defaulted"
        ],
        "correctIndex": 0,
        "explanation": "It creates local bindings."
      }
    ]
  },
  {
    "id": "js-json-basics",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Objects & Data",
    "order": 30,
    "title": "JSON: parse and stringify safely",
    "summary": "A server or saved file may give you an order record as JSON text.",
    "definition": "JSON is a text data format; JSON.parse converts valid JSON text to a value and JSON.stringify serializes supported values.",
    "learn": [
      "Describe json: parse and stringify safely",
      "JSON is a text data format; JSON.parse converts valid JSON text to a value and JSON.stringify serializes supported values.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use json: parse and stringify safely appropriately in maintainable code.",
    "explanation": "A server or saved file may give you an order record as JSON text.\n\nJSON.parse is not executable JavaScript. Valid JSON can still be wrong for your app, so validate the expected fields and types after parsing.\n\nTry it yourself: Change stock to 0 in the JSON string, then break a quote and inspect the error.",
    "tip": "Validate parsed object shape before trusting fields.",
    "hack": "JSON.stringify({name:'Fish',stock:2}) creates transportable JSON text.",
    "mistake": "Syntax-valid JSON is not guaranteed to meet your business rules.",
    "expected": "Fish Fillet: 2 left",
    "realUse": "API responses, configuration, and persistence.",
    "html": "<main><h1>JSON: parse and stringify safely</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst raw='{\"name\":\"Fish Fillet\",\"stock\":2}';\nconst product=JSON.parse(raw);\nshow(product.name+': '+product.stock+' left');",
    "practice": {
      "prompt": "Change stock to 0 in the JSON string, then break a quote and inspect the error.",
      "check": "Stock 0 works; malformed JSON causes a SyntaxError."
    },
    "quiz": [
      {
        "question": "What does JSON.parse do?",
        "options": [
          "Turns JSON text into values",
          "Runs executable source code",
          "Changes CSS"
        ],
        "correctIndex": 0,
        "explanation": "It parses valid JSON syntax."
      },
      {
        "question": "Is valid JSON always valid business data?",
        "options": [
          "Yes",
          "No",
          "Only if formatted"
        ],
        "correctIndex": 1,
        "explanation": "Field types and required properties need separate checks."
      }
    ]
  },
  {
    "id": "js-classes-constructor",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Objects & Data",
    "order": 50,
    "title": "JavaScript class constructors and methods",
    "summary": "Every cart item has a name and quantity and can describe itself.",
    "definition": "A class is a template for constructing objects with shared methods; constructor initializes instance state.",
    "learn": [
      "Describe javascript class constructors and methods",
      "A class is a template for constructing objects with shared methods; constructor initializes instance state.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use javascript class constructors and methods appropriately in maintainable code.",
    "explanation": "Every cart item has a name and quantity and can describe itself.\n\nclass syntax is built on JavaScript's prototype system. A constructor gives each instance its own properties, while methods can be shared by instances.\n\nTry it yourself: Create a second item named Fish with quantity 3.",
    "tip": "Use a plain object for simple records that do not need class behavior.",
    "hack": "Prefer focused methods rather than one giant class with unrelated responsibilities.",
    "mistake": "Do not forget new when constructing an instance with class syntax.",
    "expected": "Chicken: 2",
    "realUse": "Client-side domain models and reusable components.",
    "html": "<main><h1>JavaScript class constructors and methods</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nclass CartItem {\n constructor(name,quantity){this.name=name;this.quantity=quantity;}\n label(){return this.name+': '+this.quantity;}\n}\nconst item=new CartItem('Chicken',2);\nshow(item.label());",
    "practice": {
      "prompt": "Create a second item named Fish with quantity 3.",
      "check": "Its label() returns Fish: 3."
    },
    "quiz": [
      {
        "question": "What initializes new CartItem state?",
        "options": [
          "constructor",
          "CSS",
          "JSON.parse"
        ],
        "correctIndex": 0,
        "explanation": "The constructor runs when an instance is created."
      },
      {
        "question": "What does new do?",
        "options": [
          "Creates an instance",
          "Runs an HTML parser",
          "Makes code asynchronous"
        ],
        "correctIndex": 0,
        "explanation": "new constructs an instance using the class."
      }
    ]
  },
  {
    "id": "js-promise-all",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Asynchronous Thinking",
    "order": 20,
    "title": "Promise.all and parallel independent tasks",
    "summary": "Two independent local calculations can complete before the page displays their combined result.",
    "definition": "Promise.all fulfills with all results when every input Promise fulfills; it rejects if any input rejects.",
    "learn": [
      "Describe promise.all and parallel independent tasks",
      "Promise.all fulfills with all results when every input Promise fulfills; it rejects if any input rejects.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use promise.all and parallel independent tasks appropriately in maintainable code.",
    "explanation": "Two independent local calculations can complete before the page displays their combined result.\n\nPromise.all waits for independent tasks together. This example uses local resolved promises only—no external API request is made inside our sandbox.\n\nTry it yourself: Replace one Promise.resolve with Promise.reject(new Error('demo')).",
    "tip": "Use Promise.all only when the tasks can run independently and all results are required.",
    "hack": "Promise.allSettled is an alternative when you need every outcome even if some fail.",
    "mistake": "This is not proof that real network calls are permitted; the runner blocks network access.",
    "expected": "Total: 7",
    "realUse": "Combining independent asynchronous operations.",
    "html": "<main><h1>Promise.all and parallel independent tasks</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nPromise.all([Promise.resolve(3),Promise.resolve(4)])\n .then(values=>show('Total: '+values.reduce((a,b)=>a+b,0)))\n .catch(error=>show('Failed: '+error.message));",
    "practice": {
      "prompt": "Replace one Promise.resolve with Promise.reject(new Error('demo')).",
      "check": "The catch branch displays Failed: demo."
    },
    "quiz": [
      {
        "question": "What happens when all promises fulfill?",
        "options": [
          "One array of results",
          "A new page",
          "A server opens"
        ],
        "correctIndex": 0,
        "explanation": "Promise.all fulfills with results in input order."
      },
      {
        "question": "What if any input rejects?",
        "options": [
          "Promise.all rejects",
          "It always returns zero",
          "It retries automatically"
        ],
        "correctIndex": 0,
        "explanation": "The combined Promise rejects on the first rejection."
      }
    ]
  },
  {
    "id": "js-try-catch",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Architecture & Quality",
    "order": 10,
    "title": "try/catch and useful errors",
    "summary": "When an imported price is invalid, the UI should explain the problem instead of showing NaN.",
    "definition": "try/catch handles synchronous exceptions, and can also handle rejected promises inside async functions when using await.",
    "learn": [
      "Describe try/catch and useful errors",
      "try/catch handles synchronous exceptions, and can also handle rejected promises inside async functions when using await.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use try/catch and useful errors appropriately in maintainable code.",
    "explanation": "When an imported price is invalid, the UI should explain the problem instead of showing NaN.\n\nCatch errors at a boundary where you can recover or report meaningfully. Do not swallow failures silently; log useful diagnostics without exposing secrets.\n\nTry it yourself: Change 'abc' to '20' and inspect the success path.",
    "tip": "Distinguish validation errors from unexpected programming bugs.",
    "hack": "Use small functions so the invalid input that caused a failure is easy to reproduce.",
    "mistake": "An empty catch block hides bugs and makes troubleshooting difficult.",
    "expected": "Check input: Invalid quantity",
    "realUse": "Defensive forms, importers, and debugging.",
    "html": "<main><h1>try/catch and useful errors</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nfunction double(raw){\n const value=Number(raw);\n if(!raw.trim()||!Number.isFinite(value)) throw new Error('Invalid quantity');\n return value*2;\n}\ntry{show(double('abc'));}catch(error){show('Check input: '+error.message);}",
    "practice": {
      "prompt": "Change 'abc' to '20' and inspect the success path.",
      "check": "The output becomes 40."
    },
    "quiz": [
      {
        "question": "What does throw new Error do?",
        "options": [
          "Signals an exceptional condition",
          "Creates a DOM element",
          "Sorts an array"
        ],
        "correctIndex": 0,
        "explanation": "throw transfers control toward a matching catch."
      },
      {
        "question": "Should catch silently ignore every error?",
        "options": [
          "Yes",
          "No",
          "Only with Java"
        ],
        "correctIndex": 1,
        "explanation": "Silent handling masks real problems."
      }
    ]
  },
  {
    "id": "js-safe-text-rendering",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Architecture & Quality",
    "order": 20,
    "title": "textContent vs innerHTML: prevent accidental markup",
    "summary": "A submitted product name should appear as text, not be treated as an instruction to create new HTML elements.",
    "definition": "textContent writes plain text to an element; innerHTML parses a string as HTML markup.",
    "learn": [
      "Describe textcontent vs innerhtml: prevent accidental markup",
      "textContent writes plain text to an element; innerHTML parses a string as HTML markup.",
      "Predict what the browser example will display",
      "Modify the example and verify the expected result"
    ],
    "objective": "Use textcontent vs innerhtml: prevent accidental markup appropriately in maintainable code.",
    "explanation": "A submitted product name should appear as text, not be treated as an instruction to create new HTML elements.\n\nWhen rendering untrusted strings, textContent prevents those strings from being interpreted as HTML. HTML injection can lead to cross-site scripting in less-protected contexts.\n\nTry it yourself: Change userLabel to '<b>Chicken</b>' and observe the display.",
    "tip": "Prefer textContent when writing plain text.",
    "hack": "Use createElement plus textContent to build safe, structured DOM output.",
    "mistake": "Never concatenate untrusted values directly into innerHTML and assume escaping occurs automatically.",
    "expected": "<img src=x onerror=alert(1)>",
    "realUse": "Chat messages, product catalogs, and names provided by users.",
    "html": "<main><h1>textContent vs innerHTML: prevent accidental markup</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;color:#17344b;padding:24px}main{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f0f5fa;padding:15px;border-radius:8px}",
    "js": "const show=value=>{document.querySelector('#result').textContent=String(value);};\nconst userLabel='<img src=x onerror=alert(1)>';\nshow(userLabel);",
    "practice": {
      "prompt": "Change userLabel to '<b>Chicken</b>' and observe the display.",
      "check": "The text shows the literal tags; it does not create a bold element."
    },
    "quiz": [
      {
        "question": "Which API writes plain text?",
        "options": [
          "textContent",
          "innerHTML",
          "eval"
        ],
        "correctIndex": 0,
        "explanation": "textContent does not parse the string as HTML."
      },
      {
        "question": "What can unsafe innerHTML interpolation cause?",
        "options": [
          "HTML injection",
          "Always faster apps",
          "Automatic validation"
        ],
        "correctIndex": 0,
        "explanation": "Markup parsing can interpret untrusted content."
      }
    ]
  }
];const seen=new Set(data.lessons.map(x=>x.id));for(const l of additions){if(!seen.has(l.id)){data.lessons.push(l);seen.add(l.id);}}})();