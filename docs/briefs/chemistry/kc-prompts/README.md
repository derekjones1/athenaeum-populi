# Knowledge Check prompt files — Chemistry

The prompt files `kc-run.md` has the parent copy to `$SP/kc/prompt-*.md`.
`$SP` is the session's scratchpad directory; the parent substitutes it and
the placeholders below with `str.replace` (never `.format` or an unquoted
heredoc — `docs/briefs/anatomy-physiology/run.md` §0), one file per agent.

| Placeholder | Example |
|---|---|
| `__BLOCK__` | `1` |
| `__RANGE__` | `1–3` |
| `__FILE__` | `knowledge-check-01-03.md` |
| `__CH__` | `3` (and `__CH2__`, `03`, for a scratch directory) |
| `__TITLE__` | `Composition of Substances and Solutions` |
| `__DIR__` | `03-composition-of-substances-and-solutions` |
| `__SCRATCH__` | `$SP/kc/ch03/content/physical-sciences/chemistry/knowledge-check-01-03.md` |
| `__SECTIONS__` | one line per section: number, title, module id, page file |
| `__BLOCKS__` | one line per chapter block the agent reads |
| `__NAME__`, `__CHAPTERS__` | a sweep's letter and its chapters |
| `__N__`, `__PAGES__` | the solver's packet count and masked-page count |

- `author.md` — one Author-kind agent per chapter (`kc-run.md` §2).
- `checker.md` — one Author-kind checker per chapter, report only.
- `sweep.md` — one Author-kind sweep per two or three chapters.
- `second-checker.md` — one fresh Author-kind reader over
  `$SP/kc/replacements.md` (the parent writes that list: every replacement
  and in-place rewrite, with section, kind, the stem's first words, why,
  and the example or subsection it claims), on the trial assembly.
- `solver.md` — the launch note for the fresh Blind solver, which reads
  `docs/briefs/chemistry/solve.md` and then this note's one added rule.
