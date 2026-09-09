#!/usr/bin/env python3
"""Parent-prep extraction for an OpenStax Microbiology chapter run.

Three subcommands, all read-only over the pinned checkout
(`sources/openstax/osbooks-microbiology/modules`):

  keys     <moduleId>…   objectives, defined terms with context, summary
                         bullets, every Check Your Understanding question,
                         every exercise with its options and source key (or
                         an explicit "source prints no key"), every figure
                         with stem, alt, and caption
  terms    <moduleId>    the `## Key terms` scaffold: one bullet per DISTINCT
                         class-less <term> in body order, definition looked
                         up in the Glossary appendix, provenance in a comment
  glossary <term>…       ad hoc Glossary-appendix lookup

Run per module before the wave (docs/briefs/microbiology/run.md):

  python3 tools/source/microbiology-prep.py keys  m58846 > $SP/keys-11.7.txt
  python3 tools/source/microbiology-prep.py terms m58846 > $SP/terms-11.7.md
  python3 tools/source/microbiology-prep.py glossary "wobble position" CAP

The output is a convenience for authors, never the authority: the keys
extractor drops cross-references (a stem reading "In , which…" had a figure
link there) and the Glossary scan drops <sub>/<sup> markup. Authors confirm
every key against the raw CNXML.
"""
import os
import re
import sys

BUNDLE = os.environ.get("MICROBIO_BUNDLE", "sources/openstax/osbooks-microbiology")
ROOT = f"{BUNDLE}/modules"
GLOSSARY_MODULE = os.environ.get("MICROBIO_GLOSSARY", "m58950")

# Four appendix entries lost their <emphasis> headword upstream and read as
# the tail of the previous item (erratum 320). Recover them so a term the
# appendix defines is not reported missing.
MERGED = {
    "taxonomy": ("taxonomy", "the classification, description, identification, and naming of living organisms"),
    "microbiology": ("microbiology", "the study of microorganisms"),
    "protozoology": ("protozoology", "the study of protozoa"),
    "parasitology": ("parasitology", "the study of parasites"),
}
# Body term → appendix headword where the two differ by more than number.
ALIAS = {
    "nuclear membrane": "nuclear envelope",
    "pseudohypha": "pseudohyphae",
    "helical": "helical virus",
    "polyhedral": "polyhedral virus",
    "complex": "complex virus",
    "phage conversion": "lysogenic conversion (phage conversion)",
    "dimorphic fungi": "dimorphic fungus",
}
PRIMES = str.maketrans({"′": "'", "ʹ": "'", "’": "'", "ʼ": "'"})


def module_path(mid):
    return f"{ROOT}/{mid}/index.cnxml"


def read_module(mid):
    try:
        with open(module_path(mid), encoding="utf-8") as fh:
            return fh.read()
    except FileNotFoundError:
        sys.exit(f"{module_path(mid)} not found — run `npm run source:fetch -- --bundle microbiology`")


def txt(x):
    x = re.sub(r'<emphasis[^>]*effect="italics"[^>]*>(.*?)</emphasis>', r"*\1*", x, flags=re.S)
    x = re.sub(r"<emphasis[^>]*>(.*?)</emphasis>", r"**\1**", x, flags=re.S)
    x = re.sub(r"<[^>]+>", " ", x)
    return re.sub(r"\s+", " ", x).strip()


def plain(x):
    x = re.sub(r'<emphasis[^>]*effect="italics"[^>]*>(.*?)</emphasis>', r"*\1*", x, flags=re.S)
    x = re.sub(r"<[^>]+>", "", x)
    return re.sub(r"\s+", " ", x).strip()


def section(s, cls):
    i = s.find(f'class="{cls}"')
    if i < 0:
        return ""
    i = s.rfind("<section", 0, i)
    j = s.find("</section>", i)
    return s[i:j]


# ---------------------------------------------------------------- keys


def cmd_keys(mids):
    for m in mids:
        s = read_module(m)
        title = re.search(r"<md:title>(.*?)</md:title>", s, re.S)
        print("#" * 70)
        print("# MODULE", m, title.group(1) if title else "?")
        print("\n## OBJECTIVES")
        for o in re.findall(r"<item[^>]*>(.*?)</item>", section(s, "learning-objectives"), re.S):
            print(" -", txt(o))
        print("\n## DEFINED TERMS (body order, class-less <term> only)")
        for mt in re.finditer(r"<term([^>]*)>(.*?)</term>", s, re.S):
            if "no-emphasis" in mt.group(1):
                continue
            ctx = s[mt.start() : mt.end() + 320]
            print(" *", txt(mt.group(2)), "  || CONTEXT:", txt(ctx)[:300])
        print("\n## SUMMARY")
        for o in re.findall(r"<item[^>]*>(.*?)</item>", section(s, "summary"), re.S):
            print(" -", txt(o))
        print("\n## CHECK YOUR UNDERSTANDING (body, unkeyed)")
        for n in re.finditer(r'<note[^>]*class="microbiology check-your-understanding"[^>]*>(.*?)</note>', s, re.S):
            for q in re.findall(r"<item[^>]*>(.*?)</item>", n.group(1), re.S):
                print(" ?", txt(q))
        for cls in ["multiple-choice", "true-false", "matching", "fill-in-the-blank", "short-answer", "critical-thinking"]:
            seg = section(s, cls)
            if not seg:
                continue
            print(f"\n## {cls.upper()}")
            for e in re.finditer(r'<exercise id="([^"]+)"[^>]*>(.*?)</exercise>', seg, re.S):
                eid, body = e.group(1), e.group(2)
                prob = re.search(r"<problem[^>]*>(.*?)</problem>", body, re.S)
                prob = prob.group(1) if prob else body
                stem = txt(re.sub(r"<list.*?</list>", "", prob, flags=re.S))
                opts = [txt(o) for o in re.findall(r"<item[^>]*>(.*?)</item>", prob, re.S)]
                media = " [MEDIA]" if re.search(r"<media\b", prob) else ""
                sol = re.search(r"<solution[^>]*>(.*?)</solution>", body, re.S)
                print(f" [{eid}]{media} {stem}")
                for i, o in enumerate(opts):
                    print(f"     {chr(65 + i)}. {o}")
                print("     KEY:", txt(sol.group(1)) if sol else "(none — source prints no key)")
        print("\n## FIGURES")
        for f in re.finditer(r'<figure[^>]*id="([^"]*)"[^>]*>(.*?)</figure>', s, re.S):
            fid, b = f.group(1), f.group(2)
            src = re.search(r'src="([^"]+)"', b)
            alt = re.search(r'alt="([^"]*)"', b, re.S)
            cap = re.search(r"<caption[^>]*>(.*?)</caption>", b, re.S)
            stem = os.path.splitext(os.path.basename(src.group(1)))[0] if src else "?"
            print(f" [{fid}] stem={stem}")
            print("   ALT:", re.sub(r"\s+", " ", alt.group(1)) if alt else None)
            print("   CAP:", txt(cap.group(1)) if cap else None)


# ------------------------------------------------------------ glossary


def load_glossary():
    g = read_module(GLOSSARY_MODULE)
    entries = {}
    for it in re.findall(r"<item[^>]*>(.*?)</item>", g, re.S):
        m = re.match(r'\s*<emphasis(?![^>]*effect="italics")[^>]*>(.*?)</emphasis>(.*)', it, re.S)
        if not m:
            continue
        h = plain(m.group(1))
        d = plain(m.group(2))
        keys = {h.lower().replace("*", "")}
        bare = re.sub(r"\s*\([^)]*\)", "", h).strip().lower().replace("*", "")
        keys.add(bare)
        for pl in re.findall(r"\((?:plural|singular):\s*([^)]+)\)", h):
            keys.add(pl.strip().lower())
        for k in list(keys):
            keys.add(k.translate(PRIMES))
        for k in keys:
            entries.setdefault(k, (h, d))
    return entries


def variants(t):
    t = t.strip()
    l = t.lower().translate(PRIMES)
    out = [t, l, l + "s", l.replace("-", " "), l.replace(" ", "-")]
    # One hyphen at a time: `aminoacyl tRNA synthetase` ↔ `aminoacyl-tRNA synthetase`.
    parts = l.split(" ")
    for i in range(1, len(parts)):
        out.append(" ".join(parts[:i]) + "-" + " ".join(parts[i:]))
        out.append(" ".join(parts[:i]) + " " + "-".join(parts[i:]))
    bare = re.sub(r"\s*\([^)]*\)", "", l).strip()
    if bare != l:
        out += [bare, bare + "s", bare[:-1] if bare.endswith("s") else bare]
    if l in ALIAS:
        out.append(ALIAS[l])
    words = bare.split()
    if len(words) > 1 and words[-1].endswith("s"):
        out.append(" ".join(words[:-1] + [words[-1][:-1]]))
    if l.endswith("ies"):
        out.append(l[:-3] + "y")
    if l.endswith("s"):
        out.append(l[:-1])
    if l.endswith("a"):
        out += [l + "n", l[:-1] + "on"]
    if l.endswith("ae"):
        out.append(l[:-1])
    return out


def lookup(entries, t):
    for cand in variants(t):
        c = cand.lower()
        if c in entries:
            return entries[c] + ("glossary",)
        if c in MERGED:
            return MERGED[c] + ("glossary (headword merged into the previous item upstream — erratum 320)",)
    return None


def cmd_glossary(terms):
    entries = load_glossary()
    for q in terms:
        e = lookup(entries, q)
        print(f"--- {q}:", f"{e[0]} — {e[1]}   [{e[2]}]" if e else "NOT FOUND")


# --------------------------------------------------------------- terms


def cmd_terms(mid):
    entries = load_glossary()
    s = read_module(mid)
    seen = set()
    n = 0
    print(f"# Defined terms of {mid}, in body order (class-less <term> only)\n")
    for mt in re.finditer(r"<term([^>]*)>(.*?)</term>", s, re.S):
        if "no-emphasis" in mt.group(1):
            continue
        n += 1
        t = plain(mt.group(2))
        key = t.lower().rstrip("s")
        tail = s[mt.end() : mt.end() + 40]
        plural = bool(re.match(r'\s*<emphasis effect="bold">s</emphasis>', tail))
        if key in seen:
            print(f"- [repeat] {t} — already listed above; ONE bullet only")
            continue
        seen.add(key)
        e = lookup(entries, t)
        if e:
            note = "" if e[0].lower() == t.lower() else f' (appendix headword: "{e[0]}")'
            print(f"- **{t}** — {e[1]}.   <!-- provenance: {e[2]}{note} -->")
        else:
            near = [h for h in entries if t.lower() in h or h in t.lower()]
            hint = (
                "; nearest appendix headwords: "
                + ", ".join(f'"{entries[h][0]}" — {entries[h][1]}' for h in sorted(set(near))[:3])
            ) if near else ""
            print(
                f"- **{t}** — NO GLOSSARY ENTRY: write the meaning from this module's defining sentence{hint}."
                "   <!-- provenance: sentence -->"
            )
        if plural:
            print(f'    (printed in the body as the plural "{t}s" — bold the whole word, one bold run)')
    print(f"\nTOTAL <term> elements without no-emphasis: {n}; distinct terms (bullets expected): {len(seen)}")


def main(argv):
    if len(argv) < 2 or argv[0] not in {"keys", "terms", "glossary"}:
        sys.exit(__doc__)
    cmd, args = argv[0], argv[1:]
    if cmd == "keys":
        cmd_keys(args)
    elif cmd == "terms":
        if len(args) != 1:
            sys.exit("terms takes exactly one module id")
        cmd_terms(args[0])
    else:
        cmd_glossary(args)


if __name__ == "__main__":
    main(sys.argv[1:])
