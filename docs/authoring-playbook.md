# Section Authoring Playbook (Hugo edition)

How to author a section in the Hugo build: pure Markdown + shortcodes. The
mechanical rules are enforced by the tooling (`npm test`, `npm run
verify-section`) — author, run the verifier, fix what it reports. You should not
have to memorize the mechanical rules; the lints know them.

This playbook describes the repository's current Hugo architecture. Content is
plain Markdown with Hugo shortcodes; React, JSX, MDX, and Nextra metadata are
not valid authoring syntax.

## Scope

This playbook is the shared core: it governs every book. Its structural,
source-first, component, and verification rules are subject-neutral. Each
subject has its own playbook under `docs/subjects/` — currently
[`math.md`](subjects/math.md) for the four OpenStax math books (Prealgebra
2e, Elementary Algebra 2e, Intermediate Algebra 2e, and Precalculus 2e) and
[`biology.md`](subjects/biology.md) for Biology 2e — which adds notation,
media, and exercise-type rules on top of this core, and wins where it
differs. Read this core first, then the subject playbook for the book you
are authoring.

## 0. Source-first workflow (required for AI agents)

Automated checks can prove that syntax renders and an authored answer grades
against itself, and `npm run verify:answers` additionally cross-checks
mathematical consistency for roughly half the corpus (solve prompts by
substitution, evaluate-at prompts by substitution, re-expression prompts by
value equivalence — all numeric, against the printed question only), while
`npm run verify:source-keys` compares a prose book's multiple-choice keys,
textin answers, and self-check model answers to the pinned module's own
solutions and glossary. They
cannot prove that the transcription is faithful, and the cross-check cannot
see word problems, rounding asks, or anything whose subject lives in prose,
so independent solving against the source Answer Key remains required.

Before writing:

1. Read `AGENTS.md`, this playbook, and—when applicable—the Knowledge Check
   playbook. Inspect `git status` and preserve unrelated work.
2. For an OpenStax math book listed in
   `data/openstax/source-lock.json`, follow
   `docs/source/openstax-source-workflow.md`: use the pinned CNXML as the
   semantic/transcription authority and render the corresponding local PDF as
   edition evidence and the visual authority. Numbered sections resolve to
   modules through `data/openstax/source-map.json`; current upstream
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
     the local handling in `data/openstax/reconciliation-decisions.json`,
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
`data/openstax/reconciliation-decisions.json` with
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

Re-expression prompts (asking the learner to restate a printed value in
another form) need an `answerForm` so the grader checks the shape, not just
the value. The full `answerForm` token table, the re-expression discussion,
and the fillin answer-shape rules (unordered-list answers, digit-grouping
commas, braced exponents, `\\` outside environments) are documented per
subject; for math, see `docs/subjects/math.md`.

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

Text-mode distractor rules: options parallel in grammar and length band, no
"all/none of the above" added locally, no option that is also correct (a
source distractor that is also true is an erratum — log it and replace the
option, disclosing the change).

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

The one-time procedure for migrating a legacy prerendered-`<svg>` graph-choice
exercise to spec options is documented per subject; for math, see
`docs/subjects/math.md`.

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

Every supported `answer` shape, the grading contract each one carries, and
the adjudicated conversion ledger that turns multiple-choice/fill-in
exercises into graphplots are documented per subject; for math, see
`docs/subjects/math.md`.

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
`buildFigure` builder in `assets/js/lib/math/graph-core.mjs`. Every figure MUST
carry an `ariaLabel` — it is the accessible name and the no-JS fallback
description. The `<ap-figure>` Web Component renders the spec in the browser
with the shared engine, which does all layout from measured text metrics and
then fits the viewBox around everything it drew, so a label cannot be cut
off, and fonts scale up before a dense figure can shrink its text below
legibility. Author the mathematical objects and let the engine place them;
`labelSide` is honored exactly as written wherever you state it.

The placement engine's behavior, the full set of figure primitives, and the
legacy-figure conversion workflow are documented per subject; for math, see
`docs/subjects/math.md`.

**Text recall (`textin`)** — a short TEXT answer (a term, a name, a short
phrase) graded in the browser by normalized exact match. It is the word
counterpart of `fillin`, whose math input cannot take words at all:

```
{{</* textin
  question="A suggested and testable explanation for an event is called a ________."
  answer="hypothesis"
  accept="hypotheses"
  hint="It is proposed before the experiment, and an experiment can disprove it."
*/>}}
```

`textin` is **unpaired**, exactly like `fillin`: no closing tag. `question`
must not contain `$…$` math — a text field has no spoken-math name; use
`multiplechoice` for a prompt that needs math. `accept` lists alternate
spellings graded as correct too, **`|`-separated** (`accept="a|b|c"` — a
comma joins the items into one member the grader can never match, and the
lint rejects it); grading already ignores case, diacritics, punctuation,
hyphen-versus-space, and a leading article.

**Self-check (`selfcheck`)** — a free-response prompt with a model answer to
compare against. Nothing is graded or stored: the learner writes, reveals
the model answer, and marks the item correct or for review:

```
{{</* selfcheck question="Why do scientists publish their results?" hint="Think about verification." */>}}
Publishing lets other scientists verify, challenge, and reproduce the work.
{{</* /selfcheck */>}}
```

`question` and an optional `hint` are the only params; `answer`, `accept`,
and `answerDisplay` are rejected — a self-check has no key. The inner content
is the model answer, in Markdown. The inner content may end with a
`===CHECKS===` line followed by 2–6 rubric checkpoints — one clause of the
model answer per line, rendered as check-off boxes ("Did your answer
mention:") under the revealed model answer, so self-marking is against a
checklist instead of a wall of prose:

```
{{</* selfcheck question="Why do scientists publish their results?" hint="Think about verification." */>}}
Publishing lets other scientists verify, challenge, and reproduce the work.
===CHECKS===
other scientists verify the work
challenge and reproduce the work
{{</* /selfcheck */>}}
```

Checkpoints restate the model answer, never extend it — the lint holds each
clause to the model answer's own words — and contain no `$` math (they are
checkbox labels). Still ungraded and unstored.

**Sort into bins (`sortbins`)** — categorize 4–12 items into 2–4 labelled
bins, graded in the browser as the label→bin mapping. Built from a source
comparison table (the bins are the table's data columns); the config is JSON
in the body, like `graphplot`:

```
{{</* sortbins question="Assign each replication property to the cell type it describes." hint="Think about chromosome shape and chromosome ends." */>}}
{"bins": ["Prokaryotes", "Eukaryotes"],
 "items": [
  {"label": "Single origin of replication", "bin": 0},
  {"label": "Telomerase present", "bin": 1},
  {"label": "DNA polymerase III elongates strands", "bin": 0},
  {"label": "PCNA sliding clamp", "bin": 1}]}
{{</* /sortbins */>}}
```

`bins` is 2–4 unique labels; `items` is 4–12 `{label, bin}` entries with
`bin` a 0-based index into `bins`. Every bin owns at least one item and none
owns more than two-thirds of them (all-in-one-bin is not an exercise).
Author the items INTERLEAVED, never grouped by bin — the no-JS shell prints
authored order, so grouped order leaks the key, and the lint rejects it
(there is no runtime shuffle by design; the JS-free shell stays honest). No
`$` math anywhere — item and bin labels become button names, and a button
has no spoken-math name — and no bin-label content word may appear in an
item label (the giveaway rule, textin's answer-in-question hazard in bin
form). Interaction is click-to-pick-up, "Place here" per bin, "Check bins"
to grade — keyboard-complete with no drag. Grading is partial-credit and
diagnostic: misplaced items return to the tray with a "N of M placed
correctly" count. Which source tables qualify and how the source cross-check
reads them are subject-specific; see `docs/subjects/biology.md`.

**Media figure (`mediafigure`)** — a vendored raster figure (photo,
micrograph, diagram) with its alt text, caption, and optional extended
description. It is the only sanctioned path for a file-backed image: `src`
must name an entry in a media manifest (`data/media/<book>.json`), which is
also the build audit's allowlist, so an image that was never vendored cannot
ship:

```
{{</* mediafigure src="biology/Figure_01_01_01-3978" alt="…" */>}}
Formerly called blue-green algae, these (a) cyanobacteria … (credit a: modification of work by NASA; credit b: …)
{{</* /mediafigure */>}}
```

`src` is `<book>/<stem>`, the manifest key; `alt` is required (≤ 600
characters) and the inner content is the caption, credit line included. The
math books' prohibition on every other file-backed image form (`![]()`,
`<img>`, `{{< figure >}}`, CSS images) is unchanged; the vendoring pipeline,
the image-accessibility policy, and every other detail of this component are
subject-specific — for biology, see `docs/subjects/biology.md`.

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

Floors are per book. The defaults above — at least two interactive
exercises per objective group, at least five per section — hold everywhere,
and a book may publish a HIGHER floor in the lint's per-book table once its
corpus already meets it (the retrofit lands first, then the rule, never a
grandfathered warning). Biology's floor is three exercises per
objective group and eight per section, landed with the practice retrofit;
see `docs/subjects/biology.md`.

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
- **Auto-graded coverage.** Every objective group also needs at least one
  auto-graded item (`fillin`, `multiplechoice`, `graphplot`, or `textin`) —
  the lint now enforces this. A group holding only `selfcheck`s does not
  cover its objective, since nothing in it is graded.
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

The grading engine's own notational limits, and the closed-class record of
fill-ins that were passable by retyping their own prompt, are documented per
subject; for math, see `docs/subjects/math.md`.

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
   existing exercises, `node tools/verify/answer-ledger.mjs prune content` drops the
   records stranded by their old text.
4. `npm run verify-section -- content/<subject>/<book>/<ch>/<sec>.md`
   — lints, renders every math run, and confirms that each fill-in answer is
   parseable by the real grader. Fix every ✗. Warnings on a page you authored
   or revised are defects, not backlog: clear them, or say in the handoff
   which pre-existing ones you left and why (§5).
5. Run `npm test`. It includes whole-repository structure validation,
   per-page real-grader verification, the corpus-wide answer cross-checks
   (`npm run verify:answers` — every mechanically checkable answer is
   re-derived numerically from its own question; `npm run verify:source-keys`
   — every prose-book key is compared to the pinned source's own), the
   answer-ledger gate (which, for a prose shelf, also requires the
   orchestrator's own solve of every graded item — see the subject
   playbook),
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
   `node tools/build/screenshot-page.mjs <route>` captures light/dark full-page
   shots plus a high-zoom crop of every figure and fails on duplicate KaTeX
   or unlabelled SVGs — use the crops for the figure-vs-PDF comparison, and
   inspect curve tips and corners at zoom, where spline and stroke defects
   hide.
   `node tools/build/screenshot-components.mjs <route>` crops every component
   on the page in both themes, each driven into its reviewable state (a wrong
   answer graded, a model answer revealed, an extended description opened) —
   read those PNGs for every new exercise and figure; a full-page capture of a
   long section is unreadable and never shows a component's graded state.
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

The Practice retrofit that used to live here is finished. All 379 mapped
sections carry the block (the documentation test pins that count to the live
map, so authoring a new mapped section means bumping it here). The final
block landed on August 9, 2026; the lint rule was promoted from a warning to
an error the same day, and the published backlog count was deleted along with
the `--check-docs` flag and the tooling that maintained it. Precalculus 2e's
final chapter landed on August 29, 2026 with its blocks, so no scaffolded
chapter remains; a future book's sections will each need theirs as they land —
as an error on the page being written, not as a worklist.

Everything else that used to live here has been fixed rather than documented:
numerically coded categorical answers are `multiplechoice`, four-digit numbers
are grouped, and figure curves come from analytic primitives. Two rules that
were over-firing were narrowed at the same time — an incidental value collision
is not a defect (the mode of a data set *is* one of the printed numbers), and
`\phantom{0000}` long-division spacing is not a number. The trivially
satisfiable fill-ins are closed class by class — the record is in
`docs/subjects/math.md` §6.

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
- [ ] Every touched answer independently solved and checked against the source key.
- [ ] Every new or edited exercise's independently derived verdict recorded in
      the answer ledger (`npm run verify:ledger` green).
- [ ] Confirmed upstream defects logged in `docs/openstax-errata.md`; dismissed
      suspicions recorded in its "Reviewed and *not* errata" list.
- [ ] `verify-section` clean (✗ = 0).
- [ ] `npm test` green.
- [ ] Production build/audit green for chapter or bulk work.
- [ ] Browser check confirms math appears once, spacing is correct, components
      work, and figures match the source.
- [ ] Handoff lists source evidence, visual pages, and all uncommitted files.
