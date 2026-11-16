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
checks" and "What is still open") and, in `docs/subjects/life-sciences.md`,
"The section page, in order", "Notation", "Media: vendored figures", "Leaks
across the page", and "Defect classes the checkers find".

## 1. Enumerate

Every `fillin`, `multiplechoice`, `textin`, `selfcheck`, `sortbins` on the
page, body and Practice, in order, with question, key, form, and hint — a
`sortbins`' key is its label→bin map, and each label is one lettered part
(playbook "Exercises" table, the sortbins row: ten or more short parts
sorted into the stem's own categories; fewer stay one `multiplechoice`
per part). Then enumerate
the module's `<exercise>`s and worked `<example>`s from the raw CNXML and
tick each off by hand: **every keyed exercise and every lettered part of it
has a component; every Check Your Learning has its item or items; no unkeyed
exercise was given a key.** A missing part is the defect this pass exists to
catch.

## 2. Answer every graded item yourself, key covered

- **A comparison or an ordering key is re-derived from the page's own
  table of values** (electronegativities, bond energies, radii), ties
  included: where two members tie, both orders must be graded right (an
  ordering's `accept`), and a yes-or-no that turns on the tie is a defect
  to report *(chapter 7)*.
- **A numeric fill-in:** solve it from the stem and the book's own
  conversion factors, running the arithmetic (`python3 -c`), BEFORE reading
  the page's key or the source's. Then compare all three. Report: a key the
  source does not print; a key written to other figures than the source's;
  a `sig-figs` count that is not the key's; a `last-digit` that the
  playbook's rule would set the other way (say which numbers in the
  calculation are measured factors); a stem that does not name the unit the
  key is in. **A key that depends on an atomic mass IS this book's table's
  value** (`appendices/a-the-periodic-table.md`, from
  `data/chemistry/elements.json`) by the one method of playbook "Numeric
  keys" ("A numeric key is what this book's own data give"): every molar
  mass from `node tools/verify/molar-mass.mjs "<formula>"`, that rounded
  sum carried unrounded, an earlier part's rounded answer not reused, only
  the final result rounded. Compute it yourself before you read the key,
  and report every key that is not that value — whether or not the source
  prints it. **Report a rounding edge with both values**: where the
  unrounded molar-mass sum, or an earlier part's rounded answer, would
  change the final digit, give the key by the method and the other value.
  A key a unit or two from the source's print is not a defect by itself
  (the gate's `data-differs`); one further away is. There is one right
  value per item: `worked:<value>` and `tolerance:<p>%` are retired, and an
  item that declares either is a defect. Grade through the real grader
  (`node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<form>"})))'`):
  your own answer, the key, the unrounded readout, the answer with its
  unit, and every number the stem prints. Your answer and the key must be
  `correct`; a number retyped from the stem must never be. A count ("how
  many significant figures") declares `whole-number`, never `decimal`: type
  the stem's own numbers with their decimal points against it.
- **A multiple choice:** the options are exactly the set the source stem
  names, in its order; the key is the source's.
- **A `selfcheck`:** the model answer is the source solution; each rubric
  clause is a run of the model answer's words (the lint holds that; read
  for what it cannot — a clause that checks nothing).
- **A filler beyond the floor is not a finding** when it is the ONE item
  of a headed body subsection no source item touches and the footer says
  so (playbook "Added items"); a second one for that subsection, or one
  for a subsection a source item already reaches, is.
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
- **The small conventions no lint holds** (playbook "The section page, in
  order", rule 9), ticked one by one: the frontmatter description ends
  "— adapted from OpenStax Chemistry 2e, Section N.M."; the first figure,
  and only it, is `eager="true"`; a numbered figure or table in running
  text is a describing phrase; a reference to another section is a
  link to its page (plain text only in a hint, or while that page is not
  written), and the footer says so.

## 4. Figures

- **Zoom before reporting a missing lone pair** (or bond, or charge) in a
  Lewis structure: open the image at full size; a pair of dots at the
  drawing's edge is easy to miss at page scale *(chapter 7)*.
Open every vendored image the page uses. The alt and any `longdesc` say what
is drawn — counts, labels, directions read off the image, not the source
alt — and print no answer of an item beside it. Recount every number an alt
or `longdesc` states, and re-read every position word ("above", "between",
"below"), every colour, and every "each", "all", "only", and "gone"
against a zoom. `kind` is right for the picture. Caption verbatim with its
credit. **An item whose source part is only an image** sits directly under
that part's `mediafigure` and says "the figure above": open the CNXML part
and the figure's `src` and confirm they are the same image — an item under
its neighbour's figure is keyed to the wrong structure, and nothing in the
stem shows it.

## 4a. Hints, text answers, taught rules

- **Read every hint with the item's key covered**, against the
  allowed/forbidden table in playbook "Hints": if the hint alone decides
  the item — an operation on its numbers, a remark about this number's
  digits, the shape of the result, the observation a judgment turns on — it
  is a defect. So is a hint that points at a table or equation that is not
  on the page or does not hold what the learner needs, and a hint so
  general it helps nobody where a real pointer exists. **For every hint
  that names a figure, open the image** and confirm the value can be read
  off it: the scale is there, it is marked where the answer falls, and its
  unit is one the learner can use. No lint reads a picture: 6.1's hint sent
  the wavelengths of red, green, and blue to a figure whose color strip
  carries no wavelength marks, and the figure's description, which says
  truthfully that it has a wavelength scale, could not show it. **A hint shared by
  several items is read against every one of them**, the module's named
  exceptions first (a metal-and-nonmetal test on a compound of polyatomic
  ions); on a two-option item a hint that says what one option was
  replaced by, or is "instead", decides it. A hint that needs another
  section's table names the table and the section in words (a hint holds no link); one
  that states the observation a two-name substance turns on ("the
  formula prints no state") decides the item, whatever the run facts say.
  **A member of a family of items whose hint differs from the others' is a
  tell** (4.1: the one net-ionic item with no spectator ion had its own
  wording); one sentence true of all is "Compare each species on the two
  sides of the complete ionic equation, and remove any that appear
  unchanged on both." A role or "if so" question standing in the open
  after a yes/no item answers it: it goes in a `followup`.
- **A filler keyed on a working word of the page's own stems or hints**
  (`group` where the source stems say "the following group") is a defect,
  and so is a name the MODULE prints for a key that the item's `accept`
  lacks ("oxygen group" for chalcogen): search the module for "also
  called", "can be called", "or", and the glossary's "(also, …)". The
  converse is a defect too: an `accept` member that is another name or
  abbreviation the module does NOT print, rather than a spelling of the
  key the grader does not fold (playbook "Exercises", "An `accept` member
  is one of two things"). A name
  the module prints as out of date ("was known as", "previously called")
  is not one (playbook "Exercises", the name row), and its absence from
  `accept` is not a finding: the lint refuses it there, and the grader
  answers a classical -ous/-ic name of the keyed compound "That is an older
  name. Give the systematic name." without marking it wrong. Any other
  wrong name gets no message (`checkText` returns a status only): say what
  the grader marks wrong, not what it tells the learner.
- **A `textin` with `answerForm="formula"` or `"equation"`:** read the key
  against the CNXML character by character (a capital I for a small l, a
  digit 1 for an l, a charge's sign, a nuclide's two numbers), count an
  equation's atoms and charge
  yourself, and grade the stem's own formula or equation and the plausible
  wrong answers (the unbalanced equation, the anhydrous salt, the ion
  without its charge, the symbol without its mass number) through
  `gradeText`, **with the item's form passed as `form`** — the option is
  `form`, not `answerForm`, and a formula graded without it is graded as
  plain text, which calls `133Cs-` right against `¹³³Cs⁺`:
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.gradeText("<typed>","<key>",{form:"formula"})))'`
  (`form:"equation"` for an equation).
- **A `textin` with `answerForm="configuration"` or `"ordering"`:** count the key's electrons (or check its members against the stem's list) yourself and grade the near-misses — the core form, the next subshell over, the reverse order, a member without its charge — through `gradeText` with the item's form, as above.
- **A `textin` with `answerForm="quantum-numbers"`:** check the key against the source's set for the orbital its closing names, and grade another allowed mₗ, the other spin (both right), and a set of the next shell or another subshell (both wrong, with their messages) through `gradeText`; read the hint and every earlier reveal for the item's l.
- **Every other `textin`:** grade the rivals a learner would type: the
  product for a quotient, the degree-marked symbol, the wrong-case symbol,
  each singular/plural and meter/metre crossing of a multi-word unit, an
  ion's name with and without the word "ion", and any name the STEM prints
  (it must not be `correct`).
- **A part answered with several numbers** ("3 protons, 3 electrons, 4
  neutrons") is carried as one item per number: tick each item's key
  against the number its stem asks for, and confirm each stem's closing
  sentence names the one thing it asks for ("Enter the number of
  neutrons.") — the source-keys gate reads that sentence to tell the
  numbers apart, and a stem that names two, or none, leaves a swapped pair
  to you alone.
- **A `selfcheck` whose answer is a drawing**: the gate confirms that the
  model answer shows the source's image; the sentences under it are the
  author's reading of the drawing — count every atom, bond, and lone pair
  they state against the image.
- **An item restated from another exercise's part** (the stem's own
  exercise says "each reaction in [another exercise]"): read the part
  against the referenced exercise in the CNXML, every number and formula.
- **On a page that teaches a rule**, apply the rule to every reason its
  worked examples state.
- **Every mass-dependent number in the body**, moved or not, follows from
  the page's printed numbers end to end: each molar mass an example prints
  is the tool's sum, and each later line follows from the line before it.
  Recompute them all yourself; the author's rework is not the check
  (playbook "Numeric keys", "The body's worked examples are recomputed
  from the table"). Check that the section's Source note on recomputed
  examples is the playbook's wording for what moved (a result, or only the
  printed molar masses), directly after the first calculation that
  changed.
- **Every worked example, mass in it or not, retraces from the numbers it
  PRINTS** — and its method, copied onto its Check Your Learning with the
  same rounding, reaches that item's key inside its allowance. Where a
  later step reuses a value the example has already rounded (2.3 printed
  1.99705x = 1.513; a learner who rounded the same way got 69.16 for a key
  of 69.15), the later step prints the value with the digits carried, the
  result unchanged, with the playbook's Source note ("A worked example
  never reuses a value it has rounded"). Run it; an example whose ratio
  is rounded to whole numbers (an empirical formula, a combustion
  analysis) is left as printed.

## 5. Leaks, hints, footer

- Nothing directly above a `textin` prints its key; no hint states its
  item's key or the fact that decides it; no stem or alt prints another
  item's key.
- Every count and claim in the footer's `Changes:` clause against a tally
  you take yourself — its REASONS too ("the source alt omits…" is a claim
  about the source alt: open it). It prints no item's key: check each added
  item it names against that item's answer (a quoted sentence that holds
  the answer is a key printed), and each corrected value it mentions.
- Read each equation item's stem against every OTHER item's key and
  against the body's displays: the source's own exercises overlap (4.1: one
  exercise's stem prints the product another asks for), and the footer
  discloses an overlap it cannot move.
- A Source note beside an unanswered item: could a learner work the key
  out from it (the source's value, "truncated rather than rounded")? It says
  THAT the source's answer differs, never what the corrected fact is
  *(chapter 7)*.
- A select-the-term multiple choice under an objective heading that names
  its key: does the heading name at least one other option too? (No lint
  reads this; the heading-word lint is for `textin`.) A stem or model
  answer that names a part by its letter — "(a)", "(b)" — on a page that
  prints no letters is a defect (playbook "Stems").
- A selfcheck rubric: is every clause a whole statement in the model
  answer's words that checks something, and can the page's own model
  answer meet every clause? (Chapter 2: a "Sample answer" that failed two
  of its three clauses because the rubric dropped "if it was not".)
- A phrase in the stems that appears only on items with one kind of key
  ("with its sign" on the negative answers alone) is a leak by contrast:
  read the stems of like items side by side.
- Items that stand under only some parts of one exercise leak by being
  there (2.47: ion items under the ionic compounds alone). They belong in a
  `followup` after the part's first item (playbook "Exercises"); the source
  gate catches the multiple-choice shape, and you read for any other.
- A source key with more figures than the page's own rules give, or a
  worked line that rounds an exact number: compare with the module's
  sibling keys before calling it a defect or a convention.
- A display row longer than about 60 rendered characters is cut off on the
  page: report it.
- An inline fraction that is hard to read as set — the `\dfrac` ban is on
  watch (`docs/subjects/chemistry.md` "Notation"): report the line, the
  fraction, and what a learner loses, as a CONCERN headed `\dfrac`.
- A reference to an appendix that is not a link to its page in this book,
  or links the wrong appendix: a DEFECT. So is an item, example, or
  sentence that sends the learner to something only an appendix holds —
  "using the periodic table" on a page that shows none, a table value the
  item needs and does not print — with no link to that appendix, even
  where the source links nothing (playbook, page skeleton rule 9). Answer
  each such item with only what the page and its links give you: if you
  had to go looking, the link is missing. **The periodic table is the
  exception**: it is a control on every page of the book, so an item that
  needs it and names no table is not a finding, and an added "Use the
  periodic table." is one (the lint refuses it).
- `npm run verify-section -- <page>` prints `verified`.
- `node tools/verify/verify-replay.mjs <page>` accepts no printed number:
  a stem's own number typed back must not grade correct (chapter 3: two
  items of one page failed it after `verify-section` passed).

## 6. Report

`$SP/check-N.M.md`: a numbered list of DEFECTS, each with the line, the
evidence (the CNXML element id or the image), and the exact fix; then
CONCERNS (judgment calls); then **LESSONS — anything the playbook, the
brief, the lint, or the grader should have caught or said and did not**.
Final message, twelve lines at most: counts of defects and concerns, the
three most serious in one line each, and the lessons.
