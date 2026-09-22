# Anatomy and Physiology 2e — subject playbook

The book-specific half of the authoring rules for OpenStax **Anatomy and
Physiology 2e**. `docs/authoring-playbook.md` is the shared core and governs
every book; `docs/subjects/life-sciences.md` is the life-sciences baseline
this book inherits — its media pipeline, image-accessibility policy,
notation, `textin`/`selfcheck`/`sortbins` rules, the answer-form rules,
reading-pass verdicts, and the three-reading answer discipline all apply
here unchanged unless a rule below says otherwise (`docs/subjects/biology.md`
and `docs/subjects/microbiology.md` are those books' own delta files and
are not required reading here, though this book is much closer in shape to
Biology 2e than to Microbiology, and the Biology mappings are repeated
below where they apply). Read all three before authoring a section.

This document was written from the **September 22, 2026 scan** of the
pinned source; chapter 1 was authored September 22, 2026 as the pilot, and
chapter 2 the same day in the run right after it. It
records what the scan found and the rules that follow from it; a rule
tagged *(pilot)* or *(chapter N)* will be added by authoring that chapter,
and the per-chapter record will live in `docs/history/anatomy-physiology.md`.
The two decisions the scan could not settle (Interactive Link Questions,
References sections) were **decided September 22, 2026** and are recorded
below. A correction that is not folded back into a rule will be made again.

## Source and authority

- **Pinned source:** `openstax/osbooks-anatomy-physiology` at the commit in
  `data/openstax/source-lock.json` (bundle `anatomy-physiology`, book
  `anatomy-physiology`, collection `anatomy-and-physiology-2e`, `col11496`).
  It is a single-book upstream repository — one entry in
  `META-INF/books.xml`, no `-bundle` suffix — so the bundle key is plain
  `anatomy-physiology`, the whole `modules/` tree is checked out
  (`moduleScope: "bundle"`, 198 modules), and `npm run source:fetch --
  --bundle anatomy-physiology` materializes it. The pin is the upstream
  head on the day of pinning, `5ae32b3f` ("errata 29985", September 8,
  2026).
- **The pin is newer than the PDF, and the difference is substantive.**
  `sources/anatomy-and-physiology-2e_-_WEB.pdf` (1,347 pages) was generated
  September 2, 2026; upstream then landed fifteen errata commits on
  September 8, 2026 touching 19 modules (16 changed lines). The lock's
  `authoredBaselineCommit` is therefore the last commit before the PDF,
  `716383a4` (June 12, 2026), with confidence
  `inferred-from-local-pdf-date`. `npm run source:history` audits only
  mapped sections, so while the book is scaffolded the exact changes are
  read with `git -C sources/openstax/osbooks-anatomy-physiology diff
  716383a4 HEAD --stat` (the fetch materializes both commits). They are
  real corrections
  that the PDF still prints wrong: a secondary oocyte is *haploid*, not
  diploid (28.1); an allele occupies a locus on a specific *chromosome*,
  not gene (28.7 glossary); in fermentation *pyruvate*, not lactic acid,
  replaces oxygen as the final electron acceptor (24.2); "Wilder", not
  "Walter", Penfield (14.2); "mucus-secreting" not "mucous-secreting" (4.2,
  23.5); the epiphyseal-plate sequence stem now says "moving toward the
  epiphysis" (6.4); lingual lipase's sentence was cut from 23.3; and two
  figure images were swapped for corrected files (7.2 skull base, 27.3
  aldosterone loop, 23.1 trachea now a two-panel figure with a new alt).
  **Author from the CNXML.** When the PDF and the CNXML disagree in one of
  those 19 modules, run `git -C sources/openstax/osbooks-anatomy-physiology
  diff 716383a4 HEAD -- modules/<id>` before calling it an erratum: a
  disagreement the diff explains is upstream's fix, not a defect, and is
  not logged; a disagreement it does not explain is an erratum candidate
  as in every other book.
- **Visual authority:** the PDF, for what a figure shows and how a table
  lays out (`pdftoppm -f N -l N -r 110 -png` as in the baseline). For the
  three swapped figures above the PDF shows the *old* image; read the
  pinned media file (vendor it, then look at the WebP) instead.
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-anatomy-physiology/modules/<id>/index.cnxml`,
  with the baseline's caveats (it folds figure cross-references to `()`;
  check the raw CNXML).
- **Structure:** **six units**, 28 chapters, 169 numbered sections, one
  introduction module per chapter, one preface (`m46844`), and **no
  appendices** (there is no book-wide glossary; the answer key is inline).
  Unit 1 *Levels of Organization* holds chapters 1–4, Unit 2 *Support and
  Movement* 5–11, Unit 3 *Regulation, Integration, and Control* 12–17,
  Unit 4 *Fluids and Transport* 18–21, Unit 5 *Energy, Maintenance, and
  Environmental Exchange* 22–26, and Unit 6 *Human Development and the
  Continuity of Life* 27–28. Chapters are uneven: chapter 14 has three
  sections, chapter 17 eleven, chapter 25 ten — size a wave by sections,
  never by chapters. Every section's objectives are in `<md:abstract>`
  (the Biology 2e shape, which the parser reads without a special case),
  and every intro module carries a `<note class="chapter-objectives">`.
- **License:** the pinned repository's `LICENSE` says **CC BY-NC-SA 4.0**,
  the same as the other pinned life-sciences books. openstax.org's catalog
  lists the title as CC BY 4.0; the pinned source is the authority, as the
  baseline says. Senior contributing authors for the footer: J. Gordon
  Betts, Peter Desaix, Eddie Johnson, Jody E. Johnson, Oksana Korol, Dean
  Kruse, Brandon Poe, James A. Wise, Mark Womble, Kelly A. Young. The
  footer deep-links to
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
for all six units**, exactly as for Biology 2e: the cover lists each
authored chapter under a `### Unit N: <title>` heading inside `## Chapters`,
in source order with the source's titles; `build-map` records the unit →
chapter grouping as the book's `units` list in
`data/openstax/source-map.json`; `verify-map` checks it; the sidebar nests
chapters under their unit; URLs do not carry the unit. A chapter moves from
the cover's "Planned contents" list to its unit heading when its landing
exists, which happens when its first section lands, never earlier. The book
was `authoringStatus: scaffolded` in the lock from the pin on
September 22, 2026, `in-progress` from the same day when chapter 1 landed,
and will be `complete` when the 169th section lands. Flipping that flag is
a close-out step of its own, pinned in the same places the life-sciences
playbook lists: the lock's
`authoringStatus`, the cover's `authoring_status` frontmatter (which `npm
run source:verify` requires to equal the lock's word for word, and to be
absent once the lock says `complete`), the assertions in
`tools/source/openstax-source.test.mjs`, and the status prose in
`AGENTS.md`, `README.md`, and `docs/source/openstax-source-workflow.md`.
The chapter landing carries the intro module's paragraph and splash photo
plus the chapter-objectives note as a list.

## What is the same as Biology 2e

The scan compared this book's CNXML with Biology 2e's and Microbiology's
element by element. In every respect that shaped a Microbiology rule, this
book is Biology-shaped, so the baseline applies as written:

- **Every exercise carries a `<solution>`** — 1,226 of 1,226 (714 Review
  Questions keyed by letter, 370 Critical Thinking model answers, 142
  Interactive Link answers). Microbiology's unkeyed-question policy has
  nothing to convert here; `verify-source-keys` should report no `unkeyed`
  status, and an `unmatched` one only for a question an author writes from
  a feature box.
- **A per-module `<glossary>`** in 168 of the 169 sections, 3,190
  definitions in all; `## Key terms` is built from it, one bulleted item per
  definition in source order, and the `textin` recall items come from it,
  as in Biology. The one section without a glossary is 17.11 *Development
  and Aging of the Endocrine System* (`m46658`): it gets no `## Key terms`
  block and no recall items, and the author says so in the footer. Body
  `<term>` tags (6,382, all class-less) outnumber the definitions by two to
  one, so a bolded term is not evidence that it is a key term — the
  glossary is.
- **Review Questions are four-option `multiplechoice`** (706 of 714). Six
  items in chapter 25 have two options (true/false- and fill-the-blank-
  shaped stems), one has three, one has five: keep the source's option
  count, as Microbiology keeps its true/false pairs.
- **Critical Thinking Questions → `selfcheck`** with the source solution as
  the model answer; **a `section.summary` per section**; comparison tables
  → `sortbins` under the baseline's both-orientations rule (104 CALS tables,
  103 spanning cells, so expect the merged-cell transcription work Biology
  had, plus one table — 2.5's functional groups — whose cells are structure
  *images*, which must be vendored or the table restructured).
- The practice floor is **3 exercises per objective group and 8 per section**,
  with `distinctItems` on, published in `BOOK_RULES` as the
  `life-health-sciences/anatomy-physiology` profile.
- **Figures** use `<figure>` + `<media alt>` + `<image>` with occasional
  `<subfigure>`s (7) — the same `mediafigure` pipeline; `npm run
  source:media -- --book anatomy-physiology --chapter N` vendors a
  chapter's images. The checkout is blobless and excludes `media/`; the
  tool reads each blob from the pinned commit over the network.
- **Math** is minor: 59 `<m:math>` elements in 13 modules (2.3 chemical
  reactions, 26.4 acid-base, 26.3 electrolytes, 20.2 blood flow, 22.5 gas
  transport, the renal sections), transcribed with the baseline's notation
  rules.

## What is different from Biology 2e

### 1. Interactive Link Questions — decided September 22, 2026

The book's Link to Learning equivalent is `<note class="anatomy
interactive">` (167) and `<note class="anatomy interactive um">` (20; the
University of Michigan histology Webscope). Unlike Biology's, **135 of the
187 notes end in a question** ("What percentage of this blood flow comes
from the hepatic portal system?"), and 82 sections end with a
`section.interactive-exercise` set of *Interactive Link Questions* — 142
keyed items, 125 of which repeat a question the in-body note already asked
— but a pair is checked, never assumed: in 1.3 the note asks two questions
and the exercise set a third, unrelated one *(pilot)*. When they differ, the
callout carries the note verbatim and then the exercise's question as one
more plain sentence, so nothing keyed is dropped.
The answer depends on the linked video or slide, not on the module text
(the sample answer "Fatty acid catabolism" appears nowhere in 1.3's prose),
and the link is a redirect through `openstax.org/l/…` that can rot.

The baseline's rule — a question is graded only when the module fixes the
answer — does not settle this by itself, because the source *does* key
them. **The rule (decided September 22, 2026):** the callout keeps the
question as a prompt (the callout text is source content and stays), and
the item becomes a graded `selfcheck` **only when the module text also
fixes the answer** — placed after the callout, the source solution as the
model answer. It is counted in the footer's Interactive Link disclosure but NOT
toward the Practice floor: the floor and per-objective lints count only items
inside `## Practice`, so a body-placed selfcheck is invisible to both gates and
the Practice block must meet the floor on its own *(chapter 2)*. An item whose
answer is only in the
linked media is not graded and not counted, because a learner without the
video would be graded on something the page never taught, and a dead link
would leave a dead item. The `interactive-exercise` items are never
silently dropped: the footer disclosure names how many the section has,
how many became `selfcheck`s, and that the rest stand as prompts in their
callouts. The checker reads each converted item's model answer against the
module text, as for any unkeyed-to-keyed conversion in the baseline.

### 2. Feature boxes

The `<note class>` → callout mapping, with the box names the printed book
uses (confirmed against the PDF's running heads):

| CNXML `<note class="…">` | Count | Callout | Notes |
|---|---|---|---|
| `anatomy interactive` | 167 | **Interactive Link** (`{{</* callout type="info" */>}}`) | The Link to Learning treatment: keep the external URL, describe the destination in the link text. The trailing question stays in the callout; it is also a graded `selfcheck` only when the module text fixes the answer (rule 1). |
| `anatomy interactive um` | 20 | **Interactive Link** | Same; the link is a University of Michigan histology slide ("View the University of Michigan Webscope to explore the tissue sample"). Say "histology slide" in the link text, not "Webscope". |
| `anatomy disorders` | 42 | **Disorders of the …** | The note's `<title>` names the system ("Cardiovascular System: Arteriosclerosis"); the callout heading is "Disorders of the <system>: <topic>". |
| `anatomy diseases` | 4 | **Diseases of the …** | Same form; the source uses both words and the page keeps the source's. |
| `anatomy homeostatic` / `homeostatic anatomy` | 14 + 1 | **Homeostatic Imbalances** | One note has the classes in the other order; it is the same box. |
| `anatomy everyday` | 29 | **Everyday Connection** | |
| `anatomy career` | 14 | **Career Connection** | |
| `anatomy aging` | 11 | **Aging and the …** | "Aging and the <system>" from the note's title. |
| `chapter-objectives` | 28 | *(not a callout)* | The intro module's objectives list; goes on the chapter landing. |

The feature-box prose is source content and is transcribed in full under
the baseline's rules; a question inside a box that the box itself answers
is a `selfcheck` candidate under the baseline's unkeyed-question rule, and
one it does not answer is left as prose.

### 3. References sections — decided September 22, 2026

Fifteen sections end with a `section.references` — a citation list (URLs
and journal references) that Biology 2e and Microbiology do not have, and
the baseline's page skeleton has no slot for it. **The rule:** the page
carries a `## References` list immediately after `## Summary`, one bullet
per source paragraph in source order, the citation text transcribed as
printed and any URL kept as a link (the dead-link rule applies). They are
source content and are never dropped or moved to the footer. The pilot
confirms the heading passes the structure validator and the reading-pass
tooling; if it does not, the tool is extended, not the list removed.

### 4. Figures are label diagrams, and the manifest's `kind` guess will be wrong

Almost every one of the 727 image references is a JPEG (722), including
the anatomical illustrations, so `vendor-media`'s JPEG-means-photo guess
will be wrong for most figures, not for 2 in 20 as in Biology: the author
sets `kind` on every figure from the image, never from the manifest's
default. Book-wide the alts are shorter than the other books' (median 172
characters; 12 under 40), though a label-diagram chapter runs long
(chapter 1's are 400–2,000 characters *(pilot)*), and they often say what
the figure *labels* rather than what it shows ("The major parts including the larynx, trachea,
bronchi, and lungs are labeled"). When a Practice item depends on a
labeled structure, the alt or a `longdesc` names the structures, per the
baseline's image-accessibility policy; the figure-alt pass lessons in
`docs/history/biology.md` apply from the first section. Source files are
large — 170 over 1 MB, the largest 8.4 MB — which the 1,600-pixel cap
absorbs; and the source `media/` tree holds ~220 files no module
references (quiz images, superseded versions), which are never vendored.

### 5. External links

346 links, 323 of them `openstax.org/l/<slug>` redirects (YouTube videos,
the Michigan histology slides, a few CDC and NIH pages). The baseline's
dead-link rule and `npm run check:external-links` apply; expect some rot
across 169 sections and treat a redirect that lands on a 404 as the
baseline says.

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

Pilot lessons *(chapter 1, September 22, 2026)*, all instances of baseline
rules that this book's vocabulary makes easy to break:

- **The top checker yield was the "directly above" leak** (3 of 7 pages):
  a source-verbatim option list or a hint printing the key of the very next
  `textin` (X-rays/X-ray, set point, prone/supine, thoracic cavity). Source
  options are never edited; the fix is to order the group so no item that
  prints a recall key immediately precedes that recall item, and to word
  hints by role, not by term. Grep the Practice block for every `textin`
  key before filing.
- **A hint states where to look, never the fact an option asserts** (chapter
  2's top class, 4 of 9 defects): "each step is one factor of ten" for a
  one-step pH item, "uracil is a pyrimidine and appears in only one nucleic
  acid" above options B and C, a hint quoting the key's own "polar and
  nonpolar" phrase. Read every hint against its options before filing; the
  checker reads them again. No lint reads this (measured: a hint-prints-key
  regex finds 20 corpus hits, mostly legitimate concept names).
- **Headline glossary terms are not recall items.** A section whose every
  option and hint necessarily prints its own topic words (1.1's *anatomy*
  and *physiology*; the Metabolism group's *anabolism*/*catabolism*) keeps
  those terms as Key-terms bullets only; the footer names the exclusion and
  the mechanism, not just the count.
- **A source alt reused as a `longdesc` is read against the image first**
  (1.2's "eight silhouettes" for six).
- **Source section titles vary** ("Review Chapter", "Critical Thinking
  Question" in 1.6) — they are the same `multiple-choice` /
  `free-response` classes.
- **A source file name with parentheses** (`102_Organ_Systems_of_Body(Page1).jpg`)
  is folded to `…-Page1` by `vendor-media`, because Hugo percent-encodes the
  parentheses in the built URL and the build audit then cannot match the
  variant file *(pilot)*. Every keyed solution goes through the baseline's three
readings; the third, blind solve runs in a fresh subagent with masked pages
as `docs/briefs/microbiology/run.md` describes (the briefs for this book
are to be derived from those and versioned under
`docs/briefs/anatomy-physiology/` before the pilot — the Microbiology
briefs' glossary-appendix and unkeyed-question steps do not apply here and
the Biology mappings above do).

## Verification

The baseline's gates and readings apply unchanged. Book-specific: the
19-module upstream diff check in "Source and authority" before any
erratum is logged; the `kind` check on every figure; the footer
disclosure for Interactive Link Questions and for 17.11's missing glossary;
the `## References` list where the source has one.

## Knowledge checks

One page per unit, as for Biology 2e: the source has six units, the map
records them, and `docs/knowledge-check-playbook-life-sciences.md` governs
(three items per section, lint-enforced). The unit sizes are uneven — 24,
43, 32, 24, 36, and 10 sections, so 72 to 129 items a page — which is what
Biology's units 5 and 7 already were.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] the cover lists the chapter under its `### Unit N: <title>` heading, in source order
- [ ] key-term recall items built from the module `<glossary>` (none for 17.11, disclosed)
- [ ] every figure's `kind` set from the image, not the manifest default
- [ ] Interactive Link Questions converted only where the module fixes the answer, the rest disclosed as prompts; `## References` after `## Summary` where the source has one
- [ ] any PDF/CNXML disagreement in one of the 19 September-8 modules checked against the upstream diff before it is logged

## Build budgets

The build-size caps live in `tools/build/audit-build.mjs`. At the scan the
built site held 767 HTML documents at roughly 306 MB on disk against the
350 MiB total-HTML cap, and a Microbiology section page averages about
290 KB; this book's ~200 pages project to roughly 60 MB more, so **the cap
will trip mid-book** — raise it deliberately with a measurement when it
does, never in advance. The 20,000-file Cloudflare ceiling is not at risk
(about 1,500 WebP variants and 200 pages on top of ~4,800 files today).
