# Re-review brief — life sciences (Biology 2e, Microbiology)

The full-scope fixer brief of the September 22, 2026 sweep, which set the
standard of Anatomy and Physiology chapters 1–2; updated for later rules.
The parent fills `SP` (its scratchpad), `<unit>`, and the page list.

You are an Opus reviewer AND fixer: find every defect on your pages and fix
it. Keys matched the source everywhere the sweep looked; hints that hand
over the answer were two-thirds of what it found.

## Working rules

1. **No git commands at all**, not even read-only. The tree may carry
   uncommitted work; undo your own edit by hand.
2. Other agents share this worktree. Edit ONLY your pages, with the Edit
   tool; re-read a region right before editing it and after your last edit.
3. Do NOT edit `data/verification/answer-ledger.json`, anything under
   `data/openstax/`, `docs/openstax-errata.md`, `package.json` pins, or
   baselines. Do NOT run `ledger:*`, `baseline:update`, `source:fetch`,
   `npm run build`, `check:build`, or Playwright. Do not spawn sub-agents.
4. `verify:ledger` fails on every edited item (it re-hashes) — expected;
   the parent re-solves. Check with `npm run verify-section -- <page>` and
   `npm run lint`.
5. Source authority is the raw CNXML in the pinned checkout
   (`data/openstax/source-lock.json`), never the preview tool. A convention
   finding (ordering, rounding, notation) is a hypothesis: check sibling
   pages and the corpus before editing.
6. Every reader-visible departure from the source is disclosed in the
   page's footer `Changes:` clause, in the page's existing style.

## Read (only these)

- `docs/subjects/life-sciences.md` "Exercises" — its hint rules ("Text
  recall") are the heart of this pass — and "Each thing once".
- Microbiology pages: `docs/subjects/microbiology.md` §2 "The answer-key
  policy", §3, and "Exercises" through "Footer and disclosure". Biology
  pages: `docs/subjects/biology.md` "Exercises".
- Per page: the page, and its module's raw CNXML (module id:
  `grep -n '<page path relative to content/>' data/openstax/source-map.json`;
  CNXML at `sources/openstax/<checkout>/modules/<mid>/index.cnxml`).

Grader: `node -e "import('./assets/js/lib/text/check-text.mjs').then(m=>console.log(m.checkText('<typed>','<key>',{accept:'<a|b>'})))"`
(the regular plural fold is two-way — `cell`↔`cells` — and "X (Y)" grades
when both halves do; do not list either in `accept`).

## Per page

1. Read the whole page and the module CNXML (exercises and solutions,
   glossary, summary, body).
2. Every Practice item, in order. Cover the key and answer it yourself
   first. Then check:
   - **key** vs the CNXML `<solution>`, or for an unkeyed conversion that
     ONE module sentence or artifact fixes it (two stitched sentences = a
     dishonest key). A distractor the module also makes true = double key.
   - **hint** (the top class): it says WHERE to look — a subsection,
     figure, table, or paragraph topic by position — and nothing else.
     Never the key, a root or derivative of it, the fact the correct option
     asserts, a definition that is the key, a paraphrase that eliminates
     distractors by name, "not X" of an accepted form, anything the module
     does not say, or a heading whose title is the key. Keep hints short.
   - **nearby leaks**: the stem, options, hint, rubric, or figure alt of
     the items and figures around a `textin`/MC — especially the item
     directly above — never print its key. A key printed by the item's own
     `###` objective heading or the page title is a preference only
     (September 23, 2026): do not flag or change it.
   - **accept gaps**: run the grader on natural variants (with or without
     "system/cell/group", the module's synonyms and abbreviations,
     irregular plurals, hyphen/space); accept members stay within seven
     words.
   - **duplicate asks**: a reworded re-ask of another item on the page, or
     a glossary item re-asking a source item in reverse → replace the
     author item with a distinct one from the module.
   - **stem ambiguity and dangling referents**; rubric clauses vs the model
     answer vs the source solution; hints wrong about the module.
3. The footer `Changes:` clause: counts from a tally of the page, claims
   true; never where a correction is logged or who it was reported to.
4. After your edits, re-check every textin's item above (a reorder creates
   new adjacencies), then `npm run verify-section -- <page>` and
   `npm run lint`.

## What you may and may not change

- **Keep item types.** Never convert a `textin` to multiple choice to
  escape a leak. Fix in this order: reorder within the group (textins
  first), reword the author item that prints the key, reword the leaking
  textin's own stem from the glossary definition. Convert or drop only
  when none works, and list it under "needs parent".
- Hints, author-written items, accept lists, item order within a group,
  and footers: yes.
- A SOURCE item's stem or options: never reworded. If one leaks or is
  double-keyed, reorder, or leave it and report it (draft erratum or needs
  parent). A reorder that changes two source items' relative order is
  named in the footer.
- **Every source exercise is rendered.** Restore a missing one in its
  source position (a `selfcheck` with the source solution for an unkeyed
  or open question) and name it in the footer.
- Keep each objective group at the book's floor when replacing items.
- **Figures:** the book's alts and `longdesc`s were already re-read
  image-first by inventory. Open the image for every figure a Practice item
  depends on; fix an alt or `longdesc` that leaks a nearby key or is wrong
  about that image.
- Source defects you confirm → draft errata (unnumbered) in your report,
  in the format of the latest entries in `docs/openstax-errata.md`; check
  there first so you don't re-file. Claim corrections go under needs
  parent, not into Source notes.

## Report

Write `SP/reports/<unit>.md`:
- per page: path, module id, graded items, then
  `| file:line | class | fix applied |` with the classes `hint-leak`,
  `nearby-leak`, `wrong-key`, `double-key`, `dishonest-key`, `accept-gap`,
  `duplicate-ask`, `stem-ambiguity`, `rubric`, `hint-factual`, `alt`,
  `footer`, `source-fidelity`, `other`;
- totals per class; "needs parent" (what you did not fix, and why); draft
  errata.

Reply in ten lines: pages done, fixes by class, needs-parent count, errata
drafted, every file edited, and confirmation that lint and verify-section
are clean.
