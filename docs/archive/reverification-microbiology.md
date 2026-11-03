# Microbiology — re-verification records (archived)

These sections were cut verbatim from `docs/history/microbiology.md` on
November 2, 2026 and are kept for the record only: the figure-alt pass,
the practice sweep and long-description pass, the re-review rows to the
A&P standard, the whole-page leak read, and the alt-only figure pass that
brought this book, authored before the three-reading discipline, up to it.
They are not reading for a chapter run, a re-review, or an edit; the
operative rules they produced are in `docs/subjects/life-sciences.md` and
the book's playbook, and `docs/archive/README.md` says why the folder
exists.

## Figure-alt pass (September 20, 2026)

The audit's figure rate (4 defects in 53) projected about 55 bad alts
across the book, so every `mediafigure` was re-read the same day, image
first: 792 figures on 127 pages (26 chapter openers included), one Sonnet
checker per chapter in waves of six, each briefed to open the image and
write down what is drawn before reading the alt, caption, `longdesc`, or
source alt (`docs/archive/alt-pass/checker-brief.md`, derived from the audit's
figures section with the order made mandatory). The parent opened the
image for every flag before touching a page.

- **Yield:** 82 flags (74 from checkers, 8 found by the parent while
  verifying neighbours), 76 confirmed, 6 rejected. That is 1 confirmed
  defect in 10.4 figures — above the audit's projection of 1 in 14, and
  with the audit's own four, 80 of 792 (1 in 9.9). Every chapter had at
  least one; chapter 3 had seven.
- **Source-inherited:** 16 of the 76 (21%) repeat a claim the OpenStax
  source alt makes and the image contradicts — errata 815–820, 822,
  824–832, each with a footer disclosure. Two more errata (821, 823)
  record source alts the pages had already silently departed from
  (a complement flow chart narrated as a different diagram; hydrophilic
  and hydrophobic swapped on the soap molecule). Errata range 815–832.
- **Page-introduced:** 60, the majority: counts (three trypanosomes not
  two, four flagella not three, nine gel lanes not ten, six antigens not
  five), colours (a core drawn all blue called "mixed blue and pink",
  starch granules "white" that are pale blue), directions and orders
  (a phosphodiester bond narrated backwards, a nitrogen-cycle arrow
  relabeled, a Coulter aperture "near the base" that is at the top),
  mislabels (Pap-smear nuclei called coccobacilli, chitin and glucan
  arrows swapped, hyaluronidase and bacteria colours reversed, adults
  and nymphs' hosts swapped on a tick life cycle), "labeled" claims with
  no such marks (a pump, a "nurse", two bronchi lettered A), two
  Biology-borrowed table figures with no `longdesc`, and one alt that
  leaked the stage name the selfcheck beneath it asks for ("attached"
  for "attachment" — the stem-variant the figure-beside-item lint does
  not catch).
- **Rejected (6):** a label list read as an order claim; a table image's
  alt transcribing the table's own printed words; a 12-hour label placed
  on the arrow between cells, read consistently; a caption-named enzyme
  the alt repeats; two under-resolved photos whose claims the image does
  not contradict.
- **Cost:** about 5.1M subagent tokens across the 26 checkers
  (130k–320k each, scaling with figure count), four waves, plus the
  parent's verification of every flag on the image. No graded item was
  edited, but three multiple-choice items that name the figure above
  them (10.3 the ribosome drawing, 16.2 the Lister engraving, 20.5 the
  flow-cytometry histogram) carry that figure's alt in their ledger hash
  and re-hashed; a fresh Fable solver answered all three pages blind
  (51 items, 50 agree, one already-keyed flag adjudicated) and the
  records were merged; the 6.2 selfcheck beneath the stages figure
  re-hashed the same way and was re-read and re-recorded. An alt edit
  above a figure-referencing item is a ledger edit.

The lesson the audit proposed is now measured: reading the alt first and
looking for it in the image misses about one defect in ten, and an
image-first pass finds them at a cost well under one chapter's authoring.
`docs/subjects/life-sciences.md` §"Completion audit" now makes the
image-first pass part of the completion standard.

## Practice sweep and long-description pass (September 22–23, 2026)

The second review of Anatomy and Physiology chapters 1–2
(`docs/history/anatomy-physiology.md`) found hint and leak defects every
earlier gate had passed. An Opus sample audit of this book confirmed 41
defects in 100 items, two thirds of them hints, and one wrong key, since fixed: 2.4's
item had a distractor that is also correct (erratum 897 is the audit's
other source find, 9.1's plate count called a "direct count of total
cells"). Derek approved bringing the book to the A&P re-review standard;
Biology ran the same sweep in the same session
(`docs/history/biology.md`, same heading).

- **Practice sweep:** 15 section units (mic01–15, all 26 chapters) and 2
  Knowledge Check units (all five block KCs), Opus fixers. mic01–08 ran
  at full scope, mic09–15 at the narrow scope Derek chose mid-sweep (keys,
  double keys, dishonest keys, accept gaps, false hints, giveaway hints,
  directly-above leaks, duplicate asks, source fidelity). Yield: about
  1,189 hints rewritten to say where to look, about 117 nearby or
  directly-above leaks (about 30 of them a textin keyed to its own heading
  or page title), about 172 accept gaps (the largest class in this book;
  the plural fold now runs both ways, and the chapter rules above that
  required singular accepts are marked superseded), about 83 footers. **No source key was wrong.**
- **The needs-parent batch** (two Opus agents, 40 pages): five claim
  corrections — 4.2's "Mycoplasma is obligate intracellular" premise
  (Source note in the model answer), 10.1's stem naming Beadle and Tatum
  for Avery's result, 11.5's "nitrous oxide" for nitrous acid, 11.6's VTEC
  Shiga-toxin genes "on a large plasmid" (§24.4 says prophage), and
  12.1's phage "used as a host"; three multi-keyed MC items replaced and
  disclosed (5.2 colonoscopy, 11.6 resistance, 24.1 "NOT a way"); two
  numeric textins to MC (2.3's `400⨯`, 11.4); 22.2's CYU MC to a
  selfcheck. `verify-source-keys` now reads "Answer is open and will
  vary." as unkeyed and folds plurals in its print check, including a
  markup-split `<term>plasmid</term>s`.
- **Dropped source exercises:** a coverage gate
  (`tools/verify/verify-source-coverage.mjs`) was built from the chapter
  13–14 design note and measured every life-sciences exercise unit:
  Biology and A&P complete, this book 4 missing of 1,219 — 4.2's
  *H. pylori* fill-in, 4.2's Mycoplasma/Chlamydia short answer, and two
  7.2 critical-thinking items whose footers had given reasons for the
  drop. All four were restored in source position (the unkeyed ones as
  selfchecks, 7.2's drawing on 7.1 with a cross-link), as was 1.3's
  bacteria/archaea short answer from the gate's allowlist. The gate runs
  in `npm test` at 2,813/2,813.
- **Long-description pass:** 283 figures (units fmic01–07), Sonnet fixers
  first, then an Opus second read after the parent's spot-check of a
  Sonnet "clean" Biology figure found three defects it had missed. The Opus read left 85
  figures clean and fixed the rest (about 70%); Sonnet's fixes were the
  worst of it: in chapters 5–8, 10 of 12 were regressions (an enzyme
  diagram's products drawn above the reactants kept as "the full drop", a
  real fourth ETC protein deleted); in chapters 22–26, 9 of 14 (an AIDS
  graph's latency bracket moved past the axis break, a capillary network
  said to feed the collecting duct). Four Sonnet errata drafts were
  withdrawn on the image (Chlamydia's 12 h, the hemocytometer etching,
  the E/P/A letters, the nephron). The parent corrected 2.3's Art
  Connection selfcheck (#9 is the mechanical stage, not the x-y knobs)
  and transcribed five cells of 13.2's Markdown table from its image.
  About 20 footer clauses the fixers had written for corrections to our
  own earlier alts were pruned.
- **Errata:** 955–982, 28 entries (five claims, three multi-keyed items,
  two source typos, a fill-in clause, the rest alts and artwork: the relative-sizes chart's
  values, the zygomycete and ascomycete life cycles' swapped labels, the
  genome-size chart's ranges and arrows, the six-armed IgM on the latex
  figure), with dated amendments to 520, 572, and 649; three of the
  sweep's 13 `DISCLOSED_DEVIATIONS` lines and eight
  reconciliation-decisions entries. Derek ruled 14.2's "wait to see"
  versus the artwork's "wait and see" not an erratum, and the Coombs
  figure's four-versus-three steps a footer disclosure only.
- **Ledger, floors, grader, lints:** shared with Biology and recorded
  there — the carry rule, 570 blind Fable re-solves and 89 selfcheck
  re-reads across both books, the floors lowered with Derek's approval,
  the seven-word accept cap, the "X (Y)" fold, and three new lints. The
  heading/title-leak lint (about 55 raw hits in this book) was decided
  against; the rule became an authoring preference and the hits stay.

## Re-review to the A&P standard (September 23–24, 2026)

The practice sweep above ran chapters 1–13 and 14.1–14.4 at full scope (commit
a145b91); the narrow-scope remainder — chapters 14.5–26 and all five block Knowledge Checks — was re-read at
full scope one row per request from `docs/archive/re-review.md`,
following `docs/re-review/README.md` with `brief-life-sciences.md` (and
`brief-knowledge-check.md` for the checks). Opus fixers, one per two or
three sections, fixed in place; a fresh Fable subagent blind-solved each
batch's re-hashed items on masked pages; the parent read every key,
claim, and figure change against the CNXML or the image. Hint leaks were
half to two-thirds of every row's fixes. The rows as ticked (Fixed =
defects fixed; token counts are Opus fixer tokens unless named):

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [x] | 14. Antimicrobial Drugs | 7 | 36 | 1026–1027 | 28741e9 | 14.1–14.4 in the Sep 22 sweep (mic08); 14.5–14.7 Sep 24: one Opus fixer (~162k tokens), batched with ch15–18 (shared Fable solve 47/47, ~255k); 18 of 36 hint leaks; 14.5 MRSA nasal FIB answered MC4 → MC4 restored ahead of it; 14.6 MIC re-ask → microdilution cloze; 14.6 Kirby-Bauer Short Answer stays folded into its self-check CYU (open question for Derek) |
| [x] | 15. Microbial Mechanisms of Pathogenicity | 4 | 95 | 611 (deviation) | 28741e9 | Sep 24: two Opus fixers (~333k); 46 of 95 hint leaks; parent replaced 15.1's dog-bite option that double-keyed the noncommunicable MC (611, kind options; min-confirmed 4858→4859 net of two new confirmations); endotoxin/exotoxin re-asks → toxigenicity, LAL; 15.1 'incubation' accept logged not-errata |
| [x] | 16. Disease and Epidemiology | 4 | 58 | — | 28741e9 | Sep 24: two Opus fixers (~290k); 34 of 58 hint leaks; 16.1 epidemic-disease re-ask → influenza MC; 16.3 droplet MC key stitched two sentences → re-keyed to the single vehicle-transmission sentence |
| [x] | 17. Innate Nonspecific Host Defenses | 5 | 81 | 1028–1029 | 28741e9 | Sep 24: two Opus fixers (~332k); 49 of 81 hint leaks; 17.5 pyrogen CYU key never printed by the module → re-keyed to the LPS sentence; GobletCell alt's 'Figure a/b' (1028, image checked); 17.2 bacteriocins pair print each other's keys (source-verbatim, disclosed) |
| [x] | 18. Adaptive Specific Host Defenses | 5 | 108 | 1030 | 28741e9 | Sep 24: three Opus fixers (~435k); 72 of 108 hint leaks; 18.4 BCR body MC → self-check (mirror rule); lag-period and central-tolerance re-asks replaced; 18.2 APC stem restored to source; 18.1 plasma-cells key logged not-errata |
| [x] | 19. Diseases of the Immune System | 5 | 93 | 1034–1036 | a188793 | Sep 24: three Opus fixers (~400k tokens), batched with ch20–26 and KC 01-06, 07-12 (shared Fable solve 93/93, ~500k); 52 of 93 hint leaks; 19.1 missing body paragraph restored; parent: mast-cell body textin → self-check (mirror rule), "vomiting center in the cerebellum" → brain stem with a Source note (1035, A&P 2e §15.4) |
| [x] | 20. Laboratory Analysis of the Immune Response | 5 | 74 | 1037 | a188793 | Sep 24: two Opus fixers (~330k); 36 of 74 hint leaks; 20.4 Art Connection alt rewritten from the image (5 Y-shapes); 20.5 laser body MC → self-check (mirror rule); 1037 CD8 micrograph "tonsil" vs caption "bone marrow" (both as printed) |
| [x] | 21. Skin and Eye Infections | 5 | 64 | 1038–1040 | a188793 | Sep 24: three Opus fixers (~390k); 35 of 64 hint leaks; oral-herpes cloze under the herpes MC → fifth disease; parent: bulla "no more than 5 mm" → at least 5 mm with a Source note (1039, the book's own 21.2) |
| [x] | 22. Respiratory System Infections | 4 | 77 | 1041–1042 | a188793 | Sep 24: three Opus fixers (~410k); 44 of 77 hint leaks; 22.4 aspergillosis model answer claimed amphotericin B; 22.3 eradication MC double key re-optioned; measles caption letters corrected against the image (1042) |
| [x] | 23. Urogenital System Infections | 6 | 65 | — | a188793 | Sep 24: three Opus fixers (~390k); 32 of 65 hint leaks; six author items replaced (reverse re-asks and stems printing a neighbour's key: leptospirosis, NGU, HPV, neonatal herpes, fluconazole, "trich") |
| [x] | 24. Digestive System Infections | 6 | 61 | 1043–1044 | a188793 | Sep 24: three Opus fixers (~420k); 34 of 61 hint leaks; 24.2 cariogenic body textin → self-check (mirror rule); parent corrected "diptherioids"/"Bacteriodetes" page-wide (1043–1044) and cut a meta rubric clause |
| [x] | 25. Circulatory and Lymphatic System Infections | 4 | 70 | — | a188793 | Sep 24: two Opus fixers (~325k); 38 of 70 hint leaks; 25.3 textins moved above MCs printing "Epstein-Barr virus"; parent added CMV accepts to the mononucleosis FIB (not-errata line) and disclosed the yellow-fever table comma |
| [x] | 26. Nervous System Infections | 4 | 103 | 1045 | a188793 | Sep 24: two Opus fixers (~375k); 61 of 103 hint leaks; three sortbins double keys; botulism MC re-optioned to the three compared forms; leprosy "blowing nose" key stands (not-errata line) |
| [x] | KC `knowledge-check-01-06` | — | 33 | — | a188793 | Sep 24: two Opus fixers (~490k) + one second checker (~195k, shared with 07-12); Needham MC was a reverse recall → van Helmont; Golgi stem de-claimed (erratum 380); the Fable solver caught the 5.2 Ascaris stem still printing the source's "greater than 1 meter" → 20–35 cm |
| [x] | KC `knowledge-check-07-12` | — | 44 | — | a188793 | Sep 24: three Opus fixers (~650k); 8 replacements (spread rule, one-subsection sections); the ch11–12 fixer rewrote the shared file by script once (other fixers' edits verified intact); second checker replaced the Okazaki item (reverse recall) |
| [x] | KC `knowledge-check-13-14` | — | 8 | — | a188793 | Sep 24: one Opus fixer (~210k), batched with KC 15-20, 21-26 (shared second checker ~255k, Fable solve 43/43, ~100k); 3 replacements (autoclave stem repeated "vacuum"; all 13.4 items came from the HPV subsection) |
| [x] | KC `knowledge-check-15-20` | — | 46 | — | a188793 | Sep 24: three Opus fixers (~680k); 18 replacements, most for the spread rule (7 of ch17–18's 10 sections drew all items from one subsection); second checker reworded the 18.3 stem that ruled out a distractor |
| [x] | KC `knowledge-check-21-26` | — | 38 | — | a188793 | Sep 24: three Opus fixers (~600k); 12 replacements; the attribution footer sat between Chapter 24 and 25 since assembly → moved, new lint (footer last, exactly one); second checker replaced the 25.1 germinal-centers item (a page rubric line) |

## Whole-page leak read of the block checks (September 26, 2026)

`npm run kc -- leaks` listed 15 candidates across the five block checks;
each was read against the item it could give away, and none states the
tested fact or singles out a key — "phosphate" in other stems and options
under a key that accepts it, *Mycobacterium tuberculosis* named in a
drug-resistance stem that says nothing about chlorhexidine, "contact" in
"contact-sport athletes". No page changed (Biology's record, same heading,
has the standard).

## Alt-only figure pass (September 24–26, 2026)

Run with Biology (`docs/history/biology.md`, same heading): every
Microbiology figure with no `longdesc` — 508 figures, packets 01–15 —
re-read image-first by Opus with `docs/archive/alt-pass/checker-brief.md`,
the parent opening the image for every flag before editing.

- **Yield:** 150 of 508 figures fixed (about 1 in 3.4); every flag held on
  the image. Errata 1048–1069, 1072, 1075–1077, and 1086–1087; erratum
  769 (HIV caption "top right") withdrawn, since nothing in the micrograph
  says which cell is the lymphocyte; erratum 696's aside amended.
- **Classes:** photo detail (body sites, counts, colours) most common;
  then source-alt scale claims measured against the figure's own bar,
  artwork typos ("submucusa"), and diagrams traced arrow by arrow (the
  plague-transmission figure gained a `longdesc`).
- Five items re-hashed through their figures in the first batches were
  blind re-solved or parent re-read; none in the last. About 2.2M checker
  tokens.

### Sample and packet records

This book's rows of the September 24 sample (50 random figures, 25 per book, seed 20260924, `docs/archive/alt-pass/checker-brief.md`, parent opened every flagged image), confirmed against the image; paths are under `content/life-health-sciences/`, line = the `{{< mediafigure` tag:

| | Page:line | Alt says | Image shows → fix | Kind |
|---|---|---|---|---|
| [x] | `microbiology/14-antimicrobial-drugs/06-testing-the-effectiveness-of-antimicrobials.md:56` | 8/16/32 µg/mL tubes hold "clearer broth with a thin band of sediment near the bottom" | the dark band is the backdrop seen through clear broth, halfway up; the tube bottoms are clear → "hold clear broth" | error |
| [x] | `microbiology/13-control-of-microbial-growth/01-controlling-microbial-growth.md:44` | "connected by a shared red coiled air hose, standing on a grated floor" | a separate coiled hose to each suit; a solid floor with one round drain | error |
| [x] | `microbiology/17-innate-nonspecific-host-defenses/01-physical-defenses.md:53` | desmosomes: "long strands weaving them together" (source alt, verbatim) | the fibres stay inside each cell; short linker proteins span the gap → rewrite; erratum + footer disclosure (source-inherited) | error |
| [x] | `microbiology/22-respiratory-system-infections/03-viral-infections-of-the-respiratory-tract.md:261` | (c) "small, raised, scabbed lesions … on an adult's torso" | intact fluid-filled blisters; no body site is identifiable | error |
| [x] | `microbiology/12-modern-applications-of-microbial-genetics/01-microbes-and-the-tools-of-genetic-engineering.md:183` | needle "pointing at its nucleus" | the needle passes through the nucleus nearly to the far side | minor |
| [x] | `microbiology/03-the-cell/04-unique-characteristics-of-eukaryotic-cells.md:233` | (no scale) | the micrograph prints a 200 nm scale bar → add it (source alt also lacks it) | minor |
| [x] | `microbiology/08-microbial-metabolism/07-biogeochemical-cycles.md:75` | alt and longdesc tie "lithotrophic bacteria" and "anoxygenic photosynthetic" to the H₂S box; longdesc calls "organic sulfur" a box | both labels sit under the H₂S → SO oxidation arrow; "organic sulfur" is plain text | minor |

Trivial (fixed with the sample): `microbiology/08-microbial-metabolism/06-photosynthesis.md:65`, where the panel (b) longdesc named a "horizontal axis" that is not drawn.

Decided by Derek (September 24, 2026), applied: the `microbiology/06-acellular-pathogens/_index.md:8` chapter-opener Ebola map now carries the totals and date in its alt and every country's counts in a new longdesc. Before that, the per-country counts were dropped because the source alt had them wrong (erratum 459), so none of the map's data or its "30 November 2014" date reaches the reader.

| | Book | Chapters | Alt-only figures | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|---|
| [x] | Microbiology | 1–2.3 (packet 01) | 35 | 13 | 1048–1052 | 89cb68b | 13 of 35 flagged, all confirmed on the image (6 diagram, 7 photo detail); run Sep 26, 2026 as a local worktree agent, 166k tokens |
| [x] | Microbiology | 2.3–3.3 (packet 02) | 35 | 13 | 1053–1054 | 5f18943 | 13 of 35 flagged, all confirmed on the image (plasmolysis alt backwards, pneumonia side vs caption, grayscale SEM called false-color, Lister's beard, microtome dial/blue block, sodium–potassium pump longdesc added); erratum 1054 is the scanning-probe table artwork's "very short probes"; one selfcheck re-hashed by its figure, parent re-read; run Sep 26, 2026, 166k checker tokens |
| [x] | Microbiology | 3.3–7.2 (packets 03–05) | 105 | 27 | 1055–1059 | 1223d8b | 27 of 105 flagged, all confirmed on the image (9/10/8 per packet); source-inherited: Vorticella count, centriole artwork vs caption, "glowing" squid, cyclization ring oxygen, Deinococcus pair; erratum 469's panel (d) "several specimens" and panel (b) "anchor hooks" withdrawn (one looped tapeworm); five items re-hashed (3 MC + 1 sortbins blind re-solved, 1 selfcheck parent re-read); run Sep 26, 2026, about 460k checker tokens |
| [x] | Microbiology | 7.3–14.1 (packets 06–08) | 105 | 32 | 1060–1065 | 2af7809 | 32 of 105 flagged (12/6/14), all confirmed on the image; artwork errata: beta-carotene's missing central C=C (1060), API 20E strip captioned 20NE (1061), UV figure G–G/C–C pairs (1064); source-alt errata: dGTP "labeled triphosphate" (1062), electroporation charge signs (1063), triclosan oxygens (1065); pasteurization organisms now in a longdesc; five items re-hashed (4 blind re-solved, 1 selfcheck parent re-read); run Sep 26, 2026, about 470k checker tokens |
| [x] | Microbiology | 14.1–21.3 (packets 09–11) | 105 | 24 | 1066–1069 | aaf9e15 | 24 of 105 flagged (11/5/8), all confirmed on the image; two body sites softened where the image cannot settle them (boil lesions, necrotizing fasciitis leg) and one scale claim to "less than 1 µm"; source-alt errata: lab-on-a-chip called a computer chip (1066), sterol double bonds (1067), P. falciparum shape and sickled smear (1068), Snow's map bars called dots (1069); no graded item re-hashed; run Sep 26, 2026, about 445k checker tokens |
| [x] | Microbiology | 21.3–26 (packets 12–15) | 123 | 41 | 1072, 1075–1077, 1086–1087; 769 withdrawn | 453891d | 41 of 123 flagged (14/12/10/5), all confirmed on the image; Microbiology alt-only pass COMPLETE. Erratum 769 withdrawn: nothing in the HIV micrograph says which cell is the lymphocyte, and the caption's "top right" is the blue cell. Other source-alt errata: *Vibrio* "1 micrometer" (2.5 µm), dermatophyte colony "fuzzy" (1075; 696's aside amended), artwork "submucusa", pneumococcal "clearing", plague "chipmunks" (the figure also gained a longdesc), Burkitt aspirate called a "blood smear". No graded item re-hashed. Run Sep 26, 2026, about 585k checker tokens |
