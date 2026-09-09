# Microbiology — history

Dated records moved out of the operative playbook, kept for provenance.
Cut verbatim from `docs/subjects/microbiology.md`'s "How a chapter is run"
section — the pilot's parent-prep steps and its retrospective. The
operative three-pass procedure itself (author → checker → orchestrator
solve) stayed in place in the subject playbook.

## How a chapter is run *(pilot, chapter 1)*

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

## The header run log (cut September 8, 2026)

The playbook's opening paragraph used to carry this per-chapter record:

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
text); rules marked *(chapter 9)* came from it. **Chapters 10 and 11, *Biochemistry of
the Genome* and *Mechanisms of Microbial Genetics*, followed the same day**
as one eleven-section wave (four and seven sections, errata 535–555, four
claim corrections — two settled by citable references, two by the module's
own figure and paragraph); rules marked *(chapters 10–11)* came from it.


## Verification lessons by chapter (cut September 8, 2026)

The operative one-line rules stayed in the playbook's Verification section; this is the narrative they were distilled from, verbatim.


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

- **The prime family folds in both normalizers** *(chapters 10–11)*: the
  source types 5′/3′ three ways — U+2032 `′`, the right single quote `’`,
  and the modifier letter prime `ʹ` (U+02B9), which is a LETTER to Unicode
  and survived every normalizer's punctuation strip, so a source key `5ʹ
  end` matched neither a page answer `5′ end` nor a learner's `5' end`.
  `check-text`'s `QUOTES` and `normalizeText` now fold `′ʹʼ` with the
  apostrophe. House form on the page is U+2032 everywhere, and `glossary.py`
  still needs the source's own glyph to find a `5' cap`-style headword.
- **Notation this book's genetics chapters need** *(chapters 10–11)*:
  isotopes (`³²P`, `¹⁵N`) and `F⁺`/`F⁻`/`F′` in Unicode (a superscript with
  no ASCII digit before it passes the exponent lint); a numeric exponent in
  prose (`4³`) is `$4^3$` even inside a Source note — the parent's own
  `1.7 × 10³` in a note tripped the lint; a letter superscript
  (`fMet-tRNA<sup>fMet</sup>`) is the one inline HTML `<sup>`; the source
  prints promoter positions `–10`/`–35` with an EN DASH and the page
  normalizes to the Unicode minus; sequences go in code spans with the
  source's spacing.
- **A sequence-derivation exercise is a fully worked selfcheck**
  *(chapters 10–11)*: antisense → mRNA, complementary strand, translation,
  and the four-strand mutation worksheet each carry every sequence with its
  5′/3′ ends, every amino acid, and the mutation type as the model answer;
  the checker re-derives them base by base (all seven agreed). A worksheet
  `<table>` inside such an exercise is a list in the question, not a body
  table; 11.5 may read 11.4's genetic-code figure because the question
  itself says "using the genetic code".
- **Figure-keyed forms this run settled** *(chapters 10–11)*: a lettered
  identification ("(i)/(ii)/(iii): where are mRNA, rRNA, tRNA") is one
  figure-keyed `multiplechoice` per molecule over the printed labels; a
  many-letter labelling question (A–I plus an arrow) is a selfcheck whose
  model answer is the letter→part mapping with the source's own label list
  read against it (the 11.4 author dropped the E/P/A sites until the checker
  compared the two lists) and letters grouped to stay within the 2–6
  checkpoint cap; a table printed as an image with a graded ask (the
  Chargaff percentages) may be a `multiplechoice` when the arithmetic is the
  question's own instruction; a body item keyed from a figure is honest only
  when the ARTWORK draws the fact (the Meselson–Stahl conservative tubes),
  never when only the alt says it.
- **The one-sentence rule is literal, again** *(chapters 10–11)*: the
  checkers reverted four two-sentence conversions (10.1 ×2, 11.7's
  alarmones + alternate σ factors from two subsections, 11.4's "nearly
  universal" with invented distractors) and found two missed conversions
  the other way (10.4's noncoding-DNA roles and plasmid antibiotic
  resistance, each fixed by one sentence). A rewritten CYU stem is a defect
  even when the cloze is honest — the source stem stays verbatim.
- **Invented `sortbins` bins and reference-table bins** *(chapters 10–11)*:
  a bin label the module never prints ("Direct-acting chemical mutagen",
  merging two table groups) is a new claim — use the table's own group
  names and drop a group to fit the four-bin cap; an enzyme→function table
  with nine rows needs four enzymes as bins with TWO items each (one from
  the table cell, one from the body paragraph) or the interleave lint
  fails; when the comparison IS the category noun ("chromosomes"), name the
  bins after the organism ("Eukaryotic cells") so the bin-word lint passes.
- **Accept-list gaps the checkers' graders caught** *(chapters 10–11)*:
  the singular of a keyed plural (`bacteriophage`, `phage`), a hyphen
  between two letters (`semi-conservative` does not fold to
  `semiconservative`), a module synonym (`jumping gene`), a spaced unit
  (`70 S`), `UV`, `wildtype`; and a keyed-plural textin lists only the
  SINGULAR of an alternative term, since the regular plural folds.
- **Footer claims the checkers falsified** *(chapters 10–11)*: graded/
  selfcheck counts (11.6 said 3/7 for 6/4), filler counts (three pages),
  "no appendix entry" for headwords that exist as abbreviations
  (`mRNA`/`rRNA`/`tRNA`, the hyphenated `aminoacyl-tRNA synthetase`), and
  "logged as an erratum" for entries the parent had not yet written — the
  brief now says the parent logs at close-out, and a checker greps the
  errata file only for the parent's entries.
- **Alt/longdesc defects the artwork exposed** *(chapters 10–11)*: a
  fabricated third nucleotide and "water removed" arrow (10.2), a reversed
  ribosome direction against the figure's own 3′/5′ labels (10.3), a
  "before/after" narrative for a panel that is a single static scene
  (11.6), a two-panel alt for a figure with a shared third state (11.7), a
  black-and-white claim for a purple-tinted photograph, a rung count of two
  for four, and pointer lines the label does not have. Multi-panel
  mechanism figures overshoot the 600-character alt cap on the first pass
  every time: draft the walk-through in `longdesc` first, then write the
  alt.
- **A module with no defined terms has no `## Key terms` heading**
  *(chapters 10–11)*: 10.1 prints fifty-four index entries and not one
  class-less `<term>`; its fillers are summary/body clozes.
- **A garbled source sentence repaired on the page is a disclosed
  correction** *(chapters 10–11)*: 11.2's "the red ¹⁴¹⁴ … more ¹⁴ … replace
  ¹⁵" (element symbols lost, one superscript duplicated) is named in the
  footer and logged (erratum 549), like any one-word fix.
- **Prose claim pass yield, chapters 10–11**: four accepted corrections —
  pX02's "capsular polysaccharide" (the anthrax capsule is poly-D-glutamic
  acid; erratum 545, rule 2), the viral genome-size floor "3,500 base
  pairs" against the module's own chart plotting deltavirus at 1,700 bp
  (546, rule 1), pol δ/ε assigned to the wrong strands (550, rule 2), and
  topoisomerase IV "single-stranded break" in a table against the module's
  own paragraph (551, rule 1) — plus one citation page range (537). No
  suspicions kept, no true distractors.
- **Errata 535–555 came from these chapters**: a cross-reference title
  printed wrong in two modules, "Kossell" ×2, a Griffith page range, a
  Pauling journal name, the "4′" option end, the garbled isotope sentence,
  "ribonucleo proteins", "may be lead", "about on", a missing period, a
  double-keyed Multiple Choice (two distractors replaced, erratum 547), the
  four claim corrections, and figure-alt defects on five modules (a
  timeline alt with five errors, a genetic-code alt with four).

