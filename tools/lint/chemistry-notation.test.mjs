// Chapter 8's notation readings (tools/lint/chemistry-notation.mjs) and the
// lint errors built on five of them. Each case below is either a ruling's
// example or a sound line of an earlier chapter the first draft of the
// reading fired on.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  straightApostrophes, bareGreekMath, bareSigmaPi, britishSpellingAndStraightApostrophes, italicOrbitalLetters, minusAsBond, overlappingRubricClauses, plainAnswerDisplays,
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

test('c. a rubric clause wholly inside another is refused; parallel clauses sharing a run are not', () => {
  const sc = (clauses) => `{{< selfcheck question="Q?" hint="h" >}}\nModel.\n===CHECKS===\n${clauses.join('\n')}\n{{< /selfcheck >}}\n`;
  const [inside] = overlappingRubricClauses(sc(['there are no d orbitals in the valence shell of carbon', 'no d orbitals in the valence shell']));
  assert.equal(inside.inner, 'no d orbitals in the valence shell');
  assert.deepEqual(overlappingRubricClauses(sc(['lesser', 'the calculated q would be lesser'])), [], 'a one-word choice and the reason that repeats it are two checks');
  assert.deepEqual(overlappingRubricClauses(sc(['formic acid', '0.60 mol of formic acid would be equivalent to 1.20 mol'])), [], 'a two-word choice');
  assert.equal(overlappingRubricClauses(sc(['and PH₂⁻ have dipole moments', 'only ClF₅, ClO₂⁻, PCl₃, SeF₄, and PH₂⁻ have dipole moments'])).length, 1, 'three words or more inside another clause');
  assert.equal(overlappingRubricClauses(sc(['the 4*s* electron', 'removal of the 4s electron in Ca'])).length, 1, 'read as the rubric-run lint reads');
  assert.deepEqual(overlappingRubricClauses(sc(['hybridization is introduced', 'to explain the geometry of bonding orbitals'])), [], 'split at a seam');
  assert.deepEqual(overlappingRubricClauses(sc(['the value of an extensive property depends upon the amount of matter', 'the value of an intensive property is the same regardless of the amount of matter'])), [], 'parallel clauses share a four-word run and are sound');
  assert.deepEqual(overlappingRubricClauses(sc(['lesser; more heat would be lost', 'and so ΔT for the water would be lesser'])), [], 'the choice joined to its first statement');
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

test('the straight apostrophe: a word\'s, a plural\'s, an opening quote — never markup, math, code, a link, or a foot mark', () => {
  const kinds = (text) => straightApostrophes(text).map((hit) => hit.kind);
  assert.deepEqual(kinds("Hund's rule; the electrons' spins; don't; 'quoted"), ['apostrophe', 'apostrophe', 'apostrophe', 'opening']);
  assert.deepEqual(kinds("---\ndescription: Bohr's model\n---\nBody."), [], 'front matter');
  assert.deepEqual(kinds("A prime $f'(x)$, code `it's`, a [link](/a's/), <img alt='x'>, a 6' board and 5'10\"."), [], 'math, code, link target, HTML attribute, foot marks');
  assert.deepEqual(kinds('{{< mediafigure src="chemistry/x" alt="The cathode\'s face." >}}'), ['apostrophe'], 'an alt');
});

test('f. an answerDisplay with no math', () => {
  const fillin = (display) => `{{< fillin\n  question="How many?"\n  answer="4"\n  answerForm="whole-number"\n  answerDisplay="${display}"\n  hint="h"\n>}}\n`;
  assert.equal(plainAnswerDisplays(fillin('4')).length, 1);
  assert.equal(plainAnswerDisplays(fillin('4+')).length, 1);
  assert.deepEqual(plainAnswerDisplays(fillin('$4$')), []);
  assert.deepEqual(plainAnswerDisplays(fillin('$2+$')), []);
});

test('g. a bare σ or π naming a bond or orbital in prose is written with its name (Derek, November 16, 2026)', () => {
  const letters = (text) => bareSigmaPi(text).map((hit) => hit.letter);
  // Hits: body, list item, table cell, caption, heading, Key-terms headword, Source note, footer.
  assert.deepEqual(letters('A σ bond is stronger than a π bond.\n'), ['σ', 'π']);
  assert.deepEqual(letters('- Multiple bonds consist of σ and π bonds.\n'), ['σ', 'π']);
  assert.deepEqual(letters('| forms σ or π bonds | creates bonding interactions |\n'), ['σ', 'π']);
  assert.deepEqual(letters('{{< mediafigure src="chemistry/x" kind="diagram" alt="A σ bond." >}}\nThe π bond lies above the plane.\n{{< /mediafigure >}}\n'), ['π'], 'the caption is read, the alt is not');
  assert.deepEqual(letters('### Define and give examples of σ and π bonds\n'), ['σ', 'π']);
  assert.deepEqual(letters('- **π bonding orbital** — molecular orbital formed by side-by-side overlap.\n'), ['π']);
  assert.deepEqual(letters('*Source note:* the source prints a σ bond here.\n'), ['σ']);
  assert.deepEqual(letters('<small>Changes: the π bond drawn in grey.</small>\n'), ['π']);
  assert.deepEqual(letters('Resonance and π-bonding.\n'), ['π'], 'a hyphenated form');
  // Written with its name.
  assert.deepEqual(letters('A sigma (σ) bond and pi (π) bonds; Sigma (σ) bonds form; pi (π) bonding.\n'), []);
  assert.deepEqual(letters('produce **sigma bonds (σ bonds)**; a **pi bond (π bond)**.\n'), [], 'case (a): the name already beside it');
  // Labels: subscript, superscript, star, or a letter or digit run on.
  assert.deepEqual(letters('The σ₂ₛ and π* orbitals, σ*2s, σ2px, πp, and π¹.\n'), [], 'case (b): a label');
  assert.deepEqual(letters('- **π* antibonding orbital** — antibonding molecular orbital.\n'), [], 'a starred headword is a label');
  // Item text, every kind.
  assert.deepEqual(letters('{{< multiplechoice question="Is it a σ or a π bond?" answer="π" hint="The π overlap." >}}\nσ\nπ\n{{< /multiplechoice >}}\n'), [], 'case (c): multiple choice');
  assert.deepEqual(letters('{{< fillin\n  question="How many π bonds?"\n  answer="2"\n  hint="Count the π bonds."\n>}}\n'), [], 'case (c): fill-in');
  assert.deepEqual(letters('{{< textin question="Name the σ bond." answer="sigma" hint="The σ bond." >}}\n'), [], 'case (c): text-in');
  assert.deepEqual(letters('{{< selfcheck question="Explain σ and π bonds." hint="h" >}}\nσ bonds are stronger.\n===CHECKS===\nσ bonds are stronger\n{{< /selfcheck >}}\n'), [], 'case (c): self-check, model answer and rubric');
  // Alts and longdescs; math; code; front matter.
  assert.deepEqual(letters('{{< mediafigure src="chemistry/x" kind="diagram" alt="One σ bond, no π bonds." longdesc="A region labeled π bond." >}}\n'), [], 'case (d): alt and longdesc');
  assert.deepEqual(letters('<img src="x.webp" alt="A σ bond.">\n'), [], 'case (d): an HTML alt');
  assert.deepEqual(letters('The $\\sigma$ bond and $$\\pi_{2\\text{p}}$$, and `σ bond` in code.\n'), [], 'case (e): math and code');
  assert.deepEqual(letters('---\ntitle: "σ and π"\n---\nBody.\n'), [], 'front matter');
  // π the number, and the letters named as letters.
  assert.deepEqual(letters('150 million is that number multiplied by π. The circumference is 2π r, and π × r² the area.\n'), [], 'π the number');
  assert.deepEqual(letters('<small>Changes: σ and π set as math in the stems; σ and π written with their names, as sigma (σ) and pi (π), in running text.</small>\n'), [], 'the letters named as letters in a footer');
});

test('the lints are errors in the Chemistry book only', () => {
  const page = '{{< selfcheck question="Q?" hint="h" >}}\nLesser; the calculated q would be lesser.\n===CHECKS===\nq would be lesser\nthe calculated q would be lesser\n{{< /selfcheck >}}\n\nBody: Hund\'s rule; the 4*s* electron; the $\\sigma$ bond; a π bond; H−C≡C−H; a labelled drawing.\n\n{{< fillin\n  question="How many?"\n  answer="4"\n  answerForm="whole-number"\n  answerDisplay="4"\n  hint="Count them."\n>}}\n';
  const errors = lintLeaks(page, CHEM).errors;
  for (const pattern of [/a straight ' in a word/, /is wholly inside the clause/, /sets an orbital letter italic/, /bare σ set as math/, /a bare π names a bond or orbital/, /draws a bond with the minus sign/, /American spelling/, /answerDisplay="4" has no math/]) {
    assert.ok(errors.some((error) => pattern.test(error)), String(pattern));
  }
  const elsewhere = lintLeaks(page, 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md').errors;
  assert.ok(!elsewhere.some((error) => /orbital letter italic|bare σ|bare π|minus sign U\+2212|American spelling|has no math/.test(error)));
});
