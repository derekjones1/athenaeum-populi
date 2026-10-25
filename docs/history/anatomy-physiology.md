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

## Chapter 6 (October 15, 2026)

Seven sections, one wave, the first run on the model roster that
AGENTS.md "Which model runs which agent" now tabulates (Author = Opus,
Blind solver = Fable, Clerk = Sonnet): seven Opus authors launched
together, an Opus checker for each page as its author reported, one Opus
claim pass, an Opus alt-errata verifier, and the blind solve in a fresh
Fable subagent with masked pages. Sonnet clerks did the checklist work
the parent used to hold: the landing page, the run facts, the pins, the
errata draft, and this history. Authors reported Practice items per page
of 8 (6.1), 8 (6.2), 25 (6.3), 17 (6.4), 10 (6.5), 12 (6.6), and 8 (6.7),
88 in all; every source exercise reached its page, and the chapter has no
Interactive Link Questions (6.5's quiz link is a callout). The run-facts
clerk corrected the parent's first PDF ranges: the introduction is one
page, not two, and 6.7 ends a page earlier than the first read; the
parent verified both against the rendered pages. It also drew up the Part
B items, and the parent read the flagged figures off the vendored images
for Part C.

Two Part C lines were the parent's own errors, both caught by an author
and confirmed on the image. The first read of 612 repeated the drafter's
inference that a healthy bone is drawn beside the fractures; the image
shows eight fractured legs and no healthy bone, so the caption's "Compare
healthy bone with…" dangles (a source defect, kept as printed and
disclosed). The Bone Markings table was described as printing no class
rows; it prints three (Articulations, Projections, Holes), and the body
and figure 602 carry the same three. Part C's eye-read of 615 was also
off at the steep drop (1069 g at 52, 823 at 60, 750 at 65 by pixel
measurement), and the checker's trace, not the brief, went into the
erratum.

Checkers found 14 defects on lint-clean pages (6.1: 3, 6.2: 1, 6.3: 6,
6.4: 1, 6.5: 1, 6.6: 1, 6.7: 1) plus concerns. The top classes: stem and
cloze leaks (a compound key whose stem printed its parts, "muscular …
skeletal"; a young-adulthood cloze leaked by a Critical Thinking stem),
hints that state the key (6.3 twice, 6.6's foods hint, 6.5's "adult"
qualifier), accept gaps ("bone remodeling" rejected by the remodeling
cloze; the hypo-/hyper- hyphenation fold), Source notes that name the
key they re-key, and a sortbins whose plural bin held the only
base-form verbs (a verb-number tell no lint catches). Footers stating
alt claims the verifier later rejected were the other recurring class.
Each page's author applied its own checker's fixes.

Five source-key departures were approved by the parent, each with a
Source note, a footer clause, a `DISCLOSED_DEVIATIONS` entry, and an
erratum: 6.3's compact-bone option replaced by "articular cartilage"
(1930), the mitosis item re-keyed to osteogenic cells (1931), the
osteoclast item re-keyed to osteoclasts (1932), the lamellae item
re-keyed to perforating canals because figure 606 draws lamellae in
spongy bone (1933), and the "bone remodeling" option replaced (1941).
One more disclosure was a `solution` deviation (1939): rewording 6.4's
second Critical Thinking model answer for the claim correction left the
selfcheck at 48 percent of the source's words, and the keys gate asked
for the entry.

The claim pass found seven problems, all accepted: the 618 caption's
"non-traumatic injury"; fingers and toes where the bones are of the hands
and feet; tendon "sheaths"; the summary calling hydroxyapatite organic;
the fetal-skeleton cartilage sentence; the Critical Thinking model answer's
"two of them" (typically one center in each epiphysis; a phalanx has one, the femur several); and "lack of poor air exchange"
(a one-word class, no Source note). The growth-stop ages (16–18 against
18–21), the vitamin D and PTH summary line, and a clavicle wording that
tensions with a later chapter were reviewed and left as printed; the
clavicle is flagged for that chapter's claim pass. Three true distractors
were ruled after the solve. "Calcitonin and calcitriol" (6.6) and "spongy
bone" in the diaphysis (6.3, figure 624 labels it) were kept as printed
with the solve as tie-breaker, recorded as reviewed, not errata. "Bone
remodeling" as an option on the epiphysis item was replaced after the
checker, the claim pass, and the verifier agreed, though the solver had
picked the key. The first replacement, "fat storage," was withdrawn by
the author, who saw it would sit directly above an item keyed "fat
stores"; "osteon formation," false of spongy bone by the summary, took
its place.

The alt-errata verifier gave 65 verdicts: 17 held, 9 typos, 35 rejected,
4 already filed. It rejected three of the parent's 618 readings (the
parent spot-checked the image: a frontal view with a translucent
braincase) and corrected three footers that stated rejected claims (6.1's
brain-drawing and femur clauses, 6.3's 607 sides and 604 panel order, 6.4's
623 clause, reworded by panel). The blind solve agreed 74/74 with no
flags and no disagreements; the option swap on the epiphysis item was
carried by a one-item remap (1 agree). The harness refused three
subagents' report-file writes ("Subagents should return findings as
text" — the 6.5 and 6.6 authors and the pins clerk), so the parent saved
those reports from the agents' final messages. Errata 1930–1957 (28: 7 claim; 5 key or option; 2 typos; 1
caption; 13 alt or artwork). The map now carries chapter 6; the axe suite
gained its 6.3 route. Baselines moved to 7,276 replayed, 15,045
exercises, and 5,157 confirmed (5,158 before the last option swap moved
one answer to the disclosed list — a deliberate `--allow-decrease`),
`--min-covered` hand-edited 2931 → 2983;
the build audit reports 5,150 files.

Lessons folded in: the brief names the exemplar page (all seven authors
used 5.1 because Part C named none); a Source note after a graded item
never names the page's key or eliminates an option, and the double-key
hunt reads the module's figures as a source of a second key; the
checker's page-wide grep covers selfcheck model answers and CHECKS, not
only stems and hints; a sortbins plural-bin verb-number tell and the
hyphenated-prefix accept fold are hand checks until a lint exists; a
two-word key whose half is printed is a root leak only when the printed
half is the distinguishing word; the parent restates no drafter inference
about a figure without viewing the image; `rebuild-ledger-results.py` on
a second run answered "6.1: expected one page, found []" and wrote
nothing, so the author's raw 6.3 record was merged instead; and
verify-section's facts line reads "model answers author-written" for a
selfcheck whose answer is the source solution verbatim, so the label now
reads "selfchecks total N (each model answer read against its source
solution or, where author-written, the module)".

## Chapter 7 (October 16, 2026)

Five sections, one wave, on the roster AGENTS.md tabulates (Author = Opus,
Blind solver = Fable, Clerk = Sonnet). Chapter 6 was committed first, at
Derek's request, so the wave started on a clean tree. Five Opus authors
launched together, an Opus checker for each page as its author reported,
one Opus claim pass launched when the last page landed, an Opus alt-errata
verifier, and the blind solve in a fresh Fable subagent with masked pages.
Sonnet clerks did the checklist work: the landing page, the run facts, the
pins, the errata draft, and this history. The parent ran the map build
early, once four pages were on disk, so the source-keys and coverage gates
read chapter 7 while the checkers worked. Authors reported Practice items
per page of 13 (7.1), 25 (7.2), 22 (7.3), 12 (7.4), and 10 (7.5), 82 in
all; every source exercise reached its page. The run-facts clerk corrected
five of the parent's first PDF ranges, each verified by viewing the
boundary page: the introduction runs two pages, not one; 7.3 begins at the
foot of the page before the one the parent named; 7.4 ends a page earlier
and 7.5 starts a page earlier; and the Key Terms run one page longer.

Part C settled six Interactive Link Questions. Four are graded
`selfcheck`s after their callouts, because the module text fixes the
answer (the sphenoid, the basilar fracture, kyphosis, the herniated disc);
the ligament-thickness item (7.3) and the two-mechanisms item (7.5) are
prompts only, the second by the 1.7 precedent: its answer needs two
sentences stitched together and the solution's "bones of the limbs" is off
the module. The kyphosis model answer was corrected before the wave
(anterior to posterior, as the module defines the term twice), with a
Source note and an erratum. The chapter has no tables. 7.2 is the one row
of the September-8 table (the skull-base image 707 was replaced upstream),
so the vendored image is the new one, the PDF shows the old, and the entry
is not a defect. One Part C line was the parent's own error: it named the
sphenoid item's "fixing sentence" as a Chapter Review sentence, but that
sentence ("joins with most other bones of the skull") is the item's own
solution. The 7.2 author caught it and cited the body sentence "joins with
almost every other bone of the skull", which fixes the answer without
being the key.

Checkers found 15 defects on lint-clean pages (7.1: 2, 7.2: 3, 7.3: 3,
7.4: 4, 7.5: 3) plus concerns. The top classes: alt and longdesc errors
that misread the drawing (7.5 called the lateral view the skull's left
side when it is the right; 7.3's 732 leader lines ended on the wrong
vertebra and its 723 alt said "upper neck vertebrae" for all seven; 7.4's
longdesc put ribs 11 and 12 at the wrong end; 7.1's 701 alt never named the
divisions the colours stand for), accept gaps where the module's own
phrase was graded wrong ("vertical portion" for the ramus, "small
muscles", "disc herniation" and "slipped disc", "palpating"), a backward
leak (7.5's sclerotome stem printed the key of the somite item just above
it, and reordering could not fix it, so the author item was rebuilt from a
sentence without "somite"), a headline-term multiple choice (7.4's sternum
item, the H2 of the objective that follows it), rubric clauses outside the
question (7.1's girdles selfcheck, whose third checkpoint remarked on the
figure's shading; 7.4's CT4, whose "these ribs" widened to 8–12 once an
intervening sentence was dropped), and a leftover prep-tool HTML comment in
7.2's Key terms that no lint catches. Concerns included a hint that steered
to its key (7.2's third Review Question: "including the list of openings")
and a footer that gave a false reason for the notochord exclusion. The
author's flag on 7.1 (the count item keyed "126" against a Review
distractor "consists of 126 bones") was ruled a shared number, not a leak:
the distractor does not state the fact the count item tests. Each page's
author applied its own checker's fixes.

The claim pass examined 344 claims and made 11 findings, all accepted. F1
was the largest: 7.5 says the facial bones form by endochondral
ossification, while §6.4 says they are membrane bones, so a Review
distractor ("intramembranous ossification, which forms the facial bones")
was true on the book's own terms. The body, the Summary, and the Critical
Thinking model answer were corrected in four places and the distractor
replaced; because a Review option changed, the entry is a `DISCLOSED_DEVIATIONS`
option deviation and an erratum (1958). The seven 7.2 corrections were the
superior orbital fissure's "artery that supplies the eyeball" (that artery
runs in the optic canal), the palatine bone's "medial wall" of the orbit
(the floor), the maxilla caption's "lateral floor" (medial), the lambdoid
suture's "parietal and temporal bones" (parietal only), the jugular
foramen as the exit for "all" venous return, the sphenoid sinus as a
"single" midline sinus, and the CDC 2010 attribution of a "majority" of
head injuries to falls (about a third). The others were the lumbar
"short transverse processes" (7.3), the rib angle that "forms the largest
portion" (7.4, where the module says most posterior), and craniosynostosis
terminology (7.5, where primary and complex are not paired terms). The
roof-of-orbit item lost its sphenoid distractor (the lesser wing forms the
posterior roof, a borderline second key) and took the palatine bone instead. The clavicle flag carried from chapter
6 resolved as no defect: 6.1 has no such sentence, and 7.1 agrees with
§8.1. Further readings were recorded as reviewed, not errata,
among them the fontanelle "first year" against "by age 2", the hard
palate's three-quarters and one quarter, the CDC's 30 percent, the
glabella "depression", the internal acoustic meatus, the nasolacrimal
"behind", sagittal synostosis growth direction, "vertebrochondral" for
ribs 8–12, and the foramen lacerum's "nothing passes".

The alt-errata verifier gave 38 verdicts: 10 held, 18 typos, 10 rejected,
none already filed. The parent corrected three footer clauses that stated
claims the verifier rejected (7.2's hyoid grey, 7.3's lumbar inferior
articular process, 7.3's sacrum pink). The blind solve agreed 63/63 with
no disagreements and no flags after two one-item remaps, both for items
the claim pass had re-hashed (7.5's Review option A and 7.2's roof-of-orbit
item); the solver's notes proposed accept candidates the pages already
covered and a trailing-period remark that stayed as printed. 7.2's
References link to the CDC statistics page answers 404. The checker
had read the printed address, but the CNXML's link text and href differ,
and the author's own GET showed the linked target is the dead one; the
page keeps the citation as printed and drops the link (1970). The landing
page's splash alt was re-written twice by the parent: first on the clerk's
reading of the colours, then on the claim pass's, which found the drawing
is tinted bone by bone, not by cranial and facial, and the parent checked
that against the image (sphenoid and maxilla yellow-green, zygomatic
white, temporal and mandible mauve). Its source alt says "The major parts
of the cell are labeled" (1971). The harness refused three authors'
report-file writes (7.1, 7.2, and 7.5), so the parent saved those reports
from the agents' final messages.

Graded Interactive Link selfchecks read as "unmatched" in the keys gate
across the whole book (1.7, 3.2, 3.3, 4.5, and 6.4 are the precedents) and
the coverage gate counts them as graded-il, so the corrected kyphosis
model answer owes no `solution` deviation entry; one checker's note that
it did was moot. Errata 1958–1997 (40: 11 claim, 1 kyphosis solution, 1
dead link, 9 alt, artwork, or duplication, 18 typos), the duplicated
7.1 sentence among them (1972). The map now carries chapter 7; the axe
suite gained its 7.3 route. Baselines moved to 7,310 replayed, 15,131
exercises, and 5,229 confirmed, with `--min-covered` hand-edited 2983 → 3027 (`baseline:update` does not touch it); the build audit reports 5,221 files. The
one test failure before the errata were filed was the expected one (the
option deviation cited 1958 before the errata file carried it).

Lessons folded in: a Part C line that names a "fixing sentence" is checked
against the block it came from (a solution is not the Chapter Review)
before it reaches the authors; a backward leak is fixed by rebuilding the
author item, not by reordering; a checker's dead-link verdict is checked
against the href, not the printed address; a source defect that makes a
Review distractor true is an option deviation, so the replacement, the
Source note, the footer clause, and the erratum travel together and the
solve takes a one-item remap; the `terms` extractor's scaffold comment
(`<!-- glossary term never bolded… -->`) is now a lint error, since one
passed verify-section; a colour claim in an alt is read per bone, not per group,
before it is written; the report-file refusal means agents return their
reports as text for the parent to save; and the graded Interactive Link
selfchecks never owe a solution deviation.

## Chapter 8 (October 16, 2026)

One wave on the roster AGENTS.md tabulates (Author = Opus, Blind solver =
Fable, Clerk = Sonnet), started on a clean tree after chapter 7 was
committed. Five Opus authors launched together, an Opus checker for each
page as its author reported, one Opus claim pass once the last page was on
disk, an Opus alt-errata verifier, and the blind solve in a fresh Fable
subagent with masked pages. Sonnet clerks did the checklist work: the
landing page, the run facts, the pins, the errata draft, and this history.
Authors reported Practice items per page of 10 (8.1), 12 (8.2), 12 (8.3),
11 (8.4), and 8 (8.5), 53 in all, of which 43 are auto-graded. The coverage
gate counts two more source rows than the run facts did, because the one
Interactive Link Question in 8.5 carries lettered sub-asks and the gate
splits each into its own row; the footer's count of one was right.

Part C settled all nine Interactive Link Questions as prompts inside their
callouts, none as a graded `selfcheck`. The parent grepped each key against
the raw CNXML outside the solution, and no body sentence fixes any of them:
the arthritis and surgery questions are answered only in the linked videos,
the three arches of the hand are never named in the module, and the 3-D
pelvis question needs the superior and inferior pubic rami, which the body
does not say bound the obturator foramen. The chapter's one table, Table
8.1 on the female and male pelvis, became a `sortbins`, but with the
subpubic angle row left out: Review Question 5 already keys that fact, and
a row keyed by a source Review Question is not asked a second time.
Figures sit inside two callouts (the Runner's Knee imbalance and the
Clubfoot disorder), where the CNXML puts them, and the 8.5 pointer to "the
chapter on bone tissue" links to 6.4. The Part C line that justified that
link was wrong in detail. It said 7.5 had linked the same pointer, but 7.5's
link to 6.4 sits inside a Source note. The decision stood on the External
links rule (a page that exists is linked, not left as plain text), and the
precedent claim was corrected in the parent's notes.

Checkers found 8 defects on lint-clean pages (8.1: 1, 8.2: 3, 8.3: 0, 8.4:
2, 8.5: 2), plus concerns the parent ruled on. The classes: a hint that
named one of the two answers its stem asked for (8.1's second Critical
Thinking item, whose hint pointed to the clavicle fracture paragraph);
accept gaps where the module's own compound form graded wrong ("triquetrum
bone" and "deltoid tuberosity of the humerus" in 8.2, "fibular notch of the
tibia" and "sustentaculum tali of the calcaneus" in 8.4, "apoptosis" and
"programmed cell death" in 8.5); a longdesc that misplaced a leader (8.2's
humerus drawing, where the lesser tubercle sits beside the head, not below
it); a forward leak (8.4's first Critical Thinking model answer printed the
keys of two Review Questions that follow it, fixed by moving the item
after them); a footer that misquoted its own correction (8.5); and a footer
overclaim (8.2). The parent ruled English glosses are not accepted, dropped
the subpubic pair from 8.3's sortbins, corrected the 8.3 pelvis alt (the
female brim dips too, which the parent confirmed against the image), and
kept the pubic-tubercle stem by the 6.3 ruling. Each page's author applied
its own checker's fixes.

The claim pass raised five findings and the parent accepted all five: the
lesser trochanter's fusion ages (8.5), the clavicle forming largely by
intramembranous ossification with a sternal-end secondary center (8.5, which
contradicts 6.4 and settles the chapter 6 clavicle flag), "nine tendons"
against the caption's own "nine muscle tendons" (8.2), "the most commonly
fractured bone" softened to "one of the most" (8.1), and the cuneiforms'
plantar surface (8.4). The parent added a sixth of his own, from the 8.5
checker's concern about the embryo caption: the photograph shows simple
limb buds with no paddles or digit rays, the module's fifth week, and the
photographer's record gives seven weeks of gestational age, so the caption
now reads about five weeks of development, with the gestational age beside
it. The Review distractor "medial condyle" for the femur's muscle
attachment site is true of the gastrocnemius in the book's own 11.6, but on
8.4's definition of a condyle the key stands, so it was ruled not errata and
recorded for the 11.6 run. Nine further suspicions had no evidence and were
not acted on. The verifier gave 17 source verdicts (and four checks of the pages' own alts): 7 held, 5 typos, and 5
rejected (the foot figure's "phalange" labels and group label, and three thin
source alts on the pelvis, ligament, and Q-angle figures). The parent fixed
two 8.2 footer clauses the verifier caught: the Colles figure shows one
fracture in a side view and a palm view, each beside a normal wrist, not
four views of fractures, and the carpal tunnel figure's alt misdescribes a
section of nine tendons and one nerve as "the nerves", which the footer had
omitted.

Three Interactive Link targets are unreachable and stay linked, per the
External links rule: the fractures video and the bunion page redirect to
bones.emedtv.com, whose host does not resolve, and the foot-bones link
fails TLS with a certificate for another name. None is a confirmed 404, so
none was un-linked; each gets a dead-link erratum recording the redirect
and the failure. The blind solve agreed 43/43 with no flags and no
unrecognized or missing answers. It ran before the claim fixes, which touched
only prose, captions, and model answers, and a second emit confirmed no
packet hash had moved. The solver's two notes (the ischium "posteroinferior"
in the body against "posterolateral" in the Chapter Review, and the
glossary's "fourth or fifth week") are recorded as reviewed, not errata.
Errata 1998–2016 (19: 6 claim, 3 unreachable links, 5 alt or artwork, 5
typos).

Lessons folded in: the life-sciences External links rule now says a host
that does not resolve, or fails TLS, is treated like a chain that never
lands, so it stays linked and noted; a `sortbins` row keyed by a source
Review Question is left out; run.md now has the parent grep a Part C
precedent before citing it; and lettered sub-asks count as several coverage
rows, so the baseline floors are read from the gate, not from the run
facts. Two tool gaps were reported. `verify-section` passes a page whose
footer is still the placeholder, which both the 8.2 and 8.4 authors hit.
And a selfcheck model answer can print the key of a later graded item, the
8.4 forward leak. A separate agent measured a lint for that second gap.

## Chapter 9 (October 16–17, 2026)

One wave on the AGENTS.md roster, started on a clean tree after chapter 8
was committed first (4ee3c2c). Seven Opus authors launched together, an
Opus checker per page as its author reported, one Opus claim pass over the
seven pages and the Clerk-written landing page, an Opus alt-errata
verifier, and the blind solve in a fresh Fable subagent with masked pages.
Sonnet clerks did the landing page, the run facts, the pins, the errata
draft, and this history. Authors reported Practice items per page of 10
(9.1), 10 (9.2), 9 (9.3), 12 (9.4), 11 (9.5), 14 (9.6), and 8 (9.7), 74 in
all, 60 of them auto-graded, plus four graded Interactive Link
self-checks in the bodies of 9.4 and 9.6. The chapter's 66 source
exercises (33 Review, 14 Critical Thinking, 19 Interactive Link) all
reached their pages.

Part C settled the nineteen Interactive Link Questions as four graded
`selfcheck`s and fifteen prompts. The four graded ones are fixed by one
artifact each: the rheumatoid-arthritis question by 9.4's Aging box, the
shoulder-movements and lateral-ankle-ligaments questions by 9.6's Chapter
Review sentences, and the femoral-neck-fracture question by a 9.6 body
sentence. The synovial-joint range-of-motion question is fixed by a 9.4
body sentence too, but a source Review Question on the same page grades
the identical question, so it stands as a prompt under each-thing-once.
The chapter's one table, Movements of the Joints in 9.5, became a
four-bin `sortbins` over Pivot, Hinge, Plane, and Ball-and-socket: the
Condyloid and Saddle rows share one Movement cell word for word, so no
item from that cell could be true of exactly one bin, and dropping those
two groups fit the four-bin cap. 9.1's author built a second `sortbins`
from prose alone (structural versus functional classes); its checker
judged it honest and found the same form on seven earlier pages, and the
life-sciences playbook now admits it. The three feature boxes titled only
"Joints" print as "Aging and the Joints" and "Disorders of the Joints"
with no invented topic.

Checkers found 25 defects on lint-clean pages (9.1: 3, 9.2: 4, 9.3: 4,
9.4: 1, 9.5: 5, 9.6: 4, 9.7: 1) and the parent verified each image
finding against the vendored WebP before relaying it. The classes: alt or
`longdesc` clauses that misread the drawing (9.1's femoral head drawn out
of its socket, 9.2's single tooth in panel c, 9.3's epiphysis wider than
the shaft, 9.4's exploded hinge model and arrow counts, 9.5's solid-versus-
faint convention, abduction arrow, and two head-rotation arrows); accept
gaps for the module's own forms ("pivot joint", "facet joints",
"opposition of the thumb", "small movements", "planes of motion",
"embryonic limb bud"); a hint naming the subsection whose title was the
item's key (9.2); a cloze that re-asked a Critical Thinking clause (9.1);
a two-sentence cloze (9.2); and footer clauses that overstated (9.3,
9.5) or gave one false blanket reason for ten Interactive Link prompts
(9.6). Each page's author applied its own checker's fixes. The verifier
later found two page alt defects the checkers had passed (9.2's locator
box sits on the front teeth of both jaws; 9.6's elbow panel c is the left
elbow, not "the same joint"), which the parent applied, and two 9.2
source typos the author had transcribed verbatim.

The claim pass raised six findings and the parent accepted all six: 9.1
gives the manubriosternal joint as a synarthrosis while 9.3 classes it a
symphysis and every symphysis an amphiarthrosis, which touched a source
Review key, so the first sternocostal joint (a synchondrosis) stands in
for it in the body, Summary, model answer, and option, disclosed as a key
deviation in the 7.5 shape; 9.2 assigns the maxillae's adolescent fusion
ages to the frontal bone too, against 7.5's early childhood; 9.4 puts the
ischial bursa under the skin when it lies deep to the gluteus maximus; 9.5
says medial and lateral rotation occur "only" at the shoulder and hip
while 9.6 rotates the femur at the knee; 9.6 says most shoulder
dislocations are inferior when about 95 percent are anterior; and 9.6's
Summary turns the thoracic region's "greatly limited" flexion into
"only rotation". The 9.7 checker added a seventh, the facial bones formed
by endochondral ossification, the same defect as erratum 1958 on 7.5,
corrected the same way. The landing page's objectives lead-in had been
normalized to "After studying this chapter"; the intro module alone
prints "After this chapter", and the parent restored it. Nine suspicions
had no evidence and were not acted on; a Review distractor the module
half-supports ("a narrow fibrous joint" for a syndesmosis) was ruled not
errata.

The blind solve agreed 59 of 60 with one flag, adjudicated for the key:
9.7's "Synovial joints ________" is keyed to the interzone, and the
distractor "are produced by endochondral ossification" rests on a loose
topic sentence the paragraph then narrows. The solver also noticed that
9.5's "panels a–d" pointer for limb flexion covers two neck panels, which
the source's own "a-d" prints; reviewed, not errata. The verifier was
killed by an Opus weekly limit after 9.5 and resumed from its transcript
the next day. Three Interactive Link targets answered badly on the link
check: the childhand radiograph's host returns 500 and stays linked with
a footer clause and an erratum; the gout and hip-replacement pages are
403 bot walls and need nothing. Errata 2017–2053 (37: 7 claim, 1 link, 10 alt or artwork, 19 typo).

Lessons folded in: the life-sciences "Sort into bins" paragraph admits a
prose-built classification sortbins; the author brief wants the reason
per Interactive Link prompt, not a blanket clause; run.md builds the
source map right after the wave so the checkers' coverage and keys gates
read the new pages, tells the pins Clerk the source test is `node:test`,
and has Part C check headline exclusions before it counts a glossary
term toward a thin section's floor. A CNXML element id can repeat across
modules (`fs-id2309987` is a paragraph in m46381 and an exercise in
m46377); the gates key per module, so nothing broke.

## Chapter 10 (October 18, 2026)

One wave on the AGENTS.md roster, started on a clean tree after chapter 9
was committed first (08f6f1d). Nine Opus authors launched together, an Opus
checker per page as its author reported, one Opus claim pass over the nine
pages and the Clerk-written landing page, an Opus alt-errata verifier, and
the blind solve in a fresh Fable subagent with masked pages. Sonnet clerks
did the landing page, the run facts, the pins, the errata draft, and this
history. Authors reported Practice items per page of 8 (10.1), 14 (10.2), 12
(10.3), 16 (10.4), 9 (10.5), 13 (10.6), 9 (10.7), 14 (10.8), and 10 (10.9),
105 in all, 83 of them auto-graded. The chapter's 49 source exercises (3
Interactive Link, 26 Review, 20 Critical Thinking) all reached their pages,
split 4, 8, 10, 3, 6, 6, 4, 4, and 4 across the nine sections. The source map
was built right after the wave so the checkers' gates read the new pages.

Part C settled the three Interactive Link Questions as prompts, none graded:
each is a multi-part question and no module sentence outside a solution
fixes the whole answer (10.2's micromacro question needs the video's own
"junction points" and "double strand of pearls"; its skelmuscfiber question
keys the motor-unit definition that lives in 10.4; 10.3's calciumrole
question asks what T-tubules are, which only 10.2 prints). The footers give
the reason per item, and the 10.2 pair, whose note and exercise differ in
lettering, discloses the difference without a second sentence. The chapter
has no table, so no sortbins is built from one; 10.8's author built a
prose-only one over single-unit and multiunit smooth muscle, and 10.5's
author built another over the three fiber types. The feature boxes titled
only "Muscular System" print as "Disorders of the Muscular System" with no
invented topic, 10.6's Everyday Connection keeps its figure inside the box,
and the two histology-slide boxes carry no question and no item. Two of
Part C's own lines were wrong and the authors caught them: it set the
inorganic phosphate as a Unicode subscript where the playbook keeps the
inline HTML subscript, and it printed a period in the Interactive Link label
the whole corpus prints without one. The parent corrected the first on 10.3
and 10.8 and the run facts for both.

Checkers found 15 defects on lint-clean pages (10.1: 1, 10.2: 2, 10.3: 0,
10.4: 4, 10.5: 1, 10.6: 0, 10.7: 1, 10.8: 2, 10.9: 4), and the parent
checked each image finding against the vendored WebP before relaying it. The
classes: accept gaps for a learner's own correct form ("crossbridge cycle",
"pull apart", "pace-setter", "mesodermal somites", "pump blood",
"bloodstream", the British "fibre"); items that answered or re-asked another
item on the page (10.2's sarcomere recall against the Interactive Link
prompt, 10.2's periosteum cloze above the tendons Critical Thinking item,
10.9's endurance stem above the question it restates, 10.1's cardiac-nuclei
multiple choice, double-keyed by 10.7); alt and `longdesc` clauses that
misread the drawing (10.4's isometric row, 10.4's tetanus plateau, which
spans about 40 to 82 percent rather than the middle third, and 10.8's
second cell behind the contracted one); and a hint naming the two headings
that were its rubric's checkpoints (10.4). A concern on 10.1's micrograph
alt proved right on the parent's crop, several nuclei lie in the white gaps
of panel c, so the clause was fixed on 10.1 and on the same figure's
chapter 4 page. Each page's author applied its own checker's fixes.

The claim pass raised eleven findings and the parent accepted all eleven:
10.1 says all three muscle tissues relax when the actin-binding sites are
re-shielded, which smooth muscle lacks; 10.2 puts the sartorius in the
upper leg; 10.3's cross-bridge caption releases the phosphate twice, calls
NAD⁺ an enzyme, compares aerobic respiration's 36 ATP with four from
glycolysis where the module's net yield is two, says the number of fibers
"does not change" though the book has them die, and a Critical Thinking
answer blames ATP depletion for writer's cramps in a live person; 10.4 holds
isotonic tension constant in a paragraph whose own examples raise and lower
it, and calls a myogram an instrument; 10.6 gives growth hormone's main role
as healing muscle; and 10.9 has the limb muscles develop from general
mesoderm rather than somites. The one true distractor was 10.6's Review
option "Fast fibers have many mitochondria", also true of fast oxidative
fibers, so it is narrowed to "Fast glycolytic fibers" and disclosed as an
options deviation. The landing alt the clerk wrote was wrong on three points
(the racket, the right leg, a sponsor's lettering); the parent had first
described the photo from an 800-pixel view without zooming, and rewrote it
from the 1144-pixel file. Thirteen suspicions had no evidence and were not
acted on, and four author flags (the "contractibility" objective, 10.5's
"anaerobic respiration (glycolysis)", 10.9's "somites fuse", 10.7's "large
percentage" of extracellular calcium) were ruled reviewed, not errata.

The blind solve agreed 83 of 83 with no flags and none unsure; it folded
"intermediate filaments" to the singular and settled 10.8's "lack
myofibrils" option by elimination, a source option and not actionable. The
verifier confirmed ten source alt misdescriptions (1007, 1022, 1003, 1023,
1010a, 1010b, 1006, 1008, 1021, 1029), declined the eleventh that the
author and 10.8's footer had claimed (1028), found two page alt defects the
checkers had passed (the 414 alt on 10.1 and chapter 4, and the end of the
length-tension curve in 1011), and counted twelve source typos, one of them
subsumed by the 10.9 claim correction, so eleven are filed. Both
histology-slide links, cardmuscleMG and smoothmuscMG, redirect to a host
whose certificate has expired, so they stay linked with a footer clause and
an erratum each; the other three external links answered. Errata 2054–2088
(35: 12 claim, 2 link, 10 alt or artwork, 11 typo).

Lessons folded in: `normalizeText` folds the source's "++" to "2+" so a keyed
option printing "calcium (Ca++)" matches the Ca²⁺ the page sets, with a
test beside the other normalizer tests, and run.md §2 says such a notation
fold is a tool change, never a `key` deviation; run.md step 6 now has Part
C quote the HOUSE notation rule (life-sciences "Cases later chapters
settled"), never a sibling book's precedent, and copy a callout heading's
bytes from the exemplar page, since two of its lines were wrong; the
anatomy-physiology playbook's lessons say the footer describes a source
glyph it may not print, because the micro-sign lint reads the footer too;
run.md step 5 has the parent zoom the largest vendored width before
writing the splash alt; and a longdesc written for one chapter's figure is
re-read against the image before a later chapter reuses it, since 4.4's
passed twice with the nuclei-in-gaps error. A CNXML paragraph in m46664 (19.2) contradicts itself
on the source of cardiac calcium; it is noted for that chapter's run.

## Chapter 11 (October 18, 2026)

One wave on the AGENTS.md roster, started on a clean tree after chapter 10
was committed first (4604857). Six Opus authors launched together, one per
section, an Opus checker per page as its author reported, one Opus claim pass
over the six pages, an Opus alt-errata verifier, and the blind solve in a
fresh Fable subagent with masked pages. Sonnet clerks did the landing page,
the run facts, the pins, the errata draft, and this history. Authors reported
Practice items per page of 14 (11.1), 9 (11.2), 14 (11.3), 10 (11.4), 12
(11.5), and 15 (11.6), 74 in all, 61 of them auto-graded. The chapter's 40
source exercises (27 Review, 13 Critical Thinking, 0 Interactive Link) all
reached their pages, split 10, 5, 8, 5, 6, and 6 across the six sections. The
chapter has no Interactive Link notes at all, so each footer says 0 and 0
rather than staying silent. Two modules carry a September 8 upstream row
(11.2's replaced image 1105, whose PDF page shows the old picture, and 11.5's
"rotests", already "rotates" in the CNXML); neither was logged again. The run
facts miscounted one table, giving tbl-ch11_08 four body rows where the CNXML
has six because the PDF splits it across two pages, and the 11.5 author
caught it.

Part C settled the tables before the wave. The six-column attribute tables
(Movement, Target, direction, Prime mover, Origin, Insertion) and the Latin-
roots tables were transcribed only; the grouped tables and the eleven muscle
tables the book prints as images (1125 to 1135) became sortbins whose bins
were the table's own group labels, with the image's full-width group rows
carried into the Markdown as a leading column, the chapter 4 image-table
form. Part C expected five sortbins on 11.5 and four on 11.6. The checkers
removed two of them: 11.5's forearm-movement sortbins, because four of its six
items carried their bin's word (Pronator under Pronation, Supinator under
Supination), and 11.6's gluteal-region sortbins, because Gluteus medius under
the Gluteal group and Psoas major under the Iliopsoas group share a root with
their bin and the bin-word lint, which is word-exact, passes them. Final
sortbins stand at 1, 1, 2, 1, 4, and 3 across the six pages. 11.2's is
prose-built because that module has no comparison table. Four of the five
Review options the run changed are the double-keyed or misspelled kind:
11.1's "a fixator" (the glossary defines a fixator as a synergist that assists
an agonist), 11.2's "muscle name" (the module says attachment appears in a
muscle's name), 11.3's "rotating of the vertebral column" (the erector spinae
"controls ... rotation"), and 11.4's "interior oblique" and "exterior oblique"
(misspellings of the internal and external obliques). Each became an options
deviation with a visible Source note, the key unchanged.

Checkers found 19 defects on lint-clean pages (11.1: 2, 11.2: 2, 11.3: 3,
11.4: 2, 11.5: 7, 11.6: 3). The classes: a Source note that answered the very
item it disclosed (11.1); accept gaps for a learner's own correct form (the
figure's own "Parallel-fusiform", and "opponens pollicis muscle" and "palmaris
longus muscle", on 11.1 and 11.5); footer claims that were untrue or
contradicted themselves (11.2's two, 11.4's floor-of-three claim); longdesc
misreads (11.3's side view is the subject's left, and "clockwise" was false
for the eye-muscle labels; 11.4 misquoted "Anoccoccygeal"); a recall item
double-keyed by the page's own table (11.6's tibialis posterior, replaced by
the calcaneal tendon); the two sortbins giveaways above; a hint that handed
over the next sortbins' bin and two that pointed at group rows the Markdown
tables do not have (11.5); a Critical Thinking model answer that kept the
source's "pelvic girdle" for the pectoral girdle with no disclosure (11.5); a
doubled period; and an image-table typo kept with no disclosure (11.6). The
parent ruled each finding before relaying it, and each author applied its own
checker's fixes.

The claim pass raised 37 findings and the parent accepted 36, each checked
against the cited module sentence. On 11.1: the Summary's fixator
"insertion" (origin), abduction in the "sagittal" plane (coronal), "rector"
(rectus), and the biceps tendons said to connect to the wrong bones. On 11.3:
the corrugator as "prime mover of the eyebrows", the depressor anguli oris
row, the pterygoid "posterior (protracts)", the medial pterygoid's insertion,
the head-mover rows of the tongue and swallowing table, the oblique arrows
in the eye-muscle figure, and "styloid bone". On 11.4: the caption's
"medial", "Supination" for the obliques, the quadratus lumborum origin, the
diaphragm's "ribs 6-12", and the external intercostals' "exhalation". On 11.5:
the pectoral girdle sentence, the latissimus "inserts into", caption (d), the
supraspinatus and infraspinatus cells, pronation "at the hinge of the elbow",
"the supinator is the only one", the anterior forearm origins, the missing
"carpi", the wrist table's directions, the glossary's palmar interossei
"abduct", and the pelvic-girdle Critical Thinking answer. On 11.6: the
gluteus minimus, gracilis, and pectineus rows and glossary entry, the
glossary's "muscle" for the iliotibial tract and plantar aponeurosis, the
sartorius under the quadriceps, the tibialis posterior filed superficial, the
abductor hallucis and plantar interossei cells, and "back of the knee" for the
hamstrings. The one true distractor was 11.6's "soleus" as an option for the
largest muscle in the lower leg, since by volume the soleus is larger; it
became "popliteus" and the source key, gastrocnemius, stands. Rejected as
conventions or not evidenced: the brachioradialis in the "anterior compartment
of the arm", and the claim pass's own suspicion lines.

The blind solve agreed 59 of 61 and flagged 2, both adjudicated with the
source key standing: 11.1's bipennate option D, whose "at the opposite angle"
the module never states, and 11.5's "axial" alone, where the module says both
axial and scapular muscles. None disagreed. The verifier confirmed 14 source
alt defects and declined the rest, confirmed 34 source typos, and found two
page alt defects the checkers had passed (1110's left column does include a
muscle, and 1120 omits the two retinacula), which the parent applied. The
landing page the clerk wrote was checked by the parent, alt verbatim. Chapter
11 has no external links. Errata 2089-2172 (84: 5 options deviations, 36 claim
corrections, 14 source alt defects and 11 artwork typos, 18 text typos of
which 7 are kept as printed).

Lessons folded in: a grouped muscle table is a sortbins only when its group
labels share no root with its member names (Gluteal/gluteus,
Iliopsoas/iliacus, Pronation/pronator), which the checkers caught twice and
the word-exact lint does not; a table image's group rows become a leading
Markdown column headed with the grouping word; a double-keyed or misspelled
source Review option is an options deviation whose erratum number the parent
assigns in the ruling, because the deviation entry cites it and the keys test
fails on a placeholder; verify-section takes page paths, not a directory; the
checker brief's ban on reading ledgers is defeated by a grep over the scratch
directory, so authors' files belong in a subdirectory next run; and the claim
pass found 36 evidenced errors in one chapter, most in the muscle tables'
Movement and direction cells and in the glossary's "muscle" for fascia.

## Chapter 12 (October 20, 2026)

One wave on the AGENTS.md roster, started on a clean tree at 6e49ebb (the
Unit 2 Knowledge Check committed). Five Opus authors launched together, one
per section, an Opus checker per page as its author reported, one Opus claim
pass over the five pages and the landing page, an Opus alt-errata verifier,
and the blind solve in a fresh Fable subagent with masked pages. Sonnet
clerks did the landing page, the run facts (Parts A and B), the pins, the
errata draft, and the footer one-liners. Authors reported Practice items per
page of 13 (12.1), 17 (12.2), 10 (12.3), 13 (12.4), and 10 (12.5), 63 in all,
53 of them auto-graded, plus five graded Interactive Link self-checks in the
bodies. The chapter's 43 source exercises (25 Review, 10 Critical Thinking, 8
Interactive Link) all reached their pages. No module is in the September 8
table. The chapter is the first of Unit 3; the next run is chapter 13.

Part C graded five of the eight Interactive Link Questions (12.1's two, 12.4's
driving-force question, 12.5's two) on module sentences named in the run
facts and left three as prompts (12.2's two, 12.4's leech lab). 12.2's two
pooled items have no in-module note at all, a shape the book had not shown
before: each got an Interactive Link callout built from the pooled item's own
text at the position of the source's exercise set, and the rule is now in the
playbook. Two tables became sortbins (12.1's CNS/PNS structures, 12.2's glial
cells by location); 12.5's neurotransmitter-systems table was transcribed
only because its "Cholinergic" column shares a root with "acetylcholine" and
its cells carry bare Greek letters. The 12.1 author left the tract/nerve row
out of its sortbins because a Review Question keys "nerve"; the 12.2 author
dropped only the two keyed cells and kept Schwann cell, and the parent
confirmed that reading (each cell is its own sorted member).

Part C was wrong three times and the authors said so: it told the authors
"no period after the bold heading", a note that applies to **Interactive
Link** only (titled boxes print `**Homeostatic Imbalances.** *Title.*` and a
Disorders box `**Disorders of the Joints.**`), so 12.2 and 12.5 had to be
sent back; it named 10.4 as the callout exemplar on the strength of a grep
that had matched a footer clause (10.4 has no callouts); and it allowed
"Na+" inside an alt, which the ASCII-ion lint rejects (the authors spelled
the ions out). It also said the PDF prints "Creutzfeldt-Jacob" where it
prints "Creutzfeld-Jacob" like the CNXML. A lint false positive surfaced on
12.5: the ASCII-chemistry rule read "IPSP1" as a formula (I, P, S are
elements) while passing "EPSP1"; the author subscripted all five labels to
get past it, the parent narrowed the lint and had the plain labels restored.

The checkers found 9 defects on lint-clean pages, every one applied by the
page's author: five accept-list gaps (neuro-transmitter, precentral gyri,
neuro-peptide, uni-/multi-polar, glia/neuroglia/cell process, excitable cell
membrane, nongated channel), two hint leaks (12.1's "the Sensation
paragraph" naming a later key; 12.2's first Review hint eliminating two
options), one stem giveaway (12.4's leakage channel "not gated"), one
longdesc side error (12.1's 1205 ganglia leader, confirmed by the parent on
a crop), and one false footer clause (12.5's "all seven keep source order").
The claim pass found six evidenced errors, all accepted: the optic nerve's
smooth-muscle reflex "processed through the hypothalamus" (midbrain
pretectum; §15.4 m46581 repeats it and is to be re-tested when chapter 15
is authored), neurons "in the trillions" (about 86 billion), ependymal
"intracellular" space (intercellular), a myelinated-axon micrograph captioned
"EM × 1,460,000" (a WebScope screenshot at "mag 20X"; the number cannot
belong to the image and is dropped), the thermoreceptor neuron's action
potential starting "from the axon hillock" (the initial segment beside the
endings, by the module's own caption), and "the G protein hydrolyzes ATP"
(GTP). The blind solve agreed on 53 of 53 with no flags. The verifier
confirmed 26 source defects (16 alts, 3 artwork, 7 text) and rejected 21
claims, and found one page fix the checker had passed (1204's occipital
leaders end beside the midline, not at the back). Errata 2173–2204; the six
claim corrections carry decisions entries. The one chapter 12 external-link
flag is a connect timeout on the 12.2 histology-slide redirect, not a 404,
so it stays linked.

Outside the chapter, the session fixed the large-push failure: Homebrew git
links the system libcurl, whose LibreSSL backend corrupts a pack over about
20 MB ("bad record mac"); `http.sslBackend secure-transport` in the repo's
local config pushed a 25 MB test branch in two seconds, and run.md step 8
now says so.

## Chapter 13 (October 21, 2026)

One wave on the AGENTS.md roster, started after chapter 12 was committed
(fbf60ae). Four Opus authors launched together, one per section, an Opus
checker per page as its author reported, one Opus claim pass over the four
pages and the landing page, an Opus alt-errata verifier, and the blind solve
in a fresh Fable subagent with masked pages. Sonnet clerks did the landing
page, the run facts (Parts A and B), the pins, and the errata draft. Authors
reported Practice items per page of 13 (13.1), 16 (13.2), 14 (13.3), and 15
(13.4), 58 in all, 50 of them auto-graded, plus four graded Interactive Link
self-checks in the bodies. The chapter's 40 source exercises (20 Review, 8
Critical Thinking, 12 Interactive Link) all reached their pages. No module
is in the September 8 table. The next run is chapter 14.

Part C graded four of the twelve Interactive Link Questions on module
sentences verified in the raw CNXML (13.2's two basal-nuclei questions,
13.3's circle of Willis and lumbar puncture) and left eight as prompts.
13.1's "whitematter" item is the book's first pooled Interactive Link
Question that asks no question at all and carries a key answering one
nobody asked; it stands as a prompt with a Source note (erratum 2205).
Two tables became sortbins: 13.1's vesicle stages (bins the three primary
vesicles, members the adult structures and ventricles, the posterior
neural-tube row left out) and 13.4's cranial nerves by Sensory, Motor, and
Mixed, with the oculomotor nerve left out because its name prints the bin
word; 13.3's two-row CSF table was transcribed only. 13.3 yielded no
glossary recall item at all — every one of its 34 meanings prints its term,
a root, or a translation — so its recall items are body and summary clozes,
and that is now a playbook rule.

A 2:30 am session reset killed all four checkers and the claim pass at
once; every one resumed from its transcript by `SendMessage` and lost
nothing. The checkers found seven defects on lint-clean pages (13.1 none):
an undisclosed Review-Question reorder and a false footer alt-reason on
13.4; a recall stem printing half its key ("posterior horns" for posterior
columns) and an alt calling a skull-stripped brain "the head" on 13.2; and
on 13.3 an author-written memory-loss MC whose "frontal" distractor 13.2
makes true (prefrontal lobe, short-term memory) — it became a cloze of the
module's own sentence — plus two accept-list gaps. The parent ruled 13.4's
fifth Review Question stem ("not under direct control of the peripheral
nervous system", where the module says the enteric system needs no CNS
input) printed as the source has it with a footer clause (erratum 2206);
the blind solver's one "unsure" was the same item.

The claim pass was the largest yet: 26 evidenced findings, all accepted,
nine of them on 13.4 (plexus levels contradicting the module's own figure,
the axillary nerve "branching" from the radial, the geniculate ganglion in
the glossopharyngeal row, the hypoglossal row's larynx and pharynx,
cranial ganglia "outside the skull", paravertebral ganglia as a set above
the chain, the fibular nerve in the posterior leg, the glossopharyngeal
moving tongue muscles, and "thoracic nerves in no plexus"), nine on 13.2
(the cerebellum caption's "from the cerebellum", the indirect pathway's
"pars compacta", a disinhibition parenthetical that describes reciprocal
inhibition, Area 22 labelled primary auditory cortex in the Brodmann
artwork, a cortex of "one square meter", pontine nuclei in the tegmentum,
tegmentum "from the Latin for floor", and two glossary entries), six on
13.3 (stroke as embolus only, baroreceptors at the base of the common
carotids, the dural infoldings, the basilar artery "dorsal", the
occipital sinus along the occipital lobes, and an inverted caption), and
13.1's myelomeningocele "life expectancy is not reduced". Each page's
author applied its own corrections with Source notes; one cloze (13.4's
paravertebral ganglia) was rebuilt on the corrected sentence and its solve
record remapped. The pass also caught the parent's own splash alt (the
left arm is held out to the side, not behind the back), which the verifier
confirmed; run.md now says to crop each limb before placing it. The
verifier confirmed 19 source defects (6 alts, 4 artwork, 2 captions, 7
text) and rejected 9, among them the "(see also )" empty link, which the
PDF prints as a figure number and is therefore a CNXML gap, not an
erratum; it found one page fix the checker had passed (1307's "seven
areas" over eight colored patches). The blind solve agreed on 50 of 50.
Errata 2205–2251: 25 claim, 6 alt, 4 artwork, 2 caption, 10 text; the
claim corrections carry decisions entries. The chapter's three flagged
external links are bot walls or a redirect loop, not 404s, and stay
linked. The parent also added the two Anatomy and Physiology Knowledge
Check routes to the axe suite, which run.md had asked for as each check
landed.

## Chapter 14 (October 21, 2026)

One wave on the AGENTS.md roster, started after chapter 13 was committed
(609d481). Three Opus authors launched together, one per section, an Opus
checker per page as its author reported, one Opus claim pass over the three
pages and the landing page, an Opus alt-errata verifier, and the blind solve
in a fresh Fable subagent with masked pages. Sonnet clerks did the landing
page, the run facts (Parts A and B), the pins, and the errata draft. Authors
reported Practice items per page of 23 (14.1), 16 (14.2), and 17 (14.3), 56
in all, 50 of them auto-graded, plus five graded Interactive Link
self-checks in the bodies. The chapter's 32 source exercises (15 Review, 6
Critical Thinking, 11 Interactive Link) all reached their pages. Module
m46574 (14.3) is in the September 8 table (the PDF prints "Walter"
Penfield; the pinned text prints Wilder and wins). The next run is chapter
15, the last of Unit 3, and then the Unit 3 Knowledge Check.

Part C graded five of the eleven Interactive Link Questions: 14.1's
cochlea, ossicles, and frequency-coding questions (the last two on figure
captions the page prints, named as such in the footers), 14.2's
prosopagnosia question on the Disorders box's own sentence with the rubric
built as alternatives, and 14.3's corneal reflex on the body sentence; six
stand as prompts. The mechanoreceptor table became a four-bin sortbins
(free nerve endings, tactile, lamellated, and bulbous corpuscles) over the
location and stimulus cells only, since every eponym prints the bin word
"corpuscle" and the hair, muscle, and tendon rows print theirs; the author
dropped one member Part C had listed because it sat inside another row's
cell. The two-image Phineas Gage figure was split into two media figures on
the 4.2 precedent.

Part C was wrong three times, and the authors said so: 1427 is one
micrograph, not the "four panels" Part C inferred from four `LM ×`
credits; "Retinal Disparity" was the in-box figure's `<title>`, which this
book never prints, not a sub-title; and the sortbins member "Dermis, joint
capsules" sorted under two bins. All three are now in run.md.

The checkers found fourteen defects (three on 14.3, four on 14.2, seven on
14.1) — two cross-item leaks, one of them a stem BELOW an item printing its
key, which settled that the forwards-and-backwards rule does not license a
later stem to print an earlier key; a trigeminal sortbins dropped for a
spin-/spino- root giveaway and because a table-less module carries one
prose-built sortbins, not two; five longdesc miscounts and leader
mis-targets on 14.1's figures; and accept gaps (the `-ices` plural, the
hyphenated prefix). The parent's read of a replacement cloze caught a leak
the author's key grep had passed: its clue was answered by a printed label
in the ascending-pathways longdesc. The ASCII-chemistry lint read the
Bookshelf id NBK555891 as a formula; the lint now exempts NBK and PMC ids.

The claim pass found sixteen evidenced errors and the parent accepted all
sixteen, thirteen of them on 14.1 (both oblique muscles rotating the eye
laterally, the inferior rectus paired with the inferior oblique, the
olfactory tract where the nerve is meant, tannins and aspirin as alkaloids,
the capsaicin channel's threshold at body temperature, synapses in the
dorsal root ganglion, and six glossary entries contradicting the body);
the blind solver added a seventeenth (the aqueous humor entry's "anterior
chamber"). The authors applied their own with Source notes; no graded item
re-hashed. The solve agreed on 50 of 50 items with no flags. Errata
2252–2284.

## Chapter 15 (October 21, 2026)

*The Autonomic Nervous System*: four sections (m46582, m46579, m46581,
m46587; intro m46590), run from `docs/briefs/anatomy-physiology/run.md` on
the AGENTS.md roster, straight after chapter 14 in the same day. No module
is in the September 8 table. The chapter has 34 pooled source exercises
(20 Review, 8 Critical Thinking, 6 Interactive Link); the pages carry 56
Practice items, 48 of them auto-graded, and the blind Fable solver agreed
on 47 of 48, with its one flag (15.1's "longest fiber", where the module
calls two fibers long without ranking them) adjudicated for the source key.
Errata 2285–2313: ten claim corrections, one double-keyed Review Question,
four source alts, seven artwork defects, seven text defects. The next run
is chapter 16, then the Unit 3 Knowledge Check after chapter 17.

Part C graded two of the six Interactive Link Questions, both on 15.2: the
orthostatic question on one box sentence, and the pupil-dilation question
on a three-sentence paragraph plus the figure caption — the first time a
paragraph rather than a single sentence fixed an answer, and the rule's
"module text fixes the answer" covers it. The other four stand as prompts
(the liver-glucose half, the hypothalamus–pituitary half, the urethral
sphincter, and the 3-D screen are all in the linked media only). Table
15.1's two-by-two signaling grid was transcribed only; Table 15.2 became a
sortbins on the example DRUGS by overall result, never the drug-type names,
three of which share a root with the bin labels. 15.2's fifth objective
("drugs that affect autonomic function") is not delivered by the module's
body; its group was filled from the Orthostatic Hypotension box's
medication sentences and the gap filed as a text erratum.

Part C was wrong twice and the gates and authors said so: the misspelled
keyed option "intermural" (2285) needed `DISCLOSED_DEVIATIONS` kind `key`,
not `options`, because the keyed option's own text changed (the playbook
sentence now says so); and an earlier erratum's "re-test when chapter 15
is authored" note had to be found by the parent — Part B now greps the
book's errata for the chapter's module ids. The checkers found nine
defects on lint-clean pages: a double-keyed asthma item on 15.4 (the
module's own table makes anticholinergics bronchodilators too; distractor
replaced, 2286), a 1512 longdesc with the left chain's direction wrong, a
hint that printed "Hypotension" above a blank keyed hypertension, a hint
clause that left only the one parasympathetic ganglion among the options,
an author MC that re-asked the Review Question directly below it, a 1511
longdesc with the lilac arc in the wrong ring, a missed second solid line
in 1502 row (c), and two false footer sentences.

The claim pass found eight, all accepted: "mesenteric plexus" for the
myenteric plexus (the book's own 15.2 and 23.1), the lesser splanchnic
nerve routed to the inferior mesenteric ganglion against the module's own
figure, "Adrenalin is no longer sold" (the FDA label is current),
proprioceptors as the orthostatic trigger (13.3 names the carotid
baroreceptors), the Latin root "effere", cardiac accelerator and vasomotor
nerves called preganglionic (19.4 and 15.1's own ACh rule), β-receptors
"associated with vasoconstriction" (20.4), and phenylephrine dilating
bronchioles. Two consequences worth remembering: a corrected sentence can
orphan a hint — the asthma item's hint pointed at the phenylephrine
sentence and was re-pointed at its Source note — and **a corrected term
cannot be an author item's key**: the re-keyed "myenteric plexus" recall
item failed `verify:source-keys` (not a phrase the module prints) and was
replaced by a body cloze, re-solved alone in a fresh Fable agent. The
alt-errata verifier confirmed 11 of 19 claims (1508's "cervical vertebra"
and "ciliary ganglion of prevertebral ganglia", 1507's two "dorsal root
ganglion" labels on the autonomic ganglion, 1510's "Oculomotor cortex
(includes Eddinger–Westphal nucleus)", 1503's "Super salivatory nucleus",
1502's gray-ramus leader and "spinal ganglion", 1513's one-eye alt). No
429 this run; authors ran 204–254k tokens over three rounds, checkers
142–165k, the claim pass 181k, the verifier 142k, the solver 114k plus 63k
for the one-item re-solve, the Clerks 49–219k.

## Chapter 16 (October 24, 2026)

*The Neurological Exam*: five sections (m46594, m46650, m46607, m46640,
m46604; intro m46593), run from `docs/briefs/anatomy-physiology/run.md` on
the AGENTS.md roster, three days after chapter 15. No module is in the
September 8 table, and the chapter has no tables, footnotes, subfigures,
or References sections. It has 43 pooled source exercises (25 Review, 10
Critical Thinking, 8 Interactive Link); the pages carry 76 Practice items
(16, 15, 15, 15, 15), 66 of them auto-graded, and the blind Fable solver
agreed on all 66 with none flagged and none unsure, the first clean solve
of the book. Errata 2314–2342: three Review Question rulings (2314–2316),
eight claim corrections, six source alts, four artwork defects, six
one-word typos, one terminology slip, one sentence fragment, and twelve
"Reviewed and not errata" lines. The next run is chapter 17, then the
Unit 3 Knowledge Check.

Part C graded two of the eight Interactive Link Questions, both on 16.2:
the three-word-recall question, fixed by two episodic-memory sentences,
and the right-handedness question, fixed by the Everyday Connection box's
paragraph. The other six stand as prompts, among them a half-fixed one
(two-point discrimination) and one the dermatome figure's T10 label
almost fixes; Part C ruled that a figure label alone is not module text.
There are no table sortbins, and one prose-built sortbins on 16.4, upper
versus lower motor neuron signs, from which the checker removed one
two-way item. Two source Review stems on 16.4 were defective: the
jaw-jerk reflex asked "for the vestibulocochlear nerve", and "somatic and
visceral senses" keyed to the ventral root. Both were corrected in place
with Source notes, a new handling class: no `DISCLOSED_DEVIATIONS` kind
exists for a stem, so the ruling reserves the erratum (2314, 2315) and
the decisions entry carries the change.

Part C was overruled once, by the claim pass. 16.5's Review key
"processing visual information" (cannot be attributed to the cerebellum)
was ruled sound in Part C and again after the checker contested it; but
the module's own sentence says visual-cortex information "is part of the
processing that occurs in the cerebrocerebellum", so the keyed option
became "primary visual perception" (kind `key`, erratum 2316). A parent
ruling on a key is provisional until the claim pass has read the module.
Two process slips were caught and fixed in the kit: the run.md
`grep 'Anatomy'` errata extract was too narrow, and the parent's splash
alt ran 817 characters against the 600 cap.

The checkers found 15 defects on lint-clean pages: a hint printing a word
of a multi-word key ("trigeminal"), a hint pointing at the wrong sentence
ordinal, three missing synonym, British, plural, or hyphen accept sets, a
module-equated synonym ("procedural memory is motor memory"), a movable
"language" leak that had been left disclosed instead of reordered, an
example-blank cloze (stroke, tumor, trauma), a recall stem translating
its key's prefix (hyperflexia), a two-way sortbins item, and four
figure-reading errors (1613's orange lobe position, 1605's four lines
rather than five, 1604's one auditory leader rather than two crossing
Wernicke's oval, and a 1613 hint steer). The author accept list now gains
British spelling and the module-equated synonym.

The claim pass raised 10 findings and the parent accepted 9: Brodmann's
century; areas 41 and 42, not 22, for primary auditory cortex (twice);
lobotomy, not lobectomy; the abducens nucleus in the pons; internuclear
ophthalmoplegia defined backwards (body, glossary, and the author's
recall item all rewritten); the submandibular, not pterygopalatine,
ganglion for the salivary glands; the head of the ulna at the wrist; and
pronator drift positive, not negative. The tenth, antibiotics as "not a
cause" of ataxia, is a module-scope item with a metronidazole aside, and
went to "Reviewed and not errata".

The alt-errata verifier confirmed 18 of 31 claims, ruled 10 not errata,
and left 3 to the rulings: 6 source alts (including the splash alt's
"dentist" for the caption's air force nurse), 4 artwork defects (1603's
"cytotechtonic" and "Area 22 Primary auditory cortex", the latter
repeating 2223 and 2224 in a new module; 1613's "Midsaggital"; 1614's
"Optic nerve" leader on the chiasm), and 8 text defects. Authors ran
198–217k tokens in the first round plus two or three fix rounds (final
203–232k), checkers 141–186k, the claim pass 191k, the verifier 149k, the
solver 125k, and the Clerks 46–236k (run-facts 236k, landing 50k, pins
46k); the errata drafter ran 197k.

## Chapter 17 (October 24, 2026)

*The Endocrine System*: eleven sections (m46656, m46667, m46699, m46700,
m46687, m46684, m46693, m46670, m46685, m46680, m46658; intro m46682),
run from `docs/briefs/anatomy-physiology/run.md` on the AGENTS.md roster
the same day chapter 16 closed, with eleven Opus authors launched
together, the largest wave of the book. No module is in the September 8
table; there are no References sections and no cross-module links, and
17.11 is the one module with no glossary. It has 60 pooled source
exercises (32 Review, 23 Critical Thinking, 5 Interactive Link), 19
vendored images (1800–1823, five numbers absent from the module set), and
8 tables; the pages carry 117 Practice items (9, 16, 14, 15, 10, 12, 8,
8, 8, 9, 8), 94 of them auto-graded, and the blind Fable solver agreed on
93 with one flagged, none disagreeing, and none unsure. Errata 2343–2379:
two ruled exercises (2343, 2344), seven claim corrections, one internal
inconsistency with a Source note only, three artwork defects, thirteen
source alts, and eleven one-word text defects. The next run is the Unit 3
Knowledge Check (chapters 12–17), then chapter 18.

Part C graded two of the five Interactive Link Questions, 17.3's
roleofhypo (on the TSH sentence) and 17.6's adrenalglands (on the
cortisol-catabolism paragraph), and made two prompts: 17.1's cAMP, whose
answer is in 17.2 and not in its own module, and 17.7's "turning on the
lights". 17.9's pancreas1 is a prompt with a Source note and erratum
2343, because the printed key "Insulin is overproduced." names the
compensatory response where the module says the cells become resistant.
Table sortbins were ruled for 17.1 (endocrine against nervous, two rows
out as substrings), 17.3 (lobes), 17.6 (cortex and medulla, the cort-
row out), 17.8 (gland bins), and 17.10 (four organ bins of sixteen
rows); 17.2's recap table is transcribe-only with an optional prose-built
hormone-class sortbins; 17.9 was the author's call; and 17.11 has a
prose-built germ-layer sortbins with the anterior pituitary out because a
Review Question keys it. The notation is T₃/T₄, IP₃, Ca²⁺, I⁻ for the
source's en-dash iodide, vitamin D₃, and the 17.2 MathML amine group set
as the text –NH₃⁺ beside –COOH. The chapter has a Career Connection
(Endocrinologist), a Disorders of the Endocrine System heading with an
italic topic, and three University of Michigan histology-slide boxes set
as Interactive Link callouts.

Part C got several things wrong, and the authors caught them. It listed
17.8's "athletes.Commonly" and "mass.The" as missing spaces, but those
were paragraph breaks in the drafter's stripped dump; the author found
the real one, "FSH.During". It called 1811 "two-part" from Part B, and
the author read the image and found three panels. It told 17.3 to drop
every hormone a Review Question keys; the author kept ADH, whose question
keys its role and not its lobe, and the parent accepted the narrower
reading. It decided a 17.8 gland sortbins that the author showed could
not be built, since every row overlaps another row or the body, and a
17.9 sortbins the author declined for the same reason. A 17.10 checker
also read run-facts-B.md, which is not its input; checker.md now forbids
it.

The eleven checkers accepted 13 defects and raised about 20 concerns.
They added accept lists (British spellings and module-equated synonyms:
"parathyroid hormone deficiency", "neuroendocrine tissue", "osseous
tissue", "epithalamus", "responsiveness", "FSH and LH"); fixed hints that
described a paragraph's content or pointed by position at the subsection
titled with the key (17.7, 17.3, 17.11, and 17.6's paragraph count); and
removed a root giveaway in a sortbins (17.10, Gastrin under
Gastrointestinal tract). They moved self-answering and leaking neighbours
(17.11's epinephrine item; 17.4's "all of the above" Review Question,
moved to lead its group; 17.3's Review Question, moved ahead of the
sortbins that steered it; 17.5's self-check, moved across a group
heading), replaced an example-blank cloze (17.8, estrone to LH), and
rebuilt an ambiguous summary cloze as a body cloze (17.2, cholesterol).
They also caught longdesc errors against the image (17.5's 1817 cycle
direction, 17.2's 1804 arrows, 17.9's 1820 duct arrows, 17.4's artery
forks) and a 17.1 footer that misstated which labels a source alt omits.
One finding was wrong: 17.3's "head faces right" on 1808, where the head
faces left, as the parent confirmed from the image. Two source Review
Questions were ruled. 17.8's "The gonads produce what class of hormones?"
is double-keyed by the module's own "peptide hormone inhibin", so the
options deviate, with the distractor replaced by "glycoprotein hormones"
(erratum 2344). 17.8's FSH–inhibin question and 17.3's ADH question have
distractors true only through other chapters or indirectly; the keys
stand, filed as Reviewed and not errata.

The claim pass read about 302 claims and raised 9 findings and 13
suspicions. The parent accepted F1 (17.2's table-image cell "carboxyl
group is replaced with a benzene ring", where the module's own amine
paragraph says removed), F3 (prolactin Peptide to Protein in the 17.2 and
17.3 tables), F5 (17.6's "three major functions" above a five-item list),
F6 (17.6's Cushing's pituitary tumor "secretes cortisol or ACTH" to
ACTH, per 26.5), F7 (17.9's liver and brain cells "do not have insulin
receptors", dropped on 17.2's target-cell definition and the module's own
liver sentences), F8 (17.9 somatostatin Protein to Peptide), and F9
(17.10's model answer "because the immune system is already developed",
dropped per 21.1). F2, oxytocin's Asp and Glu for Asn and Gln on 1802, is
an artwork erratum with longdesc marks, and F4, 17.3's "seven hormones"
against the module's own six, is a Source note with the text kept, filed
as an internal inconsistency. The pass also caught the parent's landing
alt: "both arms" became one visible arm, and "pond" became "still water".
The fix wave was killed mid-task by the weekly Opus limit; all five
authors resumed by SendMessage after the reset and lost nothing, because
no edit had landed.

The keys gate failed the two graded Interactive Link self-checks as
"diverges": a one-word source solution padded into a sentence has few
solution words. It was folded into the tool (SHORT_SOLUTION_WORDS = 4,
with the status reworded when the solution is carried whole) and a test,
and it is not a deviation. The one flagged solver item was 17.4's "all of
the above", where the solver agreed with the key and noted that option a
is true; adjudicated, the key stands. Author results merged 119 items (1
rebuilt), the solve merged 94, prune found 0, and provenance found 0
low-confidence.

The alt-errata verifier checked 59 distinct claims (36 confirmed, 10
rejected, 13 not errata) and found that 1807's PINNED image prints the
nucleus labels reversed where the printed book has them right, an
artwork erratum of the pinned media. The errata block is 37 entries with
nine decisions entries: 2 ruled exercises (2343, 2344), 7 claim
corrections (2348, 2349, 2367, 2368, 2373, 2374, 2378), 1 internal
inconsistency with a Source note only (2354), 3 artwork (2351, 2356,
2369), 13 source alts, and 11 one-word text defects. The claim-pass
ledger row carries 2348–2349, 2354, 2367–2368, 2373–2374, and 2378.
`check:external-links` finds no dead link on a chapter 17 page. Authors
ran 134–257k tokens (first round 134–247k, plus two or three fix
rounds), checkers 108–178k, the claim pass 210k, the verifier 175k, the
errata drafter 225k, the solver 144k, and the Clerks 47–190k (run facts
190k).

## Chapter 18 (October 25, 2026)

*The Cardiovascular System: Blood*, the first chapter of Unit 4, *Fluids
and Transport*: six sections (m46710, m46691, m46707, m46701, m46705,
m46708; intro m46703), prepped the evening of October 24 and run the next
day from `docs/briefs/anatomy-physiology/run.md`, with six Opus authors
launched together, six Opus checkers, one Opus claim pass, one Opus
alt-errata verifier, a fresh Fable blind solver, and Sonnet Clerks for the
landing page, run facts, pins, errata draft, and this entry. It has 39
source exercises (22 Review, 13 Critical Thinking, 4 Interactive Link),
every Review Question four-option, and 17 vendored images (1900–1916),
three of them table images (1915, 1914, 1913) and one (1916) inside an
Interactive Link callout; 18.6 carries the chapter's only References
list. The pages carry 72 Practice items (13, 10, 10, 16, 10, 13), 59 of
them auto-graded and 13 self-checks, and the blind solver agreed on all
59, flagging and contradicting none. Errata 2380–2423 (44 entries): four
parent rulings, twelve claim corrections, five source alts, three
artwork defects, two captions, and eighteen one-word or typographic text
defects. Derek asked this session to commit after every run, and this run
is committed. The next run is the Unit 3 Knowledge Check (chapters
12–17), then chapter 19.

Part C graded none of the four Interactive Link Questions, and each
prompts only. 18.1's key lists blood-gas measurements for a glucose
question (a Source note, erratum 2380), and its `openstax.org/l/normallevels`
link redirects to an NBME PDF that returns 404, so the link is un-linked
in the life-sciences form (2381). 18.2's key names stroke and embolism,
which the module never mentions; 18.4's is a cell count on the linked
slides; and 18.5's pooled item is a statement with no question, whose key
answers an unasked one (a Source note, 2382). An 18.3 Review Question
distractor, "myeoblasts", became "myeloblasts" as an `options` deviation
(2383). The three table images take the rule-4 form (bold title, a
Markdown table from the image, and a `mediafigure` whose longdesc
transcribes the rows), while 18.5's clotting-factors table and 18.6's
ABO and Rh percentage table are transcribed only. Sortbins were ruled
for 18.3 from the 1914 table (erythrocytes, leukocytes, platelets) and
18.6 from the 1913 chart (A, B, AB, O); 18.4 has a prose-built granular
and agranular one, 18.5 a prose-built extrinsic, intrinsic, and common
pathway one, and 18.1 a prose-built one over the three Functions of Blood
subsections, the author's choice. The notation is Unicode blood types and
Rh (A⁺ through O⁻, Rh⁺, Rh⁻, the first corpus use of the superscript
forms), Fe²⁺ and Fe³⁺, Ca²⁺, O₂ and CO₂, B₁₂, the upright micro sign for
the source's italic mu in µL, and mm Hg with the space. One key ruling
came before the wave: 18.4's allergy item keyed basophils stands, since
the module ties basophils to histamine and allergies and eosinophils are
not an option, and the solver agreed.

Part C got four things wrong. Its 18.6 sortbins members printed their own
bin letter ("Erythrocyte antigens: A only" under A); the author declined
the item with evidence, the parent re-ruled a letter-free member set,
only three of six survived the key check, and the author replaced the
sortbins with one multiple choice built from the chart's antibody row.
The bin-word lint had skipped tokens of three characters or fewer, so it
now reads a one-token bin label whole (`tools/lint/lints.mjs`, with a
test). Part C also suggested the member "lifespan of approximately 120
days" for 18.3, which falsified Review Question 1's "4 days" distractor;
the checker caught it and it was removed. It called 1907 "micrographs"
from its stem, and the author set `kind="diagram"` from the image, since
it is a drawing. And its PO₂ ruling would have printed "PO₂ or PO₂" where
the source contrasts two notations in one sentence, so the 18.3 author
kept P<sub>O₂</sub> beside PO₂.

The checkers' defects were few and small: accept lists (thymus gland,
granulocyte CSFs, carbamino-haemoglobin, blood typing, and body, B cells,
and plasma cells for the anti-Rh cloze); a coagulation cloze passable by
retyping its stem, rebuilt as a body cloze; a hint that named a rubric
checkpoint and one that named a paragraph by the key's word; the 18.4
Interactive Link text "normal blood smears", which answered its own
prompt; and a prothrombinase sortbins member that asked Review Question
2's fact. They also found two alt readings (1909's bound-platelets leader
ends on an arrow, and 1905's globin arrow returns to the marrow only) and
the 1914 alt's "under" wording, all confirmed by the authors on crops.
18.1 and 18.3 had no defects.

The claim pass raised eleven findings, all accepted and applied with
Source notes, footer clauses, and decisions entries. 18.1's globulins
"1.0–1.5 g/dL" became 2.0–3.5, the module's own albumin figures. 18.3
took six: erythrocytes as "25 percent of the body's cells" became more
than 80 percent (Sender, Fuchs, and Milo 2016); the kidneys "filter 180
liters of blood ... 20 percent of the total resting volume" became 180
liters of plasma and one-fifth of resting cardiac output (section 25.3);
hephaestin became a membrane ferroxidase for iron egress and not a plasma
protein for uptake (Vulpe 1999); "iron-containing paints" became
lead-containing; aplastic anemia became usually acquired and
immune-mediated, a failure of hematopoietic stem cells (Young 2018); and
the biliverdin glossary lost "in the liver". 18.4's platelet count
"150,000–160,000 per µL" became the 18.3 table's 150,000–500,000, and
the thrombocytopenia glossary lost "(hemophilia)". 18.5's "antihemolytic"
became "antihemophilic" factors A, B, and C in the table and the
paragraph, and vitamin K left the list of clotting factors. A twelfth
followed the verifier: 18.2's glossary "pluripotent" hematopoietic stem
cell became multipotent, matching the module's own hierarchy and figure
label. The landing page's objective 7, "AB and Rh blood groups", was
corrected to "ABO" by the parent with a footer clause. Two internal
inconsistencies stand as printed with footer clauses and errata: 18.1
Review Question 1's keyed "slightly more viscous" against the module's
"five times", and 18.5's lost-word "has both circular layers" sentence.
18.6's placeholder "(Seek more content for additional information on
immunity.)" became a plain reference to the lymphatic and immune system
chapter. Nineteen suspicions were not acted on; the drafter lists the
solver's and claim pass's reviewed-not-errata points (ABO hemolytic
disease as a distractor, the eosinophil "antihistamine molecules", the
1800-cell cutoff that the 18.3 table does print, and table row XII
"activates plasmin").

The verifier read 55 claims: 29 confirmed, 4 ruled, 21 not errata, and 1
rejected. The confirmed source alts, all already rewritten on the pages,
are the splash 1900, which omits the platelet; 1902 "hemotopoietic";
1905 "hemopoeisis"; 1910 "Rh+ antibodies" for Rh⁺ fetal cells; and 1912
"three red blood cells" for a typing card. The confirmed artwork and
caption defects are in print: 1915 prints "Platelets <1 percent" twice,
1905's step 6 says heme is recycled where the body calls it waste,
1913's "O is the universal donor" has no Rh sign, 1904's caption (b)
describes cell counts where panel (b) draws heme, and 1912's
"anti-seras". The solver agreed on all 59 items and noted the viscosity
option, the undefined "MT", and row XII's "activates plasmin" in its
notes.

The ledger merged 72 author records and 59 solve records, pruned none,
and found 0 low-confidence provenance. The claim-pass ledger row carries
2386, 2390, 2394–2399, 2408–2409, 2411–2412. The build is green at
5860 of 20000 files and 551.1 MiB; the keys gate baseline rose from 5906
to 5972 and the coverage floor from 3484 to 3523 (`baseline:update`).
Authors ran 181–229k tokens over up to four rounds, checkers 147–168k,
the claim pass 192k, the verifier 201k, the solver 135k, and the Clerks
47–198k.

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

## Knowledge Check 2 — Unit 2, chapters 5–11 (October 20, 2026)

The second Anatomy and Physiology check, run from
`docs/briefs/anatomy-physiology/kc-run.md`. `knowledge-check-05-11.md`,
"Knowledge Check: Unit 2 — Chapters 5–11", weight 13; no later chapter
shifted, since chapter 12 is unauthored. 43 sections, 129 items: 47
multiplechoice, 37 textin, 42 selfcheck (every one with a rubric), 3
sortbins.

Run shape: seven Opus authors (one per chapter), seven Opus checkers
launched as each author reported, three Opus reverse-recall sweeps on the
finished blocks (A ch5/8/11, B ch6/7, C ch9/10), one Opus second checker in
two rounds, and a blind Fable solve; the parent read every block.

- **Checker yield (hard/soft):** ch5 0/3, ch6 1/6, ch7 3/2, ch8 2/4, ch9
  1/7, ch10 2/8, ch11 3/7.
- **Sweep yield (hard/soft):** A 1/11 (45 items), B 2/14 (36 items), C 1/11
  (48 items). Sweep C's one hard flag (10.1 excitability) was kept as a
  distractor with no defining fact.
- **Second checker:** round 1, 40 read / 36 pass / 4 fail; round 2, 9 read /
  8 pass / 1 soft (11.5 spread, accepted and ledgered).
- **Replacements** (13 items stand, from 15 replacement events; 6.7 and 11.5
  were each replaced twice):
  - 6.2 selfcheck: bone-count selfcheck replaced by sesamoid bones.
  - 6.2 MC: long-bone shape-not-size MC replaced by short bones (stability and support).
  - 6.7 selfcheck: storage-site selfcheck, then the body-systems selfcheck, replaced by calcium abundance, roles and normal blood level.
  - 7.3 selfcheck: disc-thickness selfcheck replaced by the vertebral-column ligaments.
  - 7.4 MC: first-ribs-to-manubrium MC replaced by floating-rib costal cartilages.
  - 8.3 selfcheck: pelvis-immobility selfcheck replaced by the forensic anthropologist's steps.
  - 9.1 MC: pubic-symphysis MC replaced by the functional classification of fibrous joints.
  - 9.4 textin: "extrinsic" ligament textin replaced by gout.
  - 9.7 selfcheck: mesenchyme selfcheck replaced by the limb-bud and ossification timeline.
  - 10.2 MC: epimysium MC replaced by multiple nuclei and gene copies.
  - 10.5 MC: two-criteria MC replaced by why FO fibers produce high tension.
  - 10.7 textin: mitochondria textin replaced by the heart's conduction system.
  - 11.5: thenar-eminence textin replaced by median nerve, then by a nine-muscles MC (type changed textin to MC, parent-authorized).
- **Blind solve:** 87/87 agree, 0 disagree, 0 flagged, 0 unrecognized,
  0 missing, 0 unanswered, read against the 43 masked section pages. Errata:
  none filed; one "Reviewed and not errata" note in
  `docs/openstax-errata.md` (§9.7 "twelfth week of embryonic development"
  against §8.5 "twelfth fetal week", the book's loose generic usage).
- **Lessons** (the last five bullets of `kc-run.md` §0):
  - Grep the page description and objective headings first, in the order description, objective headings, Practice stems, options, hints, rubrics, sortbins, body self-checks.
  - Read each finished block against the other finished blocks; Unit 2 had three cross-chapter twins and one stem printing another block's key.
  - A replacement may change type when the section page leaves no clean key of that type (11.5), authorized by the parent and recorded in the ledger.
  - Trial-assemble in the scratchpad once the blocks are checker-clean and before the second checker, to see leak candidates and key-position spread cheaply.
  - The sweeps earned their wave here: 4 hard flags on 129 items, all missed by the per-chapter checkers.
- **Costs:** authors 177–325k tokens including fix rounds, checkers
  123–209k, sweeps 156–182k, second checker 268k over two rounds, solver
  127k, close-out clerk 74k; about 3 h wall.

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
