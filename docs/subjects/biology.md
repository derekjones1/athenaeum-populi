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
and exercise-set mappings, the Knowledge Check record, and the build
budgets. The baseline's unit markers (*unit 1*, *unit 2*, *unit 7*) name
the Biology chapters that settled each rule.

## Source and authority

- **Pinned source:** `openstax/osbooks-biology-bundle` at the commit in
  `data/openstax/source-lock.json` (bundle `biology-bundle`, book `biology`,
  collection `biology-2e`, `col24361`). `npm run source:fetch -- --bundle
  biology-bundle` materializes it under `sources/openstax/`, scoped to the
  259 modules the Biology 2e collection references (the bundle also ships
  *Concepts of Biology* and *Biology for AP® Courses*, which this project
  does not use).
- **Visual authority:** `sources/Biology-2e_-_WEB.pdf` (built 2026-06-09,
  1,475 pages). Render a page with
  `pdftoppm -f N -l N -r 110 -png sources/Biology-2e_-_WEB.pdf out` and read
  the PNG; printed page numbers run 19 behind PDF page numbers in chapter 1
  (printed 9 = PDF 28).
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-biology-bundle/modules/<id>/index.cnxml` (not the
  authority; see the baseline).
- **Structure:** the collection nests unit → chapter → module (8 units, 47
  chapters, 208 numbered sections). Chapters are numbered 1–47 straight
  through. The preface (`m66425`) and the three appendices are not mapped
  and are not authored. Each chapter's first module is its introduction
  and becomes the chapter `_index.md` body.
- **License:** **CC BY-NC-SA 4.0** per the pinned source, although
  openstax.org's catalog lists CC BY 4.0 (baseline "Source and authority").

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
Each unit is a `### Unit N: <title>` heading on the cover (`### Unit 1: The
Chemistry of Life`, then *The Study of Life*, *The Chemical Foundation of
Life*, *Biological Macromolecules*), in source order with the source's
title, and its chapters are the bullets beneath it, in source order, with
the source's chapter titles. Chapters are never regrouped, merged, split,
renamed, or renumbered, and sections keep their upstream `C.S` numbers.
`node tools/source/openstax-source.mjs verify-map` checks the chapter and
section numbering against the pinned collection.

The unit is a real level of the site's hierarchy, not only a cover heading.
`build-map` reads the collection's unit → chapter nesting and records it in
`data/openstax/source-map.json` as the book's `units` list (index, title,
chapter numbers); `verify-map` checks that every chapter sits in exactly one
unit, in order, titled. `layouts/_partials/sidebar.html` reads that list and
nests each authored chapter under a "Unit N: <title>" label, so the sidebar
reads unit → chapter → section for Biology while the math books stay flat.
URLs do not carry the unit (`/life-health-sciences/biology/02-…/01-…/`):
the directory layout, the lints, the validator, and the provenance map all
key on book → chapter → section, and a unit directory would change
published routes for no gain. The book is `complete` in the lock. The
cover's `seo_title:` override reads "Biology – Free Interactive Biology
Textbook" because the generic shelf form would say "…Life & Health
Sciences Textbook".

## Feature boxes

The `<note class>` → callout mapping for this book (the callout form, the
Link to Learning rule, and the figure-plus-question rule are in the
baseline's "The section page, in order"):

| CNXML `<note class="…">` | Callout | Notes |
|---|---|---|
| `link-to-learning` | `{{</* callout type="info" */>}}` **Link to Learning** | Keep the URL; descriptive link text (baseline). |
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

**The practice floor is 3 exercises per objective group and 8 per section**,
published in `BOOK_RULES`, with `distinctItems` on. Every keyed Review
Question, Visual Connection, and Critical Thinking solution goes through
the baseline's three readings. The baseline's unkeyed-question rule has
nothing to convert here, because every exercise carries a `<solution>`;
the comparison-table `sortbins` rule applies in full.

## Knowledge checks

**All eight unit Knowledge Checks are authored: Units 1–3 landed September
4, 2026 and Units 4–8 September 5, 2026** — 624 items over the book's 208
sections, at the quota in `BOOK_RULES` (`tools/lint/lints.mjs`).

Cumulative assessments for this book are one page per unit, written to
`docs/knowledge-check-playbook-life-sciences.md`: fixed three items per
section, no stem duplicating a section Practice item (lint-enforced; the
playbook states the rule), no hints, subsection provenance in the ledgers.
Read that playbook, not the math edition, before building one.

The completion audit record (September 5, 2026) and the figure-alt and
`longdesc` pass records (September 21–23, 2026) are in
`docs/history/biology.md`. A figure edited after these passes gets the
inventory reading (life-sciences "Completion audit") from its author and
checker.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] the cover lists the chapter under its `### Unit N: <title>` heading, in source order
- [ ] key-term recall items built from the module `<glossary>`; every Visual Connection is its `mediafigure` then its item

## Build budgets

The build-size caps live in `tools/build/audit-build.mjs`; if one trips,
re-measure and raise it deliberately with the new numbers, never by
rounding up in advance. The numbers each cap was set against are in
`docs/history/biology.md`.
