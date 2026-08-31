# Biology 2e — subject playbook

The subject-specific half of the authoring rules for OpenStax **Biology 2e**.
`docs/authoring-playbook.md` is the shared core (source-first workflow, file
layout, the component contract, the `## Practice` block, the verification
loop, the working rules) and governs every book; this document adds what an
image-dependent, vocabulary-heavy science book needs that a math book did not:
a media pipeline, an image-accessibility policy, text-answer exercises, and
the CNXML-to-page mapping for Biology's feature boxes and end matter. Read
both before authoring a biology section.

## Source and authority

- **Pinned source:** `openstax/osbooks-biology-bundle` at the commit in
  `data/openstax/source-lock.json` (bundle `biology-bundle`, book `biology`,
  collection `biology-2e`, `col24361`). `npm run source:fetch -- --bundle
  biology-bundle` materializes it under `sources/openstax/`; the checkout is
  scoped to the 259 modules the Biology 2e collection references (the bundle
  also ships *Concepts of Biology* and *Biology for AP® Courses*, which this
  project does not use).
- **Visual authority:** `sources/Biology-2e_-_WEB.pdf` (built 2026-06-09,
  1,475 pages). Render a page with
  `pdftoppm -f N -l N -r 110 -png sources/Biology-2e_-_WEB.pdf out` and read
  the PNG; printed page numbers run 19 behind PDF page numbers in chapter 1
  (printed 9 = PDF 28).
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-biology-bundle/modules/<id>/index.cnxml` prints
  the module as Markdown-ish text with every figure's alt and caption and
  every note's class. It is a reading aid, not the authority — check the raw
  CNXML for anything that looks odd.
- **Structure:** the collection nests unit → chapter → module (8 units, 47
  chapters, 208 numbered sections). Chapters are numbered 1–47 straight
  through; units appear on the site only as headings on the book cover. The
  preface (`m66425`) and the three appendices are not mapped and are not
  authored. Each chapter's first module is its introduction (one paragraph
  and a photo) and becomes the chapter `_index.md` body, exactly as in math.
- **License:** the pinned repository's `LICENSE`, the collection metadata,
  and the local PDF all say **CC BY-NC-SA 4.0** — the same license as the
  math books, so the footer, the cover's `license:` key, and the JSON-LD are
  unchanged in form. openstax.org's catalog page lists this title as CC BY
  4.0; the pinned source is the authority, and the discrepancy is recorded
  here so nobody "fixes" the footer to the web listing.

## Where the files go

```
content/life-health-sciences/biology/_index.md                      book cover
content/life-health-sciences/biology/NN-<chapter-slug>/_index.md    chapter landing (intro module)
content/life-health-sciences/biology/NN-<chapter-slug>/NN-<section-slug>.md
static/media/biology/<stem>-<width>.webp                            vendored figures
data/media/biology.json                                             media manifest
```

`NN` is the upstream chapter number (01–47) and, inside a chapter, the
upstream section number; `source_chapter` / `source_section` carry the same
numbers as strings. The cover lists every chapter under `### Unit N: <unit
title>` headings inside `## Chapters` (the validator collects the bullets
across those sub-headings).

**The book's structure is the source's structure, for all eight units.**
Biology 2e groups its 47 chapters into units (Unit 1 *The Chemistry of
Life* holds chapters 1–3, Unit 2 *The Cell* holds chapters 4–10, and so on
through Unit 8 *Ecology*), and the site keeps exactly that grouping: each
unit is a `### Unit N: <title>` heading on the cover, in source order and
with the source's title, and its chapters are the bullets beneath it, in
source order, with the source's chapter titles. Chapters are never
regrouped, merged, split, renamed, or renumbered, sections keep their
upstream `C.S` numbers, and a chapter moves from the cover's "Planned
contents" list to its unit heading only when its landing exists. As unit 1
is authored the cover looks like `### Unit 1: The Chemistry of Life`
followed by *The Study of Life*, *The Chemical Foundation of Life*, and
*Biological Macromolecules*; every later unit follows the same pattern.
`node tools/source/openstax-source.mjs verify-map` checks the chapter and
section numbering against the pinned collection.

The unit is a real level of the site's hierarchy, not only a cover heading.
`build-map` reads the collection's unit → chapter nesting and records it in
`data/openstax/source-map.json` as the book's `units` list (index, title,
chapter numbers); `verify-map` checks that every chapter sits in exactly one
unit, in order, titled. `layouts/_partials/sidebar.html` reads that list and
nests each authored chapter under a "Unit N: <title>" label, so the sidebar
reads unit → chapter → section for Biology while the math books, whose
collections have no units, stay flat. URLs do not carry the unit
(`/life-health-sciences/biology/02-…/01-…/`): the directory layout, the
lints, the validator, and the provenance map all key on book → chapter →
section, and nesting a unit directory would change published routes for no
gain. A unit with no authored chapter yet does not appear in the sidebar; it
waits on the cover's "Planned contents" list. A chapter landing is created when its first
section lands, never earlier — the book stays `authoringStatus: scaffolded`
in the lock until unit 1 is complete, `in-progress` after that, and
`complete` only when all 208 sections exist. The cover's `seo_title:`
override reads "Biology – Free Interactive Biology Textbook" because the
generic shelf form would say "…Life & Health Sciences Textbook".

## The section page, in order

1. **Objectives callout.** The house lead-in `**By the end of this section,
   you will be able to:**` followed by one Markdown list item per objective,
   in source order and wording. The source's lead-in ("…be able to do the
   following:") is scaffolding, not content; the objective *list* is what
   fidelity applies to. `## Practice` groups repeat these verbatim.
2. **Body.** One `##` per CNXML `<section>` title, `###` for nested
   sections, prose transcribed faithfully. Bold every `<term>` at its
   defining occurrence (`**hypothesis**`), as the source does. Species names
   and genes in italics as printed.
3. **Feature boxes** become callouts whose first line is the bold feature
   name, then the source text:

   | CNXML `<note class="…">` | Callout | Notes |
   |---|---|---|
   | `link-to-learning` | `{{</* callout type="info" */>}}` **Link to Learning** | Keep the external URL — it is source content. Describe the destination in the link text ("an interactive animation of DNA replication"), never "click here". |
   | `career` | **Career Connection** | |
   | `evolution` | **Evolution Connection** | |
   | `everyday` | **Everyday Connection** | |
   | `scientific` / `scientific-method` | **Scientific Method Connection** | |
   | `interactive` | **Link to Learning** | Same treatment; the source uses the class for embedded media it links out to. |
   | `visual-connection` | *(not a callout)* | The figure it wraps, then its question — see Exercises. |

4. **Figures** — `mediafigure`, see the media section below. Refer to a
   figure by describing it ("the flow chart above"), never by its print
   number; Hugo does not number figures.
5. **Tables** as Markdown tables. A CNXML `<table>` with a `summary`
   attribute is a real table; transcribe the cells. Matching exercises that
   the source prints as a two-column table (1.1 has one) become a Markdown
   table in the body and a `multiplechoice` per row in Practice only if the
   source keys the pairing.
6. **`## Summary`** — the module's `<section class="summary">`, verbatim.
7. **`## Key terms`** — one bulleted item per `<glossary>` definition, in
   source order: `- **term** — meaning.` This is the one end-matter block
   the lint requires as a heading, and the source of the section's `textin`
   items.
8. **`## Practice`** — see Exercises.
9. **Attribution footer**, one `<small>` paragraph:
   *This section is adapted from [Biology 2e, Section C.S: Title]
   (https://openstax.org/books/biology-2e/pages/C-S-slug) by Mary Ann Clark,
   Jung Choi, Matthew Douglas, and OpenStax, © OpenStax, licensed under
   [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
   Access the original for free at [openstax.org]
   (https://openstax.org/details/books/biology-2e). Changes: …* — the
   `Changes:` clause names every adaptation: figures re-encoded as WebP with
   the source alt text edited where noted, feature boxes rendered as
   callouts, the end-of-section exercises adapted into the interactive
   Practice block, key-term recall items added from the glossary, any
   reordered multiple-choice options, and anything omitted.

## Notation

Biology prose stays prose. Chemical formulas and ions use Unicode sub- and
superscripts in text (`CO₂`, `H₂O`, `Na⁺`, `Ca²⁺`) — searchable, readable by
screen readers, and free of the KaTeX head payload; write `$…$` math only
where the source itself prints an equation (rates, Hardy–Weinberg, pH), and
then `docs/subjects/math.md`'s notation rules apply to that span. Units and
numbers:
`5 µm`, `37 °C`, `1,000` with a plain comma in prose. Never put math in a
`textin` question or answer — the lint rejects it.

Exercise-string parameters (`question`, `hint`, `answerDisplay`, and a
multiple choice's option lines) render through the `mathtext` partial, which
typesets `$…$` with KaTeX and renders the prose runs as inline Markdown with
raw HTML allowed — the same pipeline as body prose. So `*Drosophila*`
italicizes, `**not**` bolds, and an allele superscript `I<sup>A</sup>` or a
subscript `E<sub>A</sub>` renders properly inside a question or an option
(before August 30, 2026 these printed as literal tag text — the genetics
chapters exposed it). Aria strings derived from these params are plainified,
so markup never reaches a screen reader as tag soup.

Three cases the chemistry chapters settled (unit 1):

- **Ion charges are Unicode and trailing**: `Cl⁻`, `OH⁻`, `HCO₃⁻`, `COO⁻`,
  `SO₄²⁻`, `Ca²⁺`. The lint's superscript-minus rule allows a minus that
  follows a letter, subscript digit, superscript digit, or closing paren and
  is not followed by a superscript digit.
- **Numeric exponents are math**: `$1 \times 10^{-7}$`, `$6.02 \times
  10^{23}$`, `$9.11 \times 10^{-28}$`. A Unicode `10⁻⁷` is rejected (it is an
  exponent, not a charge), and a page that sets one exponent in `$…$` sets
  the neighbouring positive ones the same way so the two do not mix in a
  sentence.
- **Display chemical equations are text, not KaTeX.** The source's
  `<equation>` blocks in 2.1 and 2.2 are reactions, not mathematics; each
  becomes its own short paragraph in Unicode with arrows — `2H₂O₂ → 2H₂O +
  O₂`, `HCO₃⁻ + H⁺ ⇌ H₂CO₃` — and the footer says "chemical equations set as
  Unicode text". KaTeX loads only for the numeric-exponent spans above.
- **Greek nomenclature prefixes are prose.** `α-helix`, `β-pleated sheet`,
  `ω-3 fatty acid`, `α-carbon` keep the printed glyph everywhere, exercise
  strings included: the exercise lint's unicode-math rule exempts a Greek
  letter followed by a hyphen (a bare `θ` or `α = 30°` is still math). Give
  the glossary `textin` for such a term an `accept` list with the spelled-out
  forms (`alpha helix`, `alpha-helix`).

Cases the cell chapters settled (unit 2):

- **A sub-figure that is its own image is its own `mediafigure`.** When a
  source `<figure>` holds `<subfigure>` children with separate image files
  (4.3's animal and plant cell, stems `…01a_corrected` and `…01b`), render
  them as two consecutive figures — the first with the source caption, the
  second with a one-line caption naming it panel (b) — never as one figure
  whose alt claims to show both (the pilot page shipped that way and panel
  (b) was simply missing). A single image with lettered panels stays one
  figure, its alt naming what each panel shows.
- **Source alts can be screen-reader spellings, not descriptions.** Many
  cell-chapter alts are letter-spaced TTS text ("A T P", "upper case C lower
  case o upper case A", "N A D P superscript plus sign baseline"). Write a
  plain alt from the image, move any walk-through into `longdesc`, and say
  so in the footer; this is a local rewrite of an accessibility field, not
  an erratum.
- **A source key that the module's own text contradicts is corrected on the
  page and logged.** Unit 2 found four (errata 115, 116, 120, 121: a
  photosystem, a double-keyed carbon-fixation item, "half" for "twice", a
  plant cell plate in a prokaryote). The page keys the answer the section
  supports, the footer names the change, the errata entry quotes the
  passage, and the ledger verdict is `ok` with the erratum number — never a
  shipped `defect`, which fails `verify:ledger`.
- **Every keyed answer gets three readings, as in math.** The author keys
  it from the pinned CNXML; the checker re-derives it against the raw CNXML
  and the section text; and the orchestrator ANSWERS it. After the checker
  reports, run `npm run solve:emit -- <chapter dir> --out <dir>`, answer
  every packet item in writing (question and options only — the key,
  accept list, and hint are stripped), naming any other option that is also
  defensible, then `npm run solve:compare -- answers.json content --out
  <dir>`. Agreement is recorded; each disagreement or flag is settled
  against the module's own sentence and recorded with an `adjudicated`
  note — the source is the authority, and this pass exists to catch a key
  that is obviously wrong (a misprint, a double-keyed item, a wrong ratio),
  not to overrule the module with general knowledge. A key the module's
  text contradicts is corrected (erratum + `DISCLOSED_DEVIATIONS` line in
  `verify-source-keys.mjs`); a key the module supports stands even when the
  chemistry is looser than a specialist would write (erratum 123, the
  two-photon NADPH item — logged, keyed as the module teaches, its hint
  rewritten to follow the module rather than invent a rationale).
  `ledger:merge` the compare output; `verify:ledger --require-solved`
  fails until every multiplechoice and textin on the shelf carries the
  solve. `npm run verify:source-keys` (in `npm test`) separately proves the
  page keys what the source keys and lists every deliberate departure by
  erratum number. The units 1–2 run (August 30, 2026): 320 items, 311
  agreed outright, 3 disagreed and 6 were flagged — all nine settled for
  the key by the module's text, three of them exposing source defects
  (errata 123–125).
- **An edited option is a deviation too** — it changes what is gradable
  (erratum 116's reworded distractor, erratum 122's typo-fixed one).
- **A Critical Thinking question keeps its preamble.** An analogy or
  scenario that opens the source question ("you would use a spoon rather
  than a fork…") is part of the question; do not trim it to the final
  sentence.
- **A feature box keeps its title and its citations.** `**Career
  Connection.** *Cancer Biologist.*` — the `<note>`'s `<title>` follows the
  bold name in italics; a reference list the box ends with is kept as a
  parenthetical after the sentence it supports rather than dropped.
- **`accept` lists the plural of every multi-word answer** (`glucose
  transporters`, `integral membrane proteins`, `septa`) and the compound
  form the section itself uses (`integral membrane protein` for a textin
  keyed `integral`); every checker in unit 2 found one missing.
- **`P<sub>i</sub>`** is the one sanctioned inline HTML subscript (no
  Unicode subscript letter exists); everything with a glyph — `H⁺`, `CO₂`,
  `FADH₂`, `Ca²⁺`, `PO₄³⁻`, `G₁`, `IP₃` — uses it. ΔG/ΔH/ΔS in prose are the
  Unicode Δ; the one genuine equation, `ΔG = ΔH − TΔS`, is `$…$`. The source
  auditor folds a Unicode sub/superscript digit into its own token so that
  `CO₂` matches a `<sub>2</sub>` heading.
- **An objective group left thin by the source may get an author-written item**
— an objective no source item tests, or a group short of the book's floor
after its source items and summary items are placed:
  a multiple choice built strictly from the page's own table or sentence,
  or a self-check whose model answer paraphrases one paragraph, with no new
  claim — disclosed in the ledger and the footer. Prefer a glossary
  `textin` when a term fits the objective.

## Media: vendored figures

Biology 2e is image-dependent (about 1,500 raster figures). They ship as
vendored WebP under `static/media/biology/`, referenced by the `mediafigure`
shortcode and recorded in `data/media/biology.json`. That manifest is the
contract: the shortcode fails the build on a stem it does not hold, the lint
requires every `src` to be in it, and the build audit allows exactly the
files it lists. Everything the math books forbid (`![]()`, `<img>`,
`{{< figure >}}`, CSS images) stays forbidden.

**Vendoring a chapter** (once per chapter, before authoring it):

```sh
npm run source:media -- --book biology --chapter 1 --dry-run   # what would be vendored
npm run source:media -- --book biology --chapter 1             # vendor it
```

The tool reads each module's `<image src>` with its `<media alt>` and
`<caption>`, fetches the blob from the pinned commit (`git show
<commit>:media/<file>` — the sparse checkout deliberately excludes
`media/`), resizes to ≤800 px and ≤1600 px wide without ever upscaling,
encodes WebP (quality 82), and writes `<stem>-<width>.webp` plus the
manifest entry (dimensions, variants, source alt, source caption, source
SHA-256). It needs `sips` and `cwebp` (Homebrew `webp`) locally; CI never
runs it because the outputs are committed. Re-running is a no-op for
unchanged sources. Commit the WebP files and the manifest with the pages
that use them.

**Using a figure:**

```
{{</* mediafigure src="biology/Figure_01_01_01-3978" alt="…" */>}}
Formerly called blue-green algae, these (a) cyanobacteria … (credit a: modification of work by NASA; credit b: …)
{{</* /mediafigure */>}}
```

- `src` is `biology/<stem>` where the stem is the source file name without
  its extension (the manifest key). Keep the source stem; it is how a file
  traces back to its module.
- The caption is the source caption, credit line included and verbatim
  (the credit is a license obligation, not decoration).
- The first figure on a page may take `eager="true"`; every other figure is
  lazy-loaded.
- Small diagrams stay small: the `<img>` carries the largest vendored width,
  so a 430 px source renders at 430 px, and photos render at the column
  width. On the dark theme a **diagram** sits on a white plate (it was drawn
  for white paper) while a **photo** is left alone; the manifest guesses the
  kind from the source file type (JPEG = photo, otherwise diagram) and
  `kind="photo"` / `kind="diagram"` on the shortcode overrides it. **Set it
  explicitly on every figure after looking at the image** — the guess was
  wrong for 2 of chapter 1's 20 figures (a PNG photograph, a JPEG flow
  chart), and only a reader can tell. Nothing is ever
  inverted: a micrograph inverted would be a different micrograph.

**Image-accessibility policy** (every figure, no exceptions):

- `alt` is required. Start from the manifest's source alt (the CNXML `<media
  alt>`); keep it when it says what the figure shows and teaches. Rewrite it
  when it is a bare "Photo depicts …" that omits the point the caption or
  prose makes, when it names the print figure letter without saying what (a)
  and (b) are, or when it describes the picture but not the relationship
  the figure exists to show. The alt must not repeat the caption (lint) —
  the caption is already read after it.
- `alt` is at most 600 characters (lint). Longer descriptions — flow charts,
  labeled anatomy, phylogenies, graphs with data — go in `longdesc`, which
  renders as a collapsed "Extended description" after the caption. A
  `longdesc` walks the figure in reading order: nodes and arrows of a flow
  chart, labels of a diagram top to bottom, the axes and the trend of a
  graph.
- No content is carried by an image alone. A label list that matters
  (organelles in a cell diagram, the steps in a flow chart) is also in the
  prose, the caption, or the `longdesc`.
- Read every vendored image at review: open the WebP, compare it with the
  PDF page, and confirm the alt and any `longdesc` against what is actually
  drawn, not against the source alt text.

## Exercises

Biology 2e ends every section with keyed exercise sets, and every exercise
carries a `<solution>` in the CNXML (the printed Answer Key holds the same
answers). They map onto components as follows:

| Source set | CNXML | Component |
|---|---|---|
| Review Questions | `section.multiple-choice` | `multiplechoice`, text mode, source options in source order |
| Visual Connection Questions | `section.visual-exercise` (the `note.visual-connection` in the body carries the same item) | the `mediafigure` first, then `multiplechoice` when the source keys a choice, `selfcheck` when it keys prose |
| Critical Thinking Questions | `section.critical-thinking` | `selfcheck`, the source solution as the model answer |
| Key terms | `<glossary>` | `textin` recall items (below) |
| Comparison tables | `<table>` (CALS; the caption is the spanning `<thead>` row) | `sortbins` when the data columns name categories — the columns become the bins, the rows become items (below) |

**Multiple choice.** Options are the source's, in the source's order, each
on its own line of the shortcode body; `answer` is the keyed option verbatim.
Write a strategy hint (regular sections only). Text-mode distractor rules:
options parallel in grammar and length band, no "all/none of the above"
added locally, no option that is also correct (a source distractor that is
also true is an erratum — log it and replace the option, disclosing the
change). The corpus-wide answer-position gate measures biology on its own
once it has 50 MCs; if it fails, reorder with a deterministic seeded shuffle
and say so in `Changes:` — never hand-pick positions.

**Self-check** (`selfcheck`). The question is the source's; the inner
content is the source solution, lightly reformatted into complete sentences
where the key is telegraphic, never extended with new claims. The learner
writes, reveals, and self-marks; nothing is graded, so a self-check never
substitutes for the one auto-graded item each Practice group needs. Biology
selfchecks carry a rubric: `===CHECKS===` then 2–6 checkpoints, each a
clause of the source solution as it appears in the model answer (decompose
the solution's own sentences — never add a claim it does not make), so the
learner self-marks against the source's actual points. The rubric
requirement for this book is a lint error, landed with the practice
retrofit.

**Text recall** (`textin`). Built from the section's own glossary: the
meaning becomes the prompt, the term the answer.

```
{{</* textin
  question="A suggested and testable explanation for an event is called a ________."
  answer="hypothesis"
  accept="hypotheses"
  hint="It is proposed before the experiment, and an experiment can disprove it."
*/>}}
```

- `textin` is **unpaired**, exactly like `fillin`: `{{</* textin … */>}}` with no
  closing tag and no self-closing slash. A closing `{{</* /textin */>}}` makes Hugo
  refuse the page ("does not evaluate .Inner, yet a closing tag was
  provided") and the lint now rejects it; the `/>}}` spelling is not parsed
  by the repository tools.
- One to four words; the lint rejects longer answers — a definition is not a
  recall item.
- `accept` lists the spellings a correct learner might type: plural,
  British spelling (`fertilisation`), a standard abbreviation (`DNA` for a
  keyed `deoxyribonucleic acid`, or the reverse). Grading already ignores
  case, diacritics, punctuation, hyphen-versus-space, and a leading
  article, so do not list those. There is no typo tolerance by design:
  `ribozyme` must not pass for `ribosome`.
- The answer must not appear in the question — the lint refuses the retype
  hazard — so a prompt for `cell theory` cannot say "the theory of cells".
  Rephrase the meaning or pick a different term.
- Never a textin whose answer is a number, a formula, or a sentence: numbers
  are `fillin` territory, sentences are `selfcheck`.

**Summary items.** The module's `<section class="summary">` is the largest
keyed corpus after the exercise sets, and it tests concepts where the
glossary tests vocabulary. Two forms, both built from a single summary
sentence with **no new claim**:

- a cloze `textin`: blank exactly one content phrase (≤4 words, the textin
  lint's cap) of the sentence; the surviving prompt must not contain the
  answer (the retype lint checks), and never blank a word the sentence
  defines in apposition — such a prompt answers itself;
- a select-the-term `multiplechoice`: the summary sentence as stem, 3–4
  distractors of the same category drawn from the same module's own terms;
  every option and every stem clause must appear in the module.

`verify-source-keys` reports a summary-sourced textin answer with the
`summary` provenance; a summary-built multiple choice counts as `unmatched`
(author-written) and rests on the ledger reading and the blind solve, so
the footer discloses it like any locally written item. When an objective
group runs thin, reach for a summary item before inventing anything else.

**Sort into bins** (`sortbins`). Built from a source comparison table whose
data columns name categories (prokaryote/eukaryote, plant/animal…): the
column headers become the bins, and each item combines a row label with its
cell value ("Origin of replication | Single | Multiple" → item "Single
origin of replication" binned under Prokaryotes). Keep the table itself in
the body as Markdown — the sortbins is its practice form, placed in the
Practice group of the objective the table serves. `verify-source-keys`
matches the bins to the table's data columns and fails any item that reads
strictly better under a different column than the one it is keyed to (a
deliberate deviation is `kind: "assignment"` in `DISCLOSED_DEVIATIONS`,
keyed by the table id); the orchestrator blind-solves the full label→bin
mapping like any other graded item. A table whose columns are quantities,
units, or steps rather than categories is not sortbins material — transcribe
it and move on. Syntax and the interleave/giveaway rules are in the core
playbook §3.

**The `## Practice` block** follows the core rule — one `### ` group per
objective in callout order, every item from the source's keyed sets, the
summary, or the glossary, every regular-section item hinted — at this book's
landed floor: **at least three exercises per group, at least eight per
section** (the core default elsewhere is two/five) — plus the biology rule that **each group holds
at least one auto-graded item** (`multiplechoice`, `textin`, or `sortbins`). Place a
Review Question under the objective it tests, its Critical Thinking item
under the objective it argues, and fill thin groups with glossary recall.
Record every item in the source ledger with its exercise or definition id.

## Verification

- `npm run verify-section -- <page>` runs the lints and self-grades every
  `textin` (answer and each accept member), checks every `selfcheck` has a
  model answer, and checks every `mediafigure` resolves to the manifest.
  `npm test` then runs the ledger gate, so every new exercise needs a
  reading verdict before the tree is green.
- **Reading pass verdicts for biology.** `ok` on a multiple choice means
  the keyed option is the one the section's own text supports and no
  distractor is also supportable; on a `selfcheck` it means the model
  answer is the source solution and answers the question as asked; on a
  `textin` it means the prompt names exactly one glossary term and the
  accept list covers its ordinary variants. Nothing is computed; the checker
  reads the exercise against the CNXML solution and the section prose.
- **Independent checker.** One per chapter, briefed as in the math
  checker brief: re-read every Practice item against the raw CNXML
  exercise and solution (not the page), every figure alt against the PDF
  page, and every glossary item against the source definition; report
  defects to the parent, which owns the errata file and the ledger merge.
- **Errata.** Confirmed source defects (a keyed answer the section
  contradicts, a distractor that is also true, a caption credit that names
  the wrong image) go in `docs/openstax-errata.md` without asking, with the
  module id, element id, and evidence.

## Done checklist (in addition to the core checklist)

- [ ] chapter media vendored, every alt read against the image, `longdesc` on every diagram whose meaning is not in its caption
- [ ] every feature box a callout with its bold name; every Link to Learning URL kept
- [ ] `## Summary` and `## Key terms` transcribed in full, in source order
- [ ] Practice: every group has an auto-graded item; every source exercise set represented; glossary recall items lint-clean
- [ ] footer: CC BY-NC-SA 4.0, deep link, full `Changes:` clause
- [ ] `npm run verify-section`, `npm test`, ledger verdicts merged, `node tools/source/openstax-source.mjs build-map` rerun and the map committed

## Budgets to watch as the book grows

- **HTML total.** `tools/build/audit-build.mjs` caps the built HTML at 220 MiB;
  the four math books plus chapter 1 measured 196.5 MB, and with units 1–2
  (44 sections, 10 landings) the HTML total is 198.3 MiB (`find public -name
  index.html -exec cat {} + | wc -c`); the audit's own "MiB" line counts
  every built file, WebP included. A biology section page is ~125–135 KB
  (no KaTeX), so the remaining 206 sections and 46 landings project to
  roughly 35 MB more — the cap will be reached around unit 6–7. Raise it
  deliberately in that file, with the new measurement in the commit message,
  when a unit's gate run reports it; never by rounding up in advance.
- **Sidebar share** (`maxSidebarShare 0.45`) is per page: the biology sidebar
  lists every chapter of the book, so re-check the audit line after each unit.
- **Browser suite time.** `tests/figures.spec.mjs` walks every route; its
  timeout scales with the route count, but watch its wall time in the
  browser-suite tail after each chapter.
- **Chapter close-out** also runs `npm run source:check -- --bundle
  biology-bundle` (report-only): units 1–2 audit clean — 44/44 sections,
  every objective and heading located, 0 unresolved review items — and a
  heading the audit cannot locate is the signal that a page renamed or
  dropped a source section.
