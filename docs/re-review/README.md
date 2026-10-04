# Re-review campaign

Bring every finished book to the standard Anatomy and Physiology 2e
chapters 1–2 set *(September 22, 2026)*, one chapter per request, ticked
off in [tracker.md](tracker.md). Biology 2e and Microbiology are done
(September 24, 2026; their rows are in `docs/history/`); the four math
books remain. The bar is "ideal": a learner can genuinely learn the topic
from the page. When every row of a book is `[x]`, add one line under the
book's subject playbook heading: "Re-reviewed to the A&P standard,
completed <date>."

**The prompt** (a fresh session, one row at a time):

> Re-review the next pending row in `docs/re-review/tracker.md` (or:
> <Book> chapter N) — follow `docs/re-review/README.md`.

A row too big for the budget is split by section: mark it `[~]` with the
last section finished in Notes, and the next request resumes there. "The
next N chapters" means the next N tracker rows, check rows included — say
so before starting; a row is never started unprompted.

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
  figure's `ariaLabel`/alt against the rendered geometry.
- Ordering, rounding, and notation findings are hypotheses: check the
  siblings, the worked example, and the CNXML before editing.

Figure and alt work runs on Opus, never Sonnet.

## The loop, per request

0. **Brief.** Life sciences: `docs/re-review/brief-life-sciences.md` (the
   September 22 full-scope brief, updated). A knowledge-check row uses it
   with `docs/re-review/brief-knowledge-check.md` (the nearby-leak read,
   keys, accept lists, reverse recall; checks carry no hints; its parent
   duties add a second checker on replacements); a math knowledge-check
   row uses `brief-math.md` with `docs/re-review/brief-knowledge-check-math.md`.
   Math: `docs/re-review/brief-math.md` (written and piloted on Prealgebra
   chapter 1, September 26, 2026); before launch the parent extracts each
   module's source images to `$SP/media/<mid>/` as the brief's header says,
   and fixers render figures and display math with
   `tools/figures/render-page-figures.mjs`. A math section costs about
   140–160k Opus fixer tokens — about double a life-sciences section — and
   the pilot chapter averaged 25 fixes a section. The life-sciences rows cost about
   60–80k Opus fixer tokens per section, a shared Fable solve of 50–150k
   per batch of rows, and about 5k per knowledge-check item.
1. **Snapshot** before any edit: `npm run ledger:carry --silent -- snapshot
   content > $SP/ledger-before.json` (without `--silent` npm's script header
   lands in the JSON), in the foreground and never chained
   after a background job (a late job that re-ran it overwrote the Prealgebra
   chapters 2–11 snapshot with a post-edit one). If it is lost, rebuild it
   from HEAD: `git archive HEAD content | tar -x -C $SP/headtree`, then run
   the snapshot inside `$SP/headtree`.
2. **Fan out:** one Opus agent per two or three sections, fixing in place,
   reporting defects by class in ten lines, the report appended as it goes.
   Briefs forbid every git command, read-only ones included (one shared
   worktree). Launch in a rolling window of about ten to twelve live
   agents — fourteen at once hit the session limit, which any concurrent
   session shares; tick each section off a launch list as its agent starts,
   and check the list is empty before closing the window (a three-row run
   skipped Intermediate Algebra 9.8 until the errata step). After a limit
   (429), resume each killed agent by
   `SendMessage` to its raw id once the limit resets ("resume; re-read
   your regions before editing") and never skip its pages. A leak whose
   fix lies in another fixer's pages is relayed by the parent.
3. **Parent read:** open every key, claim, and figure change against the
   CNXML or the image before accepting it; reverse what does not hold.
   Read every changed `question=` line and replaced option in the diff —
   the gates do not read prose, and fixers have shipped garbled stems and
   stems that print a neighbour's key above or below — and give the
   parent's own rewrites the same read. A hint that points by position
   ("the second figure") is not in its item's hash: after a reorder or a
   prose or figure edit, re-read the page's positional hints.
4. **Errata:** confirmed source defects go to `docs/openstax-errata.md`.
5. **Ledger:** `npm run ledger:carry -- plan $SP/ledger-before.json content
   --out $SP/carry`, then `npm run ledger:merge -- $SP/carry/results`.
   Blind-solve only the resolve list's graded items in a fresh Fable
   subagent on masked pages (`npm run solve:emit -- <chapter> --out
   $SP/solve --pages-out $SP/solve/pages --only $SP/solve-hashes.json`,
   the hashes pulled from `resolve-list.json`), then `npm run
   solve:compare`; the re-solved items' records come from the solve
   alone, so after merging it run `npm run ledger:provenance -- <book dir>
   --out $SP/prov` and merge that, which restores their provenance notes
   (read its `low-confidence.json`). **Math rows skip `ledger:provenance`:** its
   sentence matcher cannot read an exercise whose numbers are MathML, so
   it labels source exercises "author-built" (all 46 of Prealgebra
   chapter 1's low-confidence notes were wrong that way), and math records
   never carried provenance notes to restore. Carry any derivation `note`
   a re-solved item's old record held onto its new hash by hand. Adjudicate against the source; a flag on an item with a
   `DISCLOSED_DEVIATIONS` entry or a "Reviewed and *not* errata" ruling
   re-raises a recorded decision. Read every answer's `note`, not only the
   disagreements: solvers have found source defects outside their own item.
   Merge, and prune (`node tools/verify/answer-ledger.mjs prune content`).
   Self-checks on the resolve list are re-read by the parent.
6. **Gates:** `npm run verify-section -- <page>` for each page, then
   `npm test`. A re-review lowers floors on purpose — a replaced duplicate
   (`--min-exercises`), a mirror-rule conversion (`--min-replayed`,
   `--min-confirmed`), a new deviation (`--min-confirmed`): trace each
   drop to its item in PARENT-NOTES, run `npm run baseline:update --
   --allow-decrease`, and name the drops in the commit. If the permission
   layer refuses the flag, Derek runs it.
7. **Close:** tick the row (Fixed, Errata, Commit), note the cost, and
   commit the chapter ("Re-review <Book> chapter N to the A&P standard").
   A new defect class becomes a lint, test, or playbook rule.
