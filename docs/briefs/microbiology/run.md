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
   feature boxes and the `_img` exercise images.
3. **PDF pages.** Find the chapter's true PDF index range with `pdftotext`
   (printed folio = index − 14 has held for chapters 1–11; re-check), then
   `pdftoppm -f A -l B -r 110 -png sources/microbiology_-_WEB.pdf $SP/pdf/chNN/p`.
4. **Extraction, per module** (`tools/source/microbiology-prep.py`):
   `keys <moduleId> > $SP/keys-N.M.txt` and `terms <moduleId> >
   $SP/terms-N.M.md`. Read each `keys` file yourself: it is how you check
   an author's "the module has no X" in seconds and how you pre-decide the
   forms below.
5. **Landing page** `content/…/NN-<slug>/_index.md` from the intro module,
   in final form (bullets naming the sections; no `authoring_status`).
6. **Run facts** — copy `run-facts-template.md` to `$SP/run-facts.md` and
   fill every field from the `keys` files and the CNXML. The decisions the
   playbook cannot make for a module (an exercise image's form, a matching
   set's shape, a >4-word key, a notation the corpus has not printed yet)
   are made HERE, once, by the parent — not eleven times by authors.
7. Copy the three agent briefs unchanged to `$SP/` (`author.md`,
   `checker.md`, `claim-pass.md`) so the agents' paths are one directory.
   A run-specific correction to a brief is an edit to the repo copy, then
   the scratchpad copy — never a fork.

## 2. The wave

One Sonnet author per section, launched together, each prompt three lines:
section number, module id, output path, PDF page range, "read
`$SP/author.md` first". Names cannot contain a dot (`author-10-1`).

As each author reports: launch its checker (one Sonnet per section, prompt
= page path + "read `$SP/checker.md`"). When a chapter's last page is on
disk: launch its claim-pass checker (one Sonnet per chapter, prompt = the
page paths with module ids + "read `$SP/claim-pass.md`", report path
`$SP/claims-chNN.md`).

Checker defects go back to the page's author by `SendMessage` (authors are
resumable by name); the parent applies only one-line fixes itself. Verify
every checker finding against the image or the raw CNXML before relaying
it — about one finding per run is wrong.

Claim-pass findings: the parent verifies each against the cited evidence,
then applies the accepted ones (Source note, `reconciliation-decisions.json`
entry, footer sentence, erratum), lists the rest under "Reviewed and *not*
errata".

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

Every disagreement or flag gets an `adjudicated` note settled against the
module's sentence (a why-question keyed to one abstract noun usually wants
its accept list extended within the 4-word cap). A compare that hits ONE
unresolved disagreement writes NOTHING for the whole file — re-run it after
adjudicating. A page edited after its solve re-hashes: re-emit that page
and solve it again.

## 4. Close-out, in this order

1. Errata block inserted after the previous chapter's block (before the
   plain `## Confirmed`); decisions entries carry every element id of a page.
2. `node tools/source/openstax-source.mjs build-map` BEFORE the deviation
   test (an unmapped page leaves a deviation "unexercised").
3. Pins: `AGENTS.md` status prose, `README.md`, the workflow doc's counts,
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
6. `npm run baseline:update`; `npm test > $SP/test-final.log 2>&1`; read
   the tail. `npm run source:verify` and `npm run check:external-links`.
7. New lessons: a one-line rule into the playbook section it belongs to;
   the narrative into `docs/history/microbiology.md`; a lint or test where
   one can hold it. Then the session memory file.
8. Commit only when asked. A large push may fail from the sandbox — try
   once, then hand it to Derek.
