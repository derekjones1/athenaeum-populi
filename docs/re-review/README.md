# Re-reviewing or editing a finished page

Every book but Anatomy and Physiology 2e is complete and has been read to
the standard below (the campaign that did it, row by row with costs and
errata, is `docs/history/re-review.md`). Any later change to a finished
page — a reported defect, a grader or engine change that re-opens keys, a
figure or hint sweep — follows this document: the standard says what the
page must satisfy afterwards, and the loop says who reads what. One request
per chapter (or chapter group); a request too big for the budget is split
by section and the next request resumes where the last stopped. Record the
run under the subject's history file, not in a tracker.

**The prompt** (a fresh session): "Re-review <Book> chapter N — follow
`docs/re-review/README.md`."

## The standard, per section

An Opus read at full scope, fixing in place:

- **Keys:** right against the source; no second defensible option (double
  key); no key made true by a reworded stem (dishonest key).
- **Accept lists:** every correct phrasing a learner would type, within the
  seven-word cap; nothing the grader already folds (plurals, "X (Y)").
- **Hints** say where to look, never the fact; never "not X" of an
  accepted form. A math hint may name the method, never the value.
- **Leaks:** no option, stem, hint, body item, figure alt, or `longdesc`
  on the page prints another item's key (directly above is the worst
  case); no item re-asks a source item in reverse. A key printed by the
  item's own objective heading is a preference only — not flagged.
- **Each thing once:** no duplicate asks on the page.
- **Footers** counted from a tally, never from memory.
- **Source fidelity:** every source exercise rendered; keys match the
  pinned CNXML or carry a disclosed deviation.
- **Figures,** image-first by inventory (arrow ends, counts, every printed
  label): alt and `longdesc` for life sciences (all three figure passes
  have run — re-read only figures an item depends on); for math, every
  figure's `ariaLabel`/alt against the rendered geometry. A math page is
  spec-first or `data-pictorial` throughout (`npm run figures:status --
  <dir>`; a hand `<svg>` with no spec is a regression — `docs/subjects/math.md`
  "Static figures").
- Ordering, rounding, and notation findings are hypotheses: check the
  siblings, the worked example, and the CNXML before editing.

Figure and alt work runs on Opus, never Sonnet. Fixers run on Opus;
checklist-shaped work (an errata tally, a footer drafter, a media sweep)
runs on Sonnet.

## The briefs

| Agent | Reads |
|---|---|
| Math fixer | `brief-math.md` (parent fills its header; extracts the module images first) |
| Math figure checker | `brief-figure-check-math.md`, after the page's fixer |
| Math knowledge-check fixer | `brief-math.md` + `brief-knowledge-check-math.md` |
| Math blind solver (fresh Fable) | `solve-math.md` |
| Life-sciences fixer | `brief-life-sciences.md` |
| Life-sciences knowledge-check fixer | `brief-life-sciences.md` + `brief-knowledge-check.md` |
| Life-sciences blind solver (fresh Fable) | `docs/briefs/anatomy-physiology/solve.md` |

Every brief forbids every git command, read-only ones included (one shared
worktree), and has its agent append its report as it goes.

## The loop, per request

0. **Prepare.** `npm test` green on the clean tree; note HEAD and the last
   erratum number in `$SP/PARENT-NOTES.md`. Math: extract each module's
   source images to `$SP/media/<mid>/` as the brief's header says (in
   parallel, NUL-separated, paths quoted; gate the fixers on the log).
   **Probe the grader** on the chapter's typical key shapes before writing
   prompts — the key against itself, the retyped prompt, the unreduced or
   half-worked line — so a gap is known before ten fixers each find it.
   Prompts are files (`$SP/prompt-<unit>.md`, generated with
   `str.replace`, never `.format` or an unquoted heredoc, which eat `$`
   and braces); the launch prompt is three lines naming the file.
1. **Snapshot** before any edit: `npm run ledger:carry --silent -- snapshot
   content > $SP/ledger-before.json` (without `--silent` npm's script header
   lands in the JSON), in the foreground, never chained after a background
   job (a late job once overwrote it with a post-edit snapshot). One
   snapshot serves every carry plan in the session. If it is lost, rebuild
   it from HEAD: `git archive HEAD content | tar -x -C $SP/headtree`, then
   snapshot inside `$SP/headtree`.
2. **Fan out.** One Opus fixer per section (life sciences: per two or three
   sections), fixing in place, ten-line reports, the report file appended
   as it goes. Launch in a rolling window of about ten to twelve live
   agents (fourteen at once hit the session limit, which any concurrent
   session shares); tick each section off a launch list as its agent
   starts and check the list is empty before closing the window (a run
   once skipped a section until the errata step). Math rows run **one
   standing grader agent** for the whole run: it alone edits
   `assets/js/lib/math/check-answer.mjs`, takes the parent's probes and
   every fixer's relayed gap, and the parent broadcasts each closure to
   the live fixers (who then strip the pins and conversions the gap had
   forced). Math rows then launch an Opus figure checker per 15–25
   figures as the pages' fixers finish (checkers edit only spec and
   `aria` lines, so the parent reads item diffs meanwhile); a fixer
   resumed after its checker is told which lines the checker touched.
   After a session limit (429): check what each killed agent left on disk,
   do the parent's own work until the reset, then resume each by
   `SendMessage` to its raw id ("resume; re-read your regions before
   editing"); respawn only on "No transcript found". A new session cannot
   resume the old session's ids: relaunch with "a prior run died; treat the
   page as it stands", pointing at PARENT-NOTES and the appended reports.
   A leak whose fix lies in another fixer's pages is relayed by the parent.
3. **Parent read.** Open every key, claim, and figure change against the
   CNXML or the image before accepting it; reverse what does not hold.
   Read every changed `question=` line and replaced option in the diff —
   the gates do not read prose, and fixers have shipped garbled stems and
   stems that print a neighbour's key above or below — and give the
   parent's own rewrites the same read. A hint that points by position
   ("the second figure") is not in its item's hash: after a reorder or a
   prose or figure edit, re-read the page's positional hints. Verify a
   relayed finding ("the label is wrong") against the image before passing
   it on; some are wrong.
4. **Errata.** One Opus errata compiler-verifier per run: it reads every
   fixer and checker report, drafts each confirmed source defect in the
   format of the latest entries, and verifies each against the CNXML and
   the image before the parent numbers and inserts the block before the
   "Reviewed and *not* errata" heading of `docs/openstax-errata.md` (never
   at the end of the file). Grep the drafts for odd `$` counts first — a
   heredoc has eaten `$4x` before. A claim correction also gets a footer
   sentence and, where the tool lists it, a `DISCLOSED_DEVIATIONS` entry.
5. **Ledger.** `npm run ledger:carry -- plan $SP/ledger-before.json content
   --out $SP/carry`, then `npm run ledger:merge -- $SP/carry/results`.
   Blind-solve only the resolve list's graded items in a fresh Fable
   subagent on masked pages (`npm run solve:emit -- <chapter> --out
   $SP/solve --pages-out $SP/solve/pages --only $SP/solve-hashes.json`, the
   hashes pulled from `resolve-list.json`; the solver reads `solve-math.md`
   or the life-sciences `solve.md`), then `npm run solve:compare`. `solve:emit`
   emits no `graphplot`: the parent re-derives those and merges a results
   file by hand. A page edited after its emit re-hashes its items: remap
   the solver's answer to the new hash with a parent note, or, for a
   form-only edit, write a one-item answers file. Adjacent answers shifted
   by one (a hash slip) are realigned from the solver's derivation notes,
   not re-solved. A compare that hits one unresolved disagreement writes
   nothing: adjudicate every disagreement and flag against the source — a
   flag on an item with a `DISCLOSED_DEVIATIONS` entry or a "Reviewed and
   *not* errata" ruling re-raises a recorded decision — and re-run. Read
   every answer's `note`, not only the disagreements: solvers report
   source defects and leaks outside their own item. Life sciences: after
   merging, `npm run ledger:provenance -- <book dir> --out $SP/prov`, merge
   it, read its `low-confidence.json`. **Math rows skip `ledger:provenance`**
   (its sentence matcher cannot read MathML exercises and labels them
   "author-built"); instead carry each re-solved item's derivation `note`
   by hand — match by normalized question, compare keys with the grader
   minus the form, check `ledger:carry` has not already carried it, and
   drop a note that is stale. Merge, then prune
   (`node tools/verify/answer-ledger.mjs prune content`). Self-checks on
   the resolve list are re-read by the parent.
6. **Gates.** `npm run verify-section -- <page>` for each page, then
   `npm test`. An `answerForm` change can break a browser spec: grep
   `tests/*.spec.mjs` for the page (`npm test` runs no Playwright). A
   re-review lowers floors on purpose — a replaced duplicate
   (`--min-exercises`), a mirror-rule conversion (`--min-replayed`,
   `--min-confirmed`), a new deviation (`--min-confirmed`): first confirm
   `npm test` is green at HEAD, trace each drop to its item (replay drops:
   `node tools/verify/verify-replay.mjs --file <page>` on a headtree and on
   the tree) in PARENT-NOTES, run `npm run baseline:update --
   --allow-decrease`, and name the drops in the commit. If the permission
   layer refuses the flag, Derek runs it.
7. **Close.** Record the run (pages, fixes by class, errata numbers,
   commit, cost, what the next run should know) in `docs/history/<subject>.md`;
   commit when asked ("Re-review <Book> chapter N to the A&P standard").
   A new defect class becomes a lint, test, or playbook rule; a new grader
   behaviour goes in the `docs/subjects/math.md` token table, a new item
   ruling in its "Rulings on item shapes".

## Budget (Opus tokens unless noted, measured on the campaign)

| Agent | Per unit |
|---|---|
| Math fixer | 130–300k a section (Precalculus 175–414k); about 25 fixes a section |
| Life-sciences fixer | 60–80k a section |
| Math figure checker | 110–230k per 15–25 figures |
| Standing grader agent | 150–600k a run |
| Errata compiler-verifier | 95–180k a run |
| Knowledge-check fixer | 120–290k per chapter block; second checker 140–180k |
| Blind solve (Fable) | 1–1.7k an item; 50–150k a batch of rows |
| A two-chapter math row, all in | 2–6M |
