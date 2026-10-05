# OpenStax Mathematics — subject playbook

The subject-specific rules for the four OpenStax math books: **Prealgebra
2e, Elementary Algebra 2e, Intermediate Algebra 2e, and Precalculus 2e.**
`docs/authoring-playbook.md` is the shared core and governs every book; this
document adds KaTeX notation, the `answerForm` grading vocabulary, and the
`graphplot` and graph-core figure rules. Read both before authoring a math
section.

Prealgebra 2e re-reviewed to the A&P standard, completed September 27, 2026.
Elementary Algebra 2e re-reviewed to the A&P standard, completed September 28, 2026.
Intermediate Algebra 2e re-reviewed to the A&P standard, completed October 4, 2026.

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
- **A sign after an opening bar or `\ldots`: `\lvert -5\rvert`, `\ldots {-3}`**
  — KaTeX's `|` is an ordinary symbol, so `$|-5|$` renders "| − 5|" with the
  sign spaced as subtraction (`$|a|-|b|$`, a minus after a CLOSING bar, is
  correct and stays). The lint rejects both shapes in every math span.
- **Worked-example step tables:** align relations with `\begin{array}{lrcl}`,
  rows `explanation & LHS &=& RHS \\[4pt]`. Separate steps with `\\[4pt]` (the
  lint rejects bare `\\` in `{lrcl}` arrays).
- **Carries and borrows sit on their digit:** `\overset{1}{3}\overset{1}{2}4`
  in a `{r}` array. A separate row of `{}^{1}` marks is right-aligned against
  the row below and lands over the wrong columns without an error (the lint
  rejects it).
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
- **A ± response is the set of its two branches** *(Elementary Algebra
  chapter 10 re-review, September 27, 2026)*. Each comma-separated member
  holding exactly one `\pm` (or `\mp`, `±`) is read as its minus and plus
  branches — `\pm4`, `x=\pm4` (the label stripped as usual),
  `-4\pm3\sqrt{3}`, `\frac{-3\pm\sqrt{201}}{8}`, `(\pm4,0)`, `\pm2,\pm3` —
  and graded against a list key with that many members AS A SET, whatever
  the `answerMode`: the ± states no order. The key's `answerForm` applies to
  each branch as to a typed member (`-4\pm\sqrt{27}` and `\pm\sqrt{50}` are
  `form` under `simplified-radical`). A ± response against any other key (one
  value, a list of another size, an interval) is `incorrect`; a member with
  two ± is not expanded, except a point with at most one `\pm` in each of two
  or three coordinates: `(\pm3,\pm4)` is its four sign combinations
  *(Intermediate Algebra chapters 11–12 re-review, October 4, 2026)*, and a
  key listing only correlated points (`(2,3),(-2,-3)`) still refuses it. Key
  the pair as the two members (`-4,4`), never with `\pm`. MathLive types ± as `\pm` (inline `+-`, shifted minus key).

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
| `rational-exponent` | the WHOLE response is `coefficient? base^rational`, one term and one factor, the exponent a non-integer *by value* ($^{2/2}$ is the integer 1) and the base a variable or a group holding one — the radical→exponent conversions are value-identical by design. The exponent fraction is in lowest terms ($x^{\frac{2}{4}}$ fails against $x^{\frac12}$) |
| `radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}`, one term and one factor, no exponent on the radical, an integer index $\ge 2$, and a variable in the radicand — the mirror conversion. The radicand's numeric work is finished (no common integer content across a fraction bar, no bar over 1, no fraction inside a fraction's half, no two numerals in one term, no decimal, no zero term: $\sqrt{\tfrac{3V}{12\pi}}$, $\sqrt{\tfrac{V}{\frac13\pi\cdot12}}$ fail), but a perfect power stays legal — so a source key such as $\sqrt{\tfrac{V}{4\pi}}$, which `simplified-radical` refuses for its 4, declares `radical` |
| `exact-log` | the WHOLE response is `integer? logarithm` or `\frac{logarithm}{logarithm or integer}`, optionally plus or minus one integer, each logarithm taking a single variable, a numeral whose logarithm is irrational (`\log 100` fails), or a finished numeral fraction — integer halves in lowest terms, or a simplified numeral root over an integer or the reverse (`\ln\frac{1}{\sqrt2}`, `\tfrac12\ln\tfrac12`) — **and no decimal point anywhere**; the minus may sit on the numerator's logarithm (`\frac{-\ln 2}{2}`) but not twice or in the denominator, and the integer company is never 0 — for "enter the exact answer" asks whose key is a logarithm |
| `exact-radical` | the WHOLE response is `coefficient? \sqrt[n]{radicand}` with no decimal point anywhere, and `simplified-radical` besides — for "enter the exact form" asks whose key is a radical. `simplified-radical` alone cannot serve them: it passes any response holding no radical, including a rational approximation $\tfrac{1140175425099138}{100000000000000}$ |
| `exact` | no decimal point anywhere in the response, and nothing else — for an "in exact form" ask whose answer is a CONTAINER with no single shape: "Enter both solutions in exact form" keyed $(-\sqrt3,0),(\sqrt3,0)$, where demanding a radical would reject the $0$ member. The weakest of this family — compose it with a shape token whenever the response has a shape worth naming |
| `summation` | the WHOLE response is `coefficient? \sum_{lower}^{upper} body`, one term and one factor, both bounds written — for "write the sum using summation notation" |
| `single-logarithm` | exactly one logarithm in one term, and the term IS the logarithm (no outside coefficient — $2\log_2\sqrt{5x/y}$ is the Power Property left unapplied) — for "condense to one logarithm"; the argument's numeral work is finished — no numeral power or product (`\log_3(4^2)`, `\log_3(4\cdot4)`), no exponent arithmetic, every fraction reduced (`\ln\frac{6x^9}{3x^2}`, `\log_b\frac{28}{7}`, `\log\frac{15}{24}` fail) |
| `mixed-number` | a whole number and a proper fraction |
| `improper-fraction` | $\tfrac{a}{b}$ with $\lvert a\rvert \ge \lvert b\rvert$ |
| `fraction-or-mixed-number` | either shape — for a source ask that offers the choice |
| `lowest-terms` | numerator and denominator share no factor, and the sign is reduced: at most one minus, never in the denominator ($\tfrac{-23}{-4}$, $\tfrac{23}{-4}$, $-\tfrac{-23}{4}$ fail; $\tfrac{-23}{4}$ and $-\tfrac{23}{4}$ pass) |
| `scientific-notation` | $a \times 10^{n}$ with $1 \le \lvert a\rvert < 10$ |
| `prime-product` | a product of prime powers |
| `single-power` | one $a^{n}$, not a product or nested power — for "Simplify $(3^8)^2$, write the answer as a power of 3" |
| `expanded` | a sum of terms, not a product/power/quotient — for "Multiply: $(w+5)(w+7)$"; still allows a remainder term. No term may still write a product of factors (`5x\cdot x`, `(5x)(x)`, `5x(x)`) or a power of a parenthesized group (`(6x)^2`, `(x+5)^2`); uncombined like terms and an unreduced coefficient still pass (`no-like-terms` owns the former). A plain numeral (`2`, `-3`, `2.5`) passes as a+0i, as a lone `i` does — so a complex-zero list mixing a real member (`2,3+2i,3-2i`) passes its own key; `3\cdot5`, `(2)(3)`, `2^3` and a lone monomial `x` still fail. No sign stands stacked on a parenthesized single term (`1+(-9i)`, `-(9i)+1`, `x^2-(3x)` fail; `x^2-(x+1)` is `distributed`'s) |
| `single-term` | one monomial: one coefficient, each variable once, no written $\cdot$, no top-level $+$, no $\,^0$ factor, no exponent fraction left unreduced or whole ($x^{2/4}$, $x^{6/3}$), no coefficient fraction left unreduced or over 1 ($\frac{20}{4}x^2$, $\frac{20x^2}{4}$, $\frac{5}{1}x^2$; $\frac34x^2$ passes), a plain numeral passes ($0$, $-3$; not $-0$), on an interval or inequality key each finite endpoint is read on its own ($[0,\pi]$ passes, $[1-1,\pi]$ and $[0,\frac{2\pi}{2}]$ fail), no bar over 1 even on a non-numeral ($\frac{2\pi}{1}$), no numeral product written by juxtaposition ($\frac{\pi}{2(3)}$), no compound fraction — a bar inside a fraction's half, or a `/` or `\div` beside a second bar ($\frac{2\pi}{\frac13}$, $2\pi/(1/3)$, $2\pi\div\frac13$, $\frac{\pi}{3}/2$; also refused under `simplified-radical`) |
| `single-fraction` | one quotient, no $\div$ and no top-level $+$; reduced when both halves are monomials; no numeral power (`\frac{1}{2^3y^3}`) and no parenthesized monomial with a numeral raised to a power (`(2x^4)^5`, `(3y)^2` — `reduced-fraction` refuses these too); no exponent fraction left unreduced or whole (`\frac{1}{z^{6/3}}`); each half is one product or a sum of plain terms — never a sum still holding a grouped product (`\frac{2(x-5)}{3(x+5)+1}`); each variable written once per term of each half (`\tfrac{1}{q^4q^5}` fails against `\tfrac{1}{q^9}`) |
| `positive-exponents` | no exponent written with a minus sign — composes with a shape token; for "with a positive exponent" on a numeral power (`\frac{1}{12^{15}}` under `single-power positive-exponents` refuses `12^{-15}`, which `single-power` alone passes, while `single-fraction` refuses the key's numeral power) |
| `reduced-fraction` | exactly one $\tfrac{a}{b}$ with no common polynomial or integer factor across the bar — for "Simplify $\frac{x^2-x-2}{x^2-3x+2}$"; a half the checker cannot read as an integer-coefficient polynomial passes on its value alone |
| `no-like-terms` | a sum in which no two terms share a like-term signature — the variable monomial AND the radical part as written (same index and radicand), so `3`, `2\sqrt2`, `5\sqrt3` and `x\sqrt2` are pairwise unlike and `3+2\sqrt2` passes — and at most one written constant term per radical part (`16x+9+8`, `1+2\sqrt2+2`, `\sqrt2+\sqrt2` are not combined). Each term's numeral fraction over monomial halves is reduced with integer halves (`\frac{9}{6c}`, `\frac{1.5}{c}` fail), and a remainder over a polynomial divisor shares no integer content across its bar and writes no decimal and no fraction in either half (`\frac{156}{8x+10}`, `\frac{39}{2x+2.5}`, `\frac{78}{4(x+\frac54)}` fail). Two written constants (or rational multiples of i) inside any `(…)`/`{…}` group are uncombined too (`(3-2)+(-4-5)i`, `\frac{3-2}{1}`), and i below a fraction bar or after `\div`/`/` is a division not carried out (`4+\frac{6}{i}`); and no numeral exponent left to work out (`e^{\frac{10}{2}}-1`, `e^{10-5}-1` fail against `e^5-1`). *(Precalculus chapters 5–6 re-review, October 4, 2026)* No numeral product (`2\cdot2\tan(2x)`, `\frac{\pi}{2\cdot4}`, `2(3)`; a numeral times a numeral power, `5\cdot2^x`, stays legal), no written zero term (`4\tan(2x)+0`), no coefficient of 1 (`1\sin x`, `1x`), no sign on a parenthesized single term (`3\cos x+(-4)`), no number left undistributed over a variable-free sum (`\frac14(\frac{\pi}{2}-2)`; `\frac{\pi}{5}(x-1)` is a factor and passes), no fraction over 1; and every trigonometric function's argument is held to the whole rule (`4\sin(\frac{2\pi}{10}x-\frac{\pi}{5})+4`, `4\tan(\frac{\pi}{\frac{\pi}{2}}x)` fail; the factored phase `4\sin(\frac{\pi}{5}(x-1))+4` passes) |
| `polynomial` | no fraction bar at all — for a difference of fractions answering to a polynomial |
| `distributed` | no parentheses left to multiply out. Each term's numeral fraction over monomial halves is reduced with integer halves, and a remainder over a polynomial divisor shares no integer content, as under `no-like-terms` |
| `simplified-radical` | power-free radicands (perfect $n$th-power factors extracted, sign included: $\sqrt[3]{-108}$ fails on its 27), like radicals combined, nothing radical under a fraction bar, no unevaluated numeral arithmetic or fraction under a radical ($\sqrt{64+225}$, $\sqrt{\tfrac{25}{16}}$), no same-index product of radicals in one top-level term, explicit ($\sqrt{3}\cdot\sqrt{6}$) or juxtaposed ($\sqrt[4]{12y^3}\sqrt[4]{8y^3}$ — rationalized-fraction numerators keep theirs), and no fractional/decimal exponents or decimal literals (radical notation is the form). Since the Elementary Algebra 8–9 re-review, no numeric work is left written at ANY level (top, each fraction half, each sum group): a fraction's numeric content is reduced — the gcd of the numerator terms' integer contents and the denominator's is 1, sign ignored ($\tfrac{6\sqrt2}{4}$, $\tfrac{4+2\sqrt5}{2}$ fail; $\tfrac32\sqrt2$ and $\tfrac{-\sqrt3}{3}$ pass) — no fraction stands over 1, no term multiplies two same-index radicals ($\tfrac{\sqrt3\sqrt5}{5}$, $\tfrac{\sqrt{10}\sqrt y+\sqrt{30}}{y-3}$) or two numerals ($2\sqrt2\cdot3$, $3\cdot5$, $4\cdot2x$), writes a variable twice ($z^3z^3$) or powers a single-term group ($(z^3)^2$), and no two variable-free like terms stand side by side ($3+4$, $1+2\sqrt2+2$). A radicand fraction over a variable ($\sqrt[6]{\tfrac{2u}{v^3}}$) and a bare numeral power ($3^2$) still pass, but each half of such a radicand is read like a whole radicand ($\sqrt[6]{\tfrac{128u}{v^3}}$ fails on its $2^6$; a half that is a sum, $\sqrt{\tfrac{4+x}{3}}$, is not read for powers), and the radicand's numeric work is finished as under `radical` ($\sqrt{\tfrac{2x-10}{6}}$, $\sqrt[3]{\tfrac{V}{\frac43\pi}}$ fail). No written zero term stands beside the rest ($\sqrt[3]{\tfrac{3V}{4\pi}}+0$ fails), except the zero real part of a+bi written first ($0+2\sqrt6 i$, the source's standard form). No compound fraction stands anywhere ($\tfrac{2\sqrt3}{\frac12}$ fails; the `single-term` rule, Precalculus chapters 5–6 re-review). Value grading: a radical over a variable is decided by sampling, never by the engine's `isEqual` (`9x` against `9\sqrt{x}` is `incorrect`); positive points only (the square-root sections assume variables nonnegative, so $\sqrt{x^2}$ is $x$), plus negative points where both sides are real when the KEY writes an absolute value or an odd root over a variable (9.7's even-root keys use $\lvert y\rvert$: `2y\sqrt[4]{3y^2}` against `2|y|\sqrt[4]{3y^2}` is `incorrect`). A radical sum key still declares `no-like-terms` with it, which reads variable terms too |
| `factored` | a product of at least two factors, at least one multi-term — for "Factor: $x^2+6x+8$". Every numeral fraction written inside it, at any depth, is reduced with a denominator other than 1 (`(p-\tfrac{2}{12})^2` fails against `(p-\tfrac16)^2`); every parenthesized sum inside it is finished — expanded, like terms combined — so a pattern applied but not simplified fails (`(x-5+2)(x-5+4)`, `(x+3)(x^2-3x+3^2)`, `(2x-3y)((2x)^2+2x\cdot3y+(3y)^2)`; Intermediate Algebra 6.2–6.4, October 3, 2026) |
| `factored-completely` | `factored`, and complete: every polynomial factor primitive over the integers (coefficient gcd 1, no variable common to all its terms, no fraction or decimal coefficient) and at least as many non-constant factors, with multiplicity, as the key (`x^3` counts 3, `(x+2)^2` counts 2) — for "Factor completely: $2x^2+8x+8$", where `(2x+4)(x+2)`, `2(x^2+4x+4)` and `4(\tfrac12x+1)(x+2)` fail against `2(x+2)^2`. Order, signs (`-(2-x)` for `x-2`), and how the constant is split are free. A key the checker cannot read as an integer-coefficient product passes on value and `factored` alone; a response factor it cannot read (`\frac1x`, `|x|`) fails |
| `gcf-factored` | `factored`, with the whole greatest common factor taken out with the key's sign: every polynomial factor primitive (no integer, no variable common to its terms) and the monomial outside negative exactly when the key's is — for "Factor … by taking out the greatest common factor" and "Factor the greatest common factor from …", where `2(4a^3b+a^2b^2-3ab^3)` fails against `2ab(4a^2+ab-3b^2)` and `4b(-b^2+4b-2)` against `-4b(b^2-4b+2)`. Composes: `factored gcf-factored` for a key that is not complete, `factored-completely gcf-factored` for one that is. Factoring further is allowed |
| `point-slope-form` | one equation, one side the bare output variable plus at most a constant, the other a single $m(x-x_1)$ term (either orientation) — for "Write the point-slope form…", where the engine grades the distributed and scaled restatements equal; the collapsed origin case $y=mx$ passes. Every number is finished, as under `slope-intercept-form`, except that the substituted point keeps its written sign (`y-(-3)=2(x-(-2))` passes): the slope formula left unworked, an unreduced or denominator-signed slope, a numeral product or power, and a point written as arithmetic fail (`y+3=\tfrac{1-(-3)}{2}(x-2)`, `\tfrac{4}{2}(x-2)`, `\tfrac{2}{-1}(x-2)`, `y-(1-4)=…`, `2(x-3+1)`) |
| `slope-intercept-form` | after an optional written `y=`/`f(x)=` label, at most one $mx$ monomial plus at most a constant — for "Write the equation in slope-intercept form", whether the answer is authored as the equation or as the bare expression following $y=$. A one-letter label other than `y` (or the key's own label letter) fails: `x=-\tfrac23y-\tfrac23` is the line solved for $x$. The writing is finished too: at most one written constant term, no numeral product or power left, every fraction reduced (`y=\tfrac12x+1-5`, `y=\tfrac{2}{4}x-4`, `y=\tfrac{2x}{4}-4` fail), and every number finished as `lowest-terms` means it: a numerals-only fraction half is one integer with the sign reduced, a numerals-only group is one number, and no sign is stacked on a signed group (`y=\tfrac{-3-1}{1-(-2)}x`, `y=(2+1)x-4`, `y=\tfrac{4}{-3}x`, `y=-\tfrac{-4}{3}x`, `y=2x-(-3)` fail; `y=\tfrac{-4}{3}x`, `y=\tfrac13x-3\tfrac13`, `y=(-3)x+2` pass — Intermediate Algebra chapter 3 re-review, September 28, 2026) |
| `line-standard-form` | an equation or ONE order relation with every variable term on one side — each a letter with at most a numeral coefficient, each letter once, no constant — and one numeral on the other, either orientation, fractions reduced with the sign reduced (`x+y\ge\tfrac{6}{-2}` fails) — for "keep $x+y$ on the left side, as the boundary line is written" inequality asks and $Ax+By=C$ standard-form asks, where every half-plane or line restatement ($y\ge3-x$) grades equal in value |
| `vertex-form` | one $a(x-h)^2+k$ term shape (either orientation, optional written `y=`/`x=`/`f(x)=` label): exactly one squared-binomial term plus at most a constant — for "Write $y=2x^2+4x+5$ in standard form" |
| `conic-standard-form` | an equation with one side exactly $1$ and the other a sum/difference of $\ge 2$ fractions, each a coefficient-1 squared term ($x^2$, $(y-k)^2$) over a positive integer (a bare squared term counts as over the unwritten $1$, so $(y-1)^2-\tfrac{x^2}{4}=1$ passes) — for ellipse/hyperbola "write in standard form". Primed variables ($x'$, $y'$) are folded onto one symbol first, so $\tfrac{x'^2}{4}+\tfrac{y'^2}{9}=1$ is keyable |
| `parabola-standard-form` | an equation with one side a single coefficient-1 squared unit ($x^2$, $y^2$, $(x-h)^2$, $(y-k)^2$) and the other ONE term in the other variable — an optional numeric coefficient (the $4p$: integer, decimal, or written fraction) on the bare variable or its shifted binomial, or that variable/binomial over an integer — for "write the parabola in standard form" $(x-h)^2=4p(y-k)$ asks, which `vertex-form` cannot serve (it wants $y=a(x-h)^2+k$) and which the general form, $x=\tfrac{y^2}{8}$, and the distributed $(x-2)^2=-8y-8$ otherwise pass on value |
| `circle-standard-form` | two coefficient-1 squared terms against a positive integer — $(x-h)^2+(y-k)^2=r^2$ for the circle asks; every shift is a nonzero integer, so a written-in zero ($(x-0)^2$) is `form` here and in `conic-standard-form` and `parabola-standard-form`, as $(y-(-4))^2$ already was |
| `exponential-form` | against a conversion key ($b^y=x$), one power $b^y$ — an atom base, a braced or one-character exponent — equal to a log-free number, either orientation, with the key's base, exponent, and number, each compared by value — for "convert from logarithmic to exponential form". The value path compares an equation's sides by value, so `64=64`, `64=2^6`, and `64=8^2` matched `64=4^3`; a response that keeps the key's three numbers also settles the value, so the identity key `1=x^0` accepts `x^0=1` (Intermediate Algebra 10.3, October 3, 2026). Against a key that is no conversion equation (`100`), only no logarithm left |
| `logarithmic-form` | the mirror: one logarithm ($\log_b x$, $\log x$ as base 10, $\ln x$ as base $e$) equal to a log-free exponent, with the key's base, argument, and value — for "convert to logarithmic form", where `2=2` and `\log_2 4=2` matched `\log_3 9=2` in value. Without a conversion key, the one-logarithm shape alone |
| `base-e` | no base other than $e$ raised to a variable exponent — for "change $y=3(0.5)^x$ to one having $e$ as the base". A numeric exponent ($x^2$) is a power function and is left alone |
| `exponential-model` | one exponential term $ab^x$ or $ae^{kx}$ — coefficient optional and on either side, `\cdot`/`\times`/juxtaposition/parentheses all multiply, an optional written label (`f(x)=`, `N(t)=`, `P_n=`) — plus at most one constant term (the shift of `90e^{-0.008377t}+75`, `-10^x+7`). Coefficient, base and constant are finished numerals: a nonzero decimal or integer, a lowest-terms integer fraction over a denominator other than 1, or a simplified integer root (`\sqrt{2}(\sqrt{2})^x`); a written coefficient of 1 is `form` (`-1\cdot10^x+7`), and an initial-value symbol (`A_0`, `P_{0}`) may stand for the coefficient. The exponent is the variable times an optional finished rate — a decimal, scientific notation (`-8.7\times10^{-9}t`), a lowest-terms fraction (`\tfrac13x`, `\tfrac{t}{20}`) or, over $e$ only, an exact rate $\tfrac{\ln m}{n}$, $\tfrac1n\ln m$, $(\ln m)$ in any order with the variable ("keep $k$ exact": `A_0e^{\frac{\ln2}{3}t}`, `3e^{(\ln0.5)x}`, `3e^{-x\ln2}`, `A_0e^{\frac{t\ln2}{3}}`), never with $m$ a perfect $n$th power (`e^{\frac{\ln125}{3}x}` is `\ln5` unworked); over a numeral base any multiple but $\pm1$ must leave an irrational power (`2^{t/3}` passes, `6\cdot125^{x/3}`, `4^{x/2}` fail). No shift inside the exponent (`e^{x+0}`, `5^{x-1}`). For "find the exponential function through these points" / "write the model" / the transformation asks, where the half-worked `6(\sqrt[3]{125})^x`, `\tfrac{750}{125}(5)^x`, `6\cdot5^x\cdot1`, `(e^{0.5})^x` grade equal in value. Outside it: logistic quotients, $3^{n-1}$-style sequence terms. The value check compares at $10^{-9}$, so a rounded key admits only its own digits (`2.449(0.639)^x` is `incorrect` against `2.4492(0.6389)^x`); a response that is the key's model with every decimal written to MORE places that round to the key's is `form` ("round each number … to the places the question asks for"), never `correct` — only for a key written with a decimal |
| `expanded-logarithms` | every written $\log$ takes a single number or variable, or a sum that does not factor over the integers (`\ln(x+3)` passes; `\ln(x^2-9)`, `\ln(2x+4)` fail) — for "write $\log_5 25ab$ as a sum of logarithms". A numeral argument with a rational logarithm fails (`\log 10000`); a composite whole-number argument fails when every whole-number argument of the key is prime (`\log_b 14` for `\log_b 2+\log_b 7`); written numeral arithmetic on a coefficient fails (`\tfrac13\cdot2\ln x`), and so does a coefficient on a parenthesized group of logarithms (`\tfrac12(3\log x-4\log y)`) unless the key is written factored out that way |
| `natural-log` | at least one logarithm, every one natural ($\ln$, or $\log_e$) — for "rewrite as a quotient of natural logarithms", where the common-log quotient is the same number; compose with `single-fraction` |
| `evaluated-trig` | no trigonometric function left ($\sin$, $\cos$, $\tan$, $\csc$, $\sec$, $\cot$, and their $\arcsin$/$\sin^{-1}$ inverses) — for "find the exact value of $\cos\tfrac{\pi}{4}$". The name is read up to the next non-letter, so the unspaced `\cos45^\circ` counts as a function left *(Precalculus chapters 5–6 re-review, October 4, 2026; `evaluated-logarithm` likewise reads `\ln1`)* |
| `single-trig-function` | exactly one trigonometric application written — for "simplify $(\tan t)(\cos t)$", whose answer $\sin t$ is value-equal to the printed product (`evaluated-trig` cannot serve: the answer IS a trig function). A coefficient is allowed ($2\sin t$). The application is not under a fraction bar (a `\frac` denominator, after `/` or `\div`, or a group to a negative power) unless the key writes its own there: $\tfrac{1}{\cot t}$ against $\tan t$ and $\tfrac{1}{\cos t}$ against $\sec t$ fail, the key $\tfrac{1}{\sin x}$ ("in terms of $\sin x$") passes. Value grading samples any pair holding $\sec$, $\csc$ or $\cot$ over a variable, so $\tfrac{1}{\csc t}$ equals $\sin t$ and the retyped $\tfrac{\sec t}{\csc t}$ is `form` *(Precalculus chapters 5–6 re-review, October 4, 2026)*. With a key, the one application is the KEY's: the same function on an argument of the same value ($\tan(0.1x)$ and $\cos2\theta$ meet $\tan(x/10)$ and $\cos(2\theta)$), the argument written finished, the rest finished numeral work (no bar over 1, no $\cdot1$, no coefficient 1, no zero term) — so the cofunction retype $\cos(\tfrac{\pi}{2}-t)$, $\sin(-t)$ against $-\sin t$, $\sin(t+2\pi)$, $\csc x$ against the "in terms of $\sin x$" key $\tfrac{1}{\sin x}$ and $1-\cos^2\theta$ against $\sin^2\theta$ are `form` *(round 2)* |
| `evaluated-logarithm` | no logarithm left — for "evaluate $\log_2 8$". The predicate `exponential-form` falls back to without a conversion key, kept apart because its feedback names evaluating rather than converting |
| `translation` | the key's own writing — same operands, same order, either side of the `=` — for "translate into an equation/proportion", where any true equation (`13=13`, `y=12`) grades equal in value. `exponential-form` and `logarithmic-form` read the key too |
| `degrees` | one term, ending in $^\circ$, on a plain numeric head — for "convert $\tfrac{5\pi}{4}$ radians to degrees", where the engine grades the two spellings equal. The head is a finished count: a decimal, or a fraction or mixed number held to `lowest-terms`'s rule ($\tfrac{45}{2}^\circ$ and $22\tfrac12^\circ$ pass; $\tfrac{720}{3}^\circ$, $(600-360)^\circ$ fail) *(Precalculus chapters 5–6 re-review, October 4, 2026)* |
| `radians` | no degree symbol anywhere — the mirror ask |
| `denominator:<n>` | that exact denominator — for equivalent-fraction asks, which are deliberately **not** reduced |
| `solved:<variable>` | one written equation with that variable alone on one side and absent from the other — for "Solve the formula $7x+y=11$ for $y$", where equation-equivalence grading accepts the printed formula retyped; the variable is named because a formula can arrive solved for the *other* side ($x=5y-10$). An inequality counts the same way (`y\ge-2x+3` is solved for $y$; `2x+y\ge3` is not). Composed with other tokens, those tokens read the side the variable equals (equation forms such as `slope-intercept-form` still read the whole): `solved:a single-fraction reduced-fraction` refuses `a=\frac{2b}{2bc-2}`, and `solved:w expanded distributed no-like-terms` refuses `w=2(v+3)+1` — `solved:` alone passes an unfinished right side, so a formula or variation key that is a fraction or a combined sum declares its value form too |

A right value in the wrong shape reports back as "That value is right — now
write it in lowest terms"; a wrong value is still just wrong.

**A form applies to every member of a list answer.** An `answer` holding a
top-level comma (`"\frac{\sqrt3}{2},\frac12"`, or any `answerMode="unordered"`
key) is graded member by member, and the declared form is required of each
member in turn. *(August 16, 2026)*

**A value form applies to every number an inequality, interval, or ordered
pair writes.** The one-number tokens (`decimal`, `fraction`, `lowest-terms`,
`mixed-number`, `improper-fraction`, `fraction-or-mixed-number`, `percent`,
`scientific-notation`, `denominator:<n>`) are required of each numeric side
of an inequality (`x<5`, `-2\le x<7`; the variable side is not checked), each
finite endpoint of an interval or `\cup` of intervals (`\pm\infty` always
passes), and each coordinate of a pair or triple — so `p\ge\frac34+\frac16`
grades `form` under `fraction lowest-terms`, `(-\infty,62+45]` under
`decimal`, and `(2,1+\frac12)` under `lowest-terms`. A coordinate meets a
form exactly as a bare number would: `2` fails `fraction`, so a pair mixing
an integer and a fraction declares `lowest-terms`. *(September 27, 2026)*
A `\cup` of intervals is compared interval by interval in any order, so an
unworked endpoint in a union (`(-\infty,-1]\cup[\frac42,\infty)` under
`decimal`) is `form` exactly as in one interval, beside a bracket or a
parenthesis. *(Elementary Algebra chapter 10 re-review, September 27, 2026)*
The endpoint shape tokens (`simplified-radical`, `no-like-terms`,
`exact-radical`, `exact`, and since the Precalculus chapters 5–6 re-review,
October 4, 2026, `single-term`) are read the same way, endpoint by endpoint:
the range key `[0,\pi]` passes `single-term`, `[0,\frac{2\pi}{2}]` does not.

**A solution set is read in both notations.** An inequality in ONE variable
standing alone on its side, every other side a number — simple (`x\le-0.5`,
`-0.5\ge x`), chained in one direction (`-1\le x<4`, `4>x\ge-1`), joined by
`\lor`/`\text{or}` into a union or `\land`/`\text{and}` into an intersection
(MathLive's inline "or"/"and") — and an interval or `\cup` of intervals are
both read as the set they describe. Against an interval key, an inequality
naming the same set grades `form` with "That solution set is right — now
write it in interval notation."; against an inequality key, an interval
naming the same set grades `form` with "… — now write it as an inequality.";
a different set is `incorrect`. An inequality typed against an inequality key
is decided by its set (and its variable letter): the engine drops the variable
from a chain's first link, so `-2\le x<4` used to grade `correct` against
`-1\le x<4`. Two-variable inequalities (`y\ge-2x+3`), numeric statements
(`6<\sqrt{38}<7`) and `\mathbb{R}` are not read this way and grade as before;
a key `(a,b)` with $a<b$ reads as an interval here, so `2<x<5` against `(2,5)`
is `form`. *(Elementary Algebra chapter 10 re-review, September 27, 2026)*

**An inequality in two or more variables is its half-plane.** Each side pair
is read as $D>0$ or $D\ge0$ (a $<$/$\le$ relation negates the difference), and
a response is the key's half-plane when it has the same strictness and its
$D$ is a POSITIVE constant multiple of the key's — so `x\ge2y+6` and
`-x+2y\le-6` are `x-2y\ge6`, `3y\ge2x-9` is `y\ge\tfrac23x-3`, while
`x-2y>6`, `x-2y\le6` and a different boundary are `incorrect`. Only a key
naming two or more letters is read this way; a one-variable key stays a
solution set (`2q>-8` is not `q>-4`). An ask that pins the writing ("enter it
solved for $y$", "keep $x+y$ on the left side, as the boundary line is
written") declares `solved:y` or `line-standard-form`; a word-problem
"write an inequality that models …" ask declares nothing. *(Elementary Algebra
chapter 10 re-review, September 27, 2026)*

Which evidence the requirement is checked against depends on what it separates.
A **numeral** form is checked against the LaTeX, because the Compute Engine
erases exactly that distinction: `\frac{40}{88}` parses to `["Rational",5,11]`
and `2^4\cdot5` to `80`. A **symbolic** form is checked against the parse —
`(x+2)(x+4)` stays a product while `x^2+6x+8` stays a sum.

`factored` is a shape check, not a completeness check: `2(2x^2+8x+8)` satisfies
it, deliberately — a GCF-only exercise correctly answers `-7a(a^2-3a+2)`, and
demanding full factorization would fire on sound content (core §5). Ruling
out the printed polynomial is the whole job. Which to declare: a GCF-only ask
("Factor … by taking out the greatest common factor", "Factor the greatest
common factor from …") takes `gcf-factored` — with `factored` when its key is
not complete, with `factored-completely` when it is (Intermediate Algebra 6.1,
October 3, 2026: plain `factored` passed a GCF taken out only in part); a "Factor" / "Factor completely" ask
whose key is a complete factorization takes `factored-completely`, which also
refuses a half-finished product (`(2x+4)(x+2)` for `2(x+2)^2`) (Elementary
Algebra chapter 7 re-review, September 27, 2026).

The lint rejects a re-expression prompt with no `answerForm`, and
`verify-section` rejects an answer that does not satisfy the form it declares.
Where the response is not a re-expression at all, use `multiplechoice`: the
learner picks among forms.

**A word problem is a re-expression ask too.** "Translate and simplify: 29
increased by 76" and "Mark rode 18, 15, 26, 49, and 32 miles — how many in
all?" accept the typed unevaluated `29+76` or `18+15+26+49+32`, and the
retype rule cannot see it because the numbers are in words or prose. So
every fill-in whose key is a number declares a value form that refuses it
unworked — `decimal` for an integer or decimal, `lowest-terms` for a
fraction, `fraction-or-mixed-number` for a mixed number — and so does every
inequality bound, interval endpoint, and pair coordinate. The lint restates
the key unworked (`\left(105+1-1\right)`) and grades it under the declared
form; `correct` is an error (October 4, 2026). It asks for a form even where
the number is read rather than worked out (rounding, a point read off a
graph): a form costs those nothing, and guessing hazards from the wording
would miss the next word problem. Exempt by shape only: a comparison of
printed numbers (`0.42>0.4`), and keys no value form can be declared on — a
list or tuple mixing numbers with expressions, and a roster set
(`\{-2,3,7,12\}`), whose members the grader applies no form to. Precalculus
chapters whose re-review row is open are listed in the lint
(`VALUE_FORM_SWEEP_PENDING`) until their row closes.

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
An angle mark in a `kind="figure"` drawing is a figure circle with `from`/`to`
(degrees counter-clockwise from $+x$), an exact SVG arc — never chords sampled
into `segments` *(Precalculus 5.4, October 4, 2026)*.

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
Hand-written inline `<svg>` figures are read from the markup itself (lines,
polylines, polygons, rects, circles, ellipses, paths with their curves and
arcs flattened, `<g>` styles and transforms, `<text>` with `<tspan>`) and
checked the same way — label over label, label over ink, label past the
viewBox — each finding named `page:line`, the same `L<line>` that
`tools/figures/render-page-figures.mjs` names its render. Grid hairlines and
translucent shading are background; the only exemptions are a `(` `)` `[` `]`
endpoint glyph drawn on its number-line axis and tick, and a tick label on
its own tick. Inline-SVG overlaps fail `npm test` (since September 28, 2026,
when the 39 flagged figures were fixed; `INLINE_SVG_GATES` in the tool) and
ride in `--json` under `inline`. Fix a finding by moving the label, never the
mathematics, and never gap a curve at a vertex, intercept, or plotted point;
a figure no placement can clear is redrawn spec-first.
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
`node tools/figures/check-figure-overlaps.mjs <page>` (it also reports the
page's remaining hand-written inline SVG), `npm test`, and the
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

Gridlines sit on multiples of the grid step, as tick labels sit on multiples
of the tick step — never at `xMin`, `xMin + step`, … *(October 4, 2026)*. So
a window edge may be whatever the curve needs (`xMin: -3.5`, `yMin: -30`
under a step of 50) without moving the lattice off its ticks. Where a step is
too dense to draw, the engine thins it to a spacing that divides the tick
step, so every tick still has a gridline. What the engine cannot supply is a
step that suits the window: a zoomed window (`xMin: 2.4, xMax: 3.1`, ticks
every 0.2) under the default `gridStep` of 1 draws one vertical gridline, at
3, or none at all — set `xGridStep`/`yGridStep` to the tick step when the
grid is meant to show.

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
coterminal angle between $0^\circ$ and $360^\circ$"). *(Precalculus chapters 5–6 re-review, October 4, 2026)* The right
degree count typed without its mark (`240` against `240^\circ`, with or
without `degrees`) is `form` — "That number is right — now write it in
degrees, with the degree symbol" — the mirror of the `unit` verdict below,
per list member and pair coordinate too (`(22,68)` against
`(22^\circ,68^\circ)`). A wrong count and the key's radian value
(`4.18879` against `240^\circ`) stay `incorrect`.

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
- **An interval-notation ask needs an interval-shaped answer.** The grader
  reads the right set in the other notation as `form` and names the KEY's
  notation, so `u>10` behind "write the solution in interval notation" tells
  the learner who types `(10,\infty)` to write it as an inequality. The lint requires an interval-shaped answer (every `\cup`-joined
  part opens with `[` or `(`) behind any interval-notation ask.
- **Money and units on a bare-number key** *(September 26, 2026)*. When
  `answer` is one bare number, `checkAnswer` drops a leading `\$` (the
  learner typing the price the page prints grades `correct`) and reports a
  right number followed by unit words (`140 miles`, `74\text{ ft}`,
  `36ft^2`) as `unit` — the fill-in says "Right number — enter it without
  the unit" — never `correct`, since a rule that took "140 miles" would take
  "140 feet". One trailing letter stays a variable (`140x` is `incorrect`),
  and percent is untouched. The question still names the unit. The same
  rules hold per member of a list of bare numbers (`\$8,000, \$17,000` is
  `correct` against `8000,17000`; `75 mph, 60 mph` is `unit` against `75,60`)
  and per coordinate of a pair of bare numbers (`(22^\circ,68^\circ)` is
  `unit`), and a `\$` before a number in an inequality or interval is dropped
  (`s\geq\$4,000,000`). A braced comma (`5{,}250`) is digit grouping even
  inside a pair or interval. A pair key also accepts its coordinates typed
  as labelled equations (`x=6, y=1` for `(6,1)`): distinct one-letter labels,
  read in the order typed except that `x`, `y`, `z` always go in that order.
  *(September 27, 2026)* A key that is one numeral fraction or mixed number
  takes the unit rule too: `\frac{1}{6}\text{ hours}` and
  `2\frac{1}{2}\text{ hours}` are `unit` against `\frac{1}{6}` and
  `2\frac{1}{2}`; a wrong value with a unit stays `incorrect`. *(Elementary
  Algebra chapter 10 re-review, September 27, 2026)*
- **A written function label is stripped before grading.** `f(x)` boxes as
  `Multiply(f, x)`, so `checkAnswer` strips a written
  one-letter-applied-to-one-letter label — only when no further `=` remains —
  and the variable-name guard does not apply to it: $f(x)$ and $y$ both mean
  the output. Against a key that writes no `=`, a label whose argument is an
  expression (`g(m^2)=4m^2-7`, `f(x+2)=…`, `h(f(-2))=5`) or which is itself
  applications joined by `+`, `-`, `\cdot` (`f(x)+f(2)=x^2+4`,
  `h(x)+h(1)=2x+4`, `-f(x)=…`) is stripped too: it names the quantity the ask
  asked for. Not stripped: a name inside its own argument (`x(x+2)=15` is a
  product), a response with a second `=`, a quotient of applications (the
  difference quotient), a coefficient (`2f(x)=…`), and anything against an
  equation key. *(Intermediate Algebra chapter 3 re-review, September 28,
  2026)*
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
  to bounded numeric sampling (see the guard banner there). A third
  `isEqual()` hang: a negative power over a symbol times a rational with no
  terminating decimal — `(6u)^{-3}`, `(3u)^{-2}`, `\tfrac13u^{-1}`, against
  any comparand; every negative power over a symbol is now sampled too
  *(Elementary Algebra chapter 10 re-review, September 27, 2026)*.
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
  keys $a_1$ as its own fill-in. A subscripted label (`a_n=`, `a_{27}=`,
  `S_{30}=`, `a_1=`) is stripped before every form token reads the value, as
  `x=` is, and two finite sigma sums compare term by term — a renamed or
  shifted index passes, a same-total sum with other terms does not
  *(Intermediate Algebra chapters 11–12 re-review, October 4, 2026)*. Key a
  sum-shaped summand in parentheses and say so in the question ("Put the
  general term in parentheses"): `\sum_{n=1}^{7}2n+12` reads as
  $(\sum 2n)+12$.

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
- **A "most you can spend" key rounds down.** An at-most budget, ration, or
  capacity answer is the largest value that still satisfies the constraint,
  not the nearest one: Sara's \$1,000 for 18 costumes is \$55.55, because
  $18 \times 55.56$ is over budget (the source prints \$55.56, erratum 1646;
  the blind solve caught it). Say "without going over" in the stem, never
  "to the nearest cent", which asks for the round-half-up value.

The corpus-wide replay audit (`npm run verify:replay` and its manual bare-RHS
companion) is documented in `docs/history/math.md`.

## Done checklist (in addition to the core checklist)

- [ ] Every re-expression prompt and every number-keyed fill-in carries an
      `answerForm`; categorical answers are `multiplechoice`, never digit codes.
- [ ] No file-backed instructional images; recreated figures compared visually.
