# OpenStax Mathematics — subject playbook

The subject-specific rules for the four OpenStax math books: **Prealgebra
2e, Elementary Algebra 2e, Intermediate Algebra 2e, and Precalculus 2e.**
`docs/authoring-playbook.md` is the shared core and governs every book; this
document adds KaTeX notation, the `answerForm` grading vocabulary, and the
`graphplot` and graph-core figure rules. Read both before authoring a math
section.

## 2. Writing patterns

- **Math:** KaTeX — `$...$` inline, `$$...$$` display (multi-line `$$` fenced on
  their own lines). Group digits with `{,}` in **every number of four or more
  digits**: `$1{,}000$`, `$37{,}519{,}248$`. Four-digit calendar years are the
  one exception and stay bare (`$2012-2009$`), as figure axes take
  `xTickGrouping: false`. Group four-digit numbers in prose and Markdown
  tables too, with an ordinary comma (`2,160`). The lint warns on an ungrouped
  run of four or more digits inside math but skips values in the 1000–2099
  band (it cannot tell a year from a quantity), so that case is on the author.
  Plain prose numbers need no `$`. A literal dollar sign (money) is `\$`, and
  it only works in prose or inside a `$$…$$` block — inside inline `$…$`
  Hugo's passthrough ends the run at the escaped dollar. Write money amounts
  outside the inline math (`\$10{,}000`), or name the unit in the sentence.
- **Fractions: `\tfrac` everywhere** — inline, in **Check:** sentences, and
  inside `$$` arrays. `\dfrac` is banned and plain `\frac` inside an array
  renders too tall; the lint enforces both. Nested fractions use `\cfrac` in a
  display block.
- **Absolute value in a table row: `\lvert`/`\rvert`, never `|`** — Goldmark
  splits a table row into cells on `|` before it parses inline math, so a
  body row grows phantom columns and a header row degrades the whole table to
  raw pipes. Write `$f(x)=\lvert x\rvert$` and
  `$6\left\lvert xy\right\rvert$`. The lint enforces this on any line that
  begins a table row.
- **Worked-example step tables:** align relations with `\begin{array}{lrcl}`,
  rows `explanation & LHS &=& RHS \\[4pt]`. Separate steps with `\\[4pt]` (the
  lint rejects bare `\\` in `{lrcl}` arrays).
- **Prose inside math needs TeX spacing:** ordinary spaces outside
  `\text{...}` disappear. Write `\text{If }n^2=m` or
  `\text{If}\ n^2=m`, and use `\ ` between adjacent text commands. Never rely
  on source whitespace in `\text{If} n`, `m \text{is}`, or
  `\text{square}\text{root}`. The lint catches high-confidence joins; the
  rendered page is the final check.
- A literal `{` in prose is harmless in Hugo — only `{{` starts a shortcode.
  Set notation like `{3, 6, 9}` is fine in prose (math sets read best as
  `$\{3,6,9\}$`).

## Fill-in answer shapes and re-expression (`answerForm`)

These rules extend the core's `fillin` usage block.

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
for larger-first/smaller-first order keep the default ordered grading.

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
decimal, write a prime factorization — is passable by retyping the printed
subject: `86` passes "Find the prime factorization of $86$". No choice of
numbers avoids this; only grading the shape does:

```
{{</* fillin
  question="Simplify: $-\tfrac{40}{88}$."
  answer="-\tfrac{5}{11}"
  answerForm="lowest-terms"
  hint="Divide out the common factor of $8$."
*/>}}
```

`answerForm` is a space-separated set of requirements, all of which must hold
("convert to an improper fraction in lowest terms" composes the two tokens it
names):

| Token | Requires |
|---|---|
| `fraction` | written as $\tfrac{a}{b}$, not a decimal |
| `decimal` | a plain decimal numeral |
| `percent` | ends with the $\%$ sign — for "enter the percent, including the % sign" asks, where $0.62$ and $62\%$ are the same value |
| `rational-exponent` | the WHOLE response is `coefficient? base^rational`, one term and one factor, the exponent a non-integer *by value* ($^{2/2}$ is the integer 1) and the base a variable or a group holding one — the radical→exponent conversions are value-identical by design |
| `radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}`, one term and one factor, no exponent on the radical, an integer index $\ge 2$, and a variable in the radicand — the mirror conversion |
| `exact-log` | the WHOLE response is `integer? logarithm` or `\frac{logarithm}{logarithm or integer}`, optionally plus or minus one integer, each logarithm taking a single numeral or variable — **and no decimal point anywhere** — for "enter the exact answer" asks whose key is a logarithm |
| `exact-radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}` with no decimal point anywhere, and `simplified-radical` besides — for "enter the exact form" asks whose key is a radical. `simplified-radical` alone cannot serve them: it passes any response holding no radical, including a rational approximation $\tfrac{1140175425099138}{100000000000000}$ |
| `exact` | no decimal point anywhere in the response, and nothing else — for an "in exact form" ask whose answer is a CONTAINER with no single shape: "Enter both solutions in exact form" keyed $(-\sqrt3,0),(\sqrt3,0)$, where demanding a radical would reject the $0$ member. The weakest of this family — compose it with a shape token whenever the response has a shape worth naming |
| `summation` | the WHOLE response is `coefficient? \sum_{lower}^{upper} body`, one term and one factor, both bounds written — for "write the sum using summation notation" |
| `single-logarithm` | exactly one logarithm in one term, and the term IS the logarithm (no outside coefficient — $2\log_2\sqrt{5x/y}$ is the Power Property left unapplied) — for "condense to one logarithm" |
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
| `conic-standard-form` | an equation with one side exactly $1$ and the other a sum/difference of $\ge 2$ fractions, each a coefficient-1 squared term ($x^2$, $(y-k)^2$) over a positive integer (a bare squared term counts as over the unwritten $1$, so $(y-1)^2-\tfrac{x^2}{4}=1$ passes) — for ellipse/hyperbola "write in standard form". Primed variables ($x'$, $y'$) are folded onto one symbol first, so $\tfrac{x'^2}{4}+\tfrac{y'^2}{9}=1$ is keyable |
| `parabola-standard-form` | an equation with one side a single coefficient-1 squared unit ($x^2$, $y^2$, $(x-h)^2$, $(y-k)^2$) and the other ONE term in the other variable — an optional numeric coefficient (the $4p$: integer, decimal, or written fraction) on the bare variable or its shifted binomial, or that variable/binomial over an integer — for "write the parabola in standard form" $(x-h)^2=4p(y-k)$ asks, which `vertex-form` cannot serve (it wants $y=a(x-h)^2+k$) and which the general form, $x=\tfrac{y^2}{8}$, and the distributed $(x-2)^2=-8y-8$ otherwise pass on value |
| `circle-standard-form` | two coefficient-1 squared terms against a positive integer — $(x-h)^2+(y-k)^2=r^2$ for the circle asks |
| `exponential-form` | no logarithm left — for "convert from logarithmic to exponential form". The closed-equation grading path already refuses a retyped conversion prompt; this token remains for the feedback sentence and for value-equal responses that still carry a logarithm |
| `base-e` | no base other than $e$ raised to a variable exponent — for "change $y=3(0.5)^x$ to one having $e$ as the base". A numeric exponent ($x^2$) is a power function and is left alone |
| `expanded-logarithms` | every written $\log$ takes a single number or variable — for "write $\log_5 25ab$ as a sum of logarithms" |
| `evaluated-trig` | no trigonometric function left ($\sin$, $\cos$, $\tan$, $\csc$, $\sec$, $\cot$, and their $\arcsin$/$\sin^{-1}$ inverses) — for "find the exact value of $\cos\tfrac{\pi}{4}$" |
| `single-trig-function` | exactly one trigonometric application written — for "simplify $(\tan t)(\cos t)$", whose answer $\sin t$ is value-equal to the printed product (`evaluated-trig` cannot serve: the answer IS a trig function). A coefficient is allowed ($2\sin t$) |
| `evaluated-logarithm` | no logarithm left — for "evaluate $\log_2 8$". Same predicate as `exponential-form`, kept apart because its feedback names evaluating rather than converting |
| `degrees` | one term, ending in $^\circ$, on a plain numeric head — for "convert $\tfrac{5\pi}{4}$ radians to degrees", where the engine grades the two spellings equal |
| `radians` | no degree symbol anywhere — the mirror ask |
| `denominator:<n>` | that exact denominator — for equivalent-fraction asks, which are deliberately **not** reduced |
| `solved:<variable>` | one written equation with that variable alone on one side and absent from the other — for "Solve the formula $7x+y=11$ for $y$", where equation-equivalence grading accepts the printed formula retyped; the variable is named because a formula can arrive solved for the *other* side ($x=5y-10$) |

A right value in the wrong shape reports back as "That value is right — now
write it in lowest terms"; a wrong value is still just wrong.

**A form applies to every member of a list answer.** An `answer` holding a
top-level comma (`"\frac{\sqrt3}{2},\frac12"`, or any `answerMode="unordered"`
key) is graded member by member, and the declared form is required of each
member in turn. *(August 16, 2026)*

Which evidence the requirement is checked against depends on what it separates.
A **numeral** form is checked against the LaTeX, because the Compute Engine
erases exactly that distinction: `\frac{40}{88}` parses to `["Rational",5,11]`
and `2^4\cdot5` to `80`. A **symbolic** form is checked against the parse —
`(x+2)(x+4)` stays a product while `x^2+6x+8` stays a sum.

`factored` is a shape check, not a completeness check: `2(2x^2+8x+8)` satisfies
it, deliberately — a GCF-only exercise correctly answers `-7a(a^2-3a+2)`, and
demanding full factorization would fire on sound content (core §5). Ruling
out the printed polynomial is the whole job.

The lint rejects a re-expression prompt with no `answerForm`, and
`verify-section` rejects an answer that does not satisfy the form it declares.
Where the response is not a re-expression at all, use `multiplechoice`: the
learner picks among forms.

Retyping a printed *expression* ("Add: $3+5$", "Simplify: $b^9\cdot b^8$")
grades correct too, and is flagged the same way: the lint grades every printed
subject of a re-expression verb as a submission under the declared form. The
class-by-class record is in `docs/history/math.md`.

**Brace every multi-character exponent in `answer`.** TeX reads `y^10` as
`y^1` followed by a literal `0`, so the learner who types $y^{10}$ is marked
wrong — and `verify-section` compares the answer against itself, so nothing
else catches it. Write `y^{10}`, `7^{14}`, `10^{-3}`. The lint rejects both an
unbraced multi-digit exponent and an unbraced negative one.

**Never write `\\` in a math span outside a `\begin{…}` environment.** KaTeX
reads it as a row break and sets what follows as literal letters
(`$x=-\\tfrac{b}{2a}$` renders the word "tfrac") without throwing, so
`verify-section` calls the page clean. A heredoc that ate one backslash leaves
this behind. Inside `\begin{array}`, `{aligned}`, `{cases}` or `{matrix}` a
`\\` is the row separator; the lint fires only on spans that open no
environment.

## GraphPlot: answer shapes and graph recognition

This continues the core's `graphplot` usage block.

`answer` shapes: `{slope,intercept}`, `{x}`, `{y}`, `{system:[…]}`,
`{asymptotes:[…]}`, `{quadratic:{a,b,c}}`, `{points:[[x,y],…]}`. A `points`
answer lists 1–12 distinct targets (5 is the typical precalculus table size);
the learner must place every one, in any order, and each target must sit
inside the grid bounds and on the snap lattice or validation rejects the
config. Only the placed points are graded, never the curve through them.
Partial credit feedback reports how many are placed correctly.

An `asymptotes` answer lists one to three distinct member lines — each
`{x}`, `{y}`, or `{slope,intercept}`, so vertical, horizontal, and slant
asymptotes all grade — e.g.
`{"asymptotes": [{"x": 2}, {"x": -3}, {"y": 4}]}`. The learner draws each
member with two points; the set is graded order-agnostic with partial-credit
feedback. Every member must have at least two snap-lattice points inside the
grid or validation rejects the config, so keep asymptote equations
lattice-friendly ($x=-\tfrac{2}{5}$ needs a fillin unless the snap is that
fine). Use this form for "find the vertical/horizontal asymptotes" prompts
whenever the equations are lattice-reachable; it has no `plotPoints` and is
exempt from the three-point rule below.

A line or quadratic answer may add `plotPoints: N` (2–12), e.g.
`{"slope": 2, "intercept": -1, "plotPoints": 3}`: the learner places N
distinct points of their own choosing, all on the line. Use this when the
question leaves the choice of points to the learner; use `points` when the
question names the x-values. `plotPoints` never exists on system members.

**A quadratic with `plotPoints: 3` or more is graded ORDER-AGNOSTICALLY,
and the vertex need not be among the placed points.** The grader fits the
curve through the learner's whole set and compares its `a` and vertex with
the answer ("Graph $y = x^2 + 10x + 24$ using its intercepts, its vertex, and
its axis of symmetry" is answered by $(-6,0)$, $(-4,0)$, $(0,24)$). Do not
write a question that depends on which point is placed first, and do not
promise a "vertex" handle label: it appears only on the two-point form, which
corpus policy forbids. `notOnParabola` means two points share an x-value, the
points are collinear, or a point lies off the curve the others determine.

**Author `plotPoints: 3` (or more) on every line and quadratic answer** —
the lint rejects a line or quadratic graphplot that asks for only two
placed points, because two points can be reproduced from the answer display.
Pick the grid so at least N snap-lattice points sit on the answer object;
validation rejects an unwinnable ask, and a quadratic's vertex must itself be
on the snap lattice inside the grid.

**Leave slack above `plotPoints` — validation requires it.** A line or
quadratic whose reachable lattice points merely *equal* `plotPoints` fails
`npm run lint`: the learner would have no choice of points. Fractional slopes
bite: on −7..7, $y = \tfrac14 x + 2$ reaches only $(-4,1)$, $(0,2)$, $(4,3)$;
doubling the grid (−14..14 reaches seven) is the usual fix. Widen rather than
lower `plotPoints` where you can — and do not widen past the section's
established convention without saying you did.

Reachability is measured against what the component can produce: snapping
rounds to the lattice and *then* clamps to the bounds, so each bound is
reachable whether or not it sits on the lattice. `snapToGrid`,
`reachableValues`, and the validator share that one model — do not
reintroduce a second one.

GraphPlot configuration is validated during `npm test`: grid bounds and steps
must be finite, minimums must be below maximums, snap/grid/tick steps must be
positive, and the answer shape must match one of the supported forms.

**Graph production and recognition.** Any regular section carrying two or
more `graphplot` exercises also carries at least one `mode="graph"` multiplechoice —
recognizing a correct graph among plausible wrong ones is a distinct skill
from producing one. A lone graphplot needs no companion. The lint reports a
section with two or more graphplots and no recognition MC as an error;
Knowledge Checks are exempt (the math edition's playbook governs their mix).
There is no upper bound (distractors that encode boundary style and shading,
which no answer form grades, justify several). What CAN be a graphplot is
bounded by the answer forms — line, points, system, quadratic, asymptotes;
the conversion queue was adjudicated to zero across every book *(August
2026)*, so only a new answer form reopens it — then re-read the sections
whose graph asks it covers. Curve families with no form — exponential,
logarithmic, sinusoid, radical, absolute value, piecewise, conic, polar,
inequality regions — stay static figures with a `fillin` or
`multiplechoice` about them.

Hazards a conversion or a new graphplot must clear:

- **The exercise's own answer graph, pre-rendered above it.** A prompt
  ("Graph $f(x)=\ldots$ by using its properties."), then a static figure of
  the solved graph with the vertex in its `aria-label`, then a fill-in asking
  for that vertex hands a screen-reader user the answer. One blank-grid
  `graphplot` replaces the triad. Check the pinned CNXML first: if the source
  has no figure there, the answer graph is a local artifact.
  `grep -n 'aria-label="The graph of' <file>` finds the shape.
- **A rendered figure can leak the answer to a NEIGHBOURING item.** A
  recognition MC's option figures print the object's vertex, intercepts and
  asymptotes, and its `ariaLabel` names them — so a nearby property fill-in
  about the same object becomes readable. Read the items on both sides before
  settling the option specs, and put the recognition question *after* the
  property questions about the same object.
- **A graphplot under the worked example of the same equation is
  transcription.** Check the CNXML for the Try It that actually follows the
  example — a page that substituted the example's own equation has a fidelity
  defect, and restoring the source equation fixes both.
- **Fractional slopes are JSON numbers.** `parseGraphPlotConfig` requires
  `typeof value === 'number'`, so $\tfrac13$ is `0.3333333333333333`; the
  grader's `1e-9` tolerance absorbs the float error. Follow the section's
  existing grid convention (`grep -n '"answer"'` the file) rather than a
  default window that leaves `plotPoints: 3` exactly three lattice points.
- **Do not restate what the component already prints.** `<graph-plot>`
  emits its own instruction line ("Place two points on each line — the
  first two make one line, the next two the other"), so a question ending in
  the same sentence renders it twice.
- **A rewritten exercise is a re-read exercise, and so is a rewritten
  apfigure that an exercise reads from.** `node
  tools/verify/answer-ledger.mjs prune content` drops the stranded record;
  then record the new verdict per the core playbook's §4. If the replaced
  fillin is named in `SOUND_COINCIDENCES` (`tools/verify/verify-replay.mjs`),
  delete that entry (the allowlist test fails with "matched 0"). Converting a
  fillin moves the replay floor, so end the session with
  `npm run baseline:update`.
- **Run `npm run ci`, not just `npm test`,** when a graphplot lands above an
  existing one: the page renumbers, and a Playwright spec that reached its
  card by position silently retargets. Select a `graph-plot` in a test by
  its authored config — ``graph-plot[data-config*='"slope":3,"intercept":-1']``
  — never by `.nth(n)`.

## Static figures: graph-core rules

This continues the core's `apfigure` usage block.

The placement pass treats tick digits, the axis letters, `texts`
annotations, and every already-placed label as obstacles, and scores a
stroke passing *through* a candidate box far below one merely nearby.
Dashed guide lines (asymptotes, boundaries) are emitted gapped behind any
label ink or tick digit they cross, and the two digits sharing the corner
cell by the origin de-collide on their own. SOLID strokes never gap — a
solid curve with chunks missing reads as dashing, which is a mathematical
statement — so a curve hugging the axis draws over the digit row as the
source books print it. **Write line labels with no `labelSide`/`labelAt`
pins first** and let the engine choose — a pin is honored even into a
collision, so state one only to express meaning the engine cannot know. For
a point label that must sit a few pixels off its chosen side,
`labelNudge: [dx, dy]` (px) shifts it without giving up placement scoring; a
`texts` entry remains the full escape hatch and is never moved.

**The grid bounds are not a clip.** The fit pass sizes the viewBox around
everything drawn, so an object bigger than the window enlarges the figure: a
`circles` entry with `ry: 49` on a −12..12 grid renders a 388×1376 SVG. On a
`mode="graph"` option set, where every option shares one window, an oversized
distractor shrinks the correct option to a few pixels. Size the window to the
largest object any option draws, and if that makes the correct one
unreadable, say so rather than shipping four unreadable figures.
(`quadratics`, `curves` and `hyperbolas` do clip; the closed families —
`circles` above all — do not.)

**Only `lines`, `segments`, `points`, and `regions` can carry a label** in a
`graph` spec — a region's label rides on the boundary line the engine draws
for it. A curve family — `quadratics`, `cubics`, `polynomials`, `rationals`,
`curves`, `circles`, `polylines` — draws its stroke and nothing else, so a
`label` on one is text the engine never draws; the lint rejects it. Name a
curve with a `texts` entry. (`kind="figure"` is out of scope: `buildFigure`
labels its own families — a figure circle's `label` is a sub-object drawn
outside the rim with a leader line — and the lint knows the difference.)

**Write exponents in a figure as superscript characters, never as TeX.** The
SVG label layer has no typesetter: `f^{-1}(x)` prints those nine characters.
Write `x²`, `x⁶`, `f⁻¹(x)`. The prose rule against `⁻` applies to *math
spans* only, not inside a figure body (an `apfigure` body or a
`multiplechoice mode="graph"` option spec), where the superscript IS the
exponent; `text-metrics.mjs` measures superscripts accurately.

**Leave a blank line on both sides of the shortcode.** `<ap-figure>` is a
custom element, so Goldmark does not treat it as an HTML block: welded to
the text around it, the figure is parsed as inline HTML inside that
paragraph, every shortcode up to the next blank line is pulled in, and the
re-parented `<fill-in>` / `<multiple-choice>` hosts throw and never render.
The lint enforces the blank lines; `tests/figures.spec.mjs` catches the
console errors if it ever does not.

Layout is machine-checked, three ways: the lint builds every authored spec
through the real engine (a spec that cannot build fails `npm test`);
`tests/figures.spec.mjs` renders every page carrying an `<ap-figure>` in both
colour schemes and fails on any text outside the fitted viewBox or any
console error; and the readability gate

```
npm run check:figures            # or: node tools/figures/check-figure-overlaps.mjs <page.md>
```

builds every spec-first figure and fails on any label printed across other
ink deeper than a 3px graze (it runs inside `npm test`). A solid stroke
crossing a tick digit is reported but never gated; a dashed stroke crossing
one IS gated, because the engine gaps dashes behind digits. The same run
previews every legacy `data-spec` figure as its spec-first re-render and
reports, without gating, the ones that will need label work at conversion.
What the machines cannot check is FIDELITY, so the visual comparison against
the PDF remains part of authoring (below).

To eyeball a spec while authoring without a Hugo server, print it as
standalone SVG:

```
node tools/figures/render-figure.mjs graph '{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}'
```

Older sections still carry that helper's pasted `<div class="ap-figure">`
output with its `data-spec` attribute. The form remains valid and lint-
covered; convert a page's figures to `apfigure` shortcodes when you next do
substantive work on the page, and author NEW figures spec-first always.

**Converting a chapter to spec-first figures.** The conversion state is the
content itself — a page still carrying `<div class="ap-figure"
data-spec=…>` or a bare `<div class="ap-figure">` is unconverted; a page
whose figures are all `apfigure` shortcodes is done. No separate ledger
records this. Start from the queue:

```
npm run figures:status -- content/math/<book>/<chapter>
```

Pages listed `converted` are finished — do not touch them. Everything else
carries one of two unconverted forms, each with its own procedure.

**Legacy `data-spec` divs — run the converter,** never hand-edit:

```
npm run figures:convert -- --dry-run --gallery /tmp/diff.html content/math/<book>/<chapter>
npm run figures:convert -- content/math/<book>/<chapter>
```

It drops the legacy `"type"` key into the shortcode's `kind` attribute,
keeps the blank lines around every shortcode, and replays each spec through
today's builders, diffing against the SVG it replaces: `=` identical, `~`
label drift (placement or font moved; expected), `~` a dashed guide now
gapped behind label ink, or `!!` geometry drift, which is a bug. It exits
non-zero on any `!!`, and `--gallery` writes the drifted pairs side by side
to eyeball. The converter also renders each pinned spec both ways:
`redundant` means the pin names the side the engine picks unaided — delete
it; `load-bearing` means dropping it re-places a label — keep the pin when it
is what the source figure shows, drop it when the engine reads better.

Delete the redundant ones with the converter, never by hand (by hand is how a
load-bearing pin goes with them):

```
npm run figures:convert -- --tidy-pins --dry-run content/math/<book>/<chapter>
npm run figures:convert -- --tidy-pins content/math/<book>/<chapter>
```

It works per pin, not per spec, and drops a pin only when re-rendering
without it is byte-identical, so a tidied page cannot have moved a label.

**A converted spec may surface a dead curve label.** A legacy `label` on a
curve family is rejected by the lint once the spec becomes an `apfigure`
body. Do not reflexively delete the key: check the printed figure. Where the
source art prints the equation or name beside the curve, restore it as a
`texts` entry; where the print shows a bare curve, the label goes (e.g. a
write-the-equation exercise, where printing the answer on the graph would
defeat it). Run the page back through `check:figures` after adding `texts`.

**Hand-written SVG in a bare `<div class="ap-figure">`** (no `data-spec`) has
nothing to copy: recover the grid, objects, and labels from the SVG geometry
and fit analytic primitives (never `smoothCurves`). Where the engine has no
primitive for the shape (bar charts, schematic diagrams with funnels and
mapping arrows), extend `graph-core` with one rather than hand-assembling
the picture out of `polygons` and `texts`.

Then gate the page before moving on: `npm run verify-section -- <page>`,
`node tools/figures/check-figure-overlaps.mjs <page>`, `npm test`, and the
visual comparison of each converted figure against the PDF, which no gate
replaces.

**Draw known shapes with their analytic primitive, never a spline
approximation.** `buildGraph` has exact primitives: `lines`, `quadratics`
(including `sideways`), `cubics`, `polynomials` (a `coeffs` array
$[a_0,a_1,\dots]$ for any degree), `rationals` (a `num`/`den` coefficient
pair, whose branches split at each pole on their own), `circles` (a real SVG
ellipse), `hyperbolas` (`{ at:[h,k], a, b }` draws
$\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$ opening left/right from vertices
$(h\pm a,k)$, and `vertical: true` draws
$\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$ opening up/down from $(h,k\pm a)$;
author the dashed asymptotes and central rectangle as dashed `lines` and
`segments`), `polylines` (straight joins — required for corners such as
$y=\lvert x\rvert$), and `curves` with kinds `sqrt`, `cbrt`, `reciprocal`,
`reciprocal-squared`, `sine`, `cosine`, `tangent`, `secant`, `cosecant`,
`cotangent`, `arcsine`, `arccosine`, `arctangent`, `exp`, `log`, and
`logistic` (each accepts `a`, `h`, `k` for $a\,f(x-h)+k$; the trigonometric
kinds add `b` and draw $k+a\,f\bigl(b(x-h)\bigr)$). The asymptotic four
(`tangent`, `secant`, `cosecant`, `cotangent`) split into branches on their
own wherever the curve leaves the grid; their dashed vertical asymptotes are
NOT drawn for you — author them as dashed `lines`. `arcsine` and `arccosine`
draw only their closed domain $\lvert b(x-h)\rvert\le 1$. `exp` and `log`
take `b` as the base and draw $k+a\,b^{x-h}$ and $k+a\log_b(x-h)$. `log` also
takes `reflect: true` to draw $k+a\log_b(h-x)$ on $x<h$. `logistic` draws
$k+\tfrac{c}{1+a e^{-b(x-h)}}$ using the TEXTBOOK's parameter names, so `c`
is the carrying capacity and `a` is the shape parameter, **not** the vertical
scale `a` names on every other kind. Quadratics, cubics, polynomials, and
curves accept `from`/`to` to trim the drawn domain, e.g. to end a curve with
an arrow mid-grid the way source art does. Match the source's arrow
conventions: no arrowhead where a domain actually ends (the origin of
$\sqrt{x}$), and helper/test lines (`lines` entries used as guides) usually
render plain in the PDF — pass `arrows: false` on them. `segments` take
`arrows` too, for the labelled "Domain"/"Range" extent rays drawn beside a
graph.

**Curves with no primitive are sampled from their exact equation into
`polylines`, and `polylines` are NOT clipped to the grid.** Rotated conics
(sampled parametrically and rotated), polar conics ($r(\theta)$ sampled with
hyperbola branches split where the denominator changes sign), damped waves,
and polar roses ship this way; the sampling is analytic, not a spline. Drop
every sample outside the window (splitting a branch into separate runs where
it leaves) or the curve runs off the figure. In `figure` mode, which has no
ellipse primitive, sample ≥120 points for a closed ellipse — a 24-point
polygon shows its corners at zoom. Double-cone conic-section schematics (a
cone cut by a plane, hidden portions dashed) come from
`node tools/figures/cone-schematic.mjs` — an exact construction under the
§9.2 oblique projection — never from an hourglass wireframe; keep such a
composite to two panels, because a `figure` wider than ~340 px scales its
label font up until adjacent titles collide. A `figure`-mode dimension
diagram draws the object it dimensions (a cooling tower's sides are sampled
from its own hyperbola, not left as bare dimension lines).

When a graph's window never reaches the origin — a year axis, a dollar axis —
`tickLabels` still labels both axes along the drawn edges. Turn digit
grouping off per axis with `xTickGrouping: false` so a year reads 1975 rather
than 1,975. Where the source numbers only one axis, `tickLabels` also takes
`'x'` or `'y'` to label that axis alone.

`buildNumberLine` draws a single boundary with `marker` + `shade`, and any
compound set — $(-\infty,2)\cup(2,\infty)$, $[1,3]\cup(5,\infty)$ — with
`intervals`: one entry per heavy stretch, each `{ from?, to?, fromType?,
toType? }`. Omit `from` or `to` to run that end to the arrow, and mark
excluded endpoints `'open'` so they render hollow.

**A "generic" source curve is still a function: fit a formula, then render
the formula.** When the source shows a freeform-looking curve (a wavy
vertical-line-test graph, a smooth curve through labeled points), fit a
cubic through the labeled points and stated extrema, or use a `sine` curve
for a wave, and record the fitted formula in the source ledger. Do not trace
it with `smoothCurves`: its spline pins a zero tangent at every extremum and
is only $C^1$ at the knots, rendering flat plateaus and curvature kinks.
`smoothCurves` is a last resort for source art that truly has no formula; it
requires `freeform: true` in each entry, and the content lint warns on its
rendered output and rejects an unacknowledged `smoothCurves` in a figure
spec. `tools/figures/graph-core.test.mjs` guards this geometry.

The lint validates every `apfigure` body (JSON that parses, a non-empty
`ariaLabel`, a spec the engine accepts) and still validates a legacy
figure's `data-spec` the same way (it must parse, and any `smoothCurves`
entry must carry `freeform: true`).

Do not paste or download textbook equation images into content. Write
equations as KaTeX, recreate tabular relationships as Markdown tables, and
use `apfigure` for diagrams and graphs. File-backed Markdown/HTML images,
raster formats (`.png`, `.jpg`, `.webp`, and similar), and inaccessible
inline SVGs are rejected by the content lint.

Recreated graphs and diagrams still require visual comparison with the PDF.
Check geometry, labels, axes, endpoints, direction, and dark-mode contrast; a
valid accessible SVG can still be mathematically wrong.

### Notation the grader cannot take yet

The Compute Engine's LaTeX reader sets these limits; each was confirmed
through the real grader. `verify-section` reports an invalid parse as
ungradeable, so such a page cannot ship. Do not fight them: write the exercise another way,
or extend `preprocess()` first and add the test with it.

| Notation | Where it would arise | What happens |
| --- | --- | --- |
| `\langle a,b\rangle` | vector component form | parses invalid |
| `\binom{n}{k}` | binomial theorem | parses invalid |
| `\lim_{x\to0^+}` | one-sided limits | parses invalid |
| `{}_nP_r`, `{}_nC_r` | permutations, combinations | parses as a nonsense product; caught by the nonsense-parse guard in `verify-section` |
| `2(4i-3j)-(2i-j)` (an unsimplified vector combination) | vectors (Precalculus §8.8) | `i` is the engine's imaginary unit and its complex arithmetic is wrong (see `tools/verify/verify-answers.mjs` `hasComplexDivision`), so a parenthesized combination grades `incorrect` against its keyed result. The distributed spelling (`8i-6j-2i+j`) and the simplified result grade correct — key vector results as bare $ai+bj$. Folding `i`/`j` into basis symbols would make every "compute $2\mathbf{u}-\mathbf{v}$" item passable by retyping its prompt, so it would need a form token on each of those keys |
| `D`, `N` as variables | `D` for distance, `N` for a count | reserved by the engine as the derivative and numeric-evaluation operators; any answer using them is ungradeable. Rename the variable (`d`, `n`). |
| `x'`, `x^{\prime}` (a primed variable) | rotated axes (Precalculus §10.4) | **taken since August 28, 2026**, by folding: `preprocess()` rewrites every spelling of a primed letter — `x'`, MathLive's `x^{\prime}` / `x^{\doubleprime}` / `x^{\prime2}`, `\theta'` — onto one subscripted symbol (`x_{p}`, `x_{pp}`) on both sides, so a primed answer grades on value and shape. A genuine `f'(x)` derivative is folded too (the symbol $f_p$ applied to $x$), so derivative answers key the resulting expression. Since August 29, 2026 a learner's written label is stripped before grading the way `f(x)=` is: `f'(x)=2x+3`, `f^{\prime}\left(x\right)=2x+3`, `f'(3)=6`, `f(2)=5` (a numeral argument is a label, never the output $y$), and `\frac{dy}{dx}=2x+3` all grade on the value that follows |

`^\circ` is exact: the engine converts it, so `30^\circ` and `\frac{\pi}{6}`
are the same value and each is accepted for the other. A prompt that must
have degrees (or radians) says so in the question and declares `degrees` or
`radians`. *(August 16, 2026)* `checkAnswer` spells `^\circ` out as
`\cdot\frac{\pi}{180}`, so `1400^\circ` no longer equals `320^\circ`. **A
coterminal answer is therefore compared strictly** — only the keyed
representative grades correct, so say which the question wants ("the
coterminal angle between $0^\circ$ and $360^\circ$").

The closed-class programme behind `answerForm` and its lint rules is in
`docs/history/math.md`.

## Standing notes from the closures

Each explains a lint error or a grader behavior an author will still meet:

- **Write quotients as explicit `\frac` in `answer`.** A slash quotient with a
  juxtaposed factor (`-1/20(x-20)^2+20`, `y=1/2x-5/2`) parses as
  $\tfrac{-1}{20(x-20)^2}+20$ and $y=\tfrac{1}{2x}-\tfrac52$: both sides of the
  self-check mis-parse identically, so no gate fires, and a learner typing the
  intended answer (MathLive turns `/` into a real `\frac`) is marked wrong.
  The lint rejects any answer matching a slash quotient followed by a
  juxtaposed letter, parenthesis, or macro.
- **An interval-notation ask needs an interval-shaped answer.** The engine
  grades an inequality and an interval unequal in both directions, so `u>10`
  behind "write the solution in interval notation" marks `(10,\infty)`
  incorrect. The lint requires an interval-shaped answer (every `\cup`-joined
  part opens with `[` or `(`) behind any interval-notation ask.
- **A written function label is stripped before grading.** `f(x)` boxes as
  `Multiply(f, x)`, so `checkAnswer` strips a written
  one-letter-applied-to-one-letter label — only when no further `=` remains —
  and the variable-name guard does not apply to it: $f(x)$ and $y$ both mean
  the output.
- **The re-expression lint checks the declared form BEFORE grading a
  candidate span through the engine**, because grading is value-then-form and
  the engine's `simplify()` effectively never returns on a conjugate radical
  quotient.
- **The engine can hang, and the grader routes around it.**
  Measured against the pinned 0.58.0 the engine has two distinct hang sites,
  and `ce.timeLimit` interrupts neither: `isEqual()` never returns once either
  operand keeps a radical-denominator quotient
  ($\tfrac{\sqrt{2}}{\sqrt{x}-\sqrt{3}}$ — against *any* comparand), and
  `simplify()` never returns on some differences of variable-radical
  expressions. `equivalent()` in `lib/check-answer.mjs` routes both classes
  to bounded numeric sampling (see the guard banner there).
- **Complex arithmetic: author the answer in $a+bi$ form.** The pinned engine
  has two silent defects: it divides by the denominator's modulus rather than
  its square, so $\tfrac{2+5i}{4-i}$ evaluates wrong; and a coefficient times
  a complex value whose imaginary part is exactly $+1$ loses the real part —
  `3(2+i)` evaluates to $3i$ — while `3(2-i)`, `3(2+5i)` and `(2+i)3` are
  correct. A key with a complex denominator or an unsimplified $(a+i)$ factor
  is not the value it looks like; written $a+bi$ sidesteps both, and a
  learner who types $\tfrac{3+22i}{17}$ still grades correct against
  $\tfrac{3}{17}+\tfrac{22}{17}i$. `verify-answers` skips both shapes.
- **Do not "fix" deliberate conversions back.** The four ch. 11 Practice
  prompts authored as `multiplechoice` for the standard-form class, and the
  quotient-to-a-power item that became a multiple choice among fraction forms
  (no token's feedback names that ask), are sound content converted
  deliberately.
- **The engine evaluates factorials and finite sigma sums, and it cannot
  read a `!` inside a form predicate** *(August 28, 2026)*. Retyping `5!`,
  `\frac{12!}{6!6!}`, or `\sum_{k=1}^{5}k^2` grades `correct` against the
  keyed integer, so every "evaluate" ask declares `decimal` (integer result)
  or `fraction` (fraction result). A symbolic factorial quotient that
  simplifies to a polynomial ($\tfrac{(n+2)!}{n!}$) takes `polynomial`; one
  that simplifies to a fraction ($\tfrac{n!}{(n+1)!}$) is passable under
  every token (`single-fraction` and `reduced-fraction` fail open on `!`) —
  pose it as a `multiplechoice`. `\binom{n}{r}` is invalid and `C(n,r)`,
  `P(n,r)`, `{}_nC_r` grade `incorrect` against their values, so a count keys
  as the bare number and the printed $C(10,3)$ is not a retype hazard.
  Recursive formulas grade well on subscripts (`a_n=a_{n-1}+3`, reordered
  spellings accepted, a shifted index refused), so the question pins the
  shape ("in the form $a_n=\ldots$ in terms of $a_{n-1}$, for $n\ge2$") and
  keys $a_1$ as its own fill-in.

- **The engine evaluates `\lim` and differentiates `\frac{d}{dx}`** *(August
  29, 2026)*. `\lim_{x\to2}(x^2+1)` grades `correct` against a keyed $5$, and
  `\frac{d}{dx}(x^2+3x)` against $2x+3$, so every "evaluate the limit"
  fill-in declares `decimal` (integer or terminating decimal), `fraction`
  (with "as a fraction" in the question — a rounded decimal is `incorrect`,
  not `form`), or `exact-radical` (a bare radical); a radical inside a
  fraction or a sum has no refusing token and is posed as a multiple choice,
  as is every limit that does not exist. One-sided limits are asked in words
  and keyed as numbers. A derivative ask prints the function as `f(x)=…` and
  asks for `f'(x)` — `\frac{d}{dx}` never appears in a question — with
  `polynomial` on an integer-coefficient polynomial derivative (it refuses a
  fraction coefficient, and `expanded` refuses a one-term key) and
  `reduced-fraction` on a rational one. The substituted difference quotient
  `\frac{(x+h)^2-x^2}{h}` grades equal to its simplification: `polynomial`
  refuses it for polynomial $f$ and `reduced-fraction` for $f(x)=\tfrac1x$,
  but for $f(x)=\sqrt{x}$ every token fails open, so that item is a multiple
  choice.
- **A rational function grades equal to its reduced form, hole and all.**
  `x+2` — and even `\frac{x^2-x-6}{x-2}` — grade `correct` against a keyed
  `\frac{x^2+5x+6}{x+3}`, so "find an equation represented by this graph with
  a hole" and "construct a function with removable discontinuities at…" are
  posed as multiple choice among candidate quotients.

The corpus-wide replay audit (`npm run verify:replay` and its manual bare-RHS
companion) is documented in `docs/history/math.md`.

## Done checklist (in addition to the core checklist)

- [ ] Every re-expression prompt carries an `answerForm`; categorical answers
      are `multiplechoice`, never digit codes.
- [ ] No file-backed instructional images; recreated figures compared visually.
