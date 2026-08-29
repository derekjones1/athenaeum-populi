import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { sep, relative } from 'node:path';
import { walkMarkdown, shortcodes } from '../lib/content.mjs';
import { unescapeParamValue } from '../lib/content.mjs';

/**
 * Correct-answer position must stay near uniform across the corpus.
 *
 * Authored text multiple-choice options are rendered in authored order, so a
 * skewed corpus hands learners a guessing strategy: before the August 2026
 * reorder, 59.0% of 727 text MCs keyed their FIRST option (86% in
 * Precalculus), making "always pick the first" materially successful. The
 * options were deterministically shuffled (seeded by question text); this
 * gate keeps future authoring from drifting back.
 *
 * The expectation is computed from the actual option-count mix — with many
 * two-option questions, a uniform corpus still keys the first option ~36% of
 * the time — so the assertion is |observed − expected| per position, not a
 * fixed percentage.
 */
function collect(root) {
  const perBook = new Map();
  const all = { counts: [0, 0, 0, 0], expected: [0, 0, 0, 0], n: 0 };
  for (const file of walkMarkdown(root)) {
    // Segment 0 of the root-relative path is the SHELF
    // (math/life-health-sciences/…); segment 1 is the BOOK. The key is
    // "shelf/book" together, not book alone, since a book name is only
    // unique within its shelf. Segment 2 would be a chapter directory, which
    // once (when segment 0 alone was the book, under content/math) silently
    // made the per-book test a per-chapter test over only the three chapters
    // with ≥50 questions. A page shallower than shelf/book/… (a shelf or
    // site landing page) has no book to key by and is skipped.
    const segments = relative(root, file).split(sep);
    if (segments.length < 3) continue;
    const book = `${segments[0]}/${segments[1]}`;
    const src = readFileSync(file, 'utf8');
    for (const sc of shortcodes(src, 'multiplechoice')) {
      if ((sc.params.mode || 'text') === 'graph') continue;
      const options = sc.inner.split('\n').map((line) => line.trim()).filter(Boolean);
      const answer = unescapeParamValue(sc.params.answer ?? '');
      const index = options.indexOf(answer);
      if (index === -1 || options.length < 2) continue;
      if (!perBook.has(book)) perBook.set(book, { counts: [0, 0, 0, 0], expected: [0, 0, 0, 0], n: 0 });
      for (const bucket of [all, perBook.get(book)]) {
        bucket.n += 1;
        bucket.counts[index] += 1;
        for (let position = 0; position < options.length; position += 1) {
          bucket.expected[position] += 1 / options.length;
        }
      }
    }
  }
  return { all, perBook };
}

const { all, perBook } = collect('content');

test('correct-option positions are close to uniform corpus-wide', () => {
  assert.ok(all.n > 100, `expected a real corpus, found ${all.n} text MCs`);
  for (let position = 0; position < 4; position += 1) {
    const observed = all.counts[position] / all.n;
    const expected = all.expected[position] / all.n;
    assert.ok(
      Math.abs(observed - expected) <= 0.08,
      `position ${position + 1}: keyed in ${(observed * 100).toFixed(1)}% of ${all.n} text MCs, `
      + `expected ~${(expected * 100).toFixed(1)}% for this option-count mix — reorder options `
      + `(seeded shuffle) so no position is a guessing strategy`,
    );
  }
});

test('no single book hands out a first-option guessing strategy', () => {
  for (const [book, bucket] of perBook) {
    if (bucket.n < 50) continue;
    const observed = bucket.counts[0] / bucket.n;
    const expected = bucket.expected[0] / bucket.n;
    assert.ok(
      Math.abs(observed - expected) <= 0.15,
      `${book}: first option keyed in ${(observed * 100).toFixed(1)}% of ${bucket.n} text MCs, `
      + `expected ~${(expected * 100).toFixed(1)}%`,
    );
  }
});
