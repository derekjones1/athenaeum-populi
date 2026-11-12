# Knowledge Check Playbook — Chemistry

A Knowledge Check is a cumulative self-test on a block of chapters — not a
section. It is the one deliberate departure from section-page exercise
patterns: **quizzes have no hints.**

Read and follow `docs/authoring-playbook.md` and `docs/subjects/chemistry.md`
first. The core's source-fidelity, component, verification, and handoff
rules all apply here, and so do the Chemistry playbook's "Exercises" (the
table of components, "Stems", "Numeric keys", "Added items", "Selfchecks",
"Source defects and Source notes"), "Notation", and "Graded items".

This edition governs OpenStax Chemistry 2e. The mathematics edition is
`docs/knowledge-check-playbook-math.md` and the life-sciences edition is
`docs/knowledge-check-playbook-life-sciences.md`. All three are cumulative,
grouped by the chapter and section each item comes from, hint-free, and
ledgered and independently solved. They differ where the source differs. A
math book has a pool of Review Exercises and Practice Tests no section page
spends; a life-sciences book has none, so its check is written from the
module text. Chemistry has none either, and its answers are numbers,
formulas, and names: **a check's calculation items re-ask the chapters'
worked examples, and the rest are written from the module text.**

A check run follows `docs/briefs/chemistry/kc-run.md`, the parent's recipe.

## Placement

The placement and identity rules every edition shares — file name and
location, frontmatter, non-overlapping ranges, the numeric-prefix exemption,
`aliases` on rename, no hints, the waived 2–3 cap, real components only —
live in `docs/authoring-playbook.md` §3 "Knowledge Checks (every edition)".
What is specific to this book:

- **One page per block of chapters, seven pages** *(decided November 9,
  2026)*. The book is flat — it has no units — so blocks follow the content,
  and uneven blocks are accepted where chapters belong together. A check
  renders flat in the sidebar, after its block's last chapter.
- Title: `Knowledge Check: Chapters 1–3` (the validator reads the range).
- **Weights are derived, never shifted by hand**: `npm run kc -- weights
  content/physical-sciences/chemistry --write` gives each check the weight
  after its last chapter, moves every later chapter, and keeps the
  appendices last. The table shows the book with every check landed.

| Block | Chapters | Sections | Items | File | Weight | Content |
|---|---|---|---|---|---|---|
| 1 | 1–3 | 17 | 34–51 | `knowledge-check-01-03.md` | 4 | matter and measurement, atoms and ions, the mole and solutions |
| 2 | 4–5 | 8 | 16–24 | `knowledge-check-04-05.md` | 7 | reaction stoichiometry and thermochemistry |
| 3 | 6–8 | 15 | 30–45 | `knowledge-check-06-08.md` | 11 | electronic structure, bonding, and molecular geometry |
| 4 | 9–11 | 17 | 34–51 | `knowledge-check-09-11.md` | 15 | gases, liquids and solids, solutions |
| 5 | 12–15 | 21 | 42–63 | `knowledge-check-12-15.md` | 20 | kinetics and equilibrium, including acid-base and solubility |
| 6 | 16–17 | 11 | 22–33 | `knowledge-check-16-17.md` | 23 | thermodynamics and electrochemistry |
| 7 | 18–21 | 25 | 50–75 | `knowledge-check-18-21.md` | 28 | descriptive, coordination, organic, and nuclear chemistry |

The section counts are the scan's; a run counts the `### N.M` headings its
content tree implies before it starts.

## Content rules

- **Cumulative, grouped by section** (the core's rule): one `## Chapter N:
  Title` heading per chapter and one `### N.M Title` heading per authored
  section, titles verbatim from the pages; no section is omitted. A
  one-paragraph `callout` before the first chapter says which chapters the
  check covers, that its calculation questions re-ask worked examples from
  those chapters and its other questions are written from the chapters' own
  text, and that there are no hints.
- **Two or three items per section, at least one of them auto-graded**
  *(Derek, November 10, 2026)* — `fillin`, `multiplechoice`, `textin`, or
  `sortbins`; a section of only `selfcheck`s is not tested. Three where the
  section's content supports three; two is not a shortfall. The lint holds
  the range and the floor (the `knowledgeCheck` profile in `BOOK_RULES`,
  `tools/lint/lints.mjs`, which also lets this book's checks carry
  `fillin`s), with an item above the first `### N.M` heading and any
  `graphplot` an error.

### Where the items come from

*(Derek, November 11, 2026.)* A graded item needs a source key
(`docs/subjects/chemistry.md`, "Graded items"), and every keyed exercise
and every Check Your Learning is already on a section page. What is left
that the source answers is the worked example: its question is asked, its
Solution prints the answer, and the section page sets it as prose, not as
an item. So:

- **A worked-example item re-asks a worked example's own question and keys
  the answer its Solution prints.** Every `fillin`, and every `textin` that
  declares `answerForm="formula"` or `"equation"`, is one — `npm run kc --
  sources` (in `npm test`) refuses any other, a key the example's Solution
  does not print, a `sig-figs` count the printed answer does not show, and
  a key the example's own question gives.
  - **The stem** is the example's question as the section page prints it,
    its title dropped, then whatever "Stems" adds to a keyed exercise: the
    closing sentence that names the unit or the quantity where the question
    leaves it open, the place in plain words for a section before 1.5, the
    typing sentence of a nuclide or a hydrate. A lettered example gives one
    part, its lead-in restated for the one, and an example that answers
    with several quantities gives one of them, the stem closing with the
    sentence that says which (the ledger records the choice): two of a
    section's items are never two answers of one example. A parenthetical
    pointer to a picture that carries no data — "(shown in the photograph
    below)" — is dropped, since a cumulative page has no figure to point
    at; nothing else of the question changes, and never a number.
  - **The key** is the Solution's final value as printed. The component
    and the `answerForm` follow the table in "Exercises" and "Numeric
    keys", exactly as for a keyed exercise: `last-digit` by where the
    numbers come from, and the chapter's `tolerance:<p>%` band where this
    book's periodic table cannot reach the printed value. **Compute it
    yourself first.** A value the arithmetic does not reach is a suspected
    source defect, reported to the parent — and it is a defect of the
    section page too, which prints the same example.
  - **A usable example** stands alone, or leans only on data that can be
    restated inline in its own sentence ("Stems", "A part that leans on an
    earlier part"); has one answer of an auto-gradable shape; prints that
    answer in the Solution's text, not only in an image, and takes no
    datum from a picture; is not one the
    section page corrected or put a Source note on (a known defect is not
    an anchor); does not answer with a number its own question gives; and
    does not give, or take, another check item's answer (3.3's vinegar
    example answers 0.839 *M*, and a later example takes 0.839 *M* as its
    datum: one of the two, never both). Where the section offers a choice,
    prefer an example the periodic table reaches within one unit of the
    last digit, so the item needs no band.
  - **A worked example whose answer is a choice or a name** — ionic or
    molecular, a group's name, a compound's name — is a `multiplechoice`
    or a plain `textin` under the same rows of the table, and its ledger
    note names the example. No gate reads these two against the Solution:
    the checker does.
- **A recall item is written from the module**, as in the life-sciences
  checks: a glossary definition, a summary sentence, a body sentence, or a
  clean categorical table. It follows this book's "Added items" — one
  answer fits, never one half of a contrast pair, a select-the-term
  `multiplechoice` whose options are all terms one module sentence or list
  prints — and the life-sciences edition's "Content rules" for a written
  item, which bind here unchanged: a stem stands alone, a cloze blanks a
  term, the stem may not repeat the key's own word, reverse recall is the
  same item and a hint counts, format tells, a distractor is the module's
  answer to a different question, numeric options sorted, and no item may
  print another item's key. **A `textin` key is never a word of its
  section's title**: on a check the heading above an item is `### N.M
  Title`, and the heading-word lint reads it.
- **A `selfcheck`** asks for an explanation the module gives. Its model
  answer is made of the module's own sentences and its `===CHECKS===`
  rubric lists two to six clauses of that answer (required on a check:
  lint). A worked example whose answer is an explanation may be one, with
  the Solution's own sentences as the model answer.
- **Never a source**: an unkeyed exercise; a keyed exercise or a Check Your
  Learning (spent — the duplicate-stem lint refuses the stem of any item of
  any section page, body items included); a worked example with its
  numbers changed (an author-derived key).

### Which items a section gets

- **Spread by objective.** Each of a section's items serves a different
  learning objective of the section; a section with fewer objectives than
  items draws on different body subsections instead. An objective with a
  usable worked example takes a worked-example item, so a calculation
  section may carry worked-example items only; a section with no worked
  example (four of block 1's seventeen) is recall items and at most one
  `selfcheck`.
- **A check item may not duplicate a section item, in either direction.**
  Before settling a recall item, grep the section page — `description`,
  objective headings, Practice stems, options, hints and rubrics, body
  self-checks — and then every section page of the book for the key and
  its defining fact. This book's pages already carry glossary recalls and
  summary clozes as fillers, so the unspent terms are fewer than the
  glossary suggests.
- **The worked example is on the section page, solution and all, by
  design**: that is not a reverse recall. The item tests whether the
  learner can now work it unaided, and the callout says so.

### The page

- **A band-graded key takes its sentence.** A check has no `## Practice`
  heading to carry the page-level Source note of "Numeric keys", so an item
  graded `tolerance:<p>%` — alone or beside `sig-figs` — is followed by
  the one-sentence form: "*Source note:* the answer shown for this item is
  the source's, which was computed from atomic masses with more digits
  than this book's periodic table prints; an answer worked from the table
  is graded as correct."
- **The periodic table is on the page** (the rail control resolves from
  the book root), so no sentence is added for it. How an item reaches any
  other appendix is still open (`docs/subjects/chemistry.md`, "What is
  still open") and is settled before the first check item that needs one.
- **The footer** follows the section-page form — licence, deep link to
  the source book, and a `Changes:` clause that says the calculation
  questions re-ask the chapters' worked examples with the answers the
  source prints, the others are locally written from the named chapters'
  modules, no question carries a hint, and every self-check carries a
  rubric. It never prints a key.

## Source and answer audit

Build a **source ledger** before authoring; it is the handoff artefact, not
a committed file. For every item record:

- the module id of the section it sits under, and what it is built from —
  for a worked-example item the example's CNXML id and title; for a
  written item the `<section>` id and title, or `summary`, `glossary`
  (with the `<definition>` id), or the table id;
- for a worked-example item: the question as the CNXML prints it and as
  the item prints it, with every added sentence; the Solution's final
  value quoted; **your own computation, run and unrounded**; the
  `last-digit` or band with its reason; where a molar mass enters, the
  value Appendix A's masses give and its relative difference from the
  key; and why the example is usable (each test of "A usable example");
- for a written item: the exact sentence, definition, or cells, the
  independently derived answer, and for a multiple choice where the module
  prints each distractor and why none is also correct.

That tie is the provenance. When the item's answer-ledger record is
written, its `note` opens `KC <block> <N.M> § Example: <title>, m<module>`
for a worked-example item and `KC <block> <N.M> § <subsection>, m<module>`
for a written one; `npm run kc -- notes` writes the notes from the authors'
provenance files.

Inspect the pinned CNXML module as the semantic source. Before writing,
grep `docs/openstax-errata.md` for the module id: a defect a section page
already disclosed may carry a decision the check must follow.

## Verify

The triple check applies unchanged — author, an independent checker, then a
blind solve with the keys hidden — with the reverse-recall sweep and the
second checker of the life-sciences checks between them. Every reading and
every ruling comes before the blind solve.

1. Reconcile the chapter and section headings against the authored book and
   the source ledger. Every section of the block is represented, at the
   quota.
2. Independent checker (Opus): answers every item with its key covered —
   **every number by running the arithmetic, from the stem and Appendix A**
   — before comparing; re-reads each item against the raw CNXML; and reads
   each worked-example item against "A usable example".
3. Reverse-recall sweep, parent read, replacements, and a second checker
   over every replacement, as `kc-run.md` orders them.
4. `npm run verify-section -- <page>` on the page, or on a scratch copy at
   a path that ends `content/physical-sciences/chemistry/knowledge-check-XX-YY.md`
   (the book's rule profile and the sources gate are keyed by that path);
   `npm run kc -- sources <page>`; `npm run kc -- leaks <page>` after every
   replacement round — it reads a fill-in's key as a number another item
   prints; `node tools/verify/verify-replay.mjs <dir>`.
5. Blind solve: `npm run solve:emit` on the check, the masked section pages
   as the solver's source. A masked page prints every worked example with
   its solution, so **the solver works each fill-in from the stem and
   Appendix A first, by running the arithmetic, and only then reads the
   page**, and says in the item's `note` whether the page's worked value
   agrees. `npm run solve:compare`; settle every disagreement against the
   module, and read every `note`.
6. Record each verdict and its `solved` block in the **answer ledger**
   (AGENTS.md §The answer ledger; `npm run ledger:merge` last, after every
   other edit): every item needs a record, and `npm test` fails at
   `verify:ledger` until it exists. Then `npm run baseline:update`
   (`--min-confirmed` and `--min-covered` do not move: the source gates
   never visit a check), `npm test`, and `npm run build && npm run
   check:build`.
7. Add the check's route to `REPRESENTATIVE_PAGES` in
   `tests/accessibility.spec.mjs`. In the browser, confirm the check sits
   after its block's last chapter, the grouping, no hint controls, the
   periodic-table control, and a right and a wrong answer in a fill-in and
   in a formula field.
8. Include the source ledger, discrepancies and errata numbers, the weight
   changes, the page-size measurement, and uncommitted files in the
   handoff.
