# Re-review campaign

Bring the four math books, Biology 2e, and Microbiology to the standard
Anatomy and Physiology 2e chapters 1–2 set *(September 22, 2026)*, one
chapter per request, ticked off in [tracker.md](tracker.md). The bar is
"ideal": a learner can genuinely learn the topic from the page. When every
row of a book is `[x]`, add one line under the book's subject playbook
heading: "Re-reviewed to the A&P standard, completed <date>."

**The prompt** (a fresh session, one row at a time):

> Re-review the next pending row in `docs/re-review/tracker.md` (or:
> <Book> chapter N) — follow `docs/re-review/README.md`.

A row too big for the budget is split by section: mark it `[~]` with the
last section finished in Notes, and the next request resumes there.

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
  label): alt and `longdesc` for life sciences (both passes already ran —
  re-read only figures an item depends on); for math, every figure's
  `ariaLabel`/alt against the rendered geometry.
- Ordering, rounding, and notation findings are hypotheses: check the
  siblings, the worked example, and the CNXML before editing.

Figure and alt work runs on Opus, never Sonnet.

## The loop, per request

0. **Brief.** Life sciences: `docs/re-review/brief-life-sciences.md` (the
   September 22 full-scope brief, updated). A knowledge-check row uses it
   with `docs/re-review/brief-knowledge-check.md` (the nearby-leak read,
   keys, accept lists, reverse recall; checks carry no hints; its parent
   duties add a second checker on replacements). Math: `docs/re-review/brief-math.md` does not exist yet — the
   first math row writes it from `docs/subjects/math.md`, the
   life-sciences brief's shape, and the standard above, and shows Derek
   before fanning out. That row is the pilot: record its cost in Notes and
   tune the brief before the next.
1. **Snapshot** before any edit: `npm run ledger:carry -- snapshot content
   > $SP/ledger-before.json`.
2. **Fan out:** one Opus agent per two or three sections, fixing in place,
   reporting defects by class in ten lines. Briefs forbid git state
   commands (one shared worktree).
3. **Parent read:** open every key, claim, and figure change against the
   CNXML or the image before accepting it; reverse what does not hold.
4. **Errata:** confirmed source defects go to `docs/openstax-errata.md`.
5. **Ledger:** `npm run ledger:carry -- plan $SP/ledger-before.json content
   --out $SP/carry`, then `npm run ledger:merge -- $SP/carry/results`.
   Blind-solve the resolve list in a fresh Fable subagent on masked pages
   (`npm run solve:emit -- <chapter> --out $SP/solve --pages-out
   $SP/solve/pages`, then `npm run solve:compare`), adjudicate against the
   source, merge, and prune (`node tools/verify/answer-ledger.mjs prune
   content`). Self-checks on the resolve list are re-read by the parent.
6. **Gates:** `npm run verify-section -- <page>` for each page, then
   `npm test`.
7. **Close:** tick the row (Fixed, Errata, Commit), note the cost, and
   commit the chapter ("Re-review <Book> chapter N to the A&P standard").
   A new defect class becomes a lint, test, or playbook rule.
