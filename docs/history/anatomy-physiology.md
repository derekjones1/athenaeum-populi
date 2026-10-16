# Anatomy and Physiology 2e — history

Dated narrative cut from `docs/subjects/anatomy-physiology.md`; the playbook
keeps only what is still operative.

## Scan and wiring (September 22, 2026)

The pinned source was scanned element by element against Biology 2e and
Microbiology (the scan's findings are the playbook's "What is the same" and
"What is different" sections). Two decisions were left open by the scan and
closed the same day by Derek: Interactive Link Questions are graded only
when the module text fixes the answer (otherwise prompts in their callouts),
and a source `section.references` becomes a `## References` list after
`## Summary`. The brief kit `docs/briefs/anatomy-physiology/` was derived
from the Microbiology kit (process unchanged, content rules swapped) with a
new prep tool, `tools/source/anatomy-physiology-prep.py` (per-module
glossary mode).

## Chapter 1 pilot (September 22, 2026)

Seven sections, one wave of seven Sonnet authors and seven Sonnet checkers,
one claim pass, the blind solve in a fresh Fable subagent. Authors reported
9–15 Practice items per page (73 in all, 57 graded); every one of the 42
source exercises reached its page; of the five Interactive Link Questions
one (1.7's CT) was graded, four stand as prompts. Checkers found 12
defects on lint-clean pages: three "directly above" key leaks (1.2, 1.5,
1.7), a hint leak (1.6), a longdesc inherited from a wrong source alt
(1.2), a longdesc leader-line miscount (1.6), a missing British/synonym
accept (1.1, 1.5), three footer miscounts, and two undisclosed one-word
changes; two authors' fixes replaced items outright. The claim pass found
three in-book contradictions (errata 857–859: adult body water, the
alpha-/beta-cell insulin mechanism, the centuries of da Vinci's and
Vesalius's drawings), all corrected on the page with Source notes. The
blind solve agreed 57/57 on the first pass. Errata 857–866 (seven
source/alt defects on top of the three claims). External links 5/5 live.
Close-out flipped the book to `in-progress`; the map reads 1/28 chapters,
7/169 sections.

Lessons folded into the playbook: the "directly above" leak as the top
defect class, headline glossary terms excluded from recall with the
mechanism disclosed, source alts never reused as `longdesc` without an
image reading, note/exercise pairs checked rather than assumed, and the
alt-length sentence qualified. Into the recipe: agents run no git command
at all, and landing-page Sections bullets are plain text.

## Chapter 2 (September 22, 2026)

Five sections, one wave of five Sonnet authors and five Sonnet checkers,
one claim pass, the blind solve in a fresh Fable subagent, run from the
versioned kit as written the same day as the pilot. Authors reported 12–20
Practice items per page (79 in all, 63 graded by the solver); every one of
the 44 source exercises reached its page; of the three Interactive Link
Questions two were graded and one (2.2's) stands as a prompt because its
printed key answers a different question than the one printed (erratum
867). Checkers found nine defects on lint-clean pages, plus one finding
rejected (curly quotes transcribed from the CNXML are the corpus norm):
four hints that state their own item's key or an option's distinguishing
fact (2.4's "one factor of ten", 2.5's uracil, phospholipid, and
specificity hints), two "directly above" leaks (2.1's isotopes hint, 2.2's
"Hydrogen bonds" stem), a plural key rejecting its singular (2.2
"anions"), and three footer miscounts. The claim pass found two items: the
electron "close to the speed of light" sentence (a physics error for the
light elements the section teaches, corrected with a Source note, erratum
877) and the hedged "as much as 70 percent" body-water figure, which
erratum 857 had already adjudicated as an upper bound and which is not
filed. The blind solve agreed 63/63 on the first pass and its one
observation was a real source defect: 2.5's prose promises five functional
groups "shown in the table below" and the table has four rows. Errata
867–878. External links clean. The map reads 2/28 chapters, 12/169
sections.

Lessons: a body-placed graded Interactive Link selfcheck is not counted
by the Practice-floor or per-objective lints (they scan `## Practice`
only) — the playbook sentence that said it counted toward the floor is
corrected. The keys extractor drops an inline `<sup>` inside an option
list (2.2's `²H` came out as "2 H"); the raw CNXML remains the authority
and the extractor is a convenience. A hint-prints-key lint was measured
(20 corpus hits, mostly hints that legitimately name a concept such as
"perpendicular" or "no solution") and decided against: the run's real
hint defects stated an option's *fact*, not its text, which no regex
reads. `mediafigure` emits no `id`, so a cross-page figure reference links
the sibling page, not the figure.

## Second review of chapters 1–2 (September 22, 2026)

Four Opus reviewers re-read the committed chapters 1–2, the kit, and the
corpus's lint gaps. No key was wrong and no source exercise was missing,
but chapter 1 carried 37 findings and chapter 2 about 45 that the Sonnet
checkers, the claim pass, and the blind solve had passed: hints that
state the key, a root of it, or the correct option's fact (the largest
class, 32 items; 2.3's checker had reported none); a stem directly above
a textin printing its key; headline terms kept as recall items; accept
gaps; alts that misdescribe the drawing (1.6's arm arrow is on the
woman's left arm; 2.2's δ⁻ electron pairs are unshared); footers quoting
the floor as 12 or 15. Two Opus fixers applied them (ch1–2 hints now say
where to look), four more claim corrections landed (errata 882–884, 886),
and the chapter-2 Interactive Link items graded from two sentences became
prompts. Sample audits of Biology and Microbiology found the same hint
class at similar rates — their briefs had asked only for a "strategy
hint", so their checkers passed fact-stating hints by design.

Supersedes the chapter-2 lesson above: the hint-prints-key lint landed in
a tighter form, with five other rules, in `tools/lint/lints-leaks.mjs`
(HTML entities in shortcode params, ASCII chemistry, an item directly
above a textin printing its key, a textin key's root in its own hint, an
acronym spelled before its blank, an MC hint printing its keyed option);
the hint rule ("say where to look") is now in the life-sciences baseline
and both kits; the textin plural fold is two-way; the per-section checker
runs on Opus. Errata 879–896.

## Sweep close-out (September 23, 2026)

The second review's findings led to a sweep of Biology and Microbiology
to the same standard (`docs/history/biology.md` and
`docs/history/microbiology.md`, "Practice sweep and long-description
pass"). What it changed for this book:

- **Coverage gate:** `verify-source-coverage` counts 85/85 of chapters
  1–2's exercise units rendered (77 as items, the Interactive Link
  Questions as one graded CT and seven prompts). With `--verbose` it
  prints the per-page Interactive Link tally the footer must state.
- **Grader and lints**, landed for the corpus and clean here: accept
  members up to seven words (the key stays four), an "X (Y)" answer
  grading when both halves are correct, and three lints (numeric textin,
  a selfcheck hint restating its rubric, a hint saying "not X" where X is
  accepted). The heading/title-leak lint was measured (about 10 raw hits
  on these pages) and decided against: the rule became an authoring
  preference, not a defect, and the hits stay.
- **Kit (`docs/briefs/anatomy-physiology/run.md`):** figure, alt, and
  `longdesc` work runs on Opus, never Sonnet, including the alt-errata
  verifier, and the parent spot-checks one "clean" verdict after any
  delegated model's first unit; agents sharing the scratchpad name their
  helper scripts by unit; the parent counts from the packet list, not an
  agent's totals; and after a sweep only what the ledger carry rule does
  not carry is re-solved.

## Chapter 3 (October 13, 2026)

Six sections, one wave of six Sonnet authors and six Opus checkers (the
first chapter run with Opus checkers), one Sonnet claim pass, the blind
solve in a fresh Fable subagent, Sonnet prep, pins, and errata agents, an
Opus alt-errata verifier, and a Sonnet tool-fix agent. Authors reported
Practice items per page of 15 (3.1), 14 (3.2), 13 (3.3), 14 (3.4), 16
(3.5), and 8 (3.6); every one of the 42 source exercises reached its page.
Of the five Interactive Link Questions two were graded and three stand as
prompts (3.6 has none). The book's first `## References` list (3.2) was
accepted by the lints unchanged. Checkers found about 39 defects on
lint-clean pages: accept gaps, hints that state the key's dimension or
fact, author items built on headline terms or re-asking a source item,
"directly above" leaks (one of them across a group heading, 3.3's
histone), footer miscounts and false exclusion clauses, and about fifteen
alt/`longdesc` image errors that the checkers applied themselves.

The claim pass found six in-book or cited contradictions, each corrected
on the page with a Source note: a dopamine receptor described as an ion
channel, "coding strand" used for the transcribed strand, germ cells
excluded from mitosis, mesenchymal stem cells producing muscle, "each
cell" and "all cells" given a nucleus, and iPSCs derived from adult stem
cells. It also flagged 3.4's Review stem "not entirely or mostly made out
of RNA" and 3.2's double-keyed swimming-pool analogy, whose option was
replaced. The blind solve agreed 65/67 on the first pass; the one
disagreement was the double-keyed analogy (the solver chose the source's
second correct option), and the one flag was adjudicated for the source
key. The rewritten item re-solved 1/1, and the solver's side notes added
two accepts. Errata 1807–1841 (35: 8 claim, key, or option; 1 misspelled
key; 16 typos and inconsistencies; 10 alt, caption, or artwork). The map
now carries chapter 3.

Lessons folded in: Source notes and footers never cite erratum numbers
(now a lint); the directly-above lint reads across group headings (three
Biology hits cleared: two reorders and one headline-term item replaced);
a `kind: 'solution'` deviation is usually stale; the author brief's PDF
instruction was not followed by two authors (figures checked against the
WebPs only), and the checker's PDF read covered it; and the first-wave
author on 3.6 wrote exactly the floor.

## Chapter 4 (October 13, 2026)

Six sections, one wave, on Opus throughout at Derek's request: six Opus
authors (the first chapter run with Opus authors), six Opus checkers, an
Opus claim pass, Opus prep and close-out agents (run facts, landing page,
pins, alt-errata verifier, errata drafter), and the blind solve in a fresh
Fable subagent as always. Authors reported Practice items per page of 19
(4.1), 15 (4.2), 12 (4.3), 9 (4.4), 8 (4.5), and 18 (4.6); every one of the
44 source exercises reached its page. Of the six Interactive Link Questions
two were graded (4.4, 4.5) and four stand as prompts (4.3 has none); 4.6's
tumor question, whose source key "cancer cells" contradicts the module's
benign tumors, stayed a prompt with a Source note. Checkers found 16
defects on lint-clean pages (4.1: 2, 4.2: 3, 4.3: 2, 4.4: 4, 4.5: 0, 4.6:
5) plus concerns: mostly alt/`longdesc` image reads, accept gaps, one
two-sentence filler MC (replaced), and one false hint claim. Each page's
author applied its own checker's fixes, so every page kept one writer.

The claim pass found eleven real problems, all accepted and each corrected
on the page with a Source note: the germ-layer table image putting the
adrenal cortex under endoderm (a sortbins member moved with it) and
excluding the rectum and anal canal (the image wrong, its alt right);
serous membranes "lined by endothelium"; the bladder under simple columnar
in the epithelium table image; the proximal urethra left out of
transitional epithelium's sites; mesothelium called a "serous gland"; "All
connective tissues" derived from mesoderm, against neural-crest bone and
cartilage; the ear lobe offered as the elastic-cartilage demonstration;
microglia "not nervous tissue"; a reference given as Stern in *Science*
that is Adler, *Science Signaling* eg11; and a "later section" pointer to
an earlier section. 4.4's mitochondria Review Question option "nuclei" and
4.5's "neuroglia" option were judged arguable second answers and left
keyed under a solve watch. The blind solve agreed 67/67 with no flags,
choosing the source key on both watched items. Errata 1842–1895 (54: 11
claim; 2 key or option; 22 typos, grammar, and inconsistencies; 19 alt,
caption, or artwork). The map now carries chapter 4.

Lessons folded in: Part C named a `mediafigure` title parameter that does
not exist, so run.md now has a line on it and the playbook a clause (a
table image gets a bold title line and a Markdown table from the image
above the figure, and no caption line when the CNXML caption is empty);
the parent's "germ layers" accept ruling on the cell-lineages cloze was
wrong (the module says each lineage *forms* a germ layer) and was
withdrawn after the author and checker pushed back, a ruling built on a
heading the parent misread; `baseline:update` still does not manage
`--min-covered` (hand-edited 2855 → 2899); the run-facts PDF range for 4.5
stopped one page short of its last figure; and the keys gate needs the
`DISCLOSED_DEVIATIONS` entry and its erratum number reserved before
`npm test` (1842 was reserved for 4.6's "meylin" option at the first gate
run).

## Chapter 5 (October 14, 2026)

Four sections, one wave, on Opus throughout at Derek's request (authors,
checkers, claim pass, prep and close-out agents), the blind solve in a
fresh Fable subagent as always. The Unit 1 Knowledge Check was still
pending when Derek asked for the next chapter, so it follows this run.
Authors reported Practice items per page of 18 (5.1, plus two graded
Interactive Link selfchecks in the body), 13 (5.2), 12 (5.3), and 11
(5.4); every one of the 28 source exercises reached its page. Of the four
Interactive Link Questions (all 5.1's) two were graded and two stand as
prompts; the three-layer-functions question stayed a prompt because the
module never calls the epidermis protective, and the stratum spinosum
question was graded on the pooled exercise's question after the parent
found that the note's own printed question is a copy of the previous
note's (the PDF prints the same) — rule 1's differing-pair form, a Source
note, and an erratum. The run-facts drafter (Opus) corrected the parent's
first PDF ranges twice (each one page short of a section's last figure)
and drew up 35 Part B items; the parent read five flagged figures off the
vendored images for Part C (the burn chart prints head and neck 9 percent
where its source alt says 19; the pigmentation drawing puts dark skin on
the left with a melanocyte drawn with pale granules, not empty; the
electron micrograph's labels read "Stratum basale or germinativum" and
"Remnants of cross-sectioned shed hair and its follicle").

Checkers found ten defects on lint-clean pages (5.1: 4, 5.2: 3, 5.3: 1,
5.4: 2) plus concerns: a self-answering cloze whose stem defined the blank
in apposition and printed the key's root ("Adipose … adipocytes"), a
footer claim that nothing sits "directly above" a recall item that was
false across group headings, two accept gaps, a hint that named the
section whose title sat in the keyed option, a false footer reason for a
Key-terms exclusion, and three alt or `longdesc` image errors the parent
zoom-confirmed (the hair figure's outer-root-sheath leader ends in the
peach follicle wall, not the blue-gray band; the eccrine-gland surface
shows three pores and an S-curved duct; the basal keratinocytes between
the melanocyte's processes hold few or no granules). Each page's author
applied its own checker's fixes.

The claim pass found nine evidenced problems; eight were corrected with
Source notes and one disclosed: the 5.1 summary's reticular layer as
"loose" connective tissue (dense irregular in the body); the desmosome
glossary entry as an "impermeable junction" (anchoring, per 4.2);
keratohyalin accumulating "as lamellar granules" (the next sentence
distinguishes the two); the sympathetic nervous system "monitoring" body
temperature (the hypothalamus does, per 1.5 and 24.6); tetanus listed as
blood-borne (a wound infection, CDC); "Typically, a melanoma develops
from a mole" (most arise de novo, Pampena 2017); third-degree burns that
"will heal slowly without" care against the same paragraph's "cannot be
repaired by the body"; and the rule of nines as "a factor of nine" (a
one-word correction, footer only). The 5.2 claim that all sweat glands
are merocrine, against 4.2's apocrine sweat-gland example, was kept as
printed with a Source note naming the disagreement, since current
histology sides with 5.2. The blind solve agreed 46/46 with one flag
adjudicated: the 5.3 protection item whose "Merkel cells" option the
parent had put under a solve watch — the solver chose the source key and
the option set stands. Errata 1896–1929 (34: 7 claim; 1 option, kept as printed; 9 typos, grammar, and inconsistencies, the merocrine disclosure among them; 17 alt or caption). The map now
carries chapter 5; the axe suite gained its first Anatomy and Physiology
route (5.1).

Lessons folded in: the "committed provenance maps all N local sections"
test hard-codes the corpus total and the book's count (run.md step 3
names both literals); the step-6 drafter verifies the PDF ranges and Part
C names figures by full stem (two chapter 5 stems began `506_`); a `dead`
verdict from `check:external-links` is confirmed with curl before a link
is removed (a cancer.org PDF answered 406, a bot wall, and stayed
linked); the author brief now says the "directly above" rule crosses
group headings and that an appositive cloze self-answers; and the parent
adds an accept list to any author cloze whose key is a two-word phrase a
learner would shorten ("genetic factors": genetics, genes, heredity).

## Knowledge Check 1 — Unit 1, chapters 1–4 (October 14, 2026)

The first Anatomy and Physiology check, and the first run from
`docs/briefs/anatomy-physiology/kc-run.md`; the recipe ran as written
(assemble, weights, leaks and notes tools all worked first time).
`knowledge-check-01-04.md`, "Knowledge Check: Unit 1 — Chapters 1–4",
weight 5; chapter 5 shifted 5 → 6 by `npm run kc -- weights --write`. 24
sections, 72 items: 25 multiplechoice, 25 textin, 22 selfcheck (every one
with a rubric), 0 sortbins — no module in chapters 1–4 has a comparison
table the Practice blocks had not already used.

Run shape, all Opus except the solve: four authors (one per chapter,
~185–216k tokens, 9–11 min), four checkers launched as each author
reported (124–167k), two reverse-recall sweeps on the finished scratch
blocks (ch1–2, ch3–4; ~105k each), one second checker over the
replacements (two rounds), and a blind solve in a fresh Fable subagent
(286k) reading the 51 graded packets beside the 24 masked section pages.
The parent read every block before assembly.

- **Checker yield:** 13 findings (ch1 5, ch2 3, ch3 1 soft, ch4 4): 2
  reverse recalls, 1 double key (4.2 mucociliary escalator — "ciliated
  epithelium" fit the blank), 1 stem spelling its key (macronutrients), 1
  stem naming its options (childbirth loop), 3 accept gaps, 5 soft spread
  notes.
- **Sweeps:** 2 flags, both chapter 1 and both the same two reverse recalls
  the checkers found (1.2 "eleven organ systems" printed in the page's
  objective heading; 1.5 "control center" printed with its fact in a page
  rubric). The parent read found 0 beyond the checkers.
- **Replacements:** 2 of the 5 first-round replacements were rejected by
  the second checker (gangrene repeated a sibling distractor; positive
  feedback was given away by the neighbouring negative-feedback selfcheck);
  round 2 (amino acids, perfusion) passed. The amino-acids "given away by
  chapter 2" note was ruled cross-chapter reinforcement, not a leak.
  Whole-page `kc leaks`: 5 hits, all shared vocabulary.
- **Blind solve:** 51/51 agree, 0 alsoDefensible, 0 unsure. The solver's one
  cross-page note (2.4 "as much as 70 percent" body water vs 1.4's
  corrected 50–60) is erratum 857's already-adjudicated case. No errata
  filed by this run.
- **Lessons:**
  - Replacements repeat the tells (2 of 5 here), so the second checker
    stays on every replacement and a second round is normal.
  - An objective heading or page description printing the key with its fact
    is a reverse recall, not only stems and hints.
  - A re-aimed cloze must blank the thing the module sentence names, not
    its subject (the escalator fix).
  - A solver's "cross-page defect" note is grepped against the errata file
    before anything is filed.

## Examples moved from the playbook (October 13, 2026)

Cut verbatim from `docs/subjects/anatomy-physiology.md`.

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
