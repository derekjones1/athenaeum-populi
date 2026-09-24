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
