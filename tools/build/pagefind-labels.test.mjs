/**
 * Search-result breadcrumb labels stay in step with the content tree.
 *
 * assets/js/pagefind-search.js renders each result's context as
 * "Shelf › Book" from the first two URL segments: a slug → label map for
 * the names title-casing cannot reproduce (the ampersand shelves), and
 * `titleCase(slug)` for everything else. The contract asserted here is the
 * rendered one: for every shelf (depth 1) and book (depth 2) directory under
 * content/, the context the search UI would print equals the page's own
 * front-matter title, so search says exactly what the breadcrumb says. And
 * the map holds ONLY what the fallback cannot derive — a hand-maintained
 * entry per book once silently stopped covering a book the day it was
 * published, so a new book must need no entry at all.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter } from '../lib/content.mjs';

const repositoryRoot = new URL('../../', import.meta.url).pathname;
const contentRoot = join(repositoryRoot, 'content');

const searchSource = readFileSync(join(repositoryRoot, 'assets/js/pagefind-search.js'), 'utf8');

function labelMap() {
  const literal = searchSource.match(/const labels = (\{[\s\S]*?\});/);
  assert.ok(literal, 'pagefind-search.js declares `const labels = {...};`');
  return Function(`"use strict"; return (${literal[1]});`)();
}

// The fallback, read out of the same source so this test can never assert a
// title-casing rule the UI does not actually apply.
function titleCaseFn() {
  const fn = searchSource.match(/function titleCase\(slug\) \{[\s\S]*?\n  \}/);
  assert.ok(fn, 'pagefind-search.js declares `function titleCase(slug)`');
  return Function(`"use strict"; ${fn[0]} return titleCase;`)();
}

function subdirectories(root) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function expectedLabels() {
  const expected = new Map();
  for (const shelf of subdirectories(contentRoot)) {
    const shelfRoot = join(contentRoot, shelf);
    expected.set(shelf, shelfRoot);
    for (const book of subdirectories(shelfRoot)) expected.set(book, join(shelfRoot, book));
  }
  return expected;
}

function titleOf(directory) {
  const index = join(directory, '_index.md');
  assert.ok(existsSync(index), `${directory} has an _index.md`);
  const { attributes } = parseFrontmatter(readFileSync(index, 'utf8'));
  assert.ok(attributes.title, `${index} declares a title`);
  return attributes.title;
}

test('every shelf and book renders a search context equal to its own title', () => {
  const labels = labelMap();
  const titleCase = titleCaseFn();
  for (const [slug, directory] of expectedLabels()) {
    assert.equal(labels[slug] ?? titleCase(slug), titleOf(directory), `the search context for '${slug}' matches the title in ${directory}/_index.md`);
  }
});

test('the label map holds only the slugs the title-case fallback cannot reproduce', () => {
  const known = expectedLabels();
  const titleCase = titleCaseFn();
  for (const [slug, label] of Object.entries(labelMap())) {
    assert.ok(known.has(slug), `labels['${slug}'] has a content/ directory at depth 1 or 2`);
    assert.notEqual(titleCase(slug), label, `labels['${slug}'] is redundant — titleCase already produces ${JSON.stringify(label)}`);
  }
});
