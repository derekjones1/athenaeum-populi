# CLAUDE.md

Follow `AGENTS.md` — the canonical agent guide; every constraint in it
applies to Claude sessions exactly as written.

For content work read `docs/authoring-playbook.md` — the subject-neutral
core — plus the subject playbook under `docs/subjects/` (`math.md`, or
`life-sciences.md` plus the book's `biology.md` / `microbiology.md` /
`anatomy-physiology.md`); for cumulative assessments also read the
subject's edition, `docs/knowledge-check-playbook-math.md` or
`docs/knowledge-check-playbook-life-sciences.md`; for the OpenStax math books
follow `docs/source/openstax-source-workflow.md` and treat the pinned CNXML
commit in `data/openstax/source-lock.json` as the transcription authority.
Verify with `npm run verify-section -- <page>` and `npm test` before
handing work back.

To author a Microbiology chapter ("author chapter N of Microbiology"),
follow `docs/briefs/microbiology/run.md` — the parent's recipe — and hand
the agents the briefs beside it. Do not re-derive briefs from memory or
paste the playbooks into agent prompts: the briefs name which playbook
sections each agent reads, and the blind solve runs in a fresh
Fable subagent with masked pages (`solve:emit --pages-out`). Keep the
parent's own context small: notes to `PARENT-NOTES.md`, long outputs to
files, ten-line agent reports, and every checklist-shaped prep and
close-out step (run-facts draft, landing pages, errata draft, pins) to a
Sonnet agent as run.md prescribes — without being asked.
An Anatomy and Physiology chapter runs the same way from
`docs/briefs/anatomy-physiology/run.md` (the same kit with this book's
content rules; prep tool `tools/source/anatomy-physiology-prep.py`).
