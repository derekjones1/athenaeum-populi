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
  // "in the photograph" reaches past the nearer table to the mediafigure;
  // a "table" may be an image, so it takes whichever is nearest.
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
