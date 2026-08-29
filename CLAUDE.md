# CLAUDE.md

Follow `AGENTS.md` — it is the canonical agent guide for this repository, and
every constraint in it applies to Claude sessions exactly as written: the Hugo
stack rules, the source-fidelity and provenance requirements, the command
list, and the do-not-commit-unless-asked etiquette.

For content work read `docs/authoring-playbook.md` — the subject-neutral
core — plus the subject playbook under `docs/subjects/` (`math.md` or
`biology.md`) for the book you are authoring; for cumulative assessments
also read `docs/knowledge-check-playbook.md`; for the OpenStax math books
follow `docs/source/openstax-source-workflow.md` and treat the pinned CNXML
commit in `data/openstax/source-lock.json` as the transcription authority.
Verify with `npm run verify-section -- <page>` and `npm test` before
handing work back.
