# Knowledge Check Playbook (Hugo edition)

A Knowledge Check is a cumulative, book-level self-test — not a section. It is
the one deliberate departure from section-page exercise patterns: **quizzes have
no hints.**

Read and follow `docs/authoring-playbook.md` first. Its source-fidelity,
component, math, image, verification, and handoff rules all apply here.

Like the authoring playbook, this playbook currently governs the OpenStax
mathematics books; adapt both together, with a reviewed subject playbook,
before building cumulative assessments for an image-dependent subject.

## Placement

- File: `content/<subject>/<book>/knowledge-check-XX-YY.md` (book level, next to
  the chapter folders), where `XX-YY` is the chapter range (e.g.
  `knowledge-check-01-06.md`).
- Frontmatter: `title`, `description`, `source_chapters: "1-6"`, and a `weight`
  that slots it between the right chapters in the sidebar/pager (e.g. after
  chapter 6 → weight one past chapter 6). Knowledge checks are exempt from the
  numeric-prefix rule; the validator knows this.
- A book's Knowledge Check ranges must not overlap. The filename, title,
  `source_chapters`, chapter headings, and sidebar placement must describe the
  same range. If a published range is renamed, add a Hugo `aliases` entry for
  the old URL.

## Content rules

- **Cumulative:** questions cover every chapter in the range, grouped by the
  section they come from, so a miss points the reader to the exact section.
  Use one `## Chapter N` heading per chapter and one `### N.M` heading per
  authored section; do not silently omit a section.
- **No hints.** Never add a `hint=` to a `{{</* fillin */>}}` or
  `{{</* multiplechoice */>}}` on a Knowledge Check — the lint rejects it.
- Every question comes from the source textbook's chapter Practice Tests (or
  Review Exercises), graded against the book's official Answer Key. Use only an
  item whose answer is visibly present in the key. OpenStax often prints only
  odd-numbered answers, but parity can change by chapter—inspect the actual key
  pages rather than assuming.
- Same shortcodes as sections (`{{</* fillin */>}}`,
  `{{</* multiplechoice */>}}`), just without hints. `answer` LaTeX is
  single-backslash; the grader must self-grade each answer `correct` (run
  `npm run verify-section`).
- Use `answerMode="unordered"` when an item asks for a set of roots or solutions
  whose order is immaterial. Do not use it for ordered pairs/triples, sequences,
  or any prompt that prescribes an order.
- The normal 2–3 consecutive-question limit is intentionally waived on a
  cumulative Knowledge Check. Still select for coverage rather than repetition.
- Remove print-only labels such as `Try It 7.31` and standalone `(a)` markers
  from learner-facing component fields. Preserve every source item number in
  the source ledger.
- Do not use static “Check answer” disclosures or file-backed textbook images.
  Questions must use the real components; required figures must be recreated
  semantically and checked against the PDF.

## Source and answer audit

Build a ledger before authoring. For every selected item record:

- source module ID plus exercise, problem, and solution element IDs;
- chapter and section, plus the printed Practice Test or Review Exercise
  number;
- visually inspected question page and Answer Key page;
- exact CNXML and printed prompts, plus the official answer;
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
3. Run
   `npm run verify-section -- content/.../knowledge-check-XX-YY.md`; it
   additionally fails on any `hint=`.
4. Run `npm test`; it validates the complete `content/` tree, every Knowledge
   Check range and heading, real-grader parseability, and all authoring lints.
   For a new cumulative page, also run `npm run build && npm run check:build`.
5. In the browser, confirm sidebar placement, chapter/section grouping, no hint
   controls, no print-source labels, correctly rendered math, and working right
   and wrong submissions from every chapter.
6. Include the full source ledger, discrepancies, visual pages checked, and
   uncommitted files in the handoff.
