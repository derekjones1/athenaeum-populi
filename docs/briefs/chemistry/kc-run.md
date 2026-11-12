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
  question keyed with what its Solution prints. Authors run it on their
  scratch page; the parent on the trial assembly and the landed page.
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
   unusable, each with its reason; the chapters' bands (`docs/history/chemistry.md`
   has each chapter's `tolerance:<p>%` default); the errata that touch the
   block's modules (`grep -n 'm<id>' docs/openstax-errata.md`), with any
   decision a check item must follow; every Source note on the block's
   section pages (`grep -n '\*Source note' <chapter dirs>`), since an
   example a page corrected is not used.
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
   module, and read every `note` — above all a note that says the page's
   worked value differs from the solver's.

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

(The first run, block 1, writes this section.)
