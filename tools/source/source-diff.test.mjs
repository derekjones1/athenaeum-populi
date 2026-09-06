import test from 'node:test';
import assert from 'node:assert/strict';
import { extractModelAnswers, extractModuleProse, extractPageProse, findNearMissWords } from './source-diff.mjs';
import { phraseCoverage } from '../lib/openstax-source.mjs';

/* ---- fake page + fake module, no /sources/ checkout needed ---------------- */

const FAKE_MODULE = `<document xmlns="http://cnx.rice.edu/cnxml">
  <metadata><content-id>m00000</content-id></metadata>
  <content>
    <para>The brightfield microscope produces a dark image on a bright background.</para>
    <figure id="fig1">
      <media alt="A binocular microscope with two eyepieces and a rotating nosepiece.">
        <image mime-type="image/webp" src="fig1.webp"/>
      </media>
      <caption>A typical compound microscope.</caption>
    </figure>
    <section class="multiple-choice">
      <exercise id="ex1">
        <problem><para>Which lens sits closest to the specimen?</para></problem>
        <solution><para>The objective lens sits closest to the specimen.</para></solution>
      </exercise>
    </section>
  </content>
</document>`;

const FAKE_PAGE = `---
title: Test Page
---

## Light Microscopy

The **brightfield microscope** produces a dark image on a bright background.

This sentence about telescopes and their gigantic orbital mirrors is nowhere in the source module at all.

{{< selfcheck question="Why?" hint="Think." >}}
A model answer nobody wrote in the source, entirely author-written and safely ignored.
{{< /selfcheck >}}

{{< mediafigure src="book/fig1" alt="whatever" kind="photo" >}}
A typical compound microscope.
{{< /mediafigure >}}

| a | b |
|---|---|
| 1 | 2 |

See [Staining Microscopic Specimens](/life-health-sciences/microbiology/whatever/) for more.

## Practice

{{< textin question="?" answer="x" >}}

## Key terms

- **brightfield microscope** — a compound light microscope.

---

<small>Adapted from Example. Changes: "referred" corrected from the source's misspelling "refered."</small>
`;

test('extractPageProse drops frontmatter, Practice, Key terms, the footer, and a selfcheck inner answer', () => {
  const { text, sentences } = extractPageProse(FAKE_PAGE);
  assert.ok(!text.includes('Test Page')); // frontmatter gone
  assert.ok(!text.toLowerCase().includes('textin')); // Practice gone
  assert.ok(!text.toLowerCase().includes('compound light microscope')); // Key terms gone
  assert.ok(!text.includes('Adapted from Example')); // footer gone
  assert.ok(!text.includes('nobody wrote')); // selfcheck inner answer gone
  assert.ok(text.includes('brightfield microscope produces a dark image')); // real prose kept
  assert.ok(text.includes('typical compound microscope')); // mediafigure caption kept (not selfcheck)
  assert.ok(text.includes('Staining Microscopic Specimens')); // link text kept, target dropped
  assert.ok(!text.includes('|---|')); // table stripped
  assert.ok(sentences.some((s) => s.includes('telescopes')));
});

test('extractModuleProse drops the multiple-choice end-matter section and its <solution>, keeps prose and appends alt text', () => {
  const { text } = extractModuleProse(FAKE_MODULE);
  assert.ok(text.includes('brightfield microscope produces a dark image'));
  assert.ok(text.includes('typical compound microscope')); // <caption> kept
  assert.ok(text.includes('two eyepieces and a rotating nosepiece')); // alt appended
  assert.ok(!text.includes('objective lens sits closest')); // <solution> in excluded section gone
  assert.ok(!text.includes('Which lens sits closest')); // whole excluded <section> gone
});

test('an added sentence has no coverage in the module text; a transcribed one does', () => {
  const { sentences } = extractPageProse(FAKE_PAGE);
  const { text: moduleText } = extractModuleProse(FAKE_MODULE);
  const telescopeSentence = sentences.find((s) => s.includes('telescopes'));
  const brightfieldSentence = sentences.find((s) => s.includes('brightfield microscope produces'));
  assert.ok(telescopeSentence);
  assert.ok(brightfieldSentence);
  assert.ok(phraseCoverage(telescopeSentence, moduleText) < 0.8);
  assert.ok(phraseCoverage(brightfieldSentence, moduleText) >= 0.8);
});

test('findNearMissWords catches a miscopied spelling and suppresses a disclosed one', () => {
  const pageText = 'the specimen was refered to as a control sample';
  const moduleText = 'the specimen was referred to as a control sample';
  const hits = findNearMissWords(pageText, moduleText);
  assert.deepEqual(hits, [{ page: 'refered', source: 'referred' }]);

  const disclosed = 'Changes: "referred" corrected from the source misspelling "refered".';
  assert.deepEqual(findNearMissWords(pageText, moduleText, disclosed), []);
});

test('findNearMissWords does not flag a page word already present in the module, or one with no close module word', () => {
  assert.deepEqual(findNearMissWords('brightfield microscope', 'brightfield microscope'), []);
  assert.deepEqual(findNearMissWords('galaxy cluster', 'brightfield microscope'), []);
});

test('a shortcode tag, a heading, a list item, and a blank line each end a sentence', () => {
  const page = `---
title: T
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe how our ancestors improved food
- Describe key historical events
{{< /callout >}}

## A Heading Without Terminal Punctuation
Most people today are familiar with microbes
{{< mediafigure src="x" alt="y" kind="photo" >}}
A caption with no period
{{< /mediafigure >}}
Link to Learning
`;
  const { text, sentences } = extractPageProse(page);
  assert.deepEqual(sentences, [
    'By the end of this section, you will be able to:',
    'Describe how our ancestors improved food',
    'Describe key historical events',
    'A Heading Without Terminal Punctuation',
    'Most people today are familiar with microbes',
    'A caption with no period',
    'Link to Learning',
  ]);
  assert.ok(!/\u241E/.test(text), 'the boundary marker never reaches the returned text');
  assert.ok(text.includes('improved food Describe key'));
});

test('extractModuleProse includes the metadata abstract (a Biology 2e module keeps its objectives there)', () => {
  const module = `<document xmlns="urn:cnxml"><metadata xmlns:md="urn:md">
    <md:abstract><list><item>Describe key historical events</item></list></md:abstract></metadata>
    <content><para>Body prose.</para></content></document>`;
  assert.ok(extractModuleProse(module).text.includes('Describe key historical events'));
});

test('extractModuleProse keeps end matter and solutions only when asked to', () => {
  assert.ok(!extractModuleProse(FAKE_MODULE).text.includes('objective lens sits closest'));
  const whole = extractModuleProse(FAKE_MODULE, { includeSolutions: true }).text;
  assert.ok(whole.includes('objective lens sits closest'));
  assert.ok(whole.includes('Which lens sits closest'));
});

test('extractModelAnswers returns each selfcheck answer above its rubric, split into sentences', () => {
  const page = `---
title: T
---
{{< selfcheck question="Why is the sky blue?" hint="Think." >}}
Rayleigh scattering favors short wavelengths. So the sky looks blue to us.
===CHECKS===
Rayleigh scattering
{{< /selfcheck >}}
{{< selfcheck question="Second?" >}}
One sentence only
{{< /selfcheck >}}
`;
  assert.deepEqual(extractModelAnswers(page), [
    { question: 'Why is the sky blue?', sentences: ['Rayleigh scattering favors short wavelengths.', 'So the sky looks blue to us.'] },
    { question: 'Second?', sentences: ['One sentence only'] },
  ]);
});

test('findNearMissWords ignores inflections, the page\'s cross-reference words, and two edits in a short word', () => {
  // The objectives callout's imperative verb against the module's third person.
  assert.deepEqual(findNearMissWords('describe the cycle', 'the module describes the cycle'), []);
  assert.deepEqual(findNearMissWords('it occurs summarizes', 'occur summarize'), []);
  // "below" is the page's own word, and two edits from "yellow" is no misspelling at five letters.
  assert.deepEqual(findNearMissWords('shown below', 'yellow pigment'), []);
  assert.deepEqual(findNearMissWords('among these', 'amino acids'), []);
  // Two edits in a long word still count: a silently corrected spelling.
  assert.deepEqual(findNearMissWords('minimally expandable lungs', 'minimally expandible lungs'), [{ page: 'expandable', source: 'expandible' }]);
});
