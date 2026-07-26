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

console.log(`lints: ${imageCases.length} image embeddings plus authoring-regression cases passed`);
