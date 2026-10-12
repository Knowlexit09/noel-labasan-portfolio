#!/usr/bin/env node
'use strict';

/**
 * Reproducible Java 21 compile + run gate for Knowledge Lab.
 * Usage: node scripts/verify-knowledge-lab-java.cjs
 *        node scripts/verify-knowledge-lab-java.cjs --lesson java-pattern-dao
 * Requires a trusted local JDK 21+, no network or database dependency.
 * Each lesson runs in a new temporary directory; all files are cleaned up.
 */
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const cp = require('node:child_process');
const assert = require('node:assert/strict');

global.window = {};
const sources = [
  '../assets/js/knowledge-lab-data.js',
  '../assets/js/knowledge-lab-java-foundations.js',
  '../assets/js/knowledge-lab-java-core-expansion.js',
  '../assets/js/knowledge-lab-java-modern-expansion.js',
  '../assets/js/knowledge-lab-java-intro.js',
  '../assets/js/knowledge-lab-java-professional.js',
  '../assets/js/knowledge-lab-java-applied.js',
  '../assets/js/knowledge-lab-java-exam-fundamentals.js',
  '../assets/js/knowledge-lab-java-design-jdbc.js',
  '../assets/js/knowledge-lab-java-exam-reviewer.js'
];
for (const source of sources) require(source);

const lessons = window.KNOWLEDGE_LAB_V2.lessons.filter(x =>
  x.categoryId === 'java' && x.mode === 'reference' && x.language === 'Java' && x.verified);
const onlyId = process.argv[2] === '--lesson' ? process.argv[3] : null;
if (process.argv.length > 2 && (!onlyId || process.argv.length !== 4)) {
  throw new Error('Usage: node scripts/verify-knowledge-lab-java.cjs [--lesson <lesson-id>]');
}
if (!onlyId) assert.equal(lessons.length, 87, 'Expected 87 independently authored Java references');
assert.equal(new Set(lessons.map(x => x.id)).size, lessons.length, 'Duplicate Java lesson ID');

const reviewer = lessons.find(x => x.id === 'java-exam-reviewer-master-quiz');
assert.equal(reviewer?.quiz?.length, 33, 'Expected 33 reviewer questions');
for (const q of reviewer.quiz) {
  assert.ok(q.question && q.options?.[q.correctIndex] && q.explanation, 'Incomplete reviewer question');
}

function execute(tool, args, cwd) {
  const result = cp.spawnSync(tool, args, {
    cwd, encoding: 'utf8', timeout: 20000, maxBuffer: 1024 * 1024,
    env: process.env
  });
  if (result.error) throw new Error(tool + ' failed: ' + result.error.message);
  if (result.status !== 0) {
    throw new Error(tool + ' exited ' + result.status +
      '\nstdout: ' + (result.stdout || '').slice(0, 2500) +
      '\nstderr: ' + (result.stderr || '').slice(0, 2500));
  }
  return (result.stdout || '').replace(/\r\n/g, '\n').trim();
}

const version = execute('javac', ['-version'], process.cwd());
const featureMatch = version.match(/javac\s+(\d+)/);
if (!featureMatch || Number(featureMatch[1]) < 21) {
  throw new Error('Java 21 or newer JDK required. Found: ' + version);
}

const selected = onlyId ? lessons.filter(x => x.id === onlyId) : lessons;
assert.ok(selected.length, 'Unknown Java lesson: ' + onlyId);
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kl-java-'));
try {
  for (const lesson of selected) {
    assert.match(lesson.id, /^[a-z][a-z0-9-]+$/, 'Invalid lesson ID');
    assert.ok(lesson.code?.includes('public class Main'), 'Missing Main class: ' + lesson.id);
    assert.ok(typeof lesson.expectedOutput === 'string', 'Missing output: ' + lesson.id);
    assert.ok(lesson.practice?.prompt && lesson.practice?.check, 'Missing challenge: ' + lesson.id);
    assert.ok(lesson.quiz?.length >= 2, 'Incomplete quiz: ' + lesson.id);
    const cwd = path.join(root, lesson.id);
    fs.mkdirSync(cwd, { recursive: false });
    fs.writeFileSync(path.join(cwd, 'Main.java'), lesson.code, 'utf8');
    try {
      execute('javac', ['-encoding', 'UTF-8', 'Main.java'], cwd);
      const actual = execute('java', ['-Dfile.encoding=UTF-8', '-cp', cwd, 'Main'], cwd);
      const expected = lesson.expectedOutput.replace(/\r\n/g, '\n').trim();
      assert.equal(actual, expected, lesson.id + ': runtime output mismatch');
      process.stdout.write('PASS ' + lesson.id + '\n');
    } catch (error) {
      throw new Error(lesson.id + ': ' + error.message, { cause: error });
    }
  }
  process.stdout.write('PASS ' + selected.length + ' Java 21 source, output and practice checks\n');
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}
