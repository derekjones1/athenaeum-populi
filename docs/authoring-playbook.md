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
against itself. They cannot prove that the transcription is faithful or that
the answer is mathematically correct.

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
| `mixed-number` | a whole number and a proper fraction |
| `improper-fraction` | $\tfrac{a}{b}$ with $\lvert a\rvert \ge \lvert b\rvert$ |
| `fraction-or-mixed-number` | either shape — for a source ask that offers the choice |
| `lowest-terms` | numerator and denominator share no factor |
| `scientific-notation` | $a \times 10^{n}$ with $1 \le \lvert a\rvert < 10$ |
| `prime-product` | a product of prime powers |
| `denominator:<n>` | that exact denominator — for equivalent-fraction asks, which are deliberately **not** reduced |

A right value in the wrong shape reports back as "That value is right — now
write it in lowest terms", so the learner is told what is missing rather than
that they are wrong. A wrong value is still just wrong. The requirement is
checked against the LaTeX rather than the parsed expression, because the
Compute Engine erases exactly this distinction: `\frac{40}{88}` parses to
`["Rational",5,11]` and `2^4\cdot5` to `80`.

The lint rejects a re-expression prompt with no `answerForm`, and
`verify-section` rejects an answer that does not satisfy the form it declares
— an exercise that would reject its own answer. Where the response is not a
re-expression at all, `multiplechoice` is the right component: the learner
picks among forms. Retyping a printed *expression* ("Add: $3+5$") also grades
correct, but that is inherent to CAS grading and is not flagged.

**A categorical answer is never a number.** "Is $7{,}248$ divisible by $5$?
Answer $1$ for yes or $0$ for no" grades a legend rather than the choice and
lets a coin-flip pass. Use `multiplechoice` with the alternatives themselves as
options (`yes`/`no`, `rational`/`irrational`, `Quadrant I`–`Quadrant IV`). The
lint rejects a fill-in whose question maps digits to named alternatives.

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

Every numbered section closes its instructional content with a `## Practice`
heading. It sits immediately after the educational content — that is,
immediately before the section's first end-matter heading, whichever the
section uses (`## Key equations`, `## Key concepts`, `## Key terms`, …). In a
section with no end matter, `## Practice` is the last heading before the
attribution footer.

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
- **Hints.** These are regular-section exercises: every one needs a concise,
  strategy-oriented `hint`.
- **Cap exemption.** Practice-block questions are exempt from the 2–3
  consecutive-question limit. The limit still governs the in-page practice
  sets that follow worked examples.
- **Attribution.** Update the section's footer "Changes:" note to disclose
  that selected end-of-section exercises were adapted into interactive
  practice; a footer claiming the end-of-section exercises were omitted is
  stale once the block exists.

Sections authored before August 1, 2026 may not have a Practice block yet;
the content lint reports each missing block as a warning naming that
section's minimum, and that warning list is the retrofit worklist (§5). New
sections and substantive revisions must ship the block. A present-but-
malformed block — an under-filled group, a group that is not an objective,
groups out of order, an exercise outside any group, too few exercises
overall, wrong placement, or a duplicate heading — is a lint error.

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
   per-page real-grader verification, unit tests, repo-wide authoring lints,
   documentation consistency checks, and KaTeX parsing. `npm run validate`
   remains available as a focused structure-only command.
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

## 5. The one remaining retrofit

`npm run lint` reports **zero errors and one warning category**: the 142
sections with no `## Practice` block (intermediate-algebra 70,
elementary-algebra 61, precalculus 11, as of August 2, 2026; prealgebra is
complete at 60/60). That warning list is the worklist, and it is the only
non-blocking rule in the repository — every other authoring rule is an error,
so there is no category of known-defective content left to grandfather.

Adding those blocks is authoring, not cleanup: roughly a thousand exercises
selected from the source's end-of-section sets, each with its answer visible
in the Answer Key, independently solved, recorded in the ledger, and disclosed
in the footer. Work it a chapter at a time under §3. When the last section
lands, promote the rule to an error and delete this section.

Everything else that used to live here has been fixed rather than documented:
trivially satisfiable fill-ins now carry `answerForm`, numerically coded
categorical answers are `multiplechoice`, four-digit numbers are grouped, and
figure curves come from analytic primitives. Two rules that were over-firing
were narrowed at the same time — an incidental value collision is not a defect
(the mode of a data set *is* one of the printed numbers), and `\phantom{0000}`
long-division spacing is not a number.

The working rules that remain:

- **Never add a warning.** A page you author or substantively revise ships
  with none of its own. A new one in a diff is a review failure, not backlog.
- **No bulk regex fixes.** Where a rule names a pedagogical defect, its repair
  depends on the source exercise. Retrofit by section, verify by section.
- **A rule that fires on sound content is a bug in the rule.** Narrow it, with
  a test for the case it was wrong about — do not add an exemption for the
  page.

## Done checklist

- [ ] Pinned CNXML and PDF/Answer Key pages inspected; source ledger complete.
- [ ] Source fidelity reconciled; any discrepancy/adaptation explicitly recorded.
- [ ] Frontmatter complete (`title`, `description`, `source_section`, `weight`).
- [ ] Chapter landing uses descriptive `**Title** — summary` section bullets.
- [ ] Every retained practice item is a real component with no print-only label.
- [ ] Objectives callout lists one objective per Markdown list item, matching
      the source one for one.
- [ ] `## Practice` block immediately before the end matter: a `### ` group
      per objective, at least two sourced, hinted exercises in each and five
      in the block, multipart items expanded part by part; the footer
      discloses the adaptation.
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
