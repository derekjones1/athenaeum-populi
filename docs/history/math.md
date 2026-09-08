# Math — history

Dated records moved out of the operative playbook, kept for provenance.
Both sections below were cut verbatim from `docs/subjects/math.md`; the
"Standing notes from the closures" section stayed in place there (promoted
to its own `##` heading once its parent section moved here).

## 6. Trivially satisfiable prompts: the closed classes

A fill-in whose answer is value-equal to an expression printed in its own
question is passable by retyping the prompt. `answerForm` is the fix — it
grades the shape the value cannot distinguish — and a lint rule per prompt verb
is what stops new ones being authored. The two are inseparable: a rule may only
land once the content it governs is already clean, so each verb's rule ships
with that verb's retrofit.

Measured across the corpus, 1,761 fill-ins were passable this way — the sum of
the per-class counts below, measured one at a time as each class was separated
out. Every class is closed — token, retrofit, and lint rule each — and the
blow-by-blow record of how each closed is in this file's git history:

| Class | Count | Tokens |
|---|---|---|
| Factor | 274 | `factored` |
| Numeric arithmetic | 566 | `decimal` / `fraction` / `lowest-terms` / `single-power` |
| Multiply, Divide (algebraic) | 231 | `expanded`, `single-term`, `single-fraction` |
| Simplify, Add, Subtract (algebraic) | 401 | `no-like-terms`, `polynomial`, `distributed`, `single-fraction` |
| Radicals | 207 | `simplified-radical` |
| Reducing a rational expression | 47 | `reduced-fraction` |
| "Write it in standard form" | 26 | `vertex-form`, `conic-standard-form`, `circle-standard-form`, `parabola-standard-form` |
| Logarithm conversion / expansion | 3 | `exponential-form`, `expanded-logarithms` |
| Composition and page-context combinations | 6 | `distributed`, `no-like-terms`, `expanded` |

The rules the programme was built on. A new token, verb, or extractor has to
respect every one of them:

- **Choose the evidence by what the engine does to the distinction.** If the
  CAS can *evaluate* the difference away, the predicate must read the LaTeX;
  otherwise it should read the parse, which already knows about `\left(`,
  juxtaposition and unary signs. `(x+2)(x+4)` survives as a product, so
  `factored` reads the parse. `\frac{40}{88}` is evaluated to `\tfrac{5}{11}`,
  so `lowest-terms` reads the LaTeX. Several tokens need both: `single-term`
  takes the term structure from the parse and the written `\cdot` from the
  LaTeX, because `\tfrac{3}{7}\cdot 21n` canonicalizes to its own answer.
- **Gate each candidate path behind its own verb.** The rule in
  `tools/lint/lints.mjs` unions per-verb extractors deliberately. Widening a shared
  extractor instead would put a thousand sound-but-untagged exercises in scope
  at once, and a rule that fires on sound content cannot land in a lint whose
  every rule blocks.
- **The feedback has to name the step the exercise actually asks for.** A
  token that closes the hole is not automatically the right token:
  `lowest-terms` rejects a printed nested power, but would tell the learner to
  reduce a fraction that is not there — `single-power` exists for that reason
  alone. Check the sentence `describeAnswerForm` will produce before settling
  on a token.
- **A token whose shape the wrong answer already satisfies is not a check.**
  "Find and simplify $f(g(x))$" answers to a sum, and the unexpanded
  `2(3x+5)^2+1` already is one, so it passed the `expanded` it declared. The
  ask is "expand the square", which `distributed` names, and
  `expanded distributed` composes to exactly the requirement. Replay the built
  candidate through the declared form before trusting a token.
- **A form check FAILS OPEN.** A response half the predicate cannot read (a
  decimal, a radical, an absolute value where it expects polynomials) falls
  back to value grading — a form check must never reject a correct answer it
  cannot read.
- **An incidental value collision is not a defect.** A word problem whose
  answer happens to equal a printed quantity ("Jazmine ran 8 miles… find her
  running speed" → `8`) is sound content, and so is a built candidate that is
  *structurally* the authored answer (where the substitution IS the answer,
  writing it is the correct response). Structural, never value:
  `2(3x+5)^2+1` and `18x^2+60x+51` are equal in value and different in shape,
  which is the whole hazard.

### Shapes beyond a printed span

Most extractors ask one question — "is something printed here also the
answer?". Two closed classes need more than that, and theirs are the
extractors an author will meet most in function-heavy material:

**The operation written but not carried out.** "For $f(x)=2x^2-4x+1$ and
$g(x)=5x^2+8x+3$, find $(f+g)(x)$" prints neither $7x^2+4x+4$ nor anything
value-equal to it — and yet `(2x^2-4x+1)+(5x^2+8x+3)`, the operation written
but not performed, grades `correct`: the learner types back what the question
already told them and never combines a like term. The extractors in
`tools/lint/lints.mjs` **build** that candidate rather than finding it:

| Phrasing | Candidate built | Typical token |
|---|---|---|
| `find $(f\pm g)(x)$`, `$(f\cdot g)(x)$`, `$(fg)(x)$`, `$\left(\tfrac{f}{g}\right)(x)$` | the two definitions joined by that operation | `no-like-terms`, `expanded` |
| `find $f(g(x))$` or `$(f\circ g)(x)$` | the outer definition with the inner substituted for `x` | `expanded distributed`, `no-like-terms` |
| "Subtract $X$ from $Y$" | $(Y)-(X)$, in the order the wording fixes | `no-like-terms` |
| "…find the quotient when $A$ is divided by $B$" | $\tfrac{A}{B}$ | `expanded` |

Definitions printed in page prose ("For the next three questions, use
$f(x)=6x+1$…") reach the extractor as fallbacks — safe by construction, since
a wrongly paired definition builds a candidate that never grades `correct`.
The boundaries are load-bearing, and asserted in `tools/lint/lints.test.mjs`: an
ask evaluated at a *number* (`(f+g)(2)`, `f(g(2))`) builds nothing, because no
restatement of the definitions equals a number; "find the **remainder** when
$A$ is divided by $B$" names no quotient, so only the word "quotient" opens
that path; and a division leaving a nonzero remainder needs no exception —
$\tfrac{A}{B}$ simply is not equal to the quotient, so the grader rejects it
and the rule falls silent on its own arithmetic.

**The ask that NAMES a form.** "Write the point-slope form of an equation of a
line that passes through $(1,5)$ and $(4,11)$" prints nothing to retype — the
hazard is the learner's own correct *value* in the shape the ask exists to
rule out (the engine grades the distributed `y-5=2x-2` and the scaled
`2y-10=4(x-1)` equal to the authored `y-5=2(x-1)`). The lint verb is a table,
`NAMED_FORM_ASKS`, mapping each named-form phrase to the token(s) that grade
it — ANY of them, because one phrase can name different shapes: "exponential
form" is the log conversion (`exponential-form`), the repeated multiplication
(`single-power`), and the prime factorization (`prime-product`). The ask
patterns demand a producing verb (write/rewrite/enter/…) or an "equation … in
<name> form" clause, so a prompt that merely *mentions* the form is not
conscripted; list answers are out of scope because the grader's form check
never runs on them. A companion rule requires `lowest-terms` when a
"simplest/simplified form" ask has a numeral-fraction answer.

Two wording rules are the author's share of that class:

- A two-point point-slope ask accepts the *other* point's equally-correct
  equation by value, so the prompt must pin the point ("using $(1,5)$ as
  $(x_1,y_1)$") — a wording rule, not a token.
- Slope-intercept happens to grade unequal against a point-slope answer
  today; that is an engine accident the predicates do not depend on, which is
  why the mirror `slope-intercept-form` token exists at all.

## Re-running the audit

Replay every math span printed in a question back through `checkAnswer`
against that exercise's own answer, one file per process — the engine carries
state across calls and will otherwise report false positives — and for any
span of the shape `label = RHS`, replay the bare RHS too, because the
labelled span itself does not grade equal to anything (the engine reads
`f(x)` as an application). `npm run verify:replay` runs the whole-span half
of this continuously, in both source and MathLive-normalized spellings; the
bare-RHS variant of a printed definition span is still the manual audit's
job.
