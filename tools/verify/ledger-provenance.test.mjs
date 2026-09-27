import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LOW_CONFIDENCE, appendixGlossary, bestSentence, checkProvenance, moduleOutline, sectionProvenance,
} from './ledger-provenance.mjs';
import { readModule, pageItems } from './verify-source-keys.mjs';

// ledger-provenance.mjs regenerates the note a record lost to a solve
// placeholder. These fixtures pin what each kind of item is traced to and
// that a weak match says so instead of passing as provenance.

const MODULE = `<document xmlns="http://cnx.rice.edu/cnxml"><title>Cells</title><content>
<para id="p0">Cells are the basic units of life, and every organism is made of them.</para>
<section id="s1"><title>Membranes</title>
<para id="p1">The plasma membrane controls what enters and leaves the cell. Proteins embedded in the membrane act as channels for ions.</para>
<note class="check-your-understanding"><list><item>What does the plasma membrane control?</item></list></note>
</section>
<section id="s2"><title>Streptococci</title>
<para id="p2">Streptococcus is responsible for many human diseases, including strep throat.</para>
<para id="p4">A genus name is always capitalized and italicized.</para>
</section>
<section class="summary"><title>Summary</title><para id="p3">The plasma membrane is a selective barrier made of lipids and proteins.</para></section>
<glossary><definition id="def-1"><term>plasma membrane</term><meaning>the selective barrier around a cell</meaning></definition></glossary>
<section class="multiple-choice"><exercise id="ex-1"><problem><para>Which structure controls what enters the cell?</para>
<list><item>the plasma membrane</item><item>the nucleus</item><item>the ribosome</item></list></problem><solution><para>A</para></solution></exercise></section>
</content></document>`;

const PAGE = `## Practice

{{< multiplechoice question="Which structure controls what enters the cell?" answer="the plasma membrane" >}}
the plasma membrane
the nucleus
the ribosome
{{< /multiplechoice >}}

{{< textin question="The selective barrier around a cell is the ________." answer="plasma membrane" >}}

{{< textin question="Proteins embedded in the membrane act as channels for ________." answer="ions" >}}

{{< textin question="Streptococcus is the ________ of bacteria responsible for many human diseases." answer="genus" >}}
`;

const exerciseAt = (line, kind, params, inner = '') => ({ path: 'p.md', line, kind, hash: 'x'.repeat(16), params, inner });

test('the outline carries every body sentence with its subsection, and skips the exercise sets', () => {
  const outline = moduleOutline(MODULE);
  const bySection = (title) => outline.sentences.filter((s) => s.section === title).map((s) => s.text);
  assert.deepEqual(bySection('introduction'), ['Cells are the basic units of life, and every organism is made of them.']);
  assert.equal(bySection('Membranes').length, 2, 'a paragraph splits into its sentences');
  assert.deepEqual(bySection('Membranes, Check Your Understanding'), ['What does the plasma membrane control?']);
  assert.equal(bySection('summary').length, 1);
  assert.ok(!outline.sentences.some((s) => /Which structure/.test(s.text)), 'an exercise stem is never a provenance sentence');
  assert.deepEqual(outline.glossary, [{ id: 'def-1', term: 'plasma membrane', meaning: 'the selective barrier around a cell' }]);
});

test('a section item is traced to its source exercise, glossary entry, or sentence', () => {
  const context = { source: readModule(MODULE), outline: moduleOutline(MODULE), items: pageItems(PAGE) };
  const [mc, glossary, cloze, authored] = context.items;
  const note = (item, params, inner) => sectionProvenance(exerciseAt(item.line, item.type, params, inner), context);
  assert.deepEqual(note(mc, { question: mc.question, answer: mc.answer }, mc.options.join('\n')), { note: 'source exercise ex-1 (confirmed)', low: false });
  assert.deepEqual(note(glossary, { question: glossary.question, answer: glossary.answer }), { note: 'glossary recall: plasma membrane (def-1)', low: false });
  const body = note(cloze, { question: cloze.question, answer: cloze.answer });
  assert.match(body.note, /^body cloze from § Membranes: "Proteins embedded in the membrane act as channels for ions\."$/);
  // The keyed word is the author's own ("genus"); the sentence the cloze was
  // cut from does not print it, and wins over one that merely does.
  const own = note(authored, { question: authored.question, answer: authored.answer });
  assert.match(own.note, /^author-built from § Streptococci: "Streptococcus is responsible/);
});

test('a weak match is marked low confidence rather than passed as provenance', () => {
  const outline = moduleOutline(MODULE);
  const stray = exerciseAt(1, 'multiplechoice', { question: 'Which volcano erupted in 1815?', answer: 'Tambora' });
  const derived = sectionProvenance(stray, { source: readModule(MODULE), outline, items: [] });
  assert.equal(derived.low, true);
  assert.match(derived.note, /\(low confidence\)$/);
  assert.ok(bestSentence(stray, outline).score < LOW_CONFIDENCE);
});

test('a Knowledge Check item gets its KC tie: check, section, subsection or glossary term, module', () => {
  const outline = moduleOutline(MODULE);
  const recall = exerciseAt(9, 'textin', { question: 'The selective barrier around a cell is called the ________.', answer: 'plasma membranes' });
  assert.deepEqual(checkProvenance(recall, { checkIndex: 2, sectionNumber: '4.1', moduleId: 'm1', outline }),
    { note: 'KC 2 4.1 § glossary plasma membrane (def-1), m1', low: false }, 'the plural folds onto the glossary term');
  const body = exerciseAt(9, 'multiplechoice', { question: 'What do proteins embedded in the membrane act as?', answer: 'channels for ions' });
  assert.deepEqual(checkProvenance(body, { checkIndex: 2, sectionNumber: '4.1', moduleId: 'm1', outline }),
    { note: 'KC 2 4.1 § Membranes, m1', low: false });
});

test('a Glossary appendix entry is its emphasized headword and the meaning after it', () => {
  const xml = `<document xmlns="http://cnx.rice.edu/cnxml"><content><list>
<item id="g1"><emphasis>biomolecule</emphasis> molecule that is part of living matter</item>
<item id="g2">a stray item with no headword</item></list></content></document>`;
  assert.deepEqual(appendixGlossary(xml).glossary, [{ id: 'g1', term: 'biomolecule', meaning: 'molecule that is part of living matter' }]);
});
