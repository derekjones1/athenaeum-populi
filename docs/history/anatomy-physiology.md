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
