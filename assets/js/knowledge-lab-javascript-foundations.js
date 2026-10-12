(function(){'use strict';
const data=window.KNOWLEDGE_LAB_V2;
if(!data||!Array.isArray(data.lessons))return;
const additions=[
  {
    "id": "js-first-steps",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 1,
    "title": "What is JavaScript? Your first interaction",
    "summary": "Make a button respond to a click, and understand how HTML, CSS, and JavaScript cooperate.",
    "definition": "JavaScript is a programming language used to add behavior and application logic to web pages and many other environments.",
    "learn": [
      "Understand HTML structure, CSS presentation, and JavaScript behavior",
      "Find an element with querySelector",
      "React to a click using addEventListener",
      "Update text safely with textContent"
    ],
    "objective": "Create and explain a small working browser interaction.",
    "explanation": "HTML gives a page structure and CSS gives it style. But what makes the button do something? JavaScript connects an action to a result.\n\nThe browser creates a Document Object Model (DOM) from HTML. JavaScript can select DOM elements, listen for events, and update what users see.\n\nTry it yourself: change the success message, press Run, and click the button again.",
    "tip": "Start by building one small interaction before combining multiple features.",
    "hack": "Use console.log() to check which part of the click handler ran.",
    "mistake": "JavaScript and Java are separate programming languages, despite the similar names.",
    "expected": "Clicking the button changes the message to 'JavaScript is working!' and prints a console log.",
    "realUse": "Menus, forms, counters, shopping carts, and tabs use the same event-handling idea.",
    "html": "<main><h1>My first JavaScript</h1><p id=\"message\">Click the button.</p><button type=\"button\" id=\"go\">Try it</button></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf4fc;padding:30px;color:#142e43}main{max-width:500px;margin:auto;padding:25px;border-radius:15px;background:white}button{border:0;border-radius:8px;padding:10px 16px;background:#075a9d;color:white;font:inherit}",
    "js": "const button = document.querySelector('#go');\nconst message = document.querySelector('#message');\nbutton.addEventListener('click', () => {\n  message.textContent = 'JavaScript is working!';\n  console.log('Button clicked');\n});",
    "quiz": [
      {
        "question": "Which part makes the button respond?",
        "options": [
          "A CSS border",
          "A JavaScript event listener",
          "An HTML heading",
          "A font"
        ],
        "correctIndex": 1,
        "explanation": "The event listener runs JavaScript when a click occurs."
      },
      {
        "question": "What does the DOM represent?",
        "options": [
          "A database",
          "The browser's document structure",
          "Java source code",
          "An image file"
        ],
        "correctIndex": 1,
        "explanation": "The Document Object Model represents document elements JavaScript can inspect and update."
      }
    ]
  },
  {
    "id": "js-variables-types",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 2,
    "title": "Variables, values, and data types",
    "summary": "Understand const, let, strings, numbers, and booleans through a simple product total.",
    "definition": "Variables give values names. const declares a binding that cannot be reassigned; let declares a binding that may be reassigned.",
    "learn": [
      "Know when to choose const or let",
      "Recognize strings, numbers, and booleans",
      "Multiply a numeric price and quantity",
      "Inspect values using typeof"
    ],
    "objective": "Calculate a correct basic product total and explain its data types.",
    "explanation": "Think of the information on a price label: product name, price, quantity, and availability. These are different kinds of values. JavaScript calls them data types.\n\nA string holds text, a number supports arithmetic, and a boolean describes true or false. Prefer const unless reassignment is necessary.\n\nTry it yourself: change quantity from 2 to 3, predict the total, and press Run.",
    "tip": "For actual accounting and financial software, use appropriate integer-minor-unit or decimal arithmetic rules instead of assuming floating-point math is exact.",
    "hack": "Run typeof price and typeof product in the console to see their types.",
    "mistake": "'125' is a string, not a number; adding strings can concatenate text rather than calculate.",
    "expected": "A Liempo quantity of two at 125 each displays a total of 250.",
    "realUse": "Product catalogs, sales carts, and inventory interfaces track typed data.",
    "html": "<main><h1>Product total</h1><p id=\"description\"></p><p>Total: <strong id=\"total\"></strong></p></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf4fc;padding:30px;color:#142e43}main{max-width:500px;margin:auto;padding:25px;border-radius:15px;background:white}strong{color:#075a9d}",
    "js": "const product = 'Liempo';\nconst price = 125;\nlet quantity = 2;\nconst available = true;\nconst total = price * quantity;\ndocument.querySelector('#description').textContent = `${product} × ${quantity} | In stock: ${available}`;\ndocument.querySelector('#total').textContent = String(total);\nconsole.log(typeof product, typeof price, typeof available);",
    "quiz": [
      {
        "question": "Which declaration is appropriate for an unchanged price?",
        "options": [
          "const price = 125",
          "const price = '125' + 1",
          "let = 125 price",
          "price const 125"
        ],
        "correctIndex": 0,
        "explanation": "const describes a binding that does not need reassignment."
      },
      {
        "question": "What is typeof '125'?",
        "options": [
          "number",
          "string",
          "boolean",
          "undefined"
        ],
        "correctIndex": 1,
        "explanation": "Quotes make it a string, even though its characters look numeric."
      }
    ]
  },
  {
    "id": "js-conditions",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 3,
    "title": "Conditions: if, else, and comparisons",
    "summary": "Create a real stock-checking rule, including invalid quantities and boundary cases.",
    "definition": "An if statement runs a block when its condition is truthy. An else branch handles a different outcome.",
    "learn": [
      "Compare numbers with <= and >",
      "Write if, else if, and else",
      "Reject invalid zero or negative quantities",
      "Understand strict equality ==="
    ],
    "objective": "Make a reliable in-stock or out-of-stock decision.",
    "explanation": "A seller cannot confirm five packs when only four remain. A condition compares the available stock and the requested quantity, then picks the right response.\n\nUse === for strict equality because it does not automatically convert different types to match. Always test edge cases: zero, exactly the stock, and one more than stock.\n\nTry it yourself: change requested from 5 to 4, then 0. Predict each displayed message before pressing Run.",
    "tip": "Test on both sides of a boundary, not only with a normal input.",
    "hack": "Reject invalid inputs first, then handle the successful case.",
    "mistake": "A check for requested <= stock is insufficient without also rejecting requested <= 0.",
    "expected": "With stock 4 and requested 5, the result displays 'Not enough stock'.",
    "realUse": "Inventory validation, order limits, signup rules, and shipping eligibility.",
    "html": "<main><h1>Stock checker</h1><p id=\"result\"></p></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf4fc;color:#142e43;padding:30px}main{max-width:520px;margin:auto;padding:25px;border-radius:15px;background:white}button{border:0;border-radius:8px;padding:10px 16px;background:#075a9d;color:white;font:inherit}p{margin-top:18px}",
    "js": "const stock = 4;\nconst requested = 5;\nlet message;\nif (requested <= 0) {\n  message = 'Choose at least one item';\n} else if (requested <= stock) {\n  message = 'Available to order';\n} else {\n  message = 'Not enough stock';\n}\ndocument.querySelector('#result').textContent = message;",
    "quiz": [
      {
        "question": "Stock is 4 and requested is 4. What happens?",
        "options": [
          "Invalid quantity",
          "Available to order",
          "Not enough stock",
          "JavaScript crashes"
        ],
        "correctIndex": 1,
        "explanation": "Four is positive and it meets the <= comparison exactly."
      },
      {
        "question": "Why does === matter?",
        "options": [
          "It always changes the value",
          "It compares without coercing types",
          "It prints the result",
          "It works only on numbers"
        ],
        "correctIndex": 1,
        "explanation": "Strict equality does not coerce a string and a number into a match."
      }
    ]
  },
  {
    "id": "js-functions",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 4,
    "title": "Functions, parameters, and return",
    "summary": "Write one clear reusable calculation instead of repeating code.",
    "definition": "A function is reusable logic that can accept parameters and return a value.",
    "learn": [
      "Declare and call functions",
      "Understand parameters versus arguments",
      "Use return to hand a result back",
      "Separate business logic from DOM rendering"
    ],
    "objective": "Create a reusable total calculator for multiple products.",
    "explanation": "Imagine calculating totals for several products. Copying the same multiplication everywhere is harder to maintain. Put the rule in one well-named function instead.\n\nA parameter is the name in the function declaration. An argument is the actual value supplied when calling it. return gives the result to the caller; console.log only displays it for inspection.\n\nTry it yourself: change the second product's quantity, and then add a third call.",
    "tip": "Use names that describe what the function does, such as calculateTotal.",
    "hack": "For a short calculation, return the expression directly without an extra temporary variable.",
    "mistake": "console.log does not substitute for return when another part of the program needs the value.",
    "expected": "The page shows Liempo: 250 and Chicken: 270.",
    "realUse": "Shared cart rules, shipping estimates, discounts, and calculation helpers.",
    "html": "<main><h1>Reusable totals</h1><ul id=\"totals\"></ul></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf4fc;color:#142e43;padding:30px}main{max-width:520px;margin:auto;padding:25px;border-radius:15px;background:white}button{border:0;border-radius:8px;padding:10px 16px;background:#075a9d;color:white;font:inherit}p{margin-top:18px}",
    "js": "function calculateTotal(price, quantity) {\n  return price * quantity;\n}\nconst lines = [\n  `Liempo: ${calculateTotal(125, 2)}`,\n  `Chicken: ${calculateTotal(90, 3)}`\n];\nconst list = document.querySelector('#totals');\nfor (const line of lines) {\n  const item = document.createElement('li');\n  item.textContent = line;\n  list.append(item);\n}\nconsole.log(calculateTotal(125, 2));",
    "quiz": [
      {
        "question": "What does return do?",
        "options": [
          "It always prints the value",
          "It passes a result back to the caller",
          "It creates HTML automatically",
          "It restarts the code"
        ],
        "correctIndex": 1,
        "explanation": "The caller receives the returned value and can use it again."
      },
      {
        "question": "In calculateTotal(90, 3), what is 3?",
        "options": [
          "The parameter name",
          "An argument supplied to the function",
          "A CSS unit",
          "The function name"
        ],
        "correctIndex": 1,
        "explanation": "quantity is the parameter; 3 is the supplied argument."
      }
    ]
  },
  {
    "id": "js-loops",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 5,
    "title": "Loops: repeat safely with for...of",
    "summary": "Build a product list without copying the same code for every item.",
    "definition": "A loop repeats an operation. for...of visits the values in an iterable such as an array.",
    "learn": [
      "Iterate over an array",
      "Use document.createElement and textContent",
      "Avoid unnecessary duplicated HTML",
      "Understand why loops need clear termination"
    ],
    "objective": "Render several products from data using one reusable operation.",
    "explanation": "What if a shop has ten products? Writing the same HTML manipulation ten times would be repetitive. A loop runs the same small set of steps for each item in a list.\n\nfor...of walks through the values of an array. This example creates new li elements and writes the product names using textContent.\n\nTry it yourself: add a fourth item to products, press Run, and confirm it appears without any new rendering code.",
    "tip": "Use meaningful singular names for loop variables: product for each entry in products.",
    "hack": "For DOM lists, createElement plus textContent handles plain user-visible text without parsing it as HTML.",
    "mistake": "Do not use innerHTML with untrusted product names; it can interpret unexpected markup.",
    "expected": "The browser displays three product names as list items.",
    "realUse": "Product catalogs, orders, task lists, messages, and tables.",
    "html": "<main><h1>Products</h1><ul id=\"products\"></ul></main>",
    "css": "body{font:16px/1.5 system-ui;background:#edf4fc;color:#142e43;padding:30px}main{max-width:520px;margin:auto;padding:25px;border-radius:15px;background:white}button{border:0;border-radius:8px;padding:10px 16px;background:#075a9d;color:white;font:inherit}p{margin-top:18px}",
    "js": "const products = ['Liempo', 'Chicken', 'Fish Fillet'];\nconst list = document.querySelector('#products');\nfor (const product of products) {\n  const item = document.createElement('li');\n  item.textContent = product;\n  list.append(item);\n}\nconsole.log('Rendered', products.length, 'products');",
    "quiz": [
      {
        "question": "What does for...of iterate through in this example?",
        "options": [
          "The array values",
          "CSS selectors",
          "Database tables",
          "Java classes"
        ],
        "correctIndex": 0,
        "explanation": "for...of visits each product string in the array."
      },
      {
        "question": "Why is textContent appropriate?",
        "options": [
          "It parses HTML from strings",
          "It writes plain text without interpreting markup",
          "It sends requests to a server",
          "It changes CSS files"
        ],
        "correctIndex": 1,
        "explanation": "textContent writes text safely and clearly when HTML parsing is unnecessary."
      }
    ]
  }
];
const existing=new Set(data.lessons.map(lesson=>lesson.id));
for(const lesson of additions){if(!existing.has(lesson.id))data.lessons.push(lesson);}
})();
