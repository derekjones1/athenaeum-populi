# Microbiology — subject playbook

The subject-specific half of the authoring rules for OpenStax
**Microbiology**. `docs/authoring-playbook.md` is the shared core and
governs every book; `docs/subjects/biology.md` is the life-sciences
baseline this book inherits — its media pipeline, image-accessibility
policy, notation, `textin`/`selfcheck`/`sortbins` rules, reading-pass
verdicts, and the three-reading answer discipline all apply here
unchanged unless a rule below says otherwise. Read all three before
authoring a microbiology section. This document was written from the
September 5, 2026 scan of the pinned source and revised the same day by the
**pilot: chapter 1, *An Invisible World*, three sections, 57 interactive
items (43 in the Practice blocks, 14 body Check Your Understanding
self-checks) and 22 figures.** Every rule below marked *(pilot)* was learned by
authoring it; the run shape and the reusable briefs are in the session
memory, and everything the pilot forced went into this file, the briefs, and
a lint. Later chapters keep the same discipline: a correction that is not
folded back into a rule will be made again. **Chapter 2, *How We See the
Invisible World*, followed the same day** with the same three-pass shape
(four sections, 42 Practice items, 34 body self-checks, 45 figures, eleven
errata); every rule marked *(chapter 2)* below came from it.

## Source and authority

- **Pinned source:** `openstax/osbooks-microbiology` at the commit in
  `data/openstax/source-lock.json` (bundle `microbiology`, book
  `microbiology`, collection `microbiology`, `col12087`). It is a
  single-book upstream repository — one entry in `META-INF/books.xml`, no
  `-bundle` suffix — so the bundle key is plain `microbiology`, the whole
  `modules/` tree is checked out (`moduleScope: "bundle"`, 159 modules),
  and `npm run source:fetch -- --bundle microbiology` materializes it.
- **Visual authority:** `sources/microbiology_-_WEB.pdf` (generated
  2026-09-02, 1,221 pages). Its copyright page prints no revision number
  (only "original publication year 2016"), so the pin was chosen as the
  upstream head on the day of pinning, which the PDF postdates; the lock
  records `authoredBaselineConfidence: inferred-from-local-pdf-date`. If a
  section audit finds the PDF and the CNXML disagree, the CNXML is the
  transcription authority and the disagreement is an erratum candidate,
  exactly as for the other books.
- **Reading aid:** `python3 tools/source/cnxml-preview.py
  sources/openstax/osbooks-microbiology/modules/<id>/index.cnxml`. It
  prints every note with its class, but it bolds `no-emphasis` terms as if
  they were defined terms and drops figure cross-references to `()`;
  check the raw CNXML for both (see "Terms" below).
- **Structure:** the collection is flat — 26 chapters, no units — with 127
  numbered sections. Each chapter's first module is its introduction (one
  paragraph and a splash photo) and becomes the chapter `_index.md`, as in
  the other books. The preface (`m63247`) and the five appendices
  (`m58946`–`m58950`: physics and chemistry basics, mathematical basics,
  metabolic pathways, taxonomy of clinically relevant microorganisms, and
  the book-wide Glossary) are not mapped and not authored; the Glossary
  appendix is read as a *source of definitions* (below), never published
  as a page.
- **License:** the pinned repository's `LICENSE` and the PDF both say
  **CC BY-NC-SA 4.0**, the same as Biology 2e; openstax.org's catalog page
  lists this title as CC BY 4.0. The pinned source is the authority. Senior
  contributing authors for the footer: Nina Parker, Mark Schneegurt,
  Anh-Hue Thi Tu, Philip Lister, Brian M. Forster.

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
`## Chapters` — there are no unit headings, because the source has no
units, and none are to be invented. A chapter moves from the cover's
"Planned contents" list to `## Chapters` when its landing exists, which
happens when its first section lands, never earlier. The book was
`authoringStatus: scaffolded` in the lock until chapter 1 was complete
(September 5, 2026); it is `in-progress` now, and becomes `complete` when
the 127th section lands. Flipping that flag is a close-out step of its own:
the lock, the cover's `authoring_status` (which `npm run source:verify`,
under `npm test`, requires to equal the lock's word for word, and to be
absent once the lock says `complete`), `tools/source/openstax-source.test.mjs`
(three assertions), and the prose in `AGENTS.md`, `README.md`, and
`docs/source/openstax-source-workflow.md` all name the status and the
mapped-section count.
Chapter close-out pins the mapped-section count in the same six places the
biology playbook lists.

## What is different from Biology 2e

The scan compared the two books' CNXML element by element. Five things
differ enough to need their own rule; everything not listed here follows
`docs/subjects/biology.md`.

### 1. Terms and the `## Key terms` block

Biology has a `<glossary>` per module; Microbiology has none. Two things
stand in for it:

- **Defined terms in the body** are `<term id="term-NNNNN">` with no
  `class` (1,708 in the book, a dozen or so per section) and are printed bold.
  A `<term class="no-emphasis">` (4,687) is an index entry — a name, a
  place, a drug — and is *not* bold and *not* a key term. The preview
  bolds both; read the raw CNXML. A plural is split across two elements
  (`<term>microorganism</term><emphasis effect="bold">s</emphasis>`): write
  `**microorganisms**`, one bold run.
- **The Glossary appendix** (`m58950`) defines the book's terms
  alphabetically (1,656 entries). About 87% of the body's defined terms
  have an entry there.

`## Key terms` is therefore *derived*, in this order: one bullet per
defined term of the module, **in body order**, `- **term** — meaning.`,
with the meaning taken **verbatim from the Glossary appendix entry**. A
defined term with no appendix entry gets its meaning from the sentence
that defines it in the module (the appositive or "is a…" clause, trimmed
to a phrase, no new claim); the footer's `Changes:` clause says "key
terms compiled from the module's defined terms and the book's Glossary
appendix; N definitions taken from the defining sentence". Record each
term's provenance in the ledger note as `glossary` or `sentence`. The
glossary count is *not* a fidelity gate for this book the way it is for
biology — the defined-term count is: the checker counts `<term>` elements
without `no-emphasis` in the module and compares it with the page's Key
terms bullets.

**The parent derives this block before the wave, not each author** *(pilot)*.
A short script over the module and `m58950` emits the ordered bullet list
with each definition already looked up and its provenance marked, and the
authors edit rather than re-derive it. That is not only cheaper: it is
where four lookup traps live, and finding them once beats finding them per
section.

- **A term defined twice gets one bullet.** The count the checker compares
  is `<term>` ELEMENTS; the bullet count is DISTINCT terms. §1.3 defines
  *acellular* twice (19 elements, 18 bullets), and both numbers are right.
- **Four appendix entries lost their headword markup upstream** and read as
  a run-on tail of the previous entry — *taxonomy* (inside *tartar*),
  *microbiology* (inside *microbial ecology*), *parasitology* (inside
  *parasitism*), *protozoology* (inside *protozoans*); erratum 320. All
  four are chapter-1 terms, and every one is recoverable verbatim, so their
  provenance is `glossary`, not `sentence`. A naive headword scan reports
  them missing and sends an author off to write a sentence-derived
  definition the appendix already contains — the pilot's checker hit exactly
  that with its own ad hoc script. Any glossary tool this book uses must
  special-case them.
- **Match on the lemma, not the string.** Appendix headwords carry
  parentheticals (`protozoan (plural: protozoa)`, `bacteria (singular:
  bacterium)`) and the body's term is often the other number
  (`Protists`/`protists`, `phylogenies`/`phylogeny`). Strip the
  parenthetical, register the declared plural, and try the ordinary
  inflections before concluding the appendix has no entry.
- **Where the appendix has two entries whose sense differs, take the
  module's.** It defines both `archaea` (the organisms) and `Archaea` (the
  domain); §1.3's sentence is about the organisms, so the organism entry is
  the one that belongs on the page, and the choice is recorded in the
  ledger.
- **A `no-emphasis` term's appendix entry may define a different chapter's
  sense.** §1.1 prints `fermentation` as an index entry, and the appendix
  defines it as the metabolic pathway that regenerates NAD⁺ — the later
  chapters' meaning, not the food-preservation one §1.1 is about. A
  `no-emphasis` term is not a key term, so the entry is simply not used;
  the trap is an author reaching for it anyway to "complete" a block.

The `textin` recall items are built from these bullets exactly as
biology's are from the glossary.

### 2. The answer-key policy: what the source keys and what it does not

Biology keyed every exercise. Microbiology keys some sets and not others:

| Source set | CNXML | Keyed upstream | Component |
|---|---|---|---|
| Multiple Choice | `section.multiple-choice` | yes (443 of 444; the one unkeyed item is a micrograph question in m58931) | `multiplechoice`, source options in source order |
| Fill in the Blank | `section.fill-in-the-blank` | yes (279/279) | `textin` — the sentence with its blank as the prompt, the key as the answer, when the key is ≤4 words; a longer key becomes a `multiplechoice` whose options are the module's own terms |
| True/False | `section.true-false` | yes (43/43) | `multiplechoice` with exactly two options, `True` and `False` in that order, the hint naming the sentence the statement tests |
| Matching | `section.matching` | yes (15/15) | one `multiplechoice` per row — the description is the stem, the terms of the table are the options (the biology rule) |
| Short Answer | `section.short-answer` | **no** (2 of 226) | `selfcheck` with an **author-written** model answer |
| Critical Thinking | `section.critical-thinking` | **no** (0 of 159) | `selfcheck` with an **author-written** model answer |
| Check Your Understanding | `note.check-your-understanding` in the body (417, up to 10 per section) | **no** | body `selfcheck` at the note's position — see 3 |
| Art Connection | an `<exercise>` whose problem holds a figure (13) | mostly | `mediafigure` first, then the item, as biology's Visual Connections |

The graded items — multiple choice, fill-in, true/false, matching — are
keyed from the source and go through the three readings biology
prescribes (author keys from the CNXML; checker re-derives; the
orchestrator answers with `solve:emit` / `solve:compare` and
`verify:ledger --require-solved`). `verify:source-keys` confirms them
against the source exactly as it does for biology.

The prose items are where this book differs. **An author-written model
answer is allowed only under these conditions**, all of them:

- The model answer is assembled from sentences of the *same module* (the
  section being authored), lightly joined into complete sentences. It may
  not draw on another chapter, the appendices, or general knowledge. If
  the module does not answer the question — some Critical Thinking items
  ask the learner to speculate — the model answer says what the module
  gives and stops; a speculative question whose module gives nothing to
  answer it with is omitted, and the footer names it.
- The `===CHECKS===` rubric has 2–6 checkpoints, each a clause of the
  model answer in the model answer's own words (biology's `phraseCoverage`
  rule), so each checkpoint traces to a module sentence.
- The ledger note names the module passage(s) the answer came from
  (`KC`-style provenance: `§ <subsection title>`). The item's
  `verify:source-keys` status is **`unkeyed`** when it transcribes a source
  question (Short Answer, Critical Thinking) and **`unmatched`** when it has
  no source counterpart at all (a Check Your Understanding note is not an
  `<exercise>`); both are correct, neither is a defect. `unkeyed` is a
  status this book had to add *(pilot)*: `judgeSelfcheck` had assumed every
  matched exercise carries a `<solution>`, which is true of Biology and
  false of 224 of the 226 Short Answer and all 159 Critical Thinking
  questions here (the 417 Check Your Understanding boxes, 666 bullets, never
  reach `judgeSelfcheck` — they are not exercises). Measuring an
  author-written model answer against an empty solution scored 0 and read
  as `diverges`, so the very first microbiology page would have **failed**
  `npm test` at `verify:source-keys`. The fix is in
  `tools/verify/verify-source-keys.mjs` with a regression test. The
  footer's `Changes:` clause says how many model answers on the page are
  author-written from the module ("model answers for N short-answer and M
  critical-thinking questions are written from this section's text; the
  source prints no answer key for them").
- The checker verifies every rubric clause against the module (not the
  page) and reports a clause the module does not support as a defect. The
  orchestrator answers the question from the module with the model answer
  hidden and compares, as for every other item — a disagreement here is
  settled by the module's sentences, never by what a microbiologist would
  add.

Never turn an unkeyed prose question into a graded item by keying it
yourself: a short-answer question with a one-word answer is still a
`selfcheck`, because nothing upstream fixes the accept list. **A Critical
Thinking item printed with lettered options but no `<solution>`** *(chapter
2)* — §2.1's "In [the electromagnetic spectrum figure], which of the following
has the lowest energy?" — is the same case: it becomes a `selfcheck` whose
question names the figure by description and lists the options in prose, and
whose model answer is the module's own sentence about energy and wavelength.

Three rules the pilot added about which source items can be used at all:

- **An item whose options differ only in typography is not gradable here**
  *(pilot)*. §1.2's "Which of the following is a correct usage of binomial
  nomenclature?" lists `Homo Sapiens`, *homo sapiens*, *Homo sapiens*, and
  *Homo Sapiens*: all three distractors differ from the key only in
  capitalization, italicization, or both, so every option has the same
  spoken name and a screen-reader user cannot answer it at all. The item is
  correct as the print book prints it, so it is not an erratum — it is
  omitted, the footer says why, and the fact is asked from the module's own
  sentences instead. The dismissal is recorded in the errata file's
  "Reviewed and *not* errata" list so a later pass does not re-investigate
  the gap.
- **A two-blank Fill in the Blank splits on whether the order is the
  point** *(pilot)*. "Haeckel proposed adding the kingdoms ___ and ___"
  (keyed *Protista and Monera*) is unordered: it stays a `textin` whose
  `accept` list carries both orders with and without a comma — grading drops
  punctuation, so `Protista Monera` covers the comma spelling. "an
  organism's scientific name includes its ___ and ___" (keyed *genus,
  species*) is ordered — genus first is the convention being taught — and a
  single text field cannot mark a reversed pair wrong without also rejecting
  whatever punctuation the learner chose, so it becomes a `multiplechoice`
  among rank pairs the module itself names. Say which rule applied in the
  footer; the two look identical and a reader will otherwise read the
  difference as arbitrary.
- **A source item the page does not use is named in the footer**, with the
  reason, and in the ledger. An unexplained gap between the source's
  exercise set and the Practice block is indistinguishable from an
  oversight.

### 3. Check Your Understanding and the Clinical Focus questions

Biology's in-body items were Visual Connections wrapping a figure.
Microbiology's are `note.check-your-understanding` boxes — a bulleted list
of one to three questions closing each subsection — and the question(s)
that end most Clinical Focus parts. Neither has a source answer.

- A Check Your Understanding box becomes one body `selfcheck` per bullet,
  at the note's position (the end of its subsection), under the policy in
  2. The house lead-in is the source's own title, `**Check Your
  Understanding**`, as a bold line above the first selfcheck of the box.
- **"Preceding" means anywhere earlier in the same module, not only the
  enclosing subsection** *(pilot)*. §1.1's first bullet asks about fermented
  foods from a note that sits at the end of the disease-containment
  subsection, and §1.2's Bergey's-manuals box asks about binomial
  nomenclature, which the module defines in the previous heading. A literal
  reading of "the preceding subsection" leaves both unanswerable from their
  own source. The boundary that matters is the MODULE: never another
  chapter, never an appendix, never general microbiology knowledge.
- **A repeated stem is reworded to name its own referent** *(pilot)*.
  §1.3 prints the identical bullet "Name some of the defining
  characteristics of each type." twice, for two different comparisons. Two
  identical stems trip the `distinctItems` lint, and neither stands alone as
  an accessible name once the print position that disambiguated them is
  gone: write "…of bacteria and archaea" and "…of protists and fungi",
  adding nothing but the referent, and say so in the footer.
- **The 2–3 consecutive-question limit applies to a Check Your Understanding
  box too** *(chapter 2)*: the lint counts body self-checks, not only Practice
  sets. §2.4's first box prints five bullets; render a box of more than three
  as two labelled `**Check Your Understanding**` runs of three and two (or
  three and three), content unchanged, and say so in the footer. Boxes of up
  to ten bullets exist later in the book.
- These body self-checks count under the book's `distinctItems` rule
  (`BOOK_RULES`): a Practice item may not re-ask what a body selfcheck
  asked. Where a Short Answer question in the end matter repeats a Check
  Your Understanding question (it often does, reworded), keep the body
  one and use the Short Answer slot for something else — a different
  source item, a summary item, or a term recall.
- The questions that end a Clinical Focus part stay inside the callout as
  plain bulleted prose, unanswered, exactly as the source prints them.
  They are case questions the next part resolves, and making a self-check
  of a question whose answer is in a later section would key it from the
  wrong module.

### 4. Feature boxes

| CNXML `<note class="microbiology …">` | Callout | Notes |
|---|---|---|
| `clinical-focus` | `{{</* callout type="info" */>}}` **Clinical Focus.** *Part N* / *Resolution* | The box's `<title>` (Part 1, Part 2, …, Resolution) follows the bold name in italics, as biology's feature titles do. One case runs through a whole chapter, one part per section; the source's closing "Jump to the next Clinical Focus box" link is replaced by a plain sentence naming where the case continues ("The case continues in [A Systematic Approach](/life-health-sciences/microbiology/01-an-invisible-world/02-a-systematic-approach/).") — an **absolute site-root Markdown link**, not a Hugo `relref` (the corpus contains none, and `check:build` validates routes), left unlinked when the target page does not exist yet. Name each part for what it is: the source's "go back to the previous box" link points at the PREVIOUS part, which is not the same as where the case BEGAN once a case runs past two sections. Transcribe the box in the source's own document order — the closing question can precede the box's figure. |
| `micro-connection` | **Micro Connection.** *Title* | |
| `eye-on-ethics` | **Eye on Ethics.** *Title* | |
| `case-in-point` | **Case in Point.** *Title* | |
| `disease-profile` | **Disease Profile.** *Title* | See below — its summary table is an image upstream. |
| `link-to-learning` | **Link to Learning** | Biology's rule: keep the URL, describe the destination; `check:external-links` before close-out. Keep the source's own sentence boundaries — moving the anchor onto a different phrase and merging two sentences is a heavier rewrite than the rule allows. |
| `check-your-understanding` | *(not a callout)* | Body self-checks — see 3. |

**Disease Profile tables.** Each of the 25 Disease Profile boxes ends with a
`<figure>` whose image is a rendered table (disease, pathogen, signs and
symptoms, transmission, drugs) and whose alt already transcribes the
table cell by cell. Content may not be carried by an image alone, and a
1,000-character alt of comma-separated cells is unreadable, so: **transcribe
the table as a Markdown table** (from the alt, checked against the PDF
page) inside the callout, and **do not vendor the image**. The footer's
`Changes:` clause says "the Disease Profile summary table is transcribed
from the source's table image". This is the one figure class this book
drops; every other `<figure>` is vendored as in biology. (Decision taken
at the scan; if the pilot finds a Disease Profile image that carries more
than its alt — a micrograph beside the table — vendor that image too.)

**Summary tables printed as images** *(chapter 2)*. Chapter 2 carries five
`<figure>`s that are rendered tables with a column of sample micrographs
(§2.3's light, electron, and scanning-probe microscope tables; §2.4's simple
and differential stain tables), and later chapters have more. The Disease
Profile rule applies with one difference: the micrograph column is content
the table cannot carry, so **the image is kept**. Transcribe the table as a
Markdown table **from the image, checked against the PDF page** — never from
the alt, which in §2.3 omitted a whole row (Two-photon) and gave its example
to the row above, and in §2.4 misspelled three dye names (errata 334, 338) —
and put the vendored figure immediately after it as a `mediafigure`,
`kind="photo"`, with an alt describing the micrograph column only and the
source's credit caption (a figure that prints no caption at all, like
§2.3's scanning-probe table, gets a short author-written one naming what the
panel shows). **Place the table at the sentence that first refers to it**
when the source floats the figure later for page fit: §2.4 says "the table
below provides more detail" four subsections before the print position, and
a scrolling page has no reason to carry the pointer that far. The footer
says the tables are transcribed from the image and the images kept for
their micrographs. A figure that a feature box references mid-box (§2.2's
Micro Connection cites its figure in the first paragraph and prints it after
the third) stays at its document-order position.

The other three feature-box images (splash photos, Art Connection figures,
ordinary figures) are ordinary `mediafigure`s.

**Art Connection, in detail** *(pilot)*. The shape is not biology's Visual
Connection: it is an `<exercise>` whose `<problem>` holds a bare inline
`<media>`, never a `<figure>`, so it has an alt but **no caption and no
number**. Render it as a `mediafigure` immediately followed by its item,
inside the Practice group of the objective it serves — that is where its
parent `<exercise>` lives — and never in the body. Three consequences:

- **You write the caption**, because the source prints none. Describe what
  the picture *shows*; never what it is *missing*, when the missing thing is
  the graded answer. §1.3's Art Connection is the relative-sizes chart with
  four objects removed and its item asks where those four belong, so
  "redrawn with four of its objects removed" is right and naming them is
  not.
- **The alt is scoped differently from the same artwork's alt elsewhere.**
  Chapter 1 carries the full sizes chart and its cropped Art Connection
  twin, each with its own source alt at a different level of detail; they
  are easy to transpose. Read the one attached to the element you are
  rendering.
- The item itself is unkeyed (Critical Thinking), so its model answer
  follows the policy in "What is different" 2.

### 5. Notation and the equations

The book is prose with a little arithmetic. Biology's notation rules apply
(Unicode formulas and ions in prose, `$…$` only where the source prints an
equation), plus:

- **Magnification** is `40×` in prose (the multiplication sign, no space);
  the source's `<equation>` blocks — 2.3 (total magnification), 7.1–7.2
  and 8.4 (biochemistry and fermentation), and 9.1–9.2 (the growth
  arithmetic: generations, generation time) — are equations and go in
  `$…$`; a reaction among them is Unicode text under biology's rule. The
  two appendix modules with equations are not authored.
- **Gram-negative / gram-positive** are lower-case `gram` mid-sentence, as
  the source prints them; **Gram stain** (the procedure, after the person)
  is capitalized. Copy the source's case per occurrence; do not normalize.
- **Organism names** in italics as printed (`*Escherichia coli*`, then
  `*E. coli*`); the source italicizes genus and species, never a family or
  a higher rank. A textin keyed to a species name lists the abbreviated
  form in `accept` (`E. coli` for a keyed `Escherichia coli`), and the
  four-word cap admits any binomial.
- **The micrometre prefix is the micro sign `µ` (U+00B5)**, never the Greek
  small letter mu (U+03BC) *(pilot)*. The glyphs are identical and the text
  grader folds them, but Pagefind indexes them apart, so a reader searching
  one spelling misses every page written with the other — and this book's
  own source modules use both. A lint rejects a mu before a Latin letter; a
  bare Greek mu is untouched.
- **A negative exponent in a `mediafigure` alt or longdesc is Unicode**
  (`10⁻¹⁸ m`) *(chapter 2)*, on the same terms as the positive one: an
  attribute cannot hold KaTeX. The superscript-minus lint exempted figure
  specs but not alt/longdesc until §2.1's electromagnetic-spectrum
  description needed six exponents and its author spelled them out as words;
  the lint and the biology playbook now agree.
- **Whitespace lost around a cross-reference is not a disclosed typo**
  *(chapter 2)*. §2.1's CNXML reads `(<link …/>).The lowest frequency`, and
  the print book reproduces the missing space. The page rewrites that
  boundary anyway when it replaces the numbered reference with a describing
  phrase, so nothing is disclosed in the footer; the defect is still logged
  as an erratum (332) because it prints.
- **Footnotes become inline parenthetical citations** *(pilot)*, placed
  after the sentence they support, with the bare access URLs dropped and
  DOIs kept. This book footnotes heavily where Biology barely did — §1.1
  alone carries eight — and neither playbook had a rule, so the pilot's
  author had to find the convention by grepping the biology corpus.
- **Cross-references.** `<link target-id="…">` to a figure or table in the
  same module is a describing phrase ("the micrograph above"), as in
  biology; a `<link document="mNNNNN">` to another module is an absolute
  site-root Markdown link to that section page when it exists and plain text
  naming the section when it does not. The preview prints both as `()` —
  read the raw CNXML.
- **A one-word typo correction is disclosed in the footer and the errata,
  not with an inline source note** *(pilot)*. The core playbook's "visible
  source note beside the correction" is for a corrected claim, value, or
  answer; a misspelling interrupted mid-sentence ("*Vibrio cholerae* —
  printed 'Vibrio cholera' in the source") costs the reader more than it
  tells them, and Biology set the lighter precedent four times. What is not
  optional is the disclosure: every single-word departure from the CNXML is
  named in the footer's `Changes:` clause AND logged as an erratum. Chapter 1
  shipped one that was neither until a checker diffed the page against the
  module word by word.

## Media

Biology's media section applies verbatim, with `--book microbiology`:

```sh
npm run source:media -- --book microbiology --chapter 1 --dry-run
npm run source:media -- --book microbiology --chapter 1
```

Two things the scan found that change how a figure is authored:

- **Almost every source file is a JPEG** (834 of 849 image references),
  diagrams included, so the manifest's `kind` guess ("JPEG = photo") is
  wrong for every drawn figure in the book. `kind` is set explicitly on
  **every** `mediafigure` after looking at the image; a checker treats a
  figure with no `kind` as a defect. The guess was wrong for 9 of chapter
  1's 22 figures, in both directions (the chapter's one PNG is a pair of
  photographs).
- **Composite figures: the line is drawn art versus annotation** *(pilot)*.
  This book is full of process figures, so decide once and apply it: a
  figure is a `diagram` when any panel is genuinely *drawn* — an anatomical
  schematic, a historical map, a morphology icon, a labelled chart — and a
  `photo` when every panel is a photograph and the only added ink is
  annotation (arrows between panels, a baked-in caption line). §1.1's
  lumbar-puncture and Cloaca Maxima figures are diagrams by that test even
  though each also carries a photo panel; its yeast→dough→loaf figure is a
  photo despite its arrows and its printed caption line. A genuinely split
  figure (§1.3's bacterial shapes: six drawn icons above six micrographs) is
  a `diagram`, because the drawn half is what the caption teaches — record
  the call in the ledger so a later checker sees it was made, not missed.
- Stems are the source file names (`OSC_Microbio_01_01_lumbar`,
  `OSC_Microbio_01_03_ArtConnect_img`, and in the later chapters
  `Figure_10_02_01`); an `ArtConnect`/`ArtCon` stem is the figure of an
  Art Connection exercise and belongs beside its item, not in the body.
  Chapter 1 has 23 figures over 4 modules; the dry run above lists a
  chapter's stems with their modules.

## Exercises: the `## Practice` block

The core rule applies — one `### ` group per objective in callout order,
every item hinted, at this book's floor, which mirrors biology's in
`BOOK_RULES`: **3 exercises per objective group and 8 per section, each
group with at least one auto-graded item, each thing asked once**
(`distinctItems`). **These are floors, not targets** *(pilot)*: a module with a deep exercise
set uses most of it. Chapter 1's three sections carry 13, 14, and 16
Practice items against a floor of 9, 8, and 12.

The sources for items, in preference order when a group
runs thin: the section's own Multiple Choice, Fill in the Blank,
True/False, and Matching items; its Short Answer and Critical Thinking
questions as self-checks under the policy in "What is different" 2; a
summary item (biology's cloze or select-the-term forms, from the module's
`<section class="summary">`); a cloze or select-the-term item built
strictly from a BODY sentence of the same module (biology's rule, and the
one §1.3 needed once its duplicate Short Answer was dropped); a term recall
`textin` from `## Key terms`.

Dropping a Short Answer that a Check Your Understanding box already asks
costs the objective its one substantive item, so the group is refilled from
the list above rather than left at three clozes wherever another source item
can carry it.
The 117 CALS tables with a `summary` attribute are real tables and follow
biology's table and `sortbins` rules.

**An `accept` member that normalizes to the answer is rejected** *(chapter
2)*: `verify-section` refuses `acid fast` beside `answer="acid-fast"`, `the
Gram stain` beside `Gram stain`, `a simple microscope` beside `simple
microscope`, and bare `400` or `400 X` beside `400×` with `400x|400 x`,
because grading already folds hyphens, articles, case, and punctuation. List
only spellings the grader would otherwise miss — an irregular plural
(`bacteria`, `flagella`; a regular `s`/`es` plural is folded by the grader
and rejected by the lint), an abbreviation the module itself uses (`AFM`),
an abbreviated binomial — and run each
through the real grader (`assets/js/lib/text/check-text.mjs`) rather than
guessing. Three of the four chapter-2 authors lost a verify round to this.

## Verification

Everything in biology's Verification section, plus:

- `npm run verify:source-keys` reports an author-written model answer as
  `unkeyed` (its question transcribes a source exercise the source does not
  key) or `unmatched` (no source exercise at all). Both are correct. What it
  must never report for this book is a graded item (`multiplechoice`,
  `textin`, `sortbins`) keyed differently from the source without a
  `DISCLOSED_DEVIATIONS` entry and an erratum. Chapter 1 reads as 15
  `unkeyed`, 14 `unmatched`, 0 failures.
- **Three readings, and the third is the orchestrator's own.** The author
  keys from the CNXML; one Sonnet checker per section re-derives every key,
  answers every graded item with the key covered, and reads every figure
  against its image; then the parent runs `npm run solve:emit`, answers
  every multiplechoice and textin **in writing with the keys hidden**, and
  runs `npm run solve:compare`. `verify:ledger --require-solved` makes that
  third reading a condition of green. Chapter 1: 29 items, 29 agreed, 0
  disagreements — and the two readings before it still found four real
  defects the gates cannot see, so none of the three is redundant.
- The checker's brief carries duties biology's did not: the defined-term
  count (raw `<term>` without `no-emphasis`, de-duplicated) against the Key
  terms bullets; every rubric clause of every author-written model answer
  against the module; `kind` present and right on every figure; and a
  word-by-word diff of the page against the CNXML for undisclosed one-word
  corrections.
- **Sibling-hint leaks are the recurring defect of this book** *(pilot)*.
  Three of the chapter's four real item defects were one item's hint
  printing another item's answer, and no lint can see them. Microbiology's
  Practice groups are short and thematically tight — every item in §1.1's
  first group orbits the word *fermentation* — so when a group's central
  vocabulary word is also a graded `textin` answer, read every other item's
  hint in that group for the literal word, not just for synonyms. Read
  backwards too: a hint that names an EARLIER item's answer is still a leak.
  **A filler item's stem leaks as readily as a hint** *(chapter 2)*: §2.2's
  author-built "made using simple microscopes he built himself" stem handed
  over the term-recall `textin` keyed *simple microscope* two groups later,
  and §2.3's 400× hint ("multiply by the power of the objective lens") was
  the exact key of a later select-the-term item until its author caught it.
  Grep every stem and hint on the page for every `textin` key and every
  `multiplechoice` key, across groups, not only within one.
- **An author-written caption or alt must not restate a paired item's
  answer set.** This is the Art Connection failure mode above, and it is new
  with this book, because its Art Connection media carry no source caption.
- Errata go to `docs/openstax-errata.md` without asking, as always. The
  pilot logged nine (320–328): four merged glossary headwords, a species
  name the book spells correctly elsewhere, a journal volume, a glossary
  "cell wells", and four figure-alt defects — two misspelled taxon labels,
  a label that names the wrong part of the drawing, and a branch placed on
  the wrong side of a tree. Chapter 2 logged eleven (330–340), nine of them
  in figure alts: two rays given the same name, a photograph described that
  is not in the figure, a table row dropped and its example moved to the row
  above, and five misspellings; the other two are a caption's "used to
  visualized" and a Link to Learning that prints its title twice. **Figure
  alt text is where this book's source defects concentrate**; budget the
  checker's time accordingly, and open every table image rather than
  trusting its alt.

## Knowledge checks

Not decided. Biology's checks are one page per unit because its collection
has units; Microbiology's is flat, so the life-sciences edition's placement
rule does not apply as written. The candidates are one check per chapter
(the math edition's shape, 26 pages) or one per natural block of chapters
(for example 1–6 the microbial world, 7–12 biochemistry, metabolism, and
genetics, 13–14 control and drugs, 15–20 pathogenicity, epidemiology, and
immunity, 21–26 the body systems — a grouping the source does not print
and would have to be justified on the cover). Decide before the first
check is authored, and record the decision and the weight table here and
in `docs/knowledge-check-playbook-life-sciences.md`.

## How a chapter is run *(pilot, chapter 1)*

Three passes, in this order, and none of them optional:

1. **Author** — one Sonnet author per section, each writing one page, all in
   parallel. They share one brief file in the scratchpad rather than three
   copies of it, so every author is held to the same rules and a correction
   to the brief reaches all of them.
2. **Check** — one Sonnet checker per section, briefed to trust nothing:
   re-derive every key, answer every graded item with the key covered, read
   every figure against its own image and its PDF page, count the defined
   terms, and trace every rubric clause to the module.
3. **Solve** — the parent answers every `multiplechoice` and `textin` in
   writing with the keys hidden (`solve:emit` → `solve:compare`), settles
   any disagreement against the CNXML, and merges the ledger records last,
   because every hash depends on the final text.

**Parent prep before the wave**, all of it work an author would otherwise
redo three times: vendor the chapter's media; render its PDF pages; create
the chapter landing with `authoring_status: scaffolded`; and pre-extract,
per section, (a) the module's objectives, defined terms, summary, Check
Your Understanding questions, every exercise with its options and its source
key or an explicit "source prints no key", and every figure with its stem,
alt, and caption, and (b) the `## Key terms` scaffold with every definition
already looked up and its provenance marked. The extraction is also what
lets the parent check an author's "the module has no X" claim in seconds.

**Parent duties after**: apply every fix itself (no fix agents), verify each
checker finding against the image or the raw CNXML before acting on it — a
checker finding is a hypothesis — log the errata, and run the gates.

## Done checklist (in addition to the core and biology checklists)

- [ ] `## Key terms` derived from the module's defined terms in body order (distinct terms, one bullet each), definitions from the Glossary appendix, sentence-derived ones counted in the footer
- [ ] every unkeyed prose question a `selfcheck` whose model answer and rubric trace to sentences of the same module; the footer states how many
- [ ] every Check Your Understanding bullet a body selfcheck at its position; no Practice item re-asks one; a stem repeated by the source reworded to name its referent
- [ ] every Disease Profile table transcribed as Markdown; every other figure vendored with an explicit, image-checked `kind`
- [ ] Clinical Focus parts titled and chained with an absolute site-root link or plain text, never a dangling link, and never calling the previous part the beginning of the case
- [ ] every hint read against every other key on the page, forwards and backwards
- [ ] every single-word departure from the CNXML named in the footer AND logged as an erratum
- [ ] every source item the page did not use named in the footer with its reason
- [ ] `solve:emit`/`solve:compare` run and merged; `verify:ledger` green
- [ ] `build-map` rerun, the lock's `authoringStatus` and the mapped-section counts updated wherever they are pinned, `npm run baseline:update` committed with the content
