import assert from 'node:assert/strict';
import { lintHugo } from './lints.mjs';

const imageCases = [
  '![plot](/images/plot.webp)',
  '![plot](/images/plot.png "A plotted curve")',
  '![plot](</images/plot.jpg>)',
  '![plot][curve]\n\n[curve]: /images/plot.gif',
  '![plot][]\n\n[plot]: /images/plot.svg',
  '![plot]\n\n[plot]: /images/plot.avif',
  '<img src="/images/plot.svg" alt="A plotted curve">',
  '<picture><source srcset="/images/plot.webp"><img src="/images/plot.png" alt="A plotted curve"></picture>',
  '<svg role="img" aria-label="A plot"><image href="/images/plot.png"/></svg>',
  '{{< figure src="/images/plot.png" alt="A plotted curve" >}}',
  '![plot](data:image/png;base64,AAAA)',
  '<div style="background-image: url(/images/plot.webp)">plot</div>',
  '![outer [inner]](/images/plot.png)',
  '<div style="background: url(https://example.test/textbook-art)">plot</div>',
  '<svg role="img" aria-label="A plot"><use href="/images/plot.svg#curve"/></svg>',
  '<object type="image/png" data="https://example.test/textbook-art"></object>',
  '<embed type="image/svg+xml" src="https://example.test/textbook-art">',
  '<input type="image" src="https://example.test/textbook-art">',
  '<div style="background: image-set(\'https://example.test/textbook-art\' 1x)">plot</div>',
  '<pre>\n    <img src="https://example.test/textbook-art" alt="A plot">\n</pre>',
  '<pre>\n    <span style="background:url(https://example.test/textbook-art)">plot</span>\n</pre>',
  '- item\n    ![plot](/images/plot.png)',
];

for (const source of imageCases) {
  const { errors } = lintHugo(source, 'content/test.md');
  assert(
    errors.some((error) => error.includes('file-backed image')),
    `expected image lint for ${JSON.stringify(source)}, got ${JSON.stringify(errors)}`,
  );
}

const allowedCases = [
  '`![documentation example](/images/example.png)`',
  '```\n<img src="/images/example.png" alt="documentation example">\n```',
  '<!-- ![disabled](/images/disabled.webp) -->',
  String.raw`\![literal](/images/not-an-image.png)`,
  '![unresolved][missing]',
  '``![documentation example](/images/example.png)``',
  '    ![indented documentation example](/images/example.png)',
  '```\n![unclosed documentation example](/images/example.png)',
  '<pre>\n    ![literal Markdown](/images/example.png)\n</pre>',
  '[Download the source artwork](/images/source.png)',
  '<svg role="img" aria-label="An increasing curve"><path d="M0 10 L10 0" fill="none"/></svg>',
  "<svg role='img' aria-labelledby='plot-title'><title id='plot-title'>An increasing curve</title><path d='M0 10 L10 0'/></svg>",
  '<svg role="img" aria-label="A gradient"><path fill="url(#gradient)" d="M0 0h10v10z"/></svg>',
  '<svg role="img" aria-label="A reusable curve"><use href="#curve"/></svg>',
];

for (const source of allowedCases) {
  const { errors } = lintHugo(source, 'content/test.md');
  assert.equal(errors.length, 0, `unexpected lint for ${JSON.stringify(source)}: ${errors.join('; ')}`);
}

for (const source of [
  '<svg></svg>',
  '<svg role="img"></svg>',
  '<svg aria-label="A curve"></svg>',
  '<svg data-role="img" data-aria-label="A curve"></svg>',
  '<svg role="img" aria-label="   "></svg>',
  '<svg role="img" aria-labelledby="missing"><title id="title">A curve</title></svg>',
  '<svg role="img" aria-labelledby="title"><title id="title"></title><path d="M0 0h1"/></svg>',
  '<svg role="img" aria-labelledby="curve"><path id="curve" d="M0 0h1"/></svg>',
]) {
  const { errors } = lintHugo(source, 'content/test.md');
  assert(
    errors.some((error) => error.includes('inline SVG needs')),
    `expected SVG accessibility lint for ${JSON.stringify(source)}`,
  );
}

const fillin = (question) => `{{< fillin question="${question}" answer="1" hint="Use the definition." >}}`;
const multiplechoice = (question) => `{{< multiplechoice question="${question}" answer="yes" hint="Test each choice." >}}\nyes\nno\n{{< /multiplechoice >}}`;
const fourQuestions = [
  fillin('one'),
  multiplechoice('two'),
  fillin('three'),
  multiplechoice('four'),
].join('\n\n');
assert(
  lintHugo(fourQuestions, 'content/math/book/01-chapter/01-section.md').errors
    .some((error) => error.includes('more than three consecutive interactive questions')),
  'expected a mixed four-question practice-set lint',
);
assert.equal(
  lintHugo(fourQuestions.replace(/ hint="[^"]*"/g, ''), 'content/math/book/knowledge-check-01-06.md').errors.length,
  0,
  'knowledge checks may contain more than three consecutive interactive questions',
);
assert.equal(
  lintHugo(`${[fillin('one'), multiplechoice('two'), fillin('three')].join('\n\n')}\n\nPractice another skill.\n\n${multiplechoice('four')}`, 'content/math/book/01-chapter/01-section.md').errors.length,
  0,
  'prose starts a new interactive practice set',
);

for (const source of [
  fillin('Try It 10.17. Find the inverse.'),
  multiplechoice('Try It 11.3. Which graph is correct?'),
  '{{< graphplot question="Try It 4.2. Graph the line." ariaLabel="A blank grid." >}}\n{"answer":{"slope":1,"intercept":0}}\n{{< /graphplot >}}',
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('print-source “Try It” label')),
    `expected print-source label lint for ${JSON.stringify(source)}`,
  );
}

for (const source of [
  '<svg role="img" aria-label="A plot" style={{ color: "red" }}><path d="M0 0"/></svg>',
  '<svg role="img" aria-label="A plot">{[1,2].map((x) => <circle cx={x}/>)}</svg>',
  '<svg role="img" aria-label="A plot"><path strokeWidth="2" d="M0 0"/></svg>',
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => /React|JSX/.test(error)),
    `expected React/JSX SVG lint for ${JSON.stringify(source)}`,
  );
}

assert(
  lintHugo('**Solution.**\n\n{{< fillin question="Practice" answer="1" hint="Think." >}}', 'content/math/book/01-chapter/01-section.md').warnings
    .some((error) => error.includes('empty Solution')),
  'expected empty worked-solution lint',
);
assert.equal(
  lintHugo('**Solution.**\n\nWorked steps follow here.', 'content/math/book/01-chapter/01-section.md').warnings
    .some((warning) => warning.includes('empty Solution')),
  false,
  'worked solution prose after a blank line must not be mistaken for an empty block',
);
assert(
  lintHugo('**Solution.**\n\n## Next topic', 'content/math/book/01-chapter/01-section.md').warnings
    .some((warning) => warning.includes('empty Solution')),
  'a Solution block that ends at the next heading is empty',
);
assert(
  lintHugo('{{< fillin question="Practice" answer="1" >}}', 'content/math/book/01-chapter/01-section.md').warnings
    .some((error) => error.includes('missing a hint')),
  'regular-section exercises require hints',
);
assert.equal(
  lintHugo('{{< fillin question="Practice" answer="1" >}}', 'content/math/book/knowledge-check-01-06.md').errors.length,
  0,
  'knowledge-check exercises intentionally omit hints',
);

for (const [source, expected] of [
  ['{{< multiplechoice question="Choose." answer="yes" hint="Think." >}}\nyes\n{{< /multiplechoice >}}', 'at least two'],
  ['{{< multiplechoice question="Choose." answer="yes" hint="Think." >}}\nyes\nyes\n{{< /multiplechoice >}}', 'duplicate'],
  ['{{< graphplot question="Graph." ariaLabel="A grid." hint="Plot points." snap="0" >}}\n{"answer":{"slope":1},"grid":{}}\n{{< /graphplot >}}', 'snap must be'],
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes(expected)),
    `expected interactive schema lint containing ${JSON.stringify(expected)}`,
  );
}
assert.equal(
  lintHugo('This section converts selected Try It exercises to interactive practice.', 'content/math/book/01-chapter/01-section.md').errors.length,
  0,
  'source labels outside learner-facing component fields remain valid attribution prose',
);

for (const label of ['(a)', 'b)', 'ⓒ']) {
  const source = fillin(`Simplify: ${label} $x+x$.`);
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('print part label')),
    `expected redundant Simplify label lint for ${JSON.stringify(label)}`,
  );
}
assert.equal(
  lintHugo(fillin('Simplify $x+x$.'), 'content/math/book/01-chapter/01-section.md').errors.length,
  0,
  'a standalone Simplify prompt without a print part label is valid',
);

assert(
  lintHugo('<details><summary>Check answer</summary>$4$</details>', 'content/math/book/01-chapter/01-section.md').errors
    .some((error) => error.includes('legacy “Check answer”')),
  'expected legacy static answer-reveal lint',
);
assert.equal(
  lintHugo('<details><summary>Read a definition</summary>Supporting prose.</details>', 'content/math/book/01-chapter/01-section.md').errors.length,
  0,
  'ordinary disclosure content is not an answer control',
);
assert.equal(
  lintHugo('```\n<details><summary>Check answer</summary></details>\n```', 'content/math/book/01-chapter/01-section.md').errors.length,
  0,
  'documentation examples of legacy markup are masked',
);
assert(
  lintHugo('Use `{{< fillin question="Example" answer="1" >}}`.', 'content/docs/example.md').errors
    .some((error) => error.includes('active Hugo shortcode syntax')),
  'active shortcodes in Markdown code spans must fail before Hugo expands them',
);
assert.equal(
  lintHugo('Use `{{</* fillin question="Example" answer="1" */>}}`.', 'content/docs/example.md').errors.length,
  0,
  'comment-escaped shortcode examples are safe to publish',
);

const chapterFrontmatter = `---
title: Functions
description: A chapter about functions.
source_chapter: "3"
weight: 3
---
`;
const validChapterSections = `${chapterFrontmatter}
## Sections

- **Understand Functions** — identify inputs, outputs, domains, and ranges.
- **Graph Functions and
  Relations** — interpret graphs and apply the vertical line test.

---
`;
assert.equal(
  lintHugo(validChapterSections, 'content/math/book/03-functions/_index.md').errors.length,
  0,
  'chapter landing accepts descriptive multiline section bullets',
);
const scaffoldedChapterFrontmatter = `---
title: Functions
description: A chapter about functions.
source_chapter: "3"
authoring_status: scaffolded
weight: 3
---
`;
assert.equal(
  lintHugo(
    `${scaffoldedChapterFrontmatter}\n## Sections\n\nNo section pages are published yet.\n`,
    'content/math/book/03-functions/_index.md',
  ).errors.length,
  0,
  'a scaffolded chapter landing may carry an empty Sections overview',
);
assert(
  lintHugo(
    `${chapterFrontmatter}\n## Sections\n\nNo section pages are published yet.\n`,
    'content/math/book/03-functions/_index.md',
  ).errors.some((error) => error.includes('has no section bullets')),
  'an undeclared chapter landing still needs section bullets',
);
assert(
  lintHugo(
    `${scaffoldedChapterFrontmatter}\n## Sections\n\n- **Understand Functions**\n`,
    'content/math/book/03-functions/_index.md',
  ).errors.some((error) => error.includes('must be `- **Title** — concise description`')),
  'a scaffolded chapter landing still validates any bullets it does have',
);

for (const [source, expected] of [
  [chapterFrontmatter, 'missing a `## Sections`'],
  [`${chapterFrontmatter}\n## Sections\n\n- **Understand Functions**\n`, 'must be `- **Title** — concise description`'],
  [`${chapterFrontmatter}\n## Sections\n\n- **3.1 Understand Functions** — identify inputs and outputs.\n`, 'print section number'],
]) {
  assert(
    lintHugo(source, 'content/math/book/03-functions/_index.md').errors
      .some((error) => error.includes(expected)),
    `expected chapter overview lint containing ${JSON.stringify(expected)}`,
  );
}

for (const source of [
  String.raw`$$\text{If} n^2=m.$$`,
  String.raw`$$\text{square}\text{root}$$`,
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('TeX prose')),
    `expected TeX prose-spacing lint for ${JSON.stringify(source)}`,
  );
}
for (const source of [
  String.raw`$$\text{If }n^2=m.$$`,
  String.raw`$$\text{If}\ n^2=m.$$`,
  String.raw`$$\text{square}\ \text{root}$$`,
  String.raw`$$\textbf{P}\text{arentheses}$$`,
  String.raw`$$x\text{-axis}$$`,
]) {
  assert.equal(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors.length,
    0,
    `unexpected TeX prose-spacing lint for ${JSON.stringify(source)}`,
  );
}

// ---- section-final Practice block -------------------------------------------
{
  const sectionPath = 'content/math/book/01-chapter/01-section.md';
  const five = Array.from({ length: 5 }, (_, i) => fillin(`practice ${i + 1}`)).join('\n\n');
  const keyTerms = '## Key terms\n\n**term** — definition.';

  const good = lintHugo(`## Teach\n\nProse.\n\n## Practice\n\n${five}\n\n${keyTerms}`, sectionPath);
  assert.equal(
    good.errors.length,
    0,
    `five consecutive Practice-block questions before Key terms are valid (cap exemption): ${good.errors.join('; ')}`,
  );
  assert.equal(
    good.warnings.filter((w) => w.includes('`## Practice`')).length,
    0,
    'a section with a Practice block must not carry the retrofit warning',
  );

  const missing = lintHugo(`## Teach\n\nProse.\n\n${keyTerms}`, sectionPath);
  assert(
    missing.warnings.some((w) => w.includes('no `## Practice` block')),
    'a section without a Practice block warns — the warning list is the retrofit worklist',
  );
  assert.equal(missing.errors.length, 0, 'a missing Practice block is a warning during rollout, not an error');

  assert(
    lintHugo(
      `## Practice\n\n${Array.from({ length: 4 }, (_, i) => fillin(`p${i}`)).join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('exactly 5')),
    'a Practice block with the wrong exercise count is an error',
  );

  assert(
    lintHugo(`## Practice\n\n${five}\n\n## More teaching\n\nProse.\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('immediately before `## Key terms`')),
    'Practice must sit immediately before the end matter',
  );

  assert(
    lintHugo(`## Teach\n\nProse.\n\n${keyTerms}\n\n## Practice\n\n${five}`, sectionPath)
      .errors.some((e) => e.includes('after the end matter')),
    'Practice after Key terms is an error',
  );

  assert(
    lintHugo(`## Practice\n\n${five}\n\n## Practice\n\n${five}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('more than one `## Practice`')),
    'duplicate Practice headings are an error',
  );

  assert.equal(
    lintHugo(`## Practice\n\n${five}\n\n## Key concepts\n\nSummary.\n\n${keyTerms}`, sectionPath).errors.length,
    0,
    'Key concepts counts as end matter where present',
  );

  assert.equal(
    lintHugo(`## Practice\n\n${five}\n\n## Key equations\n\n$E=mc^2$\n\n${keyTerms}`, sectionPath).errors.length,
    0,
    'Key equations counts as end matter where present',
  );
  assert(
    lintHugo(`## Practice\n\n${five}\n\n## Key equation\n\n$E=mc^2$\n\n${keyTerms}`, sectionPath).errors.length === 0,
    'the singular Key equation heading also counts as end matter',
  );
  assert(
    lintHugo(`## Key equations\n\n$E=mc^2$\n\n## Practice\n\n${five}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('after the end matter')),
    'Practice between Key equations and Key terms is still after the end matter',
  );

  assert.equal(
    lintHugo(`## Teach\n\nProse.\n\n## Practice\n\n${five}\n`, sectionPath).errors.length,
    0,
    'in a section without end matter, Practice may be the final heading',
  );
  assert(
    lintHugo(`## Practice\n\n${five}\n\n## Teach\n\nProse.\n`, sectionPath)
      .errors.some((e) => e.includes('last heading before the attribution footer')),
    'in a section without end matter, Practice must still be the last heading',
  );

  assert.equal(
    lintHugo('## Whatever\n\nProse.', 'content/test.md').warnings
      .filter((w) => w.includes('Practice')).length,
    0,
    'non-section pages are outside the Practice-block rule',
  );
  assert.equal(
    lintHugo('## Whatever\n\nProse.', 'content/math/book/knowledge-check-01-06.md').warnings
      .filter((w) => w.includes('Practice')).length,
    0,
    'knowledge checks are outside the Practice-block rule',
  );
}

// ---- figure curve precision ------------------------------------------------

// smoothCurves spline output (a cubic-bezier path) warns; analytic output does not.
{
  const spline = '<svg role="img" aria-label="A curve"><path d="M 26 100 C 30 90 40 80 50 80" fill="none"/></svg>';
  const { warnings } = lintHugo(spline, 'content/test.md');
  assert(
    warnings.some((w) => w.includes('spline-interpolated')),
    `expected spline warning, got ${JSON.stringify(warnings)}`,
  );
  const analytic = '<svg role="img" aria-label="A curve"><polyline points="26,100 27,99 28,97" fill="none"/><path d="M 10 10 L 20 20 L 30 10" fill="none"/></svg>';
  assert.equal(
    lintHugo(analytic, 'content/test.md').warnings.filter((w) => w.includes('spline')).length,
    0,
    'analytic polylines and straight-segment paths must not warn',
  );
}

// data-spec provenance must parse and must acknowledge freeform spline use.
{
  const svg = '<svg role="img" aria-label="A curve"><polyline points="0,0 1,1"/></svg>';
  const good = `<div class="ap-figure" data-spec='{"type":"graph","cubics":[{"a":1}]}'>${svg}</div>`;
  assert.equal(lintHugo(good, 'content/test.md').errors.length, 0);
  const acknowledged = `<div class="ap-figure" data-spec='{"type":"graph","smoothCurves":[{"through":[[0,0],[1,1]],"freeform":true}]}'>${svg}</div>`;
  assert.equal(lintHugo(acknowledged, 'content/test.md').errors.length, 0);
  const unacknowledged = `<div class="ap-figure" data-spec='{"type":"graph","smoothCurves":[{"through":[[0,0],[1,1]]}]}'>${svg}</div>`;
  assert(
    lintHugo(unacknowledged, 'content/test.md').errors.some((e) => e.includes('freeform')),
    'smoothCurves without freeform: true must be rejected when the spec is present',
  );
  const broken = `<div class="ap-figure" data-spec='{"type":'>${svg}</div>`;
  assert(
    lintHugo(broken, 'content/test.md').errors.some((e) => e.includes('not valid JSON')),
    'unparseable data-spec must be rejected',
  );
  // entity-escaped specs (as emitted for aria labels with apostrophes) decode
  const escaped = `<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The line&#39;s graph &amp; grid","lines":[{"slope":1}]}'>${svg}</div>`;
  assert.equal(lintHugo(escaped, 'content/test.md').errors.length, 0);
}

// Digit grouping: four or more digits are grouped; four-digit years are not.
{
  const warnsOf = (src) => lintHugo(src, 'content/test.md').warnings
    .filter((w) => w.includes('ungrouped'));

  // Ungrouped four- and five-digit quantities are warned about, with the fix.
  assert(
    warnsOf('The cost is $C=5600$ dollars.').some((w) => w.includes('5{,}600')),
    'an ungrouped four-digit quantity must warn',
  );
  assert(
    warnsOf('$$P=36675$$').some((w) => w.includes('36{,}675')),
    'an ungrouped five-digit quantity must warn in a display block',
  );
  assert(
    warnsOf('$n=1234567$').some((w) => w.includes('1{,}234{,}567')),
    'grouping is applied from the right in threes',
  );

  // Already-grouped numbers are correct as written.
  assert.equal(warnsOf('$C=5{,}600$ and $P=36{,}675$').length, 0);

  // Four-digit years stay bare, in the 1000-2099 band the lint must stay quiet.
  assert.equal(warnsOf('$2012-2009=3$').length, 0);
  assert.equal(warnsOf('$y=1975$').length, 0);

  // Decimals are not digit runs, and \text{...} is prose, not math.
  assert.equal(warnsOf('$x=0.00001$').length, 0);
  assert.equal(warnsOf('$12.5000$').length, 0);
  assert.equal(warnsOf('$\\text{serial 45912}$').length, 0);

  // Outside math the rule is the author's, not the lint's.
  assert.equal(warnsOf('The table lists 5600 hours.').length, 0);
}

console.log(`lints: ${imageCases.length} image embeddings plus authoring-regression cases passed`);
