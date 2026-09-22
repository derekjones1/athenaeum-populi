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
**Chapter 12, *Modern Applications of Microbial Genetics*, followed the same
day** as a four-section wave under the versioned briefs (62 graded items,
19 self-checks, 28 figures, errata 556–564, two claim corrections settled by
citable references — the *Xenopus* cloning year and the Sanger dideoxy
year); the run cost fifteen checker defects (a distractor echoing a sibling
key, an invented distractor, three shortened citations, a stale hint after
the parent's own date correction) and one tool fix: `verify-source-keys`
paired a body Check Your Understanding item with the look-alike Multiple
Choice exercise and reported a false key-differs, so the module reader now
collects the Check Your Understanding questions and a page stem that is one
of them is never matched to an exercise.

**Chapters 13, *Control of Microbial Growth*, and 14, *Antimicrobial
Drugs*, followed on September 12** as one eleven-section wave under the
versioned briefs (125 graded and self-check items across the two chapters,
53 figures, errata 565–607, five claim corrections). The wave's own numbers:
chapter 13's four sections carry 53 Practice items, 16 body self-checks, and
33 figures; chapter 14's seven carry 78 Practice items, 13 body self-checks,
and 22 figures. Both blind solves agreed with every key — 54 of 54 in
chapter 13 and 71 of 71 in chapter 14, the chapter 14 run's single flag
settled against the module's own sentence distinguishing multidrug
resistance from cross-resistance.

The run cost about forty checker defects, and they clustered in one place:
**five of the eleven authors dropped or folded away a source exercise**
rather than rendering it, each with a plausible-sounding footer rationale —
"the module gives nothing to answer it with," "a near-duplicate of the body
Check Your Understanding bullet," "no single sentence fixes it." Only one of
those was a genuine literal reword. The other defects were the familiar
kinds: a stem printing the next item's key verbatim, two cloze fillers
reaching past their one sentence, a sortbins item true of two bins, a
selfcheck clause sourced from the Glossary rather than the module body, six
transcribed table titles missing, and a footer whose claims about its own
page were false in four separate ways across four pages. The two prose claim
passes read about 355 claims and returned five corrections, all confirmed
against the cited literature before they were applied: streptomycin's
co-discoverer "Arthur Shatz" is Albert Schatz; oxazolidinones do not prevent
translocation; artemisinin is an antimalarial, not an antifungal; the
glucose-6-phosphate-dehydrogenase haemolysis risk belongs to the
8-aminoquinolines, not chloroquine; clavulanic acid's producer is
*Streptomyces*, not *Streptococcus*; and teixobactin came from a Maine soil
sample, not Mount Ararat. Rules marked *(chapters 13–14)* came from this run.


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

- **Chapters 15–16 (September 12, 2026), eight sections in one wave**: 8
  Sonnet authors → 8 Sonnet checkers → 2 Sonnet claim passes → 2 fresh
  Fable solvers on masked packets. Prep (run-facts Part A, the two landing
  pages, the errata draft, the count pins) went to Sonnet agents too; the
  parent kept the decisions, the adjudications, and the gates. Blind solves:
  chapter 15 56/56 after one flag and two accept-list widenings, chapter 16
  50/50 after two flags. Errata 608–621; three claim corrections (the
  listeriolysin O gene is *hly*, not *hyl*; listeriosis fatality is one in
  five overall, not "in normal healthy people"; the ergotism outbreak is
  857 AD in the Rhine Valley, not the 5th century in Eastern Europe).
- **The parent's run-facts contradicted the playbook twice** *(chapters
  15–16)*: a matching form with the term as stem (the playbook's row says
  description as stem, terms as options) and a seven-bin `sortbins` (the
  cap is four). Three authors built the wrong shape before the correction
  went out. Run recipe now: a Part C decision quotes the playbook rule it
  applies; a shape the playbook fixes is not re-decided.
- **One author still folded a source Short Answer into a body item** after
  the chapters 13–14 rule; the two questions were genuinely the same, and
  the answer is still "both stay" — the Practice item as a `selfcheck`.
- **Masked solve pages leaked keys through the provenance footer**
  ("the Matching exercise (key: D, E, B, A, C)"); the chapter 16 solver
  reported it. `solve:emit --pages-out` now blanks the footer (test added).
- **A bare `$4 billion` broke the production build** on 16.4 while every
  fast gate passed; the currency lint only knew digit-grouped amounts. It
  now catches a magnitude word too.
- **Checker yield, chapters 15–16**: 26 defects on lint-clean pages —
  key leaks across items (a stem or hint printing the next item's key,
  three on 15.2), alt/longdesc claims not in the artwork (Alaska on a map,
  swapped colours, a "gloved" hand), a double-keyed `sortbins` built on
  duration, six capitalised key-term headwords, a dropped "the", a
  truncated journal name, two rejected learner spellings
  ("non-communicable", the bare "Koch"), and both Alpha-toxin rows left
  out of a `sortbins` behind a false footer. About one finding per run was
  wrong: the chapter 16 claim pass reported a "dropped" cat-flea row that
  the printed table never carried — the source alt invented it (part of
  erratum 620).
- **Solver synonyms are learner spellings**: "median lethal dose" for
  LD₅₀ and "incubation" for the chronic-disease blank (the module itself
  says incubation periods run to years in chronic disease) both went into
  `accept` rather than being adjudicated away.
- **The prep tool's glossary lookup mis-parsed nested emphasis** (a
  headword with an italic binomial inside the bold span was cut at the
  inner close tag, so "Clostridium perfringens" matched "*C. perfringens*
  gastroenteritis"); fixed with a depth-aware headword splitter.

- **Chapters 17–18 (September 13, 2026), ten sections in one wave**: 10
  Sonnet authors → 10 Sonnet checkers → 2 Sonnet claim passes → 2 fresh
  Fable solvers on masked packets. Prep again went to Sonnet agents —
  the two landing pages and run-facts Part A, plus a 58-entry decisions
  list — but this run's Part C carried the playbook rule quoted beside
  each decision, written by the parent rather than left implicit; a
  shape the playbook already fixes was not re-decided, closing the gap
  chapters 15–16 opened. Blind solves: chapter 17 60/60 with nothing
  flagged, chapter 18 85/85 after two adjudications. Errata 622 onward
  (the exact final range is recorded when the drafter runs; the claim
  and cross-reference corrections were numbered first, the alt/typo
  defects after).
- **Checker yield, chapters 17–18**: about twenty-five defects on
  lint-clean pages, clustered in two places — footer miscounts and
  run-machinery clauses ("reported to the parent," stale item counts,
  a checker brief whose own footer-wording clauses contradicted each
  other) were the commonest class, with alt-text-versus-image and
  table-image cell errors close behind (a Formed Elements table cell
  silently dropping "specific," a vaccine-mechanisms figure dropping
  "another person or" from its passive-immunity cell, a superantigen
  figure's alt mislocating which panel shows recognition versus
  non-recognition). One fold was licensed: 17.3 merged a source Short
  Answer into the body Check Your Understanding it duplicated and
  refilled its Practice slot with a term-recall filler, disclosed in
  the footer.
- **Prose claim pass yield, chapter 17**: three findings, one accepted.
  17.5's filarial-lymphangitis infiltrate named "thrombocytes" where
  the pathology literature names macrophages — accepted, a decisions
  entry and an erratum. 17.3's cross-reference promising that B
  Lymphocytes and Humoral Immunity (m58887) covers antibody-mediated
  basophil triggering was confirmed true of the source and false of
  the now-authored target — a genuine defect, but transcribed as
  printed with an erratum rather than a page edit, since the page
  faithfully renders what the source promises. And "laudable pus…until
  the seventeenth century" was reviewed and kept: the counter-evidence
  was a paywalled history-of-medicine article reached only through
  search-engine summaries, one of which misnamed its own subject, too
  thin a footing to overturn a textbook generalization.
- **Prose claim pass yield, chapter 18**: three findings, all accepted.
  18.2's MHC I sentence says it presents "pathogens" to T cells where
  the module's own next sentence, next paragraph, and Key-terms bullet
  all say "antigens" — whole pathogens are never presented, only
  processed peptides. 18.4's B-cell-activation figure caption says
  cells differentiate "into B cells and plasma cells," a tautology
  against the same figure's own alt, longdesc, and the body prose two
  paragraphs earlier, all of which say memory B cells. 18.5's Micro
  Connection box calls the 2010 Australia-approved Japanese encephalitis
  vaccine a DNA vaccine; it is IMOJEV, a live attenuated chimeric
  recombinant-virus vaccine on an entirely different platform than the
  plasmid mechanism the box itself defines two sentences earlier.
- **Two blind-solve disagreements settled the same way as the source
  disagreements above**: two Fable solvers phrased 18.3's open-ended
  "what effect does a superantigen have on a T cell?" `textin`
  differently enough ("unregulated activation" versus the key's
  "cytokine storm") that the item became a `multiplechoice` over the
  module's own named outcomes instead; and 18.3's MHC II fill-in-the-
  blank keyed "helper" gained "regulatory" in `accept` once the
  module's own sentence turned up naming both — "Helper T cells and
  regulatory T cells can only be activated by APCs presenting antigens
  associated with MHC II."
- **A 429 rate limit killed two agents mid-run**: the alt-errata
  verifier, before it had written anything, and the chapter 18 Fable
  solver, after it had already written its complete answers file. The
  verifier was resumed by `SendMessage` once the reset passed; the
  solver's answers were intact and needed no resolve.
- **New playbook rules from this run**: a Case in Point's closing
  question stays unanswered inside its callout, like a Clinical Focus
  Resolution; a recap table transcribed from a figure is transcribe-
  only, never re-derived; the bin-word lint's fix is to reword the
  sortbins items, not to weaken the label; a body Check Your
  Understanding converted to graded form is never also duplicated in
  Practice; and T<sub>H</sub>-style subscripted letters and any Greek
  letter appearing in a graded answer need their own lint, after this
  run hit the unicode-math lint blocking bare α/β in an option string.
- **A brief inconsistency the chapter 17.3 checker caught**: `checker.md`
  told checkers to flag "a clause about run machinery" as a footer
  defect while, two clauses earlier, telling authors to write "reported
  to the parent for the errata log" for a page still in flight — the
  same phrase, banned and prescribed in one file. `checker.md` and
  `author.md` now say the same thing: a footer names a correction, and
  never says where or whether it is logged.

- **Chapter 19 (September 13, 2026), five sections in one wave**: 5
  Sonnet authors → 5 Sonnet checkers → 1 Sonnet claim pass → 1 fresh
  Fable solver on a masked packet. Prep went to Sonnet agents again —
  the landing page and run-facts Part A plus a DECISIONS NEEDED list,
  this run carrying no exercise images — while Part C, quoting the
  playbook rule beside each decision per the chapters 17–18 fix, again
  fell to the parent. Blind solve: 58/59 agree, the one disagreement
  settled by rewording the item rather than the key (rule below). The
  alt-errata verifier confirmed twelve source defects across the
  chapter, all disclosed; errata 652–662, with 659 the one claim
  correction (the Addison-disease lymphocytosis gloss). Close-out — the alt
  verifier, the errata drafter, and the pins agent — again went to
  Sonnet.
- **Checker yield, chapter 19**: about a dozen defects and concerns,
  clustered around footer miscounts and run-machinery clauses — 19.2's
  filler count printed "four" where the page has five, 19.3's footer
  quoting a stem it had already silently corrected, and the "reported
  for the errata log" clause the checker brief already bans, caught on
  19.4 and traced from there to twenty-five further shipped pages
  (below) — plus content the footer never named: 19.1's Type I
  `sortbins` inventing "dust" and borrowing "pollen" from the
  Hay-fever row for its asthma item, 19.1's Types table transcribing
  "Local and systemic" onto the Type III cell from the source alt's
  own error rather than the rendered image, and 19.3's third Practice
  item under objective 3 (a body-paragraph filler) missing from the
  footer's author-written disclosure. Two further checker concerns —
  the hyperpig alt's uncaptured comparison palm and the Lupus
  longdesc's shaded feet, neither drawn in the artwork — were
  confirmed by the alt-errata verifier. Ahead of its own checker,
  19.4's author caught and replaced a "underlying cause" filler cloze
  cut from the very sentence an adjacent self-check already uses as
  its model answer.
- **Prose claim pass yield, chapter 19**: zero findings across roughly
  236 claims spanning the five modules' prose, tables, distractors,
  and `sortbins` items — the first chapter's claim pass to clear with
  nothing to adjudicate. The chapter's one claim correction came from
  the 19.2 author's own review rather than the claim pass: the
  Autoimmune Addison Disease symptom list's parenthetical gloss on
  "lymphocytosis," printed in the source as "decreased levels of white
  blood cells" — backwards, since lymphocytosis is by definition an
  increased count — corrected to "increased levels of lymphocytes,"
  with an inline Source note beside the correction and an erratum.
- **The blind solve's one disagreement became a playbook rule**: 19.4
  keyed a cloze "profound CD4 T-cell ________ (decrease in
  lymphocytes)" to "CD4 T-cell lymphopenia," and the Fable solver
  answered "lymphopenia" — correct against the parenthetical gloss,
  but short of the compound key. The fix moved the modifier into the
  stem ("CD4 T-cell ________") so the blank's own key is the glossed
  term, "lymphopenia," with "CD4 T-cell lymphopenia" kept in `accept`:
  a blank sitting directly before a parenthetical gloss now keys to
  the glossed term, never the modified phrase.
- **The "reported for the errata log" footer phrase swept
  corpus-wide**: 19.4's checker traced the phrase — a run-machinery
  clause the checker brief already bans — to twenty-five shipped pages
  beyond chapter 19 itself. A Sonnet sweep agent's corpus grep found
  the actual family of violations wider still (sixty-nine files across
  microbiology, biology, and precalculus, several phrasings the
  original list missed — "logged in the ledger," "flagged for the
  parent's adjudication," "reported for the errata file"), fixed all
  of them, and added a corpus-wide lint rule (`tools/lint/lints.mjs`)
  that fails any footer naming where or whether a correction is logged
  or reported; `npm run lint` now runs 716/716 files clean.
- **New playbook rules from this run**: a footer names the correction
  made, never where it is logged or reported (lint-enforced, above); a
  filler cloze may not be cut from the sentence an adjacent self-check
  already uses as its model answer; a cloze blank sitting directly
  before a parenthetical gloss keys to the glossed term, with the
  modifier moved into the stem; a `sortbins` item's wording must come
  from its own row's cell, never a neighboring row or the table's
  margins; and a rendered-table image is transcribed from the image
  itself, never from a source alt the artwork contradicts.

- **Chapter 20 (September 13, 2026), five sections in one wave**: 5
  Sonnet authors → 5 Sonnet checkers → 1 Sonnet claim pass → close-out
  again to Sonnet agents (alt-errata verifier, errata drafter, pins).
  Prep followed the two-part run-facts shape (a Sonnet drafter for Part
  A and the DECISIONS NEEDED list, the parent writing Part C against the
  playbook). The blind solve ran twice: a fresh Fable solver on all five
  pages first (62/64), then a second fresh Fable solver on just the two
  pages with disagreements after they were fixed (64/64) — cheaper than
  re-soliciting all five once only two pages had changed. Errata 663–676,
  with 663 the one claim correction.
- **Checker yield, chapter 20**: about a dozen defects, none of them a
  wrong graded key. 20.5's checker caught a body Check Your Understanding
  bullet silently swapped rather than converted — the module's "What is
  the ANA test looking for?" never appears on the page; in its place, at
  the same position, sits an unrelated invented cloze on SLE
  autoantibodies, well-formed and honest on its own terms but not a
  rendering of the bullet it replaced, with the footer's "all six body
  bullets rendered" claim false as a result (five, not six). 20.1's
  checker found two fabricated `longdesc` details against the vendored
  artwork: a "gloved hand" injecting the rabbit in step 1 of the
  polyclonal-production figure (no hand is drawn) and a second rabbit
  re-injected with antigen in step 4 (the step-4 syringe holds blood, not
  antigen, and only one rabbit appears in the source alt or the image).
  20.2's checker caught a neutralizing-antibodies selfcheck that inverts
  the module's own sentence: the source presents complex-formation and
  receptor-blocking as two independent neutralization mechanisms, and the
  page's model answer turns the first into something the second
  "prevents," a causal claim the module never makes — plus a footer that
  miscounted the body Check-Your-Understanding split (five graded claimed,
  six actual; three left as selfcheck claimed, two actual) by silently
  omitting a graded item from its own list. 20.4's checker found a filler
  `textin` stem that spells out "immunohistochemistry" in a parenthetical
  two lines above the next item's `textin`, whose answer is exactly that
  word, and a `longdesc` that places the EIA figure's enzyme "at the base"
  of the antibody's stem when the vendored image draws it at the top,
  the far end from the antigen-binding arms. 20.3's checker found two more
  footer miscounts (three author-written filler items claimed, four
  present; a "see" cross-reference swapped for a bare one and vice versa)
  plus two ungraded `accept` gaps a British-spelling/possessive learner
  would hit ("microtiter"/"microtitre," "patient serum"/"patient's
  serum"). The alt-errata verifier confirmed seventeen source defects
  across the chapter (typos, an inconsistent dilution alt, artwork
  misprints, an all-caps footnote author list, a dead Link to Learning),
  all disclosed.
- **Claim-pass yield, chapter 20**: one accepted correction of two
  findings. 20.3's Widal-test sentence calls *Salmonella enterica*
  "subspecies *typhi*"; it is a **serovar**, not a subspecies (the real
  subspecies is *S. enterica* subsp. *enterica*), and the book's own
  sibling modules say "serovar Typhi" six times across three untouched
  modules and never call it a subspecies — corrected with a Source note,
  erratum 663. The second finding, 20.2's "Venereal Disease Research Lab"
  naming the modified Wassermann test, was reviewed and not made errata:
  it is the source's own wording, and "Lab" is the source's own
  abbreviation of "Laboratory," not a factual error.
- **Two blind-solve disagreements, both settled by reshaping the item
  rather than the key**: 20.3's Indirect Antiglobulin Test cloze was
  keyed to the abbreviation and the solver answered the full name, so
  `accept="indirect antiglobulin test"` was added. 20.5's source Fill in
  the Blank keyed "fragments" ("cell clumps or ________") sent a solver
  in circles — the module's own prose never prints the word "fragments"
  anywhere in m58904, so a blind reader has no way to recover it — and
  the item became a `multiplechoice` keyed to the source answer with the
  module's own terms as disclosed distractors instead.
- **The dead Link to Learning**: 20.5's direct-fluorescent-antibody
  animation link (`openstax.org/l/22dirfluorant`, redirecting to a Cornell
  microbiology-cases page) returned HTTP 404 on September 13, 2026,
  confirmed with a full GET past the redirect. The redirect is identical
  in the pinned CNXML, so this is an upstream link rot, not a page
  authoring defect; the section keeps the callout, names the resource and
  its site in plain text instead of linking it, and its footer discloses
  the redirect, the destination, and the date.
- **New playbook rules from this run**: a source Fill in the Blank whose
  key the module prose never states becomes a disclosed `multiplechoice`,
  never a `textin` a blind solver cannot pass; two keyed Multiple Choice
  items sharing one image render as one `mediafigure` followed by both
  items adjacent, with the shared alt naming what the image shows and
  computing nothing; a key printed as "A or B" where B is the module's
  own parenthetical synonym for A is a `textin` keyed A with B in
  `accept`, not the two-answer "A or B" form; a body Check Your
  Understanding bullet may be converted but never replaced, even by
  another honest item at the same position; and a run-facts `accept`
  member must not already print in the item's own stem, checked by grep
  before the accept list is written.

- **Chapters 21 and 22 (September 13–14, 2026), nine sections in one
  wave** (21.1–21.5, 22.1–22.4): 9 Sonnet authors → 9 Sonnet checkers → 2
  Sonnet claim passes (one per chapter) → close-out again to Sonnet agents
  (an alt-errata verifier per chapter, an errata drafter, a pins agent, a
  tool-bug fix agent). Prep followed the two-part run-facts shape (a
  Sonnet drafter for Part A and the DECISIONS NEEDED list, the parent
  writing Part C against the playbook). These are the book's **first
  Disease Profile chapters** (nine boxes across the two chapters): the
  media pull vendors a Disease Profile table image like any other figure,
  so the parent de-vendored all nine at close-out (manifest entries + 18
  webp files removed), and two of the nine boxes' printed table images
  disagree with their own pinned CNXML alt (21.2's "a pregnant person" vs.
  the image's "mother"; 22.2's pneumococcal-drugs cell with/without "or
  cephalosporin") — the CNXML alt was kept as the transcription authority,
  with a footer disclosure of what the image prints. Checkers found about
  30 defects across the wave, none a wrong graded key: mostly figure-alt
  mismatches against the vendored image (a claimed "second part" not in an
  image, a mislabelled cross-reference), a handful of one-word source
  typos ("Proproniobacterium acnes," "parvovirus 19," "M. cattarhalis"),
  and two option-typo corrections needing `DISCLOSED_DEVIATIONS` entries.
  The two chapters' claim passes together yielded two accepted corrections
  and one rejected finding: 22.2's "is caused by a rickettsia, Coxiella
  burnetii" corrected to name it an obligate intracellular bacterium once
  classified among the rickettsias (this book's own Chapter 4 places
  Coxiella in Gammaproteobacteria and Rickettsia in Alphaproteobacteria),
  and 22.3's MERS "identified in 2013" corrected to 2012 (WHO/CDC agree);
  21.1's claim pass flagged the necrotizing-fasciitis glossary's "exotoxin
  A" as inconsistent with the body and was **rejected** — streptococcal
  pyrogenic exotoxin A is a genuine *S. pyogenes* superantigen, and the
  checker had matched the wrong organism's "exotoxin A". A third claim
  correction (22.3's outbreak table printing "N2N2" for the 1957 pandemic
  strain, corrected to H2N2) surfaced from an author/checker pair before
  either chapter's formal claim pass ran. The blind solve ran once per
  chapter: chapter 21's fresh Fable solver agreed on all 50 items with
  nothing flagged; chapter 22's agreed on 68 of 71, with the remaining
  three settled by adjudication (an *aspergilloma* plural fold, the
  desert-southwest `accept` extended, and the otitis-media `accept`
  extended) rather than by changing a key. Errata 677 onward (the H2N2
  claim correction was 677; the two claim-pass corrections and the alt/typo
  findings follow — see `docs/openstax-errata.md` for the drafted range,
  not yet written as of this entry). Two lessons went into tooling: the
  `terms`/glossary extractor in `tools/source/microbiology-prep.py` missed
  four Glossary headwords (nested `<emphasis>`, a singular body term
  against a plural headword), fixed with a regression test; and chapter
  22.1's tuberculosis Link to Learning redirect
  (`openstax.org/l/22mycotublegpnean`) returned HTTP 404, confirmed with a
  full GET, and was replaced with plain text naming the resource, disclosed
  in the footer. The cross-link grep (see "The wave" in the run recipe)
  caught two sections — 22.1 and 22.3 — that left a Clinical Focus chain
  sentence as plain text despite Part C already naming the route.

- **Chapter 24 (September 14, 2026), six sections in one wave**: the
  recipe as versioned — Sonnet landing page and run-facts drafter (Part
  A + nineteen DECISIONS NEEDED), the parent's Part C, six Sonnet
  authors, six checkers, one claim pass, a fresh Fable solver (59/59
  after one adjudication: a source distractor the solver called "also
  defensible" on a source-keyed MC — the upstream key stands), four
  Sonnet close-out agents. Errata 735–754, none of them claim
  corrections: the claim pass returned one accepted one-word typo
  (*Treponema vicentii* → *vincentii*, the source itself spells it both
  ways) and one "reviewed and not errata" (24.3's Typhoid Mary "51 cases
  and three deaths" against 16.3's Marineli-cited "at least 122 cases,
  five fatal" — both counts circulate; each page transcribes its own
  module).
- **The drafter invented a key, chapter 24**: the run-facts drafter
  wrote "source key: D" for 24.5's Art Connection exercise, which
  prints NO solution — the CNXML check in Part C caught it, and the image
  (pear-shaped cells trailing flagella, attached to a gerbil's
  intestinal wall) is the module's adhesive-disk *Giardia*, keyed A. A
  Part B item quotes the extractor's line ("source prints no key")
  verbatim and never infers a letter.
- **Checker yield, chapter 24**: eighteen defects across six pages, no
  wrong findings. Real: two `sortbins` items not unique to their bin
  when checked against every cell (LEE named in EHEC's diagnostic cell;
  ETEC's phrase a substring of EIEC's); a source MC's own options
  ("ascariasis", "hookworm") printed immediately before textins keyed to
  them; a distractor ("Cementum") above its own textin key; two hints
  carrying the key's phrase; two longdescs wrong against the image
  (liver/spleen sides stated without a frame; teeth in a panel that
  labels none); a Trench alt saying "upper" teeth for upper and lower;
  undisclosed author-built fillers (three pages); footers claiming
  "checked cell by cell, no divergence" over silently smoothed alt
  typos and commas; two preserved source typos ("cayetanesis",
  "tropozoite") that the one-word rule says to correct; a disclosure
  naming two of a correction's four sites. Two of six authors ran
  `npm test` against the brief and reported the expected source-map
  failures as news.
- **Disease Profile tables, third run**: 24.6's `HelminthTBL` printed
  image is a different table version from its alt (other title, column
  set, and cell wording) and the source's `HelminthTBL2` "continuation"
  duplicates four rows already in the alt — the page transcribes the
  alt once, discloses both, and de-vendors both images. Three table
  typos are baked into the print ("famcyclovir",
  "Trimethoprim-sulfmethoxazole", "Ancylostoma doudenale").
- **Chapter 25 (September 14, 2026), four sections in one wave**: the
  recipe as versioned — Sonnet landing page and run-facts drafter (Part
  A + eighteen DECISIONS NEEDED), the parent's Part C (thirteen
  decisions), four Sonnet authors, four checkers, one claim pass, a
  fresh Fable solver (38/38 after two adjudications: 25.1's "subclavian
  veins" `textin` converted to `multiplechoice` because the module's
  body prose never prints the key — only the exercise solution does —
  its page re-emitted and re-solved; 25.3's HIV-stage 700/µL item, where
  the source's own key stands over the solver's reading), five Sonnet
  close-out agents (alt-errata verifier, errata drafter, pins/de-vendor
  agent, a lessons agent, a body-keys-lint measurement agent). A Sonnet
  429 at roughly 18:40 PDT killed the 25.1 author, the 25.3 checker, and
  the 25.4 author mid-wave; all three resumed by `SendMessage` four
  minutes later, once the 6:10 pm reset cleared. Errata 755 onward.
- **Claim pass, chapter 25**: three findings, all three accepted — a
  genuine OpenStax source defect (the Glossary appendix's rat-bite-fever
  headword prints "*Bacillus moniliformis*" where the module's own body
  says *Streptobacillus moniliformis* three times, and a Practice
  distractor inherited the wrong genus), a false equivalence ("Human
  T-lymphotropic viruses (HTLV), also called human immunodeficiency
  viruses (HIV)" — different genera, different diseases, neither
  discussed elsewhere in the book), and a Tick Tips box's anatomy ("two
  body segments, the cephalothorax and the head" — a cephalothorax
  already fuses head and thorax into one; ticks instead have a
  gnathosoma and an idiosoma). Each got a Source note, an erratum, and a
  `reconciliation-decisions.json` entry; the rat-bite-fever fix also
  replaced a Practice distractor built on the wrong genus.
- **Checker yield, chapter 25**: twelve real defects across four pages,
  plus one false alarm the checker itself retracted (25.3's own
  partial-pass finding that a Disease Profile cell's alt disagreed with
  the printed image — the book's own rule says the pinned alt wins, and
  the page's footer already disclosed the divergence correctly). Real: a
  dangling "(reported below)" clause on two pages; a filler `textin`
  key leaking as an MC distractor immediately above it, three times on
  one page; a singular-learner spelling wrongly rejected; a mislabeled
  figure panel (alt names the spleen for what the artwork draws as a
  lymph node — erratum candidate); an undisclosed silent typo fix
  ("*Staphylcoccus*" corrected to "*Staphylococcus*") beside a footer
  that then misattributed a second, real correction to the wrong
  artifact (that typo is baked into the printed table image, not the
  alt); a `textin` accept list missing the exact term its own hint
  teaches ("erythema migrans"); a body Check Your Understanding MC keyed
  from two paragraphs stitched together (a "mouth" clause graded
  alongside a "bite" clause from an earlier sentence); a footer's own MC
  count wrong against the page; and a Key terms bullet omitting "AIDS,"
  which the Glossary defines, on the checker's own mistaken claim that
  it was sentence-derived.
- **Two Part B "not checked" pairs, chapter 25**: the run-facts drafter
  flagged two unkeyed items it could not resolve to one sentence — the
  HIV diagnostic-test panel (three source sentences: the initial
  antibody screen, the fourth-generation antibody/antigen or NAT
  confirmatory test, and Western blot/PCR) and the ART drug-category
  question (the module names no drug classes at all, only "various
  combinations of drugs") — and the parent re-checked both directly
  against the CNXML rather than pass the ambiguity to an author: both
  stay `selfcheck`, the ART model answer restating only what the module
  says and importing no reverse-transcriptase/protease/integrase
  vocabulary from general knowledge.
- **The alt-errata verifier re-vendored what it was sent to check,
  chapter 25**: told four Disease Profile stems were de-vendored on
  purpose, the verifier ran the media pull on all four anyway because it
  found them "missing," restoring the manifest entries and eight webp
  files; the parent removed them again. The run recipe now says the
  verifier's brief must forbid `source:media`/`vendor-media`, and that
  the pins/de-vendor agent launches after the verifier reports, or
  de-vendors last.
- **Disease Profile tables, fourth run**: 25.4's `Protozoa` table folds
  two disease classes under row-group headers ("Protozoa", "Helminths")
  that the alt garbles into a phantom seventh column and a stray cell
  word; the page transcribes the image's real six-column structure with
  the group headers rendered as full-width row labels instead, alt
  wording kept for every cell.

- **Chapter 23 (September 14, 2026), six sections in one wave**: the
  recipe as versioned — two Sonnet prep agents (landing page; run-facts
  Part A + DECISIONS NEEDED), the parent's Part C (two exercise images,
  nine unkeyed Short Answer/Critical Thinking forms, four Disease Profile
  tables, one-objective floor for 23.5, the Clinical Focus chain
  23.1→23.3→23.5→23.6, routes), six Sonnet authors, six checkers, one
  claim pass, a fresh Fable solver, four Sonnet close-out agents. Solve
  57/57 after one accept extension (source key "warts" for a page that
  introduces condylomata as "genital warts"). Errata 718–734, with
  720 (trigeminal ganglion is cranial, not "in the spine") and 721
  (hydrogen peroxide is the organism's product, not the IgA protease's)
  the claim corrections and 719 a source exercise stem that contradicts
  its own key ("Which oral medication is recommended as an initial
  topical treatment", keyed miconazole).
- **Checker yield, chapter 23**: eighteen defects across six pages and
  two wrong findings. Real: an invented CDC credit on the 23.1 exercise
  figure; a body bullet graded on the same fact as a keyed source
  Practice item; three cross-item hint or stem key leaks ("the ureter",
  "dysuria", "genital warts"/"cervical cancer"); a source solution's
  "a broader term" silently made "the"; "loop of Henle" renamed in a
  longdesc; two alt counts (two dipsticks, two leptospires) wrong
  against the image; an MC keyed to a word ("painless") from a second
  subsection's sentence; a stem's abbreviated binomial expanded; four
  of five author-built MCs keyed at position A; an accept list missing
  "HSV2"; a second alt-vs-print Disease Profile divergence
  ("cephalosprins") undisclosed. Wrong: "five defined terms never
  bolded" (all five were — a grep, not an impression) and "straight
  quotes are an undisclosed edit" (the corpus convention); both now sit
  in the checker brief.
- **Disease Profile tables, second run**: the alt/print divergence
  recurs ("a pregnant person" vs "mother" again in 23.2's NGU row, plus
  the print typo) and the printed page itself carries "Affirm VPII" and
  "immunosuppresion" — so the two are distinct erratum classes: alt-only
  and baked into the print.
- **Chapter 26 (September 14, 2026), four sections in one wave — the
  book's LAST chapter: Microbiology is complete as of this date**. The
  recipe as versioned — a Sonnet landing page and a Sonnet run-facts
  drafter (Part A + DECISIONS NEEDED), the parent's Part C (ten
  decisions), four Sonnet authors (301k–372k tokens each), four Sonnet
  checkers, one claim pass, a fresh Fable solver (72 items: 69 agree / 2
  disagree / 1 flag, then 72/72 after two adjudications and one
  distractor swap), four Sonnet close-out agents. Errata 776–802 (27).
  Four Disease Profile table images de-vendored (`26_02_BactTBL`,
  `26_03_AcelTBL`, `26_04_neuromycos`, `26_04_ParaTBL`). The source-lock's
  `authoringStatus` flipped to `complete`.
- **Checker yield, chapter 26**: 26.4 one defect (a source FIB, "antigenic,"
  missing from the page while the footer claimed all shipped); 26.1 two
  (the ArtConnect alt's letters F/G and "E is made from C" not matching
  the image's A–E lettering; a footer "reported" clause); 26.2 eight (three
  hints quoting the correct option's own distinguishing phrase, two
  missing accepts for the module's own alternate phrasing, three footer
  count misstatements); 26.3 four (two missing accepts, a `sortbins` hint
  leak, a "reported below" footer clause).
- **The claim pass, chapter 26**: four findings, three accepted with
  visible Source notes and errata (26.1's Glossary "arachnoid mater …
  produces CSF" against the body's "choroid plexus"; 26.2's neonatal
  meningitis "<2 months" Glossary age against the body's "up to 3
  months"; 26.2's Listeria "0 °C and 50 °C" survival range against the
  ~45 °C FDA BAM figure), and one left as the upstream key: 26.4's
  neurocysticercosis multiple choice keyed "ingestion of undercooked
  pork" stands, because the module also supports autoinfection from the
  patient's own adult tapeworm that the pork route establishes — listed
  under "Reviewed and not errata," and the blind solver flagged it exactly
  as expected.
- **Two corrected source Multiple Choice options, chapter 26**: 26.4's
  "rhodanese" (option C, the KEYED option — disclosed `kind: key`) and
  "Entameba histolyticum" → *Entamoeba histolytica* (a distractor —
  `kind: options`), both with errata and `DISCLOSED_DEVIATIONS` entries.
- **The solve's two adjudications and one distractor swap**: 26.2's
  leprosy Check Your Understanding `textin` extended its accept list
  ("effective immune response" / "immune response"); 26.2's
  "tetanospasmin" `textin` converted to `multiplechoice` because the body
  prints only "tetanus neurotoxin (TeNT)," never the source's own word;
  26.4's cryptococcal-meningitis distractor "Dissemination from
  respiratory infection" was true and had to be replaced — the author's
  first replacement invented an unprinted route, the second used one the
  module's own Parasitic table names.
- **26.3's `verify-source-keys` print-gate defect**: a source Fill in the
  Blank keyed "PrP^Sc" failed `baseline:update` because the gate reads the
  CNXML with the superscript split apart and never finds the flattened
  key; converted to `multiplechoice`.
- **Two dead Link to Learning redirects, 26.3**: 22arboviralUS and
  22WHOprion both 404 by `curl` (22CDCprion's 403 is a bot wall and stays
  linked); un-linked per the life-sciences "External links" rule, each
  with an erratum.

## Knowledge Check 1 — chapters 1–6 (September 15, 2026)

The first of the five block checks (`docs/subjects/microbiology.md`
§Knowledge checks records the placement decision and the weight table):
`knowledge-check-01-06.md`, 26 sections, 78 items (31 multiple choice, 24
textin, 3 sortbins, 20 selfcheck), weight 7, chapters 7–26 shifted +1.
Run shape, all Sonnet unless named: six authors (one per chapter, scratch
pages at a mirrored `content/…` path, `ledger.md` + `provenance.json` each;
220–350k output tokens, 7–12 min), six module-fidelity checkers launched as
each author finished, a two-agent reverse-recall sweep over the assembled
page (chapters 1–3 and 4–6), a re-check of the 18 replaced or rewritten
items, and a blind solve in a fresh Fable subagent reading the masked check
beside masked copies of the 26 section pages (`solve:emit --pages-out` on
each chapter directory, packets discarded).

- **Checker yield:** 7 defects in 78 — invented option ranges (2.3), a
  keyword tell where only the key mentioned the stem's subject (2.4), a
  rubric clause already a page self-check's rubric checkpoint (6.1), a
  verb-phrase cloze (6.4), an abridged table-row distractor (6.4), a
  missing common-name accept (1.3), a "which species" stem over bare-genus
  distractors (4.3).
- **Parent read** found 9 more: same fact as a sibling section's Practice
  cloze (1.3 bacillus vs 3.3 bacilli), a count answered by inspection
  (4.1), "such as" clozes admitting any member (5.1, 5.5), a list-tail
  cloze (5.2), a cloze answerable from the word "genome" (6.4), and three
  accept gaps (nucleus, Svedberg, Mohenjodaro).
- **Reverse-recall sweep:** 5 flags in 78, all real — three case-3 hits
  where a section page HINT printed the key with its defining fact
  (Aristotle 3.1, phosphorescence 2.1, Fornicata/Giardia 5.1,
  toxocariasis 5.2) and one case-2 hit that was the parent's own
  replacement (5.5 soil/rock, the Practice cloze with the blank moved). The
  re-check of the replacements then caught one more reverse recall (5.1
  mitochondria vs the page's "What are kinetoplastids?"). Lesson: a
  replacement chosen by the parent from a module sentence needs the same
  page-wide hint/Practice read as an author's; two of the parent's three
  picks were reverse recalls.
- **Blind solve:** 58 graded items, 57 agree, 1 disagreement settled for
  the key (4.4 "nonpyogenic" streptococci — the module never prints
  "viridans"; the accept list took it), then 58/58 after the last
  replacement was solved on its own packet.
- **Source finding:** the 5.1 checker noticed the Excavata table gives the
  parabasalids both "no mitochondria" and "kinetoplastids"; the book's own
  §3.4 gives *Trichomonas* hydrogenosomes. Erratum 811, Source note on the
  5.1 page, decisions entry. The check's item on that row was replaced for
  an unrelated reverse-recall reason.
- **Tooling:** a fresh KC needs no new gate — the quota, duplicate-stem,
  rubric, no-hint, and stand-alone-stem lints all fired on the scratch
  pages; `verify-section` accepts the mirrored scratch path. The scratch
  kit (assemble, shift-weights, kc-notes, combine) lived in the session
  scratchpad; the notes matcher must strip Markdown emphasis from stems.
  Floors after landing: --min-exercises 14187, --min-replayed 10181.

## Knowledge Check 2 — chapters 7–12 (September 19, 2026)

The second of the five block checks (`docs/subjects/microbiology.md`
§Knowledge checks records the placement decision and the weight table):
`knowledge-check-07-12.md`, block 2 "Biochemistry, Metabolism, and
Genetics", 33 sections, 99 items (42 multiple choice, 46 textin, 0
sortbins, 11 selfcheck), weight 14, chapters 13–26 shifted +1 (now
15–28). Run shape, all Sonnet unless named, same as block 1: six authors
(one per chapter, scratch pages at a mirrored content path with
`ledger.md` + `provenance.json`), a checker per chapter launched as each
author finished, a parent read of the assembled page, a two-agent
reverse-recall sweep (chapters 7–9, 10–12), a re-check of every replaced
item (two batches), a blind solve in a fresh Fable subagent reading the
masked check beside masked copies of the 33 section pages, and a two-item
delta solve after the last replacement.

- **Checker yield:** 21 defects in 99 — ch7 3 (an option "amino" printed
  nowhere in the module; the oligopeptide key printed in a page hint; a
  missing "C. acnes" accept), ch8 7 (three hint leaks: feedback
  inhibition, homolactic, "most plentiful enzyme"; three plain-adjective
  clozes: long-term, porous, plentiful; a distractor claiming amino acids
  are "produced by deamination"; plus 7 of 8 keys at position 1), ch9 5
  (generation/doubling time handed over by a page hint; "(SOD)" on the key
  only; "acid mine drainage" as a second answer to what inactivates
  *V. cholerae*; a selfcheck rubric reusing the page's graded optimum-pH
  definition; a missing reversed-order accept for "nitrogen and
  phosphorus"), ch10 2 (a stem attributing Sutton's meiosis observation to
  Boveri too; "peptidyl transferase" printed in a page hint), ch11 2
  (Avery→DNA restating a 10.1 rubric clause; a regulatory-gene key whose
  distractor was the module's activator definition), ch12 2 (a
  restriction-enzyme item duplicating the page's CYU; a "which genus" stem
  over species and virus options).
- **Parent read** found 9 more: an analogy cloze ("hydroelectric dam"), a
  cloze with second answers ("sulfur ... formation of ___"), two stems
  that print the initials of their own key ("...Act of 2008, abbreviated
  ___" → GINA; "...syndrome, abbreviated ___" → HUS), a TATA-box stem
  beside a TATAAT key, "the transforming principle" already printed with
  Griffith in a 10.1 rubric, a frog (*Xenopus*) as a bacteriophage-host
  option, and two within-check leaks — the 12.2 stem printed *Thermus
  aquaticus*, the key of 9.4's Taq item; a 12.4 option printed "OTC", the
  accepted abbreviation of 12.4's own item 1.
- **Reverse-recall sweep:** 1 flag in 99, real (11.4 "20 amino acids"
  printed in a page self-check rubric). The re-check of replacements then
  caught 3 more: a two-word key over one-word distractors; a replacement
  distractor printed nowhere in the module; an NDA item mirroring the
  page's own IND/NDA Practice item.
- **Blind solve:** 88 graded items, 87 agree, 1 disagreement settled for
  the key ("α carbon" vs "alpha carbon" — the module's term is "α
  carbon", so the key took it and "alpha carbon" became the accept), then
  88/88 after the two last replacements were solved on their own packet.
- **Source finding:** none; no errata this run.
- **Tooling:** two agents given `$K/check-report.md` resolved `$K`
  differently and one report overwrote another — name report files by
  chapter in the brief; an author "fixing" an item wrote its rationale
  over the checker's report — tell authors to write fixes to a separate
  file; the notes matcher must strip HTML tags as well as Markdown
  emphasis (a `<sub>` in a stem defeated the match). Floors after landing:
  --min-exercises 14189→14288, --min-replayed 10181→10227.

## Knowledge Check 3 — chapters 13–14 (September 20, 2026)

The third of the five block checks (`docs/subjects/microbiology.md`
§Knowledge checks records the placement decision and the weight table):
`knowledge-check-13-14.md`, block 3 "Control and Antimicrobial Drugs", 11
sections, 33 items (11 multiple choice, 16 textin, 2 sortbins, 4
selfcheck), weight 17, chapters 15–26 shifted +1 (now 18–29). Run shape,
all Sonnet unless named, same as blocks 1 and 2: two authors (one per
chapter, scratch pages at a mirrored content path with `ledger.md` +
`provenance.json`), a checker per chapter launched as each author
finished, a parent read of each chapter block and then of the assembled
page (three rounds), a one-agent reverse-recall sweep over all 33 items, a
re-check of the twelve replaced items, and a blind solve in a fresh Fable
subagent reading the masked check beside masked copies of the 11 section
pages.

- **Checker yield:** 8 defects in 33 — ch13 3 (a BSL-3 item whose
  two-locking-doors/directional-airflow stem also described BSL-4, since
  the module chains "In addition to BSL-3 precautions"; an italicized
  binomial key over three plain category distractors; a selfcheck rubric
  clause that restated the model answer instead of copying it), ch14 5 (a
  distractor "polymyxin B" printed nowhere in the module; an
  antiprotozoan sortbins whose "Antimetabolites" bin merged two table rows
  and whose pyrimethamine label said "a later enzyme" for the module's "a
  different enzyme"; a sulfadiazine label printing a bin word; two
  within-check leaks confirmed — "penicillin" and "tuberculosis" keyed in
  one item and printed in other items' stems; a griseofulvin textin
  reverse-recalling the page's own antifungal sortbins).
- **Parent read** found 12 more across three rounds: *Pseudomonas
  aeruginosa* as a second answer to what chlorhexidine is poorly effective
  against (the module's own exception); a "surface-active agents" stem for
  the key "surfactants" and, in its replacement, a "quaternary nitrogen"
  stem for the key "quaternary ammonium salts"; a fomites/living-tissue
  sortbins whose two agent-list labels repeated the page's own
  disinfectant/antiseptic sortbins; a Waksman stem printing *Streptomyces*
  and naming two of its own options; an ESBL item whose stem listed three
  of its four options, and whose first rebuild offered three non-β-lactam
  classes that were all also correct; a "diphtheria" stem for the key
  *Corynebacterium diphtheriae* over options mixing a mold and a bare
  genus with species; an open list cloze ("including oxazolidinones and
  the ___"); an "Actinobacteria" key that duplicated the page's own
  "actinomycetes" textin with a synonym; and a sortbins stem left
  describing labels that had been replaced.
- **Reverse-recall sweep:** 1 flag in 33, real (a 14.7 virulence-factor-
  inhibitor key printed with its defining fact in a page selfcheck
  rubric). The re-check of the twelve replacements then caught 1 more: an
  X-ray stem grafting "including penicillin" from the next module
  sentence.
- **Blind solve:** 29 graded items, 29 agree, 0 alsoDefensible, 0 unsure,
  on the first pass.
- **Source finding:** erratum 812 — m58861 (§14.4) files the quinolines
  under "interfere with nucleic acid synthesis" in its topic sentence and
  summary, while its own next paragraph, its Common Antiprotozoan Drugs
  table, and the Glossary say heme detoxification; the page keeps the
  sentences as printed and the check's sortbins keys the quinolines to
  heme detoxification.
- **Lessons:** (1) the parent's read of each chapter block before
  assembly, then of the assembled page, found more than the checkers (12
  vs 8) — most of it stems that print the key's own word or exclude their
  own options, which a checker reading item-by-item against the CNXML
  passes; (2) a replacement built under time pressure repeats the tells
  (three of the twelve replacements needed a second replacement), so the
  re-check of replacements is not optional; (3) a synonym key
  (Actinobacteria/actinomycetes) is a duplicate of a page item, not a new
  item; (4) an open list cloze ("including X and the ___") does not stand
  alone. Floors after landing: --min-exercises 14288→14321,
  --min-replayed 10227→10243.

## Knowledge Check 4 — chapters 15–20 (September 20, 2026)

The fourth of the five block checks (`docs/subjects/microbiology.md`
§Knowledge checks records the placement decision and the weight table):
`knowledge-check-15-20.md`, block 4 "Pathogenicity, Epidemiology, and
Immunity", 28 sections, 84 items (31 multiple choice, 38 textin, 1
sortbins, 14 selfcheck), weight 24, chapters 21–26 shifted +1 (now
25–30). The subjects table had said 27 sections / 81 items for this
block; the content tree has 28 sections (chapters 17–20 have five each),
so the row is corrected to 28 / 84. Floors after landing:
--min-exercises 14321→14405, --min-replayed 10243→10281. Run shape, all
Sonnet unless named, same as blocks 1–3: six authors (one per chapter,
scratch pages at a mirrored content path with `ledger.md` +
`provenance.json`), a checker per chapter launched as each author
finished, a parent read of each chapter block before assembly and of
every replacement afterwards, a three-agent reverse-recall sweep
(chapters 15–16, 17–18, 19–20) over all 84 items, four re-check agents
over the 40 replaced or reworded items, and a blind solve in a fresh
Fable subagent reading the masked check beside masked copies of the 28
section pages. Fix requests went back to the same author by message;
chapter 20 needed five rounds and chapter 16 six.

- **Checker yield:** 13 defects in 84 — ch15 5 (all reverse recalls of
  page items: a hepatitis B sortbins label, an *H. pylori* rubric
  clause, an EHEC/Shiga selfcheck, a coagulase rubric clause, a tropism
  MC keyed on the same sentence); ch16 3 (an intermediate-host hint
  leak, a $1 billion WHO budget leaked by a page distractor's $3
  billion, a Health Security Committee rubric); ch17 2 (an NK-cell/
  lymphoid hint leak; a distractor *Clostridioides difficile* printed
  nowhere in m58881); ch18 1 (an HLA cloze blanking the abbreviation of
  a name the stem prints) plus a flagged light-chain "V and J segments
  only" that the parent adjudicated as a reverse recall of the page's
  heavy-chain MC and its hint; ch19 2 (a CRP reverse recall; a stem
  printing "genetically … pigs" for a key with both words); ch20 2
  (titer and immunostaining reverse recalls) plus an antibody-screen
  selfcheck whose first rubric clause was the page's own MC key
  (trimmed).
- **Parent read** found about 20 more before and after the checkers: two
  stems opening "In/According to the table of …" (a referent the
  learner cannot see); a Golden Age MC whose distractor "malaria" was a
  real-world second key (Laveran, 1880); an HIV-rate MC mixing rates and
  counts; a case-control stem printing its own "cohort study" option,
  then a rebuild whose "Retrospective study" distractor was a second
  key; a "plantibodies" stem printing "plants", an "antinuclear" stem
  for the key "nucleus", a "psoriasis … arthritis" stem for "psoriatic
  arthritis", a "multiple sclerosis" stem for a key containing
  "multiple", a "Guangdong Province" key with "province" in the stem; a
  "Test specificity" key already keyed three times on the section
  pages; a two-organism compound key over single-species distractors
  whose stem also excluded its own option; a granzymes textin
  reverse-recalling the page's NK-cell MC; phrase clozes ("viral
  antigen", "antibiotic drops", "proteins", "turnover"); an "assistance
  of ___" cloze keyed "antibodies"; option sets mixing a virus name with
  disease names, a drug with viruses, numerals with words; an accept
  list with a regular singular; a rubric clause that was the stem
  itself. Within-check leaks, caught by a parent grep of the assembled
  page after every round: "syndrome" (15.1 keyed it under a "Down
  syndrome" stem), "antibodies", "influenza", then in the replacements
  "*Salmonella enterica* serovar Typhi" (a 15.2 option) and "complement"
  (two other stems). Chapter 20's 20.3 item 2 was replaced four times
  before it held.
- **Reverse-recall sweep:** 4 flags in 84, all real — 16.3 aerosols/
  hantavirus (page body selfcheck), 17.1 *Sporothrix schenkii* (page
  rubric), 18.3 TH17 (page rubric clause; item narrowed), 19.4 David
  Vetter (page hint prints the sister/transplant fact; rubric clause
  dropped). The re-check of the 40 replacements then caught 3 more:
  16.4 "United Nations" handed over by a page hint; a 20.1 key twice the
  length of its distractors; a 20.3 rubric clause not a substring of its
  model answer. Everything else clean.
- **Blind solve:** 70 graded items, 69 agree and 1 flagged on the first
  pass (the solver named "the T-cell receptor's variable region" as a
  second answer to the BCR-rearrangement MC, and m58887 itself says B
  cells rearrange "like T cells", so the distractor was swapped for
  CD4); the delta solve of the rebuilt item agreed, 70/70.
- **Source finding:** none; no errata this run.
- **Lessons:** (1) a chapter's replacements need the same page-wide read
  as its first draft — 40 of 84 items were replaced or reworded and the
  re-check and sweep still found 7 among them; (2) the within-check grep
  must cover stems, options, and rubrics, not keys only, and must be
  re-run after EVERY round (two late replacements leaked into other
  items' stems); (3) authors read "the key is not another item's key"
  narrowly — say "no other item prints the word"; (4) the section-page
  check must include body selfcheck rubrics and hints, which produced
  most of the reverse recalls; (5) the subjects table's per-block
  section counts were wrong for block 4 — count the content tree, not
  the table.

## Knowledge Check 5 — chapters 21–26 (September 20, 2026)

The fifth and last of the five block checks (`docs/subjects/
microbiology.md` §Knowledge checks records the placement decision and
the weight table): `knowledge-check-21-26.md`, block 5 "Infections of
the Body Systems", the book's last block, 29 sections, 87 items (36
multiple choice, 36 textin, 2 sortbins, 13 selfcheck; 74 graded), weight
31, no later chapters to shift. The subjects table had said 30 sections
/ 90 items for this block; the content tree has 29 (chapters 21: 5, 22:
4, 23: 6, 24: 6, 25: 4, 26: 4), so the row is corrected to 29 / 87 — the
second block in a row whose table row was wrong. Floors after landing:
--min-exercises 14405→14492, --min-replayed 10281→10317. Run shape, all
Sonnet unless named, same as blocks 1–4: six authors (one per chapter,
scratch pages at a mirrored content path with `ledger.md` +
`provenance.json`), a checker per chapter launched as each author
finished, a parent read of each chapter block before assembly, a
four-agent reverse-recall sweep launched early on the finished chapter
scratch pages (21–22, 24+26, 25, 23) rather than on the assembled page,
four re-check agents over every replaced or reworded item (the last one
a delta over the final five), and a blind solve in a fresh Fable
subagent reading the masked check beside masked copies of the 29
section pages, with two delta solves on the three hashes that changed
afterwards. Fix requests went back to the same author by message;
chapter 21 needed four rounds, chapters 22 and 24 three, chapters 23 and
25 two, chapter 26 one. The book's five Knowledge Checks are now
complete.

- **Checker yield:** 16 defects in 87 — ch21 4 (a conjunctivitis textin
  whose key a page hint printed as "pinkeye"; a *Chrysops* deerfly
  textin printed in a page self-check answer; two items printing
  binomials in roman type); ch22 2 (an aspergilloma MC that reversed a
  page textin whose hint prints "hyphal colonies collect in the lungs";
  an "18 hemagglutinin subtypes" MC whose fact a page distractor prints
  verbatim); ch23 4 (glomerulus and Affirm VPIII keys printed with their
  defining facts in page self-check rubrics; two accept-list gaps); ch24
  2 (a dextran textin duplicating a page rubric clause; a "projectile
  vomiting → norovirus" sortbins label duplicating a page MC); ch25 3 (a
  viremia textin whose key a page hint printed; a transmission-route
  sortbins four of whose eight labels a page body self-check states;
  all four MCs keyed at position 1); ch26 1 (an IgA protease MC whose
  stem prints "IgA").
- **Parent read** found about 25 more: an eschar textin duplicating the
  21.2 page's anthrax key by definition; stems printing a word or root
  of their key (HSV-1 for herpes gladiatorum, "spots" for Rocky Mountain
  spotted fever, "food" for foodborne disease, "DNA" for
  deoxyribonuclease, "cells" for clue cells, "glands" and "perspiration"
  for sweat glands, *Acanthamoeba* for granulomatous amoebic
  encephalitis, "Staphylococcal" for staphylolysins, "IgA antibodies"
  for IgA protease); an "organ … is called the ___" cloze keyed by the
  plural plain noun "kidneys"; a stem naming its own options (enamel,
  pulp); option sets mixing a drug class with drugs, a region with
  countries, urinary conditions with a PID form, a disease class with
  fungus groups, and toxins under a stem asking for an enzyme; a
  "despite its name" clause and a "Latin word meaning yellow" etymology
  that hand over a key; a rubric clause that was the stem's own fact;
  and nine selfcheck rubrics whose clauses paraphrased the model answer
  instead of quoting it (verify-section's phrase-coverage check
  tolerates paraphrase; the playbook does not). Within-check leaks,
  caught by the parent grep of the assembled page: "biofilms" (a 23.5
  key printed in 21.2's persister-cell stem), "*Neisseria gonorrhoeae*"
  (a replacement 25.2 key printed in 23.2's urethritis stem),
  "*Streptococcus pyogenes*" (a 21.2 key printed in 22.2's
  lab-identification stem), "candidiasis" (a 21.4 key printed in 23.5's
  self-check), and by root "epididymis"/"Epididymitis" (a 23.1 key
  beside a 23.1 option) and "dermatophytes"/"dermatophyte" (a 21.4 key
  in the next item's stem, a plural fold). All six replaced or reworded.
- **Reverse-recall sweep:** 0 flags in 87 — the first block with an
  empty sweep; the checkers and the parent read had already removed
  every reverse recall. The re-check of the replacements then caught 3
  more: an unprinted distractor ("A protease", not in m58933), a BSL MC
  whose distractor levels are not printed in m58915 (reverted to a
  textin with accepts), and a stem asking for an "enzyme" over toxin
  options; plus a MERS stem keyed on a date the section page corrects
  from the source (the date was dropped) and one rejected flag (a herpes
  gladiatorum item whose page MC prints the location as a distractor but
  never the key).
- **Blind solve:** 74 graded items — 73 agree and 1 format-only
  disagreement on the first pass (the solver wrote "infected cell
  protein (ICP) 34.5" for the key "ICP 34.5"; adjudicated, the full name
  fails the four-word accept cap); delta solves of the three later
  hashes agreed (Saudi Arabia, BSL-3, deoxyribonuclease). 74/74
  resolved.
- **Source finding:** none; no errata this run. The book's five
  Knowledge Checks are now complete.
- **Lessons:** (1) launching the sweeps and re-checks on finished
  chapter scratch pages instead of waiting for assembly saved most of an
  hour with no loss — only the within-check grep needs the assembled
  page; (2) nine of thirteen selfchecks arrived with paraphrased rubrics
  because verify-section's phrase-coverage gate accepts paraphrase — the
  "contiguous verbatim substring" rule needs a stricter gate or an
  explicit line in the author brief; (3) the disease chapters' pathogen
  names collide across chapters (S. pyogenes, N. gonorrhoeae, Candida,
  biofilms) — for a body-systems block, authors should avoid keying the
  major pathogens; (4) the text grader folds diacritics, apostrophes,
  and hyphens, so accepts for "Romana" or "BSL 3" are unnecessary, but a
  period ("ICP34.5" vs "ICP 34.5") is not folded; (5) the subjects
  table's section count was wrong for the second block running — count
  the tree.

## Completion audit record (September 20, 2026)

After the fifth and last Knowledge Check landed (commit 8b98f15), the
book was declared complete on the strength of one more pass that the
per-section gates do not perform: a cold random sample read by fresh
checkers, the way the Knowledge Check audit had already sampled its own
items. The draw (seed 20260920, stratified by Knowledge Check block) was
132 Practice and Knowledge Check items and 53 figures from 2,708 items
and 766 figures on 132 pages, over five Sonnet checkers, one per block,
briefed to answer each item from the module before opening the page,
then to check page against CNXML, and to open every sampled image before
judging its alt and longdesc. Results, after the parent verified every
flag on the image or the module:

- **Items:** 0 wrong keys, 0 unprinted or also-defensible distractors, 0
  accept or hint defects, 0 sortbins defects in 132. Two checker
  "defects" were not: an unkeyed Critical Thinking question turned
  graded (2.1, the electromagnetic-spectrum question) that the page footer discloses, and a 14.5 summary
  sentence ("plasmids or transposons that can undergo vertical transfer
  easily and between microbes through horizontal gene transfer") the
  checker read as garbled but which is true — plasmids pass to daughter
  cells vertically and between microbes horizontally.
- **Rubrics:** checkers in three blocks flagged 15 of the sampled
  selfchecks whose `===CHECKS===` clauses lightly restate the model
  answer (a verb form, a dropped connector, a compressed clause) instead
  of quoting it, all passing the lint's 0.8 word-overlap bar. A corpus
  measurement (strict normalized substring) found this in 439 of
  Microbiology's 682 selfchecks and 371 of Biology's 872 — it is the
  convention both books were written to, not a defect of this book, so
  the audit records it and changes nothing; whether to tighten the lint
  to a contiguous-substring bar and rewrite ~810 rubrics across both
  books (every one re-hashes its ledger record) is a decision for the
  maintainer, noted as open. **Closed Sep 21, 2026:** a clause-level
  measurement (740 of Biology's 2,889 clauses and 997 of Microbiology's
  2,266 are not strict substrings; none falls below 76% word overlap with
  its answer, and a read of the lowest-overlap and a random dozen found
  no factual drift) showed the compressions are faithful, so the
  maintainer kept the pages as written and softened the Knowledge Check
  playbook's "contiguous verbatim substring" sentence to the
  content-words-no-new-claim standard both books meet. No sweep.
- **Figures:** 4 alt defects in 53, all fixed the same day — a
  Legionella-in-amoebae micrograph whose alt repeated the source alt's
  claim that its 0.5 µm scale bar gives each amoeba's diameter (the
  printed bar is inconsistent with amoeba size; 22.4, erratum 813,
  footer disclosure); a nephron drawing whose alt and longdesc said "two
  nephrons" where one is drawn (23.1, inherited from the source alt,
  erratum 814, footer disclosure); a chancroid photo whose alt said
  "gloved fingers" that are bare (23.3, page-introduced); and a
  cytoskeleton figure whose alt called all three top panels
  green/red/blue fluorescence micrographs when the third is a gold
  keratin ring on black (3.4, page-introduced). One flag the checker
  could not settle at image resolution (the nephron) was confirmed by
  the parent on the larger render.
- **Other completion checks:** `npm run source:check -- --bundle
  microbiology` audits the finished book clean (26/26 chapters, 127/127
  sections mapped, 480/480 headings located, 2,327 local interactions
  inventoried). `npm run check:external-links` found nine distinct dead
  (404) Link to Learning destinations behind openstax.org shortlinks
  across ten pages; every one had already been handled by its chapter
  run under the dead-link rule (sentence kept, resource named in plain
  text, footer disclosure), so the URL survives only in the footer
  disclosure and nothing was edited; the CDC destinations that answer
  403 are bot walls and stay; two bare citation URLs (a CDC
  travel-training page in the chapter 25 landing page, an NINDS fact
  sheet in 1.3) also answer 403 and stay.

These rates — about 1 alt defect in 13 figures read cold against the
image, 0 key defects in 132 items, 0 hint or accept defects — are the
baseline for the next book's sample, in the same range as Biology's own
audit (1 alt defect in 12, 0 key defects in 174, 1 hint/accept defect in
90).

## Figure-alt pass (September 20, 2026)

The audit's figure rate (4 defects in 53) projected about 55 bad alts
across the book, so every `mediafigure` was re-read the same day, image
first: 792 figures on 127 pages (26 chapter openers included), one Sonnet
checker per chapter in waves of six, each briefed to open the image and
write down what is drawn before reading the alt, caption, `longdesc`, or
source alt (`alt-pass/checker-brief.md`, derived from the audit's
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
