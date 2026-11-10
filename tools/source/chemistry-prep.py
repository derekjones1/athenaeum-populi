#!/usr/bin/env python3
"""Parent-prep extraction for an OpenStax Chemistry 2e chapter run.

The Chemistry analog of tools/source/anatomy-physiology-prep.py, used by
docs/briefs/chemistry/run.md. Two read-only subcommands over the pinned
checkout (default `sources/openstax/osbooks-chemistry-bundle`, resolved from
the repo root, so the tool runs from any directory; override with the
CHEM_BUNDLE environment variable):

  inventory <chapter> [--json <out.json>]
      Per-module inventory of one chapter, in collection order: for each
      module one summary line (objectives, exercises and how many are keyed,
      worked examples and how many carry a Check Your Learning, figures,
      images, tables, equations, math, glossary entries, feature-box
      classes, character count) and its section headings; for every module
      after the chapter intro, each keyed exercise (question and source key,
      truncated) and each Check Your Learning with its answer. With --json
      the per-module facts are also written to that file.

  keys <moduleId>
      Per-module source extract: objectives, section titles, feature boxes,
      figures (stem, alt, caption), images outside figures, tables, worked
      examples with Check Your Learning and source key, summary, key
      equations, glossary in source order, and every exercise (keyed ones
      with the source key, unkeyed ones truncated) with counts.

The output is a convenience for authors and checkers, never the authority:
the raw CNXML is.
"""
import collections
import html
import json
import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEFAULT_BUNDLE = os.path.join(REPO_ROOT, "sources", "openstax", "osbooks-chemistry-bundle")
BUNDLE = os.environ.get("CHEM_BUNDLE", DEFAULT_BUNDLE)


def collapse_space(text):
    return re.sub(r"\s+", " ", text).strip()


def inventory_text(fragment):
    fragment = re.sub(r"<sup>(.*?)</sup>", r"^\1", fragment, flags=re.S)
    fragment = re.sub(r"<sub>(.*?)</sub>", r"_\1", fragment, flags=re.S)
    fragment = re.sub(r"<image[^>]*>", "[IMG]", fragment)
    fragment = re.sub(r"<[^>]+>", " ", fragment)
    fragment = html.unescape(fragment)
    return collapse_space(fragment)


def chapter_modules(bundle, chapter):
    """Return (section index, module id, chapter title) for one chapter."""
    with open(f"{bundle}/collections/chemistry-2e.collection.xml") as handle:
        collection = handle.read()
    body = collection.split("<col:content>", 1)[1]
    modules = []
    chapter_number = 0
    inside_chapter = False
    title = None
    section = -1
    pattern = r'<col:subcollection>\s*<md:title>([^<]*)</md:title>|</col:subcollection>|<col:module document="(m\d+)"'
    for match in re.finditer(pattern, body):
        if match.group(1) is not None:
            chapter_number += 1
            inside_chapter = True
            title = match.group(1)
            section = -1
        elif match.group(2):
            if inside_chapter:
                section += 1
                if chapter_number == chapter:
                    modules.append((section, match.group(2), title))
        else:
            inside_chapter = False
    return modules


def inventory(bundle, chapter, json_path):
    out = {}
    for section, module_id, _chapter_title in chapter_modules(bundle, chapter):
        with open(f"{bundle}/modules/{module_id}/index.cnxml") as handle:
            source = handle.read()
        module_title = re.search(r"<title>([^<]*)</title>", source).group(1)
        abstract_match = re.search(r"<md:abstract>(.*?)</md:abstract>", source, flags=re.S)
        abstract = abstract_match[1] if abstract_match else ""
        objectives = re.findall(r"<item[^>]*>(.*?)</item>", abstract, flags=re.S)
        exercises = re.findall(r"<exercise\b.*?</exercise>", source, flags=re.S)
        keyed = [exercise for exercise in exercises if "<solution" in exercise]
        examples = re.findall(r"<example\b.*?</example>", source, flags=re.S)
        check_your_learning = [example for example in examples if "Check Your Learning" in example]
        notes = collections.Counter(re.findall(r'<note[^>]*class="([^"]*)"', source))
        headings = re.findall(r"<section[^>]*>\s*<title>([^<]*)</title>", source)
        info = dict(
            module=module_id,
            title=module_title,
            objectives=[inventory_text(objective) for objective in objectives],
            exercises=len(exercises),
            keyed=len(keyed),
            examples=len(examples),
            cyl=len(check_your_learning),
            figures=len(re.findall(r"<figure\b", source)),
            images=len(re.findall(r"<image\b", source)),
            tables=len(re.findall(r"<table\b", source)),
            equations=len(re.findall(r"<equation\b", source)),
            math=len(re.findall(r"<m:math\b", source)),
            glossary=len(re.findall(r"<definition\b", source)),
            notes=dict(notes),
            headings=headings,
            chars=len(inventory_text(source)),
        )
        print(
            f"{chapter}.{section} {module_id} {module_title}: obj {len(objectives)} | "
            f"ex {len(exercises)} keyed {len(keyed)} | examples {len(examples)} cyl {len(check_your_learning)} | "
            f"fig {info['figures']} img {info['images']} tbl {info['tables']} eq {info['equations']} "
            f"math {info['math']} | gloss {info['glossary']} | notes {dict(notes)} | chars {info['chars']}"
        )
        print("    headings:", headings)
        out[f"{chapter}.{section}"] = info
        if section > 0:
            for number, exercise in enumerate(exercises, 1):
                if "<solution" in exercise:
                    problem, solution = exercise.split("<solution", 1)
                    print(f"    K{number}: Q: {inventory_text(problem)[:150]}\n         A: {inventory_text('<' + solution)[:170]}")
            for example in check_your_learning:
                match = re.search(
                    r"<title>Check Your Learning</title>(.*?)<note[^>]*>\s*<title>Answer:?</title>(.*?)</note>",
                    example,
                    flags=re.S,
                )
                if match:
                    print(f"    CYL: Q: {inventory_text(match.group(1))[:150]}\n         A: {inventory_text(match.group(2))[:120]}")
    if json_path:
        with open(json_path, "w") as handle:
            json.dump(out, handle, indent=1)


def keys_text(fragment):
    fragment = re.sub(
        r"<m:math.*?</m:math>",
        lambda match: " ⟦math: " + re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", match.group(0))).strip() + "⟧ ",
        fragment,
        flags=re.S,
    )
    fragment = re.sub(r"<sup>(.*?)</sup>", r"^{\1}", fragment, flags=re.S)
    fragment = re.sub(r"<sub>(.*?)</sub>", r"_{\1}", fragment, flags=re.S)
    fragment = re.sub(r'<emphasis effect="italics">(.*?)</emphasis>', r"*\1*", fragment, flags=re.S)
    fragment = re.sub(r"<term[^>]*>(.*?)</term>", r"**\1**", fragment, flags=re.S)
    fragment = re.sub(r'<image[^>]*src="[^"]*?([^/"]+)\.jpg"[^>]*/?>', r"[IMAGE \1]", fragment)
    fragment = re.sub(r'<link[^>]*url="([^"]*)"[^>]*>(.*?)</link>', r"[\2](\1)", fragment, flags=re.S)
    fragment = re.sub(r'<link[^>]*target-id="([^"]*)"[^>]*/>', r"[xref \1]", fragment)
    fragment = re.sub(r"<item[^>]*>", " • ", fragment)
    fragment = re.sub(r"<[^>]+>", " ", fragment)
    fragment = html.unescape(fragment)
    return collapse_space(fragment)


def attribute_or_default(attributes, name, default):
    match = re.search(rf'{name}="([^"]*)"', attributes)
    return match.group(1) if match else default


def keys(bundle, module_id):
    with open(f"{bundle}/modules/{module_id}/index.cnxml") as handle:
        source = handle.read()
    emit = print
    emit("MODULE", module_id, "—", re.search(r"<title>([^<]*)</title>", source).group(1))

    emit("\n## OBJECTIVES (md:abstract)")
    abstract = re.search(r"<md:abstract>(.*?)</md:abstract>", source, flags=re.S).group(1)
    for objective in re.findall(r"<item[^>]*>(.*?)</item>", abstract, flags=re.S):
        emit(" -", keys_text(objective))

    emit("\n## SECTION TITLES, in order")
    for match in re.finditer(r"<section([^>]*)>\s*<title>([^<]*)</title>", source):
        emit(" -", match.group(2), "|", re.sub(r"\s+", " ", match.group(1)).strip())

    emit("\n## FEATURE BOXES (<note class>)")
    for match in re.finditer(r'<note([^>]*class="[^"]*"[^>]*)>(.*?)</note>', source, flags=re.S):
        note_class = re.search(r'class="([^"]*)"', match.group(1)).group(1)
        note_id = attribute_or_default(match.group(1), "id", "?")
        emit(" -", note_class, "| id", note_id, "|", keys_text(match.group(2))[:400])

    emit("\n## FIGURES (stem | alt | caption)")
    for match in re.finditer(r"<figure([^>]*)>(.*?)</figure>", source, flags=re.S):
        figure = match.group(2)
        stems = re.findall(r'src="[^"]*?([^/"]+)\.jpg"', figure)
        alts = re.findall(r'alt="([^"]*)"', figure)
        caption = re.search(r"<caption>(.*?)</caption>", figure, flags=re.S)
        figure_id = attribute_or_default(match.group(1), "id", "?")
        emit(
            " -",
            ", ".join(stems),
            "| id",
            figure_id,
            "\n     alt:",
            html.unescape(" / ".join(alts)),
            "\n     caption:",
            keys_text(caption.group(1)) if caption else "(none)",
        )

    figure_spans = [(match.start(), match.end()) for match in re.finditer(r"<figure\b.*?</figure>", source, flags=re.S)]
    emit("\n## IMAGES OUTSIDE ANY <figure> (stem | where | alt)")
    image_pattern = r'<media[^>]*alt="([^"]*)"[^>]*>\s*<image[^>]*src="[^"]*?([^/"]+)\.jpg"'
    for match in re.finditer(image_pattern, source, flags=re.S):
        if any(start <= match.start() < end for start, end in figure_spans):
            continue
        before = source[: match.start()]
        if before.rfind("<solution") > before.rfind("</solution>"):
            where = "exercise solution"
        elif before.rfind("<exercise") > before.rfind("</exercise>"):
            where = "exercise stem"
        elif before.rfind("<example") > before.rfind("</example>"):
            where = "example"
        else:
            where = "body"
        emit(" -", match.group(2), "|", where, "|", html.unescape(match.group(1)))

    emit("\n## TABLES")
    for match in re.finditer(r"<table([^>]*)>(.*?)</table>", source, flags=re.S):
        table_id = attribute_or_default(match.group(1), "id", "?")
        summary = attribute_or_default(match.group(1), "summary", "")
        emit(" - id", table_id, "| summary:", summary[:160])
        for row in re.findall(r"<row[^>]*>(.*?)</row>", match.group(2), flags=re.S):
            cells = re.findall(r"<entry[^>]*>(.*?)</entry>", row, flags=re.S)
            emit("     |", " | ".join(keys_text(cell) for cell in cells), "|")

    emit("\n## WORKED EXAMPLES")
    for number, match in enumerate(re.finditer(r"<example([^>]*)>(.*?)</example>", source, flags=re.S), 1):
        example = match.group(2)
        title = re.search(r"<title>(.*?)</title>", example, flags=re.S)
        example_id = attribute_or_default(match.group(1), "id", "?")
        emit(f" - Example {number} | id", example_id, "| title:", keys_text(title.group(1)) if title else "?")
        check = re.search(
            r"<title>Check Your Learning</title>(.*?)<note[^>]*>\s*<title>Answer:?</title>(.*?)</note>",
            example,
            flags=re.S,
        )
        if check:
            emit("     CHECK YOUR LEARNING:", keys_text(check.group(1)), "\n     ANSWER (source key):", keys_text(check.group(2)))
        else:
            emit("     (no Check Your Learning / Answer pair found by this extractor — read the CNXML)")

    emit("\n## SUMMARY section")
    summary_section = re.search(r'<section[^>]*class="summary"[^>]*>(.*?)</section>', source, flags=re.S)
    emit(keys_text(summary_section.group(1)) if summary_section else "(none)")

    emit("\n## KEY EQUATIONS section")
    equations_section = re.search(r'<section[^>]*class="key-equations"[^>]*>(.*?)</section>', source, flags=re.S)
    emit(keys_text(equations_section.group(1)) if equations_section else "(none)")

    emit("\n## GLOSSARY, in source order (term — meaning)")
    definition_pattern = r"<definition[^>]*>\s*<term>(.*?)</term>\s*<meaning[^>]*>(.*?)</meaning>"
    for match in re.finditer(definition_pattern, source, flags=re.S):
        emit(" -", keys_text(match.group(1)).strip("*"), "—", keys_text(match.group(2)))

    emit("\n## EXERCISES, in source order (N = position in this module; KEYED ones reach the page, UNKEYED ones are omitted)")
    exercises = re.findall(r"<exercise([^>]*)>(.*?)</exercise>", source, flags=re.S)
    keyed_count = 0
    for number, (attributes, exercise) in enumerate(exercises, 1):
        exercise_id = attribute_or_default(attributes, "id", "?")
        if "<solution" in exercise:
            keyed_count += 1
            problem, solution = exercise.split("<solution", 1)
            emit(
                f"\n [{number}] KEYED | exercise id {exercise_id}\n"
                f"   PROBLEM: {keys_text(problem)}\n"
                f'   SOLUTION (source key): {keys_text("<" + solution)}'
            )
        else:
            emit(f"\n [{number}] unkeyed | exercise id {exercise_id}\n   PROBLEM: {keys_text(exercise)[:300]}")
    emit(f"\n## COUNTS: exercises {len(exercises)}, keyed {keyed_count}, unkeyed {len(exercises) - keyed_count}")


def main(argv):
    usage = (
        "usage: chemistry-prep.py inventory <chapter> [--json <out.json>]\n"
        "       chemistry-prep.py keys <moduleId>"
    )
    if len(argv) >= 3 and argv[1] == "inventory":
        json_path = None
        if len(argv) == 5 and argv[3] == "--json":
            json_path = argv[4]
        elif len(argv) != 3:
            sys.exit(usage)
        inventory(BUNDLE, int(argv[2]), json_path)
    elif len(argv) == 3 and argv[1] == "keys":
        keys(BUNDLE, argv[2])
    else:
        sys.exit(usage)


if __name__ == "__main__":
    main(sys.argv)
