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

## Chapter 2, Section 2.7 (November 10, 2026)

Derek: "Let's finish the last section of chapter 2 chemistry then
commit." The parent took it as Section 2.7 (Chemical Nomenclature, module
m68698), the last of the chapter's seven. Like the two runs before it,
this one went through the blind solve and the commit. HEAD at the start
was 99c5103f with a clean tree; the last erratum was 2963, so the run
began at 2964.

### Shape

One section, so no wave. Prep reused from the earlier runs' scratchpad
(the PDF pages 106–128 and the key pages 1137–1138, the media already
vendored); the inventory, keys, shapes, and probe re-run. The parent wrote
the run facts itself: one module, so no run-facts clerk. One Opus author
in four rounds (write; the checker's fixes; the three readings' rulings;
the fix checker's changes); one Opus checker; then the claim pass, the
consistency reader, and one rendered-page reader together (17 tiles); one
rulings round (`rulings.md`), preceded by a short checker round
(`rulings-1.md`) and followed by a fix-check round (`rulings-3.md`); an
Opus fix checker; the blind solve (a fresh Fable solver, 48 items); one
Sonnet clerk for the errata draft and one for this narrative. The landing,
cover, pins, decisions entries, and claim-pass ledger row were the
parent's, a seven-line job each. No usage-limit pause. Tokens: author 269k
across the four rounds, checker 198k, claim pass 108k, consistency 171k,
rendered-page reader 157k, fix checker 134k, solver 79k, errata clerk 111k.

### What the run holds

One page, 48 items, all text-ins: 46 from the source (6 keyed exercises as
37 items, 17 names and 20 formulas; the 2 Check Your Learnings as 9
formulas) and 2 glossary recalls the parent asked for (binary acid,
oxyacid), beyond the floor: no keyed exercise asks about an acid. 5
unkeyed exercises omitted. One figure (a photograph beside two drawn
ball-and-stick models: kind `diagram`, with a longdesc); 8 tables
transcribed; 4 key terms; 6 Source notes. All 46 source items carry "Use
the periodic table." with a link to Appendix A (decision 1: no 2.7 stem
names it; one body sentence does). Errata 2964–2976 (13 entries): three
corrected with a Source note and a decisions entry (2964, the aluminum
fluoride trihydrate key, the book's first corrected text-in key; 2970,
the pipeline that was a set of cooling towers; 2972, the 2010 EWG
study), three kept with a Source note (2968 gallium(III) nitride; 2973
the name-order rule; 2976 the oxyacid glossary entry), five typos and an
alt text (2965 "principle", 2966 a comma, 2969 "Hinckley" ×5, 2974 a
sentence with two openings, 2975 "is replace with"; 2971 the figure's
source alt), and one kept as printed (2967, two table summary attributes
that print nothing). Chapter 2 is complete, 7 of 7: the landing's "being
written" paragraph and the cover's sentence are gone; pins 791 sections,
chemistry 13. The solver agreed on 47 of 48 and disagreed on none; the
one flag was a second defensible name for HBr, now an accept member.

### What each reading found

| Reading | Found | Would another have found it? |
|---|---|---|
| Parent's hand probe, before the wave (98 lines, every item with its real stem) | one gate gap: a name cut short was confirmed against the whole name | no |
| Author | the aluminum fluoride misprint confirmed; two one-word typos; the garbled sentence; the source alt's two misreadings; gallium(III) nitride; the EWG sentence (not checkable offline); the missing comma | the claim pass, for the EWG sentence |
| Checker | 2 hard (an accept for an out-of-date name, ruled out; no Source note beside the corrected key) and 10 notes (the HBr hint; no hint says polyatomic-ion charges live on 2.6; "oxy acid") | the HBr hint: the consistency reader and the solver; the rest, no |
| Claim pass | 4 findings: the EWG study (wrong), the pipeline (wrong; the box contradicts itself), the oxyacid glossary (loose), the name-order rule against Cl₂O₇ (loose) | no |
| Consistency reader | gallium(III) nitride against the body's rule; decision 5's HBr hint against the Hints rule; four rulebook slips (a playbook example without the periodic-table sentence; 2.7 cited as a "Using the periodic table" page; a rule that forbade setting name-beside-formula equations as prose; no rule for a mixed-panel figure's kind) | the HBr hint: the checker and solver; the rest, no |
| Rendered-page reader | 0 wrong, 3 misleading, 2 cosmetic: the formula field's typing example was a Check Your Learning key; nothing said the hydrate dot is typed as a period; capital I and lowercase l are one glyph; 2.61's stems read as fragments; the hydrate lines ran name into formula | no |
| Fix checker | 2 hints (2.61's said "from the formula" where two stems print none; 2.59's did not say where a monatomic ion's charge comes from); the dot sentence's example was 2.59(b)'s key; a Source note on the wrong side of its figure; a footer clause | no |
| Blind solve | 47 agree, 0 disagree, 1 also-defensible; it also caught a wrong IUPAC citation in the parent's Source note | the citation: no |

### Gates, tools, tests

- **A name key must be a whole piece of a list-shaped answer**
  (`verify-source-keys.mjs`, test in `keyed-units.test.mjs`): "cobalt(II)
  chloride" had been confirmed against "…hexahydrate". The corpus gate was
  unchanged by it (7,072 confirmed, 0 failures).
- **The gate's tally**: the first disclosed text-in correction made the
  confirmed count NaN, because the text-in tally is summed whole. It is now
  `counts.textinDisclosed`, with tests. Source keys 7,072 to 7,119;
  coverage 4,213 to 4,259; replay 8,428 to 8,522 (`baseline:update`).
- **A test that every corrected key of a Chemistry page has its "*Source
  note:* the answer graded …" paragraph.** A `DISCLOSED_DEVIATIONS` line
  for the key (`fs-idp268321696(e)`, 2964) and decisions entries 2964,
  2970, 2972.
- **The formula field's typing examples are no item's key.** The guide's
  example `Mn3(PO4)2` was a Check Your Learning key; it is `Ca3(PO4)2`
  now, in `text-in.js` and in the grader's "does not read as a formula"
  message (`check-chem.mjs`); `solve.md`'s examples, which had printed two
  of this page's keys to the blind solver, became `Ca3(PO4)2`,
  `Na2CO3.10H2O`, and `2H2 + O2 -> 2H2O`. A `documentation.test` case
  grades every typing example against every formula and equation key in
  the content (80 keys today).
- **A lint for the hydrate's dot** (`lints-leaks.mjs`, with a test): a
  formula key holding a hydrate's dot needs the stem sentence "Type the dot
  as a period, as in Na2CO3.10H2O."; the ASCII-chemistry lint exempts that
  one typed example.
- Pins 790 to 791 and chemistry 12 to 13 (`openstax-source.test.mjs`);
  the claim-pass ledger's row reads 7 of 7.

### Rulings, now in the playbook

A name the module prints as out of date is not an `accept` member; the
hint says the form the name takes, and the gate holds a name to the whole
name. A hint that sends the learner to another section's table names the
section; where the module names one substance two ways by its state, the
hint names the subsection to recall, not the observation that decides.
The guide's typing examples are no item's key (test); a hydrate key closes
with the dot sentence (lint). A source `<equation>` that only sets a name
beside a formula is prose, "name, formula". A composite figure with a
drawn panel is a `diagram`. Rule 9 no longer lists 2.7 among the "Using
the periodic table" pages, and the playbook's formula example carries the
sentence. `run.md` §0: a lint written during the run is run against the
ruling it enforces. A Source note's outside citation is one the claim pass
quoted or the parent opens.

### What the process got wrong

- The session memory said 2.7's stems say "Using the periodic table";
  none does. The run facts came from the CNXML, so nothing followed from
  it, but the playbook's rule 9 held the same false example.
- Decision 5 let the HBr hint "send the learner to what the formula does
  and does not show"; that contradicted the Hints rule, the author
  followed it, and the checker and consistency reader read it as the
  answer. Overturned in round 2. Its other half (no accept for
  "hydrobromic acid") fell after the solve: the author, the checker, the
  consistency reader, and then the solver had each raised it before the
  parent moved.
- Ruling R1 and decision 4 left the Source note out of the corrected
  key's list (erratum, decisions entry, deviation line); the checker
  caught it.
- Ruling G3 said each ruling was checked against the lints and was not:
  the new hydrate lint required a sentence the ASCII-chemistry lint
  refused. One author round trip.
- Ruling R4's reason ("earlier editions print exactly…") was written from
  memory; the errata clerk flagged that it had opened no source, and the
  parent then read the first edition's page, which does print "Some other
  examples are shown in Table 2.11."
- Ruling C5 printed the claim pass's IUPAC citation without opening it.
  The claim pass quoted its sources for F1 and F2, not for F4; the solver
  caught it, and the note now cites nothing (erratum 2973 corrected).
- The NaN tally printed a ✓ line ("NaN keyed answers confirmed … 0
  failure(s)"); it was seen only because the parent read the line.

### Not acted on

- Capital I and lowercase l are one glyph in the page's sans font: CaI₂
  reads "Cal₂", AlF₃ reads "AIF₃", the source's misprint. A site-wide
  typography question, a chemistry book being full of Al, Cl, and I. Put
  to Derek.
- The periodic-table sentence on all 46 source items: every reader kept
  it; 2.61(b), (c), (e) and the two ammonium compounds are the weakest
  cases, the table giving them only symbols.
- A formula typed without its parentheses ("NH42SO4") is marked incorrect
  with no message; "Cr3P3" for CrP gets no lowest-terms message.
- A wrong name gets no message at all (the text grader returns a status).
- Keys the page's own tables print (Na₂O, HF, IF₇, N₂O, FeCl₂, K₃PO₄):
  the source's design.
- No narrow-viewport tiles were captured for the eight tables; the
  browser suite walks the page at its widths.

## Four fixes after Section 2.7 (November 11, 2026)

The 2.7 run closed with four points put to Derek ("Not acted on", above).
He decided each on November 10; this is what was done.

### An older name is answered, not refused

Decision: "Say so, not 'Incorrect'". "Ferrous chloride" for FeCl₂ named
the right compound in the form the section retires, and was marked "Not
quite — try again." like any wrong name.

- `assets/js/lib/text/older-names.mjs`: the classical names of nine metals
  (ferrous/ferric, cuprous/cupric, stannous/stannic, plumbous/plumbic,
  mercurous/mercuric, cobaltous/cobaltic, chromous/chromic,
  manganous/manganic, aurous/auric), each with its element and charge. The
  table is written out because the suffix does not give the charge: -ic is
  3+ for iron, 2+ for copper, 4+ for tin.
- `gradeText` (the component's grader) reads an incorrect word answer
  through the table; when its systematic reading grades correct against
  the key, the verdict is `form` with the message "That is an older name.
  Give the systematic name." — the amber tone, the field left open. The
  message names neither the metal nor the numeral. The older name of a
  different compound ("ferric chloride" for FeCl₂) stays incorrect.
- `checkText`, which every gate calls, is unchanged: an older name is
  `incorrect` there, so `verify:replay` still proves that the three stems
  which print one ("the IUPAC name of ferric nitrate") cannot be passed by
  retyping it.
- Lint: an `accept` member that is an older name of the key or of another
  member is an error. Sabotaged once (`accept="ferrous chloride"` on the
  FeCl₂ item: it fired at L472) and reverted.
- Tests: the grader's cases; the table's pairs (-ous the lower charge);
  every Chemistry name key with a charge and a table metal (six today)
  answers its classical name as an older name and its partner as wrong; a
  browser case on 2.7. The browser-fixture gate now replays typed answers
  through `gradeText`, the component's grader, instead of `checkText`.
- Not covered: a stem's Greek-prefix name retyped ("titanium
  tetrachloride") is still plainly incorrect — it is not an older name of
  a kind a table can hold.

### The periodic table is a control on every page

Decision: "A button on every Chemistry page". Through chapter 2, 74 items
ended "Use the periodic table." with a link to Appendix A (2.3: 9, 2.6:
19, 2.7: 46 — the summary put to Derek said 75; the 75th is the source's
own "Hint: Use the periodic table to predict…" in 2.6, which stays). The
sentence was repetitive, and worse: the site keeps no answers, so
following the link from the middle of a Practice block lost what had been
typed.

- The book names a **reference figure** in its `_index.md` (`reference:`
  label, page, media stem, alt). `layouts/_partials/utils/reference-figure.html`
  resolves it; `toc.html` prints "Periodic table" at the top of the rail's
  sticky bottom block on every page of the book except Appendix A — in
  view at any scroll position from xl up, one tap into the "On this page"
  drawer below (the drawer already closes itself on a link and hands focus
  to its button, which is where focus returns when the viewer closes).
- It is a real link to Appendix A. With the script
  (`assets/js/figure-enlarge.js`) it opens the figure in the viewer of
  November 10 instead, and so does a link to Appendix A in a section's
  body — the eleven items and the body sentences that carry the source's own
  words about the table. Not on a landing page or among the appendices,
  where such a link is navigation (the pager of Appendix B). The dialog
  gains a line "Open Appendix A: The Periodic Table", since the image's
  content as text is on that page; the control's alt says so.
- The 74 sentences were removed by exact string and the three footers
  rewritten: 2.3 loses the clause, 2.6 and 2.7 keep the one about the
  linked words.
- **The ledger.** A changed stem is a new exercise, so 74 records were
  stranded. `ledger:carry` now reads a stem without this one retired
  sentence (`RETIRED_REFERENCE_POINTER`, `tools/lib/content.mjs`): it was
  added to the source's words, asked nothing, and no answer depends on it.
  74 carried, 0 left to re-read; no blind solve was re-run. This is a
  judgment the parent made — the alternative was a fresh solve of 74
  items whose question had not changed — and it is recorded in AGENTS.md
  beside the other carry rules. A stem that loses anything else, or the
  source's own words about the table, is still re-solved (tested). (The rule was a one-off and was removed the
  same day, once the records were carried: "A review before chapter 3",
  below.)
- Lint: the sentence is an error from now on, so the carry rule can only
  ever drop it from the old side of a comparison.
- Gates after the edit: `verify-section` on 2.3, 2.6, 2.7; source keys
  7119, coverage 4259, ledger 17709 — all unchanged.
- **The replay floor went down by 44, 8522 → 8478, on purpose.** For a
  formula item `verify:replay` replays every capitalised word of the stem
  as a formula a learner could copy, and the sentence's "Use" was one such
  word on each of the 44 formula items that carried it. Replaying the
  three pages as committed and as edited gives 222 and 178 spans; nothing
  else moved, and no span that is still printed went unreplayed.
- Tests: the control and a body link open the viewer in place and a typed
  answer survives, at 1280 and 390 px; absent on Appendix A and on a
  Biology page; a sibling appendix's link navigates; an axe scan of the
  control and of the open dialog in both themes.
- Left as it is: links to the OTHER appendices (tables, not figures)
  still leave the page. Nothing in chapters 1–2 needs one from an item;
  the general answer is keeping typed answers across a navigation, which
  is a separate piece of work.

### Added items beyond the floor: the rule

Decision: "Keep, and write the rule". The two acid recalls of 2.7 stay as
authored. The playbook's "Added items" now says when an item may be added
to a group already at the floor: one filler for a headed body subsection
that no source item on the page touches, keyed by the module's own
glossary, table, or sentence, named with its reason in the footer — and
never a second one, never for a subsection a source item reaches. The
author and checker briefs carry one line each. No gate: whether a
subsection is touched is a reading, so the author names the subsection in
the ledger note and the checker reads the claim. Nothing was re-authored
and no item changed.

### A body font that tells I from l

Decision: Inter 4, with its tailed l and seriffed I, for all of the site's
text. Derek chose it from a five-way specimen. He preferred the look of
Atkinson Hyperlegible Next, but it draws a slashed zero and lacks Greek,
primes, arrows and the superscript/subscript block — 10,310 characters of
the corpus would have fallen back to the system font. Source Sans 3 sets
visibly smaller at 16 px.

What was built. `tools/build/gen-body-font.py` cuts three files from the
pinned Inter 4.1 release, and replaces `gen-supsub-font.py`:

- "AP Body", upright and italic (`static/fonts/ap-body-v1.woff2`, 87,788
  bytes; `ap-body-italic-v1.woff2`, 96,960). The character map points l, I
  and every letter `cv05` and `cv08` cover (ĺ ļ ľ ŀ ł, Ì Í Î Ï Ĩ Ī Ĭ Į İ) at
  the alternates, so no stylesheet has to ask for them. Weight runs
  400–700. The subset is eleven Unicode blocks plus every character Inter
  has that the content, the templates, the media manifests and the
  components use. The family is renamed; the copyright and licence records
  stay, and `static/fonts/OFL.txt` is now Inter's licence. The about page
  credits the font.
- Optical size was kept. Pinned to the 14-unit text default, the two files
  were 56,392 and 61,480 bytes (117,872 together, against 184,748 kept);
  kept stays well under the 300 KB set as the limit, and the specimen Derek
  approved had it on.
- Only kerning, marks, `ccmp`, `locl`, `case`, `tnum` and `pnum` are kept.
  Measured with the source Inter in Chrome at 64 px, its `calt` draws a
  typed `->` as one arrow 59.1 px wide where the two characters are 67.6
  (`<-`, `=>` and `-->` likewise), and raises a parenthesis beside a capital
  by 3.4 px: "(NH4)2" and "[H]". This site prints typing examples, so the
  page must show the characters a learner types. "3x4" was not changed by
  Inter 4.1's `calt` in Chrome; it is tested anyway.
- Line metrics: Inter's ascent and descent are 0.969 and 0.241 em (19.4 px
  at 16 px). The prose line-height is an explicit 28 px, so no line grew.
- "AP Body Fallback": the local Arial (or Liberation Sans) with
  `size-adjust: 107.1%` — the two faces' advances weighted by the content's
  own character frequencies — and ascent 90.4%, descent 22.5%, line gap 0,
  so the page does not re-wrap when the web font arrives. Next.js publishes
  107%, 90% and 22.5% for the same pair.
- The page head preloads the upright file. The build audit now reads the
  file name from the stylesheet's `@font-face` and fails a page that
  preloads another, and holds every font preload, not only KaTeX's, to
  `crossorigin` and a built file.
- Twenty-six characters in those sources are not in Inter and fall through
  to the system font: ᵂ ⇄ ⇌ ∈ ∓ ∙ ∝ ∣ ∩ ∪ ≡ ⋅ ⌈ ⌉ ⏐ ⓐ ⓑ ⓒ ⓓ ♀ ♂ ⟨ ⟩ ⨯ ｜ and
  🎉. Most stand inside KaTeX math or component source, which this face
  never draws.

What the first attempt got wrong. The superscript face was first recut
the way the Noto one had been: Inter's own superior figures, the em cut
from 2048 to 1486 units to enlarge them 1.38 times, lowered 341 units. It
passed the browser test — a ² 8.85 px tall against 8.85 for a real
`<sup>2</sup>`, its feet at 6.0 px — but on the page it was visibly
heavier and wider than the text: Inter draws its superiors thick so they
survive at their own small size. A ² was 9.7 px wide against 7.3, and
SO₄²⁻ 51.8 px against 45.5 tagged. `ap-supsub-v2.woff2` (4,948 bytes)
instead draws each character as a composite of the body face's own glyph
at 75%, placed where the theme puts a `<sup>` (0.375 em up) or a `<sub>`
(0.1875 em down), so a Unicode charge and a tagged one look the same at
every weight. The browser test now also compares a ⁻ with a real
`<sup>−</sup>` and a ₂ with a real `<sub>2</sub>`, and asks the browser
which face drew them.

Tests: the superscript test compares against the body stack instead of
the bare system stack. A new browser test on 2.7 asks Chrome which font drew
regular, bold and italic prose, a formula field and its "Read as" line;
checks that I and l differ in ink width (and that the system font's do not,
the control); and checks that `->`, `3x4` and a parenthesis beside a capital
are drawn as their own characters. The figure-viewer test failed once the
text re-wrapped: a lazy figure above 2.5's periodic table now loads as the
link scrolls in and moves it by 0.19 px, and Playwright, finding the link
"not stable", scrolled it to the window's bottom edge before clicking. The
test now waits for the figures in reach to load; the viewer was not at
fault.

Not changed: math figures set their own Helvetica/Arial and keep the
look-alike letters; changing that re-flows every label in about 1,500
figures and is a separate decision. The standalone 404 page keeps its inline
system stack: it loads no site stylesheet, and a second copy of the
`@font-face` there is a file name a rename would have to remember.

### A review before chapter 3

Before chapter 3, three Opus reviewers read the Chemistry kit cold: one the
kit (`docs/subjects/chemistry.md`, `docs/briefs/chemistry/`, and the parts
of `AGENTS.md` and the inherited playbooks they point at), one the code the
last day changed (commits 85747a39, 5bb8d634, 7297b15b, f426be46), and one
every rendered Chemistry page.

**The kit review** counted 1 finding that would fail a gate in chapter 3
(A), 7 that would cost a round of rework (B), and 12 of polish (C). What
held up: every file, tool, script, and flag `run.md` names exists and takes
the arguments shown, the chapter 3 prep tools run clean (no shape flag, 117
keyed units probed with no finding), and the grader commands in the briefs
return what the briefs say.

- **A1.** The playbook's one worked formula `textin` still ended "Use the
  [periodic table](…)." — the sentence the lint has refused since that
  morning. Deleted from the example; no other example or instruction in the
  kit or `AGENTS.md` adds a pointer to the table.
- **B1.** `run.md` sent the consistency reader's report to
  `$SP/consistency.md`, the path of its own copied brief. Now
  `$SP/consistency-chNN.md`; the rendered-page reader and the fix checker
  were given named report paths too (`$SP/render-N.M.md`,
  `$SP/fix-check-chNN.md`).
- **B2.** `run.md` §1 step 6 and the run-facts template still had the
  parent list every item that needs an appendix's data, Appendix A
  included. Both now say Appendix A is the exception: an item that needs
  only the table's data and names no table is not listed and gets nothing
  added (chapter 3's molar-mass items take no pointer); the source's own
  words about the table are still linked; every other appendix still needs
  its link on each item. The author brief says the same.
- **B3.** The blind solver could open nothing under `content/`, and the
  masked pages print no atomic masses. `solve.md` now lets it read the
  appendix pages (a grep found no graded shortcode on any of them) and
  says atomic masses and constants come from those pages as printed, to
  the places printed, since a molar mass's significant figures depend on
  them; `run.md` §3 says the same.
- **B4.** "An `accept` member is only a form the module itself prints"
  (Sections 2.5–2.6, above) was recorded as a playbook ruling and was not
  in the playbook, while its own unit row prescribed `metres squared`,
  which no module prints. The grader folds only sulph-, aluminium, and
  caesium, so `metres` is a spelling a correct learner types and the
  grader cannot read. The playbook now states the rule generally ("An
  `accept` member is one of two things", under "Exercises"): another name
  or form only where the module prints it, or the key's own words spelled
  another way the grader does not fold. The author and checker briefs
  point to it. Two chapter 1 members were neither as the rule was first
  written — `soy` for `soybeans` and `experiment|experimenting` for
  `experimentation` (1.1), each another form of the key's own word that
  completes the sentence as well. They are sound answers that three
  readings accepted, so the rule's second half names that case rather
  than the members being withdrawn.
- **B5.** The exemplars were chapter 1 pages only, and the author may not
  open another chapter's page. The run-facts template and `run.md` now
  name three chapter 2 ITEMS by page and stem (a formula `textin` under an
  image-only part on 2.4, a name `textin` on 2.7, a `followup` on 2.6), and
  `author.md` lets the author read those items and nothing else of those
  pages.
- **B6.** `AGENTS.md` said only chapter 1 was authored. It now points at
  the cover for what is done, and `run.md`'s pins step reads the sentence
  at each close-out. Its "Re-solving after a sweep" lost the clause on the
  retired pointer sentence, a one-off carry that is being taken out of
  `ledger-carry.mjs` in the same review.
- **B7.** Chapter 3 closes Knowledge Check block 1, and `run.md` never
  mentioned knowledge checks. Its close-out gained step 9: when a chapter
  closes a block, the next run is the block's check, and for block 1 its
  parent first writes the Chemistry Knowledge Check kit from
  `docs/briefs/anatomy-physiology/kc-run.md` and `kc-prompts/`. The
  playbook's "What is still open" says the kit does not exist.
- **C1–C12.** Applied: `run.md`'s "Three things" over five bullets and
  "two runs" (C1); the appendix grep that also matched seven chapter 21
  modules (C2); the probe's stale "25 lines" and a kit list missing two
  briefs, both in the settled-by-chapter-1 text moved below (C3); "a math
  figure sets its own Helvetica/Arial", when every Chemistry figure is the
  source's raster (C4); the forms not yet read, stated twice — the
  "Formulas and equations" rule kept, "What is still open" pointing to it
  (C5); the page-skeleton conventions no lint holds, now listed in the
  checker's §3 (C6); `AGENTS.md`'s "four" baselines (there are five),
  and `--min-covered` said to move only with the pin (C7; the reviewer
  also set `AGENTS.md`'s "do not commit unless the user explicitly asks"
  against `run.md`'s commit step — that sentence was left as it is, the
  rule being Derek's to change); the rendered-page reader's "inline
  fractions set small" exception made to report an unreadable one under
  the `\dfrac` watch (C8); `run.md`'s chapter 1 key-page indexes (C10);
  the name row's missing period (C11); and the author brief's two
  duplicated bullets and "prints no number" (C12). Recorded, not decided:
  links to the appendices other than A still leave the page (C9), now in
  the playbook's "What is still open" for a decision before chapter 5.
  Not done: moving the name row's older-name passage out of the table
  (C11's second half), a matter of layout.

**Concision.** The playbook lost "What the scan found" (kept as one bullet
under "Source and authority") and the settled half of "What the pilot
settled, and what is still open" (the practice floor moved to "Added
items"), two duplicated passages, and the anecdotes after rules that read
whole without them; `run.md` lost "What a chapter cost" and the same kind
of anecdote. The text is below.

**The code review** found nothing a learner or a gate meets wrong, and four
latent weaknesses, each reproduced before it was fixed:

- The older-name lint compared strings, where the grader folds a plural:
  `accept="ferrous ions"` beside the key "iron(II) ion" passed the lint and
  graded Correct. The lint now asks the grader's own question
  (`isOlderName` against the other accepted members).
- The browser-fixture gate recognised three verdict words, so the new
  "older name" case (`form`) was never replayed in `npm test`. It reads
  `form` now; four older `form` cases are replayed with it.
- The build audit's body-font preload rule skipped when it could not find
  the `@font-face`. It now reports that as a problem, and reads a `src`
  that begins with `local()`.
- A link to Appendix A written without its trailing slash would have left
  the page, and the retired sentence spelled that way passed the lint. Both
  read the page with or without the slash, and as `index.html`.

Two things were changed on the reviewer's notes rather than its findings.
The ledger carry rule for the retired sentence was a one-off: with the 74
records carried and the lint refusing the sentence, it was removed from
`ledger:carry` and from `AGENTS.md`. And the font build took its character
set from the content of the day, so a later run would have written
different bytes under the same file name, with nothing to say when a new
chapter printed a character the face lacks. The set is now a function of
the script's own constants and the pinned release — 22 Unicode blocks that
are cheap to take whole, and 15 single characters (EXTRAS) from blocks that
are not — so two runs write the same bytes: upright 95,484, italic 105,568.
`data/fonts/ap-body.json` records what the faces cover, and
`tools/build/body-font-coverage.test.mjs` fails `npm test` on any character
a page prints outside math that neither face draws and its commented list
of fourteen does not name (⇌ ⇄ ∙ ∝ ⨯ ᵂ ♀ ♂ ⓐ ⓑ ⓒ ⓓ ⟨ ⟩, which Inter
lacks). What went wrong on the way: the parent's first list of blocks took
Latin Extended-B, IPA Extensions and the combining marks whole, and the
upright file — the one every page preloads — went from 88 to 160 KB for
five characters; the blocks came out and the five were named.

**The rendered-page reading** (all 29 Chemistry routes at 1280 and 390 px)
found one thing that misled a learner and four that were visibly wrong:

- **A formula typed with the stem's period.** "MgSe." was answered "Those
  are the right letters — now fix the capitals", its capitals being right:
  a period is how a hydrate's dot is typed, and the reader took the last
  one for a dot with nothing after it. Every stem ends in a period and so
  does the typing guide's example. The chemistry reader now drops a
  period, comma, or semicolon from the END of what was typed
  (`check-chem.mjs`; a key is never passed through that).
- **Section 2.3 scrolled sideways on a phone**: its Key equations line,
  one inline formula with a `\left( … \right)` group that cannot break,
  ran 20 px past the screen. Not the font's doing — the page did it before.
  A Key equations line now scrolls inside itself and is
  keyboard-reachable when it does (`custom.css`,
  `scrollable-regions.js`), and a browser test asks every page of the book
  not to scroll sideways at 390 px; until then only the appendices were
  asked. The parent's first rule was wrong twice, and its own test and a
  screenshot showed it: the scroll box cut a few pixels off a fraction
  (it is padded now, the padding taken back as margin), and
  `li > .katex:only-child` also matched a lone symbol inside a sentence —
  `:only-child` does not see text — and put a gap after the Z of "(Z)" in
  2.3's summary (the rule is scoped to the list under the heading).
- **Below 1280 px nothing on an item points at the Periodic table
  control**: the rail is the "On this page" drawer there, behind an
  icon-only button, and on the nine appendix pages with no headings there
  is no drawer at all. 34 of Section 2.7's 48 items name no table. Put to
  Derek.
- **Section 2.5 prints "Using the periodic table" as plain words where 2.6
  links them** — the playbook's rule, since 2.5 shows the table itself.
  Left as it is, pending the decision above.
- Recorded and not acted on: a Roman numeral typed with lowercase l's gets
  only "Not quite"; the older-name message says "systematic name" where
  five stems say "IUPAC name"; "∙" in Appendix C is drawn by the fallback
  face; display equations cut off on a phone show no sign that they
  scroll; the viewer's title is clipped to "Periodic ta…" at 390 px.

What it confirmed: the control is on every page but Appendix A and opens
the table; none of the 74 edited stems is left with a dangling sentence;
the three footers no longer describe the removed sentence; I, l, the Roman
numerals and the Unicode charges read correctly at three times the size;
no console error or failed request on any page, width, or theme.

### Text moved out of the kit at the review before chapter 3

#### From the playbook, "What the pilot settled" (the settled half)

Settled by chapter 1 (November 9, 2026; narrative in
`docs/history/chemistry.md`):

- **The practice floor is the `default` `BOOK_RULES` profile**: two
  exercises per objective group and five per section, each group with at
  least one auto-graded item. Chapter 1's keyed pool plus added items met
  it on all six pages, groups of exactly two included, so no chemistry
  profile was written.
- **The gates read this book.** `verify:source-keys` reads the `exercises`
  section class and the Check Your Learning notes, one keyed unit per
  lettered part (`tools/lib/keyed-units.mjs`); `verify:source-coverage`
  counts an unkeyed exercise as `omitted` and fails one that is rendered;
  `verify:ledger` requires a solve and provenance for
  `content/physical-sciences`; `verify:source-tables` reads the appendix
  pages cell by cell ("Appendices"). **A gate is proven only on the shapes
  it has met**: the review before chapter 2 found three it could not read
  (a part that is only an image, a nuclide symbol, a formula its answer
  labels in words), each of which would have failed a sound page, so a
  chapter's new shapes are probed through the gates before its wave
  (`run.md` §1 step 6a). The probe is a tool,
  `node tools/source/chemistry-gate-probe.mjs N`: it builds the item
  each keyed unit will carry and asks both gates about it. Run over the
  book it found about a hundred keyed parts the keys gate read as
  another exercise, now read by exercise first and part second
  (`keyed-units.mjs` `unitFor`), and it leaves 25 lines for their
  chapters' run facts: source defects, answers the shapes tool misreads,
  and five pairs of keyed exercises whose stems are one text.
- **The browser suite types into the real field** (`tests/browser-check.spec.mjs`,
  "Chemistry"): every measured key on 1.6 key by key, a two-digit exponent
  of either sign, a typed unit, the exact power-of-ten factor; and it reads
  the rendered page for what no source gate sees — a display row wider
  than the column, a number in scientific notation split across lines, a
  scaled-down figure at full width.
- **The kit**: `docs/briefs/chemistry/` (`run.md`, the parent's recipe, and
  the author, checker, claim-pass, solve, render-reader, and consistency
  briefs).

#### From the playbook, "What the scan found"

| | Count |
|---|---|
| End-of-section exercises (`section class="exercises"`) | 1,736 |
| … with a `<solution>` | 873 |
| Worked `<example>`s | 301 |
| … with a "Check Your Learning" twin and an `Answer:` note | 288 |
| `m:math` expressions / display `<equation>`s | 5,367 / 1,558 |
| Struck-through terms (`m:menclose`, unit cancellation) | 273 |
| Inline `<sub>` / `<sup>` (formulas, charges, exponents) | about 7,500 / 3,500 |
| Image references (all JPEG) | about 1,150 |
| … inside a captioned `<figure>` | about 625 |
| … outside one (text, examples, exercise stems, solutions) | about 490 |
| Tables | 191 |
| Modules with a `<glossary>` / definitions | 109 / 766 |
| `key-equations` sections | 43 |

- **Only the odd-numbered exercises are keyed**, as in the printed book,
  and none is multiple choice. Of the 1,160 keyed answers (exercises and
  Check Your Learning together), about 400 are one short number with a
  unit; the rest are sentences, lettered multi-part answers, formulas,
  names, and 65 that are drawings.
- **Objectives** are in `md:abstract` (the math and Biology shape).
- **Feature boxes** (`<note class>`): `link-to-learning` (95),
  `everyday-life` (44), `sciences-interconnect` (19), `chemist-portrait`
  (10).
- The parser's `EXCLUDED_CORE_SECTION_CLASSES` gained `exercises` and
  `key-equations` for this book.

#### From the playbook, shorter cuts

- Page skeleton rule 9, after the periodic-table control: "Through chapter
  2 such an item ended "Use the periodic table." with a link; 74 items
  carried it, 46 on Section 2.7 alone, and following the link left the
  page and the typed answers behind." (already above, "The periodic table
  is a control on every page").
- Rule 9, on a link in a stem: "until 2.6 the path's six words counted, and
  an unlettered exercise carried one member at a time fell under the
  floor" (already above, Sections 2.5–2.6, "Gates, tools, tests").
- "Added items", a filler on a working word: "*(chapter 2, Section 2.5:
  both were deleted, and the keyed exercises that exercise the objective
  were moved under it instead)*".
- "Notation", the inline fraction: "An inline fraction sets its digits at
  13.6 px (measured; `\dfrac` sets them at 19.4 px and pushes the next line
  from 28 to about 45 px away); the pilot's rendered-page readers flagged
  the size three times" (the measurement is already in "The appendices,
  the Knowledge Check quota, and the `\dfrac` watch").
- "Figures", the scaled-down classes: the counts "(281)" on the `<media>`
  and "(352; read since chapter 2)" on the `<figure>`, and "*(chapter 2: a
  flat 26rem cap set the wide ones at a third of native, with 7 px labels;
  browser test)*" (both already in Sections 2.1–2.4).
- "Appendices": "The run that authored them is in
  `docs/history/chemistry.md`."
- "Still open", the browser test of a typed formula: "*(chapter 2,
  Sections 2.5–2.6)*".

#### From `run.md`, the anecdotes after its rules

Most of these are already told in the run entries above; they are kept here
word for word as `run.md` had them.

- §0, the parent's notes: "The pilot's claim-pass reader grepped the scratchpad for a phrase, hit the parent's notes, and read the parent's five leads; it said so, and its agreement on four of them was no longer blind."
- §0, rulings against the lints: "Two pilot rulings — "`\dfrac` for inline fractions", "numbers grouped as the source prints them" — contradicted lint errors that already existed … and cost a fixer round-trip each." and "Section 2.7's ruling "close the stem ‘Type the dot as a period, as in CuSO4.5H2O.’" came with a new lint that required the sentence, and the ASCII-chemistry lint refused it; the author found out, not the parent."
- §0, sweeping a promoted rule: "The hint rule was written from 1.5's hints, and 1.5 still carried them, word for word, when the chapter was "done"."
- §0, the ledger snapshot: "*(Sections 2.5–2.6: a snapshot taken before the merge carried nothing, and four hashes were remapped by script)*"
- §0, fixers and hashes: "The pilot's brief said a hint-only edit kept its hash, and one fixer filed 9 results for 46 re-hashed items."
- §0, gates as each page lands: "Three of chapter 2's four gate lessons (a "repeat [Exercise N]" stem, a name with a drawing, a varying answer given part by part) were found this way while the authors were still working, and each was a gate taught a form, with a test, before its page's checker reported."
- §0, placeholders: "*(Sections 2.5–2.6)* … 2.3 said "the periodic table in a later section" and its footer gave the reason "not yet on this site" until 2.5 landed."
- §0, hand-built probe items: "Four gate gaps of 2.5–2.6 showed only that way: a link's path counted as stem words, a formula after a colon, an option that prints its second name in parentheses, an answer in the glossary's other word."
- §1 step 4, shapes flags: "(chapter 2 had two: 2.7's "AIF₃·3H₂O" with a capital I for the l, and a simulation answer that offers two symbols joined by "or")"
- §1 step 6a, why the probe: "before chapter 2 they could not read a part that is only an image or a nuclide symbol, and about a hundred keyed parts of the book were read as ANOTHER exercise (one part under two lead-ins; a charge's sign; a lead-in that prints a sibling's part)."
- §2, build-map: "— chapter 2's first two checkers compared their pages by hand for that reason."
- §2, rendered-page reading: "Section 2.7's found that the formula field's own typing example was the key of an item on the page — the reader reads the widgets' words, not only the page's"
- §2, provisional rulings: "the pilot's 177.66 °F stood on the parent's ruling and fell to the consistency reader's comparison with Section 1.5's rules and the sibling keys."
- §2, citations: "*(Section 2.7: an IUPAC table cited for the opposite of what it says)*"
- §2, the fix check: "Chapter 2's found ten: a rubric its own sample answer could not meet, a hint that pointed at the row printing the whole answer, a Source note on the wrong side of its figure."
- §2, before the solve: "The pilot ran the two extra readings after its solve, and 131 items re-hashed."

#### What the kit's runs cost

From `run.md`, "What a chapter cost".

Chapter 6 (five sections, 96 items; wall time about seven hours of work across
a usage-limit pause): authors 365k, 297k, 436k, 349k, and 334k tokens each
across all rounds (6.1 to 6.5); checkers 208k, 153k, 250k, 197k, and 187k; claim
pass 257k; second reader 160k; consistency reader 317k; fix checker 251k; four
rendered-page readers 213k, 219k, 217k, and 197k; blind solver 161k. Before and
during the wave, the grader-and-gates agent 569k (five rounds). Clerks: 66k
(landing), 142k (run facts), and the errata and pins clerks.

Chapter 5 (three sections, 77 items; wall time about five and a half hours):
authors 344k, 383k, and 467k tokens each across all rounds (5.1 to 5.3);
checkers 237k, 227k, and 259k; claim pass 226k; consistency reader 277k; fix
checker 206k; two rendered-page readers 170k and 180k; blind solver 154k and a
four-item re-solve 108k. Before the wave, the grader-and-gates agent 399k (two
rounds). Clerks: 57k (landing), 118k (run facts), 252k (errata, two rounds).

Chapter 4 (five sections, 182 items; wall time not measured): authors 276k,
362k, 323k, 308k, and 300k tokens each across three rounds (4.1 to 4.5);
checkers 187k, 257k, 177k, 170k, and 178k; claim pass 190k; consistency
reader 286k; five rendered-page readers 148k, 160k, 148k, 146k, and 196k;
fix checker 206k; blind solver 177k. Before the wave: gates agent 413k (two
later tasks included), grader agent 200k (three tasks), band agent 129k.
Hardening agent 192k. Clerks: 90k (run facts), 207k (errata), 81k
(lessons).

Chapter 3 (four sections, 138 items; wall time not measured): authors 336k, 287k, 290k, and 273k tokens each
across all rounds (3.1 to 3.4); checkers 226k, 173k, 197k, and 174k; the
gate-teaching agent 157k; claim pass 171k; consistency reader 271k; three
rendered-page readers 200k, 185k, and 157k; fix checker 217k; blind solver
149k; clerks 84k (facts), 54k (landing), and 233k (errata).

Chapter 2, Sections 2.1–2.4 (four sections, 87 items, about three and a
half hours of wall time): authors 200–295k tokens each across three
rounds; checkers 150–210k; claim pass 175k; consistency reader 210k; three
rendered-page readers 135–180k; fix checker 165k; blind solver 127k; two
clerks 80k and 150k.

Chapter 2, Sections 2.5–2.6 (two sections, 79 items, about two hours of
work): authors about 265k tokens each across three rounds; checkers 178k
each; claim pass 119k; consistency reader 224k; one rendered-page reader
for both pages 233k; fix checker 139k; blind solver 103k; four clerks 53k
to 139k.

Chapter 2, Section 2.7 (one section, 48 items, about two hours of work): the
author 269k tokens across four rounds; checker 198k; claim pass 108k;
consistency reader 171k; rendered-page reader 157k; fix checker 134k;
blind solver 79k; two clerks 111k and about 60k. With one module the
parent wrote the run facts, the landing and cover lines, the pins, and
the decisions entries itself.

Chapter 1, six sections, measured where known:

Extra readings: five rendered-page readers at 150–170k tokens each; one
consistency reader at about 210k; six fixers at 75–160k; one fix checker.
The consistency reader found more per token than any other reading of the
pilot — the rulebook contradicting itself, a key against another section's
rule, a leak visible only by contrast — and it is the one that recurs.

## Chapter 3 (November 11, 2026)

Derek: "Let's continue authoring Chapter 3 Chemistry, using opus
subagents". The parent took it as the whole chapter in one run, Sections
3.1 to 3.4 (modules m68700, m68702, m68703, m68704; the landing is
m68699), the first Chemistry chapter authored in one wave since chapter 1.
HEAD at the start was af9bcd72 with a green baseline; the last erratum was
2976, so the run began at 2977. Mid-run Derek overruled the parent's first
ruling on answer keys computed from finer atomic masses; that became a new
grading token (decision 1 below).

### Shape

Prep: baseline green; 41 images vendored; PDF pages 129 to 168 (the
folio = index − 14 offset holds) and key pages 1138 and 1139; inventory,
keys, shapes (no flags; four image-only parts in 3.1), and the gate probe
(117 keyed units, 0 findings, which it later turned out to owe to three
shapes it never built as a page carries them). A Sonnet clerk drafted the
run facts' tables and another the landing; the landing clerk's report came
back as the single word "placeholder" after 21 seconds, and the parent
read the file on disk, rewrote the four Sections lines from the objectives,
and wrote the picture's alt text.

Four Opus authors at once, one per section; four Opus checkers as each
reported; one Opus agent that taught the source gates three shapes while
the authors converted; then the claim pass and the consistency reader
together, and three rendered-page readers (3.1; 3.2 with 3.4; 3.3); one
rulings round (`rulings.md`, probed against the lints before it was sent);
an Opus fix checker; the blind solve (a fresh Fable solver, 131 items);
a Sonnet errata clerk and this history clerk. Wall time was not measured.
No usage-limit pause.

### What the run holds

Four pages and a landing, 138 items: 3.1 holds 62 (53 Practice, 9 Check
Your Learning), 3.2 holds 20 (13 and 7), 3.3 holds 42 (34, of which 2 are
added text recalls, and 8), 3.4 holds 14 (9, of which 2 are added multiple
choices, and 5). 131 are auto-graded items and went through the solve.
40 keyed exercises carried (16, 6, 12, 6) and 40 unkeyed were omitted
(15, 6, 13, 6). 3.1 carries 23 figures (9 captioned, 10 in worked examples,
4 in the molecular-mass exercise); every alt was rewritten from the
artwork. Errata 2977–3001 (25 entries), 8 decisions entries, and 2
disclosed-deviation lines. Pins 791 to 795 sections, chemistry 13 to 17.

1. **The band** (Derek, November 11, 2026). Several exercise keys of 3.1
   were computed from atomic masses with more digits than the book's own
   periodic table prints (the P₄ key is 123.896 amu; the table gives
   4 × 30.97 = 123.88). The parent's first ruling re-computed such keys to
   the table, with a Source note and an erratum for each. Derek overruled
   it: "A tolerance is needed with either table, so more digits buys you
   nothing"; the band must be "wider than rounding noise but narrower than
   the smallest real mistake" (one hydrogen miscounted, 1.008 amu); 0.05%
   for formula masses; later multi-step chapters 0.5 to 1%; "a per-exercise
   or per-section setting with a chapter default, not one global number";
   "A tolerance doesn't grade significant figures"; the source's values
   restored as the keys, one note in place of the per-exercise errata, the
   playbook amended. Built as the token `tolerance:<p>%`: alone (figures
   not graded) on a formula or molar mass asked for itself where the key
   shows a place the table does not print, 19 items of 3.1; beside
   `sig-figs:<n>`, in the allowance's place, where the count can still be
   asked: the silicon mass in zircon (3.1), the percent of nitrogen in NH₃
   (3.2, where the body itself works 82.27), and 3.59's volume (3.3). The
   grader refuses more than 2%. One Source note under `## Practice` on 3.1,
   one sentence after the exercise on 3.2, one erratum (2985) for all
   nineteen.
2. **Two keys corrected**, both disclosed deviations: 3.25's three
   aluminum masses (four figures from three-figure data; one of them
   follows from no set of masses; the gaps, 0.16% and 0.09%, are outside
   the band, so arithmetic rather than table noise; keyed to three figures
   by the table, erratum 2987), and 3.51(d)'s moles (an exact tie, where
   Section 1.5's half-to-even rule and the source's half-up print differ,
   erratum 2998).
3. **3.59** keys a volume the stem's own rounded numbers miss by a unit in
   the last place. First ruled corrected, then restored to the source's key
   after the consistency reader set it beside 3.63(b), which gives the
   volume as data: the source built the stem from the answer and rounded.
   The band takes it; erratum 2999; the footer says the later stem states
   the volume.
4. **Claims.** Corrected in place with a Source note: the Key terms mole
   and Avogadro's number (to the body's own 2019 definition; one note after
   the Key terms list covers the Summary too), saccharin's atom count
   (9.17 to 9.20 × 10²⁰), "bacterial" fermentation to yeast, nicotine's
   8.641 and 7.008, 0.285 mol H, "/g solution" to "/100 g solution". Kept as
   printed with a note: argon in a liter of air (NASA's figures), the
   potassium "estimated average requirement" (a paraphrase of the National
   Academies' 2019 finding and its adequate intakes), CoCl₂ printed as
   128.9 g/mol. Kept as printed inside the band, no note: 81.13, 180.159,
   176.124. Eighteen further claims are logged as reviewed and not errata.
5. **3.31** is carried as one multiple choice of five samples (a
   superlative has one answer); its "CH₄ (16.06 g/mol)" is corrected to
   16.04. The source drawing's "Cl" in 3.5(c) reads "CI", so that stem
   names the three elements.
6. **The solve:** 128 agree, 0 disagree, 3 also-defensible, each
   adjudicated: the nitrogen item's 82.25 against the body's 82.27 (the
   band takes all three); 17.75 against 17.76 (`last-digit:1`); the tie's
   other rounding, which changed the form after the solve (see below).

### What each reading found

| Reading | Found | Would another have found it? |
|---|---|---|
| Parent's gate probe, before the wave | 117 units, 0 findings | no: it built none of three shapes as a page carries them (below) |
| Authors' ledgers | the finer-mass keys with their percent gaps; 3.25's arithmetic; 3.59; the tie; CoCl₂ 128.9; typos ("chloride atom", "approximately18", "Scientific Report", "alchol", "Assuming a convenient, a", "as demonstrated ."); four source alts that contradict their images | the claim pass, for the typos and some numbers |
| Checkers (4) | 3.1: 1 hard (aluminum), 6 soft; 3.2: 4 defects (a hint pointing at the body passage that works the item's own question; a hand-set ion in an `answerDisplay`), 8 concerns; 3.3: 6 hard (two replay failures `verify-section` does not run; the stem's own 0.500 graded correct under `last-digit:1`); 3.4: 2 (both footer clauses), every key right | the aluminum arithmetic: no |
| Claim pass | 13 findings (F1–F13) and 6 suspicions from memory, none opened | no |
| Consistency reader | 13 findings: hints sending the learner to "the molar mass from the periodic table" for a compound (18 hints on 3.3–3.4); `*M*` in 22 fill-in stems reaching the accessible name as asterisks; "homogenous" accepted against erratum 2882; 3.63(b) printing 3.59's value; 1000 ungrouped under the lint's year exemption; the playbook's CoCl₂ example contradicting its own last-digit rule; "fill-ins" against "fill-in items" | 3.59 against 3.63(b): no |
| Rendered-page readers (3) | 3.1: 0 wrong, 1 misleading (the "Cl"), 3 cosmetic; 3.2 with 3.4: 0, 1, 5, and 2 `\dfrac` entries; 3.3: 0, 2, 2: aligned fraction rows touching; a Source note the parent had worded falsely for the tie; 3.2's item revealing 82.24 under a body that prints 82.27; a tilde breaking from its math span; Source notes equally far from the card above and below | no |
| Fix checker | 10 wording changes and 5 judgment calls; no key wrong; the potassium note's quotation could not be found word for word (now a paraphrase); the yeast note named carbon dioxide before the example derives it | the quotation: no |
| Blind solve | 128 agree, 0 disagree, 3 also-defensible; answered the nineteen band items from Appendix A and all graded correct; its flag on the tie changed the form | the flag: no |

### Gates, tools, tests

- **`tolerance:<p>%`**: `significant-figures.mjs` (`withinPercent`, exact
  BigInt; `compareMeasured` with no figures), `check-answer.mjs` (the token,
  `measuredSpec`, feedback with no count, `measuredKeyProblem`: alone or
  beside `sig-figs`, never with `last-digit`, at most 2%), `fillin.html`,
  `fill-in.js` (a tolerance field keeps typed exponent digits), tests in
  four files, `math.md`'s token row, `chemistry.md`.
- **Three shapes the source gates could not read**, taught by an Opus
  agent, each with a test. Two formulas each labelled after it
  ("Mg₃Si₂H₃O₈ (empirical formula), Mg₆Si₄H₆O₁₆ (molecular formula)":
  `labelledFormulas`). A Check Your Learning that restates the previous
  one's data and so read as the previous one (`lastAsk` in `unitFor`). A
  lettered exercise answered by naming one part, carried as one multiple
  choice (`closedSet`, `choiceLabels`, coverage match "choices"). The
  probe (`chemistry-gate-probe.mjs`) now builds them as a page does and
  prints 0 findings on chapter 3; the book-wide total stays 22.
- **Lint:** "D5W" was read as a formula (deuterium, tungsten); `/^D\d+W$/`
  is exempt, with a test. Lint tests for the tolerance token.
- **`verify:replay`:** one `SOUND_COINCIDENCES` entry (3.47(b): 98.0 g of
  H₃PO₄ in 1.00 L is 1.00 M).
- **`speakable-label.mjs`:** `unemphasized()`, so Markdown emphasis markers
  no longer reach a fill-in's accessible name; test.
- **Baselines:** replayed 8,478 to 8,652; exercises 17,709 to 17,847;
  confirmed source keys 7,119 to 7,248; covered 4,259 to 4,372.
  `DISCLOSED_DEVIATIONS` lines for the aluminum item (2987) and the tie
  (2998). The upstream-history audit and the provenance pin failed
  between the pages and the close-out, as expected, and are green after
  `source:history` and the pin edit.
- Landing and cover: the chapter moved to `## Chapters`; the claim-pass
  ledger's row added; links checked (chapter 3 has one 403, a bot wall at
  `openstax.org/l/16BRAINInit`).

Two more came at close-out. `npm run check:build` aborted: the build audit
(`tools/build/audit-build.mjs`) ran out of heap at Node's default limit —
it held the site's 395 MB of HTML three times over and joined each set
into one string, a peak of 5.1 GB, and chapter 3 took it past 4.3 GB. It
now reads each built file once and tests it where it sits (peak 1.7 GB).
And the test "the corpus carries no undisclosed departure from a source
key" counted disclosed ITEMS against listed deviations, which the three
aluminum fill-ins under one deviation broke; the gate now reports how many
deviations were exercised and the test compares that. The test that every
corrected Chemistry key has its Source note accepts "the answers graded"
as well as "the answer graded".

### Rulings, now in the playbook

"Numeric keys → The source's value is the key": the band, when it stands
alone and when beside `sig-figs`, the chapter default and how it is set,
a gap outside the band as arithmetic, the same band for a key its own
rounded stem misses, a worked example's value inside the band left alone,
the page saying so once. `last-digit:0` where `1` would grade a number
the stem prints. Every stem ends with its punctuation. A hint never points
at a body passage that works the item's own question and never at "the
molar mass from the periodic table" for a compound. `\\[6pt]` between
fraction rows of an aligned display. `*M*` for the molar unit in prose and
`$M$` for the symbol; `\mu\text{g}` in math (KaTeX strict refuses
`\text{µg}`); a tilde inside its math span; 1000 grouped. Footers say
"fill-ins". The CoCl₂ example's allowance. "How Sciences Interconnect"
confirmed from 3.1. Briefs: the author's (a real-world number in an
example stem is a claim; re-run every intermediate), the checker's (run
`verify:replay` on the page; atomic masses from the book's table), the
solve's (how a band item is answered).

### What the process got wrong

- The first ruling on the finer-mass keys treated table noise as a source
  defect and would have printed four per-exercise Source notes and
  corrected nineteen keys; two authors had to be told mid-flight.
- The tie's Source note said the source's value "does not follow from the
  stem's data", true of the note it was copied from and false there; the
  rendered-page reader caught it.
- An `accept` member was allowed against the book's own erratum
  ("homogenous", 2882): a ruling not checked against the errata log; the
  consistency reader caught it.
- 3.59's corrected key was ruled before the consistency reader had read
  the module, against the recipe's "provisional until"; overturned.
- Decision 5 of the run facts told an author to add a unit sentence the
  playbook forbids, the stem already naming mg/dL; the author and the
  checker both objected.
- A quotation was accepted because the claim pass said it had opened the
  source; the fix checker could not find the sentence word for word.
  "No quotation, no citation" needs the parent to see the words.
- The tie's allowance went 1, 0, 1: the parent ruled 1, accepted the
  consistency reader's 0 by a precedent (1.6's 177.7 °F) that was not a
  tie, and the blind solver's flag brought it back.
- The landing clerk's empty report was not noticed as a failure until the
  file was read; a 21-second clerk is checked on disk.

### Not acted on

- Source notes sit equally far from the item above and the item below and
  can read as a preface to the next item (site-wide CSS). Put to Derek.
- The digit-grouping lint's 1000–2099 year exemption lets `1000\ \text{mL}`
  through corpus-wide (1.6 line 101 has one); narrowing it touches the math
  books and is measured later.
- No gate recomputes a molar-mass key from Appendix A; no lint holds the
  stem-final period, the compound-molar-mass hint, or a Source note's two
  fixed forms.
- The glycine flow chart renders about 1.6 times larger than its siblings
  (the source gives it no scaled-down class).
- The claim pass's five suspicions from memory (the Cullinan diamond's
  date and mass, "household ammonia" at 0.50 M, the "minimum lethal
  concentration" of NaCN, inline filters and fluoride, the lead action
  level) and the brain caption (1.5 kg in 1.1 L): no source opened; kept
  as printed.
- The errata clerk's three unnumbered candidates: a table `summary`
  attribute that misprints Cl as 33.45, the bleach alt, and the HCl flow
  chart's raster "HCI".
- Whether an item under a band should say so beside the field rather than
  once per page.

Chapter 3 closes Knowledge Check block 1 (chapters 1–3), so the next run is
that check, and its parent writes the Chemistry Knowledge Check kit first.

## Knowledge Check 1: the kit, and chapters 1–3 (November 11, 2026)

Derek: "Let's make a plan for the knowledge check playbook in chemistry".
The plan was written in plan mode and approved; HEAD at the start was
4e4e8770 with a green baseline, and the last erratum was 3001. Two commits:
the kit (d9477140), then the check.

### What Derek decided

- **Where a check's items come from** — the question the playbook had left
  as the parent's working rule since November 10. Put to him with three
  options (worked examples; the unkeyed exercises with keys derived three
  times, for checks only; examples first with unkeyed exercises as a
  fallback), he chose the first: **a calculation item re-asks a worked
  example's own question and keys the answer its Solution prints; the rest
  are written from the module text.** The November 9 ruling that a graded
  item needs a source key stands whole.
- **Scope**: the playbook edition and the kit, then block 1 in the same run
  as the pilot that confirms them.

### The kit

- `docs/knowledge-check-playbook-chemistry.md`, a third edition beside the
  math and life-sciences ones (the core's §3 heading became "Knowledge
  Checks (every edition)"). `docs/subjects/chemistry.md` "Knowledge checks"
  keeps the three decisions and points at it.
- `docs/briefs/chemistry/kc-run.md` and `kc-prompts/` (author, checker,
  sweep, second checker, solver), from the Anatomy and Physiology kit.
- **A gate for the item source**, `npm run kc -- sources`
  (`verify:kc-sources`, in `npm test`): on a keyed-only book's check every
  fill-in, formula, and equation must be a worked example's question, from
  the module of the `### N.M` section it sits under, keyed with what that
  example's Solution prints, to the figures a declared `sig-figs` names,
  and never a number the question itself gives. `tools/lib/keyed-units.mjs`
  reads a worked example as a unit (`workedExamples`,
  `workedExampleUnits`), so the section gates' own judge reads it. A
  Solution is prose, so a formula is looked for as any run of its words.
  Probed before any author started: eight right items confirmed, six
  planted wrong ones refused.
- `npm run kc -- examples` lists a block's worked examples from the CNXML;
  `kc leaks` now reads a fill-in's key as a number another item prints
  (3.3's examples chain: one answers 0.839 *M* and a later one takes it as
  its datum).
- The solver's rule: a masked section page prints every worked example
  solved, so the solver works each fill-in from the stem and Appendix A
  before it opens a page, and then says whether the page's value agrees.

### The check

`content/physical-sciences/chemistry/knowledge-check-01-03.md`, "Knowledge
Check: Chapters 1–3", weight 4 (the appendices moved to 5). Forty-five
items over seventeen sections: 11 fill-ins, 11 text-ins, 18 multiple
choices, 5 selfchecks. Seventeen re-ask a worked example — the 11
fill-ins, 2 formulas, 2 multiple choices, 2 names — and 28 are written.
Six sections stand at two items (1.3, 1.4, 2.1, 2.2, 2.4, 3.2), the rest
at three. No item needed a `tolerance` band.

Shape: the parent's run facts ruled each of the block's 51 worked examples
usable or not before the wave (about twenty out: a Source note inside, an
answer printed only in an image, data in a picture, a simulation, a datum
that is another example's answer). Three Opus authors, one per chapter,
wrote 50 items; three Opus checkers; the parent's read; one Opus sweep
over all three blocks; a second checker over fourteen replacements; a
fresh Fable solver.

- **Checkers**: every item answered key-covered, every number run again,
  no disagreement with a key or a Solution. Two hard findings, both in
  chapter 2 and both also found by the parent's read: 2.3's iodine-anion
  example and 2.4's glucose example are each asked again by a keyed
  exercise of the same page, same substance and same answer. Seventeen
  soft. The chapter 1 checker found that 1.6's fuel-economy example needs
  conversion factors a check page does not show.
- **Sweep**: 6 hard and 13 soft on 49 items, none of which a checker had
  found, all page-side. Five accepted: the 1.3 Practice self-check stem
  that rules out both distractors of an intensive-property item; the 2.1
  page's rubrics printing the Dalton-postulates clauses; two 2.2
  self-check stems stating the alpha-particle fact; the 2.4 and 3.1
  objective headings that pair a key with its fact. One rejected, which
  settled a rule: the sweep read "the page corrected its working" for the
  whole 1.6 body-temperature example, and the rule is judged for the part
  the item asks (the page rewrote the kelvin line; the item asks the
  Fahrenheit answer).
- **Second checker**: 5 of 14 replacements failed — two distractors from
  one module clause, a rubric clause the 2.4 page's hints print four
  times, a clause a Practice stem prints, option prefixes that answer
  "hydrogen-2". Three items were dropped, one became a text-in, and for
  2.4 the parent ruled that the molecular-and-empirical-formula objective
  has nothing unspent, so its two items both serve the other objective.
- **Blind solve**: 40 graded items, 38 agree, 0 disagree, 2 flagged as
  also defensible and adjudicated as form variants the grader already
  takes ("halogens"; "aqueous solution"). All 11 fill-ins were settled in
  the solver's first pass, from the stem and Appendix A, and every worked
  value on the pages agreed.

Parent rulings, each now in the edition's "A usable example": no table the
check page lacks; not an example a section-page item asks again; a page
correction judged for the part the item asks, with 3.4's hydrochloric-acid
example out (the page corrected its working, erratum 3000); a pointer to a
picture or a table that gives the question nothing it lacks is dropped.

No new erratum. The solver's note that 3.4's spinal-fluid equation lacks
"× 100%" was read against the CNXML and is not a defect: a ratio of
0.00075 is 0.075 percent.

### A defect the solver found in the solve tooling

The masked 2.6 page the solver read still printed eight keys and hints:
`maskKeys` copied the body of a `followup` wrapper out whole, so every
item inside one reached a blind solver unmasked. 2.6 is the only page in
the corpus with the wrapper, and its eight ion-symbol text-ins had been
"solved" that way in chapter 2's run. Fixed in `tools/lib/content.mjs`
(`WRAPPER_SHORTCODES`, masked through) with a test; the eight items were
solved again by a fresh solver on a properly masked page, 8 of 8 agreeing,
and their ledger records carry that solve.

### What was left

- `kc sources` refuses a count the Solution writes as "the number of
  electrons is 54" after an earlier "53 electrons" (the judge reads a
  number before its name). It errs toward refusing. **Ruled to stay
  (November 11, 2026)**: in the whole book that wording settles a keyed
  count in one worked example, 2.3's iodine anion, which is out anyway
  because a section item asks it again. A form nothing will use only
  loosens the gate; do not build it.
- 2.4 is the check's thinnest section: two two-option multiple choices.
- How a check item reaches an appendix other than A: **it never does
  (November 11, 2026)**. "No table, no item" holds for every block. The
  source's 21 chapters were counted that day, every `<example>` and
  `<exercise>`, by its links and its "Appendix X": 18 of 289 worked
  examples and 18 of 873 keyed exercises send the reader to an appendix
  other than A (16 and 18 of them to a table, C–M; two examples to
  Appendix B's mathematics) — none in chapter 4; one example and five
  keyed exercises in chapter 5, all Appendix G; then chapters 7, 9, and
  13–19. So block 2 does not
  meet the question; the section pages do, from chapter 5 ("A table
  appendix opens in place", below).
- Both rulings on corrected examples stand as the edition states them: a
  correction is judged for the part the item asks, and 3.4's
  hydrochloric-acid example stays out, because the page changed a quantity
  in its working (per gram to per 100 g), which is not a misspelling. 3.4
  carries three check items without it.

Costs, in subagent tokens: authors 252, 303, and 268 thousand over three
rounds of fixes; checkers 148, 169, and 138; the sweep 195 (22 minutes,
the slowest agent); the second checker 149; the solver 300; the eight-item
re-solve 66.

## A table appendix opens in place (November 11, 2026)

Open since the periodic table became a control: how an item reaches any
other appendix. Page skeleton rule 9 links the item to the appendix page,
and following the link leaves the page and the answers typed on it. Asked
with three forms in front of him — the table opened over the page with a
filter, the link opened in a new tab, or typed answers kept across pages so
that leaving costs nothing — **Derek chose the first.**

What the count said first (every `<example>` and `<exercise>` of the 21
chapters, by its links and its "Appendix X"): 18 worked examples and 18
keyed exercises send the reader to an appendix other than A, none before
chapter 5. So the checks never need one ("Knowledge Check 1", "What was
left"), and the section pages need it for about three dozen items, the
first six in chapter 5 and all of those Appendix G.

What was built:

- `lookup: true` on Appendices C–M (the validator: an appendix page, with
  a table). Not A, which is the reference figure, and not B, which is
  prose a reader goes to.
- `layouts/_partials/utils/reference-lookups.html` and one line of JSON
  from `toc.html`, on a section page only — the test
  `reference-figure.html` uses for a body link to the periodic table. No
  link render hook: the theme owns that template.
- `assets/js/reference-lookup.js`: the link fetches the appendix page once
  per page view and shows its content, without the heading and the
  attribution footer, in a modal `<dialog>` at a reading width. The
  heading row sticks to the top of the dialog's own scroller. Filter text
  and scroll are kept per appendix until the page unloads. Escape closes
  and keeps the filter. A long table opens with the cursor in the filter;
  a short one (under 13 rows) opens on the table, so a phone's keyboard
  does not cover it. A failed fetch follows the link.
- `assets/js/lib/shared/lookup-filter.mjs`, the filter as a pure function
  with tests: NFKC folding (so `SiF4` finds SiF₄ and `Al3+` finds Al³⁺), a
  hyphen for the minus sign, `x` for ×, a full stop for the hydrate dot; a
  capital read as typed where that finds anything, so `Co` is cobalt and
  `CO` is carbon monoxide; a group's name listing its whole group.
- Tests: the filter's unit tests; a browser test that types an answer,
  opens Appendix G, filters it, closes, and finds the answer and the
  filter kept, then a phone width, a short table, and a fetch that fails;
  an accessibility test from the keyboard with axe in both themes. No
  section links a table appendix yet, so both browser tests add the link
  to a real section page at run time; chapter 5's run replaces it with a
  real exercise (`docs/briefs/chemistry/run.md`, step 6).

What the first browser run found: the scroll position was read at the
dialog's `close` event, when the dialog is no longer drawn and its scroll
reads zero. It is recorded as the reader scrolls instead; the test reopens
the dialog and reads it.

Not built: a first column that stays while a wide table scrolls sideways
on a phone. With the filter down to a row or two the name is beside the
values; revisit if chapter 5's pages say otherwise.

### The browser suite's port

The suite refused to start during Knowledge Check 1 because a
`serve-public` from that morning still held port 1315, and the suite does
not attach to a server it did not start. 1315 is where every session
serves the build for screenshots, render readers, and review, so the
collision was going to recur. The suite now serves on 1319
(`playwright.config.mjs`; a documentation test holds the two ports apart),
and a server left on 1315 is harmless.

## Chapter 4 (November 12, 2026)

Derek: "Let's continue and author chapter 4 of chemistry". One run,
Sections 4.1 to 4.5 (modules m68709, m68710, m68713, m68714, m68716; the
landing is m68730). HEAD at the start was e667bcbd with a green baseline;
the last erratum was 3001, so the run began at 3002. The run paused once at
the usage limit, in close-out after the blind solve, and resumed in the same
session; the two agents still running at the pause (the hardening agent and
the lessons clerk) had finished, and their work was read on disk before it
was used.

### Shape

Prep: baseline green; 30 images vendored; PDF indexes 169 to 218 (the
folio = index − 14 offset holds) and key pages 1139 and 1140 — but the
parent first rendered only to index 204, taking the last printed folio for
an index, and the 4.1 author worked without the printed exercise pages
until the parent rendered 205 to 218; inventory, keys, shapes (12 flags, 2
notes), and the gate probe (129 units, 0 findings). A Sonnet clerk drafted
the run facts' tables; the parent wrote the landing and its alt.

Before the wave, three Opus agents: a grader agent (the first equation
`textin`s of the book), a gates agent (a hand-built probe of 19 shapes as
the page carries them), and a band agent (56 numeric keys computed three
ways). Then five Opus authors at once; five Opus checkers as each
reported; the claim pass and the consistency reader together with five
rendered-page readers (4.2's 31 tiles split between two); one rulings round
(`rulings.md`, lint-checked on a scratch copy); an Opus fix checker, whose
accepted changes the parent applied; the blind solve (a fresh Fable solver,
165 items); an Opus hardening agent; Sonnet clerks for the errata block and
for placing the lesson sentences. Wall time was not measured.

### What the run holds

Five pages and a landing, 182 items: 4.1 holds 33 (29 Practice, 4 Check
Your Learning; 30 equation and 2 formula text-ins, 1 self-check), 4.2 holds
78, 4.3 holds 41, 4.4 holds 15, 4.5 holds 15. 165 are auto-graded items
and went through the solve. 48 keyed exercises carried and 48 unkeyed were
omitted (6 and 5, 15 and 15, 9 and 9, 9 and 9, 9 and 9). Added items: 4.2
two, 4.3 two, 4.5 two; none on 4.1 or 4.4. Fifteen Source notes (landing 1,
4.1 one, 4.2 four, 4.3 four, 4.4 one, 4.5 four). Errata 3002–3031 (30
entries), 7 decisions entries, and 7 disclosed-deviation lines (six keys,
one self-check solution). Pins 795 to 800 sections, chemistry 17 to 22.
Baselines: keys 7,248 to 7,419, coverage 4,372 to 4,501, replay 8,685 to
8,864, exercises 17,892 to 18,074.

### What each reading found

- Checkers: every key agreed with the source on all five pages (33, 68, 37,
  11, and 13 graded keys); the defects were leaks and hints. 4.1: two
  cross-group overlaps undisclosed and a hint that differed on the one part
  with no spectator ion. 4.2: an open "Which reactant is the oxidant?"
  answering the yes/no above it, an added recall keyed on a working word of
  the page's own stems, three hints that decided the item. 4.3: a
  miscounted footer clause and an alt without the second airbag. 4.4: a
  display equation that dropped its percent sign. 4.5: a third added item
  beyond the floor.
- Claim pass: 12 findings (the Na₂CO₃ + H₂S answer against Appendix H;
  "normal serum"; the oxalic acid 0.2648; a chloride 23.76 that this book's
  table returns, rejected; ibuprofen's date; the Space Launch System; Great
  Lakes Chemical; the pickling box; the strong-base glossary entry; a
  credit; K[Ag(CN)₂] as an ore; the fluoride row). Four rested on memory;
  the parent opened a source for each it corrected.
- Consistency reader: 10 findings; the chief one, "one unit off because
  something was rounded mid-way", graded five ways across 4.3 to 4.5 and
  not at all on two like items; a key printed in a footer; a unit inside a
  stem's math; three forms of Practice heading.
- Rendered-page readers: nothing wrong; the equation typing guide broke
  inside its own arrow on all 60 equation fields; nothing said how to type
  an electron; three inline stem equations ran past the card; the gold
  exercise's address was auto-linked to a dead page.
- Fix check: 3 changes and 6 judgment calls; the ibuprofen Source note sat
  before the figure its paragraph introduces.
- Blind solve: 165 items, 156 agree, 0 disagree, 9 also defensible, all
  adjudicated with no key changed: H⁺ for H₃O⁺ (graded correct), 2P₂O₅ for
  P₄O₁₀ (refused: the chapter prints only P₄O₁₀), the acid form of two
  basic half-reactions (the form message), plain 680 and 220 and 0.0034 and
  0.0096 (graded correct), and gallium by difference, 22.9 for 22.4 (a
  Source note now names the route).

### Gates, tools, tests

- **`check-chem.mjs`**: H⁺ and H₃O⁺ are one hydrogen ion (each H₃O⁺ read as
  H⁺ + H₂O, only water cancelled); a balanced response in the other medium
  is `form` with a message; in an equation a group taken once is only
  grouping (`[Ag(NH₃)₂]⁺`); the "not balanced" message no longer goes to a
  balanced response; state symbols in capitals read. The first version
  flattened groups in `chemCanon` and loosened the Knowledge Check sources
  gate (two tests failed); `chemCanon` is strict again and the leniency
  lives only in equation matching.
- **`keyed-units.mjs`, `verify-source-keys.mjs`,
  `verify-source-coverage.mjs`**: MathML spellings folded (`( a q )`,
  one-symbol runs, a glued coefficient); an answer's several equations each
  held to its own item; two bare formulas held by element; oxidation states
  and mole/gram amounts held by the symbol or formula the closing sentence
  names; roles and the limiting reactant read from sentences; a followup
  required where the further item is a multiple choice; a stem's
  `$\ce{…}$`, whole or split after its arrow, read as the Unicode reaction;
  a self-check model that prints an equation the source does not is a
  divergence. The probe builds multi-key items and reports "swap
  confirmed" (it fires on 8.2 `fs-idm32929264(d)`, for chapter 8's run).
- **Lints** (Chemistry, errors): a half-reaction stem closes "Type an
  electron as e-."; a footer prints no key; a Practice `###` heading ends
  without a period; no unit inside a stem's math after a power of ten.
- **Site:** the typing guide keeps its arrow and each example on one line
  (`text-in.js`, `.ap-textin-example`); an inline formula in an item's
  question that is wider than its card becomes a scrolling block of its own
  (`scrollable-regions.js`, `ap-katex-wide`), decided per formula after
  layout — at 390 px seventeen chapter 4 stems needed it, none at 1280.
- **Tests:** the playbook's grader table is read row by row against
  `checkChem` (16 rows, 30 responses); browser tests for the guide and for
  item-card formulas at 1280, 1100, and 390 px; the Knowledge Check order
  test now expects chapter 4 after the check; `SOUND_COINCIDENCES` gained
  4.2's iron–cerium equation, already balanced as printed.

### Rulings, now in the playbook

The band is `0.2%` and took one item; no allowance is widened for rounding
at each step; a key the source's own arithmetic misrounds is corrected and
takes `last-digit:1`; a key with fewer figures than its data; a source
equation the book's own tables refute becomes a self-check; a reaction in a
fill-in or multiple-choice stem is `$\ce{…}$`, split after its arrow when
too long; a half-reaction's closing sentence; oxidation states as signed
whole numbers by element symbol; several equations in one answer; a type of
reaction from the section's own objective; a shared hint; a footer prints
no key; a Key equation takes the body's form; a selfcheck that answers a
later item goes after it; a Check Your Learning repeated by a keyed
exercise; a plain-text address that no longer answers.

### What the process got wrong

- The PDF was rendered to the last printed folio, not the last index.
- The parent ruled a Source note onto the oxalic acid Check Your Learning,
  then none, then a corrected key with a note: three rulings on one item
  before the claim pass and the consistency reader had both read it.
- The parent told an author to say in the footer that two items are "keyed
  alike", which hands over the second key; the checker caught it.
- A one-unit allowance was put on a stem-only item (the gallium chloride
  moles), and step rounding was accommodated on some items and not others
  until the consistency reader set them side by side.
- The ruling that set a stem's reaction as `$\ce{…}$` split after its arrow
  passed the lint and lost six items in the coverage gate.
- The first grader change was not retested against the Knowledge Check gate
  that reads `chemCanon`.
- The run-facts wording "keyed 18.86" carried a key into a footer.
- The run facts ruled that the "MgC1₂" misprint needed no Source note; a
  house test (`every corrected key of a Chemistry page has its Source note
  on the page`) failed at close-out, and the note was added to that item
  and to 4.3's sodium nitrate mass, so the pages carry fifteen Source
  notes, not the thirteen first counted.

### Not acted on

- Derek expected a band of 0.5 to 1 percent for multi-step stoichiometry;
  the measurement set 0.2 percent and the rule against step rounding. Put
  to Derek: if step-rounders are to be accepted, 4.5's 35.0 needs
  `last-digit:1`, 4.3's 2762 `last-digit:2`, the acid-rain item `1`, and
  the uranium and dicyanoargentate items the band.
- Grader: a right value typed to one significant figure ("8" for 8.00) is
  plainly incorrect where "8.0" is told to give three figures; `⇌` is
  accepted for a `⟶` key (revisit at chapter 13); a bare `2e` is blamed on
  the arrow; a half-reaction typed without electrons gets no message;
  2P₂O₅ for P₄O₁₀ is refused.
- Site-wide: the period after an inline formula can wrap to the next line
  alone (KaTeX's inline-block bases); the equation guide's example shows no
  charge and no state symbol.
- Practice headings ending in a period outside Chemistry: Biology 2,
  Microbiology 4, Precalculus 9 (the lint is Chemistry-only).
- Source: "feed on starches", K[Ag(CN)₂] as an ore, the fluoride row, Great
  Lakes Chemical's present tense (no source opened; kept as printed); 4.5's
  "What is the molarity?" names no solute; 4.3 asks grams of barium
  peroxide where its siblings ask kilograms (the source's unit).
- No gate compares a display equation with its MathML symbol by symbol
  (4.4's dropped percent sign passed), reads one equation item's stem
  against another item's key, or counts added items beyond the floor.

Most of this list was acted on the same day: "After chapter 4" below.

Next is Chapter 5 (Thermochemistry), then Knowledge Check block 2
(chapters 4–5). Chapter 5 is the first chapter with a link to a table
appendix other than this run's Appendix H citation: its parent follows
`run.md` step 6 for the lookup test.

## After chapter 4: the list of things not acted on (November 12, 2026)

Derek read chapter 4's "Not acted on" list and asked for it to be fixed,
"scientifically accurate and … an easy way for the user to understand and
learn". He confirmed two rulings as they stood — the 0.2 percent band, and
no allowance for rounding at each step — and chose, for the rest: a nudge
for P₂O₅, a nudge now for the wrong arrow, a grader message for a
step-rounder, and the four smaller leftovers (electron messages, the
typing guide's example, two stem wordings, the Great Lakes note). One
session, the `docs/re-review/README.md` loop; no key and no allowance
changed.

### The grader says why

Six cases that were a bare "Not quite" (or, for the arrow, a wrong
"Correct") now carry a sentence. `docs/subjects/chemistry.md` quotes each in
its worked tables and `documentation.test.mjs` holds the tables to the
grader.

- **`8` for the key 8.00** is told to give three significant figures, as
  `8.0` already was: the key's own number with its zeros left off, at any
  count, is `too-few`. Exact equality, so the chapter 1 ruling stands — 90
  against 89.4 is still refused with nothing said.
- **A near miss is still incorrect and is told so**: "Close, but not within
  rounding of the answer. If you rounded partway through, carry the extra
  digits through every step and round only the final result." The zone is
  one unit of the last figure beyond the allowance at two figures, two at
  three or more, three bands under a tolerance, none at one figure. Every
  step-rounding miss the chapter 4 consistency reading recorded lands in
  it (34.9 for 35.0, 73.5 for 73.3 ± 1, 86.53 for 86.56 ± 1, 3.5 × 10⁻³ for
  3.4 × 10⁻³). The sentence names no section: items of chapters 1 and 2
  are graded by the same code and come before Section 3.3.
- **The arrow is part of the equation.** `⇌` typed against a `⟶` key was
  graded correct on all 60 equation items; it is now `form`, told to use a
  single arrow, and a `⇌` key answered with `->` or `=` is told the
  reverse. `chemCanon` joins an equilibrium with `<=>`, so the source-key
  and Knowledge Check gates see the arrow; a `⟶` key's canon string is
  what it was, and nothing re-hashed.
- **A balanced equation with a formula divided through** (P₄ + 5O₂ ⟶
  2P₂O₅ against P₄O₁₀) is `form`: "one formula is an empirical formula …
  Write that substance's molecular formula". An element typed as separate
  atoms (4P, 2O) has its own sentence. Neither names a substance.
- **A bare `2e`** is told to type `e-` (it had been told the line was no
  equation and sent to the arrow), and **a half-reaction with every
  substance and no electrons** is told what is missing.
- The equation field's typing guide shows a charge, a coefficient, a group
  in parentheses, and state symbols: `Cu^2+(aq) + 2OH^-(aq) -> Cu(OH)2(s)`,
  no item's key (the test that holds the guide's examples reads all 60).

### The period after a formula

"…is $x$." could put the period alone on the next line: a browser may
break between an inline-block and the text after it, and every piece of a
KaTeX formula is one. 29,589 of the library's 73,151 inline formulas are
followed by punctuation. The formula and its punctuation are now one
no-wrap span (`docs/architecture.md` has the mechanism: two comments from
the render hook, a partial the two `docs` layouts call, `mathtext` gluing
in place, a `<wbr>` between a formula's pieces so a long one still wraps).

- **The first design failed in the browser and was measured before any
  template was written.** A no-wrap wrapper with wrapping restored on the
  formula inside it leaves every stranded period where it was in Chrome:
  the break after an inline-block is decided by the inline-block's own
  parent. The prototype (DOM edits on the built pages, four widths)
  showed it in a minute.
- A wide stem formula that becomes a scroll block on a phone now scrolls
  together with its question mark; the period had sat alone under the
  block (7 of 12 on 4.3 at 390 px).
- The build audit's new check found what the measured pages had not: three
  Elementary Algebra stems with an apostrophe after a formula ("$b$'s").
- Measured on six pages of four books at 1280, 520, and 390 px: no
  stranded punctuation, the same interior breaks as before, no sideways
  scroll. **Chrome only**: no other engine is installed on this machine.

### Practice headings

The 15 headings ending in a period outside Chemistry (Biology 2,
Microbiology 4, Precalculus 9) lost it, and the rule left the Chemistry
block: an error in every book. Each book's history has a line.

### Source claims: three "from memory" findings, all three defects

Each was opened; none stayed as printed.

| Claim | Opened | On the page | Erratum |
|---|---|---|---|
| 4.2 pickling box: bacteria "feed on starches" | Pérez-Díaz and others, *Frontiers in Microbiology* 14:1210190 (2023): "Fructose and glucose are preferably removed by lactobacilli in cucumber fermentation" | "sugars", with the callout's Source note saying what the source prints | 3032 |
| 4.2 solubility table: every group 2 fluoride insoluble | ATSDR, *Toxicological Profile for Beryllium* (2023), Table 4-2: beryllium fluoride "Very soluble" | row kept (a guideline; an added item quotes it), Source note under the table | 3033 |
| 4.3: "ores such as K[Ag(CN)₂]" | the book's own m68842 (Section 19.1): cyanide forms the soluble dicyanoargentate(I) ion "from silver metal or silver-containing compounds" | both stems read "from its ores as K[Ag(CN)₂]", Source note after the first | 3034 |
| 4.3: "molecules of Zn(CN)₂" | the book's own Section 2.6: "an ionic compound is not made up of single, discrete molecules" | "formula units" in the stem and the answer display | 3035 |
| 4.5: "What is the molarity?" names no solute | the CNXML | the added closing sentence names the calcium hydroxide solution | 3036 |
| 4.2: Great Lakes Chemical, present tense | Chemtura's Form 10-K for 2006: merged with Crompton on July 1, 2005 | stem kept, dated Source note after the item | not an erratum |

The sodium carbonate and hydrogen sulfide self-check (erratum 3007) was
re-derived against Appendix H and stands; its model answer now says why,
in two sentences a chapter 4 learner can follow. It stays a self-check: the
chapter's gas-forming pattern gives the source's wrong products, and a
graded field would mark the learner who follows the chapter wrong. The six
keys that differ from the source were re-derived and stand (the gallium
chloride moles are 1.248, not a rounding tie). Erratum 3015's Local
handling contradicted itself and is rewritten; two headings lacked a blank
line.

### Ledger and gates

Four items re-hashed: the self-check (re-read by the parent) and three
fill-ins whose stems changed, solved blind by a fresh Fable solver on
masked pages — 3 agree, 0 disagree, 0 flagged (5.336 × 10²² and 10.40 from
the table's masses, each one unit from the key and inside its allowance).
`npm test` green; the five baselines did not move (keys 7,419, coverage
4,501, replay 8,864, exercises 18,074). Errata 3032–3036; next free 3037.

### What the process should keep

- **Open the source before close-out, the book's later chapters first**
  (now in `run.md`). Three findings marked "from memory" were left as
  printed at chapter 4's close and were all defects; one needed only a
  grep of the pinned checkout.
- **Prototype a layout fix in the browser before writing it into
  templates.** The plan's CSS would have shipped a fix that fixed nothing.
- **A sabotage must fail for the reason the gate exists.** Editing the
  built stylesheet tripped its integrity check, not the new test; the rule
  was overridden inside the test for one run instead.
- **The first near-miss zone was too generous**: a flat three units called
  10¹¹ close to 10¹². The existing test table caught it.

### Still open

4.3 asks grams of barium peroxide where its siblings ask kilograms (the
source's unit, not a defect). No gate compares a display equation with its
MathML symbol by symbol, reads one equation item's stem against another's
key, or counts added items beyond the floor. The punctuation glue is
unverified in Safari and Firefox.

## Worked values replace the percent band (November 12, 2026)

Derek asked whether chapter 4's `0.2%` band was an issue on the one item
that took it, and then how every such band would be handled from here: "I
want to have the correct implementation for a student trying to learn, and
want to make sure the ruling we apply extends throughout future authoring."
He chose the design below and asked that a right answer be shown the
table's value.

### What was wrong with the band

- 4.3's grams of O₂ from 1.252 g of silver(I) oxide: source key 0.08644,
  0.08642 by Appendix A's silver (107.9). Under `sig-figs:4 tolerance:0.2%`
  the grader took 0.08627 to 0.08661 — seventeen units of the last figure
  either side, for two values two units apart. A molar mass rounded to 232
  (0.08634) was correct there and "Close, but…" on every other four-figure
  item of the chapter.
- The 0.2% had been sized from the chapter's widest gap, 0.096% — which is
  10.41 against 10.40, one unit, an item that took `last-digit:1` and never
  used the band.
- The rule itself ("a chapter default, wider than rounding noise, narrower
  than the smallest real mistake") was a judgment re-made every chapter,
  and one that later chapters could not have satisfied: a difference of
  large table values, or an exponential, turns a table's last digit into
  percents.

### What replaced it

`worked:<value>` in a fill-in's `answerForm`: the key's second right
value, what this book's own data give where the source's key cannot be
reached from them. The source's value is still the key.

- **Beside `sig-figs:<n> last-digit:<k>`**: the allowance is counted from
  each of the two values. 0.08644 with `worked:0.08642` takes 0.08641 to
  0.08645; 0.08640 (moles cut to three figures) is a near miss, 0.08634 is
  wrong.
- **Alone**: no count of figures is graded (3.1's nineteen formula and
  molar masses). The value is graded at the worked value's last place —
  between the two with one unit to spare; one place short, what a value
  between them rounds to (123.9); two places short and still what it
  rounds to, a `form` nudge ("…now give it more precisely, keeping the
  decimal places of the values you combined."); three short, incorrect.
  Under the 0.05% band these items took wrong last digits on a large mass
  (342.2 and 342.4 for sucrose's 342.30) and refused a right short one on
  a small mass (18.0 for water): the percent was a different rule on
  every item.
- **A right answer is shown both**: "Correct — the source’s answer is
  0.08644 g O₂; this book’s own data give 0.08642." Where the worked value
  is the key's own number (S₈), one answer is shown.
- **`tolerance:<p>%` is gone** from the grader, the shortcode, and the
  lint: a page that declares it does not build.
- **Lint** (`measuredKeyProblem`): declared once; beside the pair or alone;
  one nonzero numeral; beside the pair, written to the pair's count and
  another number than the key; within 0.1 percent of the key and a unit of
  the last place; an `answerDisplay` beside a worked value that is shown;
  a footer may print neither number.

### Items

Twenty-five, all in chapters 3 and 4: the nineteen of 3.1 (alone), 3.1's
silicon in zircon (9.504, `worked:9.506`), 3.2's nitrogen in ammonia
(82.24, `worked:82.27`), 3.3's dilution (0.5000, `last-digit:0
worked:0.4999` — every number is in the stem, so the two values are the
whole window), and 4.3's three silver items (0.08644 / 0.08642; 5.337 ×
10²² / 5.336 × 10²²; 10.41 / 10.40). The last two had taken
`last-digit:1` alone; they carry the worked value now because the rule for
an author is "when the value you work from this book's own data is not the
source's key, record it", one unit apart or ten. Every table value was
recomputed from Appendix A by script and agrees with the values errata
2985, 2996, 2999, and 3019 already recorded. A fresh blind solver then
answered the twenty-five from masked pages and Appendix A alone: 20 agree,
0 disagree, 5 also-defensible, and each of the five second readings is the
other end of its item's window (82.25 unrounded beside the page's own
82.27; 0.08643 with the moles rounded; 199.0 for the molar mass of
K[Ag(CN)₂], which returns the source's 5.337 × 10²² and 10.41; the
three-decimal sum 199.996). The ledger records carried: no key changed and
every key still grades correct under its new form.

### Three things the work turned up

- **The first ceiling was wrong, and the playbook's own example showed
  it.** The lint first refused a worked value more than 0.5 percent from
  its key; writing the rule's example (3.25's 53.74 g of aluminum, 53.83
  by any table — an arithmetic defect) showed that pair is 0.17 percent
  apart and would have passed. The ceiling is 0.1 percent plus a unit of
  the last place, which parts every real table gap in chapters 3 and 4
  from that defect.
- **The blind-solve mask let the worked value through, twice.**
  `answerForm` is not a key param, so `maskKeys` printed
  `worked:0.08642` on the masked page; with that fixed, the first
  `solve:emit` still printed it in the packet's own `answerForm` field.
  Both blank the value and keep the token (`worked:…`), each with a test.
- **`npm test` was red at the last commit.** The chapter 4 follow-up's
  browser test built its page paths and two locators from template
  strings, which the fixture gate (`browser-fixtures.test.mjs`) cannot
  read; the gate had not been run after the test was written. The test
  now uses literal paths and locators.

### What was looked at and left

- **1.6's Kilimanjaro item stays `last-digit:2`.** Its routes are all this
  book's own table, and its key is one of them: there is no second answer
  to name. The playbook says so beside the rule.
- **A logarithm's answer** (pH, pK, ln k) is graded correctly by the pair
  and told the wrong thing ("3 significant figures" of a number with two).
  It needs a `decimal-places:<n>` token with its own sentences, settled at
  the gate probe of the chapter that first keys one (12 or 14). Written
  into the playbook's "Not read by these forms" list; not built, there
  being no item to test it against.
- **Other `last-digit:1` items of chapters 1–4 whose table value is one
  unit from the key** were not swept: only erratum 3019's two had the
  table's value on record. They grade the table's answer correct already;
  what they lack is the second value in the feedback.

## One data set, one right answer (November 12, 2026)

Derek opened Section 4.3, answered the silver(I) oxide item with 0.08642, and
read "Correct — the source’s answer is 0.08644 g O₂; this book’s own data
give 0.08642." He called it confusing, out of line with the other books, and
asked why the book's periodic table was less accurate than its own answers.
This entry supersedes the November 11 ruling ("source keys stay") and the
worked-value design above.

### What was found

- The periodic table was OpenStax's image: four-figure atomic masses
  (Ag 107.9, O 16.00) printed in its pixels, and a text table typed from
  it. No tool or gate read either.
- The source's answer key was not worked from that table. Its formula
  masses match 1990s atomic weights (H 1.00794, Cl 35.4527, Si 28.0855,
  Zn 65.39). The source disagrees with itself, and no single table
  reproduces every printed answer: with IUPAC's current five-figure table,
  8 of 3.1's nineteen formula-mass keys equal the source's print and 11
  stand a unit or two from it.
- A four-figure mass is wrong by up to 3 parts in 10,000 (Ag), the size of
  the fourth figure of an answer; the exercises give four-figure data and
  ask four figures.
- The November 11 reasoning ("A tolerance is needed with either table, so
  more digits buys you nothing") holds as far as it goes: a tolerance to
  the SOURCE's key is needed with any table. None is needed once the
  source's key is no longer the key.

### What Derek decided

1. The book's periodic table carries IUPAC's abridged standard atomic
   weights (CIAAW, Abridged Standard Atomic Weights 2024; five significant
   figures, fewer where isotopic composition varies), and the source's
   image is replaced by a table drawn from that data.
2. A numeric key is what this book's table and constants give. A correct
   answer reads the ordinary "Correct — …". The source's differing print
   is recorded and never shown to the learner; it grades correct only
   inside the ordinary `last-digit` allowance. `worked:<value>` is retired.
3. Worked examples in the body are recomputed from the table.
4. Appendix D's constants move to current CODATA values.

The parent's calls inside those, each put to Derek in the plan: a constant
a chapter states is used as stated (6.022 × 10²³); a molar mass is the
addition-rule sum, then carried unrounded; 3.3's 0.5000 becomes an ordinary
corrected key; the nine boxes the source leaves unshaded stay unclassified
(the key gains a "Not classified" entry); the six calculation-table images
of 3.1 become tables and their molecular models are not carried.

### What was built

- `data/chemistry/elements.json`: 118 elements, each mass a string, copied
  from the CIAAW page kept at `tools/fixtures/ciaaw/`; 75 of the 84
  standard atomic weights changed. `tools/source/elements.test.mjs` holds
  the file to the copy digit for digit and to the grader's symbol list.
- `tools/figures/periodic-table.mjs` draws
  `static/media/chemistry/periodic-table.svg` (whole-number geometry on a
  fixed pitch, `--check` in the tests, every label fitted with the
  measured advances and the platform margin, 4.5 to 1 contrast). The rail
  control and the viewer took the SVG unchanged.
- `tools/source/elements-table.mjs` writes Appendix A's table;
  `verify:source-tables` now reads that table against the data file (it
  was the one table the tool skipped), and its floor rose 2,704 → 3,418.
- `tools/verify/molar-mass.mjs`: a formula mass by the book's method,
  exact arithmetic, a calculation table in Markdown, and `--page`.
- `verify:source-keys`: a key within two units of the source's print (at
  the coarser last place, and within 0.1 percent) on an item that carries
  `last-digit:1` or `2` is `data-differs`, not a failure; every such item
  is a row of `data/verification/source-print-differences.json`
  (`--write-register`), and the page carries one Source note under
  `## Practice`. A formula mass asked for itself must equal the tool's sum
  exactly (`table-differs`). Where a stem gives no number of its own the
  count of figures is the table's. Sabotaged both ways: a changed register
  row failed as unlisted and as stale.
- The grader: a response one figure short and within two units of what the
  key rounds to (123.88 against 123.896) is a near miss, and a near miss
  under `last-digit:1` or more adds "If you looked up a value, such as an
  atomic mass, use every digit its table prints."

### The pilot: Appendix A and Section 3.1

Author (Opus) → checker (Opus, forbidden the author's notes) → blind solve
(fresh Fable, masked page, the new Appendix A). 59 numbers changed by the
author; six calculation-table images replaced by tables; twenty `worked:`
tokens gone.

- **The checker found five keys the author had left on the old data**:
  2.345 mol of LiCl (99.41, the source's, from Li 6.941; the table's 6.94
  gives 99.40), and the four "mass of carbon in this molecule" items, which
  the author had rounded to the source's count of figures (12.01, 60.06)
  because the gate then refused 12.011. The gate was wrong: a stem that
  gives no number takes its count from the table. Both readings stay in
  the recipe — the author's rework is not the check.
- The gate could not read a formula-mass item whose formula is a drawing
  (Si₂H₂Cl₄, H₃PO₄) and demanded the source's seven figures; fixed by the
  same rule.
- The least-molecules question printed 44.02 g/mol for N₂O beside a Source
  note saying its molar masses are this book's table's; the table gives
  44.01. Corrected in the option, the note widened.
- Blind solve: 58 agree, 1 flagged and adjudicated (oxygen atoms in
  zircon, 8.151 × 10²³ with the page's 6.022 × 10²³ and 8.152 × 10²³ with
  the exact constant the body prints once; the allowance takes both).
- 20 register rows, all of 3.1. `--min-confirmed` 7,419 → 7,399: those
  twenty keys are no longer "confirmed against the source", by design.

### The sweep: chapters 2–4, Knowledge Check 1, the appendices (November 13, 2026)

One session, from commit `a82da7cb`. The four calls the pilot left were
decided by the parent (Derek's standing instruction), and everything the
pilot listed as still to do landed.

**The four calls.** The six molecular models of 3.1 are back, each a crop
of the source's image under its table (below). "Not classified" stays in
the periodic table's key: the key must explain every shade. The near-miss
sentence keeps its second sentence with one word changed, "…use every digit
the table prints." And the question open since November 11 — below 1280 px
the "Periodic table" control sat two taps inside a drawer, and on the nine
appendix pages with no headings there was no drawer at all — is closed: the
control is printed a second time as a fixed button at those widths
(`layouts/_partials/toc.html`, `.ap-reference-floating`), 44 px tall, under
the drawer and the navbar. A fixed button covers the corner of whatever
scrolls under it; that was judged the smaller cost now that a right answer
needs the table's fifth figure. Section 2.5's stems that said "Using the
periodic table" in plain words now link it, as 2.6's do.

**The sweep was small in keys and larger in prose.** An inventory read
every page first: of about seventy fill-ins in 3.2–4.5 that depend on an
atomic mass, the table moved five keys, and the rest of the work was the
body. Four Opus authors reworked 3.2, 3.3 + 3.4, 4.3, and 4.4 + 4.5 from
the pilot's brief; four Opus checkers, forbidden the authors' notes,
recomputed about 215 numbers and disagreed with none; two fresh Fable
solvers answered 137 items from the masked pages and the new Appendix A.

| Page | What moved |
|---|---|
| 3.2 | about forty body numbers (ammonia 82.27 → 82.24% N, nicotine 81.13 → 81.118); no key — the ammonia key was already the table's, and lost only its second value |
| 3.3 | the dilution key 0.5000 → 0.4999, a corrected key (no mass enters it; erratum 2999, `DISCLOSED_DEVIATIONS`); acetic acid printed 60.052 in both examples |
| 3.4 | the wine stem's ethanol 46.06 → 46.07 g/mol (erratum 3038: the source's own masses give 46.068); no key |
| 4.3 | BaO₂ 16.31 → 16.30 mol and 2762 → 2761 g, C₂H₄ 5.81 → 5.82 g; four printed molar masses; three second values removed from keys that were already the table's (0.08644, 5.337 × 10²², 10.41) |
| 4.4 | four printed molar masses and the theoretical yield of copper, 0.5072 → 0.5073 g; no key |
| 4.5 | the chloride Check Your Learning 23.76 → 23.77%; four printed molar masses |
| Knowledge Check 1 | glycine 0.3776 → 0.3777 mol, as 3.1's recomputed example prints |
| 1.3, 2.5 | the periodic-table figure is this book's own drawing, with Appendix A's alt |

**What the readings caught.**

- **The blind solve caught what author and checker both passed.** 4.4's
  copper example printed 0.5072 g beside the molar mass 159.60; the two
  earlier readers had divided by the unrounded sum, 159.602, and a learner
  retracing the page divides by what it prints: 0.50725, 0.5073. Of 137
  answers, 136 equalled the key exactly and none agreed only inside the
  allowance; three "also defensible" flags were on items the sweep had not
  touched and were adjudicated against their earlier rulings.
- **Three gate gaps, each found by a key the gate refused.** A Knowledge
  Check key could never be a data difference (`checkSources` passed no
  element data); it now confirms one only when the SECTION PAGE's body
  prints the key, so the check and the section cannot give two answers.
  `dataDifference` read a Solution's "1 mole of nitrogen" as the print one
  unit from 0.3777 (the key is 0 at the units place); a print the key has
  no figure of is skipped, and the finest place wins. And a part whose
  answer names its amounts ("16.31 mol BaO₂, 2762 g BaO₂") was refused
  before the data difference was asked; a named amount is now held to its
  own number.
- **`solve:compare` lists what `last-digit:1` hides.** A key left one unit
  off its data agrees with every solver, which is how the pilot's five
  stale keys reached the checker. Each agreement that holds only inside the
  allowance is printed (`≈`); this run had none.
- **A row is not an attribution.** The parent first recorded C₂H₄'s 5.82
  as a correction — the source's 5.81 is 0.207 mol, already rounded, times
  28.05 — and the errata verifier showed that the source's four-figure
  masses give 5.81 by this book's own method too (9.55/46.07 × 28.05 =
  5.8146). Nobody can say which produced the print, and BaO₂'s 2762 is the
  mirror case. The rule that came out: a unit or two on an item that
  fetches a mass is a register row; a correction is more than two units,
  or an item no mass enters. Erratum 3037 stays as the record, "not a
  defect".
- **`ledger:provenance` cannot note a Chemistry item** (it labels a source
  exercise "author-built"): the 31 re-hashed records' notes were carried
  from HEAD's ledger by hand, the seven re-keyed ones rewritten.

**The second-answer code is gone.** `worked:<value>` is no token: the
grader, `compareMeasured`, the fill-in component, the shortcode, the lints,
the masks and the solve packet no longer read it, and it is refused the way
`tolerance:<p>%` is, as an unknown form. `withinPercent` stays for the
source-key gate.

**Appendix D** prints the 2022 CODATA values (`data/chemistry/constants.json`,
from NIST's listing kept at `tools/fixtures/codata/`), each to the count of
figures the source prints in that place; ten rows changed and the five
exact SI values stand. `tools/source/constants-table.mjs` writes the table,
and `verify:source-tables` still reads the page against the CNXML, with one
generated deviation per changed value — so the source's number, the data
file's, and the page's are held together. No graded key moved.

**The models.** `tools/source/vendor-media.mjs --crops` cuts a manifest
entry's `crop` rectangle out of the pinned source image. The six rectangles
were found from each image's own frame lines and the drawing's ink. The six
whole images stay in the manifest (the crops are cut from them) and are
used by no page; the three old periodic-table rasters likewise.

**Floors.** `--min-confirmed` 7,399 → 7,394: the dilution key (disclosed),
BaO₂'s two and C₂H₄ on 4.3 and the chloride on 4.5 (register rows; 24 rows
in all). Errata 3037–3038 added; 2921, 2977, 2985, 2987, 2988, 2991, 2992,
2996, 2999, 3019 and 3031 rewritten.

**What the process should keep.** Read the page-level claim before
prescribing a note: the pilot's body Source note says "some results
differ", and on three pages only the printed molar masses did. Classify a
difference with the SAME method on both tables, or do not classify it. And
a fact handed to a verifier is a hypothesis: two of the parent's did not
survive the CNXML.

## A last pass before chapter 5 (November 14, 2026)

Derek asked for one more pass over chapters 1–4, the Knowledge Check, and
the appendices before chapter 5: anything that would stop a learner from
reading, answering, and going on; outliers; and what would make the book
better to use or cheaper to write. One session, from commit `1ca280fe`.

### Shape

- `npm run ci` first, as the baseline: green, 180 browser tests.
- **Every key typed into the real field.** A script (now
  `tools/build/typed-keys.mjs`, `npm run verify:typed`) answered all 702
  graded items of the book in Chrome the way a learner with a plain
  keyboard would — 337 fill-ins, 228 text-ins, 137 multiple choices, the
  follow-ups reached through their gates — then typed a second ordinary
  writing of each (`--variants`).
- **Four Opus readers, one per chapter (chapter 3's also read the
  Knowledge Check), read-only**, briefed as a first-year student who has
  only this site: a blocker, a wrong statement, asked-before-taught, a hint
  that misleads, an outlier, and at most five ideas. A fifth read the kit
  and the history for what recurs, what is still done by hand, and what
  chapter 5's answers will ask of the grader and the gates.
- The parent verified each finding on the page, against the hint rules,
  and against the errata log before acting.

### What was found and fixed

- **A scientific-notation answer typed with the letter x was a bare "Not
  quite".** All 702 keys graded correct as typed with `*`; of the variants,
  55 failed, every one a power of ten written `7.04 x 10^2`. MathLive hands
  that over as `7.04x10^2`; the measured reader took 7.04 and read `x10^2`
  as a unit. No stem or field says how to type a times sign, and x is what
  a keyboard has. `readNumeral` now reads x or X between a numeral and a
  power of ten as the times sign (and hands the form predicates `\times`);
  under `scientific-notation` alone, against a key that is one such number,
  `checkAnswer` does the same, so the 18 math-book items are covered too.
  Unit rows, a browser test on 1.5, and a row of the playbook's table.
  After the fix both passes are 702 of 702.
- **1.6's three "write a conversion factor" items did not say which data
  to use.** They are keyed to the five figures of 1.6's table (2.2046 lb),
  1.4 taught "about 2.2 pounds", and only the hint named the table — "a
  hint is not where a needed number lives". Each stem now says "Use the
  table of common conversion factors above." Re-solved by a fresh solver
  (3 of 3; the quart item's other row, inverted, is one unit away and is
  inside its `last-digit:1`).
- **4.3's moles-then-mass hint sent one learner wrong.** "Find the moles as
  in the previous item, then convert them to mass": for carbon dioxide from
  20.0 kg of carbon, the previous item's rounded 1.67 × 10³ mol gives
  73.5 kg against 73.3 ± 0.1 — the only one of the thirteen pairs where the
  rounded moles leave the allowance. The family's hint now says "keep that
  value unrounded", on all thirteen (a member whose hint differs is a tell).
- **3.1**: "the first step of the saccharin solution" could be read as its
  first arrow (grams to moles); the hint now says "as far as its count of
  molecules". **4.2**: the Na₂CO₃ + H₂S self-check sends the learner to
  Appendix H, which nowhere says what a larger constant means; the hint
  now does.
- **1.6's Source note on 273.15 stood between "The figure below shows…" and
  the figure** — the placement three later runs' fix checkers each caught,
  never swept back to the pilot. Moved under the figure, and the rule is a
  lint (a `*Source note:*` between a paragraph that points below and its
  figure or table; appendices exempt). It fired on that page and no other.
- Stale text: the playbook's open list still asked for a browser test that
  types an equation (it exists, "chapter 4's fields say why"); "no section
  links a table appendix before chapter 5" is true of exercises only (4.2
  links Appendix H in a Source note); run.md's "Eight things chapter 4
  added" heads nine.

Eighteen items re-hashed (three stems, fifteen hints);
`ledger-carry` carried the hint edits, the three stems were re-solved, and
their provenance notes were carried from HEAD's ledger by hand
(`ledger:provenance` still labels a Chemistry fill-in "author-built").

### What the readers found sound

No wrong key: about 75 numeric keys of 1.4–1.6, every key and worked
example of chapter 3, and every mass-dependent number of 4.3–4.5 were
recomputed, all 60 equation keys balance in atoms and charge, and nothing
is left on the old atomic masses — text, alt, or the pixels of the six
model crops. The Knowledge Check's calculation keys are the numbers its
section pages print, and no item there answers another. The pager runs
cover → chapter 1 … 3 → Knowledge Check → chapter 4 → appendices with no
dead end.

### Raised and not acted on, with the reason

So the next reader need not raise them again:

- **Hints the hint rules forbid.** "The dropped digit is a final 5" (1.5's
  four half-even items), "cube the inch–centimeter factor" (1.6's engine),
  the composition of baking soda and baking powder (1.2), silver's charge
  on one item of a shared hint (2.7): each is the fact that decides the
  item, or a tell. The gap the reader saw is real in three of them — see
  "For Derek" below.
- **Already ruled.** 2.2's "mass-to-charge" caption (reviewed twice, not
  an erratum); 4.2's "(addition)" (erratum 3014); 4.5's "normal serum"
  (3028); 4.4's gold-price address (handled in the footer); 3.3's CoCl₂
  128.9 g/mol (2997 — but see below); 3.1's saccharin 9.20 × 10²⁰ (2981).
- **The source's own shape.** "hydrate" in 2.5's Key terms and not 2.7's
  (the source's glossaries), the nicotine ratios printed twice, FeSO₄(H₂O)₇,
  a part's whole lead-in restated on each item (house form).
- **From memory, not opened**: the EPA lead action level (15 ppb, a later
  rule lowers it), D5W as percent by mass, the Cullinan's date, HgCl₂(s) in
  4.5's serum stem against 4.2's solubility table. With chapter 3's six
  claims the errata log still records as "no source opened", this is the
  backlog run.md's own rule ("opens a source for every such finding")
  says should not exist.

### For Derek

*(All seven were decided and done the same day: "Seven decisions and a
consistency pass", below.)*

1. **Examples that round partway, before 3.3 teaches not to.** 2.3's
   chlorine and neon examples round an intermediate; a learner who copies
   them gets 69.16 and 30.84 for copper (keys 69.15, 30.85) and 24.30 for
   magnesium (24.31), each told "Close, but not within rounding…". 3.1's
   saccharin line prints 1.31 × 10²⁰ × 7 = 9.20 × 10²⁰. Either the
   examples print their unrounded intermediates (as 4.4's copper was made
   to retrace), or one sentence on carrying digits moves up to 1.5.
2. **CoCl₂, 128.9 g/mol** (3.3): kept as the source prints it when keys
   sat in a percent band; the band is gone, the book's table gives 129.83,
   and a learner who uses the table gets 0.670 against 0.674 with no
   message. Printing 129.83 and keying 0.670 is what ethanol got.
3. **Long runs.** 1.6's second Practice group is 49 items; 3.1 has 33
   molar-mass computations in a row before its multi-step items; 4.2 is 78
   items, its sixteen half-reaction balances under "Compute the oxidation
   states", the basic-solution step never worked in an example; 2.5 asks
   one classification as 20 two- and three-option choices (two `sortbins`
   would ask the same). Sub-headings and order are cheap; `sortbins` and a
   worked basic-solution example are authoring.
4. **Two body sentences**: squaring and cubing a conversion factor (1.6
   never raises one to a power, and 161 in.³ to liters needs it), and a
   link to Appendix C from 1.6 (1 qt = 32 fl oz is otherwise found only in
   another item's stem).
5. **State symbols**: a learner who types a reasonable state the stem does
   not fix (Ca(OH)₂(s) by 4.2's own table, against the key's (aq)) is told
   to check the states or leave them out. One line over an equation
   Practice block, or in the field's guide, would say they are optional.
6. **A metal compound named with Greek prefixes** ("titanium
   tetrachloride", which 2.7's own body prints) gets a bare "Not quite";
   the older-names message has no sibling for it.
7. `AGENTS.md` still ends "Do not commit unless the user explicitly asks",
   against the recipes' commit at a green close-out.

### Before chapter 5: what its answers ask for

The kit reader built chapter 5's keyed units against the real grader and
gates (67 units: 43 numbers, 4 equations, 20 words and sentences); the
parent re-ran three of the probes.

| Shape | Count | Today |
|---|---|---|
| a negative key (ΔH) | 19 | graded right; `802` for `-802` is a bare "Not quite" — no sign message |
| an answer in J beside answers in kJ | about 25 | `1.31` for 1310 J: no message |
| one part, two values in two units ("1310 J; 313 cal") | 3 parts, 6 items | the keys gate confirms 313 under "in joules": it does not read the unit word |
| a formation equation with a fractional coefficient | 2 | a key written `½O₂` reads as no equation; `1/2O₂` grades. A doubled answer is told "smallest whole-number coefficients" — wrong advice here, and `solve.md` tells the solver the same |
| a thermochemical equation with its ΔH | 1 | not typeable as one answer; split into an equation and a fill-in, and the keys gate then refuses the equation alone |
| Appendix G linked from an exercise | 5 + 1 example | works; the lookup test's added link becomes a real one |
| 5.3, Exercise 29 and a Check Your Learning | 1 pair | each stem prints part of the other's key — no gate reads one section item against another (`kc leaks` does, for a check) |

### What the kit reader recommends, in its order

1. Teach the grader and gates the shapes above before the wave, each with
   a test (the sign and the factor of a thousand are messages, not keys).
2. Give `verify-section` a mode that runs both source gates and the leak
   reading on one page: the two mistakes of every run — a ruling a gate
   refuses, and an automatic probe that says "0 findings" — are both a
   gate the author could not run.
3. Script the checklist steps: the fact half of the run facts and the PDF
   index range (`chemistry-prep.py`), a fill-in judge for
   `ledger:provenance`, the errata-quote check that has been rewritten by
   hand each run.
4. Reorder run.md §0 by the step a rule applies at, not the chapter that
   taught it (it is four dated lists, 29 bullets), and add an equation
   text-in and a recomputed-example page to the exemplars.
5. Cut the rendered-page reading to one reader on the page with a new
   shape: 14 percent of chapter 4's tokens for no content finding, and
   each thing it has found since chapter 1 is now a browser test. Every
   other reading alone caught a defect and stays.

### What the process should keep

- **Type the keys.** Every Node gate grades the key as written; only a
  browser shows what the field makes of keystrokes. One run of 702 items
  takes about two minutes, and it is now a close-out step.
- **A fresh reader re-raises what was ruled, and proposes what the rules
  forbid.** About a third of the learner readers' findings were one or the
  other. Next time the brief carries the hint rules' table and the
  chapter's "Reviewed and not errata" list.
- **A rule learned in chapter N is swept back to chapter 1** (run.md says
  so; the Source note under 1.6's figure waited four chapters for a lint).

## Seven decisions and a consistency pass (November 14, 2026)

Derek took the seven items the last pass left "For Derek" and said to
implement the best fix for each — as accurate as possible, and easy for a
learner to use — and to look again for inconsistencies and propose fixes.
One session, from commit `4871d09c`.

### The seven, as decided

1. **A worked example never reuses a value it has rounded.** 2.3's boron,
   neon, and chlorine calculations and 3.1's saccharin step print the
   digits they carry (1.9926 amu + 8.8184 amu; 18.3610 + 0.0987 + 1.6911;
   1.99705x = 1.5129; 1.31499 × 10²⁰ × 7). No result changed. The chapter 4
   reader then found the same defect after Section 3.3 teaches against it —
   4.4's limiting-reactant and percent-yield examples, 4.5's titration and
   gravimetric examples — and those were fixed the same way (0.071212 and
   0.053545 mol; 0.50725 g; 8.8075 × 10⁻³ mol; 0.31809 g). 4.5's
   combustion example keeps its rounded moles: the ratio is rounded to a
   whole number, as 3.2's empirical-formula examples are. One Source note
   per page, a footer clause, errata 3039–3041. The rule is in the playbook
   ("Numeric keys") and the checker retraces every example from its printed
   numbers.
2. **CoCl₂ (3.3).** The stem prints 129.8 g/mol — the table's 129.83 at the
   source's four figures, which is the playbook's rule for a molar mass a
   stem states and how ethanol was handled — and the key is 0.670. A
   correction (four units from the source): `DISCLOSED_DEVIATIONS`
   `fs-idm81897840#check`, the "answer graded" Source note, erratum 2997's
   handling rewritten. The playbook's rule that "a stated value under an
   erratum ruling stays" is gone: a stem never states a datum the book's
   own table contradicts.
3. **Long runs.**
   - **Sub-headings.** A Practice group may be divided by `####` labels
     where its run changes kind: 1.6 (Unit conversions, Conversions to SI
     base units, More unit conversions, Density, mass, and volume,
     Temperature conversions), 3.1 (Mass from moles, Atoms and masses of
     the elements in a compound, Problems that combine these steps), 4.2
     (Acid-base or oxidation-reduction, Types of reaction, Completing and
     balancing equations, Balancing half-reactions, Balancing equations by
     the half-reaction method). Items keep their source order and the `###`
     groups are still the objectives. A lint holds the form (no closing
     punctuation, at least two items, not repeated, no deeper level); no
     count forces a sub-heading, because a count would force a label onto a
     run with no seam ("More unit conversions" is already the weakest of
     the thirteen).
   - **2.5's twenty multiple choices are two sort-into-bins items.** One
     exercise asked ten elements two classifications; each `sortbins` is
     the lead-in verbatim with a sentence saying which sort, the stem's
     categories as bins, the ten parts as labels. The gates were taught the
     form (below). The playbook's row: ten or more short parts sorted into
     the stem's own categories; fewer, or parts with a `followup`, stay one
     multiple choice each.
   - **4.2's basic-solution example.** The section lists the steps for
     basic media and works none, and its Check Your Learning and four
     exercises ask for one. The book's own example from Section 17.1
     (m68821, permanganate and chromium(III) hydroxide) is printed after
     the acid example and before the check, its equations the source's and
     its step text 4.2's nine steps, with a Source note. Not an example the
     author wrote: its answer is the book's. Section 17.1 keeps it when it
     is authored. Erratum 3042 records the gap.
4. **1.6's two sentences.** After the table of conversion factors: "More
   conversion factors are listed in Appendix C …, such as 1 qt = 32 fl oz
   and 1 gal = 4 qt." After the first example's check: "A unit raised to a
   power is converted with its factor raised to the same power. Because
   1 yd = 3 ft, 1 yd² = (3 ft)² = 9 ft², and 1 yd³ = (3 ft)³ = 27 ft³." —
   illustrated with units no exercise uses, so it works no item. The
   playbook now says what a page may add to the source's body (item 10 of
   "The section page, in order").
5. **State symbols.** The equation field's guide ends "The state symbols
   (s), (l), (g), and (aq) are optional.", and a response right in all but
   a typed state reads "The substances and coefficients are right. A state
   symbol you typed differs from the answer’s: check each one, or leave
   them out — state symbols are optional." Still `form`, never correct:
   AgCl(aq) is not the precipitate.
6. **Greek-prefix names of a metal's compound.** "titanium tetrachloride"
   against `titanium(IV) chloride` is `form` with "That name counts the
   atoms with Greek prefixes, as a compound of two nonmetals is named. Name
   a metal’s compound as an ionic compound, without prefixes."
   (`prefix-names.mjs`: the counts must give the key's charge, so
   "titanium trichloride" stays wrong; `gradeText` only, no gate reads it).
   The message does not call the name wrong — IUPAC allows it. A lint
   refuses such a name in `accept`, and a corpus test builds the prefix
   name of every charged binary name key and holds the verdict.
7. **Commits.** `AGENTS.md` has a "Commits" section — a run commits its own
   files at a green close-out — and the four other documents that still
   said "commit when asked" point at it.

### The consistency pass

Six read-only Opus readers on a snapshot of HEAD, while the parent edited
the live tree: one per chapter, one across the book by script, one for the
kit. Their brief said what an inconsistency is (seven lenses), what is NOT
a finding (a hint that should say more, anything ruled, the source's own
shape, what the gates assert), and that every finding ships with the
command that reproduces it. It is now `docs/briefs/chemistry/pass-reader.md`.

Forty-eight findings, **no wrong key and no example that fails its own
arithmetic**. About a tenth re-raised something ruled, against a third on
the pass before, whose brief had no "not a finding" section.

Fixed in the session, each a plain defect against a rule already written:

- 1.6: two fill-ins whose every route is exact carried `last-digit:1`
  (120 m to feet, the cubit in feet: 1.4 and 1.6 graded right for 1.5);
  nine SI-base-unit hints in two wordings, one of which told that the
  base unit has a prefix; a footer clause for a rewording reverted on
  November 9; an "Enter the area…" sentence on a stem that names its unit.
- 1.2: the rusting-nail fill-in says "to the nearest tenth of a gram", as
  its two siblings do (it answered `0.90` with a sentence about
  significant figures, three sections early).
- 2.5: the eight "Use the periodic table" stems link the words, as the
  "Using the periodic table" stems have since November 13, and the footer
  says so.
- 3.1: glycine's total row read "Molecular mass (g/mol compound)" under a
  table of molar masses; a "Subtotal" column without its unit. 3.3: the
  body Source note the playbook requires where printed molar masses moved.
  3.1 and 3.3: the digit-grouping commas named in the footers.
- 4.1: three complete-ionic hints in two wordings. 4.3: the book's only
  two section-to-section links, in a Source note, are plain text.
- Kit: the playbook's open list had none of chapter 5's prerequisites; a
  stale cell count; potassium at 39.10 in a notation example; a rule for
  small print in a figure, written when the periodic table was a raster,
  that 46 hints did not follow (narrowed: the table is the book's drawing,
  on every page); `run.md` sending the ledger step to a tool that labels
  Chemistry fill-ins "author-built"; `docs/re-review/README.md` with no
  Chemistry rows; a literal NUL byte in `tools/verify/solve-check.mjs`
  that made grep read the file as binary and print nothing.

### Proposed, and done the same day

Each was a choice, not a defect, so each was put to Derek with a
recommendation. He agreed to all of them ("I agree with your
recommendations, let's implement them"); what was done is under "The
proposals, implemented" below. As first listed:

- Two grader messages: a name with its Roman numeral missing or written as
  an ordinary number (eleven items of 2.7); a molecular formula typed
  where the empirical formula is asked (2.4).
- Hint families with a member that differs: 1.2's eight classification
  hints, 4.1's balancing families, and the four 4.2 hints that say
  "highest common oxidation number", a term the book has not taught.
- Appendix C's cubic foot, 28.316 L, against 1.6's 28.317 (the exact value
  rounds to 28.317): erratum 3043 logged, the cell kept as printed.
- 4.2's antacid callout prints H₃O⁺ + OH⁻ ⇌ 2H₂O, and the Check Your
  Learning above it tells a learner who types ⇌ that it is the wrong arrow.
- Footers of seven pages name item kinds outside the playbook's phrases
  ("multiple choice items", "recall items (textin)"): a clerk's sweep and
  a lint.
- 2.7's oxyacid recall quotes the glossary's "one other element", which
  the page's own Source note calls incomplete.
- The form of a symbol with its value in a stem (three rules in the
  playbook; eleven exercises of 5.3 need one).

### The proposals, implemented

- **A name without its Roman numeral, or with an ordinary number.**
  "iron chloride" against `iron(II) chloride` is incorrect with "This
  metal forms more than one ion, so the name must say which: add the
  ion’s charge as a Roman numeral in parentheses after the metal’s name.";
  "iron(2) chloride" is `form` with "That is the right compound — now
  write the metal ion’s charge as a Roman numeral, not as an ordinary
  number." (`numeralProblem`: read only against a key written
  "metal(numeral)", so a Roman numeral in another book's key is never a
  charge; a wrong charge stays plainly wrong.) A lint refuses either as an
  `accept` member; a corpus test walks every charged name key.
- **A formula with every count multiplied up.** `C8H16O4` against
  `C₂H₄O` is incorrect with "That has the right elements in the right
  ratio, with every count multiplied up. Write the formula with the
  smallest whole numbers of atoms in that ratio." Said only against a key
  of two or more elements in lowest terms — never of Li₂O₂ or Hg₂Cl₂ — and
  without the word "empirical": the reader does not know what the item
  asks.
- **Hint families** (an Opus author, each new hint read against every
  member with the key covered): 1.2's eight classification parts point at
  the flow chart of the Classifying Matter section; three exercises of 4.1
  each have one hint; 4.2's four "highest possible oxidation state" items
  no longer say "highest common oxidation number" but send the learner to
  the electrons an atom loses to match the preceding noble gas (Section
  2.6) and to the page's guidelines for oxidation numbers. The author did
  not point at 2.6's group-charge figure, which gives P³⁻, nor at 2.7's
  oxide table, which prints one item's product.
- **2.7's oxyacid recall** is built on the body's sentence ("at least one
  other element"), not the glossary's, which the page's own Source note
  calls incomplete. Its sibling binary-acid recall takes the same hint.
- **Appendix C's cubic foot** is 28.317 L with a Source note, a
  `TABLE_NOTES` deviation, a decisions entry, and erratum 3043.
- **Appendix A's group column** prints "— (row of elements 89–103)" for
  the thirty elements below the main table, and the sentence above the
  table says they belong to no numbered group. Found by the blind solver:
  the old "3 (row of …)", read against the key term "groups 3–12", made
  uranium a transition metal on 2.5's new sort.
- **Footers.** Nine pages said "multiple choices", "recall items
  (textin)", or "formula items"; all use the playbook's phrases, and a
  lint holds them (Chemistry only; the hyphenated adjective is left).
- **Left as they are, as recommended:** 4.2's antacid callout (the
  source's ⇌) and 1.2's nail stem under the increased-or-decreased choice
  (the source's part order).

The browser-fixture gate (`tools/build/browser-fixtures.test.mjs`) graded
every typed text-in as words; the first spec to type into an equation
field found by its key failed there. It now grades under the item's form.

### What the process should keep

- **Readers on a snapshot, the parent on the tree.** `git archive HEAD … |
  tar -x` into the scratchpad: six readers ran for ten minutes while the
  seven fixes went in, and no finding described a page in flight.
- **Triage by kind.** A plain defect against a written rule is fixed; a
  choice is proposed. The line was easy to hold once it was drawn, and it
  is what Derek asked for.
- **A fix that names a class is swept the same day.** Decision 1 named two
  pages; the class was on four.
- **A literal control character in a source file hides it from grep.**
  The kit reader found it because a search it expected to hit printed
  nothing.

## Chapter 5 (November 14, 2026)

One run, one session, from commit `d6c6b91d`: Sections 5.1 Energy Basics
(m68724), 5.2 Calorimetry (m68726), and 5.3 Enthalpy (m68727), and the landing
(m68723). 77 graded items (16, 19, and 42). Blind solve: 66 agreed, 0
disagreed, and 11 were flagged as also defensible and adjudicated; four items
were re-stemmed or re-keyed after the solve and solved again by a fresh
solver, and the solver overturned one parent ruling (manganese: 459.610, six
figures, not the 459.61 the parent had ruled). Errata 3044–3086 (43). 18 key
corrections (`DISCLOSED_DEVIATIONS`) and 1 register row (the iron-and-chlorine
Check Your Learning, covered by erratum 3069). Baselines: keys 7,375 to 7,443
(7,376 mid-run, when the gate work confirmed one more chapter 4 item),
coverage 4,501 to 4,569, exercises 18,056 to 18,145, replay 8,864 to 8,967.
Wall time was about five and a half hours.

### Before the wave: the grader and the gates

The grader and the gates were taught chapter 5's shapes first (the list, the
function names, and the exact strings are in the gate agent's report, two
rounds):

- the wrong-sign message, "The size is right, but the sign is not. Check
  whether the value should be positive or negative.", and the thousand-times
  message, "The digits are right, but the value is a thousand times off. Check
  the unit the question asks for." (`compareMeasured`, reasons `sign` and
  `thousand`; the near-miss zone is read first);
- fractional coefficients in equation keys: one written form (`½`, `3⁄2`),
  every ordinary typing read, the "one mole" message ("That balances, but the
  question asks for the equation written for one mole, so a coefficient may be
  a fraction. Type a fraction as 1/2."), and `(s, graphite)` compared only
  where both name an allotrope;
- the part asked and answered in two units (`twoUnitAnswer`,
  `closingUnit`): one fill-in per unit, each held to the number printed under
  the unit its closing sentence names;
- the thermochemical answer under a stem that asks a number (an equation and
  its ΔH is one fill-in keyed with the ΔH);
- the second Check Your Learning of an example (`#check2`; the bundle has
  three such examples: 5.2, 12.3, and 13.4);
- the display equations of a Check Your Learning's stem, read as part of it
  (the Hess's-law Check Your Learning whose reactions are display equations);
- the cross-section stem matcher (`withoutCrossReference`), after printed 39,
  41, and 43 fell below the 0.5 similarity floor and were never compared.

### What the run holds

5.1 holds 16 items, 5.2 holds 19, and 5.3 holds 42. Every page's footer census
agreed with the checkers' counts. The authors and the checkers worked from the
run facts; the readings after them are below.

### What each reading found

- Checkers: 7, 6, and 9 defects (5.1, 5.2, 5.3). The most serious on 5.1: the
  waterbed key 7.47 under `last-digit:2` where the data give 7.487; 5(a)'s
  11.38 in four figures from three-figure data; the solar-thermal schematic's
  long description routing the two tank pipes wrongly. On 5.2: the TNT key
  11.7, which reproduces only with 4.18 and carries too many figures; the
  "heat produced" family keyed both positive and negative, with hints that led
  to the wrong sign; keys with more figures than their data. On 5.3: printed
  85(d)'s 75.2 filed as a register row when it is a correction; 67's 90.25
  tie; butane's −2660 where the data give −2657.
- Claim pass: 14 findings (11 corrected, 2 kept with a Source note, 1 a key).
  The most serious: three cells of 5.1's specific-heat table against NIST
  (ethanol, carbon dioxide, argon); the Ivanpah paragraph and caption (the
  record, the mirror count, the area); the algae box against the *Guardian*
  article it cites, with its correction.
- Consistency reader: 13 findings. The chief ones: one table sent to by three
  forms, "Table 5.1" (a number no page prints) and section links the playbook
  forbids; the sign of keys whose verb bears on it, set side by side; keys the
  data do not give, which no gate catches because the key is the source's
  print.
- Fix check: 3 changes and 7 judgment calls (A to G); the parent accepted the
  changes and ruled the calls (`rulings-fixcheck.md`).
- Rendered-page readers (5.3, two readers): 0 wrong, 4 misleading, and a few
  cosmetic. The misleading ones: a sentence's full stop inside `\ce{…}` drawn
  as a raised dot; the isooctane solution still saying −5460 under a table
  that now prints −5461.3; the Hess's-law Check Your Learning labels
  "(i)" to "(v)" ending a line with the reaction on the next; a combustion
  equation field that tells a learner who types H₂O(g) that a state differs.

### The rulings

- **The sign rule** (four keys moved: 5.2's benzene item, and 5.3's printed 43,
  71, and 75).
- **Figures**: 5.1's 11.4, 97.2, and 7.5; 5.2's 336, 1.3, 12, 0.99, and −2.4;
  5.3's 5.20 × 10³, 90.25, −2657, and 75.2, each a correction with its Source
  note.
- **Section links removed**: the parent's own run facts decisions 6 and 8
  were overturned by the playbook rule they cited.
- **`last-digit:1` for every table-fetched value.**
- **After the solve**: "Enter the heat, $q$, in kilojoules." on two items;
  the steam item 7.4 (the parent had ruled 7.43 stays; the solver and the
  consistency reader both counted two figures); manganese 459.610; the ammonium
  nitrate item a correction, not a register row.

### What the process got wrong

- Decisions 6 and 8 of the run facts ruled the opposite of the playbook rule
  they cited; six links were written and then removed.
- The run facts' value for printed 41 (25) came from a rounded heat; the
  method gives 26.
- Printed 85(d) was called a register row; the gate calls it a correction.
- The parent ruled 7.43 and then 459.61, and the solver and the figure rule
  overturned both.
- A first address for one outside source returned 404 (the reader's address
  worked).

### Outside sources opened and seen quoted

EIA Monthly Energy Review Table 1.3; the NIST Chemistry WebBook (ethanol,
carbon dioxide, argon, isooctane, acetylene); Crossref (the calorimeter
paper); the *Guardian* article the algae box cites, with its correction;
*POWER* magazine and ACWA Power (Ivanpah, Noor Energy 1).

### Kept as printed

From the "Reviewed and not errata (chapter 5)" block of
`docs/openstax-errata.md` and the claim pass's "Reviewed, stands":

- Kilimanjaro's 5895 m: the common figure (a 2008 survey gives about 5892 m);
  the Department of Energy's 39,000 square kilometers (about 0.4 percent of
  the land mass) recomputes to 0.43 percent.
- "Sonora Desert", and the specific-heat table's silicon row printed last: an
  accepted name, and the order of a table.
- The benzene Check Your Learning's "the reaction produced 39.0 kJ of heat":
  the answer's own parenthesis gives the key; no Source note, not a deviation.
- The iron-and-chlorine Check Your Learning's −339 (source −338): the one
  register row, covered by erratum 3069.
- The frying-pan example's 1814 (four figures from three-figure data), "nickel
  fuse wire", Reatha Clark King, the USDA "over 8000 foods", Carla Prado, the
  "almost 10,000 times" solar input, Solana's 280 MW: from memory, defensible,
  kept.
- KClO₃'s 122.545 g/mol, which round-half-to-even writes 122.54 where the page
  prints 122.55: the result is unchanged.

Not opened by anyone: the EIA sector split (38/27/21/10), "35 calorimeters",
the 26,000 gallons per hectare, and ice's 2.093 J/g °C "at −10 °C".

### Tests and lints the run added

- `keyed-units.test.mjs`: the example with two Check Your Learning items (both
  gates require both); a Check Your Learning whose reactions are display
  equations; the thermochemical answer under a stem that asks a number; the
  part asked and answered in two units; the stem that names another section's
  example and restates its data (printed 39, 41, 43).
- `check-answer.test.mjs` and `significant-figures.test.mjs`: the wrong-sign
  and thousand-times messages (the `494` against `-494` row now carries
  reason `sign`).
- `check-chem.test.mjs`: a formation equation with a fractional coefficient
  graded at the key's own scale; the `(s, graphite)` rule.
- `lints-leaks.test.mjs`: a key with a fractional coefficient must close "Type
  a fraction as 1/2."; a value followed by `\ \text{…}` inside a stem's math is
  an error (`STEM_NUMBER_UNIT`).
- `browser-check.spec.mjs`: an equation field reads a fractional coefficient
  typed as 1/2 or a decimal; the appendix-lookup test now follows 5.3's real
  Appendix G link; a stem label and a "= value unit" run stay on the line of
  their formula (the label-and-value glue,
  `layouts/_partials/math-glue-patterns.html`, read by `glue-math.html` and
  `mathtext.html`). The glue agent left no written report.
- `tools/build/documentation.test.mjs` reads every new grader row of the
  playbook (the sign and thousand rows quoted whole).

### What typing the keys showed

77 of 77 correct in both passes.

### Next

Knowledge Check block 2 (chapters 4–5), run from
`docs/briefs/chemistry/kc-run.md`, then chapter 6.

### For Derek — answered November 14, 2026

1. **Section-to-section links: allowed, and the plain-text rule removed.**
   A reference to another section is now a link to that section's page
   (playbook, page skeleton rule 9; `author.md` step 7; `checker.md` §3;
   `run.md` step 6, where the run facts list the references and the
   paths). Swept the same day over every page on disk: 35 references on 13
   pages (chapters 1–5 and Appendix C) became
   `[Section N.M Title](/physical-sciences/chemistry/…/)`, each footer
   says so, and three footer clauses that said "plain text" were reworded.
   Not linked: a hint (plain text, as with an appendix), and the three
   references to sections not yet written (17.1, 17.6, 19.1) — the run
   that writes each page links what points to it. 18 items were re-hashed
   by a link in their stem; `ledger-carry.mjs` now reads a site link
   around unchanged words as no change to the stem (test beside it;
   AGENTS.md, "Re-solving after a sweep"), and all 18 records carried.
   A section link opens the section's page, not the table or example
   named: the page has no anchor for either.
2. **The stem form `$\Delta H^\circ$ = −314 kJ` stays.** Checked in a
   browser at 390 and 1280 px: all 15 such quantities of 5.3 sit on one
   line with their symbol (the `.ap-math-glue` value pattern), and the
   lint holds the form in stems. What is not uniform is the BODY: three
   sentences of 1.4 and two cells of Appendix E use the stem's split form
   (`$m$ = 18.58 g`), while the solutions of chapter 5 set the same kind
   of statement whole in math (`$q = -2.9\ \text{kJ}$`). Put to Derek,
   who ruled one form for all running text the same day: the symbol in
   math, the equals sign, value, and unit in prose (playbook "Notation";
   `author.md` step 4). Six body sentences of 5.2 and 5.3 were the whole
   of the other form and were rewritten; arithmetic, display math, and
   answer displays stay in math. `symbolValueUnit` in
   `tools/lint/lints-leaks.mjs` is the lint (Chemistry only, test beside
   it), and the glue's value pattern now takes "J/g °C".
3. **Corrected cells of source data tables stay corrected**, each with its
   Source note.
4. **The trailing-zero key (459.610) stays.**

## Chapter 6 (November 15, 2026)

One run, one session that paused once at a usage limit and resumed, from commit
`c9182bba`: Sections 6.1 Electromagnetic Energy (m68729), 6.2 The Bohr Model
(m68732), 6.3 Development of Quantum Theory (m68733), 6.4 Electronic Structure
of Atoms (Electron Configurations) (m68734), and 6.5 Periodic Variations in
Element Properties (m68735), and the landing (m68728). 96 auto-graded items
(21, 8, 25, 23, and 19). Blind solve: 92 agreed, 1 disagreed, and 3 were flagged
as also defensible; all four were adjudicated with the keys standing (the
disagreement: "ionization energy" for "first ionization energy", which the
heading lint refused as an `accept` member). Errata 3087–3141 (55; the 6.1 to
6.5 entries sit after chapter 5's in the same block of `docs/openstax-errata.md`,
and "Reviewed and not errata (chapter 6)" follows them). Key deviations
(`DISCLOSED_DEVIATIONS`, chapter 6 entries): nine entries, eight of kind `key`
and one of kind `solution`. The 6.1 X-ray energy (erratum 3092); six entries of
6.2 for the Rydberg constant (erratum 3102), which move seven keys because the
He⁺ Check Your Learning has two fill-ins; the 6.2 radius (3104); and the 6.1
cesium self-check's model answer (3093). 6.5's two widened keys have errata
(3127, 3128) and no entry in that list: the gate reads an `accept` member as
no change of key, and an unexercised entry fails. `baseline:update` moved
`--min-confirmed` from 7443 to 7543 and `--min-covered` from 4569 to 4645.
Wall time was about seven hours of
work across the pause.

Derek asked for "the next chapter", so chapter 6 was authored before Knowledge
Check block 2 (chapters 4–5), which `run.md` §4 step 9 puts first. The check is
still owed and is the next run.

### Before the wave: two forms and the gates

From the grader-and-gates agent's report (five rounds, all of them):

- **Two new answer forms.** `answerForm="configuration"` reads plain digits,
  `^`, or superscripts, spaced or not; subshell order is free; a noble-gas core
  (`[Kr]`, also typed without brackets) is expanded; capital subshell letters
  are folded; the same electrons per subshell is correct, a core typed against
  a key written out in full is `form`. Its messages say why: the right
  configuration but without the core, the right count in the wrong subshells,
  the wrong total of electrons, a subshell that holds fewer ("A p subshell
  holds at most 6 electrons."), a subshell the shell lacks, a subshell written
  twice. `answerForm="ordering"` reads `<`, `>` (reversed), and members through
  `readSpecies`, with the messages "That is the reverse of the order asked
  for.", "Those are the right members, but not in the right order.", one sign
  all the way, each member once, capitals, and a charge on each ion. The two
  closing sentences, enforced by lint, are "Type each subshell followed by its
  number of electrons, with a space between subshells." and "Type the symbols
  in the order you rank them, separated by <."
- **The subshell label** ("2p", "2p subshell", "2p orbitals" correct; "2s
  subshell" wrong; a bare letter gets "Give the shell number with the
  letter.").
- **Nine gate misreadings fixed** on the first probe of the chapter's real item
  shapes, among them a configuration per element in one sentence, counts per
  lettered orbital label, one yes or no per member of an unlettered list, a
  closed set chosen by letter, and a name the module abbreviates in
  parentheses ("first ionization energy (IE₁)").
- **Later fixes**: a bare comma or space list is refused with "Put < between
  the symbols to show the order." (a list that is not symbols keeps "That does
  not read as a list…"); two lints promoted to errors, an ordering stem that
  prints its members in the key's order or its reverse
  (`orderingStemAnswers`) and `scientific-notation` on a fill-in whose
  question names neither "scientific" nor "exponential" (the scan found 34
  fill-ins in the corpus, all clean, and 6.2's six, since removed); and the
  ledger's "the figure of …, below", which binds the next figure after the item
  (narrowed to "below": teaching "above" rebound 18 finished items).
- **Three gate findings on landed pages**, all the gates' fault: a Xe item
  matched to the Zr exercise after the agent's own change (`ownScore` reads
  the part's `plain` form); the cesium parts that the source sets inline in
  the lead-in (`dataRun`); and the laser colour self-check carrying the word
  of a multi-quantity answer (`carriedWord`).
- **New files**: `assets/js/lib/text/check-config.mjs` and
  `check-config.test.mjs`, `tools/build/typed-writings.mjs` and its test. Tests
  were added in `check-chem.test.mjs`, `lints-leaks.test.mjs`,
  `keyed-units.test.mjs`, `exercise-context.test.mjs`,
  `chemistry-gate-probe.test.mjs`, `knowledge-check.test.mjs`, and
  `verify-replay.test.mjs`. `chemistry-shapes.mjs` gained the configuration,
  ordering, and subshell columns, and `solve.md` gained two lines on how a
  solver types each form.

### The parent's decisions before the wave

From `run-facts.md`, decisions 2 to 6:

- Every key of the chapter depends on a constant, not an atomic mass; the
  constants as the pages state them (h, c, Avogadro's number, the electron
  volt, R∞, a₀, the electron's mass, ħ) each agree with Appendix D at four
  figures, except one.
- **k = 2.180 × 10⁻¹⁸ J on this site**, against the source's 2.179: Appendix D
  gives 2.1798724 × 10⁻¹⁸ J, which is 2.180 at four figures. Every Bohr-model
  example and key was recomputed, with one Source note where 6.2 first states
  k.
- 6.2's radius for n = 8 is **33.87 Å** (64 × 5.292 × 10⁻¹¹ m, four figures),
  not the source's 33.9.
- 6.1's dental X-ray energy is **9.505 × 10⁻¹⁵ J** (hc/λ unrounded), not the
  source's 9.502, which is h times a frequency already rounded.
- Every other numeric key of 6.1 to 6.3 was recomputed and found as printed.

### What each reading found

- Checkers: 5, 2, 4, 5, and 4 defects (6.1 to 6.5) and no wrong key. The most
  serious: 6.1's cesium line keyed "red" where 869 nm is in the infrared;
  Avogadro's number needed by two items and on no page; a colour hint pointing
  at a figure that cannot give the answer.
- Claim pass: 19 findings, from the text against outside sources. Hodgkin's
  death in 1994, not 1993; the AM band's upper edge; the interference caption's
  blue pattern; the standing-wave Summary; the electron's magnetic moment and
  the energy order in a field; de Broglie's thesis year; Born's date;
  four configurations and several cells of the data figures against NIST.
- Second reader (a fresh reader who greps the book first, then opens a
  source): CORRECT for the insulin claim, "orbitals" for Bohr orbits, the
  fine-structure and Zeeman terms, the Davisson–Germer geometry, the
  transition-element definition, and four cells of the successive ionization
  energies; LOOSE for the radii graph, two more of those cells, the radium
  key, and the fluorine Check Your Learning; STANDS for the slit spacing, the
  f-orbital label, and the Shannon-radii remark.
- Consistency reader: 14 findings. The chief ones: `scientific-notation` on
  six keys whose stems do not ask for it; the run facts' relative links against
  the playbook; the playbook's own "in plain text" sentence contradicting its
  rule 9; footer clauses worded three ways.
- Fix check: 7 changes, the parent accepted them; judgment calls ruled in
  place.
- Rendered-page readers (6.1 to 6.4): 0 wrong. The misleading ones: the Source
  note and the footer giving away the cesium colour; 6.2's "the result is the
  same" under a carried-digit line; the subshell field marking "2p subshell"
  wrong with a bare "Not quite"; a source figure's configuration defect carried
  silently. Cosmetic: a flipped exponent sign answered "incorrect" with no
  message, `ml` and `ms` printed as plain letters in the rubric checkboxes.

### The rulings

From `rulings.md` and `rulings-2.md`, by page:

- **Every page**: links are absolute site-root paths; a notation token comes
  from the stem's words; a quotient unit in prose takes a slash; descriptive
  subscripts are upright; a subshell label with a variable shell number is one
  upright token; a count's `answerDisplay` is the bare digit; the eight
  corrected keys of 6.1 and 6.2 are corrections, each with the same item note;
  "wave–particle" takes an en dash, and a source hyphen that stands for a
  dash is set as one.
- **6.1**: the 1994 death year, the AM range corrected to 540–1700 kHz, each
  with a Source note; the interference caption kept and noted; the Summary's
  standing-wave sentence corrected to agree with the body; the cesium line (a)
  ruled infrared with a note that gives no answer; colour items stay
  self-checks; the insulin sentence kept, with a note about the animal
  pancreases since 1923; the slit spacing stands.
- **6.2**: six `scientific-notation` tokens removed; "orbitals" becomes
  "orbits" in the body and printed 25; "Show your calculations." dropped from a
  fill-in stem; the second example's carried-digit note rewritten.
- **6.3**: the spin paragraph corrected with its signs re-derived and the
  splitting in a field named the Zeeman effect; Born, de Broglie, and the
  "1920s" fine-structure sentence each corrected with a note; the
  Davisson–Germer sentence corrected; the f-orbital label stands.
- **6.4**: the configuration table kept as the source's image with a note
  listing the four cells NIST contradicts (Tc, Cm, Bk, Lr); the copper, silver,
  and gold sentence corrected, with Section 2.5 linked; cobalt–60 and
  iodine–131 closings agree with the stem; the half-filled 4s hint names no
  exception.
- **6.5**: the stem of printed 75 re-listed alphabetically, and every ordering
  stem checked; printed 83's element stays a `multiplechoice`; the fluorine
  Check Your Learning keeps Ne and accepts He and H, with the note that names
  neither; a note after the electron-affinity figure and a note after the
  first-ionization-energy figure listing the cells that differ from NIST (and
  fluorine's −328 in the body); notes after the covalent-radius and radii-graph
  figures; four cells of the successive ionization energies noted; the second
  ionization energy item keys Ra and accepts Ba, with a note that names no
  element; the Shannon-radii remark unchanged.

### What the process got wrong

- Run facts decisions 3, 11, and 13 asked for relative links against the
  playbook's rule 9; the pages were right and the run facts were stale.
- Decision 3 put `scientific-notation` on keys whose stems do not ask for it,
  and the consistency reader caught what the lint now holds.
- Decision 8 ruled the colour items multiple choice from a figure that names
  no colours; withdrawn.
- The parent's own Source-note wording for the cesium line gave the answer.
- A ruling for math in `textin` hints and one for criteria rubrics were
  refused by lints; an `accept` member added after the solve was refused by
  the heading lint and reversed.
- The run facts missed that two items need Avogadro's number.

### Outside sources opened

The Nobel Prize organisation's records for Hodgkin (the death date opened
through its API), de Broglie, Lamb's and Davisson's lectures; 47 CFR 73.14;
Crossref for the two 1926 papers; NIST CODATA (the electron g factor); the NIST
Atomic Spectra Database (ground configurations and ionization energies); the
NIST Chemistry WebBook (electron affinities); the FDA's insulin history; the
IUPAC Gold Book from a Web Archive copy. Three addresses refused the parent's
own requests (two Nobel Prize pages and the eCFR page): the saved copies were
read, and the notes paraphrase.

### Kept as printed

From the "Reviewed and not errata (chapter 6)" block of
`docs/openstax-errata.md`:

- The slit-spacing sentences (6.1 body and Summary): the book's own 6.3 states
  the rule the page uses, and nothing opened supports the first reader's physics.
- The f-orbital label f_y(x²−z²): a convention from memory, no source opened
  (the drawn shape cannot tell the two labels apart).
- The ionic-radii remark (Al³⁺ 68 pm, V²⁺ 79 pm): each pair illustrates its own
  point; Shannon 1976 was not opened.
- Ca and Sc IE₅: NIST's values are bracketed, not measured, so the cells and the
  "Not available" cells stand without a note.
- Y, Zr, Nb, Os, and Ir in the first-ionization-energy figure (18–26 kJ/mol
  from NIST): not named on the page, flagged for a ruling.
- The unchecked electron-affinity cells (Li, K, I, Te, Po, N, At), "the second
  element in the group most often has the most negative EA" (true in four of
  seven groups with the corrected cells), the Crab nebula's date and
  colours, and the Example 6.11 solutions' label for the parent atom.
- Standard constants as rounded CODATA values, loose examples ("4G … 880 MHz"),
  and Exercise 61's "half-filled 4s subshell" keyed K.

### What typing the keys showed

96 of 96 correct. The variant pass (116 items) refused only the four
comma-written orderings of 6.5, by design, with "That does not read as a list.
Type the symbols separated by <." The logs read are `typed-1.log` and
`typed-var-1.log`; no `typed-final` pair existed when this was written, so the
totals are those of the first full pass.

### Next

Knowledge Check block 2 (chapters 4–5), from `docs/briefs/chemistry/kc-run.md`;
then chapter 7, after probing its configuration and ordering shapes (the
playbook's "What is still open").

### For Derek

1. **k is printed as 2.180 × 10⁻¹⁸ J against the source's 2.179, and every
   Bohr-model key and example moved.** The source's 2.179 × 10⁻¹⁸ J matches
   the hydrogen-specific Rydberg constant, the reduced-mass value, R_H·hc ≈
   2.1787 × 10⁻¹⁸ J, by the parent's arithmetic (no source opened). So the
   choice is one constant across the book (Appendix D's, 2.180) against the
   source's hydrogen value, not the correction of a slip. Restoring 2.179
   would put the source's seven keys back.
2. Two keys are widened beyond the source (hydrogen for the fluorine Check
   Your Learning; barium for the second ionization energy).
3. The source's data figures are kept as images with Source notes listing the
   cells NIST contradicts, rather than redrawn.
4. A "write a set of quantum numbers" self-check still shows the source's
   particular sets in its rubric.
5. The configuration field takes capital subshell letters and a noble-gas core
   typed without brackets.
6. The 6.3 outline items' closing ("Enter the number of orbitals of type (y)
   shown in the figure above") can be read as a count of what the figure draws;
   left as built.

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
- Section 2.7 reported none: the page has no math.
- Chapter 3 reported four places. 3.2, the Key equations' second row (line
  ~306): a fraction whose numerator and denominator each held a g/mol
  fraction, about 5 pixels tall inside; resolved by writing the unit as its
  symbol, `(\text{amu or g/mol})`. 3.3 line ~75 (the vinegar display): a
  conversion factor inside a numerator, subscripts at script size. 3.3 line
  ~235 (a Key equation, molarity as moles of solute over liters of
  solution): an inline word fraction, small but legible. 3.4 lines
  151–153: three Key equations as inline word fractions.
- Chapter 4 reported none: every author and checker reported none.
- Chapter 5 reported two places. 5.3, the ozone example's inline ratio (286 kJ
  over 2 mol O₃): the subscript 3 is very small. 5.3 printed 63's stem, where
  mhchem sets 5/2 and 3/2 about 6 px tall, and they are what tells the asked
  reaction from the first given one. 5.1 and 5.2 reported none.
- Chapter 6 reported two places. 6.1, the inline Rydberg key equation, barely
  readable inline; left, since key equations are inline bullets. 6.1's second
  example, the nested factor (1 m over 10⁹ nm inside a fraction): reset with a
  slash inside the display. 6.2 to 6.5 reported none.
