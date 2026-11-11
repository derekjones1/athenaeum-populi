# OpenStax Chemistry 2e — section-authoring brief

You are authoring **exactly one** section page of OpenStax *Chemistry 2e*
into the Athenaeum Populi Hugo site. Your section number, module id, output
path, and PDF page range are in your task prompt. `SP` is the directory this
brief is in; `$SP/run-facts.md` holds this run's facts and the parent's
decisions, and wins over anything general below.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Work from
it. Write only your own page and files under `$SP/` whose names start with
your section number.

**Never run a git command of any kind, not even a read-only one. Do not
spawn sub-agents.** Do not run `npm test`, `npm run ci`, `npm run build`,
`baseline:update`, `ledger:merge`, `validate`, or any `source:*` command. Do
not edit the chapter `_index.md`, the errata file, the media manifest, the
playbooks, a tool, or another section. `npm run verify-section -- <your
page>` is the one command you run repeatedly.

**Every keyed source exercise reaches your page**, one component per
lettered part. The unkeyed ones are omitted and counted in the footer. Count
the module's exercises before you write the Practice block and again before
you write the footer; every number the footer states is one you re-derived.

**Write your content file within your first ~20 tool calls and iterate on it
in place** — a killed agent with a file on disk is resumable. Write a long
section subsection by subsection; after each batch of edits, grep your file
to confirm the bytes landed (several agents write to this tree at once).

## 1. Read, in this order — and only this

1. `$SP/run-facts.md`.
2. `docs/subjects/chemistry.md` — all of it except "Knowledge checks" and
   "What is still open". "Notation", "The section page, in order",
   "Exercises", "Measured quantities", and "Figures" are the rules you
   write to.
3. `docs/subjects/life-sciences.md` — only "The section page, in order",
   "Notation", "Media: vendored figures", and, under "Exercises", the parts
   on `textin` text recall, `selfcheck` model answers and rubrics, "Each
   thing once", and "Leaks across the page". Grep `^## \|^\*\*` for the line
   numbers and read those ranges. This book inherits them.
4. `docs/authoring-playbook.md` — §0 rules 4–5 only; in §3 the Fill-in,
   Multiple choice (text mode), Callouts, Text recall, Self-check, and Media
   figure paragraphs and "The section-final `## Practice` block" up to
   "Knowledge Checks"; and §5.
5. **Only if your module has a numeric keyed answer:**
   `docs/subjects/math.md` — "Fill-in answer shapes" up to the token table,
   the `scientific-notation`, `decimal`, `sig-figs:<n>`, and
   `last-digit:<k>` rows of that table, and under "Standing notes from the
   closures" the "Money and units on a bare-number key" note.
6. The shortcode contracts: only the leading `{{- /* … */ -}}` comment of
   `layouts/shortcodes/fillin.html`, `multiplechoice.html`, `textin.html`,
   `selfcheck.html`, `mediafigure.html`; `verify-section` rejects an unknown
   param.
7. The exemplars named in the run facts, for shape only: the chapter 1
   pages it names, and — where your module keys the shape — the chapter 2
   ITEMS it names, found by their stems. Of a chapter 2 page read only the
   named item and the few lines around it (its figure, its `followup`).

Do not read `AGENTS.md`, `docs/history/`, the other subject playbooks, other
chapters' pages beyond the exemplars, or the checker brief.

## 2. Your sources

- **Transcription authority:** the pinned CNXML
  `sources/openstax/osbooks-chemistry-bundle/modules/<moduleId>/index.cnxml`.
  Read the raw file; `tools/source/cnxml-preview.py` drops cross-references
  and TeX spaces.
- **Visual authority:** `$SP/pdf/chNN/p-00NN.png` (your range is in the run
  facts; the chapter's pooled Key Terms, Key Equations, Summary, and
  Exercises pages and the answer-key pages are listed there too). **The PDF
  is older than the CNXML** (playbook "Source and authority"): where they
  differ, the CNXML wins and the difference is reported, not "fixed".
- **Pre-extracted by the parent** (a convenience, never the authority):
  `$SP/keys-N.M.txt` — objectives, section titles, feature boxes, figures
  with stem, alt, and caption, images outside figures, tables, worked
  examples with each Check Your Learning and its source answer, the summary,
  key equations, the glossary in source order, and every exercise with its
  source key or "unkeyed".
- **Figures:** vendored under `static/media/chemistry/`; every stem with its
  source alt and caption is in `data/media/chemistry.json`. **Open every
  image you use** (`Read` displays a `.webp`). `src` is `chemistry/<stem>`.
  The manifest's `kind` says `photo` for every image; set `kind` from the
  picture on every figure.

## 3. What you produce — one file, in this order

The skeleton, the callout forms, the example form, the notation, and the
footer are the playbooks'. What follows is what they do not print or what
goes wrong.

1. Frontmatter: `title`, `description` (`>-` folded, ending "— adapted from
   OpenStax Chemistry 2e, Section N.M."), `source_section: "N.M"`,
   `weight: M`.
2. Objectives callout, source order and wording (`<md:abstract>`).
3. Full exposition in source order, `##` per `<section>` title, transcribed
   faithfully — no condensing, no improving, no added claim. Bold every
   `<term>` at its defining occurrence. **A factual claim you believe wrong
   is transcribed as printed** and listed under "suspected claim errors" in
   your ledger. A one-word source typo is printed correctly with no inline
   note, and named in the footer and your ledger.
4. **Notation** (playbook "Notation") — the rule is one line: a formula in a
   sentence is Unicode text, a formula inside math is `\ce{…}`. A quantity
   in a sentence is prose (`15.00 g`, `−28.1 °F`, `1,000 mL`); a numeric
   exponent is math (`$1.2 \times 10^{-3}$`); a source display `<equation>`
   is `$$…$$` with `\text{…}` units and `\cancel{\text{…}}` for a
   struck-through unit. Transcribe each MathML expression from the raw
   CNXML, not from the extract.
5. Feature boxes and worked examples in the playbook's forms. A Check Your
   Learning becomes the interactive item or items its keyed answer's shape
   calls for, directly after the example's solution.
6. Figures as `mediafigure`: caption verbatim with its credit; `alt` ≤ 600
   plain-text characters written from the IMAGE — every count ("six boxes,
   seven arrows") taken by counting, and every "each", "all", "only", and
   "gone", every position word ("above", "between", "below"), and every
   colour re-read against a zoom of the exact object, not its
   neighbourhood (chapter 2: "dark-crusted" for a golden-brown pudding;
   "the dish glows orange" for the flame beside a dish that stays silver;
   a column described "above, between, and below" that ended at the
   bottom pair); a footer reason of the form "the source
   alt says X, the drawing does not" is true of the DRAWING — re-open it
   before you write the clause; an alt directly above an item never
   states what the item asks for; `kind` explicit;
   `eager="true"` on the first only. A `longdesc` for a multi-panel or
   label-dense figure, written from an inventory of the image you put in
   your ledger first. Refer to a figure by describing it, never by number.
7. Tables as Markdown from the CELLS, checked against the PDF.
   **A reference to an appendix is a link** to its page in this book
   (playbook, page skeleton rule 9; the run facts list the appendices
   your module links and their paths). **So is any place the content
   asks the learner to consult what an appendix holds, whether or not the
   source links it**: "Using the periodic table, …" on a page that shows
   no periodic table links those words to Appendix A; an item that needs
   a value from any OTHER appendix (a formation enthalpy, a constant the
   page lacks) links the phrase naming it to the appendix that has it.
   The source's words stay as they are — only the link is added — every
   item that needs it carries it, and the footer says so. **An item that
   needs only atomic masses or other periodic-table data and names no
   table gets nothing** — a molar mass, a percent composition, an element
   for an atomic number: every page of the book carries the table as a
   control in the rail. Never add a sentence that points to it ("Use the
   periodic table."); the lint refuses it. Every other
   cross-reference stays plain text.
8. `## Summary`, `## Key equations` (only if the module has that section),
   `## Key terms` (the module's `<glossary>`, source order), `## Practice`,
   then `---` and the `<small>` footer whose `Changes:` clause names every
   adaptation and is true of the page.

## 4. The exercises — what bites

- **The form follows the keyed answer's shape** — the table in playbook
  "Exercises". Do not grade what the source does not key; do not turn an
  explanation into a multiple choice with invented options.
- **The stem is the source's, verbatim.** What you add comes after it;
  the closing sentence prints no number: "Enter the volume in liters." A
  datum the source assumes and the module never states goes in the stem in
  parentheses (playbook "Stems"). A lettered part's stem is
  the lead-in followed by that part, with the letter dropped. One named
  unit is spelled out, a quotient or product unit is its symbol ("g/mL");
  "with its sign" is never written (lint); a part that leans on an earlier
  part restates that part's given data inline, never in a parenthetical
  sentence and never its answer; an equation set inline ends its sentence
  with a period (lint). Playbook "Stems" has each rule once.
- **Numeric keys.** The key is the bare number the source prints, to the
  figures it prints; the stem names the unit. Declare `sig-figs:<n>
  last-digit:<k>` (playbook "Measured quantities" and the `last-digit` rule
  in "Exercises"); a count takes `whole-number`. **An atomic mass comes from
  this book's periodic table** (`appendices/a-the-periodic-table.md`), and
  the source's value stays the key where the table does not reach it digit
  for digit: `tolerance:<p>%` at the chapter's band, alone on a formula
  mass or molar mass asked for itself, beside `sig-figs:<n>` elsewhere
  (playbook "Numeric keys", "The source's value is the key") — never a key
  re-computed to the table. **A real-world number in a worked example's
  stem is a claim** (a liter of air's argon, a dietary requirement, which
  organism ferments grain), and so is every intermediate value: re-run
  each line from the line it comes from, and where the body states a
  defined constant, read the Summary and the Key terms entry of the same
  term for superseded wording. List what does not reproduce in your
  ledger's claim-error section. A key with a power of ten is
  `a\times10^{n}` with a braced exponent. **Run the arithmetic yourself**
  (`python3 -c`), from the stem's numbers and the book's own conversion
  factors, before you look at the source key; record both in your ledger.
  Then grade your own key and the natural wrong answers through the real
  grader:
  `node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<answerForm>"})))'`
  — the key must be `correct`; the unrounded readout `form`; the number
  retyped from the stem never `correct`.
- **`answerDisplay`** shows the answer as the book prints it, unit included
  (`$8.844\ \text{L}$`); a count shows the bare digit; a bare power-of-ten
  factor shows `$10^{-2}$` with no leading ×. Inside math the house lint
  groups a number of four or more digits (`5{,}371`) and bans `\dfrac`: a
  rule in this brief or the run facts that a lint refuses is REPORTED, and
  the lint wins until the parent rules. **The `\dfrac` ban is on watch**:
  where an inline `\frac` makes a question worse or loses content — digits
  you cannot tell apart on the rendered page, a fraction of fractions, a
  stem a learner would misread — keep `\frac` and REPORT the item (line,
  the fraction, what is lost); the parent logs it for the ban's review.
- **Multiple choice** only over a set the stem itself names, options in the
  stem's order, the key the source's. Never an invented distractor. Within
  that, prefer it: a keyed answer that is a choice among things the stem
  prints — its categories for each member of a list, yes or no for each
  part an answer names ("Only (b)"), the reactants of a printed reaction
  for the role asked — is a `multiplechoice`, not a `selfcheck` (playbook
  "Exercises" table; "Multiple choice stays open"). If you believe a
  source gate will not read the form, say so in your report; do not
  retreat to a `selfcheck`.
- **`selfcheck`** carries the source solution as the model answer, its
  first letter capitalized and a closing period added and nothing else
  reworded, and 2–6 lowercase `===CHECKS===` clauses in the model answer's
  own words, each a whole statement that checks something (not "its net
  charge"; not the question again; not the clause above it reworded); the
  bare-value and "Answers will vary" forms are the playbook's
  ("Selfchecks") — the second also for a simulation or example answer that
  is one possible case, with the added label "Sample answer:".
- **Part letters do not reach the page.** A stem or model answer that
  names another part by letter names it by position ("the previous item",
  "the two previous items"); a keyed exercise that says "repeat [Exercise
  N]" restates the omitted exercise's text verbatim in its own question
  (playbook "Stems").
- **Fillers** (glossary-recall `textin`, summary or body cloze,
  select-the-term multiple choice) only where an objective group is short
  of the floor, each from ONE module sentence or glossary entry you name in
  your ledger. **One exception, beyond the floor:** a headed body
  subsection that no source item on the page touches gets ONE filler
  (2.7's "Binary Acids" and "Oxyacids"); name the subsection in the ledger
  note and the items and the reason in the footer (playbook "Added
  items"). Never a numeric `textin`. The playbook's four filler rules
  bind: one answer fits (grade the blank's likely rivals — a synonym, any
  other member of an open list — and drop the sentence if one is as right
  as the key); never a word its own objective heading prints; never one
  half of a contrast pair; a select-the-term multiple choice where no cloze
  is unique — written as a question, never opening with a blank, and under
  a heading that names its key only if the heading names another option
  too. Never key a filler on a working word of the page's own stems
  (`group`, `period` on the page whose source stems say "the following
  group"): before adding one, ask whether a keyed exercise placed under
  another objective serves this one at least as well. The leak rules are life-sciences "Leaks across the page":
  nothing directly above a `textin` prints its key; a hint says where to
  look and never states the key or the fact that decides the item.
- **Hints**: the tool — the equation by its name, the table, the rule or
  definition to recall, the unit chain of a multi-step conversion — never
  the arithmetic on the item's own numbers ("Divide the mass by the
  volume", "Add 273.15"), a remark about THIS number's digits ("Every
  digit here is significant"), the shape of its result, the observation
  that settles a judgment, or the construction of a unit. Read the
  allowed/forbidden table in playbook "Hints" before you write the first
  one: the pilot's authors wrote its forbidden column, some of them after
  the rule existed. A hint points only at a table or equation that is on
  the page and holds what the learner needs — and never at the one row or
  sentence that prints the whole answer ("Find lithium in the table" under
  an item that asks for lithium-6's symbol and counts). **A hint shared by
  several items is read, key covered, against EVERY one of them**, the
  module's named exceptions first ("ask whether a metal is combined with
  nonmetals" gave covalent for (NH₄)₂CO₃); on a two-option item a hint
  never says what one option was replaced by or is "instead". A table the
  item needs that another section prints is named with its section, in
  plain words ("the table of common polyatomic ions in Section 2.6 Ionic
  and Molecular Compounds"); where the module names one substance two
  ways by its state, the hint names the subsection whose rule decides,
  never the observation that decides it.
- **Order inside a Practice group:** the source's keyed items first, in
  source order, then your added items (an added item goes above a keyed
  `selfcheck` whose model answer prints its key).
- **Source notes and the footer never give a key away.** A Source note
  beside an unanswered item prints no source value and no direction of the
  error; the footer names a corrected value without giving it and names an
  added item by where its sentence is, never "(blank: …)" (lint) and never
  a quoted sentence that holds the answer.
- **A display equation row fits the column** — about 60 rendered
  characters. Put a result and its "(round to …)" parenthetical on their
  own aligned row. A browser test measures every row; you cannot see it in
  the Markdown.
- **A name, a formula, an equation** (playbook "Exercises" table and
  "Formulas and equations"): a name is a plain `textin`; a formula or an
  ion's symbol is a `textin` with `answerForm="formula"`; a balanced
  equation is a `textin` with `answerForm="equation"`. Write the key in the
  book's Unicode print (`Mn₃(PO₄)₂`, `SO₄²⁻`), state symbols as the source
  prints them. Grade the key, the natural near-misses, and the stem's own
  formula or equation through the real grader before you file:
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.gradeText("<typed>","<key>",{form:"formula"})))'`.
  A key the lint calls unbalanced or unreadable is a suspected source
  defect: report it, do not repair it silently. An ion's NAME is keyed
  bare (`selenide`) with the two-word form in `accept` (`selenide ion`);
  a name the stem itself prints ("ferric nitrate" in "give the IUPAC name
  of ferric nitrate") is never an `accept` member, and neither is a name
  the module prints as out of date ("was known as ferrous chloride": the
  lint refuses it, and the grader answers it "That is an older name" on
  its own — nothing is authored for that); the grader's message does not
  say what form the name takes, so the hint of such an item does; a nuclide symbol is
  keyed in print with every number the source prints (`²³₁₁Na`; the
  field then asks for both, and its stem ends "Type the mass number,
  then the atomic number after an underscore, before the symbol:
  ^14_6C." — with another nuclide where carbon-14 is the answer).
- **A stem that asks about each part of another exercise** ("…for each
  reaction in [Exercise 4.40]", "…each cell in the previous exercise"):
  one item per answered part — the lead-in restated for one, then the
  referenced exercise's part verbatim, data and all. The run facts list
  these exercises and the exercise each one borrows from.
- **A part answered with several named numbers** ("3 protons, 3
  electrons, 4 neutrons") is one fill-in per number, and each stem CLOSES
  with a sentence that names the one it asks for, in the answer's own
  word: "Enter the number of neutrons." The source gate reads that
  sentence to hold each item to its own number.
- **A part that is only an image** ("(a) [structure] (b) [structure]"):
  the `mediafigure` directly above the part's item or items, and each
  stem says "shown in the figure above". Nothing else tells the parts
  apart — to the learner or to the source gates — so never put two
  parts' figures above one item, and never an item of one part under
  another part's figure.
- **An `accept` member** is another name or form the module itself
  prints for the answer, or the key's own words spelled another way the
  grader does not fold (`metres`; an irregular plural) — never a name you
  know from elsewhere (playbook "Exercises", "An `accept` member is one of
  two things").
- **A unit as the answer**: a one-word or counted unit name is a `textin`
  with the accept crossings the playbook's table lists; a quotient or
  product unit, or kelvin against "°K", is a `multiplechoice` (the text
  grader drops `/`, `·`, and `°`; the lint refuses them in a key).
- **A worked example's stated reasons** are checked against the rule the
  page teaches, and a body cross-reference to end-of-section exercises
  names only exercises the page renders.
- **Every item needs a `hint`** that names the method or the place to look,
  never the result.
- **A `textin` question takes no math and no power of ten** (playbook
  "Notation").
- At most 2–3 interactive items in a row in the BODY; a Check Your Learning
  with more parts than that is split by a sentence of the source's own text
  or reported to the parent. The Practice block is exempt.

## 5. Verify, then report

- `npm run verify-section -- <your page>` until it prints `verified` with no
  ✗; run it again immediately before you report. **A rule that fires on
  sound content is REPORTED, not worked around** — every chapter of this
  book meets answer shapes no earlier chapter had, and a lint, gate, or
  grader that misreads chemistry is exactly what the parent needs to hear.
  `verify-section` does not run the source gates (they need the chapter's
  map and run in the parent's `npm test`), so the parent matches your
  items to the source's exercises by their STEMS after you report: keep
  each stem the source's words, and say in your report which items you
  could not shape as the playbook's table gives.
- **Source ledger** `$SP/ledger-N.M.md`: per interactive item, the CNXML
  exercise or example id and part, the component, your own computation and
  the source key side by side for a number, the `last-digit` you chose and
  why, any adaptation; per figure, stem, `kind`, whether the alt was
  rewritten; every suspected source defect (element id, text, why,
  correction) and, separately, every suspected claim error. End with a
  **tally**: keyed exercises and parts, Check Your Learning items, unkeyed
  exercises omitted, fillers by kind. The footer's numbers are copied from
  the tally.
- **Answer-ledger results** `$SP/ledger-results/N.M.json`, shaped
  `{"results":[{"hash":"…","verdict":"ok","note":"…"}]}`; hashes from
  `node tools/verify/answer-ledger.mjs list content --unverified` (a JSON
  array; filter to your page; copy the FULL hash). `ok` only after
  re-deriving the item against the CNXML; the note says where the key comes
  from (`source exercise <id> part (b)`, `Check Your Learning of example
  <id>`, `glossary recall: <term>`, `cloze from summary sentence "…"`).
- **Final message, fifteen lines at most:** counts (figures; items by kind;
  key terms; keyed exercises carried and unkeyed omitted), the
  `verify-section` tail line, suspected source defects and claim errors
  (count; details in the ledger), every departure from the source in one
  line each, every fraction the `\dfrac` ban made hard to read, and — most important — **every place the
  playbook, this brief, the run facts, the lint, or the grader was wrong,
  silent, or awkward for your module**, with the exact item. Do not paste
  the ledger.
