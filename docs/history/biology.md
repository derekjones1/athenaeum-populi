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

## Re-review to the A&P standard (September 23–24, 2026)

The practice sweep above ran chapters 1–17 and 18.1 at full scope (commit
a145b91); the narrow-scope remainder — chapters 18.2–47 and all eight unit Knowledge Checks — was re-read at
full scope one row per request from `docs/re-review/tracker.md`,
following `docs/re-review/README.md` with `brief-life-sciences.md` (and
`brief-knowledge-check.md` for the checks). Opus fixers, one per two or
three sections, fixed in place; a fresh Fable subagent blind-solved each
batch's re-hashed items on masked pages; the parent read every key,
claim, and figure change against the CNXML or the image. Hint leaks were
half to two-thirds of every row's fixes. The rows as ticked (Fixed =
defects fixed; token counts are Opus fixer tokens unless named):

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [x] | 18. Evolution and the Origin of Species | 3 | 29 | 983–984 | 71071e7 | 18.1 in the Sep 22 sweep; 18.2–18.3 Sep 23: one Opus fixer (~150k tokens) + Fable solve 7/7 (~60k); 15 of 29 were hint leaks |
| [x] | 19. The Evolution of Populations | 3 | 34 | 985–986 | 3250fc9 | Sep 23: one Opus fixer (~160k tokens) + Fable solve 3/3 (~45k); 22 of 34 were hint leaks; parent caught one fixer-made leak (a cloze stem stating the next MC's key) |
| [x] | 20. Phylogenies and the History of Life | 3 | 46 | 987 | d4098ea | Sep 23: one Opus fixer (~177k tokens) + Fable solve 8/8 (~53k); 27 of 46 were hint leaks; five reverse re-asks replaced with single-sentence clozes; parent turned the fixer's draft erratum (source "DNA" double-keys the phylogeny RQ) into an options deviation per errata 924/928/934 |
| [x] | 21. Viruses | 4 | 54 | — | 14fd14f | Sep 23: two Opus fixers (~245k tokens), batched with ch22–25 (shared Fable solve 48/48, ~83k); 36 of 54 were hint leaks; three reverse re-asks replaced (RT inhibitors, Prusiner, viroid summary cloze) |
| [x] | 22. Prokaryotes: Bacteria and Archaea | 5 | 84 | 988, 990 | 14fd14f | Sep 23: two Opus fixers (~299k); 56 of 84 hint leaks; parent added the food-collage caption source note (988) and replaced the endolith solution's "hypolith" (990, deviation kind solution) |
| [x] | 23. Protists | 4 | 44 | — | 14fd14f | Sep 23: two Opus fixers (~240k); 26 of 44 hint leaks; histones cloze sat above the source item printing it → endomembrane-system cloze |
| [x] | 24. Fungi | 5 | 73 | — | 14fd14f | Sep 23: two Opus fixers (~254k); 48 of 73 hint leaks; one double-keyed author MC (24.5 antibiotics) re-optioned; aerobes accepts added after the blind solve |
| [x] | 25. Seedless Plants | 4 | 46 | 989 | 14fd14f | Sep 23: two Opus fixers (~227k); 24 of 46 hint leaks; parent fixed the adventitious glossary typo (989) |
| [x] | 26. Seed Plants | 4 | 59 | 998 | 6f4cddf | Sep 23: two Opus fixers (~241k tokens), batched with ch27–30 (shared Fable solve 67/68 + 1 flag adjudicated, ~108k); 32 of 59 hint leaks; five reverse re-asks replaced; parent fixed "pericarp, or hypanthium" (998) |
| [x] | 27. Introduction to Animal Diversity | 4 | 62 | 999 | 6f4cddf | Sep 23: two Opus fixers (~283k); 33 of 62 hint leaks; extinction-graph longdesc corrected; parent fixed the Bilateria/Radiata "respectively" swap (999) |
| [x] | 28. Invertebrates | 7 | 118 | 991–994, 1001–1004 | 6f4cddf | Sep 23: three and a half Opus fixers (~473k); 65 of 118 hint leaks; parent: 28.1 mesohyl, 28.2 Hydrozoa class + two model-answer source notes (kind solution), 28.6 desiccation option + superclasses source note |
| [x] | 29. Vertebrates | 7 | 114 | 995–997, 1000 | 6f4cddf | Sep 23: three and a half Opus fixers (~493k); 55 of 114 hint leaks; parent re-keyed 29.1 closest relatives to urochordates (kind key; solver flag adjudicated), 29.7 Australopithecus model answer, 29.2 misspellings |
| [x] | 30. Plant Form and Physiology | 6 | 117 | — | 6f4cddf | Sep 23: two and a half Opus fixers (~426k); 84 of 117 hint leaks; no new source defects |
| [x] | 31. Soil and Plant Nutrition | 3 | 54 | — | c909153 | Sep 23: one and a half Opus fixers (~185k tokens), batched with ch32–35 (shared Fable solve 43/43, ~92k); ~34 of 54 hint leaks; five reverse re-asks replaced (sulfur, potassium, glacial drift, B and C horizons) |
| [x] | 32. Plant Reproduction | 3 | 54 | — | c909153 | Sep 23: two and a half Opus fixers (~270k); ~32 of 54 hint leaks; synergid and dormancy reverse re-asks replaced (micropyle, testa) |
| [x] | 33. The Animal Body: Basic Form and Function | 3 | 58 | 1008 | c909153 | Sep 23: two Opus fixers (~263k); 34 of 58 hint leaks; parent re-keyed the 33.1 dorsal/ventral plane question to coronal (kind key; the module's own goat figure), rewrote a garbled fixer-written 33.3 stem, fixed erratum 239's quotation |
| [x] | 34. Animal Nutrition and the Digestive System | 4 | 63 | 1005–1006 | c909153 | Sep 23: two and a half Opus fixers (~300k); ~42 of 63 hint leaks; parent replaced a double-keying option in 34.1 (cow teeth) and 34.2 (fat) (kind options); trypsin textin accepts any of the three proteases |
| [x] | 35. The Nervous System | 5 | 92 | 1007 | c909153 | Sep 23: three and a half Opus fixers (~400k); ~54 of 92 hint leaks; parent replaced the microglia option that double-keyed the 35.1 meningitis question (kind options); four reverse re-asks replaced |
| [x] | 36. Sensory Systems | 5 | 70 | 1009, 1016 | 7796f05 | Sep 23: two and a half Opus fixers (~316k tokens), batched with ch37–40 (shared Fable solve 38/38 + 9 synonym flags adjudicated, ~78k); 47 of 70 hint leaks; parent fixed the glomerulus glossary "two clusters" (1009) and the solver-found summary "encapsulated" Merkel's disks (1016) |
| [x] | 37. The Endocrine System | 5 | 74 | — | 7796f05 | Sep 23: two and a half Opus fixers (~378k); 42 of 74 hint leaks; nine reverse re-asks replaced; 37.4 figure-label TRH item failed source-keys (label is not module text) → "narrow range" cloze; 37.4 drops one item (3 duplicates → 2), exercise floor −1 |
| [x] | 38. The Musculoskeletal System | 4 | 57 | 1010, 1011 | 7796f05 | Sep 23: two Opus fixers (~272k); 37 of 57 hint leaks; parent fixed 38.4 "A zone" (313) and the cross-bridge caption's Ca²⁺ on the actin active site (1010), and 38.3's hip protraction/retraction model answer (1011, kind solution) |
| [x] | 39. The Respiratory System | 4 | 49 | — | 7796f05 | Sep 23: one and a half Opus fixers (~244k); 27 of 49 hint leaks; 39.1 trachea/alveolus reverse re-asks replaced; no new source defects |
| [x] | 40. The Circulatory System | 4 | 59 | 1012–1015 | 7796f05 | Sep 23: two and a half Opus fixers (~287k); 28 of 59 hint leaks; parent fixed 40.2 "nitrous oxide (NO)" (1012), fibrinogen "in blood serum" (1013), two misspellings (1014–1015), and added squid/warm-blooded synonyms |
| [x] | 41. Osmotic Regulation and Excretion | 5 | 61 | — | 58652a1 | Sep 24: two Opus fixers (~246k tokens), batched with ch42–45 (shared Fable solve 49/49 + 1/1, ~147k); 38 of 61 hint leaks; a 429 killed nine of fourteen fixers mid-run, all resumed by SendMessage; no new source defects |
| [x] | 42. The Immune System | 4 | 75 | 1019 | 58652a1 | Sep 24: two Opus fixers (~249k); 40 of 75 hint leaks; natural-killer and allergy reverse re-asks replaced (lymphocyte, IgE); 42.3 affinity/avidity alt rewritten against the image, immunoglobulin-table longdesc added (1019 "mucous") |
| [x] | 43. Animal Reproduction and Development | 7 | 93 | 1018 | 58652a1 | Sep 24: three Opus fixers (~371k); 51 of 93 hint leaks; eight duplicate asks replaced; parent replaced the 43.1 "asexual" option that double-keyed fragmentation (1018, kind options; min-confirmed 4860→4859) |
| [x] | 44. Ecology and the Biosphere | 5 | 71 | — | 58652a1 | Sep 24: two and a half Opus fixers (~279k); 44 of 71 hint leaks; 44.2 NPP summary MC was double-keyed (above-ground biomass) → "warm and wet" MC; parent removed a "wild lupine" leak from the 44.1 nitrogen cloze |
| [x] | 45. Population and Community Ecology | 7 | 123 | 1017 | 58652a1 | Sep 24: four and a half Opus fixers (~542k); 70 of 123 hint leaks; sortbins rebuilt from module examples in 45.6 and 45.7; blind solver caught the 45.7 non-associative stem also fitting habituation → category stem; 1017 CDC life-table arithmetic (untouched, transcribed as printed) |
| [x] | 46. Ecosystems | 3 | 50 | 1020–1022 | 3a20551 | Sep 24: two Opus fixers (~247k tokens), batched with ch47 and KC 1–17 (shared second checker ~213k and Fable solve 64/65, ~119k); 34 of 50 hint leaks; parent replaced eip-996's options C and D, which also reduce CO₂ (1021, kind options; min-confirmed 4859→4858), and fixed the acid-rain glossary "sulfuric" (1022) |
| [x] | 47. Conservation Biology and Biodiversity | 4 | 47 | 1023 | 3a20551 | Sep 24: two Opus fixers (~243k); 25 of 47 hint leaks; IUCN chart longdesc re-read from the image (the source alt's fish split tied the Visual Connection's option A, 1023); the fern-spore VC stays on source authority (the solver's one disagreement) |
| [x] | KC `knowledge-check-01-03` | — | 10 | 1024 | 3a20551 | Sep 24: one Opus fixer (~197k); "atomic weight" distractor double-keyed "mass number"; micelle textin re-keyed amphipathic; fixer found the 3.3 micelle claim → Source note on the section page (1024) |
| [x] | KC `knowledge-check-04-10` | — | 39 | 1025 | 3a20551 | Sep 24: two Opus fixers (~556k); 10 replacements; second checker flagged a 5.3 stem listing "antiporters" above the antiporter MC → pumps textin; parent fixed the 6.2 "both the reactants and the products" sentence (1025) |
| [x] | KC `knowledge-check-11-17` | — | 44 | — | 3a20551 | Sep 24: two Opus fixers (~468k); 15 replacements (mostly reverse re-asks of section items); cross-chapter leaks between the two fixers relayed by the parent (16.6 "40S", 14.2 "dideoxy" over the 17.3 ddNTP key) |
| [x] | KC `knowledge-check-18-20` | — | 10 | — | 4604086 | Sep 24: one Opus fixer (~197k tokens), batched with KC 21–29, 30–32, 33–43, 44–47 (shared second checker ~217k and Fable solve 76/76 after a 429 resume); 3 replacements; accepts added (alloploidy, genepool, node) |
| [x] | KC `knowledge-check-21-29` | — | 43 | — | 4604086 | Sep 24: three Opus fixers (~667k); 12 replacements (six in ch21–23: stems asserting what the module does not say, one-subsection sections); parent reworded the 26.3 megasporocyte stem that printed the 26.1 key "megaspore" |
| [x] | KC `knowledge-check-30-32` | — | 14 | 1032 | 4604086 | Sep 24: one Opus fixer (~243k); 2 replacements; the 30.5 gravity-potential stem dropped the "10 MPa" of erratum 434; the 31.1 summary cloze was built on the summary's "organic compounds" slip (1032) → minerals textin |
| [x] | KC `knowledge-check-33-43` | — | 50 | 1033 | 4604086 | Sep 24: three Opus fixers (~754k); 20 replacements; five double keys (OTC, basophil, TLR body site, rectal gland, segmental artery); items built on errata 449/452 removed; parent added the 43.6 PGD Source note (1033), sourced the 35.4 nitric-oxide stem, replaced the bees "queens" option |
| [x] | KC `knowledge-check-44-47` | — | 27 | 1031 | 4604086 | Sep 24: two Opus fixers (~467k); 6 replacements; the 44.5 Permian "84 percent" item replaced (47.1 says 96, 1031); second checker cut a 45.2 stem clause that gave away its "sperm-depleted" accept |

## Whole-page leak read of the unit checks (September 26, 2026)

`npm run kc -- leaks` (new that day) listed 46 candidates across the eight
unit checks — every place one item's key or accept member, or its plural
fold, appears in another item's stem, options, rubric, or labels. Each was
read against the item it could give away; none states the fact that item
tests or singles out its key. They are shared vocabulary ("oxygen",
"liver", "pathway", "mitosis" used in other contexts), the same term as a
distractor in another question ("the cerebellum", "10 percent"), or a hidden
rubric clause ("ion pumps in the plasma membrane"). No page changed. The
standard is now in the KC playbook's "No item may print another item's key".

## Alt-only figure pass (September 24–26, 2026)

An Opus image-first sample on September 24 (50 figures across this book
and Microbiology) found about 1 real alt error in 8, all on figures with
no `longdesc`: those had only the September 21 Sonnet pass, while every
`longdesc` figure had had the September 22–23 Opus read. So every
alt-only figure was re-read by Opus with `docs/briefs/alt-pass/checker-brief.md`:
519 figures in fifteen packets of about 35 (b01–b15), cut from
`tools/source/alt-pass-packets.py` output filtered to tags with no
`longdesc`, nine or ten checkers at a time. The parent opened the image
for every flag before editing.

- **Yield:** 132 of 519 figures fixed (about 1 in 4), plus the sample's
  fixes; every one of the 132 flags held on the image. Errata 1070–1071,
  1073–1074, 1078–1085, and 1088–1102; erratum 853 (salmon "on its side")
  withdrawn and 836 amended.
- **Claim corrections reached through figures:** §4.5's prose, caption,
  and alt called the 9 + 2 center "a single microtubule doublet" (a
  central pair of singlets, erratum 1078); §25.3's caption called the
  gemmae crescent-shaped spore containers (erratum 1090).
- **Scale bars:** §1.1 and §8.1 print the same cyanobacteria micrograph
  with 25 µm bars about 2.7-fold apart (erratum 1079); an erratum's
  measured size must come from that figure's own bar.
- **No graded item re-hashed** (`ledger:carry plan` found none); `npm test`
  green after each batch. About 2.1M checker tokens in two sessions.

### Sample and packet records

This book's rows of the September 24 sample (50 random figures, 25 per book, seed 20260924, `docs/briefs/alt-pass/checker-brief.md`, parent opened every flagged image), confirmed against the image; paths are under `content/life-health-sciences/`, line = the `{{< mediafigure` tag:

| | Page:line | Alt says | Image shows → fix | Kind |
|---|---|---|---|---|
| [x] | `biology/24-fungi/01-characteristics-of-fungi.md:111` | two labeled "Hyphae" "meeting at a round sporangium" | only the diagonal stalk ends in the sporangium; the other labeled hypha crosses above it | error |
| [x] | `biology/37-the-endocrine-system/01-types-of-hormones.md:49` | oxytocin "with one yellow sulfur" | two yellow sulfur spheres (the disulfide) | error |
| [x] | `biology/38-the-musculoskeletal-system/01-types-of-skeletal-systems.md:149` | "Two views"; longdesc "the left is identical" | a left and a right foot, mirror images, in one view | minor |
| [x] | `biology/14-dna-structure-and-function/06-dna-repair.md:23` | "a mismatched base marked with a red arrow" | name the G opposite A and the red arrow pointing back along the new strand (the polymerase backing up to proofread); the source alt had both | minor |
| [x] | `biology/45-population-and-community-ecology/06-community-ecology.md:187` | longdesc: "several young conifers" | panel 2 draws two (parent confirmed on a zoom crop) | minor |

Applying the foot fix found the same "the left is identical" wording on the lower-limb figure (`biology/38-the-musculoskeletal-system/01-types-of-skeletal-systems.md:141`); the legs are mirror images too, so both were fixed. The desmosome alt is erratum 1046.

Logged as erratum 1047, with a footer note: m66442's hemoglobin artwork (`Figure_03_04_05-3127`) prints "∝" for α on the α-subunit labels, the same kind as erratum 914. The page longdesc already says α.

| | Book | Chapters | Alt-only figures | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|---|
| [x] | Biology 2e | 1–24.3 (packets b01–b06) | 210 | 41 | 1070–1071, 1073–1074, 1078–1085; 836 amended | 453891d | 41 of 210 flagged (3/10/9/4/8/7), all confirmed on the image. Claim correction: 4.5's prose, caption and alt said the 9 + 2 center is "a single microtubule doublet"; it is a central pair of singlets (1078). §1.1 and §8.1 print one cyanobacteria micrograph with 25 µm bars that disagree about 2.7-fold (1079; 836's 15–20 µm copied from §1.1, amended). Cholera poster dated "1866" is Woodhull's 1849 notice (1081). Scale errata: *Aspergillus*, MRSA, mitochondria. Packets are 35 figures from `alt-pass-packets.py` output filtered to no-`longdesc` tags. No graded item re-hashed. Run Sep 26, 2026, about 830k checker tokens |
| [x] | Biology 2e | 24.3–47 (packets b07–b15) | 309 | 91 | 1088–1102; 853 withdrawn | 04cabdc | 91 of 309 flagged (8/14/12/15/9/8/7/6/12), all confirmed on the image; Biology alt-only pass COMPLETE. Erratum 853 withdrawn: the salmon is upright over the stream bed, so the source's "swimming" stands. Claim correction: 25.3's caption called the gemmae crescent-shaped spore containers; the cups are crescent-shaped and gemmae are pieces of plant, as the section's prose says (1090). Artwork typo "Diptheria" (1100). Scale errata measured with PIL against each figure's own bar. No graded item re-hashed. Run Sep 26, 2026, about 1.26M checker tokens |


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
