import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptedForms, checkText, foldedForms, matchesForm, normalizeText, pluralFolds, singularFolds } from './check-text.mjs';

test('normalizeText folds case, diacritics, quotes, dashes, punctuation, articles', () => {
  const cases = [
    ['Cell', 'cell'],
    ['  the   Cell. ', 'cell'],
    ['A hypothesis', 'hypothesis'],
    ['naïve', 'naive'],
    ["Hooke's law", 'hookes law'],
    ['Hooke’s law', 'hookes law'],
    ['5′ end', '5 end'],
    ['5ʹ end', '5 end'],
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
  assert.equal(checkText('cells', 'cell'), 'correct', 'the regular plural folds without an accept member');
  assert.equal(checkText('ribozyme', 'ribosome'), 'incorrect');
  assert.equal(checkText('meiosis', 'mitosis'), 'incorrect');
  assert.equal(checkText('deoxyribonucleic acid', 'DNA', { accept: 'deoxyribonucleic acid' }), 'correct');
});

test('checkText has no fuzzy tolerance — a one-letter slip is incorrect', () => {
  assert.equal(checkText('photosynthesys', 'photosynthesis'), 'incorrect');
  assert.equal(checkText('photosynthesi', 'photosynthesis'), 'incorrect');
});

test('checkText folds exactly a trailing s or es onto an accepted form', () => {
  assert.deepEqual(pluralFolds('cell'), ['cells', 'celles']);
  assert.deepEqual(pluralFolds(''), []);
  assert.equal(matchesForm('gases', 'gas'), true);
  assert.equal(checkText('Ribosomes', 'ribosome'), 'correct');
  assert.equal(checkText('gases', 'gas'), 'correct');
  assert.equal(checkText('glucose transporters', 'glucose transporter'), 'correct');
  assert.equal(checkText('hypotheses', 'hypothesis'), 'incorrect', 'an irregular plural is still listed in accept');
  assert.equal(checkText('hypotheses', 'hypothesis', { accept: 'hypotheses' }), 'correct');
  assert.equal(checkText('miRNAs', 'microRNA', { accept: 'miRNA' }), 'correct', 'the fold applies to accept members too');
  assert.equal(checkText('cellss', 'cell'), 'incorrect', 'the fold is one suffix, not a stem');
  assert.equal(checkText('cellular', 'cell'), 'incorrect');
  assert.equal(checkText('ribosomes', 'ribosomal'), 'incorrect', 'no stemming: only a literal s/es suffix');
});

test('a plural key accepts its regular singular (the fold runs both ways)', () => {
  assert.equal(matchesForm('gas', 'gases'), true);
  assert.equal(checkText('receptor', 'receptors'), 'correct');
  assert.equal(checkText('organism', 'organisms'), 'correct');
  assert.equal(checkText('hydrogen bond', 'hydrogen bonds'), 'correct', 'the last word of a phrase folds');
  assert.equal(checkText('Branch', 'branches'), 'correct', '-es after a sibilant');
  assert.equal(checkText('gene', 'genes'), 'correct');
  assert.equal(checkText('cytopathic effect', 'X', { accept: 'cytopathic effects' }), 'correct', 'accept members fold too');
  assert.equal(checkText('bacterium', 'bacteria'), 'incorrect', 'an irregular singular is still listed');
  assert.equal(checkText('mosquito', 'mosquitoes'), 'incorrect', '-oes is not stripped (toes/to, does/do)');
});

test('the singular fold strips only a last word shaped like a regular plural', () => {
  assert.deepEqual(singularFolds('receptors'), ['receptor']);
  assert.deepEqual(singularFolds('gases'), ['gase', 'gas']);
  assert.deepEqual(singularFolds('genes'), ['gene'], '-es after a non-sibilant is not stripped (genes/gen, rates/rat)');
  assert.deepEqual(singularFolds(''), []);
  // Each of these was measured as a real textin key whose strip lands on a
  // different word; none is a regular plural.
  for (const [key, wrong] of [
    ['genus', 'genu'], ['taxis', 'taxi'], ['mitosis', 'mitosi'], ['stress', 'stres'],
    ['species', 'specie'], ['keystone species', 'keystone specie'],
    ['genetics', 'genetic'], ['epigenetics', 'epigenetic'], ['thermodynamics', 'thermodynamic'],
    ['70S', '70'],
  ]) {
    assert.deepEqual(singularFolds(normalizeText(key)), [], key);
    assert.equal(checkText(wrong, key), 'incorrect', `${key} must not accept ${wrong}`);
  }
  assert.deepEqual(foldedForms('cells'), ['cellss', 'cellses', 'cell']);
});

test('checkText reads "X (Y)" as correct only when X and Y each grade correct', () => {
  assert.equal(checkText('cyclic AMP (cAMP)', 'cyclic AMP', { accept: 'cAMP' }), 'correct');
  assert.equal(checkText('CAP (catabolite activator protein)', 'catabolite activator protein', { accept: 'CAP' }), 'correct');
  assert.equal(checkText('single-stranded origin (sso)', 'single-stranded origin', { accept: 'sso' }), 'correct');
  // a hedge — one half right, one half wrong — is not credited
  assert.equal(checkText('cAMP (cGMP)', 'cyclic AMP', { accept: 'cAMP' }), 'incorrect');
  assert.equal(checkText('meiosis (mitosis)', 'meiosis'), 'incorrect');
  // a parenthetical with no accepted half is still wrong, and the plural fold applies to each half
  assert.equal(checkText('receptors (proteins)', 'receptor'), 'incorrect');
  assert.equal(checkText('ribosomes (ribosome)', 'ribosome'), 'correct');
  // only one trailing parenthetical is read
  assert.equal(checkText('cyclic AMP (cAMP) (cAMP)', 'cyclic AMP', { accept: 'cAMP' }), 'incorrect');
});
