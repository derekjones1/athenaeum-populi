/**
 * Unit tests for the practice index — the signatures the Knowledge Check
 * duplicate-stem rule compares, and the loader that reads a book's section
 * pages. Each case is one of the decisions the module's header records.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  buildPracticeIndex,
  clearPracticeIndexCache,
  duplicatesOf,
  itemSignature,
  loadPracticeIndex,
  loadPracticeIndexForBook,
  normalizeStem,
  practiceItems,
  sameItem,
} from './practice-index.mjs';

test('normalizeStem folds the spellings two authors give one sentence', () => {
  assert.equal(normalizeStem('Prokaryotes are single-celled organisms of the domains ________.'), 'prokaryotes are single celled organisms of the domains');
  assert.equal(normalizeStem('*Prokaryotes* are single celled organisms of the domains ____!'), 'prokaryotes are single celled organisms of the domains');
  assert.equal(normalizeStem('Water is $\\text{H}_2\\text{O}$.'), 'water is h 2 o', 'TeX control words go, letters and digits stay');
  assert.equal(normalizeStem('The α-helix and β-sheet'), 'the α helix and β sheet', 'non-Latin letters survive');
  assert.equal(normalizeStem(undefined), '');
});

test('itemSignature reads a stem, a sorted option set, and a reconstructed cloze sentence', () => {
  const choice = itemSignature({ kind: 'multiplechoice', question: 'Which is a prokaryote?', answer: 'E. coli', inner: '\namoeba\nE. coli\n' });
  assert.deepEqual(choice, { stem: 'which is a prokaryote', options: 'amoeba|e coli', sentence: '' });
  const shuffled = itemSignature({ kind: 'multiplechoice', question: 'Which is a prokaryote?', answer: 'E. coli', inner: 'E. coli\namoeba' });
  assert.equal(shuffled.options, choice.options, 'option order does not matter');
  const cloze = itemSignature({ kind: 'textin', question: 'Prokaryotes are organisms of the domains ________.', answer: 'Bacteria and Archaea' });
  assert.equal(cloze.sentence, 'prokaryotes are organisms of the domains bacteria and archaea');
  assert.equal(cloze.options, '', 'only a multiple choice has options');
  const moved = itemSignature({ kind: 'textin', question: '________ are organisms of the domains Bacteria and Archaea.', answer: 'Prokaryotes' });
  assert.equal(moved.sentence, cloze.sentence, 'moving the blank reconstructs the same sentence');
  assert.equal(itemSignature({ kind: 'selfcheck', question: 'Why ________?' }).sentence, '', 'no answer, no sentence');
  assert.equal(itemSignature({ kind: 'textin', question: 'Name it.', answer: 'x' }).sentence, '', 'no blank, no sentence');
});

test('sameItem is exact on the stem, qualified by options for a pair of multiple choices, and on the sentence for clozes', () => {
  const a = itemSignature({ kind: 'textin', question: 'Prokaryotes are organisms of the domains ________.', answer: 'Bacteria and Archaea' });
  assert(sameItem(a, itemSignature({ kind: 'selfcheck', question: 'Prokaryotes are organisms of the domains ________.' })), 'same stem, any kinds');
  assert(sameItem(a, itemSignature({ kind: 'textin', question: '________ are organisms of the domains Bacteria and Archaea.', answer: 'Prokaryotes' })), 'same sentence');
  assert(!sameItem(a, itemSignature({ kind: 'textin', question: 'Eukaryotes are organisms of the domain ________.', answer: 'Eukarya' })), 'a twin is another item');
  const mc1 = itemSignature({ kind: 'multiplechoice', question: 'Which statement is true?', answer: 'a', inner: 'a\nb' });
  const mc2 = itemSignature({ kind: 'multiplechoice', question: 'Which statement is true?', answer: 'c', inner: 'c\nd' });
  const mc3 = itemSignature({ kind: 'multiplechoice', question: 'Which statement is true?', answer: 'b', inner: 'b\na' });
  assert(!sameItem(mc1, mc2), 'a generic stem with other options is another item');
  assert(sameItem(mc1, mc3), 'the same options in another order are the same item');
  assert(sameItem(mc1, itemSignature({ kind: 'selfcheck', question: 'Which statement is true?' })), 'against a non-choice the stem alone decides');
  assert(sameItem(mc2, mc2) && !sameItem(itemSignature({ kind: 'textin', question: '', answer: 'x' }), itemSignature({ kind: 'textin', question: '', answer: 'x' })), 'an empty stem matches nothing');
});

test('practiceItems reads every kind in source order with its line, and duplicatesOf finds the matches', () => {
  const src = [
    '# Page',
    '{{< selfcheck question="Why is the sky blue?" >}}\nScattering.\n===CHECKS===\nscattering\n{{< /selfcheck >}}',
    '{{< textin question="The blue of the sky is caused by ________." answer="Rayleigh scattering" >}}',
    '{{< multiplechoice question="Which colour scatters most?" answer="blue" >}}\nred\nblue\n{{< /multiplechoice >}}',
    '{{< textin question="" answer="ignored" >}}',
  ].join('\n\n');
  const items = practiceItems(src);
  assert.deepEqual(items.map((i) => [i.kind, i.line]), [['selfcheck', 3], ['textin', 9], ['multiplechoice', 11]], 'an empty stem is not an item');
  const index = buildPracticeIndex(items.map((i) => ({ file: 'p.md', ...i })));
  assert.equal(index.byStem.size, 3);
  assert.equal(index.bySentence.size, 1);
  const hits = duplicatesOf(index, itemSignature({ kind: 'textin', question: '________ is what causes the blue of the sky.', answer: 'Rayleigh scattering' }));
  assert.equal(hits.length, 0, 'a reordered sentence is a different sentence — the rule is exact, not semantic');
  const moved = duplicatesOf(index, itemSignature({ kind: 'textin', question: 'The blue of the sky is caused by Rayleigh ________.', answer: 'scattering' }));
  assert.deepEqual(moved.map((i) => i.line), [9]);
  const stem = duplicatesOf(index, itemSignature({ kind: 'multiplechoice', question: 'why is the sky blue', answer: 'x', inner: 'x\ny' }));
  assert.deepEqual(stem.map((i) => i.kind), ['selfcheck']);
});

test('loadPracticeIndex reads a book\'s section pages only, caches, and refuses a missing directory', () => {
  const root = mkdtempSync(join(tmpdir(), 'practice-index-'));
  try {
    const book = join(root, 'content', 'life-health-sciences', 'biology');
    mkdirSync(join(book, '01-the-study-of-life'), { recursive: true });
    mkdirSync(join(book, '02-chemistry'), { recursive: true });
    writeFileSync(join(book, '_index.md'), '---\ntitle: Biology\n---\n{{< textin question="Landing item that must not index." answer="x" >}}\n');
    writeFileSync(join(book, '01-the-study-of-life', '_index.md'), '---\ntitle: Ch 1\n---\n');
    writeFileSync(join(book, '01-the-study-of-life', '01-science.md'), '---\ntitle: 1.1\n---\n{{< textin question="Science is ________." answer="systematic" >}}\n');
    writeFileSync(join(book, '02-chemistry', '01-atoms.md'), '---\ntitle: 2.1\n---\n{{< selfcheck question="Why do atoms bond?" >}}\nStability.\n===CHECKS===\nstability\n{{< /selfcheck >}}\n');
    writeFileSync(join(book, 'knowledge-check-01-02.md'), '---\ntitle: KC\n---\n{{< textin question="Check item that must not index." answer="x" >}}\n');
    clearPracticeIndexCache();
    const index = loadPracticeIndex(book);
    assert.equal(index.pages, 2, 'two section pages; the landing and the check are skipped');
    assert.deepEqual(index.items.map((i) => i.question), ['Science is ________.', 'Why do atoms bond?']);
    assert.equal(loadPracticeIndex(book), index, 'the second load is the cached object');
    assert.equal(loadPracticeIndexForBook('life-health-sciences/biology', join(root, 'content')), index, 'the book-key loader joins the content root and the key');
    assert.throws(() => loadPracticeIndex(join(root, 'nope')), /is not a directory — run from the repository root/);
    assert.throws(() => loadPracticeIndexForBook(''), /has no book key/);
  } finally {
    clearPracticeIndexCache();
    rmSync(root, { recursive: true, force: true });
  }
});
