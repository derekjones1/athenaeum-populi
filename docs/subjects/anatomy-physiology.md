# Anatomy and Physiology 2e — subject playbook

The book-specific half of the authoring rules for OpenStax **Anatomy and
Physiology 2e**. `docs/authoring-playbook.md` is the shared core;
`docs/subjects/life-sciences.md` is the life-sciences baseline — media
pipeline, image-accessibility policy, notation, `textin`/`selfcheck`/
`sortbins` rules, answer-form rules, reading-pass verdicts, the
three-reading answer discipline — and applies unchanged unless a rule below
says otherwise. `docs/subjects/biology.md` and
`docs/subjects/microbiology.md` are not required reading; this book is
Biology-shaped and the Biology mappings that apply are repeated below. Read
all three before authoring a section (chapter-run authors: the sections
`docs/briefs/anatomy-physiology/author.md` names).

Written from the **September 22, 2026 scan** of the pinned source; chapter
1 was authored September 22, 2026 as the pilot, and chapter 2 the same day.
A rule tagged *(pilot)* or *(chapter N)* came from authoring that chapter;
the per-chapter record is `docs/history/anatomy-physiology.md`. A
correction that is not folded back into a rule will be made again.

## Source and authority

- **Pinned source:** `openstax/osbooks-anatomy-physiology` at the commit in
  `data/openstax/source-lock.json` (bundle `anatomy-physiology`, book
  `anatomy-physiology`, collection `anatomy-and-physiology-2e`, `col11496`).
  A single-book upstream — one entry in `META-INF/books.xml`, no `-bundle`
  suffix — so the whole `modules/` tree is checked out (`moduleScope:
  "bundle"`, 198 modules); `npm run source:fetch -- --bundle
  anatomy-physiology` materializes it. The pin is `5ae32b3f` ("errata
  29985", September 8, 2026).
- **The pin is newer than the PDF, and the difference is substantive.**
  `sources/anatomy-and-physiology-2e_-_WEB.pdf` (1,347 pages) was generated
  September 2, 2026; upstream errata of September 8, 2026 then changed 16
  modules. The lock's `authoredBaselineCommit` is the last commit before
  the PDF, `716383a4` (June 12, 2026), confidence
  `inferred-from-local-pdf-date`. The PDF still prints these wrong; the
  table below is the whole set — no agent diffs the checkout. **Author from
  the CNXML.**

**The September 8, 2026 set: 16 modules (12 text or file-name changes, 4
images replaced in place).** Section numbers are the collection's; a CNXML
figure id (`fig-ch23_01_08`) carries an older edition's chapter number, not
the section.

| Section | Module | Change (the PDF prints the old form) |
|---|---|---|
| 4.2 | m46048 | "mucous-secreting" → "mucus-secreting" (body and caption) |
| 6.4 | m46301 | periosteum sentence rewritten ("mesenchymal cells form the periosteum and differentiate into osteoblasts…"); the epiphyseal-plate Review stem gains "moving toward the epiphysis" |
| 7.2 | m46355 | skull-base image replaced (new file `707_Superior-Inferior_View_of_Skull_Base.jpg`) |
| 11.5 | m46495 | table typo "rotests" → "rotates" |
| 14.3 | m46574 | "Walter" → "Wilder" Penfield |
| 22.1 | m46548 | trachea figure now two-panel (`2308_The_Trachea-ab.jpg`) with a new alt |
| 23.3 | m46511 | the sentence on the tongue's glands secreting lingual lipase cut |
| 23.5 | m46512 | glossary "mucous-" → "mucus-secreting" |
| 24.2 | m46451 | fermentation: *pyruvate*, not lactic acid, is the final electron acceptor |
| 26.3 | m46414 | aldosterone feedback-loop image replaced |
| 27.2 | m46392 | "diploid" → "haploid" secondary oocyte |
| 28.7 | m46311 | allele glossary: a locus on a specific *chromosome*, not gene |
| 11.2 | m46498 | image replaced in place (`1105_Anterior_and_Posterior_Views_of_Muscles.jpg`); CNXML unchanged |
| 21.3 | m46560 | image replaced in place (`2217_Differentiation_of_T_Cells_Within_the_Thymus.jpg`); CNXML unchanged |
| 25.3 | m46429 | image replaced in place (`2611_Blood_Flow_in_the_Nephron.jpg`); CNXML unchanged |
| 28.1 | m46308 | image replaced in place (`2902_IVF-02.jpg`); CNXML unchanged |

When the PDF and the CNXML disagree in a module in this table, the table
row is the explanation — upstream's fix, not a defect, not logged. For an
image row the PDF shows the old picture and the vendored WebP is the
reference. A disagreement the table does not explain is an erratum
candidate.

- **Visual authority:** the PDF, for what a figure shows and how a table
  lays out (`pdftoppm -f N -l N -r 110 -png` as in the baseline). For the
  seven image rows above, read the pinned media file (vendor it, then look
  at the WebP) instead.
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-anatomy-physiology/modules/<id>/index.cnxml`,
  with the baseline's caveats (it folds figure cross-references to `()`;
  check the raw CNXML).
- **Structure:** **six units**, 28 chapters, 169 numbered sections, one
  introduction module per chapter, one preface (`m46844`), and **no
  appendices** (no book-wide glossary; the answer key is inline).
  Unit 1 *Levels of Organization* holds chapters 1–4, Unit 2 *Support and
  Movement* 5–11, Unit 3 *Regulation, Integration, and Control* 12–17,
  Unit 4 *Fluids and Transport* 18–21, Unit 5 *Energy, Maintenance, and
  Environmental Exchange* 22–26, and Unit 6 *Human Development and the
  Continuity of Life* 27–28. Chapters are uneven (chapter 14 has three
  sections, chapter 17 eleven) — size a wave by sections, never by
  chapters. Every section's objectives are in `<md:abstract>` (the Biology
  2e shape), and every intro module carries a `<note
  class="chapter-objectives">`.
- **License:** the pinned repository's `LICENSE` says **CC BY-NC-SA 4.0**;
  openstax.org's catalog says CC BY 4.0, and the pinned source is the
  authority. Senior contributing authors for the footer: J. Gordon Betts,
  Peter Desaix, Eddie Johnson, Jody E. Johnson, Oksana Korol, Dean Kruse,
  Brandon Poe, James A. Wise, Mark Womble, Kelly A. Young. The footer
  deep-links to
  `https://openstax.org/books/anatomy-and-physiology-2e/pages/C-S-slug`
  and points at
  `https://openstax.org/details/books/anatomy-and-physiology-2e`.

## Where the files go

```
content/life-health-sciences/anatomy-physiology/_index.md                      book cover
content/life-health-sciences/anatomy-physiology/NN-<chapter-slug>/_index.md    chapter landing (intro module)
content/life-health-sciences/anatomy-physiology/NN-<chapter-slug>/NN-<section-slug>.md
static/media/anatomy-physiology/<stem>-<width>.webp                            vendored figures
data/media/anatomy-physiology.json                                             media manifest
```

`NN` is the upstream chapter number (01–28) and, inside a chapter, the
upstream section number. **The book's structure is the source's structure,
for all six units**, as for Biology 2e: the cover lists each authored
chapter under a `### Unit N: <title>` heading inside `## Chapters`, in
source order with the source's titles; `build-map` records the grouping as
the book's `units` list in `data/openstax/source-map.json`; `verify-map`
checks it; the sidebar nests chapters under their unit; URLs do not carry
the unit. A chapter moves from the cover's "Planned contents" list to its
unit heading when its first section lands, never earlier. The lock's
`authoringStatus` is `in-progress` and becomes `complete` when the 169th
section lands. That flip is a close-out step of its own, pinned in: the
lock's `authoringStatus`, the cover's `authoring_status` frontmatter (`npm
run source:verify` requires it to equal the lock's word for word, and to be
absent once the lock says `complete`), the assertions in
`tools/source/openstax-source.test.mjs`, and the status prose in
`AGENTS.md`, `README.md`, and `docs/source/openstax-source-workflow.md`.
The chapter landing carries the intro module's paragraph and splash photo
plus the chapter-objectives note as a list.

## What is the same as Biology 2e

In every respect that shaped a Microbiology rule, this book is
Biology-shaped, so the baseline applies as written:

- **Every exercise carries a `<solution>`** — 1,226 of 1,226 (714 Review
  Questions keyed by letter, 370 Critical Thinking model answers, 142
  Interactive Link answers). `verify-source-keys` should report no
  `unkeyed` status, and `unmatched` only for a question an author writes
  from a feature box.
- **A per-module `<glossary>`** in 168 of the 169 sections; `## Key terms`
  is built from it, one bulleted item per definition in source order, and
  the `textin` recall items come from it. The one section without a
  glossary is 17.11 *Development and Aging of the Endocrine System*
  (`m46658`): no `## Key terms` block, no recall items, and the footer says
  so. Body `<term>` tags (all class-less) outnumber the definitions two to
  one, so a bolded term is not evidence of a key term — the glossary is.
- **Review Questions are four-option `multiplechoice`** (706 of 714). Six
  items in chapter 25 have two options, one has three, one has five: keep
  the source's option count.
- **Critical Thinking Questions → `selfcheck`** with the source solution as
  the model answer; **a `section.summary` per section**; comparison tables
  → `sortbins` under the baseline's both-orientations rule (expect
  merged-cell transcription work; 2.5's functional-groups table has
  structure *images* in its cells, which must be vendored or the table
  restructured).
- The practice floor is **3 exercises per objective group and 8 per section**,
  with `distinctItems` on, published in `BOOK_RULES` as the
  `life-health-sciences/anatomy-physiology` profile.
- **Figures** use `<figure>` + `<media alt>` + `<image>` with occasional
  `<subfigure>`s — the same `mediafigure` pipeline; `npm run
  source:media -- --book anatomy-physiology --chapter N` vendors a
  chapter's images. The checkout is blobless and excludes `media/`; the
  tool reads each blob from the pinned commit over the network.
- **Math** is minor: 59 `<m:math>` elements in 13 modules (2.3, 20.2, 22.5,
  26.3, 26.4, the renal sections), transcribed with the baseline's notation
  rules.

## What is different from Biology 2e

### 1. Interactive Link Questions — decided September 22, 2026

The Link to Learning equivalent is `<note class="anatomy interactive">`
(167) and `<note class="anatomy interactive um">` (20; the University of
Michigan histology Webscope). Most notes end in a question, and 82 sections
end with a `section.interactive-exercise` set of *Interactive Link
Questions* (142 keyed items), which usually repeat the note's question — but
a pair is checked, never assumed: in 1.3 the note asks two questions and
the exercise set a third *(pilot)*. When they differ, the callout carries
the note verbatim and then the exercise's question as one more plain
sentence, so nothing keyed is dropped. The answer usually depends on the
linked video or slide, not the module text, and the `openstax.org/l/…`
redirect can rot.

**The rule (decided September 22, 2026):** the callout keeps the question
as a prompt (source content, it stays), and the item becomes a graded
`selfcheck` **only when the module text also fixes the answer** — placed
after the callout, the source solution as the model answer. It is counted
in the footer's Interactive Link disclosure but NOT toward the Practice
floor: the floor and per-objective lints count only items inside
`## Practice`, so the Practice block must meet the floor on its own
*(chapter 2)*. An item whose answer is only in the linked media is not
graded and not counted — a learner without the video would be graded on
something the page never taught. The `interactive-exercise` items are
never silently dropped: the footer names how many the section has, how
many became `selfcheck`s, and that the rest stand as prompts in their
callouts. The checker reads each converted item's model answer against the
module text, as for any unkeyed-to-keyed conversion in the baseline.

### 2. Feature boxes

The `<note class>` → callout mapping, with the printed box names:

| CNXML `<note class="…">` | Count | Callout | Notes |
|---|---|---|---|
| `anatomy interactive` | 167 | **Interactive Link** (`{{</* callout type="info" */>}}`) | The Link to Learning treatment: keep the external URL, describe the destination in the link text. The trailing question stays in the callout; it is also a graded `selfcheck` only when the module text fixes the answer (rule 1). |
| `anatomy interactive um` | 20 | **Interactive Link** | Same; the link is a University of Michigan histology slide. Say "histology slide" in the link text, not "Webscope". |
| `anatomy disorders` | 42 | **Disorders of the …** | The note's `<title>` names the system ("Cardiovascular System: Arteriosclerosis"); the callout heading is "Disorders of the <system>: <topic>". |
| `anatomy diseases` | 4 | **Diseases of the …** | Same form; keep the source's word. |
| `anatomy homeostatic` / `homeostatic anatomy` | 14 + 1 | **Homeostatic Imbalances** | Same box, classes in either order. |
| `anatomy everyday` | 29 | **Everyday Connection** | |
| `anatomy career` | 14 | **Career Connection** | |
| `anatomy aging` | 11 | **Aging and the …** | "Aging and the <system>" from the note's title. |
| `chapter-objectives` | 28 | *(not a callout)* | The intro module's objectives list; goes on the chapter landing. |

Feature-box prose is transcribed in full; a question inside a box that the
box itself answers is a `selfcheck` candidate under the baseline's
unkeyed-question rule, and one it does not answer is left as prose.

### 3. References sections — decided September 22, 2026

Fifteen sections end with a `section.references` citation list, which the
baseline's page skeleton has no slot for. **The rule:** the page carries a
`## References` list immediately after `## Summary`, one bullet per source
paragraph in source order, the citation text as printed and any URL kept
as a link (the dead-link rule applies). Never dropped or moved to the
footer. 3.2 (`m46023`) is the first; if the heading fails the structure
validator or the reading-pass tooling, the tool is extended, not the list
removed.

### 4. Figures are label diagrams, and the manifest's `kind` guess will be wrong

Almost every image is a JPEG (722 of 727), including the illustrations, so
`vendor-media`'s JPEG-means-photo guess is wrong for most figures: the
author sets `kind` on every figure from the image, never from the
manifest's default. Source alts are short (median 172 characters) and often
say what the figure *labels* rather than what it shows ("The major parts
including the larynx, trachea, bronchi, and lungs are labeled"); a
label-diagram chapter's alts run long (chapter 1's are 400–2,000
characters *(pilot)*). When a Practice item depends on a labeled structure,
the alt or a `longdesc` names the structures, per the baseline's
image-accessibility policy, written image-first and checked by inventory
from the first section (life-sciences "Media: vendored figures" and
"Completion audit"). The 1,600-pixel cap
absorbs the large source files; the ~220 source `media/` files no module
references are never vendored.

### 5. External links

346 links, 323 of them `openstax.org/l/<slug>` redirects. The baseline's
dead-link rule and `npm run check:external-links` apply; treat a redirect
that lands on a 404 as the baseline says.

## Exercises: the `## Practice` block

| Source set | CNXML | Component |
|---|---|---|
| Review Questions | `section.multiple-choice` | `multiplechoice`, text mode, source options in source order, source option count |
| Critical Thinking Questions | `section.free-response` | `selfcheck`, the source solution as the model answer |
| Interactive Link Questions | `section.interactive-exercise` | `selfcheck` only when the module fixes the answer; otherwise a prompt in its callout (rule 1 above) |
| Key terms | `<glossary>` | `textin` recall items |
| Comparison tables | `<table>` (CALS) | `sortbins` under the both-orientations rule |

The corpus-wide answer-position gate measures the book on its own; if it
fails, reorder with a deterministic seeded shuffle and say so in
`Changes:`.

Lessons *(chapters 1–2 and their Opus re-review, September 22, 2026)* —
baseline rules this book's vocabulary makes easy to break:

- **The "directly above" leak is the top class, and stems are the gap.**
  Nothing in the item directly above a `textin` — its stem, its options,
  OR its hint — prints the `textin`'s key, or its root, singular, or plural
  (X-rays/X-ray, prone/supine, thoracic cavity). Source stems and options
  are never edited; order the group so every recall item comes before the
  items that print its key, and word hints by role, not by term. Grep the
  Practice block for every `textin` key before filing.
- **A hint says WHERE to look — the subsection, figure, or table — never
  the key, a root or derivative of it (*pronation* for prone, *nutrient*
  for micronutrients), the fact the correct option asserts, or a fact the
  module never states** (e.g. "uracil is a pyrimidine and appears in only
  one nucleic acid" above options B and C). Read every hint against its own
  key and options, and against the stem, options, and hint of the item
  above; the checker reads them again.
- **Headline glossary terms are not recall items.** A term that sibling
  items necessarily print (1.1's *anatomy* and *physiology*; 1.5's
  *negative*/*positive feedback*) stays a Key-terms bullet only; the footer
  names the exclusion and the mechanism, not just the count. The same holds
  for a term a source Review Question on the page already keys
  (life-sciences "Each thing once"); a term the group's own objective
  heading or the page title prints is avoided when the objective offers
  another, as a preference, not a defect (life-sciences "Text recall").
- **Footer numbers come from a tally, never from memory.** The floor is 3
  per objective and 8 per section — never quote 12 or 15. Every
  figure-reference edit ("see the figure below, panel a" for a `<link>`) is
  a disclosed departure; a dropped one is a defect.
- **Figures are described from the drawing, never from the source alt or
  from memory.** A source alt reused as a `longdesc` is read against the
  image first; left/right is the subject's (1.6's arm arrow is on the
  woman's LEFT arm); bands, views, and panels are counted in the image.
- **A one-word typo is footer + ledger only, never a Source note** (core §0
  rule 4); a claim-level correction gets one. A figure's file name is not
  reader-visible content and gets no note.
- **Lint-enforced since September 22, 2026:** HTML entities in shortcode
  params; ASCII chemistry (`H2O`, `Na+`) anywhere on a page, alts included —
  Unicode sub/superscripts only; an MC option above a `textin` that prints
  its key; an acronym spelled out before its blank; a hint that prints the
  key; a `textin` key in its own hint or in the preceding item; a `textin`
  hint word built on a five-letter-plus key's root (*pronation* for
  `prone`); an MC hint naming a subsection whose title is the key. The fact
  the correct option asserts, a fact the module never states, and other
  paraphrases remain the author's and checker's.
- **Source section titles vary** ("Review Chapter", "Critical Thinking
  Question" in 1.6) — they are the same `multiple-choice` /
  `free-response` classes.
- **A source file name with parentheses** (`102_Organ_Systems_of_Body(Page1).jpg`)
  is folded to `…-Page1` by `vendor-media`, because Hugo percent-encodes the
  parentheses and the build audit then cannot match the variant file
  *(pilot)*.

The three readings and the blind solve run as
`docs/briefs/anatomy-physiology/run.md` describes.

## Verification

The baseline's gates and readings apply unchanged. Book-specific: the
September-8 table in "Source and authority" before any erratum is logged;
the `kind` check on every figure; the footer disclosure for Interactive
Link Questions and for 17.11's missing glossary; the `## References` list
where the source has one.

## Knowledge checks

One page per unit, as for Biology 2e: the source has six units, the map
records them, and `docs/knowledge-check-playbook-life-sciences.md` governs
(three items per section, lint-enforced). Unit sizes are 24, 43, 32, 24,
36, and 10 sections, so 72 to 129 items a page.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] the cover lists the chapter under its `### Unit N: <title>` heading, in source order
- [ ] key-term recall items built from the module `<glossary>` (none for 17.11, disclosed)
- [ ] every figure's `kind` set from the image, not the manifest default
- [ ] Interactive Link Questions converted only where the module fixes the answer, the rest disclosed as prompts; `## References` after `## Summary` where the source has one
- [ ] any PDF/CNXML disagreement checked against the September-8 table before it is logged

## Build budgets

The build-size caps live in `tools/build/audit-build.mjs`. At the scan the
site was ~306 MB against the 350 MiB total-HTML cap and this book projects
~60 MB more, so **the cap will trip mid-book** — raise it deliberately with
a measurement when it does, never in advance. The 20,000-file Cloudflare
ceiling is not at risk (~1,700 files for this book on top of ~4,800).
