import test from 'node:test';
import assert from 'node:assert/strict';
import { lintHugo, NAMED_FORM_ASKS } from './lints.mjs';
import { checkAnswer, parseAnswerForm } from '../assets/js/lib/check-answer.mjs';

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

test('a file-backed image is rejected in every embedding form', () => {
  for (const source of imageCases) {
    const { errors } = lintHugo(source, 'content/test.md');
    assert(
      errors.some((error) => error.includes('file-backed image')),
      `expected image lint for ${JSON.stringify(source)}, got ${JSON.stringify(errors)}`,
    );
  }
});

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

test('documentation examples and accessible inline SVG are not embeddings', () => {
  for (const source of allowedCases) {
    const { errors } = lintHugo(source, 'content/test.md');
    assert.equal(errors.length, 0, `unexpected lint for ${JSON.stringify(source)}: ${errors.join('; ')}`);
  }
});

test('inline SVG needs a non-empty accessible name', () => {
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
});

const fillin = (question) => `{{< fillin question="${question}" answer="1" hint="Use the definition." >}}`;
const multiplechoice = (question) => `{{< multiplechoice question="${question}" answer="yes" hint="Test each choice." >}}\nyes\nno\n{{< /multiplechoice >}}`;
const objectivesCallout = (objectives) => [
  '{{< callout type="info" >}}',
  '**By the end of this section, you will be able to:**',
  '',
  ...objectives.map((o) => `- ${o}`),
  '{{< /callout >}}',
].join('\n');
test('an interactive practice set caps at three consecutive questions', () => {
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
});

test('a print-source “Try It” label is rejected in a learner-facing field', () => {
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
});

test('React/JSX syntax inside inline SVG is rejected', () => {
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
});

test('an empty worked Solution block is reported', () => {
  assert(
    lintHugo('**Solution.**\n\n{{< fillin question="Practice" answer="1" hint="Think." >}}', 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('empty Solution')),
    'expected empty worked-solution lint',
  );
  assert.equal(
    lintHugo('**Solution.**\n\nWorked steps follow here.', 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('empty Solution')),
    false,
    'worked solution prose after a blank line must not be mistaken for an empty block',
  );
  assert(
    lintHugo('**Solution.**\n\n## Next topic', 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('empty Solution')),
    'a Solution block that ends at the next heading is empty',
  );
});
test('regular-section exercises require hints and knowledge checks do not', () => {
  assert(
    lintHugo('{{< fillin question="Practice" answer="1" >}}', 'content/math/book/01-chapter/01-section.md').errors
      .some((error) => error.includes('missing a hint')),
    'regular-section exercises require hints',
  );
  assert.equal(
    lintHugo('{{< fillin question="Practice" answer="1" >}}', 'content/math/book/knowledge-check-01-06.md').errors.length,
    0,
    'knowledge-check exercises intentionally omit hints',
  );
});

test('interactive component schemas are validated', () => {
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
});

// ---- comma-list answers must make the ordered/unordered choice deliberate --
const listFillin = (question, answer, mode = '') =>
  `{{< fillin question="${question}" answer="${answer}"${mode ? ` answerMode="${mode}"` : ''} hint="Think." >}}`;
test('a comma-list answer with no order cue is an error', () => {
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
});
test('a prescribed order or an explicit unordered mode resolves the ambiguity', () => {
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
});

// ---- trivially satisfiable prompts: the answer is printed in the question --
// Value-based grading accepts any input that evaluates to the answer, so a
// RE-EXPRESSION prompt — one asking the learner to restate a printed value in
// another form — is passable by retyping the prompt, and no choice of numbers
// can prevent it. Standalone printed values (numbers, fractions, mixed
// numbers, percentages — in a $…$ span or bare in prose) are graded as
// submissions. Compound expressions get the same treatment through their own
// verb-gated paths — the arithmetic and algebraic blocks below.
test('a re-expression prompt whose answer is printed in the question is an error', () => {
  for (const [source, reason] of [
    [listFillin('Find the prime factorization of $86$.', '2 \\cdot 43'),
      'the printed target of a factorization prompt grades equal to the answer'],
    [listFillin('Simplify $\\tfrac{40}{88}$ to lowest terms.', '\\tfrac{40}{88}'),
      'a numeral answer identical to its prompt was never re-expressed — the author error itself'],
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
});
test('an incidental collision with a printed value is sound content', () => {
  for (const [source, reason] of [
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
    [listFillin('Jazmine ran $8$ miles and biked $24$ miles in $3$ hours, biking $4$ mph faster than she ran. Find her running speed in mph.', '8'),
      'an application answer that happens to equal a printed quantity is an incidental collision'],
    // The one deliberate exemption on the algebraic paths — scoped to spans
    // with a variable, so it cannot hide a numeral defect like the
    // never-re-expressed answer above.
    [listFillin('Add: $5a+7b$.', '5a+7b'),
      'unlike terms legitimately answer with the prompt — the exercise asks the learner to recognize they do not combine'],
  ]) {
    assert.equal(
      lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors
        .filter((error) => error.includes('printed in the question')).length,
      0,
      reason,
    );
  }
});

// An answerForm is exercised, not trusted: it silences the re-expression rule
// only when it actually rules the printed value out.
test('an answerForm silences the rule only when it rules the printed value out', () => {
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
});

// ---- a prompt that names a form must grade that form -----------------------
// "Write the point-slope form…" prints nothing to retype — the hazard is the
// learner's own correct value in the wrong shape (distributed, scaled, or a
// different named form), which value grading accepts.

// Every token the table demands must name a grader predicate — a typo here
// would make its ask unsatisfiable, erroring on every exercise that declares
// the intended token. (The table is deliberately NOT one entry per grader
// token: most tokens guard print-and-retype hazards the
// passable-by-retyping rule already covers, and belong here only once a
// prompt phrasing NAMES their form while printing nothing to retype.)
test('NAMED_FORM_ASKS demands only tokens the grader defines', () => {
  for (const { name, tokens } of NAMED_FORM_ASKS) {
    assert.ok(tokens.length > 0, `${name}: an ask must demand at least one token`);
    for (const token of tokens) {
      assert.ok(parseAnswerForm(token).valid, `${name}: "${token}" names no grader predicate`);
    }
  }
});

test('a prompt asking for a named form requires its answerForm token', () => {
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const named = (error) => error.includes('the question asks for');
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Use the formula." >}}`;

  // Fires: the ask names a form no declared token grades.
  for (const [question, answer, reason] of [
    ['Write the point-slope form of an equation of a line with a slope of $-2$ through $(-2,2)$.', 'y-2=-2(x+2)', 'point-slope ask'],
    ['Now rewrite that same line in slope-intercept form.', 'y=-2x-2', 'slope-intercept rewrite ask'],
    ['Find the equation of the line containing $(3,1)$ and $(5,6)$. Write the equation in slope-intercept form.', '\\frac{5}{2}x-\\frac{13}{2}', 'slope-intercept ask with a bare-expression answer'],
    ['Convert to decimal form: $1.3 \\times 10^3$.', '1300', 'decimal-form ask'],
    ['Find the LCD for $\\tfrac{2}{x^2-x-12}$ and $\\tfrac{1}{x^2-16}$. Leave your answer in factored form.', '(x-4)(x+4)(x+3)', 'factored-form ask'],
    ['Add and give the sum as a mixed number: $2\\tfrac{5}{6}+1\\tfrac{5}{6}$', '4\\frac{2}{3}', 'mixed-number ask'],
    ['Write $x \\cdot x \\cdot x$ in exponential form.', 'x^3', 'exponential-form ask'],
    ['Convert $y-2=-2(x+2)$ to slope-intercept form.', 'y=-2x-2', 'convert…to slope-intercept ask'],
    ['Take the equation $y=-2x-2$ to point-slope form using the point $(-2,2)$.', 'y-2=-2(x+2)', 'equation…to point-slope ask'],
    ['Solve $7^x=43$. Enter the exact answer; the feedback also gives its three-decimal approximation.', '\\frac{\\log 43}{\\log 7}', 'exact-answer ask'],
    ['Use the Distance Formula to find the distance between the points $(-4,-5)$ and $(3,4)$. Enter the exact form.', '\\sqrt{130}', 'exact-form ask'],
    ['Write the sum using summation notation: $1+\\tfrac14+\\tfrac19+\\tfrac1{16}+\\tfrac1{25}$.', '\\sum_{n=1}^{5}\\frac{1}{n^2}', 'summation-notation ask'],
    ['Condense $\\log_2 5+\\log_2x-\\log_2y$ to one logarithm.', '\\log_2\\frac{5x}{y}', 'condense-to-one-logarithm ask'],
    ['Write the percent as a ratio: 89% of college students have a smartphone.', '\\frac{89}{100}', 'percent-as-ratio ask'],
    ['In response to a survey, 41 out of 100 students expressed a goal of transferring. Enter the ratio.', '\\frac{41}{100}', 'enter-the-ratio ask'],
  ]) {
    assert(lint(fillin(question, answer)).some(named), reason);
  }

  // Satisfied by the matching token — including any-of alternatives.
  for (const [question, answer, form, reason] of [
    ['Write the point-slope form of an equation of a line with a slope of $-2$ through $(-2,2)$.', 'y-2=-2(x+2)', 'point-slope-form', 'point-slope token satisfies'],
    ['Now rewrite that same line in slope-intercept form.', 'y=-2x-2', 'slope-intercept-form', 'slope-intercept token satisfies'],
    ['Find the prime factorization of 80. Enter the answer in exponential form, e.g. $2^3 \\cdot 5$.', '2^4 \\cdot 5', 'prime-product', 'prime-product answers an exponential-form ask'],
    ['Write $x \\cdot x \\cdot x$ in exponential form.', 'x^3', 'single-power', 'single-power answers an exponential-form ask'],
    ['Solve $7^x=43$. Enter the exact answer; the feedback also gives its three-decimal approximation.', '\\frac{\\log 43}{\\log 7}', 'exact-log', 'exact-log token satisfies the exact ask'],
    ['Use the Distance Formula to find the distance between $(-4,-5)$ and $(3,4)$. Enter the exact form, as a simplified radical.', '\\sqrt{130}', 'exact-radical', 'exact-radical token satisfies the exact ask'],
    ['Find the sum of the infinite geometric series $1+\\tfrac13+\\tfrac19+\\cdots$. Give the exact answer as a fraction.', '\\frac{3}{2}', 'fraction', 'a fraction token satisfies an exact-answer-as-a-fraction ask'],
    ['Write the sum using summation notation: $1+\\tfrac14+\\tfrac19+\\tfrac1{16}+\\tfrac1{25}$.', '\\sum_{n=1}^{5}\\frac{1}{n^2}', 'summation', 'summation token satisfies'],
    ['Condense $\\log_2 5+\\log_2x-\\log_2y$ to one logarithm.', '\\log_2\\frac{5x}{y}', 'single-logarithm', 'single-logarithm token satisfies'],
    ['Write the percent as a ratio: 89% of college students have a smartphone.', '\\frac{89}{100}', 'fraction', 'fraction token satisfies the ratio ask'],
  ]) {
    assert.equal(lint(fillin(question, answer, form)).filter(named).length, 0, reason);
  }

  // Not conscripted: the prompt only mentions the form, or the answer is a
  // list the form check never runs on.
  for (const [source, reason] of [
    [fillin('What is the slope of the line given in slope-intercept form $y=3x+4$?', '3'),
      'mentioning the form without asking to produce it is not an ask'],
    [fillin('Find the exact value of $\\log_6 36$.', '2'),
      'an exact-VALUE evaluation ask is not a shape requirement'],
    [fillin('Write as a ratio and then as a percent: 62 out of 100 students work. Enter the percent, including the $\\%$ sign.', '62\\%', 'percent'),
      'naming the ratio as a worked step is not a ratio ask'],
    [fillin('For the hyperbola $4y^2-9x^2=36$, enter both asymptote equations in the form $y=mx$, separated by a comma. Enter the positive slope first.', 'y=\\frac{3}{2}x, y=-\\frac{3}{2}x'),
      'a comma-list answer is out of scope — the form check never runs on it'],
  ]) {
    assert.equal(lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors.filter(named).length, 0, reason);
  }
});

// ---- "in simplest form" on a numeral-fraction answer -----------------------
test('a simplest-form ask on a numeral fraction requires lowest-terms', () => {
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const simplest = (error) => error.includes('asks for simplest form');
  const fillin = (answer, form = '') =>
    `{{< fillin question="What fraction of the circle is shaded? Write your answer in simplified form." answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Reduce." >}}`;
  assert(lint(fillin('\\frac{3}{4}')).some(simplest), 'a numeral fraction with no lowest-terms fires');
  assert(lint(fillin('\\frac34')).some(simplest), 'the unbraced single-digit \\frac34 is the same fraction');
  assert(lint(fillin('4\\frac{2}{3}')).some(simplest), 'a mixed number with no lowest-terms fires');
  assert.equal(lint(fillin('\\frac{3}{4}', 'lowest-terms')).filter(simplest).length, 0, 'lowest-terms satisfies');
  assert.equal(lint(fillin('\\frac{x}{4}')).filter(simplest).length, 0, 'a variable fraction is reduced-fraction territory, not this rule');
});

// ---- an interval-notation ask must author an interval ----------------------
// The engine grades an inequality and an interval unequal in BOTH directions,
// so `u>10` behind "write the solution in interval notation" marks the
// learner who follows the instruction incorrect — and self-grading cannot see
// it, because the authored inequality is only compared against itself.
test('an interval-notation ask rejects a non-interval authored answer', () => {
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const interval = (error) => error.includes('interval notation');
  const fillin = (answer) =>
    `{{< fillin question="Solve the inequality $6u+8(u-1)>10u+32$ and write the solution in interval notation." answer="${answer}" hint="Collect the u-terms." >}}`;
  assert(lint(fillin('u>10')).some(interval), 'an inequality behind an interval-notation ask fires');
  assert.equal(lint(fillin('(10,\\infty)')).filter(interval).length, 0, 'an interval satisfies the ask');
  assert.equal(lint(fillin('[0.5,\\infty)')).filter(interval).length, 0, 'a closed interval satisfies the ask');
  assert.equal(lint(fillin('(-\\infty,3)\\cup(5,\\infty)')).filter(interval).length, 0, 'a union of intervals satisfies the ask');
  // A truncated union splits into an empty half — dropping empty parts would
  // leave the surviving interval to satisfy `.every()` and pass the typo.
  assert(lint(fillin('(-\\infty,3)\\cup')).some(interval), 'a trailing \\cup with no second interval fires');
  assert(lint(fillin('\\cup(5,\\infty)')).some(interval), 'a leading \\cup with no first interval fires');
  assert(lint(fillin('\\cup')).some(interval), 'a bare \\cup fires');
});

// ---- a factoring prompt is trivially satisfiable without answerForm --------
// "Factor: $x^2+6x+8$" prints a polynomial that IS its own factorization by
// value, so the CAS cannot separate the answer from the prompt retyped. Only
// the shape can — see the `factored` token.
test('a factoring prompt is trivially satisfiable without answerForm', () => {
  const trivial = (error) => error.includes('printed in the question');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const factorFillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Find the pattern." >}}`;

  // Fires: the prompt is passable by retyping it.
  for (const [question, answer, reason] of [
    ['Factor: $x^2+6x+8$.', '(x+2)(x+4)', 'a bare factoring prompt is trivially satisfiable'],
    ['Factor completely: $4m^2-4m-8$.', '4(m+1)(m-2)', 'so is one with a GCF in the answer'],
    ['Factor $6a+24$ by taking out the greatest common factor.', '6(a+4)',
      'the verb opening the question is what matters, not the whole phrasing'],
    ['The height is $-6x^2-30x$. Factor the greatest common factor from this polynomial.', '-6x(x+5)',
      'a mid-question sentence that opens with the verb still asks the learner to factor'],
  ]) {
    assert(lint(factorFillin(question, answer)).some(trivial), reason);
  }

  // Silenced by the token, and exercised rather than trusted.
  assert.equal(
    lint(factorFillin('Factor: $x^2+6x+8$.', '(x+2)(x+4)', 'factored')).filter(trivial).length,
    0,
    'answerForm="factored" rules the printed polynomial out',
  );
  // The "declared form too weak to rule the printed value out" failure mode has
  // no instance here, unlike the numeral prompts: every numeral token rejects a
  // polynomial outright, so any mistagged form silences this rule. What catches
  // a mistag instead is verify-section — the same token also rejects the
  // exercise's own answer, which it reports as "would reject its own answer".
  // Asserted here so the division of labour is not mistaken for a gap.
  assert.equal(
    lint(factorFillin('Factor: $x^2+6x+8$.', '(x+2)(x+4)', 'lowest-terms')).filter(trivial).length,
    0,
    'a numeral token rejects the printed polynomial, so this rule falls silent',
  );
  assert.equal(
    checkAnswer('(x+2)(x+4)', '(x+2)(x+4)', { form: 'lowest-terms' }),
    'form',
    'and the mistag surfaces as the exercise rejecting its own answer',
  );

  // Does NOT fire: "factor" as a noun, which is most of its uses in the corpus.
  for (const [question, answer, reason] of [
    ['Find the greatest common factor of $12$ and $18$.', '6', 'naming a GCF is not factoring'],
    ['Find the Greatest Common Factor in the expression: $8m^2+16m$.', '8m', 'nor is naming it in an expression'],
    ['List all the factors of 96, separated by commas, least to greatest.', '1,2,3,4,6,8,12,16,24,32,48,96',
      'listing factors is not factoring'],
    ['Find the LCM of $9$ and $12$ using the prime factors method.', '36', 'a named method is not an instruction to factor'],
  ]) {
    assert.equal(lint(factorFillin(question, answer)).filter(trivial).length, 0, reason);
  }

  // The algebraic Simplify/Multiply/Divide family is in candidate scope on
  // purpose: a printed algebraic subject worth exactly its own answer is the
  // same hazard as the numeral prompts, and linting it is what lets a future
  // authoring session ship these exercises with the right answerForm from the
  // start instead of rediscovering the hole in review. Each case fires bare
  // and is silenced by the token that names its ask.
  for (const [question, answer, form, reason] of [
    ['Simplify: $\\tfrac{x^2-4}{x-2}$.', 'x+2', 'polynomial',
      'a reducible rational expression grades equal to its simplified polynomial'],
    ['Multiply: $(w+5)(w+7)$.', 'w^2+12w+35', 'expanded',
      'a printed binomial product grades equal to its own expansion'],
    ['Divide: $\\tfrac{c+3}{5-c} \\div \\tfrac{c^2-9}{c-5}$. (A factor of $-1$ appears from opposite binomials.)',
      '-\\tfrac{1}{c-3}', 'single-fraction',
      'the Divide verb is an ask even when "factor" appears as a noun in an aside'],
    ['Simplify: $b^9 \\cdot b^8$.', 'b^{17}', 'single-term',
      'a printed product of like bases grades equal to its single power'],
    // The §6 rational-expression class, formerly the one deliberate exemption:
    // both sides are a single fraction and only the cancelled polynomial
    // factor separates them, which the reduced-fraction gcd now sees.
    ['Simplify: $\\frac{x^2-x-2}{x^2-3x+2}$.', '\\frac{x+1}{x-1}', 'reduced-fraction',
      'a reducible rational expression grades equal to its reduced form'],
    ['Simplify: $\\frac{2n^2-10n}{4n^2-16n-20}$.', '\\frac{n}{2(n+1)}', 'reduced-fraction',
      'a common integer factor across polynomial halves is unreduced too'],
    ['Simplify: $\\tfrac{2x^2-12xy+18y^2}{3x^2-27y^2}$.', '\\frac{2(x-3y)}{3(x+3y)}', 'reduced-fraction',
      'a bivariate common factor is still a common factor — the gcd is multivariate'],
  ]) {
    assert(lint(factorFillin(question, answer)).some(trivial), reason);
    assert.equal(
      lint(factorFillin(question, answer, form)).filter(trivial).length,
      0,
      `answerForm=${JSON.stringify(form)} rules the printed subject out: ${reason}`,
    );
  }

  // `single-fraction` cannot see a cancelled polynomial factor — the prompt IS
  // one fraction — so declaring it on a reduction exercise is a form too weak
  // to block the printed value, and the rule says so rather than trusting it.
  assert(
    lint(factorFillin('Simplify: $\\frac{x^2-x-2}{x^2-3x+2}$.', '\\frac{x+1}{x-1}', 'single-fraction'))
      .some((error) => error.includes('does not rule that value out')),
    'a declared single-fraction on a rational reduction is exercised and found too weak',
  );

  // A form beside a list answer grades nothing — the grader returns first.
  assert(
    lintHugo(
      '{{< fillin question="Solve $x^2=9$." answer="-3,3" answerMode="unordered" answerForm="factored" hint="Both signs." >}}',
      'content/math/book/01-chapter/01-section.md',
    ).errors.some((error) => error.includes('not applied to a comma-separated answer')),
    'answerForm on a list answer is a silent no-op and must be rejected',
  );
});

// ---- an arithmetic prompt is trivially satisfiable without answerForm ------
// "Add: $3+5$" prints an expression worth exactly its own answer. The playbook
// used to call this inherent to CAS grading; it is not — `decimal` rejects it.
test('an arithmetic prompt is trivially satisfiable without answerForm', () => {
  const trivial = (error) => error.includes('printed in the question');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const arith = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Compute it." >}}`;

  for (const [question, answer, reason] of [
    ['Add: $3+5$.', '8', 'a bare arithmetic prompt is passable by retyping'],
    ['Multiply: $-6 \\cdot 8$.', '-48', 'so is a product'],
    // Both of these used to sit in the "must not fire" table below, on the
    // premise that CAS grading made them unavoidable. It does not: `decimal`
    // rejects the printed expression while accepting the answer, so they are
    // ordinary fixable defects and the exemption was wrong.
    ['Divide, then check by multiplying: $\\tfrac{91{,}881}{9}$', '10209',
      'a printed fraction stating a division is still passable by retyping'],
    ['Simplify: $9 + 5^3 - [4(9+3)]$.', '86', 'nor is a longer order-of-operations expression'],
  ]) {
    assert(lint(arith(question, answer)).some(trivial), reason);
  }

  assert.equal(
    lint(arith('Add: $3+5$.', '8', 'decimal')).filter(trivial).length,
    0,
    'answerForm="decimal" rules the printed arithmetic out',
  );
  assert.equal(
    lint(arith('Simplify: $(3^8)^2$. Write the answer as a power of 3.', '3^{16}', 'single-power')).filter(trivial).length,
    0,
    'answerForm="single-power" rules a printed nested power out',
  );

  // A numeral radical span IS an algebraic subject — the widening the
  // simplified-radical retrofit promised. Each fires bare and is silenced by
  // the token that names its target shape, including the tightened
  // simplified-radical (arithmetic under the root, a signed perfect power,
  // and a same-index numeral-radical product all reject now).
  for (const [question, answer, form, reason] of [
    ['Simplify: $\\sqrt{32} - \\sqrt{18}$.', '\\sqrt{2}', 'simplified-radical',
      'a numeral radical difference grades equal to its combined form'],
    ['Simplify: $\\sqrt{64 + 225}$.', '17', 'decimal',
      'unevaluated arithmetic under the root grades equal to its value'],
    ['Simplify: $\\sqrt{\\tfrac{25}{16}}$.', '\\tfrac{5}{4}', 'fraction lowest-terms',
      'a numeral fraction under the root grades equal to its root'],
    ['Simplify: $\\sqrt{3} \\cdot \\sqrt{6}$.', '3\\sqrt{2}', 'simplified-radical',
      'a product of same-index numeral radicals grades equal to its product'],
    ['Simplify: $\\sqrt[3]{-125}$.', '-5', 'decimal',
      'the perfect-power scan reads through the sign'],
    ['Find the sum $\\sum_{i=1}^{30}(6i-4)$.', '2670', 'decimal',
      'a sigma span is a subject — its bounds are structure, not a relation'],
  ]) {
    assert(lint(arith(question, answer)).some(trivial), reason);
    assert.equal(
      lint(arith(question, answer, form)).filter(trivial).length,
      0,
      `answerForm=${JSON.stringify(form)} rules the printed span out: ${reason}`,
    );
    assert.equal(checkAnswer(answer, answer, { form }), 'correct',
      `answerForm=${JSON.stringify(form)} still accepts the exercise's own answer`);
  }

  // Must NOT fire: a variable prompt prints no bare arithmetic, and a word
  // problem whose answer happens to equal a printed quantity is an incidental
  // collision the learner cannot exploit — they cannot know which to copy.
  for (const [question, answer, reason] of [
    ['Evaluate $3ab^2$ when $a = -2$ and $b = 3$.', '-54', 'a variable prompt contributes no arithmetic span'],
    ['Jazmine ran $8$ miles and biked $24$ miles in $3$ hours, biking $4$ mph faster than she ran. Find her running speed in mph.', '8',
      'an application answer colliding with a printed quantity is incidental'],
  ]) {
    assert.equal(lint(arith(question, answer)).filter(trivial).length, 0, reason);
  }
});

// ---- a prompt restated with the operation not carried out -------------------
// The span extractors above all ask "is something printed here also the
// answer?". That misses the family where the hazard is a COMBINATION of two
// printed spans: "For $f(x)=A$ and $g(x)=B$, find $(f+g)(x)$" prints nothing
// equal to the answer, yet `(A)+(B)` — the operation written but not performed
// — grades correct, so the learner never combines a like term. Measured
// against the real grader before these extractors existed, three such prompts
// in intermediate-algebra ch. 5 accepted their own restatement.
test('a prompt restated with the operation not carried out is trivially satisfiable', () => {
  const restated = (error) => error.includes('operation written but not carried out');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Combine like terms." >}}`;

  const FG = 'For functions $f(x)=2x^2-4x+1$ and $g(x)=5x^2+8x+3$';

  // Fires: each prompt is passable by writing the operation out unperformed.
  for (const [question, answer, reason] of [
    [`${FG}, find $(f+g)(x)$.`, '7x^2 + 4x + 4', 'a function sum is passable as the uncombined sum'],
    [`${FG}, find $(f-g)(x)$.`, '-3x^2 - 12x - 2', 'and a function difference as the uncombined difference'],
    ['For $f(x)=x-1$ and $g(x)=4x^2+3x-5$, find $(f\\cdot g)(x)$.', '4x^3-x^2-8x+5',
      'a function product is passable as the unmultiplied product'],
    ['For $f(x)=x^2-15x+54$ and $g(x)=x-9$, find $\\left(\\tfrac{f}{g}\\right)(x)$.', 'x-6',
      'an exactly-dividing function quotient is passable as the undivided fraction'],
    ['Subtract $(9x^2+2)$ from $(12x^2-x+6)$.', '3x^2 - x + 4',
      'subtract-from is passable as the uncombined difference, in the stated order'],
    ['Use synthetic division to find the quotient when $x^3-3x^2-4x+12$ is divided by $x+2$.', 'x^2-5x+6',
      'an exact division is passable as the undivided fraction'],
  ]) {
    assert(lint(fillin(question, answer)).some(restated), reason);
  }

  // Silenced by the token, and exercised rather than trusted: the same token
  // must still accept the real answer, or it would be rejecting sound content.
  for (const [question, answer, form] of [
    [`${FG}, find $(f+g)(x)$.`, '7x^2 + 4x + 4', 'no-like-terms'],
    ['Subtract $(9x^2+2)$ from $(12x^2-x+6)$.', '3x^2 - x + 4', 'no-like-terms'],
    ['Use synthetic division to find the quotient when $x^3-3x^2-4x+12$ is divided by $x+2$.', 'x^2-5x+6', 'expanded'],
  ]) {
    assert.equal(lint(fillin(question, answer, form)).filter(restated).length, 0,
      `answerForm=${JSON.stringify(form)} rules the restatement out`);
    assert.equal(checkAnswer(answer, answer, { form }), 'correct',
      `answerForm=${JSON.stringify(form)} still accepts the exercise's own answer`);
  }

  // Must NOT fire.
  for (const [question, answer, reason] of [
    [`${FG}, find $(f+g)(2)$.`, '40',
      'an ask evaluated at a number is answered by a number no restatement equals'],
    ['Use the Remainder Theorem to find the remainder when $f(x)=x^3-4x-9$ is divided by $x+2$.', '-9',
      'a remainder ask names no quotient, so no fraction candidate is built'],
    ['For functions $f(x)=2x^2-4x+1$ and $g(x)=5x^2+8x+3$, find $g(x)$.', '5x^2+8x+3',
      'naming one function back is not a combination ask'],
    ['Divide: $\\tfrac{54a^2b^3}{-6ab^5}$.', '-\\frac{9a}{b^2}',
      'a single printed quotient span composes nothing — one operand, not two'],
  ]) {
    assert.equal(lint(fillin(question, answer)).filter(restated).length, 0, reason);
  }

  // A division leaving a nonzero remainder is safe on its own arithmetic: the
  // fraction is not equal to the quotient, so the grader rejects it and the
  // rule stays silent without needing a phrasing exception.
  assert.equal(
    lint(fillin('Use synthetic division to find the quotient when $2x^3-11x^2+16x-12$ is divided by $x-4$.', '2x^2-3x+4'))
      .filter(restated).length,
    0,
    'a nonzero remainder makes the restatement genuinely incorrect, not merely mis-shaped',
  );
});

// ---- the "write it in standard form" class (§6, eighth shape) --------------
// Completing the square (or dividing to reach `…=1`) changes the shape, not
// the value, so the printed equation grades equal to its own standard form.
// The verb feeds printed EQUATION spans — the span shape every other extractor
// excludes — and a definition span `f(x)=RHS` contributes its bare RHS too,
// because the learner answers without the label.
test('a standard-form prompt is trivially satisfiable without answerForm', () => {
  const trivial = (error) => error.includes('printed in the question');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Complete the square." >}}`;

  for (const [question, answer, form, reason] of [
    ['Write $y=2x^2+4x+5$ in standard form.', '2(x+1)^2+3', 'vertex-form',
      'a vertical parabola grades equal to its own vertex form'],
    ['ⓐ Write $x=-4y^2-16y-12$ in standard form and ⓑ graph it.', '-4(y+2)^2+4', 'vertex-form',
      'the horizontal orientation is the same shape in the other variable'],
    ['Rewrite $f(x)=2x^2-8x+3$ in the $f(x)=a(x-h)^2+k$ form by completing the square.', '2(x-2)^2-5', 'vertex-form',
      'the spelled-out template is the same ask, and the hazard is the definition\'s bare RHS'],
    ['Write $9x^2+16y^2=144$ in standard form.', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form',
      'an ellipse grades equal to its divided-through form'],
    ['Write $9x^2-16y^2+18x+64y-199=0$ in standard form.', '\\frac{(x+1)^2}{16}-\\frac{(y-2)^2}{9}=1', 'conic-standard-form',
      'a general-form hyperbola grades equal to its standard form'],
    ['Write $x^2+y^2+10x+6y+30=0$ in standard form.', '(x+5)^2+(y+3)^2=4', 'circle-standard-form',
      'a general-form circle grades equal to its standard form'],
    ['Convert the equation from logarithmic to exponential form: $3=\\log_7 343$.', '343=7^3', 'exponential-form',
      'two true statements grade equal, so only the notation separates them'],
    ['Use properties of logarithms to write $\\log_5 25ab$ as a sum of logarithms, simplifying if possible.',
      '2+\\log_5 a+\\log_5 b', 'expanded-logarithms',
      'a compound-argument logarithm grades equal to its expansion'],
  ]) {
    assert(lint(fillin(question, answer)).some(trivial), reason);
    assert.equal(
      lint(fillin(question, answer, form)).filter(trivial).length,
      0,
      `answerForm=${JSON.stringify(form)} rules the printed equation out: ${reason}`,
    );
    assert.equal(checkAnswer(answer, answer, { form }), 'correct',
      `answerForm=${JSON.stringify(form)} still accepts the exercise's own answer`);
  }

  // Must NOT fire: "standard form" prompts that print no bare two-sided
  // equation contribute no candidate — the extractor, not the verb, is the
  // gate that keeps them out.
  for (const [question, answer, reason] of [
    ['Write in standard form: fifty-three million, eight hundred nine thousand, fifty-one.', '53809051',
      'the prealgebra number-words ask prints no equation span'],
    ['Write the standard form of the equation of the circle with radius $6$ and center $(0,0)$.', 'x^2+y^2=36',
      'a construction ask prints values, not an equation to restate'],
  ]) {
    assert.equal(lint(fillin(question, answer)).filter(trivial).length, 0, reason);
  }
});

// ---- the "find the exact value" class, over trigonometry and angles --------
// $\cos\left(\tfrac{\pi}{4}\right)$ IS $\tfrac{\sqrt2}{2}$ to the engine, and
// $225^\circ$ IS $\tfrac{5\pi}{4}$ — `^\circ` is an exact operator, not
// decoration. So both asks print their own answers. Neither span reaches the
// numeric extractor: it skips `\pi` by design, and an angle in degrees is not
// a bare numeral either, so each class needs its own verb and extractor.
test('an exact-value trig or angle-conversion prompt is passable by retyping', () => {
  const trivial = (error) => error.includes('printed in the question');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Use the unit circle." >}}`;

  for (const [question, answer, form, reason] of [
    ['Find the exact value of $\\cos\\left(\\frac{\\pi}{4}\\right)$.', '\\frac{\\sqrt{2}}{2}', 'evaluated-trig',
      'the printed cosine evaluates to its own key'],
    ['Find the exact value of $\\sec\\left(\\frac{\\pi}{3}\\right)$.', '2', 'evaluated-trig',
      'the reciprocal functions are the same hazard'],
    ['Evaluate $\\sin^{-1}\\left(\\frac{1}{2}\\right)$.', '\\frac{\\pi}{6}', 'evaluated-trig',
      'an inverse application is unevaluated ink too'],
    ['Simplify $\\sin^2 x+\\cos^2 x$.', '1', 'evaluated-trig',
      'the simplify verb reaches this one, and the same token is what closes it'],
    ['Convert $\\frac{5\\pi}{4}$ radians to degrees.', '225^\\circ', 'degrees',
      'the engine grades the two spellings of one angle equal'],
    ['Convert $225^\\circ$ to radians.', '\\frac{5\\pi}{4}', 'radians',
      'and equal in the other direction, so the mirror ask needs the mirror token'],
  ]) {
    assert(lint(fillin(question, answer)).some(trivial), reason);
    assert.equal(
      lint(fillin(question, answer, form)).filter(trivial).length,
      0,
      `answerForm=${JSON.stringify(form)} rules the printed span out: ${reason}`,
    );
    assert.equal(checkAnswer(answer, answer, { form }), 'correct',
      `answerForm=${JSON.stringify(form)} still accepts the exercise's own answer`);
  }

  // Must NOT fire. The extractors take constant arguments only, so every ask
  // whose printed trigonometry carries a variable stays sound and untagged —
  // amplitude, period and identity prompts are the bulk of a periodic-functions
  // section, and a rule that conscripted them would fire on sound content.
  for (const [question, answer, reason] of [
    ['Find the amplitude of $y=3\\sin(2x)$.', '3', 'the printed span is a definition in a variable'],
    ['Find the period of $y=\\sin(2x)$.', '\\pi', 'the key is a constant the printed span never equals'],
    ['A wheel turns through $\\frac{5\\pi}{4}$ radians. How many radians is that?', '\\frac{5\\pi}{4}',
      'no conversion is asked, so the angle extractor is never reached'],
  ]) {
    assert.equal(lint(fillin(question, answer)).filter(trivial).length, 0, reason);
  }
});

// ---- an equation answer makes printed equations retype hazards -------------
// Equation-equivalence grading accepts every restatement whose
// moved-to-one-side form is proportional, so "Solve $7x+y=11$ for $y$"
// authored `y=11-7x` is passable by retyping the printed formula until
// `solved:y` rules the unrearranged shape out.
test('a solve-for-a-variable prompt is passable by retyping without answerForm', () => {
  const trivial = (error) => error.includes('printed in the question');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Isolate the variable." >}}`;
  assert(
    lint(fillin('Solve the formula $7x + y = 11$ for $y$.', 'y=11-7x')).some(trivial),
    'the printed formula grades equal to the equation-shaped key',
  );
  assert.equal(
    lint(fillin('Solve the formula $7x + y = 11$ for $y$.', 'y=11-7x', 'solved:y')).filter(trivial).length,
    0,
    'solved:y rules the unrearranged formula out',
  );
  assert.equal(checkAnswer('y=11-7x', 'y=11-7x', { form: 'solved:y' }), 'correct',
    'solved:y still accepts the exercise\'s own answer');
  assert.equal(
    lint(fillin('Find an equation of a line parallel to $y=4x+2$ that contains the point $(1,2)$.', 'y = 4x - 2'))
      .filter(trivial).length,
    0,
    'a printed line that is a DIFFERENT line from the key is no hazard',
  );
});

// ---- composition and page-context combinations ------------------------------
// `(f\circ g)(x)` is passable as the outer definition with the inner one
// substituted but not simplified, and the definitions may be printed in page
// prose outside any one question ("For the next three questions, use …").
test('a composition ask with page-context definitions is trivially satisfiable', () => {
  const restated = (error) => error.includes('operation written but not carried out');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const PREFACE = 'For the next three questions, use $f(x)=6x+1$ and $g(x)=8x-3$.\n\n';
  const fillin = (question, answer, form = '') =>
    `{{< fillin question="${question}" answer="${answer}"${form ? ` answerForm="${form}"` : ''} hint="Substitute, then simplify." >}}`;

  for (const [question, answer, form, reason] of [
    ['Find $(f\\circ g)(x)$.', '48x-17', 'distributed no-like-terms',
      'a composition is passable as the substituted-but-unsimplified form'],
    ['Find $(g\\circ f)(x)$.', '48x+5', 'distributed no-like-terms',
      'the composition order follows the ask'],
    ['Find $(f\\cdot g)(x)$.', '48x^2-10x-3', 'distributed no-like-terms',
      'prose definitions reach the product ask too'],
  ]) {
    assert(lint(PREFACE + fillin(question, answer)).some(restated), reason);
    assert.equal(
      lint(PREFACE + fillin(question, answer, form)).filter(restated).length,
      0,
      `answerForm=${JSON.stringify(form)} rules the restatement out`,
    );
    assert.equal(checkAnswer(answer, answer, { form }), 'correct',
      `answerForm=${JSON.stringify(form)} still accepts the exercise's own answer`);
  }

  // Names and variables other than f/g of x reach the rule too, exactly as
  // verify-answers.mjs reads any single-letter definition.
  assert(
    lint(fillin('Given $p(t)=6t+1$ and $q(t)=8t-3$, find $(p\\circ q)(t)$.', '48t-17')).some(restated),
    'a p/q composition in t builds the substituted-but-unsimplified candidate',
  );

  // `(fg)(x)` juxtaposition is the product ask, with in-question definitions.
  assert(
    lint(fillin('Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(fg)(x)$.', 'x^3-x^2-x+1')).some(restated),
    'the juxtaposed product ask builds the unmultiplied product',
  );
  assert.equal(
    lint(fillin('Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(fg)(x)$.', 'x^3-x^2-x+1', 'expanded'))
      .filter(restated).length,
    0,
    'answerForm="expanded" rules the unmultiplied product out',
  );

  // A definition wrapped across a source line is still a definition — the
  // math spans deliberately allow newlines, and FUNCTION_DEF_RE must read
  // them exactly as verify-answers.mjs's DEFINITION_RE does, or the hazard
  // check silently skips the exercise.
  assert(
    lint(fillin('Given $f(x)=x^2\n-1$ and $g(x)=x-1$, find and simplify $(fg)(x)$.', 'x^3-x^2-x+1')).some(restated),
    'a newline inside a printed definition does not hide the combination hazard',
  );

  // A composition evaluated at a number is answered by a number no
  // substitution of the definitions equals.
  assert.equal(
    lint(PREFACE + fillin('Find $(f\\circ g)(2)$.', '79')).filter(restated).length,
    0,
    'an ask evaluated at a number builds no candidate',
  );

  // The nested-application phrasing `f(g(x))` — how the precalculus sections
  // write a composition at least as often as `(f\circ g)(x)`. It was outside
  // the rule until August 9, 2026, and three authored exercises passed by
  // retyping the substitution because of it.
  const NESTED = 'Given $f(x)=2x^2+1$ and $g(x)=3x+5$, find and simplify $f(g(x))$.';
  assert(
    lint(fillin(NESTED, '18x^2+60x+51')).some(restated),
    'the nested-application phrasing builds the substituted-but-unexpanded candidate',
  );
  assert(
    lint(fillin(NESTED, '18x^2+60x+51', 'expanded')).some(restated),
    '"expanded" alone does not rule it out — 2(3x+5)^2+1 is already a top-level sum',
  );
  assert.equal(
    lint(fillin(NESTED, '18x^2+60x+51', 'expanded distributed')).filter(restated).length,
    0,
    'adding "distributed" rules the unexpanded square out',
  );
  assert.equal(checkAnswer('18x^2+60x+51', '18x^2+60x+51', { form: 'expanded distributed' }), 'correct',
    'the tightened form still accepts the exercise\'s own answer');
  assert.equal(
    lint(fillin('Given $f(x)=2x^2+1$ and $g(x)=3x+5$, find $f(g(2))$.', '243')).filter(restated).length,
    0,
    'a nested application evaluated at a number builds no candidate',
  );

  // A built candidate that IS the answer means the ask left no operation to
  // carry out: substituting $x^2+3$ into $\sqrt{x}+2$ produces the answer
  // itself, so writing it is the correct response and no form should reject
  // it. The comparison must be structural — `2(3x+5)^2+1` equals
  // `18x^2+60x+51` in value, and silencing on value would close the class.
  assert.equal(
    lint(fillin(
      'Given $f(x)=\\sqrt{x}+2$ and $g(x)=x^2+3$, find and simplify $f(g(x))$.',
      '\\sqrt{x^2+3}+2',
      'no-like-terms',
    )).filter(restated).length,
    0,
    'a pure-substitution ask is sound content, not a restatement hazard',
  );
});

// ---- a slash quotient followed by juxtaposition mis-parses ------------------
// `-1/20(x-20)^2+20` is read as `-1/(20(x-20)^2)+20`, so the authored value is
// not the intended one and the learner who types the intended `\frac` form is
// marked wrong. Both sides of every self-check mis-parse identically, which is
// why only a lint on the written answer can catch it.
test('a slash quotient followed by a juxtaposed factor is rejected', () => {
  const slash = (error) => error.includes('slash quotient');
  const lint = (source) => lintHugo(source, 'content/math/book/01-chapter/01-section.md').errors;
  const fillin = (answer) =>
    `{{< fillin question="Find the equation of the arch." answer="${answer}" hint="Vertex first." >}}`;

  for (const [answer, reason] of [
    ['-1/20(x-20)^2+20', 'a parenthesized factor after the denominator'],
    ['y=1/2x-5/2', 'a variable directly after the denominator'],
    ['1/2\\pi', 'a macro directly after the denominator'],
  ]) {
    assert(lint(fillin(answer)).some(slash), reason);
  }
  for (const [answer, reason] of [
    ['-\\frac{1}{20}(x-20)^2+20', 'an explicit \\frac coefficient is unambiguous'],
    ['-5/2', 'a bare slash fraction has nothing juxtaposed'],
    ['(x+3)/(x-2)', 'a parenthesized denominator is grouped, not juxtaposed'],
  ]) {
    assert.equal(lint(fillin(answer)).filter(slash).length, 0, reason);
  }
});

// ---- an unbraced multi-digit exponent grades as a different value ----------
// TeX reads `y^10` as `y^1` followed by a literal `0`. Self-grading cannot see
// this (the answer is compared against itself) and a correct `answerDisplay`
// hides it from visual review, so only the lint stands between the defect and
// a learner who types the right thing and is told they are wrong.
test('an unbraced multi-digit exponent grades as a different value', () => {
  const expFillin = (answer) => `{{< fillin question="Simplify: $y^{20} / y^{10}$." answer="${answer}" hint="Subtract the exponents." >}}`;
  const errorsFor = (answer) => lintHugo(expFillin(answer), 'content/math/book/01-chapter/01-section.md')
    .errors.filter((error) => error.includes('unbraced multi-digit exponent'));
  for (const [answer, reason] of [
    ['y^10', 'a bare two-digit exponent is an error'],
    ['7^14', 'the same defect on a numeric base is an error'],
    ['3x^{2}y^100', 'the rule finds the defect inside a longer expression'],
  ]) {
    assert.equal(errorsFor(answer).length, 1, reason);
  }
  for (const [answer, reason] of [
    ['y^{10}', 'a braced multi-digit exponent is correct and must not fire'],
    ['y^2', 'a single-digit exponent needs no braces'],
    ['x^{20}y^{11}', 'several braced multi-digit exponents stay clean'],
    ['10^{-3}', 'a braced negative exponent is unaffected by this rule'],
  ]) {
    assert.equal(errorsFor(answer).length, 0, reason);
  }
});

// ---- a categorical answer encoded as a number belongs in multiplechoice ----
// The learner is choosing among named alternatives; a numeric fill-in grades a
// legend rather than the choice and accepts a coin-flip guess.
test('a categorical answer encoded as a number belongs in multiplechoice', () => {
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
});
test('a units convention naming a number is not an answer legend', () => {
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
});

// ---- digit grouping ignores invisible \phantom spacing ---------------------
// Long-division layouts align columns with runs like \phantom{0000}; grouping
// those digits would misreport a number the reader never sees and shift the
// alignment they exist to produce.
test('digit grouping ignores invisible \\phantom spacing', () => {
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
});

test('a redundant print part label in a Simplify prompt is rejected', () => {
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
});

test('a legacy static answer reveal is rejected', () => {
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
});
test('an active shortcode in a Markdown code span is rejected', () => {
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
});

test('a chapter landing needs descriptive section bullets', () => {
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
});

test('TeX prose without explicit spacing is rejected', () => {
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
});
test('explicitly spaced TeX prose is accepted', () => {
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
});

// ---- objectives callout ------------------------------------------------------
test('the objectives callout shape is enforced', () => {
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
      .errors.filter((e) => e.includes('objectives callout')).length,
    0,
    'a fragment with no Practice block does not need the objectives list',
  );
  assert.equal(
    lintHugo(`${listed}\n\n${practiceBody}`, 'content/test.md')
      .errors.filter((e) => e.includes('objective')).length,
    0,
    'non-section pages are outside the objectives rule',
  );
});

// ---- section-final Practice block -------------------------------------------
test('the section-final Practice block is enforced', () => {
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

  const good = lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${keyTerms}\n\n${practice}`, sectionPath);
  assert.equal(
    good.errors.length,
    0,
    `a grouped Practice block after Key terms is valid (cap exemption included): ${good.errors.join('; ')}`,
  );
  // Frontmatter is what makes a fixture a whole PAGE rather than an authoring
  // fragment, and only a whole page can be missing its Practice block.
  const FRONTMATTER = '---\ntitle: A Section\nweight: 1\n---\n';
  const missing = lintHugo(`${FRONTMATTER}\n${head}\n\n## Teach\n\nProse.\n\n${keyTerms}`, sectionPath);
  assert(
    missing.errors.some((e) => e.includes('no `## Practice` block')),
    'a section without a Practice block is an error — the retrofit finished August 9, 2026',
  );
  assert(
    missing.errors.some((e) => e.includes('at least 5 in total')),
    'the missing-block error states the section-specific minimum',
  );
  // The rule must not fire on an authoring fragment — a snippet under review,
  // or a fixture for another rule in this file — which has no frontmatter and
  // is not claiming to be a whole page. A real section cannot escape this way:
  // validate-content errors on missing frontmatter first.
  assert.equal(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${keyTerms}`, sectionPath)
      .errors.filter((e) => e.includes('no `## Practice` block')).length,
    0,
    'a frontmatter-less fragment is not a page missing its Practice block',
  );
  assert(
    lintHugo(`${FRONTMATTER}\n${objectivesCallout(['O1', 'O2', 'O3', 'O4'])}\n\n## Teach\n\nProse.\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('at least 8 in total')),
    'the minimum scales with the objective count once 2 per objective exceeds the floor',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Round whole numbers\n\n${fillin('r1')}`,
      sectionPath,
    ).errors.some((e) => e.includes('`### Round whole numbers` has 1 interactive exercise(s)')),
    'a group with fewer than two exercises is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n${fillin('loose')}\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}`,
      sectionPath,
    ).errors.some((e) => e.includes('sits above the first `### ` group')),
    'an exercise outside any objective group is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}`,
      sectionPath,
    ).errors.some((e) => e.includes('no `### ` objective groups')),
    'an ungrouped Practice block is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Estimate sums\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}`,
      sectionPath,
    ).errors.some((e) => e.includes('it must be `### Round whole numbers`')),
    'a group title that is not the matching objective is an error',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2'), fillin('r3')].join('\n\n')}\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}`,
      sectionPath,
    ).errors.some((e) => e.includes('matching the objectives callout in order')),
    'objective groups out of order are an error',
  );

  assert(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n### Add whole numbers\n\n${[fillin('a1'), fillin('a2')].join('\n\n')}\n\n### Round whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}`,
      sectionPath,
    ).errors.some((e) => e.includes('at least 5 are required')),
    'a two-objective section still needs five exercises overall',
  );

  assert.equal(
    lintHugo(
      `${head}\n\n${keyTerms}\n\n## Practice\n\n### add whole numbers.\n\n${[fillin('a1'), fillin('a2'), fillin('a3')].join('\n\n')}\n\n### Round  whole numbers\n\n${[fillin('r1'), fillin('r2')].join('\n\n')}`,
      sectionPath,
    ).errors.length,
    0,
    'group titles match objectives ignoring case, spacing, and trailing punctuation',
  );

  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${practice}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('before the end matter')),
    'Practice before Key terms is an error',
  );

  assert(
    lintHugo(`${head}\n\n${keyTerms}\n\n${practice}\n\n## More teaching\n\nProse.`, sectionPath)
      .errors.some((e) => e.includes('no heading may follow it')),
    'a heading after Practice is an error',
  );

  assert(
    lintHugo(`${head}\n\n${keyTerms}\n\n${practice}\n\n${practice}`, sectionPath)
      .errors.some((e) => e.includes('more than one `## Practice`')),
    'duplicate Practice headings are an error',
  );

  assert.equal(
    lintHugo(`${head}\n\n## Key concepts\n\nSummary.\n\n${keyTerms}\n\n${practice}`, sectionPath).errors.length,
    0,
    'Key concepts counts as end matter where present',
  );

  assert.equal(
    lintHugo(`${head}\n\n## Key equations\n\n$E=mc^2$\n\n${keyTerms}\n\n${practice}`, sectionPath).errors.length,
    0,
    'Key equations counts as end matter where present',
  );
  assert(
    lintHugo(`${head}\n\n## Key equation\n\n$E=mc^2$\n\n${keyTerms}\n\n${practice}`, sectionPath).errors.length === 0,
    'the singular Key equation heading also counts as end matter',
  );
  assert(
    lintHugo(`${head}\n\n## Key equations\n\n$E=mc^2$\n\n${practice}\n\n${keyTerms}`, sectionPath)
      .errors.some((e) => e.includes('before the end matter')),
    'Practice between Key equations and Key terms is still before the end matter',
  );

  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n**Key terms.** A **widget** is a thing.\n\n${practice}`, sectionPath)
      .errors.some((e) => e.includes('bold prose paragraph')),
    'a bold **Key terms.** prose paragraph is an error — end matter must be a heading',
  );
  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n${practice}\n\n## Key Concepts\n\nSummary.`, sectionPath)
      .errors.some((e) => e.includes('before the end matter')),
    'a title-case Key Concepts heading still counts as end matter for the ordering rule',
  );
  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n**Key Terms:** widget.\n\n${practice}`, sectionPath)
      .errors.some((e) => e.includes('bold prose paragraph')),
    'a title-case bold Key Terms paragraph is also an error',
  );
  assert(
    lintHugo(`${head}\n\n## Teach\n\nProse.\n\n**Key terms:** widget, gadget.\n\n${practice}`, sectionPath)
      .errors.some((e) => e.includes('bold prose paragraph')),
    'the colon form of the bold Key terms paragraph is also an error',
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
    lintHugo('## Whatever\n\nProse.', 'content/test.md').errors
      .filter((e) => e.includes('Practice')).length,
    0,
    'non-section pages are outside the Practice-block rule',
  );
  assert.equal(
    lintHugo('## Whatever\n\nProse.', 'content/math/book/knowledge-check-01-06.md').errors
      .filter((e) => e.includes('Practice')).length,
    0,
    'knowledge checks are outside the Practice-block rule',
  );
});

// ---- figure curve precision ------------------------------------------------

// smoothCurves spline output (a cubic-bezier path) is an error; analytic
// output is not — and neither is a spline the author has declared as source
// art with no formula, which is the whole point of the freeform escape hatch.
test('figure curve precision: spline output needs a freeform declaration', () => {
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
});

// data-spec provenance must parse and must acknowledge freeform spline use.
test('a data-spec provenance record must parse and acknowledge spline use', () => {
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

  // A `>` inside the quoted spec does NOT end the tag. render-figure.mjs emits
  // a raw one whenever a label names an inequality, and the old `[^>]*>` tail
  // cut the tag mid-JSON — the lint rejecting its own generator's verbatim
  // output, on a figure that is entirely sound.
  const inequality = `<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A parabola with k > 0 above the axis and k < 0 below it.","quadratics":[{"a":1}]}'>${svg}</div>`;
  assert.deepEqual(lintHugo(inequality, 'content/test.md').errors, [],
    'a > inside a quoted attribute value must not truncate the tag');
  // …and the rule still fires through such a tag, rather than going quiet on it
  const inequalitySpline = `<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"k > 0","smoothCurves":[{"through":[[0,0],[1,1]]}]}'>${svg}</div>`;
  assert(
    lintHugo(inequalitySpline, 'content/test.md').errors.some((e) => e.includes('freeform')),
    'the quote-aware scanner still reads the spec it now reaches',
  );
});

// An array row may not out-run its column spec. Hugo's KaTeX runs in strict
// mode and fails the BUILD on this, while the section verifier renders with
// `strict: 'ignore'` and does not — so eight of these passed a green
// `npm test` and only surfaced at `npm run build`.
test('an array row with more cells than its spec declares is an error', () => {
  const lint = (src) => lintHugo(src, 'content/math/book/01-chapter/01-section.md').errors
    .filter((e) => e.includes('declares'));

  // The shape that shipped: three parallel "or" solution chains under {lrcl}.
  const parallel = '$$\\begin{array}{lrcl}\nx^{2} &=& 0 & \\text{or} & x^{2}-1 &=& 0 & \\text{or} & x^{2}-2 &=& 0\n\\end{array}$$';
  assert.equal(lint(parallel).length, 1, 'eleven cells under a four-column spec is an error');
  assert.match(lint(parallel)[0], /11 cells/);
  // Widening the spec to match is the fix, and clears it.
  assert.deepEqual(
    lint('$$\\begin{array}{rclcrclcrcl}\nx^{2} &=& 0 & \\text{or} & x^{2}-1 &=& 0 & \\text{or} & x^{2}-2 &=& 0\n\\end{array}$$'),
    [],
  );
  // A chained equation and an explanation column written last are the other
  // two shapes that shipped.
  assert.equal(lint('$$\\begin{array}{lrcl}\nA &=& LW &=& L(80-2L)\n\\end{array}$$').length, 1);
  assert.equal(lint('$$\\begin{array}{lrcl}\n& y &=& (x-4)^2 & \\text{Interchange.}\n\\end{array}$$').length, 1);

  // Must NOT fire on sound content:
  // the house-standard four-column step array,
  assert.deepEqual(
    lint('$$\\begin{array}{lrcl}\n\\text{Subtract.} & x &=& 5 \\\\[4pt]\n\\text{Check.} & y &=& 2\n\\end{array}$$'),
    [],
  );
  // an `&` nested inside a group, which is not a cell break,
  assert.deepEqual(lint('$$\\begin{array}{rl}\na & \\text{x {and} y}\n\\end{array}$$'), []);
  // a ragged row with FEWER cells than columns, which KaTeX allows,
  assert.deepEqual(
    lint('$$\\begin{array}{lrcl}\n\\text{a} & x &=& 5 \\\\[4pt]\n\\text{b} & y\n\\end{array}$$'),
    [],
  );
  // and a spec carrying rules and padding, whose non-column characters must
  // not be counted as columns.
  assert.deepEqual(lint('$$\\begin{array}{|r|l|}\na & b\n\\end{array}$$'), []);
});

// Digit grouping: four or more digits are grouped; four-digit years are not.
// An error rather than a warning — the corpus carries none, so the next one is
// new work. Only \phantom spacing ever produced a false positive, and that is
// masked (above).
test('four or more digits are grouped, and four-digit years are not', () => {
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
});

// ---- math span cut by a table cell boundary --------------------------------
// Goldmark splits table rows on `|` before inline math is parsed, so a pipe
// used as an absolute-value bar silently reshapes the table.
test('a math span cut by a table cell boundary is rejected', () => {
  const SECTION = 'content/math/book/01-chapter/01-section.md';
  const errorsOf = (src) => lintHugo(src, SECTION).errors
    .filter((error) => error.includes('cut by a table cell boundary'));

  // The header row that regressed Intermediate Algebra 3.6: five cells against
  // a three-cell delimiter row drops the whole chart back to a paragraph.
  assert(
    errorsOf('| $x$ | $f(x)=|x|$ | $(x,f(x))$ |\n| ---: | ---: | :---: |\n| $-3$ | $3$ | $(-3,3)$ |').length === 1,
    'expected a table-row pipe lint for $f(x)=|x|$',
  );
  // \left| … \right| is the same defect in a body cell.
  assert(
    errorsOf('| Step | Result |\n| --- | --- |\n| Take the square root. | $6 \\left|x y\\right|$ |').length === 1,
    'expected a table-row pipe lint for \\left| … \\right|',
  );
  // One report per row, not one per pipe.
  assert.equal(errorsOf('| $|a|$ | $|b|$ |').length, 1, 'the lint reports each row once');

  // The repaired forms are silent.
  assert.equal(errorsOf('| $x$ | $f(x)=\\lvert x\\rvert$ | $(x,f(x))$ |').length, 0);
  assert.equal(errorsOf('| Take the square root. | $6 \\left\\lvert x y\\right\\rvert$ |').length, 0);
  // Cell separators outside math, and pipes in math outside a table, are fine.
  assert.equal(errorsOf('| $x$ | $f(x)$ | $(x,f(x))$ |').length, 0);
  assert.equal(errorsOf('The set is $\\{x \\mid x>0\\}$, written with a | bar.').length, 0);
  // An escaped dollar does not open a math span.
  assert.equal(errorsOf('| Type | Number | Value ($) | Total Value ($) |').length, 0);
  // Fenced examples are documentation, not authored content.
  assert.equal(errorsOf('```\n| $x$ | $f(x)=|x|$ |\n```').length, 0);
});


// ---- graphplot: the lint validates what the component actually renders ------
// `<graph-plot>` applies `tickLabels: true, tickStep: 2` on top of the authored
// grid, but the config parser used to validate the raw authored grid, where
// `tickLabels` was undefined and `tickStep` defaulted to the grid step. So its
// 10,000-label ceiling only ran on a config that had opted in by hand, and a
// wide grid passed `npm run lint` and then asked the browser for a hundred
// thousand tick labels — where buildGraph's own stepCount guard throws, outside
// the component's parse try/catch.
test('an absurd grid span is a lint error, not a runtime throw', () => {
  const SECTION = 'content/math/book/01-chapter/01-section.md';
  const graphplot = (grid, snap = 1) => [
    `{{< graphplot question="Graph the line." ariaLabel="A grid." hint="Plot two points." snap="${snap}" >}}`,
    `{"answer":{"slope":1,"intercept":0},"grid":${grid}}`,
    '{{< /graphplot >}}',
  ].join('\n');
  const errorsOf = (grid, snap) => lintHugo(graphplot(grid, snap), SECTION).errors
    .filter((error) => error.includes('graphplot'));

  // Chosen so that every PRE-EXISTING ceiling stays quiet: 201 grid lines, and
  // a snap coarse enough that the selectable-points guard is far from firing.
  // What is left is the one the component would hit — 100,001 tick labels per
  // axis at the effective tick step of 2.
  const WIDE = '{"xMin":-100000,"xMax":100000,"yMin":-7,"yMax":7,"gridStep":1000}';
  assert.equal(errorsOf(WIDE, 1000).length, 1,
    'a grid whose effective tick labels exceed the ceiling must fail the lint');
  assert.match(errorsOf(WIDE, 1000)[0], /too many tick labels/);

  // An author who turns the labels off is asking for something renderable, and
  // the same grid is then fine.
  assert.equal(errorsOf('{"xMin":-100000,"xMax":100000,"yMin":-7,"yMax":7,"gridStep":1000,"tickLabels":false}', 1000).length, 0);

  // The ordinary authored grids stay silent.
  assert.equal(errorsOf('{}').length, 0);
  assert.equal(errorsOf('{"xMin":-10,"xMax":10,"yMin":-10,"yMax":10}').length, 0);
  assert.equal(errorsOf('{"xMin":-20,"xMax":20,"yMin":-20,"yMax":20,"gridStep":2,"tickStep":4}').length, 0);
});

// ---- answerDisplay is not a multiplechoice parameter ------------------------
// The lint used to check it for print-source labels, which made it look like a
// supported param; the template never rendered it and no page has ever used it.
test('answerDisplay on a multiplechoice is an error, not a silent no-op', () => {
  const SECTION = 'content/math/book/01-chapter/01-section.md';
  const mc = (extra) => `{{< multiplechoice question="Which is larger?" answer="yes"${extra} hint="Compare." >}}\nyes\nno\n{{< /multiplechoice >}}`;
  const errorsOf = (src) => lintHugo(src, SECTION).errors
    .filter((error) => error.includes('answerDisplay is not supported'));

  assert.equal(errorsOf(mc(' answerDisplay="$yes$"')).length, 1);
  assert.equal(errorsOf(mc('')).length, 0);
  // An empty value is still an author reaching for the param.
  assert.equal(errorsOf(mc(' answerDisplay=""')).length, 1);
  // fillin does support it, and must stay silent.
  assert.equal(
    lintHugo('{{< fillin question="Simplify $x+x$." answer="2x" answerDisplay="$2x$" hint="Add." >}}', SECTION)
      .errors.filter((e) => e.includes('answerDisplay')).length,
    0,
  );
});

// ---------------------------------------------------------------------------
// apfigure — spec-first static figures

const APFIG = (kind, json) => `{{< apfigure kind="${kind}" >}}\n${json}\n{{< /apfigure >}}`;
const SECTION = 'content/math/book/01-chapter/01-section.md';

test('a sound apfigure spec of every kind lints clean', () => {
  const cases = [
    APFIG('graph', '{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}'),
    APFIG('numberline', '{"ariaLabel":"x > 3.","min":-1,"max":5,"marker":{"at":3,"type":"paren"},"shade":"right"}'),
    APFIG('figure', '{"ariaLabel":"A right triangle.","polygons":[{"points":[[0,0],[4,0],[0,3]],"rightAngles":[0]}]}'),
  ];
  for (const source of cases) {
    const errors = lintHugo(source, SECTION).errors.filter((e) => e.includes('apfigure'));
    assert.deepEqual(errors, []);
  }
});

test('apfigure rejects bad JSON, a bad kind, and a missing ariaLabel', () => {
  assert(lintHugo(APFIG('graph', '{not json'), SECTION)
    .errors.some((e) => e.includes('apfigure: spec is not valid JSON')));
  assert(lintHugo(APFIG('pie', '{"ariaLabel":"x."}'), SECTION)
    .errors.some((e) => e.includes('kind must be graph, numberline, or figure')));
  assert(lintHugo(APFIG('graph', '{"lines":[{"slope":1}]}'), SECTION)
    .errors.some((e) => e.includes('non-empty ariaLabel')));
});

test('apfigure builds every spec through the real engine and reports what fails', () => {
  // bounds inverted — buildGraph itself must reject this
  assert(lintHugo(APFIG('graph', '{"ariaLabel":"x.","xMin":5,"xMax":-5}'), SECTION)
    .errors.some((e) => e.includes('apfigure: spec does not build')));
  // unacknowledged smoothCurves — the engine names the freeform requirement
  assert(lintHugo(APFIG('graph', '{"ariaLabel":"x.","smoothCurves":[{"through":[[0,0],[1,1]]}]}'), SECTION)
    .errors.some((e) => e.includes('freeform: true')));
  // an unclosed apfigure is diagnosed as unclosed, not as a spec problem
  assert(lintHugo('{{< apfigure kind="graph" >}}\n{"ariaLabel":"x."}', SECTION)
    .errors.some((e) => /unclosed|closing/.test(e)));
});

// ---------------------------------------------------------------------------
// multiplechoice graph mode — spec-JSON options

const MC_GRAPH = (opts) => `{{< multiplechoice
  question="Which graph shows $y=2x$?"
  mode="graph"
  answerIndex="0"
  hint="Check the slope."
>}}
${opts.join('\n===OPT===\n')}
{{< /multiplechoice >}}`;

const LINE_SPEC = '{"ariaLabel":"The line y = 2x.","lines":[{"slope":2,"intercept":0}]}';
const CURVE_SPEC = '{"ariaLabel":"The parabola y = x squared.","quadratics":[{"a":1}]}';
const LEGACY_SVG = '<svg role="img" aria-label="A line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="0" y1="0" x2="10" y2="10" stroke="currentColor"/></svg>';

test('spec-JSON graph options lint clean, alone and mixed with legacy SVG', () => {
  for (const opts of [[LINE_SPEC, CURVE_SPEC], [LINE_SPEC, LEGACY_SVG]]) {
    const errors = lintHugo(MC_GRAPH(opts), SECTION).errors.filter((e) => e.includes('option'));
    assert.deepEqual(errors, []);
  }
});

test('a spec-JSON graph option is validated like an apfigure body', () => {
  assert(lintHugo(MC_GRAPH(['{not json', LINE_SPEC]), SECTION)
    .errors.some((e) => e.includes('multiplechoice(graph) option 0: spec is not valid JSON')));
  assert(lintHugo(MC_GRAPH([LINE_SPEC, '{"lines":[{"slope":1}]}']), SECTION)
    .errors.some((e) => e.includes('option 1: spec needs a non-empty ariaLabel')));
  assert(lintHugo(MC_GRAPH([LINE_SPEC, '{"kind":"pie","ariaLabel":"x."}']), SECTION)
    .errors.some((e) => e.includes('option 1: kind must be graph, numberline, or figure')));
  assert(lintHugo(MC_GRAPH([LINE_SPEC, '{"ariaLabel":"x.","xMin":5,"xMax":-5}']), SECTION)
    .errors.some((e) => e.includes('option 1: spec does not build')));
  // an in-JSON kind that IS valid routes to the right builder
  assert(lintHugo(MC_GRAPH([LINE_SPEC, '{"kind":"numberline","ariaLabel":"x > 3.","min":0,"max":5,"marker":{"at":3,"type":"open"},"shade":"right"}']), SECTION)
    .errors.filter((e) => e.includes('option 1')).length === 0);
});
