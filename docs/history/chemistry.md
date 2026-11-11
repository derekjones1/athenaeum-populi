# Chemistry 2e — history

Dated narrative for `docs/subjects/chemistry.md`, which keeps only what is
operative. One section per run.

## Chapter 1 pilot (November 9, 2026)

The book's first chapter, *Essential Ideas*, and the first run of any book
on the physical-sciences shelf: six sections (m68664, m68667, m68670,
m68674, m68690, m68683) and the landing page (m68663), authored in two
sessions on one day — the first stopped at the usage limit after the blind
solve, the second ran the extra readings and the close-out. Derek asked
for Opus authors and for one extra check outside the normal process, to
learn from; the extra check became two readings and a third round of
fixes, and most of what the kit now says came from them.

### Shape

- **Wave 1** was two sections (1.3 and 1.6), so the brief, the gates, and
  the grader met real pages before four more authors copied them; **wave
  2** was 1.1, 1.2, 1.4, 1.5. One Opus author and one Opus checker per
  section, checker defects back to the author.
- One Opus **claim pass** for the chapter, then the **blind solve** in a
  fresh Fable agent with masked pages.
- **Extra reading B — the rendered page beside print.** Five Opus readers
  compared 94 viewport tiles of the built pages with the PDF pages.
- **Extra reading C — the six pages against each other.** One Opus reader
  read every page, the playbook, and the run facts together.
- **Round 3.** The parent ruled on both reports (seventeen general
  rulings and a list per page); six Opus fixers applied them, since a new
  session cannot resume the first session's authors; one Opus checker read
  the fixers' edits; a fresh Fable solver re-solved the 56 items whose
  packets had changed and the other 119 carried their first solve.

### What the chapter holds

99 source exercises, 50 of them keyed and carried as one item per lettered
part; the 49 unkeyed are omitted and each footer says how many. 12 Check
Your Learning items. 175 auto-graded items (109 `fillin`, 44
`multiplechoice`, 22 `textin`) and 24 `selfcheck`s; 36 vendored figures.
The practice floor of the `default` profile held on every page.

### What each reading found

| Reading | Found | Could a source reading have found it? |
|---|---|---|
| Authors (their own arithmetic) | the soccer ball's 68 cm for 68.58 (erratum 2878) | yes — it is why authors compute before reading the key |
| Checkers | fillers answered by elimination; hints that decided their items on five of six pages; the text grader reading `/`, `·`, `°` as spaces, so a product passed for a quotient and "°K" for "K"; footer miscounts | yes |
| Claim pass | 19 findings, 8 corrected on the pages: the spider-web "150 million dimes" (π times too many), "chromium does not oxidize", the kilogram "defined by IUPAC", a 6.72 g quarter, an "official January 2014 census", 3.78 L for 3.785, "273.15 … is not exact", the NIST credit | yes |
| Blind solve | 169 of 175 agreed; five stems that did not say what to type (a place, "no prefix added"); on the re-solve, the freezer's −10 °F with no figure count (erratum 2912) | yes |
| Rendered page (B) | display rows cut off at the column edge on 1.5 and 1.6; `1.497 ×` / `10⁻³` broken across lines; the source's half-width drawings filling the column; a Source note that gave its item's key away from beside the empty answer box; an added multiple choice whose stem named two of its three options; a hint that sent the learner to a table without the answer; a four-figure key before the book teaches significant figures | the first three: no. The rest: yes, and nobody had |
| Consistency (C) | the playbook stating the `last-digit` rule twice, differently; 1.5 still carrying, word for word, the hints the hint rule was written from; 177.66 °F against 1.5's own rules and the sibling keys (erratum 2910); "with its sign" on the negative keys only; footers printing added items' keys; a Key equation with a unit standing in for a quantity (2911); 273.2 added after the page had called 273.15 exact; three forms for one stem pattern on three pages | no — each page was legal alone |
| Round-3 checker | three footers that still let a key be worked out; two rewritten hints that pointed at nothing on the page; a hint pasted on an item it did not fit | — |

The rendered-page reading seeded tests and is not a standing pass; the
consistency reading found the most per token and is (`run.md`).

### Rulings the run overturned

- **177.66 °F.** The solver flagged it; the first parent kept the source
  key and added "to the hundredths place" to the stem ("physically
  defensible"); the consistency reader set it against Section 1.5's rules
  and against the module's other temperature keys, all of which round by
  those rules, and the key became 177.7 with a Source note. Lesson, now in
  the playbook: check the siblings — one outlier is a defect, a module
  that rounds one way throughout is a convention.
- **`\dfrac` for inline fractions** and **digits grouped as the source
  prints them, in math too** — two round-3 rulings that existing lint
  errors refuse (`\dfrac` is banned; a four-digit number in math is
  grouped). Both were withdrawn after a fixer hit the lint. Lesson, now in
  `run.md`: a ruling is linted before it is sent.
- **Cross-references as links.** The run facts promised the parent would
  link sibling sections after the wave; no book in the library links
  between its sections, and they stay plain text.
- **"This lumber can be used as vertical studs…"** was reworded under the
  restate-given-data rule, and the coverage gate stopped matching the part
  to its source. A referent with no datum keeps the source's words.

### Engine, gates, lints, tests

- **Grader.** `whole-number` (a count refuses the stem's own "2.0"
  retyped); a bare power-of-ten key is an exact factor, in any writing; a
  bare `10^{n}` reads as one figure; too-few-figures feedback only one
  figure short; MathLive's `\operatorname{\mathrm{kg}}`, `\min`, and "in."
  read as units.
- **Gates.** `tools/lib/keyed-units.mjs` (one keyed unit per lettered
  part, shared by the keys and coverage gates); `verify:source-coverage`
  reads `content/physical-sciences`, counts an unkeyed exercise as
  `omitted`, and fails one that is rendered; `verify:source-keys` reads
  the `exercises` class, Check Your Learning notes (`<example id>#check`),
  the "Answers will vary" form, and the most specific named option;
  `verify:ledger` requires a solve and provenance for the shelf;
  `verify:replay`'s allowlist test walks the whole corpus (its first
  Chemistry entry is the total mass that IS the printed reactant mass).
- **Lints (Chemistry).** A `textin` key carrying `/`, `·`, `×`, `*`, or
  `°`; a `textin` keyed to a word of its own objective heading; "with its
  sign"; an inline equation run into the next sentence; a footer that
  prints "(blank: …)"; a Key term without its closing period. The
  consecutive-question cap counts items sharing one lead-in as one.
- **Rendering.** A short inline number in scientific notation is held on
  one line, by the passthrough render hook and by the `mathtext` partial
  that renders shortcode strings (the first version of the browser test
  passed with the partial unwrapped, on table cells alone — a floor on
  the count in fill-in stems now holds it). `source:media` records the
  source's `scaled-down` class and the figure keeps that share of the
  column.
- **Browser tests.** Every measured key on 1.6 typed key by key; a
  two-digit exponent of either sign; a typed unit; the exact prefix
  factor; and, on every Chemistry section page the build has, no display
  row wider than the column, no scientific notation split across lines, no
  scaled-down figure at full width.
- **Tools.** `tools/source/chemistry-prep.py` (the pilot's two scratch
  extractors, promoted) and `tools/build/screenshot-tiles.mjs`.

### What the process got wrong, and what was done

- **The extra readings ran after the solve**, so round 3 re-hashed 131 of
  175 items. `run.md` puts every reading and every ruling before the
  solve.
- **No ledger snapshot before round 3**, so nothing could be carried by
  the tool; a remap script carried the 119 items whose solver packet was
  identical and the rest were re-solved. `run.md` §0 now says to snapshot.
- **The fixers' brief said a hint-only edit keeps an item's hash.** It
  does not. One fixer filed 9 results for 46 re-hashed items.
- **`ledger:provenance` calls an item with no author note "author-built
  from § …"**, which is right for a life-sciences recall item and wrong
  for a source exercise. The pilot carried the authors' own notes to the
  new hashes by question text instead. Open: teach the tool the book, or
  keep snapshotting so it is never needed.
- **The claim-pass reader saw the parent's list of suspected claims** — a
  grep of the scratchpad for a phrase hit `PARENT-NOTES.md`. It said so,
  and its agreement on four of five leads is not blind. The parent's notes
  now live in `$SP/parent-only/`, and every reader's brief forbids the
  directory by name.
- **The errata Clerk's block was read back by script**: every quoted
  fragment of a "Current text" bullet checked against the CNXML, every
  quoted fragment of "Local handling" against the page. Nine misses, all
  markup (a link or math inside the quotation).

### Not acted on

- Inline fractions set at about 11 px (three rendered-page findings):
  house style, as the math books' `\tfrac`.
- A number and its unit parting at a line end: the library writes no
  no-break spaces.
- The compact navbar covering the right end of the article's top line
  between 1100 and 1280 px, the 50 px above "Show hint", the footer's
  leading: site-wide, left for a design decision.
- The grader's "give it to 4 significant figures" on a page that comes
  before Section 1.5: the stems there state the place in plain words.
- The symbol of a prefix typed in the wrong case (`M` for `m`) is graded
  as the text grader grades everything, without case.

### Numbers

Errata 2878–2913 (36 entries, twelve with a `reconciliation-decisions.json`
entry, two with a `DISCLOSED_DEVIATIONS` line; 2913 is a Link to Learning
redirect that fails its TLS handshake, kept linked and disclosed). Baselines: keys confirmed
6,725 → 6,916; source exercises covered 3,962 → 4,117; ledger exercises
17,296 → 17,495; replayed spans 8,122 → 8,224. Extra readings: five
rendered-page readers at 150–170k tokens each, the consistency reader at
about 210k, six fixers at 75–160k, the fix checker at about 165k, the
re-solve at about 150k.

## Before chapter 2: the forms chapter 1 never met (November 9, 2026)

Chapter 1 keys no formula, name, or equation; chapter 2 keys about 50
formulas and about 60 names and classifications, and chapter 4 keys 38
balanced equations. The work
done between the two chapters, so chapter 2's authors meet a finished
form and not a ruling made mid-wave:

- **A scan of every keyed answer by shape** (`tools/source/chemistry-shapes.mjs`,
  now a prep step): about 60 formulas, 200 equations, and several hundred
  names across the book. Run over the book, the equation reader found four
  keyed equations that do not balance — "MgC1₂" with a digit for the
  letter in chapter 4; "3Cl⁺", "MnO⁴⁻", and an iron(III) ion without its
  charge in chapter 19 — before any author had read them, and chapter 2's
  "AIF₃·3H₂O" with a capital I.
- **`textin` gained `answerForm="formula"` and `"equation"`**
  (`assets/js/lib/text/check-chem.mjs`). The word grader lowercases, so
  `CO` passed for `Co`; the math field cannot type words. The new reader
  takes what a plain keyboard types (`Mn3(PO4)2`, `SO42-`,
  `2H2 + O2 -> 2H2O`), compares structures, and separates a wrong answer
  from a right one in the wrong form (atoms right and order wrong;
  balanced by a multiple). The field shows what it has read, in the book's
  print, as the learner types. Reusing `textin` rather than adding a
  component kept the ledger, the solve packets, and the source gates
  working unchanged; the keys gate, the replay gate, and the lint each
  learned the form.
- **Names stayed a plain `textin`**: the grader already read
  "chromium (III) oxide" and "chromium(iii) oxide" as one name. It now also
  reads sulph- as sulf-, aluminium as aluminum, and caesium as cesium,
  which made three accept members in the life-sciences books redundant
  (removed; ledger records carried).
- **Two lints from the pilot's lessons**: a fill-in hint that opens with an
  arithmetic imperative or rules on the number's digits; a formula keyed as
  a word.
- **Three site-wide defects the rendered-page reading had found** were
  fixed in the stylesheet: the folded navbar covered the right end of the
  article at every width below 1280 px (it is now a full-width strip
  there); an empty status line reserved 32 px on every practice card; the
  attribution footer inherited the body's 28 px leading at 12.8 px type on
  every page of every book. Eight footers written as an HTML block, three
  of which printed their links as raw Markdown, were rewritten and the
  form is now a lint error.
- **Measured and left as they are**: an inline `\frac` sets its digits at
  13.6 px (the readers had guessed 9 to 11) and `\dfrac` at 19.4 px,
  pushing the line below it from 28 to about 45 px away; the ban on
  `\dfrac` stands until it is scoped to exercise stems, if at all.
- **Found and left for Derek** (settled the next day — the section below):
  the Knowledge Check quota and where its items come from; and the
  thirteen appendices, then unmapped — the chapters link into them 73
  times, 36 of them to Appendix G's thermodynamic data, which chapter 5's
  keyed exercises read.

## The appendices, the Knowledge Check quota, and the `\dfrac` watch (November 10, 2026)

Derek settled the three items the session before had left: the Knowledge
Check quota, the scope of the `\dfrac` ban, and the appendices.

- **Knowledge Check quota: two to three items per section, at least one
  auto-graded.** The lint's per-book profile took a range for the first
  time (`perSection: { min: 2, max: 3 }`; the life-sciences books keep
  their exact three) and lets this book's checks carry `fillin`s, since its
  keyed answers are numbers. Where the items come from is still the
  parent's working rule, to be confirmed by the first check (chapters 1–3).
- **The `\dfrac` ban stays, on watch.** An author or checker who finds that
  an inline `\frac` makes a question worse or loses content reports the
  item; the list below is what the ban is reviewed from.
- **The thirteen appendices were authored as reference pages** — the
  library's first — under `appendices/`, last in the book's sidebar.

**How the appendix pages were made.** No cell of a data table was typed:
`tools/source/appendix-draft.mjs` wrote the tables from the CNXML (2,704
cells: 403 rows of thermodynamic data, 136 half-cell potentials, 121
solubility products), and `npm run verify:source-tables` holds the finished
pages to the CNXML cell by cell, with a different normalizer from the one
the draft tool writes with. The parent wrote Appendix B's prose page by
hand, read the periodic table's 118 boxes off the image at 2.3× for the
table of elements under it, and wrote every alt from the artwork. One
session, no subagents: the work was a tool, a gate, and thirteen pages
with nothing graded on them.

**What the mechanical readings found in the source** (errata 2914–2922):

- A charge-and-atom balance of every equation in Appendices K and L: six
  half-reactions in L do not balance as printed — the silver–thiosulfate
  complex is given 3+ for 3−, and Ce³⁺, Cr³⁺, Pu³⁺, Zr⁴⁺, and [Zn(OH)₄]²⁻
  are printed without their signs (the MathML took the ion's plus sign for
  the operator). Corrected on the page with a Source note.
- The cell comparison: `CaSO4·2H₂O` with its 4 on the line (J); four
  anions with a space before the charge (G).
- Reading the rows of Appendix M in order of atomic number: plutonium-239
  printed twice, the second time with plutonium-240's half-life; element
  105 printed as Ha. Both corrected with a Source note.
- An electron count of every Lewis structure in Appendix H: nitrous acid
  drawn without its N=O double bond and sulfurous acid with a six-electron
  oxygen; boric acid, carbonic acid, and the hydrogen sulfate ion without
  some or all lone pairs; formic acid's C–H hydrogen in the red of an
  ionizable one; phosphorous acid drawn and bolded as triprotic beside its
  two constants. The images ship as the source's; the alts say what is
  drawn and a Source note names each.
- Appendix D mixes the exact 2019 SI values with older ones, so the
  printed Faraday and gas constants are not the products of the values
  beside them; the table's `summary` attribute still carries four
  superseded values. The cells are the source's; a Source note gives the
  two products.

**What only the built site showed.** Markdown read
`[Co(en)₃](ClO₄)₃` as a link to "ClO₄" — four salts in Appendix G. Every
gate that compares characters passed; the internal-link check failed. The
brackets are escaped, the draft tool writes them so, and the content lint
refuses a link whose destination holds a subscript digit.

**What only a phone-width browser showed.** Appendices G and L scrolled
sideways by 15 and 22 px at 390 px — the page, not the table. A table
scrolls inside its own box, but KaTeX's hidden MathML layer is absolutely
positioned, and with no positioned ancestor a formula in a scrolled-off
column was laid out against the page. `position: relative` on every content
table contains it (site-wide; the browser suite ran whole afterwards). The
new appendix browser test holds it, with the unnamed-column and
formula-as-link checks.

**Decisions the parent made**, each in the playbook's "Appendices":

- One `appendices/` folder at the end of the sidebar rather than thirteen
  top-level entries; titles carry the letter ("Appendix G: …"), since the
  chapters cite appendices by letter.
- Grouped tables (G, J) keep the print's shape — one table, the group name
  in bold on its own row — rather than a table per element: the theme sets
  tables `display: block`, so forty tables would not share column widths.
- The Lewis structures of H and I leave the table and follow it, each
  captioned with its row's name: a figure in a table cell forces the table
  wider than a phone.
- Appendix M is listed by atomic number and mass number; the source's
  order is two column sets on each of two printed pages.
- Appendix A keeps the image and adds a table of the elements read from
  it, so an atomic mass can be found by a screen reader and by search.
- Table footnotes are marked `*`, `†`, `‡`; the source's superscript
  numerals read as powers beside a unit.
- A reference to an appendix is a link to its page (chapter 1's two
  references to Appendix B were linked); every other cross-reference in
  the book stays plain text.
- A stale constant is not corrected; a cell that contradicts chemistry or
  the table itself is.

## The review before chapter 2 (November 10, 2026)

Derek asked for one more pass over chapter 1 and the playbook before the
book goes on: lessons, irregularities, and whether the three readings and
the blind solve reach a right page. One session, the parent, and one
Sonnet agent for the checklist-shaped part.

**What was read.** All 199 items of chapter 1 in one table — stem, key,
form, hint — with every numeric key of 1.6 recomputed from the page's own
conversion table; the playbook, the eight briefs, and this file against
each other; every "(lint)", "(browser test)", and named gate in the
playbook against the code (the Sonnet agent: 45 claims); and chapter 2's
prep tools run for real, with a hand-built item of each new answer shape
judged through the source gates against the pinned modules.

**Chapter 1.** No key, stem, or hint was changed. The one key that reads
oddly on a fresh look — 50 °F to "280 K (two significant figures)", where
Section 1.5's addition rule gives 283 — follows the worked example
directly above it (505.4 K written 5.1 × 10² K) and the source's stem,
which states the count: a convention the module keeps, not a defect, by
the sibling test the pilot settled.

**The finding: a gate is proven only on the shapes it has met.** Chapter
1 keys numbers, words, and sentences. Run on chapter 2's modules, the
source gates could not read three of its shapes, and each would have
failed a sound page in the middle of the wave — or, worse, let a part go
unrequired:

- **A lettered part that is only an image** (2.4: "Write the molecular
  and empirical formulas of the following compounds: (a) [structure] …").
  The splitter dropped the last such part — nothing but an image follows
  its label — and every image-only part had an empty text that no item
  could match. Seven keyed exercises in the book (2.4 twice, 3.1, 12.7
  twice, 20.2, 20.3). `keyed-units.mjs` now marks each image in a stem,
  `exercise-context.mjs` `mediaBindings` gives each page item the
  `mediafigure` its "the figure above" resolves to, and a part with no
  words is matched by that image.
- **A nuclide symbol.** MathML prescripts read "3 7 Li" where the page
  prints ⁷₃Li, so 2.3's fifteen proton, electron, and neutron counts
  matched no unit; and an answer of "11 23 Na" did not read as a formula.
  Stems now read mass number first, answers read `^{23}_{11} Na`, and an
  answer label standing directly before a superscript ("(a)¹³³Cs⁺") is a
  label.
- **A formula its answer labels in words** ("molecular C₂H₂, empirical
  CH"): the keys gate now reads the piece without a leading word of three
  letters or more, which is never an element's symbol.

`chemistry-shapes` prints these units under a new Notes heading, with two
shapes that are NOT yet read and are flagged for their chapters: a part
the solution leaves unkeyed inside a keyed exercise (8.4, 13.3), and a
lettered answer under a stem whose parts are in another exercise (4.3,
13.2, 17.1, 17.2, 17.7, 19.2). `run.md` gained step 6a, the gate probe.

**The playbook against the code.** Of 45 enforcement claims, about 29 are
held as written; ten are held more narrowly than the text says; five are
words only (the first figure's `eager`, the description's closing phrase,
a multiple-choice stem's punctuation, "the figure above" on a bound item,
the footer's census). Done about it: the hint lint read `fillin` hints
only and now reads every auto-graded kind; the `\dfrac` lint's message
named `\tfrac` alone and now names the `\frac` this book writes; the
playbook says which rules no lint holds, so the checker knows they are
its own. Left, each small:
a four-digit number from 1000 to 2099 in math is read as a year and not
grouped (`$2000\ \text{lb}$` passes); `\$` is refused in inline math and
not in display math; `verify:replay` and the browser suite run
in `npm run ci` and not in `npm test`, which is why `run.md` §4 step 6
runs both by name.

**The playbook against itself.** Corrected: the name row offered "ferric
nitrate" as its example of an `accept` member, and 2.7 asks for the IUPAC
name OF ferric nitrate; an ion's name keyed "the selenide ion" marks the
bare "selenide" wrong (the grader drops "the", not "ion"); the nuclide
row asked for a fill-in per number where 2.5's stems print both numbers;
`run.md` still called the formula form open; the author brief still said
"this is the book's first chapter" and pointed at `ch01`; the checker
brief's section on figures had the hint and text-answer checks spliced
into the middle of a sentence. Added to the "Exercises" table: counts of
particles, a nuclide symbol, a list sorted by one answer sentence, a
charge, and the labelled pair of formulas; to "Stems": the image-only
part, and a key whose word is not in the stem's set.

**Rulings chapter 2's run facts should carry** (each probed here; the
parent of that run confirms):

1. 2.7 exercise fs-idp268321696(e), "AIF₃·3H₂O": a capital I for the l.
   Key `AlF₃·3H₂O`; erratum, decisions entry, `DISCLOSED_DEVIATIONS`.
2. 2.3's two Build an Atom exercises (the second is the shapes tool's
   other flag, "⁶Li⁺ or ⁶₃Li⁺"): `selfcheck`s, by the simulation rule.
3. 2.4's two image-part exercises: a `mediafigure` above each part, two
   formula `textin`s under each figure of the first.
4. 2.3's counts: one `whole-number` fill-in per number; `verify:replay`
   will name the ones whose stem prints the number (allowlist, with the
   reason "the count is the stem's number by definition").
5. 2.3 and 2.5 nuclide symbols: one formula `textin` each, keyed in print.
6. 2.5's ten-part classification: two multiple choices per part (the gate
   confirms the first and reads "representative element" against the
   stem's "main-group (representative) element" as a prose key — the
   checker ticks those ten by hand).
7. 2.6's unlettered list of six chlorides: a `selfcheck`.
8. 2.6's Check Your Learning answers "molecular" to a stem that asks
   "ionic or covalent": options as the stem names them, key the stem's
   word, footer and erratum.
9. 2.3's platinum ion: two counts and the charge as a signed
   `whole-number` fill-in.
10. 2.6's "Se²⁻, the selenide ion": a formula `textin` and a name `textin`
    keyed `selenide`, `accept="selenide ion"`.

**Settled by Derek the same day.** Sections 2.6 and 2.7 ask the learner
to use "the periodic table" and show none; the source links Appendix A
once in the chapter (2.3). His ruling: "if the content is asking to check
the appendix, we should link to it even if the source doesn't." It is
page skeleton rule 9 now — the test is what the learner must do, not what
the source marked up — and both briefs and the run facts carry it.
Chapter 1 was swept for it: nothing there sends a learner to an appendix
beyond the two references already linked.

### The second half of the review: is anything else like those three?

Derek's follow-up: link an appendix wherever the content sends the learner
to one; and can the three readings and the blind solve be made stronger,
and are there more gaps like the three the tests now hold. The answer to
the last was found by asking the gates about the whole book at once.

**The probe.** `tools/source/chemistry-gate-probe.mjs` builds, for each of
the book's 2,254 keyed units, the item the page will carry — the source's
own stem, the source's own answer as its key — and asks both source gates
about it. First run: 146 findings. Ninety-nine were one defect chapter 1
had no instance of: **the keys gate read a unit's own stem as a different
exercise.** A part's score was 1 whenever its words were printed, and ties
went to the longer part, so:

- one part under two lead-ins ("Br" in "write the electron configuration"
  and in the unkeyed "predict the charge") went to whichever came first —
  and when that was the unkeyed twin, the gate would have told the author
  to remove a sound item;
- a lead-in that prints a sibling's whole part ("…137 mm Hg. Determine the
  pressure in: (a) mm Hg (b) atm (c) kPa") gave every item to (a), as did
  the element In under any lead-in with the word "in";
- As³⁺ and As³⁻, NO₂ and NO₂⁻, were one part, the word fold dropping the
  sign;
- a generic part ("What is the rate constant?", "Answer the question.")
  took a whole exercise that prints those words.

`unitFor` now chooses the exercise first — the one whose whole stem the
question reads most like, a keyed one before its word-for-word unkeyed
twin — and the part second, with the part's exact characters, sign
included, as a tiebreak; a part the lead-in already prints must be printed
once more than the lead-in prints it. 146 findings became 25, all of which
are rulings and none a gate defect: twenty keyed answers that are a source
defect or not the shape the shapes tool read (a label before a drawing, a
cell diagram, an electron configuration), and five pairs of keyed
exercises whose stems are one text because their difference was a figure
or a cross-reference (4.3, 17.1, 18.7, 20.1, 20.4). `run.md` step 6a runs
the probe for each chapter.

**The readings, strengthened.**

- *The solver looks at the picture.* On every book so far the blind solver
  answered a figure-bound item from the alt on the masked page — the
  author's own description. `solve.md` now sends it to the image, and a
  disagreement between alt and picture is something it reports.
- *The keys gate reads which number an item asks for.* "3 protons, 3
  electrons, 4 neutrons" confirmed any of the three under any item; the
  gate now holds an item to the number its closing sentence names, and the
  briefs make that sentence a rule.
- *The hint lint* reads every auto-graded kind (the first half).
- Not built, and why: a second blind read of `selfcheck` model answers
  (the gate already holds them to the source word for word, and the
  checker reads the rubric); a "hint-only" solve to measure leaks (the
  checker reads every hint with the key covered, and the lint holds the
  two shapes a pattern can see).

**The appendix link, and what it would have broken.** Derek: "if the
content is asking to check the appendix, we should link to it even if the
source doesn't." It is page skeleton rule 9. Proving the rule end to end
found that no auto-graded item had ever carried a link: the page renders
one, but a fill-in's and a text-in's accessible name is built from the raw
prompt, and a screen reader would have been read the brackets and the
whole path. `speakable-label.mjs` now reads a link as its words. The
existing rule — an appendix reference in a stem is a link — would have
shipped that defect on chapter 5's thirty-six references to Appendix G.

**What was run.** `npm run ci` after the last edit: the unit and corpus
tests, the replay gate, the build and its checks, and the browser suite
(a shipped script changed).

### The four left over, handled (November 10, 2026)

Derek asked how the four items the review had left "for their chapters"
should be handled. Reading the source for each changed two of the four:

- **"Parts the solution leaves unkeyed" (8.4, 13.3) were not unkeyed.**
  The solutions are typed loosely — "…is O₂;(d) F₂" with no space, "(c),
  [H₂] increases" with a comma — and the splitter stopped at the slip. An
  answer's labels are now read as answers are typed, a closing label whose
  answer is only an image included; an answer that merely LISTS labels
  ("(a), (b), (c), (d), and (e)", 21.1) still answers its exercise whole.
  No keyed exercise in the book has an unkeyed part.
- **Stems whose parts are another exercise's** (nine): the gates now
  borrow the parts — the lead-in is the asking exercise's stem, each part
  the referenced exercise's, found by its `<link target-id>` or by "the
  previous exercise". The page restates each part verbatim (playbook
  "Stems"), and that restated part is what the gates match.
- **A drawing as a part's whole answer** (92 parts, not the 60 first
  counted): the keys gate called such a `selfcheck` "unkeyed" and passed
  it unread. It now confirms the one whose model answer shows the source's
  image and refuses one that shows none or a neighbour's.
- **A nuclide's atomic number** is its element's, so nothing has to trust
  it: the grader reads it (a key that prints both numbers asks for both;
  one left out is a form verdict, a wrong one is wrong), the lint refuses
  a key whose atomic number is not its symbol's, and the gate's canon
  keeps it, so `²³Na` is refused where the source prints ²³₁₁Na. This one
  changes what a learner must type, and is Derek's to veto.

**Multiple choice stays open** *(Derek, the same day: "I want to keep
multiple choice open as an option still for question authoring")*. The two
shapes first left for rulings, and the 2.6 list this review had made a
`selfcheck` because the gate refused anything else, are all choices among
things the stem prints, and are multiple choices now:

- 2.6's six chlorides sorted by one sentence — one item per compound, the
  stem's two categories as options; the gate finds the category whose list
  holds the compound the item prints;
- 13.3's "Only (b)" and 21.1's "(a), (b), (c), (d), and (e)" — one yes/no
  item per part; the gate reads a named part as yes and the others as no;
- 17.1's answers lettered by role first — regrouped by part, and one item
  per reaction over its reactants, the stem's closing sentence naming the
  role; the gate reads that role's value.

The lesson is the review's own, turned on the reviewer: the first ruling
bent the page to the gate. The playbook now says the gate is taught the
form. The probe stands at 20 lines for the book, none a gate defect and
none an answer shape left unread.

## Chapter 2, Sections 2.1–2.4 (November 10, 2026)

Derek: "author chapter 2 … just author a few sections or half the chapter,
whatever is best." The parent chose four of the seven sections as one
complete run — through the blind solve and the commit — because chapter 2
is the first with formula, nuclide, and image-part items, and a first wave
is where systematic drift shows. Sections 2.5–2.7 are the next run.

### Shape

Prep once for the whole chapter (media, 56 PDF pages, inventory, shapes,
probe: two findings, both already ruled). A Sonnet clerk drafted the
landing and the run facts' tables; the parent wrote ten decisions. Four
Opus authors together; an Opus checker as each reported; then, on the
fixed pages, the claim pass, the consistency reader, and three
rendered-page readers together; one rulings round; an Opus fix checker; the
blind solve (a fresh Fable solver, 65 items); a Sonnet clerk for the
errata. About three and a half hours.

### What the run holds

Four pages, 87 items: 30 fill-ins, 8 multiple choices, 27 text-ins (21 of
them formulas or nuclide symbols), 22 self-checks; 34 figures; six Source
notes. 18 keyed exercises carried, 18 unkeyed omitted. Errata 2923–2942:
five body or model-answer facts corrected (the guessed neon mixture's
average, 20.17 for 20.18; the mass of ²¹Ne in the solar-wind example; the
"Latin" roots of systematic element names; Paula Hammond's post at MIT,
checked by the parent against MIT News; "lowest common denominator" for
greatest common factor), one kept with a Source note (copper(I) chloride
called green), three kept as printed, the rest typos, alt texts, and one
added clarification. No key was corrected and none disputed: the solver
agreed on 65 of 65.

### What each reading found

| Reading | Found | Would another have found it? |
|---|---|---|
| Parent's gate runs as pages landed | three answer shapes the source gates refused on sound pages (below) | no: `verify-section` does not run the gates |
| Checkers (4) | 87 of 87 keys confirmed; a `longdesc` whose position words were wrong; footer reasons about a source alt that the artwork did not bear out; hints that named the model answer's axes or the key's digit; the periodic-table sentence on six items that did not need it; that `source:media` read the half-width class on `<media>` only; that the brief's own grader command dropped the formula form | the first two, no |
| Claim pass | 11 claims, 5 corrected | no |
| Consistency reader | the run facts against the playbook in three places (a unit printed only as a symbol; an added "Use the periodic table." sentence; the varying-answer form on answers the source does not call variable); a part letter left in a stem; blank-first and question-first multiple choices on sibling pages; an en dash for a minus | the letter: the rendered-page reader too |
| Rendered-page readers (3) | that a flat 26rem cap set 1,000–1,300 px drawings at a third of their size, with 7 px labels; an exercise drawing floating between two cards; a table cell that broke a nuclide from its name | no |
| Fix checker | 10: a rubric its own sample answer failed; a hint pointing at the table row that prints the whole answer; a hint that called carbon-14 stable; a Source note between a paragraph and the figure it introduces | no |
| Blind solve | 65 of 65; a stray article in 2.4; that the packets carried no `answerForm` for a text-in | the article: no |

### Gates, tools, tests

- **A keyed exercise that says "repeat [Exercise N]"** (2.3, 2.4): the page
  restates the omitted exercise so the learner can do it, and that text is
  most of the item — the keys gate read the item as the unkeyed exercise
  and would have refused it. `keyed-units.mjs` records the reference
  (`refersTo`), reads the unit against its own stem and the text it quotes,
  and sets the quoted exercise aside when it is unkeyed and the question
  prints the referring one's own words. Found before the wave, by
  hand-built items. (The first version set aside a keyed exercise too, and
  the close-out's full test run caught it on the probe's own fixture of
  two keyed exercises that share a stem.)
- **A name and a drawing as one answer** ("ethanol [structure]", 2.4): held
  to the part's own image and the source's words carried whole; the
  author's sentence about the drawing, which the playbook asks for, no
  longer reads as a model answer that diverges.
- **A varying answer given part by part** (2.3's Build an Atom): "Sample
  answer:" and the part's own segment, in an exercise whose solution says
  once that other answers are possible; the sentence that says so is the
  exercise's, not the last part's sample.
- **`source:media` reads `scaled-down` on the `<figure>` too** (352 figures
  in the book; 281 carry it on the `<media>`). Reading it showed what the
  class means: half, or three tenths, of the image's NATIVE size, not of
  the column. The stylesheet now gives a marked figure that share of its
  own width, never under 26rem (14rem); a browser test holds both bounds.
  Eleven chapter 1 figures and thirteen of chapter 2's changed size.
- **An uncaptioned figure directly above an item** sits close to it and
  apart from the card above (stylesheet).
- `solve:emit` carries a text-in's `answerForm`; three sound coincidences
  recorded for `verify:replay` (a proton count beside its atomic number,
  twice; sucrose, its own empirical formula).

### Rulings, now in the playbook

Part letters become "the previous item(s)"; a "repeat" exercise restates
what it repeats; the varying-answer form for an answer that is one
possible case; a select-the-term multiple choice is a question and never
opens with a blank; a filler multiple choice under a heading that names its
key needs the heading to name another option too; a unit printed only as a
symbol (amu) is named by it; "Use the periodic table." as an added
sentence, only on items that need the table; key-term periods are not
disclosed; "(shown in the figure below)"; U+2212 for every minus; a
scaled figure's share. The kit gained `fix-check.md`; `run.md` says to
build the map and run the gates as each page lands, how a chapter is split
across two runs, and that a landing with section pages carries no
`authoring_status`.

### What the process got wrong

- The checkers were launched before the map had the chapter, so
  `source:diff` skipped their pages; two compared by hand. The map is now
  built as the first author reports.
- The parent's first part-letter ruling missed one sentence of the stem it
  was written for (2.2's "Now test your predictions from (a), (b), and
  (c)"); the author applied the ruling as worded, and two later readings
  caught it. No lint reads a question for "(a)".
- The parent's ruling on the varying-answer form had every part carry the
  exercise's closing sentence; the consistency reader asked why, and it
  came out of four of five.
- The claim ruling named the wrong paragraph ("glucose" for acetic acid);
  the author corrected the right one and said so.

### Not acted on

- An ion typed without its charge is "incorrect" with no message; a line
  of feedback belongs in `checkFormula`.
- Lints for a part letter in a question and for an en dash between
  numbers in a parenthesis: both are the checker's for now.
- The isooctane ratio (5.33 from whole-number masses; 5.30 by Appendix A)
  is kept as printed and logged (2925).

## Chapter 2, Sections 2.5–2.6 (November 10, 2026)

Derek: "Let's continue onto the next 2 sections for chemistry." The parent
took that as Sections 2.5 and 2.6 and left 2.7 (Chemical Nomenclature, now
the chapter's only section "being written") for the next run. Like the
first run, this one went through the blind solve and the commit.

### Shape

Prep reused from the first run (media, PDF pages, inventory, key page);
the shapes and the probe were re-run (two findings, both already ruled).
A Sonnet clerk drafted the run facts' tables; the parent wrote sixteen
decisions (0–15). Two Opus authors together; an Opus checker as each
reported; then, on the fixed pages, the claim pass, the consistency
reader, and one rendered-page reader together; one rulings round; an Opus
fix checker; the blind solve (a fresh Fable solver, 78 items); Sonnet
clerks for the landing, cover, and pins and for the errata. The usage limit
stopped the run between the rulings and the fix checker's last message;
the fix checker and the errata clerk were resumed by SendMessage and lost
only their final messages. About two hours of work on either side of the
pause.

### What the run holds

Two pages, 79 items: 39 multiple choices, 39 text-ins (2.5: 12 formula
text-ins for the four lightest group members, the four symbols, and the
four isotope symbols; 2.6: formulas and ions throughout), one self-check
(2.6); 7 figures (3 and 4); eight Source notes (2.5: six; 2.6: two). 2.5
holds 41 items, 2.6 holds 38. Seven keyed exercises carried (4 and 3), 7
unkeyed omitted. Errata 2943–2963 (21 entries): five corrected with a
Source note and a decisions entry (the Mendeleev caption; "14 columns";
purines "which contain oxygen"; the glossary's representative element as
columns 12–18; oxyanions as polyatomic "ions"), three kept with a Source
note (Tacke and Noddack's "discoveries"; the bracket rule; the group-number
rule for charges), six typos, four source alt texts, and three kept as
printed (the glossary's "hydrate", the polyatomic table's stale `summary`
attribute, and the "molecular" answer to a "covalent" stem). Nine more
claims were reviewed and are not errata. No key was corrected and none
disputed: the solver agreed on 75 of 78, with three also-defensible
answers (noble gas as "inert gas", chalcogen as "oxygen group", selenide as
"selenide ion"), each already in the item's accept list.

### What each reading found

| Reading | Found | Would another have found it? |
|---|---|---|
| Parent's hand probe, before the wave | four gate gaps on the page's real stems (below) | no: bare source stems passed |
| Checkers (2) | every key confirmed; 2.5: a hint with "instead" on a two-option item, a chalcogen accept without the module's "oxygen group", two fillers keyed on words the stems use as tools; 2.6: a shared hint wrong for one exception, a photo alt that coloured the dish when the flame glowed | the hints: the fix checker, in part |
| Claim pass | 11 claims: 5 corrected, 3 kept with a Source note, 3 not errata | no |
| Consistency reader | 15 findings: a footer that named both filler keys (hard); two stale "later section" sentences on 2.3; four forms of one filler and three closings of one stem; footer vocabulary; straight quotes among curly ones | the footer: the checker, once; the rest, no |
| Rendered-page reader | 0 wrong, 3 misleading, 2 cosmetic: Unicode charges and subscripts a few pixels tall; the periodic table's names unreadable at its size, with no way to enlarge it; the nuclide stem's `^14_6C` beside a field guide that says a charge follows `^` | no |
| Fix checker | 4 changes (a hint's "above" pointing at the wrong figure; a selenide hint that gave the ion's sign; a Source note that credited "IIIA" to a page that never prints it; a footer count that told how many of four were covalent) and 2 judgment calls | no |
| Blind solve | 75 agree, 0 disagree, 3 also-defensible; the notes pointed at the lightest alkali metal in the 2.39 hint | the hint: no |

### Gates, tools, tests

- **Four readings the source gates lacked**, found by the hand probe (55
  items built on the pages' real stems) before the wave; all four are in
  `keyed-units.test.mjs` ("a link, a second name, and a glossary alias").
  A link's path was counted as stem words, so the unlettered 2.45 chlorides
  read as no unit (the keys gate returned null, coverage "missing"):
  `unlinked()` in `keyed-units.mjs`, used by `unitScore`,
  `judgeKeyedUnit`, and the coverage page texts. A formula after a colon
  ("…a charge of 3+: Al³⁺") was not a piece of the answer. A multiple
  choice option that prints its second name in parentheses ("main-group
  (representative) element") did not match the key "representative
  element". The glossary's "(also, …)" alias ("molecular" for "covalent")
  is now passed to the gate by its caller. On the real pages the keys gate
  has 0 failures (7,072 confirmed; prose-keyed unchanged at 367) and
  coverage 4,213 of 4,213.
- **The leak lint's formula fold** (`lints-leaks.mjs`, with a test): the
  directly-above lint read "(NH₄)₂CO₃" as printing the key "NH₄⁺", because
  its normalization drops the charge. A formula-form key now counts as
  printed only where its own characters are. Without it 2.6 did not verify.
- **The formula grader's two new messages** (`check-chem.mjs`, with a unit
  test): an ion typed without its charge ("An ion’s symbol ends with its
  charge…") and a nuclide without its mass number ("…carries its mass
  number…", "as in 14C", the stems' own wording, after the consistency reading). The status stays
  incorrect. This is shipped JavaScript.
- **A browser test that types a formula** (`browser-check.spec.mjs`): Se²⁻
  and (NH₄)₂SO₄ on 2.6, because the grader's JavaScript changed.
- **Edits on finished pages:** 2.3's body sentence and footer now name
  "the periodic table in Section 2.5 The Periodic Table" (no item touched);
  2.4's footer says "formula text-recall items".
- Pins 788 to 790 and chemistry 10 to 12 (`openstax-source.test.mjs`);
  the landing gained two bullets, the cover says "last section being
  written"; the claim-pass ledger's row reads 6 of 7.

### Rulings, now in the playbook

A corrected or annotated claim gets an italic Source note directly after
its paragraph, or after the figure or table the paragraph introduces, and
a one-clause footer entry; a note never states a key. A two-option filler
only where the module prints exactly two terms of the kind; one filler
stem form per page. An element or ion item closes "Enter the element’s
symbol." or "Enter the ion’s name."; "Select …" closes an item only where
two items of one part share stem and form. A hint shared across a part set
may name every table the set needs, and is tested, key covered, on every
member, including the exceptions the module names. A hint may name Appendix
A in plain words; a hint that sends the learner to read a name or mass in
the periodic-table figure also names Appendix A. A filler is never keyed on
a word the page’s stems or hints use as a tool word; "what X used and what
replaced it instead" is forbidden as a hint on a two-option item. An
`accept` member is only a form the module itself prints. A sentence
answer that holds symbols among its words is a formula text-in per symbol,
then one self-check with the source's answer whole. A key in the
glossary's other word for an option, and an option the stem prints with
its second name in parentheses, are read by the gate. Footer vocabulary:
"formula text-recall items", "text-recall items". Curly quotes in prose.
A photo alt’s colour claim needs a zoom of the exact object. The kit
gained, in `run.md`, a grep for "not yet on this site" at each run.

### What the process got wrong

- The parent's first probe used bare source stems; the four gate gaps
  showed only with the pages' real stems (a link, an added sentence).
- Run-facts decision 13 called the polyatomic table's stale `summary`
  "not an erratum", and the parent's own list for the errata clerk then
  named it as one. It is one, and is logged (2962); the decision's words
  were wrong.
- Decision 14 invited fillers for 2.5's first objective when two keyed
  exercises served it; the checker caught it, and the parent ruled the two
  exercises under that objective and deleted the two glossary text-ins.
- The parent's Source note for 2.6 credited "IIIA" to Section 2.5, which
  never prints it; the fix checker caught it.
- A hint edit after the solve was snapshotted before the run's records
  were merged, so `ledger-carry plan` carried nothing and four hashes were
  remapped by script. Merge author and solve results before any post-solve
  snapshot.
- The usage limit killed the fix checker and the errata clerk mid-task;
  both resumed by SendMessage.

### Not acted on

- Unicode charges and subscripts are drawn a few pixels tall in the body
  font on every chemistry page (render F4); the options are a
  `unicode-range` `@font-face` with `size-adjust` or render-time
  `<sup>` and `<sub>`. Put to Derek. *(Done the same day — "Three
  presentation fixes" below.)*
- No way to enlarge a dense diagram: the periodic table at 1x gets the
  800-pixel variant, its names and masses a few pixels tall (render F1).
  The hints that send a learner to it now also name Appendix A's table.
  Put to Derek. *(Done the same day.)*
- An element's name typed in a symbol field is told only that it does not
  read as a formula, never that a symbol is wanted.
- A formula typed without its parentheses (`NH42SO4`) is bare "incorrect".
- The formula field's guide ("a charge after ^") sits beside the nuclide
  stem's "^14_6C"; the guide is generic by design, and the items grade.
- Exercise 2.47's ion-symbol items appear only after the ionic parts, so
  they show which compounds are ionic; the playbook's shape, ruled to stand.
  *(Overruled the same day: they are held in a `followup`.)*

## Three presentation fixes after Sections 2.5–2.6 (November 10, 2026)

Derek, on the three items the 2.5–2.6 run had put to him: "What can we do
to fix these issues?" He chose, of the options laid out, a font rule for
the small characters, a viewer dialog for figures, and a follow-up reveal
for Exercise 2.47. Three commits, each site-wide except the page edit.

**Superscripts and subscripts.** A 3.9 KB subset of Noto Sans ("AP
SupSub", `static/fonts/`, built by `tools/build/gen-supsub-font.py`) leads
the body font stack, limited by `unicode-range` to ¹²³ and the Unicode
superscript and subscript block. Content, keys, lints, gates and search are
untouched. What the first attempt got wrong, and the browser showed:

- `size-adjust: 125%` alone matched a real `<sup>` in size (a `²` 8.7 px
  tall against 8.7 at a 16 px body) and lifted it 2.4 px too high, because
  the scale works from the baseline. It also made a `line-height: normal`
  line 27 px tall against 18.
- So the three changes are made in the font file: the em cut from 1000 to
  800 units (the same 1.25), the superscript digits and signs moved down
  116 units (the subscripts are composites of them and get it back), and
  ascent and descent set to 0.90 and 0.21 em. No `size-adjust`, no
  `ascent-override`: not every browser reads both, and a font file is
  read the same by all of them.
- Measured after: `²` at 6.0–14.7 px above the baseline (a real `<sup>2`:
  6.0–14.7), `⁻` 6.8 px wide (it was 5.1), every line the height it was.
- Left as it is: `P<sub>O₂</sub>` (52 places in Biology and Anatomy and
  Physiology) nests a Unicode subscript in an HTML one and is still the
  smallest print on its page, though a quarter larger than before.

**Exercise 2.47.** The four cation/anion pairs are wrapped in a new
`followup` shortcode: hidden until the compound's own multiple choice is
answered "ionic", when its verdict reads "Correct! Two more questions
follow." Stems, keys and hints are unchanged, so the page was not re-read
or re-solved; all 14 items are still keyed to the source. Rulings:

- A keyed "no ions" item for the two covalent compounds was not possible:
  the source answers them "covalent" and nothing more, and the keys gate
  refuses a key the answer does not print.
- The reveal is on a CORRECT answer. A wrong "covalent" for BaO says "Not
  quite — try again." and shows nothing.
- It fails open: a `followup` with no item before it shows its items. The
  lint forbids that shape (and an unclosed, nested, empty or prose-holding
  one, and one whose gate is itself inside a followup).
- The gate that would have caught 2.47: `conditionalUnwrapped` in
  `verify:source-keys` — parts of one exercise that all carry the same
  multiple choice, further items under only some of them, not in a
  followup. Run on the page as committed that morning it names all eight
  ion items; over every book it finds no other case.
- Not fixed: the blind solve reads the page in order and still sees which
  compounds have ion items. It tests the keys, not the leak.

**Enlarging a figure.** Every `mediafigure` whose file is wider than
704 px, or that the source scales down, gets an "Enlarge figure" link
under its caption (2,009 of 2,783 figures: Anatomy and Physiology 652,
Biology 659, Microbiology 591, Chemistry 107). It is a link to the largest
variant; `assets/js/figure-enlarge.js` opens it, and a click on the image,
in one native modal `<dialog>`: fit to the window, the file's own pixels,
up to three times that; pan by scroll, arrow keys or drag. The periodic
table opens 1.6 times its column size on a 1280 × 900 window and at 1300 px
on the first "+". No sharper copy exists: the source file is 1300 px wide.
Found in the browser:

- the theme's reset zeroes the `<dialog>`'s centring margin (it opened in
  the top-left corner);
- a flex button with a `min-width` shrinks below its own label (a phone
  clipped "Close");
- zooming out below the fit shows nothing more and is not offered.

## The `\dfrac` watch list

Every inline fraction an author or checker reports as hard to read under
the ban, with its page and line. The ban is reviewed from this list.

- 2.1, the compound X / compound Y Check Your Learning (line ~127 of
  `01-early-ideas-in-atomic-theory.md`): the ratio of the two mass ratios,
  a fraction of fractions with units. Inline, its inner numbers were too
  small to read; it is set as a display equation inside the model answer,
  where `\frac` is full size. Nothing lost.
- 2.1, the isooctane table (lines 78–80): each cell holds
  `\frac{14.82 g carbon}{2.78 g hydrogen} = \frac{5.33 g carbon}{1.00 g hydrogen}`
  inline. Readable on the rendered page (the rendered-page reader passed
  it); reported by the author under the watch.
- Chapter 1 and the appendices reported none.
- Sections 2.5–2.6 reported none: neither page prints a fraction.
