# Run facts — Microbiology chapter NN (`$SP/run-facts.md`)

The parent fills this per run from the `keys-N.M.txt` files and the raw
CNXML. Authors and checkers read it after their brief. Everything here is a
FACT about this run or a DECISION the parent has made; a rule belongs in
the playbook, not here. Delete a heading that does not apply.

## Scope
- Chapter NN, *Title*: N.1 *Title* (mNNNNN), N.2 … Intro module mNNNNN
  (landing already written). Date. Number of authors in the wave.
- Chapters done before this run: 1–(N−1); every rule in
  `docs/subjects/microbiology.md` applies.

## PDF
- `$SP/pdf/chNN/p-0NNN.png`, NNN the true PDF index, four digits; printed
  folio = index − 14. N.1 `p-…`–`p-…`; … Summary `p-…`; pooled exercises
  `p-…`–`p-…` (which sets on which pages). The last page of a section is
  the next heading's first page too.

## Per section (one block each)
- **N.M** — objectives: K (floor 3K, min 8). Source exercises: a MC, b T/F,
  c Matching (rows), d FIB, e SA, f CT (which carry media) = total (keyed
  k). Defined-term elements: T (repeats: …) → bullets: B. Body Check Your
  Understanding boxes: n (bullets per box). Figures: list of stems, noting
  those inside a feature box. Footnotes: n (kind). Feature boxes: list with
  titles and Link to Learning URLs. Tables with a `summary`: list, with the
  `sortbins` decision for each (bins, or "step table — skipped").
  Cross-references out of the module: target module → route or "plain
  text (not authored)".

## Parent decisions (the forms the playbook cannot decide for a module)
- Exercise images (`_img` stems): for each, the form (`selfcheck` with a
  worked model answer / figure-keyed `multiplechoice` / …) and what the
  alt may and may not say.
- Matching sets: per-row `multiplechoice` shape (options = the table's
  terms, all of them, in table order).
- Fill in the Blank keys that need care: >4-word keys → `multiplechoice`;
  "A or B" keys → answer A, `accept="B"`; two-blank keys (ordered / unordered
  / independent facts) and their form.
- Notation this run needs that the corpus has not printed yet (house form
  + what the source mixes).
- Key-terms scaffold notes: headword mismatches the scaffold flagged and
  the resolution; genuinely sentence-derived terms (count them in the
  footer).
- Clinical Focus chain: Part 1 → Part 2 → … → Resolution, with "the case
  began in" for every later part.
- Routes for every page that exists or lands in this run.
- Anything in the playbooks that is wrong or silent for these modules, as
  far as the parent already knows.

## Exemplars for this run
- One finished page of this book that shows the shapes these modules need
  (a Clinical Focus chain, a matching set, an exercise image, a table with
  `sortbins`). One or two paths, no more.
