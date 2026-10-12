'use strict';
// Execute each repository-authored example against a controlled DOM text stub.
// This supplements, but does not replace, Playwright tests in the real iframe sandbox.
const assert = require('node:assert/strict');
global.window = {};
require('../assets/js/knowledge-lab-data.js');
require('../assets/js/knowledge-lab-javascript-foundations.js');
require('../assets/js/knowledge-lab-javascript-intermediate.js');
require('../assets/js/knowledge-lab-js-core-expansion.js');
require('../assets/js/knowledge-lab-js-collections-quality.js');
const lessons = window.KNOWLEDGE_LAB_V2.lessons;
const ids = [
  "js-statements-comments",
  "js-arithmetic-precedence",
  "js-strict-equality",
  "js-boolean-logic",
  "js-switch-cases",
  "js-nullish-defaults",
  "js-while-loop",
  "js-string-search-methods",
  "js-number-input-conversion",
  "js-lexical-closure",
  "js-array-slice-splice",
  "js-array-sort-safely",
  "js-set-unique-values",
  "js-map-keyed-lookup",
  "js-object-destructuring",
  "js-json-basics",
  "js-classes-constructor",
  "js-promise-all",
  "js-try-catch",
  "js-safe-text-rendering"
];
(async () => {
 for (const id of ids) {
  const lesson = lessons.find(x => x.id === id);
  assert.ok(lesson, 'Missing example ' + id);
  const resultNode = {textContent: ''};
  const document = {
   querySelector(selector) {
    assert.equal(selector, '#result', 'Unexpected selector in ' + id);
    return resultNode;
   }
  };
  const run = new Function('document', lesson.js);
  run(document);
  // Allow Promise callbacks to complete before checking asynchronous examples.
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(resultNode.textContent, lesson.expected, 'Result mismatch in ' + id);
  assert.ok(lesson.practice?.prompt && lesson.practice?.check, 'Missing challenge ' + id);
  assert.ok(lesson.quiz?.length >= 2, 'Missing quizzes ' + id);
  process.stdout.write('PASS ' + id + '\n');
 }
})().catch(error => { console.error(error); process.exitCode = 1; });
