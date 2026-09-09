#!/usr/bin/env python3
"""Rebuild stale hashes in per-section author ledger results.

An author writes `<results dir>/<N.M>.json` for their page. When the parent
edits the page afterwards (a checker fix, a claim correction), the edited
items re-hash and the author's entries for them go stale. This maps each
stale entry onto the page's uncovered hash by set difference — exactly one
stale ↔ one uncovered per page, otherwise it stops and asks for a hand
mapping — and writes the fixed files to `<out dir>`.

  python3 tools/verify/rebuild-ledger-results.py \
      --results $SP/ledger-results --out $SP/ledger-results-fixed \
      --book life-health-sciences/microbiology

Then `npm run ledger:merge -- <out dir>` (author results BEFORE the solve
records, prune last — docs/briefs/microbiology/run.md).
"""
import argparse
import glob
import json
import os
import shutil
import subprocess
import sys


def page_for(section, paths):
    chapter, num = section.split(".")
    want_dir = f"/{int(chapter):02d}-"
    want_file = f"/{int(num):02d}-"
    hits = [p for p in paths if want_dir in p and os.path.basename(p).startswith(want_file[1:])]
    if len(hits) != 1:
        sys.exit(f"{section}: expected one page, found {hits}")
    return hits[0]


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--results", required=True, help="directory of <N.M>.json author results")
    ap.add_argument("--out", required=True, help="directory to write the fixed files to (recreated)")
    ap.add_argument("--book", required=True, help="content path prefix, e.g. life-health-sciences/microbiology")
    a = ap.parse_args()

    unverified = json.loads(
        subprocess.check_output(["node", "tools/verify/answer-ledger.mjs", "list", "content", "--unverified"])
    )
    ours = [e for e in unverified if f"content/{a.book}/" in e["path"]]
    by_page = {}
    for e in ours:
        by_page.setdefault(e["path"], []).append(e)

    shutil.rmtree(a.out, ignore_errors=True)
    os.makedirs(a.out)
    total = rebuilt = 0
    for f in sorted(glob.glob(f"{a.results}/*.json")):
        section = os.path.basename(f)[:-5]
        page = page_for(section, by_page.keys())
        current = {e["hash"] for e in by_page[page]}
        results = json.load(open(f, encoding="utf-8"))["results"]
        have = {x["hash"] for x in results}
        stale = [x for x in results if x["hash"] not in current]
        uncovered = [h for h in current if h not in have]
        if len(stale) != len(uncovered):
            sys.exit(f"{section}: {len(stale)} stale vs {len(uncovered)} uncovered — inspect by hand")
        if len(stale) > 1:
            sys.exit(f"{section}: {len(stale)} stale — map by hand")
        for x in stale:
            x["note"] = f'[hash rebuilt after a parent edit; was {x["hash"]}] ' + x["note"]
            x["hash"] = uncovered[0]
            rebuilt += 1
        total += len(results)
        with open(f"{a.out}/{section}.json", "w", encoding="utf-8") as fh:
            json.dump({"results": results}, fh, ensure_ascii=False, indent=1)
    print(f"{total} results written to {a.out}; {rebuilt} rebuilt")


if __name__ == "__main__":
    main()
