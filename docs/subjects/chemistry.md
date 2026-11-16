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
- **What the source keys:** only the odd-numbered end-of-section
  exercises, as in the printed book, and every Check Your Learning; none
  is multiple choice. About a third of the keyed answers are one number
  with a unit; the rest are sentences, lettered multi-part answers,
  formulas, names, and 65 drawings. Objectives are in `md:abstract`. The
  scan's full counts are in `docs/history/chemistry.md`.
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

   The first two names are confirmed from the PDF (chapter 1) and "Portrait
   of a Chemist" from 2.4's (Paula Hammond), and "How Sciences
   Interconnect" from 3.1's (the neurotransmitter box). Every feature box is a
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
   difference is an erratum. The same holds for any difference between the
   source's key-equations table and the body's equation (4.4: the table
   drops the percent sign the body prints) — the body's form, a footer
   clause, an erratum *(chapter 4)*. A `###` heading under `## Practice`
   drops the objective's closing period (lint); the objectives callout
   keeps the source's punctuation.
7. **`## Key terms`** is the module's glossary in its CNXML order, every
   definition ending with a period (lint; the source prints almost none,
   and the footer does not disclose them), an alias roman and outside the
   bold: `- **solution** — (also, homogeneous mixture) combination of …`.
8. **The pooled end matter of the PDF** (Key Terms, Key Equations, Summary,
   and Exercises printed once at the chapter's end) is each module's own in
   the CNXML, and that is where the page takes it from.
9. **Small conventions every page follows** — none of them is held by a
   lint, so each is the checker's to tick (`checker.md` §3 lists them). The frontmatter description
   ends "— adapted from OpenStax Chemistry 2e, Section N.M."; the page's
   first figure is `eager="true"`; a reference to a numbered figure or
   table in running text becomes a describing phrase ("the table of
   densities of common substances"), and a bare parenthetical one —
   the source's "(Figure 2.16)" — is "(shown in the figure below)", or "the
   photograph", "the table". **A reference to another section is a link
   to that section's page** *(Derek, November 14, 2026; until then it was
   plain text)*: the section named by number and title, the absolute
   site-root path as its target,
   `[Section 5.1 Energy Basics](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/)`,
   in the body, in an example, in a Source note, and in an exercise stem
   alike, with what is meant there named in words beside it ("the table of
   specific heats of common substances in [Section 5.1 Energy Basics](…)").
   A section whose page is not written yet is named the same way in plain
   text, and linked by the run that writes it. The footer says "each
   reference to another section of this book linked to that section's
   page". **A reference to an appendix is a link to the appendix's page**
   in the same places,
   `[Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/)`
   — the source links them (73 times; 36 to Appendix G), and a learner sent
   to a table for a value must reach it in one step. The footer says "the references
   to Appendix G linked to its page in this book". A hint may name an
   appendix or a section ("Find the standard enthalpies of formation in
   Appendix G.") but takes no link: a hint is plain text.

   **Where the content asks the learner to consult what an appendix
   holds, the words are linked to that appendix even where the source
   links nothing** *(Derek, November 10, 2026)*. The test is what the
   learner must do, not what the source marked up: a stem, an example, or
   a body sentence that sends the learner to a table the page itself does
   not show — "Using the periodic table, predict…" on 2.6, which shows
   none (Appendix A); a formation enthalpy, a solubility product, an
   ionization constant, a reduction potential, a half-life the item needs
   and does not print (G, J, H and I, L, M); a conversion factor or a
   constant the page's own tables lack (C, D) — links the phrase that
   names the thing, in the source's words and nothing added:
   `Using the [periodic table](/physical-sciences/chemistry/appendices/a-the-periodic-table/), predict…`.
   **The periodic table is on every page of the book, so no sentence is
   added for it** *(Derek, November 11, 2026)*: the page rail carries a
   "Periodic table" control (the book's `reference` entry in its
   `_index.md`; `layouts/_partials/utils/reference-figure.html`) that opens
   the table in the figure viewer without leaving the page, and a link to
   Appendix A in a section's body or stems opens the same viewer. So where
   a stem names no table — 2.3's "the ion with 54 electrons, 53 protons,
   and 74 neutrons" needs an element for an atomic number and says nothing
   of where to find it — the stem stays the source's words, and so does
   every item whose data are atomic masses (a molar mass, a percent
   composition), however many there are. The lint refuses an added "Use
   the periodic table." **Every other appendix still needs its link on
   each item that needs it**, since each item is answered on its own and
   only the periodic table is at hand. A page that shows the table itself (2.5 prints the
   periodic table) links the words all the same wherever a stem says
   them — "Using the periodic table, classify…", "Use the periodic table
   to give the name…" — since the link opens the table beside the item and
   the figure is screens away *(the November 13 sweep linked 2.5's "Using
   the periodic table" stems; its eight "Use the periodic table" stems
   followed on November 14, and until then this paragraph still said such
   a page "needs no link")*.
   **A link to a table appendix opens the table over the page**
   *(Derek, November 11, 2026)*: Appendices C–M declare `lookup: true`,
   and on a section page a body link to one of them opens it in a dialog
   with a "Filter rows" field — `SiF4` finds SiF₄(*g*) among Appendix G's
   360 rows — instead of leaving the page and the answers typed on it
   (`assets/js/reference-lookup.js`; "Appendices" below). The author's
   part does not change: the stem takes the link, in the source's words,
   and no sentence is added about the dialog or the filter. Appendix B is
   prose and stays a page the reader goes to. The footer says where the words
   were linked: "the words “periodic table” linked to Appendix A …, the
   source linking nothing there".
   A link is not a word of the stem: the source gates read the stem
   without it (`unlinked`, `tools/lib/keyed-units.mjs`; a test holds it).
10. **What the page adds to the source's body** *(November 14, 2026)*.
    The body is the source's text, and three things only are added to it,
    each named in the footer:
    - a `*Source note:*` paragraph ("Source defects and Source notes");
    - **a sentence the section's own exercises need and nothing on the
      page gives**: a method no example shows, or a datum no table prints.
      1.6 keys 161 in.³ to liters and never raises a conversion factor to
      a power, and its table lacks the quart–ounce and gallon–quart
      relations two exercises need; the page adds one sentence on a unit
      raised to a power (illustrated with units no exercise uses, so it
      works no item) and one that points to Appendix C, linked. One or two
      plain sentences, in the body where the method belongs, never in a
      hint ("a hint is not where a needed number lives") and never a
      sentence that works an item's own numbers;
    - **a worked example of the book's own, brought forward from the
      section that prints it**, where this section's exercises ask for a
      method its own examples never work and a later section's example
      does: 4.2 lists the basic-solution steps and works none, its Check
      Your Learning and four exercises ask for one, and Section 17.1's
      example "Balancing Equations for Redox Reactions in Basic Solutions"
      is placed after 4.2's acid example, its equations the source's, its
      step text 4.2's, with a Source note saying where it comes from. The
      later section keeps its example when it is authored. Never an
      example the author writes: its answer would be author-derived.

## Exercises

*(pilot, chapter 1.)*

**Every keyed source exercise reaches the page, one component per lettered
part, in source order within its objective group. The unkeyed exercises are
omitted, and the footer says how many.** The source keys the odd-numbered
exercises and every Check Your Learning; an item is built on those and on
the module's glossary and summary, never on an answer the author derived.
An example may end with more than one Check Your Learning, each with its
own Answer note — three in the book (5.2's copper example, 12.3, 13.4) —
and each is a keyed unit the page carries: the first is
`<example id>#check`, the second `#check2` *(November 14, 2026, chapter 5;
until then every reader took the first and lost the second)*. A Check Your
Learning's stem includes the display equations between its paragraphs (a
Hess's-law check prints its reactions as equations).

The component follows the SHAPE of the source's keyed answer:

| The keyed answer is | Component |
|---|---|
| one measured or computed number | `fillin` with `sig-figs:<n> last-digit:<k>` ("Measured quantities"); the stem names the unit. The key is what this book's own data give ("Numeric keys", "A numeric key is what this book's own data give") |
| a count ("how many significant figures", "how many protons") | `fillin` with `whole-number`, which refuses the stem's own `2.0` retyped against the key `2` |
| a number in a named notation ("in exponential notation") | `fillin` adding `scientific-notation` |
| one of a closed set the stem or its figure names (physical or chemical; element, compound, or mixture; exact or uncertain; an inch, a foot, a yard, or a mile; Archer W, X, Y, or Z) | `multiplechoice` whose options are that set, in its own order — a two-option set is a two-option item |
| a judgment the key supports with a number ("yes; weight = 89.4 kg") | the number as a `fillin` first, then the judgment as a `multiplechoice` |
| a thermochemical equation and its ΔH ("For the reaction H₂(g) + Cl₂(g) ⟶ 2HCl(g) ΔH° = −184.6 kJ") under a stem that asks a number ("What is the enthalpy change …?") | ONE `fillin` keyed with the ΔH; both source gates take it as the whole unit, and `chemistry-shapes` reads the answer as a number. Under a stem that asks the equation as well, an equation `textin` and a ΔH `fillin` (the tool flags it) *(November 14, 2026, chapter 5)* |
| a number in each of two units the stem asks ("1310 J; 313 cal") | one `fillin` per unit, each closing with its unit ("Stems") |
| a choice from the stem's set with a reason ("law (states a consistently observed phenomenon…)"; "increased, because…") | the choice as a `multiplechoice` first, then a `selfcheck` for the explanation with the source's answer as the model — in that order, so the reveal does not hand over the key |
| a choice that can name two of the stem's categories ("symbolic, microscopic") | one `multiplechoice` whose options are every answer the stem allows, the compound ones written as the key writes them, and the SAME option list on every part of the exercise |
| an SI prefix's factor ("× 10⁻²") | `fillin` keyed with the bare power of ten, `answer="10^{-2}"`, under `sig-figs:1 last-digit:0` — a bare power-of-ten key is an exact factor, so `0.010` and `1.0×10⁻²` are right too ("Measured quantities") |
| the name of a unit that is one word or a counted word ("meters", "kilograms", "square meters", "cubic meters") or of a prefix ("centi") | `textin`; the accept list holds the symbol without operators (`m`, `kg`, `m3`) and every crossing the plural fold cannot reach, which folds the LAST word only: `meters squared\|meter squared\|metres squared\|metre squared` |
| a unit that is a quotient or a product ("meters/second", "kilograms/cubic meter"), or one whose degree sign is the point ("kelvin", never "°K") | `multiplechoice` whose distractors are the confusions the part tests — the product, the inverse, a wrong power, "degrees kelvin" — and never another unit the body allows for the quantity. The text grader reads `/`, `·`, `×`, `*`, and `°` as spaces, so as a `textin` the product passes for the quotient: a key or accept member carrying one is a lint error in this book |
| the name of a compound or an ion ("chromium(III) oxide", "the selenide ion") | `textin`. Capitals, the spaces around a parenthesis, and the parentheses themselves are free; the Roman numeral and every word are not. The grader reads sulph- as sulf-, aluminium as aluminum, and caesium as cesium, so those are never `accept` members. A second name the module itself prints for the compound is one — unless the STEM prints it: 2.7 asks for the IUPAC name of "ferric nitrate", and there the old name retyped must be wrong. **A name the module prints as out of date is not a second name** *(Section 2.7)*: "ferrous chloride", which the module says "was known as" and calls nomenclature "largely abandoned", is not an `accept` member of the item that asks FeCl₂'s name, and neither is a name another exercise's stem prints for the compound as the one to be replaced ("titanium tetrachloride"). The grader does not call such a name wrong: a classical -ous/-ic name of the KEYED compound is answered "That is an older name. Give the systematic name." in the tone of a right answer in the wrong form, and the field stays open (`assets/js/lib/text/older-names.mjs`, a table of nine metals; `gradeText` only — every gate still reads it as incorrect; *November 11, 2026, Derek: until then it was refused as plainly wrong*). The older name of a different compound ("ferric chloride" for FeCl₂) is incorrect. **A Greek-prefix name of the KEYED metal compound gets a sibling message** *(November 14, 2026; until then a bare "Not quite")*: "titanium tetrachloride" against `titanium(IV) chloride`, "magnesium dichloride" against `magnesium chloride`, a stem's own prefix name retyped included, is answered "That name counts the atoms with Greek prefixes, as a compound of two nonmetals is named. Name a metal’s compound as an ionic compound, without prefixes." — `form`, the field open, never correct (`assets/js/lib/text/prefix-names.mjs`; the name's counts must give the charge the key prints, so "titanium trichloride" stays plainly incorrect; `gradeText` only, as for the older names). The message does not call the name wrong — IUPAC allows it — and names neither the metal nor whether a numeral is needed. **A name typed without its Roman numeral, or with the charge as an ordinary number, is told so** *(November 14, 2026; until then a bare "Not quite" on eleven items of 2.7)*: "iron chloride" against `iron(II) chloride` is incorrect with "This metal forms more than one ion, so the name must say which: add the ion’s charge as a Roman numeral in parentheses after the metal’s name.", and "iron(2) chloride" or "iron 2+ chloride" is `form` with "That is the right compound — now write the metal ion’s charge as a Roman numeral, not as an ordinary number." A wrong charge in either notation stays plainly incorrect, and neither message gives the numeral (`numeralProblem` in `check-text.mjs`, read only against a key that writes a word and then a numeral in parentheses; `gradeText` only). The lint refuses an older name, a Greek-prefix name of the keyed metal compound, and the keyed name without its numeral or with an ordinary number, as an `accept` member. The item's hint still says what form the name takes — the charge as a Roman numeral in parentheses — since the message does not. The source gate holds a name key to the WHOLE name the source prints: "cobalt(II) chloride" is refused where the source answers "cobalt(II) chloride hexahydrate". **An ion's name is keyed bare** (`selenide`) with the two-word form in `accept` (`selenide ion`): the grader drops "the" and does not drop "ion", so keyed "selenide ion" it marks the bare name wrong |
| a formula or an ion's symbol ("Mn₃(PO₄)₂", "FeCl₃·2H₂O", "Se²⁻", "¹⁴C") | `textin` with `answerForm="formula"` ("Formulas and equations") — never a plain `textin`, which reads `CO` as `Co` (lint) |
| a balanced equation, a half-reaction, a net ionic equation | `textin` with `answerForm="equation"` ("Formulas and equations") |
| an electron configuration ("1s²2s²2p⁶3s²3p²", "[Kr]5s²4d¹⁰") | `textin` with `answerForm="configuration"` ("Electron configurations and orderings"), the stem closing "Type each subshell followed by its number of electrons, with a space between subshells." (lint). One configuration per atom or ion where an answer prints several in turn ("Co has 27 protons, 27 electrons, and 33 neutrons: 1s²…3d⁷. I has …"), each stem saying whose before the typing sentence — "Enter the electron configuration of cobalt-60." — and the counts beside them as the counts row says, "Enter the number of neutrons in an atom of iodine-131."; the gate holds each item to the sentence of the element its closing names *(November 15, 2026, chapter 6)* |
| an atom's configuration and its ion's, or two ions', in one answer ("1s²2s²2p⁶3s²3p¹; Al³⁺: 1s²2s²2p⁶"; "…4p⁵; …4p⁶" for Br and its ion, unlabelled; "K⁺: [Ar], Mg²⁺: [Ne]") | one configuration `textin` each, keyed as printed, the stem closing "Enter the electron configuration of the atom." / "Enter the electron configuration of the ion." before the typing sentence — for two ions of two elements "Enter the electron configuration of the potassium ion." The gate holds each item to its own configuration: by the element its closing names, then by "atom" or "ion" (a label with a charge is the ion's; two unlabelled configurations are the atom's, then the ion's, in the stem's order), and refuses a closing that names neither *(chapter 7)* |
| an ion's configuration printed as a bare noble-gas core ("K⁺: [Ar]") | a configuration `textin` keyed `[Ar]`: the core alone in brackets is a key (lint and gate); the full expansion and any core-plus-rest of the same electrons are graded right, and the neutral atom's configuration is told the count is wrong. Unbracketed, "Ar" is argon's symbol and no configuration *(chapter 7)* |
| an ordering ("Rb < Li < N < F", "Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺") | `textin` with `answerForm="ordering"`, the stem closing "Type the symbols in the order you rank them, separated by <." (lint) *(chapter 6)* |
| an ordering the source prints with commas ("H, C, N, O, F" for "…in order of increasing electronegativity: C, F, H, N, O") | the ordering row: keyed with ` < `, first to last as printed (`H < C < N < O < F`). The gate reads the comma list as that ordering when its members are the stem part's own, and refuses the reverse or any other order *(chapter 7)* |
| an ordering whose members the page's own data tie (7.2: H and P, both 2.1 in the electronegativity figure) | the ordering row, keyed as the source prints it, with the other full order in `accept` (`accept="P < H < S < O < F"` beside `H < P < S < O < F`): graded exactly as the key; the gate still holds `answer` to the source's order ("Electron configurations and orderings") *(chapter 7)* |
| a set of quantum numbers for ONE orbital or electron ("4 0 0 ½"; one per label, "x. 4 0 0 ½, y. 2 1 0 ½, z. 3 2 0 ½") | `textin` with `answerForm="quantum-numbers"` keyed with the source's set in the page's print, `4 0 0 +1/2` ("Sets of quantum numbers"), the stem closing "Type the four values in the order n, l, mₗ, mₛ, separated by spaces." (lint); one item per label, each closing first with the label it asks — "Enter the set for the orbital of type (x) shown in the figure above." — which the gate holds to that label's set. Any mₗ and either spin of the key's n and l is graded right. The sets of SEVERAL electrons at once (6.3's selenium) stay a `selfcheck` ("Selfchecks") *(November 15, 2026)* |
| a subshell ("2 p", "4 d") | a plain `textin` keyed `2p` — no form: the word grader folds the letter's capital and, against a key that is a subshell, a space between the number and the letter, and the noun after it (`2 p`, `2P`, `the 2p subshell`, `2p orbitals` right; `2s`, `3p` wrong; a bare `p` is told "Give the shell number with the letter.") *(chapter 6)* |
| one count per label the stem names ("x. 2, y. 2, z. 2" for three orbitals drawn (x), (y), (z)) | one `whole-number` `fillin` per label, each stem closing with the label it asks: "Enter the number for the orbital of type (x)." — the gate holds each item to its label's number and refuses an item whose closing names none *(chapter 6)* |
| a count said beside labels that are no numbers ("n = 4", "The five degenerate 3d orbitals", "15 (5A)") | a `whole-number` `fillin` keyed with the count (4, 5, 15): the gate reads a subshell's shell number and an old group label as labels, so the 3 of "3d" or the 5 of "5A" is refused *(chapter 6)* |
| a choice the answer names by its LETTER among the stem's lettered parts ("(a) Mg (b) Si (c) S (d) Both Mg and S (e) Both Si and S" → "Although both (b) and (c) are correct, (e) encompasses both and is the best answer.") | ONE `multiplechoice` whose options are the parts, in order, keyed with the part the answer calls THE answer ("is the best answer", "is correct") — one of a closed set *(chapter 6)* |
| a lone letter answering a lead-in that asks for THE one part at an extreme ("For which of the following substances is the least energy required …? (a) MgO … (e) MgF₂" → "(d)") | ONE `multiplechoice` whose options are the parts, in order — one of a closed set (`closedSet` reads a lone letter under "the most", "the least", "the largest" …). "Only (b)", a list of letters, or a lone letter under no such lead-in stays the names-parts row *(chapter 7)* |
| members of the stem's unlettered list, named by the answer ("…isoelectronic with Br⁺: Se²⁺, Se, As⁻, Kr, Ga³⁺, Cl⁻?" → "Se, As⁻") | one `multiplechoice` (`yes`, `no`) per member, in the stem's order, as the row for an answer that names parts: "Is the following atom or ion isoelectronic with Br⁺? Se²⁺" — the member after the question mark. The gate holds yes to the members the answer lists and no to the rest. Where the answer lists EVERY member, it is an ordering written with commas; where it names ONE (6.5's Cl, O, Ba), it is one `multiplechoice` whose options are the stem's list in its order *(chapter 6)* |
| two formulas after an "or" ("Ne or He") | one formula `textin` keyed with the first, the others in `accept` (`accept="He"`) — each is the module's own answer *(chapter 6)* |
| a formula and the symbol of a quantity the module abbreviates ("O, IE₁") | the element: a `multiplechoice` over the stem's list where the stem prints one (a `multiplechoice` takes no closing sentence), otherwise a formula `textin` (`O`, "Enter the element’s symbol."); then a plain `textin` for the quantity's NAME as the module spells it out beside the symbol ("first ionization energy (IE₁)"), the symbol in `accept` (`accept="IE1"`): "Enter the name of the energy." The gate reads the name through the module's own parenthesis (`printedAbbreviations`) *(chapter 6)* |
| two ions the stem tells apart by their charges ("Which ion with a +1 charge … Which ion with a –2 charge …?" → "Rb⁺, Se²⁻") | one formula `textin` per ion, each closing "Enter the symbol of the ion with a +1 charge." — the gate holds each to the ion with the charge its closing names *(chapter 6)* |
| several of these at once ("calcium, Ca"; "ionic, Ba²⁺, O²⁻"; "molecular C₂H₂, empirical CH"; an equation and a mass) | one item per piece, each stem saying which ("Enter the molecular formula."): the classification as a `multiplechoice` first, then a formula `textin` per ion or per formula. **When only some parts have the further pieces** ("(a) covalent; (b) ionic, Ba²⁺, O²⁻" — the source keys nothing more for a covalent part, so there is nothing more to grade there), each part's further items go in a `followup` directly after its `multiplechoice`: in the open they stand under the ionic parts alone and answer the classification by being there. `verify:source-keys` refuses the shape unwrapped (`conditionalUnwrapped`) |
| counts of particles ("47 protons, 47 electrons, 62 neutrons") | one `whole-number` `fillin` per number, each stem closing with a sentence that names the one it asks for in the answer's own word ("Enter the number of neutrons." — the source gate reads that sentence and refuses a swapped pair), and a name or formula `textin` for the element where the key prints one. A count the stem itself prints (the protons of an atom given by its atomic number) is right by the definition the item tests: it stands, and the parent lists it in `verify:replay`'s allowlist ("Numeric keys") |
| a nuclide symbol with its mass number, with or without the atomic number ("¹³³Cs⁺", "²³₁₁Na") | ONE formula `textin`, keyed in print with every number the source prints (the gate refuses `²³Na` where the source prints ²³₁₁Na). A key that prints both numbers asks for both: `^23_11Na` is right, `23Na` is the right nuclide short of its atomic number (form feedback), a wrong atomic number is wrong. A key with the mass number alone leaves the atomic number free, but never wrong. The lint refuses a key whose atomic number is not its element's. The stem ends "Type the mass number, then the atomic number after an underscore, before the symbol: ^14_6C." (or, for a mass number alone, "Type the mass number before the symbol, as in 14C.") — with another nuclide where carbon-14 is the answer. Never a fill-in for a number the stem itself gives |
| a list sorted into the stem's categories by one answer sentence, the stem unlettered ("Ionic: KCl, MgCl₂; Covalent: NCl₃, ICl, PCl₅, CCl₄") | one `multiplechoice` per member, the lead-in restated for one ("…predict whether the following chloride is ionic or covalent: KCl."), the options the stem's categories in its order. The source gate finds the category whose list holds the member the stem prints |
| a list sorted into the stem's categories by SENTENCES, each opening with its members ("P, I, Cl, and O would form anions because they are nonmetals. Mg, In, Cs, Pb, and Co would form cations because they are metals.") | the row above: one `multiplechoice` per member, the question ending with the member after a colon ("Would the following atom be expected to form a negative ion or a positive ion in binary ionic compounds: P?"), the options the stem's categories; then one `selfcheck` with the stem and answer whole, last. The gate reads the one sentence that lists the member, its category word through the module's own parenthetical names ("an anion (a negative ion)", `printedGlosses`); a member printed after the colon is the exercise's, never an unkeyed twin's lettered part of the same symbol *(chapter 7)* |
| one of the stem's own categories for each of TEN OR MORE short lettered parts — names or formulas, each sorted into the categories the lead-in lists ("(a) metal, inner transition metal; (b) nonmetal, representative element; …" for ten elements) | one `sortbins` per classification the stem asks, in the stem's order (2.5: metal or nonmetal, then the further classification): the bins the stem's categories in its order, written as the stem writes them; the labels the parts in source order; the question the lead-in VERBATIM — addressed to the parts together, its colon a period — then one sentence that says which sort ("Sort the elements into metals and nonmetals."; "Sort the elements by the further classification."). Fewer than ten parts, or parts some of which carry further items in a `followup` (2.6's ionic or covalent compounds), stay one `multiplechoice` per part. `verify:source-keys` reads the sortbins as the exercise whose parts its labels are (`judgeKeyedSortbins`): every label a part, every part a label, each label in the one bin its part's answer segment names — by either name of a bin, then through the glossary's alias pairs — and a wrong bin, a missing label, or an extra one is `key-differs`; `verify:source-coverage` counts each labelled part rendered; the blind solve maps every label to a bin. The footer calls them "sort-into-bins items" *(November 14, 2026)* |
| the parts sorted by LETTER under the stem's categories ("ionic: (b), (d), (e), (g), and (i); covalent: (a), (c), (f), (h), (j), and (k)") | the sortbins row (ten or more parts) or one `multiplechoice` per part: each part's answer is the category its letter stands under (`categoryLetterParts`) *(chapter 7)* |
| an answer that NAMES parts instead of answering each ("Only (b)"; "(a), (b), (c), (d), and (e)") | one `multiplechoice` per part with the options `yes` and `no`, the lead-in turned into a question about one part ("Will the following increase the percent of ammonia…? Addition of HCl"; "Does the following nucleus lie within the band of stability shown in the figure above? ²¹¹Pb"). Never one item whose options are the parts: "only" is part of the answer, and five of eight cannot be one choice |
| parts named by FORMULA in a sentence of the answer ("All of these molecules and ions contain polar bonds. Only ClF₅, ClO₂⁻, PCl₃, SeF₄, and PH₂⁻ have dipole moments.") | the row above, one `multiplechoice` (`yes`, `no`) per part ("Does the following molecule or ion have a dipole moment? ClF₅"): the gate says yes to the parts the sentence sharing most words with the question lists. A `selfcheck` with the answer whole comes last, its question the lead-in ALONE: listing the parts binds it to one part, and the gate's `conditionalUnwrapped` refuses it *(chapter 7)* |
| an answer by role for a reaction the stem prints ("Oxidized: Sn²⁺; reduced: H₂O₂; oxidizing agent: H₂O₂; reducing agent: Sn²⁺") | ONE `multiplechoice` per reaction whose options are the reaction's reactants, the stem closing with the one role it asks in the answer's own words ("Which reactant is the oxidizing agent?"). One item, not one per role: with two reactants the second role is the first one's remainder. Not a formula `textin`: the stem prints both candidates. **Where the source prints a role's answer as an ion inside a reactant** ("P³⁻ is oxidized, O₂ is reduced" for K₃P + O₂), the item asks the role whose answer the source prints as a reactant's own formula ("Which reactant is reduced?"), so the key is the source's word *(chapter 4)* |
| an answer that tells atoms of one element apart by MARKING a symbol inside the formula (underlined in the source: "C̲H₃CCH tetrahedral, CH₃C̲C̲H linear") | one `textin` per distinct value, the atom named in WORDS by a closing sentence ("Enter the molecular structure around the carbon atom of the CH₃ group.", "…around each of the other two carbon atoms.", "…around the central carbon atom."), no self-check after them: a field cannot show a mark, and words need none. The gate finds each value in the answer but does not hold it to its atom, so the parent checks each field against the marked symbol. In the BODY, where a set holds three items at most, an answer of more values than that stays a `selfcheck` (7.6’s alanine: ten values) *(chapter 7, November 15, 2026)* |
| a charge ("4+") | `fillin` with `whole-number`, keyed as a signed number (`4`), the stem ending "Enter the charge as a signed number, the sign first, as +1 or −1." — a typed `4+` is `form` and told to put the sign first ("Measured quantities"), and "with its sign" is a lint error ("Stems"). Proven through the gate for a cation (2.3's platinum ion) and an anion (7.1: the gate reads the charge off the ion's superscript, sign last — "P³⁻" keys `-3` — and the stem's "anion" or "cation" chooses among several ions). The field tells `3` against `-3` "The size is right, but the sign is not. …", and `3-` (the sign typed last, as the source prints it) "That has its sign after the number. Type the sign first." *(chapter 7)* |
| an oxidation state, or one per element of a compound ("H +1, P +5, O −2"; "N, +5") | one `fillin` `whole-number` per element, keyed as a signed number (`5`, `-2`), `answerDisplay` as the source prints it, the stem closing "Enter the oxidation state of P as a signed number, the sign first, as +2 or −1." — the element's SYMBOL, which the source gate reads, and an example pair that is no key of the page *(chapter 4)* |
| a formal charge per element ("H: 0, Cl: 0"; "P: 0, Cl 0"; "C −1, O +1"; "N: 0; all three Cl atoms: 0") | the oxidation-state row: one `fillin` `whole-number` per element, keyed as a signed number, `answerDisplay` as the source prints it, the stem closing word for word "Enter the formal charge of Cl as a signed number, the sign first, as +2 or −2." — the element's SYMBOL, one the stem prints in a formula or names ("the carbon monoxide molecule"; lint `FORMAL_CHARGE_CLOSING`). The gate holds each item to its element's number. A figure the answer adds after the numbers is required by no gate; a `selfcheck` that shows it carries the numbers whole, after the fill-ins *(chapter 7)* |
| several equations in one answer ("(complete) … (net)"; an equation for each of three metals; molecular, complete ionic, and net ionic) | one equation `textin` per equation, in the source's order, each stem closing with the sentence that says which: "Enter the complete ionic equation.", "Enter the net ionic equation.", "Enter the equation for the reaction of magnesium." Two of them may share one key (4.1: a reaction with no spectator ion); both stand, and the footer does NOT say so — it would hand over the second key *(chapter 4)* |
| a type of reaction where the stem names no set ("oxidation-reduction (addition)") | a `multiplechoice` whose options are the types the section's own objective names, in its order, then a `selfcheck` with the source's answer whole; the footer says where the options come from *(chapter 4)* |
| an equation the stem itself says may have more than one correct answer, or one that leaves a reactant to the learner ("an appropriate acid"), or two steps with a chained arrow | `selfcheck`, the source's equation the model answer: an equation `textin` takes one answer *(chapter 4)* |
| amounts answered for each part of another exercise ("0.435 mol Na, 0.217 mol Cl₂, 15.4 g Cl₂") | one `fillin` per amount the part ASKS for — an intermediate amount the answer also prints is not asked — each stem closing "Enter the number of moles of Cl₂." or "Enter the mass of Cl₂ in grams.", the substance named by the FORMULA the answer prints (the gate holds each item to its number by that formula) *(chapter 4)* |
| two or more quantities ("5371 °F, 3239 K"; a range; a ratio) | one `fillin` per quantity, each stem saying which |
| a sentence or two that hold symbols among their words ("Al will form a cation with a charge of 3+: Al³⁺, an aluminum ion. Carbon will form an anion with a charge of 4−: C⁴⁻, a carbide ion.") | a formula `textin` per symbol, each stem closing with a sentence that says whose ("Enter the symbol of the ion that carbon forms."), then ONE `selfcheck` with the source's stem and its answer whole — last, so its reveal does not hand over the keys. The gate reads a formula the answer introduces with a colon |
| an explanation, a list, a description, "answers will vary" | `selfcheck` with the source solution as the model answer and a rubric |
| a drawing | `selfcheck` with the figure in the model answer ("Figures") |
| a drawing labelled with the part's own formula ("SeF₆: [structure]") | the drawing row: the label is no word of the answer, and the model answer need not print it *(chapter 7)* |
| a drawing and words ("eight electrons: [symbol]"; "[structure] In this case, the Lewis structure is inadequate …") | the drawing row, the source's words carried whole beside the figure ("Eight electrons:", the figure, then the sentence about it); a part answered in words only ("no electrons Be²⁺") is a `selfcheck` whose model answer is those words ("No electrons: Be²⁺.") *(chapter 7)* |
| drawings for each part and a choice among the parts named in the last part's answer (7.4: "(a) [CO₂] (b) [CO] CO has the strongest carbon-oxygen bond …") | (a)'s drawing `selfcheck`, then ONE `multiplechoice` over the parts ("…Indicate which has the strongest carbon-oxygen bond: CO₂ or CO?"), then (b)'s drawing `selfcheck` carrying the source's sentence whole. Not a separate last sentence `selfcheck`: under the choice's question it binds to (a) and lacks (a)'s drawing *(chapter 7)* |
| two values named in one answer ("electron-pair geometry: octahedral, molecular structure: square pyramidal"; "The electron-pair geometry is trigonal bipyramidal. The molecular structure is linear."; "Both the electron geometry and the molecular structure are octahedral.") | two plain `textin`s, the geometry first (lint), closing "Enter the electron-pair geometry." and "Enter the molecular structure."; the gate holds each to its own value. An angle the source prints after a shape ("bent (109°)") is no part of the key (`bent`), and the grader takes it typed after the name. A geometry key takes as `accept` only a form the module prints (`trigonal bipyramid` beside `trigonal bipyramidal`; the source's own word is the key where it prints the noun) *(chapter 7)* |
| a part told apart from its siblings only by bold type inside a formula ("**C**H₃CCH tetrahedral, CH₃**CC**H linear") | one `selfcheck` whose model answer is the source's answer with its bold and nothing added; the rubric clauses are its own runs ("**C**H₃CCH tetrahedral") *(chapter 7)* |

**Multiple choice stays open** *(Derek, November 10, 2026)*. Where a keyed
answer is a choice among things the stem itself prints — its categories,
its lettered parts, the reactants of its reaction, yes or no to its
question — the item is a `multiplechoice` (or, for ten or more short
parts sorted into the stem's categories, one `sortbins` per
classification: the row above), auto-graded, and never falls
back to a `selfcheck` because a gate cannot yet read the form: the gate is
taught the form, with a test (`run.md` §1 step 6a). What does not change is
where the options come from: the stem's own set, in its order, the key the
source's — never a distractor the author invented.

**An `accept` member is one of two things** *(chapter 2, Sections
2.5–2.6)*. It is **another name or form of the answer that the module
itself prints** for the same thing — a synonym, a second name for a
compound or a group, an abbreviation, a unit's symbol, a formula written
another way: 2.5's "oxygen group" beside the key `chalcogen`,
`CH3COOH|HC2H3O2` beside `CH₃CO₂H` — never one the author knows from
elsewhere, never one the stem prints, and never one the module calls out
of date (the name row). Or it is **the key's own words spelled another
way that the grader does not fold**, which no module needs to print: a
British spelling outside the grader's three element folds (`metres`,
`metres squared` — the grader reads sulph- as sulf-, aluminium and
caesium, and nothing else), an irregular plural or singular, the closed
or open form of a compound word (`oxy acid` beside `oxyacid`), the
blank's phrase with its head noun ("Added items"), or another form of the
key's own word that completes the stem's sentence as well (`soy` beside
`soybeans`, `experiment` beside `experimentation`: 1.1). A spelling the grader
already reads — capitals, a hyphen, a regular plural, sulph- — is never a
member. The life-sciences rule that `accept` lists "a standard
abbreviation" is narrowed here to an abbreviation the module prints.
**A geometry name's `accept` members are the forms the module prints**
*(chapter 7)*: `trigonal bipyramid` beside `trigonal bipyramidal` (7.6's
text and caption print both); never a solid's name the module does not
print as the shape (octahedron, tetrahedron, square pyramid), and never
an open form ("see saw") — the grader already folds the hyphen
(`see-saw`), capitals, and an angle typed after the name ("bent (109°)").

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
  "m/s", "kJ/mol"), since "mol/L·s" has no readable spelled form. A unit
  the book itself prints only as a symbol (amu) is named by that symbol:
  "Enter the average atomic mass in amu." *(chapter 2)*
- **In a `fillin` or `multiplechoice` stem a reaction is `$\ce{…}$`**,
  whether the source set it as MathML or as text with subscripts, and a
  `selfcheck` that shares the stem takes the same form; a `textin` stem
  stays Unicode (it cannot hold math). **One too long for the item's card
  is split after its arrow into two math spans**, `$\ce{… ->}$ $\ce{…}$`,
  so the line can wrap (a browser test holds it; the source gates read
  either form). A unit is never inside a stem's math span
  (`$1.00 \times 10^{3}$ kg` — lint), and a symbol with its value is
  `($d$ = 0.7134 g/mL)` *(chapter 4)*.
- **A symbol with its value in a stem is the symbol in math and the value
  and unit in prose**, the minus sign U+2212: `$\Delta H^\circ$ = −314 kJ`
  *(November 14, 2026, chapter 5)* — the form of all running text
  ("Notation"). A Hess's-law stem therefore reads
  "…from the following information: `$\ce{Sb(s) + 3/2Cl2(g) -> SbCl3(s)}$
  $\Delta H^\circ$ = −314 kJ; $\ce{SbCl3(s) + Cl2(g) -> SbCl5(s)}$
  $\Delta H^\circ$ = −80 kJ`." — each reaction and its ΔH, a semicolon
  between the pairs. The stem's math is spoken whole and a unit inside it
  is read as a product, so a value and its unit inside a stem's math span
  is a lint error (`$\Delta H = -314\ \text{kJ}$`, as `$12.0\ \text{kg}$`).
  Body display math keeps the Notation table's
  `\ce{…} \qquad \Delta H = -92.2\ \text{kJ}`.
- **One part asked in two units and answered in both** ("Calculate the heat
  capacity, in joules and in calories per degree, of the following: …" →
  "47.6 J/°C; 11.38 cal °C⁻¹"; "How much heat, in joules and in calories,
  …" → "1310 J; 313 cal", 5.1) is one fill-in per unit, each closing with a
  sentence that names its unit: "Enter the heat capacity in J/°C.", "Enter
  the heat in calories." `verify:source-keys` holds each item to the number
  printed under the unit its closing sentence names (an item that names
  neither is refused), and `verify:source-coverage` requires both items for
  the part *(November 14, 2026, chapter 5)*. One value printed twice under a
  stem that asks it once ("41,360 J/mol or 41.4 kJ/mol") is one item, keyed
  with either.
- **A key with a fractional coefficient closes "Type a fraction as 1/2."**
  (lint), as a half-reaction item closes "Type an electron as e-.": the
  equation field's guide says nothing of fractions *(November 14, 2026,
  chapter 5)*.
- **A half-reaction item closes "Type an electron as e-."** (lint): the
  equation field's guide does not say an electron is typed *(chapter 4)*.
- **A lettered part that names an earlier part by what it produced**
  ("(b) Perform the calculations outlined.") keeps the source's order, the
  earlier part first, when that part's answer holds no key of the later
  one (4.3: the outline is a chain of steps with no number) *(chapter 4)*.
- **A plain-text address in a stem that no longer answers** is printed
  without its scheme, so the page does not link a dead page; the footer
  says what it returned and when, and the erratum the same *(chapter 4)*.
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
- **A part named by its letter is named by its position** *(chapter 2)*.
  The page prints no part letters, so "your prediction from (a)", "the
  molecules drawn in (a) and (b)", and a model answer's "the predictions
  from (a), (b), and (c)" become "the previous item", "the two previous
  items", "the first of the three previous items" — in the stem and in
  the model answer alike, nothing else changed, the footer saying so
  once. No lint reads a question for "(a)": the checker does.
- **A keyed exercise that says "repeat [another exercise]"** (2.3: "Repeat
  [Exercise 2.25] using an element that has three naturally occurring
  isotopes"; 2.4's Build a Molecule exercise) points at an unkeyed
  exercise the page omits, and the learner cannot repeat what the page
  does not print. The stem keeps the source's words with the number
  replaced by "the following exercise" or "the exercise described below",
  and the omitted exercise's text is restated VERBATIM in the same
  question — whole, with its letters, where the answer is one paragraph;
  its set-up sentences in a closing parenthesis, "(The exercise: …)",
  where this exercise has parts of its own. The source gates read such an
  item as the exercise that refers, not the one it quotes
  (`keyed-units.mjs`, `refersTo`). The footer says the reference was
  replaced by the omitted exercise's text.
- **A datum the source assumes and neither the stem nor the module states**
  (1.6's short ton of 2,000 lb) is added to the stem in parentheses and
  named in the footer; a hint is not where a needed number lives.
- **A stem that needs an example or an exercise of another section** keeps
  the source's words with the reference named by title and section and
  linked by page-skeleton rule 9 (an absolute site-root path; plain text
  only for a section not yet on the site) ("the example “Heat Flow in an
  Instant Ice Pack” in [Section 5.2 Calorimetry](/physical-sciences/chemistry/05-thermochemistry/02-calorimetry/)"
  *(chapter 6)*), then restates in one parenthesis every GIVEN datum the key
  depends on — never the example's result or the exercise's answer — and
  the source gates match such a stem (`withoutCrossReference`). A table of
  another section is named by its describing phrase and section, never by a
  table number *(chapter 5)*.
- **A reaction inline in BODY text too long for a phone's line is split
  after its arrow into two math spans**, as a stem's is (5.3's two
  formation equations made the page scroll sideways at 390 px), and **no
  period, comma, or semicolon stands inside `\ce{…}`**: mhchem draws it as
  a raised dot (lint) *(chapter 5)*.
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
- **A stem that asks about each part of ANOTHER exercise** ("Determine
  the number of moles and the mass requested for each reaction in
  [Exercise 4.40]"; "…each cell in the previous exercise") and is answered
  part by part is one item per answered part: this exercise's lead-in
  restated for one, then the referenced exercise's part VERBATIM — the
  reaction, the cell, the complex, with its data. The referenced exercise
  is an even-numbered one the page omits, so its part is the only place
  the learner meets the datum, and it is what the source gates match
  (nine exercises: 4.3 twice, 13.2, 17.1 twice, 17.2 twice, 17.7, 19.2).
  The footer says the parts were restated from the omitted exercise.
- **An item bound to a figure or table** says "the figure above" or "the
  table above", so the answer ledger binds them. A figure the source places
  AFTER its item is named by what it shows, then "below": "the figure of the
  photons a hydrogen atom absorbs and emits, below" (6.2) — the ledger binds
  that form to the next figure after the item *(November 15, 2026)*.
  **Where a paragraph names two figures, each gets a describing phrase and
  "above" or "below"**, never a bare "the figure below" twice; a stem whose
  figure the source places after the item says "the figure of …, below",
  and the answer ledger binds it to the next figure *(chapter 6)*.
- **A lettered part that is only an image** ("(a) [structure] (b)
  [structure]", 2.4) has no words of its own: its `mediafigure` goes
  directly above its item or items, and each stem is the lead-in restated
  for one, "…of the following compound, shown in the figure above." The
  figure is the only thing that tells the parts apart, for the learner and
  for the source gates, which match such a part by the image its item is
  bound to. `chemistry-shapes` lists every such part under Notes.
- **A key whose word is not in the stem's own set** — 2.6 asks "ionic or
  covalent" and answers "molecular" — keeps the stem's set as the options
  and keys the stem's word; the footer names the difference and the
  inconsistency is an erratum. The section's own text must make the two
  words one (2.6 calls covalent compounds molecular compounds); where it
  does not, the parent rules. The source gate reads the answer through the
  module glossary's own "(also, …)" pairs (`glossaryAliases`), so such a
  key is confirmed and a wrong one refused; a word the glossary does not
  pair is a prose key, and the checker's to tick. **An option the stem
  prints with its second name in parentheses** — 2.5's "main-group
  (representative) element", answered "representative element" — is
  written as the stem writes it and is named by either name; so is a
  `sortbins` bin.
- **A count is asked before the quantity it counts.** The grader's own
  feedback names the count ("now round it to 2 significant figures"), so a
  "how many significant figures can you justify" item goes first.
- **Every stem ends with its punctuation** (read by the checker; no lint
  holds it) *(chapter 3)*. A part that closes the stem takes a period —
  "…the following molecule? CH₄." — and an added "Enter …" sentence comes
  after it. The one exception is a part that is a bare number to be
  rounded or counted (1.5), where a period would read as part of the
  numeral.
- **An ordering stem never lists its members in the key's order or its
  reverse**: a list that does answers the item whatever the field
  requires, and the replay does not see it (6.5's "Mg, Ca, Rb, Cs" for the
  key Mg < Ca < Rb < Cs; the rendered-page reader found it). The members
  are re-listed alphabetically by symbol (by element name where that
  reproduces the key), with a footer clause (lint, `orderingStemAnswers`)
  *(chapter 6)*.
- **The closing sentence of a name or symbol item says whose**: "Enter the
  element’s name." and "Enter the element’s symbol." for an element;
  "Enter the ion’s symbol.", "Enter the ion’s name.", "Enter the symbol of
  the cation." for an ion *(chapter 2; 2.3's earlier "Name the element."
  stands)*. Where one exercise is carried as two sorts under one lead-in
  (2.5: metal or nonmetal, then the further classification — two
  `sortbins` since November 14, 2026, twenty multiple choices before),
  each closes with a sentence that says which — "Sort the elements into
  metals and nonmetals.", "Sort the elements by the further
  classification." A classification followed by
  formula items (2.6) needs none: its options say which.
- **A keyed exercise whose answer comes from a linked simulation** is a
  `selfcheck` with the source's answer as the model answer; the link stays
  in the question.

### Numeric keys

- **Compute every numeric key yourself**, by running the arithmetic, before
  comparing with the source's. A source key your computation does not
  reach, allowance included, is a suspected source defect ("Source
  defects").
- **A key that depends on a table of values is what that table gives**,
  through the module's own rule (an electronegativity comparison from the
  page's figure of electronegativities; a bond energy from its table): where
  the table decides against the source, the page keys the table's answer
  with a Source note and an erratum; where it ties two members, both orders
  are right (an ordering's `accept`, "Electron configurations and
  orderings"); where a yes-or-no turns on the tie, the item is a `selfcheck`
  with a Source note *(chapter 7)*.
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
    itself is `0`. So is an item where `1` would grade a number the stem
    prints as correct (3.3: 4.25 g of NH₃ in 0.500 L is 0.499 M, and the
    stem's own 0.500 typed back must be wrong — `verify:replay` refuses
    the item otherwise), once every common table is seen to give the key.
    The same holds where `1` would grade a value reachable WITHOUT the
    stem's data (4.5: the percent of gallium from the formula alone, 22.5,
    beside the data's 22.4) *(chapter 4)*.
  - `2` only when THIS book's own conversion table offers more than one
    route and the routes end more than one unit apart — one of them may be
    exact — with every route computed in the ledger (1.6: Kilimanjaro's
    19,565 ft, 5.9632 to 5.9635 km by the table's routes). Every route is
    this book's own data and the key is one of them.
  - **Any measured value the learner fetches from a table is `1`** — a
    section's table of specific heats, Appendix G, Appendix C's measured
    factors, an atomic mass — whether or not the stem names the table; a key
    every number of which is in the stem takes `0`. `2` needs two routes
    through this book's own tables that end more than a unit apart; it is
    never the way to accept a source's print (5.1's waterbed) *(chapter 5)*.
- **A numeric key is what this book's own data give: one data set, one
  right answer** *(Derek, November 12, 2026; this supersedes the November
  11 ruling that the source's value stays the key, and the second "worked"
  value that stood beside it for a day)*. The book's periodic table is
  `data/chemistry/elements.json` — IUPAC's abridged standard atomic weights
  (CIAAW, Abridged Standard Atomic Weights 2024: five significant figures,
  fewer where an element's isotopic composition varies) — and Appendix A's
  figure and its table of the elements are both drawn from that file. The
  source's answer key was worked from other masses than its own four-figure
  table (1990s values: H 1.00794, Cl 35.4527, Zn 65.39), so no table
  reproduces every answer it prints. The key is therefore this book's: one
  value, and a correct response reads the ordinary "Correct — 0.08644 g
  O₂." The number the source prints, where it differs, is recorded and is
  never shown to the learner; it is graded right only when it falls inside
  the item's ordinary `last-digit` allowance.
  - **One method, for the author, the checker, the solver, and the gate.**
    Take each atomic mass from the table exactly as printed, trailing zeros
    included (H is 1.0080). A formula, molecular, or molar mass: each
    element's subtotal is count × mass and keeps the mass's decimal places;
    the sum is rounded to the place of its least precise subtotal. Compute
    it with the tool, never by hand: `node tools/verify/molar-mass.mjs
    "Ca(NO3)2"` prints the sum and its terms, and `--table` prints the
    calculation as a Markdown table. That rounded molar mass is then used,
    every later step is carried unrounded — an earlier part's rounded
    answer is NOT reused in a later part — and only the final result is
    rounded, to the item's declared `sig-figs:<n>`. A constant the page
    states is used as stated (6.022 × 10²³). Run the arithmetic; keep the
    script's output.
  - **A formula, molecular, or molar mass asked for itself** is
    `sig-figs:<n> last-digit:1`, n the figures of the table's sum (18.015
    → 5; 123.896 → 6). The gate holds such a key to the tool's sum exactly
    (`table-differs`; no entry excuses it), and `node
    tools/verify/molar-mass.mjs --page <page>` prints ✓ for each one it
    reads.
  - **Any other fill-in whose key depends on an atomic mass** keeps the
    count of figures its stem's data support and takes `last-digit:1`.
    Where a stem gives no number of its own (the mass of carbon in a mole
    of C₅H₁₂), every digit of the answer is the table's, and so is the
    count: 60.055, not 60.05.
  - **Where the key stands a unit or two of its last place from the
    source's print, the gate reads a data difference** (`data-differs`,
    `verify:source-keys`): the item carries `last-digit:1` or `2`, and the
    source's number is within 0.1 percent of its print plus one unit of the
    last place, and never more than two units, counted at the coarser of
    the two last places (`dataDifference`; the gate's reading, *chapter 5*).
    Every such item is a row
    of `data/verification/source-print-differences.json`, which the gate
    writes on request (`node tools/verify/verify-source-keys.mjs content
    --write-register`) and otherwise checks in both directions; review a
    change to that file like a key change. A page with at least one row
    carries ONE paragraph, and a page with none carries none (gate):
    "*Source note:* the source’s answer key for some exercises of this
    section was worked from atomic masses other than the ones in this
    book’s periodic table. The answers here are worked from this book’s
    table (Appendix A), so some differ from the source’s in their last
    digits." It sits directly under `## Practice`, before the first
    objective heading — or directly after the item, when the page's only
    such key is a Check Your Learning in the body (4.5). This is not a
    correction of the source: no `DISCLOSED_DEVIATIONS` line, and one
    erratum per module records the source's out-of-date masses.
  - **A row is not an attribution, and a correction is something else.**
    A unit or two of the last figure on an item that fetches a mass is a
    row, whatever mix of older masses and a step rounded on the way
    produced the source's print: on 4.3 the mass of C₂H₄ is 5.82 g here
    and 5.81 in the source, which is what the source's four-figure masses
    give by this book's method AND what its own first answer, 0.207 mol
    already rounded, gives — nobody can say which, and the learner needs
    neither. A key is a CORRECTION — a `DISCLOSED_DEVIATIONS` key entry,
    an erratum, an item-level Source note ("Source defects") — when it is
    more than two units from the source's print, or when no atomic mass
    enters the item at all (3.3's dilution, below). **A difference no atomic
    mass causes is a correction, never a row**: 5.3's propane part (d), and
    5.3's ammonium nitrate, whose source key divides a heat it had rounded
    *(chapter 5)*.
  - **The body's worked examples are recomputed from the table**: every
    molar mass an example prints is the tool's rounded sum (58.319 for
    Mg(OH)₂, not 58.3, whatever figures the example's data have) and every
    number downstream of it follows; the final result keeps the count of
    figures the source's result shows. Directly after the first
    calculation that changed, one paragraph: where a result moved,
    "*Source note:* the source works this section’s examples with atomic
    masses rounded to four figures. Here they are worked with the masses
    this book’s periodic table prints (Appendix A), so some results differ
    from the source’s in their last digits."; where only the printed molar
    masses moved, "*Source note:* the molar masses in this section’s
    examples are computed from this book’s periodic table (Appendix A), so
    they differ in their last digits from the ones the source prints; the
    examples’ results are the same." The footer says so in one clause.
    Data an example or a stem GIVES is never changed.
  - **A worked example never reuses a value it has rounded** *(November
    14, 2026)*. Section 3.3 tells the learner not to round an
    intermediate result, and the examples are what a learner copies: 2.3's
    chlorine example printed 1.99705x = 1.513, and a learner who rounded
    the same way got 69.16 for the copper Check Your Learning keyed 69.15.
    A value that answers a question the example asks is printed at its
    figures (1.31 × 10²⁰ molecules); where a LATER step uses it, that step
    prints it with the digits carried — enough that retracing the printed
    line gives the printed result with no tie at the last figure
    (1.31499 × 10²⁰ × 7 = 9.20 × 10²⁰; 1.9926 amu + 8.8184 amu = 10.81
    amu). The result does not change; one Source note directly after the
    first such calculation on the page — "*Source note:* the source rounds
    the intermediate values of this section’s … calculations before it adds
    or divides them. Here each intermediate value is printed with the
    digits that are carried, and only the result is rounded; the results
    are the same." — a footer clause, and one erratum per module. Done on
    2.3, 3.1, 4.4, and 4.5; the checker retraces every example from its
    PRINTED numbers and applies its method to its Check Your Learning
    (`checker.md`).
  - **A molar mass a stem states for a named compound** prints the table's
    value at the stem's own count of figures, with an item-level Source
    note, when the table gives another (3.4: ethanol 46.07 where the
    source prints 46.06). **A stated value that is simply wrong is
    replaced the same way, and the key is then what the printed value
    gives** *(November 14, 2026)*: 3.3's Check Your Learning gives CoCl₂
    128.9 g/mol, the table gives 129.83, the stem prints 129.8, and the key
    moves four units with it — a correction, so a `DISCLOSED_DEVIATIONS`
    key entry, the item's "the answer graded …" Source note, and the
    erratum. Until then the source's stem and key stood, and a learner who
    took the molar mass from the periodic table was marked wrong with
    nothing said: a stem never states a datum the book's own table
    contradicts.
  - **The author's rework is not the check.** A checker who has not read
    the author's notes recomputes every mass-dependent number on the page,
    moved or not, and the blind solver answers every mass-dependent item
    from Appendix A. `last-digit:1` grades a neighbouring value as right,
    so `solve:compare` lists each agreement that holds only inside the
    allowance (`≈`): read every row against the table. On 3.1 the checker
    found five keys left on the old masses, and on 4.4 the solver found a
    theoretical yield (0.5073 g of copper from the printed 159.60) that
    author and checker had both passed from the unrounded sum.
  - **No allowance is widened for rounding at each step** *(chapter 4)*:
    the book teaches carrying values unrounded (Section 3.3), so a response
    that rounds each step and lands a unit away is graded by the same
    `last-digit` as any other — `0` when every number is in the stem.
    **A step-rounder is told, not accepted** *(November 12, 2026)*: every
    such miss measured in chapter 4 lands one or two units of the last
    figure outside the allowance (34.9 for 35.0, 73.5 for 73.3 ± 1, 86.53
    for 86.56 ± 1), and there the fill-in says "Close, but not within
    rounding of the answer…" in place of "Not quite" (`compareMeasured`'s
    `near`; the table under "Measured quantities" quotes it). The verdict
    is incorrect and no key or token changed for it; no hint needs a
    sentence about rounding.
  - **A key the source's own rounded stem misses is a corrected key.**
    Printed 3.59 dilutes 0.1718 L of 0.3556 M propanol to 0.1222 M and
    answers 0.5000 L; the stem's numbers return 0.4999, and the source's
    next exercise gives "0.5000 L of a 0.1222-M solution" as data — the
    stem was built from the answer and rounded. The page keys 0.4999,
    `sig-figs:4 last-digit:0` (every number is in the stem), with an
    item-level Source note, an erratum, and a `DISCLOSED_DEVIATIONS`
    entry. A tie rounded the other way is decided by the book's own
    rounding rule (3.51(d), exactly 5.85 × 10⁻⁷: the rule decides the KEY,
    with the Source note of "Source defects" in 1.6's wording, and the
    item takes `last-digit:1` so that the tie rounded half up is right too
    — the item tests molarity, not rounding; a rounding drill of 1.5 keeps
    `last-digit:0`).
  - **A key the source's own arithmetic misrounds** — every number in the
    stem, the unrounded result one unit from the printed answer (4.5's
    oxalic acid Check Your Learning, 0.264733 printed as 0.2648) — is a
    source defect: the page keys the computed value with a Source note, and
    takes `last-digit:1` so that the source's printed value is still right
    *(chapter 4)*. A slip of arithmetic or of copying in a worked example
    (3.2's 8.624 for the 8.641 of the line above) is corrected the same
    way.
  - **No width is chosen, and no key has a second value.** Chapters 3 and
    4 first graded these items inside a relative band, `tolerance:<p>%`,
    set once per chapter (0.05%, then 0.2%): on the one item it took in
    chapter 4 it graded a molar mass rounded to three figures correct. For
    a day a per-item `worked:<value>` replaced it, and a right answer read
    "the source’s answer is …; this book’s own data give …", which read as
    the book disagreeing with itself. Both tokens are gone from the
    grader; a page that declares either does not build.
- **The question's words decide a heat key's sign** *(chapter 5)*. "How
  much heat is produced / released / evolved / given off" asks an amount: a
  positive number. "q", "ΔH", "enthalpy change", "enthalpy of solution /
  combustion / formation", and "heat of combustion / formation" ask a signed
  quantity; "heat involved" is signed too, and its item closes "Enter the
  heat, $q$, in kilojoules." so the stem says so. A source key that goes
  against its own question's words is a correction (5.3: −54.04 and −66.4
  under "produced" and "evolved"; +81 for an exothermic dissolution). A hint
  on a "heat produced" item does not end at a negative number.
- **"One data set" covers every table of the book, not only the atomic
  masses** *(chapter 5)*: water's specific heat is the section table's
  4.184 J/g °C wherever a stem gives none (5.2's TNT exercise reaches the
  source's key only with 4.18).
- **A constant is data like an atomic mass.** The run facts list every
  constant a key uses, as the page states it and as Appendix D gives it,
  whether or not the page states it (6.1's Avogadro's number was needed
  by two items and was on no page). A constant the page states that
  Appendix D's value does not round to is replaced on the page by
  Appendix D's value at the page's figures, with one Source note where it
  is first stated (6.2: the source's k = 2.179 × 10⁻¹⁸ J; Appendix D's
  2.1798724 × 10⁻¹⁸ J is 2.180), and every example and key is
  recomputed. Each key that moves is a correction (a `DISCLOSED_DEVIATIONS`
  key entry, one erratum for the constant), and its item note reads
  "*Source note:* the answer graded for this exercise is worked with this
  book’s value of $k$; the source’s answer was worked with another
  value." — true whether or not the source's print still falls inside
  `last-digit:1`. A page-level test counts the notes against the
  entries (`verify-source-keys.test.mjs`: each must open, at the start of
  a line, with "*Source note:* the answer graded ") *(chapter 6)*.
- **Figure counts of a key** *(chapter 5)*: an exact divisor or multiplier
  keeps every figure of the table value (−1378.83 kJ for 3 Mn is 459.610
  per mole of Mn, six figures; (66.4 + 114.1) ÷ 2 is 90.25, four), and a
  difference of two temperatures has the figures its last place gives
  (110 °C − 100 °C is 10 °C, two figures). A key ruled after the blind solve
  has its figure count read again by the solver's note, not by the parent
  alone.
- **A key that is a stem number by the law the item tests** (the total mass
  of products, 200.0 g, from 200.0 g of reactant) stands as a `fillin`; the
  ledger says so.
- **`answerDisplay`**: a count shows the bare digit, also where the source
  prints it with a label ("n = 4", "15 (5A)") *(chapter 6)*; a measured value shows
  the value with its unit; a bare power-of-ten factor shows `$10^{-2}$`
  with no leading ×. It is math, so the house lint groups its digits
  ("Notation").

### Added items

- **The practice floor is the `default` `BOOK_RULES` profile**: two
  exercises per objective group and five per section, each group with at
  least one auto-graded item (lint).
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
    key position varied. It is a question, and a blank never opens it:
    "Which scientist does the following statement describe? …" *(chapter
    2: "________ discovered that…" reads aloud as nothing)*; a page uses
    one form throughout. Under a heading that names its key it stands only
    if the heading names at least one other option too — a heading may
    narrow the choice, never make it (no lint: the heading-word lint reads
    `textin` only).
  - **A two-option select-the-term item** stands only where the module's
    sentence or list prints exactly two terms of the kind (atomic masses
    and atomic numbers; ionic and covalent bonds); otherwise the options
    are three to five. The stem either quotes the module's sentence after
    "Which … does the following statement describe?" or asks a direct
    "Which …?" question — one form on a page.
  - **Never a working word of the page's own stems.** A glossary recall
    keyed `group` or `period` on the page whose source stems say "the
    following group" and "in the same period as" is answered by the items
    around it. Before adding a filler to an objective, ask whether a keyed exercise
    placed elsewhere serves that objective at least as well.
  - **A blank followed by its head noun** ("an ________ property") lists
    the phrase with the noun in `accept`, since a learner may type both
    words.
- **Beyond the floor: one item for a subsection nothing practises**
  *(Derek, November 11, 2026)*. A group already at the floor takes an
  added item for one reason only: a headed subsection of the body that no
  source item on the page touches. It gets ONE item, a filler under every
  rule above, its key fixed by the module's own glossary, table, or
  sentence. Section 2.7's six keyed exercises and two Check Your Learnings
  fill the floor many times over and ask nothing about an acid, so "Binary
  Acids" and "Oxyacids" each have one glossary recall (`binary acid`,
  `oxyacid`). The footer names the items and the reason ("since no keyed
  exercise or Check Your Learning asks …"). Never a second item for a
  subsection, never one for a subsection a source item already reaches
  (an accepted second answer counts: 2.7's HBr item accepts "hydrobromic
  acid" and still is not practice in naming acids, which is why the two
  recalls stand), and never to lengthen a group for its own sake. Whether
  a subsection is "touched" is a reading, not something a gate can count:
  the author names the subsection in the ledger note, and the checker
  reads the claim.
- **A long group is divided by `####` sub-headings where its run changes
  kind** *(November 14, 2026)*. 1.6 asked 49 items under one objective,
  and 4.2 sixteen half-reaction balances under "Compute the oxidation
  states for elements in compounds". A sub-heading is a label for the run
  below it — `#### Temperature conversions`, `#### Balancing
  half-reactions` — in the page's own words for the thing (a body heading,
  an example's title, the objective's phrase), never the method and never
  an answer; it has no closing period, labels at least two items, and is
  not repeated on the page (lint). The `###` groups are still the
  objectives, one each and in order, and the items keep their source
  order: a sub-heading goes where the source's run changes kind, items are
  not moved to fit one, and a run that returns to an earlier kind is
  labelled as what it is ("More unit conversions"). The group's opening
  items may stand above the first sub-heading. No count forces one — a
  run of thirty items of one kind has no seam to label — so whether a
  group needs dividing is the author's reading and the checker's tick: any
  group of more than about twenty items is read for seams.
- **Order inside a group:** the source's keyed items first, in source
  order, then the added items — except that an added item goes above a
  keyed `selfcheck` whose model answer prints its key (1.3: the "directly
  proportional" cloze sits above the density explanation), and the footer
  says so.
- **A keyed `selfcheck` whose reveal answers a LATER keyed item of the
  group goes after that item**, and the footer says so (4.2: the silver
  exercise's model answer names the type the next exercise's first part
  asks) *(chapter 4)*.
- **A Check Your Learning item is not repeated in `## Practice`** — unless
  a keyed exercise of the source repeats it (4.4's Freon-12 exercise):
  every keyed exercise reaches the page, and the footer says the source
  repeats it *(chapter 4)* — and a Practice item is not a Check Your
  Learning with the numbers changed.

### Hints

- **A heading of the same page is a "subsection"** ("see the Lewis Symbols
  subsection above"); "Section" is a numbered page of the book, linked
  ("Section 7.3") *(chapter 7)*.

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
| "Convert the mass to moles with a molar mass computed from the formula." "…with the atomic mass from the periodic table." (an element) | "…with the molar mass of CuI from the periodic table." (the table prints no compound's molar mass) |

- **On a two-option classification** (physical or chemical, exact or
  uncertain) the hint names the question to ask of the case, never one
  category's definition as the place to look — with two options, pointing
  at one is the answer — and never a body example that names the item's own
  case (1.3's body classifies steam and sugar itself). **On any
  two-option item** a hint never says what one option was replaced by, used before, or is "instead" — "what
  Mendeleev's table was arranged by, and what the relationship was found
  to involve instead" marks the wrong option, which is the key by
  elimination.
- A hint never sends the learner to a table that lacks the answer (1.4's
  area item pointed at the table of base units, which has no area unit).
- **A hint never points at a body passage that works the item's own
  question** *(chapter 3)*: 3.2's body computes ammonia's percent
  composition, and printed 3.33(a) asks it — "the method of the ammonia
  calculation above" is the answer. Name the equation.
- **A hint that needs a table of another section names the table and the
  section** in words (a hint is plain text and holds no link): "the table of common
  polyatomic ions in Section 2.6 Ionic and Molecular Compounds", never
  "the common polyatomic ions" on a page that prints none *(Section 2.7)*.
- **Where the module names one substance two ways by its state** (HBr the
  gas, hydrogen bromide; HBr in water, hydrobromic acid), the hint names
  the subsection whose rule decides, never the observation that decides
  it ("the formula prints no state") *(Section 2.7: a parent decision
  allowed that sentence, and the checker and the consistency reader both
  read it as the answer)*.
- Several items may share one hint — and **a shared hint is read, key
  covered, against every item it serves**, the module's own named
  exceptions first *(chapter 2: "ask whether a metal is combined with
  nonmetals" gave covalent for (NH₄)₂CO₃, which is ionic)*. **The parts
  of one exercise are a family** *(swept November 14, 2026)*: 1.2's eight
  element-compound-mixture parts carried eight hints, the two mixtures'
  alone generic, and three exercises of 4.1 a part or two with a hint of
  its own; each now has one. A part that is a different kind of ask (a
  net ionic equation among molecular ones) is not a tell. A hint shared
  across the parts of one exercise may name every table the set needs
  ("the periodic table and the table of common polyatomic ions"); it is
  never split by which part needs which table, since the split tells.
- **A hint shared by a family of items is read against every member, and a
  member whose hint differs is a tell** (4.1: the one net-ionic item with
  no spectator ion had its own wording). Write one sentence true of all:
  "Compare each species on the two sides of the complete ionic equation,
  and remove any that appear unchanged on both." *(chapter 4)*
- **A hint for a calorimetry item whose solution's mass is the water plus
  what dissolved says so** ("the mass of the water and the dissolved solid
  together"), with no number: the water's mass alone gives a neighbouring
  value the item marks wrong *(chapter 5)*.
- **A hint that sends the learner to read small print in a RASTER figure**
  (a name or a value in a photograph or a scanned chart) also names the
  table that lists it, in plain words. **The periodic table is not such a
  figure** *(November 14, 2026)*: it is the book's own drawing, opened at
  full size from the "Periodic table" control on every page, with the
  table of the elements under it in Appendix A — so a hint says "the
  periodic table" and nothing more ("…with the atomic mass from the
  periodic table", the table above). The rule was written for 2.5 when
  the periodic table was the source's image; it was never swept to the 46
  hints of 2.3, 2.6, 3.1, 3.3, and 4.3 that say "the periodic table"
  alone, and those are right as they stand.
- **The lint sees two shapes of this rule and no more** — a hint that opens
  with an arithmetic imperative (multiply, divide, add, subtract, cube,
  square), and a verdict on the number's digits — on every auto-graded
  item. Everything else in the table is the checker's to read, key covered.

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
    **The same form for an answer that is one possible case without the
    words** *(chapter 2)* — a simulation exercise whose solution ends "Other
    answers for this exercise are possible if a different element or
    isotope is chosen", one that opens "Let us use neon as an example":
    the opening sentence, then the added label "Sample answer:" and the
    part's own segment of the source's answer, whole. A sentence the source
    prints once for the whole exercise stays in the part it closes and is
    not copied into the others; the gate holds each part to its own
    segment. The footer says the opening sentence and the label are added.
- **A "write a set of …" answer** for ONE orbital or electron is a graded
  `textin` with `answerForm="quantum-numbers"` ("Sets of quantum numbers"),
  which takes any correct set *(November 15, 2026, Derek)*. A set for
  SEVERAL electrons at once (6.3's six for selenium's n = 4 electrons) is
  one possible case of an arrangement, and stays a `selfcheck` in the
  same form as above:
  an opening sentence that says what EVERY correct set has (the values the
  question fixes, and the range each free value may take), the added label
  "Sample answer:", and the source's set, whole. The rubric is the opening
  sentence's clauses, so a learner who wrote a different correct set can
  tick every box; a rubric of the source's own rows is one only the
  source's set can meet. The hint may still say which values are free
  *(chapter 6; first written with the source's rows as the rubric, and
  rewritten November 15, 2026)*.
- **Every rubric clause is a run of the model answer's words** *(November
  15, 2026, Derek; a lint error in this book)*: copied, never reworded,
  and never two runs joined over the words between them. "This amount is
  worthless" from "This amount cannot be weighed by ordinary balances and
  is worthless" was refused: a clause that leaves words out is how a "not"
  gets dropped. Capitals and punctuation are not compared. The model
  answer is read as it prints, so a clause's plain text is its TeX and
  markup: `$m_l$` is "mₗ", `$\frac{4}{5}$` is "4/5", `4*s*` is "4s",
  `\ce{^{6}_{3}Li+}` is "⁶₃Li⁺", `D_\text{HCl}` may be "D(HCl)", and a
  `mediafigure`'s alt is not read at all. A plus or a minus sign IS
  compared ("δ−" is not "δ+"). Where a whole statement is not a run:
  - **a parenthesis in the middle is copied with the clause** ("the
    particle's momentum (mathematical product of mass and velocity) must
    be sufficiently small…");
  - **a sentence the page wrote itself** — the opening sentence of a
    "Sample answer" form, the sentence under a drawing — **is written so
    each clause is a run of it** ("A good answer states the numbers…,
    states its net charge, and states its mass number"; "For $p_y$, the p
    orbital along the $y$ axis is drawn as…");
  - **a source sentence that gives one subject two predicates** leaves the
    second clause starting at its verb ("is worthless", 4.4); the subject
    is not supplied again.

  The reading is `tools/lib/rubric-run.mjs`. The life-sciences books keep
  their word-overlap bar (`docs/subjects/life-sciences.md`: "there is no
  rubric sweep").

### Source defects and Source notes

- **A Source note beside an item the learner has not yet answered says
  THAT the source's answer differs, never what the corrected fact is** —
  it sits above the field, and the corrected value or name answers the
  item *(chapter 7)*.
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
- **A key with FEWER figures than the data give** (4.3: 6.8 × 10² g beside
  the same part's 8.00 mol) is keyed at the data's count with the source's
  value, an erratum, and a Source note that says only that the graded
  answer is written to the figures its data give *(chapter 4)*. **Every
  disclosed key deviation of this book carries a "the answer graded …"
  Source note** — a misprinted letter in a formula included (2.7's "AIF₃",
  4.1's "MgC1₂") — and a test counts them: the chapter 4 run facts ruled
  "no note" for both of these and the test refused the page.
- **A source equation that cannot be right by the book's own tables** (4.2:
  Na₂S and CO₂ from Na₂CO₃ and H₂S, against Appendix H's ionization
  constants) becomes a `selfcheck` whose model answer is the corrected
  equation, with the Source note directly AFTER the block: it says the
  model answer is not the source's and cites the table, and names no
  product *(chapter 4)*.
- **A statement the calendar has overtaken** ("being developed", a
  company's present tense) keeps the source's words; where a source was
  opened, a Source note gives the later fact and its date; where none was,
  it stands *(chapter 4)*.
- **On a page that teaches a rule, every "reason" a worked example gives,
  and every intermediate value it prints, is a claim to test against that
  rule.** 1.5 states the round-half-to-even rule and then gives "the
  retained digit is even" as the reason for rounding 31.57 to 32; 1.6 says
  273.15 is exact and then adds 273.2. The result is right and the working
  is not: corrected on the page with a Source note, as a wrong key is.
- **A body fact corrected against an outside source** is printed corrected,
  with an italic `*Source note:*` paragraph directly after the corrected
  paragraph that says what the source prints and cites the authority — or
  directly after the figure or table, when the paragraph introduces one
  (lint: a note between a paragraph that points "below" and its figure or
  table). A corrected Key-terms definition takes its note directly after
  the list.
  **A claim that is loose rather than wrong keeps the source's words and
  takes a Source note that says what is missing** (2.5: "one of their
  discoveries" of Tacke and Noddack, of whose two reported elements one
  was confirmed; a rule for bracketed atomic masses that the page's own
  table shows three exceptions to).
- **A data figure that is the source's raster image keeps its cells; a
  Source note directly after the figure lists each cell that differs from
  the measured value, as the figure prints it and as measured, with one
  threshold stated or implied for the whole list**, and the extended
  description transcribes the figure as printed (6.4's configuration
  table; 6.5's electron-affinity and ionization-energy figures). **A key
  widened to accept a second answer the page's own data or a measurement
  supports** (6.5: hydrogen; barium) carries the note "*Source note:* the
  answer graded for this exercise is not only the one the source prints",
  naming no element *(chapter 6)*.
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
- **An `answerForm="equation"` item is counted as an "equation text-recall
  item"**, and a footer never prints a key, a corrected one included
  *(chapter 5)*.
- **A footer never prints a key's value** (lint): it names the value ("the
  value the source's answer prints for copper(II) oxide") *(chapter 4)*.
  **Identical source keys are not a departure** and take no clause. **A
  `followup`'s clause says the further item appears once the first is
  answered correctly.**
- **One phrase per kind of item** (lint): "multiple-choice items",
  "fill-ins", "text-recall items", "formula text-recall items",
  "sort-into-bins items", "self-checks" — never "multiple choices",
  "recall items (textin)", or "formula items", which nine footers of
  chapters 1, 2, and 4 said until November 14, 2026. The hyphenated
  adjective ("a multiple-choice stem") is not an item's name.
- **Which objective a keyed exercise is placed under is the page's
  structure, not a departure**, and takes no clause.
- It names every departure from the source in one clause each: restated
  lead-ins, a datum added to a stem, a dropped cross-reference, an alt
  rewritten against a wrong source alt, a Key equation set in the body's
  form, "capitals and periods added", "unit cancellation set with a
  diagonal strike".

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
an exercise string is spoken as "15.00g". A minus sign, and the sign of a
negative charge, is U+2212 (−) wherever it stands — prose, stems, model
answers, table cells — whatever dash the source typed (2.3's source
writes "[53 – (1–) = 54]" with en dashes). An expression with no
unit is all math or all prose, never half: `$Z = 11$`, not "$Z$ = 11".
**A symbol given a measured value in running text is the symbol in math
and the equals sign, value, and unit in prose** — `$q$ = −2.9 kJ`,
`$T_\text{i,rebar}$ = 248 °C`, `$\Delta H^\circ$ = −314 kJ` — in a body
sentence, a solution, a model answer, and an exercise stem alike *(Derek,
November 14, 2026: one ruling for text; until then the body set it whole
in math and only stems split it)*. The quantity is prose like every other
quantity, a worked example reads as the exercise under it does, and the
templates hold the symbol and its value on one line. Arithmetic stays in
math — a fraction, a conversion factor, a chain of equalities, a relation
between two quantities (`$1\ \text{ppm} = 10^{3}\ \text{ppb}$`) — and so do
display math and an `answerDisplay`. The lint refuses an inline span that
is only a symbol, an equals sign, and a value with its unit.
**A quotient unit in prose, stems, and closing sentences is written with a
slash** (m/s, J/mol, kJ/mol); only a bare reciprocal keeps its exponent, as
its own math span (`$\text{s}^{-1}$`, `$\text{m}^{-1}$`). Body display math
keeps the source's form, and each change from the source's form is a
footer clause *(chapter 6)*. **A subshell label with a variable shell
number is one upright Unicode token**, n included: "ns", "(n − 1)d",
"ns²np³" *(chapter 6)*. **"Wave–particle" takes an en dash**, and a
source hyphen that stands for a dash ("wave-they", "range-wavelengths") is
set as the dash the house uses elsewhere on the page, with a footer clause
*(chapter 6)*.

**In math** — every source `<equation>` that is mathematics, and any
inline span that is — a formula is `\ce{…}`. (A source `<equation>` that
only sets a name beside a formula, as 2.7's two hydrates are, is prose:
one line each, "name, formula", in Unicode.) Hugo's embedded KaTeX carries the
mhchem extension, so nothing is loaded:

| Write | For |
|---|---|
| `$$\ce{2H2(g) + O2(g) -> 2H2O(l)}$$` | a reaction: coefficients, counts, and state symbols typed plainly |
| `\ce{N2(g) + 3H2(g) <=> 2NH3(g)}` | an equilibrium arrow |
| `\ce{CaCO3(s) ->[\Delta] CaO(s) + CO2(g)}` | a condition over the arrow |
| `\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}`, `\ce{SO4^2-}`, `\ce{Mn^2+}` | charges: a trailing sign, or `^` before a numbered one |
| `\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}` | a nuclide with both numbers (inline too: Unicode cannot stack them) |
| `\ce{CuSO4*5H2O}` | a hydrate |
| `\ce{…} \qquad \Delta H = -92.2\ \text{kJ}` | a thermochemical equation in BODY display math: the formula in `\ce`, the rest ordinary math (a stem writes `$\Delta H^\circ$ = −314 kJ`: "Stems") |
| `\begin{aligned} \ce{C(s) + O2(g) &-> CO2(g)} & \Delta H &= … \end{aligned}` | steps aligned at the arrow |

- **Descriptive subscripts are upright**: `$E_\text{f}$`, `$n_\text{i}$`;
  a subscript that is itself a variable stays italic *(chapter 6)*.
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
  it). An inline fraction is set small, as the math books' `\tfrac` is
  (the measurements are in `docs/history/chemistry.md`). **The ban is kept on
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
  the source prints. The grader reads a typed `5,371` as 5371. The lint
  lets 1000–2099 through as possible years; the rule does not:
  `1{,}000\ \text{mL}` *(chapter 3)*.
- **Rows of an `aligned` display that each hold a fraction are separated
  by `\\[6pt]`** *(chapter 3, the rendered-page readers)*: with a bare
  `\\` one row's denominator sits on the next row's numerator and the
  column reads as one tall fraction.
- **The molar unit after a number is `*M*` in prose and stems** ("0.30 *M*
  glucose", "5.3 m*M*") and `M` inside math (`$0.674\ M$`); the quantity
  symbol named in a parenthetical is math, "**Molarity ($M$)**". The
  fill-in's accessible name drops the emphasis markers
  (`assets/js/lib/shared/speakable-label.mjs`).
- **A micro prefix inside math is `\mu` before the unit**,
  `\mu\text{g}`: the site's KaTeX refuses `\text{µg}` under strict mode.
  Prose keeps µ (U+00B5).
- **A tilde that means "about" before a math span goes inside the span**,
  `(${\sim}10^{-3}$ mol)`, so the line cannot break between them.
- **A dollar sign inside math is `\text{\textdollar}`**; `\$` is for
  prose only (the lint refuses it in a math span).
- **Life-sciences "Display chemical equations are text, not KaTeX" does not
  apply to this book**: its reactions are `$$\ce{…}$$`.
- **State symbols** are upright inside `\ce{…}` (mhchem follows IUPAC) and
  italic in prose as the book prints them: `H₂O(*l*)`. The body face
  ("AP Body", Inter with its tailed `l` and seriffed `I` as the default
  letters; `assets/css/custom.css`) tells `l`, `I` and `1` apart upright
  too, but a figure's labels are the source's raster lettering, which may
  draw a capital I and a lowercase l alike.
- **A cancelled unit is `\cancel{\text{…}}`**:
  `$$4.7\ \cancel{\text{g K}} \times \frac{1\ \text{mol K}}{39.098\ \cancel{\text{g K}}} = 0.12\ \text{mol K}$$`.
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
("Type subscripts as plain numbers and a charge after ^: Ca3(PO4)2,
SO4^2-."; an equation field's adds the arrow, an example with charges and
states, and "The state symbols (s), (l), (g), and (aq) are optional."), so
no stem spends a sentence on it, and it shows what it has
read in the book's print as the learner types ("Read as: SO₄²⁻"). The
guide's examples are no item's key (a test holds it: the first example,
Mn3(PO4)2, was the key of a Check Your Learning item of 2.7). **A hydrate
is the one shape the guide does not cover**: an item keyed with a
hydrate's formula closes "Type the dot as a period, as in Na2CO3.10H2O."
(a hydrate the page's body prints whose formula holds no key of the page: 2.7's first example, CuSO4.5H2O, held the key of the item that asks copper(II) sulfate's formula) — lint.

| Typed | Against | Verdict | Feedback |
|---|---|---|---|
| `Mn3(PO4)2`, `Mn_3(PO_4)_2`, `Mn₃(PO₄)₂` | `Mn₃(PO₄)₂` | correct | |
| `Mn3P2O8`, `ClNa` for `NaCl` | | form | "That has the right atoms — now write the formula in its usual order and grouping." |
| `nacl`, `NACL` | `NaCl` | form | "Those are the right letters — now fix the capitals…" |
| `Co` | `CO` | incorrect | |
| `SO4^2-`, `SO42-`, `SO4-2`, `SO₄²⁻` | `SO₄²⁻` | correct | |
| `SO4`, `Se`, `NH4` — the right atoms, no charge | `SO₄²⁻`, `Se²⁻`, `NH₄⁺` | incorrect | "An ion’s symbol ends with its charge: type it after the symbol, as in Ca2+ or Cl-." — the example pair is never the key and shares no element with it: against Ca²⁺ or Cl⁻ the pair is Mg2+ or F- *(chapter 7)* A wrong charge, or other atoms, gets no message *(chapter 2, Sections 2.5–2.6: a bare "incorrect" sent the learner back to atoms that were right)* |
| `O2`, `O^2`, `Al3`, `SO42` — the key's atoms and its charge's size, no sign | `O²⁻`, `Al³⁺`, `SO₄²⁻` | incorrect | "A charge carries its sign: type + or - after its number." (it names no sign; `O2` against `O₂` stays right) *(chapter 7)* |
| `3-`, `-3`, `+2` — a charge with no symbol | `P³⁻`, `Mg²⁺` | incorrect | "That is a charge on its own. An ion’s symbol is the element’s symbol with the charge after it." (no element, no number) *(chapter 7)* |
| `C2H2`, `Na2Cl2` — every count a whole-number multiple of the key's | `CH`, `NaCl` | incorrect | "That has the right elements in the right ratio, with every count multiplied up. Write the formula with the smallest whole numbers of atoms in that ratio." Said only against a key of two or more elements that is itself the simplest ratio — never of Li₂O₂ or Hg₂Cl₂ — and it does not say "empirical": the reader does not know which formula the item asks *(November 14, 2026: a molecular formula typed where 2.4 asks the empirical one was a bare "Not quite")* |
| `Na`, `Cs+` — the right element, no mass number | `²³₁₁Na`, `¹³³Cs⁺` | incorrect | "A symbol for one isotope carries its mass number: type it before the symbol, as in 14C." |
| `FeCl3.2H2O`, `FeCl3*2H2O`, `FeCl₃·2H₂O` | `FeCl₃·2H₂O` | correct | |
| `2Na + 2H2O -> 2NaOH + H2`, the species in any order within a side, with or without state symbols, `=` or `→` for the arrow | the equation above | correct | |
| `2Na(s) + 2H2O(g) -> 2NaOH(aq) + H2(g)` — a state typed that is not the key's | the equation above | form | "The substances and coefficients are right. A state symbol you typed differs from the answer’s: check each one, or leave them out — state symbols are optional." *(November 14, 2026)* |
| `4Na + 4H2O -> 4NaOH + 2H2` | | form | "That is balanced — now write it with the smallest whole-number coefficients." |
| `Na + H2O -> NaOH + H2` | | incorrect | "Those are the right substances, but the equation is not balanced…" |
| `2Na + 2H2O <=> 2NaOH + H2`, or `⇌` typed | the equation above | form | "Those are the right substances and coefficients — now write the equation with a single arrow (->). The double arrow is for a reaction that reaches equilibrium." The arrow is part of the equation: a `⇌` key answered with `->` or `=` is told "…now write the equation with the equilibrium arrow (<=>): this reaction does not go to completion." *(November 12, 2026; until then `⇌` was correct against every `⟶` key)* |
| `P4 + 5O2 -> 2P2O5` | `P₄(s) + 5O₂(g) ⟶ P₄O₁₀(s)` | form | "That balances, but one formula is an empirical formula — the simplest ratio of its atoms. Write that substance’s molecular formula, a whole-number multiple of it." Only for a response that balances and has the key's species, side for side, with one or more divided through by a whole number; it names no substance *(November 12, 2026)* |
| `4P + 5O2 -> P4O10` | the same key | form | "That balances, but one element is written as separate atoms. Write it as the molecule it exists as." |
| `Cu -> Cu2+ + 2e` | `Cu(s) ⟶ Cu²⁺(aq) + 2e⁻` | incorrect | "An electron carries its charge: type it as e-, as in 2e-." (it was told the line was no equation, and sent to the arrow) |
| `Cu -> Cu2+` | the same half-reaction | incorrect | "Those are the right substances, but a half-reaction also shows the electrons transferred: add e- to the side that balances the charge." |
| `8H+ + MnO4- + 5e- -> Mn2+ + 4H2O` | the half-reaction | correct | |
| `6H2O -> O2 + 4H3O+ + 4e-`, `2H2O -> O2 + 4H+ + 4e-` | `2H₂O(l) ⟶ O₂(g) + 4H⁺(aq) + 4e⁻` | correct | H₃O⁺ is read as H⁺ + H₂O and water on both sides cancels, either way round *(chapter 4)* |
| `2IO3- + 12H+ + 10e- -> I2 + 6H2O` | `6H₂O(l) + 2IO₃⁻(aq) + 10e⁻ ⟶ I₂(s) + 12OH⁻(aq)`, and an acid key answered with OH⁻ | form | "That is balanced — now write it for the solution the question names: an acidic solution has H⁺ (or H₃O⁺), a basic solution OH⁻." Only for a balanced response that becomes the key by H⁺ + OH⁻ ⟶ H₂O, where one equation holds OH⁻ and the other H⁺ in its place *(chapter 4)* |
| `Pb2+ + SO4^2- -> PbSO4` | the complete ionic equation | incorrect | No message: only water cancels, so spectator ions stay |
| `Ag(NH3)2+`, `[Ag(NH3)2]+` | `[Ag(NH₃)₂]⁺` in an equation | correct | In an equation a group taken once is only grouping; a formula item gives `Ag(NH3)2+` the "usual order and grouping" message *(chapter 4)* |
| `4C + 5H2 + 1/2O2 -> C2H5OC2H5`, `4C + 5H2 + 0.5O2 -> C2H5OC2H5`, `2Na + C + 3/2O2 -> Na2CO3`, `2Na + C + 1.5O2 -> Na2CO3` | `4C(s, graphite) + 5H₂(g) + ½O₂(g) ⟶ C₂H₅OC₂H₅(l)`, `2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)` | correct | A fraction is read typed as 1/2, ½, 0.5, 3/2, 1.5, or 1½, and "Read as:" prints it as the key does *(November 14, 2026, chapter 5)* |
| `8C + 10H2 + O2 -> 2C2H5OC2H5`, `4Na + 2C + 3O2 -> 2Na2CO3` | the same keys | form | "That balances, but the question asks for the equation written for one mole, so a coefficient may be a fraction. Type a fraction as 1/2." A key with a fractional coefficient is graded at its own scale; the message names no substance and never says "smallest whole-number coefficients" *(November 14, 2026)* |
| `2Na(s) + C(s) + 3/2O2(g) -> Na2CO3(s)` | `2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)` | correct | `(s, graphite)` is a state: `(s)` typed for it is right, since a response with no states at all is right; an allotrope typed is compared |
| `2Na(s) + C(s, diamond) + 3/2O2(g) -> Na2CO3(s)` | the same key | form | the state-symbol sentence above *(November 14, 2026)* |

Rules for the key and the stem:

- **The key is written in the book's print**, in Unicode, as every formula
  in prose is ("Notation"): `Mn₃(PO₄)₂`, `SO₄²⁻`, `FeCl₃·2H₂O`, `¹⁴C`,
  `2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)`. A charge is a superscript, so the
  key reads one way (lint); the learner's bare `SO42-` is read every way it
  can be and is right when one reading is the key.
- **An equation key balances, in atoms and in charge, in lowest terms**
  (lint); a key with a fractional coefficient — a formation equation,
  written for one mole of its product (5.3) — is admitted, and must still
  balance. **Its fraction is written one way** (lint, and the field's "Read
  as:" prints the same): the vulgar-fraction glyph where Unicode has one,
  `½`, `¼`, `¾`; otherwise its digits around the fraction slash U+2044,
  `3⁄2` — never a slash, a decimal, a mixed number, or `1⁄2` for `½`
  *(November 14, 2026, chapter 5)*. A state with its allotrope is printed as
  the source prints it, `C(s, graphite)`. A source key that fails is a suspected source defect: the scan
  that sized this form found four in the book: chapter 4's "MgC1₂" (a
  digit for the letter), and in chapter 19 "3Cl⁺" for a chloride, "MnO⁴⁻"
  for permanganate, and an iron(III) ion printed without its charge.
- **An equation key keeps the source's state symbols**; a response may
  leave them out, and a state the learner types is compared. **The field
  says so twice** *(November 14, 2026)*: the equation guide under it ends
  "The state symbols (s), (l), (g), and (aq) are optional.", and a response
  right in everything but a state it typed is `form` with "The substances
  and coefficients are right. A state symbol you typed differs from the
  answer’s: check each one, or leave them out — state symbols are
  optional." (it names no substance). Until then the guide's example showed
  states and said nothing, and the message was "now check the state
  symbols, or leave them out": a learner who typed Ca(OH)₂(s) from 4.2's
  own solubility table, against the source's (aq), read a wrong equation.
  No stem adds a sentence about states.
- **An equation key keeps the hydrogen ion the source prints, H⁺ or H₃O⁺**
  *(chapter 4)*: the module balances with H⁺ and its key prints either, so
  the grader takes both notations for one answer, and the key is not
  rewritten into the other.
- **An equation key is one equation and nothing else** *(chapter 4)*: a
  source answer that prints two ("(complete) … (net)", "step 1 … step 2"),
  a second arrow ("⟶ NH₄NO₃(s) (after drying)"), or a note (", (a solution
  of H₂SO₄)") becomes one item per equation, the note cut from the key.
- **A formula's `accept`** holds the other formulas the MODULE prints for
  the substance (`CH3COOH|HC2H3O2` beside `CH₃CO₂H`), typed plainly. An
  equation takes none: order within a side is already free.
- **A `textin` takes no `answerDisplay`** (lint): its key is its own
  display — a configuration, an ordering, a formula, or a name prints as
  keyed *(chapter 7)*.
- **The stem is prose** — a `textin` question takes no `$…$` — so a formula
  or an equation the stem prints is Unicode text, state symbols included.
- **A formula or equation the stem prints is replayed** (`verify:replay`):
  "Determine the empirical formula: sucrose, C₁₂H₂₂O₁₁" is answered by its
  own stem, and is recorded as a sound coincidence or it fails.
- **Not read by these forms**, and a `selfcheck` until the chapter that
  meets them first settles a form: a nuclear equation with both numbers on
  every nuclide (chapter 21), a condensed structural formula with its bonds
  drawn (chapter 20). An electron configuration and an ordering have their
  own forms since chapter 6 (next section).
- **A logarithm's answer is not asked rightly by `sig-figs:<n>`** — a pH,
  a pK, a ln k (first met in chapter 12 or 14). The figures of a logarithm
  are its decimal places (pH 4.74 from 1.8 × 10⁻⁵ has two), so the pair
  would GRADE such a key correctly when n is the count of digits written
  (`4.74` under `sig-figs:3`: the comparison is made at the key's last
  place) and would SAY the wrong thing: "round it to 3 significant
  figures" of a number the book calls two. The chapter that meets one
  first settles a `decimal-places:<n>` token at its gate probe (run.md
  step 6a) — the same comparison, the count taken from the decimal point,
  and its own sentences — before any item is keyed; until then such an
  item is not authored as a `fillin` with the pair. Identified November
  12, 2026; not built, there being no item to test it against.

### Electron configurations and orderings: `answerForm="configuration"`, `answerForm="ordering"`

*(November 15, 2026, before chapter 6.)* Two more `textin` forms. A
configuration is read by `assets/js/lib/text/check-config.mjs`, an ordering
by `check-chem.mjs`, whose formula reader reads each member:

```
{{</* textin
  question="Using complete subshell notation (1s²2s²2p⁶, and so forth), predict the electron configuration of the following atom: N. Type each subshell followed by its number of electrons, with a space between subshells."
  answer="1s²2s²2p³"
  answerForm="configuration"
  hint="Fill the subshells in order of increasing energy, each to its capacity."
*/>}}

{{</* textin
  question="Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb. Type the symbols in the order you rank them, separated by <."
  answer="Rb < Li < N < F"
  answerForm="ordering"
  hint="Ionization energy rises across a period and falls down a group."
*/>}}
```

**What is free, and what is not.** A configuration may be typed with
plain digits, `^`, or superscripts, with or without spaces (the unspaced
`1s22s22p63s23p64s23d10` reads one way: a shell number is one digit and
always stands before its letter, so the last digit before a letter is the
next shell's), with the letters in capitals, and in ANY order of its
subshells — the filling order `4s²3d⁶` and the shell order `3d⁶4s²` are one
configuration. Against a key with a noble-gas core the core form and the
full expansion are both right; against a key with none, the core form is
`form`. The subshells and their counts are the answer. An ordering may be
typed with `<`, or with `>` from the other end, each member's charge in
any writing the formula field takes (`Ca2+`, `Ca^2+`, `Ca²⁺`); the
members, their capitals and charges, and their order are the answer.
**A list with no sign is refused** *(November 15, 2026)*: read in the
key's direction, 6.5's "list the following atoms in order of increasing
radius: Mg, Ca, Rb, Cs" would be answered by its own list. Nothing in an
ordering is `form`.

The field carries no typing guide — a configuration's would print a
configuration, an ordering's a list — so the stem closes with the
sentence that says how (lint), and the field reads back what it has read
("Read as: 1s²2s²2p³", "Read as: F > N > Li > Rb").

| Typed | Against | Verdict | Feedback |
|---|---|---|---|
| `1s2 2s2 2p6 3s2 3p6 4s2 3d6`, `1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6`, `1s22s22p63s23p64s23d6`, `1s2 2s2 2p6 3s2 3p6 3d6 4s2` | `1s²2s²2p⁶3s²3p⁶4s²3d⁶` | correct | |
| `[Ar]4s2 3d6` | the same key | form | "That is the right configuration — now write out every subshell, without the noble-gas core." |
| `[Kr]4d10 5s2`, `1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10` | `[Kr]5s²4d¹⁰` | correct | |
| `1s2 2s2 2p6 3s2 3p6 4s2 3d5 4p1` | `1s²2s²2p⁶3s²3p⁶4s²3d⁶` | incorrect | "That has the right number of electrons, but not in the subshells they occupy." |
| `1s2 2s2 2p6 3s2 3p6 4s2 3d7` | the same key | incorrect | "That configuration does not hold the number of electrons this atom or ion has." It never prints the count |
| `1s2 2s2 2p8 3s2 3p6 4s2 3d4` | the same key | incorrect | "A p subshell holds at most 6 electrons." (an s 2, a d 10, an f 14) |
| `1s2 2s2 2d6` | the same key | incorrect | "There is no 2d subshell: the n = 2 shell has only s and p subshells." |
| `1s2 2s2 2p6 2p6`, `[Ne]2p6 3s2` | the same key | incorrect | "Write each subshell once, with all of its electrons — a noble-gas core already holds its own subshells." |
| `iron` | the same key | incorrect | "That does not read as an electron configuration. Type each subshell as its shell number and letter followed by its number of electrons, with a space between subshells." |
| `Rb < Li < N < F`, `F > N > Li > Rb` | `Rb < Li < N < F` | correct | |
| `Rb, Li, N, F`, `Rb Li N F` | the same key | incorrect | "Put < between the symbols to show the order." — a list with no sign, in any order |
| `rubidium, lithium` | the same key | incorrect | "That does not read as a list. Type the symbols separated by <." — no list of symbols at all |
| `Si4+ < Al3+ < Ca2+ < K+`, `K+ > Ca2+ > Al3+ > Si4+` | `Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺` | correct | |
| `F < N < Li < Rb` | `Rb < Li < N < F` | incorrect | "That is the reverse of the order asked for." |
| `Rb < N < Li < F` | the same key | incorrect | "Those are the right members, but not in the right order." |
| `Rb < Li > N < F` | the same key | incorrect | "Use one sign all the way through: every < or every >." |
| `Rb < Li < N` | the same key | incorrect | "Use each of the 4 members the question lists, each once." — the count, never a member |
| `rb < Li < N < F` | the same key | incorrect | "Check the capitals: an element’s symbol is one capital letter, or a capital and a small letter." |
| `Si < Al < Ca < K` | `Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺` | incorrect | "These are ions: type each one’s charge after its symbol." (the formula field's sentence gives Ca2+ as its example, a member of 6.5's key) |
| `[He]`, `1s2` | `1s²` with `accept="[He]"` | correct | where the stem does not ask for the full configuration (7.1's Be²⁺ and Li⁺); without the member `[He]` is the `form` above *(chapter 7)* |
| `[Ar]`, `Ar`, `1s2 2s2 2p6 3s2 3p6`, `[Ne]3s2 3p6` | `[Ar]` | correct | the atom's `[Ar]4s1` is told the count is wrong *(chapter 7)* |
| `P < H < S < O < F` | `H < P < S < O < F` with `accept="P < H < S < O < F"` | correct | the tie the page's data give; without the member, "not in the right order" *(chapter 7)* |

Rules for the key and the stem:

- **The key is written in print**: a configuration with superscript counts
  and no spaces, `1s²2s²2p⁶3s²3p²`, a core in square brackets,
  `[Kr]5s²4d¹⁰`; an ordering with ` < ` between its members, first to last
  as the source prints them, each in the book's Unicode, `Si⁴⁺ < Al³⁺ <
  Ca²⁺ < K⁺` (lint). Each takes an `accept` list in one shape only (lint):
  a configuration, the noble-gas core that is the whole key, in brackets —
  `accept="[He]"` beside `1s²` — where the stem does not ask for the full
  configuration and the exercise keys its other ions with a core (7.1's
  Be²⁺ and Li⁺), so that the core is right and not told "write out every
  subshell"; an ordering, another full ordering of exactly the key's
  members written in print with ` < ` — `accept="P < H < S < O < F"` beside
  `H < P < S < O < F` — only where the page's own data tie two members
  (7.2: H and P, both 2.1 in the electronegativity figure). A response is
  right when the key or a member grades it right, and otherwise gets the
  key's own message; `verify:source-keys` still holds `answer` to the
  source's print. Anything else is already free: the order of the
  subshells, a core beside its expansion, the direction, and each member's
  writing *(chapter 7)*. A configuration key over a subshell's capacity or with a
  subshell that does not exist is a lint error — a suspected source defect.
- **The key is what the source prints**: `verify:source-keys` reads the
  CNXML's `1<em>s</em><sup>2</sup>…` and the key as one configuration in any
  order of subshells, but a core the source does not print is a different
  key (refused), as a wrong subshell or count is; an ordering is confirmed
  member for member, in order, and the source's hyphen-minus or en dash in
  a charge is a minus.
- **The closing sentences** (lint, `CONFIGURATION_CLOSING` and
  `ORDERING_CLOSING` in `tools/lint/lints-leaks.mjs`): "Type each subshell
  followed by its number of electrons, with a space between subshells." and
  "Type the symbols in the order you rank them, separated by <." Neither
  prints a key: "Type each subshell as 1s2 2s2 …" would hand over the
  start of every configuration in the book, and an example ordering would
  print members. A configuration item that says whose ("Enter the electron
  configuration of cobalt-60.") puts that sentence before the typing one.
- **Replay** (`verify:replay`) reads each configuration a stem prints
  (6.4's "Using complete subshell notation (1s²2s²2p⁶, and so forth)" is
  neon's, so no atom of that exercise but neon is answered by it) and the
  list of members an ordering's stem prints, copied as a list — which the
  field refuses, having no sign, even where the stem lists its members in
  the key's order (6.5's "Mg, Ca, Rb, Cs" → "Mg < Ca < Rb < Cs").

### Sets of quantum numbers: `answerForm="quantum-numbers"`

*(November 15, 2026, Section 6.3; Derek asked that a "write a set of
quantum numbers" item be graded and take ANY correct set, not only the
source's.)* A set is read by `assets/js/lib/text/check-quantum.mjs`:

```
{{</* textin
  question="Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3. Enter the set for the orbital of type (y) shown in the figure above. Type the four values in the order n, l, mₗ, mₛ, separated by spaces."
  answer="2 1 0 +1/2"
  answerForm="quantum-numbers"
  hint="Identify the kind of orbital the outline shows and the value of the angular momentum quantum number that kind of orbital has, then take n from the shell the question names: any magnetic quantum number that value allows, and either spin, is right."
*/>}}
```

**What is free, and what is not.** The key fixes the shell and the
subshell: n and l must be the key's. mₗ is free from −l to +l, and mₛ is
+1/2 or −1/2, so against `2 1 0 +1/2` all six of `2 1 −1 ±1/2`,
`2 1 0 ±1/2`, `2 1 +1 ±1/2` are right. A learner types the four values in
the order n, l, mₗ, mₛ, separated by spaces, commas, or semicolons, with or
without parentheses or braces around them, or each labelled in any order
(`n = 4, l = 0, ml = 0, ms = +1/2`; the labels `m_l`, `mₗ`, `ml`, `m l` and
`m_s`, `mₛ`, `ms`, `s`, capitals folded); a spin as `+1/2`, `1/2`, `-1/2`,
`½`, `0.5`, `.5`, signed or not; a minus as a hyphen, an en dash, or U+2212.
Nothing is `form`. The field reads back what it has read ("Read as: n = 4,
l = 0, mₗ = 0, mₛ = +1/2") and has no typing guide: the stem closes with
how to type a set (lint). No message prints the key's n or l, or names the
type of orbital.

| Typed | Against | Verdict | Feedback |
|---|---|---|---|
| `4 0 0 +1/2`, `4, 0, 0, 1/2`, `(4, 0, 0, −1/2)`, `n = 4, l = 0, ml = 0, ms = +1/2`, `ms = -½, m_l = 0, L = 0, N = 4`, `4 0 0 .5` | `4 0 0 +1/2` | correct | |
| `2 1 -1 -1/2`, `2 1 +1 1/2`, `2 1 0 -0.5` | `2 1 0 +1/2` | correct | |
| `iron`, `2 1 0` | the same key | incorrect | "That does not read as a set of quantum numbers. Type the four values in the order n, l, mₗ, mₛ, separated by spaces." |
| `2 1 0 1` | the same key | incorrect | "The spin quantum number mₛ is +1/2 or −1/2." |
| `0 0 0 1/2`, `2.5 1 0 1/2` | the same key | incorrect | "The principal quantum number n is a whole number, 1 or greater." |
| `2 -1 0 1/2` | the same key | incorrect | "The angular momentum quantum number l is a whole number, 0 or greater." |
| `2 1 0.5 1/2` | the same key | incorrect | "The magnetic quantum number mₗ is a whole number." |
| `2 2 0 1/2` | the same key | incorrect | "In a shell, l runs from 0 to n − 1: the set you entered has an l its own n does not allow." |
| `2 1 2 1/2` | the same key | incorrect | "mₗ runs from −l to +l: the set you entered has an mₗ its own l does not allow." |
| `3 1 0 1/2` | the same key | incorrect | "That is a possible set of quantum numbers, but not for the shell the question names." |
| `2 0 0 1/2` | the same key | incorrect | "That is a possible set for this shell, but not for this type of orbital." |

The messages are taken in that order: a value that does not read, then the
spin, then a value that is not the kind of number it must be, then an l or
an mₗ the set's own n or l does not allow, then the shell, then the
subshell.

Rules for the key and the stem:

- **The key is written in print**: n, l, mₗ, mₛ in that order, one space
  between them, a negative value with U+2212, the spin signed: `4 0 0
  +1/2`, `2 1 −1 −1/2` (lint). It is a possible set (l < n, |mₗ| ≤ l), and
  it takes no `accept` list (lint and shortcode): mₗ and the spin are
  already free.
- **The key is what the source prints**: `verify:source-keys` reads the
  source's MathML ½, unsigned (`4 0 0 ( 1 )/( 2 )`), and the key as one
  set; another possible set of the same n and l is a different key
  (refused). Where the answer prints one set per label ("x. … , y. … ,
  z. …"), the item is held to the set of the label its closing sentence
  names.
- **The closing sentence** (lint, `QUANTUM_CLOSING` in
  `tools/lint/lints-leaks.mjs`): "Type the four values in the order n, l,
  mₗ, mₛ, separated by spaces." — plain letters, since a `textin` stem takes
  no `$` math. An item that says which orbital puts that sentence before
  the typing one. The hint, in words, says where to look and what is free,
  never the l.
- **The stem prints no set of the key's n and l** (lint; `verify:replay`
  replays every set a stem prints, bare or labelled, and the stem itself).
  A later item's reveal that prints l per orbital type (6.3's "possible l
  and mₗ values" self-check) sits AFTER the sets.

### Measured quantities: `sig-figs:<n> last-digit:<k>`

A computed quantity is keyed with the digits its data support (`0.674 M`,
`4.585 × 10²² atoms`), and the digits are part of the answer. The ordinary
fill-in comparison (to nine places) marks a learner wrong for `0.675` when
their molar mass was rounded on the way, and any tolerance wide
enough to take that would also take the unrounded readout `0.67442`. So a
measured quantity declares both tokens, and the comparison is made at the
key's own precision:

```
{{</* fillin
  question="Calculate the molarity of 6.52 g of CoCl₂ (129.8 g/mol) dissolved in an aqueous solution with a total volume of 75.0 mL. Enter the molarity in mol/L."
  answer="0.670"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.670\ M$"
  hint="Convert the mass to moles and the volume to liters first."
*/>}}
```

(This stem prints the molar mass itself, so its allowance is `0`. The
tables below show how a three-figure key is graded when the molar mass is
fetched from the periodic table, `last-digit:1`; their key, `0.674`, is an
illustration and no item's.)

- **`sig-figs:<n>`** (1–9): the answer is written to n significant figures.
- **`last-digit:<k>`** (0–2): the response, rounded to n figures, may differ
  from the key by k units of the nth digit.
  Which k: "Exercises", "Numeric keys" — `0` for printed or exact numbers,
  `1` when a measured factor comes from a table, `2` for the rare key the
  book's own table reaches by routes more than one unit apart.
  - Both tokens are always declared together — the allowance is the one
    judgment the pair asks of an author, so neither value is a default —
    and `sig-figs:1` takes `last-digit:0` (lint).

- **Nothing else changes how a value is compared.** `tolerance:<p>%` (a
  relative band) and `worked:<value>` (a second right value) were forms
  until November 12 and 13, 2026; the shortcode and the lint now refuse
  both ("Numeric keys", "No width is chosen"). A key worked from this
  book's periodic table, against `0.08644` under `sig-figs:4 last-digit:1`:

  | Typed | Verdict | Why |
  |---|---|---|
  | `0.08643`, `0.08644`, `0.08645` | correct | the key and one unit of its last figure either side |
  | `0.086443` | form | "…now round it to 4 significant figures." |
  | `0.0864` | form | "…now give it to 4 significant figures." |
  | `0.08642` | incorrect | the near-miss sentence below, with its second sentence: what four-figure atomic masses give |
  | `0.08634` | incorrect | "Not quite": a molar mass rounded to 232 |

What the learner sees, against the key `0.674` under `sig-figs:3 last-digit:1`:

| Typed | Verdict | Feedback |
|---|---|---|
| `0.674`, `0.675`, `0.673`, `6.74×10⁻¹`, `6.74e-1`, `6.74 x 10^-1` | correct | The letter x is the times sign a plain keyboard has: between a numeral and a power of ten it is read as one *(November 14, 2026: it was read as a unit, and every scientific-notation answer typed that way was a bare "Not quite")* |
| `0.67442` | form | "That value is right — now round it to 3 significant figures." |
| `0.67` | form | "That agrees with the answer as far as it goes — now give it to 3 significant figures." Said one figure short, when the response is what the key rounds to — and, at any count, of the key's own number with its zeros left off: `8` and `8.0` against `8.00` *(November 12, 2026: `8` was plainly incorrect)*. `0.7` and the stem's round `90` against `89.4` are still incorrect with nothing said |
| `6.52/128.9/0.0750` written as a fraction | form | "…now finish the calculation and enter just the result, to 3 significant figures." |
| `0.674 M`, `0.674 mol/L` | unit | "Right number — enter it without the unit." |
| `0.676` | incorrect | "Close, but not within rounding of the answer. If you rounded partway through, carry the extra digits through every step and round only the final result. If you looked up a value, such as an atomic mass, use every digit the table prints." Said of a response written to the right count of figures (or a readout that rounds to one) that misses the allowance by one unit of the last figure of a two-figure key, or by up to two of a longer one; never at one figure. The second sentence is added only under `last-digit:1` or `2`, where a factor is looked up, and the whole is also said of a response of four or more figures written ONE figure short and within two units of what the key rounds to there (`123.88` against `123.896`): what a table of coarser masses gives *(November 12–13, 2026)* |
| `0.6`, `0.774` | incorrect | |
| `802` against `-802`; `-265` against `265` | incorrect | "The size is right, but the sign is not. Check whether the value should be positive or negative." Said of a response right but for its sign, inside the item's own allowance (or the readout of such a value); no key or allowance changes, and it names no quantity *(November 14, 2026, chapter 5: an enthalpy change of the wrong direction was a bare "Not quite")* |
| `1.31` against `1310`; `1310` against `1.31` | incorrect | "The digits are right, but the value is a thousand times off. Check the unit the question asks for." Exactly 10³ or 10⁻³ times a right value (J typed where kJ is asked); never for 10¹, 10², or 10⁶, nor a value merely near; the near-miss zone is read first and cannot hold such a value. A response a thousand off AND of the wrong sign (`0.802` against `-802`) gets this sentence: every word of it is true, where the sign sentence's "the size is right" is not *(November 14, 2026)* |
| `3` against `-3`; `-1` against `1`, under `whole-number` (a charge, an oxidation state, a formal charge) | incorrect | "The size is right, but the sign is not. Check whether the value should be positive or negative." — never against a key of 0 *(chapter 7)* |
| `3-` against `-3`; `4+` against `4`, under `whole-number` — the sign typed after the number, as the source prints a charge | form | "That has its sign after the number. Type the sign first." A sign typed last on another size is plainly incorrect *(chapter 7)* |

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
  **A notation token comes from the stem's words, never from how the key
  is written**: `scientific-notation` needs "scientific" or "exponential"
  in the question (a lint, every book; a key written with a power of ten
  under a stem that does not name the notation declares nothing)
  *(chapter 6)*.
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

**Three exceptions, each because the source's pixels print data this book
has replaced** *(November 12–13, 2026)*:

- **The periodic table is this book's own drawing**,
  `static/media/chemistry/periodic-table.svg`, written by
  `tools/figures/periodic-table.mjs` from `data/chemistry/elements.json`
  (`--check` in the tests): the source's image prints four-figure atomic
  masses, and the book's keys are worked from IUPAC's five. Every figure of
  the periodic table as a whole — Appendix A, Figures 1.3 and 2.5 — is
  `src="chemistry/periodic-table"` with Appendix A's alt and extended
  description; the layout, the color code, and the enlarged hydrogen box
  are the source's, and the key gains "Not classified" for the nine boxes
  the source leaves unshaded. The footer says so.
- **A calculation table printed as an image** (element, quantity, atomic
  mass, subtotal: 3.1 has six) becomes a Markdown table from
  `node tools/verify/molar-mass.mjs --table <formula>`, its caption kept
  with its number recomputed.
- **An illustration that shares such an image is kept as a crop.** The
  molecular model beside each of 3.1's calculation tables is a manifest
  entry of its own with a `crop` of the source image (`npm run
  source:media -- --book chemistry --crops`); its alt describes the model
  alone, and the footer says the table was replaced and the model kept.

`npm run source:media -- --book chemistry --chapter N` vendors a chapter
(verified on section 7.3: 77 images, 568 KB). Every image upstream is a
JPEG, so the manifest guesses `photo` for all of them: **set `kind` on every
figure** from the picture — a photograph is a `photo`, a drawing, chart,
structure, or labelled apparatus a `diagram`. A composite with a drawn panel
that carries information of its own (2.7's photograph beside two
ball-and-stick models) is a `diagram`; a composite of photographs (the
chapter 2 landing's) is a `photo`.

**Every alt is written from the artwork; the source's alt is never kept as
it stands.** Chapter 1's source alts called flasks beakers, wax butter, and
a 21.6 mL reading 20.8 mL, and the one alt the pilot kept said "Kelvin
scale" on a page that teaches lowercase kelvin.

**A figure the source marks `class="scaled-down"` or `scaled-down-30`** —
on its `<media>` or on the `<figure>` around it — is printed at half, or three tenths, of its NATIVE size, not
of the column: a 975 px drawing is set at two thirds of the text width and
a 1300 px one almost across it. `source:media` records the class in the
manifest (`scale`), the shortcode passes it on with the native width, and
the stylesheet gives the figure that share of its own width, never under
26rem (14rem) (browser test). A half-scale drawing narrower than 26rem is
set at three quarters of its native width, not held at full size: its
letters, drawn to be halved, then match the body text *(chapter 7)*.
Nothing is written on the page.

About 490 images sit outside any captioned figure. Each shape has one
answer:

| The source has | Write |
|---|---|
| a structure or diagram in running text or a worked example | a `mediafigure` where the source places it, **with no caption** (the source prints none), `kind="diagram"`, and an alt read off the artwork |
| an image in an exercise stem | the `mediafigure` directly above the item, the stem saying "the figure above" or "shown above" so the answer ledger binds the two; the alt describes what is drawn and never states the answer |
| a drawing as the keyed answer ("Write the Lewis structure for…") | a `selfcheck` whose model answer is the `mediafigure` followed by one or two sentences saying what the drawing shows; the rubric clauses come from those sentences |
| a table printed as an image (the ICE tables of chapters 13–15) | a Markdown table transcribed from the image, the image dropped, and the footer saying so; a drawing that shares the image is kept as a crop ("Three exceptions" above) |

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

**A Lewis structure's alt and its model-answer sentences name every atom
by its element, say how each is bonded — "single-bonded", "double-bonded",
"triple-bonded to" — and count the lone pairs each atom HAS ("the oxygen
atom has two lone pairs"), central atom first** *(chapter 7)*: the checker
reads them against the drawing, zoomed, before calling a lone pair missing.

A drawing answer is never converted to a multiple choice: the source keys
one structure and prints no wrong ones to offer.

**The source gate holds a drawing answer to its picture**: where a part's
whole answer is an image (92 parts, from chapter 6 on), the `selfcheck` is
confirmed when its model answer shows that image, and refused when it
shows none or a neighbouring part's. The sentences beside it are the
author's reading of the drawing and are the checker's to read against it.
Where the answer is a name AND a drawing ("ethanol [structure]", 2.4), the
model answer is the source's words, then the figure, then the sentence
about the drawing; the gate holds it to the part's own image and to the
source's words carried whole.

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

- **An appendix that is a table to look values up in declares `lookup:
  true`** (C–M; not A, the reference figure, and not B, which is prose).
  The validator holds the key to an appendix page that has a table. Every
  section page of the book then carries the list of those pages
  (`layouts/_partials/utils/reference-lookups.html`), and a link to one in
  a section's body opens it over the page: the page's content without its
  heading and attribution footer, the heading row stuck to the top of the
  scrolling table, a filter that hides the rows that do not match, the
  count of rows left, and a link to the appendix's own page. The filter
  reads what a keyboard types — no subscripts, a hyphen for the minus
  sign, `x` for ×, a full stop for the hydrate dot — and reads a capital
  as typed where that finds anything (`Co` is cobalt, `CO` carbon
  monoxide); a group's name (Appendix G's elements, J's metals: bold in
  the first cell, the rest empty) lists its whole group
  (`assets/js/lib/shared/lookup-filter.mjs`). So a table the lookup must
  filter keeps one substance to a row and names its groups that way.
  Without JavaScript, on a modified click, and when the page cannot be
  fetched, the link is a link.

- **No cell of a data table is typed by hand.**
  `node tools/source/appendix-draft.mjs --book chemistry --appendix G
  [--groups rows] [--unfold 3]` writes the Markdown tables from the pinned
  CNXML in the house notation; the author adds the frontmatter, headers the
  source lacks, figures, and the footer.
- **`npm run verify:source-tables` holds every cell of the finished page to
  the CNXML** (3,418 cells, the tool's `--min-cells` floor in `package.json`; part of `npm test`): each source row is a page
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
  - Appendix A's periodic table is this book's own drawing ("Figures",
    "Three exceptions"), and the table of the 118 elements under it is
    written from the same data file (`node tools/source/elements-table.mjs
    --write`); `verify:source-tables` holds both to
    `data/chemistry/elements.json`. The thirty elements of the two rows
    below the main table have no group number there — "— (row of elements
    89–103)" — since they belong to no numbered group; until November 14,
    2026 the cell read "3 (row of …)", which the key term "transition
    metal: element in groups 3–12" turned into a wrong answer for uranium.
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
  erratum (Appendix L's six charges; Appendix C's cubic foot, 28.317 L,
  which the source truncates and its own Section 1.6 prints rounded). **Two appendices follow a named authority, not the source's
  print** *(Derek, November 12, 2026)*: Appendix A's atomic masses are
  CIAAW's abridged standard atomic weights (`data/chemistry/elements.json`),
  and Appendix D's constants are the 2022 CODATA values as NIST lists them
  (`data/chemistry/constants.json`, written to the page by `node
  tools/source/constants-table.mjs --write`, each to the count of figures
  the source prints in that place). Both files are copied digit for digit
  from a fetched page kept under `tools/fixtures/` and pinned by a test —
  never typed from memory — and each page's Source note and footer name
  the authority. **In Appendices E through M a stale value is not a
  defect**: those tables are the data the later chapters' keys are worked
  from, so a value an outside table now gives differently stays as the
  source prints it.

## Knowledge checks

The rules are `docs/knowledge-check-playbook-chemistry.md`, this book's
edition, and a check is run from `docs/briefs/chemistry/kc-run.md`. What
was decided, and when:

- **One check per block of chapters, seven pages** *(November 9, 2026)*.
  The book is flat, so blocks follow the content, and uneven blocks are
  accepted where chapters belong together. The edition's "Placement" has
  the table of blocks with each file and weight: chapters 1–3, 4–5, 6–8,
  9–11, 12–15, 16–17, and 18–21.
- **Quota** *(Derek, November 10, 2026)*: each section of a block carries
  two or three items, at least one of them auto-graded; the lint holds it
  (`BOOK_RULES['physical-sciences/chemistry'].knowledgeCheck`, which also
  lets a check carry `fillin`s). By block that is 34–51, 16–24, 30–45,
  34–51, 42–63, 22–33, and 50–75 items.
- **Where the items come from** *(Derek, November 11, 2026)*: a graded
  item needs a source key ("Graded items"), and every keyed exercise and
  Check Your Learning is spent on the section pages, so **a calculation
  item re-asks a worked example's own question and keys the answer its
  Solution prints**; the other items are written from the module's
  glossary, summary, and sentences, as in the life-sciences checks. The
  unkeyed exercises are not a pool: that would be an author-derived key.
  `npm run kc -- sources` (in `npm test`) refuses a fill-in, a formula, or
  an equation on a check that is not a worked example's question keyed
  with what its Solution prints.

Block 1 landed November 11, 2026: `knowledge-check-01-03.md`, 45 items over
17 sections (17 of them worked-example items), weight 4, the appendices
moving to 5; chapter 4 took weight 5 and the appendices weight 6; each new
chapter moves them (`npm run kc -- weights … --write`)
(`docs/history/chemistry.md`, "Knowledge Check 1").

Block 2 landed November 15, 2026, after chapter 6 was already on the site:
`knowledge-check-04-05.md`, 22 items over 8 sections (15 of them
worked-example items), weight 7, chapter 6 moving to 8 and the appendices
to 9. Section 5.2 carries written items only: every worked example of it
needs the specific heat of water, which no stem prints
(`docs/history/chemistry.md`, "Knowledge Check 2").

## What is still open

What chapter 1 settled, and what the scan of the book counted, are in
`docs/history/chemistry.md`.

- whether `verify:source-tables` should read the tables of the section
  pages too (the chapters have about 190): it reads appendix pages only,
  and a section's tables are still read by the author and the checker;
- the item forms the text fields do not yet read — each a `selfcheck`
  until its chapter settles it ("Formulas and equations", the last rule;
  chapter 6 settled the electron configuration and the ordering);
- a long table's header row scrolls out of view ON THE APPENDIX'S OWN
  PAGE (Appendix G is 403 rows): the theme sets a table `display: block`,
  so a sticky header there needs a table render hook, which would change
  every table on the site. Opened from a section the heading row does
  stay (the lookup owns its scroller);
- 5.3's Exercise 29 and a Check Your Learning each print part of the
  other's key (the 66.4 kJ of N₂ + 2O₂ ⟶ 2NO₂), and no gate reads one
  section item against another; the run facts rule where the two items sit.
  The rest of what chapter 5's answers asked of the grader and the gates
  (probed November 14, 2026; `docs/history/chemistry.md`, "Before chapter
  5") was taught with tests the same day and is now in its sections: the
  sign and thousand messages ("Measured quantities"), a fractional
  coefficient ("Formulas and equations"), two units in one part, a ΔH in a
  stem, and a second Check Your Learning ("Stems", "Exercises");
- a number field answers a flipped exponent sign or a
  metric-prefix slip (nm typed for m) with a bare "incorrect"; an
  uncaptioned inline diagram cannot be set at text scale (the manifest's
  `scale` is the only size control); a rubric form for answers where any of
  many sets is right *(chapter 6)*;
- lints not yet written *(chapter 6)*: a colour key whose wavelength is
  outside the visible range; a footer phrase that names a key; a hint
  naming a figure that lacks the scale it needs; each configuration in a
  figure description summed against its atomic number; `\$n\$[spdf]`;
  `_[fi]\b` italics; a dash-hyphen (`[a-z]-(they|wavelengths)`);
- lints not yet written *(chapter 5)*: a negative key under "produced /
  released / evolved"; "Table N.M" in a
  stem; an `answerDisplay` unit that differs from the stem's "Enter … in"
  unit; a hint whose signed equation disagrees with its key's sign; a
  figure count on every numeric key at the run facts (an automatic screen);
  and "the answer ledger binds an item to the nearest figure above it when
  the stem says 'above' of a table or another figure" (nine items of 5.1
  are bound to a photograph none of them uses);
- the kit reader's recommendations of November 14 that are not yet built:
  a `verify-section` mode that runs both source gates and the leak reading
  on one page; the fact half of the run facts and the PDF range scripted;
  a fill-in judge for `ledger:provenance` (until then a Chemistry
  fill-in's note is carried by hand — the tool labels it "author-built");
  `run.md` §0 reordered by step.
