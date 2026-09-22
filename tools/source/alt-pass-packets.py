"""usage: alt-pass-packets.py <book> <out-dir>  — one packet-NN.md per chapter for the figure-alt pass (docs/briefs/alt-pass/)."""
import json, re, os, glob, sys
if len(sys.argv)!=3: sys.exit(__doc__)
BOOK, OUT = sys.argv[1], sys.argv[2]
ROOT=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.makedirs(OUT, exist_ok=True)
manifest=json.load(open(f'{ROOT}/data/media/{BOOK}.json'))
man=manifest['figures']
CHECKOUT={'biology':'osbooks-biology-bundle','microbiology':'osbooks-microbiology'}.get(BOOK, manifest.get('bundle', BOOK))
smap=json.load(open(f'{ROOT}/data/openstax/source-map.json'))
sec={s['localPath']:s['moduleId'] for s in smap['sections'] if s.get('book')==BOOK}
base=f'{ROOT}/content/life-health-sciences/{BOOK}'
chapters=sorted(d for d in os.listdir(base) if re.match(r'\d\d-',d))
totals=[]
for ch in chapters:
    n=ch[:2]
    pages=sorted(glob.glob(f'{base}/{ch}/*.md'))
    lines=[]
    for p in pages:
        rel=os.path.relpath(p,ROOT)
        for i,l in enumerate(open(p),1):
            for m in re.finditer(r'{{<\s*mediafigure\s+(.*?)>}}',l):
                attrs=m.group(1)
                src=re.search(r'src="'+BOOK+r'/([^"]+)"',attrs)
                if not src: print('NO SRC',rel,i,file=sys.stderr); continue
                stem=src.group(1)
                f=man.get(stem)
                if not f: print('NOT IN MANIFEST',rel,i,stem,file=sys.stderr); continue
                big=max(f['variants'],key=lambda v:v['width'])['file']
                mod=f['module']
                pm=sec.get(rel)
                if pm and pm!=mod: mod=f'{mod} (page module {pm})'
                lines.append(f'- `{rel}:{i}` — image `static/media/{BOOK}/{big}` — module {mod} — stem `{stem}`')
    with open(f'{OUT}/packet-{n}.md','w') as w:
        w.write(f'# Chapter {n} figure packet — {len(lines)} mediafigures on {len(pages)} pages\n\n')
        w.write(f'One line per figure: page path and line of the `{{{{< mediafigure ... >}}}}` opening tag, the vendored image to open, the OpenStax module id (the pinned CNXML is `sources/openstax/{CHECKOUT}/modules/<module>/index.cnxml`; the manifest `data/media/{BOOK}.json` `figures[<stem>].alt` also holds the source alt), and the manifest stem.\n\n')
        w.write('\n'.join(lines)+'\n')
    totals.append((n,len(pages),len(lines)))
for t in totals: print(*t)
print('total',sum(t[2] for t in totals))
