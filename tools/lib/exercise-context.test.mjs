import test from 'node:test';
import assert from 'node:assert/strict';
import { dependencyOf, figureLikeBlocks, referencesContext } from './exercise-context.mjs';

test('figureLikeBlocks finds each block form, drops a block inside an exercise, and keeps only the outer of nested blocks', () => {
  const page = `---
title: Blocks
---

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line.","lines":[{"slope":1,"intercept":0}]}
{{< /apfigure >}}

<svg role="img" aria-label="A curve"><path d="M0 0"/></svg>

| Cell | Present |
|---|---|
| nucleus | ![tick](/images/tick.svg) |

![A photo](/images/photo.webp)

<img src="/images/inline.png" alt="Inline">

{{< mediafigure src="m.webp" alt="A micrograph." >}}
Caption.
{{< /mediafigure >}}

{{< selfcheck question="Explain." >}}
| inside | the model answer |
|---|---|
{{< /selfcheck >}}

\`\`\`
![documented](/images/not-real.png)
\`\`\`

<!-- ![commented](/images/hidden.png) -->
`;
  const selfcheckIndex = page.indexOf('{{< selfcheck');
  const selfcheckEnd = page.indexOf('{{< /selfcheck >}}') + '{{< /selfcheck >}}'.length;
  const blocks = figureLikeBlocks(page, { exerciseSpans: [{ index: selfcheckIndex, end: selfcheckEnd }] });
  assert.deepEqual(blocks.map((b) => b.kind), ['apfigure', 'svg', 'table', 'image', 'img', 'mediafigure']);
  assert.ok(blocks[2].raw.includes('![tick]'), 'the image inside the table cell belongs to the table');
  assert.ok(blocks.every((b) => !b.raw.includes('inside the model answer')), 'a table inside a selfcheck is that exercise\'s, not page context');
  assert.ok(blocks.every((b) => !b.raw.includes('documented') && !b.raw.includes('commented')), 'code and comments are masked');
  for (const b of blocks) assert.equal(page.slice(b.index, b.end).length, b.raw.length, 'offsets are file offsets');
});

test('referencesContext binds the phrases a stem uses to point at page context, with a direction, and ignores look-alikes', () => {
  const bound = [
    ['The graph above shows a line. Which point is not on it?', 'above'],
    ['According to the table, which structure is present?', 'above'],
    ['Using the same graph, on which interval is f decreasing?', 'above'],
    ['Write the inequality shown by the graph above.', 'above'],
    ['Label each component of the microscope shown above.', 'above'],
    ['Use the graph to determine the range.', 'above'],
    ['Identify the structure in the figure below.', 'below'],
    ['The table above lists the values below the threshold.', 'above'],
    ['Refer to the number line below.', 'below'],
    ['Which viroid is shown in the photograph?', 'above'],
    ['In the table, which relationship benefits one partner only?', 'above'],
  ];
  for (const [question, direction] of bound) {
    const ref = referencesContext({ kind: 'fillin', params: { question } });
    assert.ok(ref, `should bind: ${question}`);
    assert.equal(ref.direction, direction, question);
  }
  for (const question of [
    'Which of the following statements is true?',
    'Which of the following statements about insects is false?',
    'The table of contents lists twelve chapters.',
    'Which data structure stores key-value pairs?',
    'Solve $2x = 8$.',
    'Find the points on the graph where f(x) = 0.',
    'Order the pair, thinking of their positions on the number line.',
    'A trait every organism on the tree shares is called a(n) ________.',
  ]) {
    assert.equal(referencesContext({ kind: 'multiplechoice', params: { question }, inner: 'a\nb' }), null, `should not bind: ${question}`);
  }
  // The hint and a multiple choice's option list count; a graph-mode
  // option list is figure-spec JSON and does not.
  assert.ok(referencesContext({ kind: 'fillin', params: { question: 'Find the slope.', hint: 'Read two points off the graph above.' } }));
  assert.ok(referencesContext({ kind: 'multiplechoice', params: { question: 'Which is true?' }, inner: 'The graph above is linear\nIt is not' }));
  assert.equal(referencesContext({ kind: 'multiplechoice', params: { question: 'Which graph?', mode: 'graph' }, inner: '{"ariaLabel":"the same graph above"}' }), null);
});

test('dependencyOf resolves to the nearest block in the named direction, skipping exercises, or to null', () => {
  const blocks = [
    { kind: 'apfigure', index: 100, end: 200, raw: 'fig' },
    { kind: 'table', index: 900, end: 950, raw: 'tab' },
  ];
  const first = { index: 300, end: 400 };
  const second = { index: 500, end: 600 };
  assert.equal(dependencyOf(first, blocks, { direction: 'above' }).kind, 'apfigure');
  assert.equal(dependencyOf(second, blocks, { direction: 'above' }).kind, 'apfigure', 'a second "same graph" item skips the first item and binds to the figure');
  assert.equal(dependencyOf(second, blocks, { direction: 'below' }).kind, 'table');
  assert.equal(dependencyOf({ index: 10, end: 20 }, blocks, { direction: 'above' }), null);
  assert.equal(dependencyOf({ index: 960, end: 999 }, blocks, { direction: 'below' }), null);
  assert.equal(dependencyOf(first, blocks, null), null);
  // The noun narrows the kind: a photograph is never a Markdown table, so
  // "in the photograph" reaches past the nearer table to the mediafigure,
  // and "the table" takes the Markdown table.
  const mixed = [
    { kind: 'mediafigure', index: 100, end: 200, raw: 'photo' },
    { kind: 'table', index: 300, end: 350, raw: 'tab' },
  ];
  const after = { index: 400, end: 500 };
  assert.equal(dependencyOf(after, mixed, { phrase: 'in the photograph', direction: 'above' }).kind, 'mediafigure');
  assert.equal(dependencyOf(after, mixed, { phrase: 'According to the table', direction: 'above' }).kind, 'table');
  assert.equal(dependencyOf(after, mixed, { phrase: 'the graph above', direction: 'above' }).kind, 'mediafigure');
  assert.equal(dependencyOf({ index: 10, end: 20 }, [{ kind: 'table', index: 30, end: 40, raw: 't' }], { phrase: 'the figure below', direction: 'below' }), null, 'a picture noun does not settle for a table');
});

test('"the figure of …, below" binds the next figure after the item, whatever else the text says (Chemistry 6.2)', async () => {
  const { mediaBindings } = await import('./exercise-context.mjs');
  const question = 'The electron in the figure of the photons a hydrogen atom absorbs and emits, below, is promoted even further to an orbit with $n = 6$. What is its new energy?';
  // The hint's "given above" used to turn every "below" into "above".
  const reference = referencesContext({ kind: 'fillin', params: { question, hint: 'Use the value of $k$ given above.' } });
  assert.deepEqual(reference, { phrase: 'the figure of the photons a hydrogen atom absorbs and emits, below', direction: 'below' });
  const page = [
    '{{< mediafigure src="chemistry/CNX_Chem_06_02_Hlevels" kind="diagram" alt="Levels." >}}\nCaption.\n{{< /mediafigure >}}',
    `{{< fillin question="${question}" answer="1" hint="Use the value of $k$ given above." >}}`,
    'Body text.',
    '{{< mediafigure src="chemistry/CNX_Chem_06_02_BohrArrows" kind="diagram" alt="Arrows." >}}\nCaption.\n{{< /mediafigure >}}',
  ].join('\n\n');
  assert.deepEqual([...mediaBindings(page).values()], ['CNX_Chem_06_02_BohrArrows']);
  // "Above" in the same form is not read (5.2's calorimeter would rebind finished items).
  assert.equal(referencesContext({ kind: 'fillin', params: { question: 'Using the figure of the polystyrene-cup calorimeter above, find q.' } })?.phrase ?? null, null);
});

test('"the table" binds to the Markdown table, not to a picture that stands nearer (Chemistry 5.1)', () => {
  // Eight items of 5.1 said "take each specific heat from the table above"
  // and were bound to the photograph of a solar plant between them and the table.
  const page = [
    '**Specific Heats of Common Substances at 25 °C and 1 bar**\n\n| Substance | Specific Heat (J/g °C) |\n|---|---|\n| water | 4.184 |',
    '{{< mediafigure src="chemistry/CNX_Chem_05_01_SolTherm2" kind="photo" alt="Two photographs. (a) Three tall lattice towers." >}}\nThe Ivanpah solar thermal plant.\n{{< /mediafigure >}}',
    '{{< fillin question="How much heat warms 5.00 g of water by 10.0 °C? Enter the heat in joules." answer="209" hint="Use the specific heat of liquid water from the table above." >}}',
  ].join('\n\n');
  const [exercise] = [...page.matchAll(/\{\{< fillin[^\n]*>\}\}/g)].map((m) => ({ index: m.index, end: m.index + m[0].length }));
  const blocks = figureLikeBlocks(page, { exerciseSpans: [exercise] });
  assert.deepEqual(blocks.map((b) => b.kind), ['table', 'mediafigure']);
  assert.equal(blocks[0].title, 'Specific Heats of Common Substances at 25 °C and 1 bar', 'a table carries the bold line above it as its title');
  const reference = referencesContext({ kind: 'fillin', params: { question: 'How much heat?', hint: 'Use the specific heat of liquid water from the table above.' } });
  assert.equal(dependencyOf(exercise, blocks, reference).kind, 'table');
  // "Data" and "chart" may be a figure: they still take the nearest block.
  assert.equal(dependencyOf(exercise, blocks, { phrase: 'From this data', direction: 'above' }).kind, 'mediafigure');
});

test('a picture whose description opens by calling it a table is one, and where the page has no table the nearest block stands', () => {
  const at = (index) => ({ index, end: index + 50 });
  const tableImage = { kind: 'mediafigure', ...at(300), raw: '{{< mediafigure src="microbiology/OSC_Microbio_17_05_FormElem" alt="A six-column table of the formed elements of blood." >}}' };
  const photo = { kind: 'mediafigure', ...at(500), raw: '{{< mediafigure src="microbiology/OSC_Microbio_04_06_TB" alt="A photograph of colonies." >}}' };
  const item = at(900);
  const table = { phrase: 'According to the table', direction: 'above' };
  assert.equal(dependencyOf(item, [tableImage, photo], table), tableImage, 'the table printed as an image, past the photograph');
  assert.equal(dependencyOf(item, [photo], table), photo, 'no table in that direction: the nearest block, as before, so nothing un-binds');
  // A file name is not a description: `…_TaxaTable` is four pictures from one column of the table above it.
  const columnPictures = { kind: 'mediafigure', ...at(500), raw: '{{< mediafigure src="microbiology/OSC_Microbio_05_03_TaxaTable" alt="Four images from the Image column of the table above." >}}' };
  const markdown = { kind: 'table', ...at(300), raw: '| Group | Characteristics |\n|---|---|' };
  assert.equal(dependencyOf(item, [markdown, columnPictures], table), markdown);
});

test('a table named by what it shows binds to the table of that name, above (Chemistry 7.5, Microbiology 17.3)', () => {
  const named = (question) => referencesContext({ kind: 'fillin', params: { question } });
  assert.deepEqual(named('Using the bond energies in the table of bond energies above, determine the enthalpy change.'), { phrase: 'the table of bond energies above', direction: 'above' });
  // "Above" in the name is the direction, whatever a later sentence says.
  assert.equal(named('Refer to the table of formed elements above. Which leukocyte is listed below the neutrophil?').direction, 'above');
  assert.equal(named('The table of contents lists twelve chapters.'), null);
  const at = (index) => ({ index, end: index + 50 });
  const energies = { kind: 'table', ...at(100), title: 'Bond Energies (kJ/mol)', raw: '| Bond | Bond Energy | Bond | Bond Energy |\n|---|---|---|---|\n| H–H | 436 | C–S | 260 |' };
  const lengths = { kind: 'table', ...at(200), title: 'Average Bond Lengths and Bond Energies for Some Common Bonds', raw: '| Bond | Bond Length (Å) | Bond Energy (kJ/mol) |\n|---|---|---|' };
  const cycle = { kind: 'table', ...at(300), raw: '| Step | Equation | Enthalpy change |\n|---|---|---|\n| Bond energy of fluorine | … | 79.4 |' };
  const item = at(900);
  const reference = { phrase: 'the table of bond energies above', direction: 'above' };
  assert.equal(dependencyOf(item, [energies, lengths, cycle], reference), energies, 'both titles say "bond energies"; the one that says the least else is the one named');
  assert.equal(dependencyOf(item, [lengths, cycle], reference), lengths);
  assert.equal(dependencyOf(item, [cycle], reference), cycle, 'no title or header shares a word: the nearest table stands');
  // The name is read, never the body: a row that says "bond energy" does not make the Born–Haber table the one named.
  assert.equal(dependencyOf(item, [energies, cycle], reference), energies);
  // Microbiology prints the source's picture of a table under its transcription: the table is taken first.
  const formed = { kind: 'table', ...at(100), raw: '| Formed Element | Major Subtypes | Numbers per µL (Range) |\n|---|---|---|' };
  const picture = { kind: 'mediafigure', ...at(200), raw: '{{< mediafigure src="microbiology/OSC_Microbio_17_05_FormElem" alt="A six-column table of the formed elements of blood." >}}' };
  const macrophages = { kind: 'table', ...at(300), raw: '| Tissue | Macrophage |\n|---|---|' };
  assert.equal(dependencyOf(item, [formed, picture, macrophages], { phrase: 'the table of formed elements above', direction: 'above' }), formed);
  assert.equal(dependencyOf(item, [formed, picture, macrophages], { phrase: 'in the table', direction: 'above' }), macrophages, 'unnamed, it is still the nearest table');
});

test('"the following data:" introduces data the stem itself prints, and is not page context (Chemistry 5.3)', () => {
  const stem = 'Calculate the enthalpy of formation of NO from the following data: $\\ce{N2(g) + 2O2(g) -> 2NO2(g)}$ $\\Delta H^\\circ$ = 66.4 kJ.';
  assert.equal(referencesContext({ kind: 'fillin', params: { question: stem } }), null);
  // A later phrase in the same item still binds.
  assert.equal(referencesContext({ kind: 'fillin', params: { question: stem, hint: 'Add the equations as the figure above does.' } }).phrase, 'the figure above');
  // No colon: the drawing is on the page (Chemistry 2.1).
  assert.ok(referencesContext({ kind: 'fillin', params: { question: 'In the following drawing, the green spheres represent atoms of a certain element.' } }));
});
