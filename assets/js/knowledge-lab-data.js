(function(){'use strict';window.KNOWLEDGE_LAB_V2={
  "version": "2026-10-12-v4",
  "categories": [
    {
      "id": "html",
      "label": "HTML",
      "group": "Code & Development",
      "icon": "<>",
      "status": "Live runner",
      "description": "Semantic structure, forms, accessibility, and practical page patterns."
    },
    {
      "id": "css",
      "label": "CSS",
      "group": "Code & Development",
      "icon": "#",
      "status": "Foundation → Expert practice",
      "description": "A complete CSS path from “What is CSS?” to responsive systems, modern selectors, container queries, animation, architecture, debugging, and expert practice.",
      "learningPath": [
        "Foundation",
        "Core Styling",
        "Box Model & Sizing",
        "Selectors & Cascade",
        "Layout",
        "Responsive Design",
        "Modern CSS",
        "Animation & Interaction",
        "Architecture & Debugging",
        "Expert Practice"
      ]
    },
    {
      "id": "javascript",
      "label": "JavaScript",
      "group": "Code & Development",
      "icon": "JS",
      "status": "Live runner",
      "description": "DOM behavior, events, arrays, state, debugging, and browser patterns."
    },
    {
      "id": "java",
      "label": "Java",
      "group": "Code & Development",
      "icon": "J",
      "status": "Learning path + CI tested",
      "description": "From fundamentals to OOP, clean code, Big O, collections, and practical Java—explained simply and verified in CI.",
      "learningPath": [
        "Foundation",
        "OOP Foundations",
        "Problem Solving",
        "Applied Java"
      ]
    },
    {
      "id": "git",
      "label": "Git & GitHub",
      "group": "Code & Development",
      "icon": "G",
      "status": "Next",
      "description": "Safe commits, branches, diffs, pull requests, and recovery workflows."
    },
    {
      "id": "apps-script",
      "label": "Google Apps Script",
      "group": "Code & Development",
      "icon": "AS",
      "status": "Next",
      "description": "Sheets automation, batch reads/writes, web apps, and performance patterns."
    },
    {
      "id": "photoshop",
      "label": "Photoshop",
      "group": "Creative & Multimedia",
      "icon": "Ps",
      "status": "Proof backed",
      "description": "Non-destructive editing, product refinement, masks, and campaign layout workflow."
    },
    {
      "id": "canva",
      "label": "Canva",
      "group": "Creative & Multimedia",
      "icon": "C",
      "status": "Proof + video",
      "description": "Brand systems, presentation structure, reusable layouts, and content consistency."
    },
    {
      "id": "capcut",
      "label": "CapCut",
      "group": "Creative & Multimedia",
      "icon": "CC",
      "status": "Proof + video",
      "description": "Vertical ad pacing, overlays, sequencing, CTA timing, and export review."
    },
    {
      "id": "blender",
      "label": "Blender",
      "group": "Creative & Multimedia",
      "icon": "3D",
      "status": "Proof required",
      "description": "3D workflow notes publish only when a real project artifact or walkthrough is attached."
    },
    {
      "id": "roblox-studio",
      "label": "Roblox Studio",
      "group": "Creative & Multimedia",
      "icon": "R",
      "status": "Proof required",
      "description": "Game-world and implementation tutorials publish only with real project evidence."
    }
  ],
  "lessons": [
    {
      "id": "html-clean-document",
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "title": "Build a clean semantic page section",
      "summary": "Use semantic HTML for a small content card, then verify the button behavior in the live browser runner.",
      "objective": "Practice meaningful elements and a simple interaction without relying on generic div-only markup.",
      "explanation": "Semantic elements describe what content means, not just how it looks. A clear heading, supporting copy, and an explicit button make the structure easier to understand and maintain.\n\nThe browser runner renders the actual HTML, CSS, and JavaScript shown in the editors.",
      "tip": "Use semantic elements when the content has a recognizable purpose. Keep class names for styling, not for replacing document meaning.",
      "hack": "Use Ctrl/⌘ + Enter to rerun the lesson after editing the code.",
      "mistake": "Do not put visible content inside <head>. Visible page content belongs inside <body>.",
      "expected": "The card appears and the button text changes to “It works ✓” when clicked.",
      "realUse": "The same pattern is useful for portfolio cards, callouts, documentation panels, and small dashboard modules.",
      "tags": [
        "html",
        "semantic",
        "button",
        "structure",
        "browser"
      ],
      "html": "<main class=\"intro-card\">\n  <p class=\"eyebrow\">KNOWLEDGE LAB</p>\n  <h1>Semantic HTML that still looks good.</h1>\n  <p>Structure first. Styling second. Behavior last.</p>\n  <button type=\"button\">Test interaction</button>\n</main>",
      "css": "body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: system-ui, sans-serif;\n  background: #eef6fb;\n}\n.intro-card {\n  width: min(440px, 88vw);\n  padding: 28px;\n  border-radius: 20px;\n  background: white;\n  box-shadow: 0 18px 45px #16324a22;\n}\n.eyebrow { color: #0879b7; font-weight: 800; font-size: 12px; letter-spacing: .08em; }\nbutton { padding: 10px 14px; border: 0; border-radius: 10px; background: #0c8bc7; color: white; font-weight: 800; }",
      "js": "const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  button.textContent = \"It works ✓\";\n});",
      "stage": "Foundation",
      "order": 10,
      "quiz": [
        {
          "question": "Where should visible page content normally go?",
          "options": [
            "Inside <head>",
            "Inside <body>",
            "Inside <title>",
            "Inside <meta>"
          ],
          "correctIndex": 1,
          "explanation": "Visible document content belongs in <body>. <head> is for metadata and linked resources."
        },
        {
          "question": "Why use semantic elements?",
          "options": [
            "They always make pages faster",
            "They describe the purpose of content",
            "They replace CSS",
            "They remove the need for JavaScript"
          ],
          "correctIndex": 1,
          "explanation": "Semantic elements communicate meaning and structure, which helps maintainability and accessibility."
        }
      ]
    },
    {
      "id": "html-accessible-form",
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "title": "Make a usable form",
      "summary": "Build a labeled input and handle submission without sending data anywhere.",
      "objective": "Practice label/input pairing, button types, and safe client-side form handling.",
      "explanation": "A usable form needs more than an input box. A label tells users and assistive technology what the field is for. A submit button gives the form one clear action.\n\nThis demo prevents the default submission and writes the entered name into the page, so no request leaves the sandbox.",
      "tip": "Connect <label for=\"name\"> to <input id=\"name\">. Clicking the label focuses the input too.",
      "hack": "Use FormData when a form has several fields so you do not manually read each field one by one.",
      "mistake": "Do not use placeholder text as the only label. Placeholders disappear while typing and are weaker for accessibility.",
      "expected": "Type a name, choose Submit, and the greeting updates below the form without a page reload.",
      "realUse": "The same pattern appears in search forms, contact forms, sign-in screens, and admin tools.",
      "tags": [
        "html",
        "form",
        "accessibility",
        "label",
        "submit"
      ],
      "html": "<form id=\"helloForm\">\n  <label for=\"name\">Your name</label>\n  <input id=\"name\" name=\"name\" autocomplete=\"name\" required>\n  <button type=\"submit\">Submit</button>\n</form>\n<p id=\"message\" role=\"status\">Waiting for a name…</p>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; background: #f6f8fb; color: #142235; }\nform { display: grid; gap: 10px; max-width: 360px; }\nlabel { font-weight: 700; }\ninput { padding: 11px 12px; border: 1px solid #b9c7d4; border-radius: 9px; }\nbutton { width: max-content; padding: 9px 13px; border: 0; border-radius: 9px; background: #0879b7; color: white; font-weight: 700; }\n#message { margin-top: 18px; color: #31526b; }",
      "js": "const form = document.querySelector(\"#helloForm\");\nconst message = document.querySelector(\"#message\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const data = new FormData(form);\n  const name = String(data.get(\"name\") || \"\").trim();\n  message.textContent = name ? `Hello, ${name}!` : \"Please enter a name.\";\n});",
      "stage": "Foundation",
      "order": 20,
      "quiz": [
        {
          "question": "What connects a label to an input?",
          "options": [
            "Matching class names",
            "The label's for value and the input's id",
            "The placeholder",
            "The input's name only"
          ],
          "correctIndex": 1,
          "explanation": "A label's for attribute should match the input's id."
        },
        {
          "question": "Why call event.preventDefault() in this demo?",
          "options": [
            "To remove the button",
            "To stop the normal page submission/reload",
            "To validate CSS",
            "To clear the input"
          ],
          "correctIndex": 1,
          "explanation": "The lesson handles the form in JavaScript, so the default submission is prevented."
        },
        {
          "question": "Is placeholder text a good replacement for a label?",
          "options": [
            "Yes, always",
            "Only on desktop",
            "No—use a real label",
            "Only for required fields"
          ],
          "correctIndex": 2,
          "explanation": "A real label stays available while the user types and is better for accessibility."
        }
      ]
    },
    {
      "id": "css-what-is-css",
      "categoryId": "css",
      "mode": "code",
      "stage": "Foundation",
      "order": 10,
      "level": "Beginner",
      "title": "What is CSS?",
      "summary": "Start with the simplest idea: HTML gives a page structure; CSS controls how that structure looks.",
      "objective": "Understand what CSS is, what it changes, and why websites normally separate structure from presentation.",
      "explanation": "Think of HTML as the skeleton of a page and CSS as the clothes, spacing, colors, and visual rules placed on that skeleton.\n\nCSS stands for Cascading Style Sheets. A CSS rule selects an element and tells the browser how that element should look. CSS can control color, size, spacing, layout, animation, and much more.",
      "tip": "Before memorizing properties, keep one mental model: select something → change how it looks.",
      "hack": "Open DevTools and temporarily change a CSS property. It is one of the fastest ways to learn what a rule actually does.",
      "mistake": "Do not confuse HTML and CSS. HTML describes content and structure; CSS styles that structure.",
      "expected": "The heading becomes blue, the paragraph becomes easier to read, and the card gets spacing and a border.",
      "realUse": "Every portfolio page, dashboard, product card, admin panel, and responsive layout uses this same idea.",
      "tags": [
        "css",
        "foundation",
        "what",
        "is",
        "css"
      ],
      "html": "<article class=\"lesson-card\"><h1>Hello CSS</h1><p>HTML gives me structure. CSS gives me style.</p></article>",
      "css": "body { font-family: system-ui, sans-serif; background: #f3f7fb; padding: 32px; }\n.lesson-card { max-width: 520px; margin: auto; padding: 24px; background: white; border: 1px solid #d6e1e9; border-radius: 16px; }\nh1 { color: #0879b7; margin-top: 0; }\np { color: #52697b; line-height: 1.6; }",
      "js": "",
      "quiz": [
        {
          "question": "What is the main job of CSS?",
          "options": [
            "Store database records",
            "Control presentation and layout",
            "Replace HTML",
            "Compile Java"
          ],
          "correctIndex": 1,
          "explanation": "CSS controls how structured content is presented."
        },
        {
          "question": "A simple CSS rule usually starts by doing what?",
          "options": [
            "Selecting what to style",
            "Creating a database",
            "Starting a server",
            "Downloading an image"
          ],
          "correctIndex": 0,
          "explanation": "CSS first selects the element or elements that a rule should affect."
        }
      ]
    },
    {
      "id": "css-rule-syntax",
      "categoryId": "css",
      "mode": "code",
      "stage": "Foundation",
      "order": 20,
      "level": "Beginner",
      "title": "Understand a CSS rule: selector, property, value",
      "summary": "Learn the three pieces you will see again and again in CSS.",
      "objective": "Read and write a basic CSS declaration without guessing what each part means.",
      "explanation": "In `h1 { color: blue; }`, `h1` is the selector, `color` is the property, and `blue` is the value.\n\nThe selector answers “what should I style?” The property answers “what visual feature should change?” The value answers “what should that feature become?”",
      "tip": "Read rules out loud: “For every h1, set color to blue.” It makes syntax easier to remember.",
      "hack": "When learning a new property, change only its value first. You will see the effect faster and isolate mistakes more easily.",
      "mistake": "Do not forget the colon between property and value. Semicolons are also a good habit, especially when there are multiple declarations.",
      "expected": "The title uses the selected font size and color; the paragraph uses its own color and line height.",
      "realUse": "Reading selectors, properties, and values confidently is the foundation for debugging every CSS file.",
      "tags": [
        "css",
        "foundation",
        "understand",
        "a",
        "css",
        "rule",
        "selector"
      ],
      "html": "<main><h1>CSS rule anatomy</h1><p>A rule is easier when you know what each piece means.</p></main>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; }\nh1 { color: #7b3ff2; font-size: 36px; }\np { color: #52697b; line-height: 1.7; }",
      "js": "",
      "quiz": [
        {
          "question": "In `p { color: red; }`, what is `p`?",
          "options": [
            "Property",
            "Selector",
            "Value",
            "Declaration block"
          ],
          "correctIndex": 1,
          "explanation": "`p` selects paragraph elements."
        },
        {
          "question": "In the same rule, what is `red`?",
          "options": [
            "Selector",
            "Property",
            "Value",
            "Pseudo-class"
          ],
          "correctIndex": 2,
          "explanation": "`red` is the value assigned to the color property."
        }
      ]
    },
    {
      "id": "css-ways-to-add-css",
      "categoryId": "css",
      "mode": "code",
      "stage": "Foundation",
      "order": 30,
      "level": "Beginner",
      "title": "Inline, internal, and external CSS",
      "summary": "See the three common ways CSS reaches a page, and learn which one scales best for real projects.",
      "objective": "Know when inline, internal, and external CSS are appropriate.",
      "explanation": "Inline CSS lives directly in an element's `style` attribute. Internal CSS lives inside a `<style>` block. External CSS lives in its own `.css` file and is linked to the page.\n\nFor real multi-page projects, external CSS is usually the cleanest default because the same stylesheet can be reused and maintained in one place.",
      "tip": "Use external stylesheets for most real projects. Keep inline styles for very small, intentional exceptions.",
      "hack": "When debugging, temporarily using DevTools is better than filling production HTML with one-off inline styles.",
      "mistake": "Do not use `!important` or inline styles as your first answer to every conflict. Fix the underlying cascade when possible.",
      "expected": "The example is styled by the CSS editor just like an external stylesheet would style HTML.",
      "realUse": "Separating HTML and CSS makes larger sites easier to maintain, cache, review, and reuse.",
      "tags": [
        "css",
        "foundation",
        "inline",
        "internal",
        "and",
        "external",
        "css"
      ],
      "html": "<section class=\"method-demo\"><h2>Separate structure and style</h2><p>This HTML stays readable while CSS handles presentation.</p></section>",
      "css": ".method-demo { max-width: 560px; margin: 40px auto; padding: 24px; border-left: 5px solid #0c8bc7; background: #eef8fd; font-family: system-ui, sans-serif; }\n.method-demo h2 { margin-top: 0; }",
      "js": "",
      "quiz": [
        {
          "question": "Which approach is usually best for a reusable multi-page site?",
          "options": [
            "External stylesheet",
            "Inline style on every element",
            "Only browser defaults",
            "Java code"
          ],
          "correctIndex": 0,
          "explanation": "External stylesheets keep reusable visual rules separate from page markup."
        },
        {
          "question": "Where does inline CSS live?",
          "options": [
            "In a .java file",
            "Inside an element's style attribute",
            "Only in DevTools",
            "Inside a database"
          ],
          "correctIndex": 1,
          "explanation": "Inline CSS is written directly on an HTML element through its style attribute."
        }
      ]
    },
    {
      "id": "css-colors-backgrounds",
      "categoryId": "css",
      "mode": "code",
      "stage": "Foundation",
      "order": 40,
      "level": "Beginner",
      "title": "Colors, backgrounds, and contrast",
      "summary": "Learn how foreground and background choices work together.",
      "objective": "Style text and surfaces while keeping contrast and readability in mind.",
      "explanation": "`color` changes text color. `background` or `background-color` changes the surface behind content. CSS supports named colors, hex, rgb(), hsl(), and newer color functions.\n\nA design is not successful just because the colors look nice. Text still needs enough contrast to be readable.",
      "tip": "Pick the background first, then test the text color against it. Contrast is part of usability, not decoration.",
      "hack": "Use CSS custom properties later in the course to avoid repeating the same brand colors everywhere.",
      "mistake": "Do not place light gray text on a white background just because it looks minimal. Low contrast can make content hard to read.",
      "expected": "The panel shows a dark background with high-contrast text and a bright accent.",
      "realUse": "Color systems are used in brands, dashboards, states, alerts, buttons, cards, and themes.",
      "tags": [
        "css",
        "foundation",
        "colors",
        "backgrounds",
        "and",
        "contrast"
      ],
      "html": "<section class=\"color-panel\"><span>STATUS</span><h2>Readable color system</h2><p>Contrast matters as much as the palette.</p></section>",
      "css": ".color-panel { max-width: 560px; margin: 40px auto; padding: 28px; background: #0c1d2c; color: #eef7fd; border-radius: 18px; font-family: system-ui, sans-serif; }\n.color-panel span { color: #58d5ff; font-weight: 900; letter-spacing: .08em; }\n.color-panel p { color: #b7c9d6; }",
      "js": "",
      "quiz": [
        {
          "question": "Which property normally changes text color?",
          "options": [
            "background",
            "color",
            "display",
            "gap"
          ],
          "correctIndex": 1,
          "explanation": "The `color` property sets the foreground text color."
        },
        {
          "question": "What should you check when choosing text and background colors?",
          "options": [
            "Only file size",
            "Contrast and readability",
            "Java version",
            "Grid columns only"
          ],
          "correctIndex": 1,
          "explanation": "Readable contrast is a key accessibility and usability requirement."
        }
      ],
      "shortcut": {
        "label": "⚡ SHORTHAND — background",
        "longLabel": "Separate background properties",
        "longCode": "background-color: #0c1d2c;\nbackground-image: linear-gradient(...);\nbackground-repeat: no-repeat;",
        "shortLabel": "Shorthand",
        "shortCode": "background: #0c1d2c linear-gradient(...) no-repeat;",
        "note": "The `background` shorthand can combine several background settings.",
        "caution": "Use the long form when you want clarity or need to avoid accidentally resetting another background sub-property."
      }
    },
    {
      "id": "css-units-sizing",
      "categoryId": "css",
      "mode": "code",
      "stage": "Foundation",
      "order": 50,
      "level": "Beginner",
      "title": "px, %, em, rem, vw, vh, and modern sizing",
      "summary": "Learn what CSS units mean instead of choosing numbers randomly.",
      "objective": "Choose units based on what the size should respond to.",
      "explanation": "`px` is a fixed CSS pixel unit. `%` depends on another size, often a parent. `rem` is based on the root font size. `em` depends on the current element's font context. `vw` and `vh` relate to viewport dimensions.\n\nThere is no single best unit. The right unit depends on what should stay fixed and what should scale.",
      "tip": "Use `rem` for many text/spacing systems, `%` for relative widths, and `min()/max()/clamp()` when you want controlled fluid sizing.",
      "hack": "If you find yourself writing many media queries only to change one size, a fluid function like `clamp()` may be simpler.",
      "mistake": "Do not use `100vw` for every full-width element. Scrollbars can make it slightly wider than the visible content area.",
      "expected": "The demo card uses a percentage-like responsive width capped by a maximum width.",
      "realUse": "Responsive interfaces mix units deliberately so components scale without becoming unreadable.",
      "tags": [
        "css",
        "foundation",
        "px",
        "em",
        "rem",
        "vw",
        "vh"
      ],
      "html": "<div class=\"sizing-demo\"><h2>Flexible, but controlled</h2><p>This card grows with the page but stops at a readable width.</p></div>",
      "css": "body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; }\n.sizing-demo { width: min(90%, 640px); margin: 40px auto; padding: 2rem; background: #f2f8fc; border-radius: 1rem; }\nh2 { font-size: 2rem; }",
      "js": "",
      "quiz": [
        {
          "question": "What is `rem` based on?",
          "options": [
            "The root font size",
            "Only viewport height",
            "The current image size",
            "The database"
          ],
          "correctIndex": 0,
          "explanation": "`rem` uses the root element's font size as its reference."
        },
        {
          "question": "Why is `width: min(90%, 640px)` useful?",
          "options": [
            "It is always exactly 640px",
            "It can stay fluid but stop growing past 640px",
            "It disables responsive design",
            "It forces overflow"
          ],
          "correctIndex": 1,
          "explanation": "`min()` chooses the smaller result, so the element can shrink while keeping a maximum practical width."
        }
      ]
    },
    {
      "id": "css-typography",
      "categoryId": "css",
      "mode": "code",
      "stage": "Core Styling",
      "order": 10,
      "level": "Beginner",
      "title": "Typography: font, size, line-height, and readable text",
      "summary": "Make text easier to scan instead of only making it bigger.",
      "objective": "Understand the CSS properties that shape readable typography.",
      "explanation": "Typography includes font family, size, weight, line height, letter spacing, and spacing around text. Good typography creates hierarchy: users can quickly see what is a title, supporting text, and detail.\n\nFor body text, line height often matters more than beginners expect. Text that is too cramped is tiring to read.",
      "tip": "Start with hierarchy: heading, body, small text. Do not try to use six font sizes before the content structure is clear.",
      "hack": "Use `font: inherit` on controls when you want buttons and form elements to match the page typography.",
      "mistake": "Do not use very small text to make a layout fit. Fix the layout instead.",
      "expected": "The heading, paragraph, and small label have clear visual hierarchy and comfortable spacing.",
      "realUse": "Typography affects every card, form, dashboard, article, and marketing page.",
      "tags": [
        "css",
        "core styling",
        "typography",
        "font",
        "size",
        "line",
        "height"
      ],
      "html": "<article class=\"type-demo\"><span>FOUNDATION</span><h1>Readable typography is a system</h1><p>Good type helps people scan content before they read every word.</p><small>Small text should still be legible.</small></article>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; color: #1b3347; }\n.type-demo { max-width: 650px; margin: auto; }\n.type-demo span { font-size: .75rem; font-weight: 800; letter-spacing: .1em; color: #0879b7; }\nh1 { font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.02; letter-spacing: -.04em; }\np { font-size: 1.05rem; line-height: 1.7; color: #546b7c; }\nsmall { color: #708294; }",
      "js": "",
      "quiz": [
        {
          "question": "Which property controls space between lines of text?",
          "options": [
            "line-height",
            "display",
            "position",
            "overflow"
          ],
          "correctIndex": 0,
          "explanation": "`line-height` controls the vertical spacing between lines."
        },
        {
          "question": "What is a useful first typography goal?",
          "options": [
            "Use many random sizes",
            "Create clear visual hierarchy",
            "Make every word bold",
            "Remove line spacing"
          ],
          "correctIndex": 1,
          "explanation": "A small, consistent hierarchy makes content easier to scan."
        }
      ]
    },
    {
      "id": "css-borders-radius-shadows",
      "categoryId": "css",
      "mode": "code",
      "stage": "Core Styling",
      "order": 20,
      "level": "Beginner",
      "title": "Borders, radius, and shadows",
      "summary": "Learn how to separate surfaces without turning every element into a heavy box.",
      "objective": "Use borders, border-radius, and box-shadow with restraint.",
      "explanation": "Borders create visible edges. `border-radius` rounds corners. `box-shadow` creates depth or separation.\n\nThese properties are easy to overuse. A subtle border or shadow often works better than a dramatic effect on every card.",
      "tip": "Pick one primary separation method per component: spacing, border, background difference, or shadow. You usually do not need all four at maximum strength.",
      "hack": "Use a very light shadow for elevated UI, then rely on borders for dense admin/table interfaces where clarity matters more than decoration.",
      "mistake": "Do not stack large dark shadows on every element. It makes interfaces noisy and can reduce visual hierarchy.",
      "expected": "The card has a light border, soft radius, and subtle shadow.",
      "realUse": "Useful for cards, modals, dropdowns, panels, thumbnails, and floating controls.",
      "tags": [
        "css",
        "core styling",
        "borders",
        "radius",
        "and",
        "shadows"
      ],
      "html": "<article class=\"surface-card\"><h2>Clean surface</h2><p>Small effects can create enough separation.</p></article>",
      "css": "body { background: #edf3f7; padding: 40px; font-family: system-ui, sans-serif; }\n.surface-card { max-width: 520px; margin: auto; padding: 24px; background: white; border: 1px solid #d4e0e8; border-radius: 18px; box-shadow: 0 14px 32px #17344d12; }",
      "js": "",
      "quiz": [
        {
          "question": "What does `border-radius` change?",
          "options": [
            "Corner shape",
            "Font family",
            "Database index",
            "HTML semantics"
          ],
          "correctIndex": 0,
          "explanation": "`border-radius` rounds corners."
        },
        {
          "question": "Why should shadows usually be subtle in UI?",
          "options": [
            "Browsers cannot render strong shadows",
            "Too many strong effects create visual noise",
            "Shadows disable Grid",
            "They change HTML"
          ],
          "correctIndex": 1,
          "explanation": "Subtle separation helps hierarchy without making every element compete for attention."
        }
      ]
    },
    {
      "id": "css-display-visibility",
      "categoryId": "css",
      "mode": "code",
      "stage": "Core Styling",
      "order": 30,
      "level": "Beginner",
      "title": "Display, visibility, and normal document flow",
      "summary": "Understand why elements stack, sit inline, or disappear.",
      "objective": "Learn the practical difference between block, inline, inline-block, and hidden states.",
      "explanation": "Block elements normally start on a new line and can take available width. Inline elements flow with text. Inline-block keeps inline flow while allowing width/height more naturally.\n\n`display: none` removes an element from layout. `visibility: hidden` hides it but keeps its layout space.",
      "tip": "Before reaching for absolute positioning, understand normal flow and display. Many layout problems disappear once the correct display mode is used.",
      "hack": "Use `hidden` in HTML or `display: none` for UI states that should not occupy layout space.",
      "mistake": "Do not use `visibility: hidden` when you expect surrounding content to move into the hidden element's space.",
      "expected": "The badges sit inline while the block sections stay stacked.",
      "realUse": "Useful for menus, dialogs, badges, tabs, conditional UI, and understanding why elements do or do not occupy layout space.",
      "tags": [
        "css",
        "core styling",
        "display",
        "visibility",
        "and",
        "normal",
        "document"
      ],
      "html": "<div class=\"demo\"><span class=\"badge\">One</span><span class=\"badge\">Two</span><section>Block section A</section><section>Block section B</section></div>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; }\n.badge { display: inline-block; margin-right: 6px; padding: 6px 9px; background: #e7f5fc; border-radius: 999px; }\nsection { margin-top: 12px; padding: 14px; background: #f1f4f7; }",
      "js": "",
      "quiz": [
        {
          "question": "What does `display: none` do?",
          "options": [
            "Hides the element but keeps its space",
            "Removes the element from layout",
            "Only changes color",
            "Turns it into Grid"
          ],
          "correctIndex": 1,
          "explanation": "`display: none` removes the element from the layout flow."
        },
        {
          "question": "Which display value behaves inline but can accept box dimensions more naturally?",
          "options": [
            "inline-block",
            "none",
            "contents only",
            "sticky"
          ],
          "correctIndex": 0,
          "explanation": "`inline-block` keeps inline placement while behaving more like a box."
        }
      ]
    },
    {
      "id": "css-box-model",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 10,
      "level": "Beginner",
      "title": "The box model: content, padding, border, margin",
      "summary": "Understand the invisible boxes that explain most spacing problems.",
      "objective": "Identify where content, padding, border, and margin live around an element.",
      "explanation": "Every normal element is a box. From inside to outside: content → padding → border → margin.\n\nPadding creates space inside the element around its content. Margin creates space outside the element between neighboring boxes.",
      "tip": "Use DevTools' box-model diagram when spacing feels mysterious. It shows exactly where the space comes from.",
      "hack": "Instead of adding random margins everywhere, first decide whether the space belongs inside the component (padding) or between components (margin/gap).",
      "mistake": "Do not use margin when you really need internal breathing room. It can make component spacing harder to reason about.",
      "expected": "The card has visible padding inside and margin outside.",
      "realUse": "Used constantly for cards, forms, buttons, panels, table cells, and spacing systems.",
      "tags": [
        "css",
        "box model & sizing",
        "the",
        "box",
        "model",
        "content",
        "padding"
      ],
      "html": "<div class=\"box-demo\">Content area</div>",
      "css": "body { font-family: system-ui, sans-serif; background: #eef4f8; padding: 40px; }\n.box-demo { max-width: 420px; margin: 30px auto; padding: 24px; border: 4px solid #0c8bc7; background: white; }",
      "js": "",
      "quiz": [
        {
          "question": "Which space is inside the border?",
          "options": [
            "Margin",
            "Padding",
            "Gap between pages",
            "z-index"
          ],
          "correctIndex": 1,
          "explanation": "Padding sits between content and border."
        },
        {
          "question": "Which space separates an element from neighboring boxes?",
          "options": [
            "Margin",
            "Padding",
            "Font weight",
            "Outline only"
          ],
          "correctIndex": 0,
          "explanation": "Margin is outside the border and is commonly used for external spacing."
        }
      ],
      "shortcut": {
        "label": "⚡ SHORTHAND — margin and padding",
        "longLabel": "Long form",
        "longCode": "margin-top: 12px;\nmargin-right: 20px;\nmargin-bottom: 12px;\nmargin-left: 20px;",
        "shortLabel": "Short form",
        "shortCode": "margin: 12px 20px;",
        "note": "Two values mean vertical first, horizontal second.",
        "caution": "Shorthand is great when the pattern is obvious. Use individual sides when only one side should change."
      }
    },
    {
      "id": "css-box-sizing-overflow",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 20,
      "level": "Beginner",
      "title": "box-sizing and overflow",
      "summary": "Stop being surprised when width plus padding makes an element bigger than expected.",
      "objective": "Use `box-sizing: border-box` and understand how overflow behaves.",
      "explanation": "With the default `content-box`, declared width applies to the content area, then padding and border are added. With `border-box`, width includes content, padding, and border.\n\nOverflow happens when content does not fit inside its box. You can allow, hide, clip, or scroll that overflow depending on the component.",
      "tip": "A common project reset is `*, *::before, *::after { box-sizing: border-box; }` because it makes sizing easier to reason about.",
      "hack": "For long code blocks or tables, horizontal scrolling is often safer than clipping information.",
      "mistake": "Do not hide overflow just to make a layout look fixed if users still need the hidden content.",
      "expected": "The fixed-width card stays within its declared width even with padding and border.",
      "realUse": "Essential for predictable component sizing, code blocks, tables, media, and narrow mobile layouts.",
      "tags": [
        "css",
        "box model & sizing",
        "box",
        "sizing",
        "and",
        "overflow"
      ],
      "html": "<div class=\"box\">This box is 320px wide including its padding and border.</div>",
      "css": "*, *::before, *::after { box-sizing: border-box; }\nbody { font-family: system-ui, sans-serif; padding: 32px; }\n.box { width: 320px; max-width: 100%; padding: 28px; border: 6px solid #7b3ff2; background: #f6f2ff; overflow-wrap: anywhere; }",
      "js": "",
      "quiz": [
        {
          "question": "With `border-box`, what does declared width include?",
          "options": [
            "Only content",
            "Content + padding + border",
            "Margin only",
            "Font size"
          ],
          "correctIndex": 1,
          "explanation": "`border-box` includes padding and border inside the declared size."
        },
        {
          "question": "What is a useful choice for wide code that must remain accessible?",
          "options": [
            "overflow-x: auto",
            "overflow: hidden always",
            "width: 5000px",
            "display: none"
          ],
          "correctIndex": 0,
          "explanation": "Horizontal scrolling preserves the content without forcing the entire page wider."
        }
      ]
    },
    {
      "id": "css-selectors-combinators",
      "categoryId": "css",
      "mode": "code",
      "stage": "Selectors & Cascade",
      "order": 10,
      "level": "Intermediate",
      "title": "Selectors and combinators",
      "summary": "Target elements precisely without making selectors unnecessarily fragile.",
      "objective": "Use type, class, attribute, descendant, child, and sibling selectors.",
      "explanation": "Selectors can target by element (`p`), class (`.card`), attribute (`[data-state=\"open\"]`), or relationships between elements.\n\nA space means “descendant.” `>` means “direct child.” `+` means “next sibling.” `~` means “later sibling.”",
      "tip": "Prefer reusable classes for component styling. Use structural combinators when the relationship itself is meaningful.",
      "hack": "Attribute selectors are useful for UI state such as `[aria-expanded=\"true\"]` or `[data-state=\"open\"]`.",
      "mistake": "Do not build extremely long selectors tied to the exact HTML nesting. A small markup change can break them.",
      "expected": "Only direct list items receive the highlighted style while nested text keeps its own styling.",
      "realUse": "Useful for reusable components, navigation, stateful controls, forms, and structured content.",
      "tags": [
        "css",
        "selectors & cascade",
        "selectors",
        "and",
        "combinators"
      ],
      "html": "<nav class=\"menu\"><a href=\"#\">Home</a><a class=\"active\" href=\"#\">Learn</a><div><a href=\"#\">Nested link</a></div></nav>",
      "css": ".menu { display: grid; gap: 8px; max-width: 280px; font-family: system-ui, sans-serif; }\n.menu > a { padding: 10px 12px; border-radius: 9px; background: #eef4f8; color: #23465d; text-decoration: none; }\n.menu > a.active { background: #0c8bc7; color: white; }\n.menu div a { color: #6a7580; }",
      "js": "",
      "quiz": [
        {
          "question": "What does `.menu > a` select?",
          "options": [
            "Every link anywhere on the page",
            "Only direct a children of .menu",
            "Only visited links",
            "All descendants except links"
          ],
          "correctIndex": 1,
          "explanation": "`>` is the direct-child combinator."
        },
        {
          "question": "Which selector can target an element by a data attribute?",
          "options": [
            "[data-state=\"open\"]",
            "# only",
            "::before only",
            "@media"
          ],
          "correctIndex": 0,
          "explanation": "Attribute selectors match elements based on attribute presence or value."
        }
      ]
    },
    {
      "id": "css-pseudo-classes-elements",
      "categoryId": "css",
      "mode": "code",
      "stage": "Selectors & Cascade",
      "order": 20,
      "level": "Intermediate",
      "title": "Pseudo-classes and pseudo-elements",
      "summary": "Style states like hover/focus and generated pieces like ::before.",
      "objective": "Know the difference between `:hover`/`:focus-visible` and `::before`/`::after`.",
      "explanation": "Pseudo-classes describe a state or relationship, such as `:hover`, `:focus-visible`, `:checked`, or `:first-child`. Pseudo-elements style a part or generated piece, such as `::before` and `::after`.\n\nInteractive states should not depend only on hover, because keyboard and touch users may never trigger hover.",
      "tip": "Pair hover styling with visible keyboard focus styling for interactive controls.",
      "hack": "`::before` and `::after` are useful for decorative accents that do not need to exist as real document content.",
      "mistake": "Do not hide focus outlines without providing a clear replacement. Keyboard users need to know where focus is.",
      "expected": "The button changes on hover and gets a strong focus-visible ring for keyboard navigation.",
      "realUse": "Used for hover/focus states, selected controls, decorative accents, and accessible interaction feedback.",
      "tags": [
        "css",
        "selectors & cascade",
        "pseudo",
        "classes",
        "and",
        "pseudo",
        "elements"
      ],
      "html": "<button class=\"action\">Try me</button>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; }\n.action { position: relative; border: 0; border-radius: 10px; padding: 12px 18px; background: #0d2235; color: white; font-weight: 800; }\n.action:hover { background: #0c8bc7; }\n.action:focus-visible { outline: 3px solid #62d8ff; outline-offset: 3px; }\n.action::after { content: \" →\"; }",
      "js": "",
      "quiz": [
        {
          "question": "Which is a pseudo-class?",
          "options": [
            "::before",
            ":focus-visible",
            "@keyframes",
            "--brand"
          ],
          "correctIndex": 1,
          "explanation": "`:focus-visible` represents a focus state."
        },
        {
          "question": "What is a good accessibility practice for buttons?",
          "options": [
            "Remove all focus indicators",
            "Provide a visible focus state",
            "Use hover only",
            "Make text transparent"
          ],
          "correctIndex": 1,
          "explanation": "Keyboard users need a visible focus indicator."
        }
      ]
    },
    {
      "id": "css-cascade-specificity-inheritance",
      "categoryId": "css",
      "mode": "code",
      "stage": "Selectors & Cascade",
      "order": 30,
      "level": "Intermediate",
      "title": "Cascade, specificity, and inheritance without panic",
      "summary": "Understand why one rule wins over another instead of reaching for !important.",
      "objective": "Reason about CSS conflicts using origin/order, specificity, and inheritance.",
      "explanation": "The cascade decides which declaration wins when more than one rule targets the same property. Specificity is one part of that decision. Source order matters when competing rules have comparable weight.\n\nInheritance is different: some properties, especially text-related properties like `color`, naturally pass from parent to child unless overridden.",
      "tip": "Debug conflicts in DevTools. The crossed-out declaration usually tells you what lost and what rule won.",
      "hack": "Keep selectors reasonably low-specificity so components are easy to override intentionally.",
      "mistake": "Do not keep adding IDs and `!important` to win a styling fight. That creates a harder fight later.",
      "expected": "The highlighted paragraph uses the more specific class rule, while other text inherits the section color.",
      "realUse": "Essential when debugging real applications where multiple stylesheets and component rules overlap.",
      "tags": [
        "css",
        "selectors & cascade",
        "cascade",
        "specificity",
        "and",
        "inheritance",
        "without"
      ],
      "html": "<section class=\"theme\"><p>Inherited color</p><p class=\"highlight\">More specific rule</p></section>",
      "css": "section { color: #42596b; font-family: system-ui, sans-serif; padding: 24px; }\np { color: #61788a; }\n.theme .highlight { color: #d23f63; font-weight: 800; }",
      "js": "",
      "quiz": [
        {
          "question": "If two similar-strength rules target the same property, what can decide the winner?",
          "options": [
            "Source order",
            "Random choice",
            "Java version",
            "Image size"
          ],
          "correctIndex": 0,
          "explanation": "When other cascade factors tie, later source order can win."
        },
        {
          "question": "Which property often inherits naturally?",
          "options": [
            "color",
            "margin",
            "border-radius",
            "width"
          ],
          "correctIndex": 0,
          "explanation": "Text color commonly inherits from a parent."
        }
      ]
    },
    {
      "id": "css-flexbox-basics",
      "categoryId": "css",
      "mode": "code",
      "stage": "Layout",
      "order": 10,
      "level": "Intermediate",
      "title": "Flexbox: one-dimensional layout made simple",
      "summary": "Arrange items in a row or column and control alignment without margin tricks.",
      "objective": "Use flex container, main axis, cross axis, gap, grow, shrink, and basis.",
      "explanation": "Flexbox is ideal when you mainly care about one direction at a time: row or column. `display: flex` creates a flex container. `justify-content` works along the main axis; `align-items` works across it.\n\n`gap` is usually cleaner than adding margins between every child.",
      "tip": "Use Flexbox for nav bars, button groups, toolbars, centered panels, and flexible card rows.",
      "hack": "`flex: 1 1 220px` is a useful pattern when cards may grow, shrink, and wrap from a practical starting size.",
      "mistake": "Do not memorize `justify-content` as “horizontal.” If `flex-direction` changes to column, the main axis changes too.",
      "expected": "The cards wrap naturally and share available space.",
      "realUse": "Useful for navigation bars, toolbars, button groups, aligned form rows, card rows, and centering.",
      "tags": [
        "css",
        "layout",
        "flexbox",
        "one",
        "dimensional",
        "layout",
        "made"
      ],
      "html": "<section class=\"flex-demo\"><article>A</article><article>B</article><article>C</article></section>",
      "css": "body { padding: 24px; font-family: system-ui, sans-serif; }\n.flex-demo { display: flex; flex-wrap: wrap; gap: 14px; }\n.flex-demo article { flex: 1 1 180px; padding: 28px; border-radius: 14px; background: #eaf7ff; border: 1px solid #bfe7f8; text-align: center; font-weight: 900; }",
      "js": "",
      "quiz": [
        {
          "question": "Flexbox is especially useful for what kind of layout?",
          "options": [
            "One main dimension at a time",
            "Only database tables",
            "Only images",
            "Only printing"
          ],
          "correctIndex": 0,
          "explanation": "Flexbox is designed around a main axis and a cross axis."
        },
        {
          "question": "What does `gap` do in a flex container?",
          "options": [
            "Creates spacing between flex items",
            "Changes font weight",
            "Creates a database",
            "Sets z-index"
          ],
          "correctIndex": 0,
          "explanation": "`gap` creates consistent spacing between flex/grid items."
        }
      ],
      "shortcut": {
        "label": "⚡ SHORTHAND — flex",
        "longLabel": "Long form",
        "longCode": "flex-grow: 1;\nflex-shrink: 1;\nflex-basis: 220px;",
        "shortLabel": "Short form",
        "shortCode": "flex: 1 1 220px;",
        "note": "`flex` combines grow, shrink, and basis.",
        "caution": "Use explicit long form when teammates need to understand one behavior independently."
      }
    },
    {
      "id": "css-grid-basics",
      "categoryId": "css",
      "mode": "code",
      "stage": "Layout",
      "order": 20,
      "level": "Intermediate",
      "title": "CSS Grid: two-dimensional layout",
      "summary": "Control rows and columns together without pretending everything is a Flexbox problem.",
      "objective": "Create a grid, define tracks, use gap, and place content across rows/columns.",
      "explanation": "Grid is strong when both columns and rows matter. `grid-template-columns` defines column tracks. Functions such as `repeat()`, `minmax()`, and `fr` make layouts flexible.\n\nFlexbox and Grid are partners, not competitors. Use the tool that matches the layout problem.",
      "tip": "Use Grid for dashboards, galleries, card collections, page shells, and layouts where columns should line up across rows.",
      "hack": "Start with the simplest template that works. You can make tracks more fluid later with `minmax()`.",
      "mistake": "Do not create a 12-column grid just because frameworks do. If your layout only needs three meaningful columns, define those.",
      "expected": "The demo creates three flexible columns that collapse naturally if the available width becomes smaller.",
      "realUse": "Useful for dashboards, galleries, card collections, page shells, and aligned two-dimensional layouts.",
      "tags": [
        "css",
        "layout",
        "css",
        "grid",
        "two",
        "dimensional",
        "layout"
      ],
      "html": "<section class=\"grid-demo\"><article>1</article><article>2</article><article>3</article><article>4</article><article>5</article><article>6</article></section>",
      "css": "body { padding: 24px; font-family: system-ui, sans-serif; }\n.grid-demo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n.grid-demo article { padding: 24px; background: #f1f3ff; border: 1px solid #d7dafa; border-radius: 12px; text-align: center; }\n@media (max-width: 600px) { .grid-demo { grid-template-columns: 1fr; } }",
      "js": "",
      "quiz": [
        {
          "question": "What does `1fr` mean in Grid?",
          "options": [
            "One flexible fraction of available space",
            "One fixed pixel",
            "One font rule",
            "One row only"
          ],
          "correctIndex": 0,
          "explanation": "`fr` distributes available grid space in flexible fractions."
        },
        {
          "question": "When is Grid often a better fit than Flexbox?",
          "options": [
            "When rows and columns both matter",
            "When no layout is needed",
            "Only for buttons",
            "Only for text color"
          ],
          "correctIndex": 0,
          "explanation": "Grid is designed for two-dimensional track layouts."
        }
      ]
    },
    {
      "id": "css-position-zindex",
      "categoryId": "css",
      "mode": "code",
      "stage": "Layout",
      "order": 30,
      "level": "Intermediate",
      "title": "Positioning, sticky UI, and z-index",
      "summary": "Learn when elements should stay in flow and when they need special positioning.",
      "objective": "Use relative, absolute, fixed, sticky, inset properties, and stacking order responsibly.",
      "explanation": "`position: relative` keeps an element in normal flow while creating a positioning context. `absolute` removes an element from normal flow and positions it against a containing block. `fixed` anchors to the viewport. `sticky` behaves normally until a scroll threshold is reached.\n\n`z-index` only helps inside stacking rules; a huge number does not magically escape every stacking context.",
      "tip": "Use absolute positioning for overlays/badges, not for basic page layout.",
      "hack": "`inset` can replace top/right/bottom/left when you want to set multiple offsets together.",
      "mistake": "Do not build a whole responsive page with absolute coordinates. It will usually break when content changes.",
      "expected": "The badge is absolutely positioned inside a relatively positioned card.",
      "realUse": "Useful for badges, sticky headers, menus, overlays, modals, floating controls, and layered UI.",
      "tags": [
        "css",
        "layout",
        "positioning",
        "sticky",
        "ui",
        "and",
        "z"
      ],
      "html": "<article class=\"position-card\"><span class=\"badge\">NEW</span><h2>Positioning context</h2><p>The badge is anchored to this card.</p></article>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; }\n.position-card { position: relative; max-width: 500px; margin: auto; padding: 28px; border: 1px solid #d8e2ea; border-radius: 16px; }\n.badge { position: absolute; top: 12px; right: 12px; padding: 5px 8px; border-radius: 999px; background: #d93e68; color: white; font-size: 11px; font-weight: 900; }",
      "js": "",
      "quiz": [
        {
          "question": "Why give the card `position: relative` here?",
          "options": [
            "To create the containing context for its absolute badge",
            "To hide it",
            "To turn it into Grid",
            "To load Java"
          ],
          "correctIndex": 0,
          "explanation": "The absolute child can use the card as its positioning reference."
        },
        {
          "question": "Which positioning mode can stick after crossing a scroll threshold?",
          "options": [
            "sticky",
            "static only",
            "inline",
            "grid"
          ],
          "correctIndex": 0,
          "explanation": "`position: sticky` participates in flow until its sticky threshold takes effect."
        }
      ]
    },
    {
      "id": "css-media-queries",
      "categoryId": "css",
      "mode": "code",
      "stage": "Responsive Design",
      "order": 10,
      "level": "Intermediate",
      "title": "Media queries: change layout when the environment changes",
      "summary": "Use breakpoints because the layout needs them, not because a device name told you to.",
      "objective": "Write mobile-friendly rules with `@media` and content-driven breakpoints.",
      "explanation": "Media queries apply CSS only when a condition is true, such as viewport width or user preferences.\n\nA breakpoint should usually come from the layout: when cards become too narrow, change the layout. It does not need to match a specific phone model.",
      "tip": "Resize the browser slowly. The point where content starts feeling cramped is a good breakpoint candidate.",
      "hack": "Prefer a small number of meaningful breakpoints over dozens of tiny device-specific ones.",
      "mistake": "Do not create a breakpoint for every known screen size. That becomes hard to maintain and still misses future devices.",
      "expected": "The two-column layout becomes one column below 640px.",
      "realUse": "Used when page or component layout needs a deliberate change at a content-driven breakpoint.",
      "tags": [
        "css",
        "responsive design",
        "media",
        "queries",
        "change",
        "layout",
        "when"
      ],
      "html": "<section class=\"responsive-pair\"><article>Left</article><article>Right</article></section>",
      "css": "body { padding: 24px; font-family: system-ui, sans-serif; }\n.responsive-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\n.responsive-pair article { padding: 28px; background: #f0f7fb; border-radius: 14px; }\n@media (max-width: 640px) { .responsive-pair { grid-template-columns: 1fr; } }",
      "js": "",
      "quiz": [
        {
          "question": "What should usually determine a breakpoint?",
          "options": [
            "When the content/layout needs to change",
            "A random device list only",
            "The Java compiler",
            "The database row count"
          ],
          "correctIndex": 0,
          "explanation": "Content-driven breakpoints adapt to the actual design."
        },
        {
          "question": "What syntax begins a width-based CSS media query?",
          "options": [
            "@media",
            "@java",
            "::media",
            "$media"
          ],
          "correctIndex": 0,
          "explanation": "CSS media queries use `@media`."
        }
      ]
    },
    {
      "id": "css-responsive-grid",
      "categoryId": "css",
      "mode": "code",
      "stage": "Responsive Design",
      "order": 20,
      "level": "Intermediate",
      "title": "Responsive cards without breakpoint overload",
      "summary": "Use CSS Grid with auto-fit and minmax so cards wrap naturally as available space changes.",
      "objective": "Create a responsive card layout with one grid rule instead of hard-coding several column counts.",
      "explanation": "`repeat(auto-fit, minmax(...))` asks the browser to fit as many columns as possible while respecting a minimum card width. When space becomes narrow, cards wrap automatically.\n\nThis is especially useful when the component should respond to its available container width rather than a long list of device breakpoints.",
      "tip": "Choose the minimum width from the real content, not from a random device breakpoint.",
      "hack": "Use `min(100%, 220px)` inside `minmax()` to keep tracks safe inside very narrow containers.",
      "mistake": "A minimum that is too large can create horizontal overflow on small screens.",
      "expected": "The cards automatically move from several columns to fewer columns as the result area narrows.",
      "realUse": "Useful for portfolio cards, product lists, admin panels, search results, and category dashboards.",
      "tags": [
        "css",
        "responsive design",
        "responsive",
        "cards",
        "without",
        "breakpoint",
        "overload"
      ],
      "html": "<section class=\"card-grid\"><article class=\"card\"><strong>HTML</strong><span>Structure</span></article><article class=\"card\"><strong>CSS</strong><span>Presentation</span></article><article class=\"card\"><strong>JavaScript</strong><span>Behavior</span></article><article class=\"card\"><strong>Java</strong><span>Application logic</span></article></section>",
      "css": "body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #f3f6f9; }\n.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 16px; }\n.card { display: grid; gap: 6px; padding: 22px; border: 1px solid #d7e0e8; border-radius: 16px; background: white; }\n.card strong { color: #0879b7; }\n.card span { color: #607086; }",
      "js": "",
      "quiz": [
        {
          "question": "What does `auto-fit` help with?",
          "options": [
            "Automatically fitting available grid tracks",
            "Running JavaScript",
            "Loading fonts",
            "Changing HTML semantics"
          ],
          "correctIndex": 0,
          "explanation": "`auto-fit` lets Grid fit as many columns as the available space allows."
        },
        {
          "question": "Why combine `minmax()` with a minimum card width?",
          "options": [
            "To define how small and how flexible a track can be",
            "To disable wrapping",
            "To force fixed desktop width",
            "To increase specificity"
          ],
          "correctIndex": 0,
          "explanation": "`minmax()` gives a lower bound while still allowing the track to grow."
        }
      ]
    },
    {
      "id": "css-fluid-clamp",
      "categoryId": "css",
      "mode": "code",
      "stage": "Responsive Design",
      "order": 30,
      "level": "Intermediate",
      "title": "Fluid design with min(), max(), and clamp()",
      "summary": "Make type and spacing scale smoothly without adding another breakpoint for every step.",
      "objective": "Use CSS comparison functions to create controlled fluid values.",
      "explanation": "`clamp(minimum, preferred, maximum)` lets a value grow fluidly but never become smaller or larger than your chosen limits.\n\n`min()` and `max()` are also useful for widths and spacing. These functions can reduce unnecessary media queries.",
      "tip": "Use `clamp()` when a value should scale with the viewport but still stay inside safe readability limits.",
      "hack": "A common fluid heading pattern is `font-size: clamp(2rem, 6vw, 5rem)`.",
      "mistake": "Do not make everything fluid. Some touch targets, borders, and small controls need predictable minimum sizes.",
      "expected": "The heading grows with viewport width but stays between 2rem and 5rem.",
      "realUse": "Useful for fluid headings, responsive spacing, readable content widths, and reducing unnecessary breakpoints.",
      "tags": [
        "css",
        "responsive design",
        "fluid",
        "design",
        "with",
        "min",
        "max"
      ],
      "html": "<section class=\"fluid-demo\"><h1>Fluid CSS</h1><p>Responsive does not always require a breakpoint.</p></section>",
      "css": "body { padding: 28px; font-family: system-ui, sans-serif; }\n.fluid-demo { width: min(92%, 900px); margin: auto; }\nh1 { font-size: clamp(2rem, 6vw, 5rem); line-height: .95; letter-spacing: -.05em; margin-bottom: 18px; }\np { font-size: clamp(1rem, 2vw, 1.2rem); color: #617489; }",
      "js": "",
      "quiz": [
        {
          "question": "What does `clamp()` provide?",
          "options": [
            "A minimum, preferred value, and maximum",
            "Only a fixed pixel size",
            "Only a color",
            "A Java method"
          ],
          "correctIndex": 0,
          "explanation": "`clamp()` bounds a fluid/preferred value between minimum and maximum limits."
        },
        {
          "question": "Can fluid CSS reduce the need for some media queries?",
          "options": [
            "Yes",
            "No, never"
          ],
          "correctIndex": 0,
          "explanation": "For smoothly scaling values, functions like `clamp()` can replace some breakpoint-only changes."
        }
      ]
    },
    {
      "id": "css-custom-properties",
      "categoryId": "css",
      "mode": "code",
      "stage": "Modern CSS",
      "order": 10,
      "level": "Advanced",
      "title": "CSS custom properties (variables)",
      "summary": "Stop repeating the same colors, spacing, and component values everywhere.",
      "objective": "Define reusable values with `--name` and read them with `var()`.",
      "explanation": "Custom properties are values stored in CSS, such as `--brand: #0c8bc7`. They participate in the cascade, which means they can be overridden by scope or theme.\n\nThis makes them useful for design tokens, themes, component variants, and reusable spacing systems.",
      "tip": "Name variables by meaning when possible: `--surface`, `--text-muted`, `--space-md` is usually more reusable than `--blue2`.",
      "hack": "Custom properties can have fallbacks: `var(--card-gap, 16px)`.",
      "mistake": "Do not create hundreds of variables with no system. Variables help when they represent reusable decisions.",
      "expected": "The same brand custom property styles the heading, button, and border accent.",
      "realUse": "Useful for themes, brand tokens, spacing systems, reusable component values, and light/dark modes.",
      "tags": [
        "css",
        "modern css",
        "css",
        "custom",
        "properties",
        "variables"
      ],
      "html": "<section class=\"token-card\"><h2>Reusable tokens</h2><p>One value can style several related pieces.</p><button>Action</button></section>",
      "css": ":root { --brand: #0879b7; --surface: #f2f9fd; --radius: 16px; }\nbody { padding: 32px; font-family: system-ui, sans-serif; }\n.token-card { max-width: 520px; margin: auto; padding: 24px; background: var(--surface); border-left: 5px solid var(--brand); border-radius: var(--radius); }\nh2 { color: var(--brand); }\nbutton { border: 0; padding: 10px 14px; border-radius: 9px; background: var(--brand); color: white; }",
      "js": "",
      "quiz": [
        {
          "question": "How do you define a CSS custom property?",
          "options": [
            "--name: value;",
            "let name = value;",
            "$name = value;",
            "var name = value;"
          ],
          "correctIndex": 0,
          "explanation": "CSS custom properties start with two hyphens."
        },
        {
          "question": "How do you read a custom property?",
          "options": [
            "var(--name)",
            "get(--name)",
            "css(--name)",
            "use(--name)"
          ],
          "correctIndex": 0,
          "explanation": "The `var()` function reads a custom property value."
        }
      ]
    },
    {
      "id": "css-modern-selectors",
      "categoryId": "css",
      "mode": "code",
      "stage": "Modern CSS",
      "order": 20,
      "level": "Advanced",
      "title": "Modern selectors: :is(), :where(), and :has()",
      "summary": "Write expressive selectors with better control over repetition and specificity.",
      "objective": "Understand when modern relational and grouping selectors simplify real component rules.",
      "explanation": "`:is()` groups selector alternatives and uses the specificity of its most specific argument. `:where()` also groups selectors but contributes zero specificity. `:has()` can style an element based on what it contains or what relates to it.\n\nThese tools can reduce duplicated selectors, but clear intent is still more important than cleverness.",
      "tip": "Use `:where()` for low-specificity defaults that should remain easy to override.",
      "hack": "`:has()` can create parent-aware UI, such as highlighting a field group when it contains an invalid input.",
      "mistake": "Do not turn a simple class-based component into a puzzle of advanced selectors. Modern selectors are tools, not goals.",
      "expected": "The card changes its border because it `:has()` a checked checkbox.",
      "realUse": "Useful for low-specificity defaults, grouped selectors, validation states, and parent-aware UI.",
      "tags": [
        "css",
        "modern css",
        "modern",
        "selectors",
        "is",
        "where",
        "and"
      ],
      "html": "<label class=\"choice-card\"><input type=\"checkbox\"> <span>Enable advanced option</span></label>",
      "css": "body { padding: 32px; font-family: system-ui, sans-serif; }\n.choice-card { display: flex; gap: 10px; align-items: center; max-width: 420px; padding: 18px; border: 2px solid #d3dfe8; border-radius: 14px; }\n.choice-card:has(input:checked) { border-color: #16a875; background: #edf9f4; }\n:where(.choice-card span) { color: #40596b; }",
      "js": "",
      "quiz": [
        {
          "question": "Which selector can style a parent based on matching content inside it?",
          "options": [
            ":has()",
            ":hover only",
            "::before",
            "@supports"
          ],
          "correctIndex": 0,
          "explanation": "`:has()` is a relational selector that can match based on related descendants/siblings."
        },
        {
          "question": "What is special about `:where()` specificity?",
          "options": [
            "It contributes zero specificity",
            "It always wins",
            "It is the same as an ID",
            "It cannot group selectors"
          ],
          "correctIndex": 0,
          "explanation": "`:where()` is intentionally zero-specificity, which makes defaults easier to override."
        }
      ]
    },
    {
      "id": "css-container-queries",
      "categoryId": "css",
      "mode": "code",
      "stage": "Modern CSS",
      "order": 30,
      "level": "Advanced",
      "title": "Container queries: responsive components, not just responsive pages",
      "summary": "Let a component react to the space it actually receives.",
      "objective": "Use container query units and `@container` to make reusable components adapt inside different layouts.",
      "explanation": "Media queries usually ask about the viewport. Container queries ask about an ancestor container. That is powerful for reusable components that may appear in a sidebar, grid, modal, or wide page.\n\nSet `container-type: inline-size` on the container, then use `@container` rules for descendants.",
      "tip": "Use container queries when the same component should look different depending on where it is placed.",
      "hack": "Think component-first: “How much space does this card have?” rather than “What device is this?”",
      "mistake": "Do not add container queries everywhere. Use them when a component truly needs local responsiveness.",
      "expected": "The card switches from stacked to side-by-side when its own container is wide enough.",
      "realUse": "Useful for reusable cards/widgets that may appear in sidebars, dashboards, modals, or wide pages.",
      "tags": [
        "css",
        "modern css",
        "container",
        "queries",
        "responsive",
        "components",
        "not"
      ],
      "html": "<div class=\"demo-shell\"><article class=\"cq-card\"><div class=\"art\">CSS</div><div><h2>Container-aware card</h2><p>This component responds to its container.</p></div></article></div>",
      "css": ".demo-shell { container-type: inline-size; max-width: 760px; margin: 30px auto; padding: 12px; border: 1px dashed #9fb6c6; }\n.cq-card { display: grid; gap: 14px; padding: 18px; background: #f5f9fc; border-radius: 14px; font-family: system-ui, sans-serif; }\n.art { display: grid; place-items: center; min-height: 100px; background: #0d2235; color: #5bd6ff; border-radius: 12px; font-weight: 900; }\n@container (min-width: 520px) { .cq-card { grid-template-columns: 180px 1fr; align-items: center; } }",
      "js": "",
      "quiz": [
        {
          "question": "What do container queries respond to?",
          "options": [
            "The size of a container",
            "Only the full viewport",
            "Database size",
            "Java heap"
          ],
          "correctIndex": 0,
          "explanation": "Container queries allow component styles to react to an ancestor container."
        },
        {
          "question": "Which property enables inline-size container querying on an ancestor?",
          "options": [
            "container-type: inline-size",
            "display: query",
            "position: container",
            "overflow: container"
          ],
          "correctIndex": 0,
          "explanation": "`container-type: inline-size` establishes a query container for inline-size conditions."
        }
      ]
    },
    {
      "id": "css-transforms-transitions",
      "categoryId": "css",
      "mode": "code",
      "stage": "Animation & Interaction",
      "order": 10,
      "level": "Advanced",
      "title": "Transforms and transitions",
      "summary": "Add motion that explains interaction instead of decorating everything.",
      "objective": "Use transform and transition for responsive UI feedback.",
      "explanation": "`transform` can translate, scale, rotate, or skew an element without changing normal document flow. `transition` animates a property change over time.\n\nFor many UI effects, transform and opacity are smooth choices because browsers can often animate them efficiently.",
      "tip": "Use motion to confirm cause and effect: hover lift, menu opening, card expansion, or state change.",
      "hack": "Transition only the properties you intend instead of writing `transition: all` everywhere.",
      "mistake": "Do not animate large layout changes just because you can. Motion should support understanding and respect user preferences.",
      "expected": "The card lifts slightly and the button changes smoothly on hover/focus.",
      "realUse": "Useful for hover feedback, menus, drawers, cards, buttons, and small state changes.",
      "tags": [
        "css",
        "animation & interaction",
        "transforms",
        "and",
        "transitions"
      ],
      "html": "<article class=\"motion-card\"><h2>Purposeful motion</h2><button>Hover or focus</button></article>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; background: #eef4f8; }\n.motion-card { max-width: 420px; margin: auto; padding: 26px; background: white; border-radius: 16px; transition: transform 180ms ease, box-shadow 180ms ease; }\n.motion-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px #17344d20; }\nbutton { padding: 10px 14px; border: 0; border-radius: 9px; background: #0c8bc7; color: white; transition: transform 120ms ease; }\nbutton:active { transform: scale(.97); }",
      "js": "",
      "quiz": [
        {
          "question": "What does `transform: translateY(-4px)` do?",
          "options": [
            "Moves the visual box upward",
            "Changes HTML order",
            "Creates a database",
            "Changes font family"
          ],
          "correctIndex": 0,
          "explanation": "Translate transforms move the rendered element without reordering the document."
        },
        {
          "question": "Why avoid `transition: all` as a default?",
          "options": [
            "It may animate properties you did not intend",
            "It cannot animate anything",
            "It removes hover",
            "It disables CSS"
          ],
          "correctIndex": 0,
          "explanation": "Explicit transition properties make motion more predictable and easier to maintain."
        }
      ],
      "shortcut": {
        "label": "⚡ SHORTHAND — transition",
        "longLabel": "Separate transition properties",
        "longCode": "transition-property: transform;\ntransition-duration: 180ms;\ntransition-timing-function: ease;",
        "shortLabel": "Shorthand",
        "shortCode": "transition: transform 180ms ease;",
        "note": "The shorthand keeps a simple single-property transition compact.",
        "caution": "For many unrelated properties or complex timing, explicit rules may be easier to review."
      }
    },
    {
      "id": "css-keyframes-reduced-motion",
      "categoryId": "css",
      "mode": "code",
      "stage": "Animation & Interaction",
      "order": 20,
      "level": "Advanced",
      "title": "Keyframe animation with reduced-motion support",
      "summary": "Create multi-step animation without ignoring accessibility preferences.",
      "objective": "Use `@keyframes`, animation properties, and `prefers-reduced-motion`.",
      "explanation": "Keyframes define multiple moments in an animation. The `animation` shorthand controls name, duration, timing, delay, iteration count, and more.\n\nSome users request reduced motion at the operating-system/browser level. `@media (prefers-reduced-motion: reduce)` lets your CSS remove or simplify non-essential movement.",
      "tip": "Build the static state first. Animation should enhance a component, not be required to understand or use it.",
      "hack": "Keep decorative loops subtle and pause/remove them when reduced motion is requested.",
      "mistake": "Do not use large constant motion behind text or controls. It can distract users and cause discomfort.",
      "expected": "The status dot softly pulses unless reduced motion is requested.",
      "realUse": "Useful for loaders, status indicators, onboarding cues, and motion that respects accessibility preferences.",
      "tags": [
        "css",
        "animation & interaction",
        "keyframe",
        "animation",
        "with",
        "reduced",
        "motion"
      ],
      "html": "<div class=\"status\"><span class=\"dot\"></span><strong>System ready</strong></div>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; }\n.status { display: flex; gap: 10px; align-items: center; }\n.dot { width: 14px; height: 14px; border-radius: 50%; background: #16a875; animation: pulse 1.4s ease-in-out infinite; }\n@keyframes pulse { 50% { transform: scale(1.35); opacity: .55; } }\n@media (prefers-reduced-motion: reduce) { .dot { animation: none; } }",
      "js": "",
      "quiz": [
        {
          "question": "Where are multi-step CSS animations defined?",
          "options": [
            "@keyframes",
            "@grid",
            "::animation",
            "@java"
          ],
          "correctIndex": 0,
          "explanation": "`@keyframes` defines the stages of a CSS animation."
        },
        {
          "question": "What does `prefers-reduced-motion` help with?",
          "options": [
            "Respecting user motion preferences",
            "Increasing specificity",
            "Database validation",
            "Changing HTML semantics"
          ],
          "correctIndex": 0,
          "explanation": "It lets sites reduce non-essential motion for users who request it."
        }
      ]
    },
    {
      "id": "css-cascade-layers",
      "categoryId": "css",
      "mode": "code",
      "stage": "Architecture & Debugging",
      "order": 10,
      "level": "Advanced",
      "title": "Cascade layers: control CSS priority by architecture",
      "summary": "Organize reset, base, components, and utilities without escalating selector specificity.",
      "objective": "Use `@layer` to create an intentional priority order between groups of styles.",
      "explanation": "Cascade layers let you define broad priority between style groups before individual selector specificity becomes a fight. For example: reset → base → components → utilities.\n\nThis is useful in larger systems or when combining your CSS with third-party styles.",
      "tip": "Decide layer order near the top of the stylesheet so the priority is visible to maintainers.",
      "hack": "Put easy-to-override defaults in lower-priority layers and intentional utility overrides in a later layer.",
      "mistake": "Do not add layers to a tiny stylesheet just to look advanced. Architecture should solve a real maintenance problem.",
      "expected": "The utility layer intentionally overrides the component color without needing a more complex selector.",
      "realUse": "Useful in larger applications, design systems, resets, utilities, and projects that combine third-party CSS.",
      "tags": [
        "css",
        "architecture & debugging",
        "cascade",
        "layers",
        "control",
        "css",
        "priority"
      ],
      "html": "<button class=\"button text-accent\">Layered button</button>",
      "css": "@layer base, components, utilities;\n@layer base { body { padding: 40px; font-family: system-ui, sans-serif; } }\n@layer components { .button { border: 0; border-radius: 10px; padding: 11px 16px; background: #0d2235; color: white; } }\n@layer utilities { .text-accent { color: #5bd6ff; } }",
      "js": "",
      "quiz": [
        {
          "question": "What is one main benefit of cascade layers?",
          "options": [
            "Intentional priority between groups of styles",
            "They replace HTML",
            "They only create animation",
            "They make selectors random"
          ],
          "correctIndex": 0,
          "explanation": "Layers let you organize broad cascade priority by architecture."
        },
        {
          "question": "Should every tiny project use many layers?",
          "options": [
            "No",
            "Yes, always"
          ],
          "correctIndex": 0,
          "explanation": "Use architectural tools when they reduce real complexity, not for ceremony."
        }
      ]
    },
    {
      "id": "css-component-architecture",
      "categoryId": "css",
      "mode": "code",
      "stage": "Architecture & Debugging",
      "order": 20,
      "level": "Advanced",
      "title": "Write maintainable component CSS",
      "summary": "Make styles reusable without coupling them to one exact page.",
      "objective": "Structure component selectors, states, variants, and tokens so future changes stay local.",
      "explanation": "Maintainable CSS tends to have clear ownership: a card styles itself, a button has explicit variants, and layout wrappers control layout. Naming conventions such as BEM can help, but the deeper principle is predictable scope.\n\nAvoid selectors that depend on a long ancestry chain like `.page main section .panel ul li a`.",
      "tip": "Use component classes for reusable UI and state attributes/classes for intentional variants.",
      "hack": "Keep layout rules in layout containers and visual component rules in the component. Separation reduces accidental side effects.",
      "mistake": "Do not create one giant global stylesheet where every selector can affect every page unpredictably.",
      "expected": "Two buttons share the same base class while a modifier changes only the intended visual variant.",
      "realUse": "Useful for design systems, reusable UI libraries, dashboards, admin tools, and multi-page sites.",
      "tags": [
        "css",
        "architecture & debugging",
        "write",
        "maintainable",
        "component",
        "css"
      ],
      "html": "<div class=\"actions\"><button class=\"btn btn--primary\">Save</button><button class=\"btn btn--secondary\">Cancel</button></div>",
      "css": ":root { --brand: #0879b7; }\nbody { padding: 40px; font-family: system-ui, sans-serif; }\n.actions { display: flex; gap: 10px; }\n.btn { border-radius: 9px; padding: 10px 14px; font: inherit; font-weight: 800; }\n.btn--primary { border: 1px solid var(--brand); background: var(--brand); color: white; }\n.btn--secondary { border: 1px solid #b8c8d4; background: white; color: #29495f; }",
      "js": "",
      "quiz": [
        {
          "question": "What makes component CSS easier to maintain?",
          "options": [
            "Predictable scope and clear variants",
            "Long ancestry selectors",
            "Many !important rules",
            "Inline style everywhere"
          ],
          "correctIndex": 0,
          "explanation": "Clear component ownership limits accidental side effects."
        },
        {
          "question": "What is the deeper goal behind naming systems like BEM?",
          "options": [
            "Predictable reusable structure",
            "Making class names long",
            "Removing CSS",
            "Replacing Grid"
          ],
          "correctIndex": 0,
          "explanation": "Naming conventions are useful when they make component relationships and scope easier to understand."
        }
      ]
    },
    {
      "id": "css-debugging-performance",
      "categoryId": "css",
      "mode": "code",
      "stage": "Architecture & Debugging",
      "order": 30,
      "level": "Advanced",
      "title": "Debug CSS before rewriting it",
      "summary": "Use DevTools and a repeatable checklist to find the actual cause of a visual bug.",
      "objective": "Diagnose cascade, box model, overflow, stacking, layout, and animation issues systematically.",
      "explanation": "When CSS “doesn't work,” first ask: did the selector match? Did another declaration win? Is the element in the layout mode you think it is? Is overflow clipping it? Is a stacking context involved?\n\nBrowser DevTools show matched rules, crossed-out declarations, computed values, box model, Grid/Flex overlays, and more. That is faster than guessing.",
      "tip": "Change one variable at a time while debugging. If you change five rules together, you may fix the symptom without learning the cause.",
      "hack": "Use temporary outlines such as `outline: 1px solid red` to see invisible box boundaries without changing layout size.",
      "mistake": "Do not add `!important` before checking why the expected rule lost.",
      "expected": "The demo intentionally uses an outline utility so you can see the element boundary clearly.",
      "realUse": "Useful whenever styles conflict, overflow appears, stacking behaves strangely, or a layout breaks across devices.",
      "tags": [
        "css",
        "architecture & debugging",
        "debug",
        "css",
        "before",
        "rewriting",
        "it"
      ],
      "html": "<div class=\"debug-box\"><strong>Inspect my box</strong><p>Use DevTools to inspect computed styles and box model.</p></div>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; }\n.debug-box { max-width: 480px; margin: auto; padding: 24px; background: #f7fbfd; outline: 2px dashed #e15d73; outline-offset: 4px; }",
      "js": "",
      "quiz": [
        {
          "question": "What should you check first when a CSS rule seems ignored?",
          "options": [
            "Whether the selector matched and whether another rule won",
            "Add !important immediately",
            "Delete all CSS",
            "Restart the database"
          ],
          "correctIndex": 0,
          "explanation": "Matched rules and the cascade usually reveal why a declaration did not apply."
        },
        {
          "question": "Why is `outline` useful for debugging boxes?",
          "options": [
            "It shows the boundary without affecting layout size like a border can",
            "It changes Java",
            "It adds Grid tracks",
            "It stores state"
          ],
          "correctIndex": 0,
          "explanation": "Outline is useful for visual debugging because it does not take up layout space."
        }
      ]
    },
    {
      "id": "css-expert-practice-card-system",
      "categoryId": "css",
      "mode": "code",
      "stage": "Expert Practice",
      "order": 10,
      "level": "Expert practice",
      "title": "Final CSS challenge: build a resilient card system",
      "summary": "Combine the course into one component: tokens, Grid, container queries, focus states, fluid type, and reduced motion.",
      "objective": "Practice designing a component that stays readable, responsive, maintainable, and accessible in different contexts.",
      "explanation": "Expert CSS is less about memorizing rare properties and more about choosing the simplest reliable system for the problem.\n\nThis final example combines reusable tokens, local component responsiveness, a safe focus state, fluid type, and reduced-motion support. Study it, change it, then try rebuilding it from a blank editor.",
      "tip": "Delete one section of the CSS and rebuild it yourself. Reconstruction teaches more than rereading.",
      "hack": "Try the component at narrow and wide widths, keyboard-tab to the link, change the custom properties, and inspect it in DevTools.",
      "mistake": "Do not measure expertise by how clever the selector looks. Reliable CSS is readable, adaptable, accessible, and easy to change.",
      "expected": "The card remains readable at narrow widths, becomes a two-column component when its container is wide, and keeps clear keyboard focus.",
      "realUse": "Real production components often combine many small CSS decisions: design tokens, layout, typography, responsive behavior, accessibility, and maintainability.",
      "tags": [
        "css",
        "expert practice",
        "final",
        "css",
        "challenge",
        "build",
        "a"
      ],
      "html": "<div class=\"expert-shell\"><article class=\"expert-card\"><div class=\"expert-art\">CSS</div><div class=\"expert-copy\"><span>EXPERT PRACTICE</span><h2>Resilient component</h2><p>Build for content, container, keyboard, and future change.</p><a href=\"#\">Open details</a></div></article></div>",
      "css": ":root { --brand: #0879b7; --ink: #17344b; --muted: #5d7385; --surface: #f5fafc; --radius: 18px; }\n*, *::before, *::after { box-sizing: border-box; }\nbody { margin: 0; padding: clamp(16px, 4vw, 48px); font-family: system-ui, sans-serif; color: var(--ink); }\n.expert-shell { container-type: inline-size; width: min(100%, 900px); margin: auto; }\n.expert-card { display: grid; gap: 18px; padding: clamp(18px, 4cqi, 32px); background: var(--surface); border: 1px solid #d6e4ec; border-radius: var(--radius); }\n.expert-art { min-height: 180px; display: grid; place-items: center; border-radius: calc(var(--radius) - 5px); background: #0d2235; color: #5bd6ff; font-size: clamp(2rem, 10cqi, 5rem); font-weight: 950; }\n.expert-copy span { color: var(--brand); font-size: .75rem; font-weight: 900; letter-spacing: .1em; }\n.expert-copy h2 { margin: 8px 0; font-size: clamp(1.8rem, 7cqi, 3.6rem); line-height: 1; }\n.expert-copy p { color: var(--muted); line-height: 1.6; }\n.expert-copy a { display: inline-block; margin-top: 8px; padding: 10px 13px; border-radius: 9px; background: var(--brand); color: white; text-decoration: none; transition: transform 150ms ease; }\n.expert-copy a:hover { transform: translateY(-2px); }\n.expert-copy a:focus-visible { outline: 3px solid #62d8ff; outline-offset: 3px; }\n@container (min-width: 620px) { .expert-card { grid-template-columns: minmax(220px, .8fr) 1.2fr; align-items: center; } }\n@media (prefers-reduced-motion: reduce) { .expert-copy a { transition: none; } .expert-copy a:hover { transform: none; } }",
      "js": "",
      "quiz": [
        {
          "question": "What makes this an expert-practice lesson?",
          "options": [
            "It combines several CSS systems into one maintainable component",
            "It uses the longest selector possible",
            "It contains many !important rules",
            "It avoids accessibility"
          ],
          "correctIndex": 0,
          "explanation": "Expert practice is about integrating layout, tokens, responsiveness, accessibility, and maintainability."
        },
        {
          "question": "Why use a container query here?",
          "options": [
            "The card can adapt to the space its container gives it",
            "To replace HTML",
            "To increase z-index",
            "To compile Java"
          ],
          "correctIndex": 0,
          "explanation": "The component can be reused in different page regions and respond to its own available width."
        },
        {
          "question": "What is the best sign of strong CSS?",
          "options": [
            "Readable, adaptable, accessible, and easy to change",
            "Shortest code at any cost",
            "Most animations",
            "Highest specificity"
          ],
          "correctIndex": 0,
          "explanation": "Strong CSS solves the product problem while staying maintainable."
        }
      ]
    },
    {
      "id": "js-dom-counter",
      "categoryId": "javascript",
      "mode": "code",
      "level": "Beginner",
      "title": "Use the event → state → render loop",
      "summary": "Connect a click event to state, then render that state back into the DOM.",
      "objective": "Practice the small interaction loop that appears in carts, counters, filters, tabs, and admin controls.",
      "explanation": "The count lives in a normal variable. Each click changes the state, then render() writes the current value into the page.\n\nSeparating the state change from the DOM update keeps the logic easier to inspect and extend.",
      "tip": "Use textContent when you only need to write text. It avoids parsing the value as HTML.",
      "hack": "Keep repeated DOM lookups outside the click handler when the same nodes are reused.",
      "mistake": "Do not write count = count++ and expect a simple increment. Use count += 1 or ++count.",
      "expected": "Each click on +1 increases the visible number and logs the value to Console.",
      "realUse": "Useful for quantity controls, cart counts, filters, pagination state, tabs, and dashboard actions.",
      "tags": [
        "javascript",
        "dom",
        "event",
        "state",
        "render"
      ],
      "html": "<main class=\"counter-card\">\n  <p>Current count</p>\n  <strong id=\"count\">0</strong>\n  <button id=\"add\" type=\"button\">+1</button>\n</main>",
      "css": "body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; background: #091a29; }\n.counter-card { min-width: 230px; padding: 28px; text-align: center; border-radius: 20px; background: white; }\n.counter-card p { margin: 0 0 8px; color: #607086; }\n#count { display: block; margin-bottom: 18px; font-size: 56px; line-height: 1; color: #0879b7; }\nbutton { border: 0; border-radius: 10px; padding: 10px 18px; background: #14a673; color: white; font-weight: 800; }",
      "js": "const countNode = document.querySelector(\"#count\");\nconst addButton = document.querySelector(\"#add\");\nlet count = 0;\n\nfunction render() {\n  countNode.textContent = String(count);\n}\n\naddButton.addEventListener(\"click\", () => {\n  count += 1;\n  render();\n  console.log(\"Count:\", count);\n});",
      "stage": "Foundation",
      "order": 10,
      "quiz": [
        {
          "question": "Which sequence best describes this counter?",
          "options": [
            "Render → event → state",
            "Event → state change → render",
            "CSS → HTML → database",
            "State → network → reload"
          ],
          "correctIndex": 1,
          "explanation": "The click event changes state, then render() updates the DOM."
        },
        {
          "question": "Why is textContent a good fit for the count?",
          "options": [
            "It executes HTML",
            "It writes plain text safely",
            "It creates a new element",
            "It stores data in localStorage"
          ],
          "correctIndex": 1,
          "explanation": "The counter only needs plain text, so textContent is clear and appropriate."
        }
      ]
    },
    {
      "id": "js-filter-vs-find",
      "categoryId": "javascript",
      "mode": "code",
      "level": "Intermediate",
      "title": "Choose filter() or find() correctly",
      "summary": "Use filter() for a list of matches and find() when you only need the first matching item.",
      "objective": "Pick the array method that matches the result shape you actually need.",
      "explanation": "filter() always returns a new array, even if only one item matches. find() returns the first matching item or undefined.\n\nChoosing the correct method makes the code clearer and avoids filtering an entire list just to read one item.",
      "tip": "Ask one question first: “Do I need one item or a list?” That usually tells you whether to start with find() or filter().",
      "hack": "Use console.table() for arrays of objects while debugging. It is easier to scan than repeated console.log() lines.",
      "mistake": "Do not assume find() returns an array. Check for undefined when a match may not exist.",
      "expected": "The result lists in-stock products and shows Beef Tapa as the first requested match.",
      "realUse": "Useful for inventory filtering, product search, active records, user lookup, and selection logic.",
      "tags": [
        "javascript",
        "array",
        "filter",
        "find",
        "console.table"
      ],
      "html": "<main>\n  <h2>Available products</h2>\n  <ul id=\"available\"></ul>\n  <p id=\"firstMatch\"></p>\n</main>",
      "css": "body { font-family: system-ui, sans-serif; padding: 28px; color: #142235; background: #f6f8fb; }\nmain { max-width: 520px; margin: auto; }\nli { margin: 8px 0; padding: 10px 12px; border-radius: 9px; background: white; border: 1px solid #d9e2ec; }\n#firstMatch { color: #0879b7; font-weight: 700; }",
      "js": "const products = [\n  { name: \"Liempo\", stock: 5 },\n  { name: \"Chicken Breast\", stock: 0 },\n  { name: \"Beef Tapa\", stock: 3 }\n];\n\nconst available = products.filter((product) => product.stock > 0);\nconst firstMatch = products.find((product) => product.name === \"Beef Tapa\");\n\ndocument.querySelector(\"#available\").innerHTML = available\n  .map((product) => `<li>${product.name}: ${product.stock}</li>`)\n  .join(\"\");\n\ndocument.querySelector(\"#firstMatch\").textContent = firstMatch\n  ? `First match: ${firstMatch.name}`\n  : \"No match found\";\n\nconsole.table(available);\nconsole.log(\"First match:\", firstMatch);",
      "stage": "Arrays",
      "order": 20,
      "quiz": [
        {
          "question": "You need every product with stock > 0. Which method fits best?",
          "options": [
            "find()",
            "filter()",
            "map()",
            "join()"
          ],
          "correctIndex": 1,
          "explanation": "filter() returns a new array containing every matching item."
        },
        {
          "question": "You only need the first product with id === 25. Which method fits best?",
          "options": [
            "filter()",
            "find()",
            "sort()",
            "forEach()"
          ],
          "correctIndex": 1,
          "explanation": "find() stops when it finds the first match and returns that item."
        }
      ]
    },
    {
      "id": "java-validate-numeric-input",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "level": "Beginner",
      "title": "Validate numeric input without crashing the flow",
      "summary": "Treat user-entered text as untrusted input and return an explicit invalid result instead of throwing through the UI.",
      "objective": "Use trim, parseInt, range checks, and NumberFormatException deliberately.",
      "explanation": "Integer.parseInt() throws when the input is not a valid integer. A UI should not let that exception become the user experience.\n\nThis example returns null for blank, negative, or malformed input so the caller can show a clear validation message.",
      "tip": "Keep parsing and validation close together so invalid input cannot accidentally continue deeper into business logic.",
      "hack": "Return a richer validation result when the UI needs different messages for blank, malformed, and out-of-range values.",
      "mistake": "Do not silently replace invalid user input with zero unless zero is genuinely the correct business meaning.",
      "expected": "The compile-tested output is 12, null, null.",
      "expectedOutput": "12\nnull\nnull",
      "realUse": "Useful for quantities, stock counts, package counts, and other numeric form inputs.",
      "tags": [
        "java",
        "validation",
        "numberformat",
        "defensive programming"
      ],
      "code": "public class Main {\n    static Integer parseQuantity(String raw) {\n        if (raw == null || raw.isBlank()) return null;\n        try {\n            int value = Integer.parseInt(raw.trim());\n            return value >= 0 ? value : null;\n        } catch (NumberFormatException ex) {\n            return null;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(parseQuantity(\"12\"));\n        System.out.println(parseQuantity(\"-1\"));\n        System.out.println(parseQuantity(\"abc\"));\n    }\n}",
      "stage": "Foundation",
      "order": 40,
      "quiz": [
        {
          "question": "What can Integer.parseInt(\"abc\") do?",
          "options": [
            "Return 0 automatically",
            "Throw NumberFormatException",
            "Return null",
            "Convert it to ASCII"
          ],
          "correctIndex": 1,
          "explanation": "Malformed integer text causes NumberFormatException."
        },
        {
          "question": "Why return an invalid result instead of silently using 0?",
          "options": [
            "0 may have a real business meaning",
            "Java forbids 0",
            "It is faster",
            "It removes validation"
          ],
          "correctIndex": 0,
          "explanation": "Silently turning invalid input into 0 can corrupt business meaning."
        }
      ]
    },
    {
      "id": "java-bigdecimal-money",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "level": "Intermediate",
      "title": "Use BigDecimal for money calculations",
      "summary": "Avoid binary floating-point surprises when exact decimal money values matter.",
      "objective": "Create decimal values from strings, multiply them, and format the final scale explicitly.",
      "explanation": "double is binary floating point and cannot represent every decimal fraction exactly. For money, BigDecimal gives explicit decimal arithmetic and rounding behavior.\n\nCreate values from strings when decimal text is the source of truth.",
      "tip": "Prefer new BigDecimal(\"145.50\") or BigDecimal.valueOf(...) over new BigDecimal(145.50).",
      "hack": "Choose the rounding rule at the business boundary, not randomly inside intermediate calculations.",
      "mistake": "Do not mix implicit double conversions into a BigDecimal workflow and assume exactness is preserved.",
      "expected": "The compile-tested total is 436.50.",
      "expectedOutput": "436.50",
      "realUse": "Useful for retail prices, invoice totals, discounts, taxes, and financial summaries.",
      "tags": [
        "java",
        "bigdecimal",
        "money",
        "rounding"
      ],
      "code": "import java.math.BigDecimal;\nimport java.math.RoundingMode;\n\npublic class Main {\n    public static void main(String[] args) {\n        BigDecimal price = new BigDecimal(\"145.50\");\n        BigDecimal quantity = new BigDecimal(\"3\");\n        BigDecimal total = price.multiply(quantity).setScale(2, RoundingMode.HALF_UP);\n        System.out.println(total.toPlainString());\n    }\n}",
      "stage": "Applied Java",
      "order": 10,
      "quiz": [
        {
          "question": "Why is BigDecimal preferred for exact money calculations?",
          "options": [
            "It uses fewer lines",
            "It provides explicit decimal arithmetic",
            "It automatically connects to a database",
            "double cannot store any numbers"
          ],
          "correctIndex": 1,
          "explanation": "BigDecimal is designed for controlled decimal arithmetic and rounding."
        },
        {
          "question": "Which construction is safer for exact decimal text?",
          "options": [
            "new BigDecimal(\"145.50\")",
            "new BigDecimal(145.50)",
            "(BigDecimal)145.50",
            "BigDecimal.random()"
          ],
          "correctIndex": 0,
          "explanation": "Constructing from the decimal string avoids first converting through a binary floating-point value."
        }
      ]
    },
    {
      "id": "photoshop-smart-object-workflow",
      "categoryId": "photoshop",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Keep repeated product transforms non-destructive",
      "summary": "Use Smart Objects and reversible adjustments when product artwork will be resized or repositioned repeatedly.",
      "objective": "Protect the source layer while testing several campaign compositions.",
      "explanation": "Repeated transforms are common in ad layouts. Converting a product layer to a Smart Object preserves a cleaner editing path when the same source needs to be resized, repositioned, or revised later.\n\nThe attached proof is an actual Gatchalian Meatshop campaign deliverable where Photoshop was part of the image-refinement workflow. It proves the finished result, not a screen recording of every editing step.",
      "tip": "Duplicate a Smart Object only when you want independent contents. Otherwise keep one source and reuse it consistently.",
      "hack": "Pair Smart Objects with masks instead of permanently erasing pixels while you are still testing layout options.",
      "mistake": "Do not repeatedly rasterize and resize the only copy of a product image if you still expect revisions.",
      "expected": "A campaign layout remains easy to revise because the source imagery is not destructively flattened during exploration.",
      "realUse": "Useful for product promos, price cards, social ads, campaign variants, and resized platform versions.",
      "tags": [
        "photoshop",
        "smart object",
        "non-destructive",
        "campaign",
        "product"
      ],
      "proof": {
        "kind": "image",
        "label": "Actual campaign result",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/gatchalian-meatshop-social-media-campaign/1791005767827-cover.png",
        "alt": "Gatchalian Meatshop social media campaign board used as result proof for a Photoshop workflow lesson",
        "note": "Real portfolio deliverable. Photoshop is listed in the documented tool workflow for this campaign.",
        "caseUrl": "../multimedia/gatchalian-meatshop.html",
        "caseLabel": "Open Gatchalian campaign case study",
        "steps": [
          "Convert reusable product artwork to a Smart Object before repeated transforms.",
          "Use masks or reversible adjustments while testing composition.",
          "Check price hierarchy and product readability at the target social-media size.",
          "Keep the original source available for later campaign variants."
        ]
      }
    },
    {
      "id": "canva-brand-system-qyntro",
      "categoryId": "canva",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Build a brand system, not isolated pages",
      "summary": "Create a repeatable visual language first, then extend it across packaging, social posts, and presentation pages.",
      "objective": "Use consistent typography, palette, spacing, and reusable layout logic across a multi-page brand presentation.",
      "explanation": "A portfolio brand project becomes stronger when every page feels like part of the same system. Qyntro Daily was developed as a 10-page brand guide covering logo use, visual identity, packaging variants, social media concepts, applications, and presentation.\n\nThe proof video below is the actual portfolio presentation output.",
      "tip": "Lock a small set of type sizes, colors, and spacing rules before creating many pages.",
      "hack": "Duplicate a proven layout and replace only the content that needs to change; this reduces accidental style drift.",
      "mistake": "Do not solve every page as a completely unrelated composition if the goal is one coherent brand.",
      "expected": "The final deck feels consistent even when the content changes from identity to packaging to social media.",
      "realUse": "Useful for brand guides, pitch decks, campaign systems, product catalogs, and social templates.",
      "tags": [
        "canva",
        "brand system",
        "qyntro",
        "packaging",
        "presentation"
      ],
      "proof": {
        "kind": "video",
        "label": "Actual 51.7s portfolio video",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/qyntro-daily-brand-identity-packaging/1791179203173-video.mp4",
        "poster": "../assets/images/qyntro-daily-brand-cover.svg",
        "alt": "Qyntro Daily brand identity and packaging portfolio presentation video",
        "note": "Real personal-project presentation. Canva is the documented primary tool for this brand guide.",
        "caseUrl": "../multimedia/qyntro-daily.html",
        "caseLabel": "Open Qyntro Daily case study",
        "steps": [
          "Define the core name, descriptor, palette, and typography roles.",
          "Create repeatable page and packaging rules before multiplying variants.",
          "Extend the same visual language to social and lifestyle applications.",
          "Review the complete deck for spacing, copy, and consistency before export."
        ]
      }
    },
    {
      "id": "capcut-vertical-ad-structure",
      "categoryId": "capcut",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Structure a vertical ad around one clear story",
      "summary": "Organize a short-form ad into hook, problem, solution, proof/system, and CTA instead of stacking unrelated clips.",
      "objective": "Make timing and text overlays support one message from first frame to CTA.",
      "explanation": "Short vertical ads have very little time to establish context. The Exponify PH campaign video uses a business-development story rather than a random montage: attention first, the lead-handling problem next, the proposed system after that, then a clear action.\n\nThe video below is the actual 36.48-second portfolio asset.",
      "tip": "Keep one primary message per beat. If every line competes for attention, none of them wins.",
      "hack": "Review the edit once with sound off. If the story is no longer understandable, strengthen the visual/text hierarchy.",
      "mistake": "Do not add transitions simply because they exist. Use motion only when it helps pacing, continuity, or emphasis.",
      "expected": "The viewer can follow the offer from problem to CTA without needing extra explanation outside the video.",
      "realUse": "Useful for Meta Ads, reels, service promotions, product launches, and campaign explainers.",
      "tags": [
        "capcut",
        "vertical video",
        "meta ads",
        "storyboard",
        "cta"
      ],
      "proof": {
        "kind": "video",
        "label": "Actual 36.48s campaign video",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/exponify-business-operations-campaign/1791057046598-video.mp4",
        "poster": "../assets/images/exponify-ph-client-acquisition-cover.png",
        "alt": "Exponify PH client acquisition campaign vertical Meta Ads video",
        "note": "Real partner-collaboration portfolio asset. CapCut is documented in the production toolset.",
        "caseUrl": "../multimedia/exponify.html",
        "caseLabel": "Open Exponify PH case study",
        "steps": [
          "Start with the audience problem or a clear attention hook.",
          "Move quickly into the proposed system or benefit.",
          "Keep text overlays readable inside vertical safe areas.",
          "End with one CTA and review the full export at mobile size."
        ]
      }
    },
    {
      "id": "java-ternary-cleaner-conditions",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "Foundation",
      "order": 30,
      "level": "Beginner",
      "title": "Shorter code: when a ternary is actually clearer",
      "summary": "Compare a simple if/else with the ternary operator, then learn when the shorter form helps—and when it hurts readability.",
      "objective": "Recognize a safe shorthand for simple two-way value selection without treating shorter code as automatically better.",
      "explanation": "A ternary expression is a short way to choose one of two values. Think of it as a compact question: condition ? valueIfTrue : valueIfFalse.\n\nUse it when the choice is small and obvious. If the condition or results become complicated, a normal if/else is usually easier to read.",
      "tip": "Read it aloud: “If stock is greater than zero, use Available; otherwise use Out of stock.” If that sentence becomes hard to follow, keep the if/else.",
      "hack": "Use a ternary mainly for assigning or returning a simple value—not for squeezing several actions into one line.",
      "mistake": "Do not nest multiple ternaries just to reduce line count. Shorter code can be worse code when it hides the logic.",
      "expected": "Both versions produce Available when stock is 3 and Out of stock when stock is 0.",
      "expectedOutput": "Available\nOut of stock",
      "realUse": "Useful for simple status labels, display values, and concise return expressions.",
      "tags": [
        "java",
        "ternary",
        "shorthand",
        "clean code",
        "conditions"
      ],
      "shortcut": {
        "label": "⚡ SHORTER WAY — Ternary operator",
        "longLabel": "Long form",
        "longCode": "String status;\nif (stock > 0) {\n    status = \"Available\";\n} else {\n    status = \"Out of stock\";\n}",
        "shortLabel": "Short form",
        "shortCode": "String status = stock > 0 ? \"Available\" : \"Out of stock\";",
        "note": "Same two-way decision for this simple case, with less repetition.",
        "caution": "Prefer the long form when the condition or branches are complex."
      },
      "code": "public class Main {\n    static String statusFor(int stock) {\n        return stock > 0 ? \"Available\" : \"Out of stock\";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(statusFor(3));\n        System.out.println(statusFor(0));\n    }\n}",
      "quiz": [
        {
          "question": "When is a ternary usually a good choice?",
          "options": [
            "A simple two-way value choice",
            "A 20-line branch",
            "Several nested conditions",
            "Any code that can be shortened"
          ],
          "correctIndex": 0,
          "explanation": "Ternaries are clearest when the condition and two resulting values are simple."
        },
        {
          "question": "What is the main rule?",
          "options": [
            "Shortest code always wins",
            "Readable code wins over clever short code",
            "Never use ternaries",
            "Put all logic on one line"
          ],
          "correctIndex": 1,
          "explanation": "Maintainability and clarity matter more than minimizing line count."
        }
      ]
    },
    {
      "id": "java-oop-class-object",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "OOP Foundations",
      "order": 10,
      "level": "Beginner",
      "title": "OOP made simple: Class vs Object",
      "summary": "Think of a class as the blueprint and an object as a real thing created from that blueprint.",
      "objective": "Understand class, object, fields, and methods before moving into encapsulation, inheritance, and polymorphism.",
      "explanation": "Imagine a car blueprint. The blueprint says every Car can have a brand, color, and speed, plus actions such as start() and stop(). That blueprint is the class.\n\nmyCar and yourCar are actual objects created from the Car class. They share the same structure but can hold different data.",
      "tip": "When OOP feels abstract, ask two questions: “What is the blueprint?” and “What actual objects are created from it?”",
      "hack": "Start modeling with nouns (possible classes/objects) and actions (possible methods), then simplify before coding.",
      "mistake": "A class is not the same thing as one object. One class can create many objects with different field values.",
      "expected": "The program creates two Car objects and prints Toyota / Red and Honda / Blue.",
      "expectedOutput": "Toyota / Red\nHonda / Blue",
      "realUse": "The same idea is used for Product, Customer, Order, Account, Player, Pet, and many other application models.",
      "tags": [
        "java",
        "oop",
        "class",
        "object",
        "fields",
        "methods"
      ],
      "code": "class Car {\n    String brand;\n    String color;\n    int speed;\n\n    Car(String brand, String color) {\n        this.brand = brand;\n        this.color = color;\n        this.speed = 0;\n    }\n\n    void start() {\n        speed = 10;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\", \"Red\");\n        Car yourCar = new Car(\"Honda\", \"Blue\");\n\n        System.out.println(myCar.brand + \" / \" + myCar.color);\n        System.out.println(yourCar.brand + \" / \" + yourCar.color);\n    }\n}",
      "quiz": [
        {
          "question": "In the car analogy, what is the class?",
          "options": [
            "One specific Toyota",
            "The blueprint for Car objects",
            "Only the brand field",
            "The console output"
          ],
          "correctIndex": 1,
          "explanation": "The class defines the structure and behavior that objects can have."
        },
        {
          "question": "What is myCar?",
          "options": [
            "A method",
            "A package",
            "An object/instance of Car",
            "A compiler"
          ],
          "correctIndex": 2,
          "explanation": "myCar is one actual object created from the Car class."
        },
        {
          "question": "Can two objects from the same class hold different data?",
          "options": [
            "No",
            "Yes",
            "Only in JavaScript",
            "Only if they use inheritance"
          ],
          "correctIndex": 1,
          "explanation": "Objects share the class definition but can store different field values."
        }
      ]
    },
    {
      "id": "java-big-o-made-simple",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "Problem Solving",
      "order": 10,
      "level": "Foundation",
      "title": "Big O without the scary math",
      "summary": "Use the “find Juan in a student list” story to understand how work grows when data gets bigger.",
      "objective": "Distinguish O(1), O(log n), O(n), and O(n²) by growth behavior instead of memorizing symbols.",
      "explanation": "Imagine you have a list of students and need to find Juan.\n\nO(1): you already have a direct key such as STU-1025, so the lookup does not grow by scanning the whole list.\n\nO(n): you have an unsorted list, so you may need to check names one by one. More students can mean more checks.\n\nO(n²): every student is compared with every other student. If the input grows 10×, this kind of work can grow roughly 100×.\n\nBig O is not an exact stopwatch. It describes how the amount of work grows as the input grows.",
      "tip": "Do not memorize “O(1) fast, O(n) slow.” Ask: what happens to the amount of work when n becomes much larger?",
      "hack": "When you see a loop inside another loop over the same growing data, check whether the work is approaching O(n²).",
      "mistake": "Big O does not tell you the exact runtime in milliseconds. Constants, hardware, data shape, and implementation details still matter.",
      "expected": "The example performs four linear checks to find Juan and also demonstrates an average O(1) HashMap lookup by ID.",
      "expectedOutput": "Linear checks: 4\nMap lookup: Juan",
      "realUse": "Big O helps you reason about search, pagination, lookup tables, sorting, caching, and whether a design will still behave well with much larger data.",
      "tags": [
        "java",
        "big o",
        "algorithms",
        "performance",
        "scaling",
        "hashmap",
        "linear search"
      ],
      "interactive": {
        "type": "big-o-simulator",
        "presets": [
          10,
          100,
          1000,
          1000000
        ]
      },
      "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        String[] students = {\"Maria\", \"Pedro\", \"Ana\", \"Juan\"};\n        int checks = 0;\n\n        for (String student : students) {\n            checks++;\n            if (student.equals(\"Juan\")) break;\n        }\n\n        Map<String, String> byId = new HashMap<>();\n        byId.put(\"STU-1025\", \"Juan\");\n\n        System.out.println(\"Linear checks: \" + checks);\n        System.out.println(\"Map lookup: \" + byId.get(\"STU-1025\"));\n    }\n}",
      "quiz": [
        {
          "question": "You scan an unsorted list one item at a time. What is the usual worst-case growth?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          "correctIndex": 2,
          "explanation": "In the worst case, a linear search may inspect every item."
        },
        {
          "question": "You compare every student with every other student using two full nested loops. What growth should you suspect?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          "correctIndex": 3,
          "explanation": "Two full nested loops over n items produce roughly n × n work."
        },
        {
          "question": "What does Big O mainly describe?",
          "options": [
            "Exact milliseconds",
            "How work grows as input grows",
            "How many lines of code exist",
            "The Java version"
          ],
          "correctIndex": 1,
          "explanation": "Big O describes growth/scaling behavior, not exact wall-clock time."
        },
        {
          "question": "Does O(n) automatically mean a program is slow?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 1,
          "explanation": "For small inputs O(n) can be very fast. Big O is about how the work scales as input grows."
        }
      ]
    }
  ]
};})();
