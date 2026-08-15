# Section Authoring Playbook (Hugo edition)

How to author a section in the Hugo build: pure Markdown + shortcodes. The
mechanical rules are enforced by the tooling (`npm test`, `npm run
verify-section`) — author, run the verifier, fix what it reports. You should not
have to memorize the mechanical rules; the lints know them.

This playbook describes the repository's current Hugo architecture. Content is
plain Markdown with Hugo shortcodes; React, JSX, MDX, and Nextra metadata are
not valid authoring syntax.

## Scope

This playbook currently governs the OpenStax mathematics books (Prealgebra 2e,
Elementary Algebra 2e, Intermediate Algebra 2e). Its structural, source-first,
component, and verification rules are written to generalize to future
subjects. Its mathematical-notation rules and the prohibition on file-backed
instructional images are math-specific decisions: an image-dependent subject
such as Biology will need a reviewed subject playbook derived from this one,
with a deliberate media pipeline, image-accessibility policy, and matching
lints before any authoring starts.

## 0. Source-first workflow (required for AI agents)

Automated checks can prove that syntax renders and an authored answer grades
against itself, and `npm run verify:answers` additionally cross-checks
mathematical consistency for roughly half the corpus (solve prompts by
substitution, evaluate-at prompts by substitution, re-expression prompts by
value equivalence — all numeric, against the printed question only). They
cannot prove that the transcription is faithful, and the cross-check cannot
see word problems, rounding asks, or anything whose subject lives in prose,
so independent solving against the source Answer Key remains required.

Before writing:

1. Read `AGENTS.md`, this playbook, and—when applicable—the Knowledge Check
   playbook. Inspect `git status` and preserve unrelated work.
2. For an OpenStax math book listed in
   `data/openstax/math-source-lock.json`, follow
   `docs/openstax-source-workflow.md`: use the pinned CNXML as the
   semantic/transcription authority and render the corresponding local PDF as
   edition evidence and the visual authority. Numbered sections resolve to
   modules through `data/openstax/math-source-map.json`; current upstream
   `main` is only an update candidate. For a source not covered by the lock,
   use the local source PDF as the content authority.
3. Keep a source ledger in working notes. For locked OpenStax material, record
   the module ID; IDs for retained or adapted exercises, problems, and
   solutions; and IDs for any disputed source elements. Also record the PDF
   page range, source section and exercise number, official answer location,
   component used, and any response-mode adaptation.
4. Preserve the source's objectives, exposition, definitions, procedures,
   examples, and mathematics. Omit only material explicitly allowed by the
   request/playbook. Never silently invent, condense, or “repair” source
   content. If the CNXML, PDF, official answer, and independent calculation
   disagree, stop and record the discrepancy with the evidence before choosing
   a reviewed resolution. Repairing the source is not an option even when the
   source is wrong: an exercise whose printed answer is defensible on the
   source's own terms ships as printed, and the defect gets logged (below)
   rather than edited away.
5. **Log confirmed upstream defects in `docs/openstax-errata.md` without
   asking.** Verify against the raw CNXML plus one independent check (the PDF,
   an answer key, or a parallel module), then write the entry — module id,
   element id, current text, why it is wrong, suggested correction — before
   handing the work back. Dismissed suspicions go in that file's "Reviewed and
   *not* errata" list with the reason. The file is gitignored, so this never
   affects the site or a commit. A subagent scoped to one content file reports
   its defects to the parent, which owns the errata file.
6. For chapter-sized work, divide by section. Each worker must read the same
   playbook, inspect its own source module and PDF pages, run its section
   verifier, and return its source ledger plus any upstream defects it found.
   The parent reconciles every section, logs the defects, and runs the
   book-wide gates.

Existing sections authored before July 22, 2026 whose attribution footer
explicitly discloses light condensation are grandfathered. Do not rewrite them
solely to remove that disclosed condensation. New sections and substantive
revisions follow the source-fidelity rule above; never use the grandfathering
exception to justify new omissions.

## 1. Where the file goes

```
content/<subject>/<book>/<NN>-<chapter-slug>/<NN>-<section-slug>.md
```

- Section landings (book cover, chapter overview) are `_index.md`, not
  `index.md`.
- Ordering is by frontmatter **`weight`**.
  Give each section the weight matching its `NN` prefix. At book level,
  chapters and Knowledge Checks share one sequential weight order: insert a
  Knowledge Check immediately after its ending chapter, then continue with the
  next unused weight. A chapter's weight therefore may differ from its chapter
  number after an earlier Knowledge Check.
- Sidebar label defaults to the frontmatter `title`. Set `linkTitle:` only if
  the sidebar label should differ.
- Numeric prefixes are zero-padded, start at `01`, sequential, no gaps. The
  validator enforces this.

Frontmatter for a numbered section:

```yaml
---
title: Add and Subtract Fractions with Common Denominators
description: >-
  One to two sentences summarizing the section.
source_section: "4.4"   # the section number in the SOURCE textbook
weight: 4
---
```

Book root `_index.md` also needs `license:` and `source:` (and carries
`cascade: {type: docs}` so the whole book gets the docs sidebar). Chapter
`_index.md` needs `source_chapter:`. Knowledge-check pages need
`source_chapters:` (e.g. `"1-6"`). `npm run validate` checks all of this.

Every numbered section opens with its objectives callout, stating **one
objective per Markdown list item**:

```md
{{</* callout type="info" */>}}
**By the end of this section, you will be able to:**

- Identify counting numbers and whole numbers
- Model whole numbers
- Round whole numbers
{{</* /callout */>}}
```

The list is not cosmetic. It is the anchor for the section-final `## Practice`
block, which gives every objective its own group, so `npm run validate`
rejects a prose sentence here — an objective may itself contain a comma, and
a run-on callout cannot be split back into objectives. Enumerate the source's
objectives one for one: merging two into a single phrase ("use place value to
name and write whole numbers") hides one from the coverage rule, and
`source:check` flags the count divergence. Keep the wording of an objective
whose source text is flattened MathML in KaTeX (`$a^{m/n}$`). Where the local
page deliberately omits an objective, record the decision in
`data/openstax/math-reconciliation-decisions.json` with
`covers: ["objective-needs-review"]`.

Every chapter `_index.md` contains a reader-facing overview in this exact
shape:

```md
## Sections

- **Section title** — concise description derived from the section objectives.
```

List every authored section once. Do not copy visible print prefixes such as
`10.1`, and do not fall back to a bare linked outline or title-only bullets.
The content lint enforces the descriptive bullet shape.

## 2. Writing patterns

- **Math:** KaTeX — `$...$` inline, `$$...$$` display (multi-line `$$` fenced on
  their own lines). Group digits with `{,}` in **every number of four or more
  digits**: `$1{,}000$`, `$37{,}519{,}248$`. Four-digit calendar years are the
  one exception and stay bare (`$2012-2009$`) — the same reason figure axes
  take `xTickGrouping: false`. Group four-digit numbers in prose and Markdown
  tables too, with an ordinary comma (`2,160`). The lint warns on an ungrouped
  run of four or more digits inside math; because nothing distinguishes a year
  from a quantity, it skips four-digit values in the 1000–2099 band, so that
  narrow case is on the author. Plain prose
  numbers need no `$`. A literal dollar sign (money) is `\$`, and it only
  works in prose or inside a `$$…$$` block — inside inline `$…$` Hugo's
  passthrough ends the run at the escaped dollar and hands KaTeX a truncated
  expression. Write money amounts outside the inline math (`\$10{,}000`), or
  name the unit in the surrounding sentence.
- **Fractions: `\tfrac` everywhere** — inline, in **Check:** sentences, and
  inside `$$` arrays. `\dfrac` is banned and plain `\frac` inside an array
  renders too tall; the lint enforces both. Nested fractions use `\cfrac` in a
  display block.
- **Absolute value in a table row: `\lvert`/`\rvert`, never `|`** — Goldmark
  splits a table row into cells on `|` before it parses any inline math, so a
  bar written as `|` ends the cell instead. A body row silently grows phantom
  columns and loses its tail; a header row that splits no longer matches its
  delimiter row and the whole table degrades to a paragraph of raw pipes. Write
  `$f(x)=\lvert x\rvert$` and `$6\left\lvert xy\right\rvert$` — both render the
  same bars, and `\lvert`/`\rvert` carry the delimiter semantics `|` does not.
  The lint enforces this on any line that begins a table row.
- **Worked-example step tables:** align relations with `\begin{array}{lrcl}`,
  rows `explanation & LHS &=& RHS \\[4pt]`. Separate steps with `\\[4pt]` (the
  lint rejects bare `\\` in `{lrcl}` arrays).
- **Prose inside math needs TeX spacing:** ordinary spaces outside
  `\text{...}` disappear. Write `\text{If }n^2=m` or
  `\text{If}\ n^2=m`, and use `\ ` between adjacent text commands. Never rely
  on source whitespace in `\text{If} n`, `m \text{is}`, or
  `\text{square}\text{root}`. The lint catches high-confidence joins; the
  rendered page is the final check.
- Unlike MDX, a literal `{` in prose is harmless in Hugo — only `{{` starts a
  shortcode. So set notation like `{3, 6, 9}` is fine in prose (though math sets
  still read best as `$\{3,6,9\}$`).

## 3. Exercises and components (shortcodes)

**Fill-in (free-response math, graded in the browser):**

```
{{</* fillin
  question="Find the sum: $\tfrac{3}{6} + \tfrac{2}{6}$"
  answer="\frac{5}{6}"
  answerDisplay="$\tfrac{5}{6}$"
  hint="Add the numerators and keep the same denominator."
*/>}}
```

LaTeX in `answer` uses a **single** backslash (Hugo passes shortcode params
verbatim — no MDX doubling). `question`/`hint`/`answerDisplay` support inline
`$...$`. The verifier runs every `answer` through the real grader: it must
self-grade `correct`.

Every regular-section exercise needs a concise, strategy-oriented `hint`.
Knowledge Checks deliberately omit hints.

When a prompt asks for an unordered collection of roots or solutions, add
`answerMode="unordered"`:

```
{{</* fillin
  question="Solve $x^2=9$. Enter both solutions, separated by a comma."
  answer="-3,3"
  answerMode="unordered"
  answerDisplay="$x=-3$ or $x=3$"
  hint="Use the Square Root Property and include both signs."
*/>}}
```

Use this mode only when order has no mathematical meaning. Ordered pairs,
ordered triples, coordinate lists, sequences, and prompts that explicitly ask
for larger-first/smaller-first order must keep the default ordered grading.

The lint enforces that the ordered/unordered choice is deliberate for every
comma-separated answer:

- A bare list graded in order must **tell the learner the order** in the
  question — an explicit direction ("least to greatest", "the y-intercept
  first") or an instruction that names the quantities ("Enter the length and
  width, separated by a comma"). If the question gives no order, add
  `answerMode="unordered"` or rephrase.
- A list of variable equations (`answer="x = 2, x = 3"`) is a solution set —
  it always needs `answerMode="unordered"`. The grader unwraps `x = 2` per
  member (a learner may type `2, 3` or `x=3, x=2`) and rejects a wrong
  variable.
- An answer whose commas all read as digit grouping (`answer="40,100"`) is
  graded as the single scalar 40100 — write the scalar without commas and put
  the grouped form in `answerDisplay`.
- Inside any list answer, write members without digit-grouping commas
  (`1536`, not `1,536`); learners may still type either form.

**Re-expression prompts need `answerForm`.** Value grading accepts any input
mathematically equal to `answer`, so a prompt that asks the learner to restate
a printed value in another form — simplify a fraction, convert a percent to a
decimal, write a prime factorization — has an answer that is value-equal to the
printed subject *by construction*. Typing `86` passes "Find the prime
factorization of $86$", and retyping the printed fraction passes "Simplify:
$-\tfrac{40}{88}$". No choice of numbers avoids this; only grading the shape
does:

```
{{</* fillin
  question="Simplify: $-\tfrac{40}{88}$."
  answer="-\tfrac{5}{11}"
  answerForm="lowest-terms"
  hint="Divide out the common factor of $8$."
*/>}}
```

`answerForm` is a space-separated set of requirements, all of which must hold,
so an ask like "convert to an improper fraction in lowest terms" composes from
the two independent things it names:

| Token | Requires |
|---|---|
| `fraction` | written as $\tfrac{a}{b}$, not a decimal |
| `decimal` | a plain decimal numeral |
| `percent` | ends with the $\%$ sign — for "enter the percent, including the % sign" asks, where $0.62$ and $62\%$ are the same value |
| `rational-exponent` | the WHOLE response is `coefficient? base^rational`, one term and one factor, the exponent a non-integer *by value* ($^{2/2}$ is the integer 1) and the base a variable or a group holding one — the radical→exponent conversions are value-identical by design |
| `radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}`, one term and one factor, no exponent on the radical, an integer index $\ge 2$, and a variable in the radicand — the mirror conversion, otherwise passable by retyping the printed exponent form |
| `exact-log` | the WHOLE response is `integer? logarithm` or `\frac{logarithm}{logarithm or integer}`, optionally plus or minus one integer, each logarithm taking a single numeral or variable — **and no decimal point anywhere** — for "enter the exact answer" asks whose key is a logarithm |
| `exact-radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}` with no decimal point anywhere, and `simplified-radical` besides — for "enter the exact form" asks whose key is a radical. `simplified-radical` alone cannot serve them: it passes any response holding no radical, including the rational-arithmetic approximation $\tfrac{1140175425099138}{100000000000000}$ |
| `summation` | the WHOLE response is `coefficient? \sum_{lower}^{upper} body`, one term and one factor, both bounds written — "write the sum using summation notation" is otherwise passable by retyping the printed expanded sum |
| `single-logarithm` | exactly one logarithm in one term, and the term IS the logarithm (no outside coefficient — $2\log_2\sqrt{5x/y}$ is the Power Property left unapplied) — "condense to one logarithm" is otherwise passable by retyping the printed multi-log sum |
| `mixed-number` | a whole number and a proper fraction |
| `improper-fraction` | $\tfrac{a}{b}$ with $\lvert a\rvert \ge \lvert b\rvert$ |
| `fraction-or-mixed-number` | either shape — for a source ask that offers the choice |
| `lowest-terms` | numerator and denominator share no factor |
| `scientific-notation` | $a \times 10^{n}$ with $1 \le \lvert a\rvert < 10$ |
| `prime-product` | a product of prime powers |
| `single-power` | one $a^{n}$, not a product or nested power — for "Simplify $(3^8)^2$, write the answer as a power of 3" |
| `expanded` | a sum of terms, not a product/power/quotient — for "Multiply: $(w+5)(w+7)$"; still allows a remainder term |
| `single-term` | one monomial: one coefficient, each variable once, no written $\cdot$, no top-level $+$, no $\,^0$ factor |
| `single-fraction` | one quotient, no $\div$ and no top-level $+$; reduced when both halves are monomials |
| `reduced-fraction` | exactly one $\tfrac{a}{b}$ with no common polynomial or integer factor across the bar — for "Simplify $\frac{x^2-x-2}{x^2-3x+2}$"; a half the checker cannot read as an integer-coefficient polynomial passes on its value alone |
| `no-like-terms` | a sum in which no two terms share a variable-and-power signature |
| `polynomial` | no fraction bar at all — for a difference of fractions answering to a polynomial |
| `distributed` | no parentheses left to multiply out |
| `simplified-radical` | power-free radicands (perfect $n$th-power factors extracted, sign included: $\sqrt[3]{-108}$ fails on its 27), like radicals combined, nothing radical under a fraction bar, no unevaluated numeral arithmetic or fraction under a radical ($\sqrt{64+225}$, $\sqrt{\tfrac{25}{16}}$), no same-index product of radicals in one top-level term, explicit ($\sqrt{3}\cdot\sqrt{6}$) or juxtaposed ($\sqrt[4]{12y^3}\sqrt[4]{8y^3}$ — rationalized-fraction numerators keep theirs), and no fractional/decimal exponents or decimal literals (radical notation is the form) |
| `factored` | a product of at least two factors, at least one multi-term — for "Factor: $x^2+6x+8$" |
| `point-slope-form` | one equation, one side the bare output variable plus at most a constant, the other a single $m(x-x_1)$ term (either orientation) — for "Write the point-slope form…", where the engine grades the distributed and scaled restatements equal; the collapsed origin case $y=mx$ passes |
| `slope-intercept-form` | after an optional written `y=`/`f(x)=` label, at most one $mx$ monomial plus at most a constant — for "Write the equation in slope-intercept form", whether the answer is authored as the equation or as the bare expression following $y=$ |
| `vertex-form` | one $a(x-h)^2+k$ term shape (either orientation, optional written `y=`/`x=`/`f(x)=` label): exactly one squared-binomial term plus at most a constant — for "Write $y=2x^2+4x+5$ in standard form" |
| `conic-standard-form` | an equation with one side exactly $1$ and the other a sum/difference of $\ge 2$ fractions, each a coefficient-1 squared term ($x^2$, $(y-k)^2$) over a positive integer — for ellipse/hyperbola "write in standard form" |
| `circle-standard-form` | two coefficient-1 squared terms against a positive integer — $(x-h)^2+(y-k)^2=r^2$ for the circle asks |
| `exponential-form` | no logarithm left — for "convert from logarithmic to exponential form", where both statements grade equal |
| `expanded-logarithms` | every written $\log$ takes a single number or variable — for "write $\log_5 25ab$ as a sum of logarithms" |
| `denominator:<n>` | that exact denominator — for equivalent-fraction asks, which are deliberately **not** reduced |
| `solved:<variable>` | one written equation with that variable alone on one side and absent from the other — for "Solve the formula $7x+y=11$ for $y$", where equation-equivalence grading accepts the printed formula retyped back; the variable is named because a formula can arrive already solved for the *other* side ($x=5y-10$) |

A right value in the wrong shape reports back as "That value is right — now
write it in lowest terms", so the learner is told what is missing rather than
that they are wrong. A wrong value is still just wrong.

Which evidence the requirement is checked against depends on what it separates.
A **numeral** form is checked against the LaTeX, because the Compute Engine
erases exactly that distinction: `\frac{40}{88}` parses to `["Rational",5,11]`
and `2^4\cdot5` to `80`. A **symbolic** form is checked against the parse,
where the opposite holds — there is nothing to evaluate in `(x+2)(x+4)`, so it
stays a product while the expanded `x^2+6x+8` stays a sum.

`factored` is a shape check, not a completeness check: `2(2x^2+8x+8)` satisfies
it. That is deliberate. A GCF-only exercise ("factor by taking out the greatest
common factor") correctly answers `-7a(a^2-3a+2)`, and a rule demanding full
factorization would reject it — firing on sound content, which §5 calls a bug
in the rule. Ruling out the printed polynomial is the whole job.

The lint rejects a re-expression prompt with no `answerForm`, and
`verify-section` rejects an answer that does not satisfy the form it declares
— an exercise that would reject its own answer. Where the response is not a
re-expression at all, `multiplechoice` is the right component: the learner
picks among forms.

Retyping a printed *expression* ("Add: $3+5$", "Simplify: $b^9\cdot b^8$",
"Simplify: $\frac{x^2-x-2}{x^2-3x+2}$") grades correct too, and is flagged the
same way: the lint grades every printed subject of a re-expression verb as a
submission under the declared form. The class-by-class record is in §6.

**A categorical answer is never a number.** "Is $7{,}248$ divisible by $5$?
Answer $1$ for yes or $0$ for no" grades a legend rather than the choice and
lets a coin-flip pass. Use `multiplechoice` with the alternatives themselves as
options (`yes`/`no`, `rational`/`irrational`, `Quadrant I`–`Quadrant IV`). The
lint rejects a fill-in whose question maps digits to named alternatives.

**Brace every multi-character exponent in `answer`.** TeX reads `y^10` as
`y^1` followed by a literal `0`, so the answer grades as a different value and
the learner who types the correct $y^{10}$ is told they are wrong. Nothing else
in the pipeline catches this: `verify-section` compares the answer against
itself, so a malformed one still self-grades, and a correct `answerDisplay`
(`$y^{10}$`) makes the page look right on review. Write `y^{10}`, `7^{14}`,
`10^{-3}`. The lint rejects both an unbraced multi-digit exponent and an
unbraced negative one.

Every retained source “Try It” or check must become a real `fillin`,
`multiplechoice`, or `graphplot` component. Never ship a static prompt followed
by `<details><summary>Check answer</summary>` or plain answer prose. Choose the
component that matches the learner's response; if the source interaction cannot
be represented faithfully, choose another source item or record the smallest
response-mode adaptation in the source ledger.

Learner-facing fields contain the exercise itself, not print UI:

- Remove prefixes such as `Try It 10.17.` from `question`, `hint`, and
  `answerDisplay`; retain the source number in the ledger.
- A standalone prompt does not keep a source part marker: write
  `Simplify $x^2$`, not `Simplify: (a) $x^2$`.
- Split a genuine multipart task into separate components unless one combined
  response is pedagogically necessary and supported by the grader.

Keep each consecutive interactive practice set to **2–3 questions maximum**,
counting fill-ins, multiple-choice questions, and graphing questions together.
Choose prompts that cover the example's distinct skills instead of repeating
near-identical arithmetic. Dedicated `knowledge-check-XX-YY.md` pages are exempt
because they are cumulative assessments, and so is the section-final
`## Practice` block defined below.

**Multiple choice (text mode)** — options are one per line in the body; `answer`
must match an option string exactly:

```
{{</* multiplechoice
  question="Which symbol goes at the endpoint of $x > 2$?"
  answer="parenthesis"
  hint="Is $2 > 2$ true?"
*/>}}
parenthesis
bracket
{{</* /multiplechoice */>}}
```

**Multiple choice (graph mode)** — "which graph is correct?". Options are
prerendered `<svg>` blocks separated by a line `===OPT===`, with
`answerIndex` (0-based). Generate each option SVG with the figure helper
(below). Every option needs an `aria-label`.

**Graph it yourself (GraphPlot):** config (answer + grid) is JSON in the body.

```
{{</* graphplot
  question="Graph the line $y = -4x$ by placing two points on it."
  answerDisplay="$y = -4x$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="The line passes through the origin."
*/>}}
{"answer": {"slope": -4, "intercept": 0}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{</* /graphplot */>}}
```

`answer` shapes: `{slope,intercept}`, `{x}`, `{y}`, `{system:[…]}`,
`{quadratic:{a,b,c}}`.

GraphPlot configuration is validated during `npm test`: grid bounds and steps
must be finite, minimums must be below maximums, snap/grid/tick steps must be
positive, and the answer shape must match one of the supported forms.

**Callouts / cards** (Hextra shortcodes):

```
{{</* callout type="info" */>}}
**Note.** Body markdown, including $math$.
{{</* /callout */>}}
```

**Static figures (Graph / NumberLine / Figure):** these are prerendered SVG.
Hugo can't run the geometry at build time, so generate the SVG with the helper
and paste the `<div class="ap-figure">…</div>` block it prints:

```
node tools/render-figure.mjs graph '{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}'
```

The accepted JSON properties map to the `buildGraph`, `buildNumberLine`, and
`buildFigure` helpers in `assets/js/lib/graph-core.mjs`. Every figure MUST
carry an `ariaLabel`.

**Draw known shapes with their analytic primitive, never a spline
approximation.** `buildGraph` has exact primitives: `lines`, `quadratics`
(including `sideways`), `cubics`, `polynomials` (a `coeffs` array
$[a_0,a_1,\dots]$ for any degree, so a fitted quartic or quintic renders
from its exact formula), `rationals` (a `num`/`den` coefficient pair, whose
branches split at each pole on their own), `circles` (a real SVG ellipse),
`polylines`
(straight joins — required for corners such as $y=\lvert x\rvert$), and
`curves` with kinds `sqrt`, `cbrt`, `reciprocal`, `reciprocal-squared`,
`sine`, `exp`, and `log` (each accepts `a`, `h`, `k` for $a\,f(x-h)+k$;
`sine` adds `b` and draws $k+a\sin\bigl(b(x-h)\bigr)$, while `exp` and `log`
take `b` as the base and draw $k+a\,b^{x-h}$ and $k+a\log_b(x-h)$). Quadratics, cubics, polynomials, and
curves accept `from`/`to` to trim the drawn domain, e.g. to end a curve with
an arrow mid-grid the way source art does. Match the source's arrow
conventions: no arrowhead where a domain actually ends (the origin of
$\sqrt{x}$), and helper/test lines (`lines` entries used as guides) usually
render plain in the PDF — pass `arrows: false` on them. `segments` take
`arrows` too, for the labelled "Domain"/"Range" extent rays drawn beside a
graph.

When a graph's window never reaches the origin — a year axis, a dollar axis —
`tickLabels` still labels both axes along the drawn edges. Turn digit
grouping off per axis with `xTickGrouping: false` so a year reads 1975 rather
than 1,975.

`buildNumberLine` draws a single boundary with `marker` + `shade`, and any
compound set — $(-\infty,2)\cup(2,\infty)$, $[1,3]\cup(5,\infty)$ — with
`intervals`: one entry per heavy stretch, each `{ from?, to?, fromType?,
toType? }`. Omit `from` or `to` to run that end to the arrow, and mark
excluded endpoints `'open'` so they render hollow.

**A "generic" source curve is still a function: fit a formula, then render
the formula.** When the source shows a freeform-looking curve (a wavy
vertical-line-test graph, a smooth curve through labeled points), model it
with an explicit analytic function — fit a cubic through the labeled points
and stated extrema, or use a `sine` curve for a wave — and record the fitted
formula in the source ledger. Do not trace it with `smoothCurves`: its
shape-preserving spline pins a zero tangent at every extremum and is only
$C^1$ at the knots, which renders visible flat plateaus and curvature kinks
— the "hand-drawn" look. `smoothCurves` is a last resort for source art
that truly has no formula; it now requires `freeform: true` in each entry,
and the content lint warns on its rendered output and rejects an
unacknowledged `smoothCurves` in a figure spec. Passing a circle or a V
through it rounds corners and flattens extremes, and
`tools/graph-core.test.mjs` guards this geometry.

The helper prints the figure with its generating JSON in a `data-spec`
attribute on the `ap-figure` div. Paste the whole block verbatim and keep
the attribute: it makes every figure reproducible, reviewable against the
PDF, and lintable. The lint validates a present `data-spec` (it must parse,
and any `smoothCurves` entry must carry `freeform: true`).

Do not paste or download textbook equation images into content. Write equations
as KaTeX, recreate tabular relationships as Markdown tables, and use the figure
helper for diagrams and graphs so its accessible SVG is embedded directly in
the page. File-backed Markdown/HTML images, raster formats (`.png`, `.jpg`,
`.webp`, and similar), and inaccessible inline SVGs are rejected by the
content lint.

Recreated graphs and diagrams still require visual comparison with the PDF.
Check geometry, labels, axes, endpoints, direction, and dark-mode contrast; a
valid accessible SVG can still be mathematically wrong.

### The section-final `## Practice` block

Every numbered section closes with a `## Practice` heading. It is the **last
heading before the attribution footer**, sitting *after* the section's end
matter (`## Key equations`, `## Key concepts`, `## Key terms`, …): a reader
reviews the key terms and concepts first, then attempts the practice. In a
section with no end matter, `## Practice` still closes the section.

End matter is written as headings, never prose. A bold paragraph such as
`**Key terms.** …` on its own line is a lint error: convert it to a
`## Key terms` heading followed by the same content with the bold prefix
dropped, keep the wording verbatim, and place it with the rest of the end
matter — before `## Practice`.

Inside it, **one `### ` group per section objective, in the order the
objectives callout lists them, each holding at least two interactive
exercises** (`fillin`, `multiplechoice`, and `graphplot` in any mix). Each
group heading repeats its objective verbatim; the lint compares them ignoring
case, spacing, and trailing punctuation. A section needs at least five
exercises overall, so a one- or two-objective section carries more than the
per-objective minimum:

```md
## Practice

### Identify the place value of a digit

{{</* fillin question="…" answer="…" hint="…" */>}}

{{</* fillin question="…" answer="…" hint="…" */>}}

### Round whole numbers
…
```

The size scales with the section rather than being a flat count: a
six-objective section cannot cover its objectives in five questions, and a
multipart source item expands into one exercise per part.

- **Source.** Select from the source textbook's end-of-section exercise sets
  ("Practice Makes Perfect" / Section Exercises), using only items whose
  answers are visibly present in the official Answer Key. OpenStax often
  prints only odd-numbered answers, but parity can change by chapter —
  inspect the actual key pages rather than assuming. Record every item in the
  source ledger with the same evidence required for any retained exercise,
  and independently solve each one against the key. Supply is not the
  constraint: the mapped corpus averages 45 answered exercises per section
  against a minimum demand of about 8.
- **Coverage.** Every objective gets its own group. Where an objective's own
  exercise group is thin, draw a covering item from the section's Mixed
  Practice or Everyday Math group rather than repeating one skill.
- **Multipart items.** Expand a multipart source exercise (ⓐ–ⓔ) into one
  component per part, kept adjacent inside its objective's group; every part
  counts toward that group's minimum. Do not reduce a multipart item to a
  single part. Where one multipart item would satisfy a group on its own and
  its parts are near-identical drill, prefer two distinct source exercises.
- **Never merge separate source exercises into one component.** The rule above
  runs both ways: one component per source exercise, or per part of one. Do
  not fold two or three independent items into a single question with a tuple
  answer (`answer="(11,125,2)"`), and do not build a multiple choice whose
  options each bundle several unrelated conversions. Merging hides items from
  the coverage rule and produces answers no learner would enter. A combined
  response is allowed only where the source item itself asks for one ("give
  the center and the radius"), and then the question must name the order of
  the entries. Check the CNXML before assuming: consecutive `<exercise>`
  elements under one "In the following exercises…" instruction are separate
  items, not ⓐⓑⓒ parts — only markers inside a single `<exercise>` are parts.
- **Hints.** These are regular-section exercises: every one needs a concise,
  strategy-oriented `hint`.
- **Cap exemption.** Practice-block questions are exempt from the 2–3
  consecutive-question limit. The limit still governs the in-page practice
  sets that follow worked examples.
- **Attribution.** Update the section's footer "Changes:" note to disclose
  that selected end-of-section exercises were adapted into interactive
  practice; a footer claiming the end-of-section exercises were omitted is
  stale once the block exists.

Every numbered section carries the block, and the content lint reports a
missing one as an **error** naming that section's minimum. A present-but-
malformed block — an under-filled group, a group that is not an objective,
groups out of order, an exercise outside any group, too few exercises
overall, wrong placement, or a duplicate heading — is a lint error too.

### Notation the grader cannot take yet

The Compute Engine's LaTeX reader, not this repository, sets these limits.
Each was confirmed by running the notation through the real grader. Three of
them fail LOUDLY — `verify-section` reports the answer as ungradeable, so the
page cannot ship — and one used to fail silently until the nonsense-parse
guard was added. Do not spend authoring time fighting them; write the exercise
another way, or extend `preprocess()` first and add the test with it.

| Notation | Where it would arise | What happens |
| --- | --- | --- |
| `\langle a,b\rangle` | vector component form | parses invalid |
| `\binom{n}{k}` | binomial theorem | parses invalid |
| `\lim_{x\to0^+}` | one-sided limits | parses invalid |
| `{}_nP_r`, `{}_nC_r` | permutations, combinations | parses as a nonsense product; caught by the nonsense-parse guard in `verify-section` |
| `D`, `N` as variables | `D` for distance, `N` for a count | reserved by the engine as the derivative and numeric-evaluation operators; any answer using them is ungradeable. Rename the variable (`d`, `n`). |

`^\circ` is exact, not decorative: the engine converts it, so `30^\circ`
and `\frac{\pi}{6}` are the same value and each is accepted for the other.
A prompt that must have degrees (or must have radians) cannot get that from
the value check — say so in the question.

`{{< graphplot >}}` grades three answer shapes only — a line, a system of two
lines, and a quadratic. Any other curve (exponential, logarithmic, sinusoid,
conic, polar) needs a static inline SVG figure with a `fillin` or
`multiplechoice` question about it, not an interactive plot.

## 4. Verify (the workflow)

From the repository root:

1. Reconcile the finished page against the pinned CNXML, source ledger, and PDF
   images: objectives, examples, math, figures, retained exercises, and
   official answers must all match or have an explicit reviewed decision.
2. Independently solve every touched interactive question and compare both the
   prompt and answer with the source Answer Key. Do not infer correctness from
   self-grading.
3. `npm run verify-section -- content/<subject>/<book>/<ch>/<sec>.md`
   — lints, renders every math run, and confirms that each fill-in answer is
   parseable by the real grader. Fix every ✗. Warnings on a page you authored
   or revised are defects, not backlog: clear them, or say in the handoff
   which pre-existing ones you left and why (§5).
4. Run `npm test`. It includes whole-repository structure validation,
   per-page real-grader verification, the corpus-wide answer cross-check
   (`npm run verify:answers` — every mechanically checkable answer is
   re-derived numerically from its own question), unit tests, repo-wide
   authoring lints, documentation consistency checks, and KaTeX parsing.
   `npm run validate` remains available as a focused structure-only command.
   A cross-check failure means the answer disagrees with the printed
   question: solve it independently before touching either side, and if the
   checker is wrong about sound content, narrow the checker (§5 rules).
5. For chapter/bulk work, run `npm run build` and `npm run check:build` (or
   `npm run ci`). The production audit checks, among other things, that math
   pages load the pinned KaTeX CSS and that its hidden accessibility layer
   cannot appear as duplicate visible math.
6. Open every changed page with `npm run serve`. Confirm real components
   render and grade, prose/math spacing is visible, formulas appear once, and
   figures match the PDF. Also open a changed chapter landing page.
   `node tools/screenshot-page.mjs <route>` captures light/dark full-page
   shots plus a high-zoom crop of every figure and fails on duplicate KaTeX
   or unlabelled SVGs — use the crops for the figure-vs-PDF comparison, and
   inspect curve tips and corners at zoom, where spline and stroke defects
   hide.
7. Run `git diff --check` and report the changed/untracked files plus the
   source ledger and pages visually checked. Do not commit unless asked.

## 5. Working rules

`npm run lint` reports **zero errors, and errors are all there is** — the
lint has no warning level. The last warning-level rules (missing hints,
multipart-looking questions, an empty worked Solution, all-same graph answer
positions) were promoted to errors on August 10, 2026, when the corpus
carried zero of each, and the warning channel was deleted with them. There is
no non-blocking rule left in the repository and no category of
known-defective content to grandfather.

The Practice retrofit that used to live here is finished. All 212 mapped
sections carry the block — prealgebra 60/60, elementary-algebra 71/71,
intermediate-algebra 70/70, and the eleven authored Precalculus 2e sections
(ch. 1 Functions 7, ch. 2 Linear Functions 4), which landed on August 9,
2026. The lint rule was promoted from a warning to an error the same day, and
the published backlog count was deleted along with the `--check-docs` flag
and the tooling that maintained it. Precalculus 2e's ten scaffolded chapters
will each need their blocks as their section pages land — but as an error on
the page being written, not as a worklist.

Everything else that used to live here has been fixed rather than documented:
numerically coded categorical answers are `multiplechoice`, four-digit numbers
are grouped, and figure curves come from analytic primitives. Two rules that
were over-firing were narrowed at the same time — an incidental value collision
is not a defect (the mode of a data set *is* one of the printed numbers), and
`\phantom{0000}` long-division spacing is not a number. The trivially
satisfiable fill-ins are closed class by class — the record is in §6.

The working rules that remain:

- **Never add a warning level back.** Every new rule lands as an error with
  the corpus already clean, or it does not land. A non-blocking tier in a
  diff is a review failure, not backlog.
- **No bulk regex fixes.** Where a rule names a pedagogical defect, its repair
  depends on the source exercise. Retrofit by section, verify by section.
- **A rule that fires on sound content is a bug in the rule.** Narrow it, with
  a test for the case it was wrong about — do not add an exemption for the
  page.
- **End the session with `npm run baseline:update`.** It runs both gates,
  recounts the `--min-verified` floor and the `--min-replayed` floor, rewrites
  each in place in `package.json`, and refuses to lower either without an
  explicit flag. Committing its rewrite with the content is what keeps
  `npm run ci` green without a hand-edited count. The two ratchet differently:
  `--min-verified` is an exact match (a move either way is news about what the
  cross-check can read), `--min-replayed` is a floor (the span count rises
  with ordinary authoring; only a drop means the replay gate went quiet).

## 6. Trivially satisfiable prompts: the remaining classes

A fill-in whose answer is value-equal to an expression printed in its own
question is passable by retyping the prompt. `answerForm` is the fix — it
grades the shape the value cannot distinguish — and a lint rule per prompt verb
is what stops new ones being authored. The two are inseparable: a rule may only
land once the content it governs is already clean, so each verb's rule ships
with that verb's retrofit.

Measured across the corpus, 1,761 fill-ins were passable this way — the sum of
the per-class counts below, which is the only figure that can still be checked
against a record. The classes were measured one at a time as each was
separated out, so read the table as the account and not any single headline
number. Every class is now closed — token, retrofit, and lint rule each:

| Class | Count | Needs | Status |
|---|---|---|---|
| Factor | 274 | `factored` | **done** — token, retrofit, and lint rule all landed |
| Numeric arithmetic | 566 | `decimal` / `fraction` / `lowest-terms` / `single-power` | **done** — same three parts |
| Multiply, Divide (algebraic) | 231 | `expanded`, `single-term`, `single-fraction` | **done** — same three parts |
| Simplify, Add, Subtract (algebraic) | 401 | `no-like-terms`, `polynomial`, `distributed`, `single-fraction` | **done** |
| Radicals | 207 | `simplified-radical` | **done** — and the numeral-radical/series gap in its lint scan is closed too (see below) |
| Reducing a rational expression | 47 | `reduced-fraction` | **done** — token, retrofit, and lint rule all landed |
| "Write it in standard form" | 26 | `vertex-form`, `conic-standard-form`, `circle-standard-form` | **done** — token, retrofit, and lint verb (August 9, 2026) |
| Logarithm conversion / expansion | 3 | `exponential-form`, `expanded-logarithms` | **done** — same three parts |
| Composition and page-context combinations | 6 | `distributed`, `no-like-terms`, `expanded` | **done** — `(f\circ g)(x)` builds a substituted candidate, definitions printed in page prose now reach the extractor, and `(fg)(x)` juxtaposition counts as the product ask |

Two things the numeric pass established that are worth carrying forward. The
measured 751 was 566 once the radicals and the incidental collisions were
separated out — a word problem whose answer happens to equal a printed quantity
("Jazmine ran 8 miles… find her running speed" → `8`) is sound content, and the
rule must never fire on it. And a token that closes a hole is not automatically
the right token: `lowest-terms` rejects a printed nested power, but its feedback
would tell the learner to reduce a fraction that isn't there. `single-power`
exists because the message has to match the ask, not just the shape.

Three rules the whole programme was built on. They are what a new token has to
respect.

**Choose the evidence by what the engine does to the distinction.** If the CAS
can *evaluate* the difference away, the predicate must read the LaTeX;
otherwise it should read the parse, which already knows about `\left(`,
juxtaposition and unary signs. `(x+2)(x+4)` survives as a product, so `factored`
reads the parse. `\frac{40}{88}` is evaluated to `\tfrac{5}{11}`, so
`lowest-terms` reads the LaTeX. Several tokens need both: `single-term` takes
the term structure from the parse and the written `\cdot` from the LaTeX,
because `\tfrac{3}{7}\cdot 21n` canonicalizes to its own answer.

**Gate each candidate path behind its own verb.** The rule in `tools/lints.mjs`
unions per-verb extractors deliberately. Widening a shared extractor instead
would put a thousand sound-but-untagged exercises in scope at once, and a rule
that fires on sound content cannot land in a lint whose every rule blocks.

**A token that closes the hole is not automatically the right token.** The
feedback has to name the step the exercise actually asks for. `lowest-terms`
rejects a printed nested power, but would tell the learner to reduce a fraction
that is not there — `single-power` exists for that reason alone. Check the
sentence `describeAnswerForm` will produce before settling on a token.

### The last class closed: `reduced-fraction`

Reducing a rational expression — "Simplify $\frac{x^2-x-2}{x^2-3x+2}$" to
$\frac{x+1}{x-1}$ — was the last class open. Prompt and answer are *both* a
single fraction; what separates them is cancelling a common polynomial factor,
which is a gcd computation rather than a shape, and the Compute Engine's
`simplify()` does not reliably perform it. The `reduced-fraction` predicate
computes it exactly: it reads the WRITTEN halves (the engine folds numeral
fractions before any predicate can see them), converts each to an
integer-coefficient polynomial (BigInt), and requires their multivariate gcd —
primitive-PRS Euclidean, so bivariate factors and opposite-sign binomials like
$2-x$ vs $x-2$ both count — to be the constant $1$. A half the reader cannot
digest (a decimal, a radical, an absolute value) FAILS OPEN to value grading:
a form check must never reject a correct answer it cannot read. The shape gate
is deliberately stricter than `single-fraction` — exactly one written
fraction, with no fraction bar (`\frac`, `\div`, or `/`) inside either half —
so a complex-fraction prompt and a `\tfrac{a}{b}^5` both fail the form and the
token can silence the lint on them.

The lint's former both-sides-single-fraction exemption is deleted, and the 47
are retrofitted: 42 tagged `reduced-fraction`, the rest resolved individually
(a quotient-to-a-power item became a multiple choice among fraction forms
because no token's feedback names that ask). One operational note survives the
closure: the re-expression rule checks the cheap declared form *before*
grading a candidate span through the engine, because grading is
value-then-form (a span the form rejects can never grade `correct`) and the
equivalence ladder's `simplify()` effectively never returns on a conjugate
radical quotient.

That non-termination is now also closed at runtime, where a learner reaches
it synchronously on the main thread by pasting a "rationalize a two-term
denominator" prompt (§9.5) back as the response. Measured against the pinned
0.58.0 the engine has two distinct hang sites, and `ce.timeLimit` interrupts
neither: `isEqual()` never returns once either operand keeps a
radical-denominator quotient ($\tfrac{\sqrt{2}}{\sqrt{x}-\sqrt{3}}$ — against
*any* comparand), and `simplify()` never returns on some differences of
variable-radical expressions with no radical denominator at all — the case
this note originally recorded. `equivalent()` in `lib/check-answer.mjs` now
routes both classes to bounded numeric sampling instead of the engine (see
the guard banner there), so a pasted conjugate prompt grades `form` — the
message the `answerForm` was built to produce — rather than freezing the
page. Sampling also decides where the engine merely false-negatived, which
surfaced two §6 retrofits the old false negatives had been masking: the
higher-roots two-term sum (now tagged `simplified-radical`, with the
like-radicals key refined to the source's own convention — same radicand
stays separate when the coefficients are unlike terms) and the
knowledge-check radical quotient whose answer keeps $\sqrt{y}$ under the
bar (now multiple choice, the resolution recorded above for the
quotient-to-a-power item). The lint's form-first ordering above remains
correct as the cheaper check.

### A seventh shape: the operation written but not carried out

Every class above is a printed *span* that equals the answer, and every
extractor asks the same question — "is something printed here also the
answer?". Intermediate Algebra ch. 5 authoring turned up a shape that question
cannot see: the hazard is a **combination** of two printed spans.

"For $f(x)=2x^2-4x+1$ and $g(x)=5x^2+8x+3$, find $(f+g)(x)$" prints neither
$7x^2+4x+4$ nor anything value-equal to it — and yet
`(2x^2-4x+1)+(5x^2+8x+3)`, the operation written but not performed, grades
`correct`. The learner types back what the question already told them and
never combines a like term. Three phrasings carry it, and each now has its own
extractor in `tools/lints.mjs` that **builds** the candidate rather than
finding it:

| Phrasing | Candidate built | Typical token |
|---|---|---|
| `find $(f\pm g)(x)$`, `$(f\cdot g)(x)$`, `$\left(\tfrac{f}{g}\right)(x)$` | the two definitions joined by that operation | `no-like-terms`, `expanded` |
| "Subtract $X$ from $Y$" | $(Y)-(X)$, in the order the wording fixes | `no-like-terms` |
| "…find the quotient when $A$ is divided by $B$" | $\tfrac{A}{B}$ | `expanded` |

Two boundaries are load-bearing, and both are asserted in
`tools/lints.test.mjs`. An ask evaluated at a *number* — `(f+g)(2)`, answer
$40$ — builds nothing, because no restatement of the definitions equals a
number. And "find the **remainder** when $A$ is divided by $B$" names no
quotient, so it stays out of scope; only the word "quotient" opens that path.

A division leaving a nonzero remainder needs no exception: $\tfrac{A}{B}$
simply is not equal to the quotient, so the grader rejects it and the rule
falls silent on its own arithmetic. That is the rule staying honest about the
exact-division case rather than special-casing around it.

The retrofit that shipped with the rule was 17 exercises in
intermediate-algebra ch. 5 and 6 more in the prealgebra and elementary-algebra
"Add and Subtract Polynomials" sections — all six of those the "Subtract $X$
from $Y$" wording, which is the one phrasing of the three that had spread
beyond ch. 5.

### The eighth shape closed: "write it in standard form"

Intermediate Algebra ch. 10–12 authoring (August 8, 2026) turned up the class;
it closed the next day the way every class closes — token, retrofit, and lint
verb together. "Write $y=-x^2+2x-4$ in standard form" answers $y=-(x-1)^2-3$,
and "Write $25x^2+9y^2-100x-54y-44=0$ in standard form" answers
$\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$ — both value-equal to the printed
subject by construction, because completing the square changes the shape and
not the value, so retyping the prompt graded `correct`. No pre-existing token
could separate them without also rejecting the correct answer.

Three tokens carry the class, because "standard form" names three different
target shapes and the feedback has to name the right one: `vertex-form`
($a(x-h)^2+k$ in either orientation, with an optional written `y=` / `x=` /
`f(x)=` label stripped off the LaTeX — the parse would read `f(x)=…` as an
equation on a function application), `conic-standard-form` (fractions of
coefficient-1 squared terms against exactly $1$; a numerator that keeps its
general-form coefficient, $\tfrac{9x^2}{144}$, fails because that division was
the ask), and `circle-standard-form` ($(x-h)^2+(y-k)^2=r^2$). The lint verb
matches "standard form" / "vertex form" / the spelled-out
"$f(x)=a(x-h)^2+k$ form" and feeds a new extractor over printed EQUATION
spans — the one span shape every other extractor deliberately excludes — and a
definition span `f(x)=RHS` also contributes its bare right-hand side, because
the learner answers without the label and the labelled span itself does not
grade equal to anything (the engine reads `f(x)` as an application, not a
variable). The verb is gated but loose; the equation-span extractor is what
keeps the prealgebra "write in standard form" number-words prompt and the
augmented-matrix ask out of scope, since neither prints a bare two-sided
equation.

The retrofit was 26 tagged exercises: the 19 in-page Try Its recorded when the
class was found (4 in `11-conics/02-parabolas.md`, 4 in `03-ellipses.md`, 4 in
`04-hyperbolas.md`, 7 in §9.7 — where the hazard span is the *right-hand side*
of the printed `f(x)=…` definition, which a whole-span replay misses), the
knowledge-check circle/vertex/hyperbola items, and the §9.7 vertex-from-a-point
items whose expanded forms would otherwise pass. The 11.1 circle asks and the
arch applications are tagged too: not retypeable, but a value-equal
non-standard equation (`x^2+y^2-121=0`, a doubled ellipse equation) passed
before the tags. The four ch. 11 Practice prompts that had been authored as
`multiplechoice` while the class was open remain multiple choice — sound
content, converted deliberately, recorded here so nobody "fixes" them back
without noticing they predate the token.

Closing the class surfaced a **worse** defect the self-grading gates cannot
see: five answers were authored as slash quotients with a juxtaposed factor —
`-1/20(x-20)^2+20` (four arch applications) and `y=1/2x-5/2`
(knowledge-check 01–06) — which the engine reads as $\tfrac{-1}{20(x-20)^2}+20$
and $y=\tfrac{1}{2x}-\tfrac52$. The authored value was not the intended one,
and a learner typing the intended answer was marked **wrong** (MathLive turns
a typed `/` into a real `\frac`, so the learner cannot even reproduce the
authored string). Both sides of the self-check mis-parse identically, which is
why no existing gate fired. The answers are rewritten with explicit `\frac`
and a lint rule now rejects any answer matching a slash quotient followed by a
juxtaposed letter, parenthesis, or macro.

The same sweep closed the last two blind spots in the re-expression scan
(playbook rule: fold every hole the sweep finds into the rule, not just the
instance). `printedPolynomialSubjects` now reads a `\sum` span — the sigma's
bounds are structure, and its `=` had been read as a relation, hiding "Find
the sum $\sum_{i=1}^{30}(6i-4)$" → `2670` — and counts a numeral radical as an
algebraic subject, which put every "Simplify: $\sqrt{\smash[b]{\cdot}}$"
numeral prompt in scope for the first time. That forced 30 retrofits
(`decimal` for integer answers, `fraction lowest-terms` for radical-free
fractions, `simplified-radical` for the rest) and three tightenings of
`simplified-radical` itself, which had been too weak to reject
$\sqrt{64+225}$, $\sqrt{\tfrac{25}{16}}$, $\sqrt{-8}$, $\sqrt{1}$, or
$\sqrt{3}\cdot\sqrt{6}$: numeral radicands reject unevaluated arithmetic and
fractions, the perfect-power scan reads through the sign, and a same-index
product of numeral radicals fails (numeral only — the corpus's own worked
answers keep $\sqrt{10}\sqrt{y}$ as a product). The composition asks closed
the same day: `(f\circ g)(x)` builds the outer definition with the inner one
substituted for `x`, definitions printed in page prose ("For the next three
questions, use $f(x)=6x+1$…") now reach the extractor as fallbacks — safe by
construction, since a wrongly paired definition builds a candidate that simply
never grades `correct` — and `(fg)(x)` juxtaposition counts as the product
ask.

To re-run the audit that found all of this: replay every math span printed in
a question back through `checkAnswer` against that exercise's own answer, one
file per process — the engine carries state across calls and will otherwise
report false positives — and for any span of the shape `label = RHS`, replay
the bare RHS too.

### The nested-application phrasing, and a token that was too weak

Precalculus 2e ch. 1–2 authoring (August 9, 2026) found two more holes in the
seventh shape, both in the same audit and both closed with the content that
exposed them.

The first is a **phrasing** the extractor could not read. `(f\circ g)(x)` was
in scope; `f(g(x))` — the nesting written out, which precalculus uses at least
as often — was not, so "Given $f(x)=2x^2+1$ and $g(x)=3x+5$, find and simplify
$f(g(x))$" was passable by typing `2(3x+5)^2+1`. `FUNCTION_NESTED_ASK_RE` now
feeds the same candidate builder, under the same guard: the inner argument
must be exactly `x`, because `f(g(2))` answers with a number no restatement
equals.

The second is a **token that was too weak for its ask**. `expanded` requires a
top-level sum — and `2(3x+5)^2+1` already is one, so it passed the form it
declared. The ask is "expand the square", which is what `distributed` names,
and `expanded distributed` composes to exactly the requirement. Two composition
exercises and one difference quotient were retrofitted (`no-like-terms
polynomial` for the quotient, since a difference quotient's hazard is the
fraction bar rather than a like term). The lesson generalizes the §6 rule
about naming the right step: a token whose *shape* the wrong answer already
satisfies is not a check, and only replaying the built candidate through the
declared form catches it.

Closing the phrasing surfaced its own over-fire, and narrowing it is the third
part. "Given $f(x)=\sqrt{x}+2$ and $g(x)=x^2+3$, find and simplify $f(g(x))$"
answers $\sqrt{x^2+3}+2$ — the substitution *is* the answer, with nothing left
to carry out, so writing it is the correct response. A built candidate that is
**structurally** the authored answer is therefore filtered out, the same way a
printed span identical to its answer already was ("Add: $5a+7b$"). Structural,
never value: `2(3x+5)^2+1` and `18x^2+60x+51` are equal in value and different
in shape, which is the whole hazard, so a value comparison here would silence
the class it was built to catch.

### The ninth shape closed: the ask that NAMES a form

The §2.1 point-slope finding (August 9, 2026) generalized into a class the
retype scan can never see: a prompt that **names** the target form while
printing nothing to retype. "Write the point-slope form of an equation of a
line that passes through $(1,5)$ and $(4,11)$" prints two coordinates — no
subject span exists — but the engine grades the distributed `y-5=2x-2` and the
scaled `2y-10=4(x-1)` equal to the authored `y-5=2(x-1)`, and grades any
value-equal expression (`3(x-4)+2`, `\frac{-x-6}{3}`) equal to a bare
slope-intercept answer. The hazard is the learner's own correct *value* in the
shape the ask exists to rule out.

Two new tokens carry the linear-equations half: `point-slope-form` and
`slope-intercept-form` (shapes in the token table above). The lint verb is a
table, `NAMED_FORM_ASKS`, mapping each named-form phrase to the token(s) that
grade it — ANY of them, because one phrase can name different shapes:
"exponential form" is the log conversion (`exponential-form`), the repeated
multiplication (`single-power`), and the prime factorization (`prime-product`).
The table also covers "decimal form" (`decimal`), "factored form" (`factored`),
and "as a mixed number" (`mixed-number`/`fraction-or-mixed-number`); a
companion rule requires `lowest-terms` when a "simplest/simplified form" ask
has a numeral-fraction answer. The ask patterns demand a producing verb
(write/rewrite/enter/…) or an "equation … in <name> form" clause, so a prompt
that merely *mentions* the form is not conscripted; list answers are out of
scope because the grader's form check never runs on them. The retrofit was 54
exercises across all four books.

Probing the class surfaced two false-**reject** defects, both of the kind the
self-grading gates cannot see because the authored answer is only ever
compared against itself:

- **An interval-notation ask authored as an inequality.** "…write the solution
  in interval notation" answered `u>10` marks the learner who types
  `(10,\infty)` as instructed **incorrect** — the engine grades an inequality
  and an interval unequal in both directions. The answer is rewritten as the
  interval and a lint rule now requires an interval-shaped answer (every
  `\cup`-joined part opens with `[` or `(`) behind any interval-notation ask.
- **A function-notation response the grader could not read.** `f(x)` boxes as
  `Multiply(f, x)` (capital names as an application), so a learner answering a
  prompt phrased "If $f(x)$ is a linear function…" with `f(x)=-7x+3` was
  graded incorrect against the authored `y=-7x+3`. `checkAnswer` now strips a
  written one-letter-applied-to-one-letter label — only when no further `=`
  remains, so a genuine equation response is never half-eaten — and the
  variable-name guard does not apply to it: the prompt said $f(x)$, the author
  wrote $y$, and both mean the output.

Two residual loosenesses are recorded rather than closed, deliberately. A
two-point point-slope ask accepts the *other* point's equally-correct
point-slope equation by value, so the prompt must pin the point ("using
$(1,5)$ as $(x_1,y_1)$") — a wording rule, not a token. And slope-intercept
happens to grade unequal against a point-slope answer today; that is an engine
accident the predicates do not depend on, which is why the mirror token exists
at all.

## Done checklist

- [ ] Pinned CNXML and PDF/Answer Key pages inspected; source ledger complete.
- [ ] Source fidelity reconciled; any discrepancy/adaptation explicitly recorded.
- [ ] Frontmatter complete (`title`, `description`, `source_section`, `weight`).
- [ ] Chapter landing uses descriptive `**Title** — summary` section bullets.
- [ ] Every retained practice item is a real component with no print-only label.
- [ ] Objectives callout lists one objective per Markdown list item, matching
      the source one for one.
- [ ] `## Practice` block after the end matter, last heading before the
      footer: a `### ` group per objective, at least two sourced, hinted
      exercises in each and five in the block, multipart items expanded part
      by part; the footer discloses the adaptation.
- [ ] Every re-expression prompt carries an `answerForm`; categorical answers
      are `multiplechoice`, never digit codes.
- [ ] Every touched answer independently solved and checked against the source key.
- [ ] Confirmed upstream defects logged in `docs/openstax-errata.md`; dismissed
      suspicions recorded in its "Reviewed and *not* errata" list.
- [ ] No file-backed instructional images; recreated figures compared visually.
- [ ] `verify-section` clean (✗ = 0).
- [ ] `npm test` green.
- [ ] Production build/audit green for chapter or bulk work.
- [ ] Browser check confirms math appears once, spacing is correct, components
      work, and figures match the source.
- [ ] Handoff lists source evidence, visual pages, and all uncommitted files.
