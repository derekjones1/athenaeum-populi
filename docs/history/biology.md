# Biology 2e — history

Dated records moved out of the operative playbook, kept for provenance.
Both sections below were cut verbatim from `docs/subjects/biology.md`.

## Completion audit record (September 5, 2026)

After the last Knowledge Check landed, the book was declared complete on
the strength of one more pass that the per-section gates do not perform:
a cold random sample read by fresh checkers, the way the Knowledge Check
audit had already sampled its own items. The draw (seeded, stratified by
unit) was 174 Practice items and 62 figures over 8 Sonnet checkers, one
per unit, briefed to answer each item before opening the page, then to
check page against CNXML, and to read every sampled image before judging
its alt and longdesc. Results, after the parent verified every flag on
the image or the module:

- **Items:** 0 wrong keys, 0 unprinted or also-defensible distractors,
  0 rubric defects in 174. Two real item defects: a hint that restated
  the glossary definition of its key (19.3 diversifying selection) and an
  accept list missing the noun phrase its stem invites (20.1 "rooted" →
  "rooted tree"). One checker "defect" was a disclosed adjudication
  (8.3's double-keyed option, erratum 116) and was not a defect.
- **Figures:** 5 alt/longdesc defects in 62 — a scan path described in
  the wrong direction with the wrong colours (10.2), an inset whose
  colour-to-bone mapping omitted the shape the caption names (29.6), a
  "numbered carbons" claim with no numbers drawn (3.2), "pink buds"
  inherited from a source alt the photo contradicts (26.2, erratum 319),
  and "embryo" for a nine-week fetus (43.5). One source defect the sample
  surfaced without a page fix: a micrograph's printed scale bar reads
  150 μm where the source alt says 150 nm (16.3, erratum 318).
- **A class no gate saw:** a shortcode parameter written twice. Hugo's
  `.Get` keeps the last value and drops the rest silently, so a textin
  with `accept="greenhouse gasses"` on one line and `accept="greenhouse
  gas"` on the next graded only the second. A corpus scan found two such
  textins and one mediafigure with a repeated `kind`; the lint now refuses
  a repeated parameter on any shortcode.

The rates this audit measured are the baseline's planning numbers for the
next book's sample.

## Figure-alt pass (September 21, 2026)

Every `mediafigure` in the book was re-read image-first: 1,153 figures on
256 pages (47 chapter openers included), one Sonnet checker per chapter in
rolling waves of six, each briefed with the Microbiology kit
(`docs/history/microbiology.md`, "Figure-alt pass") to open the image and
write down what is drawn before reading the alt, caption, `longdesc`, or
source alt. The parent opened the image for every flag before touching a
page.

- **Yield:** 179 flagged verdict lines from the checkers (a few figures
  carried two), 128 confirmed as written or in part, 26 rejected, plus 7
  defects the parent found while verifying neighbours (a hemoglobin
  longdesc with the α/β colours swapped, a soil profile's A horizon
  called reddish-brown, a lower-limb figure described as front-and-back
  views). That is about 1 confirmed defect in 8.5 figures — above
  Microbiology's 1 in 10 and the audit's projection of 1 in 12. Five
  chapters (3, 14, 15, 19, 31) came back clean from their checker; the
  parent's spot-checks found a defect in two of them.
- **Source-inherited:** 20 of the confirmed defects repeat a claim the
  OpenStax alt makes and the image contradicts — errata 833–837, 839–849,
  851–855 — each with a footer disclosure; three more record artwork typos
  (838 "Canus", 850 "hypothalmus", 856 a stray "+" in a carbonate
  equation) and one a caption that calls an open stoma closed (847). Errata
  range 833–856. One earlier erratum was **withdrawn**: 100 had reported
  the source alt's "the same sphere" as wrong for the cube-and-sphere
  figure, but the checker's re-measurement showed both spheres identical
  and only the cube doubled — the source alt was right and the page's
  correction was the misreading; the alt now follows the source.
- **Page-introduced:** the majority, in the long descriptions this book's
  authors wrote: counts (six cations not seven, five arrows not four,
  seven seed ovals, eight red cells, two mitochondria not "several"),
  colours (a pH scale ending in crimson called violet, purple homologs
  called pink, a tan pellet called pink, green urchins called purple),
  directions and orders (a gated channel's arrow, a tick life cycle run
  counterclockwise with "3 weeks" on the wrong arrow, two extinction
  graphs' x-axes read right-to-left, an archaeal monolayer described as a
  bilayer), mislabels (EGF on one receptor when both carry it, "Osteon"
  and "Osteon of compact bone" swapped, a pedigree's middle child drawn
  as a square, "Vesicle" on the wrong sac), and "labeled" claims with no
  such marks (a cytoplasm label, an Amplitude label, a Promoter label on
  the second panel, a second DNA label).
- **Rejected (26):** the largest class was checker mis-counts and
  mis-measurements the parent's own look overturned (six grasshoppers
  counted as seven, a 400 nm mitochondrion measured as 150 nm, HRE and
  Target gene labels that are printed, a diploblast's ring order that the
  leader lines confirm); the rest were caption-carried identifications
  (a sea lily, a pigeon, a 380–750 nm visible band) and readings the
  drawing supports as well as the checker's (a beta barrel's two layers,
  a Cdk drawn slightly apart from its cyclin, an Amniota wedge whose left
  edge is the lizard's branch).
- **Cost:** about 7.7M Sonnet tokens across the 47 checkers (100k–245k
  each, scaling with figure count), plus 60k Fable for the blind solve.
  Six graded items carry the figure above them in their ledger hash and
  re-hashed: four multiple-choice items (9.1, 22.1, 35.4, 39.2) were
  re-solved blind by a fresh Fable solver (4/4 agree) and two selfchecks
  (11.2, 13.2) re-read by the parent and re-recorded. The last four
  checkers were killed by a session rate limit mid-chapter and resumed
  from their transcripts after the reset; their incremental report files
  lost nothing.

Lessons folded back: the Write tool refuses subagent report files, so the
checker brief now says to append with a Bash heredoc; a checker that reads
a page file in blocks ahead of its images has already seen the next alts,
so the brief now says to `sed` only the figure's own lines; a rewritten
alt can cross the 600-character cap (two did — lint caught both); an
existing erratum can itself be an alt-first misreading, so a checker's
"contradicts erratum N" is adjudicated on the image like any other flag.

## Practice sweep and long-description pass (September 22–23, 2026)

The second review of Anatomy and Physiology chapters 1–2
(`docs/history/anatomy-physiology.md`) found hint and leak defects that
every earlier gate had passed, and an Opus sample audit of this book found
the same classes here: about 6.9 confirmed defects per page, 55 in 107
sampled items, most of them hints that state the key or the correct
option's fact (the Biology briefs had asked only for a "strategy hint", so
the checkers passed them by design). Derek approved bringing the book to
the A&P re-review standard. Microbiology ran the same sweep in the same
session (`docs/history/microbiology.md`).

- **Practice sweep:** 19 section units (bio01–19, every chapter) and 4
  Knowledge Check units (all eight unit KCs), Opus fixers. Units bio01–06
  ran at full scope; after ten units Derek chose a narrow scope for the
  rest (keys, double keys, dishonest keys, accept gaps, false hints,
  giveaway hints, directly-above leaks, duplicate asks, source fidelity),
  which left objective-heading leaks out. Yield: about 1,285 hints
  rewritten to say where to look, about 232 nearby or directly-above leaks
  (about 85 of them a textin keyed to its own objective heading or the
  page title, in the full-scope units), about 130 accept gaps, about 130
  footers corrected, about 77 duplicate asks. **No source key was wrong.**
  Two policies were set during the sweep and hold going forward: a leak is
  fixed without changing the item's type (never textin → MC to escape
  it), and every source exercise is rendered.
- **The needs-parent batch** (two Opus agents, 45 pages, plus the KC
  agent's 30 items): 11 claim corrections, among them 3.2's "form the
  starch" (amylose), 4.3's CT premise that red blood cells are rich in
  ribosomes, 7.4's cyanide solution that "pumps electrons" and its "FAD⁺",
  33.1's BMR model answer that teaches the reverse, 43.3's meiosis I
  yielding "a primary oocyte", and 45.4's wolf item, re-keyed to the
  beaver on the module's own reasoning (erratum 948, a `key` deviation);
  double-keyed items replaced and disclosed (10.4, 16.4, 22.3, 28.6,
  29.1); numeric-key textins converted to MC (4.2's `5.0 µm`, 7.2, 7.4);
  and two stems restored verbatim (4.3, 28.1) that had been reworded
  without disclosure.
- **Long-description pass:** every `mediafigure` with a `longdesc`,
  read by the inventory method (every panel, printed label, count, and
  arrow as `source → target`, both ends zoomed) before any words. Units
  fbio01–12 (chapters 1–37, 509 figures) ran on Opus fixers on September
  22 and fixed 381 (75%); the leading classes were connections,
  positions, counts, and mislabels. Units fbio13–15 (chapters 38–47, 123
  figures) ran on Sonnet fixers on September 23, which reported 24 fixes;
  an Opus second read then found 72 of the 100 Sonnet "clean" figures
  wrong and 19 of the 24 Sonnet fixes incomplete or regressions (a fish's
  "Vein" moved onto the wrong tube, an extinction timeline's colour band
  shifted by 50 million years), and fixed about 90. Source-inherited
  defects went to errata with footer disclosures; the parent added three
  on its own image check (a Meiosis I bracket that omits prophase I, a
  food web's stray arrowhead, the MALT alt's lymph-node trip that is not
  drawn).
- **Errata:** 898–954, 57 entries (11 claims, the rest alts, art typos,
  and double keys), with dated amendments to 139 (the "wont" typo is in
  the VC solution), 180 (a second Lyme-alt defect), and 196 (the quote is
  "diffirent", verified on the image); 10 of the sweep's 13 new
  `DISCLOSED_DEVIATIONS` lines and 11 reconciliation-decisions entries.
- **Ledger and floors:** the carry rule (AGENTS.md, "Re-solving after a
  sweep") carried every item whose stem, options, and key were unchanged
  and whose graded forms still grade; the rest, both books together, went
  to six fresh Fable solvers (570 items; 569 merged after adjudication,
  and the last, a KC stem, was reworded because FMN is also
  riboflavin-derived and re-solved) and 89 selfchecks to an Opus re-read. The confirmed source-key
  count and the replay and ledger floors moved (4873, 10360, 14643) with
  Derek's approval, each drop traced to a replaced or converted item.
- **Grader and lints landed from the sweep:** accept members may run to
  seven words (the key stays four), since `central dogma of molecular
  biology` and `major histocompatibility complex class I` were marked
  wrong; an "X (Y)" answer grades when both halves are correct; three
  lints (a numeric textin, a selfcheck hint that restates its rubric, a
  hint saying "not X" where X is accepted). A heading/title-leak textin
  lint was measured (about 140 raw hits in this book) and **decided
  against** on September 23: a heading-printed key is the weakest leak,
  so the rule became an authoring preference (life-sciences "Text
  recall"), checkers stop flagging it, and the hits stay.

Lessons folded into the life-sciences playbook, this book's delta, the KC
playbook, and the kits: hints say where to look, never the fact, with the
cover test (cover the options; if stem plus hint answers the item, cut the
hint); a textin is never keyed to a term its own heading or the page title
prints; figure, alt, and `longdesc` work runs on Opus, never Sonnet, and
the parent spot-checks one "clean" verdict after any delegated model's
first unit; a footer's `Changes:` clause names departures from the source,
never corrections to our own earlier text.

## Build budgets: the completion measurement record

The book is complete, so these are no longer projections — they are what
the finished corpus measured, and the caps it sits under. The caps live in
`tools/build/audit-build.mjs`; if one trips, re-measure and raise it
deliberately with the new numbers, never by rounding up in advance.

- **HTML total** (`maxTotalHtmlBytes`, 350 MiB). Measured at completion
  (September 3, 2026, 47 chapters, 600 HTML documents): **254.3 MiB** of
  HTML, 27% under the cap. The audit's summary line prints the all-files
  size, which also counts the vendored WebP — read the gate's own line, not
  the summary, when judging headroom. The driver is the sidebar, not the
  prose: every biology page's `<aside>` lists the whole book. Until
  2026-09-01 that tree was rendered twice per page (phone drawer + desktop
  list); `layouts/_partials/sidebar.html` now renders one list for every
  width (drawer-only rows `hx:md:hidden`, the two wrapper rows flattened by
  `.ap-sidebar-shell` in `custom.css` from md up), which is what brought the
  corpus under the cap.
- **Chrome per page** (`maxMeanChromeBytes`, 300 KiB) is the cap that guards
  the single-list sidebar: the book tree is rendered once per page at about
  1.1 KiB per link, so a tree emitted twice again would put the mean well
  over the cap. The browser suite pins the shape too (`the biology sidebar
  nests chapters under their unit`: the unit nesting, the first chapter as
  the first visible link).
- **Sidebar share** (`maxSidebarShare`, 0.55) is per page; the biology
  sidebar lists every chapter of the book.
- **Browser suite time.** `tests/figures.spec.mjs` walks every route; its
  timeout scales with the route count.
- **Source audit.** `npm run source:check -- --bundle biology-bundle`
  (report-only) audits the finished book clean — 208/208 sections, every
  objective and heading located, 0 unresolved review items — and a heading
  the audit cannot locate is the signal that a page renamed or dropped a
  source section.
