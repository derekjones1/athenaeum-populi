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
const objectivesCallout = (objectives) => [
  '{{< callout type="info" >}}',
  '**By the end of this section, you will be able to:**',
  '',
  ...objectives.map((o) => `- ${o}`),
  '{{< /callout >}}',
].join('\n');
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

// ---- comma-list answers must make the ordered/unordered choice deliberate --
const listFillin = (question, answer, mode = '') =>
  `{{< fillin question="${question}" answer="${answer}"${mode ? ` answerMode="${mode}"` : ''} hint="Think." >}}`;
for (const [source, expected, reason] of [
  [listFillin('Solve $x^2=1$.', '-1, 1'), 'never tells the learner the order',
    'a bare list with no order cue in the question is ambiguous for the learner'],
  [listFillin('Solve $\\sqrt{x-2}+2=x$.', 'x = 2 , x = 3'), 'solution set has no order',
    'a list of variable equations is a solution set and must be unordered'],
  [listFillin('How many acres?', '40,100'), 'ONE digit-grouped number',
    'an answer that reads as one grouped scalar must not carry list commas'],
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes(expected)),
    reason,
  );
}
for (const [source, reason] of [
  [listFillin('Solve $x^2=1$. Enter both solutions from least to greatest, separated by a comma.', '-1, 1'),
    'a prescribed order makes positional grading fair'],
  [listFillin('Find the length and width, separated by commas.', '39,16'),
    'naming the quantities ("the length and width") prescribes the order'],
  [listFillin('Solve $x^2=1$.', '-1, 1', 'unordered'),
    'answerMode="unordered" resolves the ambiguity explicitly'],
  [listFillin('How many acres?', '40100'),
    'a grouped scalar written without commas is a scalar, not a list'],
]) {
  assert.equal(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors.length,
    0,
    reason,
  );
}

// ---- trivially satisfiable prompts: the answer is printed in the question --
// Value-based grading accepts any input that evaluates to the answer, so a
// RE-EXPRESSION prompt — one asking the learner to restate a printed value in
// another form — is passable by retyping the prompt, and no choice of numbers
// can prevent it. Standalone printed values (numbers, fractions, mixed
// numbers, percentages — in a $…$ span or bare in prose) are graded as
// submissions; compound expressions ("Add: $3+5$") are not candidates because
// their value-equality is inherent to CAS grading, not fixable by rewording.
for (const [source, reason] of [
  [listFillin('Find the prime factorization of $86$.', '2 \\cdot 43'),
    'the printed target of a factorization prompt grades equal to the answer'],
  [listFillin('Find the prime factorization of 80 using the factor tree method. Enter the answer in exponential form, e.g. $2^3 \\cdot 5$.', '2^4 \\cdot 5'),
    'a bare prose number is a printed value too'],
  [listFillin('Simplify: $-\\tfrac{40}{88}$.', '-\\tfrac{5}{11}'),
    'a signed printed fraction grades equal to its simplified form'],
  [listFillin('Write $0.5$ as a fraction.', '\\frac{1}{2}'),
    'conversion prompts are value-equal across representations'],
  [listFillin('Convert $62.5\\%$ to a fraction and simplify.', '\\frac{5}{8}'),
    'a printed percentage grades equal to its fraction form'],
  [listFillin('Convert $2\\frac{6}{9}$ to an improper fraction in lowest terms.', '\\frac{8}{3}'),
    'a printed mixed number grades equal to its improper form'],
  [listFillin('Write $400{,}000$ in scientific notation.', '4 \\times 10^5'),
    'a digit-grouped printed scalar grades equal to its scientific-notation form'],
  [listFillin('A stadium holds 42,000 fans. Write the capacity in scientific notation.', '4.2 \\times 10^4'),
    'a digit-grouped prose number is a printed value too'],
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('printed in the question')),
    reason,
  );
}
for (const [source, reason] of [
  [listFillin('Add: $3+5$.', '8'),
    'a compound expression is not a printed value — its value-equality is inherent to CAS grading'],
  [listFillin('Solve $2x+3=7$ for $x$.', '2'),
    'coefficients inside a compound span are not standalone printed values'],
  [listFillin('Round $2.841$ to the nearest tenth.', '2.8'),
    'a printed value that does not grade equal to the answer is fine'],
  [listFillin('List the first three multiples of 4, least to greatest, separated by commas.', '4, 8, 12', 'unordered'),
    'a single printed value never satisfies a multi-member unordered answer'],
  [listFillin('See list item 10.17 of the workbook.', '17'),
    'the tail of a prose decimal is not a standalone printed value'],
  // Outside a re-expression prompt the collision is incidental and the
  // exercise is sound: the learner cannot know which printed number to copy.
  [listFillin('Identify the mode of the data set: 2, 5, 1, 5, 2, 1, 2, 3, 2, 3, 1', '2'),
    'the mode of a data set is necessarily one of the numbers printed in it'],
  [listFillin('Find the median of the data set: 43, 38, 51, 40, 46', '43'),
    'the median of an odd-sized data set is necessarily a printed member'],
  [listFillin('One angle of a right triangle measures 45 degrees. What is the measure of the other small angle?', '45'),
    'an isosceles right triangle legitimately answers with the printed angle'],
  [listFillin('Divide, then check by multiplying: $\\tfrac{91{,}881}{9}$', '10209'),
    'a printed fraction that states a division is an operation, not a value to re-express'],
  [listFillin('Jazmine ran $8$ miles and biked $24$ miles in $3$ hours, biking $4$ mph faster than she ran. Find her running speed in mph.', '8'),
    'an application answer that happens to equal a printed quantity is an incidental collision'],
]) {
  assert.equal(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .filter((error) => error.includes('printed in the question')).length,
    0,
    reason,
  );
}

// An answerForm is exercised, not trusted: it silences the re-expression rule
// only when it actually rules the printed value out.
{
  const formFillin = (form) => `{{< fillin question="Simplify: $-\\tfrac{40}{88}$." answer="-\\tfrac{5}{11}" answerForm="${form}" hint="Reduce." >}}`;
  assert.equal(
    lintHugo(formFillin('lowest-terms'), 'content/math/book/01-chapter/01-section.md').errors
      .filter((error) => error.includes('printed in the question')).length,
    0,
    'an answerForm that blocks the printed value satisfies the rule',
  );
  assert(
    lintHugo(formFillin('fraction'), 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('does not rule that value out')),
    'an answerForm too weak to block the printed value is still an error',
  );
  assert(
    lintHugo(formFillin('lowset-terms'), 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('name no form')),
    'a misspelled answerForm token is an authoring error',
  );
}

// ---- a categorical answer encoded as a number belongs in multiplechoice ----
// The learner is choosing among named alternatives; a numeric fill-in grades a
// legend rather than the choice and accepts a coin-flip guess.
for (const [source, reason] of [
  [listFillin('Is 7248 divisible by $5$? Answer $1$ for yes or $0$ for no.', '0'),
    'a yes/no answer encoded as 1/0 is a multiple-choice question'],
  [listFillin('Is $\\sqrt{17}$ rational or irrational? Enter $1$ if rational, $0$ if irrational.', '0'),
    'two code clauses map digits to named alternatives'],
  [listFillin('In which quadrant does the point $(-4, 6)$ lie? Enter the quadrant number as a digit (1, 2, 3, or 4).', '2'),
    'a quadrant number is a coded category, not a computed value'],
]) {
  assert(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('encodes a categorical answer')),
    reason,
  );
}
for (const [source, reason] of [
  [listFillin('Translate and solve: 110 is what percent of 88? Give the percent as a number (e.g. enter 40 for 40%).', '125'),
    'one clause naming a number is a units convention, not an answer legend'],
  [listFillin('Malik has \\$840 saved. The trip costs \\$525 for airfare and \\$780 for food. How many hours must he tutor at \\$45 per hour?', '11'),
    'a price list in a word problem is not a pair of answer codes'],
]) {
  assert.equal(
    lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
      .filter((error) => error.includes('encodes a categorical answer')).length,
    0,
    reason,
  );
}

// ---- digit grouping ignores invisible \phantom spacing ---------------------
// Long-division layouts align columns with runs like \phantom{0000}; grouping
// those digits would misreport a number the reader never sees and shift the
// alignment they exist to produce.
assert.equal(
  lintHugo('$$\\begin{array}{r} 22\\,\\overline{\\smash{)}\\,43.00000} \\\\ \\phantom{22\\,\\overline{\\smash{)}\\,}}\\phantom{0000}120 \\end{array}$$', 'content/math/book/01-chapter/01-section.md')
    .errors.filter((error) => error.includes('ungrouped')).length,
  0,
  'digits inside \\phantom{…} are invisible spacing, not numbers to group',
);
assert(
  lintHugo('$12345$', 'content/math/book/01-chapter/01-section.md')
    .errors.some((error) => error.includes('ungrouped 5-digit number 12345')),
  'a real ungrouped number is still reported once \\phantom is masked',
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

// ---- objectives callout ------------------------------------------------------
{
  const sectionPath = 'content/math/book/01-chapter/01-section.md';
  const listed = objectivesCallout(['Add whole numbers', 'Round whole numbers']);

  const practiceBody = `## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}`;

  assert.equal(
    lintHugo(`${listed}\n\n## Teach\n\nProse.\n\n${practiceBody}`, sectionPath)
      .errors.filter((e) => e.includes('objective')).length,
    0,
    'a list-formatted objectives callout is valid',
  );
  // `validate-content` owns "every section has one"; this lint also runs over
  // authoring fragments, so it only objects when a Practice block needs the list.
  assert(
    lintHugo(
      `{{< callout type="info" >}}\n**By the end of this section, you will be able to:** add whole numbers, and round whole numbers.\n{{< /callout >}}\n\n${practiceBody}`,
      sectionPath,
    ).errors.some((e) => e.includes('one objective per Markdown list item')),
    'a Practice block above a prose objectives callout is an error — the groups cannot be checked',
  );
  assert.equal(
    lintHugo('## Teach\n\nProse.', sectionPath)
      .errors.filter((e) => e.includes('objective')).length,
    0,
    'a fragment with no Practice block does not need the objectives list',
  );
  assert.equal(
    lintHugo(`${listed}\n\n${practiceBody}`, 'content/test.md')
      .errors.filter((e) => e.includes('objective')).length,
    0,
    'non-section pages are outside the objectives rule',
  );
}

// ---- section-final Practice block -------------------------------------------
{
  const sectionPath = 'content/math/book/01-chapter/01-section.md';
  const keyTerms = '## Key terms\n\n**term** — definition.';
  const OBJECTIVES = ['Add whole numbers', 'Round whole numbers'];
  const head = objectivesCallout(OBJECTIVES);
  // Two objectives × 2 = 4, below the five-per-section floor, so the first
  // group carries the extra exercise that clears it.
  const practice = [
    '## Practice',
    '### Add whole numbers',
    [fillin('a1'), fillin('a2'), multiplechoice('a3')].join('\n\n'),
    '### Round whole numbers',
    [fillin('r1'), fillin('r2')].join('\n\n'),
  ].join('\n\n');

  const good = lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${practice}\n\n${keyTerms}`, sectionPath);
  assert.equal(
    good.errors.length,
    0,
    `a grouped Practice block before Key terms is valid (cap exemption included): ${good.errors.join('; ')}`,
  );
  assert.equal(
    good.warnings.filter((w) => w.includes('`## Practice`')).length,
    0,
    'a section with a Practice block must not carry the retrofit warning',
  );

  const missing = lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${keyTerms}`, sectionPath);
  assert(
    missing.warnings.some((w) => w.includes('no `## Practice` block')),
    'a section without a Practice block warns — the warning list is the retrofit worklist',
  );
  assert.equal(missing.errors.length, 0, 'a missing Practice block is a warning during rollout, not an error');
  assert(
    missing.warnings.some((w) => w.includes('at least 5 in total')),
    'the retrofit warning states the section-specific minimum',
  );
  assert(
    lintHugo(`${objectivesCallout(['O1', 'O2', 'O3', 'O4'])}\n\n## Teach\n\nProse.\n\n${keyTerms}`, sectionPath)
      .warnings.some((w) => w.includes('at least 8 in total')),
    'the minimum scales with the objective count once 2 per objective exceeds the floor',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Round whole numbers\n\n${fillin('r1')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('`### Round whole numbers` has 1 interactive exercise(s)')),
    'a group with fewer than two exercises is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n${fillin('loose')}\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('sits above the first `### ` group')),
    'an exercise outside any objective group is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('no `### ` objective groups')),
    'an ungrouped Practice block is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Estimate sums\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('it must be `### Round whole numbers`')),
    'a group title that is not the matching objective is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2'), fillin('r3')].join('\n\n')}\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('matching the objectives callout in order')),
    'objective groups out of order are an error',
  );

  assert(
    lintHugo(
      `${head}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.some((e) => e.includes('at least 5 are required')),
    'a two-objective section still needs five exercises overall',
  );

  assert.equal(
    lintHugo(
      `${head}\n\n## Practice\n\n### add whole numbers.\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Round  whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}\n\n${keyTerms}`,
      sectionPath,
    ).errors.length,
    0,
    'group titles match objectives ignoring case, spacing, and trailing punctuation',
  );

  assert(
    lintHugo(`${head}\n\n${practice}\n\n## More teaching\n\nProse.\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('immediately before `## Key terms`')),
    'Practice must sit immediately before the end matter',
  );

  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${keyTerms}\n\n${practice}`, sectionPath)
      .errors.some((e) => e.includes('after the end matter')),
    'Practice after Key terms is an error',
  );

  assert(
    lintHugo(`${head}\n\n${practice}\n\n${practice}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('more than one `## Practice`')),
    'duplicate Practice headings are an error',
  );

  assert.equal(
    lintHugo(`${head}\n\n${practice}\n\n## Key concepts\n\nSummary.\n\n${keyTerms}`, sectionPath).errors.length,
    0,
    'Key concepts counts as end matter where present',
  );

  assert.equal(
    lintHugo(`${head}\n\n${practice}\n\n## Key equations\n\n$E=mc^2$\n\n${keyTerms}`, sectionPath).errors.length,
    0,
    'Key equations counts as end matter where present',
  );
  assert(
    lintHugo(`${head}\n\n${practice}\n\n## Key equation\n\n$E=mc^2$\n\n${keyTerms}`, sectionPath).errors.length === 0,
    'the singular Key equation heading also counts as end matter',
  );
  assert(
    lintHugo(`${head}\n\n## Key equations\n\n$E=mc^2$\n\n${practice}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('after the end matter')),
    'Practice between Key equations and Key terms is still after the end matter',
  );

  assert.equal(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${practice}\n`, sectionPath).errors.length,
    0,
    'in a section without end matter, Practice may be the final heading',
  );
  assert(
    lintHugo(`${head}\n\n${practice}\n\n## Teach\n\nProse.\n`, sectionPath)
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

// smoothCurves spline output (a cubic-bezier path) is an error; analytic
// output is not — and neither is a spline the author has declared as source
// art with no formula, which is the whole point of the freeform escape hatch.
{
  const spline = '<svg role="img" aria-label="A curve"><path d="M 26 100 C 30 90 40 80 50 80" fill="none"/></svg>';
  const { errors } = lintHugo(spline, 'content/test.md');
  assert(
    errors.some((w) => w.includes('spline-interpolated')),
    `expected spline error, got ${JSON.stringify(errors)}`,
  );
  const analytic = '<svg role="img" aria-label="A curve"><polyline points="26,100 27,99 28,97" fill="none"/><path d="M 10 10 L 20 20 L 30 10" fill="none"/></svg>';
  assert.equal(
    lintHugo(analytic, 'content/test.md').errors.filter((w) => w.includes('spline')).length,
    0,
    'analytic polylines and straight-segment paths must not be reported',
  );
  const acknowledged = `<div class="ap-figure" data-spec='{"type":"graph","smoothCurves":[{"through":[[0,0],[1,1]],"freeform":true}]}'>${spline}</div>`;
  assert.equal(
    lintHugo(acknowledged, 'content/test.md').errors.filter((w) => w.includes('spline')).length,
    0,
    'a spline declared freeform in its data-spec is the acknowledged output, not a defect',
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
// An error rather than a warning — the corpus carries none, so the next one is
// new work. Only \phantom spacing ever produced a false positive, and that is
// masked (above).
{
  const warnsOf = (src) => lintHugo(src, 'content/test.md').errors
    .filter((w) => w.includes('ungrouped'));

  // Ungrouped four- and five-digit quantities are reported, with the fix.
  assert(
    warnsOf('The cost is $C=5600$ dollars.').some((w) => w.includes('5{,}600')),
    'an ungrouped four-digit quantity is an error',
  );
  assert(
    warnsOf('$$P=36675$$').some((w) => w.includes('36{,}675')),
    'an ungrouped five-digit quantity is an error in a display block',
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
