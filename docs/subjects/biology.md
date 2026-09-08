# Biology 2e — subject playbook

The book-specific rules for OpenStax **Biology 2e**, on top of
`docs/authoring-playbook.md` (the shared core) and
`docs/subjects/life-sciences.md` (the life-sciences baseline: notation, the
media pipeline and image-accessibility policy, the `textin` / `selfcheck` /
`sortbins` / summary-item rules, the answer-form rules for keyed and
unkeyed questions, the three-reading answer discipline, verification, the
completion-audit method, and the shared Done checklist). Read all three
before authoring a biology section. This file records only what is
Biology 2e's own: the pinned source, the unit structure, the feature-box
and exercise-set mappings, the Knowledge Check and completion-audit
records, and the build budgets. Most of the baseline was first written
here — the unit markers in that file (*unit 1*, *unit 2*, *unit 7*) name
the Biology chapters that settled each rule.

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
gain. While the book was being written, a unit with no authored chapter did not
appear in the sidebar; it waited on the cover's "Planned contents" list,
which came off the cover when the last chapter landed. A chapter landing is created when its first
section lands, never earlier — the book stayed `authoringStatus: scaffolded`
in the lock until unit 1 was complete, `in-progress` after that, and became
`complete` on September 3, 2026, when the 208th section landed. The cover's `seo_title:`
override reads "Biology – Free Interactive Biology Textbook" because the
generic shelf form would say "…Life & Health Sciences Textbook".

## Feature boxes

The `<note class>` → callout mapping for this book (the callout form, the
Link to Learning rule, and the figure-plus-question rule are in the
baseline's "The section page, in order"):

| CNXML `<note class="…">` | Callout | Notes |
|---|---|---|
| `link-to-learning` | `{{</* callout type="info" */>}}` **Link to Learning** | Keep the external URL — it is source content. Describe the destination in the link text ("an interactive animation of DNA replication"), never "click here". |
| `career` | **Career Connection** | |
| `evolution` | **Evolution Connection** | |
| `everyday` | **Everyday Connection** | |
| `scientific` / `scientific-method` | **Scientific Method Connection** | |
| `interactive` | **Link to Learning** | Same treatment; the source uses the class for embedded media it links out to. |
| `visual-connection` | *(not a callout)* | The figure it wraps, then its question — see Exercises. |

`## Key terms` is built from the module's `<glossary>`, one bulleted item
per definition in source order. The footer names the senior contributing
authors Mary Ann Clark, Jung Choi, and Matthew Douglas, deep-links to
`https://openstax.org/books/biology-2e/pages/C-S-slug`, and points at
`https://openstax.org/details/books/biology-2e`.

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

The corpus-wide answer-position gate measures biology on its own; if it
fails, reorder with a deterministic seeded shuffle and say so in
`Changes:` — never hand-pick positions. **The practice floor is 3 exercises per objective group and 8 per section**, landed with the practice retrofit and published in
`BOOK_RULES`, with `distinctItems` on. Every keyed Review Question, Visual Connection, and Critical
Thinking solution goes through the baseline's three readings; the
unkeyed-question rule of the baseline has nothing to convert here, because
every exercise carries a `<solution>`, but the comparison-table `sortbins`
rule applies in full and the book was retrofitted to it.

## Knowledge checks

**All eight unit Knowledge Checks are authored: Units 1–3 (Chapters
1–17; 30, 102, and 90 items) landed September 4, 2026, and Units 4–8
(Chapters 18–20, 27 items; 21–29, 132 items; 30–32, 36 items; 33–43, 150
items; 44–47, 57 items) landed September 5, 2026** — 624 items over the
book's 208 sections, at the quota in `BOOK_RULES` (`tools/lint/lints.mjs`)
under the life-sciences playbook.
The run shape: one Sonnet author per chapter writing a scratch block at a
mirrored `content/…` path plus a machine-readable provenance file, one
Sonnet checker per chapter, the parent assembling, fixing, blind-solving,
and running the gates. What the runs taught is in the playbook's "Content
rules" (stems that stand alone, distractors as the module's answer to a
different question, the Greek-letter lint, clozes that blank a term, stems
that do not repeat the key's own word) and in the checker brief
(sibling-hint leaks, near-duplicates by eye, reverse recall). A
September 5, 2026 reverse-recall sweep of all eight checks (one checker per
unit reading each item beside its section page's Practice block) then
replaced 55 items whose fact a section item, hint, distractor, or rubric
already gave — the life-sciences playbook now names that sweep as a wave of
its own. The units 2–3
run's checkers found real defects in 6 of 14 chapters — a giveaway stem, a
distractor the module never prints, three glossary recalls the section page
already made, two grader gaps — and the units 4–6 run's found 11 across 9
of 15 chapters, with the parent's own read replacing eleven more items
(free-phrase summary clozes, giveaway stems, format tells), so neither the
checker wave nor the parent read is optional.

Cumulative assessments for this book are one page per unit, written to
`docs/knowledge-check-playbook-life-sciences.md`: fixed three items per
section (lint-enforced), author-written from the module text, no stem
duplicating a section Practice item (lint-enforced, exact after
normalization — `tools/lib/practice-index.mjs` indexes every section page
and every sibling Knowledge Check; the playbook states the rule), no hints,
subsection provenance in the ledgers. Read that playbook, not the math edition, before building one.

The completion audit record (September 5, 2026) moved to
`docs/history/biology.md`.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] the cover lists the chapter under its `### Unit N: <title>` heading, in source order
- [ ] key-term recall items built from the module `<glossary>`; every Visual Connection is its `mediafigure` then its item

## Build budgets

The build-size caps live in `tools/build/audit-build.mjs`; if one trips,
re-measure and raise it deliberately with the new numbers, never by
rounding up in advance. The completion-measurement record — the actual
numbers each cap was set against — moved to `docs/history/biology.md`.
