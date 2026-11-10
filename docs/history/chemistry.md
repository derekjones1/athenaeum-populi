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

### The `\dfrac` watch list

Every inline fraction an author or checker reports as hard to read under
the ban, with its page and line. The ban is reviewed from this list.

- *(none yet — chapter 1 and the appendices reported none; the three
  rendered-page remarks of the pilot were about size in general, before the
  measurement, and named no item a learner would misread.)*
