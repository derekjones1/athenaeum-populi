import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptedForms, checkText, normalizeText } from './check-text.mjs';

test('normalizeText folds case, diacritics, quotes, dashes, punctuation, articles', () => {
  const cases = [
    ['Cell', 'cell'],
    ['  the   Cell. ', 'cell'],
    ['A hypothesis', 'hypothesis'],
    ['naïve', 'naive'],
    ["Hooke's law", 'hookes law'],
    ['Hooke’s law', 'hookes law'],
    ['light-dependent reactions', 'light dependent reactions'],
    ['light–dependent reactions', 'light dependent reactions'],
    ['light dependent reactions', 'light dependent reactions'],
    ['Type 2 diabetes', 'type 2 diabetes'],
    ['(prokaryote)', 'prokaryote'],
    ['', ''],
    [null, ''],
  ];
  for (const [input, expected] of cases) {
    assert.equal(normalizeText(input), expected, JSON.stringify(input));
  }
});

test('normalizeText strips only ONE leading article and never an inner one', () => {
  assert.equal(normalizeText('the the cell'), 'the cell');
  assert.equal(normalizeText('theory of the cell'), 'theory of the cell');
  assert.equal(normalizeText('anaerobic'), 'anaerobic');
  assert.equal(normalizeText('theme'), 'theme');
});

test('acceptedForms includes the answer, dedupes, and drops empties', () => {
  assert.deepEqual(acceptedForms('cell', 'cells|Cell||the cell'), ['cell', 'cells']);
  assert.deepEqual(acceptedForms('DNA'), ['dna']);
});

test('checkText verdicts', () => {
  assert.equal(checkText('', 'cell'), 'empty');
  assert.equal(checkText('   ', 'cell'), 'empty');
  assert.equal(checkText('Cell', 'cell'), 'correct');
  assert.equal(checkText('the cells', 'cell', { accept: 'cells' }), 'correct');
  assert.equal(checkText('cells', 'cell'), 'incorrect');
  assert.equal(checkText('ribozyme', 'ribosome'), 'incorrect');
  assert.equal(checkText('meiosis', 'mitosis'), 'incorrect');
  assert.equal(checkText('deoxyribonucleic acid', 'DNA', { accept: 'deoxyribonucleic acid' }), 'correct');
});

test('checkText has no fuzzy tolerance — a one-letter slip is incorrect', () => {
  assert.equal(checkText('photosynthesys', 'photosynthesis'), 'incorrect');
  assert.equal(checkText('photosynthesi', 'photosynthesis'), 'incorrect');
});
