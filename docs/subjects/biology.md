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
across those sub-headings). A chapter landing is created when its first
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
substitutes for the one auto-graded item each Practice group needs.

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

**The `## Practice` block** follows the core rule — one `### ` group per
objective in callout order, at least two exercises per group, at least five
per section, every item from the source's keyed sets or the glossary, every
regular-section item hinted — plus the biology rule that **each group holds
at least one auto-graded item** (`multiplechoice` or `textin`). Place a
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
  the four math books plus chapter 1 measure 196.5 MB (`find public -name
  index.html -exec cat {} + | wc -c`). A biology section page is ~125–135 KB
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
  biology-bundle` (report-only): chapter 1 audits clean — 8/8 objectives and
  8/8 headings located, 0 unresolved review items — and a heading the audit
  cannot locate is the signal that a page renamed or dropped a source section.
