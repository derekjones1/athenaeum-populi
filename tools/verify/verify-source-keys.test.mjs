import test from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  DISCLOSED_DEVIATIONS, MODEL_COVERAGE_FLOOR,
  checkCorpus, compact, judgeMultipleChoice, judgeSelfcheck, judgeTextin,
  keyedOptionIndex, keyedOptionIndices, pageItems, readModule, skipLines, summaryLine, termAlternates,
} from './verify-source-keys.mjs';
import { BASELINE_SOURCES } from './baselines.mjs';
import { bundleSourceDirectory, loadSourceLock } from '../lib/openstax-source.mjs';

const repositoryRoot = new URL('../../', import.meta.url).pathname;
const lock = loadSourceLock(repositoryRoot);
const mappedSections = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8')).sections;
const absentBundles = lock.bundleKeys.filter(
  (bundle) => !existsSync(bundleSourceDirectory(repositoryRoot, lock, bundle)),
);

/* ---- the source's ways of naming an option -------------------------------- */

const OPTIONS = ['photosystem I', 'ATP synthase', 'photosystem II', 'cytochrome complex'];

test('a bare letter, a lettered restatement, and the option text all name an option', () => {
  assert.equal(keyedOptionIndex('C', OPTIONS), 2);
  assert.equal(keyedOptionIndex('c.', OPTIONS), 2);
  assert.equal(keyedOptionIndex('D. The cytochrome complex is not involved.', OPTIONS), 3);
  assert.equal(keyedOptionIndex('ATP synthase', OPTIONS), 1);
});

test('a letter list keys several options; a page must then disclose its single key', () => {
  assert.deepEqual(keyedOptionIndices('A and B. The cortex, pith, and epidermis are made of parenchyma cells.'), [0, 1]);
  assert.deepEqual(keyedOptionIndices('B, D'), [1, 3]);
  assert.deepEqual(keyedOptionIndices('a & c: both are inhibited.'), [0, 2]);
  assert.equal(keyedOptionIndices('A typical body cell contains two matched sets of chromosomes.'), null);
  assert.equal(keyedOptionIndices('A and its neighbours divide.'), null);
  assert.equal(keyedOptionIndex('A and B. The cortex, pith, and epidermis are made of parenchyma cells.', OPTIONS), 0);
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
  assert.equal(compact('P<sub>O₂</sub> is higher in air than in the lungs.'), compact('P O 2 is higher in air than in the lungs.'));
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

test('two source exercises sharing a stem verbatim are told apart by the page item\'s options', () => {
  // m66559 (§24.2) keys both of its Visual Connections to the stem "Which of
  // the following statements is true?"; matching on the stem alone paired the
  // page's basidiomycete item with the ascomycete exercise and reported a
  // false key-differs.
  const twin = readModule(`<document xmlns="http://cnx.rice.edu/cnxml">
<metadata><md:content-id xmlns:md="x">m2</md:content-id></metadata>
<content>
<exercise id="ex-ascus"><problem><para>Which of the following statements is true?</para>
<list list-type="enumerated" number-style="lower-alpha"><item>A dikaryotic ascus forms eight ascospores.</item><item>A diploid ascus forms eight ascospores.</item><item>A haploid zygote forms eight ascospores.</item></list></problem>
<solution><para>A</para></solution></exercise>
<exercise id="ex-basidium"><problem><para>Which of the following statements is true?</para>
<list list-type="enumerated" number-style="lower-alpha"><item>A basidium is the fruiting body of a mushroom.</item><item>Plasmogamy yields four basidiospores.</item><item>A basidiocarp is the fruiting body of a mushroom.</item></list></problem>
<solution><para>C</para></solution></exercise>
</content>
</document>`);
  const basidium = {
    type: 'multiplechoice',
    question: 'Which of the following statements is true?',
    answer: 'A basidiocarp is the fruiting body of a mushroom.',
    options: ['A basidium is the fruiting body of a mushroom.', 'Plasmogamy yields four basidiospores.', 'A basidiocarp is the fruiting body of a mushroom.'],
  };
  assert.equal(judgeMultipleChoice(basidium, twin).status, 'confirmed');
  const ascus = {
    type: 'multiplechoice',
    question: 'Which of the following statements is true?',
    answer: 'A dikaryotic ascus forms eight ascospores.',
    options: ['A dikaryotic ascus forms eight ascospores.', 'A diploid ascus forms eight ascospores.', 'A haploid zygote forms eight ascospores.'],
  };
  assert.equal(judgeMultipleChoice(ascus, twin).status, 'confirmed');
  // The wrong key on the second twin is still caught against ITS exercise.
  const wrong = judgeMultipleChoice({ ...basidium, answer: 'A basidium is the fruiting body of a mushroom.' }, twin);
  assert.equal(wrong.status, 'key-differs');
  assert.match(wrong.detail, /source ex-basidium keys C/);
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
    assert.ok(['key', 'options', 'solution'].includes(deviation.kind));
    assert.ok(deviation.reason.length > 20, 'the reason says what the module settles');
  }
});

// The erratum file is a gitignored local scratchpad, so this only has
// something to resolve against on an authoring machine; in CI it is skipped
// by name, the same shape as the bundle-absent skip below. Without it, a
// deviation could cite an erratum number that names nothing — the tool's
// header promises each is "backed by a confirmed erratum", and until now
// nothing read the file to see.
const errataPath = path.join(repositoryRoot, 'docs/openstax-errata.md');
test('every disclosed deviation cites an erratum that exists in the local errata file', {
  skip: !existsSync(errataPath) && 'docs/openstax-errata.md is gitignored and absent here — run on the authoring machine',
}, () => {
  const numbered = new Set(
    [...readFileSync(errataPath, 'utf8').matchAll(/^### (\d+)\. /gm)].map((m) => Number(m[1])),
  );
  assert.ok(numbered.size > 0, 'the errata file numbers its entries as `### N. …`');
  for (const deviation of DISCLOSED_DEVIATIONS) {
    assert.ok(numbered.has(deviation.erratum), `${deviation.exercise} cites erratum ${deviation.erratum}, which docs/openstax-errata.md does not carry`);
  }
});

// `/sources/` is gitignored, so this only has a corpus to read on a machine
// that has run `npm run source:fetch`; in CI it is skipped by name, exactly as
// the real-checkout test in tools/source/openstax-source.test.mjs is. The
// fixture tests below prove the skip path itself.
test('the corpus carries no undisclosed departure from a source key', {
  skip: absentBundles.length > 0
    && `run npm run source:fetch first (not checked out: ${absentBundles.join(', ')})`,
}, () => {
  const { failures, counts, confirmed, skipped, sectionsSkipped } = checkCorpus(repositoryRoot);
  assert.deepEqual(failures, []);
  assert.deepEqual(skipped, {});
  assert.equal(sectionsSkipped, 0);
  // A deviation may be exercised by any kind that judges against a source
  // exercise or table.
  assert.equal(
    counts.multiplechoice.disclosed
      + counts.selfcheck.disclosed + counts.sortbins.disclosed,
    DISCLOSED_DEVIATIONS.length,
    'every listed deviation is exercised',
  );
  assert.ok(confirmed > 0);
});

/* ---- a repository with no source checkout (CI, a fresh clone) ------------- */

/** A repository root that carries the real lock and map but none of the
 * pinned checkouts, plus whatever `extra` sets up inside it. */
function withBareRepository(extra, body) {
  const root = mkdtempSync(path.join(tmpdir(), 'verify-source-keys-'));
  try {
    mkdirSync(path.join(root, 'data/openstax'), { recursive: true });
    for (const file of ['source-lock.json', 'source-map.json']) {
      cpSync(path.join(repositoryRoot, 'data/openstax', file), path.join(root, 'data/openstax', file));
    }
    extra(root);
    return body(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('a bundle with no checkout is skipped by name, not failed, and the floor is not a baseline', () => {
  withBareRepository(() => {}, (root) => {
    const result = checkCorpus(root);
    assert.deepEqual(result.failures, [], 'an absent checkout is not a corpus defect');
    assert.equal(result.sections, 0);
    assert.equal(result.confirmed, 0);
    assert.deepEqual(Object.keys(result.skipped).sort(), [...lock.bundleKeys].sort(), 'every bundle is named');
    assert.equal(result.sectionsSkipped, mappedSections.length, 'every mapped section is in the skip tally');

    const lines = skipLines(root, loadSourceLock(root), result.skipped);
    assert.equal(lines.length, lock.bundleKeys.length);
    for (const line of lines) assert.match(line, /^⊘ \d+ mapped section\(s\) skipped: bundle [\w-]+ is not checked out at sources\/openstax\/[\w-]+\/ \(run npm run source:fetch -- --bundle [\w-]+\)$/);

    // The summary must not be readable as a baseline: update-baselines parses
    // the count with this exact pattern, and a partial run has no count to
    // record. A complete run keeps the shape.
    const { pattern } = BASELINE_SOURCES.find((source) => source.label === 'verify-source-keys');
    const partial = summaryLine(result);
    assert.match(partial, /^⊘ source-key cross-check \(partial: \d+ of \d+ mapped sections skipped, no checkout\): 0 keyed answers/);
    assert.equal(partial.match(pattern), null, 'a partial count cannot be recorded as the baseline');
    assert.match(summaryLine({ ...result, sectionsSkipped: 0 }), pattern);
  });
});

test('a checkout that is present is read in full: a module missing from it is still a failure', () => {
  const section = mappedSections.find((entry) => entry.bundle === 'biology-bundle');
  withBareRepository((root) => {
    // The biology checkout directory exists but holds no modules; the page it
    // maps is present so the module check is what fires.
    mkdirSync(bundleSourceDirectory(root, loadSourceLock(root), 'biology-bundle'), { recursive: true });
    mkdirSync(path.dirname(path.join(root, section.localPath)), { recursive: true });
    cpSync(path.join(repositoryRoot, section.localPath), path.join(root, section.localPath));
  }, (root) => {
    const result = checkCorpus(root, { contentRoot: path.dirname(section.localPath) });
    assert.equal(result.sectionsSkipped, 0, 'a present checkout skips nothing');
    assert.ok(result.failures.some((failure) => failure.page === section.localPath
      && failure.detail.includes(`pinned module ${section.moduleId} is not checked out`)));
  });
});


/* ---- sortbins against a source comparison table --------------------------- */

import { judgeSortbins } from './verify-source-keys.mjs';

const TABLE_MODULE = `<document xmlns="http://cnx.rice.edu/cnxml">
<content>
<table id="tab-1" class="top-titled" summary=""><tgroup cols="3">
<thead>
<row><entry namest="col1" nameend="col3" align="left">Difference between Prokaryotic and Eukaryotic Replication</entry></row>
<row><entry>Property</entry><entry>Prokaryotes</entry><entry>Eukaryotes</entry></row>
</thead>
<tbody>
<row><entry>Origin of replication</entry><entry>Single</entry><entry>Multiple</entry></row>
<row><entry>Telomerase</entry><entry>Not present</entry><entry>Present</entry></row>
<row><entry>Sliding clamp</entry><entry>Sliding clamp</entry><entry>PCNA</entry></row>
</tbody>
</tgroup></table>
</content>
</document>`;

const tableSource = readModule(TABLE_MODULE);

test('readModule reads a CALS table: title from the spanning thead row, headers from the last', () => {
  assert.equal(tableSource.tables.length, 1);
  const [table] = tableSource.tables;
  assert.equal(table.id, 'tab-1');
  assert.equal(table.title, 'Difference between Prokaryotic and Eukaryotic Replication');
  assert.deepEqual(table.header, ['Property', 'Prokaryotes', 'Eukaryotes']);
  assert.equal(table.rows.length, 3);
  assert.deepEqual(table.rows[0], ['Origin of replication', 'Single', 'Multiple']);
});

const sortbinsItem = (items, bins = ['Prokaryotes', 'Eukaryotes']) => ({
  type: 'sortbins', question: 'Assign each replication property.', bins, items,
});

test('a sortbins whose items each read as their keyed column is confirmed', () => {
  const verdict = judgeSortbins(sortbinsItem([
    { label: 'Single origin of replication', bin: 0 },
    { label: 'Multiple origins of replication', bin: 1 },
    { label: 'Telomerase not present', bin: 0 },
    { label: 'PCNA sliding clamp', bin: 1 },
  ]), tableSource);
  assert.equal(verdict.status, 'confirmed');
  assert.equal(verdict.table.id, 'tab-1');
});

test('an item that reads strictly better under the other column is a mis-binned item', () => {
  const verdict = judgeSortbins(sortbinsItem([
    { label: 'Single origin of replication', bin: 1 },
    { label: 'Multiple origins of replication', bin: 0 },
    { label: 'Telomerase not present', bin: 0 },
    { label: 'PCNA sliding clamp', bin: 1 },
  ]), tableSource);
  assert.equal(verdict.status, 'assignment-differs');
  assert.match(verdict.detail, /Single origin of replication.*"Prokaryotes" in table tab-1/);
});

test('bins that name no table columns, or items no table row covers, are unmatched', () => {
  assert.equal(judgeSortbins(sortbinsItem([
    { label: 'Single origin of replication', bin: 0 },
    { label: 'Multiple origins of replication', bin: 1 },
  ], ['Plants', 'Animals']), tableSource).status, 'unmatched');
  assert.equal(judgeSortbins(sortbinsItem([
    { label: 'High ribosome density', bin: 0 },
    { label: 'Membrane-bound organelles', bin: 1 },
  ]), tableSource).status, 'unmatched');
});



test('pageItems strips a selfcheck rubric tail — checkpoints never distort source coverage', () => {
  const markdown = `{{< selfcheck question="Describe the pathway of electron transfer from photosystem II to photosystem I." hint="h" >}}
Electrons leave photosystem II, pass through plastoquinone to the cytochrome complex, then plastocyanin, and arrive at photosystem I.
===CHECKS===
electrons leave photosystem II
pass through plastoquinone to the cytochrome complex
arrive at photosystem I
{{< /selfcheck >}}
`;
  const [item] = pageItems(markdown);
  assert.equal(item.type, 'selfcheck');
  assert.doesNotMatch(item.model, /===CHECKS===/);
  assert.doesNotMatch(item.model, /electrons leave photosystem II\s*$/i);
  assert.equal(judgeSelfcheck(item, source).status, 'verbatim', 'a checkpointed selfcheck still judges verbatim on its model part');
});


/* ---- summary provenance ---------------------------------------------------- */

const SUMMARY_MODULE = `<document xmlns="http://cnx.rice.edu/cnxml">
<content>
<para>Body prose about replication machinery.</para>
<section id="s1" class="summary"><title>Section Summary</title>
<para>Replication in prokaryotes starts from a single origin of replication.</para></section>
</content>
</document>`;

test('a textin answer drawn from the module summary reports the summary provenance', () => {
  const summarySource = readModule(SUMMARY_MODULE);
  const textin = (question, answer) => judgeTextin({ type: 'textin', question, answer }, summarySource).status;
  assert.equal(textin('Prokaryotic replication starts from a ________ origin of replication.', 'single'), 'summary');
  assert.equal(textin('Body prose describes replication ________.', 'machinery'), 'body');
  assert.equal(textin('A packet of light energy is a ________.', 'photon'), 'unsourced');
});


/* ---- sortbins against a TRANSPOSED comparison table ----------------------- */

const TRANSPOSED_MODULE = `<document xmlns="http://cnx.rice.edu/cnxml">
<content>
<table id="tab-t" class="top-titled" summary=""><tgroup cols="3">
<thead>
<row><entry namest="col1" nameend="col3">Cell Division Apparatus among Various Organisms</entry></row>
<row><entry></entry><entry>Division of nuclear material</entry><entry>Separation of daughter cells</entry></row>
</thead>
<tbody>
<row><entry>Prokaryotes</entry><entry>Occurs through binary fission.</entry><entry>FtsZ proteins assemble into a ring that pinches the cell in two.</entry></row>
<row><entry>Animal cells</entry><entry>A mitotic spindle forms from the centrosomes. The nuclear envelope dissolves.</entry><entry>Microfilaments form a cleavage furrow that pinches the cell in two.</entry></row>
</tbody>
</tgroup></table>
</content>
</document>`;

test('a sortbins keyed by a transposed table (categories as rows) is confirmed', () => {
  const transposed = readModule(TRANSPOSED_MODULE);
  const verdict = judgeSortbins(sortbinsItem([
    { label: 'Division occurs through binary fission', bin: 0 },
    { label: 'The nuclear envelope dissolves', bin: 1 },
    { label: 'FtsZ proteins assemble into a ring', bin: 0 },
    { label: 'Microfilaments form a cleavage furrow', bin: 1 },
  ], ['Prokaryotes', 'Animal cells']), transposed);
  assert.equal(verdict.status, 'confirmed');
  assert.equal(verdict.table.id, 'tab-t');
  const wrong = judgeSortbins(sortbinsItem([
    { label: 'Division occurs through binary fission', bin: 1 },
    { label: 'The nuclear envelope dissolves', bin: 0 },
    { label: 'FtsZ proteins assemble into a ring', bin: 0 },
    { label: 'Microfilaments form a cleavage furrow', bin: 1 },
  ], ['Prokaryotes', 'Animal cells']), transposed);
  assert.equal(wrong.status, 'assignment-differs');
  assert.match(wrong.detail, /binary fission.*"Prokaryotes" in table tab-t/);
});
