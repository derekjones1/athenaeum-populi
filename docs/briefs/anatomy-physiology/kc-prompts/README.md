# Knowledge Check prompt files

The prompt files `kc-run.md` has the parent write to `$SP/kc/prompt-*.md`,
kept here because every scratchpad before the Unit 5 run (November 1, 2026)
had been cleaned away and the parent rebuilt them from `kc-run.md` alone.
`$SP` is the session's scratchpad directory; the parent substitutes it, and
the `__CH__`, `__TITLE__`, `__DIR__`, `__SCRATCH__`, `__SECTIONS__`,
`__NAME__`, `__CHAPTERS__`, `__BLOCKS__` placeholders, with `str.replace`
(never `.format` or an unquoted heredoc — `run.md` §0), one file per agent.

- `author.md` — one Opus author per chapter (`kc-run.md` §2 "Authors").
- `checker.md` — one Opus checker per chapter, report only.
- `sweep.md` — one Opus reverse-recall sweep per two or three chapters.
- `second-checker.md` — one fresh Opus reader over `$SP/kc/replacements.md`
  (the parent writes that list: every replacement and in-place rewrite, with
  section, type, stem's first words, why, claimed subsection), on the trial
  assembly.
- `solver.md` — the three-line launch note for the fresh Fable solver, which
  reads `solve.md` beside this directory.
- `errata-clerk.md`, `closeout-clerk.md` — the Unit 5 run's Sonnet clerk
  briefs, worked examples rather than templates: the errata one names its
  finding and entry number, the close-out one the three files and the
  `$SP/kc/RUN-FACTS.md` record it writes from (`run-facts-template.md` is the
  chapter run's shape; the KC record's headings are in `closeout-clerk.md`).
