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
