# Running an Anatomy and Physiology unit Knowledge Check — the parent's recipe

The orchestrator's checklist for "author the Unit N Knowledge Check of
Anatomy and Physiology". Rules live in
`docs/knowledge-check-playbook-life-sciences.md` (placement, "Content
rules", "Source and answer audit", Verify) and the life-sciences component
rules; this file says who reads what and in what order, as `run.md` does
for a chapter, and inherits its §0 context rules (PARENT-NOTES, logs to
files, ten-line reports, no git from agents, helper files named by unit).
It is distilled from the thirteen life-sciences check runs — Biology's
eight unit checks and Microbiology's five block checks
(`docs/history/biology.md`, `docs/history/microbiology.md`, "Knowledge
Check N") — and first ran on this book for Unit 1 (October 14, 2026,
`docs/history/anatomy-physiology.md` "Knowledge Check 1"): every step
below ran as written. What that run measured, on all-Opus authors:
checkers 13 findings on 72 items, sweeps 2 (both already among the
checker's), parent read 0 beyond them, second checker 2 of 5
replacements rejected — so with Opus authors the checker and the second
checker carry the yield, and a second replacement round is normal, not a
failure. Two tells the briefs did not name: a page's **objective heading
or description** printing the key with its fact is a reverse recall (the
"eleven organ systems" count), and a re-aimed cloze must blank what the
module sentence **names**, not its subject (the "mucociliary escalator"
stem also fit "ciliated epithelium" until the blank moved). The second run, Unit 2 (October 20, 2026, 43 sections,
129 items, "Knowledge Check 2" in the history), measured: checkers 12 hard
and about 45 soft across seven chapters, sweeps 4 hard, the parent read 1
(a cross-chapter twin), second checker 4 of 40 then 1 of 9 soft, blind solve
87/87 with 0 alsoDefensible, no errata; the sweep and cross-block lessons
below come from it. The third run, Unit 3 (October 25, 2026, 32 sections,
96 items, "Knowledge Check 3" in the history), measured: checkers 6 hard and
about 27 soft across six chapters, sweeps 10 hard, eight items replaced and
two rewritten in place, second checker 6 of 24 failed (all applied by the parent), blind solve 65/65 with
0 alsoDefensible, no errata, about 2 h 15 min wall. The fourth run, Unit 4
(October 27, 2026, 24 sections, 72 items, "Knowledge Check 4" in the
history), measured: checkers 0 hard and 19 soft across four chapters, sweeps
2 hard and 8 soft, seven items replaced and three rewritten in place, second
checker 1 of 10 failed (then the re-read of its replacement passed), blind
solve 48/48 with 0 alsoDefensible, two errata (2577, 2578), about 45 minutes
wall. The fifth run, Unit 5 (November 1, 2026, 36 sections, 108 items,
"Knowledge Check 5" in the history), measured: checkers 8 hard and 32 soft
across five chapters, sweeps 17 hard and 46 soft, sixteen items replaced
(25.10 twice more) and twelve rewritten in place, second checker 3 of 30
failed (two on 25.10, one on 24.3, all applied), blind solve 70/70 with 0
alsoDefensible, one erratum (2827), about 48 minutes wall.

## 0. What the runs measured

- **The parent's own read out-yields the checkers** (Microbiology block
  3: 12 vs 8; block 5: about 25 vs 16). Checkers read item by item
  against the CNXML; the parent, reading a chapter block whole, catches
  stems that print a word or root of their key, stems that name or
  exclude their own options, option sets mixing categories, etymology or
  "despite its name" giveaways, and rubric clauses that paraphrase the
  model answer (the phrase-coverage gate accepts paraphrase; the playbook
  does not). The parent read is a pass, not a spot check.
- **Replacements repeat the tells.** Three of twelve replacements in one
  run needed replacing again, and two of three parent-picked replacements
  in another were reverse recalls. Every replacement gets a second
  checker, the parent's picks included.
- **Reverse recall lives on the section pages' hints, rubrics, and
  distractors**, not only their stems — most sweep flags were a page hint
  or rubric printing the check item's key with its defining fact.
- **Names recur across a unit.** A structure, organ, or pathogen keyed in
  one chapter is printed in another chapter's stem on the same check
  (*Streptococcus pyogenes*, biofilms, *Candida* in Microbiology block 5);
  authors avoid keying the unit's headline names, and the whole-page grep
  after assembly is the gate.
- **Count the tree.** Two Microbiology block tables stated the wrong
  section count; the unit's sections are the `### N.M` headings the
  content tree implies, counted when the run starts.

- **Grep the page's frontmatter `description` and objective headings
  first** (Unit 2, October 20, 2026). The brief named both; a chapter 6
  author still grepped only the Practice block, and the sweep found the
  6.7 description printing the item's whole answer. Authors, checkers and
  sweeps grep in this order: description, objective headings, Practice
  stems, options, hints and rubrics, sortbins bins and labels, body
  self-checks.
- **Read each finished block against the other finished blocks**, not only
  within itself: Unit 2 had three cross-chapter twins (6.2 and 7.1 both
  asked the adult bone count; 8.3 and 11.6 both asked why the pelvis is
  immobile; 8.2 and 11.5 both graded the carpal tunnel), and a stem in one
  block printed the key of another (8.3 → 9.1 "weight-bearing stability").
  Checkers get the sibling blocks' paths for the same reason.
- **A replacement may change type when the section page leaves no clean
  key of that type** — 11.5's sortbins print every muscle name the module
  has, so its textin became a count multiple choice. The parent authorizes
  it in the fix message and the ledger records why; the section keeps an
  auto-graded item either way.
- **Trial-assemble in the scratchpad** (`kc assemble` to a mirrored scratch
  path, then `verify-section` and `kc leaks`) once the chapter blocks are
  checker-clean and before the second checker: it costs a minute and shows
  the whole-page leak candidates and the key-position spread while fixes
  are still cheap.
- **The sweeps earned their wave on Unit 2** where on Unit 1 they found
  nothing new: 4 hard flags on 129 items (a page sortbins bin naming the
  key's root, a page description, a Practice sortbins label plus rubric, a
  sibling section's item re-asked), all missed by the per-chapter checkers.
- **Checkers and sweeps converge; the sweeps' margin is page-side**
  (Unit 3, October 25, 2026). The hypovolemia leak was found four times, and
  17.5 and 17.10 by both the ch17 checker and sweep C, so the sweeps' marginal
  yield was the sortbins bin and objective heading/description cases (15.4
  nicotine bin, 17.4 parafollicular heading), the two tells named above.
- **A feature box sits in its host subsection for the spread rule** (Unit 3,
  October 25, 2026: 15.4, 13.3). Authors check the CNXML nesting before
  claiming "three different subsections".
- **A descriptive key's stem must not paraphrase the name** (Unit 3,
  October 25, 2026): "double simultaneous stimulation" was blanked in a stem
  printing "two stimuli … the same position on both sides", which the sweep
  reads as the key's own roots. Blank a term the sentence names instead.
- **The second checker reads the neighbours of a replacement** (Unit 3,
  October 25, 2026). It caught a stem-vs-rubric mismatch (17.10 asked a
  trigger no clause graded) and an adjacent-item giveaway (17.1's selfcheck
  printing "within seconds" above a time MC) that no first reader saw.
- **A replacement's spread is checked against the CNXML nesting of the host
  subsection, not the box's own title** (Unit 4, October 27, 2026): an 18.1
  Career Connection box read as "Other Plasma Solutes" sat inside Blood
  Plasma, the subsection the section's textin already used; the second
  checker caught it, the author and first reader did not.
- **A key reused for a second fact is a double key, not a twin** (Unit 4,
  October 27, 2026): eosinophils keyed in 18.4 and 21.5 for different facts;
  `kc leaks` reports it as the option of each printing the other's key, and
  the page keys the term once after the fix.
- **The sweeps carried the hard yield** (Unit 4, October 27, 2026): the four
  chapter checkers found 0 hard on 72 items; both hard findings (an
  18.1↔20.5 cross-block twin, a 21.7 rubric printed by the page's cloze) and
  four of the seven replacements came from the two sweeps, each reading every
  item beside its section page and the other blocks.
- **An accept member that is an ordinary word grades a guess correct** (Unit
  4, October 27, 2026): "NO" for nitric oxide in 21.5 would have marked a
  typed "no" right; drop such members.
- **A replacement built on the sentence a page item already uses, with the
  blank moved, is the same reverse recall** (Unit 5, November 1, 2026): the
  25.10 EPO item keyed "the liver" from "the kidney produces 85 percent of
  circulating EPO; the liver, the remainder", the sentence the page's Practice
  MC keys at 85 percent. The second checker caught it; the author, who had
  grepped for the key, did not. Grep the page for the SENTENCE, not only the
  key.
- **An upstream step is not a distractor for an effect** (Unit 5, November 1,
  2026): "the conversion of angiotensin I into angiotensin II by ACE" beside
  two effects of angiotensin II can be argued to "help raise and maintain"
  pressure too. Options are all effects, all steps, or all structures; and
  when a module prints only two effects, the item is not a three-option MC:
  change the sentence.
- **"Elimination by the page" is a tell the item-by-item checkers under-read**
  (Unit 5, November 1, 2026): a distractor the page assigns to something else
  (24.1 coenzyme MC: both distractors were the page's own answers to other
  items; 25.10 hypertonic MC: both distractors page-printed hypo-osmolar
  causes) or that the item above settles (26.5 methanol after the formic-acid
  item) hands over the key by exclusion. Both sweeps and the second checker
  found these; no chapter checker did.
- **A sibling section page's rubric printing the fact is a reverse recall
  too** (Unit 5, November 1, 2026): the 25.1 ketone selfcheck's clauses sat in
  the 24.3 and 24.5 pages' Practice rubrics, and the 26.3 PTH selfcheck's
  calcium clauses in the 25.8 page's rubric. The chapter checkers grep their
  own chapter's pages; the sweeps, reading across the unit, found both. Keep a
  sweep's scope at two or three chapters so it can hold the neighbours' pages.
- **Sort numeric options** (Unit 5, November 1, 2026): in 22.4 (5/40/80/64 mm
  Hg) and 22.7 (24/4/13/16) the three distractors ran in order and the key
  was the one out of place. Ascending order every time, then recount key
  slots.
- **Prefix-flip mirrors recur** (Unit 5, November 1, 2026; Unit 4's
  hypervolemia lesson): 26.3 hyponatremia (page keys hypernatremia) and 25.10
  hypertonic (page cloze on hypo-osmolarity) both shipped from the authors.
  Add "no hypo-/hyper- flip of a page item" to the author's grep list
  explicitly.
- **Numbers stated in the stem must not bracket the key** (Unit 5, November
  1, 2026): 26.1's stem printed 75 percent (infants) and 45 percent (old age),
  and "about 50-60 percent" was the only option between them; the
  mixed-format fix (single numbers against a range key) would have been a
  second tell, so the item changed sentence.
- **The sweeps out-yielded the checkers four to one on the margin** (Unit 5,
  November 1, 2026): checkers 8 hard on 108 items, sweeps 17 hard (about half
  overlapping the checkers and each other); the sweeps' own margin was page
  objective headings and hints (22.4, 22.7), sibling-page rubrics (25.1,
  26.3), page hints naming a rubric clause (25.2), and the elimination cases
  above.

## 1. Before the wave

1. Baseline `npm test` on the clean tree; note HEAD and the last erratum
   number.
2. Scope: the unit's chapters from `books.anatomy-physiology.units` in
   `data/openstax/source-map.json`; count the authored sections per
   chapter from `content/` (items = 3 × sections). Weights are derived,
   not shifted by hand: once the page exists, `npm run kc -- weights
   content/life-health-sciences/anatomy-physiology --write` gives the
   check the weight after its last chapter and moves every later chapter
   (the table in `docs/subjects/anatomy-physiology.md` "Knowledge checks"
   is what it produces).
3. Scratch layout, one directory per chapter:
   `$SP/kc/chNN/content/life-health-sciences/anatomy-physiology/knowledge-check-XX-YY.md`
   — the mirrored path is what gives `verify-section` the book's quota and
   duplicate-stem profile (playbook Verify step 4), run from the
   repository root.
4. Write the head (frontmatter with `source_chapters`, and the opening
   callout in the playbook's wording) to `$SP/kc/head.md` and the footer
   to `$SP/kc/foot.md`, once.

## 2. The wave

The prompt files below live in `kc-prompts/` beside this file (author,
checker, sweep, second checker, solver, and the Unit 5 run's two clerk briefs
as worked examples; its README names the placeholders) — copy them to
`$SP/kc/prompt-*.md` and substitute with `str.replace`, since every earlier
run's scratchpad had been cleaned away by the next (Unit 5, November 1, 2026).

**Authors:** one Opus agent per chapter (`AGENTS.md` "Which model runs
which agent": Author kind; Sonnet was the Biology/Microbiology precedent,
retired with that table), launched together. Prompt:
the chapter, its sections with module ids, the scratch path, "read
`docs/knowledge-check-playbook-life-sciences.md` 'Content rules' and
'Source and answer audit', and `docs/subjects/life-sciences.md`
'Exercises'". Each writes its `## Chapter N: Title` block with three
items per `### N.M`, plus `$SP/kc/chNN/ledger.md` (the source audit) and
`$SP/kc/chNN/provenance.json` (`{"<item stem, verbatim>": "KC <unit>
<N.M> § <subsection>, m<module>", …}`, which `npm run kc -- notes` turns
into the answer-ledger notes). Tell each author, in the prompt:

- before settling an item, grep its section page — Practice block, body
  self-checks, every hint, rubric, and distractor — for the key and its
  defining fact (the four reverse-recall cases);
- rubric clauses are copied from the model answer, not restated;
- vary key positions; keep options in one category and one format;
- avoid keying the unit's headline names that other chapters print;
- write fixes requested later to `$SP/kc/chNN/fixes.md`, never over a
  checker's report.

**Checkers:** one **Opus** agent per chapter, launched as its author
reports. Prompt: the scratch block, the chapter's section pages, "read
`docs/re-review/brief-life-sciences.md` and
`docs/re-review/brief-knowledge-check.md`, report only, do not edit",
report path `$SP/kc/check-chNN.md` — named by chapter, since two agents
told a shared name overwrote each other.

**Parent read:** each chapter block as its checker reports, before
assembly (§0). Fix requests go back to the chapter's author by
`SendMessage`, by raw agent id; the parent applies one-line fixes itself
and reads every changed stem and option, its own included, against every
key on the block.

**Reverse-recall sweep:** one Opus agent per two or three chapters,
launched on the finished chapter scratch blocks (not the assembled page —
waiting for assembly cost most of an hour with no gain), reading every
item beside its section page. Its bar is the playbook's four cases.

**Replacements** keep the item's type, come from a different module
sentence, and go to one fresh Opus second checker over the whole set
(against the CNXML and the section page, body self-checks included)
before the solve.

## 3. Assemble and solve

1. Assemble: `npm run kc -- assemble
   content/life-health-sciences/anatomy-physiology/knowledge-check-XX-YY.md
   --head $SP/kc/head.md --foot $SP/kc/foot.md $SP/kc/ch*/content/…/knowledge-check-XX-YY.md`
   (it refuses chapters out of order, a section under the wrong chapter,
   and a `source_chapters` that does not match); then `npm run kc --
   weights content/life-health-sciences/anatomy-physiology --write`.
2. `npm run kc -- leaks <the page>` after every replacement round — the
   whole-page check that no item prints another item's key, by the key and
   its plural fold. Every hit is a candidate for the parent's read under
   the KC playbook's standard (a leak states the tested fact or singles
   out the key; shared vocabulary, a distractor, or a hidden rubric clause
   is not); on the thirteen finished life-sciences checks all 61 hits were
   vocabulary. A root match ("epididymis"/"epididymitis") is still the
   reader's to see.
3. `npm run verify-section -- <the page>` until clean.
4. Blind solve: `npm run solve:emit -- <the check page> --out
   $SP/kc/solve`, plus `npm run solve:emit -- <chapter dir> --out
   $SP/kc/discard --pages-out $SP/kc/solve/pages` for each chapter of the
   unit (the masked section pages are the solver's source; their packets
   are discarded). One fresh Fable agent reads
   `docs/briefs/anatomy-physiology/solve.md` and answers the check's
   packets from the masked section pages — never the live check page.
   `npm run solve:compare`; adjudicate every disagreement against the
   module, and read every answer's `note`, not only the disagreements; a
   later edit re-hashes its item, so re-emit and solve the delta.

## 4. Close-out, in this order

1. Ledger: `npm run kc -- notes <the page> $SP/kc/ch*/provenance.json
   --out $SP/kc/notes` (it lists any item without provenance and any
   provenance that matched no item — resolve both), merge it and the
   solve results in either order (a merge keeps a note under a solve and a
   solve under a note), then `npm run ledger:provenance --
   content/life-health-sciences/anatomy-physiology --out $SP/kc/prov` and
   merge that too — it fills the `KC` tie on anything still missing it —
   and `node tools/verify/answer-ledger.mjs prune content`.
2. Errata and claim findings as in `run.md` §4 (grep the errata file for
   the module id first: a section page's disclosed defect may carry a
   decision the check must follow).
3. `npm run baseline:update` (it moves `--min-exercises`, `--min-verified`,
   `--min-replayed`; never `--min-confirmed`, which check items do not
   touch), `npm test`, `npm run build && npm run check:build` (report the
   page's size; do not thin the quota).
4. The playbook's "Knowledge checks" section records the landed unit; the
   narrative goes to `docs/history/anatomy-physiology.md`; any new rule to
   the KC playbook or this file.
5. Commit only when asked, the check and the weight shift together.
