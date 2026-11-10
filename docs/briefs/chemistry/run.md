# Running a Chemistry chapter — the parent's recipe

This is the orchestrator's checklist for "author chapter N of Chemistry".
It is the one document the parent reads; the agents read the briefs beside
it. Rules live in the playbooks (`docs/authoring-playbook.md`,
`docs/subjects/chemistry.md`, and the parts of
`docs/subjects/life-sciences.md` that file inherits); this file says who
reads what, in what order, and restates no rule. The author and checker
briefs repeat the hint and leak rules on purpose, so a change to one of
those rules is made in the playbook AND in both briefs.

The kit descends from the Anatomy and Physiology kit
(`docs/briefs/anatomy-physiology/`), with that book's content rules swapped
for this one's: only the source's keyed exercises are graded and the
unkeyed ones are omitted; worked examples and their Check Your Learning
items; numeric keys graded to their significant figures; `## Key
equations`. Two readings are new here, and both came out of the chapter 1
pilot (`docs/history/chemistry.md`): the cross-page consistency reading,
every chapter, and the rendered-page reading, when a chapter renders a
shape no earlier chapter did.

## 0. Shape, and why

**`docs/briefs/anatomy-physiology/run.md` §0 binds here unchanged** — read
it once: which model runs which agent is fixed in `AGENTS.md`; the parent's
context stays small (notes to `$SP/PARENT-NOTES.md`, long output to a file
and its tail read, ten-line agent reports); prompts are files; agents name
their helper files by unit; a rolling window of ten to twelve live agents;
a killed agent is resumed by `SendMessage` to its raw id, and a NEW session
cannot resume the old session's ids. Five things the pilot added:

- **The parent's notes live in `$SP/parent-only/PARENT-NOTES.md`**, with
  its list of suspected claims, and every reader's brief forbids the
  directory. The pilot's claim-pass reader grepped the scratchpad for a
  phrase, hit the parent's notes, and read the parent's five leads; it
  said so, and its agreement on four of them was no longer blind.
- **A ruling is checked against the house lints before it is sent.** Two
  pilot rulings — "`\dfrac` for inline fractions", "numbers grouped as the
  source prints them" — contradicted lint errors that already existed
  (`\dfrac` is banned; a four-digit number in math is grouped) and cost a
  fixer round-trip each. Grep `tools/lint/` for the token, or lint a
  three-line scratch file that follows the ruling.
- **A rule promoted mid-run is swept across every page on disk before
  close-out.** The hint rule was written from 1.5's hints, and 1.5 still
  carried them, word for word, when the chapter was "done".
- **Every edit to an item re-hashes it — a hint-only edit included.**
  Before any round of edits that follows the blind solve, take
  `node tools/verify/ledger-carry.mjs snapshot content > $SP/ledger-before.json`;
  after it, `ledger-carry.mjs plan` carries what the solver's answer still
  covers and lists what must be re-solved. A round run without the
  snapshot is paid for with a remap script or a second solve.
- **Fixers are told which edits change a hash honestly**: "list every item
  you touched, hint-only ones too". The pilot's brief said a hint-only edit
  kept its hash, and one fixer filed 9 results for 46 re-hashed items.

## 1. Before the wave

`SP` is this session's scratchpad. Never a git command from an agent — say
"not even a read-only one" in every prompt; the parent runs them.

1. **Baseline.** `npm test > $SP/test-baseline.log 2>&1; tail -3 …` on the
   tree as it stands. Note HEAD and the last erratum number in
   PARENT-NOTES (`grep -n '^### [0-9]' docs/openstax-errata.md | sort -t' ' -k2 -n | tail -1`;
   the file is gitignored and never shows in `git status`).
2. **Media.** `npm run source:media -- --book chemistry --chapter N
   --dry-run`, then without `--dry-run`. Every upstream image is a JPEG, so
   the manifest's `kind` reads `photo` for all of them and the author sets
   it from the picture. The manifest records the source's `scaled-down`
   class; nothing is written on the page for it.
3. **PDF pages.** Find the chapter's PDF index range with `pdftotext`
   (printed folio = index − 14 held for chapter 1; re-check), then
   `pdftoppm -f A -l B -r 110 -png sources/chemistry-2e_-_WEB.pdf $SP/pdf/chNN/p`.
   The chapter's end matter is pooled after its last section (Key Terms,
   Key Equations, Summary, Exercises numbered through the chapter); the
   answer key is at the back of the book (chapter 1: indexes 1135–1137,
   rendered as `key-NNNN.png`). **Every module was corrected upstream after
   the PDF was made**: where they differ, the CNXML is the text.
4. **Extraction** (`tools/source/chemistry-prep.py`):
   `inventory N > $SP/chN-inventory.txt` (per module: objectives, keyed and
   unkeyed exercises, Check Your Learning, figures, tables, feature boxes)
   and, per module, `keys <moduleId> > $SP/keys-N.M.txt`. Then
   `node tools/source/chemistry-shapes.mjs N > $SP/chN-shapes.txt` (add
   `--list` for every keyed unit): each section's keyed answers by shape —
   number, formula, equation, words, sentence, drawing — with the
   component the playbook's table gives it, and a FLAG on every keyed
   formula the grader cannot read and every keyed equation that does not
   balance. A flag is a source defect or a shape the forms do not take;
   the parent rules on each in the run facts before the wave (chapter 2
   has two: 2.7's "AIF₃·3H₂O" with a capital I for the l, and a
   simulation answer that offers two symbols joined by "or"). After the
   flags the tool prints NOTES — the units whose structure the page must
   shape for the source gates: a part that is only an image, an answer
   that is only an image, a part the solution leaves unkeyed, a lettered
   answer under a stem whose parts are in another exercise. Each note is
   copied into the run facts with what the author does about it. The printed
   exercise number is the module's own number plus the count of exercises
   in the modules before it; put the offsets in the run facts.
5. **Landing page** `content/physical-sciences/chemistry/NN-<slug>/_index.md`
   from the intro module, in final form — a Clerk drafts it from chapter
   1's landing as the exemplar; the parent views the splash image at its
   largest vendored width and writes the alt itself. Then
   `npm run kc -- weights content/physical-sciences/chemistry --write`:
   the appendices folder always takes the book's last weight, so a new
   chapter moves it.
6. **Run facts** — copy `run-facts-template.md` to `$SP/run-facts.md`. A
   Clerk fills the facts from the inventory and the raw CNXML (every count
   an element count); the parent writes the decisions, each naming the
   playbook rule it applies. A shape the playbook already fixes is not
   re-decided. Decisions the parent should expect to make: any keyed-answer
   shape the playbook's "Exercises" table lacks; a key whose word is not
   one of the stem's own set (2.6 asks "ionic or covalent" and answers
   "molecular"); a simulation exercise; a datum a stem assumes. **Every
   keyed-answer shape that is new to the book is probed through the source
   gates before the wave** (step 6a). The facts
   also list **every appendix the chapter's modules link**
   (`grep -o 'document="m688[5-7][0-9]"'` over the modules; `m68859` is
   Appendix A … `m68871` Appendix M) with the page's site path, since an
   appendix reference is a link (playbook, page skeleton rule 9).
6a. **Gate probe.** The source gates were proven on the shapes of the
   chapters already authored, and no others: before chapter 2 they could
   not read a part that is only an image, a nuclide symbol, or a formula
   its answer labels in words, and each would have failed a sound page
   in the middle of the wave. For every shape in `$SP/chN-shapes.txt`
   that no earlier chapter carried, build ONE item by hand as the
   playbook's table shapes it and judge it against the real module —
   `judgeKeyedUnit(item, keyedUnits(xml))` from
   `tools/verify/verify-source-keys.mjs` and `tools/lib/keyed-units.mjs`,
   in a ten-line script under `$SP/parent-only/` — with the right key
   (`confirmed`, or `prose-key` for words the answer does not print) and
   a wrong one (`key-differs`). `null` means the gate does not see the
   item as its exercise: fix the gate, with a test, before the wave, not
   the page after it. Grade the same key and its natural near-misses
   through the grader (`gradeText`, `checkAnswer`), and write what the
   probe showed into the run facts. The probe is the only early reading
   the gates give: `verify-section` does not run them, so an author never
   sees a gate failure, and the parent first sees one after `build-map`.
7. Copy the briefs unchanged to `$SP/` (`author.md`, `checker.md`,
   `claim-pass.md`, `consistency.md`, `render-reader.md`). A run-specific
   correction to a brief is an edit to the repo copy, then the scratchpad
   copy — never a fork.

## 2. The wave

One Author per section, launched together, each prompt three lines: section
number, module id, output path, PDF page range, "read `$SP/author.md`
first". Chapter 1's finished pages are the exemplar: 1.6 for a numeric
page, 1.2 for a page of classification and added recall items.

- **As each author reports**, launch its checker (Author kind; prompt = the
  page path + "read `$SP/checker.md`"; never name the author's report).
  Checker defects go back to the page's author by `SendMessage`.
- **After the last author reports**, `node tools/source/openstax-source.mjs
  build-map` at once: `verify:source-coverage` and `verify:source-keys`
  skip a chapter with no map rows.
- **When the checker fixes are in**, launch together: the **claim pass**
  (one Author-kind agent for the chapter, the pages and the landing with
  their module ids, "read `$SP/claim-pass.md`", report
  `$SP/claims-chNN.md`); and the **consistency reader** (one Author-kind
  agent, "read `$SP/consistency.md`", the chapter directory, the inventory,
  and the previous chapter's pages for the forms to match, report
  `$SP/consistency.md`). Do not tell the claim pass what the parent already
  suspects; compare afterwards.
- **The rendered-page reading** runs for chapter 2 (to confirm the tests
  the pilot's reading seeded hold on a second chapter) and after that only
  for a chapter that renders a shape no earlier chapter did — the first
  Lewis structures, the first table transcribed from an image, a new
  shortcode use. `npm run build && npm run serve:public &`, then
  `node tools/build/screenshot-tiles.mjs $SP/render <route> …` (it exits
  non-zero if a page raised a KaTeX or page error); one Author-kind reader
  per one or two sections, about twenty tiles each, "read
  `$SP/render-reader.md`", with the section's PDF range. What it finds that
  a test can hold becomes a test.
- **The parent rules on the three reports in one round** — a rulings file
  (`$SP/rulings.md`: general rulings, then a list per page), each ruling
  checked against the lints (§0), sent to the page's author. A ruling that
  overturns an earlier one says so. A parent ruling that a source key
  stands is provisional until the claim pass, the consistency reader, and
  the solver have read the module: the pilot's 177.66 °F stood on the
  parent's ruling and fell to the consistency reader's comparison with
  Section 1.5's rules and the sibling keys.
- **Rewritten hints and replaced items are read once more** by a checker
  that did not write them (one Author-kind agent for the chapter; it
  proposes exact old→new text), before the solve.

All of this is before the blind solve, so the solve reads the pages that
ship. The pilot ran the two extra readings after its solve, and 131 items
re-hashed.

## 3. The blind solve

```sh
npm run solve:emit -- content/physical-sciences/chemistry/NN-<slug> --out $SP/solve/chNN --pages-out $SP/solve/chNN/pages
```

ONE fresh Blind-solver agent (`model: "fable"`), prompt = "read
`docs/briefs/chemistry/solve.md`; packets in `$SP/solve/chNN`, masked pages
in `$SP/solve/chNN/pages`; write `$SP/solve/chNN/answers.json`". Then

```sh
npm run solve:compare -- $SP/solve/chNN/answers.json content --out $SP/solve-results/chNN > $SP/solve/chNN/compare.log 2>&1
```

Every disagreement gets an `adjudicated` note. On this book the solver's
most useful disagreements are about FORM: a `sig-figs:<n>` its own count of
the data does not reach, a stem that does not say what place to enter, a
unit item that does not say "no prefix added". A stem clarified after the
solve is re-solved (one-item packets) or carried (§0). Read every answer's
`note`, not only the disagreements. `docs/briefs/anatomy-physiology/run.md`
§3 has the mechanics of remaps and one-item answers files.

**What the solve does not read, and who does.** The solver answers the
auto-graded items; a `selfcheck` has no packet, and its model answer is
held to the source by `verify:source-keys` and read by the checker alone.
The source-keys gate confirms a `fillin` when its answer segment PRINTS the
keyed number, so a part answered with several numbers ("3 protons, 3
electrons, 4 neutrons") confirms any of them under any of its items: on
such a part the checker's tick and the solver's answer are the readings
that tell the numbers apart, and the parent reads the solver's note on
each. The gate does not read a formula's atomic-number prescript either
(`²³₁₁Na` and `²³₁₂Na` are one key to it).

## 4. Close-out, in this order

Checklist-shaped steps go to Clerks, launched together once the pages are
stable: the errata drafter (from the checkers' and claim pass's confirmed
findings; it reads the chapter 1 block for format and reports every footer
that does not disclose what its erratum says), the pins, the history
narrative. The parent reads back what a Clerk wrote — the pilot's parent
ran a script that checked every quoted fragment of the errata block against
the CNXML and the page.

1. **Errata** inserted after the previous Chemistry block. A corrected KEY
   gets a `DISCLOSED_DEVIATIONS` line (`tools/verify/verify-source-keys.mjs`;
   a Check Your Learning's exercise id is `<example id>#check`) and a
   decisions entry; a corrected body claim gets a decisions entry; an alt
   or typo erratum gets neither. Entries in
   `data/openstax/reconciliation-decisions.json` are appended with a script
   that keeps the file's final byte.
2. `node tools/source/openstax-source.mjs build-map` (again, after the last
   page edit).
3. **Pins.** `tools/source/openstax-source.test.mjs` hard-codes the corpus
   total and the book's section count in "committed provenance maps all N
   local sections": raise both by the chapter's section count. The cover
   (`content/physical-sciences/chemistry/_index.md`): the chapter moves
   from "Planned contents" to `## Chapters`. `docs/source/claim-pass-ledger.md`
   gains the chapter's row.
4. `npm run source:history -- --output docs/source/openstax-upstream-history-audit.md`.
5. **Ledger.** Merge the authors' results and the solve results, prune,
   then provenance (`docs/briefs/anatomy-physiology/run.md` §4 step 5, with
   `--book physical-sciences/chemistry` and
   `content/physical-sciences/chemistry`).
6. `npm run check:external-links`; `npm run baseline:update`; `npm test >
   $SP/test-final.log 2>&1`; `npm run verify:replay`; `npm run source:verify`;
   `npm run build && npm run check:build`; then the browser suite
   (`PLAYWRIGHT_SKIP_BUILD=1 npm run test:browser`). The Chemistry browser
   tests walk every section page the build has: a display row wider than
   the column, a number in scientific notation split across lines, and a
   scaled-down figure at full width fail there and nowhere else.
7. **Lessons**: a one-line rule into the playbook section it belongs to
   (and both briefs when it is a hint or leak rule); the narrative into
   `docs/history/chemistry.md`; a lint or test where one can hold it. Every
   fraction an author or checker reported under the `\dfrac` watch goes
   into "The `\dfrac` watch list" there, with its page and line — an empty
   report is written as "none this chapter". Then the session memory file.
8. **Commit** the run's own files at a green close-out (Derek, October 24,
   2026), leaving unrelated uncommitted work and saying what was left.

## What a chapter cost (chapter 1, six sections, measured where known)

Extra readings: five rendered-page readers at 150–170k tokens each; one
consistency reader at about 210k; six fixers at 75–160k; one fix checker.
The consistency reader found more per token than any other reading of the
pilot — the rulebook contradicting itself, a key against another section's
rule, a leak visible only by contrast — and it is the one that recurs.
