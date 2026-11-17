// Chapter 8's notation readings (tools/lint/chemistry-notation.mjs) and the
// lint errors built on five of them. Each case below is either a ruling's
// example or a sound line of an earlier chapter the first draft of the
// reading fired on.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  bareGreekMath, britishSpellingAndStraightApostrophes, italicOrbitalLetters, minusAsBond, overlappingRubricClauses, plainAnswerDisplays,
} from './chemistry-notation.mjs';
import { lintLeaks } from './lints-leaks.mjs';

const CHEM = 'content/physical-sciences/chemistry/08-advanced-theories-of-covalent-bonding/01-valence-bond-theory.md';
const written = (hits) => hits.map((hit) => hit.written);

test('a. an italic orbital letter in prose; state symbols are not orbital letters', () => {
  assert.deepEqual(written(italicOrbitalLetters('Removal of the 4*s* electron, and *sp*³ hybrid orbitals, and an *s* orbital, and a *p*-orbital.')), ['*s*', '*sp*', '*s*', '*p*']);
  assert.deepEqual(italicOrbitalLetters('Common abbreviations include *s* for solids, *l* for liquids, *g* for gases.'), [], '4.1\'s state symbols');
  assert.deepEqual(italicOrbitalLetters('NaCl(*s*) dissolves; the “*s*” subscripts for the solids.'), []);
  assert.deepEqual(italicOrbitalLetters('The *x* axis and the *y* axis. $2p_x$ and `4*s*` in code.'), [], 'axes, math, code');
});

test('b. a bare σ or π in math only inside a multiple choice, a fill-in, or a self-check sharing a multiple-choice stem', () => {
  const mc = '{{< multiplechoice question="Is it $\\sigma$ or $\\pi$?" answer="$\\pi$" hint="Look at the $\\pi$ overlap." >}}\n$\\sigma$\n$\\pi$\n{{< /multiplechoice >}}\n';
  const shared = '{{< selfcheck question="Is it $\\sigma$ or $\\pi$?" hint="h" >}}\nIt is a $\\pi$ bond.\n{{< /selfcheck >}}\n';
  assert.deepEqual(bareGreekMath(`${mc}\n${shared}`), []);
  assert.deepEqual(written(bareGreekMath('The $\\sigma$ bonds are stronger.\n')), ['$\\sigma$']);
  assert.deepEqual(written(bareGreekMath('{{< selfcheck question="Explain $\\pi$ bonds." hint="h" >}}\nM.\n{{< /selfcheck >}}\n')), ['$\\pi$'], 'a self-check that shares no stem');
  assert.deepEqual(bareGreekMath('The $\\sigma_{2\\text{s}}$ and $\\pi^*$ orbitals.\n'), [], 'an MO symbol with a subscript or star is math');
});

test('c. clauses of one rubric that overlap (measured: left off, see the playbook)', () => {
  const sc = (clauses) => `{{< selfcheck question="Q?" hint="h" >}}\nModel.\n===CHECKS===\n${clauses.join('\n')}\n{{< /selfcheck >}}\n`;
  const [inside] = overlappingRubricClauses(sc(['there are no d orbitals in the valence shell of carbon', 'no d orbitals in the valence shell']));
  assert.equal(inside.contained, true);
  assert.equal(overlappingRubricClauses(sc(['hybridization is introduced', 'to explain the geometry of bonding orbitals'])).length, 0, 'split at a seam');
});

test('d. a bond drawn with the minus sign', () => {
  assert.equal(minusAsBond('acetylene, H−C≡C−H').length, 2);
  assert.equal(minusAsBond('O−H and C=O and H−').length, 1);
  assert.deepEqual(minusAsBond('acetylene, H–C≡C–H; a charge of −3; ΔH = −92 kJ; Cl⁻ is −1.'), [], 'an en dash, and a minus that is a sign');
});

test('e. British spelling (lint) and the straight apostrophe (measured, left off)', () => {
  const kinds = (text) => britishSpellingAndStraightApostrophes(text).map((hit) => `${hit.kind} ${hit.written.trim()}`);
  assert.deepEqual(kinds('A labelled drawing, coloured grey.').filter((one) => one.startsWith('spelling')), ['spelling labelled', 'spelling coloured', 'spelling grey']);
  assert.deepEqual(kinds('The source’s “silver-grey” spelled “silver-gray”.'), [], 'a quoted word is the source\'s');
  assert.deepEqual(kinds('A labeled, colored, gray drawing.'), []);
  assert.equal(kinds("Oxygen's lone pairs.").filter((one) => one.startsWith('apostrophe')).length, 1);
});

test('f. an answerDisplay with no math', () => {
  const fillin = (display) => `{{< fillin\n  question="How many?"\n  answer="4"\n  answerForm="whole-number"\n  answerDisplay="${display}"\n  hint="h"\n>}}\n`;
  assert.equal(plainAnswerDisplays(fillin('4')).length, 1);
  assert.equal(plainAnswerDisplays(fillin('4+')).length, 1);
  assert.deepEqual(plainAnswerDisplays(fillin('$4$')), []);
  assert.deepEqual(plainAnswerDisplays(fillin('$2+$')), []);
});

test('the five lints are errors in the Chemistry book only', () => {
  const page = 'Body: the 4*s* electron; the $\\sigma$ bond; H−C≡C−H; a labelled drawing.\n\n{{< fillin\n  question="How many?"\n  answer="4"\n  answerForm="whole-number"\n  answerDisplay="4"\n  hint="Count them."\n>}}\n';
  const errors = lintLeaks(page, CHEM).errors;
  for (const pattern of [/sets an orbital letter italic/, /bare σ set as math/, /draws a bond with the minus sign/, /American spelling/, /answerDisplay="4" has no math/]) {
    assert.ok(errors.some((error) => pattern.test(error)), String(pattern));
  }
  const elsewhere = lintLeaks(page, 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md').errors;
  assert.ok(!elsewhere.some((error) => /orbital letter italic|bare σ|minus sign U\+2212|American spelling|has no math/.test(error)));
});
