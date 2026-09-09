# CLAUDE.md

Follow `AGENTS.md` — it is the canonical agent guide for this repository, and
every constraint in it applies to Claude sessions exactly as written: the Hugo
stack rules, the source-fidelity and provenance requirements, the command
list, and the do-not-commit-unless-asked etiquette.

For content work read `docs/authoring-playbook.md` — the subject-neutral
core — plus the subject playbook under `docs/subjects/` (`math.md`, or
`life-sciences.md` plus the book's `biology.md` / `microbiology.md`) for the
book you are authoring; for cumulative assessments
also read the subject's edition, `docs/knowledge-check-playbook-math.md` or
`docs/knowledge-check-playbook-life-sciences.md`; for the OpenStax math books
follow `docs/source/openstax-source-workflow.md` and treat the pinned CNXML
commit in `data/openstax/source-lock.json` as the transcription authority.
Verify with `npm run verify-section -- <page>` and `npm test` before
handing work back.

To author a Microbiology chapter ("author chapter N of Microbiology"),
follow `docs/briefs/microbiology/run.md` — the parent's recipe — and hand
the agents the briefs beside it. Do not re-derive briefs from memory or
paste the playbooks into agent prompts: the briefs name exactly which
playbook sections each agent reads, and the blind solve runs in a fresh
Fable subagent with masked pages (`solve:emit --pages-out`). Keep the
parent's own context small: notes to `PARENT-NOTES.md`, long outputs to
files, ten-line agent reports.
