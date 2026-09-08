# Microbiology — subject playbook

The subject-specific half of the authoring rules for OpenStax
**Microbiology**. `docs/authoring-playbook.md` is the shared core and
governs every book; `docs/subjects/life-sciences.md` is the life-sciences
baseline this book inherits — its media pipeline, image-accessibility
policy, notation, `textin`/`selfcheck`/`sortbins` rules, the answer-form
rules for unkeyed questions, reading-pass verdicts, and the three-reading
answer discipline all apply here unchanged unless a rule below says
otherwise (`docs/subjects/biology.md` is Biology 2e's own delta file and
is not required reading here). Read all three before
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
errata); every rule marked *(chapter 2)* below came from it. **Chapter 3,
*The Cell*, followed on September 6** (four sections, 60 Practice items, 21
body self-checks, 60 figures, fourteen errata); rules marked *(chapter 3)*
came from it. **Chapters 5, *The Eukaryotes of Microbiology*, and 6,
*Acellular Pathogens*, followed on September 7** in one nine-section wave
(153 graded items, 23 self-checks, 89 figures, errata 458–492, including
seven claim corrections from the prose claim pass); rules marked *(chapters
5–6)* came from it. **Chapter 7, *Microbial Biochemistry*, followed the same
day** (five sections, 58 graded items, 12 self-checks, 32 figures, errata
493–503, no claim corrections — the claim pass found none); rules marked
*(chapter 7)* came from it **Chapter 8, *Microbial Metabolism*, followed the
same day** (seven sections, 100 graded items, 23 self-checks, 26 figures,
errata 504–525, two claim corrections settled by the book's own text);
rules marked *(chapter 8)* came from it. **Chapter 9, *Microbial Growth*,
followed on September 8** (six sections, 88 graded items, 25 self-checks,
33 figures, errata 526–534, two claim corrections settled by the book's own
text); rules marked *(chapter 9)* came from it.

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
the 127th section lands. Flipping that flag is a close-out step of its
own, and the *status* word is pinned in the same six places the
life-sciences playbook lists: the lock's `authoringStatus`, the cover's
`authoring_status` frontmatter (which `npm run source:verify` requires to
equal the lock's word for word, and to be absent once the lock says
`complete`), the three assertions in
`tools/source/openstax-source.test.mjs`, and the status prose in
`AGENTS.md`, `README.md`, and `docs/source/openstax-source-workflow.md`.
`npm run source:verify` is not part of `npm test`; it runs at close-out
and in CI (CI fetches the pinned sources first and then runs it). The
mapped-section *count* is stated once, in the workflow doc; this file says
"the committed section map" rather than restating the number.

## What is different from Biology 2e

The scan compared the two books' CNXML element by element. Five things
differ enough to need their own rule; everything not listed here follows
`docs/subjects/life-sciences.md` (the baseline Biology 2e was written
against, so "biology's rule" below means the baseline's).

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
- **The appendix's ONLY entry may define a different sense** *(chapter 3)*.
  §3.3 defines *basal body* as the bacterial flagellar motor; the appendix's
  one *basal body* entry is the eukaryotic nine-triplet structure. §3.4's
  *flagella* meets the same wall (the appendix entry is the prokaryotic
  filament). Treat it as no entry: the meaning comes from the module's
  defining sentence, counted in the footer as sentence-derived, with the
  reason in the ledger. The reverse case also exists: *morphology* has no
  entry under its own headword but *cell morphology* is the module's sense,
  so the nearest-headword entry is used and the choice recorded. A headword
  that differs from the body's term only by number or by a parenthetical
  abbreviation (`ribosomes` ↔ `ribosome`, `nucleoid-associated proteins
  (NAPs)` ↔ `nucleoid-associated protein (NAP)`) is the same entry.
- **The bold term is lower-cased unless it is a proper noun** — even when
  its defining occurrence opens a sentence *(chapter 3)*. Three §3.3 bullets
  and one §3.4 bullet shipped capitalized (*Volutin*, *Flagella*,
  *Polyhydroxybutyrate (PHB)*, *Receptor-mediated endocytosis*) until the
  checkers read them against the appendix headwords.
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
| Matching | `section.matching` | yes (15/15) | one `multiplechoice` per row — the row's DESCRIPTION is the stem and the table's TERMS (all of them, in table order) are the options, keyed by the source letter resolved to the term; the key position then varies by itself *(chapter 7: §7.2's four polysaccharides)* |
| Short Answer | `section.short-answer` | **no** (2 of 226) | a graded item when ONE module sentence, table, or figure fixes the answer (biology's "Unkeyed source questions" rule); otherwise `selfcheck` with an **author-written** model answer |
| Critical Thinking | `section.critical-thinking` | **no** (0 of 159) | the same rule: graded when the module fixes it, `selfcheck` when it asks for a paragraph or a speculation |
| Check Your Understanding | `note.check-your-understanding` in the body (417, up to 10 per section) | **no** | a body item at the note's position — graded (`multiplechoice`, `textin`, `sortbins`) when the module fixes the answer, else `selfcheck` — see 3 |
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

**Which unkeyed questions are graded anyway** *(retrofit, Sep 6 2026;
this replaces the pilot's "never key a question the source does not key")*.
The life-sciences playbook's "Unkeyed source questions: graded when the module fixes the
answer" rule is the life-sciences rule and this book is where it bites:
an unkeyed Short Answer, Critical Thinking, or Check Your Understanding
question becomes a `multiplechoice`, `textin`, or `sortbins` when ONE
sentence, table, or lettered figure of the module fixes its whole answer,
and stays a `selfcheck` when the answer is a paragraph, a speculation, a
long list, or an inference. Chapters 1–3 were retrofitted under it on
Sep 6 2026 — 115 self-checks (69 in the body) became 55, with 93
`multiplechoice`, 45 `textin`, and 22 `sortbins` (three of them built
from tables that had none) — taking the book from 54% to 26% self-check
by item count, the question count unchanged except for the three table
items and one merged pair of Check Your Understanding bullets; a new
chapter applies the rule as it is authored, and its checker applies the
"What the first retrofit's checkers caught" list in the life-sciences playbook. The pilot's example
still holds in the other direction: §2.1's lettered Critical Thinking item
("which of the following has the lowest energy?") is exactly the
"question offers its own alternatives" form — a `multiplechoice` over the
four printed alternatives, keyed by the module's energy–wavelength
sentence. Nothing upstream fixes an accept list, so a converted `textin`
is used only for a defined term or a name the sentence prints verbatim;
everything else that converts is a `multiplechoice` or a `sortbins`, whose
options and bins the module prints.

**A source question may use a word the module's body never uses**
*(chapter 3)*. §3.1's Check Your Understanding bullet asks "What was the
control group in Pasteur's experiment and what did it show?" and the module
never says "control". The question is transcribed verbatim (it is the
source's), and identifying WHICH condition the question names — the flask
whose swan neck stayed intact — is answering the question, not adding a
claim; everything after that identification is module sentences. Record the
adjudication in the ledger. What is still forbidden is importing a fact the
module lacks to make the identification.

**A "select all that apply" Multiple Choice becomes a `sortbins`** *(chapter
3)*: §3.3's "Which of the following are important for adherence to
surfaces?" is keyed C, D upstream, and the single-answer `multiplechoice`
cannot hold a two-answer key. The bins are "applies" / "does not apply" in
the stem's own words, every source option is a label, and the footer says
so.

**A Short Answer that the body's Check Your Understanding already asks is
dropped even when the group does not need refilling** *(chapter 3)*: §3.4's
"Name at least two ways that prokaryotic flagella are different from
eukaryotic flagella" reworded the Flagella and Cilia box's bullet and shipped
with the same three rubric clauses until the checker read the two side by
side. The `distinctItems` lint is exact-match and sees none of this; the
checker's enumeration is the gate.

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

**An Art Connection may be a Short Answer, and may carry a `<figure>`**
*(chapter 3)*. §3.3's "Label the parts of the prokaryotic cell" Art
Connection sits in the module's Short Answer set, not Critical Thinking, and
its second one (`ExStaph_img`) is a real `<figure>` with a credit-only
caption. The rendering is the same — `mediafigure` then item, in the
objective's Practice group, author-written descriptive caption with the
source credit appended — and the alt must not name the chemical identity of
a lettered part ("a tangled loop of DNA is marked C" hands over C = nucleoid;
"a long tangled loop is marked C" does not).

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
  and 8.4 (biochemistry and fermentation), and 9.1 (the growth
  arithmetic: N_n = N_0 · 2^n) — are equations and go in `$…$`; a
  reaction among them (9.2's three ROS reactions) is Unicode text under
  biology's rule. **A numeric exponent in PROSE or a shortcode parameter
  is `$…$` too** (`$2^{48}$`, `$2.8 \times 10^{14}$`) — the lint blocks a
  digit followed by a superscript digit everywhere except `alt` and
  `longdesc`, where Unicode (`10⁻⁶`) is the form *(chapter 9)*. A letter
  exponent (`2ⁿ`) stays Unicode. The two appendix modules with equations
  are not authored.
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
  the lint and the life-sciences playbook now agree.
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
- **Write the alt from the rendering the site serves, not from the CNXML
  alt's claims** *(chapter 3)*. §3.4's endomembrane-system figure carries
  nuclear labels in its source alt (nucleolus, chromatin, nuclear pores,
  lamina) that the artwork does not print; an author who starts from the
  source alt inherits them. Chapter 3's alt errata (350–351, 356–359)
  include a thousand-fold unit error ("25 µm" for a 25-nm microtubule), a
  mislabelled tonicity panel, one nucleus where the image labels two, and a
  dozen misspellings — open every image. A longdesc is owed wherever a drawn
  panel carries labels the alt and caption do not name (§3.4's flagellum
  panel has a dozen); a checker counts the labels.
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
questions — graded where the module fixes the answer, self-checks
otherwise, under the policy in "What is different" 2; a
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
  key) or `unmatched` (no source exercise at all), and a `multiplechoice`
  converted from an unkeyed Short Answer or Critical Thinking question as
  `unkeyed` too. All are correct. What it
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
- **A True/False hint must not assert the tested fact** *(chapter 3)*:
  "the size class of ribosome that both mitochondria and prokaryotic cells
  share" is the verdict. Point at what to compare, never at the result.
  **A distractor can leak the next item's key** *(chapter 3)*: §3.4 printed
  "cytokinesis" as a wrong option directly above the `textin` keyed
  *cytokinesis*. Grep the option lists too.
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
  trusting its alt. Chapter 3 logged fourteen (346–359), eleven of them alt
  defects and one a CALS table's `summary` attribute — transcribe a table
  from its cells, never from `summary`.
- **A one-item-per-bin labelling figure cannot be a `sortbins`** *(chapters
  5–6)*. The grader's interleave rule needs more same-bin runs than bins, so
  a bijective assignment (four letters, four parts) always throws "items are
  grouped by bin". §6.1's T4 bacteriophage labelling item became four
  single-letter `multiplechoice` items whose options are the module's own
  part names; §6.3's four-row cytopathic-effects table earns no sortbins for
  the same reason.
- **The plural fold is one-directional** *(chapters 5–6)*: grading folds a
  learner's regular plural onto a singular key, never a learner's singular
  onto a plural key. A `textin` keyed to a plural (`muscles`, `mosquitoes`,
  `cytopathic effects`) lists the singular in `accept`; a Greek/Latin plural
  key (`conidia`, `modified mitochondria`) lists its `-um`/`-on` singular;
  and a key with a prefix (`antibacterial`) lists the hyphenated spelling,
  because the grader folds hyphen-versus-space only at an existing boundary.
- **A `## Key terms` bullet or a figure caption can leak a key** *(chapters
  5–6)*: a term-recall `textin` keyed to a defined term always sits below
  the bullet that defines it (accepted, by design), but a body item placed
  directly under a figure whose source caption names its answer (§6.2's
  growth-curve "burst") reverts to a `selfcheck`, and an author-built MC's
  option list may not print the next item's `textin` key.
- **A stem built on a false claim is reworded when the claim is corrected**
  *(chapters 5–6)*: §6.1's source Check Your Understanding asked "Why was the
  first virus investigated mistaken for a toxin?", a premise the claim pass
  overturned (erratum 483); the graded item now asks what Beijerinck
  concluded, and the footer says so.
- **Prose claim pass yield, chapters 5–6**: seven accepted corrections in
  nine sections (a self-contradicting feeding-mode term, two misspelt
  taxon names settled by the book's own appendices and a DOI, a helminth
  length off by an order of magnitude against CDC DPDx, an inverted
  account of Beijerinck's conclusion, a footnote year, and the Duncan case
  dates against the CDC MMWR report), four suspicions kept as printed.
  Checkers again over-reported by about half; verify every finding's
  evidence before editing.
- **A multi-blank Fill in the Blank whose blanks have independent keys**
  *(chapter 7)*: the two-blank rule above covers blanks that form ONE
  answer. When the blanks are separate facts (§7.3: a wax's alcohol and its
  fatty acid; cholesterol's group, bond, and hydroxyl), grade the single
  most central blank as the `textin` and print the source's other keyed
  words as given text in the stem, disclosed in the footer. When the source
  key is an ORDERED list too long for a `textin` (§7.4's "secondary,
  tertiary, primary"; §7.5's three-blank "fatty acids, methyl esters, gas
  chromatography"), render one `multiplechoice` whose key is the source
  list verbatim (its own punctuation, no inserted "and") and whose
  distractors are other orderings or term-triples built from the module's
  own sentences — never split it into clozes that reconstruct to the same
  sentence (`distinctItems` sees one).
- **A regular-plural KEY needs its singular in `accept`** *(chapter 7)*: the
  fold is one-directional, so `alcohols`, `micelles`, `unit membranes`
  each list the singular; and a source spelling the grader would reject
  from a correct learner (`phosphorous` keyed for the element) lists the
  correct spelling. A Glossary lookup tries the hyphen/space variant before
  concluding a headword is absent (`lipid-bilayer` ↔ `lipid bilayer`).
- **Source `<equation>` elements are plain-text lines** *(chapter 7)*: the
  chemistry chapter's two reaction schemes (`H—monomer—OH + H—monomer—OH ⟶
  H—monomer—monomer—OH + H₂O`; the glycosidic-bond scheme with its
  underbrace label) are rendered as their own paragraph with the Unicode
  arrow and subscripts, never `$…$`; an underbrace label becomes a
  disclosed parenthetical. Do not carry a label from one module's equation
  into another's — §7.1 shipped 7.2's "(a disaccharide)" until the checker
  diffed it.
- **The source alts of exercise images answer their own items** *(chapter
  7)*: every media-bearing exercise (structural formulas to identify, a
  tetrapeptide to count) carries a source alt that names the functional
  group or states the count. Rewrite each to atoms and bonds only, and grep
  the alt, caption, and `longdesc` for every key and rubric clause of the
  paired item — three of five shipped a leak before the checkers read them.
- **The 7.1/7.2 print boundary**: §7.1's closing equation, figure, and
  table sit on the first page of the nominal 7.2 range — when the PDF page
  table is derived from section headings, the last page of each section is
  the next heading's first page too.
- **A PNAS author list pasted with its affiliation superscripts** ("J.A.
  Garnetta", "L. Gana, S. Chena, G.J. Jensena") is a source defect the
  checker's word-diff catches *(chapter 3)*: cite the real surnames, disclose
  in the footer, log it.
- **A name and its abbreviation marked as separate `<term>` elements are
  one Key-terms bullet** *(chapter 8)*: §8.1 marks `nicotinamide adenine
  dinucleotide`, `NAD+/NADH`, `NADP+`, `NADPH`, `FAD`, `FADH2` and the two
  parent names as eight elements in one passage. Bold each at its
  occurrence as the source does, write three bullets (`**name**
  (abbreviation) — …`), and record elements → bullets in the ledger (43 →
  38). The Glossary script prints the abbreviation elements as NO ENTRY;
  that is the merge, not a lookup failure. The same script drops `<sub>`
  and `<sup>` markup, so a verbatim Glossary copy reintroduces ASCII
  formulas — every bullet, alt, `longdesc`, `sortbins` label, and
  exercise string is Unicode (`CO₂`, `NADP⁺`, `FADH₂`, `Pᵢ`); no lint sees
  the drift, and four of seven chapter-8 pages shipped it to their
  checkers.
- **A figure that is a table of values is a table image** *(chapter 8)*:
  §8.3's ATP-yield figure prints an empty `<caption>` and a source alt that
  is a 700-character cell-by-cell transcription. The chapter-2 rule
  generalizes to it — Markdown table from the image, checked against the
  PDF, figure kept after it, said in the footer — and a manifest alt that
  long is `longdesc` material, never copied into `alt`. A figure whose
  CNXML caption is empty gets no caption line.
- **Two source-verbatim items that print each other's key are reordered
  and disclosed, never dropped** *(chapter 8)*: §8.2's "which is not a name
  for the cycle that produces one ATP, two CO₂, one FADH₂, and three NADH"
  prints the quadruple that keys the four-blank fill-in beside it, and a
  source MC's distractor "Embden-Meyerhof pathway" prints a sibling
  textin's key. Neither stem may change; put the leaked item BEFORE the
  item that prints it, say so in the footer, and keep an unmovable one
  (a cross-group option) with a disclosure. The checker's option-list grep
  is what finds these; the "distractor directly above a textin" rule is a
  substring rule, not an adjacency rule.
- **A multi-word plural key needs its singular spellings in `accept`, in
  every order** *(chapter 8)*: `chlorophylls and carotenoids` rejected
  `chlorophyll and carotenoid` and three mixed forms until the checker ran
  them. And a member that differs from another only by hyphen/space
  (`beta-oxidation` / `beta oxidation`) or case (`RuBisCO` / `rubisco`) is a
  duplicate the lint rejects — the v6 brief's own examples were wrong.
- **An "entry step plus ordered rest" answer is a two-paragraph
  conversion** *(chapter 8)*: §8.7's "What are the four steps of the
  nitrogen cycle?" needs the fixation paragraph AND the
  ammonification/nitrification/denitrification list; a converse read across
  a paragraph boundary (§8.4's facultative-switch sentence plus the next
  paragraph's "if respiration does not occur… fermentation") is the same
  shape. Both stay self-checks. Chapter 8's checkers reverted six
  conversions on this ground across five pages; the one-sentence test is
  literal.
- **A `sortbins` bin word can collide with a printed label** *(chapter
  8)*: binning §8.4's fermentation-pathways table "by ethanol production"
  puts the bin word inside the label "acetone-butanol-ethanol"; identify
  that row by its other end products or its example microbe instead.
- **A Clinical Focus figure sits inside its callout** *(chapter 8)*: §8.4's
  Micro Connection and §8.7's Resolution each carry a `<figure>`; it is an
  ordinary `mediafigure` at its document position inside the callout.
- **The source alts of process figures state directions and counts the
  artwork contradicts** *(chapter 8)*: §8.2's substrate-level-phosphorylation
  alt runs the reaction backwards, §8.1's metabolism alt was inverted by its
  author, a chemiosmosis longdesc miscounted four H⁺ as three, and two
  artworks carry label typos ("Aponenzyme", "PO" for PQ, "elemental
  sulfate(SO⁰)"). Every direction word and every count in an alt or
  `longdesc` is read off the image; a label the artwork misprints is
  transcribed as printed with the correct name beside it, and logged.
- **Errata 504–525 came from this chapter**, two of them claim corrections
  from the prose claim pass settled by the book's own text (archaeal
  membrane phospholipids against §3.3; the nitrogen-cycle summary against
  its own module), the rest figure-alt and spelling defects.

- **A two-blank Fill in the Blank whose blanks are two independent
  classification axes follows the chapter-7 independent-facts rule, not
  the unordered-pair rule** *(chapter 9)*: §9.6's "The medium is ___ and
  ___" (keyed *complex, differential*) is not one answer the module prints
  as a phrase, so `verify-source-keys` reads a joined key ("complex and
  differential") as `unsourced` and fails. Grade the distinguishing blank
  (`differential`), print the other keyed word as given text, disclose in
  the footer. The pilot's *Protista and Monera* form works only because the
  module prints that phrase. And when an unordered pair IS kept as one
  `textin`, its `accept` list needs both orders WITHOUT "and" as well —
  the source's comma spelling normalizes to the bare pair, which matches
  nothing else.
- **A pair key longer than four words is one `multiplechoice`** *(chapter
  9)*: §9.1's "a ___ or a ___" (*hemocytometer, Petroff-Hausser counting
  chamber*) and "___ or ___" (*ATP, acid from fermentation*) render as one
  MC each, key = the source list verbatim, distractors = other pairs of the
  module's own methods in the same format.
- **A media-bearing matching set is one `mediafigure` plus per-row MCs**
  *(chapter 9)*: §9.2's four thioglycolate tubes — the figure once, with an
  author-written caption and an alt that says where the cells sit in each
  lettered tube but never names an oxygen class, then "Which type of
  bacteria is growing in tube (a)?" over the source's five listed types in
  list order, keyed by the source solution.
- **A `textin` keyed to a compound the page prints as a formula lists the
  formula in `accept`** *(chapter 9)*: `hydrogen peroxide` needs
  `accept="H2O2"` (the Unicode `H₂O₂` normalizes to the same string and is
  rejected as a duplicate). A binomial-keyed FILLER needs its abbreviated
  form too (`Chlamydomonas nivalis` → `C. nivalis`); the accept rule in §5
  is easy to miss when building a late filler.
- **A `sortbins` bin label is the classification word alone** *(chapter
  9)*: "Chemically defined medium" / "Complex medium" put the generic noun
  "medium" — which every distinguishing sentence prints — into the
  bin-word lint's path; `Chemically defined` / `Complex` do not.
- **Grep the footer's own "fixing sentence" claim for words the module
  never prints** *(chapter 9)*: §9.2's canned-foods conversion was
  justified by "sealed environments"; "sealed" occurs in the module only
  for glove-box openings. A conversion whose justification imports a word
  is a two-sentence-plus-inference conversion — revert it.
- **A converted stem may gain a referent, never a clause or a second
  subject** *(chapter 9)*: "Given that free oxygen gas was essentially
  nonexistent…" prepended to a CYU bullet, "thermophiles **and
  hyperthermophiles**" added to another, and a plural possessive where the
  source prints the singular were all reverted by the checkers.
- **Author-built fillers leak into each other** *(chapter 9)*: §9.1's
  filler MC distractor "sporulation in aerial filaments" sat directly above
  the filler textin keyed `aerial filaments`, and a filler hint named the
  body's `FtsZ` key. The distractor-above-a-textin rule and the
  backwards hint sweep apply to author-built items as much as to source
  items.
- **A `longdesc` comparative ("roughly the same height") is a measured
  claim** *(chapter 9)*: the temperature-curve peaks are visibly unequal;
  read relative heights off the artwork like any count.
- **Prose claim pass yield, chapter 9**: two accepted corrections settled
  by the book itself (*L. monocytogenes* "psychrophile" against the
  module's own class definitions and m58941's 0–50 °C range, erratum 532;
  Actinomycetes "anaerobic" against the §4.4 Actinobacteria table, erratum
  533), two suspicions kept (singlet-oxygen radical notation; 20% versus
  16% listeriosis mortality). The 9.4 filler MC built on the psychrophile
  sentence was reworded (the chapters 5–6 false-premise rule).
- **Errata 526–534 came from this chapter**: the "psychotroph" matching
  row, three figure-alt defects (a misspelt "pickes", four "an peaks" and
  a "mesoophile" with mis-read peaks, an "alpha hemolysis" label the
  artwork does not print), a Summary "hyperthemophiles", "proton pumps
  inhibitors", the two claim corrections, and "health-acquired infections"
  (kept as printed, twice in the chapter).

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

## How a chapter is run

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

The chapter-1 pilot record — the parent-prep steps that precede a wave and
the pilot's own retrospective — moved to `docs/history/microbiology.md`.

## Done checklist (in addition to the core and life-sciences checklists)

- [ ] `## Key terms` derived from the module's defined terms in body order (distinct terms, one bullet each), definitions from the Glossary appendix, sentence-derived ones counted in the footer
- [ ] every unkeyed prose question either graded from ONE named module sentence, table, or figure (ledger note quotes it; the footer counts them) or a `selfcheck` whose model answer and rubric trace to sentences of the same module (the footer counts those too)
- [ ] every comparison table on the page has its sortbins (in the self-check that asks its contrast, or under the objective it serves); quantity/unit/step tables skipped
- [ ] every Check Your Understanding bullet a body selfcheck at its position; no Practice item re-asks one; a stem repeated by the source reworded to name its referent
- [ ] every Disease Profile table transcribed as Markdown; every other figure vendored with an explicit, image-checked `kind`
- [ ] Clinical Focus parts titled and chained with an absolute site-root link or plain text, never a dangling link, and never calling the previous part the beginning of the case
- [ ] every hint read against every other key on the page, forwards and backwards
- [ ] every single-word departure from the CNXML named in the footer AND logged as an erratum
- [ ] every source item the page did not use named in the footer with its reason
- [ ] `solve:emit`/`solve:compare` run and merged; `verify:ledger` green
- [ ] `build-map` rerun, the lock's `authoringStatus` and the mapped-section counts updated wherever they are pinned, `npm run baseline:update` committed with the content
