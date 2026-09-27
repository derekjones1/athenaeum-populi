# Microbiology — subject playbook

Re-reviewed to the A&P standard, completed September 24, 2026. Every alt-only figure re-read image-first by Opus, September 26, 2026.

The subject-specific half of the authoring rules for OpenStax
**Microbiology**. `docs/authoring-playbook.md` is the shared core;
`docs/subjects/life-sciences.md` is the life-sciences baseline this book
inherits — its media pipeline, image-accessibility policy, notation,
`textin`/`selfcheck`/`sortbins` rules, the answer-form rules for unkeyed
questions, reading-pass verdicts, and the three-reading answer discipline
apply unchanged unless a rule below says otherwise
(`docs/subjects/biology.md` is Biology 2e's own delta file, not required
reading here). Read all three before authoring or editing a microbiology
section. A rule tagged *(pilot)* or *(chapter N)* was learned authoring
that chapter; the per-chapter record is in `docs/history/microbiology.md`.
The book is complete — all 26 chapters, the five Knowledge Checks, and the
completion audit (September 2026) — so these rules govern edits and
re-runs. A correction that is not folded back into a rule will be made
again.

## Source and authority

- **Pinned source:** `openstax/osbooks-microbiology` at the commit in
  `data/openstax/source-lock.json` (bundle `microbiology`, book
  `microbiology`, collection `microbiology`, `col12087`). A single-book
  upstream — no `-bundle` suffix — so the whole `modules/` tree is checked
  out (`moduleScope: "bundle"`, 159 modules);
  `npm run source:fetch -- --bundle microbiology` materializes it.
- **Visual authority:** `sources/microbiology_-_WEB.pdf` (generated
  2026-09-02, 1,221 pages). It prints no revision number, so the pin is
  the upstream head on the day of pinning (the lock records
  `authoredBaselineConfidence: inferred-from-local-pdf-date`). Where the
  PDF and the CNXML disagree, the CNXML is the transcription authority and
  the disagreement is an erratum candidate.
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-microbiology/modules/<id>/index.cnxml`. It bolds
  `no-emphasis` terms as if they were defined terms and drops figure
  cross-references to `()`; check the raw CNXML for both.
- **Structure:** flat — 26 chapters, no units, 127 numbered sections. Each
  chapter's first module (one paragraph and a splash photo) becomes the
  chapter `_index.md`. The preface (`m63247`) and the five appendices
  (`m58946`–`m58950`, the last the book-wide Glossary) are not mapped and
  not authored; the Glossary is read as a *source of definitions* (below),
  never published.
- **License:** the pinned `LICENSE` and the PDF say **CC BY-NC-SA 4.0**
  (openstax.org's catalog says CC BY 4.0; the pinned source is the
  authority). Senior contributing authors for the footer: Nina Parker,
  Mark Schneegurt, Anh-Hue Thi Tu, Philip Lister, Brian M. Forster.

## Where the files go

```
content/life-health-sciences/microbiology/_index.md                  book cover
content/life-health-sciences/microbiology/NN-<chapter-slug>/_index.md chapter landing (intro module)
content/life-health-sciences/microbiology/NN-<chapter-slug>/NN-<section-slug>.md
static/media/microbiology/<stem>-<width>.webp                        vendored figures
data/media/microbiology.json                                         media manifest
```

`NN` is the upstream chapter number (01–26) and, inside a chapter, the
upstream section number. The cover lists chapters as plain bullets under
`## Chapters` — no unit headings; the source has none, and none are
invented. The lock's `authoringStatus` is `complete` (since September 14,
2026), and the cover carries no `authoring_status`.

## What is different from Biology 2e

Five things differ enough to need their own rule; everything else follows
`docs/subjects/life-sciences.md` ("biology's rule" below means the
baseline's).

### 1. Terms and the `## Key terms` block

Biology has a `<glossary>` per module; Microbiology has none. Two things
stand in for it:

- **Defined terms in the body** are `<term id="term-NNNNN">` with no
  `class` (a dozen or so per section), printed bold. A
  `<term class="no-emphasis">` is an index entry — a name, a place, a
  drug — *not* bold and *not* a key term. The preview bolds both; read the
  raw CNXML. A plural split across two elements
  (`<term>microorganism</term><emphasis effect="bold">s</emphasis>`) is
  one bold run: `**microorganisms**`.
- **The Glossary appendix** (`m58950`) defines most of the body's defined
  terms, alphabetically.

`## Key terms` is therefore *derived*: one bullet per defined term of the
module, **in body order**, `- **term** — meaning.`, the meaning **verbatim
from the Glossary appendix entry**. A term with no appendix entry takes its
meaning from the module's defining sentence (the appositive or "is a…"
clause, trimmed to a phrase, no new claim); the footer's `Changes:` clause
says "key terms compiled from the module's defined terms and the book's
Glossary appendix; N definitions taken from the defining sentence". Record
each term's provenance in the ledger as `glossary` or `sentence`. The
fidelity gate is the defined-term count, not a glossary count: the checker
counts `<term>` elements without `no-emphasis` in the module against the
Key terms bullets.

**The parent derives this block before the wave, not each author**
*(pilot)*: a script over the module and `m58950` emits the ordered bullets
with definitions looked up and provenance marked, and authors edit rather
than re-derive. The lookup traps it must handle:

- **A term defined twice gets one bullet.** The checker compares `<term>`
  ELEMENTS; bullets are DISTINCT terms (§1.3: 19 elements, 18 bullets —
  both right).
- **Four appendix entries lost their headword markup upstream** and read
  as a run-on tail of the previous entry — *taxonomy* (inside *tartar*),
  *microbiology* (inside *microbial ecology*), *parasitology* (inside
  *parasitism*), *protozoology* (inside *protozoans*); erratum 320. Each is
  recoverable verbatim, so its provenance is `glossary`. Any glossary tool
  for this book must special-case them.
- **Match on the lemma, not the string.** Strip headword parentheticals
  (`protozoan (plural: protozoa)`), register the declared plural, and try
  the ordinary inflections (`phylogenies`/`phylogeny`) before concluding
  the appendix has no entry.
- **Where the appendix has two entries whose sense differs, take the
  module's** (`archaea` the organisms vs `Archaea` the domain) and record
  the choice in the ledger.
- **The appendix's ONLY entry may define a different sense** *(chapter
  3)*: §3.3's *basal body* is the bacterial flagellar motor; the entry is
  the eukaryotic nine-triplet structure. Treat it as no entry — meaning
  from the defining sentence, counted as sentence-derived, reason in the
  ledger. Conversely, when the module's sense sits under the nearest
  headword (*morphology* → *cell morphology*), use that entry and record
  it. A headword differing only by number or a parenthetical abbreviation
  (`nucleoid-associated proteins (NAPs)` ↔ `nucleoid-associated protein
  (NAP)`) is the same entry.
- **The bold term is lower-cased unless it is a proper noun**, even when
  its defining occurrence opens a sentence *(chapter 3)*.
- **A `no-emphasis` term is not a key term** even when the appendix has an
  entry (§1.1's `fermentation` entry is the later chapters' metabolic
  sense); do not reach for it to "complete" a block.

The `textin` recall items are built from these bullets exactly as
biology's are from the glossary.

### 2. The answer-key policy: what the source keys and what it does not

Biology keyed every exercise. Microbiology keys some sets and not others:

| Source set | CNXML | Keyed upstream | Component |
|---|---|---|---|
| Multiple Choice | `section.multiple-choice` | yes (the one unkeyed item is a micrograph question in m58931) | `multiplechoice`, source options in source order |
| Fill in the Blank | `section.fill-in-the-blank` | yes | `textin` — the sentence with its blank as the prompt, the key as the answer, when the key is ≤4 words; a longer key becomes a `multiplechoice` whose options are the module's own terms |
| True/False | `section.true-false` | yes | `multiplechoice` with exactly two options, `True` and `False` in that order, the hint naming the sentence the statement tests |
| Matching | `section.matching` | yes | one `multiplechoice` per row — the row's DESCRIPTION is the stem and the table's TERMS (all of them, in table order) are the options, keyed by the source letter resolved to the term *(chapter 7)* |
| Short Answer | `section.short-answer` | **no** (2 of 226) | a graded item when ONE module sentence, table, or figure fixes the answer (life-sciences "Unkeyed source questions"); otherwise `selfcheck` with an **author-written** model answer |
| Critical Thinking | `section.critical-thinking` | **no** | the same rule: graded when the module fixes it, `selfcheck` when it asks for a paragraph or a speculation |
| Check Your Understanding | `note.check-your-understanding` in the body (up to 10 per section) | **no** | a body item at the note's position — graded (`multiplechoice`, `textin`, `sortbins`) when the module fixes the answer, else `selfcheck` — see 3 |
| Art Connection | an `<exercise>` whose problem holds a figure | mostly | `mediafigure` first, then the item, as biology's Visual Connections |

The graded items are keyed from the source and go through biology's three
readings (author keys from the CNXML; checker re-derives; the orchestrator
answers with `solve:emit` / `solve:compare` and
`verify:ledger --require-solved`); `verify:source-keys` confirms them
against the source.

**An author-written model answer is allowed only under these conditions**,
all of them:

- It is assembled from sentences of the *same module*, lightly joined into
  complete sentences — never another chapter, the appendices, or general
  knowledge. If the module does not answer the question, the model answer
  says what the module gives and stops. **It is not omitted** *(chapters
  13–14)*: every source exercise is rendered (life-sciences "No source
  exercise is ever dropped, and 'duplicate' is a claim to prove").
- The `===CHECKS===` rubric has 2–6 checkpoints, each a clause of the
  model answer in its own words (biology's `phraseCoverage` rule), so each
  traces to a module sentence.
- The ledger note names the module passage(s) (`§ <subsection title>`).
  The item's `verify:source-keys` status is
  **`unkeyed`** when it transcribes a source question (Short Answer,
  Critical Thinking) and **`unmatched`** when it has
  no source counterpart at all (a Check Your Understanding note is not an
  `<exercise>`); both are correct, neither is a defect *(pilot)*. The
  footer's `Changes:` clause counts them ("model answers for N
  short-answer and M critical-thinking questions are written from this
  section's text; the source prints no answer key for them").
- The checker verifies every rubric clause against the module (not the
  page); an unsupported clause is a defect. The orchestrator answers with
  the model answer hidden; a disagreement is settled by the module's
  sentences, never by what a microbiologist would add.

**Which unkeyed questions are graded anyway** *(Sep 6 2026; replaces the
pilot's "never key a question the source does not key")*. The
life-sciences "Unkeyed source questions: graded when the module fixes the
answer" rule applies: an unkeyed Short Answer, Critical Thinking, or Check
Your Understanding question becomes a `multiplechoice`, `textin`, or
`sortbins` when ONE sentence, table, or lettered figure of the module
fixes its whole answer, and stays a `selfcheck` when the answer is a
paragraph, a speculation, a long list, or an inference. Its checker applies
the life-sciences "What the first retrofit's checkers caught" list. Example
of "the question offers its own alternatives": §2.1's lettered Critical
Thinking item ("which of the following has the lowest energy?") is a
`multiplechoice` over its four printed alternatives, keyed by the module's
energy–wavelength sentence. Nothing upstream fixes an accept list, so a
converted `textin` is used only for a defined term or a name the sentence
prints verbatim; anything else that converts is a `multiplechoice` or a
`sortbins`, whose options and bins the module prints.

Two life-sciences rules came from this book's chapter 3: a source
question may use a word the module never uses (§3.1's Pasteur "control
group", the intact swan-neck flask), and a "select all that apply" item
becomes a `sortbins` (§3.3's adherence item, keyed C, D).

**A Short Answer that the body's Check Your Understanding already asks is
folded into that body item** *(chapter 3)* — only when the two are the same
question reworded (§3.4's "ways prokaryotic flagella differ from eukaryotic
flagella" against the Flagella and Cilia box), with both stems quoted in the
ledger and the footer (life-sciences "No source exercise is ever dropped").
The `distinctItems` lint is exact-match; the checker's enumeration is the
gate.

Rules about which source items can be used at all:

- **An item whose options differ only in typography is not gradable**
  *(pilot)*: §1.2's binomial-nomenclature item (`Homo Sapiens`, *homo
  sapiens*, *Homo sapiens*, *Homo Sapiens*) is the case the life-sciences
  Multiple choice rule was written from.
- **A two-blank Fill in the Blank splits on whether the order is the
  point** *(pilot)*. "Haeckel proposed adding the kingdoms ___ and ___"
  (*Protista and Monera*) is unordered: a `textin` whose `accept` carries
  both orders (grading drops punctuation, so `Protista Monera` covers the
  comma spelling). "an organism's scientific name includes its ___ and
  ___" (*genus, species*) is ordered — genus first is what is taught — and
  one text field cannot mark a reversed pair wrong, so it becomes a
  `multiplechoice` among rank pairs the module names. Say which rule
  applied in the footer.
- **A source item the page does not use is named in the footer**, with the
  reason, and in the ledger. The only such item is one the module also
  asks in a Check Your Understanding box, which the page asks there,
  graded or as a `selfcheck` (14.6's Kirby-Bauer Short Answer folds into a
  self-check); footer and ledger quote BOTH stems, which must be the same
  question, not the same topic *(chapters 13–14; the fold into a self-check
  decided September 26, 2026)*.

### 3. Check Your Understanding and the Clinical Focus questions

Microbiology's in-body items are `note.check-your-understanding` boxes — a
bulleted list of one to three questions closing each subsection — and the
questions that end most Clinical Focus parts. Neither has a source answer.

- A Check Your Understanding box becomes one body item per bullet, at the
  note's position, under the policy in 2. The lead-in is the source's own
  title, `**Check Your Understanding**`, as a bold line above the box's
  first item.
- **"Preceding" means anywhere earlier in the same module, not only the
  enclosing subsection** *(pilot)*: §1.1's first bullet asks about
  fermented foods from the end of the disease-containment subsection. The
  boundary is the MODULE: never another chapter, an appendix, or general
  knowledge.
- **A repeated stem is reworded to name its own referent** *(pilot)*: §1.3
  prints "Name some of the defining characteristics of each type." twice
  (life-sciences conversion rules).
- **The 2–3 consecutive-question limit applies to a Check Your Understanding
  box too** *(chapter 2)*: render a box of more than three bullets as
  labelled `**Check Your Understanding**` runs of at most three (five →
  three and two), content unchanged, disclosed in the footer.
- These body items count under `distinctItems` (`BOOK_RULES`): a Practice
  item may not re-ask one. Where a Short Answer repeats a Check Your
  Understanding question, keep the body one and fill the Short Answer slot
  with a different source item, a summary item, or a term recall. The
  mirror case — a body bullet repeating a KEYED source Practice item — and
  a source stem that contradicts its own key are life-sciences conversion
  rules *(chapter 23)*.
- The questions that end a Clinical Focus part stay inside the callout as
  plain bulleted prose, unanswered — the next part resolves them, and a
  self-check would key them from the wrong module.
- A Case in Point box that ends in bulleted questions gets the same
  treatment *(chapters 17–18)*.
- **An Eye on Ethics box that closes with discussion questions (prose or
  bulleted) gets the same treatment** *(21.2, 24.3, 25.3)*.

### 4. Feature boxes

| CNXML `<note class="microbiology …">` | Callout | Notes |
|---|---|---|
| `clinical-focus` | `{{</* callout type="info" */>}}` **Clinical Focus.** *Part N* / *Resolution* | The box's `<title>` follows the bold name in italics. One case runs through a chapter, one part per section; the source's "Jump to the next Clinical Focus box" link becomes a plain sentence naming where the case continues ("The case continues in [A Systematic Approach](/life-health-sciences/microbiology/01-an-invisible-world/02-a-systematic-approach/).") — an **absolute site-root Markdown link**, never a Hugo `relref` (`check:build` validates routes), plain text when the target page does not exist. The source's "go back" link points at the PREVIOUS part, which is not where the case BEGAN once a case runs past two sections. Transcribe the box in document order — the closing question can precede the box's figure. |
| `micro-connection` | **Micro Connection.** *Title* | |
| `eye-on-ethics` | **Eye on Ethics.** *Title* | |
| `case-in-point` | **Case in Point.** *Title* | |
| `disease-profile` | **Disease Profile.** *Title* | See below — its summary table is an image upstream. |
| `link-to-learning` | **Link to Learning** | Biology's rule: keep the URL, describe the destination; `check:external-links` before close-out. Keep the source's sentence boundaries — no moving the anchor onto another phrase or merging sentences. |
| `check-your-understanding` | *(not a callout)* | Body items — see 3. |

**Disease Profile tables.** Each Disease Profile box ends with a
`<figure>` whose image is a rendered table (disease, pathogen, signs and
symptoms, transmission, drugs) and whose alt transcribes it cell by cell.
**Transcribe the table as a Markdown table** (from the alt, checked against
the PDF page) inside the callout, and **do not vendor the image** — content
may not live in an image alone, and a 1,000-character alt of cells is
unreadable. The footer says "the Disease Profile summary table is
transcribed from the source's table image". This is the one figure class
this book drops; vendor one that carries more than its alt (a micrograph
beside the table).
**The media pull vendors it anyway** *(chapters 21–22)*: it cannot tell a
Disease Profile image apart, so the parent de-vendors it at close-out
(manifest entry + static files) rather than the author skipping the pull.
**Where the CNXML alt and the printed image diverge** *(chapters 21–22:
21.2's "a pregnant person" in the alt against "mother" in the image)*, the
pinned CNXML alt wins and the footer discloses what the image reads.
**A Disease Profile table with row-group header rows** *(chapter 25:
25.4's "Protozoa"/"Helminths")*, whose alt garbles the group headers into
a phantom column, takes its structure from the image — two stacked
Markdown tables, or one with full-width bold group rows — disclosed; the
alt still wins for every cell's wording.
**A typo class found in one cell of a Disease Profile table is corrected in
EVERY cell of that table, and every correction disclosed** *(chapter 26)*;
the footer never claims the table "matched exactly" over a cell it
smoothed.

**Summary tables printed as images** *(chapter 2)* — §2.3's microscope
tables, §2.4's stain tables, and later ones — follow the life-sciences
table-image rule (section page, item 5): transcribed from the image, never
the alt (§2.3's alt omitted a whole row), with the image kept after the
table for its micrograph column, `kind="photo"`.

Splash photos and ordinary figures are ordinary `mediafigure`s.

**An Art Connection may be a Short Answer, and may carry a `<figure>`**
*(chapter 3)*. Render it the same way — `mediafigure` then item, in the
objective's Practice group, author-written descriptive caption with the
source credit appended. The alt and caption rules for figure-keyed items
(no lettered part's identity, nothing the item asks), the
name-every-letter form *(chapter 22)*, and the source alt that describes a
different drawing *(chapter 26)* are life-sciences rules.

**Art Connection, in detail** *(pilot)*. An `<exercise>` whose `<problem>`
holds a bare inline `<media>`, not a `<figure>`: an alt but **no caption
and no number**. Render it as a `mediafigure` immediately followed by its
item, in the Practice group of the objective it serves, never in the body.

- **You write the caption** (life-sciences Media: never what the picture is
  missing when that is the answer — §1.3's sizes chart "redrawn with four
  of its objects removed", not naming them).
- **Read the alt attached to the element you render.** Chapter 1 carries
  the full sizes chart and its cropped Art Connection twin, each with its
  own source alt; they are easy to transpose.
- The item is unkeyed (Critical Thinking): its model answer follows 2.

### 5. Notation and the equations

The life-sciences notation rules apply (Unicode formulas and ions, the
micro sign, organism names, primes, immunology and genetics notation), plus:

- The source's `<equation>` blocks — 2.3, 7.1–7.2, 8.4, and 9.1 (N_n = N_0 ·
  2^n) — go in `$…$`; a reaction among them (9.2's ROS reactions) is
  Unicode text. A letter exponent (`2ⁿ`) stays Unicode.
- **Gram-negative / gram-positive** are lower-case `gram` mid-sentence, as
  printed; **Gram stain** (the procedure) is capitalized. Copy the source's
  case per occurrence.
- **Footnotes** become inline parenthetical citations (core §2) with author
  names, initials, title, and journal verbatim ("E.O. List, D.E.
  Berryman", not "List, Berryman") *(chapter 12)*.

## Media

Biology's media section applies verbatim, with `--book microbiology`:

```sh
npm run source:media -- --book microbiology --chapter 1 --dry-run
npm run source:media -- --book microbiology --chapter 1
```

- **Almost every source file is a JPEG**, diagrams included, so the
  manifest's `kind` guess ("JPEG = photo") is wrong for every drawn figure.
  Set `kind` explicitly on **every** `mediafigure` after looking at the
  image; a missing `kind` is a checker defect.
- A split figure (§1.3's six drawn shape icons above six micrographs) is
  a `diagram` under the life-sciences composite rule; record the call in
  the ledger *(pilot)*.
- Stems are the source file names (`OSC_Microbio_01_01_lumbar`,
  `Figure_10_02_01`); an `ArtConnect`/`ArtCon` stem is an Art Connection
  exercise's figure and belongs beside its item, not in the body. The dry
  run lists a chapter's stems with their modules.

## Exercises: the `## Practice` block

The core rule applies — one `### ` group per objective in callout order,
every item hinted, at this book's floor (`BOOK_RULES`):
**3 exercises per objective group and 8 per section, each group with at
least one auto-graded item, each thing asked once** (`distinctItems`). **These are
floors, not targets** *(pilot)*: a module with a deep exercise set uses
most of it.

Item sources, in preference order when a group runs thin: the section's
Multiple Choice, Fill in the Blank, True/False, and Matching items; its
Short Answer and Critical Thinking questions (under 2); a summary item
(biology's cloze or select-the-term forms, from the module's
`<section class="summary">`); a cloze or select-the-term item built
strictly from a BODY sentence of the same module; a term recall `textin`
from `## Key terms`. A group that lost its Short Answer to a Check Your
Understanding duplicate is refilled from this list rather than left at
three clozes wherever another source item can carry it.

Tables with a `summary` attribute follow the life-sciences table and
`sortbins` rules, including the recap-table exception (§17.1's "Overview
of Nonspecific Innate Immune Defenses", *chapters 17–18*).

## Verification

Everything in the life-sciences Verification section applies, and the
general rules this book's chapter runs learned — page-wide leaks, the
conversion rules, `sortbins` construction, `accept` lists, cloze shapes,
figure and notation rules — now live in `docs/subjects/life-sciences.md`,
where every later book reads them. What stays here is this book's own; the
narrative behind each rule is in `docs/history/microbiology.md`
("Verification lessons by chapter").

### Gates and readings

- `npm run verify:source-keys` reports an author-written model answer as
  `unkeyed` or `unmatched` (see 2), and a `multiplechoice` converted from
  an unkeyed question as `unkeyed` — all correct. A source solution that
  says only "Answer is open and will vary." counts as no key (`unkeyed`),
  and the check that a `textin` key is printed in the module folds regular
  plurals, markup-split ones included (`<term>plasmid</term>s`). It must
  never report a graded item keyed differently from the source without a
  `DISCLOSED_DEVIATIONS` entry and an erratum.
- **The checker's extra duties for this book:** the defined-term count
  (class-less `<term>`, de-duplicated) against the Key-terms bullets, and
  every rubric clause of an author-written model answer against the
  module, not the page.
- **Figure alt text is where this book's source defects concentrate**:
  open every image and table image rather than trusting its alt.

### Conversions and forms

- A multi-blank Fill in the Blank: blanks that form ONE answer follow the
  ordered/unordered rule (2); blanks that are independent facts or two
  classification axes grade the most central blank as the `textin` and
  print the source's other keyed words as given text, disclosed *(chapters
  7, 9)*; an unordered pair kept as one `textin` lists both orders WITHOUT
  "and" in `accept` *(chapter 9)*.
- A media-bearing Matching set is one `mediafigure` plus per-row
  `multiplechoice` items keyed by the source solution; the alt says where
  things sit, never what class they are *(chapter 9)*.
- A sequence-derivation exercise is a fully worked `selfcheck` (every
  sequence with its 5′/3′ ends, every amino acid, the mutation type); a
  worksheet `<table>` inside it is a list in the question, not a body
  table; it may read a sibling section's code table when the question says
  so *(chapters 10–11)*.
- A Clinical Focus or Micro Connection figure is an ordinary `mediafigure`
  at its position inside the callout *(chapter 8)*.
- A Check Your Understanding bullet whose graded form is a table's
  `sortbins` renders AT THE NOTE'S POSITION in the body, not in Practice,
  and lives there only — a copy in `## Practice` trips `distinctItems`
  *(chapters 17–18, 24)*.

### Key terms

- A name and its abbreviation marked as separate `<term>` elements are
  one bullet (`**name** (abbreviation) — …`); the prep script prints the
  abbreviation element as NO ENTRY — that is the merge, not a lookup
  failure — and drops `<sub>`/`<sup>`, so every copied definition is
  re-set in Unicode *(chapter 8)*.
- "No appendix entry" is claimed only after trying the singular, the
  plural, the hyphen/space variant, and the abbreviation *(chapters 7,
  10–11)*, and grepping the appendix (m58950) directly — the scaffold
  script can still miss a headword *(chapters 21–22)*. Run
  `python3 tools/source/microbiology-prep.py glossary <term>` for every
  term bold in the module's `## Summary` before calling it absent
  *(chapter 25)*.
- A module with no class-less `<term>` has no `## Key terms` heading; its
  fillers are summary/body clozes *(chapters 10–11)*.
- The footer's count of sentence-derived definitions comes from the tally,
  after those lookups *(chapters 10–11)*.

## Knowledge checks

Decided September 15, 2026: **one check per block of chapters, five pages.**
The collection is flat (no `units` list in the source map), so the
life-sciences edition's "one page per unit" rule cannot apply; each check
is a book-level page weighted immediately after its block's last chapter,
no unit label. The blocks follow the book's sequence of subjects;
per-chapter pages were rejected as too thin to be cumulative. Everything
else is the life-sciences edition unchanged: exactly three author-written
items per section with at least one auto-graded (`knowledgeCheck` in
`BOOK_RULES`), no hints, the duplicate-stem lint, subsection provenance in
the ledger note (`KC <block> <N.M> § <subsection>, m<module>`), and the
triple check with a blind solve on masked scratch blocks. Chapter weight =
chapter number + the number of blocks that end before it:

| Block | Chapters | Chapter weights | File | KC weight | Sections / items |
|---|---|---|---|---|---|
| 1 The Microbial World | 1–6 | 1–6 | `knowledge-check-01-06.md` | 7 | 26 / 78 |
| 2 Biochemistry, Metabolism, and Genetics | 7–12 | 8–13 | `knowledge-check-07-12.md` | 14 | 33 / 99 |
| 3 Control and Antimicrobial Drugs | 13–14 | 15–16 | `knowledge-check-13-14.md` | 17 | 11 / 33 |
| 4 Pathogenicity, Epidemiology, and Immunity | 15–20 | 18–23 | `knowledge-check-15-20.md` | 24 | 28 / 84 |
| 5 Infections of the Body Systems | 21–26 | 25–30 | `knowledge-check-21-26.md` | 31 | 29 / 87 |

A block's check lands with the +1 shift of every later chapter in the same
commit (`npm run validate` requires strictly sequential weights at the book
root). The Glossary appendix (m58950) supplies a recall item's definition;
a term whose m58950 entry is a known defect is not an anchor. The
within-check rules these blocks taught — no item printing another's key,
the grep re-run after every replacement round, no abbreviation cloze under
a spelled-out name, no word of the key in its stem, no open-list cloze —
are in the life-sciences edition's "Content rules".

## How a chapter is run

The book is complete; nothing here is run again. Its chapter kit was
retired on September 26, 2026 (the runs are in
`docs/history/microbiology.md`; the files are in git history), and
`docs/briefs/anatomy-physiology/` — the same process with Anatomy and
Physiology's content rules — is the one maintained. An edit to a finished
page follows `docs/re-review/README.md`.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] `## Key terms` derived from the module's defined terms in body order (distinct terms, one bullet each), definitions from the Glossary appendix, sentence-derived ones counted in the footer
- [ ] every unkeyed prose question either graded from ONE named module sentence, table, or figure (ledger note quotes it; the footer counts them) or a `selfcheck` whose model answer and rubric trace to sentences of the same module (the footer counts those too)
- [ ] every comparison table on the page has its sortbins (in the self-check that asks its contrast, or under the objective it serves); quantity/unit/step tables skipped
- [ ] every Check Your Understanding bullet a body item at its position; no Practice item re-asks one; a stem repeated by the source reworded to name its referent
- [ ] every Disease Profile table transcribed as Markdown; every other figure vendored with an explicit, image-checked `kind`
- [ ] Clinical Focus parts titled and chained with an absolute site-root link or plain text, never a dangling link, and never calling the previous part the beginning of the case
- [ ] every hint read against every other key on the page, forwards and backwards
- [ ] every single-word departure from the CNXML named in the footer AND logged as an erratum
- [ ] every source item the page did not use named in the footer with its reason
- [ ] `solve:emit`/`solve:compare` run and merged; `verify:ledger` green
- [ ] `build-map` rerun, the lock's `authoringStatus` updated, `npm run baseline:update` committed with the content
