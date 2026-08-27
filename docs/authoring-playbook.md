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
Elementary Algebra 2e, Intermediate Algebra 2e, and the in-progress
Precalculus 2e). Its structural, source-first,
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
   content. **“The source” means the pinned OpenStax CNXML/PDF, never this
   repo's pages.** The pinned files are never edited under any circumstance;
   “repairing the source” means making this repo's transcription deviate from
   what the source printed without a recorded decision. When the source looks
   wrong, exactly one of three cases applies:
   - **Defensible as printed → ship as printed.** A printed answer or sentence
     that is questionable but defensible on the source's own terms (a valid
     alternate form, the source's own rounding or ordering convention)
     transcribes as printed. Do not improve it; record the dismissed suspicion
     in the errata file's "Reviewed and *not* errata" list (rule 5).
   - **Confirmed source defect → correct the local page, without asking.**
     When the printed content fails on its own terms — the CNXML, PDF,
     official answer, and independent calculation disagree, confirmed against
     the raw CNXML plus one independent check — record the discrepancy with
     the evidence, then correct the local page to the module's own
     mathematics, place a visible source note beside the correction, record
     the local handling in `data/openstax/math-reconciliation-decisions.json`,
     and log the defect (rule 5). This is the reviewed resolution; it does not
     require a human's approval. The upstream files still do not change.
   - **Locally authored fields → just fix them.** Content with no source
     counterpart — `hint` text, distractor bodies, aria labels, and other
     scaffolding this playbook requires you to write — is not source content
     and is outside this rule entirely. Correct defects in it freely, with no
     source note, decision entry, or approval; an errata entry is needed only
     if the underlying mistake traces back to the source itself.
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

This front matter is also the page's entire search-listing surface, composed
by the templates — nothing extra to author, but the fields must be right:

- The `<title>` tag (the search-result headline, NOT the on-page H1) is
  composed by `layouts/_partials/utils/seo-title.html` from `title` plus the
  book and `source_section`/`source_chapter` context — e.g. *"Solve Equations
  with Decimals – Prealgebra Practice, Section 5.4 | Athenaeum Populi"*. The
  section number is load-bearing: OpenStax reuses section titles within one
  book, and composed titles must be corpus-unique. A page may override the
  whole composition with `seo_title:` in front matter; do that only for a
  genuine collision the standard forms cannot break.
- `layouts/_partials/seo-jsonld.html` emits JSON-LD from the same fields: a
  `BreadcrumbList` on every page, `Book` on book roots (from `license:` and
  `source:`), `LearningResource` on chapters and sections, `Quiz` on
  knowledge checks. `description` becomes the node's description, so it must
  stay a real summary, not a placeholder.
- `npm run check:seo` (part of `npm run check:build`, so also CI) verifies
  every built page: one non-empty suffixed title, unique across the corpus,
  a matching canonical, a parseable breadcrumb trail ending at the page, and
  the book-entity node. A new page that fails it usually has missing or
  duplicated front matter, not a template problem.

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
| `exact` | no decimal point anywhere in the response, and nothing else — the "in exact form" ask for a response that has no single shape to require. Use it when `exact-log`/`exact-radical` cannot apply because the answer is a CONTAINER: "Enter both solutions in exact form" keyed $(-\sqrt3,0),(\sqrt3,0)$ has an ordered pair whose second member is $0$, and demanding a radical there would report `form` on the exact answer the exercise prints. Being an absence test it is the weakest of this family — compose it with a shape token whenever the response does have a shape worth naming |
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
| `exponential-form` | no logarithm left — for "convert from logarithmic to exponential form". The closed-equation grading path now compares the two equations side by side rather than by truth value, so a retyped conversion prompt is refused on value alone; this token remains for the feedback sentence and for the value-equal responses that still carry a logarithm |
| `base-e` | no base other than $e$ raised to a variable exponent — for "change $y=3(0.5)^x$ to one having $e$ as the base", where the answer IS the printed function rewritten. A numeric exponent ($x^2$) is a power function and is left alone |
| `expanded-logarithms` | every written $\log$ takes a single number or variable — for "write $\log_5 25ab$ as a sum of logarithms" |
| `evaluated-trig` | no trigonometric function left ($\sin$, $\cos$, $\tan$, $\csc$, $\sec$, $\cot$, and their $\arcsin$/$\sin^{-1}$ inverses) — for "find the exact value of $\cos\tfrac{\pi}{4}$", whose printed subject IS its own answer |
| `single-trig-function` | exactly one trigonometric application written — for "simplify $(\tan t)(\cos t)$", whose answer $\sin t$ is value-equal to the printed product. `evaluated-trig` cannot serve here: the answer IS a trigonometric function, so the test counts applications instead of forbidding them, the way `single-logarithm` does one family over. A coefficient is allowed ($2\sin t$), because in a simplification it is part of the result rather than an unapplied step |
| `evaluated-logarithm` | no logarithm left — for "evaluate $\log_2 8$", the same hazard one function over. Same predicate as `exponential-form`, kept apart because its feedback has to name evaluating rather than converting |
| `degrees` | one term, ending in $^\circ$, on a plain numeric head — for "convert $\tfrac{5\pi}{4}$ radians to degrees", where the engine reads $^\circ$ as an exact operator and grades the two spellings equal |
| `radians` | no degree symbol anywhere — the mirror ask. A radian measure has no notation of its own, so ruling out the printed degree form is the whole check |
| `denominator:<n>` | that exact denominator — for equivalent-fraction asks, which are deliberately **not** reduced |
| `solved:<variable>` | one written equation with that variable alone on one side and absent from the other — for "Solve the formula $7x+y=11$ for $y$", where equation-equivalence grading accepts the printed formula retyped back; the variable is named because a formula can arrive already solved for the *other* side ($x=5y-10$) |

A right value in the wrong shape reports back as "That value is right — now
write it in lowest terms", so the learner is told what is missing rather than
that they are wrong. A wrong value is still just wrong.

**A form applies to every member of a list answer.** An `answer` holding a
top-level comma (`"\frac{\sqrt3}{2},\frac12"`, or any `answerMode="unordered"`
key) is graded member by member, and the declared form is required of each
member in turn — a form describes how *one* value is written, so the
requirement distributes. Until August 16, 2026 both list paths returned their
verdict before the form check ever ran, so the token was silently dropped the
moment an answer held a comma: "Find $\cos t$ and $\sin t$, separated by a
comma" accepted its own printed $\cos\tfrac{\pi}{6},\sin\tfrac{\pi}{6}$ with
`evaluated-trig` declared. `tools/verify-replay.mjs` skipped the whole
list-keyed class for that reason and so could not report it; with the grader
fixed the exemption is gone and those 451 fillins are replayed like any other.

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

**Never write `\\` in a math span outside a `\begin{…}` environment.** KaTeX
reads it as a row break and then sets whatever follows as literal letters, so
`$x=-\\tfrac{b}{2a}$` renders a line break and the word "tfrac". It does not
throw, so `verify-section`'s KaTeX pass calls the page clean and only a reader
notices. This is what a shell or Python heredoc that ate one backslash leaves
behind — intermediate algebra 9.6 acquired one exactly that way. Inside
`\begin{array}`, `{aligned}`, `{cases}` or `{matrix}` a `\\` is the row
separator and is correct; the lint fires only on spans that open no
environment.

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
separated by a line `===OPT===`, with `answerIndex` (0-based). Author each
option as its graph-core spec JSON — the same spec language as `apfigure`,
with the kind riding INSIDE the JSON when it is not a plain graph
(`"kind": "graph" | "numberline" | "figure"`, default `graph`) — and the
`<ap-figure>` component renders it in the option button with the full
measured-metrics/auto-fit treatment:

```
{{</* multiplechoice
  question="Which graph shows the point $(5, 2)$ plotted correctly?"
  mode="graph"
  answerIndex="1"
  hint="Go right to $x = 5$ first, then up to $y = 2$."
*/>}}
{"ariaLabel":"A point plotted at 2 on the x-axis and 5 on the y-axis, with the coordinates reversed.","xMin":0,"xMax":7,"yMin":0,"yMax":7,"tickLabels":true,"points":[{"at":[2,5]}]}
===OPT===
{"ariaLabel":"A point plotted at 5 on the x-axis and 2 on the y-axis.","xMin":0,"xMax":7,"yMin":0,"yMax":7,"tickLabels":true,"points":[{"at":[5,2]}]}
{{</* /multiplechoice */>}}
```

Every option spec needs an `ariaLabel` — it is the option button's
accessible name, and for a graph question it must describe the graph
without giving the answer away in words a screen-reader user would get for
free. The line between those is **describe, never evaluate**. Naming
coordinates is fine and is the house convention ("A line falling from left to
right, crossing the x-axis at −4 and the y-axis at −2"), because the learner
still has to do the mathematics to know which coordinates are the right ones —
that is equitable access, not a leak. What leaks is a label that judges its own
option: "…with the coordinates reversed", "…with the y-coordinate's sign
flipped", "…with the vertex plotted well to the right of its actual peak".
Those announce *this is the wrong one*, and a screen-reader user answers by
elimination without reading a graph. Write what is drawn and let the reader
judge it.

**Every distractor must differ from the correct option in the drawn objects,
never only in a marked point.** An option carrying the identical curves with
the dot moved off the intersection cannot be labelled honestly at all — any
truthful description of it names the answer — and it is weak besides. Vary the
slope sign, the intercept sign, the steepness, the opening direction, or make
the pair parallel; then mark each option's own true crossing or vertex, and pin
every shared feature identically across options so exactly one thing varies.
Watch for a system whose two lines share a $y$-intercept: every
intercept-preserving distractor then crosses at the same point, so the
intercepts are what you have to vary. The lint validates every spec option exactly like an `apfigure` body
(it must parse, carry the `ariaLabel`, and build through the real engine),
and the figure layout gate covers option figures automatically. Prerendered
`<svg>` option blocks (the pre-spec form) remain valid and keep their
`aria-label` requirement; author NEW graph options spec-first always.

**Migrating a legacy graph-choice exercise to spec options.** Unlike the
figure migration above, this rewrites the exercise's own body, so the
answer ledger participates by design — a converted exercise is a re-read
exercise. Per page:

1. Convert each option `<svg>` to its spec. Legacy options carry no
   `data-spec`, so reconstruct like any pre-spec figure: recover grid,
   objects, and labels from the SVG geometry, fit analytic primitives
   (never `smoothCurves`), and keep each option's `aria-label` verbatim.
   Only the option bodies change: question, hint, `answerIndex`, and option
   ORDER must stay semantically identical.
2. Verify old vs new side by side the same way §3 requires for figures:
   render each new spec with `toSvgString`, lay it beside the old option
   SVG in a throwaway gallery, screenshot, and inspect every pair. The
   wrong options matter as much as the right one — a distractor that
   drifted is a changed exercise.
3. Re-verify the exercise and record it: the rewritten body has a new
   hash, so `npm test` fails at `verify:ledger` until the record exists.
   Run `node tools/answer-ledger.mjs prune content` to drop the stranded
   old records, then `npm run ledger:list -- --unverified`, independently
   confirm the `answerIndex` option is the correct graph (read the specs,
   not the old key), write result files, and `npm run ledger:merge <dir>`.
4. Gates: `npm run verify-section -- <page>`, `npm test`, `npm run build`,
   the figure layout spec, and `node tools/screenshot-page.mjs <route>`
   for light/dark crops. The exercise count is unchanged, so no baseline
   moves; the all-same-`answerIndex` lint rule still applies across the
   page.

**Graph it yourself (GraphPlot):** config (answer + grid) is JSON in the body.

```
{{</* graphplot
  question="Graph the line $y = -4x$ by placing three points on it."
  answerDisplay="$y = -4x$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="The line passes through the origin."
*/>}}
{"answer": {"slope": -4, "intercept": 0, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{</* /graphplot */>}}
```

`answer` shapes: `{slope,intercept}`, `{x}`, `{y}`, `{system:[…]}`,
`{asymptotes:[…]}`, `{quadratic:{a,b,c}}`, `{points:[[x,y],…]}`. A `points`
answer lists 1–12
distinct targets (5 is the typical precalculus table size); the learner must
place every one, in any order, and each target must sit inside the grid
bounds and on the snap lattice or validation rejects the config. Partial
credit feedback reports how many are placed correctly.

An `asymptotes` answer lists one to three distinct member lines — each
`{x}`, `{y}`, or `{slope,intercept}`, so vertical, horizontal, and slant
asymptotes all grade — e.g.
`{"asymptotes": [{"x": 2}, {"x": -3}, {"y": 4}]}` for "place the
asymptotes of $f$". The learner draws each member with two points
(consecutive pairs make one line each, previewed dashed); the placed set is
graded order-agnostic with partial-credit feedback ("1 of the 2 asymptotes
is placed correctly"). Every member must have at least two snap-lattice
points inside the grid or validation rejects the config — the same
drawability guard `system` members carry — so keep asymptote equations
lattice-friendly (an answer of $x=-\tfrac{2}{5}$ needs a fillin, not a
graphplot, unless the snap is that fine). Use this form to convert
"find the vertical/horizontal asymptotes" prompts from fillin or multiple
choice into graphing whenever the equations are lattice-reachable; it has
no `plotPoints` and is exempt from the three-point rule below because two
points per member is already `2×N`.

A line or quadratic answer may add `plotPoints: N` (2–12), e.g.
`{"slope": 2, "intercept": -1, "plotPoints": 3}` for "plot three points on
the line": the learner places N distinct points of their own choosing and
all of them must lie on the line. Use this — not fixed `points` targets —
when the question leaves the choice of points to the learner; use `points`
when the question names the x-values. `plotPoints` never exists on system
members.

**A quadratic with `plotPoints: 3` or more is graded ORDER-AGNOSTICALLY,
and the vertex need not be among the placed points.** Three points at
distinct x-values determine the parabola on their own, so the grader fits
the curve through the learner's whole set and compares its `a` and vertex
with the answer — the same contract every other multi-point form here
uses. It has to be that way: "Graph $y = x^2 + 10x + 24$ using its
intercepts, its vertex, and its axis of symmetry" is answered by
$(-6,0)$, $(-4,0)$ and $(0,24)$ — the three points that exercise's own
`answerDisplay` names, none of which is the vertex — and anchoring the fit
on the first placed point told a learner who plotted exactly those that
their points "do not all lie on one parabola". So do not write a question
that depends on which point is placed first, and do not promise a "vertex"
handle label: it appears only on the two-point form, which corpus policy
forbids authoring. `notOnParabola` now means what it says — two points
share an x-value, the points are collinear, or a point lies off the curve
the others determine.

**Author `plotPoints: 3` (or more) on every line and quadratic answer** —
the lint rejects a line or quadratic graphplot that asks for only two
placed points, because a two-point line (or vertex-plus-one parabola) can
be reproduced from the answer display without engaging the graph. Pick the
grid so at least N snap-lattice points actually sit on the answer object;
validation counts them and rejects an unwinnable ask, and a quadratic's
vertex must itself be on the snap lattice inside the grid.

**Leave slack above `plotPoints` — validation now requires it.** A grid
admitting exactly N reachable lattice points is winnable but has a single
solution set: the learner has no choice of points, which is the freedom
`plotPoints` exists to give. Fractional slopes are where this bites: on
−7..7, $y = \tfrac14 x + 2$ reaches only $(-4,1)$, $(0,2)$, $(4,3)$.
Doubling the grid is the usual fix (that line reaches seven points on
−14..14) and costs nothing but tick density. This was a counting rule the
author was asked to surface in the handoff, and eight exercises shipped
tight anyway; the reachable count is now a gate, so a line or quadratic
whose reachable points merely *equal* `plotPoints` fails `npm run lint`
with the widen-or-lower-plotPoints fix named. Widen rather than lower where
you can — and do not widen past the section's established convention
without saying you did.

Reachability is measured against what the component can actually produce:
snapping rounds to the lattice and *then* clamps to the bounds, so each
bound is reachable whether or not it sits on the lattice (every drag past
the edge lands there). `snapToGrid`, `reachableValues`, and the validator
share that one model — do not reintroduce a second one.

GraphPlot configuration is validated during `npm test`: grid bounds and steps
must be finite, minimums must be below maximums, snap/grid/tick steps must be
positive, and the answer shape must match one of the supported forms.

**Converting an MC/fillin exercise to a graphplot (the conversion
ledger).** `data/verification/graphplot-conversion-ledger.json` is the
adjudicated queue of multiple-choice and fillin exercises that should
become graphplots — each `convert` entry names the answer form (`mode`) and
sketches the answer/grid (`proposal`), each `keep` entry says why the
exercise stays as it is, so a conversion session never starts by re-reading
the corpus.

**Commit the ledger file.** It is the whole point of the tool, and it was
lost once already: the file was never committed, `readConversionLedger`
returned an empty ledger for a missing path, and `stats` reported "0
adjudicated, 335 unread" — indistinguishable from a queue nobody had
started. Every command except `merge` now refuses to run without it
(`init` creates it deliberately; `--ledger <path>` points at another one,
which is how the tests avoid writing this one).

**The queue is currently at zero.** All 335 graph-topic MC/fillin
exercises are adjudicated `keep`: the corpus's graph-production exercises
are already graphplots (138 of them) with one `mode="graph"` recognition
multiple choice per section (33). What remains flagged is graph *reads*,
number-line inequalities whose answer is interval notation, curve families
with no answer form (exponential, logarithmic, radical, absolute value,
piecewise, conic, inequality regions), asymptote-equation asks, graphing-
calculator estimates, and algebra steps whose prompt merely says "graph".
Adding an answer form to the engine is what would reopen this queue —
re-run `npm run graphable:candidates` after doing so, since `prune` plus a
new form is the only way new `convert` work appears. To convert:

1. `npm run graphable:list -- --verdict convert` — pick entries (the
   current file:line travels with each one).
2. Treat the `proposal` as a hypothesis: re-derive the answer independently
   from the prompt (run the arithmetic), pick grid/snap so validation's
   reachability guards pass, and keep the pedagogical ask intact — reword
   the question only as far as "…and place it/them on the grid" requires.
   Two proposal fields are known-unreliable and must not be copied:
   - A proposal that says to author a fractional slope "in the engine's
     exact-fraction spelling" is **wrong**. The config is JSON and
     `parseGraphPlotConfig` requires `typeof value === 'number'`, so
     $\tfrac13$ is `0.3333333333333333` and $-\tfrac{14}{3}$ is
     `-4.666666666666667`. The grader's `1e-9` tolerance absorbs the float
     error; the lattice points a learner can actually place divide exactly.
   - The proposed `grid` is a default, not a reading of the page. **Follow
     the section's existing graphplot convention** (`grep -n '"answer"'` the
     file) — the proposals lean on −6..6, where $y = 2.5x - 5$ reaches
     exactly three lattice points and `plotPoints: 3` leaves the learner no
     choice at all.
3. **Read the converted exercise against the page immediately above it.**
   A fill-in that asked for one intermediate value ("let $y = 0$, solve for
   $x$") can sit under the worked example of the *same* equation without
   harm; the graphplot that replaces it cannot, because the example's
   three-point solution table now IS the answer, and the exercise becomes
   transcription. When that happens, check the pinned CNXML for the Try It
   that actually follows the example — a page that substituted the example's
   own equation for the source Try It has a fidelity defect the conversion
   merely exposed, and restoring the source equation fixes both.

   **The worse variant: the exercise's own answer graph, pre-rendered above
   it.** Intermediate algebra 9.6 carried it eight times — a prompt sentence
   ("Graph $f(x)=\ldots$ by using its properties."), then a
   `<div class="ap-figure">` holding the solved graph with the vertex named in
   its `aria-label`, then a fill-in asking for that vertex. The static answer
   is *why* the fill-in only ever asked for one scalar, and a screen-reader
   user was handed the answer verbatim. Delete the figure and replace the whole
   prompt + figure + fill-in triad with one blank-grid `graphplot`. Check the
   CNXML first: on 9.6 it carried no figure there at all, which is what
   identified the answer graph as a local artifact rather than a
   transcription. `grep -n 'aria-label="The graph of' <file>` finds the shape.
4. **Every section that has graphing questions keeps at least one of them a
   graph-recognition multiple choice — decide it per section, and never
   escalate it.** Recognizing a correct graph among plausible wrong ones is
   a distinct skill from producing one, and the ledger adjudicates one
   exercise at a time, so it cannot see what a section is left holding. Count
   the section's graphing questions — the `graphplot`s it already has plus
   every entry the queue wants converted, Practice block included — and
   apply the rule mechanically:

   - **More than one graphing question in the section:** keep exactly one as
     a `mode="graph"` multiple choice and convert every other, the Practice
     block's included. Keep the one with the most diagnostic distractors —
     reversed coordinates, an inverted slope sign, a swapped intercept, a
     vertex off by a unit. If none of the section's candidates is already a
     recognition MC, author the keeper as one (spec-first options, per
     "Multiple choice (graph mode)" above); a converted exercise turned back
     into a recognition MC counts.
   - **Exactly one graphing question in the section:** convert it. A lone
     item is worth more as production practice than as recognition, and the
     section is not the right unit to protect a skill it barely covers.

   The count is per section, not per chapter or per book. Audit the whole
   corpus against it with:

   ```sh
   for f in $(grep -rl 'graphplot\|mode="graph"' --include='*.md' content/math/ \
               | grep -v '/knowledge-check-'); do
     gp=$(grep -c '{{< graphplot' $f); mc=$(grep -c 'mode="graph"' $f)
     tot=$((gp+mc))
     if { [ $tot -gt 1 ] && [ $mc -ne 1 ]; } || { [ $tot -eq 1 ] && [ $mc -ne 0 ]; }
       then echo "VIOLATION gp=$gp mc=$mc $f"; fi
   done
   ```

   **`knowledge-check-XX-YY.md` pages are outside this *counting* rule**, for
   the same reason they are exempt from the 2–3 question cap: they are
   cumulative assessments, not sections, and the section is the unit the rule
   is about. They are **not** outside conversion. Until August 18, 2026 the
   conversion ledger said otherwise — every graph-topic entry on a knowledge
   check carried `keep` with "knowledge-check page — automatic keep" — and that
   blanket adjudication is retired. A knowledge check gets the same pass a
   section does, with its own classification, described below.

   **Classifying a knowledge check's graph questions.** A cumulative
   assessment mixes three kinds of graph-related item, and each has exactly
   one treatment:

   - **Identification** — the skill is recognizing or classifying a graph
     ("which description gives the graph of…", "identify the type of graph",
     "which way does it open"). It stays a `multiplechoice`, but its options
     become rendered figures, spec-first per "Multiple choice (graph mode)"
     above, instead of prose descriptions. Each distractor figure depicts
     exactly the misconception its prose distractor described: do not invent
     new distractors, drop options, or reorder them.
   - **Disguised graphing** — the item is a `multiplechoice` or `fillin` only
     because a drawn graph could not be graded, and the learner has to
     construct the graph mentally to answer. The tell is in the source: an
     instruction that says "graph", and an Answer Key that prints a figure
     inside the exercise's `<solution>`. Convert it to a `graphplot`.
   - **Already right** — everything else. That includes graph-*reading* items
     whose figure the source prints inside `<problem>` (a given, not a leaked
     answer), value asks the source poses as values, and anything no answer
     form can grade — a shaded half-plane above all.

   Three rules govern what the buckets do not settle:

   - **Match the source section's interaction level.** If the section a
     knowledge-check item points back to now asks learners to graph, the item
     should too; where that section carries no `graphplot` at all, do not
     introduce one on the knowledge check.
   - **A rendered figure can leak the answer to a NEIGHBOURING item.** An
     identification question's option figures print the object's vertex,
     intercepts and asymptotes, and its `ariaLabel` names them in words — so a
     property fill-in about the same object, anywhere near it, stops being
     derivable and becomes readable. This is the pre-rendered-answer-graph
     hazard one item over, and nothing gates it. Read the items on both sides
     before settling the option specs, and put the identification question
     *after* the property questions about the same object.
   - **Say what the conversion costs.** A drawn graph takes far longer than an
     MC click, and a knowledge check is already long. Converting several items
     on one page is a length decision — report it in the handoff rather than
     making it silently.

   Prealgebra, Elementary Algebra and Intermediate Algebra are compliant.
   Precalculus is not yet, because its conversion queue has not been worked;
   bring each section into line as its conversion lands, and promote this
   check to a lint error once the last book is clean — it is mechanical, and
   nothing but the outstanding backlog is keeping it out of
   `tools/lints.mjs`.

   **One adjudicated exception, and the reason the promotion is not automatic:**
   intermediate algebra §3.4 (Graph Linear Inequalities in Two Variables)
   holds three `graphplot`s and *two* `mode="graph"` MCs. Neither MC can
   become a graphplot — their distractors encode dashed-versus-solid boundary
   style and which side of the line is shaded, and there is no answer form
   that grades shading — so "convert every other" has nothing to convert, and
   demoting one to a prose-option MC would trade a rendered-graph item for a
   worse one purely to satisfy a counter. The rule as written assumes every
   surplus recognition MC *could* have been a graphplot. Before this check
   becomes a lint error, that clause needs restating (the natural form: a
   section keeps at least one recognition MC, and converts every recognition
   MC a graphplot answer form can express).
5. **Sweep for exercises the conversion strands but the queue never named.**
   A workaround is often a *pair* — "what is the $x$-coordinate of the
   intersection?" followed by "…and the $y$-coordinate?" — and the ledger
   adjudicates only the first. Grep the neighbourhood for `For the same`
   and for a hint that cites a value no exercise on the page produces any
   more; that hint is the tell. Delete the residue rather than leaving a
   fill-in whose hint refers to a deleted answer.
6. Do not restate what the component already prints. `<graph-plot>` emits
   its own instruction line ("Place two points on each line — the first two
   make one line, the next two the other"), so a question ending in the same
   sentence renders it twice.
7. The rewritten exercise is a re-read exercise: `node
   tools/answer-ledger.mjs prune content` drops the stranded old record,
   then record the new verdict per §4.
8. `node tools/graphplot-conversion.mjs prune content` — the conversion
   strands the queue entry; pruning it is how the queue burns down.
9. If a converted fillin is named in `SOUND_COINCIDENCES`
   (`tools/verify-replay.mjs`), delete that entry — its exercise no longer
   exists, and the allowlist test fails with "the question prefix must name
   exactly ONE fillin, matched 0". This is the common case, not an edge one:
   "graph $x = a$, what is the $x$-value…" fillins are exempted *because*
   the prompt states its own answer, which is the same workaround that put
   them in the conversion queue.
10. If the section keeps a provenance footer describing its component
    choices, reconcile it; then `npm run verify-section -- <page>` and `npm
    test`. Converting a fillin moves the replay floor, so end the session
    with `npm run baseline:update`. Merging two exercises into one graphplot
    also lowers the exercise-count floor, which the tool refuses without
    `--allow-decrease` — account for the drop before passing it (removed
    fillins' scalar printed spans should bracket the replay delta).
11. Run `npm run ci`, not just `npm test`: adding graphplots *above* an
    existing one renumbers the page, and any Playwright spec that reached
    its card by position silently retargets. Select a `graph-plot` in a test
    by its authored config —
    ``graph-plot[data-config*='"slope":3,"intercept":-1']`` — never by
    `.nth(n)`.

New graph-topic exercises land in the queue automatically: `npm run
graphable:candidates` surfaces any graph-topic MC/fillin with no ledger
entry (three deliberately conservative signals — MC with rendered-graph
options, graph/sketch/plot prompts, asymptote prompts; widen
`isGraphTopic` in `tools/graphplot-conversion.mjs` to grow the queue), and
`npm run graphable:merge <dir>` folds a reading pass's verdicts in with the
answer ledger's conflict-refusing contract. The decision it refuses to let
file order settle is the verdict *and* the `mode`: two passes that both say
`convert` but disagree on the answer form have read the exercise
differently. `note` and `proposal` are prose (the proposal is a hypothesis
the converter re-derives), so differing wording merges, first file winning.

**Callouts / cards** (Hextra shortcodes):

```
{{</* callout type="info" */>}}
**Note.** Body markdown, including $math$.
{{</* /callout */>}}
```

**Static figures (Graph / NumberLine / Figure):** author the figure as its
graph-core spec inside the `apfigure` shortcode — never as hand-written or
pasted SVG:

```
{{</* apfigure kind="graph" */>}}
{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}
{{</* /apfigure */>}}
```

`kind` is `graph`, `numberline`, or `figure`; the body is one JSON object
whose properties map to the matching `buildGraph`, `buildNumberLine`, or
`buildFigure` builder in `assets/js/lib/graph-core.mjs`. Every figure MUST
carry an `ariaLabel` — it is the accessible name and the no-JS fallback
description. The `<ap-figure>` Web Component renders the spec in the browser
with the shared engine, which does all layout from measured text metrics and
then fits the viewBox around everything it drew, so a label cannot be cut
off, and fonts scale up before a dense figure can shrink its text below
legibility. Author the mathematical objects and let the engine place them;
`labelSide` is honored exactly as written wherever you state it.

The placement pass treats tick digits, the axis letters, `texts`
annotations, and every already-placed label as obstacles, and it scores a
stroke passing *through* a candidate box far below one merely nearby — so a
label routes around the y-axis digit column instead of printing across it.
Dashed ink also yields the way print art does: dashed guide lines
(asymptotes, boundaries) are emitted gapped behind any label ink or tick
digit they cross — a gap in a dash pattern is invisible — and the two
digits that share the corner cell by the origin de-collide on their own.
SOLID strokes never gap: a solid curve with chunks missing reads as
dashing, which is a mathematical statement, so a curve hugging the axis
draws straight over the digit row exactly as the source books print it.
The practical consequence for authoring: **write line labels with no
`labelSide`/`labelAt` pins first** and let the engine choose — a pin is
honored even into a collision, so state one only to express meaning the
engine cannot know. For the rare point label that must sit a few pixels off
its chosen side to clear a curve, `labelNudge: [dx, dy]` (px) shifts it
without giving up placement scoring; a `texts` entry remains the full
escape hatch and is never moved.

**The grid bounds are not a clip.** The fit pass sizes the viewBox around
everything drawn, so an object bigger than the stated window enlarges the
figure rather than being cut off at its edge: a `circles` entry with
`ry: 49` on a −12..12 grid renders a 388×1376 SVG. This bites hardest on a
`mode="graph"` option set, where every option must share one window — an
oversized distractor drags the whole set into a frame that leaves the
correct option a few pixels tall. Size the window to the largest object any
option draws, and if that makes the correct one unreadable, say so rather
than shipping four unreadable figures. (`quadratics`, `curves` and
`hyperbolas` do clip, so only the closed families — `circles` above all —
have this behavior.)

**Only `lines`, `segments`, `points`, and `regions` can carry a label** in a
`graph` spec — a region's label rides on the boundary line the engine draws
for it, so it places like any line label. A curve family — `quadratics`,
`cubics`, `polynomials`, `rationals`, `curves`, `circles`, `polylines` —
draws its stroke and nothing else, so a `label` on one is not a placement
question, it is text the engine never draws. Name a curve with a `texts`
entry, which prints exactly where it is written. (`kind="figure"` is out of
scope for this rule: `buildFigure` labels its own families its own way — a
figure circle's `label` is a sub-object drawn outside the rim with a leader
line — and the lint knows the difference.) Precalculus 3.2 shipped eight
parabolas each carrying the equation its author meant printed beside it,
silently dropped for years; the lint now rejects the dead key rather than
let a figure say less than the source it was recreated from.

**Write exponents in a figure as superscript characters, never as TeX.** The
SVG label layer has no typesetter: `f^{-1}(x)` prints those nine characters
verbatim, which is how precalculus 3.8 shipped four inverse curves labelled
with raw markup. Write `x²`, `x⁶`, `f⁻¹(x)`. The prose rule against `⁻` (a
superscript minus cannot parse as an exponent) is a rule about *math spans*
and does not reach inside a figure body — an `apfigure` body or a
`multiplechoice mode="graph"` option spec, which is the same population
validated by the same rules — where the superscript IS the exponent;
`text-metrics.mjs` measures the whole superscript block so these labels
place as accurately as any other.

**Leave a blank line on both sides of the shortcode.** `<ap-figure>` is a
custom element, so Goldmark does not treat it as an HTML block the way it
treated the pasted `<div class="ap-figure">` it replaces: welded to the text
around it, the figure is parsed as inline HTML *inside* that paragraph, and
every shortcode that follows it up to the next blank line is pulled into the
same paragraph. The browser then re-parents those `<div>`s out of the `<p>`,
leaving empty `<fill-in>` / `<multiple-choice>` hosts whose
`connectedCallback` throws and whose exercise never renders — three exercises
were lost this way converting precalculus 3.7. The lint enforces the blank
lines; `tests/figures.spec.mjs` catches the console errors that follow if it
ever does not.

Layout is machine-checked, three ways: the lint builds every authored spec
through the real engine (a spec that cannot build fails `npm test`, not the
reader's browser); `tests/figures.spec.mjs` renders every page carrying
an `<ap-figure>` in both colour schemes and fails on any text outside the
fitted viewBox or any console error; and the readability gate

```
npm run check:figures            # or: node tools/check-figure-overlaps.mjs <page.md>
```

builds every spec-first figure and fails on any label printed across other
ink deeper than a 3px graze (it runs inside `npm test`). A solid stroke
crossing a tick digit is reported but never gated — print art draws over
axis numbers too — while a dashed stroke crossing one IS gated, because the
engine gaps dashes behind digits and a crossing means that failed. The same
run previews every legacy `data-spec` figure as the spec-first re-render it
will get at conversion and reports — without gating — the ones that would
need label work then. What the machines cannot check is FIDELITY — that the
figure says what the source figure says — so the visual comparison against
the PDF remains part of authoring (below).

To eyeball a spec while authoring without a Hugo server, print it as
standalone SVG:

```
node tools/render-figure.mjs graph '{"ariaLabel":"The line y = 2x + 1.","lines":[{"slope":2,"intercept":1,"label":"y = 2x + 1"}]}'
```

Older sections still carry that helper's pasted `<div class="ap-figure">`
output with its `data-spec` attribute. The form remains valid and lint-
covered; convert a page's figures to `apfigure` shortcodes when you next do
substantive work on the page (the recorded `data-spec` JSON is the spec —
conversion is mechanical), and author NEW figures spec-first always.

**Converting a chapter to spec-first figures.** The conversion state is the
content itself — a page still carrying `<div class="ap-figure"
data-spec=…>` (or pre-spec `<svg>` option blocks) is unconverted; a page
whose figures are all `apfigure` shortcodes and spec options is done. No
separate ledger records this, so nothing can drift. Start from the queue:

```
npm run figures:status -- content/math/<book>/<chapter>
```

Pages listed `converted` are finished — do not touch them. Everything else
carries one of three unconverted forms, and each has its own procedure.

**Legacy `data-spec` divs — run the converter.** The rewrite is mechanical
(the recorded JSON *is* the spec), so it is a tool, not hand-editing:

```
npm run figures:convert -- --dry-run --gallery /tmp/diff.html content/math/<book>/<chapter>
npm run figures:convert -- content/math/<book>/<chapter>
```

It drops the legacy `"type"` key into the shortcode's `kind` attribute,
keeps the blank lines around every shortcode, and — the part that matters —
replays each spec through TODAY's builders and diffs the result against the
SVG it replaces, classifying every figure as `=` identical, `~` label drift
(placement or font moved; expected, the engine improved), `~` a dashed guide
now gapped behind label ink, or `!!` geometry drift, which is a bug. It
exits non-zero on any `!!`, and `--gallery` writes the drifted pairs
side by side to eyeball. On precalculus chapter 1, 89 of 101 figures
re-rendered byte-identical, so the eyeballing was 12 pairs rather than 101.
Prefer unpinned labels per the placement notes above — the engine now places
them, and the old hand-chosen `labelSide`/`labelAt` pins predate that. The
converter does not merely flag a spec for carrying a pin; it renders the spec
both ways and says which kind of pin it is. `redundant` means the pin names
the side the engine picks unaided, so deleting it changes no pixel — do that.
`load-bearing` means dropping it re-places a label, so it is a judgement call:
keep the pin when it is what the source figure shows, drop it when the engine
reads better. Precalculus chapter 2 had five pinned specs, two redundant.

Delete the redundant ones with the converter rather than by hand — by hand is
how a load-bearing pin goes with them:

```
npm run figures:convert -- --tidy-pins --dry-run content/math/<book>/<chapter>
npm run figures:convert -- --tidy-pins content/math/<book>/<chapter>
```

It works per pin, not per spec, because a spec routinely mixes the two, and it
drops a pin only when re-rendering without it is byte-identical — so a tidied
page cannot have moved a label. What survives is the honest set: every
remaining pin overrides the engine, which is the set worth reviewing.
Precalculus chapter 3 gave up 34 redundant pins across 23 figures this way.

**A converted spec may surface a dead curve label.** Legacy specs sometimes
carry `label` on a curve family — text no engine ever drew, which the lint
rejects the moment the spec becomes an `apfigure` body. Do not reflexively
delete the key: it is a transcription of something the author saw. Check the
printed figure. Where the source art prints the equation or name beside the
curve, restore it as a `texts` entry so the figure says as much as the
source (precalculus 3.2 restored six equations and an `A` this way); where
the print shows a bare curve, the label was the author's own addition and
goes (3.2's write-the-equation example, where printing the answer on the
graph would defeat the exercise). The restored `texts` are placed by hand,
so run the page back through `check:figures` after adding them.

**Pre-spec `<svg>` graph options** take the separate option-migration
procedure above, ledger step included — that one rewrites exercise bodies,
so it is not mechanical.

**Hand-written SVG in a bare `<div class="ap-figure">`** (no `data-spec`) is
the oldest form and the only one with nothing to copy: no gate can build it,
so the spec has to be reconstructed from the drawing the way a pre-spec
option is. Some of these are shapes the engine has no primitive for — bar
charts, schematic diagrams with funnels and mapping arrows. Extend
`graph-core` with the primitive rather than hand-assembling the picture out
of `polygons` and `texts`; a figure spelled out coordinate by coordinate is
the pasted SVG again with extra steps.

Then gate the page before moving on: `npm run verify-section -- <page>`,
`node tools/check-figure-overlaps.mjs <page>`, `npm test`, and the visual
comparison of each converted figure against the PDF, which no gate
replaces. The `--status` run's `⚠` sibling report (`npm run
check:figures`) also previews which unconverted figures will need label
attention when their turn comes.

**Draw known shapes with their analytic primitive, never a spline
approximation.** `buildGraph` has exact primitives: `lines`, `quadratics`
(including `sideways`), `cubics`, `polynomials` (a `coeffs` array
$[a_0,a_1,\dots]$ for any degree, so a fitted quartic or quintic renders
from its exact formula), `rationals` (a `num`/`den` coefficient pair, whose
branches split at each pole on their own), `circles` (a real SVG ellipse),
`hyperbolas` (the standard-form conic: `{ at:[h,k], a, b }` draws
$\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$ opening left/right from vertices
$(h\pm a,k)$, and `vertical: true` draws
$\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$ opening up/down from $(h,k\pm a)$;
the dashed asymptotes and central rectangle of the textbook construction are
their own objects — author them as dashed `lines` and `segments`),
`polylines`
(straight joins — required for corners such as $y=\lvert x\rvert$), and
`curves` with kinds `sqrt`, `cbrt`, `reciprocal`, `reciprocal-squared`,
`sine`, `cosine`, `tangent`, `secant`, `cosecant`, `cotangent`, `arcsine`,
`arccosine`, `arctangent`, `exp`, `log`, and `logistic` (each accepts `a`,
`h`, `k` for
$a\,f(x-h)+k$; the trigonometric kinds add `b` and draw
$k+a\,f\bigl(b(x-h)\bigr)$ — `sine` gives $k+a\sin\bigl(b(x-h)\bigr)$ and so
on. The asymptotic four (`tangent`, `secant`, `cosecant`, `cotangent`) split
into branches on their own wherever the curve leaves the grid; their dashed
vertical asymptotes are NOT drawn for you — author them as dashed `lines`.
`arcsine` and `arccosine` draw only their closed domain
$\lvert b(x-h)\rvert\le 1$, sampled parametrically so the vertical tangents
at the endpoints stay smooth. `exp` and `log` take `b` as the base and draw
$k+a\,b^{x-h}$ and
$k+a\log_b(x-h)$). `log` also takes `reflect: true`, mirroring the branch
about its vertical asymptote to draw $k+a\log_b(h-x)$ on $x<h$ — the
$y$-axis-reflected logarithm, which has no other analytic spelling.
`logistic` draws $k+\tfrac{c}{1+a e^{-b(x-h)}}$ using the TEXTBOOK's parameter
names, so `c` is the carrying capacity and `a` is the shape parameter, **not**
the vertical scale `a` names on every other kind. Both were added while
authoring chapter 4, where six curves had been hand-sampled as dense point
lists for want of them. Quadratics, cubics, polynomials, and
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
than 1,975. Where the source numbers only one axis, `tickLabels` also takes
`'x'` or `'y'` to label that axis alone.

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

The spec in the page IS the figure — reproducible, reviewable against the
PDF, and lintable. The lint validates every `apfigure` body (JSON that
parses, a non-empty `ariaLabel`, a spec the engine accepts) and still
validates a legacy figure's `data-spec` the same way (it must parse, and any
`smoothCurves` entry must carry `freeform: true`).

Do not paste or download textbook equation images into content. Write equations
as KaTeX, recreate tabular relationships as Markdown tables, and use `apfigure`
for diagrams and graphs so an accessible SVG renders directly in the page. File-backed Markdown/HTML images, raster formats (`.png`, `.jpg`,
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
the value check — say so in the question, and declare `degrees` or `radians`.

The engine also read `^\circ` as an *angle* and folded it onto one turn, so
`1400^\circ` boxed to the same expression as `320^\circ` and every
coterminal-angle exercise in §5.1 was passable by retyping its own prompt —
with no form token able to refuse it, since `degrees` asks how the response is
written and the retype is written in degrees. The reduction was asymmetric
(`-540^\circ` boxed to `-\pi`, not `\pi`), so it was not even usable as a
coterminal check. Since August 16, 2026 `checkAnswer` spells the mark out as
`\cdot\frac{\pi}{180}` on the parse path: the value is ordinary arithmetic,
`30^\circ` still equals `\frac{\pi}{6}`, and `1400^\circ` no longer equals
`320^\circ`. **A coterminal answer is therefore compared strictly** — the key
names one representative and only that one grades correct, so say which the
question wants ("the coterminal angle between $0^\circ$ and $360^\circ$").

`{{< graphplot >}}` grades four answer shapes only — a line, a system of two
lines, a quadratic, and a set of 1–12 points (`{"points": [[…],…]}`,
order-agnostic). The points form covers "graph by plotting points" exercises
for any function — name the x-values in the question and list the table's
points as the answer — but only the placed points are graded, never the curve
through them. A curve that must be judged as a curve (exponential,
logarithmic, sinusoid, conic, polar) still needs a static figure with a
`fillin` or `multiplechoice` question about it, not an interactive plot.

## 4. Verify (the workflow)

From the repository root:

1. Reconcile the finished page against the pinned CNXML, source ledger, and PDF
   images: objectives, examples, math, figures, retained exercises, and
   official answers must all match or have an explicit reviewed decision.
2. Independently solve every touched interactive question and compare both the
   prompt and answer with the source Answer Key. Do not infer correctness from
   self-grading.
3. Record those derivations in the **answer ledger** — authoring or editing an
   exercise is what creates the obligation, and `npm test` fails at
   `verify:ledger` until the record exists.
   `npm run ledger:list -- --unverified` prints every unrecorded exercise
   with its hash; write one or more result files
   (`{"results": [{"hash": "…", "verdict": "ok" | "defect" | "unverifiable",
   "note": "…"}]}`) from the step-2 derivations — never from the authored
   key — and fold them in with `npm run ledger:merge <dir>`. After editing
   existing exercises, `node tools/answer-ledger.mjs prune content` drops the
   records stranded by their old text.
4. `npm run verify-section -- content/<subject>/<book>/<ch>/<sec>.md`
   — lints, renders every math run, and confirms that each fill-in answer is
   parseable by the real grader. Fix every ✗. Warnings on a page you authored
   or revised are defects, not backlog: clear them, or say in the handoff
   which pre-existing ones you left and why (§5).
5. Run `npm test`. It includes whole-repository structure validation,
   per-page real-grader verification, the corpus-wide answer cross-check
   (`npm run verify:answers` — every mechanically checkable answer is
   re-derived numerically from its own question), the answer-ledger gate,
   unit tests, repo-wide
   authoring lints, documentation consistency checks, and KaTeX parsing.
   `npm run validate` remains available as a focused structure-only command.
   A cross-check failure means the answer disagrees with the printed
   question: solve it independently before touching either side, and if the
   checker is wrong about sound content, narrow the checker (§5 rules).
6. For chapter/bulk work, run `npm run build` and `npm run check:build` (or
   `npm run ci`). The production audit checks, among other things, that math
   pages load the pinned KaTeX CSS and that its hidden accessibility layer
   cannot appear as duplicate visible math.
7. Open every changed page with `npm run serve`. Confirm real components
   render and grade, prose/math spacing is visible, formulas appear once, and
   figures match the PDF. Also open a changed chapter landing page.
   `node tools/screenshot-page.mjs <route>` captures light/dark full-page
   shots plus a high-zoom crop of every figure and fails on duplicate KaTeX
   or unlabelled SVGs — use the crops for the figure-vs-PDF comparison, and
   inspect curve tips and corners at zoom, where spline and stroke defects
   hide.
8. Run `git diff --check` and report the changed/untracked files plus the
   source ledger and pages visually checked. Do not commit unless asked.

## 5. Working rules

`npm run lint` reports **zero errors, and errors are all there is** — the
lint has no warning level. The last warning-level rules (missing hints,
multipart-looking questions, an empty worked Solution, all-same graph answer
positions) were promoted to errors on August 10, 2026, when the corpus
carried zero of each, and the warning channel was deleted with them. There is
no non-blocking rule left in the repository and no category of
known-defective content to grandfather.

The Practice retrofit that used to live here is finished. All 242 mapped
sections carry the block (the documentation test pins that count to the live
map, so authoring a new mapped section means bumping it here). The final
block landed on August 9, 2026; the lint rule was promoted from a warning to
an error the same day, and the published backlog count was deleted along with
the `--check-docs` flag and the tooling that maintained it. Precalculus 2e's
remaining scaffolded chapters will each need their blocks as their section
pages land — but as an error on the page being written, not as a worklist.

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
- **End the session with `npm run baseline:update`.** It runs the three
  counting gates, recounts the `--min-verified`, `--min-replayed`, and
  `--min-exercises` floors, rewrites each in place in `package.json`, and
  refuses to lower any of them without an explicit flag. Committing its
  rewrite with the content is what keeps `npm run ci` green without a
  hand-edited count. The baselines ratchet differently:
  `--min-verified` is an exact match (a move either way is news about what the
  cross-check can read); `--min-replayed` and `--min-exercises` are floors
  (both counts rise with ordinary authoring; only a drop means a gate went
  quiet).

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
| "Write it in standard form" | 26 | `vertex-form`, `conic-standard-form`, `circle-standard-form` |
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
  `tools/lints.mjs` unions per-verb extractors deliberately. Widening a shared
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
`tools/lints.mjs` **build** that candidate rather than finding it:

| Phrasing | Candidate built | Typical token |
|---|---|---|
| `find $(f\pm g)(x)$`, `$(f\cdot g)(x)$`, `$(fg)(x)$`, `$\left(\tfrac{f}{g}\right)(x)$` | the two definitions joined by that operation | `no-like-terms`, `expanded` |
| `find $f(g(x))$` or `$(f\circ g)(x)$` | the outer definition with the inner substituted for `x` | `expanded distributed`, `no-like-terms` |
| "Subtract $X$ from $Y$" | $(Y)-(X)$, in the order the wording fixes | `no-like-terms` |
| "…find the quotient when $A$ is divided by $B$" | $\tfrac{A}{B}$ | `expanded` |

Definitions printed in page prose ("For the next three questions, use
$f(x)=6x+1$…") reach the extractor as fallbacks — safe by construction, since
a wrongly paired definition builds a candidate that never grades `correct`.
The boundaries are load-bearing, and asserted in `tools/lints.test.mjs`: an
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

### Standing notes from the closures

Facts that outlived the programme — each explains a lint error or a grader
behavior an author will still meet:

- **Write quotients as explicit `\frac` in `answer`.** A slash quotient with a
  juxtaposed factor (`-1/20(x-20)^2+20`, `y=1/2x-5/2`) parses as
  $\tfrac{-1}{20(x-20)^2}+20$ and $y=\tfrac{1}{2x}-\tfrac52$: the authored
  value is silently not the intended one, both sides of the self-check
  mis-parse identically so no self-grading gate fires, and a learner typing
  the intended answer is marked wrong (MathLive turns a typed `/` into a real
  `\frac`, so the learner cannot even reproduce the authored string). The
  lint rejects any answer matching a slash quotient followed by a juxtaposed
  letter, parenthesis, or macro.
- **An interval-notation ask needs an interval-shaped answer.** The engine
  grades an inequality and an interval unequal in both directions, so `u>10`
  behind "write the solution in interval notation" marks the learner who
  types `(10,\infty)` as instructed incorrect. The lint requires an
  interval-shaped answer (every `\cup`-joined part opens with `[` or `(`)
  behind any interval-notation ask.
- **A written function label is stripped before grading.** `f(x)` boxes as
  `Multiply(f, x)` (capital names as an application), so `checkAnswer` strips
  a written one-letter-applied-to-one-letter label — only when no further `=`
  remains, so a genuine equation response is never half-eaten — and the
  variable-name guard does not apply to it: a prompt that says $f(x)$ and an
  author who wrote $y$ both mean the output.
- **The re-expression lint checks the declared form BEFORE grading a
  candidate span through the engine**, because grading is value-then-form (a
  span the form rejects can never grade `correct`) and the engine's
  `simplify()` effectively never returns on a conjugate radical quotient.
- **The engine can hang, and the grader routes around it.**
  Measured against the pinned 0.58.0 the engine has two distinct hang sites,
  and `ce.timeLimit` interrupts neither: `isEqual()` never returns once either
  operand keeps a radical-denominator quotient
  ($\tfrac{\sqrt{2}}{\sqrt{x}-\sqrt{3}}$ — against *any* comparand), and
  `simplify()` never returns on some differences of variable-radical
  expressions. `equivalent()` in `lib/check-answer.mjs` routes both classes
  to bounded numeric sampling instead of the engine (see the guard banner
  there), so a pasted conjugate prompt grades `form` — the message the
  `answerForm` was built to produce — rather than freezing the page.
- **Complex arithmetic: author the answer in $a+bi$ form.** The pinned engine
  has two defects here and both are silent. It divides by the denominator's
  modulus rather than its square, so $\tfrac{2+5i}{4-i}$ evaluates wrong; and
  a coefficient times a complex value whose imaginary part is exactly $+1$
  loses the real part — `3(2+i)` evaluates to $3i$, not $6+3i$ — while
  `3(2-i)`, `3(2+5i)` and `(2+i)3` are all correct. A key written as a
  quotient with a complex denominator, or as a product with an unsimplified
  $(a+i)$ factor, is therefore not the value it looks like. Written $a+bi$
  sidesteps both, and a learner who types $\tfrac{3+22i}{17}$ still grades
  correct against $\tfrac{3}{17}+\tfrac{22}{17}i$. `verify-answers` skips
  both shapes rather than guess.
- **Do not "fix" deliberate conversions back.** The four ch. 11 Practice
  prompts authored as `multiplechoice` while the standard-form class was
  open, and the quotient-to-a-power item that became a multiple choice among
  fraction forms (no token's feedback names that ask), are sound content
  converted deliberately — they predate their tokens.

### Re-running the audit

Replay every math span printed in a question back through `checkAnswer`
against that exercise's own answer, one file per process — the engine carries
state across calls and will otherwise report false positives — and for any
span of the shape `label = RHS`, replay the bare RHS too, because the
labelled span itself does not grade equal to anything (the engine reads
`f(x)` as an application). `npm run verify:replay` runs the whole-span half
of this continuously, in both source and MathLive-normalized spellings; the
bare-RHS variant of a printed definition span is still the manual audit's
job.

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
- [ ] Every new or edited exercise's independently derived verdict recorded in
      the answer ledger (`npm run verify:ledger` green).
- [ ] Confirmed upstream defects logged in `docs/openstax-errata.md`; dismissed
      suspicions recorded in its "Reviewed and *not* errata" list.
- [ ] No file-backed instructional images; recreated figures compared visually.
- [ ] `verify-section` clean (✗ = 0).
- [ ] `npm test` green.
- [ ] Production build/audit green for chapter or bulk work.
- [ ] Browser check confirms math appears once, spacing is correct, components
      work, and figures match the source.
- [ ] Handoff lists source evidence, visual pages, and all uncommitted files.
