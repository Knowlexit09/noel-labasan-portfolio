(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons||!data?.categories)return;
const additions=[
  {
    "id": "js-statements-comments",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Foundation",
    "order": 6,
    "level": "Beginner",
    "title": "Statements, comments, and readable syntax",
    "summary": "Think of a recipe: executable statements are instructions and comments are notes for the cook.",
    "definition": "A JavaScript statement is an instruction for the runtime; a comment is source text ignored by execution.",
    "learn": [
      "Explain the problem this concept solves",
      "A JavaScript statement is an instruction for the runtime; a comment is source text ignored by execution.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice statements, comments, and readable syntax.",
    "explanation": "Think of a recipe: executable statements are instructions and comments are notes for the cook.\n\nJavaScript runs statements in order unless control flow changes that order. Use consistent semicolons and formatting; automatic semicolon insertion has edge cases.\n\nTry it yourself: Change count to 5 and write one comment that explains why.",
    "tip": "Explain why something happens in comments, not every obvious keystroke.",
    "hack": "Use // for a line note and /* ... */ for a multi-line note.",
    "mistake": "Comments do not run. Do not hide code in a comment and expect its side effects.",
    "expected": "Chicken: 3",
    "realUse": "Readable checkout rules and code review.",
    "html": "<main><h1>Statements, comments, and readable syntax</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst name = 'Chicken'; // product label\nconst count = 3;\nshow(name + ': ' + count);",
    "practice": {
      "prompt": "Change count to 5 and write one comment that explains why.",
      "check": "The output becomes Chicken: 5; the comment itself is never printed."
    },
    "quiz": [
      {
        "question": "Which portion is executed?",
        "options": [
          "The comment",
          "The variable declaration",
          "The filename"
        ],
        "correctIndex": 1,
        "explanation": "The declaration is a JavaScript statement; comments are ignored."
      },
      {
        "question": "Why add comments?",
        "options": [
          "Explain intent where needed",
          "Make invalid syntax work",
          "Convert values"
        ],
        "correctIndex": 0,
        "explanation": "Helpful comments describe the reason behind the code."
      }
    ]
  },
  {
    "id": "js-arithmetic-precedence",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 10,
    "level": "Beginner",
    "title": "Arithmetic and operator precedence",
    "summary": "A checkout has price, quantity, and delivery fee. The multiplication must happen before adding the fee.",
    "definition": "Arithmetic operators calculate values; precedence determines how expressions group unless parentheses override it.",
    "learn": [
      "Explain the problem this concept solves",
      "Arithmetic operators calculate values; precedence determines how expressions group unless parentheses override it.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice arithmetic and operator precedence.",
    "explanation": "A checkout has price, quantity, and delivery fee. The multiplication must happen before adding the fee.\n\nIn JavaScript, multiplication has higher precedence than addition. Parentheses clarify the intended business calculation even when they are mathematically optional.\n\nTry it yourself: Change quantity to 3; calculate by hand before pressing Run.",
    "tip": "Show formula steps in your head before trusting a calculator.",
    "hack": "Write (price * quantity) + delivery to make the business rule explicit.",
    "mistake": "2 + 3 * 4 is 14, not 20; do not assume all operators execute left to right.",
    "expected": "290",
    "realUse": "Cart totals and order estimates.",
    "html": "<main><h1>Arithmetic and operator precedence</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst price = 125;\nconst quantity = 2;\nconst delivery = 40;\nshow(price * quantity + delivery);",
    "practice": {
      "prompt": "Change quantity to 3; calculate by hand before pressing Run.",
      "check": "The total becomes 415."
    },
    "quiz": [
      {
        "question": "What is 2 + 3 * 4?",
        "options": [
          "20",
          "14",
          "24"
        ],
        "correctIndex": 1,
        "explanation": "Multiplication has higher precedence than addition."
      },
      {
        "question": "Why use parentheses?",
        "options": [
          "Clarify grouping",
          "Send a network request",
          "Declare a variable"
        ],
        "correctIndex": 0,
        "explanation": "Parentheses make calculation intent explicit."
      }
    ]
  },
  {
    "id": "js-strict-equality",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 20,
    "level": "Beginner",
    "title": "Strict equality and numeric comparison",
    "summary": "A product ID from an input field might be text, while the actual product ID is a number.",
    "definition": "=== compares values without type coercion, unlike loose ==.",
    "learn": [
      "Explain the problem this concept solves",
      "=== compares values without type coercion, unlike loose ==.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice strict equality and numeric comparison.",
    "explanation": "A product ID from an input field might be text, while the actual product ID is a number.\n\nDecide which type you need and convert deliberately. Number('12') === 12 is true, while '12' === 12 is false.\n\nTry it yourself: Replace inputId with 'abc' and explain both comparisons.",
    "tip": "Prefer === and !== for everyday comparisons.",
    "hack": "Use Number.isInteger after converting IDs if only whole numbers are allowed.",
    "mistake": "Using == can silently hide mismatched types.",
    "expected": "false / true",
    "realUse": "Lookup IDs, validation, and record matching.",
    "html": "<main><h1>Strict equality and numeric comparison</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst inputId = '12';\nconst productId = 12;\nshow(String(inputId === productId) + ' / ' + String(Number(inputId) === productId));",
    "practice": {
      "prompt": "Replace inputId with 'abc' and explain both comparisons.",
      "check": "Both comparisons are false."
    },
    "quiz": [
      {
        "question": "What is '12' === 12?",
        "options": [
          "true",
          "false",
          "null"
        ],
        "correctIndex": 1,
        "explanation": "Strict equality does not turn a string into a number."
      },
      {
        "question": "What is safer for numeric user input?",
        "options": [
          "Deliberately convert and validate",
          "Always use ==",
          "Ignore type"
        ],
        "correctIndex": 0,
        "explanation": "Explicit conversion prevents accidental coercion."
      }
    ]
  },
  {
    "id": "js-boolean-logic",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 30,
    "level": "Beginner",
    "title": "Logical AND, OR, and NOT",
    "summary": "An order should succeed only when quantity is valid AND enough stock is available.",
    "definition": "&& combines requirements, || offers alternatives, and ! negates a truthy value.",
    "learn": [
      "Explain the problem this concept solves",
      "&& combines requirements, || offers alternatives, and ! negates a truthy value.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice logical and, or, and not.",
    "explanation": "An order should succeed only when quantity is valid AND enough stock is available.\n\nLogical operators may return operands rather than booleans, so make expressions clear. Short-circuit evaluation stops checking once the result is determined.\n\nTry it yourself: Set authorized to false and predict the result.",
    "tip": "Write a rule in plain English before turning it into && and ||.",
    "hack": "Use named booleans when a condition spans several business requirements.",
    "mistake": "Using || instead of && can accidentally approve an incomplete rule.",
    "expected": "Approved",
    "realUse": "Forms and permitted order actions.",
    "html": "<main><h1>Logical AND, OR, and NOT</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst quantity = 2;\nconst stock = 4;\nconst authorized = true;\nshow(quantity > 0 && quantity <= stock && authorized ? 'Approved' : 'Denied');",
    "practice": {
      "prompt": "Set authorized to false and predict the result.",
      "check": "The order is Denied."
    },
    "quiz": [
      {
        "question": "What is required for A && B?",
        "options": [
          "Both A and B",
          "Either A or B",
          "Neither"
        ],
        "correctIndex": 0,
        "explanation": "AND succeeds only when both conditions are truthy."
      },
      {
        "question": "What does ! do?",
        "options": [
          "Negates truthiness",
          "Declares a function",
          "Creates HTML"
        ],
        "correctIndex": 0,
        "explanation": "Logical NOT reverses the boolean interpretation."
      }
    ]
  },
  {
    "id": "js-switch-cases",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 40,
    "level": "Beginner",
    "title": "switch and predictable case selection",
    "summary": "A shop has a few exact delivery options: pickup, local, and other.",
    "definition": "switch chooses among case labels based on strict equality.",
    "learn": [
      "Explain the problem this concept solves",
      "switch chooses among case labels based on strict equality.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice switch and predictable case selection.",
    "explanation": "A shop has a few exact delivery options: pickup, local, and other.\n\nswitch is readable for discrete choices; use break unless fall-through is an intentional documented choice, and use default for the remaining cases.\n\nTry it yourself: Test method 'local', then an unknown method.",
    "tip": "Choose switch for exact named options; ranges are often clearer with if/else.",
    "hack": "Several case labels can share one body when they deliberately mean the same thing.",
    "mistake": "Without break, code may fall through to later cases.",
    "expected": "Fee: 0",
    "realUse": "Delivery options and small menu state changes.",
    "html": "<main><h1>switch and predictable case selection</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst method = 'pickup';\nlet fee;\nswitch(method){\n case 'pickup': fee=0; break;\n case 'local': fee=40; break;\n default: fee=80;\n}\nshow('Fee: ' + fee);",
    "practice": {
      "prompt": "Test method 'local', then an unknown method.",
      "check": "local uses 40; unknown uses 80."
    },
    "quiz": [
      {
        "question": "Which branch handles an unmatched value?",
        "options": [
          "default",
          "first",
          "all cases"
        ],
        "correctIndex": 0,
        "explanation": "default is used when no case matches."
      },
      {
        "question": "Why add break?",
        "options": [
          "Prevent unintended fall-through",
          "Stop the browser",
          "Force integer math"
        ],
        "correctIndex": 0,
        "explanation": "break exits the switch at the end of the chosen branch."
      }
    ]
  },
  {
    "id": "js-nullish-defaults",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 50,
    "level": "Beginner",
    "title": "Truthy, falsy, and nullish defaults",
    "summary": "Zero stock is a real value. It should not magically turn into ten.",
    "definition": "?? uses the right value only when the left is null or undefined; || uses the right value when the left is falsy.",
    "learn": [
      "Explain the problem this concept solves",
      "?? uses the right value only when the left is null or undefined; || uses the right value when the left is falsy.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice truthy, falsy, and nullish defaults.",
    "explanation": "Zero stock is a real value. It should not magically turn into ten.\n\n0 || 10 becomes 10, but 0 ?? 10 stays 0. Other falsy values include false, empty string, null, undefined, and NaN.\n\nTry it yourself: Set stock to undefined and compare both default operators.",
    "tip": "Ask whether zero and empty text are legitimate values.",
    "hack": "Pair optional chaining ?. with ?? for genuinely optional nested data.",
    "mistake": "Using || to default stock may replace a meaningful zero.",
    "expected": "OR: 10; Nullish: 0",
    "realUse": "Stock data and persisted settings.",
    "html": "<main><h1>Truthy, falsy, and nullish defaults</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst stock = 0;\nshow('OR: ' + (stock || 10) + '; Nullish: ' + (stock ?? 10));",
    "practice": {
      "prompt": "Set stock to undefined and compare both default operators.",
      "check": "Both expressions use 10 when stock is undefined."
    },
    "quiz": [
      {
        "question": "What is 0 ?? 10?",
        "options": [
          "0",
          "10",
          "null"
        ],
        "correctIndex": 0,
        "explanation": "?? only falls back on null or undefined."
      },
      {
        "question": "What is 0 || 10?",
        "options": [
          "0",
          "10",
          "undefined"
        ],
        "correctIndex": 1,
        "explanation": "Zero is falsy, so OR falls back."
      }
    ]
  },
  {
    "id": "js-while-loop",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Operators & Decisions",
    "order": 60,
    "level": "Beginner",
    "title": "while loops and safe stop conditions",
    "summary": "You can label packs until the packed count reaches a target.",
    "definition": "A while loop repeats while its condition remains truthy.",
    "learn": [
      "Explain the problem this concept solves",
      "A while loop repeats while its condition remains truthy.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice while loops and safe stop conditions.",
    "explanation": "You can label packs until the packed count reaches a target.\n\nA while condition is checked before each iteration. Always update state so the condition eventually becomes false; otherwise a loop can freeze a browser runner.\n\nTry it yourself: Change the target to five and predict the final count.",
    "tip": "Know the maximum safe number of iterations before running the loop.",
    "hack": "For a known counter range, a for loop may make the progression clearer.",
    "mistake": "Removing the packed update creates a potential infinite loop.",
    "expected": "Packed: 3",
    "realUse": "Batch limits and repeated validations.",
    "html": "<main><h1>while loops and safe stop conditions</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nlet packed = 0;\nwhile (packed < 3) {\n  packed += 1;\n}\nshow('Packed: ' + packed);",
    "practice": {
      "prompt": "Change the target to five and predict the final count.",
      "check": "Packed becomes 5, then the loop stops."
    },
    "quiz": [
      {
        "question": "When does while stop?",
        "options": [
          "When its condition becomes false",
          "After exactly one iteration",
          "When HTML ends"
        ],
        "correctIndex": 0,
        "explanation": "The condition is checked before each new iteration."
      },
      {
        "question": "What risks an infinite loop?",
        "options": [
          "No progress toward the stop condition",
          "A valid counter update",
          "Small target"
        ],
        "correctIndex": 0,
        "explanation": "The loop must be able to reach a false condition."
      }
    ]
  },
  {
    "id": "js-string-search-methods",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Strings & Numbers",
    "order": 10,
    "level": "Beginner",
    "title": "trim(), toLowerCase(), and includes()",
    "summary": "Customers type product names with extra spaces and mixed capitalization.",
    "definition": "String methods operate on text; trim removes surrounding whitespace and includes tests whether text contains a substring.",
    "learn": [
      "Explain the problem this concept solves",
      "String methods operate on text; trim removes surrounding whitespace and includes tests whether text contains a substring.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice trim(), tolowercase(), and includes().",
    "explanation": "Customers type product names with extra spaces and mixed capitalization.\n\nNormalize both the query and source when the intended search is case-insensitive. Strings are immutable, so the original text is not modified.\n\nTry it yourself: Replace query with fish; predict the boolean result.",
    "tip": "Decide whether search should ignore spaces and letter case.",
    "hack": "Use startsWith for prefix matching when it better fits the search UX.",
    "mistake": "Calling toLowerCase on only one side can still miss matches.",
    "expected": "true",
    "realUse": "Product searches and text filtering.",
    "html": "<main><h1>trim(), toLowerCase(), and includes()</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst product = ' Chicken Breast ';\nconst query = 'CHICKEN';\nshow(String(product.trim().toLowerCase().includes(query.toLowerCase())));",
    "practice": {
      "prompt": "Replace query with fish; predict the boolean result.",
      "check": "The result is false."
    },
    "quiz": [
      {
        "question": "What does trim remove?",
        "options": [
          "Leading/trailing whitespace",
          "All letters",
          "Every space anywhere"
        ],
        "correctIndex": 0,
        "explanation": "trim cleans whitespace at the start and end."
      },
      {
        "question": "What does includes return?",
        "options": [
          "A boolean",
          "Always an array",
          "A number index"
        ],
        "correctIndex": 0,
        "explanation": "includes checks for a substring and reports true or false."
      }
    ]
  },
  {
    "id": "js-number-input-conversion",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Strings & Numbers",
    "order": 20,
    "level": "Beginner",
    "title": "Number(), NaN, and blank input",
    "summary": "A quantity field gives text; a calculation needs a validated number.",
    "definition": "Number attempts numeric conversion; invalid number text becomes NaN.",
    "learn": [
      "Explain the problem this concept solves",
      "Number attempts numeric conversion; invalid number text becomes NaN.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice number(), nan, and blank input.",
    "explanation": "A quantity field gives text; a calculation needs a validated number.\n\nNumber('') produces 0, so blank input needs its own check. Number.isFinite helps reject NaN and Infinity, and Number.isInteger checks whole numbers.\n\nTry it yourself: Try raw = 'abc', then raw = '' and compare error handling.",
    "tip": "Validate blank, type, range, and integer rules explicitly.",
    "hack": "Use Number.isInteger after conversion when packs cannot have fractions.",
    "mistake": "parseInt('12abc') yields 12 even though the whole input is not valid.",
    "expected": "24",
    "realUse": "Receiving, quantities, and CSV imports.",
    "html": "<main><h1>Number(), NaN, and blank input</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nconst raw = '12';\nconst value = Number(raw);\nshow(raw.trim() && Number.isFinite(value) ? value * 2 : 'Invalid number');",
    "practice": {
      "prompt": "Try raw = 'abc', then raw = '' and compare error handling.",
      "check": "Both become Invalid number with the explicit blank guard."
    },
    "quiz": [
      {
        "question": "Number('abc') produces what?",
        "options": [
          "NaN",
          "0",
          "12"
        ],
        "correctIndex": 0,
        "explanation": "Invalid numeric text produces NaN."
      },
      {
        "question": "What does Number('') produce?",
        "options": [
          "NaN",
          "0",
          "undefined"
        ],
        "correctIndex": 1,
        "explanation": "A blank string converts to zero unless you check it separately."
      }
    ]
  },
  {
    "id": "js-lexical-closure",
    "categoryId": "javascript",
    "mode": "code",
    "stage": "Functions & Scope",
    "order": 10,
    "level": "Intermediate",
    "title": "Lexical scope and closures",
    "summary": "A counter should remember its own number without leaving a global variable on the page.",
    "definition": "A closure is a function that retains access to surrounding lexical bindings.",
    "learn": [
      "Explain the problem this concept solves",
      "A closure is a function that retains access to surrounding lexical bindings.",
      "Predict the result of the working code",
      "Apply a small change and verify the output"
    ],
    "objective": "Understand and practice lexical scope and closures.",
    "explanation": "A counter should remember its own number without leaving a global variable on the page.\n\nCalling a factory creates its own private count. The returned function remembers that binding after the factory call finishes.\n\nTry it yourself: Create another counter and print its first value.",
    "tip": "Use a closure for small state that should stay close to its behavior.",
    "hack": "Closures can keep helper state private to one component.",
    "mistake": "A second call to makeCounter does not automatically share the first counter's count.",
    "expected": "1, 2, 3",
    "realUse": "Counters, small UI components, and callbacks.",
    "html": "<main><h1>Lexical scope and closures</h1><pre id=\"result\" aria-live=\"polite\"></pre></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf3f8;padding:25px;color:#17344b}main{max-width:620px;margin:auto;background:white;padding:23px;border-radius:15px}pre{white-space:pre-wrap;background:#ecf3f9;border-radius:8px;padding:14px}",
    "js": "const show = value => { document.querySelector('#result').textContent = String(value); };\nfunction makeCounter(){\n  let count=0;\n  return () => ++count;\n}\nconst next=makeCounter();\nshow(next() + ', ' + next() + ', ' + next());",
    "practice": {
      "prompt": "Create another counter and print its first value.",
      "check": "The second counter starts at 1 independently."
    },
    "quiz": [
      {
        "question": "What does a closure remember?",
        "options": [
          "Lexical bindings",
          "CSS stylesheets",
          "A database"
        ],
        "correctIndex": 0,
        "explanation": "The inner function can access its enclosing lexical environment."
      },
      {
        "question": "Does a new makeCounter share the previous binding?",
        "options": [
          "Always",
          "No",
          "Only with HTML"
        ],
        "correctIndex": 1,
        "explanation": "Each invocation creates a separate count binding."
      }
    ]
  }
];
const ids=new Set(data.lessons.map(x=>x.id));for(const lesson of additions){if(!ids.has(lesson.id)){data.lessons.push(lesson);ids.add(lesson.id);}}
const cat=data.categories.find(c=>c.id==='javascript');if(cat){cat.learningPath=["Foundation","Operators & Decisions","Strings & Numbers","Functions & Scope","Arrays","Objects & Data","DOM & Forms","Asynchronous Thinking","Architecture & Quality","Projects & Practice"];cat.status='Curriculum expansion in progress';cat.description='A growing, independently written JavaScript curriculum. Beginner-to-expert coverage is a goal, not a current completion claim.';}
})();
