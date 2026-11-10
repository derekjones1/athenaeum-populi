# OpenStax Chemistry 2e — independent checker brief

You are an **independent checker**, not an author. Catch wrong keys,
unfaithful transcription, mis-set notation, leaky items, dishonest
conversions, and inaccessible figures on ONE already-written section page
named in your task prompt. You did not write it and you must not trust it. A
false "all clean" is worse than a false alarm. `SP` is the directory this
brief is in.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Do not
edit any file** except your report `$SP/check-N.M.md`, which you append to as
you go. **Never run a git command. Do not spawn sub-agents.** No `npm test`,
`npm run build`, `npm run ci`, `ledger:merge`, `baseline:update`,
`source:*` except `npm run source:diff -- <page>`. **Do not read the
author's ledger, results, or report** (`$SP/ledger-*`, `$SP/report-*`). You
may read `$SP/keys-N.M.txt` only AFTER forming your own answer to an item.
**Never read or grep `$SP/parent-only/`** — the parent's notes are there, and a reader who has seen what the parent suspects is no longer an independent reading. Search the repository, never the scratchpad.

Read first: `$SP/run-facts.md` (a page that follows a parent decision is not
defective for it), then `docs/subjects/chemistry.md` (all but "Knowledge
checks" and "What the pilot settled, and what is still open") and, in `docs/subjects/life-sciences.md`,
"The section page, in order", "Notation", "Media: vendored figures", "Leaks
across the page", and "Defect classes the checkers find".

## 1. Enumerate

Every `fillin`, `multiplechoice`, `textin`, `selfcheck` on the page, body
and Practice, in order, with question, key, form, and hint. Then enumerate
the module's `<exercise>`s and worked `<example>`s from the raw CNXML and
tick each off by hand: **every keyed exercise and every lettered part of it
has a component; every Check Your Learning has its item or items; no unkeyed
exercise was given a key.** A missing part is the defect this pass exists to
catch.

## 2. Answer every graded item yourself, key covered

- **A numeric fill-in:** solve it from the stem and the book's own
  conversion factors, running the arithmetic (`python3 -c`), BEFORE reading
  the page's key or the source's. Then compare all three. Report: a key the
  source does not print; a key written to other figures than the source's;
  a `sig-figs` count that is not the key's; a `last-digit` that the
  playbook's rule would set the other way (say which numbers in the
  calculation are measured factors); a stem that does not name the unit the
  key is in. Grade through the real grader
  (`node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<form>"})))'`):
  your own answer, the key, the unrounded readout, the answer with its
  unit, and every number the stem prints. Your answer and the key must be
  `correct`; a number retyped from the stem must never be. A count ("how
  many significant figures") declares `whole-number`, never `decimal`: type
  the stem's own numbers with their decimal points against it.
- **A multiple choice:** the options are exactly the set the source stem
  names, in its order; the key is the source's.
- **A `selfcheck`:** the model answer is the source solution; each rubric
  clause is in the model answer's words.
- **A filler:** ONE module sentence or glossary entry fixes its key; no
  other answer fits the blank; and the blank is not one half of a contrast
  pair the stem prints the other half of. Grade a `textin` through the real
  text grader, `accept` passed as the `|`-separated STRING the page writes
  (an array is silently ignored):
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.checkText("<typed>","<answer>",{accept:"a|b"})))'`.

## 3. Source fidelity, against the raw CNXML

- Read the page beside the module, paragraph by paragraph: nothing dropped,
  condensed, reordered, or added. Run `npm run source:diff -- <page>` and
  explain every ADDED sentence and NEAR-MISS word.
- **Every display equation and every inline math span against its MathML**:
  each number, exponent, unit, and struck-through unit. A dropped
  cancellation or a unit moved across a fraction bar is a defect.
- **Notation, on the rendered rule** (playbook "Notation"): a formula in a
  sentence is Unicode; inside math it is `\ce{…}`; a quantity in a sentence
  is prose; a numeric exponent is math. Report every departure, and every
  place the rule itself gave an awkward result.
- Objectives, section titles, feature boxes (name, title, link), worked
  examples (title, problem, every solution step), tables cell by cell
  against the PDF, summary, key equations, key terms against the
  `<glossary>` one for one.

## 4. Figures

Open every vendored image the page uses. The alt and any `longdesc` say what
is drawn — counts, labels, directions read off the image, not the source
alt — and print no answer of an item beside it. Recount every number an alt
or `longdesc` states, and re-read every "each", "all", "only", and "gone"
against a zoom.

Read every hint with the item's key covered, against the allowed/forbidden
table in playbook "Hints": if the hint alone decides the item — an
operation on its numbers, a remark about this number's digits, the shape of
the result, the observation a judgment turns on — it is a defect. So is a
hint that points at a table or equation that is not on the page or does not
hold what the learner needs, and a hint so general it helps nobody where a
real pointer exists.
For a `textin` with `answerForm="formula"` or `"equation"`, read the key
against the CNXML character by character (a capital I for a small l, a
digit 1 for an l, a charge's sign), count an equation's atoms and charge
yourself, and grade the stem's own formula or equation and the plausible
wrong answers (the unbalanced equation, the anhydrous salt, the ion without
its charge) through `gradeText`. For every other `textin`, grade the rivals a learner would type: the product for a
quotient, the degree-marked symbol, the wrong-case symbol, each
singular/plural and meter/metre crossing of a multi-word unit. On a page
that teaches a rule, apply the rule to every reason its worked examples
state. `kind` is right for the
picture. Caption verbatim with its credit.

## 5. Leaks, hints, footer

- Nothing directly above a `textin` prints its key; no hint states its
  item's key or the fact that decides it; no stem or alt prints another
  item's key.
- Every count and claim in the footer's `Changes:` clause against a tally
  you take yourself — its REASONS too ("the source alt omits…" is a claim
  about the source alt: open it). It prints no item's key: check each added
  item it names against that item's answer (a quoted sentence that holds
  the answer is a key printed), and each corrected value it mentions.
- A Source note beside an unanswered item: could a learner work the key
  out from it (the source's value, "truncated rather than rounded")?
- A phrase in the stems that appears only on items with one kind of key
  ("with its sign" on the negative answers alone) is a leak by contrast:
  read the stems of like items side by side.
- A source key with more figures than the page's own rules give, or a
  worked line that rounds an exact number: compare with the module's
  sibling keys before calling it a defect or a convention.
- A display row longer than about 60 rendered characters is cut off on the
  page: report it.
- `npm run verify-section -- <page>` prints `verified`.

## 6. Report

`$SP/check-N.M.md`: a numbered list of DEFECTS, each with the line, the
evidence (the CNXML element id or the image), and the exact fix; then
CONCERNS (judgment calls); then **LESSONS — anything the playbook, the
brief, the lint, or the grader should have caught or said and did not**.
Final message, twelve lines at most: counts of defects and concerns, the
three most serious in one line each, and the lessons.
