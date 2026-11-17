// Chemistry 2e chapter 8's new shapes, read by both source gates against the
// pinned CNXML itself (docs/subjects/chemistry.md "Exercises", the rows dated
// chapter 8): a hybridization label, a bond order, oxidation states and
// formal charges in one answer, one sentence over three lettered parts, a
// choice named after "strongest bond is", and formula options. Each shape is
// held to the key the source prints and refuses its siblings' keys.
// Skipped where the bundle is not checked out (CI fetches it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { atomSegments, bondOrders, hybridClauses, judgeKeyedUnit } from './verify-source-keys.mjs';
import { coverage, sourceExercises } from './verify-source-coverage.mjs';
import { keyedUnits } from '../lib/keyed-units.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const file = (id) => path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules', id, 'index.cnxml');
const skip = !['m68744', 'm68745', 'm68746', 'm68747'].every((id) => existsSync(file(id)));
const read = (id) => (skip ? '' : readFileSync(file(id), 'utf8'));
const M = skip ? {} : { 1: read('m68744'), 2: read('m68745'), 3: read('m68746'), 4: read('m68747') };
const units = skip ? {} : Object.fromEntries(Object.entries(M).map(([key, xml]) => [key, keyedUnits(xml)]));
const status = (section, item) => judgeKeyedUnit(item, units[section])?.status;
const textin = (question, answer) => ({ type: 'textin', question, answer, form: '' });
const fillin = (question, answer, form = '') => ({ type: 'fillin', question, answer, form });
const mc = (question, answer, options) => ({ type: 'multiplechoice', question, answer, options });
const TYPE = 'Type any superscript as an ordinary number.';

test('the answer readers: hybridization labels by clause, bond orders by species, values by atom', () => {
  assert.deepEqual(hybridClauses('The terminal carbon atom uses sp^{3} hybrid orbitals, while the central carbon atom is sp hybridized.')
    .map((clause) => [clause.label, clause.words.join(' ')]), [['sp3', 'terminal carbon uses'], ['sp', 'central carbon']]);
  assert.deepEqual(hybridClauses('The selenium atom is sp^{3} d hybridized.').map((clause) => clause.label), ['sp3d']);
  assert.deepEqual(hybridClauses('trigonal planar, sp^{2} ; T-shaped (two lone pairs on A sp^{3} d , or (three lone pairs on A) sp^{3} d^{2}').map((clause) => clause.label), ['sp2', 'sp3d', 'sp3d2']);
  assert.deepEqual(bondOrders('H _2 bond order = 1, H 2^{+} bond order = 0.5, H 2^{−} bond order = 0.5, strongest bond is H _2')
    .map((entry) => [entry.canon, entry.numeral.printed]), [['H2', '1'], ['H2^+', '0.5'], ['H2^-', '0.5']]);
  assert.deepEqual(bondOrders('N _2 has a bond order of 3 and is diamagnetic.').map((entry) => [entry.canon, entry.numeral.printed]), [['N2', '3']]);
  assert.deepEqual(atomSegments('P atoms, trigonal pyramidal; S atoms, bent, with two lone pairs; Cl atoms, trigonal pyramidal').map((entry) => [entry.symbol, entry.said]),
    [['P', 'trigonal pyramidal'], ['S', 'bent with two lone pairs'], ['Cl', 'trigonal pyramidal']]);
});

test('a hybridization label is one whole label the answer prints, held to the atom its closing names', { skip }, () => {
  const SEF4 = `What is the hybridization of the selenium atom in SeF₄? ${TYPE}`;
  assert.equal(status(2, textin(SEF4, 'sp³d')), 'confirmed');
  assert.equal(status(2, textin(SEF4, 'sp³')), 'key-differs', 'sp³ is no reading of "sp³d hybridized"');
  assert.equal(status(2, textin(SEF4, 'sp')), 'key-differs');
  const XEO2F2 = `Identify the hybridization of the central atom in the following molecule or ion that contains multiple bonds: XeO₂F₂ (Xe is the central atom). ${TYPE}`;
  assert.equal(status(3, textin(XEO2F2, 'sp³d')), 'confirmed');
  assert.equal(status(3, textin(XEO2F2, 'sp³d²')), 'key-differs');
  const ACN = 'A useful solvent that will dissolve salts as well as organic compounds is the compound acetonitrile, H₃CCN. It is present in paint strippers. Identify the hybrid orbitals used by the carbon atoms in the molecule to form σ bonds.';
  assert.equal(status(3, textin(`${ACN} Enter the hybrid orbitals used by the terminal carbon atom. ${TYPE}`, 'sp³')), 'confirmed');
  assert.equal(status(3, textin(`${ACN} Enter the hybrid orbitals used by the central carbon atom. ${TYPE}`, 'sp')), 'confirmed');
  assert.equal(status(3, textin(`${ACN} Enter the hybrid orbitals used by the terminal carbon atom. ${TYPE}`, 'sp')), 'key-differs', 'the swapped pair');
  assert.equal(status(3, textin(`${ACN} Enter the hybrid orbitals used by the central carbon atom. ${TYPE}`, 'sp³')), 'key-differs');
  // A geometry and a hybridization from one answer ("Each S has a bent (109°) geometry, sp³"): each held to its own kind.
  const S8 = 'Sulfuric acid is manufactured by a series of reactions represented by the following equations: S₈(s) + 8O₂(g) ⟶ 8SO₂(g); 2SO₂(g) + O₂(g) ⟶ 2SO₃(g); SO₃(g) + H₂O(l) ⟶ H₂SO₄(l). Draw a Lewis structure, predict the molecular geometry by VSEPR, and determine the hybridization of sulfur for the following: circular S₈ molecule.';
  assert.equal(status(2, textin(`${S8} Enter the molecular geometry.`, 'bent')), 'confirmed');
  assert.equal(status(2, textin(`${S8} Enter the hybridization of sulfur. ${TYPE}`, 'sp³')), 'confirmed');
  assert.equal(status(2, textin(`${S8} Enter the molecular geometry.`, 'sp³')), 'key-differs', 'a label under a shape\'s closing');
  assert.equal(status(2, textin(`${S8} Enter the hybridization of sulfur. ${TYPE}`, 'bent')), 'key-differs', 'a shape under a hybridization\'s closing');
});

test('values sorted by atom are held to the atom the closing names (8.2\'s strike-anywhere matches)', { skip }, () => {
  const LEAD = 'Strike-anywhere matches contain a layer of KClO₃ and a layer of P₄S₃. The heat produced by the friction of striking the match causes these two compounds to react vigorously, which sets fire to the wooden stem of the match. KClO₃ contains the ClO₃⁻ ion. P₄S₃ is an unusual molecule with the skeletal structure shown in the figure above. Describe the geometry about the P atoms, the S atom, and the Cl atom in these species.';
  assert.equal(status(2, textin(`${LEAD} Enter the geometry about the S atoms.`, 'bent')), 'confirmed');
  assert.equal(status(2, textin(`${LEAD} Enter the geometry about the P atoms.`, 'trigonal pyramidal')), 'confirmed');
  assert.equal(status(2, textin(`${LEAD} Enter the geometry about the S atoms.`, 'trigonal pyramidal')), 'key-differs', 'P\'s shape under S');
  assert.equal(status(2, textin(`${LEAD} Enter the geometry about the Cl atom.`, 'bent')), 'key-differs', 'S\'s shape under Cl');
});

test('an oxidation state and a formal charge from one answer are each held to their own list', { skip }, () => {
  const LEAD = 'Strike-anywhere matches contain a layer of $\\ce{KClO3}$ and a layer of $\\ce{P4S3}$. The heat produced by the friction of striking the match causes these two compounds to react vigorously, which sets fire to the wooden stem of the match. $\\ce{KClO3}$ contains the $\\ce{ClO3-}$ ion. $\\ce{P4S3}$ is an unusual molecule with the skeletal structure shown in the figure above. Determine the oxidation states and formal charge of the atoms in $\\ce{P4S3}$ and the $\\ce{ClO3-}$ ion.';
  const ox = (symbol, key) => status(2, fillin(`${LEAD} Enter the oxidation state of ${symbol} as a signed number, the sign first, as +3 or −3.`, key, 'whole-number'));
  const fc = (symbol, key) => status(2, fillin(`${LEAD} Enter the formal charge of ${symbol} as a signed number, the sign first, as +3 or −3.`, key, 'whole-number'));
  assert.equal(ox('Cl', '5'), 'confirmed');
  assert.equal(ox('O', '-2'), 'confirmed');
  assert.equal(ox('O', '-1'), 'key-differs', 'O\'s formal charge under its oxidation state (the probe\'s finding)');
  assert.equal(ox('Cl', '2'), 'key-differs');
  assert.equal(ox('S', '-1'), 'key-differs', 'S\'s mixed number −1⅓ is no whole number');
  assert.equal(fc('P', '0'), 'confirmed');
  assert.equal(fc('S', '0'), 'confirmed');
  assert.equal(fc('P', '1'), 'key-differs', 'P\'s oxidation state under its formal charge');
  assert.equal(fc('O', '-2'), 'key-differs');
  // …and in the page's Unicode form.
  const UNI = 'Strike-anywhere matches contain a layer of KClO₃ and a layer of P₄S₃. The heat produced by the friction of striking the match causes these two compounds to react vigorously, which sets fire to the wooden stem of the match. KClO₃ contains the ClO₃⁻ ion. P₄S₃ is an unusual molecule with the skeletal structure shown in the figure above. Determine the oxidation states and formal charge of the atoms in P₄S₃ and the ClO₃⁻ ion.';
  const oxU = (symbol, key) => status(2, fillin(`${UNI} Enter the oxidation state of ${symbol} as a signed number, the sign first, as +3 or −3.`, key, 'whole-number'));
  const fcU = (symbol, key) => status(2, fillin(`${UNI} Enter the formal charge of ${symbol} as a signed number, the sign first, as +3 or −3.`, key, 'whole-number'));
  assert.equal(oxU('Cl', '5'), 'confirmed');
  assert.equal(oxU('O', '-2'), 'confirmed');
  assert.equal(oxU('O', '-1'), 'key-differs');
  assert.equal(fcU('P', '0'), 'confirmed');
  assert.equal(fcU('S', '0'), 'confirmed');
  assert.equal(fcU('P', '1'), 'key-differs');
});

test('a bond order is held to its species, and the strongest bond to the species after "is"', { skip }, () => {
  const lead = (group) => `Determine the bond order of each member of the following group, and determine which member of the group is predicted by the molecular orbital model to have the strongest bond: ${group}.`;
  const H = lead('$\\ce{H2}$, $\\ce{H2+}$, $\\ce{H2-}$');
  const bo = (question, key) => status(4, fillin(question, key));
  assert.equal(bo(`${H} Enter the bond order of $\\ce{H2}$.`, '1'), 'confirmed');
  assert.equal(bo(`${H} Enter the bond order of $\\ce{H2+}$.`, '0.5'), 'confirmed');
  assert.equal(bo(`${H} Enter the bond order of $\\ce{H2+}$.`, '1'), 'key-differs', 'H₂\'s order under H₂⁺');
  assert.equal(bo(`${H} Enter the bond order of $\\ce{H2}$.`, '2'), 'key-differs', 'the subscript is no bond order');
  assert.equal(bo(`${H} Enter the bond order.`, '1'), 'key-differs', 'three orders: the closing names the species');
  const O = lead('$\\ce{O2}$, $\\ce{O2^2+}$, $\\ce{O2^2-}$');
  assert.equal(bo(`${O} Enter the bond order of $\\ce{O2^2+}$.`, '3'), 'confirmed');
  assert.equal(bo(`${O} Enter the bond order of $\\ce{O2^2-}$.`, '3'), 'key-differs');
  const C = lead('$\\ce{Li2}$, $\\ce{Be2+}$, $\\ce{Be2}$');
  assert.equal(bo(`${C} Enter the bond order of $\\ce{Be2}$.`, '0'), 'confirmed');
  assert.equal(status(4, mc(O, 'O₂²⁺', ['O₂', 'O₂²⁺', 'O₂²⁻'])), 'confirmed');
  assert.equal(status(4, mc(O, 'O₂²⁻', ['O₂', 'O₂²⁺', 'O₂²⁻'])), 'key-differs', 'the charges are the difference');
  assert.equal(status(4, mc(H, 'H₂⁺', ['H₂', 'H₂⁺', 'H₂⁻'])), 'key-differs');
  // The page's form: a lone formula in a stem is Unicode (playbook "Notation").
  const HU = lead('H₂, H₂⁺, H₂⁻');
  assert.equal(bo(`${HU} Enter the bond order of H₂⁺.`, '0.5'), 'confirmed');
  assert.equal(bo(`${HU} Enter the bond order of H₂.`, '1'), 'confirmed');
  assert.equal(bo(`${HU} Enter the bond order of H₂⁺.`, '1'), 'key-differs', 'Unicode: H₂\'s order under H₂⁺');
  assert.equal(bo(`${HU} Enter the bond order of H₂.`, '0.5'), 'key-differs');
  const OU = lead('O₂, O₂²⁺, O₂²⁻');
  assert.equal(bo(`${OU} Enter the bond order of O₂²⁺.`, '3'), 'confirmed');
  assert.equal(bo(`${OU} Enter the bond order of O₂²⁻.`, '3'), 'key-differs');
  assert.equal(status(4, mc(OU, 'O₂²⁺', ['O₂', 'O₂²⁺', 'O₂²⁻'])), 'confirmed');
  assert.equal(status(4, mc(OU, 'O₂', ['O₂', 'O₂²⁺', 'O₂²⁻'])), 'key-differs');
  const N2 = 'The main component of air is $\\ce{N2}$. From the molecular orbital diagram of $\\ce{N2}$, predict its bond order and whether it is diamagnetic or paramagnetic.';
  assert.equal(bo(`${N2} Enter the bond order.`, '3'), 'confirmed');
  assert.equal(bo(`${N2} Enter the bond order.`, '2'), 'key-differs', 'N₂\'s subscript');
  // One pair, two formula options (printed 43): "O" is not "O₂".
  const pair = (member) => `Compare the atomic and molecular orbital diagrams to identify the member of the following pair that has the highest first ionization energy (the most tightly bound electron) in the gas phase: ${member}.`;
  assert.equal(status(4, mc(pair('O and $\\ce{O2}$'), 'O', ['O', 'O₂'])), 'confirmed');
  assert.equal(status(4, mc(pair('O and $\\ce{O2}$'), 'O₂', ['O', 'O₂'])), 'key-differs');
  assert.equal(status(4, mc(pair('H and $\\ce{H2}$'), 'H₂', ['H', 'H₂'])), 'confirmed');
});

test('one answer sentence over three lettered parts: a part whose segment is "and" reads the next part\'s (8.1)', { skip }, () => {
  const ask = (part, letter) => `Identify the following illustration, shown in the figure above, as depicting a σ or π bond: ${part} (drawing ${letter}).`;
  const OPTIONS = ['σ bond', 'π bond'];
  assert.equal(status(1, mc(ask('side-by-side overlap of a 4p and a 2p orbital', 'a'), 'π bond', OPTIONS)), 'confirmed');
  assert.equal(status(1, mc(ask('end-to-end overlap of a 4p and 4p orbital', 'b'), 'σ bond', OPTIONS)), 'confirmed');
  assert.equal(status(1, mc(ask('end-to-end overlap of a 4p and 4p orbital', 'b'), 'π bond', OPTIONS)), 'key-differs');
  assert.equal(status(1, mc(ask('end-to-end overlap of a 4p and a 2p orbital', 'c'), 'σ bond', OPTIONS)), 'confirmed', '"σ bonds", plural');
  assert.equal(status(1, mc(ask('end-to-end overlap of a 4p and a 2p orbital', 'c'), 'π bond', OPTIONS)), 'key-differs');
});

test('the coverage gate renders each new shape\'s unit by its items', { skip }, () => {
  const page = [
    '{{< textin\n  question="What is the hybridization of the selenium atom in SeF₄? Type any superscript as an ordinary number."\n  answer="sp³d"\n  hint="h"\n>}}',
    '{{< fillin\n  question="Strike-anywhere matches contain a layer of $\\ce{KClO3}$ and a layer of $\\ce{P4S3}$. The heat produced by the friction of striking the match causes these two compounds to react vigorously, which sets fire to the wooden stem of the match. $\\ce{KClO3}$ contains the $\\ce{ClO3-}$ ion. $\\ce{P4S3}$ is an unusual molecule with the skeletal structure shown in the figure above. Determine the oxidation states and formal charge of the atoms in $\\ce{P4S3}$ and the $\\ce{ClO3-}$ ion. Enter the oxidation state of O as a signed number, the sign first, as +3 or −3."\n  answer="-2"\n  answerForm="whole-number"\n  hint="h"\n>}}',
  ].join('\n\n');
  const verdicts = coverage(page, sourceExercises(M[2]), { keyedOnly: true });
  const of = (id) => verdicts.find((verdict) => verdict.id === id).status;
  assert.equal(of('fs-idp175627360#check'), 'rendered');
  assert.equal(of('fs-idm32929264(d)'), 'rendered');
  assert.ok(!verdicts.some((verdict) => verdict.status === 'unkeyed-rendered'));
});

test('the source gates read a straight and a curly apostrophe alike (the curly-apostrophe sweep)', async () => {
  const { compact } = await import('./verify-source-keys.mjs');
  const { plain } = await import('../lib/keyed-units.mjs');
  assert.equal(compact("Hund's rule"), compact('Hund’s rule'), 'a multiple-choice option and its key');
  assert.equal(plain("the source's answer"), plain('the source’s answer'), 'a stem read against the CNXML');
});

test('a charge item closing number first is held to the charge the source prints (Derek, November 16, 2026)', { skip }, () => {
  const ask = 'What charge would be needed on F₂ to generate an ion with a bond order of 2? Enter the charge with its number first and then its sign, as 1+ or 1−.';
  assert.equal(status(4, fillin(ask, '2', 'whole-number charge')), 'confirmed');
  assert.equal(status(4, fillin(ask, '-2', 'whole-number charge')), 'key-differs');
  assert.equal(status(4, fillin(ask, '1', 'whole-number charge')), 'key-differs');
});
