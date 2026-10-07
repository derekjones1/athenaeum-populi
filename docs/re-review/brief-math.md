# Re-review brief — math

The full-scope fixer brief for the four OpenStax math books, written for
the Prealgebra 2e chapter 1 pilot (September 26, 2026) from
`docs/subjects/math.md`, the shape of `brief-life-sciences.md`, and the
standard in `README.md`; v2 folds in the pilot's findings (Prealgebra 1.2:
32 fixes, 143k tokens). The parent fills `SP` (its scratchpad), `<unit>`,
and the page list, and before launch extracts each module's source images
to `SP/media/<mid>/` (the checkout is sparse; fixers run no git): `git -C
sources/openstax/<checkout> show <commit>:media/<file>` for every `media/`
path the module's CNXML references.

You are an Opus reviewer AND fixer: find every defect on your pages and fix
it. The math pages were authored before the September 22 bar and have had
only gate checks since: an automated key cross-check, a source-solution
gate on fill-ins, and blind solves. Nobody has read their figures against
the rendered geometry, their worked examples line by line, or their hints
against the "method, never the value" rule.

## Working rules

1. **No git commands at all**, not even read-only. The tree may carry
   uncommitted work; undo your own edit by hand.
2. Other agents share this worktree. Edit ONLY your pages, with the Edit
   tool — or, for a whole multi-line SVG, an exact-text Python splice that
   asserts the old text occurs exactly once; re-read a region right before
   editing it and after your last edit.
3. Do NOT edit `data/verification/answer-ledger.json`, anything under
   `data/openstax/`, `docs/openstax-errata.md`, `package.json` pins, or
   baselines. Do NOT run `ledger:*`, `baseline:update`, `source:fetch`,
   `npm run build`, `check:build`, or Playwright. Do not spawn sub-agents.
4. `verify:ledger` fails on every edited item (it re-hashes) — expected;
   the parent re-solves. Check with `npm run verify-section -- <page>` and
   `npm run lint`.
5. Source authority is the raw CNXML in the pinned checkout
   (`data/openstax/source-lock.json`), never the preview tool (it drops TeX
   spaces and invents markup defects). A convention finding (ordering,
   rounding, notation, digit grouping, answer shape) is a hypothesis: check
   the worked example, sibling pages, and the CNXML before editing.
6. Every reader-visible departure from the source is disclosed in the
   page's footer `Changes:` clause, in the page's existing style.

## Read (only these)

- `docs/subjects/math.md` §2 "Writing patterns", "Fill-in answer shapes and
  re-expression (`answerForm`)", "Notation the grader cannot take yet", and
  "Standing notes from the closures".
- `docs/authoring-playbook.md` §3 up to the `sortbins` block (hints, the
  categorical-answer rule) and "The section-final `## Practice` block"
  (math selects end-of-section exercises; every objective keeps its group).
- Per page: the page, and its module's raw CNXML (module id:
  `grep -n '<page path relative to content/>' data/openstax/source-map.json`;
  CNXML at `sources/openstax/<checkout>/modules/<mid>/index.cnxml`), and
  the module's images in `SP/media/<mid>/`. `python3
  tools/source/cnxml-preview.py <cnxml>` prints the module readably for
  orientation; confirm every number and solution you rely on in the raw
  CNXML.

Grader (the real one — every fill-in grades through it):
`node -e "import('./assets/js/lib/math/check-answer.mjs').then(m=>console.log(m.checkAnswer('<typed>','<answer>',{form:'<answerForm>',mode:'<answerMode>'})))"`
→ `correct` / `incorrect` / `form` / `invalid`. Text items:
`assets/js/lib/text/check-text.mjs` `checkText(typed, key, {accept})`.
Grader behaviour on a key that is one bare number (since September 26,
2026): a leading `\$` is dropped (`\$237,186` grades `correct`), and a
right number with a unit word typed after it (`140 miles`) reports `unit`
— "Right number — enter it without the unit" — never `correct`; a wrong
number with a unit is `incorrect`. A degree mark (`-6^\circ`, `96^\circ F`) is
a unit the same way, and under `percent` a bare `4.5` against `4.5\%` reports
`form` (the ask still says "including the % sign"). So a question with units still names
them ("in dollars", "in feet"), and neither is a page defect. Since the
Prealgebra chapters 2–11 run (September 26, 2026): a one-letter label is
stripped before a value form is checked (`x=13` passes `decimal`, `x=7+6`
does not), so every Solve item keyed with a bare number takes `decimal` like
any other computed key; and `no-like-terms` refuses two written constant
terms (`16x+9+8` against `16x+17` grades `form`). A "translate into an
equation (or proportion)" fill-in declares `answerForm="translation"`: any true
equation (`13=13` for `7+6=13`, `y=12` for `2(y-4)=16`) grades equal in value,
and the token requires the key's own writing (same operands and order, either
side of the `=`). Also since that run: `decimal` accepts an ordered pair
of numbers (each coordinate a decimal), so a computed-pair key takes it;
`expanded`, `single-term`, and `single-fraction` refuse written-out numeral
arithmetic (`6\cdot x+6\cdot8`, `(-14)^2x^2`, `\frac{1}{y^{7-2}}`), and
`single-fraction` refuses uncombined like terms in either half
(`\frac{3p+6p}{8}`). Since the Prealgebra knowledge-check re-review (September 27,
2026): a fraction or mixed-number percent (`33\frac{1}{3}\%`,
`\frac{100}{3}\%`) is a readable value and passes `percent`; it used to
parse invalid, so a percent key never needs rounding to dodge it. Same run:
`single-fraction` refuses a numeral power or a negative exponent
(`\frac{1}{2^3y^3}`, `\frac{1}{8}y^{-3}`), and `single-power` refuses the
reciprocal of a negative power (`\frac{1}{x^{-9}}`). Since the
Elementary Algebra chapter 1 re-review (September 27, 2026): a numeral
fraction counts as a numeral in a written product, so `expanded`
refuses `\frac{1}{4}\cdot3q+\frac{1}{4}\cdot12`. `single-fraction` alone
does NOT refuse an unreduced fraction with a sum in either half
(`\frac{6y+28}{36}` for `\frac{3y+14}{18}`, the printed
`\frac{x^2+3x+2}{x^2-x-6}` for `\frac{x+1}{x-3}`): a Simplify ask whose key
is such a fraction takes `single-fraction reduced-fraction` (72 keys across
the math books lacked it on September 27, 2026, most in the rational-expression
chapters; Prealgebra's 4 were fixed that day). Derek's decision (September 27,
2026): each row adds it to its own chapter's items in the step-3 sweep, and
the tracker's book headers list where they are. Square brackets a learner
types as grouping (`[9+(-16)]+4`) grade like parentheses, and a right value
typed as the unworked calculation is told "finish the calculation and enter
just the result" rather than the token's shape sentence. A one-letter unit
(`62 m`) still reads as a variable and grades `incorrect`, not `unit`.
Since the Elementary Algebra chapter 2–5 re-review (September 27, 2026): a
value form (`decimal`, `fraction`, `lowest-terms`, …) on an inequality,
interval, or ordered-pair key is required of each numeric side, finite
endpoint, or coordinate — the variable side is not checked, `\pm\infty`
passes — so these keys now take a form like any computed key
(`p\ge\frac34+\frac16` is `form` under `fraction lowest-terms`,
`(-\infty,62+45]` under `decimal`, `(2,1+\frac12)` under `lowest-terms`; `2`
fails `fraction`, so a mixed integer/fraction pair declares `lowest-terms`).
The `\$`/unit rules hold per list member and per pair coordinate
(`\$8,000, \$17,000` `correct`, `75 mph, 60 mph` and `(22^\circ,68^\circ)`
`unit`), a `\$` on an inequality bound is dropped, `5{,}250` is grouping
inside a pair, labelled coordinates `x=6, y=1` grade against `(6,1)`, and
`slope-intercept-form` refuses a response solved for another letter
(`x=-\frac23y-\frac23`). `expanded` refuses a term still written as a
product of factors, numeral or variable (`5x\cdot x+5x\cdot4y`,
`(5x)(x)+20xy`), and a power of a parenthesized group (`(6x)^2-25`,
`(x+5)^2-3`); it still passes uncombined like terms (declare `no-like-terms`)
and an unreduced coefficient (`\frac{2}{72}xy`, which `single-term` and
`no-like-terms` pass too). `single-fraction` and `reduced-fraction` refuse a
parenthesized monomial with a numeral raised to a power (`(2x^4)^5`,
`\frac{(3y)^2}{…}`), so a Simplify-a-quotient-of-powers key no longer needs
`distributed` added as a workaround; `(x^3)^5` with no numeral is still passed.
`distributed` and `no-like-terms` require each term's numeral fraction over
monomial halves to be reduced with integer halves: `3c+1-\frac{9}{6c}`,
`3c+1-\frac{1.5}{c}`, the split-but-undivided
`\frac{18c^2}{6c}+\frac{6c}{6c}-\frac{9}{6c}`, and `\frac{2}{72}xy+1` grade
`form` (`expanded` and `single-term` alone still pass an unreduced
coefficient).
Since the Elementary Algebra chapter 7 re-review (September 27, 2026):
`factored` is a shape check and passes an unfinished factorization
(`(2x+4)(x+2)`, `2(x^2+4x+4)`, `x(xy+y^2)`), so a "Factor" / "Factor
completely" ask whose key is complete takes `factored-completely` — every
polynomial factor primitive over the integers and the key's factor count
reached — and a GCF-only ask keeps `factored` only when its key is not itself
complete (a complete GCF key such as `14(y-3)` takes `factored-completely`,
which refuses `2(7y-21)`; Elementary Algebra knowledge check 6–10, September
28, 2026); every GCF-only ask also takes `gcf-factored` (below, October 3,
2026).
Since the Elementary Algebra chapters 8–9 re-review (September 27, 2026):
a response that drops a radical over a variable (`9x` for `9\sqrt{x}`) grades
`incorrect` — radicals over variables are decided by sampling at positive
points, never by the engine's `isEqual`, and also at negative points when
the key writes an absolute value or an odd root over a variable, so a
dropped or invented `|y|` in a 9.7-style key grades `incorrect` — a perfect
power left in a fraction radicand's half fails, `simplified-radical` refuses
numeric work left written at any level (`\frac{6\sqrt2}{4}`,
`\frac{4+2\sqrt5}{2}`, a fraction over 1, `\frac{\sqrt3\sqrt5}{5}`,
`2\sqrt2\cdot3`, `3\cdot5`, `3+4`, `z^3z^3`, `(z^3)^2`), `no-like-terms`
reads a constant and a radical term as unlike (`3+2\sqrt2` passes,
`1+2\sqrt2+2` fails), an exponent fraction left unreduced or whole
(`x^{2/4}`, `x^{6/3}`, `\frac{1}{z^{6/3}}`) fails `rational-exponent`,
`single-term` and `single-fraction`, a `single-fraction` half that is a sum
still holding a grouped product (`\frac{2(x-5)}{3(x+5)+1}`) fails, and an
equation with a variable denominator cleared (`xy=16` for `y=\frac{16}{x}`)
grades `correct` — so a "solve the formula" key keeps its `solved:` form.
Since the Elementary Algebra chapter 10 re-review (September 28, 2026): a
response with one `\pm` per member (`\pm4`, `x=-4\pm3\sqrt3`,
`\frac{-3\pm\sqrt{201}}{8}`) grades as the set of its branches against a list
key of that size, the key's form applied per branch, any other key
`incorrect`; a `\cup` compares interval by interval, so unworked endpoints in
a union reach the value forms; the right solution set in the other notation
(`x\le-0.5` for `(-\infty,-0.5]`, `(-4,\infty)` for `q>-4`) is `form`
("now write it in interval notation" / "as an inequality") and an inequality
key is compared by its set (`-2\le x<4` no longer passes `-1\le x<4`);
`lowest-terms` refuses unreduced signs (`\frac{-23}{-4}`, `\frac{23}{-4}`);
`factored` refuses an unreduced numeral fraction in a factor
(`(p-\frac{2}{12})^2`); and a fraction or mixed-number key reports a unit
word as `unit` (`\frac16\text{ hours}`). Same run: an inequality in two or
more variables grades as its half-plane (`x\ge2y+6` is `x-2y\ge6`), and an
ask that pins the writing declares `solved:y` (now read on inequalities) or
the new `line-standard-form` ("keep $x+y$ on the left side");
`slope-intercept-form` refuses uncombined constants and unreduced numerals
(`y=\frac12x+1-5`, `y=\frac{2}{4}x-4`); `single-fraction` refuses a variable
written twice in a term (`\frac{1}{q^4q^5}`); and `(6u)^{-3}`-shaped
negative powers, which froze the engine, are decided by sampling. Solution
lists with a radical take `simplified-radical` (`-\sqrt{50},\sqrt{50}` passes
without it); a rationalized radical-fraction key (`\frac{6\sqrt5}{5}`) takes
`simplified-radical` alone, because `lowest-terms` grades it `form` against
itself; `lowest-terms` stays for rational lists. A rounded application whose
second quantity the source computes from the first rounded value (Elementary
Algebra 10.4: 3(7.2)−1 = 20.6, 3(6.3) = 18.9) is a convention finding: the
page rounds each quantity from its exact value and pins "Compute each length
from the exact solution, then round it" in the stem (ruling, September 28,
2026). Since the Intermediate Algebra chapter 3 re-review (September 28,
2026): `slope-intercept-form`, `point-slope-form` and `line-standard-form`
require every number finished in the `lowest-terms` sense — the slope formula
typed unworked (`y=\frac{-3-1}{1-(-2)}x`), `y=(2+1)x-4`, `y=\frac{4}{-3}x`
and `y=2x-(-3)` are `form`; `y=\frac{-4}{3}x`, a mixed-number constant, and
point-slope's substituted `y-(-3)` still pass. A function label with an
expression argument or made of applications (`g(m^2)=4m^2-7`,
`f(x)+f(2)=x^2+4`) is stripped against a key with no `=`, so an "evaluate
$f(x+2)$" item graded that way needs no MC workaround. Since the Intermediate
Algebra chapter 4 re-review (October 3, 2026): a whole-number coefficient,
`e`, then a sign (`110e+360d`, `3e-2`) is algebra, not scientific notation,
so a source's variable `e` keeps its letter. A chain of operations on one
matrix (or one quantity) asked as separate items prints each item's
starting state in its own stem — "starting from the result above" stems
print the previous item's key. Since the Intermediate Algebra chapter 5 re-review
(October 3, 2026): a combined-function label (`(f+g)(x)=`, `(f-g)(-2)=`,
`(f\cdot g)(2)=`, `(fg)(x)=`, `\left(\frac{f}{g}\right)(x)=`, `(f/g)(-5)=`)
is stripped against a value key, so a function-arithmetic ask needs no
"enter just the polynomial" pin; `no-like-terms` refuses a sum holding an
improper polynomial quotient (`x^3-3x^2+2x+\frac{x+6}{x+3}`), so a
long-division key with a remainder takes `expanded no-like-terms`; and
"with a positive exponent" on a numeral power (`\frac{1}{12^{15}}`) takes
`single-power positive-exponents` (`single-power` alone passes `12^{-15}`). Since the Intermediate Algebra chapter 6 re-review
(October 3, 2026): `factored` (and so every factoring token) refuses a sum
left unsimplified inside parentheses — the substitution left in place
(`(x-5+2)(x-5+4)`), a cube pattern's factors unsquared
(`(x+3)(x^2-3x+3^2)`) — and tells the learner to simplify inside; a GCF-only
ask ("by taking out the greatest common factor") takes `gcf-factored`, which
refuses a GCF taken out in part (`2(4a^3b+…)` for `2ab(…)`) or with the wrong
sign (`4b(-b^2+4b-2)` for `-4b(b^2-4b+2)`), composed with `factored` on an
incomplete key and `factored-completely` on a complete one. A bare command
word in math (`checkmark`, `cdot`, `frac`) is a lint error.
Since the Intermediate Algebra chapter 7 re-review (October 3, 2026):
`solved:<v>` composes — the other tokens read the side $v$ equals — so a
solve-for or variation key that is a fraction takes `solved:<v>
single-fraction reduced-fraction` (refuses `a=\frac{2b}{2bc-2}`,
`h=\frac{2\cdot65}{t}`) and a combined sum takes `solved:<v> no-like-terms`
or `expanded distributed no-like-terms`; equation forms still read the whole.
Since the Intermediate Algebra chapters 8–10 re-review (October 3, 2026):
complex values compare with a tolerance and a numeral fraction whose
numerator holds a radical times `i` is read (`\frac{-4\pm2\sqrt2 i}{3}`
grades `correct`), so a complex solution list needs no "in $a+bi$ form"
pin; `no-like-terms` reads `\frac{16i}{17}` as one term and refuses `5i+3i`;
`expanded`, `single-term` and `no-like-terms` refuse a written power of `i`
(`20i-12i^2`, `i^{35}`), and `single-term` passes `i` and `-i`; `2\sqrt{-3}`
still grades `incorrect` against `2\sqrt3 i` (deliberate). Since the Precalculus chapter 3 re-review (October 4, 2026): a complex key
$a+bi$ takes `expanded no-like-terms` (it refuses `(3-2)+(-4-5)i`,
`1+(-9i)`, `-4\cdot2-4\cdot6i`, and $i$ in any denominator, `4+\frac{6}{i}`),
never `decimal`/`lowest-terms`, which refuse the complex key itself; a list
mixing a real zero with complex ones (`2,3+2i,3-2i`) takes the same form. A
labelled key whose stem prints its bare value (`x=3` after "shifted right 3
units") keeps `solved:x` with the value form (`solved:x decimal`): `decimal`
alone grades the bare `3` correct, and `verify:replay` fails it. When a
source's prompt, drawing, and printed answer disagree, fit the drawing
before choosing: the drawing and the pinned prompt outrank a solution that
matches neither (3.4's "degree 9" graph, erratum 33 as amended). `simplified-radical`
refuses a letter outside the radical in both one-term halves
(`\frac{2x\sqrt{5x}}{x^2}`) and a minus in a one-term denominator, and checks
each endpoint of an interval, union, or inequality. `single-term` and
`single-fraction` refuse exponent arithmetic left written
(`x^{\frac34\cdot\frac23}`) and a numeral perfect root (`\sqrt{25}`);
`rational-exponent` refuses the retyped `(32x^{\frac13})^{\frac35}` and a
decimal exponent; `reduced-fraction` accepts a rational exponent's bar
(`\frac{5n}{m^{1/4}}`). A three-sided estimate key (`6<\sqrt{38}<7`) takes
`decimal` — its given middle is exempt and `\sqrt{36}<\sqrt{38}<\sqrt{49}` is
`form`. A leading `\approx` (or a label, `x\approx`) is dropped on a bare-number
key, so a rounding ask needs no "without the ≈ sign" pin. `vertex-form`
refuses constants left uncombined (`-4(x+1)^2+1+4`, `+0`); `factored` refuses
a compound numeral fraction or an added signed term in a factor
(`(p+\frac{\frac14}{2})^2`, `(a+(-10))^2`); `lowest-terms` refuses a fraction
over 1; `exact-log` takes either term order (`2+\ln9`); `expanded-logarithms`
refuses a power inside a log's argument (`\log_2 x^4`) and a log with a
rational value left unevaluated (`\log 10000`); `single-logarithm` passes a
`\cdot` inside the argument. On an ordered pair or triple key, shape tokens
apply per coordinate as value forms do, so a polynomial tuple takes
`expanded distributed no-like-terms`. A `log` curve with base below 1 trims to
`from`/`to` (graph-core). A paraphrased source stem can drop a source-key
match: keep a source exercise's wording and add the pin after it — a pin
that prints a number of its own ("Round the number of years after 2005 …")
can drop it too; "Round to the nearest year." kept the match (Precalculus
2.3). Since the Precalculus chapters 1–2 re-review (October 4, 2026): a radical
over a variable whose radicand is negative at the small sample points
(`\frac{3x^2}{\sqrt{x-5}}`) is sampled inside the key's own domain, so the
rationalized entry `\frac{3x^2\sqrt{x-5}}{x-5}` grades `correct` and
`\sqrt{x-50}` against `\sqrt{x-5}` grades `incorrect` (a point where the key is
real and the response is not is a disagreement); `reduced-fraction` refuses a
numeral common factor beside a radical (`\frac{6x^2}{2\sqrt{x-5}}`);
`simplified-radical` refuses uncombined terms in a radicand
(`\sqrt{x^2+1+2}`); `point-slope-form` refuses `y=-3x` unless the key's own
point is the origin; `slope-intercept-form` strips a one-letter label that is
not a variable of the expression (`d=100-10t`) and refuses a written zero term
or a parenthesized point-slope shape (`2x+0`, `2(x-0)`); a chained label
(`y=f(x)=\frac{\sqrt[3]{x}}{2}`) is read as one label; and an unevaluated
numeral root (`\frac{\sqrt[3]{x}}{\sqrt[3]{8}}`) is `form` under
`simplified-radical`. A linear-model key (`0.5x+12.5`, `12025-205t`) takes
`slope-intercept-form`, which accepts a function label and either term order
and refuses an unworked slope.

Since the Precalculus chapter 4 re-review (October 4, 2026): an exponential
model or transformed-exponential key (`6(5)^x`, `-\frac13e^x-2`, `4^{-x}`,
`A_0e^{\frac{\ln2}{3}t}`, `90e^{-0.008377t}+75`) takes the new
`exponential-model` token — one exponential term plus at most one constant,
every number finished — which refuses `6\cdot125^{x/3}`, `\frac{750}{125}(5)^x`,
`e^{x+0}`, `-1\cdot10^x+7`, and a regression model typed with more decimals
than the stem asks (`form`, never `correct`); a "change to base $e$" key
composes `base-e exponential-model`, which refuses the printed $ab^x$. A
logistic key has no token yet. `expanded-logarithms` refuses a log of a
polynomial that factors over the integers (`\ln(x^2-9)`), a composite numeral
argument where the key's are prime (`\log_b 14` for `\log_b2+\log_b7`), and
written coefficient arithmetic (`\frac13\cdot2\ln x`); it also grades the
source key `\log_2(-(x-1))` `form` against itself, so a reflected-log key
declares no form. `single-logarithm` requires the argument's numeral work done
(`\ln\frac{6x^9}{3x^2}`, `\log_3(4^2)` are `form`), so a condense ask whose
source accepts an unreduced argument pins "in lowest terms" (4.5). `exact-log`
accepts `\frac{-\ln2}{2}` and a log of a numeral fraction (`\ln\frac{1}{\sqrt2}`,
a source's own printed answer) and refuses `\log 100` for `2`; the new
`natural-log` composes with `single-fraction` for "a quotient of natural
logarithms"; `no-like-terms` refuses numeral exponent arithmetic
(`e^{\frac{10}{2}}-1`). Grading: a nonzero constant below 1 compares relatively
(a tiny scientific-notation key no longer accepts every value under $10^{-9}$),
and a logarithm of a negative argument is non-real, so `\ln x` against
`\ln(-x)` and `\ln|x|` against `\ln x` grade `incorrect`. Gate trap: a
digit-grouped stem (`1{,}000`) now keeps its source-key match (the matcher had
read it as 1 and 000).

Since the Precalculus chapters 5–6 re-review (October 4, 2026): the trig tokens
alone pass written arithmetic, so they compose with a value or shape form —
an evaluated radical key takes `evaluated-trig simplified-radical` (refuses
`\frac{2\sqrt2}{4}` and the unrationalized `\frac{1}{\sqrt2}`), a rational or
integer key `evaluated-trig lowest-terms` (refuses `\frac{30}{34}`,
`1-2(\frac45)^2`), a π-valued key `radians single-term` (refuses
`\frac{6\pi}{4}`, the retyped conversion `270\cdot\frac{\pi}{180}`, the
coterminal step `2\pi-\frac{\pi}{3}`, the half-worked period
`\frac{2\pi}{\frac13}`, `\frac{\pi}{2(3)}`, `\frac{2\pi}{1}`), an inverse-trig
angle `evaluated-trig radians single-term`, and a sinusoid or transformed-trig
formula `no-like-terms`, which now reads inside each function's argument
(`4\sin(\frac{2\pi}{10}x-\frac{\pi}{5})+4`, `2\cdot2\tan(2x)`, `1\sin x`, `+0`
are `form`; the factored phase `4\sin(\frac{\pi}{5}(x-1))+4` passes). Write
every key with `\frac`, never a slash: `lowest-terms` grades `15/17` `form`
against itself. `single-term` now reads interval endpoints one by one and
passes a bare `0`, so `[0,\pi]` takes `evaluated-trig radians single-term`. A
bare number against a degree key (`240` for `240^\circ`) is `form` ("write it
in degrees, with the degree symbol"), and `degrees` refuses arithmetic under
the mark (`\frac{720}{3}^\circ`). `evaluated-trig` refuses an unspaced degree
argument (`\cos45^\circ`; the same word-boundary hole let `\ln1` pass
`evaluated-logarithm`). sec/csc/cot over a variable compare by sampling
(`\frac{1}{\csc t}` is `correct` for `\sin t`), and `single-trig-function`
requires the key's own function on the key's argument, finished: the
cofunction prompt `\cos(\frac{\pi}{2}-t)`, `\sin(-t)` for `-\sin t`,
`\frac{1}{\cot t}` for `\tan t`, `\frac{\sin t}{1}` are `form`. Engine limit:
`\sin t\cdot\frac{1}{\cos t}` parses as $\sin(t\sec t)$ (`incorrect`, not
`form`). Stem trap: "Rationalize the denominator." after "Find $\sin A$" makes
`verify-answers` read $\sin A$ as a printed subject to re-express; pin "Enter
the exact value, with a rational denominator." A `kind="figure"` angle mark is
a figure circle with `from`/`to` (exact arc). A source reference chart placed
directly above the Try It it answers (Precalculus 5.2's special-angles unit
circle and its table above the $\tfrac{5\pi}{3}$ Try It) moves below that Try
It, disclosed; a summary table far above the Practice block stays.

Since the Precalculus chapters 7–8 re-review (October 5, 2026): a lowercase
Greek letter is a one-letter label (`\alpha=27.7^\circ` passes `degrees`;
never `\pi`), a leading `\approx` is dropped on a degree-marked bare-number
key and on each member of a list of bare numbers
(`\alpha\approx27.7^\circ,\beta\approx40.5^\circ`), and a labelled bare count
against a degree key (`A=27.7`) is `form`. Two new trig tokens:
`no-trig-products` (product-to-sum, power reduction, a sum formula expanded in
$\sin x$ and $\cos x$ — refuses `\sin x\cos x`, `\cos x\cos\frac{2\pi}{3}`,
`\cos^2(2x)`, `(1-\cos 6x)^2`; compose `no-like-terms`) and `trig-product`
(sum-to-product — the key's own product, refuses the printed sum, the
half-worked averaged arguments and `\cos(-\theta)`), so those items are
fill-ins, not MC. `no-like-terms` now reads every summed group at any depth
(`\tan(\frac{15x-14x}{10})`, `\frac{-\sqrt3+1}{1-(-\sqrt3)}`), a trig argument
with its degree marks off (`3\cdot45^\circ`, `\frac{240^\circ}{3}`), π as a
numeral in a product (`2\pi\cdot3t`, `2\pi(3)t`), and refuses a numeral times
a fraction (`2\cdot\frac{\sqrt2}{2}`, `\frac14\cdot\frac{1-\cos 4x}{2}`), a
numeral power (`5^3`; base 10 exempt), a compound fraction and a squared
numeral sum (`(1-\sqrt3)^2`); a trig term is never a numeral like term or zero
term, so the polar key `\frac34(\cos180^\circ+i\sin180^\circ)` passes, and a
powered group is a base, so the damped key `10(0.85)^t\cos(36\pi t)` takes
`no-like-terms`. `distributed` and `single-fraction` step over a function's
argument (`\cos(80^\circ)`, `\frac{1-\cos(4x)}{8}`). `simplified-radical`
takes a nested radical (`\frac{\sqrt{2-\sqrt2}}{2}`) and refuses a perfect
power common to a sum radicand (`\sqrt{4x+8}`). On a pair key, a coordinate
the key rounds to a decimal takes a bare number under any shape token, so
`(2\sqrt5,0.464)` takes `radians simplified-radical`. A general solution keyed
with k beside π or a degree mark accepts `\pm k\pi` and `-k\pi` (k ranges over
every integer; `2k\pi` for `k\pi` stays `incorrect`); a degree family key
declares no `degrees`. A product-to-sum or power-reduction ask whose stem pins
"distribute any constant factor" composes `distributed` too (`no-trig-products
distributed no-like-terms` refuses `\frac12(\cos2x+\cos6x)` and
`\frac{\cos2x+\cos6x}{2}`). A "rewrite in terms of $\sin x$ and $\cos x$" key
(a sum formula expanded) takes `expanded no-trig-products no-like-terms`:
`no-trig-products` alone passes the retyped prompt `\cos(x+\frac{2\pi}{3})`,
which is one application, not a product. A Try It whose answer is a scalar
multiple of the worked example directly above it (Precalculus 7.3's
$10\cos^4x$ under the $\cos^4x$ example) prints its key; swap it for a keyed
exercise of the same objective, as for an exact repeat.

Gate traps (Elementary Algebra chapter 1, September 27, 2026): the source-key
matcher in `verify-section` compares magnitudes, so an item whose stem prints
`$-10$` in the wording of a +10 source item pairs with it and fails
key-differs — keep a source item's own sign and wording. "Convert $-10$ …
to …" trips the answer check's re-expression rule; ask "What is $-10$ … in
…?". Do not widen a matcher or checker to pass your page; report the case.

Figures and display math: `node tools/figures/render-page-figures.mjs
<page> SP/render/<page-stem>` renders every inline `<svg>` to
`L<line>.png` and every `$$…$$` block to `B<line>.png` (Read them; re-run
after an edit — it clears the old renders). An `apfigure` spec renders
with `node tools/figures/render-figure.mjs <graph|numberline|figure>
'<spec json>'`.

## Per page

1. Read the whole page and the module CNXML (body, examples, Try Its,
   exercises and solutions, glossary).
2. **The body, line by line.** Every worked example: recompute each step;
   the numbers, the operations, and the final value must be right and
   agree with the step table. Every claim in prose is true and matches the
   module. Every in-body fill-in ("Try It") is graded like a Practice item
   (step 3). Render every display block and look at it: math can render
   wrong without throwing — carried digits set in their own right-aligned
   row land over the wrong column (write a carry as `\overset{1}{4}`
   on its digit), `\\` outside an environment, `\text{If} n` joins, an
   unbraced multi-digit exponent in `answer`, a `|` in a table row, an
   ungrouped four-digit number.
3. **Every graded item**, in order. Cover the key and solve it yourself
   first. Then check:
   - **key** vs your own solution AND the CNXML `<solution>` for a source
     item (the pages mark nothing; match by the numbers). A new-number item
     (the footer says "used new example numbers") is checked by your
     solution alone. `answerDisplay` states the same value as `answer`,
     with units where the question names them.
   - **the ask pins the answer:** the question says what to enter (units,
     "in dollars", "as a whole number", which quantity first in a list);
     a categorical answer is a `multiplechoice`, never a digit code or a
     word the learner must type in MathLive; a re-expression ask carries
     the `answerForm` that refuses the retyped prompt — run the grader on
     the retyped printed subject and expect `form` or `incorrect`. This
     covers asks the retype lint cannot see because the numbers are in
     words or prose: "translate and simplify: 29 increased by 76" and
     every word problem accept the typed unevaluated expression
     (`29+76`, `18+15+26+49+32`) unless the item declares `decimal` (or
     the form its key needs). **Sweep every fill-in on your pages whose key
     is a computed number and which declares no `answerForm`** — body and
     Practice alike — and add the form after checking the grader refuses
     the retyped expression. Derek's decision (September 26, 2026): these
     items are fixed chapter by chapter by this re-review, not by a corpus
     pass. The lint has enforced it since October 4, 2026 on every page
     except the Precalculus chapters in `VALUE_FORM_SWEEP_PENDING`
     (`tools/lint/lints.mjs`): when your row closes, delete its chapter's
     entry and make `npm run lint` pass — that is the sweep's check.
     In the same sweep, add `reduced-fraction` to every Simplify fill-in
     keyed `single-fraction` whose key has a sum or difference in either
     half, and check the grader returns `form` on the unreduced fraction.
     The sweep also covers every inequality, interval, and ordered-pair key
     (a value form now applies to each bound, endpoint, and coordinate —
     grader paragraph above): 214 inequality or interval fill-ins had none on
     September 27, 2026. Run the grader on the bound left unworked
     (`x\ge\frac34+\frac16`, `(-\infty,62+45]`) and expect `form`.
     A Multiply or Simplify fill-in keyed a combined polynomial takes
     `expanded distributed no-like-terms` (the Prealgebra 10.3 form), not
     plain `expanded`, which accepts the FOIL line before combining
     (`x^2+9x+9x+81`); 286 items declared plain `expanded` on September 27,
     2026 (Elementary Algebra 6.3 and 6.4 swept theirs).
     Every factoring fill-in ("Factor", "Factor completely", factor by
     grouping or by a pattern) whose key is a complete factorization takes
     `factored-completely` in place of `factored`; run the grader on a
     half-finished product (the GCF left inside, `(x^2+4)(x^2-4)` for a
     nested difference of squares) and expect `form`. A GCF-only ask takes
     `gcf-factored`, with `factored` when its key is not complete and
     `factored-completely` when it is. On September 27, 2026, 292 factoring asks declared
     `factored`; on October 3, 2026, after Intermediate Algebra ch6 and the
     GCF sweep (Prealgebra 10.6, both knowledge checks with GCF asks), the
     remaining plain `factored` asks are Intermediate Algebra KC 1–6 (7),
     and Precalculus 3.4 (4) and 7.1 (1), all pending rows (the
     completing-the-square items of Elementary Algebra 10.2 and Intermediate
     Algebra 9.2 took `factored-completely` on October 3, 2026).
     A radical sum key (Multiply, Add, Subtract, or Simplify — `3+2\sqrt2`,
     `2\sqrt3-3\sqrt6`) takes `no-like-terms` with `simplified-radical`
     (`expanded simplified-radical no-like-terms` for a Multiply); run the
     grader on the uncombined line (`1+2\sqrt2+2`) and expect `form`.
   - **grader reach:** run the grader on the forms a learner would
     naturally type (with and without digit-grouping commas, `x=5` vs
     `5`, an equivalent fraction or decimal, a unit word) and on a common
     wrong answer; the right value must grade `correct`, the wrong one
     must not.
   - **hint** (the top class in every book so far): it names the method or
     where to look — "line up the place values and add each column" —
     and never the final value, nor an intermediate result that leaves
     only a copy step (the product whose sum IS the answer, "the quotient
     is 3 remainder …", the column-by-column carries). A hint never
     performs the section's objective for the learner: on a "translate"
     item it does not print the translated expression, on a "model" item
     it does not state the regrouped count, on a sign-rules item it does not
     state the result's sign ("the signs differ, so the product is
     negative" — the parent rewrote 12 such hints in Elementary Algebra
     chapter 1). Never "not X" of the key. A hint that restates
     the question adds nothing: give the method. Keep it short. A hint's
     arithmetic, when it has any, must be right.
   - **nearby leaks:** a worked example, Try It, figure, or `aria-label`
     directly above that works the SAME numbers prints the key; an MC
     option or another item's stem that states this item's answer; a
     figure whose label or drawn result is the key sitting above its
     question. A printed expansion with its letters renamed is the same
     key: the $(a+b)^5$ row of a pattern table prints "expand $(x+y)^5$",
     Example $(x+y)^6$ prints "expand $(m+n)^6$" and "the third term of
     $(x+y)^6$". An MC whose correct option prints the next item's key
     ("write in standard form" options above "what is the vertex?") leaks
     it: make the MC a fill-in under the shape's token so the key exists
     only in the learner's own entry *(Intermediate Algebra chapters 11–12,
     October 4, 2026; each was found by the blind solve, not the fixers)*.
   - **duplicate asks:** two items on the page with the same numbers, or a
     reworded re-ask → replace the author item with a distinct source
     exercise from the module's exercise set (an answer-keyed one; see the
     Practice-block rules).
   - **MC:** exactly one defensible option; distractors are the real
     errors a learner makes, not throwaways; no option is true under a
     reading the stem allows.
   - **stem:** unambiguous, no dangling referent ("the figure above" when
     none is), source stem numbers verbatim for a source item.
   - **Try Its:** the pages convert a selection of the module's Try Its;
     do not add unconverted ones. A converted Try It carrying author
     numbers the footer does not disclose → restore the source numbers
     (ruling, September 26, 2026); disclose instead only when the source
     version cannot be rendered (it depends on a figure the page lacks).
   - **Translation MCs:** a reversed-order option ("two plus five" for
     $5+2$) is a sound distractor — a translation keeps the order — not a
     double key (ruling, September 26, 2026).
4. **Every figure, image-first by inventory.** Render it and Read the PNG
   at full size; open the matching source image in `SP/media/<mid>/`.
   Inventory what is DRAWN — counts of blocks, rods, counters, rows,
   ticks, and their grouping; every printed label and number; arrow ends;
   points and their coordinates — then check: (a) the drawing is the
   mathematics the prose or question says it is (count them); (b) the
   `aria-label` describes that drawing, not the intended one, and never
   states a key the page asks for below it — on a model-and-count item
   the label gives what the question gives and leaves the counted result
   to the learner ("twenty counters separated into groups of four", not
   "… into five groups of four" above "what is the quotient?"); (c) it matches the source
   figure's content where the page says it redraws one. Fix the SVG or
   the label so all three agree; a figure you cannot make correct → needs
   parent. Keep geometry analytic and legible (no overlaps, text inside
   the viewBox, dark-mode safe: `currentColor`, no hard black fills).
   A page whose footer says it omitted or described the source's figures
   in words restores each worked example's graph and the concept figures
   the prose explains, as `apfigure`s on the source window — never a Try
   It's or exercise's answer graph (Intermediate Algebra 9.8 and 10.1–10.2,
   October 3, 2026; chapter 11's five pages, 77 figures, October 4, 2026).
   The parent then runs an Opus figure checker over every fixer-drawn
   figure: on chapter 11 the checkers made 35 legibility fixes (arrowheads
   on arrowheads, strokes through tick digits, labels on ink) and found no
   math errors. Since October 6, 2026 the engine knocks the tick digits out
   of every stroke and relocates a crossed digit to the clear side of its
   axis, so a checker never hand-draws ticks as `segments` or digits as
   `texts`: the fix for a curve across the digit row is `xTickOffset` /
   `yTickOffset`, and a polar grid (rings and spokes) is `faint: true`.
5. The footer `Changes:` clause: counts from a tally of the page, claims
   true; never where a correction is logged or who it was reported to.
6. After your edits, re-check every edited item's neighbours for new
   leaks, every positional hint ("the figure above") after a reorder, then
   `npm run verify-section -- <page>` and `npm run lint`.

## What you may and may not change

- **Keep item types.** Never convert a fill-in to multiple choice to
  escape a leak or a grading problem the grader can meet with an
  `answerForm`, an `answerMode`, or a pinned ask. Convert only per the
  math playbook's own rules (a categorical answer; a shape no token
  refuses) and list it under "needs parent".
- **A multiple choice that exists only because the grader once could not
  take the answer** — interval notation, a union, a domain or range, a
  number, a function formula — becomes a fill-in again, its stem saying "in
  interval notation" where needed and a value form on every endpoint; probe
  the key, the inequality form (`form`), a wrong bracket (`incorrect`), and an
  unworked endpoint (`form`) *(Precalculus chapters 1–2, October 4, 2026: 31
  items; precedent Intermediate Algebra 7.1 and 12.1)*. Categorical
  multiple choice (yes/no, which graph, describe-the-transformation, verbal
  judgements, a graph-read estimate, a pair of answers that cannot be one
  entry) stays.
- Hints, author-written items, `answerDisplay`, `answerForm`, pinning
  words in a question, item order within a group, figures and their
  labels, worked-example arithmetic, and footers: yes.
- A SOURCE item's numbers and its key: never changed to dodge a problem.
  A wrong source solution → keep the correct key, disclose the deviation
  in the footer, and draft an erratum.
- Keep each objective group at the book's floor when replacing items.
- Source defects you confirm → draft errata (unnumbered) in your report,
  in the format of the latest entries in `docs/openstax-errata.md`; check
  there first so you don't re-file.

## Report

Write `SP/reports/<unit>.md` with Bash (`cat >> … <<'EOF' … EOF`),
appending page by page — the Write tool refuses report files for
subagents, and a fixer killed by a session limit keeps what it appended:
- per page: path, module id, graded items, figures, then
  `| file:line | class | fix applied |` with the classes `wrong-key`,
  `display`, `ask-pin`, `grader-reach`, `retype`, `hint-leak`,
  `hint-factual`, `nearby-leak`, `duplicate-ask`, `double-key`,
  `stem-ambiguity`, `body-math`, `render`, `figure-geometry`,
  `figure-label`, `footer`, `source-fidelity`, `other`;
- totals per class; "needs parent" (what you did not fix, and why); draft
  errata.

Reply in ten lines: pages done, fixes by class, needs-parent count, errata
drafted, every file edited, and confirmation that lint and verify-section
are clean.
