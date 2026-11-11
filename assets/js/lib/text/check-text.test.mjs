import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptedForms, checkText, closedForm, foldedForms, isOlderName, matchesForm, normalizeText, pluralFolds, singularFolds, gradeText, OLDER_NAME_MESSAGE } from './check-text.mjs';
import { CLASSICAL_NAMES, systematicName } from './older-names.mjs';

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

// A hyphen folds to a space (normalizeText) AND to nothing (closedForm), so
// the hyphenated respelling of a closed compound grades correct without an
// accept member (October 27, 2026; before it, `fore-gut` for `foregut` had
// to be listed, Anatomy and Physiology 22.7).
test('checkText folds a hyphen to nothing as well as to a space', () => {
  assert.equal(closedForm('fore-gut'), 'foregut');
  assert.equal(closedForm('Light–dependent reactions'), 'lightdependent reactions');
  assert.equal(closedForm('the T-cell'), 'tcell');
  assert.equal(closedForm('light/dependent'), 'light dependent', 'a slash is still a space');
  assert.equal(checkText('fore-gut', 'foregut'), 'correct');
  assert.equal(checkText('semi-conservative', 'semiconservative'), 'correct');
  assert.equal(checkText('foregut', 'fore-gut'), 'correct', 'the fold runs both ways');
  assert.equal(checkText('T-cell', 'T cell'), 'correct', 'the space reading still grades');
  assert.equal(checkText('fore-guts', 'foregut'), 'correct', 'the plural fold applies to the closed reading');
  assert.equal(checkText('fore gut', 'foregut'), 'incorrect', 'a space never folds to nothing');
  assert.equal(checkText('semi-conservative', 'X', { accept: 'semiconservative' }), 'correct', 'accept members fold too');
});

test('the three element names English spells two ways are one name', () => {
  // Chemistry 2e's nomenclature items would otherwise need an accept member
  // on every sulfate; IUPAC itself prints "aluminium" and "caesium".
  assert.equal(checkText('sulphur', 'sulfur'), 'correct');
  assert.equal(checkText('copper(II) sulphate pentahydrate', 'copper(II) sulfate pentahydrate'), 'correct');
  assert.equal(checkText('sulphuric acid', 'sulfuric acid'), 'correct');
  assert.equal(checkText('aluminium fluoride', 'aluminum fluoride'), 'correct');
  assert.equal(checkText('caesium chloride', 'cesium chloride'), 'correct');
  assert.equal(checkText('aluminum fluoride', 'aluminium fluoride'), 'correct', 'in either direction');
  assert.equal(checkText('sulfite', 'sulfate'), 'incorrect');
  assert.equal(normalizeText('Aluminium sulphate'), 'aluminum sulfate');
});

test('a compound name is read with or without its parentheses and spaces, never without its numeral', () => {
  for (const typed of ['chromium(III) oxide', 'chromium (III) oxide', 'Chromium(iii) Oxide', 'chromium III oxide']) {
    assert.equal(checkText(typed, 'chromium(III) oxide'), 'correct', typed);
  }
  assert.equal(checkText('chromium(II) oxide', 'chromium(III) oxide'), 'incorrect');
  assert.equal(checkText('chromium oxide', 'chromium(III) oxide'), 'incorrect');
  assert.equal(checkText('cobalt(II) chloride hexahydrate', 'cobalt(II) chloride hexahydrate'), 'correct');
  assert.equal(checkText('cobalt(II) chloride', 'cobalt(II) chloride hexahydrate'), 'incorrect');
});

test('a chemistry form sends the response to the formula reader, and gradeText carries its message', () => {
  assert.equal(checkText('co', 'CO'), 'correct', 'as words, capitals do not count');
  assert.equal(checkText('Co', 'CO', { form: 'formula' }), 'incorrect');
  assert.equal(checkText('CO', 'CO', { form: 'formula' }), 'correct');
  assert.equal(checkText('ClNa', 'NaCl', { form: 'formula' }), 'form');
  assert.equal(checkText('2H2 + O2 -> 2H2O', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)', { form: 'equation' }), 'correct');
  assert.match(gradeText('H2 + O2 -> H2O', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)', { form: 'equation' }).message, /not balanced/);
  assert.deepEqual(gradeText('cell', 'cell'), { status: 'correct' });
});

// Chemistry 2e Section 2.7 retires "ferrous chloride" for "iron(II)
// chloride". A learner who types the older name has the compound right, so
// the verdict is not "Not quite" — and it is not Correct either (November
// 11, 2026: until then the name was refused with no message).
test('an older name of the keyed compound is answered as an older name, never as correct and never by a gate', () => {
  const older = { status: 'form', message: OLDER_NAME_MESSAGE };
  assert.deepEqual(gradeText('ferrous chloride', 'iron(II) chloride'), older);
  assert.deepEqual(gradeText('Ferrous Chloride', 'iron(II) chloride'), older, 'capitals do not count');
  assert.deepEqual(gradeText('ferric nitrate', 'iron(III) nitrate'), older);
  assert.deepEqual(gradeText('cupric bromide', 'copper(II) bromide'), older);
  assert.deepEqual(gradeText('mercurous chloride', 'mercury(I) chloride'), older);
  assert.deepEqual(gradeText('stannic fluoride', 'tin(IV) fluoride'), older, '-ic is 4+ for tin, not 3+');
  assert.deepEqual(gradeText('cobaltous chloride hexahydrate', 'cobalt(II) chloride hexahydrate'), older);
  assert.deepEqual(gradeText('ferrous', 'iron(II)', { accept: 'iron(II) ion' }), older, 'an ion keyed bare');
  assert.deepEqual(gradeText('ferrous ion', 'iron(II)', { accept: 'iron(II) ion' }), older);

  // The older name of a DIFFERENT compound is plainly wrong.
  assert.deepEqual(gradeText('ferric chloride', 'iron(II) chloride'), { status: 'incorrect' });
  assert.deepEqual(gradeText('ferrous bromide', 'iron(II) chloride'), { status: 'incorrect' });
  assert.deepEqual(gradeText('stannic fluoride', 'tin(II) fluoride'), { status: 'incorrect' });
  // The systematic name is still the only correct one, and a name with no
  // classical word in it is read as before.
  assert.deepEqual(gradeText('iron(II) chloride', 'iron(II) chloride'), { status: 'correct' });
  assert.deepEqual(gradeText('titanium tetrachloride', 'titanium(IV) chloride'), { status: 'incorrect' });
  assert.deepEqual(gradeText('chromic acid', 'chromium(VI) oxide'), { status: 'incorrect' });

  // Every gate calls checkText, which must never take an older name for a key.
  assert.equal(checkText('ferrous chloride', 'iron(II) chloride'), 'incorrect');
  assert.equal(isOlderName('ferrous chloride', 'iron(II) chloride'), true);
  assert.equal(isOlderName('iron(II) chloride', 'iron(II) chloride'), false);

  // The message names neither the metal nor the numeral.
  assert.doesNotMatch(OLDER_NAME_MESSAGE, /iron|roman|numeral|\(|II/i);
});

test('the classical names come in pairs, the -ous name the lower charge, and nothing else is read', () => {
  const numeral = { i: 1, ii: 2, iii: 3, iv: 4 };
  const charge = (name) => numeral[systematicName(name).split(' ')[1]];
  const metal = (name) => systematicName(name).split(' ')[0];
  const ous = CLASSICAL_NAMES.filter((name) => name.endsWith('ous'));
  assert.equal(ous.length * 2, CLASSICAL_NAMES.length);
  for (const lower of ous) {
    const higher = `${lower.slice(0, -3)}ic`;
    assert.ok(CLASSICAL_NAMES.includes(higher), `${lower} has its -ic partner`);
    assert.equal(metal(lower), metal(higher), `${lower} and ${higher} are one metal`);
    assert.ok(charge(lower) < charge(higher), `${lower} is the lower charge`);
  }
  assert.equal(systematicName('stannous fluoride'), 'tin ii fluoride');
  assert.equal(systematicName('nitric acid'), null);
  assert.equal(systematicName('sulfurous acid'), null);
  assert.equal(systematicName('iron ii chloride'), null);
  assert.equal(systematicName(''), null);
});
