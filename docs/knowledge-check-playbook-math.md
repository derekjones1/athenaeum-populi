# Knowledge Check Playbook — Mathematics

A Knowledge Check is a cumulative, book-level self-test — not a section. It is
the one deliberate departure from section-page exercise patterns: **quizzes have
no hints.**

Read and follow `docs/authoring-playbook.md` and `docs/subjects/math.md`
first. The core's source-fidelity, component, verification, and handoff
rules all apply here, and so does the math playbook's notation and
`answerForm` vocabulary.

This edition governs the OpenStax mathematics books (the three algebra books
and Precalculus 2e). The life-sciences edition,
`docs/knowledge-check-playbook-life-sciences.md`, shares the philosophy —
cumulative, grouped by the chapter and section each item comes from, no
hints, every item ledgered and independently solved — and differs where the
source does: its items are author-written at a fixed per-section count
because Biology 2e has no chapter-level exercise pool.

## Placement

The placement and identity rules every edition shares — file name and
location, frontmatter, non-overlapping ranges, the numeric-prefix exemption,
`aliases` on rename, no hints, the waived 2–3 cap, real components only —
live in `docs/authoring-playbook.md` §3 "Knowledge Checks (both editions)".
For a math book, `XX-YY` is the chapter range the check covers (e.g.
`knowledge-check-01-06.md`, weight one past chapter 6): one check per half
of the book, or whatever split the chapter count makes even.

## Content rules

- **Cumulative, grouped by section** (the core's rule): one `## Chapter N`
  heading per chapter and one `### N.M` heading per authored section; do
  not silently omit a section.
- Every question comes from the source textbook's chapter Practice Tests (or
  Review Exercises), graded against the book's official Answer Key. Use only an
  item whose answer is visibly present in the key. OpenStax often prints only
  odd-numbered answers, but parity can change by chapter—inspect the actual key
  pages rather than assuming.
- Same shortcodes as sections (`{{</* fillin */>}}`,
  `{{</* multiplechoice */>}}`, `{{</* graphplot */>}}`), just without hints —
  the no-hint lint reads the whole file, so it covers `graphplot`'s `hint=`
  too, and the regular-section graphplot-requires-hint rule does not apply
  here. `answer` LaTeX is single-backslash; the grader must self-grade each
  answer `correct` (run `npm run verify-section`).
- **Graphing coverage follows the source.** Where a section's Review
  Exercises / Practice Test pool leans on "graph the function" / "sketch"
  asks and the object family has a graphplot answer form (line, points,
  quadratic, asymptotes, system — the authoring playbook's GraphPlot section
  is the grammar), represent that section with at least one `graphplot`
  item, keyed from a source item whose printed Answer Key shows the answer
  graph. Inspect that key graph visually and re-derive the object from the
  printed function — the picture is the official answer, so "visibly present
  in the key" means the graph. All graphplot validation applies unchanged
  (lattice reachability, `plotPoints` slack, the three-point rule). Where
  the family has no answer form (exponential, logarithmic, and trigonometric
  curves stay static figures), property fill-ins and recognition MCs remain
  the right representation — do not force a conversion. A multipart source item
  ("standard form, vertex, intercepts, and graph") may contribute its graph
  part as the graphplot; record the split in the ledger like any other
  part-selection.
- Use `answerMode="unordered"` when an item asks for a set of roots or solutions
  whose order is immaterial. Do not use it for ordered pairs/triples, sequences,
  or any prompt that prescribes an order.
- **Distribution.** Every section in the range is represented; beyond that
  the count per section follows the source pool — usually two or three
  items, chosen for coverage of the section's skills, never a fixed quota.
  A section whose Review Exercises are all one skill gets one or two items;
  one whose pool spans several gets more. (The life-sciences edition fixes
  the count per section and lints it; the math books do not.)
- Remove print-only labels such as `Try It 7.31` and standalone `(a)` markers
  from learner-facing component fields. Preserve every source item number in
  the source ledger. Required figures are recreated semantically (spec-first)
  and checked against the PDF.

## Source and answer audit

Build a ledger before authoring. For every selected item record:

- source module ID plus exercise, problem, and solution element IDs;
- chapter and section, plus the printed Practice Test or Review Exercise
  number;
- visually inspected question page and Answer Key page;
- exact CNXML and printed prompts, plus the official answer (for a
  `graphplot`, the Answer Key's printed graph is the official answer — record
  the key page and what the graph shows: intercepts, vertex, asymptotes);
- independently computed answer;
- chosen component and any unavoidable response-mode adaptation.

For a mapped OpenStax book, inspect the pinned CNXML module as the semantic
source, then render the question and Answer Key pages from the PDF and inspect
them visually. The PDF remains the edition and visual evidence for notation,
graphs, part boundaries, and answer context. Solve the item independently. If
the CNXML, printed prompt, official key, and calculation disagree, stop and
document the discrepancy; do not silently change one to fit another.

## Verify

1. Reconcile the chapter/section headings against the authored book and the
   ledger. Every section in the range must be represented.
2. Re-read each selected question and answer on the rendered PDF pages, then
   independently solve it. Self-grading proves parseability, not correctness.
3. Record each independently derived verdict in the **answer ledger** (not the
   source ledger above — see AGENTS.md §The answer ledger): every new question
   needs a record, and `npm test` fails at `verify:ledger` until it exists.
   The mechanics are step 3 of the authoring playbook's §4.
4. Run
   `npm run verify-section -- content/.../knowledge-check-XX-YY.md`; it
   additionally fails on any `hint=`.
5. Run `npm test`; it validates the complete `content/` tree, every Knowledge
   Check range and heading, real-grader parseability, and all authoring lints.
   For a new cumulative page, also run `npm run build && npm run check:build`.
6. In the browser, confirm sidebar placement, chapter/section grouping, no hint
   controls, no print-source labels, correctly rendered math, and working right
   and wrong submissions from every chapter.
7. Include the full source ledger, discrepancies, visual pages checked, and
   uncommitted files in the handoff.
