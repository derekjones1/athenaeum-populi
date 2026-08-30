import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import {
  DISCLOSED_DEVIATIONS, MODEL_COVERAGE_FLOOR,
  checkCorpus, compact, judgeMultipleChoice, judgeSelfcheck, judgeTextin,
  keyedOptionIndex, pageItems, readModule, termAlternates,
} from './verify-source-keys.mjs';

const repositoryRoot = new URL('../../', import.meta.url).pathname;

/* ---- the source's ways of naming an option -------------------------------- */

const OPTIONS = ['photosystem I', 'ATP synthase', 'photosystem II', 'cytochrome complex'];

test('a bare letter, a lettered restatement, and the option text all name an option', () => {
  assert.equal(keyedOptionIndex('C', OPTIONS), 2);
  assert.equal(keyedOptionIndex('c.', OPTIONS), 2);
  assert.equal(keyedOptionIndex('D. The cytochrome complex is not involved.', OPTIONS), 3);
  assert.equal(keyedOptionIndex('ATP synthase', OPTIONS), 1);
});

test('a prose solution that starts with the word "A" is prose, not a key', () => {
  // 10.1's neighbouring solution: "A typical body cell contains two…"
  assert.equal(keyedOptionIndex('A typical body cell contains two matched sets of chromosomes.', OPTIONS), null);
  assert.equal(keyedOptionIndex('Substances can diffuse more quickly through small cells.', OPTIONS), null);
});

/* ---- spellings that differ only in markup --------------------------------- */

test('compact folds the sub/superscript, delta, and hyphen spellings the page and source disagree on', () => {
  assert.equal(compact('G₁ checkpoint'), compact('G 1 checkpoint'));
  assert.equal(compact('They increase ΔG of reactions.'), compact('They increase ∆G of reactions.'));
  assert.equal(compact('the conversion of CO₂ into an organic compound'), compact('the conversion of CO 2 into an organic compound'));
  assert.equal(compact('cis-trans isomers'), compact('cis - trans isomers'));
  assert.notEqual(compact('photosystem I'), compact('photosystem II'));
});

test('a glossary term licenses its parenthetical spellings', () => {
  assert.deepEqual(termAlternates('triacylglycerol (also, triglyceride)'), ['triacylglycerol', 'triglyceride']);
  assert.deepEqual(termAlternates('deoxyribonucleic acid (DNA)'), ['deoxyribonucleic acid', 'DNA']);
  assert.deepEqual(termAlternates('entropy (S)'), ['entropy', 'S']);
  assert.deepEqual(termAlternates('photon'), ['photon']);
});

/* ---- judgments on a small module ------------------------------------------ */

const MODULE = `<document xmlns="http://cnx.rice.edu/cnxml">
<metadata><md:content-id xmlns:md="x">m1</md:content-id></metadata>
<content>
<para>A <term>photon</term> is a distinct quantity of light energy. Deductive reasoning starts from a principle.</para>
<exercise id="ex-key"><problem><para>Which complex is not involved in the establishment of conditions for ATP synthesis?</para>
<list list-type="enumerated" number-style="lower-alpha"><item>photosystem I</item><item>ATP synthase</item><item>photosystem II</item><item>cytochrome complex</item></list></problem>
<solution><para>C</para></solution></exercise>
<exercise id="ex-prose"><problem><para>Describe the pathway of electron transfer from photosystem II to photosystem I.</para></problem>
<solution><para>Electrons leave photosystem II, pass through plastoquinone to the cytochrome complex, then plastocyanin, and arrive at photosystem I.</para></solution></exercise>
</content>
<glossary>
<definition><term>deductive reasoning</term><meaning>a form of logical thinking that uses a general principle to predict specific results</meaning></definition>
<definition><term>wavelength</term><meaning>distance between consecutive points of a wave</meaning></definition>
</glossary>
</document>`;

const source = readModule(MODULE);

test('readModule reads exercises, option keys, glossary alternates, and bolded terms', () => {
  assert.equal(source.exercises.length, 2);
  assert.equal(source.exercises[0].keyed, 2);
  assert.equal(source.exercises[1].keyed, null);
  assert.ok(source.glossary.has(compact('deductive reasoning')));
  assert.ok(source.terms.has(compact('photon')));
});

const mc = (answer, options = OPTIONS) => ({
  type: 'multiplechoice',
  question: 'Which complex is not involved in the establishment of conditions for ATP synthesis?',
  answer,
  options,
});

test('a multiplechoice is confirmed only when it keys the source option over the source list', () => {
  assert.equal(judgeMultipleChoice(mc('photosystem II'), source).status, 'confirmed');
  // distractor order is free…
  assert.equal(judgeMultipleChoice(mc('photosystem II', [...OPTIONS].reverse()), source).status, 'confirmed');
  // …a different key is not
  const differs = judgeMultipleChoice(mc('photosystem I'), source);
  assert.equal(differs.status, 'key-differs');
  assert.match(differs.detail, /source ex-key keys C "photosystem II"; page keys "photosystem I"/);
  // …and neither is an edited distractor
  const edited = judgeMultipleChoice(mc('photosystem II', ['photosystem I', 'ATP synthase', 'photosystem II', 'plastocyanin']), source);
  assert.equal(edited.status, 'options-differ');
});

test('an author-written multiplechoice and a prose-keyed source are counted, not judged', () => {
  assert.equal(judgeMultipleChoice({ ...mc('oxygen'), question: 'Which gas does aerobic respiration consume?' }, source).status, 'unmatched');
  assert.equal(judgeMultipleChoice({
    ...mc('plastocyanin'),
    question: 'Describe the pathway of electron transfer from photosystem II to photosystem I.',
  }, source).status, 'prose-key');
});

test('a textin answer must come from the module', () => {
  const textin = (question, answer) => judgeTextin({ type: 'textin', question, answer }, source).status;
  assert.equal(textin('The distance between consecutive points of a wave is its ________.', 'wavelength'), 'glossary');
  // the prompt's words around the blank complete the glossary term
  assert.equal(textin('Reasoning from a general principle to a specific result is called ________ reasoning.', 'deductive'), 'glossary-completed');
  // a bolded term, then a phrase the body prints, then nothing at all
  assert.equal(textin('A packet of light energy is called a ________.', 'photon'), 'term');
  assert.equal(textin('A ________ quantity of light energy.', 'distinct'), 'body');
  assert.equal(textin('A packet of light energy is called a ________.', 'quantum'), 'unsourced');
});

test('a self-check model answer is measured by how much of it comes from the source solution', () => {
  const selfcheck = (model) => judgeSelfcheck({
    type: 'selfcheck',
    question: 'Describe the pathway of electron transfer from photosystem II to photosystem I.',
    model,
  }, source);
  assert.equal(selfcheck('Electrons leave photosystem II, pass through plastoquinone to the cytochrome complex, then plastocyanin, and arrive at photosystem I.').status, 'verbatim');
  // half of a solution is still the solution's own words
  assert.equal(selfcheck('Electrons leave photosystem II and pass through plastoquinone to the cytochrome complex.').status, 'verbatim');
  const invented = selfcheck('Electrons are carried by ferredoxin and NADP reductase directly into the Calvin cycle, bypassing every complex.');
  assert.equal(invented.status, 'diverges');
  assert.ok(invented.coverage < MODEL_COVERAGE_FLOOR);
  assert.equal(selfcheck('Why might an organism benefit from more than one pigment?').status, 'diverges');
});

test('pageItems reads the three graded shortcode kinds with their line numbers', () => {
  const items = pageItems([
    '# Page',
    '{{< multiplechoice question="Q1?" answer="b" >}}',
    'a',
    'b',
    '{{< /multiplechoice >}}',
    '{{< textin question="T ________." answer="t" accept="ts" >}}',
    '{{< selfcheck question="S?" >}}',
    'Model answer.',
    '{{< /selfcheck >}}',
  ].join('\n'));
  assert.deepEqual(items.map((item) => [item.type, item.line]), [['multiplechoice', 2], ['textin', 6], ['selfcheck', 7]]);
  assert.deepEqual(items[0].options, ['a', 'b']);
  assert.equal(items[2].model, 'Model answer.');
});

/* ---- the corpus ----------------------------------------------------------- */

test('every disclosed deviation names a mapped page and an erratum number', () => {
  for (const deviation of DISCLOSED_DEVIATIONS) {
    assert.ok(existsSync(new URL(deviation.page, `file://${repositoryRoot}`)), `${deviation.page} exists`);
    assert.ok(Number.isInteger(deviation.erratum) && deviation.erratum > 0, `${deviation.exercise} cites an erratum`);
    assert.ok(['key', 'options'].includes(deviation.kind));
    assert.ok(deviation.reason.length > 20, 'the reason says what the module settles');
  }
});

test('the corpus carries no undisclosed departure from a source key', () => {
  const { failures, counts, confirmed } = checkCorpus(repositoryRoot);
  assert.deepEqual(failures, []);
  assert.equal(counts.multiplechoice.disclosed, DISCLOSED_DEVIATIONS.length, 'every listed deviation is exercised');
  assert.ok(confirmed > 0);
});
