# Run facts — Anatomy and Physiology chapter NN (`$SP/run-facts.md`)

The parent fills this per run from the `keys-N.M.txt` files and the raw
CNXML. Authors and checkers read it after their brief. Everything here is a
FACT about this run or a DECISION the parent has made; a rule belongs in
the playbook, not here. Delete a heading that does not apply.

## Scope
- Chapter NN, *Title*, Unit U *Unit title*: N.1 *Title* (mNNNNN), N.2 …
  Intro module mNNNNN (landing already written). Date. Number of authors
  in the wave.
- Chapters done before this run: 1–(N−1); every rule in
  `docs/subjects/anatomy-physiology.md` applies.
- Modules of this chapter in the September 8, 2026 upstream errata set
  (the PDF shows the OLD text/image for these): list, with what changed,
  or "none".

## PDF
- `$SP/pdf/chNN/p-0NNN.png`, NNN the true PDF index, four digits; printed
  folio = index − 16. N.1 `p-…`–`p-…`; … Key Terms `p-…`; Chapter Review
  `p-…`; pooled exercises `p-…`–`p-…` (Interactive Link Questions, Review
  Questions, Critical Thinking Questions, which on which pages). The last
  page of a section is the next heading's first page too.

## Per section (one block each)
- **N.M** — objectives: K (floor 3K, min 8). Source exercises: a Review
  (MC, note any non-four-option item), b Critical Thinking, c Interactive
  Link = total (all keyed). Glossary definitions: G (→ Key-terms bullets);
  body terms with no glossary entry: list (bold only); glossary terms the
  body never bolds: list. Figures: list of stems, noting those inside a
  feature box, any subfigure figure, and any alt that only says "parts are
  labeled". Feature boxes: list with class, title, and Interactive Link
  URLs. Tables with a `summary`: list, with spanning cells / image cells
  noted and the `sortbins` decision for each (bins, or "step table —
  skipped"). References section: yes (n paragraphs) / no. Cross-references
  out of the module: target module → route or "plain text (not authored)".

## Parent decisions (the forms the playbook cannot decide for a module)
- **Interactive Link Questions, per item** (rule 1): item id → "graded
  `selfcheck`: fixing sentence: '…'" or "prompt only (answer is in the
  linked media)". Part B quotes the ONE candidate sentence or "no single
  sentence"; Part C decides.
- Feature-box closing questions: per box, "prompt" or "selfcheck, fixed by:
  '…'".
- Comparison tables: bins for each `sortbins`; a table with image cells or
  spanning cells: how it is transcribed.
- Notation this run needs that the corpus has not printed yet (house form
  + what the source mixes: units, ion charges, ranges).
- Key-terms scaffold notes: glossary terms the body never prints (they
  stay bullets), body terms with no entry (bold only), a module with no
  glossary.
- Figures flagged in Part B as label-only alts: which need a `longdesc`
  for a Practice item to be fair.
- Routes for every page that exists or lands in this run.
- Anything in the playbooks that is wrong or silent for these modules, as
  far as the parent already knows.

## Exemplars for this run
- One finished page that shows the shapes these modules need (a glossary
  Key-terms block, a `sortbins` from a comparison table, a feature-box
  callout, a labelled figure with a `longdesc`). Until this book has one,
  a Biology 2e page; then this book's. One or two paths, no more.
