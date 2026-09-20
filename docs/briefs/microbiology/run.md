# Running a Microbiology chapter — the parent's recipe

This is the orchestrator's checklist for "author chapter N of Microbiology".
It is the one document the parent reads; the agents read the briefs beside
it. Rules live in the playbooks (`docs/authoring-playbook.md`,
`docs/subjects/life-sciences.md`, `docs/subjects/microbiology.md`); this
file and the briefs only say who reads what, in what order, with what in
their context. Context is the cost: a rule stated here is a rule every
agent re-reads on every turn, so nothing below restates a playbook.

## 0. Shape, and why

Measured on the chapters 10–11 run (eleven sections, one wave): the parent
spent 118M context-tokens over 410 Fable turns with a 290k average context;
the eleven Sonnet authors 216M; the checkers 52M; the claim pass 8M. The
checkers and claim pass found ~35 defects and 4 claim corrections on
lint-clean pages, so they stay. The savings are (a) the parent's context
and turn count, (b) the ~57k tokens of rules each author re-read on every
turn, (c) the blind solve running inside the parent's bloated context.

Hence:

- **Parent context stays small.** Every note goes to `$SP/PARENT-NOTES.md`,
  not to the conversation. Every long command output goes to a file and
  the parent reads its tail (`> $SP/x.log 2>&1; tail -20 $SP/x.log`).
  Agents' final messages are ten lines; their reports are files.
- **Authors read the compact brief + the run facts, and the playbook
  sections named there** — not the whole core playbook, not the history.
- **The blind solve runs in a fresh Fable subagent** with only the packets
  in its context (`solve.md`). The model is still Fable (the standing rule:
  the orchestrator's own reading, not a Sonnet's); the context is 20k, not
  400k. The parent adjudicates disagreements only.

## 1. Before the wave

`SP` is this session's scratchpad. Never a git state command from an agent;
the parent runs them.

1. **Baseline.** `npm test > $SP/test-baseline.log 2>&1; tail -3 …` on the
   clean tree. Note HEAD and the last erratum number in PARENT-NOTES.
2. **Media.** `npm run source:media -- --book microbiology --chapter N
   --dry-run`, then without `--dry-run`. Note the stems that live inside
   feature boxes and the `_img` exercise images. A Disease Profile table
   image vendors like any other figure — the pull cannot tell it apart —
   so note its stems too and de-vendor them (manifest entry + static
   files) at close-out *(chapters 21–22, the first run with these boxes)*.
3. **PDF pages.** Find the chapter's true PDF index range with `pdftotext`
   (printed folio = index − 14 has held for chapters 1–11; re-check), then
   `pdftoppm -f A -l B -r 110 -png sources/microbiology_-_WEB.pdf $SP/pdf/chNN/p`.
4. **Extraction, per module** (`tools/source/microbiology-prep.py`):
   `keys <moduleId> > $SP/keys-N.M.txt` and `terms <moduleId> >
   $SP/terms-N.M.md`. The parent does NOT read the keys files whole
   (876 lines for two chapters); a Sonnet agent reads them for step 6.
5. **Landing page** `content/…/NN-<slug>/_index.md` from the intro module,
   in final form (bullets naming the sections; no `authoring_status`).
   **Delegated:** one Sonnet agent, prompt = the two previous chapters'
   `_index.md` as exemplars, the intro module id, the section list, the
   OpenStax deep link; it views the splash image for the alt. Launched
   together with the step-6 drafter.
6. **Run facts** — copy `run-facts-template.md` to `$SP/run-facts.md`.
   **Delegated, in two parts** *(chapters 15–16; the shape that kept the
   parent's context small)*: one Sonnet agent fills PART A (every factual
   field, from the `keys` files and the raw CNXML) and appends PART B,
   "DECISIONS NEEDED" — a numbered list of every exercise image, matching
   set, >4-word / "or" / multi-blank key, unkeyed Short Answer and
   Critical Thinking question (with the ONE module sentence that could fix
   it, quoted, or "no single sentence"), summary table, notation, Clinical
   Focus chain, and route, with the raw data beside each. The parent reads
   PART B only and writes PART C, the decisions — the forms the playbook
   cannot make for a module (an exercise image's form, a >4-word key, a
   notation the corpus has not printed yet) — made HERE, once, by the
   parent, not eleven times by authors.
   A decision names the playbook rule it applies, and a shape the playbook
   already fixes is NOT re-decided: the chapters 15–16 parent wrote a
   matching form (stem = term) and a `sortbins` with seven bins that both
   contradicted the playbook, and three authors built them before the
   correction went out. Before the wave, grep `docs/subjects/microbiology.md`
   for every form Part C names (`Matching`, `sortbins`, `two-blank`) and
   quote the rule beside the decision.
   Part B quotes the extractor's key line verbatim ("source prints no
   key" included) and never infers a letter: the chapter 24 drafter wrote
   "source key: D" for an Art Connection that prints no solution, and only
   the parent's CNXML check caught it.
   **Part C names WHICH rule and WHICH sentence, never a concrete `accept`
   list** *(chapter 26)*: the chapter 26 Part C prescribed
   `accept="blood brain barrier"`, which the grader already folds and the
   lint then rejected as redundant — say "grader-check the members"
   instead and let the author verify.
7. Copy the three agent briefs unchanged to `$SP/` (`author.md`,
   `checker.md`, `claim-pass.md`) so the agents' paths are one directory.

The parent's own prep work is then: the baseline, the media pull, the PDF
render, the extraction commands, PART C, and reading two ten-line reports.
Everything checklist-shaped goes to a Sonnet agent — this is the standing
rule, not a per-run choice: Derek asked (September 12, 2026) that the
token-saving shape apply every run without being requested.
   A run-specific correction to a brief is an edit to the repo copy, then
   the scratchpad copy — never a fork.

## 2. The wave

One Sonnet author per section, launched together, each prompt three lines:
section number, module id, output path, PDF page range, "read
`$SP/author.md` first". Names cannot contain a dot (`author-10-1`).

As each author reports: launch its checker (one Sonnet per section, prompt
= page path + "read `$SP/checker.md`"). **A prompt line naming one item for
"specific attention" narrows a Sonnet checker to that item alone**, returning
a partial pass instead of the full brief *(chapter 25: three of four
checkers came back partial and had to be resumed for the full pass)* — say
"run the FULL pass, and in addition…", never a bare pointer. When a
chapter's last page is on disk: launch its claim-pass checker (one Sonnet per chapter, prompt = the
page paths with module ids, PLUS the landing page path with its intro
module id — the landing page is Sonnet-written and this is its only
reading — + "read `$SP/claim-pass.md`", report path
`$SP/claims-chNN.md`).

After the last author reports, grep every page of the wave for plain-text
cross-references to sibling sections that are now on disk — authors
launched together cannot link pages that did not exist yet when they wrote
theirs, and chapter 20 had five such sites — and have the authors convert
them to real links before the checkers' concerns repeat the same finding
page by page. Authors leave a Clinical Focus chain sentence unlinked even
when Part C already printed the route: two of nine sections did in the
chapters 21–22 wave. The grep is not optional just because Part C named
the routes.

Checker defects go back to the page's author by `SendMessage` (authors are
resumable by name); the parent applies only one-line fixes itself. **Read
every author's report for the words "dropped", "omitted", "duplicate", or
"folded" and challenge each one** *(chapters 13–14)*: five of eleven authors
in that wave left a source exercise off the page with a reasonable-sounding
rationale, no gate caught any of them, and only one of the five claims
survived checking. The adjudication is one line — graded when one module
artifact fixes the answer, `selfcheck` otherwise, never absent. Verify
every checker finding against the image or the raw CNXML before relaying
it — about one finding per run is wrong.

Claim-pass findings: the parent verifies each against the cited evidence,
then applies the accepted ones (Source note, `reconciliation-decisions.json`
entry, footer sentence, erratum), lists the rest under "Reviewed and *not*
errata". After correcting a value on a page, grep the page for the OLD
value: a hint or filler item built on it is now wrong (chapter 12's Sanger
hint still said 1972 after the body said 1977).

## 3. The blind solve

Per chapter, once its pages are stable (checker fixes in):

```sh
npm run solve:emit -- content/life-health-sciences/microbiology/NN-<slug> --out $SP/solve/chNN --pages-out $SP/solve/chNN/pages
```

Launch ONE fresh `general-purpose` agent with `model: "fable"`, prompt =
"read `docs/briefs/microbiology/solve.md`; packets in `$SP/solve/chNN`,
masked pages in `$SP/solve/chNN/pages`; write `$SP/solve/chNN/answers.json`".
It sees the packets and the masked pages only — never the live page, the
keys, the ledgers, or the checker reports.

Then the parent:

```sh
npm run solve:compare -- $SP/solve/chNN/answers.json content --out $SP/solve-results/chNN > $SP/solve/chNN/compare.log 2>&1
```

The masked pages have their provenance footer blanked (`<small>…</small>`)
since September 12, 2026 — a footer names keys in prose ("the Matching
exercise (key: D, E, B, A, C)") and the chapter 16 solver read the leak.

Every disagreement or flag gets an `adjudicated` note settled against the
module's sentence (a why-question keyed to one abstract noun usually wants
its accept list extended within the 4-word cap). A compare that hits ONE
unresolved disagreement writes NOTHING for the whole file — re-run it after
adjudicating. A page edited after its solve re-hashes: re-emit that page
and solve it again.

## 4. Close-out, in this order

0. **Delegate the mechanical close-out to Sonnet agents, launched together
   once the pages are stable**. Agents are addressed by their raw agent id
   for `SendMessage`, never by their description string — record each
   author's id when it is launched *(chapters 21–22)*. (a) an alt-errata
   verifier — every
   author/checker "suspected source defect" and every alt-vs-image claim,
   checked against the vendored image and the CNXML, verdicts to
   `$SP/alt-errata.md`. **Its brief must say it never runs `source:media` or
   `vendor-media`**: told a de-vendored Disease Profile stem is "missing," it
   will re-vendor it *(chapter 25: the verifier re-vendored all four of the
   chapter's de-vendored images; the parent re-removed the manifest entries
   and static files)* — launch the pins/de-vendor agent AFTER the verifier
   reports, or de-vendor last; (b) an errata drafter — reads the previous run's
   block for format, `$SP/alt-errata.md`, both `claims-chNN.md`, and
   PARENT-NOTES, writes `$SP/errata-block.md` and
   `$SP/decisions-entries.json` (claim corrections only get decisions
   entries; alt and typo errata do not) and reports every footer that does
   not disclose what its erratum says; (c) a pins agent — step 3 below,
   with the old→new values in its report; (d) any tool bug a checker
   found. The parent inserts, appends, and applies the footer one-liners.
1. Errata block inserted after the previous chapter's block (before the
   plain `## Confirmed`); decisions entries carry every element id of a page.
2. `node tools/source/openstax-source.mjs build-map` BEFORE the deviation
   test (an unmapped page leaves a deviation "unexercised").
3. Pins: `AGENTS.md` status prose, `README.md`, the workflow doc's counts
   (including its "connects all N authored" sentence — the one prose site
   `documentation.test.mjs` checks against the source map; missed in chapter 19),
   `tools/source/openstax-source.test.mjs` assertions, the book cover's
   chapter list, `docs/source/claim-pass-ledger.md` rows, the playbook
   header sentence for the chapter.
4. `node tools/source/openstax-source.mjs history --output
   docs/source/openstax-upstream-history-audit.md`.
5. `python3 tools/verify/rebuild-ledger-results.py --results
   $SP/ledger-results --out $SP/ledger-results-fixed --book
   life-health-sciences/microbiology` (rebuilds the author hashes your
   post-filing edits changed), then merge: author results → solve records
   → prune.
   A page with more than one stale entry stops the rebuild ("23.4: 7 stale
   — map by hand") and nothing is written for it or the pages after it:
   map stale → uncovered by question text against the solve packet's
   hashes, write the patched file, and merge that too *(chapter 23)*.
6. `npm run baseline:update`; `npm test > $SP/test-final.log 2>&1`; read
   the tail. `npm run source:verify` and `npm run check:external-links`.
   **Run `check:external-links` BEFORE the errata drafter (step 0b), not
   here** *(chapter 26: it found two dead Link to Learning redirects in
   26.3 — 22arboviralUS, 22WHOprion; a 403 is a bot wall and stays linked
   — each un-linked and an erratum filed)*, so the dead-link errata land
   in the same block as the run's other errata instead of trailing it.
7. New lessons: a one-line rule into the playbook section it belongs to;
   the narrative into `docs/history/microbiology.md`; a lint or test where
   one can hold it. Then the session memory file.
8. Commit only when asked. A large push may fail from the sandbox — try
   once, then hand it to Derek.
