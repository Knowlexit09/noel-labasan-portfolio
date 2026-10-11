(function(){'use strict';window.KNOWLEDGE_LAB_V2={
  "version": "2026-10-12-v7",
  "categories": [
    {
      "id": "html",
      "label": "HTML",
      "group": "Code & Development",
      "icon": "<>",
      "status": "Complete fundamentals → expert practice",
      "description": "A complete HTML course from “What is HTML?” through semantic structure, forms, accessibility, metadata, modern HTML, performance, and production-ready document patterns.",
      "learningPath": [
        "HTML Fundamentals",
        "Text & Semantic Content",
        "Links & Images",
        "Forms & User Input",
        "Tables & Structured Data",
        "Media & Embeds",
        "Accessibility by Default",
        "Head, Metadata & SEO",
        "Modern HTML & Performance",
        "Architecture & Expert Practice"
      ]
    },
    {
      "id": "css",
      "label": "CSS",
      "group": "Code & Development",
      "icon": "#",
      "status": "Comprehensive course expansion",
      "description": "A comprehensive CSS course from fundamentals to expert practice, split into focused lessons with runnable examples, quizzes, shortcuts, real-work guidance, and section projects.",
      "learningPath": [
        "CSS Fundamentals",
        "Colors & Backgrounds",
        "Typography & Text",
        "Box Model & Sizing",
        "Selectors & Cascade",
        "Display & Positioning",
        "Flexbox",
        "Grid",
        "Responsive Design",
        "Images & Visual Effects",
        "Transforms & Animation",
        "Forms, Tables & UI",
        "Modern CSS",
        "Accessibility",
        "Architecture & Performance",
        "Projects & Expert Practice"
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
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "what",
        "is",
        "html"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-what-is-html",
      "stage": "HTML Fundamentals",
      "order": 10,
      "title": "What is HTML?",
      "summary": "Start with the real role of HTML: it gives meaning and structure to web content.",
      "definition": "HTML means HyperText Markup Language. It is the markup language browsers use to describe the structure and meaning of content on a web page.",
      "learn": [
        "What HTML stands for",
        "Why HTML is called markup",
        "How HTML works with CSS and JavaScript",
        "What the browser does with HTML"
      ],
      "objective": "Understand HTML before memorizing tags.",
      "explanation": "Think of a web page as a document first. HTML labels the parts: this is a heading, paragraph, navigation area, image, table, or form. CSS controls presentation, while JavaScript can add behavior.\n\nHTML is not mainly for making things look pretty. Its first job is to describe what the content is.",
      "tip": "Ask “What is this content?” before asking “How should it look?”",
      "hack": "Temporarily disable CSS in DevTools. Well-structured HTML should still make sense in reading order.",
      "mistake": "Do not choose tags only because of their default appearance. Choose them for meaning.",
      "expected": "The browser shows a heading, paragraph, and list with meaningful structure.",
      "html": "<main><h1>Hello, HTML</h1><p>HTML gives this page structure and meaning.</p><ul><li>Heading</li><li>Paragraph</li><li>List</li></ul></main>",
      "quiz": [
        {
          "question": "What does HTML stand for?",
          "options": [
            "HyperText Markup Language",
            "High Transfer Machine Language",
            "Hyperlink Text Mode Layout",
            "Home Tool Markup Logic"
          ],
          "correctIndex": 0,
          "explanation": "HTML stands for HyperText Markup Language."
        },
        {
          "question": "What is HTML's main job?",
          "options": [
            "Describe structure and meaning",
            "Choose database indexes",
            "Compile Java",
            "Replace CSS"
          ],
          "correctIndex": 0,
          "explanation": "HTML describes the structure and semantics of web content."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "anatomy",
        "of",
        "a",
        "complete",
        "html",
        "document"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-document-anatomy",
      "stage": "HTML Fundamentals",
      "order": 20,
      "title": "Anatomy of a complete HTML document",
      "summary": "Learn what belongs in doctype, html, head, and body.",
      "definition": "A standard HTML document begins with `<!doctype html>`, then contains an `<html>` root with a `<head>` for metadata and a `<body>` for visible page content.",
      "learn": [
        "DOCTYPE",
        "html root",
        "head metadata",
        "body content"
      ],
      "objective": "Recognize the minimum structure of a real HTML page.",
      "explanation": "The doctype selects modern standards mode. The html element wraps the document. The head holds metadata such as charset and title. The body contains the content users read and interact with.",
      "tip": "Add the document language on the html element early.",
      "hack": "Editor snippets can generate the shell, but you should still understand every generated line.",
      "mistake": "Do not place visible headings or paragraphs inside the head.",
      "expected": "Only body content appears in the result; head metadata stays behind the scenes.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Document anatomy</title></head><body><main><h1>My page</h1><p>This content belongs in the body.</p></main></body></html>",
      "quiz": [
        {
          "question": "Where does visible page content normally belong?",
          "options": [
            "body",
            "head",
            "doctype",
            "meta"
          ],
          "correctIndex": 0,
          "explanation": "Visible content belongs in the body."
        },
        {
          "question": "What is the doctype for?",
          "options": [
            "Modern standards mode",
            "Creating headings",
            "Loading CSS only",
            "Submitting forms"
          ],
          "correctIndex": 0,
          "explanation": "The HTML doctype selects modern standards behavior."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "elements",
        "tags",
        "and",
        "attributes"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-elements-tags-attributes",
      "stage": "HTML Fundamentals",
      "order": 30,
      "title": "Elements, tags, and attributes",
      "summary": "Separate three terms that beginners often mix together.",
      "definition": "An HTML element is the complete unit. Tags mark the element, while attributes add information or configuration inside a start tag.",
      "learn": [
        "Element",
        "Start/end tags",
        "Attributes",
        "Void elements"
      ],
      "objective": "Read HTML syntax precisely without making it feel complicated.",
      "explanation": "In `<a href=\"#about\">About</a>`, the anchor element includes the opening tag, content, and closing tag. `href` is an attribute. Some elements such as img and input are void elements and do not have closing tags.",
      "tip": "Identify the element first, then inspect the attributes that change its behavior.",
      "hack": "Boolean attributes such as `disabled` are true by being present.",
      "mistake": "Do not invent closing tags for void elements such as img, input, br, or meta.",
      "expected": "The link jumps to the About section and the disabled button cannot be activated.",
      "html": "<main><a href=\"#about\">Go to About</a> <button disabled>Unavailable</button><section id=\"about\"><h2>About</h2><p>Attributes configure elements.</p></section></main>",
      "quiz": [
        {
          "question": "In an anchor tag, what is href?",
          "options": [
            "Attribute",
            "Element name",
            "Closing tag",
            "Comment"
          ],
          "correctIndex": 0,
          "explanation": "href is an attribute."
        },
        {
          "question": "Which is a void element?",
          "options": [
            "img",
            "section",
            "p",
            "button"
          ],
          "correctIndex": 0,
          "explanation": "img is a void element."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "nesting",
        "parent",
        "child",
        "and",
        "sibling",
        "elements"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-nesting-parent-child",
      "stage": "HTML Fundamentals",
      "order": 40,
      "title": "Nesting, parent, child, and sibling elements",
      "summary": "Understand the tree structure that makes HTML predictable.",
      "definition": "HTML elements can contain other elements, creating parent, child, descendant, and sibling relationships.",
      "learn": [
        "Proper nesting",
        "Parent/child",
        "Siblings",
        "Closing order"
      ],
      "objective": "Build valid nested markup and understand its structure.",
      "explanation": "If a section contains an h2 and p, the section is their parent and the h2 and p are siblings. Nested elements normally close in reverse order of how they opened.",
      "tip": "Indent nested HTML consistently so structural mistakes are easy to see.",
      "hack": "Collapse sections in your editor and inspect the tree one level at a time.",
      "mistake": "Do not overlap tags. Close the inner element before the outer one.",
      "expected": "The article contains a heading and paragraph as sibling children.",
      "html": "<article><h2>Parent and children</h2><p>This paragraph is a sibling of the heading.</p></article>",
      "quiz": [
        {
          "question": "Two elements with the same parent are called what?",
          "options": [
            "Siblings",
            "Attributes",
            "Doctypes",
            "Metadata"
          ],
          "correctIndex": 0,
          "explanation": "They are siblings."
        },
        {
          "question": "How should nested tags normally close?",
          "options": [
            "Inner before outer",
            "Outer before inner",
            "Random order",
            "They never close"
          ],
          "correctIndex": 0,
          "explanation": "Properly nested elements close inside-out."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "comments",
        "whitespace",
        "and",
        "html",
        "entities"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-comments-whitespace-entities",
      "stage": "HTML Fundamentals",
      "order": 50,
      "title": "Comments, whitespace, and HTML entities",
      "summary": "Learn what the browser ignores, collapses, or needs encoded.",
      "definition": "HTML comments use `<!-- ... -->`; normal text collapses most repeated whitespace; character references such as `&lt;` represent characters that would otherwise be parsed as markup.",
      "learn": [
        "Comments",
        "Whitespace collapsing",
        "Character references",
        "When to use pre"
      ],
      "objective": "Write readable source without confusing text with markup.",
      "explanation": "Comments are not visible in the rendered page but are still visible in source. Normal runs of spaces usually collapse. If you need to show literal angle brackets in text, use character references.",
      "tip": "Comments should explain intent, not hide secrets.",
      "hack": "Use preformatted content when whitespace itself matters instead of adding many non-breaking spaces.",
      "mistake": "Never put passwords, API keys, or private notes in HTML comments.",
      "expected": "The page shows literal `<section>` text while the comment stays visually hidden.",
      "html": "<main><!-- Visible in source, not on page --><p>Write &lt;section&gt; ... &lt;/section&gt;.</p><p>Fish &amp; Chips</p></main>",
      "quiz": [
        {
          "question": "Are HTML comments private?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "They remain visible in source."
        },
        {
          "question": "Which reference displays a literal less-than sign?",
          "options": [
            "&lt;",
            "&gt;",
            "&amp;",
            "&copy;"
          ],
          "correctIndex": 0,
          "explanation": "&lt; represents `<`."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "from",
        "html",
        "source",
        "to",
        "the",
        "dom"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-browser-dom",
      "stage": "HTML Fundamentals",
      "order": 60,
      "title": "From HTML source to the DOM",
      "summary": "See what the browser builds from your markup.",
      "definition": "The browser parses HTML source into a tree of document nodes exposed through the DOM (Document Object Model).",
      "learn": [
        "HTML parsing",
        "DOM tree",
        "Browser error recovery",
        "Source vs Inspector"
      ],
      "objective": "Understand why browser structure can differ from malformed source.",
      "explanation": "Your file is text. The browser parses it into nodes that CSS and JavaScript can work with. Browsers repair some invalid HTML, so a page may appear okay even when the source is wrong.",
      "tip": "Compare View Source with the Elements/Inspector panel when parser behavior is confusing.",
      "hack": "Use DevTools to inspect the actual parent/child structure the browser created.",
      "mistake": "Do not treat “it rendered” as proof that the markup is valid.",
      "expected": "The nested document appears normally as a DOM tree.",
      "html": "<main><article><h1>DOM tree idea</h1><p>The browser turns source into document nodes.</p></article></main>",
      "quiz": [
        {
          "question": "What does the browser build after parsing HTML?",
          "options": [
            "A document tree / DOM",
            "A Java class",
            "A database",
            "A CSS file"
          ],
          "correctIndex": 0,
          "explanation": "The parser builds the DOM."
        },
        {
          "question": "Can browsers repair some invalid HTML?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 0,
          "explanation": "Browsers perform error recovery."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "html fundamentals",
        "emmet",
        "shortcuts",
        "faster",
        "typing",
        "same",
        "html"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-emmet-shortcuts",
      "stage": "HTML Fundamentals",
      "order": 70,
      "title": "Emmet shortcuts: faster typing, same HTML",
      "summary": "Use editor abbreviations without confusing them with real HTML syntax.",
      "definition": "Emmet is an editor productivity feature that expands abbreviations such as `ul>li*3` into normal HTML. Emmet itself is not part of the HTML language.",
      "learn": [
        "What Emmet is",
        "Common abbreviations",
        "Expanded output",
        "When readability matters more than speed"
      ],
      "objective": "Type repetitive HTML faster while still understanding the generated markup.",
      "explanation": "Instead of typing three list items by hand, many editors can expand `ul>li*3`. The browser never receives that abbreviation; your editor expands it into ordinary HTML first.",
      "tip": "Learn the HTML first, then use Emmet to reduce typing.",
      "hack": "Useful examples: `!` for a document shell, `a[href=\"#\"]`, and `ul>li*3`.",
      "mistake": "Do not paste Emmet abbreviations into production HTML and expect the browser to expand them.",
      "expected": "The browser receives and renders normal HTML, not the abbreviation.",
      "html": "<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>",
      "quiz": [
        {
          "question": "Is Emmet part of the HTML language?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Emmet is editor tooling."
        },
        {
          "question": "What happens to an Emmet abbreviation before the browser sees it?",
          "options": [
            "The editor expands it to HTML",
            "The browser compiles it",
            "CSS converts it",
            "A database stores it"
          ],
          "correctIndex": 0,
          "explanation": "The editor expands it."
        }
      ],
      "shortcut": {
        "label": "⚡ EMMET — editor shortcut",
        "longLabel": "Expanded HTML",
        "longCode": "<ul>\\n  <li></li>\\n  <li></li>\\n  <li></li>\\n</ul>",
        "shortLabel": "Emmet abbreviation",
        "shortCode": "ul>li*3",
        "note": "Useful for repetitive markup in editors that support Emmet.",
        "caution": "It is not HTML syntax. Understand and review the expanded markup."
      }
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "headings",
        "and",
        "paragraphs"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-headings-paragraphs",
      "stage": "Text & Semantic Content",
      "order": 10,
      "title": "Headings and paragraphs",
      "summary": "Give written content a clear hierarchy instead of using large text everywhere.",
      "definition": "Heading elements h1–h6 represent section headings; p represents a paragraph of prose.",
      "learn": [
        "Heading hierarchy",
        "Paragraphs",
        "Semantic rank vs visual size",
        "Clear section titles"
      ],
      "objective": "Structure written content so people and assistive technology can understand it.",
      "explanation": "A heading is not just big text. Its rank communicates hierarchy. CSS can change size separately. Paragraphs are for blocks of prose.",
      "tip": "Write headings that summarize the section below them.",
      "hack": "Use CSS for appearance instead of skipping heading levels just to get a smaller default size.",
      "mistake": "Do not use p as a generic layout wrapper for unrelated controls.",
      "expected": "The page shows one main heading and a clear subsection heading.",
      "html": "<main><h1>HTML learning guide</h1><p>Start with structure.</p><section><h2>Why headings matter</h2><p>They create content hierarchy.</p></section></main>",
      "quiz": [
        {
          "question": "What does h2 represent?",
          "options": [
            "A section heading",
            "A blue font",
            "A database field",
            "A line break"
          ],
          "correctIndex": 0,
          "explanation": "h2 represents a heading."
        },
        {
          "question": "Should heading rank be chosen only for visual size?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Choose semantic rank and style it with CSS."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "strong",
        "emphasis",
        "mark",
        "small",
        "and",
        "line"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-emphasis-meaning",
      "stage": "Text & Semantic Content",
      "order": 20,
      "title": "Strong, emphasis, mark, small, and line breaks",
      "summary": "Use text-level elements for meaning, not decoration.",
      "definition": "strong marks strong importance, em marks stress emphasis, mark highlights relevance, small represents side comments/fine print, and br creates a meaningful line break.",
      "learn": [
        "strong",
        "em",
        "mark",
        "small",
        "Appropriate br"
      ],
      "objective": "Choose text-level semantics based on meaning.",
      "explanation": "These elements may have familiar default styling, but their purpose is meaning. Use br where a line break is part of the content, not as a spacing tool.",
      "tip": "Read the sentence without styling and ask whether the emphasis still matters.",
      "hack": "If you only need visual bold/italic styling, CSS may be more appropriate than semantic emphasis.",
      "mistake": "Do not stack multiple br tags to create vertical layout spacing.",
      "expected": "Importance, emphasis, highlighting, and fine print have meaningful markup.",
      "html": "<main><p><strong>Important:</strong> Save your work.</p><p>I <em>really</em> mean it.</p><p>Result: <mark>semantic HTML</mark></p><small>Example only.</small></main>",
      "quiz": [
        {
          "question": "What does strong represent?",
          "options": [
            "Strong importance",
            "Only bold styling",
            "A link",
            "A heading"
          ],
          "correctIndex": 0,
          "explanation": "Strong conveys importance."
        },
        {
          "question": "Should repeated br tags be used for layout spacing?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Use CSS spacing for layout."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "ordered",
        "unordered",
        "and",
        "description",
        "lists"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-lists",
      "stage": "Text & Semantic Content",
      "order": 30,
      "title": "Ordered, unordered, and description lists",
      "summary": "Use the list element that matches the relationship between items.",
      "definition": "ul is an unordered list, ol is an ordered sequence, and dl groups terms with descriptions using dt and dd.",
      "learn": [
        "ul",
        "ol",
        "dl",
        "Nested lists"
      ],
      "objective": "Represent list relationships correctly.",
      "explanation": "Use ul when order does not change meaning, ol when sequence/ranking matters, and dl for term-description or name-value groups.",
      "tip": "Navigation menus are often lists of related destinations.",
      "hack": "Ordered lists support attributes such as start and reversed when numbering itself matters.",
      "mistake": "Do not use lists only to indent arbitrary text.",
      "expected": "The result shows a numbered learning sequence and term/description pairs.",
      "html": "<main><ol><li>Read</li><li>Practice</li><li>Quiz</li></ol><dl><dt>HTML</dt><dd>Structure</dd><dt>CSS</dt><dd>Presentation</dd></dl></main>",
      "quiz": [
        {
          "question": "Which list fits a sequence?",
          "options": [
            "ol",
            "ul",
            "dl",
            "div"
          ],
          "correctIndex": 0,
          "explanation": "ol is ordered."
        },
        {
          "question": "Which elements belong to a description list?",
          "options": [
            "dt and dd",
            "li only",
            "th and td",
            "option only"
          ],
          "correctIndex": 0,
          "explanation": "dt/dd define terms and descriptions."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}pre{padding:16px;background:#0d2235;color:#e8f5fb;border-radius:12px;overflow:auto}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "quotes",
        "code",
        "and",
        "preformatted",
        "text"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-quotes-code-pre",
      "stage": "Text & Semantic Content",
      "order": 40,
      "title": "Quotes, code, and preformatted text",
      "summary": "Represent quoted and code-like content with the right elements.",
      "definition": "blockquote represents a block quotation, q an inline quotation, code a code fragment, and pre preserves whitespace.",
      "learn": [
        "blockquote",
        "q",
        "code",
        "pre"
      ],
      "objective": "Use semantic elements for quoted or preformatted content.",
      "explanation": "Inline code can use code. For code blocks where line breaks and indentation matter, combine pre and code. Blockquote is for longer quotations that stand as their own block.",
      "tip": "Escape literal angle brackets inside code examples.",
      "hack": "Use pre only when preserving whitespace is part of the content.",
      "mistake": "Do not use pre as a general page-layout tool.",
      "expected": "The code block keeps its line breaks and the quotation is separated semantically.",
      "html": "<main><p>Inline: <code>&lt;main&gt;</code></p><pre><code>&lt;h1&gt;Hello&lt;/h1&gt;\\n&lt;p&gt;Structured content&lt;/p&gt;</code></pre><blockquote>Structure first, styling second.</blockquote></main>",
      "quiz": [
        {
          "question": "Which element preserves whitespace?",
          "options": [
            "pre",
            "p",
            "span",
            "mark"
          ],
          "correctIndex": 0,
          "explanation": "pre preserves whitespace."
        },
        {
          "question": "Which element represents code?",
          "options": [
            "code",
            "q",
            "small",
            "aside"
          ],
          "correctIndex": 0,
          "explanation": "code represents code fragments."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}.card{padding:20px;background:white;border-radius:12px}.status{font-weight:800;color:#0a8a66}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "div",
        "and",
        "span",
        "useful",
        "but",
        "not"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-div-span",
      "stage": "Text & Semantic Content",
      "order": 50,
      "title": "div and span: useful, but not your first answer",
      "summary": "Understand neutral containers and when semantic elements are better.",
      "definition": "div is a generic block container and span is a generic inline container; neither adds special semantic meaning by itself.",
      "learn": [
        "div",
        "span",
        "Semantic alternatives",
        "Neutral wrappers"
      ],
      "objective": "Use generic containers intentionally.",
      "explanation": "Use div/span when no more meaningful element fits. If the content is navigation, use nav. If it is a self-contained article, use article. Semantics reduce guesswork.",
      "tip": "Try to name the content's role. If HTML has an element for that role, start there.",
      "hack": "Span is useful as a small inline styling or scripting hook.",
      "mistake": "Do not build an entire page from nested divs when semantic elements exist.",
      "expected": "The status text uses span while the surrounding content uses semantic elements.",
      "html": "<main><article class=\"card\"><h1>Semantic first</h1><p>Status: <span class=\"status\">Ready</span></p></article></main>",
      "quiz": [
        {
          "question": "What meaning does div have by itself?",
          "options": [
            "No special semantics",
            "Navigation",
            "Article",
            "Heading"
          ],
          "correctIndex": 0,
          "explanation": "div is generic."
        },
        {
          "question": "When is span useful?",
          "options": [
            "Neutral inline grouping",
            "Creating tables only",
            "Replacing body",
            "Defining metadata"
          ],
          "correctIndex": 0,
          "explanation": "span is a neutral inline container."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "section",
        "article",
        "and",
        "aside"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-section-article-aside",
      "stage": "Text & Semantic Content",
      "order": 60,
      "title": "section, article, and aside",
      "summary": "Choose containers based on what the content means.",
      "definition": "section groups a thematic section, article represents self-contained content, and aside contains complementary content.",
      "learn": [
        "section",
        "article",
        "aside",
        "When div is still better"
      ],
      "objective": "Differentiate common semantic sectioning elements.",
      "explanation": "A section typically has a heading and groups related content. An article can stand on its own. Aside is complementary content. Not every wrapper needs a semantic sectioning tag.",
      "tip": "If you cannot explain what a section is about, it may only be a styling wrapper.",
      "hack": "Articles can contain sections and sections can contain articles; use meaning, not rigid recipes.",
      "mistake": "Do not replace every div with section.",
      "expected": "The article contains a main section and related aside.",
      "html": "<main><article><h1>Learning note</h1><section><h2>Main idea</h2><p>Use elements for meaning.</p></section><aside><h2>Related tip</h2><p>Check the structure.</p></aside></article></main>",
      "quiz": [
        {
          "question": "Which element best represents self-contained content?",
          "options": [
            "article",
            "span",
            "br",
            "meta"
          ],
          "correctIndex": 0,
          "explanation": "article represents self-contained content."
        },
        {
          "question": "Should every visual wrapper be section?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Section is for thematic content."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}header,nav,footer{max-width:700px;margin:0 auto 12px}",
      "js": "",
      "tags": [
        "html",
        "text & semantic content",
        "header",
        "nav",
        "main",
        "and",
        "footer",
        "landmarks"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-semantic-landmarks",
      "stage": "Text & Semantic Content",
      "order": 70,
      "title": "header, nav, main, and footer landmarks",
      "summary": "Give large regions of a page recognizable roles.",
      "definition": "header, nav, main, and footer are semantic elements that identify major document or section regions.",
      "learn": [
        "header",
        "nav",
        "main",
        "footer",
        "Landmarks"
      ],
      "objective": "Build a page shell that communicates its major regions.",
      "explanation": "Landmarks help users and tools understand page regions. A document normally has one primary main region. nav should wrap major navigation, not every link group.",
      "tip": "Use native landmark elements before adding equivalent ARIA roles.",
      "hack": "Label multiple nav regions so users can distinguish them.",
      "mistake": "Do not put site-wide header/footer content inside main.",
      "expected": "The page exposes a header, primary navigation, main content, and footer.",
      "html": "<header><strong>Knowledge Lab</strong></header><nav aria-label=\"Primary\"><a href=\"#lesson\">Lesson</a></nav><main id=\"lesson\"><h1>Landmarks</h1><p>Main content.</p></main><footer>Demo footer</footer>",
      "quiz": [
        {
          "question": "Which element identifies primary document content?",
          "options": [
            "main",
            "footer",
            "span",
            "small"
          ],
          "correctIndex": 0,
          "explanation": "main identifies primary content."
        },
        {
          "question": "Should every link group use nav?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "nav is for major navigation areas."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "links & images",
        "links",
        "fragments",
        "and",
        "useful",
        "link",
        "text"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-links",
      "stage": "Links & Images",
      "order": 10,
      "title": "Links, fragments, and useful link text",
      "summary": "Build links that explain where they go.",
      "definition": "The a element creates hyperlinks; href can point to another URL, file, or fragment ID.",
      "learn": [
        "href",
        "Fragment links",
        "Descriptive link text",
        "target/rel basics"
      ],
      "objective": "Create understandable navigation links.",
      "explanation": "A fragment such as #details targets an element with id=\"details\". Link text should describe the destination; “Read the forms guide” is clearer than “click here.”",
      "tip": "Test links with keyboard navigation and read the text out of context.",
      "hack": "Use internal fragment links for long documents and skip links.",
      "mistake": "Do not use href=\"#\" as a fake button for non-navigation actions.",
      "expected": "The link jumps to the details section.",
      "html": "<main><a href=\"#details\">Read lesson details</a><section id=\"details\"><h1>Lesson details</h1><p>The fragment link points here.</p></section></main>",
      "quiz": [
        {
          "question": "What does href=\"#details\" target?",
          "options": [
            "An element with id=details",
            "A CSS class",
            "A database row",
            "A file"
          ],
          "correctIndex": 0,
          "explanation": "Fragments target IDs."
        },
        {
          "question": "Which link text is clearer?",
          "options": [
            "Read the HTML forms guide",
            "Click here"
          ],
          "correctIndex": 0,
          "explanation": "Descriptive text is clearer."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "links & images",
        "relative",
        "and",
        "absolute",
        "paths"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-relative-absolute-paths",
      "stage": "Links & Images",
      "order": 20,
      "title": "Relative and absolute paths",
      "summary": "Understand why a file works locally but breaks after deployment.",
      "definition": "Absolute URLs include a complete location; relative URLs resolve from the current document or site path.",
      "learn": [
        "Relative paths",
        "Parent paths",
        "Root-relative paths",
        "Absolute URLs"
      ],
      "objective": "Choose paths that match the deployed folder structure.",
      "explanation": "images/photo.jpg is relative to the current document. ../ moves up a directory. /assets/logo.svg is root-relative to the site origin. Full https URLs are absolute.",
      "tip": "Sketch the folder tree before guessing path segments.",
      "hack": "Inspect the resolved URL in DevTools when an asset 404s.",
      "mistake": "Do not use local Windows paths in deployed HTML.",
      "expected": "The example lists path types without making a network request.",
      "html": "<main><ul><li><code>images/photo.jpg</code> — relative</li><li><code>../images/photo.jpg</code> — parent-relative</li><li><code>/assets/logo.svg</code> — root-relative</li></ul></main>",
      "quiz": [
        {
          "question": "What does ../ usually mean?",
          "options": [
            "Move up one directory",
            "Open new tab",
            "Use HTTPS",
            "Create ID"
          ],
          "correctIndex": 0,
          "explanation": "../ resolves from the parent directory."
        },
        {
          "question": "Is C:\\\\images\\\\photo.jpg a portable website URL?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Local filesystem paths are not deployed web URLs."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}img{display:block;max-width:100%;height:auto;border-radius:14px}",
      "js": "",
      "tags": [
        "html",
        "links & images",
        "images",
        "alt",
        "text",
        "width",
        "and",
        "height"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-images-alt",
      "stage": "Links & Images",
      "order": 30,
      "title": "Images, alt text, width, and height",
      "summary": "Add images without treating alt text as an afterthought.",
      "definition": "img embeds an image; src provides the resource, alt provides a text alternative, and width/height can provide intrinsic dimensions.",
      "learn": [
        "src",
        "alt",
        "Decorative images",
        "Intrinsic dimensions"
      ],
      "objective": "Write image markup that remains useful when the image cannot be seen.",
      "explanation": "Alt text should communicate the image's purpose in context. Decorative images can use alt=\"\". Width and height help the browser reserve space and reduce layout movement.",
      "tip": "Ask what you would say if the image failed to load.",
      "hack": "Avoid repeating a nearby caption word-for-word in alt text.",
      "mistake": "Do not use filenames such as IMG_4832.jpg as alt text.",
      "expected": "A responsive image appears with meaningful alternative text and dimensions.",
      "html": "<main><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" alt=\"Blue HTML lesson example graphic\" width=\"640\" height=\"360\"><p>Meaningful image markup.</p></main>",
      "quiz": [
        {
          "question": "What should a decorative image usually use?",
          "options": [
            "alt=\"\"",
            "Filename as alt",
            "No src",
            "role=button"
          ],
          "correctIndex": 0,
          "explanation": "Empty alt hides purely decorative images from assistive tech."
        },
        {
          "question": "Why include width and height?",
          "options": [
            "Reserve layout space",
            "Replace alt",
            "Create links",
            "Change format"
          ],
          "correctIndex": 0,
          "explanation": "Dimensions help layout stability."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}figure{padding:16px;background:white;border-radius:14px}img{width:100%;height:auto;border-radius:10px}",
      "js": "",
      "tags": [
        "html",
        "links & images",
        "figure",
        "and",
        "figcaption"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-figure-figcaption",
      "stage": "Links & Images",
      "order": 40,
      "title": "figure and figcaption",
      "summary": "Connect self-contained visual content with a visible caption.",
      "definition": "figure wraps self-contained content and figcaption provides its caption.",
      "learn": [
        "figure",
        "figcaption",
        "Caption vs alt",
        "When figure fits"
      ],
      "objective": "Pair media/examples with captions correctly.",
      "explanation": "A figure can contain an image, chart, or code sample. Its caption is visible supporting context. Alt text remains the image's text alternative; the two roles are different.",
      "tip": "Use figure when content and caption form a meaningful unit.",
      "hack": "Figcaption can be the first or last child of figure.",
      "mistake": "Do not wrap every image in figure automatically.",
      "expected": "The image and caption are grouped as one figure.",
      "html": "<figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" alt=\"Blue HTML example graphic\" width=\"640\" height=\"360\"><figcaption>Figure 1. HTML lesson placeholder visual.</figcaption></figure>",
      "quiz": [
        {
          "question": "What does figcaption provide?",
          "options": [
            "Visible figure caption",
            "Image source",
            "CSS class",
            "Form label"
          ],
          "correctIndex": 0,
          "explanation": "figcaption captions the figure."
        },
        {
          "question": "Does figcaption always replace alt text?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Caption and alt have different roles."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}picture,img{display:block;max-width:100%;height:auto;margin:auto}",
      "js": "",
      "tags": [
        "html",
        "links & images",
        "picture",
        "srcset",
        "and",
        "responsive",
        "images"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-picture-responsive",
      "stage": "Links & Images",
      "order": 50,
      "title": "picture, srcset, and responsive images",
      "summary": "Let the browser choose an image source that fits the context.",
      "definition": "picture can provide alternative sources, while srcset/sizes help browsers choose appropriate image resources.",
      "learn": [
        "picture",
        "source",
        "srcset",
        "sizes",
        "Art direction"
      ],
      "objective": "Understand responsive image markup.",
      "explanation": "Resolution switching helps choose an appropriate file size; art direction offers different crops/compositions. A real img remains the fallback/content element inside picture.",
      "tip": "Always keep a real img with alt text inside picture.",
      "hack": "Generate real image variants; markup cannot invent missing optimized files.",
      "mistake": "Do not create a complex srcset where every candidate is the same oversized file.",
      "expected": "The picture element renders its img fallback safely in the sandbox.",
      "html": "<picture><source media=\"(max-width:520px)\" srcset=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\"><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" alt=\"Responsive HTML example\" width=\"640\" height=\"360\"></picture>",
      "quiz": [
        {
          "question": "Which element remains the fallback inside picture?",
          "options": [
            "img",
            "source",
            "link",
            "meta"
          ],
          "correctIndex": 0,
          "explanation": "img remains required."
        },
        {
          "question": "What is art direction?",
          "options": [
            "Different composition/crop by condition",
            "Changing alt with CSS",
            "Compressing HTML",
            "Adding a database"
          ],
          "correctIndex": 0,
          "explanation": "Art direction changes visual composition."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:10px;max-width:360px}input,button{padding:10px 12px;border:1px solid #b9c9d5;border-radius:9px}button{background:#0879b7;color:white}",
      "js": "document.querySelector(\"#helloForm\").addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const name = document.querySelector(\"#name\").value.trim();\n  document.querySelector(\"#message\").textContent = name ? \"Hello, \" + name + \"!\" : \"Please enter your name.\";\n});",
      "tags": [
        "html",
        "forms & user input",
        "make",
        "a",
        "usable",
        "form"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-accessible-form",
      "stage": "Forms & User Input",
      "order": 10,
      "title": "Make a usable form",
      "summary": "Pair a real label with an input and submit safely inside the lesson.",
      "definition": "form groups controls for collecting input; label identifies a control, commonly through for matching the control id.",
      "learn": [
        "form",
        "label + input",
        "button type",
        "Submission behavior"
      ],
      "objective": "Build a small keyboard-friendly form.",
      "explanation": "A visible label tells users what the field means and gives assistive technology an accessible name. This lesson prevents navigation only so the browser IDE can display the submitted value.",
      "tip": "Click the label text: its input should receive focus.",
      "hack": "Use native form controls first; they bring built-in keyboard behavior.",
      "mistake": "Do not rely on placeholder text as the only label.",
      "expected": "Entering Juan Dela Cruz and submitting shows `Hello, Juan Dela Cruz!`.",
      "html": "<form id=\"helloForm\"><label for=\"name\">Your name</label><input id=\"name\" name=\"name\" autocomplete=\"name\" required><button type=\"submit\">Submit</button></form><p id=\"message\" aria-live=\"polite\"></p>",
      "quiz": [
        {
          "question": "Why connect a label to an input?",
          "options": [
            "Identify the control clearly",
            "Load CSS",
            "Create DB",
            "Hide input"
          ],
          "correctIndex": 0,
          "explanation": "Labels provide an accessible name."
        },
        {
          "question": "Is placeholder a complete replacement for a label?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Placeholders are not robust labels."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:8px;max-width:360px}input{padding:10px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "label",
        "name",
        "value",
        "and",
        "form",
        "data"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-label-name-value",
      "stage": "Forms & User Input",
      "order": 20,
      "title": "label, name, value, and form data",
      "summary": "Know which attributes identify fields to people and to submitted data.",
      "definition": "label provides the human-facing name; name identifies a field in form data; value is the associated submitted value.",
      "learn": [
        "for/id",
        "name",
        "value",
        "id vs name"
      ],
      "objective": "Understand why a visible input can still be missing from submitted data.",
      "explanation": "id connects labels and references. name becomes the key in form data. They often use the same text but do different jobs.",
      "tip": "Inspect FormData when debugging which controls are included.",
      "hack": "Use semantic names such as email or quantity, not visual names such as leftBox.",
      "mistake": "Do not assume id automatically becomes the submitted name.",
      "expected": "The email field has both a label relationship and a form-data key.",
      "html": "<form><label for=\"email\">Email</label><input id=\"email\" name=\"email\" value=\"name@example.com\"></form>",
      "quiz": [
        {
          "question": "Which attribute becomes a form-data key?",
          "options": [
            "name",
            "id",
            "class",
            "title"
          ],
          "correctIndex": 0,
          "explanation": "name identifies the field in form data."
        },
        {
          "question": "What commonly connects a label to an input?",
          "options": [
            "for + id",
            "class + style",
            "name + placeholder",
            "method + action"
          ],
          "correctIndex": 0,
          "explanation": "for matches id."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:12px;max-width:360px}label{display:grid;gap:6px}input{padding:8px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "choose",
        "useful",
        "input",
        "types"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-input-types",
      "stage": "Forms & User Input",
      "order": 30,
      "title": "Choose useful input types",
      "summary": "Let the browser understand whether a field is email, number, date, password, checkbox, and more.",
      "definition": "The input type attribute changes the semantics and built-in behavior of an input control.",
      "learn": [
        "Common input types",
        "Checkbox vs radio",
        "Email/date/number",
        "When text is better"
      ],
      "objective": "Choose a control type that matches the data.",
      "explanation": "Input types can provide validation and better virtual keyboards. But number is for numeric quantities—not phone numbers, postal codes, or IDs that merely contain digits.",
      "tip": "Ask whether arithmetic makes sense on the value. If not, number may be wrong.",
      "hack": "Pair type=email with autocomplete=email for real email fields.",
      "mistake": "Do not use number for phone numbers or identifiers with leading zeros.",
      "expected": "The form uses email, quantity, and checkbox controls with appropriate types.",
      "html": "<form><label>Email <input type=\"email\" name=\"email\"></label><label>Quantity <input type=\"number\" name=\"qty\" min=\"1\" step=\"1\"></label><label><input type=\"checkbox\" name=\"updates\"> Send updates</label></form>",
      "quiz": [
        {
          "question": "Which type fits an email address?",
          "options": [
            "email",
            "number",
            "range",
            "color"
          ],
          "correctIndex": 0,
          "explanation": "email communicates email semantics."
        },
        {
          "question": "Should phone numbers normally use number?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Phone numbers are identifiers/text."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:10px;max-width:420px}input,button{padding:10px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "built",
        "in",
        "form",
        "validation",
        "attributes"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-form-validation",
      "stage": "Forms & User Input",
      "order": 40,
      "title": "Built-in form validation attributes",
      "summary": "Use required, minlength, maxlength, min, max, and pattern appropriately.",
      "definition": "HTML constraint-validation attributes let browsers check common input requirements before normal submission.",
      "learn": [
        "required",
        "minlength/maxlength",
        "min/max",
        "pattern",
        "Server validation still required"
      ],
      "objective": "Use native constraints for basic rules.",
      "explanation": "Native validation improves UX but cannot be trusted as the only security or data-integrity layer. Backends must validate again.",
      "tip": "Give users a visible instruction before enforcing a strict pattern.",
      "hack": "Use native validation first for simple cases before writing custom JavaScript.",
      "mistake": "Do not rely on HTML validation alone for backend security.",
      "expected": "The browser blocks invalid product codes on normal submission.",
      "html": "<form><label for=\"code\">Product code (3–8 uppercase letters/numbers)</label><input id=\"code\" name=\"code\" required minlength=\"3\" maxlength=\"8\" pattern=\"[A-Z0-9]+\"><button>Validate</button></form>",
      "quiz": [
        {
          "question": "Is client-side validation enough for backend security?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Server validation is still required."
        },
        {
          "question": "Which attribute makes a field mandatory?",
          "options": [
            "required",
            "checked",
            "selected",
            "multiple"
          ],
          "correctIndex": 0,
          "explanation": "required participates in validation."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}fieldset{display:grid;gap:8px;border:1px solid #cbdbe5;border-radius:12px;padding:16px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "group",
        "controls",
        "with",
        "fieldset",
        "and",
        "legend"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-fieldset-legend",
      "stage": "Forms & User Input",
      "order": 50,
      "title": "Group controls with fieldset and legend",
      "summary": "Give radio and checkbox groups a clear shared question.",
      "definition": "fieldset groups related form controls; legend provides the group's caption or question.",
      "learn": [
        "fieldset",
        "legend",
        "Radio groups",
        "Grouped choices"
      ],
      "objective": "Make groups of choices understandable as one unit.",
      "explanation": "Individual radio labels name each choice, while legend names the shared question. Radios belong to one exclusive group when they share a name.",
      "tip": "Write the legend like the question users are answering.",
      "hack": "Use fieldset for genuine related groups, not decoration.",
      "mistake": "Do not use fieldset only to get a border around unrelated controls.",
      "expected": "Two radio options belong to one clearly labeled contact-method group.",
      "html": "<form><fieldset><legend>Preferred contact method</legend><label><input type=\"radio\" name=\"contact\" value=\"email\" checked> Email</label><label><input type=\"radio\" name=\"contact\" value=\"phone\"> Phone</label></fieldset></form>",
      "quiz": [
        {
          "question": "What labels a fieldset?",
          "options": [
            "legend",
            "caption",
            "summary",
            "title only"
          ],
          "correctIndex": 0,
          "explanation": "legend captions a fieldset."
        },
        {
          "question": "How do radio buttons form one group?",
          "options": [
            "Share the same name",
            "Share a class",
            "Use same id",
            "Use br"
          ],
          "correctIndex": 0,
          "explanation": "Same-name radios form a group."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:8px;max-width:400px}select,textarea,button{padding:10px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "select",
        "textarea",
        "and",
        "button"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-select-textarea-button",
      "stage": "Forms & User Input",
      "order": 60,
      "title": "select, textarea, and button",
      "summary": "Use native controls instead of recreating them from divs.",
      "definition": "select provides a fixed choice list, textarea accepts multiline text, and button triggers form or interface actions.",
      "learn": [
        "select/option",
        "textarea",
        "button types",
        "Default submit behavior"
      ],
      "objective": "Choose native controls that match the interaction.",
      "explanation": "A button inside a form defaults to submit. Use type=button for non-submit actions. Textarea is for multiline free text; select is for a known set of options.",
      "tip": "Always set button type in reusable components.",
      "hack": "Use optgroup when long option lists benefit from meaningful groups.",
      "mistake": "Do not use a clickable div instead of a real button.",
      "expected": "The form shows a select, multiline notes field, and non-submit preview button.",
      "html": "<form><label for=\"topic\">Topic</label><select id=\"topic\" name=\"topic\"><option>HTML</option><option>CSS</option></select><label for=\"notes\">Notes</label><textarea id=\"notes\" name=\"notes\" rows=\"4\"></textarea><button type=\"button\">Preview only</button></form>",
      "quiz": [
        {
          "question": "What is a button's default type inside a form?",
          "options": [
            "submit",
            "button",
            "reset only",
            "link"
          ],
          "correctIndex": 0,
          "explanation": "Button defaults to submit."
        },
        {
          "question": "Which control accepts multiline free text?",
          "options": [
            "textarea",
            "select",
            "option",
            "meter"
          ],
          "correctIndex": 0,
          "explanation": "textarea is multiline."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}form{display:grid;gap:8px;max-width:360px}input{padding:10px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "autocomplete",
        "and",
        "inputmode"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-autocomplete-inputmode",
      "stage": "Forms & User Input",
      "order": 70,
      "title": "autocomplete and inputmode",
      "summary": "Help browsers and mobile keyboards understand what users are entering.",
      "definition": "autocomplete describes a field's purpose to autofill systems; inputmode hints which virtual keyboard layout is useful.",
      "learn": [
        "Autocomplete tokens",
        "inputmode",
        "Type vs keyboard hint",
        "Mobile UX"
      ],
      "objective": "Improve form speed without changing data semantics incorrectly.",
      "explanation": "inputmode can request a numeric keyboard without turning an identifier into a number field. autocomplete tokens help browsers fill known information such as email or postal code.",
      "tip": "Use correct autocomplete tokens instead of disabling autofill globally.",
      "hack": "one-time-code can improve OTP entry on supported platforms.",
      "mistake": "Do not use autocomplete=off everywhere by habit.",
      "expected": "The fields expose appropriate autofill and keyboard hints.",
      "html": "<form><label for=\"postal\">Postal code</label><input id=\"postal\" name=\"postal\" inputmode=\"numeric\" autocomplete=\"postal-code\"><label for=\"mail\">Email</label><input id=\"mail\" type=\"email\" autocomplete=\"email\"></form>",
      "quiz": [
        {
          "question": "What does inputmode mainly influence?",
          "options": [
            "Virtual keyboard hint",
            "Submitted name",
            "CSS specificity",
            "Heading level"
          ],
          "correctIndex": 0,
          "explanation": "inputmode hints keyboard layout."
        },
        {
          "question": "What does autocomplete describe?",
          "options": [
            "Field purpose to autofill systems",
            "Animation speed",
            "Table header",
            "Path"
          ],
          "correctIndex": 0,
          "explanation": "Autocomplete tokens identify field purpose."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}label{display:block;margin-bottom:8px}input{padding:10px;min-width:280px}",
      "js": "",
      "tags": [
        "html",
        "forms & user input",
        "datalist",
        "suggestions"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-datalist",
      "stage": "Forms & User Input",
      "order": 80,
      "title": "datalist suggestions",
      "summary": "Offer suggestions while still allowing free text.",
      "definition": "datalist provides suggested values to a compatible input through the input's list attribute.",
      "learn": [
        "datalist",
        "list",
        "Suggestion vs restriction",
        "When select is better"
      ],
      "objective": "Choose between free text with suggestions and a fixed select.",
      "explanation": "Datalist lets users type something not listed. Select is better when only predefined choices are valid.",
      "tip": "Use datalist for short suggestion lists; rich search may need a proper combobox pattern.",
      "hack": "Keep option values meaningful because users may see them directly.",
      "mistake": "Do not use datalist when values must be restricted to the list.",
      "expected": "Typing in the browser field can reveal suggested browser names.",
      "html": "<label for=\"browser\">Favorite browser</label><input id=\"browser\" list=\"browser-options\"><datalist id=\"browser-options\"><option value=\"Chrome\"><option value=\"Firefox\"><option value=\"Safari\"><option value=\"Edge\"></datalist>",
      "quiz": [
        {
          "question": "Does datalist force users to choose listed values only?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Datalist suggestions are not a strict restriction."
        },
        {
          "question": "Which control fits a fixed set of allowed choices?",
          "options": [
            "select",
            "datalist always",
            "pre",
            "figure"
          ],
          "correctIndex": 0,
          "explanation": "select constrains choices."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}table{width:100%;border-collapse:collapse}th,td{padding:10px;border-bottom:1px solid #d8e3ea;text-align:left}",
      "js": "",
      "tags": [
        "html",
        "tables & structured data",
        "table",
        "anatomy"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-table-basics",
      "stage": "Tables & Structured Data",
      "order": 10,
      "title": "Table anatomy",
      "summary": "Represent real row-and-column data with real table markup.",
      "definition": "table represents tabular data; tr creates rows, th creates header cells, and td creates data cells.",
      "learn": [
        "table",
        "tr",
        "th/td",
        "thead/tbody"
      ],
      "objective": "Build a basic data table without using tables for page layout.",
      "explanation": "Tables are for data where row and column relationships matter: inventory, schedules, reports, prices. CSS Grid is better for visual page layout.",
      "tip": "Read data by row and column. If both relationships matter, a table is likely appropriate.",
      "hack": "Use thead/tbody to make large tables easier to style and reason about.",
      "mistake": "Do not use tables to position unrelated page sections.",
      "expected": "The table shows products, stock, and prices in aligned rows and columns.",
      "html": "<table><thead><tr><th>Product</th><th>Stock</th><th>Price</th></tr></thead><tbody><tr><td>Liempo</td><td>12</td><td>₱145</td></tr><tr><td>Chicken</td><td>8</td><td>₱120</td></tr></tbody></table>",
      "quiz": [
        {
          "question": "Which element is a header cell?",
          "options": [
            "th",
            "td",
            "tr",
            "li"
          ],
          "correctIndex": 0,
          "explanation": "th represents a header cell."
        },
        {
          "question": "Should tables be used for general page layout?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Tables are for tabular data."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}table{width:100%;border-collapse:collapse}caption{font-weight:800;margin-bottom:8px}th,td{padding:10px;border:1px solid #d8e3ea}",
      "js": "",
      "tags": [
        "html",
        "tables & structured data",
        "captions",
        "and",
        "header",
        "scope"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-accessible-tables",
      "stage": "Tables & Structured Data",
      "order": 20,
      "title": "Captions and header scope",
      "summary": "Help users understand what a table is and which headers apply.",
      "definition": "caption names a table; scope on simple th cells can explicitly identify row or column header relationships.",
      "learn": [
        "caption",
        "scope=col",
        "scope=row",
        "Header relationships"
      ],
      "objective": "Improve table context and navigation.",
      "explanation": "Caption tells users what the table represents. scope can clarify simple row/column header direction. Complex tables often benefit from simpler designs.",
      "tip": "Place caption inside table as its first child.",
      "hack": "Keep tables simple when possible; simpler relationships are easier for everyone.",
      "mistake": "Do not style plain td cells bold and assume they become semantic headers.",
      "expected": "The table has a caption and row/column headers.",
      "html": "<table><caption>Current stock</caption><thead><tr><th scope=\"col\">Product</th><th scope=\"col\">Boxes</th></tr></thead><tbody><tr><th scope=\"row\">Chicken</th><td>8</td></tr><tr><th scope=\"row\">Pork</th><td>5</td></tr></tbody></table>",
      "quiz": [
        {
          "question": "What does caption provide?",
          "options": [
            "Table title/context",
            "CSS class",
            "Submit button",
            "File path"
          ],
          "correctIndex": 0,
          "explanation": "caption describes the table."
        },
        {
          "question": "What can scope=col communicate?",
          "options": [
            "Header applies to a column",
            "Table is hidden",
            "Row is clickable",
            "Page language"
          ],
          "correctIndex": 0,
          "explanation": "It identifies a column header."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}video{display:block;max-width:100%;margin:auto;border-radius:14px;background:#0d2235}",
      "js": "",
      "tags": [
        "html",
        "media & embeds",
        "audio",
        "and",
        "video",
        "elements"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-audio-video",
      "stage": "Media & Embeds",
      "order": 10,
      "title": "Audio and video elements",
      "summary": "Use native media controls and provide fallback information.",
      "definition": "audio and video embed media; controls exposes native playback controls.",
      "learn": [
        "audio/video",
        "controls",
        "source",
        "poster",
        "Fallback text"
      ],
      "objective": "Understand native media markup before custom controls.",
      "explanation": "Native media elements support controls, sources, preload hints, and video posters. This sandbox shows the video shell/poster but intentionally loads no external media file.",
      "tip": "Start with native controls; custom controls require more accessibility work.",
      "hack": "preload=metadata can request basic media metadata without eagerly loading the full file.",
      "mistake": "Do not autoplay audible media unexpectedly.",
      "expected": "A native video player shell appears with the lesson poster.",
      "html": "<video controls preload=\"metadata\" poster=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" width=\"640\"><p>Your browser does not support embedded video.</p></video>",
      "quiz": [
        {
          "question": "Which attribute shows native media controls?",
          "options": [
            "controls",
            "selected",
            "required",
            "scope"
          ],
          "correctIndex": 0,
          "explanation": "controls exposes playback controls."
        },
        {
          "question": "Should audible media autoplay by default?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Unexpected audible autoplay is disruptive."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}video{max-width:100%;border-radius:14px;background:#0d2235}",
      "js": "",
      "tags": [
        "html",
        "media & embeds",
        "captions",
        "with",
        "track"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-track-captions",
      "stage": "Media & Embeds",
      "order": 20,
      "title": "Captions with track",
      "summary": "Plan text alternatives for spoken video content.",
      "definition": "track connects timed text such as captions or subtitles to audio/video, commonly using WebVTT.",
      "learn": [
        "track",
        "captions vs subtitles",
        "kind",
        "srclang"
      ],
      "objective": "Know where caption files connect to media markup.",
      "explanation": "Captions include dialogue plus relevant sound information; subtitles generally translate dialogue. A production track needs a valid WebVTT file.",
      "tip": "Treat captions as part of the content pipeline, not a last-minute patch.",
      "hack": "Use language codes and labels when offering multiple tracks.",
      "mistake": "Do not assume burned-in text replaces selectable captions in every context.",
      "expected": "The source shows where a captions track belongs in a video element.",
      "html": "<video controls poster=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" width=\"640\"><track kind=\"captions\" srclang=\"en\" label=\"English captions\"><p>Video fallback text.</p></video>",
      "quiz": [
        {
          "question": "Which track kind includes dialogue and sound cues?",
          "options": [
            "captions",
            "poster",
            "metadata only",
            "image"
          ],
          "correctIndex": 0,
          "explanation": "Captions include speech and meaningful audio cues."
        },
        {
          "question": "What format is commonly used for HTML timed text?",
          "options": [
            "WebVTT",
            "CSV",
            "DOCX",
            "SQL"
          ],
          "correctIndex": 0,
          "explanation": "WebVTT is the common timed-text format."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}iframe{border:1px solid #cbdbe5;border-radius:12px;background:white}",
      "js": "",
      "tags": [
        "html",
        "media & embeds",
        "iframes",
        "title",
        "and",
        "sandbox"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-iframe-sandbox",
      "stage": "Media & Embeds",
      "order": 30,
      "title": "iframes, title, and sandbox",
      "summary": "Embed another document with an explicit security boundary.",
      "definition": "iframe embeds another browsing context; title identifies its purpose and sandbox restricts its capabilities.",
      "learn": [
        "iframe",
        "title",
        "sandbox",
        "Least privilege"
      ],
      "objective": "Embed content without granting unnecessary capabilities.",
      "explanation": "An iframe contains another document. Give it a meaningful title and start with restrictive sandbox permissions. This example uses srcdoc so it stays local and network-free.",
      "tip": "Start with the most restrictive sandbox, then add only required permissions.",
      "hack": "Use loading=lazy for below-the-fold embeds when immediate loading is unnecessary.",
      "mistake": "Do not grant broad iframe permissions casually.",
      "expected": "A small sandboxed embedded document appears inside the lesson.",
      "html": "<main><iframe title=\"Small embedded lesson preview\" sandbox srcdoc=\"<p style='font-family:sans-serif;padding:16px'>Hello from a sandboxed iframe.</p>\" width=\"100%\" height=\"120\"></iframe></main>",
      "quiz": [
        {
          "question": "Why give an iframe a title?",
          "options": [
            "Identify its purpose",
            "Increase z-index",
            "Create CSS class",
            "Submit form"
          ],
          "correctIndex": 0,
          "explanation": "A title helps identify the frame."
        },
        {
          "question": "What is a good sandbox principle?",
          "options": [
            "Grant only needed capabilities",
            "Allow everything",
            "Remove title",
            "No restrictions"
          ],
          "correctIndex": 0,
          "explanation": "Use least privilege."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}button{padding:10px 14px;border:0;border-radius:9px;background:#0879b7;color:white}",
      "js": "",
      "tags": [
        "html",
        "accessibility by default",
        "native",
        "html",
        "first",
        "aria",
        "second"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-native-before-aria",
      "stage": "Accessibility by Default",
      "order": 10,
      "title": "Native HTML first, ARIA second",
      "summary": "Use the element that already has the behavior and semantics you need.",
      "definition": "Native HTML carries built-in semantics and behavior. ARIA can add or clarify semantics, but it does not automatically add keyboard behavior.",
      "learn": [
        "Native semantics",
        "ARIA's role",
        "First rule of ARIA",
        "Custom widget cost"
      ],
      "objective": "Prefer real buttons, links, inputs, and landmarks before recreating them.",
      "explanation": "A button already supports keyboard activation, focus, and button semantics. A div with role=button still needs behavior and state handling. ARIA is useful when native HTML cannot express the needed semantics.",
      "tip": "If a native element solves the problem, use it first.",
      "hack": "Audit custom controls for keyboard behavior before adding more ARIA labels.",
      "mistake": "Do not add role=button to a div and assume it behaves like a button.",
      "expected": "The example uses a real native button.",
      "html": "<main><button type=\"button\">Native action</button><p>Use built-in semantics first.</p></main>",
      "quiz": [
        {
          "question": "What should usually come before ARIA for common controls?",
          "options": [
            "Native HTML",
            "A div with role",
            "CSS only",
            "Canvas"
          ],
          "correctIndex": 0,
          "explanation": "Native controls already provide semantics and behavior."
        },
        {
          "question": "Does role=button automatically add keyboard activation?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "ARIA does not implement all behavior."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}.control{display:inline-block;margin:6px;padding:10px 14px;border-radius:9px;border:1px solid #0879b7;background:white;color:#0879b7;text-decoration:none}",
      "js": "",
      "tags": [
        "html",
        "accessibility by default",
        "button",
        "or",
        "link",
        "choose",
        "by",
        "intent"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-buttons-vs-links",
      "stage": "Accessibility by Default",
      "order": 20,
      "title": "Button or link? Choose by intent",
      "summary": "Navigation and actions are not the same interaction.",
      "definition": "A link navigates to a resource/location; a button triggers an action in the current interface.",
      "learn": [
        "Navigation vs action",
        "Anchor href",
        "Button type",
        "User expectations"
      ],
      "objective": "Choose controls based on what happens when activated.",
      "explanation": "If activation changes location, use a link. If it saves, toggles, opens, or changes interface state, use a button. CSS can make either look similar.",
      "tip": "Read the text as a verb: “Go to Pricing” suggests a link; “Save changes” suggests a button.",
      "hack": "Style a link like a button when it is still navigation.",
      "mistake": "Do not use href=javascript: to turn an anchor into an action control.",
      "expected": "One control navigates; the other remains a button action.",
      "html": "<main><a href=\"#pricing\" class=\"control\">Go to Pricing</a><button type=\"button\" class=\"control\">Save changes</button><section id=\"pricing\"><h2>Pricing</h2></section></main>",
      "quiz": [
        {
          "question": "Which element fits “Save changes”?",
          "options": [
            "button",
            "a",
            "meta",
            "figure"
          ],
          "correctIndex": 0,
          "explanation": "Saving is an action."
        },
        {
          "question": "Which element fits navigation?",
          "options": [
            "a",
            "button always",
            "div",
            "span"
          ],
          "correctIndex": 0,
          "explanation": "Links represent navigation."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}section{padding:14px;margin-bottom:12px;background:white;border-radius:12px}[inert]{opacity:.55}",
      "js": "",
      "tags": [
        "html",
        "accessibility by default",
        "hidden",
        "and",
        "inert"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-hidden-inert",
      "stage": "Accessibility by Default",
      "order": 30,
      "title": "hidden and inert",
      "summary": "Hide content or temporarily disable interaction with the right tool.",
      "definition": "hidden removes content from presentation; inert makes a subtree non-interactive and unavailable to normal focus/accessibility interaction while inert.",
      "learn": [
        "hidden",
        "inert",
        "Focus behavior",
        "Modal background use"
      ],
      "objective": "Distinguish absent content from temporarily inactive content.",
      "explanation": "Use hidden when content should not be presented. Use inert when content remains in the document but must temporarily stop interaction, such as background UI during a modal workflow.",
      "tip": "Test Tab navigation after introducing hidden/inert states.",
      "hack": "Prefer native hidden when content truly should be absent from interaction.",
      "mistake": "Do not hide instructions while users still need them.",
      "expected": "The second section appears dimmed and its button cannot receive normal interaction.",
      "html": "<main><section><h1>Active content</h1><button>Focusable button</button></section><section inert><button>This area is inert</button></section></main>",
      "quiz": [
        {
          "question": "What does inert do?",
          "options": [
            "Makes subtree non-interactive",
            "Deletes source",
            "Changes class",
            "Submits form"
          ],
          "correctIndex": 0,
          "explanation": "Inert disables interaction/focus in the subtree."
        },
        {
          "question": "When is hidden appropriate?",
          "options": [
            "When content should not currently be presented",
            "For every disabled button",
            "For tooltips only",
            "For links"
          ],
          "correctIndex": 0,
          "explanation": "hidden represents content not currently presented."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}details{padding:16px;background:white;border:1px solid #d7e3eb;border-radius:12px}summary{cursor:pointer;font-weight:800}",
      "js": "",
      "tags": [
        "html",
        "accessibility by default",
        "details",
        "and",
        "summary"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-details-summary",
      "stage": "Accessibility by Default",
      "order": 40,
      "title": "details and summary",
      "summary": "Build expandable content without a custom accordion.",
      "definition": "details creates a disclosure widget; summary provides its visible label/control.",
      "learn": [
        "details",
        "summary",
        "open",
        "Native disclosure behavior"
      ],
      "objective": "Use native disclosure when it matches the interaction.",
      "explanation": "Details/summary gives keyboard-operable disclosure behavior with little code. It works well for FAQs and optional explanations.",
      "tip": "Write summary text that tells users what will be revealed.",
      "hack": "Add open when a disclosure should start expanded.",
      "mistake": "Do not hide essential always-needed information behind many disclosures.",
      "expected": "Clicking the summary expands and collapses the explanation.",
      "html": "<details><summary>Why use semantic HTML?</summary><p>It communicates meaning to browsers, tools, and people.</p></details>",
      "quiz": [
        {
          "question": "Which element controls details?",
          "options": [
            "summary",
            "caption",
            "legend",
            "label"
          ],
          "correctIndex": 0,
          "explanation": "summary is the disclosure label."
        },
        {
          "question": "Which attribute starts details expanded?",
          "options": [
            "open",
            "checked",
            "selected",
            "required"
          ],
          "correctIndex": 0,
          "explanation": "open expands it initially."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}button{padding:10px 14px}dialog{border:0;border-radius:14px;box-shadow:0 20px 60px #0004}",
      "js": "document.querySelector(\"#openDialog\").addEventListener(\"click\",()=>document.querySelector(\"#demoDialog\").showModal());",
      "tags": [
        "html",
        "accessibility by default",
        "dialog",
        "for",
        "modal",
        "tasks"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-dialog",
      "stage": "Accessibility by Default",
      "order": 50,
      "title": "dialog for modal tasks",
      "summary": "Use the native dialog element when a true dialog interaction is needed.",
      "definition": "dialog represents a dialog box; JavaScript opens it with show() or showModal().",
      "learn": [
        "dialog",
        "show/showModal",
        "method=dialog",
        "Close/focus considerations"
      ],
      "objective": "Recognize native dialog markup and its responsibilities.",
      "explanation": "A modal dialog blocks interaction with the rest of the document while open. You still need clear labels, focus flow, and close controls.",
      "tip": "Keep dialogs focused on one task.",
      "hack": "A form with method=dialog can close a dialog without server submission.",
      "mistake": "Do not open modals automatically without a strong user-centered reason.",
      "expected": "The button opens a native modal dialog and Close dismisses it.",
      "html": "<main><button id=\"openDialog\" type=\"button\">Open dialog</button><dialog id=\"demoDialog\" aria-labelledby=\"dialogTitle\"><h2 id=\"dialogTitle\">Confirm lesson</h2><p>This is a native dialog.</p><form method=\"dialog\"><button>Close</button></form></dialog></main>",
      "quiz": [
        {
          "question": "Which method opens a modal dialog?",
          "options": [
            "showModal()",
            "openModal()",
            "display()",
            "alertDialog()"
          ],
          "correctIndex": 0,
          "explanation": "showModal opens it modally."
        },
        {
          "question": "Can method=dialog close a dialog without normal form submission?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 0,
          "explanation": "Yes."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "head, metadata & seo",
        "lang",
        "charset",
        "and",
        "viewport"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-lang-charset-viewport",
      "stage": "Head, Metadata & SEO",
      "order": 10,
      "title": "lang, charset, and viewport",
      "summary": "Set three foundational document signals correctly.",
      "definition": "lang declares document language, meta charset declares encoding, and viewport metadata helps responsive layouts use device width correctly.",
      "learn": [
        "lang",
        "UTF-8",
        "viewport",
        "Why metadata matters"
      ],
      "objective": "Add foundational metadata real pages need.",
      "explanation": "Language helps browsers and assistive tech; UTF-8 supports a broad character set; viewport metadata prevents mobile browsers from treating the page as a wide desktop canvas.",
      "tip": "Use the correct primary language code for the page.",
      "hack": "Inspect language in browser accessibility tools for multilingual testing.",
      "mistake": "Do not omit viewport metadata and then compensate with odd CSS scaling.",
      "expected": "The document includes language, charset, and responsive viewport metadata.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Metadata basics</title></head><body><main><h1>Metadata basics</h1></main></body></html>",
      "quiz": [
        {
          "question": "Which attribute declares document language?",
          "options": [
            "lang",
            "name",
            "scope",
            "method"
          ],
          "correctIndex": 0,
          "explanation": "lang declares language."
        },
        {
          "question": "Which encoding is the common modern choice?",
          "options": [
            "UTF-8",
            "ASCII only",
            "UTF-16 required",
            "Base64"
          ],
          "correctIndex": 0,
          "explanation": "UTF-8 is standard."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "head, metadata & seo",
        "page",
        "title",
        "and",
        "meta",
        "description"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-title-description",
      "stage": "Head, Metadata & SEO",
      "order": 20,
      "title": "Page title and meta description",
      "summary": "Write metadata for people first, not keyword stuffing.",
      "definition": "title names the document in tabs/history and is important for search results; a meta description summarizes the page and may be used as a search snippet.",
      "learn": [
        "title",
        "meta description",
        "Unique page naming",
        "Snippet expectations"
      ],
      "objective": "Write useful metadata for important pages.",
      "explanation": "A useful title helps distinguish tabs and search results. A description summarizes the page, but search engines may choose different snippet text.",
      "tip": "Lead with the specific page topic when that improves scanning.",
      "hack": "Test the deployed URL in real search/social preview tools rather than assuming the exact snippet.",
      "mistake": "Do not reuse one generic title everywhere.",
      "expected": "The document has a specific title and concise description.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>HTML Forms Guide — Knowledge Lab</title><meta name=\"description\" content=\"Learn labels, input types, validation, and accessible form structure.\"></head><body><main><h1>HTML Forms Guide</h1></main></body></html>",
      "quiz": [
        {
          "question": "What should a page title do?",
          "options": [
            "Clearly identify the page",
            "Repeat keywords",
            "Replace h1",
            "Load CSS"
          ],
          "correctIndex": 0,
          "explanation": "Title should identify the page."
        },
        {
          "question": "Is meta description guaranteed as the exact search snippet?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Search engines may choose other text."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "head, metadata & seo",
        "favicon",
        "and",
        "canonical",
        "url"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-favicon-canonical",
      "stage": "Head, Metadata & SEO",
      "order": 30,
      "title": "Favicon and canonical URL",
      "summary": "Use link relations for icons and preferred public URLs.",
      "definition": "link in the head can declare relationships such as an icon or a canonical URL.",
      "learn": [
        "rel=icon",
        "rel=canonical",
        "Document relationships",
        "Public URLs"
      ],
      "objective": "Recognize common link metadata.",
      "explanation": "A favicon identifies the site in tabs/bookmarks. A canonical link can signal the preferred URL for duplicate or near-duplicate content.",
      "tip": "Tie canonical URLs to the real routing/deployment system.",
      "hack": "SVG favicons can work well when supported by your target environment.",
      "mistake": "Do not add a fake canonical URL just to satisfy a checklist.",
      "expected": "The source demonstrates icon and canonical link relations.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Link metadata</title><link rel=\"icon\" href=\"../assets/images/favicon.svg\" type=\"image/svg+xml\"><link rel=\"canonical\" href=\"https://example.com/learn/html\"></head><body><main><h1>Metadata relationships</h1></main></body></html>",
      "quiz": [
        {
          "question": "Which relation declares a site icon?",
          "options": [
            "icon",
            "author",
            "next",
            "stylesheet only"
          ],
          "correctIndex": 0,
          "explanation": "rel=icon identifies an icon."
        },
        {
          "question": "What should canonical represent?",
          "options": [
            "Preferred public URL",
            "Random URL",
            "CSS file",
            "Form action"
          ],
          "correctIndex": 0,
          "explanation": "Canonical points to the preferred content URL."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "head, metadata & seo",
        "social",
        "sharing",
        "metadata"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-social-metadata",
      "stage": "Head, Metadata & SEO",
      "order": 40,
      "title": "Social sharing metadata",
      "summary": "Understand where Open Graph-style metadata fits.",
      "definition": "Social preview metadata commonly uses meta elements in the head with platform-defined properties such as Open Graph fields.",
      "learn": [
        "Meta properties",
        "Share title/description",
        "Preview images",
        "Platform-specific behavior"
      ],
      "objective": "Add social-preview metadata without confusing it with visible semantics.",
      "explanation": "Social platforms may use title, description, URL, and image metadata when generating previews. The exact fields and crawler behavior are platform-specific.",
      "tip": "Use real public absolute image URLs when a platform requires them.",
      "hack": "Test deployed URLs with the target platform's preview/debug tools.",
      "mistake": "Do not invent marketing claims only for metadata.",
      "expected": "The source contains a basic social title, description, and type.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Social metadata demo</title><meta property=\"og:title\" content=\"Knowledge Lab HTML Course\"><meta property=\"og:description\" content=\"Practical HTML lessons with tested examples.\"><meta property=\"og:type\" content=\"website\"></head><body><main><h1>Knowledge Lab HTML Course</h1></main></body></html>",
      "quiz": [
        {
          "question": "Where does social preview metadata normally live?",
          "options": [
            "head",
            "tbody",
            "footer only",
            "form"
          ],
          "correctIndex": 0,
          "explanation": "It belongs in the head."
        },
        {
          "question": "Does social metadata replace good visible page content?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "It only supplements the page."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}pre{padding:14px;background:#0d2235;color:white;border-radius:10px;overflow:auto}",
      "js": "",
      "tags": [
        "html",
        "modern html & performance",
        "script",
        "loading",
        "defer",
        "async",
        "and",
        "module"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-script-defer-async",
      "stage": "Modern HTML & Performance",
      "order": 10,
      "title": "Script loading: defer, async, and module",
      "summary": "Load JavaScript without accidentally blocking or reordering your app.",
      "definition": "defer downloads classic scripts without blocking parsing and preserves document order; async executes when ready; module scripts are deferred by default.",
      "learn": [
        "defer",
        "async",
        "module",
        "Execution order"
      ],
      "objective": "Choose script loading behavior based on dependencies.",
      "explanation": "If one script depends on another, async can be risky because execution order is not guaranteed. defer is often a safer classic-script default for document-dependent app code.",
      "tip": "Use defer for classic scripts that depend on the parsed document and each other.",
      "hack": "Modules have their own dependency graph and are deferred by default.",
      "mistake": "Do not add async to every script as a generic performance trick.",
      "expected": "The example explains loading patterns without fetching external scripts.",
      "html": "<main><h1>Script loading concepts</h1><pre><code>&lt;script src=\"app.js\" defer&gt;&lt;/script&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;\n&lt;script type=\"module\" src=\"main.js\"&gt;&lt;/script&gt;</code></pre></main>",
      "quiz": [
        {
          "question": "Which classic attribute preserves script order after parsing?",
          "options": [
            "defer",
            "async",
            "hidden",
            "sandbox"
          ],
          "correctIndex": 0,
          "explanation": "defer preserves order."
        },
        {
          "question": "Does async guarantee script order?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Async executes when ready."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}img{max-width:100%;height:auto;border-radius:14px}",
      "js": "",
      "tags": [
        "html",
        "modern html & performance",
        "lazy",
        "loading",
        "and",
        "fetch",
        "priority"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-loading-priority",
      "stage": "Modern HTML & Performance",
      "order": 20,
      "title": "Lazy loading and fetch priority",
      "summary": "Load below-the-fold resources later without delaying critical content.",
      "definition": "loading=lazy can defer eligible images/iframes; fetchpriority can hint relative fetch importance.",
      "learn": [
        "loading=lazy",
        "Critical eager content",
        "fetchpriority",
        "Hints are not commands"
      ],
      "objective": "Apply loading hints based on real page priority.",
      "explanation": "Below-the-fold media can often load later. A visible hero image may need eager loading. fetchpriority is a hint, so measure instead of setting everything high.",
      "tip": "Do not lazy-load the most important above-the-fold image by reflex.",
      "hack": "Combine intrinsic image dimensions with sensible loading for better stability.",
      "mistake": "Do not mark many resources fetchpriority=high.",
      "expected": "The sample image uses lazy-loading syntax safely.",
      "html": "<main><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%230d2235'/%3E%3Ccircle cx='320' cy='150' r='72' fill='%230879b7'/%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Arial' font-size='30' fill='white'%3EHTML image example%3C/text%3E%3C/svg%3E\" alt=\"HTML performance example\" width=\"640\" height=\"360\" loading=\"lazy\"><p>Placement determines whether lazy loading is appropriate.</p></main>",
      "quiz": [
        {
          "question": "Which resources are good lazy-load candidates?",
          "options": [
            "Below-the-fold media",
            "Every hero image",
            "Page title",
            "Charset"
          ],
          "correctIndex": 0,
          "explanation": "Noncritical offscreen media are good candidates."
        },
        {
          "question": "Is fetchpriority an absolute browser command?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "It is a hint."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}pre{padding:14px;background:#0d2235;color:white;border-radius:10px;overflow:auto}",
      "js": "",
      "tags": [
        "html",
        "modern html & performance",
        "resource",
        "hints",
        "preload",
        "and",
        "preconnect"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-resource-hints",
      "stage": "Modern HTML & Performance",
      "order": 30,
      "title": "Resource hints: preload and preconnect",
      "summary": "Use early-loading hints only when measurements justify them.",
      "definition": "preload requests a specific resource early; preconnect can prepare an early connection to an important origin.",
      "learn": [
        "preload",
        "preconnect",
        "as/type correctness",
        "Overuse cost"
      ],
      "objective": "Recognize performance hints and their tradeoffs.",
      "explanation": "Every early request competes for bandwidth. Preload only resources genuinely needed soon, and use correct metadata. Unused preloads can waste work.",
      "tip": "Profile first with real network/performance tools.",
      "hack": "Document why a non-obvious preload exists.",
      "mistake": "Do not preload every image, font, and script.",
      "expected": "The code example shows common resource-hint syntax as text.",
      "html": "<main><h1>Resource hints</h1><pre><code>&lt;link rel=\"preconnect\" href=\"https://cdn.example.com\"&gt;\n&lt;link rel=\"preload\" href=\"/hero.webp\" as=\"image\"&gt;</code></pre></main>",
      "quiz": [
        {
          "question": "What does preconnect target?",
          "options": [
            "An origin connection",
            "Heading",
            "Form field",
            "Table row"
          ],
          "correctIndex": 0,
          "explanation": "It prepares a connection."
        },
        {
          "question": "Should everything be preloaded?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Overuse can waste bandwidth."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Intermediate",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}button{padding:10px 14px;border:1px solid #0879b7;border-radius:9px;background:white;color:#0879b7}",
      "js": "",
      "tags": [
        "html",
        "modern html & performance",
        "data",
        "attributes"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-data-attributes",
      "stage": "Modern HTML & Performance",
      "order": 40,
      "title": "data-* attributes",
      "summary": "Attach small custom metadata without inventing nonstandard attributes.",
      "definition": "data-* attributes store custom data on elements and are exposed to JavaScript through dataset.",
      "learn": [
        "data-* syntax",
        "dataset",
        "Good use cases",
        "Not secret storage"
      ],
      "objective": "Use custom element metadata appropriately.",
      "explanation": "A product card can carry data-product-id so JavaScript can connect UI to application state. These values are visible in source and are not secure storage.",
      "tip": "Name data attributes by meaning, not visual position.",
      "hack": "data-product-id maps to dataset.productId.",
      "mistake": "Never store secrets in data attributes.",
      "expected": "The button carries a product ID and stock state as custom data.",
      "html": "<button type=\"button\" data-product-id=\"P-145\" data-stock-state=\"available\">View product P-145</button>",
      "quiz": [
        {
          "question": "How is data-product-id commonly read in JS?",
          "options": [
            "dataset.productId",
            "style.productId",
            "href.productId",
            "meta.productId"
          ],
          "correctIndex": 0,
          "explanation": "dataset exposes data attributes."
        },
        {
          "question": "Are data attributes secure secret storage?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "They are visible in the document."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}article{padding:18px;background:white;border-radius:12px}",
      "js": "const tpl=document.querySelector(\"#cardTemplate\");document.querySelector(\"#host\").append(tpl.content.cloneNode(true));",
      "tags": [
        "html",
        "modern html & performance",
        "template",
        "for",
        "inert",
        "reusable",
        "markup"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-template",
      "stage": "Modern HTML & Performance",
      "order": 50,
      "title": "template for inert reusable markup",
      "summary": "Keep markup in the document without rendering it immediately.",
      "definition": "template stores parsed but inert markup that is not rendered until code clones or inserts its content.",
      "learn": [
        "template",
        "template.content",
        "Inert markup",
        "Reusable fragments"
      ],
      "objective": "Recognize the native template mechanism.",
      "explanation": "Template content is parsed but inactive until inserted. It is useful for repeated rows/cards created by JavaScript, but it is not a complete component system by itself.",
      "tip": "Keep templates small and purpose-specific.",
      "hack": "Clone template.content instead of rebuilding large markup strings.",
      "mistake": "Do not put essential content only in template if users need it before JavaScript runs.",
      "expected": "JavaScript clones one card from the template into the page.",
      "html": "<main><template id=\"cardTemplate\"><article><h2>Template card</h2><p>Cloned from inert HTML.</p></article></template><div id=\"host\"></div></main>",
      "quiz": [
        {
          "question": "Is template content rendered immediately?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Template content is inert."
        },
        {
          "question": "Where is its fragment exposed?",
          "options": [
            "template.content",
            "template.value",
            "template.href",
            "template.style"
          ],
          "correctIndex": 0,
          "explanation": "content exposes the fragment."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}button{padding:10px 14px}[popover]{border:0;border-radius:12px;padding:18px;box-shadow:0 20px 60px #0004}",
      "js": "",
      "tags": [
        "html",
        "modern html & performance",
        "native",
        "popover"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-popover",
      "stage": "Modern HTML & Performance",
      "order": 60,
      "title": "Native popover",
      "summary": "Create lightweight top-layer UI with HTML-driven behavior.",
      "definition": "The Popover API uses attributes such as popover and popovertarget to create dismissible top-layer content.",
      "learn": [
        "popover",
        "popovertarget",
        "Top layer",
        "Popover vs dialog"
      ],
      "objective": "Recognize when popover fits supplemental UI.",
      "explanation": "Popover works well for help, menus, and small panels that do not represent a blocking task. It differs from a modal dialog.",
      "tip": "Use meaningful trigger text and focused popover content.",
      "hack": "Start with native popover behavior before adding custom JavaScript.",
      "mistake": "Do not use popover for critical confirmation that should be modal.",
      "expected": "The Show help button opens a native popover on supported browsers.",
      "html": "<main><button popovertarget=\"help\">Show help</button><div id=\"help\" popover><strong>HTML tip</strong><p>Choose elements by meaning first.</p></div></main>",
      "quiz": [
        {
          "question": "Which attribute marks popover content?",
          "options": [
            "popover",
            "dialog",
            "target",
            "controls"
          ],
          "correctIndex": 0,
          "explanation": "popover identifies popover content."
        },
        {
          "question": "Is popover automatically a modal blocking task?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Popover and modal dialog serve different purposes."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "architecture & expert practice",
        "progressive",
        "enhancement"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-progressive-enhancement",
      "stage": "Architecture & Expert Practice",
      "order": 10,
      "title": "Progressive enhancement",
      "summary": "Make the core content and action work before adding richer layers.",
      "definition": "Progressive enhancement starts with a functional semantic baseline, then adds presentation and behavior where supported.",
      "learn": [
        "Semantic baseline",
        "CSS enhancement",
        "JavaScript enhancement",
        "Failure-friendly design"
      ],
      "objective": "Build resilient interfaces.",
      "explanation": "A real link should still navigate if enhancement code fails. Forms should still have labels and meaningful controls before custom styling. HTML is the foundation layer.",
      "tip": "Test the page with JavaScript disabled when the product allows it.",
      "hack": "Native features can reduce custom code and failure modes.",
      "mistake": "Do not ship empty div shells for content that could be meaningful HTML initially.",
      "expected": "The link and target section work without JavaScript.",
      "html": "<main><h1>Progressive enhancement</h1><a href=\"#details\">Read details</a><section id=\"details\"><h2>Details</h2><p>Enhancements can be added later.</p></section></main>",
      "quiz": [
        {
          "question": "What is the first layer in progressive enhancement?",
          "options": [
            "Meaningful baseline",
            "Animations",
            "Framework",
            "Analytics"
          ],
          "correctIndex": 0,
          "explanation": "Start with resilient content/behavior."
        },
        {
          "question": "Does this mean every app must fully work without JS?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "It means an intentional resilient baseline."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}iframe{border:1px solid #ccdbe5;border-radius:10px}",
      "js": "",
      "tags": [
        "html",
        "architecture & expert practice",
        "html",
        "security",
        "habits"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-security-basics",
      "stage": "Architecture & Expert Practice",
      "order": 20,
      "title": "HTML security habits",
      "summary": "Links, embeds, forms, and untrusted content can create security boundaries.",
      "definition": "HTML security includes safe destinations, restricted iframe capabilities, and careful handling of untrusted content.",
      "learn": [
        "Untrusted HTML risk",
        "Iframe sandbox",
        "Trusted destinations",
        "Least privilege"
      ],
      "objective": "Recognize security-sensitive HTML surfaces.",
      "explanation": "If untrusted text is injected as HTML, it can become active markup depending on context and policy. Embeds should receive only needed permissions.",
      "tip": "Treat user-provided rich HTML as a sanitization problem.",
      "hack": "Use textContent for plain text insertion when markup is not needed.",
      "mistake": "Do not paste untrusted HTML into production or grant broad iframe permissions blindly.",
      "expected": "The example uses a restricted sandboxed iframe.",
      "html": "<main><h1>Least privilege</h1><iframe title=\"Restricted example\" sandbox srcdoc=\"<p>Restricted frame</p>\" width=\"100%\" height=\"90\"></iframe></main>",
      "quiz": [
        {
          "question": "Is untrusted HTML safe just because it came from a text field?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Untrusted markup can be active content."
        },
        {
          "question": "What should sandbox permissions follow?",
          "options": [
            "Least privilege",
            "Allow everything",
            "Random choice",
            "CSS specificity"
          ],
          "correctIndex": 0,
          "explanation": "Grant only what is needed."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}",
      "js": "",
      "tags": [
        "html",
        "architecture & expert practice",
        "content",
        "models",
        "and",
        "valid",
        "relationships"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-content-model",
      "stage": "Architecture & Expert Practice",
      "order": 30,
      "title": "Content models and valid relationships",
      "summary": "Move beyond memorizing tags into understanding which elements may contain which content.",
      "definition": "HTML defines content categories and element-specific rules that determine where elements may appear and what they may contain.",
      "learn": [
        "Content categories",
        "Interactive restrictions",
        "Valid nesting",
        "Why validators matter"
      ],
      "objective": "Reason about valid structures in complex components.",
      "explanation": "Some invalid markup looks plausible. Interactive elements should not be nested in conflicting ways, such as a button inside another button. You do not need to memorize the whole specification; use documentation and validation.",
      "tip": "Validate the final rendered HTML, not only a source template.",
      "hack": "Be extra careful around links, buttons, labels, tables, lists, and forms.",
      "mistake": "Do not nest interactive controls just to make a whole card clickable.",
      "expected": "The sample keeps navigation and action controls separate.",
      "html": "<main><article><h1>Valid interaction structure</h1><p><a href=\"#details\">Open details</a></p><button type=\"button\">Independent action</button></article><section id=\"details\"><h2>Details</h2></section></main>",
      "quiz": [
        {
          "question": "Should a button contain another button?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Nested interactive controls conflict."
        },
        {
          "question": "What should you do when unsure about an element relationship?",
          "options": [
            "Check docs + validator",
            "Guess",
            "Use CSS only",
            "Check database"
          ],
          "correctIndex": 0,
          "explanation": "Use authoritative rules and validation."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Advanced",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}article{padding:24px;background:white;border:1px solid #d9e4eb;border-radius:16px}",
      "js": "",
      "tags": [
        "html",
        "architecture & expert practice",
        "build",
        "a",
        "clean",
        "semantic",
        "page",
        "section"
      ],
      "realUse": "Used in real websites, web apps, portfolios, documentation, forms, and production UI.",
      "id": "html-clean-document",
      "stage": "Architecture & Expert Practice",
      "order": 40,
      "title": "Build a clean semantic page section",
      "summary": "Combine headings, landmarks, article structure, links, and supporting content.",
      "definition": "Clean semantic HTML uses meaningful elements, logical heading structure, valid nesting, and minimal generic wrappers.",
      "learn": [
        "Landmarks",
        "Heading hierarchy",
        "Article/section relationships",
        "Meaningful links"
      ],
      "objective": "Combine core concepts into a production-style content block.",
      "explanation": "The goal is not to maximize semantic tags. It is to make the document understandable with the smallest clear structure. The page should still read sensibly without CSS.",
      "tip": "Read the source top-to-bottom and check whether the information order still makes sense.",
      "hack": "Use a neutral div when a wrapper has no semantic role.",
      "mistake": "Do not add headings just to style text or sections with no thematic purpose.",
      "expected": "The article has a clear header, section, list, and footer link.",
      "html": "<main><article><header><p>Knowledge Lab</p><h1>Semantic HTML checklist</h1></header><section aria-labelledby=\"why\"><h2 id=\"why\">Why this works</h2><ul><li>Clear main topic</li><li>Real heading</li><li>Useful list</li></ul></section><footer><a href=\"#why\">Review key points</a></footer></article></main>",
      "quiz": [
        {
          "question": "What is the goal of semantic HTML?",
          "options": [
            "Clear meaning and structure",
            "Use every semantic tag",
            "Avoid CSS",
            "Make markup longer"
          ],
          "correctIndex": 0,
          "explanation": "Semantics communicate role clearly."
        },
        {
          "question": "Is div acceptable when no semantic element fits?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 0,
          "explanation": "Generic containers are valid when appropriate."
        }
      ]
    },
    {
      "categoryId": "html",
      "mode": "code",
      "level": "Expert practice",
      "css": "body{font-family:system-ui,sans-serif;margin:0;padding:28px;color:#17344b;background:#f5f9fc}main,article,section,form,figure,.demo{max-width:700px;margin:0 auto}a{color:#0879b7}button,input,select,textarea{font:inherit}header,nav,footer,main{max-width:760px;margin:0 auto 14px}article{padding:22px;background:white;border-radius:16px}form{display:grid;gap:8px;max-width:380px}input,button{padding:10px}",
      "js": "",
      "tags": [
        "html",
        "architecture & expert practice",
        "final",
        "html",
        "challenge",
        "a",
        "resilient",
        "mini"
      ],
      "realUse": "Production landing pages, portfolios, documentation, dashboards, and app shells use these same structural decisions.",
      "id": "html-expert-practice-page",
      "stage": "Architecture & Expert Practice",
      "order": 50,
      "title": "Final HTML challenge: a resilient mini page",
      "summary": "Combine metadata, landmarks, semantic content, a form, and native disclosure.",
      "definition": "Expert HTML practice means consistently choosing robust semantics, relationships, metadata, and interaction foundations that remain understandable as a project grows.",
      "learn": [
        "Document shell",
        "Landmarks",
        "Semantic sections",
        "Accessible form",
        "Native disclosure",
        "Validation mindset"
      ],
      "objective": "Build a small production-style page before visual polish.",
      "explanation": "This challenge combines the course: metadata, navigation, main content, article sections, labeled form controls, and details/summary. Expertise is not about using the most tags; it is about using the simplest correct structure.",
      "tip": "Remove the CSS and check whether the reading order and controls still make sense.",
      "hack": "Validate the rendered document and test keyboard navigation before adding more complexity.",
      "mistake": "Do not judge HTML quality by cleverness or shortest markup.",
      "expected": "The mini page has clear hierarchy, navigation, article content, disclosure, and a usable form.",
      "html": "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>HTML Expert Practice</title><meta name=\"description\" content=\"A resilient semantic HTML mini page.\"></head><body><header><strong>Knowledge Lab</strong></header><nav aria-label=\"Primary\"><a href=\"#course\">Course</a> <a href=\"#practice\">Practice</a></nav><main><article id=\"course\"><header><h1>Build structure that lasts</h1><p>Meaning first.</p></header><section><h2>Core idea</h2><p>Use native semantics before custom behavior.</p></section><details><summary>Review checklist</summary><ul><li>Valid nesting</li><li>Clear headings</li><li>Accessible controls</li></ul></details><section id=\"practice\"><h2>Practice signup</h2><form><label for=\"practiceEmail\">Email</label><input id=\"practiceEmail\" name=\"email\" type=\"email\" autocomplete=\"email\" required><button type=\"button\">Preview signup</button></form></section></article></main><footer><small>Knowledge Lab practice document</small></footer></body></html>",
      "quiz": [
        {
          "question": "What is the strongest sign of good HTML?",
          "options": [
            "Meaningful, valid, accessible, resilient structure",
            "Most tags possible",
            "Shortest file possible",
            "No CSS allowed"
          ],
          "correctIndex": 0,
          "explanation": "Quality comes from correct structure."
        },
        {
          "question": "What should you test before more complexity?",
          "options": [
            "Validation and keyboard/read order",
            "Only font color",
            "Database speed",
            "Image filters"
          ],
          "correctIndex": 0,
          "explanation": "Validate structure and interaction foundations."
        },
        {
          "question": "Should expert HTML depend on clever markup tricks?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Reliable understandable markup is the goal."
        }
      ]
    },
    {
      "id": "css-what-is-css",
      "categoryId": "css",
      "mode": "code",
      "stage": "CSS Fundamentals",
      "order": 10,
      "level": "Beginner",
      "title": "What is CSS?",
      "summary": "Start with the simplest idea: HTML gives a page structure; CSS controls how that structure looks.",
      "objective": "Understand what CSS is, what it changes, and why websites normally separate structure from presentation.",
      "explanation": "CSS stands for Cascading Style Sheets.\n\nThink of HTML as the structure of a house: rooms, doors, labels, and content. CSS is the visual system: paint, spacing, size, alignment, and how the house adapts to available space.\n\nA CSS rule normally selects HTML and applies one or more visual declarations. Example: `h1 { color: blue; }` means “select every h1 and make its text blue.”\n\nCSS is called “cascading” because more than one style rule can apply to the same element. The browser follows cascade rules to decide which declaration wins. You will learn that clearly in the next lesson.",
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
      ],
      "definition": "CSS means Cascading Style Sheets. It is the language browsers use to control the presentation of HTML: colors, fonts, spacing, sizes, layout, responsive behavior, and visual effects.",
      "learn": [
        "What CSS stands for and what problem it solves",
        "How CSS works together with HTML",
        "What a selector, property, and value do",
        "Why the word “Cascading” matters later in the course"
      ]
    },
    {
      "id": "css-rule-syntax",
      "categoryId": "css",
      "mode": "code",
      "stage": "CSS Fundamentals",
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
      ],
      "definition": "A CSS rule combines a selector with a declaration block. Each declaration is a property/value pair such as `color: blue`.",
      "learn": [
        "Selector",
        "Declaration block",
        "Property",
        "Value"
      ]
    },
    {
      "id": "css-why-cascading",
      "stage": "CSS Fundamentals",
      "order": 20,
      "level": "Beginner",
      "title": "Why is it called Cascading Style Sheets?",
      "summary": "See what “cascading” actually means instead of memorizing the name CSS.",
      "definition": "The CSS cascade is the browser's decision system for choosing which style declaration wins when multiple declarations affect the same element.",
      "learn": [
        "Why multiple rules can target one element",
        "Why a later rule can sometimes win",
        "Where specificity and inheritance fit into the bigger picture"
      ],
      "objective": "Build the right mental model for the C in CSS before learning specificity in detail.",
      "explanation": "Imagine two people giving instructions for the same heading. One rule says the heading is blue. Another rule says it is red. The browser needs a consistent way to decide what to use.\n\nThat decision process is the cascade. It considers things such as importance/origin, cascade layers, selector specificity, scope/proximity in relevant cases, and source order. As a beginner, start with the simplest idea: multiple rules can apply, and CSS has rules for deciding the winner.",
      "tip": "When a style seems ignored, do not immediately add `!important`. Inspect which declaration won and why.",
      "hack": "In DevTools, crossed-out CSS declarations are a fast visual clue that another declaration won the cascade.",
      "mistake": "Do not define the cascade as “the last rule always wins.” Source order only decides some ties; specificity and other cascade factors matter too.",
      "expected": "The paragraph is red because the later rule has the same selector strength and appears later.",
      "realUse": "Understanding the cascade prevents endless specificity fights in real projects.",
      "html": "<p class=\"message\">Which color wins?</p>",
      "css": ".message { color: blue; font: 700 28px system-ui, sans-serif; }\n.message { color: red; }",
      "quiz": [
        {
          "question": "What is the cascade mainly for?",
          "options": [
            "Choosing which CSS declaration wins",
            "Creating HTML tags",
            "Running Java",
            "Compressing images"
          ],
          "correctIndex": 0,
          "explanation": "The cascade resolves competing declarations that apply to the same element."
        },
        {
          "question": "If two rules have equal cascade weight and specificity, what can decide the winner?",
          "options": [
            "Source order",
            "Random choice",
            "Screen brightness",
            "File name length"
          ],
          "correctIndex": 0,
          "explanation": "When other factors tie, later source order can win."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "css fundamentals",
        "why",
        "is",
        "it",
        "called",
        "cascading"
      ]
    },
    {
      "id": "css-ways-to-add-css",
      "categoryId": "css",
      "mode": "code",
      "stage": "CSS Fundamentals",
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
      ],
      "definition": "CSS can be applied inline, inside a page with `<style>`, or from an external stylesheet linked with `<link>`.",
      "learn": [
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Why external CSS is usually best for reusable projects"
      ]
    },
    {
      "id": "css-comments-whitespace",
      "stage": "CSS Fundamentals",
      "order": 35,
      "level": "Beginner",
      "title": "CSS comments and readable formatting",
      "summary": "Write CSS that humans can maintain, not just CSS the browser can parse.",
      "definition": "A CSS comment starts with `/*` and ends with `*/`. The browser ignores the commented text.",
      "learn": [
        "How to write CSS comments",
        "Why indentation and spacing matter to humans",
        "What whitespace CSS usually ignores"
      ],
      "objective": "Use comments and formatting to make stylesheets easier to understand.",
      "explanation": "Browsers ignore most extra whitespace in CSS, so you can format rules for readability. Comments are useful for explaining intent, grouping sections, or leaving maintenance notes.\n\nGood comments explain why a rule exists. Avoid comments that only repeat what the code already says.",
      "tip": "Comment the reason behind a workaround, browser constraint, or unusual value.",
      "hack": "Organize large stylesheets into predictable sections such as tokens, base, layout, components, utilities, and responsive overrides.",
      "mistake": "Do not leave large blocks of dead CSS commented forever. Version control is a better place to recover old code.",
      "expected": "The card is styled normally; comments do not appear in the page.",
      "realUse": "Readable formatting makes team reviews, debugging, and future edits much faster.",
      "html": "<article class=\"note\"><h2>Readable CSS</h2><p>Comments help maintainers understand intent.</p></article>",
      "css": "/* Component: learning note */\n.note {\n  max-width: 520px;\n  margin: 32px auto;\n  padding: 24px;\n  border-radius: 14px;\n  background: #eef8fd;\n  font-family: system-ui, sans-serif;\n}\n\n/* Keep the heading visually connected to the body copy. */\n.note h2 { margin-top: 0; }",
      "quiz": [
        {
          "question": "How do CSS comments start and end?",
          "options": [
            "// and //",
            "/* and */",
            "<!-- and -->",
            "# and #"
          ],
          "correctIndex": 1,
          "explanation": "CSS uses `/* ... */` comments."
        },
        {
          "question": "What makes a useful maintenance comment?",
          "options": [
            "Explaining why a non-obvious rule exists",
            "Repeating `color: red` as “make red”",
            "Hiding all old code",
            "Replacing class names"
          ],
          "correctIndex": 0,
          "explanation": "Comments are most valuable when they explain intent or constraints."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "css fundamentals",
        "css",
        "comments",
        "and",
        "readable",
        "formatting"
      ]
    },
    {
      "id": "css-basic-selectors",
      "stage": "CSS Fundamentals",
      "order": 40,
      "level": "Beginner",
      "title": "Basic selectors: element, class, ID, and universal",
      "summary": "Learn how CSS finds the HTML you want to style.",
      "definition": "A CSS selector is the pattern used to choose which HTML elements a CSS rule should affect.",
      "learn": [
        "Element selectors such as `p`",
        "Class selectors such as `.card`",
        "ID selectors such as `#hero`",
        "The universal selector `*`"
      ],
      "objective": "Choose a simple selector without making it more specific than necessary.",
      "explanation": "An element selector targets tags such as `p` or `button`. A class selector starts with a dot and is the normal reusable choice for components. An ID selector starts with `#` and targets an element with that ID. `*` is the universal selector.\n\nFor reusable styling, classes are usually the best starting point.",
      "tip": "Use classes for reusable visual components. Keep IDs mainly for unique document targets, labels, anchors, and JavaScript hooks when appropriate.",
      "hack": "A simple class like `.product-card` is often easier to maintain than a long selector describing the entire page structure.",
      "mistake": "Do not use IDs everywhere just because they are powerful. High specificity makes later overrides harder.",
      "expected": "Only the paragraph with class `important` receives the accent style.",
      "realUse": "Selectors are the entry point for every CSS component and state.",
      "html": "<main><h1 id=\"page-title\">Selectors</h1><p>Normal paragraph</p><p class=\"important\">Important paragraph</p></main>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; }\np { color: #607086; }\n.important { color: #c43f62; font-weight: 800; }\n#page-title { color: #0879b7; }\n* { box-sizing: border-box; }",
      "quiz": [
        {
          "question": "Which selector targets a class named card?",
          "options": [
            "#card",
            ".card",
            "card()",
            "@card"
          ],
          "correctIndex": 1,
          "explanation": "Class selectors begin with a dot."
        },
        {
          "question": "Which selector targets an element with id=\"hero\"?",
          "options": [
            ".hero",
            "#hero",
            "hero#",
            "*hero"
          ],
          "correctIndex": 1,
          "explanation": "ID selectors begin with `#`."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "css fundamentals",
        "basic",
        "selectors",
        "element",
        "class",
        "id"
      ]
    },
    {
      "id": "css-colors-backgrounds",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
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
      "stage": "Box Model & Sizing",
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
      "stage": "Typography & Text",
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
      "id": "css-backgrounds-gradients",
      "stage": "Colors & Backgrounds",
      "order": 15,
      "level": "Beginner",
      "title": "Backgrounds, images, and gradients",
      "summary": "Go beyond a flat color without losing readability.",
      "definition": "CSS background properties control the paint layer behind an element, including colors, images, gradients, repeat behavior, position, and size.",
      "learn": [
        "Background color and image",
        "Linear gradients",
        "background-size and background-position",
        "Why backgrounds should not carry essential text"
      ],
      "objective": "Create a readable visual surface using layered backgrounds.",
      "explanation": "A background can be a solid color, image, gradient, or several layered backgrounds. Gradients are generated by CSS and do not require an image file.\n\nFor photographic backgrounds, `background-size: cover` is common, but parts of the image may be cropped. Keep essential information in real HTML, not inside a decorative background.",
      "tip": "Add a dark/light overlay gradient when text sits on an image and needs consistent contrast.",
      "hack": "You can layer multiple backgrounds by separating them with commas.",
      "mistake": "Do not use a background image as the only place where important text exists. That harms accessibility and adaptability.",
      "expected": "The panel shows a blue gradient background with readable white text.",
      "realUse": "Hero sections, campaign covers, cards, banners, and decorative surfaces use these techniques.",
      "html": "<section class=\"hero\"><span>CSS</span><h1>Layered background</h1><p>Readable text stays in HTML.</p></section>",
      "css": ".hero { max-width: 680px; margin: 30px auto; padding: 48px 30px; border-radius: 20px; background: linear-gradient(135deg, #08243a, #0b8cc7); color: white; font-family: system-ui, sans-serif; }\n.hero span { color: #8be4ff; font-weight: 900; letter-spacing: .12em; }\n.hero h1 { margin: 8px 0; }",
      "quiz": [
        {
          "question": "What does `background-size: cover` generally do?",
          "options": [
            "Scales a background image to cover the box, possibly cropping it",
            "Repeats the image forever",
            "Turns it into text",
            "Disables responsiveness"
          ],
          "correctIndex": 0,
          "explanation": "`cover` fills the box while preserving aspect ratio, which can crop edges."
        },
        {
          "question": "Are CSS gradients image files?",
          "options": [
            "No, the browser generates them",
            "Yes, always PNG",
            "Only in Safari",
            "Only when using JavaScript"
          ],
          "correctIndex": 0,
          "explanation": "CSS gradients are generated visual values."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "visual styling",
        "backgrounds",
        "images",
        "and",
        "gradients"
      ]
    },
    {
      "id": "css-borders-radius-shadows",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
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
      "id": "css-text-formatting",
      "stage": "Typography & Text",
      "order": 25,
      "level": "Beginner",
      "title": "Text alignment, decoration, spacing, and wrapping",
      "summary": "Control how text behaves beyond font family and size.",
      "definition": "Text-formatting properties control alignment, decoration, casing, spacing, wrapping, and overflow behavior of text.",
      "learn": [
        "text-align and text-decoration",
        "letter-spacing and word spacing",
        "white-space and overflow-wrap",
        "Safe use of text-transform"
      ],
      "objective": "Make labels, links, headings, and body text readable across different widths.",
      "explanation": "CSS can align text, underline or remove decoration, transform casing, adjust spacing, and decide how long words wrap.\n\nThese are powerful details, but readability comes first. Large letter spacing on body paragraphs or forced uppercase everywhere can make content harder to read.",
      "tip": "Use `overflow-wrap: anywhere` for user-generated strings that may otherwise overflow narrow cards.",
      "hack": "Use `text-decoration-thickness` and `text-underline-offset` to improve custom link underlines without removing the underline completely.",
      "mistake": "Do not remove link underlines unless another clear visual cue still communicates that the text is interactive.",
      "expected": "The link has a cleaner underline and the long text can wrap safely.",
      "realUse": "Navigation, buttons, labels, tables, documentation, and content-heavy pages depend on text formatting.",
      "html": "<article class=\"text-demo\"><h2>Text formatting</h2><p>SupercalifragilisticexpialidociousCanStillWrapInANarrowCard</p><a href=\"#\">Accessible-looking link</a></article>",
      "css": ".text-demo { max-width: 340px; margin: 30px auto; padding: 20px; font-family: system-ui, sans-serif; }\n.text-demo p { overflow-wrap: anywhere; color: #52697b; line-height: 1.6; }\n.text-demo a { color: #0879b7; text-decoration-thickness: 2px; text-underline-offset: 3px; }",
      "quiz": [
        {
          "question": "Which property helps a very long unbroken string wrap?",
          "options": [
            "overflow-wrap",
            "z-index",
            "grid-area",
            "opacity only"
          ],
          "correctIndex": 0,
          "explanation": "`overflow-wrap` can prevent long strings from overflowing."
        },
        {
          "question": "Is removing every link underline automatically good design?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Links still need a clear visual affordance."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "visual styling",
        "text",
        "alignment",
        "decoration",
        "spacing",
        "and"
      ]
    },
    {
      "id": "css-display-visibility",
      "categoryId": "css",
      "mode": "code",
      "stage": "Display & Positioning",
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
      "id": "css-links-lists",
      "stage": "Typography & Text",
      "order": 35,
      "level": "Beginner",
      "title": "Style links and lists without breaking meaning",
      "summary": "Make navigation and lists attractive while keeping their semantics.",
      "definition": "CSS can change how links and list markers look without changing their underlying HTML meaning.",
      "learn": [
        "Link states",
        "list-style basics",
        "Custom markers",
        "Why semantic lists still matter"
      ],
      "objective": "Style navigation/list content while preserving usable HTML.",
      "explanation": "Links have interactive states such as `:hover`, `:focus-visible`, and `:visited`. Lists can use default markers, custom marker styles, or remove markers when the visual pattern no longer needs bullets.\n\nKeep `<ul>` or `<ol>` when the content is actually a list, even if you redesign the markers.",
      "tip": "Style `:focus-visible`, not just `:hover`, so keyboard users get equivalent feedback.",
      "hack": "Use `::marker` to style list bullets or numbers without replacing them with extra markup.",
      "mistake": "Do not turn plain text into something that looks clickable without using a real link or button.",
      "expected": "The list has colored markers and the link has clear hover/focus behavior.",
      "realUse": "Menus, feature lists, instructions, sidebars, and documentation use these patterns.",
      "html": "<nav><a href=\"#\">Knowledge Lab</a></nav><ul class=\"topics\"><li>Selectors</li><li>Layout</li><li>Responsive CSS</li></ul>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; }\na { color: #0879b7; text-underline-offset: 3px; }\na:hover, a:focus-visible { color: #c53e65; }\n.topics li { margin: 8px 0; }\n.topics li::marker { color: #0c8bc7; }",
      "quiz": [
        {
          "question": "Which pseudo-class is useful for visible keyboard focus?",
          "options": [
            ":focus-visible",
            ":empty",
            ":last-child",
            ":visited only"
          ],
          "correctIndex": 0,
          "explanation": "`:focus-visible` is designed for focus indication when appropriate."
        },
        {
          "question": "Can you restyle list markers without removing semantic list HTML?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 0,
          "explanation": "CSS can style markers while the list remains semantic."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "visual styling",
        "style",
        "links",
        "and",
        "lists",
        "without"
      ]
    },
    {
      "id": "css-width-height-min-max",
      "stage": "Box Model & Sizing",
      "order": 5,
      "level": "Beginner",
      "title": "width, height, min/max, and intrinsic sizing",
      "summary": "Control size without forcing components to break when content changes.",
      "definition": "Sizing properties define preferred, minimum, and maximum dimensions of an element.",
      "learn": [
        "width and height",
        "min-width / max-width",
        "min-height / max-height",
        "Why fixed heights often break content"
      ],
      "objective": "Choose constraints that let components adapt to real content.",
      "explanation": "A fixed `width` or `height` can be useful, but content and screens vary. `min-*` and `max-*` let you define safe boundaries.\n\nA very common pattern is `width: min(100%, 700px)` or `max-width: 700px` so content can shrink on small screens but not become uncomfortably wide.",
      "tip": "Avoid fixed heights for text-heavy cards unless overflow behavior is intentional.",
      "hack": "Use `min-height` when you need a minimum visual size but still want the component to grow for extra content.",
      "mistake": "Do not solve mobile overflow by shrinking text until it fits a fixed-width component.",
      "expected": "The card fills available width up to a readable maximum.",
      "realUse": "Forms, dialogs, article columns, cards, images, and page shells all need size constraints.",
      "html": "<article class=\"sized\"><h2>Controlled width</h2><p>This can shrink, but it will not grow forever.</p></article>",
      "css": "body { padding: 24px; font-family: system-ui, sans-serif; }\n.sized { width: min(100%, 650px); min-height: 140px; margin: auto; padding: 24px; background: #eef8fd; border-radius: 14px; }",
      "quiz": [
        {
          "question": "Why use max-width on long reading content?",
          "options": [
            "To keep lines from becoming excessively wide",
            "To make it invisible",
            "To force horizontal scroll",
            "To change specificity"
          ],
          "correctIndex": 0,
          "explanation": "A maximum width can preserve readable line lengths."
        },
        {
          "question": "Why can fixed height be risky for text content?",
          "options": [
            "Content can grow or wrap differently",
            "CSS does not support height",
            "It changes HTML semantics",
            "It always creates Grid"
          ],
          "correctIndex": 0,
          "explanation": "Text length and wrapping vary, so fixed heights can clip or overflow content."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "sizing & box model",
        "width",
        "height",
        "min",
        "max",
        "and"
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
      },
      "definition": "The CSS box model describes an element as content surrounded by padding, border, and margin.",
      "learn": [
        "Content box",
        "Padding",
        "Border",
        "Margin"
      ]
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
      ],
      "definition": "Specificity ranks selectors within the cascade, while inheritance passes certain computed values from ancestors to descendants.",
      "learn": [
        "Specificity",
        "Source order",
        "Inheritance",
        "Why `!important` is not a normal debugging strategy"
      ]
    },
    {
      "id": "css-position-zindex",
      "categoryId": "css",
      "mode": "code",
      "stage": "Display & Positioning",
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
      "id": "css-flexbox-basics",
      "categoryId": "css",
      "mode": "code",
      "stage": "Flexbox",
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
      },
      "definition": "Flexbox is a one-dimensional layout system organized around a main axis and cross axis.",
      "learn": [
        "Flex container",
        "Flex items",
        "Main/cross axis",
        "gap and flexible sizing"
      ]
    },
    {
      "id": "css-flex-alignment",
      "stage": "Flexbox",
      "order": 20,
      "level": "Intermediate",
      "title": "Flexbox alignment: main axis vs cross axis",
      "summary": "Stop memorizing “horizontal vs vertical” and understand the two flex axes.",
      "definition": "Flexbox alignment is based on a main axis and a cross axis. `justify-content` works along the main axis; `align-items` works across it.",
      "learn": [
        "Main and cross axes",
        "justify-content",
        "align-items",
        "How flex-direction changes the axes"
      ],
      "objective": "Predict flex alignment even when the direction changes.",
      "explanation": "With `flex-direction: row`, the main axis is horizontal in a normal left-to-right writing mode. With `column`, the main axis becomes vertical. That is why `justify-content` is not simply “horizontal alignment.”\n\nUnderstand the axes and the properties become much easier.",
      "tip": "When alignment feels confusing, check `flex-direction` first.",
      "hack": "`margin-inline-start: auto` on one flex item can push it away from earlier siblings, useful in nav bars.",
      "mistake": "Do not memorize justify-content = horizontal and align-items = vertical. That breaks as soon as the flex direction changes.",
      "expected": "The toolbar aligns items vertically and pushes the account button to the far edge.",
      "realUse": "Navigation bars, headers, toolbars, forms, and button rows constantly use flex alignment.",
      "html": "<nav class=\"toolbar\"><strong>Logo</strong><a href=\"#\">Learn</a><button>Account</button></nav>",
      "css": ".toolbar { display: flex; align-items: center; gap: 14px; padding: 16px; font-family: system-ui, sans-serif; background: #0d2235; color: white; }\n.toolbar a { color: #9bdfff; }\n.toolbar button { margin-inline-start: auto; padding: 8px 11px; }",
      "quiz": [
        {
          "question": "Which property aligns flex items along the main axis?",
          "options": [
            "justify-content",
            "align-items",
            "z-index",
            "overflow"
          ],
          "correctIndex": 0,
          "explanation": "`justify-content` distributes items along the main axis."
        },
        {
          "question": "What changes the main-axis direction?",
          "options": [
            "flex-direction",
            "border-radius",
            "font-size",
            "opacity"
          ],
          "correctIndex": 0,
          "explanation": "`flex-direction` controls the direction of the flex main axis."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "flexbox",
        "flexbox",
        "alignment",
        "main",
        "axis",
        "vs"
      ]
    },
    {
      "id": "css-flex-sizing-wrapping",
      "stage": "Flexbox",
      "order": 30,
      "level": "Intermediate",
      "title": "Flex grow, shrink, basis, and wrapping",
      "summary": "Understand why flex items stretch, shrink, or move onto another line.",
      "definition": "`flex-grow`, `flex-shrink`, and `flex-basis` control how flex items share available space; `flex-wrap` allows additional flex lines.",
      "learn": [
        "flex-basis as the starting size",
        "grow and shrink behavior",
        "flex-wrap",
        "The `flex` shorthand"
      ],
      "objective": "Build flexible rows that respond well to changing width.",
      "explanation": "`flex-basis` is the item's starting main-size for flex calculations. `flex-grow` says how it may take extra space. `flex-shrink` says how it may reduce when space is tight.\n\nWith `flex-wrap: wrap`, items can move to a new line instead of shrinking forever.",
      "tip": "A pattern like `flex: 1 1 220px` is useful for flexible card rows.",
      "hack": "If one item should stay fixed while another grows, give the growing item `flex: 1` and the fixed item an appropriate basis/size.",
      "mistake": "Do not use `flex: 1` blindly when every item has different content needs.",
      "expected": "Cards wrap to new lines and share extra space.",
      "realUse": "Tag groups, responsive cards, toolbars, and form controls use these flex sizing rules.",
      "html": "<section class=\"flex-cards\"><article>Short</article><article>Medium content</article><article>Another card</article></section>",
      "css": ".flex-cards { display: flex; flex-wrap: wrap; gap: 12px; font-family: system-ui, sans-serif; }\n.flex-cards article { flex: 1 1 200px; padding: 20px; background: #f0f7fb; border-radius: 12px; }",
      "quiz": [
        {
          "question": "What does flex-basis represent?",
          "options": [
            "The starting main-size for flex calculations",
            "Only the font size",
            "The z-index",
            "The number of rows"
          ],
          "correctIndex": 0,
          "explanation": "`flex-basis` is the starting size used by Flexbox before grow/shrink adjustments."
        },
        {
          "question": "What allows flex items to move onto additional lines?",
          "options": [
            "flex-wrap: wrap",
            "display: block",
            "position: fixed",
            "opacity: 0"
          ],
          "correctIndex": 0,
          "explanation": "Wrapping creates multiple flex lines when needed."
        }
      ],
      "shortcut": {
        "label": "⚡ SHORTHAND — flex",
        "longLabel": "Long form",
        "longCode": "flex-grow: 1;\nflex-shrink: 1;\nflex-basis: 220px;",
        "shortLabel": "Short form",
        "shortCode": "flex: 1 1 220px;",
        "note": "The shorthand combines grow, shrink, and basis.",
        "caution": "Use explicit properties when you are debugging one flex behavior at a time."
      },
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "flexbox",
        "flex",
        "grow",
        "shrink",
        "basis",
        "and"
      ]
    },
    {
      "id": "css-grid-basics",
      "categoryId": "css",
      "mode": "code",
      "stage": "Grid",
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
      ],
      "definition": "CSS Grid is a two-dimensional layout system for arranging content in rows and columns.",
      "learn": [
        "Grid container",
        "Tracks",
        "fr units",
        "gap"
      ]
    },
    {
      "id": "css-grid-placement-areas",
      "stage": "Grid",
      "order": 20,
      "level": "Intermediate",
      "title": "Grid placement and named areas",
      "summary": "Place content intentionally without depending on source-order hacks.",
      "definition": "Grid placement assigns items to grid lines, tracks, or named template areas.",
      "learn": [
        "grid-column and grid-row",
        "Named grid areas",
        "Why source order still matters for accessibility"
      ],
      "objective": "Build a readable page shell with explicit grid areas.",
      "explanation": "Grid items can span lines using `grid-column`/`grid-row`, or you can name areas with `grid-template-areas`.\n\nNamed areas make some page layouts easier to visualize. But keep HTML source order logical because CSS placement changes visuals, not reading order.",
      "tip": "Name grid areas by role: header, sidebar, main, footer—not by color or position.",
      "hack": "Use DevTools Grid overlays to see line numbers and named areas while debugging.",
      "mistake": "Do not visually rearrange content into an order that conflicts with keyboard/screen-reader reading order.",
      "expected": "Header spans both columns, with sidebar and main below.",
      "realUse": "Dashboards, admin shells, documentation layouts, and complex page structures use Grid placement.",
      "html": "<div class=\"shell\"><header>Header</header><aside>Sidebar</aside><main>Main content</main></div>",
      "css": ".shell { display: grid; grid-template-columns: 180px 1fr; grid-template-areas: \"header header\" \"sidebar main\"; gap: 10px; font-family: system-ui, sans-serif; }\n.shell > * { padding: 18px; border-radius: 10px; background: #eef5f9; }\nheader { grid-area: header; }\naside { grid-area: sidebar; }\nmain { grid-area: main; }",
      "quiz": [
        {
          "question": "What does `grid-area` do when used with named template areas?",
          "options": [
            "Assigns an item to a named area",
            "Changes font color",
            "Creates JavaScript",
            "Sets opacity"
          ],
          "correctIndex": 0,
          "explanation": "`grid-area` can connect an item to a named area."
        },
        {
          "question": "Should CSS visual placement replace logical HTML source order?",
          "options": [
            "No",
            "Yes, always"
          ],
          "correctIndex": 0,
          "explanation": "Visual rearrangement should not create a confusing reading/tab order."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "grid",
        "grid",
        "placement",
        "and",
        "named",
        "areas"
      ]
    },
    {
      "id": "css-subgrid",
      "stage": "Grid",
      "order": 30,
      "level": "Advanced",
      "title": "Subgrid: align nested content to a parent grid",
      "summary": "Let a nested grid reuse track sizing from its parent.",
      "definition": "`subgrid` lets a nested grid participate in the track sizing of its parent grid along a chosen axis.",
      "learn": [
        "Why nested cards sometimes fail to align",
        "How subgrid shares parent tracks",
        "When normal nested Grid is enough"
      ],
      "objective": "Recognize when subgrid solves cross-component alignment cleanly.",
      "explanation": "Without subgrid, every nested grid calculates its own tracks. With `subgrid`, selected nested tracks can align with the parent grid.\n\nThis is useful for repeated cards where titles, descriptions, and actions should align across cards even when content lengths differ.",
      "tip": "Use subgrid for real alignment problems, not just because it is an advanced feature.",
      "hack": "A parent card grid can define row structure while child cards use `grid-template-rows: subgrid` to inherit that rhythm.",
      "mistake": "Do not add subgrid if each component should size itself independently.",
      "expected": "The nested card content follows the parent row structure.",
      "realUse": "Comparison cards, product grids, pricing tables, and repeated structured content can benefit from subgrid.",
      "html": "<section class=\"cards\"><article><h2>Short title</h2><p>Longer supporting copy that wraps.</p><button>Open</button></article><article><h2>A much longer title</h2><p>Short copy.</p><button>Open</button></article></section>",
      "css": ".cards { display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: auto 1fr auto; gap: 14px; font-family: system-ui, sans-serif; }\n.cards article { display: grid; grid-row: span 3; grid-template-rows: subgrid; gap: 8px; padding: 18px; background: #f5f7ff; border-radius: 12px; }\n.cards h2, .cards p { margin: 0; }",
      "quiz": [
        {
          "question": "What problem can subgrid solve?",
          "options": [
            "Aligning nested content to parent tracks",
            "Running Java",
            "Replacing HTML",
            "Changing image formats"
          ],
          "correctIndex": 0,
          "explanation": "Subgrid shares track sizing from a parent grid."
        },
        {
          "question": "Should every nested grid use subgrid?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Use it only when shared track alignment is useful."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "grid",
        "subgrid",
        "align",
        "nested",
        "content",
        "to"
      ]
    },
    {
      "id": "css-mobile-first",
      "stage": "Responsive Design",
      "order": 5,
      "level": "Intermediate",
      "title": "Mobile-first CSS",
      "summary": "Start with a simple narrow layout, then add enhancements when more space is available.",
      "definition": "Mobile-first CSS usually writes the base experience for narrow/simpler layouts first, then uses `min-width` media queries to enhance larger layouts.",
      "learn": [
        "Base styles first",
        "min-width media queries",
        "Progressive layout enhancement",
        "Why mobile-first is a strategy, not a law"
      ],
      "objective": "Build responsive CSS with fewer overrides and clear progressive enhancement.",
      "explanation": "A mobile-first approach starts with the essential layout that works in limited space. Larger-screen rules are then added with `@media (min-width: ...)`.\n\nThis often reduces the amount of CSS you need to undo. But it is a strategy, not a moral rule—use the approach that makes the component easiest to maintain.",
      "tip": "Design the smallest layout around content priority, not just by stacking every desktop block.",
      "hack": "Keep breakpoint overrides close to the component when that improves maintainability.",
      "mistake": "Do not interpret mobile-first as “desktop does not matter.” Every target size still needs deliberate testing.",
      "expected": "Cards are stacked by default and become two columns on wider screens.",
      "realUse": "Most responsive websites and web apps benefit from a clear base layout plus progressive enhancement.",
      "html": "<section class=\"mobile-first\"><article>One</article><article>Two</article></section>",
      "css": ".mobile-first { display: grid; gap: 12px; font-family: system-ui, sans-serif; }\n.mobile-first article { padding: 24px; background: #eef8fd; border-radius: 12px; }\n@media (min-width: 700px) { .mobile-first { grid-template-columns: 1fr 1fr; } }",
      "quiz": [
        {
          "question": "What does mobile-first usually start with?",
          "options": [
            "A narrow/base layout",
            "A 4K-only layout",
            "JavaScript",
            "Print CSS"
          ],
          "correctIndex": 0,
          "explanation": "The base CSS handles the smaller/simpler layout first."
        },
        {
          "question": "Which media query direction is common in mobile-first CSS?",
          "options": [
            "min-width",
            "max-color",
            "z-index",
            "font-weight"
          ],
          "correctIndex": 0,
          "explanation": "`min-width` commonly adds enhancements as more width becomes available."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "responsive design",
        "mobile",
        "first",
        "css"
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
      ],
      "definition": "A media query conditionally applies CSS based on the output environment, such as viewport width or user preferences.",
      "learn": [
        "Media conditions",
        "Content-driven breakpoints",
        "Responsive overrides"
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
      "id": "css-responsive-media",
      "stage": "Responsive Design",
      "order": 40,
      "level": "Intermediate",
      "title": "Responsive images and media",
      "summary": "Make images and video fit their containers without distortion.",
      "definition": "Responsive media styling lets images/video scale with their containers while preserving appropriate aspect ratio and crop behavior.",
      "learn": [
        "max-width: 100%",
        "height: auto",
        "object-fit",
        "aspect-ratio"
      ],
      "objective": "Prevent media from overflowing or stretching incorrectly.",
      "explanation": "For content images, `max-width: 100%; height: auto;` is a classic responsive baseline. For fixed visual frames, `object-fit: cover` or `contain` controls how media fits inside the box.\n\nThe `aspect-ratio` property lets the layout reserve a predictable shape even before content fully loads.",
      "tip": "Use `object-fit: cover` when cropping is acceptable; use `contain` when the whole asset must remain visible.",
      "hack": "Set `aspect-ratio` on thumbnail wrappers to prevent uneven card heights.",
      "mistake": "Do not force both width and height on an image without considering aspect ratio; it may stretch.",
      "expected": "The media frame keeps a 16:9 shape and the image-like block fills it.",
      "realUse": "Portfolio thumbnails, product images, video posters, avatars, and galleries use these rules.",
      "html": "<figure class=\"media-frame\"><div class=\"fake-image\">MEDIA</div></figure>",
      "css": ".media-frame { width: min(100%, 620px); aspect-ratio: 16 / 9; margin: 30px auto; overflow: hidden; border-radius: 16px; background: #0d2235; }\n.fake-image { width: 100%; height: 100%; display: grid; place-items: center; color: #5bd6ff; font: 900 42px system-ui, sans-serif; }",
      "quiz": [
        {
          "question": "What does `aspect-ratio: 16 / 9` describe?",
          "options": [
            "The preferred width-to-height ratio",
            "The font weight",
            "Grid specificity",
            "A database key"
          ],
          "correctIndex": 0,
          "explanation": "`aspect-ratio` describes the preferred proportional shape."
        },
        {
          "question": "When is `object-fit: contain` useful?",
          "options": [
            "When the full media should stay visible",
            "When cropping is required",
            "To set z-index",
            "To create text"
          ],
          "correctIndex": 0,
          "explanation": "`contain` preserves the full object inside the available box."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "responsive design",
        "responsive",
        "images",
        "and",
        "media"
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
      ],
      "definition": "CSS custom properties are reusable values whose names begin with `--` and are read using `var()`.",
      "learn": [
        "Define tokens",
        "Use `var()`",
        "Scope/override variables",
        "Add fallbacks"
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
      "stage": "Responsive Design",
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
      ],
      "definition": "Container queries let a component respond to the size or style of an ancestor container instead of only the viewport.",
      "learn": [
        "Query containers",
        "@container",
        "Component-level responsiveness"
      ]
    },
    {
      "id": "css-nesting",
      "stage": "Modern CSS",
      "order": 35,
      "level": "Advanced",
      "title": "Native CSS nesting",
      "summary": "Group related component selectors without turning your stylesheet into a deeply nested maze.",
      "definition": "CSS nesting lets style rules be nested inside other style rules, reducing repetition for closely related selectors.",
      "learn": [
        "Basic native nesting",
        "The `&` nesting selector",
        "When nesting improves locality",
        "Why deep nesting is still risky"
      ],
      "objective": "Use native nesting for small component relationships while keeping selectors understandable.",
      "explanation": "Native CSS supports nested rules for related selectors. `&` refers to the current selector and is useful for states such as `&:hover`.\n\nNesting can improve locality, but deeply nested selectors can still create strong coupling and specificity problems.",
      "tip": "Keep nesting shallow—usually one or two meaningful levels.",
      "hack": "Use `&` for component states/modifiers, not to recreate the entire DOM tree in CSS.",
      "mistake": "Do not nest every descendant just because the syntax allows it.",
      "expected": "The button's hover rule is defined inside the button rule.",
      "realUse": "Component styles can be easier to read when states and closely related child rules sit together.",
      "html": "<button class=\"nested-button\">Hover me</button>",
      "css": ".nested-button {\n  border: 0;\n  border-radius: 10px;\n  padding: 11px 16px;\n  background: #0d2235;\n  color: white;\n\n  &:hover {\n    background: #0879b7;\n  }\n}",
      "quiz": [
        {
          "question": "What does `&` represent inside a nested rule?",
          "options": [
            "The current selector",
            "Every element",
            "Only body",
            "A JavaScript variable"
          ],
          "correctIndex": 0,
          "explanation": "`&` references the selector being nested within."
        },
        {
          "question": "Is deeply nesting CSS selectors automatically good architecture?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Deep nesting can tightly couple CSS to markup and increase complexity."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "modern css",
        "native",
        "css",
        "nesting"
      ]
    },
    {
      "id": "css-logical-properties",
      "stage": "Modern CSS",
      "order": 40,
      "level": "Advanced",
      "title": "Logical properties for adaptable layouts",
      "summary": "Style start/end and block/inline directions instead of assuming left/right forever.",
      "definition": "Logical properties such as `margin-inline`, `padding-block`, and `inset-inline-start` follow writing direction and writing mode.",
      "learn": [
        "Inline vs block axes",
        "margin-inline and padding-block",
        "Why logical properties help international layouts"
      ],
      "objective": "Write directional spacing that adapts better to different writing systems.",
      "explanation": "Traditional properties such as `margin-left` assume a physical direction. Logical properties describe meaning: inline start/end and block start/end.\n\nIn left-to-right English, inline start is usually left. In right-to-left text, it flips automatically.",
      "tip": "Use logical spacing in reusable components when left/right direction is not semantically important.",
      "hack": "`margin-inline: auto` is a concise way to center a block with a constrained width.",
      "mistake": "Do not mechanically replace every physical property. Sometimes a physical direction is intentional, such as a visual effect anchored to the actual top-left corner.",
      "expected": "The card uses inline/block spacing rather than hard-coded left/right spacing.",
      "realUse": "Internationalized sites, reusable components, and design systems benefit from logical properties.",
      "html": "<article class=\"logical\"><h2>Logical spacing</h2><p>This component uses inline/block directions.</p></article>",
      "css": ".logical { max-width: 520px; margin-inline: auto; margin-block: 30px; padding-inline: 24px; padding-block: 20px; border-inline-start: 5px solid #0879b7; font-family: system-ui, sans-serif; background: #f2f8fc; }",
      "quiz": [
        {
          "question": "What does `margin-inline` relate to?",
          "options": [
            "The inline writing axis",
            "Only vertical height",
            "JavaScript scope",
            "Image compression"
          ],
          "correctIndex": 0,
          "explanation": "Logical inline properties follow the inline writing direction."
        },
        {
          "question": "Why are logical properties useful?",
          "options": [
            "They adapt better to writing direction/mode",
            "They make all CSS shorter",
            "They replace HTML",
            "They create animations automatically"
          ],
          "correctIndex": 0,
          "explanation": "Logical directions are more adaptable across writing systems."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "modern css",
        "logical",
        "properties",
        "for",
        "adaptable",
        "layouts"
      ]
    },
    {
      "id": "css-supports-feature-queries",
      "stage": "Modern CSS",
      "order": 50,
      "level": "Advanced",
      "title": "Feature queries with @supports",
      "summary": "Apply enhanced CSS only when the browser supports the feature you need.",
      "definition": "`@supports` is a CSS feature query that conditionally applies styles when a property/value combination is supported.",
      "learn": [
        "Basic @supports syntax",
        "Progressive enhancement",
        "Fallback-first thinking"
      ],
      "objective": "Add modern enhancements without making the base experience depend on them.",
      "explanation": "`@supports` lets you ask the browser whether it understands a CSS feature. You can write a reliable fallback first, then enhance when support exists.\n\nThis is progressive enhancement: essential content and layout still work, while capable browsers receive the improved version.",
      "tip": "Use feature queries for meaningful compatibility boundaries, not around every modern property.",
      "hack": "Write the fallback immediately before the enhanced rule so future maintainers see both paths together.",
      "mistake": "Do not assume feature queries replace testing. A supported property can still behave differently in edge cases.",
      "expected": "The card uses a basic background, then receives a gradient when supported.",
      "realUse": "Useful when adopting newer CSS in products that still support a broader browser range.",
      "html": "<article class=\"feature-card\"><h2>Progressive CSS</h2></article>",
      "css": ".feature-card { max-width: 500px; margin: 30px auto; padding: 30px; background: #eaf5fb; font-family: system-ui, sans-serif; border-radius: 14px; }\n@supports (background: linear-gradient(red, blue)) {\n  .feature-card { background: linear-gradient(135deg, #eaf5fb, #dff8ef); }\n}",
      "quiz": [
        {
          "question": "What does @supports check?",
          "options": [
            "Whether a CSS feature/property value is supported",
            "The user's password",
            "Database health",
            "HTML validity only"
          ],
          "correctIndex": 0,
          "explanation": "Feature queries test CSS support conditions."
        },
        {
          "question": "What strategy works well with @supports?",
          "options": [
            "Fallback first, enhancement second",
            "No fallback ever",
            "Inline styles only",
            "Use !important everywhere"
          ],
          "correctIndex": 0,
          "explanation": "Progressive enhancement keeps the core experience reliable."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "modern css",
        "feature",
        "queries",
        "with",
        "supports"
      ]
    },
    {
      "id": "css-form-controls",
      "stage": "Forms, Tables & UI",
      "order": 10,
      "level": "Intermediate",
      "title": "Style forms without harming usability",
      "summary": "Make inputs, selects, and buttons feel consistent while keeping labels, focus, and native behavior usable.",
      "definition": "Form styling changes the visual presentation of interactive controls while preserving their semantic and keyboard behavior.",
      "learn": [
        "Inheriting fonts into controls",
        "Labels and spacing",
        "Focus-visible states",
        "accent-color and appearance considerations"
      ],
      "objective": "Build form controls that look intentional and remain easy to use.",
      "explanation": "Browsers give form controls native styles. You can customize them, but do not remove useful states and behavior accidentally.\n\nUse real labels, comfortable target sizes, visible focus, and consistent typography. `font: inherit` is often helpful because controls may not inherit the page font automatically in the way you expect.",
      "tip": "Test forms with keyboard only. If you cannot see where focus is, the styling is incomplete.",
      "hack": "`accent-color` can quickly align checkboxes/radios with a brand color while retaining native control behavior.",
      "mistake": "Do not remove native appearance and rebuild every detail unless you actually need that complexity.",
      "expected": "The form has readable labels, consistent font, comfortable spacing, and a visible focus ring.",
      "realUse": "Contact forms, checkout, admin screens, search, login, and settings pages need strong form CSS.",
      "html": "<form class=\"demo-form\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"name@example.com\"><label class=\"check\"><input type=\"checkbox\" checked> Subscribe</label><button>Save</button></form>",
      "css": ".demo-form { display: grid; gap: 10px; max-width: 380px; margin: 30px auto; font-family: system-ui, sans-serif; }\n.demo-form input, .demo-form button { font: inherit; }\n.demo-form input[type=\"email\"] { padding: 11px 12px; border: 1px solid #b9c9d5; border-radius: 9px; }\n.demo-form input:focus-visible { outline: 3px solid #8cddff; outline-offset: 2px; }\n.demo-form input[type=\"checkbox\"] { accent-color: #0879b7; }\n.demo-form button { padding: 10px 14px; border: 0; border-radius: 9px; background: #0879b7; color: white; }",
      "quiz": [
        {
          "question": "Why use `font: inherit` on many form controls?",
          "options": [
            "To make them follow the surrounding typography",
            "To disable inputs",
            "To add Grid",
            "To store values"
          ],
          "correctIndex": 0,
          "explanation": "It helps controls match the page's font system."
        },
        {
          "question": "What should remain visible for keyboard users?",
          "options": [
            "Focus state",
            "Only hover state",
            "The CSS file name",
            "Margin collapse"
          ],
          "correctIndex": 0,
          "explanation": "Keyboard interaction needs a clear focus indicator."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "ui & media",
        "style",
        "forms",
        "without",
        "harming",
        "usability"
      ]
    },
    {
      "id": "css-tables",
      "stage": "Forms, Tables & UI",
      "order": 20,
      "level": "Intermediate",
      "title": "Readable tables and horizontal overflow",
      "summary": "Keep tabular data usable on narrow screens without destroying the table structure.",
      "definition": "Table CSS styles tabular data while preserving row/column relationships defined by semantic table HTML.",
      "learn": [
        "border-collapse",
        "Cell padding and alignment",
        "Header styling",
        "Safe horizontal scrolling"
      ],
      "objective": "Style data tables for readability and mobile constraints.",
      "explanation": "Tables are appropriate when data has real row/column relationships. CSS can improve spacing and hierarchy, but narrow screens may not have enough width.\n\nA practical solution is to wrap the table in an overflow container so users can scroll horizontally instead of shrinking text into unreadable columns.",
      "tip": "Right-align numeric columns when that improves scanning and comparison.",
      "hack": "Use `font-variant-numeric: tabular-nums` for numbers that should align more consistently.",
      "mistake": "Do not replace a real data table with unrelated divs just to make styling easier.",
      "expected": "The table has clean cell spacing and can scroll horizontally inside its wrapper if needed.",
      "realUse": "Reports, inventory, finance, pricing, analytics, and admin systems rely on table CSS.",
      "html": "<div class=\"table-wrap\"><table><thead><tr><th>Product</th><th>Stock</th><th>Price</th></tr></thead><tbody><tr><td>Liempo</td><td>12</td><td>₱145.00</td></tr><tr><td>Chicken</td><td>8</td><td>₱120.00</td></tr></tbody></table></div>",
      "css": ".table-wrap { overflow-x: auto; font-family: system-ui, sans-serif; }\ntable { width: 100%; min-width: 520px; border-collapse: collapse; }\nth, td { padding: 12px 14px; border-bottom: 1px solid #dce5ec; text-align: left; }\nth { background: #eef6fb; color: #29495f; }\ntd:nth-child(2), td:nth-child(3) { text-align: right; font-variant-numeric: tabular-nums; }",
      "quiz": [
        {
          "question": "Why wrap a wide table in `overflow-x: auto`?",
          "options": [
            "To preserve readable columns on narrow screens",
            "To hide all data",
            "To make text tiny",
            "To remove semantics"
          ],
          "correctIndex": 0,
          "explanation": "Horizontal scrolling can preserve the data structure and readable sizing."
        },
        {
          "question": "Which property merges adjacent table borders into a cleaner model?",
          "options": [
            "border-collapse",
            "grid-auto-flow",
            "object-fit",
            "position"
          ],
          "correctIndex": 0,
          "explanation": "`border-collapse` controls the table border model."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "ui & media",
        "readable",
        "tables",
        "and",
        "horizontal",
        "overflow"
      ]
    },
    {
      "id": "css-focus-contrast-accessibility",
      "stage": "Accessibility",
      "order": 5,
      "level": "Advanced",
      "title": "CSS accessibility: focus, contrast, targets, and hidden content",
      "summary": "Learn the styling choices that can make a technically working UI difficult—or easy—to use.",
      "definition": "Accessible CSS supports perceivable content and operable interaction through readable contrast, visible focus, appropriate sizing, and careful hiding techniques.",
      "learn": [
        "Visible focus indicators",
        "Color contrast mindset",
        "Comfortable target sizing",
        "Difference between visually hidden and display:none"
      ],
      "objective": "Treat accessibility as part of visual quality, not a final patch.",
      "explanation": "CSS affects whether users can see text, find keyboard focus, tap controls comfortably, and access hidden content.\n\n`display: none` removes content from layout and generally from the accessibility tree. A visually-hidden utility can hide content visually while keeping it available to assistive technology when that is the intended behavior.",
      "tip": "Never use color alone to communicate an error/success state. Add text, iconography, or another cue.",
      "hack": "Test keyboard focus before polishing hover effects. If focus works first, interaction styling stays more inclusive.",
      "mistake": "Do not set `outline: none` without providing an equally clear focus indicator.",
      "expected": "The button has a strong focus-visible ring and comfortable padding.",
      "realUse": "Every interactive product benefits from CSS accessibility checks.",
      "html": "<button class=\"accessible-action\">Keyboard-focus me</button>",
      "css": "body { padding: 40px; font-family: system-ui, sans-serif; }\n.accessible-action { min-height: 44px; padding: 10px 16px; border: 0; border-radius: 10px; background: #0d2235; color: white; font-weight: 800; }\n.accessible-action:hover { background: #0879b7; }\n.accessible-action:focus-visible { outline: 4px solid #58d5ff; outline-offset: 3px; }",
      "quiz": [
        {
          "question": "Is `outline: none` safe with no replacement?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Removing the only focus indicator can make keyboard navigation unusable."
        },
        {
          "question": "Should color be the only signal for an error state?",
          "options": [
            "No",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Use additional text/icon/state cues so the meaning is not color-dependent."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "animation & accessibility",
        "css",
        "accessibility",
        "focus",
        "contrast",
        "targets"
      ]
    },
    {
      "id": "css-transforms-transitions",
      "categoryId": "css",
      "mode": "code",
      "stage": "Transforms & Animation",
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
      "stage": "Transforms & Animation",
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
      "stage": "Architecture & Performance",
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
      ],
      "definition": "Cascade layers group CSS into an explicit priority order, helping larger stylesheets avoid specificity escalation.",
      "learn": [
        "Declare layer order",
        "Separate base/components/utilities",
        "Control priority before selector specificity"
      ]
    },
    {
      "id": "css-expert-practice-card-system",
      "categoryId": "css",
      "mode": "code",
      "stage": "Projects & Expert Practice",
      "order": 90,
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
      "id": "css-component-architecture",
      "categoryId": "css",
      "mode": "code",
      "stage": "Architecture & Performance",
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
      "stage": "Architecture & Performance",
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
      "id": "css-contain-content-visibility",
      "stage": "Architecture & Performance",
      "order": 35,
      "level": "Advanced",
      "title": "Rendering containment and content-visibility",
      "summary": "Use advanced rendering controls only when a real performance problem justifies them.",
      "definition": "Containment properties let authors limit how layout/paint/style effects escape a subtree; `content-visibility` can allow browsers to skip rendering off-screen content.",
      "learn": [
        "What containment is for",
        "content-visibility: auto",
        "Why intrinsic size hints matter",
        "Why measurement comes before optimization"
      ],
      "objective": "Recognize CSS rendering tools that can help very large interfaces without cargo-cult optimization.",
      "explanation": "Large pages can contain sections far below the viewport. `content-visibility: auto` lets the browser skip some rendering work for off-screen content until it becomes relevant.\n\n`contain` can isolate layout, paint, size, or style effects. These are advanced tools with behavior tradeoffs, so measure before and after instead of applying them everywhere.",
      "tip": "Use performance tools before optimizing. A property is not a performance win just because it sounds advanced.",
      "hack": "When using `content-visibility: auto`, `contain-intrinsic-size` can provide an estimated placeholder size to reduce scroll jumps.",
      "mistake": "Do not add containment blindly to components that depend on sizing or painting relationships outside their subtree.",
      "expected": "The sections render normally; the CSS demonstrates where off-screen rendering optimization can be applied.",
      "realUse": "Very long feeds, documentation pages, dashboards, and large component lists may benefit after measurement.",
      "html": "<main class=\"long-page\"><section>Section A</section><section>Section B</section><section>Section C</section></main>",
      "css": ".long-page { display: grid; gap: 20px; font-family: system-ui, sans-serif; }\n.long-page section { min-height: 220px; padding: 24px; background: #eef6fb; border-radius: 14px; content-visibility: auto; contain-intrinsic-size: 220px; }",
      "quiz": [
        {
          "question": "When should you use advanced containment for performance?",
          "options": [
            "After identifying a real rendering problem and testing the tradeoff",
            "On every div by default",
            "Only to change colors",
            "Instead of semantic HTML"
          ],
          "correctIndex": 0,
          "explanation": "Measure first; containment changes rendering behavior and should solve a real problem."
        },
        {
          "question": "What can `content-visibility: auto` help the browser skip?",
          "options": [
            "Some off-screen rendering work",
            "All network requests",
            "Java compilation",
            "HTML parsing entirely"
          ],
          "correctIndex": 0,
          "explanation": "It can defer rendering work for content that is not currently relevant to the viewport."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "architecture & expert practice",
        "rendering",
        "containment",
        "and",
        "content",
        "visibility"
      ]
    },
    {
      "id": "css-print-styles",
      "stage": "Architecture & Performance",
      "order": 45,
      "level": "Advanced",
      "title": "Print styles: CSS beyond the screen",
      "summary": "Adapt a page for printing or PDF output instead of printing navigation, dark backgrounds, and controls exactly as-is.",
      "definition": "Print CSS uses the print media context—commonly `@media print`—to adjust a document for paper/PDF output.",
      "learn": [
        "@media print",
        "Hiding non-print controls",
        "Improving contrast for paper",
        "Why URLs/content may need print-specific treatment"
      ],
      "objective": "Recognize that responsive design includes different output media, not only screen widths.",
      "explanation": "A screen interface may have navigation, dark surfaces, sticky controls, and interactive buttons that do not make sense on paper.\n\nInside `@media print`, you can simplify colors, hide irrelevant controls, remove shadows, and make content easier to print or export as PDF.",
      "tip": "Use the browser's print preview during testing. It reveals issues that normal responsive DevTools may not show.",
      "hack": "For articles, you can optionally expose link URLs in print using pseudo-elements when that helps the printed document.",
      "mistake": "Do not hide essential content just because it is interactive on screen.",
      "expected": "On screen the demo looks normal; the print media rule shows how it would simplify for printing.",
      "realUse": "Reports, invoices, resumes, documentation, receipts, and printable summaries benefit from print CSS.",
      "html": "<article class=\"print-demo\"><nav>Screen navigation</nav><h1>Printable report</h1><p>Important content should remain.</p><button>Screen action</button></article>",
      "css": ".print-demo { max-width: 640px; margin: 30px auto; padding: 24px; font-family: system-ui, sans-serif; background: #f2f7fb; }\n@media print {\n  .print-demo { max-width: none; margin: 0; padding: 0; background: white; color: black; }\n  .print-demo nav, .print-demo button { display: none; }\n}",
      "quiz": [
        {
          "question": "Which at-rule commonly holds print-specific CSS?",
          "options": [
            "@media print",
            "@keyframes print",
            "@database print",
            "@grid print"
          ],
          "correctIndex": 0,
          "explanation": "Print-specific rules commonly use `@media print`."
        },
        {
          "question": "What is a good print-style goal?",
          "options": [
            "Keep essential content while removing irrelevant screen-only controls",
            "Hide the whole page",
            "Force animations",
            "Use dark backgrounds everywhere"
          ],
          "correctIndex": 0,
          "explanation": "Print CSS should preserve useful content and simplify screen-only UI."
        }
      ],
      "categoryId": "css",
      "mode": "code",
      "js": "",
      "tags": [
        "css",
        "architecture & expert practice",
        "print",
        "styles",
        "css",
        "beyond",
        "the"
      ]
    },
    {
      "id": "css-color-keywords",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 20,
      "level": "Beginner",
      "title": "Named colors",
      "summary": "Focused lesson: Named colors. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "CSS includes standardized color keywords such as red, navy, transparent, and many others.",
      "learn": [
        "Named colors",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Named colors well enough to use it intentionally.",
      "explanation": "Named colors are readable and useful for learning. In larger products, repeated brand colors are usually easier to manage through design tokens.",
      "tip": "Use named colors when the name is clear; use reusable tokens for product palettes.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Build a large brand palette from unrelated named colors.",
      "expected": "The sample visibly demonstrates Named colors.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "named",
        "colors"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;background:navy;color:white;border-radius:14px}",
      "js": "",
      "quiz": [
        {
          "question": "Which is a valid CSS color keyword?",
          "options": [
            "navy",
            "brandBlue",
            "rgb-blue",
            "color(blue)"
          ],
          "correctIndex": 0,
          "explanation": "navy is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Build a large brand palette from unrelated named colors.",
            "Use named colors when the name is clear; use reusable tokens for product palettes.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Build a large brand palette from unrelated named colors."
        }
      ]
    },
    {
      "id": "css-hex-colors",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 30,
      "level": "Beginner",
      "title": "HEX colors",
      "summary": "Focused lesson: HEX colors. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Hex colors encode red, green, and blue channels using hexadecimal digits, commonly in #RRGGBB form.",
      "learn": [
        "HEX colors",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand HEX colors well enough to use it intentionally.",
      "explanation": "Six-digit HEX is common in design handoffs because it is compact and predictable. Short forms such as #fff are expanded versions when each pair repeats.",
      "tip": "Use a consistent notation across a design system unless another format is clearer.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Assume every short HEX form means the same alpha behavior.",
      "expected": "The sample visibly demonstrates HEX colors.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "hex",
        "colors"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;background:#0d2235;color:#5bd6ff;border:3px solid #0879b7}",
      "js": "",
      "quiz": [
        {
          "question": "What does six-digit HEX mainly encode?",
          "options": [
            "Red, green, and blue channels",
            "Font size",
            "Grid columns",
            "Viewport width"
          ],
          "correctIndex": 0,
          "explanation": "Red, green, and blue channels is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Assume every short HEX form means the same alpha behavior.",
            "Use a consistent notation across a design system unless another format is clearer.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Assume every short HEX form means the same alpha behavior."
        }
      ]
    },
    {
      "id": "css-rgb-alpha",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 40,
      "level": "Beginner",
      "title": "rgb() and alpha",
      "summary": "Focused lesson: rgb() and alpha. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "rgb() expresses red, green, and blue color channels and can include alpha transparency.",
      "learn": [
        "rgb() and alpha",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand rgb() and alpha well enough to use it intentionally.",
      "explanation": "Alpha affects the color itself. This is different from element opacity, which fades the whole rendered element including its children.",
      "tip": "Use alpha colors when only the color layer should be translucent.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use parent opacity when text must remain fully opaque.",
      "expected": "The sample visibly demonstrates rgb() and alpha.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "rgb",
        "and",
        "alpha"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px;background:#eef5f9}.sample{padding:24px;background:rgb(8 121 183 / .18);color:rgb(13 34 53);border:1px solid rgb(8 121 183 / .45)}",
      "js": "",
      "quiz": [
        {
          "question": "What does alpha control in an RGB color?",
          "options": [
            "The color's transparency",
            "Font weight",
            "Element width",
            "Specificity"
          ],
          "correctIndex": 0,
          "explanation": "The color's transparency is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use parent opacity when text must remain fully opaque.",
            "Use alpha colors when only the color layer should be translucent.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use parent opacity when text must remain fully opaque."
        }
      ]
    },
    {
      "id": "css-hsl-colors",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 50,
      "level": "Beginner",
      "title": "hsl() colors",
      "summary": "Focused lesson: hsl() colors. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "hsl() describes color using hue, saturation, and lightness, with optional alpha.",
      "learn": [
        "hsl() colors",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand hsl() colors well enough to use it intentionally.",
      "explanation": "HSL can make related shades easier to reason about because you can keep hue while adjusting saturation or lightness.",
      "tip": "Use HSL when shade relationships are easier to express through saturation/lightness.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Assume equal numeric lightness means equal perceived brightness for every hue.",
      "expected": "The sample visibly demonstrates hsl() colors.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "hsl",
        "colors"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;background:hsl(198 92% 37%);color:white;border-radius:14px}",
      "js": "",
      "quiz": [
        {
          "question": "What does H mean in HSL?",
          "options": [
            "Hue",
            "Height",
            "Highlight",
            "Hierarchy"
          ],
          "correctIndex": 0,
          "explanation": "Hue is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Assume equal numeric lightness means equal perceived brightness for every hue.",
            "Use HSL when shade relationships are easier to express through saturation/lightness.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Assume equal numeric lightness means equal perceived brightness for every hue."
        }
      ]
    },
    {
      "id": "css-currentcolor",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 60,
      "level": "Intermediate",
      "title": "currentColor",
      "summary": "Focused lesson: currentColor. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "currentColor reuses the element's computed color value anywhere a color value is accepted.",
      "learn": [
        "currentColor",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand currentColor well enough to use it intentionally.",
      "explanation": "This keeps borders, icons, outlines, or SVG details synchronized with text color without repeating the same value.",
      "tip": "Use currentColor when accents should intentionally follow text state.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use currentColor when the accent must stay independent from text changes.",
      "expected": "The sample visibly demonstrates currentColor.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "currentcolor"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{color:#0879b7;padding:24px;border:3px solid currentColor;border-radius:14px}",
      "js": "",
      "quiz": [
        {
          "question": "What value does currentColor reuse?",
          "options": [
            "The element's computed text color",
            "Its background",
            "The browser theme only",
            "Its width"
          ],
          "correctIndex": 0,
          "explanation": "The element's computed text color is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use currentColor when the accent must stay independent from text changes.",
            "Use currentColor when accents should intentionally follow text state.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use currentColor when the accent must stay independent from text changes."
        }
      ]
    },
    {
      "id": "css-opacity",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 70,
      "level": "Intermediate",
      "title": "opacity",
      "summary": "Focused lesson: opacity. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "opacity controls the transparency of the entire rendered element, including descendants.",
      "learn": [
        "opacity",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand opacity well enough to use it intentionally.",
      "explanation": "Opacity is useful for fading a whole component. If only the background should be translucent, an alpha color is usually better.",
      "tip": "Use opacity when the entire component should fade together.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Lower parent opacity just to make one background translucent.",
      "expected": "The sample visibly demonstrates opacity.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "opacity"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;background:#0879b7;color:white;opacity:.55;border-radius:14px}",
      "js": "",
      "quiz": [
        {
          "question": "What does element opacity affect?",
          "options": [
            "The entire rendered element including descendants",
            "Only background",
            "Only text",
            "Only border"
          ],
          "correctIndex": 0,
          "explanation": "The entire rendered element including descendants is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Lower parent opacity just to make one background translucent.",
            "Use opacity when the entire component should fade together.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Lower parent opacity just to make one background translucent."
        }
      ]
    },
    {
      "id": "css-background-image",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 80,
      "level": "Intermediate",
      "title": "background-image",
      "summary": "Focused lesson: background-image. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "background-image paints an image or generated gradient behind an element's content.",
      "learn": [
        "background-image",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand background-image well enough to use it intentionally.",
      "explanation": "Background layers are presentation. Essential text and meaning should remain in HTML rather than inside decorative imagery.",
      "tip": "Use background images for decoration, not as the only carrier of essential content.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Place critical readable text only inside a background image.",
      "expected": "The sample visibly demonstrates background-image.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "background",
        "image"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:50px 24px;color:white;background-image:linear-gradient(135deg,#0d2235,#0879b7);border-radius:16px}",
      "js": "",
      "quiz": [
        {
          "question": "Where is a background image painted?",
          "options": [
            "Behind the element's content",
            "As a new HTML element",
            "Only outside the border",
            "Inside the DOM as text"
          ],
          "correctIndex": 0,
          "explanation": "Behind the element's content is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Place critical readable text only inside a background image.",
            "Use background images for decoration, not as the only carrier of essential content.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Place critical readable text only inside a background image."
        }
      ]
    },
    {
      "id": "css-background-repeat",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 90,
      "level": "Intermediate",
      "title": "background-repeat",
      "summary": "Focused lesson: background-repeat. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "background-repeat controls whether and how a background image tiles.",
      "learn": [
        "background-repeat",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand background-repeat well enough to use it intentionally.",
      "explanation": "The default repeats. no-repeat is common for hero/decorative images; repeat patterns are useful for intentional textures.",
      "tip": "Choose repeat behavior deliberately based on the asset.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Rely on default repeating for a single hero image.",
      "expected": "The sample visibly demonstrates background-repeat.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "background",
        "repeat"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{min-height:150px;padding:20px;background-color:#eef8fd;background-image:radial-gradient(circle,#0879b7 2px,transparent 3px);background-size:24px 24px}",
      "js": "",
      "quiz": [
        {
          "question": "Which value stops a background from tiling?",
          "options": [
            "no-repeat",
            "contain",
            "center",
            "fixed"
          ],
          "correctIndex": 0,
          "explanation": "no-repeat is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Rely on default repeating for a single hero image.",
            "Choose repeat behavior deliberately based on the asset.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Rely on default repeating for a single hero image."
        }
      ]
    },
    {
      "id": "css-background-position-size",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 100,
      "level": "Intermediate",
      "title": "background-position and size",
      "summary": "Focused lesson: background-position and size. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "background-position places a background image; background-size controls its rendered dimensions.",
      "learn": [
        "background-position and size",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand background-position and size well enough to use it intentionally.",
      "explanation": "cover fills the frame and may crop; contain preserves the whole image and may leave empty space.",
      "tip": "Choose cover only when cropping is acceptable.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use cover when important edge content must never be cropped.",
      "expected": "The sample visibly demonstrates background-position and size.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "background",
        "position",
        "and",
        "size"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{height:180px;padding:20px;color:white;background:linear-gradient(135deg,#0879b7,#5bd6ff);background-size:cover;background-position:center;border-radius:16px}",
      "js": "",
      "quiz": [
        {
          "question": "What can background-size: cover do?",
          "options": [
            "Fill the box while cropping edges",
            "Guarantee full image visibility",
            "Disable backgrounds",
            "Repeat the image"
          ],
          "correctIndex": 0,
          "explanation": "Fill the box while cropping edges is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use cover when important edge content must never be cropped.",
            "Choose cover only when cropping is acceptable.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use cover when important edge content must never be cropped."
        }
      ]
    },
    {
      "id": "css-background-attachment",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 110,
      "level": "Intermediate",
      "title": "background-attachment",
      "summary": "Focused lesson: background-attachment. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "background-attachment controls how a background is attached relative to scrolling.",
      "learn": [
        "background-attachment",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand background-attachment well enough to use it intentionally.",
      "explanation": "fixed backgrounds can create visual effects, but behavior and performance can differ across mobile/browser environments.",
      "tip": "Use attachment effects only after testing target devices.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Depend on fixed backgrounds for essential interaction.",
      "expected": "The sample visibly demonstrates background-attachment.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "background",
        "attachment"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px;min-height:700px}.sample{min-height:220px;padding:24px;color:white;background:linear-gradient(135deg,#0d2235,#0879b7);background-attachment:fixed;border-radius:16px}",
      "js": "",
      "quiz": [
        {
          "question": "What is the normal common scrolling behavior?",
          "options": [
            "scroll",
            "fixed-only",
            "absolute",
            "sticky"
          ],
          "correctIndex": 0,
          "explanation": "scroll is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Depend on fixed backgrounds for essential interaction.",
            "Use attachment effects only after testing target devices.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Depend on fixed backgrounds for essential interaction."
        }
      ]
    },
    {
      "id": "css-multiple-backgrounds",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 120,
      "level": "Intermediate",
      "title": "Multiple backgrounds",
      "summary": "Focused lesson: Multiple backgrounds. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Multiple background layers are comma-separated; the first listed layer is painted closest to the viewer.",
      "learn": [
        "Multiple backgrounds",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Multiple backgrounds well enough to use it intentionally.",
      "explanation": "Layered gradients/images can create overlays and textures without extra wrapper elements.",
      "tip": "Keep layer order understandable and text contrast readable.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Stack many decorative layers when a simpler surface would work.",
      "expected": "The sample visibly demonstrates Multiple backgrounds.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "multiple",
        "backgrounds"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:60px 24px;color:white;background-image:linear-gradient(90deg,#0d2235dd,#0d223555),radial-gradient(circle at 80% 20%,#5bd6ff 0 18%,transparent 19%),linear-gradient(135deg,#0879b7,#17344b);border-radius:16px}",
      "js": "",
      "quiz": [
        {
          "question": "Which background layer is closest to the viewer?",
          "options": [
            "The first one listed",
            "The last one only",
            "A random layer",
            "The widest one"
          ],
          "correctIndex": 0,
          "explanation": "The first one listed is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Stack many decorative layers when a simpler surface would work.",
            "Keep layer order understandable and text contrast readable.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Stack many decorative layers when a simpler surface would work."
        }
      ]
    },
    {
      "id": "css-linear-gradients",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 130,
      "level": "Intermediate",
      "title": "Linear gradients",
      "summary": "Focused lesson: Linear gradients. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "linear-gradient() generates a color transition along a line.",
      "learn": [
        "Linear gradients",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Linear gradients well enough to use it intentionally.",
      "explanation": "You can set direction and multiple color stops. The browser generates the image value without a separate file.",
      "tip": "Use a small number of intentional stops and check text contrast.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Put complex gradients behind long text without checking readability.",
      "expected": "The sample visibly demonstrates Linear gradients.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "linear",
        "gradients"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:48px 24px;color:white;background:linear-gradient(120deg,#0d2235 0 35%,#0879b7 35% 70%,#5bd6ff 70%);border-radius:16px}",
      "js": "",
      "quiz": [
        {
          "question": "Is linear-gradient() an external image file?",
          "options": [
            "No, the browser generates it",
            "Always PNG",
            "Only SVG",
            "Only with JavaScript"
          ],
          "correctIndex": 0,
          "explanation": "No, the browser generates it is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Put complex gradients behind long text without checking readability.",
            "Use a small number of intentional stops and check text contrast.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Put complex gradients behind long text without checking readability."
        }
      ]
    },
    {
      "id": "css-radial-conic-gradients",
      "categoryId": "css",
      "mode": "code",
      "stage": "Colors & Backgrounds",
      "order": 140,
      "level": "Intermediate",
      "title": "Radial and conic gradients",
      "summary": "Focused lesson: Radial and conic gradients. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "radial-gradient() expands from a center; conic-gradient() rotates color stops around a center.",
      "learn": [
        "Radial and conic gradients",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Radial and conic gradients well enough to use it intentionally.",
      "explanation": "Radial gradients suit glows; conic gradients suit angular color sweeps. They are visuals, not semantic data charts by themselves.",
      "tip": "Use them for purposeful visual effects with readable content.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Treat a conic gradient as an accessible data chart without labels.",
      "expected": "The sample visibly demonstrates Radial and conic gradients.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "colors & backgrounds",
        "radial",
        "and",
        "conic",
        "gradients"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{width:220px;aspect-ratio:1;margin:auto;border-radius:50%;background:conic-gradient(#0879b7 0 40%,#5bd6ff 40% 70%,#dfeef5 70%)}",
      "js": "",
      "quiz": [
        {
          "question": "Which gradient rotates stops around a center?",
          "options": [
            "conic-gradient()",
            "linear-gradient()",
            "url()",
            "box-shadow"
          ],
          "correctIndex": 0,
          "explanation": "conic-gradient() is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Treat a conic gradient as an accessible data chart without labels.",
            "Use them for purposeful visual effects with readable content.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Treat a conic gradient as an accessible data chart without labels."
        }
      ]
    },
    {
      "id": "css-font-stacks",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 80,
      "level": "Beginner",
      "title": "Font-family stacks",
      "summary": "Focused lesson: Font-family stacks. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "A font stack lists preferred fonts in order, ending with a generic family such as sans-serif.",
      "learn": [
        "Font-family stacks",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Font-family stacks well enough to use it intentionally.",
      "explanation": "The browser uses the first available font. Good fallbacks keep text readable if the preferred face is unavailable.",
      "tip": "End custom stacks with an appropriate generic family.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "List one unavailable font with no fallback.",
      "expected": "The sample visibly demonstrates Font-family stacks.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "font",
        "family",
        "stacks"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:Inter,system-ui,-apple-system,\"Segoe UI\",sans-serif;padding:28px}.sample{font-size:28px;font-weight:700}",
      "js": "",
      "quiz": [
        {
          "question": "Why list multiple fonts?",
          "options": [
            "To provide fallbacks",
            "To render all fonts together",
            "To increase specificity",
            "To create a gradient"
          ],
          "correctIndex": 0,
          "explanation": "To provide fallbacks is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "List one unavailable font with no fallback.",
            "End custom stacks with an appropriate generic family.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: List one unavailable font with no fallback."
        }
      ]
    },
    {
      "id": "css-font-weight-style",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 90,
      "level": "Beginner",
      "title": "font-weight and font-style",
      "summary": "Focused lesson: font-weight and font-style. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "font-weight controls emphasis weight; font-style commonly selects normal, italic, or oblique styles.",
      "learn": [
        "font-weight and font-style",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand font-weight and font-style well enough to use it intentionally.",
      "explanation": "Available weights depend on the actual font files/family. A requested 900 may be synthesized if no matching face exists.",
      "tip": "Use weights actually supported by the font and keep hierarchy intentional.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Assume every font includes every numeric weight.",
      "expected": "The sample visibly demonstrates font-weight and font-style.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "font",
        "weight",
        "and",
        "font",
        "style"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{font-size:30px;font-weight:800;font-style:italic}",
      "js": "",
      "quiz": [
        {
          "question": "Does every font guarantee every numeric weight?",
          "options": [
            "No",
            "Yes",
            "Only on mobile",
            "Only in Grid"
          ],
          "correctIndex": 0,
          "explanation": "No is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Assume every font includes every numeric weight.",
            "Use weights actually supported by the font and keep hierarchy intentional.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Assume every font includes every numeric weight."
        }
      ]
    },
    {
      "id": "css-text-align",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 100,
      "level": "Beginner",
      "title": "text-align",
      "summary": "Focused lesson: text-align. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-align controls inline content alignment within a block.",
      "learn": [
        "text-align",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-align well enough to use it intentionally.",
      "explanation": "Center can work for short headings; long centered paragraphs are often harder to scan.",
      "tip": "Keep long-form body copy aligned for comfortable reading.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Center long body paragraphs by default.",
      "expected": "The sample visibly demonstrates text-align.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "align"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{max-width:520px;padding:20px;background:#eef8fd;text-align:center}",
      "js": "",
      "quiz": [
        {
          "question": "What does text-align affect?",
          "options": [
            "Inline content alignment inside a block",
            "Grid track size",
            "z-index",
            "Image file size"
          ],
          "correctIndex": 0,
          "explanation": "Inline content alignment inside a block is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Center long body paragraphs by default.",
            "Keep long-form body copy aligned for comfortable reading.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Center long body paragraphs by default."
        }
      ]
    },
    {
      "id": "css-text-decoration",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 110,
      "level": "Intermediate",
      "title": "text-decoration",
      "summary": "Focused lesson: text-decoration. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-decoration controls underlines, overlines, line-through, color, style, and thickness.",
      "learn": [
        "text-decoration",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-decoration well enough to use it intentionally.",
      "explanation": "Links can keep a clear affordance while still getting a polished underline through offset and thickness controls.",
      "tip": "Keep links visually recognizable and refine rather than simply removing decoration.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Remove all link cues when nothing else communicates clickability.",
      "expected": "The sample visibly demonstrates text-decoration.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "decoration"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px;color:#0879b7}",
      "js": "",
      "quiz": [
        {
          "question": "Which property can move an underline away from text?",
          "options": [
            "text-underline-offset",
            "z-index",
            "grid-gap",
            "font-stretch"
          ],
          "correctIndex": 0,
          "explanation": "text-underline-offset is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Remove all link cues when nothing else communicates clickability.",
            "Keep links visually recognizable and refine rather than simply removing decoration.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Remove all link cues when nothing else communicates clickability."
        }
      ]
    },
    {
      "id": "css-text-transform",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 120,
      "level": "Intermediate",
      "title": "text-transform",
      "summary": "Focused lesson: text-transform. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-transform changes text presentation such as uppercase, lowercase, or capitalization without changing source text.",
      "learn": [
        "text-transform",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-transform well enough to use it intentionally.",
      "explanation": "It works well for short labels. Long uppercase passages can reduce readability.",
      "tip": "Use it for short labels where casing is purely presentation.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Expect it to change the stored text value.",
      "expected": "The sample visibly demonstrates text-transform.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "transform"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{text-transform:uppercase;letter-spacing:.08em;font-weight:800}",
      "js": "",
      "quiz": [
        {
          "question": "Does text-transform change underlying HTML text?",
          "options": [
            "No",
            "Yes permanently",
            "Only in forms",
            "Only in JavaScript"
          ],
          "correctIndex": 0,
          "explanation": "No is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Expect it to change the stored text value.",
            "Use it for short labels where casing is purely presentation.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Expect it to change the stored text value."
        }
      ]
    },
    {
      "id": "css-letter-word-spacing",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 130,
      "level": "Intermediate",
      "title": "letter-spacing and word-spacing",
      "summary": "Focused lesson: letter-spacing and word-spacing. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "letter-spacing adjusts character spacing; word-spacing adjusts space between words.",
      "learn": [
        "letter-spacing and word-spacing",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand letter-spacing and word-spacing well enough to use it intentionally.",
      "explanation": "Small spacing changes can help labels or display type. Large changes in body copy usually hurt readability.",
      "tip": "Use subtle adjustments and test real words at the real size.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Apply large letter spacing to long body paragraphs.",
      "expected": "The sample visibly demonstrates letter-spacing and word-spacing.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "letter",
        "spacing",
        "and",
        "word",
        "spacing"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{font-size:28px;letter-spacing:.06em;word-spacing:.18em}",
      "js": "",
      "quiz": [
        {
          "question": "Which property changes spacing between characters?",
          "options": [
            "letter-spacing",
            "word-spacing",
            "line-height",
            "white-space"
          ],
          "correctIndex": 0,
          "explanation": "letter-spacing is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Apply large letter spacing to long body paragraphs.",
            "Use subtle adjustments and test real words at the real size.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Apply large letter spacing to long body paragraphs."
        }
      ]
    },
    {
      "id": "css-text-indent",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 140,
      "level": "Intermediate",
      "title": "text-indent",
      "summary": "Focused lesson: text-indent. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-indent changes the indentation of the first line of a text block.",
      "learn": [
        "text-indent",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-indent well enough to use it intentionally.",
      "explanation": "It can support editorial paragraph styles, but UI layouts usually use padding/margin for positioning.",
      "tip": "Use it when first-line indentation is an intentional text style.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use text-indent to position an entire component.",
      "expected": "The sample visibly demonstrates text-indent.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "indent"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:Georgia,serif;padding:28px}.sample{max-width:520px;line-height:1.7;text-indent:2em}",
      "js": "",
      "quiz": [
        {
          "question": "Which part does text-indent normally affect?",
          "options": [
            "The first line",
            "Every line equally",
            "Only the last word",
            "The border"
          ],
          "correctIndex": 0,
          "explanation": "The first line is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use text-indent to position an entire component.",
            "Use it when first-line indentation is an intentional text style.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use text-indent to position an entire component."
        }
      ]
    },
    {
      "id": "css-white-space",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 150,
      "level": "Intermediate",
      "title": "white-space",
      "summary": "Focused lesson: white-space. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "white-space controls collapsing, preservation, and wrapping of spaces and line breaks.",
      "learn": [
        "white-space",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand white-space well enough to use it intentionally.",
      "explanation": "normal, nowrap, pre, and pre-wrap solve different needs. Code/log content often needs preserved whitespace.",
      "tip": "Choose based on whether source spacing is meaningful and whether wrapping is needed.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use nowrap on long content without a safe overflow plan.",
      "expected": "The sample visibly demonstrates white-space.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "white",
        "space"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{max-width:360px;white-space:pre-wrap;padding:16px;background:#eef8fd}",
      "js": "",
      "quiz": [
        {
          "question": "Which value preserves whitespace while allowing wrapping?",
          "options": [
            "pre-wrap",
            "nowrap",
            "hidden",
            "block"
          ],
          "correctIndex": 0,
          "explanation": "pre-wrap is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use nowrap on long content without a safe overflow plan.",
            "Choose based on whether source spacing is meaningful and whether wrapping is needed.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use nowrap on long content without a safe overflow plan."
        }
      ]
    },
    {
      "id": "css-text-overflow",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 160,
      "level": "Intermediate",
      "title": "text-overflow and ellipsis",
      "summary": "Focused lesson: text-overflow and ellipsis. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-overflow describes how clipped inline content is signaled, commonly using ellipsis.",
      "learn": [
        "text-overflow and ellipsis",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-overflow and ellipsis well enough to use it intentionally.",
      "explanation": "Ellipsis hides some content visually, so important full values should remain available another way.",
      "tip": "Use ellipsis for compact previews while preserving access to the full value.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Truncate critical identifiers with no way to reveal the full text.",
      "expected": "The sample visibly demonstrates text-overflow and ellipsis.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "overflow",
        "and",
        "ellipsis"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{max-width:260px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:12px;background:#eef8fd}",
      "js": "",
      "quiz": [
        {
          "question": "What commonly accompanies text-overflow: ellipsis?",
          "options": [
            "overflow hidden plus nowrap",
            "display:none",
            "position:fixed",
            "z-index:9999"
          ],
          "correctIndex": 0,
          "explanation": "overflow hidden plus nowrap is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Truncate critical identifiers with no way to reveal the full text.",
            "Use ellipsis for compact previews while preserving access to the full value.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Truncate critical identifiers with no way to reveal the full text."
        }
      ]
    },
    {
      "id": "css-text-shadow",
      "categoryId": "css",
      "mode": "code",
      "stage": "Typography & Text",
      "order": 170,
      "level": "Intermediate",
      "title": "text-shadow",
      "summary": "Focused lesson: text-shadow. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "text-shadow draws one or more shadows behind rendered text.",
      "learn": [
        "text-shadow",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand text-shadow well enough to use it intentionally.",
      "explanation": "A subtle shadow can improve separation in a hero treatment, but heavy shadows reduce clarity.",
      "tip": "Use it sparingly and verify contrast at real sizes.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Put large blurry shadows on body copy.",
      "expected": "The sample visibly demonstrates text-shadow.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "typography & text",
        "text",
        "shadow"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px;background:#0d2235}.sample{font-size:42px;color:white;text-shadow:0 3px 12px #0009}",
      "js": "",
      "quiz": [
        {
          "question": "What does text-shadow apply to?",
          "options": [
            "Rendered text glyphs",
            "The entire Grid",
            "Only borders",
            "Only image pixels"
          ],
          "correctIndex": 0,
          "explanation": "Rendered text glyphs is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Put large blurry shadows on body copy.",
            "Use it sparingly and verify contrast at real sizes.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Put large blurry shadows on body copy."
        }
      ]
    },
    {
      "id": "css-margin",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 60,
      "level": "Beginner",
      "title": "Margins",
      "summary": "Focused lesson: Margins. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Margin creates space outside an element's border.",
      "learn": [
        "Margins",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Margins well enough to use it intentionally.",
      "explanation": "Margins separate boxes. Inside Flexbox/Grid, gap is often cleaner for repeated child spacing.",
      "tip": "Use margin for external spacing and gap for repeated layout spacing.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Add random margins to every child when the parent can use gap.",
      "expected": "The sample visibly demonstrates Margins.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "margins"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{margin:32px;padding:20px;border:2px solid #0879b7;background:#eef8fd}",
      "js": "",
      "quiz": [
        {
          "question": "Where is margin located?",
          "options": [
            "Outside the border",
            "Inside the content",
            "Between characters",
            "Inside padding"
          ],
          "correctIndex": 0,
          "explanation": "Outside the border is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Add random margins to every child when the parent can use gap.",
            "Use margin for external spacing and gap for repeated layout spacing.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Add random margins to every child when the parent can use gap."
        }
      ]
    },
    {
      "id": "css-margin-collapse",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 70,
      "level": "Intermediate",
      "title": "Margin collapsing",
      "summary": "Focused lesson: Margin collapsing. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Certain vertical margins in normal block flow can collapse instead of simply adding together.",
      "learn": [
        "Margin collapsing",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Margin collapsing well enough to use it intentionally.",
      "explanation": "This surprises beginners. Flex and Grid items do not collapse margins in the same way.",
      "tip": "Use gap or padding when you need predictable component spacing.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Keep increasing vertical margins without checking collapse.",
      "expected": "The sample visibly demonstrates Margin collapsing.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "margin",
        "collapsing"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.demo p{margin-block:30px;padding:8px;background:#eef8fd}",
      "js": "",
      "quiz": [
        {
          "question": "Do vertical margins always add together?",
          "options": [
            "No",
            "Yes always",
            "Only in Grid",
            "Only on buttons"
          ],
          "correctIndex": 0,
          "explanation": "No is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Keep increasing vertical margins without checking collapse.",
            "Use gap or padding when you need predictable component spacing.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Keep increasing vertical margins without checking collapse."
        }
      ]
    },
    {
      "id": "css-padding",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 80,
      "level": "Beginner",
      "title": "Padding",
      "summary": "Focused lesson: Padding. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Padding creates space between content and border.",
      "learn": [
        "Padding",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Padding well enough to use it intentionally.",
      "explanation": "Padding is internal breathing room and often increases the comfortable clickable surface of controls.",
      "tip": "Use padding for internal component space and touch-target comfort.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use child margins as a substitute for the component's own padding.",
      "expected": "The sample visibly demonstrates Padding.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "padding"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:32px;border:2px solid #0879b7;background:#eef8fd}",
      "js": "",
      "quiz": [
        {
          "question": "Where is padding?",
          "options": [
            "Between content and border",
            "Outside margin",
            "Between Grid tracks only",
            "Inside a font file"
          ],
          "correctIndex": 0,
          "explanation": "Between content and border is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use child margins as a substitute for the component's own padding.",
            "Use padding for internal component space and touch-target comfort.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use child margins as a substitute for the component's own padding."
        }
      ]
    },
    {
      "id": "css-border-styles",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 90,
      "level": "Intermediate",
      "title": "Border width, style, and color",
      "summary": "Focused lesson: Border width, style, and color. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "A visible border combines width, style, and color; the border shorthand can set all three.",
      "learn": [
        "Border width, style, and color",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand Border width, style, and color well enough to use it intentionally.",
      "explanation": "Borders define edges for cards, tables, focus-like treatments, and dense UI.",
      "tip": "Use subtle borders when separation matters more than elevation.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Use border colors so low-contrast that boundaries disappear.",
      "expected": "The sample visibly demonstrates Border width, style, and color.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "border",
        "width",
        "style",
        "and",
        "color"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;border:3px dashed #0879b7;border-radius:12px}",
      "js": "",
      "quiz": [
        {
          "question": "What does border shorthand commonly combine?",
          "options": [
            "Width, style, and color",
            "Margin, padding, gap",
            "Font, line-height, color",
            "Top, left, z-index"
          ],
          "correctIndex": 0,
          "explanation": "Width, style, and color is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Use border colors so low-contrast that boundaries disappear.",
            "Use subtle borders when separation matters more than elevation.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Use border colors so low-contrast that boundaries disappear."
        }
      ]
    },
    {
      "id": "css-outline",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 100,
      "level": "Intermediate",
      "title": "outline",
      "summary": "Focused lesson: outline. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "Outline draws around an element without taking layout space like a border.",
      "learn": [
        "outline",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand outline well enough to use it intentionally.",
      "explanation": "Outlines are especially useful for focus indicators and temporary debugging boundaries.",
      "tip": "Use clear outlines for keyboard focus and debugging.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Remove focus outlines without an equally visible replacement.",
      "expected": "The sample visibly demonstrates outline.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "outline"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{padding:24px;border:2px solid #c9d8e2;outline:4px solid #5bd6ff;outline-offset:4px}",
      "js": "",
      "quiz": [
        {
          "question": "Does outline take layout space like a border?",
          "options": [
            "No",
            "Yes",
            "Only in Grid",
            "Only on images"
          ],
          "correctIndex": 0,
          "explanation": "No is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Remove focus outlines without an equally visible replacement.",
            "Use clear outlines for keyboard focus and debugging.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Remove focus outlines without an equally visible replacement."
        }
      ]
    },
    {
      "id": "css-aspect-ratio",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 110,
      "level": "Intermediate",
      "title": "aspect-ratio",
      "summary": "Focused lesson: aspect-ratio. Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "aspect-ratio gives a box a preferred width-to-height ratio.",
      "learn": [
        "aspect-ratio",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand aspect-ratio well enough to use it intentionally.",
      "explanation": "It helps reserve predictable shapes for media, cards, and placeholders while dimensions remain responsive.",
      "tip": "Use it when a visual frame should keep a stable shape.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Force a ratio that distorts/crops important content with no fit strategy.",
      "expected": "The sample visibly demonstrates aspect-ratio.",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "aspect",
        "ratio"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{width:min(100%,420px);aspect-ratio:16/9;display:grid;place-items:center;background:#0d2235;color:white;border-radius:14px}",
      "js": "",
      "quiz": [
        {
          "question": "What does aspect-ratio: 16 / 9 describe?",
          "options": [
            "A preferred width-to-height ratio",
            "16 columns and 9 rows",
            "Font size",
            "Opacity"
          ],
          "correctIndex": 0,
          "explanation": "A preferred width-to-height ratio is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Force a ratio that distorts/crops important content with no fit strategy.",
            "Use it when a visual frame should keep a stable shape.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Force a ratio that distorts/crops important content with no fit strategy."
        }
      ]
    },
    {
      "id": "css-calc",
      "categoryId": "css",
      "mode": "code",
      "stage": "Box Model & Sizing",
      "order": 120,
      "level": "Intermediate",
      "title": "calc()",
      "summary": "Focused lesson: calc(). Learn one CSS concept, run it, change it, and verify the result.",
      "definition": "calc() combines compatible numeric CSS values and units in an expression.",
      "learn": [
        "calc()",
        "How it changes rendering",
        "A practical use case",
        "A common mistake"
      ],
      "objective": "Understand calc() well enough to use it intentionally.",
      "explanation": "It is useful when a size depends on both relative and fixed components.",
      "tip": "Use calc when the mathematical relationship is clearer than extra wrappers or magic numbers.",
      "hack": "Change one value at a time in the browser IDE and compare the result.",
      "mistake": "Build unreadable expressions when a simpler layout rule would work.",
      "expected": "The sample visibly demonstrates calc().",
      "realUse": "Useful in real interfaces when this CSS behavior directly matches the design requirement.",
      "tags": [
        "css",
        "box model & sizing",
        "calc"
      ],
      "html": "<main class=\"demo\"><h1>CSS Focus</h1><p>Change the value, run the example again, and observe one concept at a time.</p><div class=\"sample\">Sample element</div></main>",
      "css": "body{font-family:system-ui;padding:28px}.sample{width:calc(100% - 3rem);padding:18px;background:#eef8fd;border-left:4px solid #0879b7}",
      "js": "",
      "quiz": [
        {
          "question": "Can calc() combine percentages and rem values?",
          "options": [
            "Yes",
            "No",
            "Only in JavaScript",
            "Only in Grid"
          ],
          "correctIndex": 0,
          "explanation": "Yes is the correct answer for this lesson."
        },
        {
          "question": "Which mistake should you avoid?",
          "options": [
            "Build unreadable expressions when a simpler layout rule would work.",
            "Use calc when the mathematical relationship is clearer than extra wrappers or magic numbers.",
            "Test one value at a time",
            "Inspect the result in DevTools"
          ],
          "correctIndex": 0,
          "explanation": "Avoid this: Build unreadable expressions when a simpler layout rule would work."
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
