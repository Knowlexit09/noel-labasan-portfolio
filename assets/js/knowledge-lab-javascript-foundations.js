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
  }
];
const existing=new Set(data.lessons.map(lesson=>lesson.id));
for(const lesson of additions){if(!existing.has(lesson.id))data.lessons.push(lesson);}
})();
