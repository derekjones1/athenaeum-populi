/**
 * Search-result breadcrumb labels stay in step with the content tree.
 *
 * assets/js/pagefind-search.js renders each result's context as
 * "Shelf › Book" from the first two URL segments, through a hand-maintained
 * slug → label map. Nothing else reads that map, so a shelf or book added
 * without an entry degrades silently to a title-cased slug — Precalculus
 * shipped that way for a whole book. The contract asserted here is the one
 * the map exists to satisfy: every shelf (depth 1) and book (depth 2)
 * directory under content/ has an entry, and the entry is the page's own
 * front-matter title, so search says exactly what the breadcrumb says.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter } from './lib-content.mjs';

const repositoryRoot = new URL('../', import.meta.url).pathname;
const contentRoot = join(repositoryRoot, 'content');

function labelMap() {
  const source = readFileSync(join(repositoryRoot, 'assets/js/pagefind-search.js'), 'utf8');
  const literal = source.match(/const labels = (\{[\s\S]*?\});/);
  assert.ok(literal, 'pagefind-search.js declares `const labels = {...};`');
  return Function(`"use strict"; return (${literal[1]});`)();
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

test('every shelf and book directory has a search label equal to its own title', () => {
  const labels = labelMap();
  for (const [slug, directory] of expectedLabels()) {
    assert.equal(labels[slug], titleOf(directory), `labels['${slug}'] matches the title in ${directory}/_index.md`);
  }
});

test('no search label names a shelf or book that does not exist', () => {
  const known = expectedLabels();
  for (const slug of Object.keys(labelMap())) {
    assert.ok(known.has(slug), `labels['${slug}'] has a content/ directory at depth 1 or 2`);
  }
});
