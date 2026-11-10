# Chemistry — subject playbook

Pinned November 9, 2026; the engine work and the chapter 1 pilot landed the
same day. This file records the source, the page skeleton, the exercise
rules, the notation and grading rules the engine enforces, and the figure
rules. Every rule here is operative as written and is stated once; "What is
still open" lists what a later chapter settles. A chapter is run from
`docs/briefs/chemistry/run.md`; the pilot's narrative is in
`docs/history/chemistry.md`.

`docs/authoring-playbook.md` is the shared core. Chemistry is the first book
that is neither a math book nor a life-sciences book. Its prose, key terms,
feature boxes, and figures are shaped like the life-sciences books', so it
inherits `docs/subjects/life-sciences.md` "Notation" and "Media: vendored
figures" except where a rule below differs. Its graded items are numbers, so
its fill-ins follow `docs/subjects/math.md` "Fill-in answer shapes" with the
measured-quantity tokens described here.

## Source and authority

- **Pinned source:** `openstax/osbooks-chemistry-bundle` at the commit in
  `data/openstax/source-lock.json` (bundle `chemistry-bundle`, book
  `chemistry`, collection `chemistry-2e`, `col26069`). The repository also
  ships *Chemistry: Atoms First 2e*, which shares 122 of the 149 modules, so
  the checkout is scoped to the Chemistry 2e collection
  (`moduleScope: "mapped-collections"`, 149 modules);
  `npm run source:fetch -- --bundle chemistry-bundle` materializes it.
- **Visual authority:** `sources/chemistry-2e_-_WEB.pdf` (generated
  2026-04-20, 1,203 pages). The baseline is the last upstream commit before
  that date, `7d41ed00` (April 15, 2026).
- **The pin postdates the PDF.** 65 upstream commits separate the baseline
  from the pin, nearly all errata, touching 34 of this book's modules.
  Where the PDF and the CNXML disagree in one of those modules, run
  `git diff 7d41ed00 HEAD -- modules/<id>` in the checkout before logging an
  erratum: the difference may be a correction the PDF predates. Module
  `m68727` (5.3 Enthalpy) was rewritten wholesale in the last commit
  (7,823 lines added, 836 removed) and needs a real read against the PDF
  when chapter 5 is authored.
- **Structure:** flat — 21 chapters, no units, 114 numbered sections
  (chapter 18 has 12). Each chapter's first module becomes the chapter
  `_index.md`. The 13 appendices (`m68859`–`m68871`: the periodic table,
  Essential Mathematics, and eleven data tables) are authored as reference
  pages and mapped ("Appendices"). The preface (`m68662`) is not mapped.
- **License:** the pinned `LICENSE` and the collection metadata say
  **CC BY-NC-SA 4.0**. Senior contributing authors for the footer: Paul
  Flowers, Klaus Theopold, Richard Langley, William R. Robinson.

## Where the files go

`content/physical-sciences/chemistry/NN-chapter-slug/NN-section-slug.md`,
with `NN` the upstream chapter and section numbers. The cover lists chapters
as plain bullets — the source has no units and none are invented. The lock's
`authoringStatus` is `in-progress` and the cover's `authoring_status` copies
it; a finished chapter moves from the cover's "Planned contents" to its
`## Chapters` list. The appendices are
`content/physical-sciences/chemistry/appendices/<letter>-<slug>.md`
("Appendices").

## The section page, in order

*(pilot, chapter 1.)* The page is life-sciences "The section page, in
order" — objectives callout, body with one `##` per CNXML `<section>`, bold
`<term>`s, feature boxes as callouts, `mediafigure`s, Markdown tables,
`## Summary`, `## Key terms`, `## Practice`, the attribution footer — with
these differences:

1. **Feature boxes.** The callout's first line is the printed box name in
   bold, then the note's own `<title>` in italics:

   | `<note class>` | First line |
   |---|---|
   | `link-to-learning` | `**Link to Learning**` (no title; the link text describes the destination) |
   | `everyday-life` | `**Chemistry in Everyday Life.** *Title.*` |
   | `sciences-interconnect` | `**How Sciences Interconnect.** *Title.*` |
   | `chemist-portrait` | `**Portrait of a Chemist.** *Title.*` |

   The first two names are confirmed from the PDF (chapter 1); confirm the
   other two where they first appear. Every feature box is a
   `callout type="info"`.
2. **Worked examples.** A source `<example>` is prose in the body, at its
   source position, in the math books' form: `**Example.** *Its title.*`
   and the problem; `**Solution.**` and the worked solution, every display
   equation transcribed; then its Check Your Learning as the interactive
   item or items the answer's shape calls for (below), placed directly after
   the solution with no "Check Your Learning" label — the item after a
   Solution is that example's check, as the math books' Try It is. The
   source's printed `Answer:` is the key of that item and is not printed as
   prose. A "reason" the solution gives is a claim to test ("Source
   defects").
3. **A display equation row fits the column** (44rem, about 60 rendered
   characters). A longer row is broken — the result and any "(round to …)"
   parenthetical on their own aligned row, or the parenthetical moved to
   prose — because the page scrolls an over-wide row sideways with no
   scrollbar and the learner sees it cut off (browser test).
4. **Tables.** A table's title is a bold line directly above the table; a
   table footnote is a sentence directly below it, marked `*`, `†`, `‡`,
   `§` in the order the notes first appear (written `\*` for the first).
   The source's numbered markers are not kept: a superscript numeral on
   "Density (g/mL)" reads as a power.
5. **`## Summary`** is the module's "Key Concepts and Summary" section, one
   bullet per source paragraph.
6. **`## Key equations`** — the module's `key-equations` section, one
   equation per bullet set as inline math, between `## Summary` and
   `## Key terms`, only where the module has one. An equation is written in
   the form the body gives it: where the source's list lets a unit stand in
   for a quantity (1.6's `T_K = °C + 273.15`), the page writes the body's
   $T_\text{K} = T_{°\text{C}} + 273.15$, the footer says so, and the
   difference is an erratum.
7. **`## Key terms`** is the module's glossary in its CNXML order, every
   definition ending with a period (lint), an alias roman and outside the
   bold: `- **solution** — (also, homogeneous mixture) combination of …`.
8. **The pooled end matter of the PDF** (Key Terms, Key Equations, Summary,
   and Exercises printed once at the chapter's end) is each module's own in
   the CNXML, and that is where the page takes it from.
9. **Small conventions every page follows.** The frontmatter description
   ends "— adapted from OpenStax Chemistry 2e, Section N.M."; the page's
   first figure is `eager="true"`; a reference to a numbered figure or
   table becomes a describing phrase ("the table of densities of common
   substances"); a cross-reference to another section is plain text, the
   source's wording where the source wrote it and "Section 1.4
   Measurements" where the page did (no book in the library links between
   its sections). **A reference to an appendix is the exception: it is a
   link to the appendix's page**,
   `[Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/)`,
   in the body, in an example, and in an exercise stem alike — the source
   links them (73 times; 36 to Appendix G), and a learner sent to a table
   for a value must reach it in one step. The footer says "the references
   to Appendix G linked to its page in this book". A hint may name an
   appendix ("Find the standard enthalpies of formation in Appendix G.")
   but takes no link: a hint is plain text.

## Exercises

*(pilot, chapter 1.)*

**Every keyed source exercise reaches the page, one component per lettered
part, in source order within its objective group. The unkeyed exercises are
omitted, and the footer says how many.** The source keys the odd-numbered
exercises and every Check Your Learning; an item is built on those and on
the module's glossary and summary, never on an answer the author derived.

The component follows the SHAPE of the source's keyed answer:

| The keyed answer is | Component |
|---|---|
| one measured or computed number | `fillin` with `sig-figs:<n> last-digit:<k>` ("Measured quantities"); the stem names the unit |
| a count ("how many significant figures", "how many protons") | `fillin` with `whole-number`, which refuses the stem's own `2.0` retyped against the key `2` |
| a number in a named notation ("in exponential notation") | `fillin` adding `scientific-notation` |
| one of a closed set the stem or its figure names (physical or chemical; element, compound, or mixture; exact or uncertain; an inch, a foot, a yard, or a mile; Archer W, X, Y, or Z) | `multiplechoice` whose options are that set, in its own order — a two-option set is a two-option item |
| a judgment the key supports with a number ("yes; weight = 89.4 kg") | the number as a `fillin` first, then the judgment as a `multiplechoice` |
| a choice from the stem's set with a reason ("law (states a consistently observed phenomenon…)"; "increased, because…") | the choice as a `multiplechoice` first, then a `selfcheck` for the explanation with the source's answer as the model — in that order, so the reveal does not hand over the key |
| a choice that can name two of the stem's categories ("symbolic, microscopic") | one `multiplechoice` whose options are every answer the stem allows, the compound ones written as the key writes them, and the SAME option list on every part of the exercise |
| an SI prefix's factor ("× 10⁻²") | `fillin` keyed with the bare power of ten, `answer="10^{-2}"`, under `sig-figs:1 last-digit:0` — a bare power-of-ten key is an exact factor, so `0.010` and `1.0×10⁻²` are right too ("Measured quantities") |
| the name of a unit that is one word or a counted word ("meters", "kilograms", "square meters", "cubic meters") or of a prefix ("centi") | `textin`; the accept list holds the symbol without operators (`m`, `kg`, `m3`) and every crossing the plural fold cannot reach, which folds the LAST word only: `meters squared\|meter squared\|metres squared\|metre squared` |
| a unit that is a quotient or a product ("meters/second", "kilograms/cubic meter"), or one whose degree sign is the point ("kelvin", never "°K") | `multiplechoice` whose distractors are the confusions the part tests — the product, the inverse, a wrong power, "degrees kelvin" — and never another unit the body allows for the quantity. The text grader reads `/`, `·`, `×`, `*`, and `°` as spaces, so as a `textin` the product passes for the quotient: a key or accept member carrying one is a lint error in this book |
| the name of a compound or an ion ("chromium(III) oxide", "the selenide ion") | `textin`. Capitals, the spaces around a parenthesis, and the parentheses themselves are free; the Roman numeral and every word are not. The grader reads sulph- as sulf-, aluminium as aluminum, and caesium as cesium, so those are never `accept` members; a second name the module itself prints ("ferric nitrate") is |
| a formula or an ion's symbol ("Mn₃(PO₄)₂", "FeCl₃·2H₂O", "Se²⁻", "¹⁴C") | `textin` with `answerForm="formula"` ("Formulas and equations") — never a plain `textin`, which reads `CO` as `Co` (lint) |
| a balanced equation, a half-reaction, a net ionic equation | `textin` with `answerForm="equation"` ("Formulas and equations") |
| several of these at once ("calcium, Ca"; "ionic, Ba²⁺, O²⁻"; an equation and a mass) | one item per piece, each stem saying which: the classification as a `multiplechoice` first, then a formula `textin` per ion |
| a nuclide symbol with both numbers, or counts of particles ("47 protons, 47 electrons, 62 neutrons") | one `whole-number` `fillin` per number, and a formula `textin` for the element's symbol where the key prints one |
| two or more quantities ("5371 °F, 3239 K"; a range; a ratio) | one `fillin` per quantity, each stem saying which |
| an explanation, a list, a description, "answers will vary" | `selfcheck` with the source solution as the model answer and a rubric |
| a drawing | `selfcheck` with the figure in the model answer ("Figures") |

The rules below are grouped — stems, numeric keys, added items, hints,
selfchecks, source defects, the footer — and each is stated once.

### Stems

- **The source stem stays verbatim.** What an item adds goes after it:
  "Enter the volume in liters." A lettered part's stem is the exercise's
  lead-in followed by that part, the letter dropped, and a lead-in that
  addresses the parts together is restated for the one part and nothing
  else changed: "Classify each of the following changes as physical or
  chemical:" becomes "Classify the following change as physical or
  chemical: condensation of steam". The footer says the lead-ins were
  restated in the singular.
- **"Enter the … in …" is added only where the source stem leaves the unit
  open.** One named unit is spelled out ("grams", "liters", "kelvin",
  "degrees Celsius"); a quotient or product unit is its symbol ("g/mL",
  "m/s", "kJ/mol"), since "mol/L·s" has no readable spelled form.
- **"with its sign" is never written** (lint). A negative answer is typed
  with its minus sign as a matter of course, and the phrase on the negative
  keys alone tells the learner the answer is negative.
- **A stem that cannot name its unit without answering** (convert to the SI
  base unit) says "Enter the value without its unit", and the footer says
  which items those are.
- **A key to a place coarser than the data force** — whole dollars — has
  the stem say so: "Enter the cost to the nearest dollar." The sentence is
  for a key COARSER than the data; a source key with more figures than the
  rules give is a source defect (below).
- **Before the book teaches significant figures** (Section 1.5), a measured
  fill-in whose place is not obvious states it in plain words: "Enter the
  mass in grams, to the nearest tenth of a gram." From 1.5 on, the count is
  the learner's to find.
- **A part that leans on an earlier part** ("the cube in part (a)", "the
  nail") restates that part's GIVEN data inline, in its own sentence, never
  its answer: "If a cube with an edge length of 0.843 cm is copper and has a
  mass of 5.34 g, …". No parenthetical sentence and no pointer back: the
  item above is one keystroke from the item below, and a stem that prints
  the answer above it has answered it. "The value you measured in the
  previous item" is only for data the learner measured in a simulation.
  A part that only refers back, with no datum to carry ("This lumber can
  be used as vertical studs…"), keeps the source's words: the coverage
  gate matches a part to its source by its stem, and a reworded referent
  reads as an exercise the page lacks.
- **A datum the source assumes and neither the stem nor the module states**
  (1.6's short ton of 2,000 lb) is added to the stem in parentheses and
  named in the footer; a hint is not where a needed number lives.
- **A cross-reference to an exercise** is read against what the page
  renders. A body reference ("see Exercise 1.42 and Exercise 1.43") names
  only the keyed exercises on the page, by describing them ("see the
  foam-block density-simulation exercise at the end of this section"). A
  stem's reference to an omitted exercise is dropped only after reading
  that exercise for every datum the key depends on — a value, its
  exactness, a stated figure count — and restating each in parentheses
  (1.6's cubit exercise lost "(two significant figures)" with its
  cross-reference). The footer says the reference was dropped.
- **A display equation inside an exercise stem** is set inline in the
  question (a shortcode parameter cannot hold `$$…$$`), with `\frac`, and
  ends its sentence with a period before the part's text begins (lint).
- **An item identified only by formatting is also named in words.** An
  underline is not announced by a screen reader: a stem that asks about
  "the underlined item" keeps the `<u>` and ends with the sentence "(The
  underlined item is “Ni powder”.)".
- **An item bound to a figure or table** says "the figure above" or "the
  table above", so the answer ledger binds them.
- **A count is asked before the quantity it counts.** The grader's own
  feedback names the count ("now round it to 2 significant figures"), so a
  "how many significant figures can you justify" item goes first.
- **A multiple-choice stem ends with its punctuation.**
- **A keyed exercise whose answer comes from a linked simulation** is a
  `selfcheck` with the source's answer as the model answer; the link stays
  in the question.

### Numeric keys

- **Compute every numeric key yourself**, by running the arithmetic, before
  comparing with the source's. A source key your computation does not
  reach, allowance included, is a suspected source defect ("Source
  defects").
- **`last-digit` is decided by where the numbers come from** (this is the
  one statement of the rule):
  - `0` when every number in the calculation is printed in the stem or
    exact by definition, however many steps it takes: a rounding drill,
    significant-figure arithmetic, a metric-prefix conversion, a
    temperature-scale conversion, a density problem whose density the stem
    prints, a conversion whose every route in the book's table is exact.
  - `1` when the learner fetches a measured factor from a table — a
    conversion factor, a molar mass, a constant — since another table
    prints one more or one fewer digit. A stem that prints the factor
    itself is `0`.
  - `2` only when THIS book's own conversion table offers more than one
    route and the routes end more than one unit apart — one of them may be
    exact — with every route computed in the ledger (1.6: Kilimanjaro's
    19,565 ft, 5.9632 to 5.9635 km by the table's routes).
- **A key that is a stem number by the law the item tests** (the total mass
  of products, 200.0 g, from 200.0 g of reactant) stands as a `fillin`; the
  ledger says so.
- **`answerDisplay`**: a count shows the bare digit; a measured value shows
  the value with its unit; a bare power-of-ten factor shows `$10^{-2}$`
  with no leading ×. It is math, so the house lint groups its digits
  ("Notation").

### Added items

- **Fillers.** Each objective needs its group in `## Practice` filled to
  the floor, and the keyed exercises do not cover every objective — a
  chapter-opening module can leave two objectives with none. A group the
  keyed exercises leave short is filled with glossary-recall `textin`s,
  summary or body clozes, and select-the-term `multiplechoice` items under
  life-sciences "Text recall", "Each thing once", and "Leaks across the
  page" — items whose key the module's own glossary or sentence fixes. On
  such a page the added items are most of the practice, so:
  - **One answer fits.** Never blank the last item of an open list ("…to
    medicine and ________") or a word with a common synonym ("reproduced":
    repeated and replicated fit). Run the blank's likely rivals through
    the text grader; if a rival is as right as the key by the sentence
    itself, choose another sentence.
  - **Never a word of its own heading.** A `textin` keyed to a word its
    objective heading prints is a lint error in this book: under
    "Distinguish between mass and weight" the keys `mass` and `weight` are
    answered by elimination.
  - **Never one half of a contrast pair the sentence prints.** "Heat is an
    example of an ________ property, and temperature is an example of an
    intensive property" is answered by elimination, and so is a multiple
    choice whose stem names two of its three options. Key a two-category
    objective's filler on a word that is not a category ("directly
    ________ to the amount of matter").
  - **Where no cloze is unique, a select-the-term `multiplechoice`** whose
    options are all terms one module sentence or list itself prints, the
    key position varied.
  - **A blank followed by its head noun** ("an ________ property") lists
    the phrase with the noun in `accept`, since a learner may type both
    words.
- **Order inside a group:** the source's keyed items first, in source
  order, then the added items — except that an added item goes above a
  keyed `selfcheck` whose model answer prints its key (1.3: the "directly
  proportional" cloze sits above the density explanation), and the footer
  says so.
- **A Check Your Learning item is not repeated in `## Practice`**, and a
  Practice item is not a Check Your Learning with the numbers changed.

### Hints

**A hint names the tool — the equation by its name, the table, the rule or
definition to recall, the unit chain of a multi-step conversion — and never
the fact that decides THIS item.** It never performs or dictates the
arithmetic on the item's own numbers, never remarks on this number's
digits, never states the shape of the result. The pilot's pages broke this
after the rule was written, so the line is drawn by pairs:

| Allowed | Forbidden |
|---|---|
| "Use the Celsius-to-Fahrenheit equation above." | "Multiply by nine-fifths, then add 32." "Add 273.15." |
| "Use the definition of density." | "Divide the mass by the volume." "Cube the edge length." |
| "Find the factor that relates inches and centimeters in the table of conversion factors, and decide which unit must cancel." | "Multiply by the exact inch–centimeter factor." |
| "Test each zero against the rules for leading, captive, and trailing zeros." | "Every digit here is significant." "Leading zeros become the power of ten." |
| "Find the first digit to be dropped, then apply the rounding rules." | "The digit to be dropped is a final 5." "Keep the number's size with a placeholder zero." |
| "Feet to inches to centimeters to kilometers." (a multi-step route, by units, no numbers) | the same route with its factors |
| "Name the law, and ask what enters or leaves the container." | "Every product stays inside the container." |
| "Reread the subsection on derived units." | "A speed is a distance divided by a time." |

- **On a two-option classification** (physical or chemical, exact or
  uncertain) the hint names the question to ask of the case, never one
  category's definition as the place to look — with two options, pointing
  at one is the answer — and never a body example that names the item's own
  case (1.3's body classifies steam and sugar itself).
- A hint never sends the learner to a table that lacks the answer (1.4's
  area item pointed at the table of base units, which has no area unit).
- Several items may share one hint.

### Selfchecks

- **A `selfcheck`'s model answer is the source solution with its first
  letter capitalized and a closing period added, and nothing else**; the
  footer says "capitals and periods added" once. Rubric clauses start
  lowercase. A one-value answer reaches its two rubric clauses by splitting
  the source's own words — the quantity named, and its value with its
  unit. Two exceptions, each said in the footer:
  - **A bare value or bare symbol** ("0.230 g/mL", "d = 3.3 g/mL") has no
    words to split, and a one-letter clause checks nothing: the model
    answer names the quantity in the QUESTION's own words ("The density of
    the foam sample is 0.230 g/mL."), and the rubric is that name and the
    value with its unit, as two clauses.
  - **An "Answers will vary" solution**: the model answer opens with a
    sentence that restates, in the question's own words, what a good answer
    contains, then gives the source's sentence whole — "Answers will vary.
    Sample answer: …" — and the rubric is those criteria; a rubric of the
    sample's own details is one only the sample can meet. `verify:source-keys`
    confirms the form by finding the source's sample carried whole.

### Source defects and Source notes

- **A source key the arithmetic does not reach** is a suspected defect: the
  author transcribes the source key, reports it, and the parent rules. Once
  the CNXML, the PDF, and the computation are compared and the defect is
  confirmed, the page keys the computed value, a Source note follows the
  item, and the parent adds the decisions entry, the `DISCLOSED_DEVIATIONS`
  line, and the erratum (core §0 rule 4).
- **A source key with more figures than the book's own rules give** is the
  same defect. 1.6's Check Your Learning keys 80.92 °C as 177.66 °F; the
  rules of 1.5 give 177.7, and every sibling temperature key in the module
  follows them. Check the siblings before ruling: one outlier among keys
  that follow the rule is a defect, a module that rounds the same way
  throughout is a convention.
- **On a page that teaches a rule, every "reason" a worked example gives,
  and every intermediate value it prints, is a claim to test against that
  rule.** 1.5 states the round-half-to-even rule and then gives "the
  retained digit is even" as the reason for rounding 31.57 to 32; 1.6 says
  273.15 is exact and then adds 273.2. The result is right and the working
  is not: corrected on the page with a Source note, as a wrong key is.
- **A body fact corrected against an outside source** is printed corrected,
  with an italic `*Source note:*` paragraph directly after the corrected
  paragraph that says what the source prints and cites the authority — or
  directly after the figure, when the paragraph introduces one.
- **A Source note beside an unanswered item never lets the key be worked
  out**: no source value, no arithmetic, no direction of the error ("the
  product truncated rather than rounded" told the learner to round up).
  Form: "*Source note:* the answer graded here is not the one the source
  prints for the smallest circumference; the source's value does not follow
  from the stem's data." The erratum holds the numbers.

### The footer

- It states the census: "N exercises the source keys … carried as M items
  (breakdown)", and how many unkeyed exercises are omitted.
- **It never prints or contains an item's key.** A corrected value is
  named, not given ("the source's key for the smallest circumference is
  corrected"). An added item is named by where its sentence is ("a cloze on
  the Summary sentence that defines weight"), never "(blank: gravity)"
  (lint) and never a quoted sentence that contains the answer.
- It names every departure from the source in one clause each: restated
  lead-ins, a datum added to a stem, a dropped cross-reference, an alt
  rewritten against a wrong source alt, a Key equation set in the body's
  form, "capitals and periods added", "unit cancellation set with a
  diagonal strike".

## What the scan found

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

## Notation

**Decided November 9, 2026.** One rule decides every case: **a formula in a
sentence is Unicode text; a formula inside math is `\ce{…}`.**

**In prose** — body text, table cells, captions, alt text, exercise stems,
options, hints — formulas and ions are written with Unicode sub- and
superscripts exactly as in the life-sciences books: `H₂O`, `SO₄²⁻`, `Fe³⁺`,
`CuSO₄·5H₂O`, `¹⁴C`, `1s²2s²2p⁶`. The lint that refuses the ASCII spelling
(`H2O`, `Fe3+`) runs on this book with the whole periodic table, where the
life-sciences books read a short element list. A quantity is prose too:
`15.00 g`, `75.0 mL`, `128.9 g/mol` — never `$15.00\ \text{g}$`, which in
an exercise string is spoken as "15.00g".

**In math** — every source `<equation>`, and any inline span that is
mathematics — a formula is `\ce{…}`. Hugo's embedded KaTeX carries the
mhchem extension, so nothing is loaded:

| Write | For |
|---|---|
| `$$\ce{2H2(g) + O2(g) -> 2H2O(l)}$$` | a reaction: coefficients, counts, and state symbols typed plainly |
| `\ce{N2(g) + 3H2(g) <=> 2NH3(g)}` | an equilibrium arrow |
| `\ce{CaCO3(s) ->[\Delta] CaO(s) + CO2(g)}` | a condition over the arrow |
| `\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}`, `\ce{SO4^2-}`, `\ce{Mn^2+}` | charges: a trailing sign, or `^` before a numbered one |
| `\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}` | a nuclide with both numbers (inline too: Unicode cannot stack them) |
| `\ce{CuSO4*5H2O}` | a hydrate |
| `\ce{…} \qquad \Delta H = -92.2\ \text{kJ}` | a thermochemical equation: the formula in `\ce`, the rest ordinary math |
| `\begin{aligned} \ce{C(s) + O2(g) &-> CO2(g)} & \Delta H &= … \end{aligned}` | steps aligned at the arrow |

- **A formula set by hand in math is a lint error**: bare `H_2O` (math sets
  letters italic, as variables), `\text{H}_2\text{O}`, and `\mathrm{H_2O}`
  all render, and none matches the formulas mhchem sets beside it. The rule
  leaves alone what it cannot tell from variables — `P_1V_1 = P_2V_2`,
  `C_1V_1 = C_2V_2`, a lone `N_2` — so those are read on the rendered page.
- **Symbols for quantities are ordinary math**: `$K_\text{sp}$`,
  `$\Delta H^\circ_\text{f}$`, `$P_1V_1 = P_2V_2$`, `$d = \frac{m}{V}$` —
  italic by house rule, whatever the source's markup (1.3's density
  exercise wraps d, m, and V in `mtext` and prints them upright), and the
  same symbol named in a prose parenthetical is math too: "its mass
  ($m$)". A word equation keeps its words upright:
  `$\text{density} = \frac{\text{mass}}{\text{volume}}$`. A numeric
  exponent is math, as everywhere: `$6.022 \times 10^{23}$`.
- **A fraction in inline math is `\frac`**, as the source sets it, and
  `\dfrac` is banned across the library (lint: it crowds the lines around
  it). An inline fraction sets its digits at 13.6 px (measured; `\dfrac`
  sets them at 19.4 px and pushes the next line from 28 to about 45 px
  away); the pilot's rendered-page readers flagged the size three times,
  and it stays, as the math books' `\tfrac` does. **The ban is kept on
  watch** *(Derek, November 10, 2026)*: wherever it makes a question worse
  or degrades content — digits that cannot be told apart, a fraction of
  fractions that cannot be read, a stem a learner would misread — the
  author or checker reports the item (page, line, the fraction, what is
  lost), the parent adds it to "The `\dfrac` watch list" in
  `docs/history/chemistry.md`, and the ban is revisited from that list,
  not from taste. A display equation is not affected: `$$…$$` sets
  `\frac` at full size.
- **A number in scientific notation never breaks at its ×.** The math
  render hook holds a short inline `a \times 10^{n}` on one line (browser
  test); nothing is written for it. A number and its unit in prose may
  still part at a line end — the library writes no no-break spaces.
- **Digit grouping.** In prose — body text, a stem's words, a table cell —
  digits are grouped exactly as the CNXML prints them: never add or remove
  a comma (the source writes both "1000 mL" and "1,000 mL"). Inside math
  the house lint groups every number of four or more digits
  (`$8{,}119$`, an `answerDisplay` of `$5{,}371\ \text{°F}$`), whatever
  the source prints. The grader reads a typed `5,371` as 5371.
- **A dollar sign inside math is `\text{\textdollar}`**; `\$` is for
  prose only (the lint refuses it in a math span).
- **Life-sciences "Display chemical equations are text, not KaTeX" does not
  apply to this book**: its reactions are `$$\ce{…}$$`.
- **State symbols** are upright inside `\ce{…}` (mhchem follows IUPAC) and
  italic in prose as the book prints them: `H₂O(*l*)`. A lowercase upright
  `l` in the body font is not distinguishable from `I` or `1`.
- **A cancelled unit is `\cancel{\text{…}}`**:
  `$$4.7\ \cancel{\text{g K}} \times \frac{1\ \text{mol K}}{39.10\ \cancel{\text{g K}}} = 0.12\ \text{mol K}$$`.
  The book prints a horizontal strike, which is hard to read through two
  small letters; the diagonal one means the same and is the usual mark. The
  footer of a page that uses it says "unit cancellation set with a diagonal
  strike".
- **The Node gates render with the same extension.** `npm run lint` and
  `npm run verify-section` typeset every math span through
  `tools/lib/katex.mjs`, which loads mhchem; a gate importing `katex`
  directly would call every `\ce` an undefined control sequence
  (`tools/lib/katex.test.mjs` refuses one).
- **Accessible names.** MathLive, which speaks a fill-in's question and a
  multiple choice's options, does not read mhchem, so
  `assets/js/lib/shared/speakable-label.mjs` spells each `\ce{…}` in the
  prose Unicode before the rest is serialized: a compound sounds the same
  in a sentence and in a label.
- **A `textin` question cannot print a power of ten**: it takes no `$…$`
  math, and a Unicode exponent (`10²³`) is a lint error. Word the stem
  without the number, or use `multiplechoice`.

## Graded items

**Decided November 9, 2026: a graded item needs a source key.** The graded
pool is the 873 keyed end-of-section exercises and the 288 Check Your
Learning items. The 863 unkeyed exercises are not given author-derived
keys.

### Formulas and equations: `answerForm="formula"`, `answerForm="equation"`

About 60 keyed answers are a formula and about 200 are an equation, from
chapter 2 on. A `textin` that declares one of these forms is read by
`assets/js/lib/text/check-chem.mjs` — capitals, subscripts, grouping,
charge, hydrate, coefficients — where a plain `textin` reads words:

```
{{</* textin
  question="Write the formula of the following ionic compound: manganese(II) phosphate."
  answer="Mn₃(PO₄)₂"
  answerForm="formula"
  hint="Find the charge of each ion, then the smallest numbers of each that cancel."
*/>}}

{{</* textin
  question="Balance the following equation: Na(s) + H₂O(l) ⟶ NaOH(aq) + H₂(g)."
  answer="2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)"
  answerForm="equation"
  hint="Balance the element that appears in the fewest substances first."
*/>}}
```

What the learner types, and sees. The field carries its own typing guide
("Type subscripts as plain numbers and a charge after ^: Mn3(PO4)2,
SO4^2-."), so no stem spends a sentence on it, and it shows what it has
read in the book's print as the learner types ("Read as: SO₄²⁻").

| Typed | Against | Verdict | Feedback |
|---|---|---|---|
| `Mn3(PO4)2`, `Mn_3(PO_4)_2`, `Mn₃(PO₄)₂` | `Mn₃(PO₄)₂` | correct | |
| `Mn3P2O8`, `ClNa` for `NaCl` | | form | "That has the right atoms — now write the formula in its usual order and grouping." |
| `nacl`, `NACL` | `NaCl` | form | "Those are the right letters — now fix the capitals…" |
| `Co` | `CO` | incorrect | |
| `SO4^2-`, `SO42-`, `SO4-2`, `SO₄²⁻` | `SO₄²⁻` | correct | |
| `FeCl3.2H2O`, `FeCl3*2H2O`, `FeCl₃·2H₂O` | `FeCl₃·2H₂O` | correct | |
| `2Na + 2H2O -> 2NaOH + H2`, the species in any order within a side, with or without state symbols, `=` or `→` for the arrow | the equation above | correct | |
| `4Na + 4H2O -> 4NaOH + 2H2` | | form | "That is balanced — now write it with the smallest whole-number coefficients." |
| `Na + H2O -> NaOH + H2` | | incorrect | "Those are the right substances, but the equation is not balanced…" |
| `8H+ + MnO4- + 5e- -> Mn2+ + 4H2O` | the half-reaction | correct | |

Rules for the key and the stem:

- **The key is written in the book's print**, in Unicode, as every formula
  in prose is ("Notation"): `Mn₃(PO₄)₂`, `SO₄²⁻`, `FeCl₃·2H₂O`, `¹⁴C`,
  `2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)`. A charge is a superscript, so the
  key reads one way (lint); the learner's bare `SO42-` is read every way it
  can be and is right when one reading is the key.
- **An equation key balances, in atoms and in charge, in lowest terms**
  (lint). A source key that fails is a suspected source defect: the scan
  that sized this form found four in the book: chapter 4's "MgC1₂" (a
  digit for the letter), and in chapter 19 "3Cl⁺" for a chloride, "MnO⁴⁻"
  for permanganate, and an iron(III) ion printed without its charge.
- **An equation key keeps the source's state symbols**; a response may
  leave them out, and a state the learner types is compared.
- **A formula's `accept`** holds the other formulas the MODULE prints for
  the substance (`CH3COOH|HC2H3O2` beside `CH₃CO₂H`), typed plainly. An
  equation takes none: order within a side is already free.
- **The stem is prose** — a `textin` question takes no `$…$` — so a formula
  or an equation the stem prints is Unicode text, state symbols included.
- **A formula or equation the stem prints is replayed** (`verify:replay`):
  "Determine the empirical formula: sucrose, C₁₂H₂₂O₁₁" is answered by its
  own stem, and is recorded as a sound coincidence or it fails.
- **Not read by these forms**, and a `selfcheck` until the chapter that
  meets them first settles a form: an electron configuration
  (`[Kr]4d¹⁰5s²`, chapter 6), an ordering ("Rb < Li < N < F", chapter 6),
  a nuclear equation with both numbers on every nuclide (chapter 21), a
  condensed structural formula with its bonds drawn (chapter 20).

### Measured quantities: `sig-figs:<n> last-digit:<k>`

A computed quantity is keyed with the digits its data support (`0.674 M`,
`4.585 × 10²² atoms`), and the digits are part of the answer. The ordinary
fill-in comparison (to nine places) marks a learner wrong for `0.675` when
their molar mass came from another periodic table, and any tolerance wide
enough to take that would also take the unrounded readout `0.67442`. So a
measured quantity declares both tokens, and the comparison is made at the
key's own precision:

```
{{</* fillin
  question="Calculate the molarity of 6.52 g of CoCl₂ (128.9 g/mol) dissolved in an aqueous solution with a total volume of 75.0 mL. Enter the molarity in mol/L."
  answer="0.674"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.674\ M$"
  hint="Convert the mass to moles and the volume to liters first."
*/>}}
```

- **`sig-figs:<n>`** (1–9): the answer is written to n significant figures.
- **`last-digit:<k>`** (0–2): the response, rounded to n figures, may differ
  from the key by k units of the nth digit.
  Which k: "Exercises", "Numeric keys" — `0` for printed or exact numbers,
  `1` when a measured factor comes from a table, `2` for the rare key the
  book's own table reaches by routes more than one unit apart.
  - Both tokens are always declared together — the allowance is the one
    judgment the pair asks of an author, so neither value is a default —
    and `sig-figs:1` takes `last-digit:0` (lint).

What the learner sees, against the key `0.674` under `sig-figs:3 last-digit:1`:

| Typed | Verdict | Feedback |
|---|---|---|
| `0.674`, `0.675`, `0.673`, `6.74×10⁻¹`, `6.74e-1` | correct | |
| `0.67442` | form | "That value is right — now round it to 3 significant figures." |
| `0.67` | form | "That agrees with the answer as far as it goes — now give it to 3 significant figures." |
| `6.52/128.9/0.0750` written as a fraction | form | "…now finish the calculation and enter just the result, to 3 significant figures." |
| `0.674 M`, `0.674 mol/L` | unit | "Right number — enter it without the unit." |
| `0.676`, `0.6` | incorrect | |

Rules for the key and the stem:

- **The key is one number**, a decimal or `a\times10^{n}`, written to the n
  figures it declares. A list, a pair, or an expression cannot declare
  `sig-figs` (lint): an answer of two quantities (`5371 °F, 3239 K`) is two
  fill-ins.
- **The stem names the unit**, and the key carries none: "Enter the
  molarity in mol/L", "Enter the enthalpy change in kJ/mol". A learner
  who types the unit after the right number — one letter included — is told
  to drop it.
- **Count n from the source's answer, and say it when zeros hide it.** A
  whole number ending in zeros shows two or three figures (`350 bar`):
  declare the count the data support. The plain response `350` satisfies
  either count; `3.5 × 10²` shows two figures and `3.50 × 10²` three.
- **Either notation is accepted** unless the ask names one: add
  `scientific-notation` when the stem says "in scientific notation" (a
  calculator's `4.585e22` is then `form`), or `decimal` to require a plain
  decimal.
- **A percent** is keyed bare with the stem naming it ("Enter the percent
  yield as a number, without the percent sign"); a typed `%` is then a unit.
  A key ending in `\%` declares `percent` as well.
- **A count** (significant figures in a number, protons in an atom, a
  reaction order) is not a measured quantity: `whole-number`.
- **A key written as a bare power of ten is an exact factor.** `10^{-2}`
  under `sig-figs:1 last-digit:0` accepts every writing of that number —
  `0.01`, `0.010`, `1.0\times10^{-2}`, the book's `\times10^{-2}` — and
  refuses a value that merely rounds to it (`0.0104`). A MEASURED one-figure
  result is keyed with its coefficient, `1\times10^{3}`, and keeps the
  count: `1.0\times10^{3}` is then `form`.
- **Typing a two-digit exponent works.** In a measured-quantity field every
  digit typed after `^` stays in the exponent, where the math books' fields
  leap out after one.

## Figures

**Decided November 9, 2026: every image ships as the source's raster
through `mediafigure`**, under `docs/subjects/life-sciences.md` "Media:
vendored figures" — its vendoring, its alt and `longdesc` policy, and its
rule that every claim comes off the artwork. Nothing is redrawn: the math
books' analytic-primitive rule governs figures this project draws, and a
Lewis structure redrawn by hand is a chance to move an electron pair,
several hundred times over.

`npm run source:media -- --book chemistry --chapter N` vendors a chapter
(verified on section 7.3: 77 images, 568 KB). Every image upstream is a
JPEG, so the manifest guesses `photo` for all of them: **set `kind` on every
figure** from the picture — a photograph is a `photo`, a drawing, chart,
structure, or labelled apparatus a `diagram`.

**Every alt is written from the artwork; the source's alt is never kept as
it stands.** Chapter 1's source alts called flasks beakers, wax butter, and
a 21.6 mL reading 20.8 mL, and the one alt the pilot kept said "Kelvin
scale" on a page that teaches lowercase kelvin.

**A figure the source marks `class="scaled-down"` or `scaled-down-30`**
(281 of them, small drawings print sets at about half the text width) is
held to that share of the column: `source:media` records the class in the
manifest (`scale`) and the shortcode passes it on. Nothing is written on
the page.

About 490 images sit outside any captioned figure. Each shape has one
answer:

| The source has | Write |
|---|---|
| a structure or diagram in running text or a worked example | a `mediafigure` where the source places it, **with no caption** (the source prints none), `kind="diagram"`, and an alt read off the artwork |
| an image in an exercise stem | the `mediafigure` directly above the item, the stem saying "the figure above" or "shown above" so the answer ledger binds the two; the alt describes what is drawn and never states the answer |
| a drawing as the keyed answer ("Write the Lewis structure for…") | a `selfcheck` whose model answer is the `mediafigure` followed by one or two sentences saying what the drawing shows; the rubric clauses come from those sentences |
| a table printed as an image (the ICE tables of chapters 13–15) | a Markdown table transcribed from the image, the image dropped, and the footer saying so |

```
{{</* selfcheck question="Write the Lewis structure for arsenic trifluoride, AsF₃." hint="Count the valence electrons first." */>}}
{{</* mediafigure src="chemistry/CNX_Chem_07_03_Question7c_img" kind="diagram" alt="A Lewis structure: an arsenic atom with one lone pair, single-bonded to three fluorine atoms, each with three lone pairs." */>}}
{{</* /mediafigure */>}}

Arsenic is the central atom, single-bonded to three fluorine atoms. Arsenic keeps one lone pair, and each fluorine atom has three lone pairs.
===CHECKS===
arsenic is the central atom
single-bonded to three fluorine atoms
each fluorine atom has three lone pairs
{{</* /selfcheck */>}}
```

A drawing answer is never converted to a multiple choice: the source keys
one structure and prints no wrong ones to offer.

## Appendices

*(November 10, 2026.)* The book's thirteen appendices are reference pages,
authored once and complete: `appendices/_index.md` (titled "Appendices",
listing them under `## Appendices`) and one page per appendix,
`<letter>-<slug>.md`, titled "Appendix G: Standard Thermodynamic Properties
for Selected Substances" and declaring `source_appendix: "G"`. The folder's
weight is the book's last, so the sidebar lists it after the final chapter
(`npm run kc -- weights content/physical-sciences/chemistry --write` moves
it when a chapter or check lands). `build-map` maps each page to its module
— Appendix A is the collection's first back-matter module — and a book maps
all of its appendices or none.

An appendix page has no objectives callout, no Summary, no Key terms, and
no Practice: nothing on it is graded. It is the source's tables and figures,
the attribution footer ("This appendix is adapted from …"), and nothing
else except what a rule below adds.

- **No cell of a data table is typed by hand.**
  `node tools/source/appendix-draft.mjs --book chemistry --appendix G
  [--groups rows] [--unfold 3]` writes the Markdown tables from the pinned
  CNXML in the house notation; the author adds the frontmatter, headers the
  source lacks, figures, and the footer.
- **`npm run verify:source-tables` holds every cell of the finished page to
  the CNXML** (2,704 cells; part of `npm test`): each source row is a page
  row, in order, cell for cell, with the typesetting taken away, and a text
  cell's sub- and superscripts told apart. A cell the page writes
  differently on purpose is listed in the tool's `TABLE_NOTES` with its
  reason or its erratum; a listed difference the page no longer has fails
  as stale.
- **What a page does to a source table**, each said in the footer:
  - a full-width row that names a group (an element in Appendix G, a metal
    in Appendix J) is a row with the name in bold in the first column;
  - a cell the source stacks on several lines (Appendix C's equivalents) is
    one row per line, the unit repeated — a `<br>` between math spans does
    not typeset (lint);
  - a cell that spans rows (a polyprotic acid's name) is repeated on each;
  - a table the print folds into side-by-side column sets (Appendix M) is
    one list — in order of atomic number and mass number there, since the
    print's order is its pagination;
  - a table with no header row gets column headings (Appendix C: "Unit",
    "Equivalents");
  - a formula printed as an image is typed as text; a column of drawings
    (the Lewis structures of Appendices H and I) leaves the table and
    follows it under a `## Lewis structures` heading, each a `mediafigure`
    captioned with its row's name;
  - a table printed as an image is transcribed BESIDE the image where the
    image is the page (Appendix A: the periodic table stays, and a table of
    the 118 elements read from it follows).
- **Notation in a table cell.** A formula in a text cell is Unicode
  (`Al³⁺(*aq*)`); a half-reaction or equilibrium the source sets in MathML
  is `$\ce{…}$`, a charge always after `^` (`$\ce{Ce^3+ + 3e^- -> Ce}$`); a
  power of ten is math with its coefficient; a unit with a negative
  exponent is math (`$\text{J}\ \text{K}^{-1}$`), a degree sign there
  `{}^\circ\text{C}`; a minus sign in a text cell is U+2212, whatever dash
  the source typed; a micro prefix is µ (U+00B5). **A complex's square
  brackets are escaped** — `\[Co(en)₃\](ClO₄)₃` — because Markdown reads
  `[…](…)` as a link (lint).
- **Every equation in a data table is balanced by a run**, atoms and
  charge, before the page ships: a source cell that does not balance is a
  source defect. Appendix L had six (a complex printed 3+ for 3−, and five
  ions without their sign); Appendix K had none.
- **Every Lewis structure's electrons are counted** against the species'
  valence electrons. A drawing that falls short ships as the source's
  image — nothing is redrawn — with an alt that says what is drawn and "as
  the source draws it", and a Source note above the structures naming it.
- **A corrected cell** is printed corrected, with a Source note directly
  under the table that names every correction (a reference table has no
  key to protect), a `TABLE_NOTES` deviation, a decisions entry, and the
  erratum. **A stale value is not a defect**: the table's data are the
  source's (the book's keyed answers were worked from them), and a constant
  an outside table now gives differently stays, with a Source note only
  where the table contradicts itself (Appendix D: Faraday's constant is
  not the product of the Avogadro and charge values printed beside it).

The run that authored them is in `docs/history/chemistry.md`.

## Knowledge checks

Decided November 9, 2026: **one check per block of chapters, seven pages.**
The book is flat, so blocks follow the content, and uneven blocks are
accepted where chapters belong together.

**Quota** *(Derek, November 10, 2026)*: **each section of a block carries
two or three items, at least one of them auto-graded** (`fillin`,
`multiplechoice`, `textin`, or `sortbins`; a section of only `selfcheck`s is
not tested). The count is a range because the sections differ — one worked
calculation in some, a dozen in others — and the lint holds it
(`BOOK_RULES['physical-sciences/chemistry'].knowledgeCheck`, which also
lets a check carry `fillin`s: this book's keyed answers are numbers). Three
where the section's content supports three; two is not a shortfall. By
block that is 34–51, 16–24, 30–45, 34–51, 42–63, 22–33, and 50–75 items.

**Where the items come from** *(the parent's working rule for the first
check, chapters 1–3; Derek set the quota, not the source)*: a graded item
needs a source key ("Graded items"), so where a section has a worked
example — 86 of 114 do — one item re-asks that example's question, whose
answer the source prints, with the life-sciences rule that a check's stem
is not a section Practice item's stem; the others are recall items on the
module's own sentences, glossary, and summary, as in the life-sciences
checks. The unkeyed exercises are not a pool: only about one in five sits
beside a keyed twin close enough to vouch for its method. The first check's
run confirms or changes this, and writes the kit.

| Block | Chapters | Sections | Content |
|---|---|---|---|
| 1 | 1–3 | 17 | matter and measurement, atoms and ions, the mole and solutions |
| 2 | 4–5 | 8 | reaction stoichiometry and thermochemistry |
| 3 | 6–8 | 15 | electronic structure, bonding, and molecular geometry |
| 4 | 9–11 | 17 | gases, liquids and solids, solutions |
| 5 | 12–15 | 21 | kinetics and equilibrium, including acid-base and solubility |
| 6 | 16–17 | 11 | thermodynamics and electrochemistry |
| 7 | 18–21 | 25 | descriptive, coordination, organic, and nuclear chemistry |

## What the pilot settled, and what is still open

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
  pages cell by cell ("Appendices").
- **The browser suite types into the real field** (`tests/browser-check.spec.mjs`,
  "Chemistry"): every measured key on 1.6 key by key, a two-digit exponent
  of either sign, a typed unit, the exact power-of-ten factor; and it reads
  the rendered page for what no source gate sees — a display row wider
  than the column, a number in scientific notation split across lines, a
  scaled-down figure at full width.
- **The kit**: `docs/briefs/chemistry/` (`run.md`, the parent's recipe, and
  the author, checker, claim-pass, solve, render-reader, and consistency
  briefs).

Still open:

- the Knowledge Check kit (author, checker, and solve briefs for a block)
  and whether the item-source rule in "Knowledge checks" holds — written
  with the first check, chapters 1–3; the quota itself is settled;
- whether `verify:source-tables` should read the tables of the section
  pages too (the chapters have about 190): it reads appendix pages only,
  and a section's tables are still read by the author and the checker;
- the item form for an electron configuration and for an ordering
  (chapter 6), for a condensed structural formula (chapter 20), and for a
  nuclear equation (chapter 21) — each a `selfcheck` until its chapter
  settles it ("Formulas and equations");
- a browser test that types a formula and an equation into the real field:
  the grader, the lint, and the gates are unit-tested, and chapter 2's
  first page is the first place the suite can type one;
- a long table's header row scrolls out of view (Appendix G is 403 rows):
  the theme sets a table `display: block`, so a sticky header needs a
  table render hook, which would change every table on the site.
