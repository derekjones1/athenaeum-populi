#!/usr/bin/env python3
"""Parent-prep extraction for an OpenStax Anatomy and Physiology 2e chapter run.

Three subcommands, all read-only over the pinned checkout
(`sources/openstax/osbooks-anatomy-physiology/modules`):

  keys     <moduleId>…   objectives (from <md:abstract>), defined terms with
                         context, summary bullets, every feature box with its
                         class, title, link, and closing question, every
                         exercise (Review, Critical Thinking, Interactive
                         Link) with its options and source key, every figure
                         with stem, alt, and caption, every table's summary,
                         and whether the module ends with a References list
  terms    <moduleId>    the `## Key terms` scaffold: one bullet per
                         <glossary> <definition> in SOURCE order (that is the
                         Biology 2e rule this book inherits), plus a check of
                         body <term>s against the glossary both ways
  glossary <moduleId> <term>…   ad hoc lookup in ONE module's own glossary

Run per module before the wave (docs/briefs/anatomy-physiology/run.md):

  python3 tools/source/anatomy-physiology-prep.py keys  m45983 > $SP/keys-1.1.txt
  python3 tools/source/anatomy-physiology-prep.py terms m45983 > $SP/terms-1.1.md

The output is a convenience for authors, never the authority: the keys
extractor drops cross-references (a stem reading "In , which…" had a figure
link there). `<sub>`/`<sup>` render as Unicode super-/subscript characters
(digits, +, −, and the letters the corpus uses — so `<sup>2</sup>H` prints
`²H` and `Mg<sup>2+</sup>` prints `Mg²⁺`), falling back to `^{…}`/`_{…}` for
content with no Unicode form. Authors confirm every key against the
raw CNXML. Unlike the Microbiology tool there is no appendix glossary: every
section's definitions are its own <glossary>, and a module without one
(17.11, m46658) gets no `## Key terms` block.
"""
import os
import re
import sys

BUNDLE = os.environ.get("AP_BUNDLE", "sources/openstax/osbooks-anatomy-physiology")
ROOT = f"{BUNDLE}/modules"
PRIMES = str.maketrans({"′": "'", "ʹ": "'", "’": "'", "ʼ": "'"})

SUP_CHARS = {
    "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
    "+": "⁺", "-": "⁻", "–": "⁻", "—": "⁻", "−": "⁻",
    "a": "ᵃ", "b": "ᵇ", "c": "ᶜ", "d": "ᵈ", "e": "ᵉ", "f": "ᶠ", "g": "ᵍ", "h": "ʰ", "i": "ⁱ", "j": "ʲ",
    "k": "ᵏ", "l": "ˡ", "m": "ᵐ", "n": "ⁿ", "o": "ᵒ", "p": "ᵖ", "r": "ʳ", "s": "ˢ", "t": "ᵗ", "u": "ᵘ",
    "v": "ᵛ", "w": "ʷ", "x": "ˣ", "y": "ʸ", "z": "ᶻ",
    "A": "ᴬ", "B": "ᴮ", "D": "ᴰ", "E": "ᴱ", "G": "ᴳ", "H": "ᴴ", "I": "ᴵ", "J": "ᴶ", "K": "ᴷ", "L": "ᴸ",
    "M": "ᴹ", "N": "ᴺ", "O": "ᴼ", "P": "ᴾ", "R": "ᴿ", "T": "ᵀ", "U": "ᵁ", "V": "ⱽ", "W": "ᵂ",
    "®": "®", "°": "°",
}
SUB_CHARS = {
    "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
    "+": "₊", "-": "₋", "–": "₋", "—": "₋", "−": "₋",
    "a": "ₐ", "e": "ₑ", "h": "ₕ", "i": "ᵢ", "j": "ⱼ", "k": "ₖ", "l": "ₗ", "m": "ₘ", "n": "ₙ", "o": "ₒ",
    "p": "ₚ", "r": "ᵣ", "s": "ₛ", "t": "ₜ", "u": "ᵤ", "v": "ᵥ", "x": "ₓ",
}


def raise_text(content, chars, bracket):
    """Render a <sup>/<sub> payload in Unicode when every non-space character
    has a mapping; otherwise fall back to `^{…}`/`_{…}` around the original
    text (whitespace-collapsed) so nothing is silently dropped or garbled."""
    core = content.strip()
    if core == "":
        return content
    if all(c in chars or c.isspace() for c in core):
        return "".join(chars.get(c, c) for c in content)
    return f"{bracket}{{{re.sub(r'\s+', ' ', core)}}}"


def sup_sub(x):
    x = re.sub(r"<sup[^>]*>(.*?)</sup>", lambda m: raise_text(m.group(1), SUP_CHARS, "^"), x, flags=re.S)
    x = re.sub(r"<sub[^>]*>(.*?)</sub>", lambda m: raise_text(m.group(1), SUB_CHARS, "_"), x, flags=re.S)
    return x

EXERCISE_SECTIONS = [
    ("multiple-choice", "REVIEW QUESTIONS (multiple-choice, keyed by letter)"),
    ("free-response", "CRITICAL THINKING QUESTIONS (free-response, model answer)"),
    ("interactive-exercise", "INTERACTIVE LINK QUESTIONS (keyed; graded ONLY when the module text fixes the answer — playbook rule 1)"),
]


def module_path(mid):
    return f"{ROOT}/{mid}/index.cnxml"


def read_module(mid):
    try:
        with open(module_path(mid), encoding="utf-8") as fh:
            return fh.read()
    except FileNotFoundError:
        sys.exit(f"{module_path(mid)} not found — run `npm run source:fetch -- --bundle anatomy-physiology`")


def txt(x):
    x = sup_sub(x)
    x = re.sub(r'<emphasis[^>]*effect="italics"[^>]*>(.*?)</emphasis>', r"*\1*", x, flags=re.S)
    x = re.sub(r"<emphasis[^>]*>(.*?)</emphasis>", r"**\1**", x, flags=re.S)
    x = re.sub(r"<link[^>]*url=\"([^\"]*)\"[^>]*>(.*?)</link>", r"\2 <\1>", x, flags=re.S)
    x = re.sub(r"<[^>]+>", " ", x)
    return re.sub(r"\s+", " ", x).strip()


def plain(x):
    x = sup_sub(x)
    x = re.sub(r'<emphasis[^>]*effect="italics"[^>]*>(.*?)</emphasis>', r"*\1*", x, flags=re.S)
    x = re.sub(r"<[^>]+>", "", x)
    return re.sub(r"\s+", " ", x).strip()


def section(s, cls):
    """The <section class="cls"> … </section> run, or ''. End-matter sections
    do not nest, so the first </section> after the opening tag closes it."""
    i = s.find(f'class="{cls}"')
    if i < 0:
        return ""
    i = s.rfind("<section", 0, i)
    j = s.find("</section>", i)
    return s[i:j]


def glossary_entries(s):
    """[(term, meaning)] in source order from the module's own <glossary>."""
    g = re.search(r"<glossary>(.*?)</glossary>", s, re.S)
    if not g:
        return []
    out = []
    for d in re.finditer(r"<definition[^>]*>(.*?)</definition>", g.group(1), re.S):
        t = re.search(r"<term[^>]*>(.*?)</term>", d.group(1), re.S)
        m = re.search(r"<meaning[^>]*>(.*?)</meaning>", d.group(1), re.S)
        if t and m:
            out.append((plain(t.group(1)), plain(m.group(1))))
    return out


def body_terms(s):
    """Class-less body <term>s in order, excluding the <glossary> block."""
    body = re.sub(r"<glossary>.*?</glossary>", "", s, flags=re.S)
    out = []
    for mt in re.finditer(r"<term([^>]*)>(.*?)</term>", body, re.S):
        if "no-emphasis" in mt.group(1):
            continue
        out.append((plain(mt.group(2)), mt.start(), mt.end()))
    return out, body


def norm(t):
    return t.lower().translate(PRIMES).replace("*", "").strip()


def key_variants(t):
    l = norm(t)
    out = {l, l.replace("-", " "), l.replace(" ", "-")}
    bare = re.sub(r"\s*\([^)]*\)", "", l).strip()
    out.add(bare)
    for base in list(out):
        if base.endswith("ies"):
            out.add(base[:-3] + "y")
        if base.endswith("es"):
            out.add(base[:-2])
        if base.endswith("s"):
            out.add(base[:-1])
        out.add(base + "s")
        out.add(base + "es")
    return out


# ---------------------------------------------------------------- keys


def cmd_keys(mids):
    for m in mids:
        s = read_module(m)
        title = re.search(r"<md:title>(.*?)</md:title>", s, re.S)
        print("#" * 70)
        print("# MODULE", m, title.group(1) if title else "?")
        print("\n## OBJECTIVES (from <md:abstract>)")
        ab = re.search(r"<md:abstract>(.*?)</md:abstract>", s, re.S)
        for o in re.findall(r"<item[^>]*>(.*?)</item>", ab.group(1) if ab else "", re.S):
            print(" -", txt(o))
        print("\n## DEFINED TERMS (body order, class-less <term> only; the KEY TERMS block comes from the <glossary>, see `terms`)")
        terms, body = body_terms(s)
        for t, a, b in terms:
            ctx = body[a : b + 320]
            print(" *", t, "  || CONTEXT:", txt(ctx)[:300])
        print("\n## GLOSSARY (source order — this IS the ## Key terms block)")
        for t, d in glossary_entries(s):
            print(f" - **{t}** — {d}")
        if not glossary_entries(s):
            print(" (module has NO <glossary> — no ## Key terms block; disclose in the footer)")
        print("\n## SUMMARY")
        for p in re.findall(r"<para[^>]*>(.*?)</para>", section(s, "summary"), re.S):
            print(" -", txt(p))
        print("\n## FEATURE BOXES (class | title | closing question if any)")
        for n in re.finditer(r'<note[^>]*class="([^"]*)"[^>]*>(.*?)</note>', s, re.S):
            cls, b = n.group(1), n.group(2)
            if cls in {"chapter-objectives"}:
                continue
            t = re.search(r"<title>(.*?)</title>", b, re.S)
            body_txt = txt(b)
            qs = [q.strip() + "?" for q in body_txt.split("?")[:-1]]
            last_q = qs[-1].split(". ")[-1] if qs else "(no question)"
            links = re.findall(r'url="([^"]*)"', b)
            print(f" [{cls}] {txt(t.group(1)) if t else '(untitled)'} | links: {', '.join(links) or 'none'}")
            print(f"     question: {last_q}")
        for cls, label in EXERCISE_SECTIONS:
            seg = section(s, cls)
            if not seg:
                continue
            print(f"\n## {label}")
            for e in re.finditer(r'<exercise id="([^"]+)"[^>]*>(.*?)</exercise>', seg, re.S):
                eid, b = e.group(1), e.group(2)
                prob = re.search(r"<problem[^>]*>(.*?)</problem>", b, re.S)
                prob = prob.group(1) if prob else b
                stem = txt(re.sub(r"<list.*?</list>", "", prob, flags=re.S))
                opts = [txt(o) for o in re.findall(r"<item[^>]*>(.*?)</item>", prob, re.S)]
                media = " [MEDIA]" if re.search(r"<media\b", prob) else ""
                sol = re.search(r"<solution[^>]*>(.*?)</solution>", b, re.S)
                print(f" [{eid}]{media} {stem}")
                for i, o in enumerate(opts):
                    print(f"     {chr(65 + i)}. {o}")
                print("     KEY:", txt(sol.group(1)) if sol else "(none — source prints no key)")
                if cls == "interactive-exercise":
                    print("     MODULE-FIXES-ANSWER: (parent decides in run facts Part C — quote the sentence or 'no')")
        print("\n## TABLES")
        for t in re.finditer(r'<table[^>]*summary="([^"]*)"[^>]*>(.*?)</table>', s, re.S):
            spans = len(re.findall(r"namest=|morerows=", t.group(2)))
            imgs = len(re.findall(r"<image\b", t.group(2)))
            print(f" - {t.group(1)} (spanning cells: {spans}; images in cells: {imgs})")
        print("\n## FIGURES")
        for f in re.finditer(r'<figure[^>]*id="([^"]*)"[^>]*>(.*?)</figure>', s, re.S):
            fid, b = f.group(1), f.group(2)
            srcs = re.findall(r'src="([^"]+)"', b)
            alt = re.search(r'alt="([^"]*)"', b, re.S)
            cap = re.search(r"<caption[^>]*>(.*?)</caption>", b, re.S)
            stems = [os.path.splitext(os.path.basename(x))[0] for x in srcs] or ["?"]
            print(f" [{fid}] stem={', '.join(stems)}{' (subfigures)' if '<subfigure' in b else ''}")
            print("   ALT:", re.sub(r"\s+", " ", alt.group(1)) if alt else None)
            print("   CAP:", txt(cap.group(1)) if cap else None)
        refs = section(s, "references")
        print("\n## REFERENCES:", "none" if not refs else f"{len(re.findall(r'<para', refs))} paragraph(s) — the page carries a ## References list after ## Summary (playbook rule 3)")


# --------------------------------------------------------------- terms


def cmd_terms(mid):
    s = read_module(mid)
    entries = glossary_entries(s)
    terms, _ = body_terms(s)
    print(f"# Key terms of {mid}: the module <glossary>, in SOURCE order\n")
    if not entries:
        print("(module has NO <glossary> — no ## Key terms block; say so in the footer)")
        return
    body_keys = set()
    for t, _, _ in terms:
        body_keys |= key_variants(t)
    for t, d in entries:
        flag = "" if key_variants(t) & body_keys else "   <!-- glossary term never bolded as a body <term>: check the body; bold its defining occurrence if the module prints it -->"
        print(f"- **{t}** — {d}.{flag}")
    gl_keys = set()
    for t, _ in entries:
        gl_keys |= key_variants(t)
    seen = set()
    missing = []
    for t, _, _ in terms:
        k = norm(t)
        if k in seen:
            continue
        seen.add(k)
        if not (key_variants(t) & gl_keys):
            missing.append(t)
    print(f"\nTOTAL glossary definitions (bullets expected): {len(entries)}; distinct body <term>s: {len(seen)}")
    if missing:
        print("Body <term>s with NO glossary entry (bold in the body, NOT a Key-terms bullet — the glossary is the list):")
        for t in missing:
            print(f"  - {t}")


def cmd_glossary(mid, queries):
    entries = glossary_entries(read_module(mid))
    for q in queries:
        hit = [(t, d) for t, d in entries if key_variants(t) & key_variants(q)]
        print(f"--- {q}:", f"{hit[0][0]} — {hit[0][1]}" if hit else "NOT FOUND in this module's glossary")


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
        if len(args) < 2:
            sys.exit("glossary takes a module id then one or more terms")
        cmd_glossary(args[0], args[1:])


if __name__ == "__main__":
    main(sys.argv[1:])
