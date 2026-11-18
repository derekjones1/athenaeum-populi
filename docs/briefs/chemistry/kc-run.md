# Running a Chemistry Knowledge Check — the parent's recipe

The orchestrator's checklist for "author the Knowledge Check for chapters
X–Y of Chemistry". Rules live in `docs/knowledge-check-playbook-chemistry.md`
(placement, "Content rules", "Source and answer audit", Verify) and in
`docs/subjects/chemistry.md`; this file says who reads what and in what
order, and restates no rule. It descends from
`docs/briefs/anatomy-physiology/kc-run.md`, whose §0 — what nineteen
life-sciences check runs measured — binds here for every WRITTEN item
(recall items and selfchecks): read it once. `docs/briefs/chemistry/run.md`
§0 binds too (the parent's notes in `$SP/parent-only/`, a ruling checked
against the lints and the errata log before it is sent, the ledger snapshot
before any edit that follows the solve, no git from an agent).

## 0. What is different on this book

- **Two kinds of item, two kinds of reading.** A worked-example item is
  read against its example — the question, the Solution's printed value,
  the arithmetic run again — and a written item against the module's
  sentence and the section pages, as on a life-sciences check. A checker
  does both; the sweep reads the written items page-side and the
  worked-example items for the chain leak.
- **The parent rules on the examples before the wave.** `npm run kc --
  examples` lists every worked example of the block. The run facts say, per
  section, which examples are NOT usable and why (playbook, "A usable
  example"), so three authors do not each rediscover that 3.1's first two
  Solutions end in an image or that 3.3's examples chain.
- **A gate holds the item source.** `npm run kc -- sources <page>` refuses a
  fill-in, a formula, or an equation that is not a worked example's
  question keyed with what its Solution prints. Where the answer depends
  on an atomic mass, that Solution is the SECTION PAGE's, recomputed from
  this book's periodic table: a key a unit or two from the source's print
  (`data-differs`) is confirmed only when the section page's body prints
  it. Authors run it on their scratch page; the parent on the trial
  assembly and the landed page.
- **The solve is blind only if the solver computes first.** The masked
  section pages print each worked example solved. `kc-prompts/solver.md`
  has the solver work every fill-in from the stem and Appendix A before it
  opens a page.
- **A defect found in a worked example is a defect of a section page.**
  The check does not key around it: the parent rules, the section page is
  corrected under `docs/re-review/README.md`, and the check uses another
  example.

## 1. Before the wave

`SP` is this session's scratchpad.

1. **Baseline.** `npm test > $SP/test-baseline.log 2>&1` on the tree as it
   stands; note HEAD and the last erratum number in
   `$SP/parent-only/PARENT-NOTES.md`.
2. **Scope.** The block's chapters from the playbook's table; count the
   authored sections per chapter from `content/` (items = two to three per
   section).
3. **Example inventory.** `npm run kc -- examples
   content/physical-sciences/chemistry X-Y > $SP/kc/examples.txt`.
4. **Run facts**, `$SP/kc/run-facts.md`, written by the parent: per section
   its module id, objectives, and worked examples; the examples ruled
   unusable, each with its reason; the block's rows of
   `data/verification/source-print-differences.json` (each a section key
   that stands a unit or two from the source's print), and each usable
   example whose section page recomputed its numbers from the table, since
   a check item re-asking it keys what the section page prints; the errata that touch the
   block's modules (`grep -n 'm<id>' docs/openstax-errata.md`), with any
   decision a check item must follow; every Source note on the block's
   section pages (`grep -n '\*Source note' <chapter dirs>`), since an
   example a page corrected is not used (a note that the examples were
   recomputed from the table is not a correction); **every usable example's
   substance and data grepped in its section's `## Practice` block**, since
   the source's own exercises sometimes ask a worked example again (block
   1: 2.3's iodine anion, 2.4's glucose) and such an example is not used;
   and every example that needs a conversion factor or constant its stem
   does not print.
5. **Scratch layout**, one directory per chapter:
   `$SP/kc/chNN/content/physical-sciences/chemistry/knowledge-check-XX-YY.md`
   — the mirrored path gives `verify-section` the book's quota and
   duplicate-stem profile and `kc sources` the book's modules. Run both
   from the repository root.
6. **Head and foot**, once: `$SP/kc/head.md` (frontmatter with
   `source_chapters`, and the callout) and `$SP/kc/foot.md` (the footer),
   in the playbook's wording ("Content rules", first bullet; "The page").
7. **Gate probe, when the block carries a shape no earlier check did** (a
   first equation, a first nuclide, a first figure-bound item): one
   hand-built item of the shape on a scratch page through `verify-section`,
   `kc sources`, `kc leaks`, `solve:emit`, and `verify-replay`, before any
   author starts. A gate that cannot read the shape is taught it, with a
   test.

## 2. The wave

The prompt files live in `kc-prompts/` beside this file (its README names
the placeholders): copy them to `$SP/kc/prompt-*.md` and substitute with
`str.replace`.

- **Authors:** one Author-kind agent per chapter, launched together. Each
  writes its `## Chapter N: Title` block on its scratch page, plus
  `$SP/kc/chNN/ledger.md` (the source audit) and
  `$SP/kc/chNN/provenance.json` (`{"<item stem, verbatim>": "KC <block>
  <N.M> § …, m<module>"}`).
- **Checkers:** one Author-kind agent per chapter, launched as its author
  reports; report only, to `$SP/kc/check-chNN.md`. Never name the author's
  report in the prompt.
- **Parent read:** each chapter block as its checker reports. Fix requests
  go back to the chapter's author by `SendMessage`; the parent applies
  one-line fixes itself and reads every changed stem and option against
  every key on the block.
- **Sweep:** one Author-kind agent per two or three chapters, on the
  finished chapter blocks: every written item beside its section page and
  the block's other pages, every worked-example item for the chain leak
  and for a page correction.
- **Replacements** keep the item's kind of source (a worked-example item is
  replaced by another example of the section where one is usable), and
  every replacement and rewrite goes to one fresh second checker before
  the solve.
- **Trial-assemble in the scratchpad** once the blocks are checker-clean
  and before the second checker: `kc assemble` to a mirrored scratch path,
  then `verify-section`, `kc sources`, `kc leaks`, and
  `node tools/verify/verify-replay.mjs <the scratch content dir>`.

All of this is before the blind solve.

## 3. Assemble and solve

1. `npm run kc -- assemble
   content/physical-sciences/chemistry/knowledge-check-XX-YY.md --head
   $SP/kc/head.md --foot $SP/kc/foot.md $SP/kc/ch*/content/…/knowledge-check-XX-YY.md`,
   then `npm run kc -- weights content/physical-sciences/chemistry --write`
   (the appendices move with it).
2. `npm run verify-section -- <the page>`, `npm run kc -- sources <the
   page>`, `npm run kc -- leaks <the page>` until clean; every leak
   candidate is the parent's read.
3. Blind solve: `npm run solve:emit -- <the check page> --out $SP/kc/solve`,
   plus `npm run solve:emit -- <chapter dir> --out $SP/kc/discard
   --pages-out $SP/kc/solve/pages` for each chapter of the block. ONE
   fresh Blind-solver agent with `kc-prompts/solver.md`.
   `npm run solve:compare -- $SP/kc/solve/answers.json content --out
   $SP/kc/solve-results`; adjudicate every disagreement against the
   module, read every `≈` row against the table, and read every `note` —
   above all a note that says the section page's printed value differs
   from the solver's.

## 4. Close-out, in this order

1. **Ledger**: `npm run kc -- notes <the page> $SP/kc/ch*/provenance.json
   --out $SP/kc/notes`; merge it and the solve results; `npm run
   ledger:provenance -- content/physical-sciences/chemistry --out
   $SP/kc/prov` and merge that; `node tools/verify/answer-ledger.mjs prune
   content`.
2. **Errata** and claim findings as in `run.md` §4.
3. `npm run baseline:update`, `npm test`, `npm run verify:replay`,
   `npm run build && npm run check:build` (report the page's size), the
   check's route in `tests/accessibility.spec.mjs`, then the browser suite
   and the browser pass of the playbook's Verify step 7.
4. **Records**: the landed check in `docs/subjects/chemistry.md`
   "Knowledge checks"; the narrative in `docs/history/chemistry.md`
   ("Knowledge Check N"); any new rule in the playbook edition, a measured
   lesson in §5 below, a lint or test where one can hold it; the session
   memory.
5. **Commit** the run's own files at a green close-out, the check and the
   weight changes together.

## 5. What the runs measured

**Block 1, chapters 1–3 (November 11, 2026;
`docs/history/chemistry.md`, "Knowledge Check 1").** Three authors wrote 50
items; 45 landed (11 fill-ins, 11 text-ins, 18 multiple choices, 5
selfchecks; 17 of them worked-example items), six sections at two items.
The three chapter checkers answered every item key-covered with no
disagreement and found 2 hard (both the twins below, which the parent's
read also found) and 17 soft; the sweep found 6 hard and 13 soft, five of
the six accepted; the second checker failed 5 of 14 replacements.

- **The keys were never the problem; the page was.** No reader disagreed
  with a key or a Solution. Every hard finding was a section page already
  printing a written item's fact: an objective heading (2.4, 3.1), a
  Practice self-check STEM (1.3, 2.2), a page rubric (2.1), a hint (2.7).
  Authors grepped Practice stems and options and missed the rest, as the
  life-sciences runs found; on this book the pages are denser still, since
  every objective is filled to the floor with recalls.
- **The source repeats its worked examples in its exercises.** 2.3's iodine
  anion and 2.4's glucose are each asked again by a keyed exercise, same
  substance and same answer. The run facts missed both; the parent's read
  and the chapter 2 checker found them. Before the wave, the parent greps
  each usable example's substance and data in the section's Practice block
  and rules the echoes out in the run facts.
- **Replacements repeat the tells, here too**: 5 of 14 failed the second
  checker — two distractors from one module clause (twice), a rubric clause
  a sibling page's hint prints, option prefixes that answer the stem
  (protium, deuterium, tritium for hydrogen-2). Three were dropped, and a
  drop was the right fix: **a thin module's section stands at two items
  rather than take a third that leaks.**
- **Two distractors from one module clause leave the key as the odd one
  out** (Democritus and Leucippus; potassium and sodium; density and
  color). Each option comes from a different clause.
- **An item that needs a table the check page lacks is not asked**: 1.6's
  fuel-economy example needs the section's conversion factors. Found by
  the chapter 1 checker; now a test of "A usable example".
- **A corrected example is judged by the part the item asks.** The sweep
  read "the page corrected its working" at the level of the whole example
  and flagged 1.6's body-temperature item, whose kelvin line the page
  rewrote and whose Fahrenheit part is untouched. The playbook now says
  which.
- **A gate limit**: `kc sources` refuses a count the Solution writes as
  "the number of electrons is 54" when an earlier sentence prints "53
  electrons" (the judge reads a number before its name). It errs toward
  refusing; the author keyed another count. Teach the judge the reversed
  order when a block needs it.
- **Costs**: three authors about 240–300 thousand tokens each over three
  rounds of fixes, three checkers 140–170, the sweep 195 (22 minutes — the
  slowest single agent), the second checker 150.

**Block 3, chapters 6–8 (November 17, 2026;
`docs/history/chemistry.md`, "Knowledge Check 3").** Three authors wrote 42
items and 39 landed (2 fill-ins, 2 configurations, 1 ordering, 1 set of
quantum numbers, 16 plain text-ins, 9 multiple choices, 8 selfchecks; 10 of
them worked-example items); six sections stand at two. The checkers
disagreed with no key and found 6 hard; the sweep 0 hard; the second
checker failed 1 of 8; the solver agreed on 26 and flagged 5 forms.

- **The gate probe (§1 step 7) is not optional on a block of new shapes.**
  On hand-built items `kc sources` CONFIRMED wrong keys for three of the
  block's shapes and refused a right one. Probe a wrong key for every
  shape, not only the right one — and probe one LETTERED example, whose
  parts have no lead-in of their own: both parser limits of this run were
  there, and the probe's unlettered items could not show them.
- **A chapter of drawings is a chapter of written items.** 13 of 38
  examples were usable; seven sections of fifteen carry none. The run
  facts' proposed rulings, with each echo's file and line, are Author-kind
  work the parent rules on in one pass (one agent, about nine minutes).
- **An echo is usually on another section's page**, as block 2 found: five
  of this block's seven echo rulings were.
- **An author bends a stem to pass a gate.** The 6.3 author joined the
  question's closing sentence with ", and note" because the parser read
  the source's full stop as the start of part (c). A stem changed to
  satisfy a tool is a tool defect: the brief's "report it" covers it, and
  the parent asks for the source's punctuation back.
- **A term three readers type is a term a learner types.** "Nodal plane"
  was raised by the author, the checker, and the solver before it was
  accepted; it is printed by another section of the block. An accept
  member a sibling section of the same block prints for the same thing is
  allowed on a check.
- **Every agent command runs under a wall-clock limit.** A test run with a
  synchronous endless loop held the parent for three hours.
  `--test-timeout` does not stop it; `perl -e 'alarm 120; exec @ARGV' …`
  does. Say so in every launch note, and when an agent "waits on its own
  background work" for more than ten minutes, look at `ps`.
- **Costs**: run-facts drafter 274 thousand tokens, probe and gate fixes
  about 310, three authors 275–335 each over two or three rounds, three
  checkers 180–200, the sweep 213, the second checker 156, the solver 92;
  about 25 minutes of agent wall time to the solve once the gates read the
  block's shapes.

**Block 2, chapters 4–5 (November 15, 2026;
`docs/history/chemistry.md`, "Knowledge Check 2").** Two authors wrote 22
items and 22 landed (9 fill-ins, 5 equation text-ins, 1 formula text-in, 3
recall text-ins, 4 multiple choices, no selfcheck; 15 of them
worked-example items); 4.3 and 5.2 stand at two. Both checkers answered
every item key-covered with no disagreement, 0 hard and 6 soft; the sweep
0 hard and 5 soft; nothing was replaced; the solver agreed on 21 and
flagged one form (Δ beside "delta").

- **Ruling the examples before the wave is what kept the block clean.**
  The run facts ruled 11 of 31 examples out — six for a constant no stem
  prints (the specific heat of water, Avogadro's number), which the
  inventory tool cannot see — and gave each usable example's value
  computed by the one method. No author keyed an example a reader
  rejected. The authors still found three echoes the parent's Practice
  grep missed, because the echo was in ANOTHER section's page (4.3's
  Mg(OH)₂ equation is a 4.1 Practice key; 4.5's gravimetric stem prints a
  formula of a 4.2 key): grep each usable example's equation and formulas
  across the chapter's pages, not only its own section's Practice block.
- **A calculation section can end with no calculation item.** 5.2
  Calorimetry is written items only, because "no table, no item" covers
  the section's own specific-heat table too. The playbook now says so.
- **An `accept` member that is a symbol is typed on a real keyboard
  before it is trusted.** `accept="Δ"` was right and still marked a Mac's
  Option-J character (U+2206, the increment sign) as an empty answer; the
  second checker typed it. The text grader now reads U+2206 as Δ
  (`check-text.mjs`, with a test).
- **`kc leaks` reads a LaTeX command as a word**: the key "delta" matched
  `\Delta H` in two 5.3 stems. Shared notation, read and accepted.
- **A browser test of a check names each status outright.**
  `tools/build/browser-fixtures.test.mjs` reads the spec as text: a
  `.not.toBe('correct')` is read as expecting correct, and a `\u2206`
  escape is typed as six characters. Write `.toBe('incorrect')` and the
  literal character.
- **Costs**: two authors about 240 and 260 thousand tokens, two checkers
  about 150 each, the sweep 175, the second checker 80, the solver 82;
  about 25 minutes of agent wall time to the solve.
