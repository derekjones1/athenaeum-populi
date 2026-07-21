/**
 * Mechanical authoring lints, shared by verify-section.mjs (per section)
 * and check-math.mjs (repo-wide, part of `npm test`).
 *
 * These encode formerly prose-only playbook rules so agents don't have to
 * memorize them — author, run the verifier, fix what it reports. Each rule
 * exists because the bug it catches shipped at least once.
 *
 * lintSource(src, filename?) → { errors: string[], warnings: string[] }
 * Messages include a line number and say what to do instead. Pass the
 * filename to enable page-type rules (e.g. no hints on knowledge checks).
 */

const lineOf = (src, index) => src.slice(0, index).split('\n').length

// Index of the first literal "{" in a prop string that sits OUTSIDE any
// $…$ math run, or -1 if none. Toggling inMath on each unescaped $ mirrors
// how MDX/remark-math splits inline math; a { while inMath is fine (it's
// LaTeX), a { while !inMath is an MDX JS-expression trap.
const braceOutsideMath = (s) => {
  let inMath = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '\\') { i++; continue } // skip escaped char (\$ , \{ , …)
    if (c === '$') { inMath = !inMath; continue }
    if (c === '{' && !inMath) return i
  }
  return -1
}

// Skip a balanced {…} JSX expression starting at src[i] === '{', honoring
// string/template literals so a ${…} or "}" inside doesn't end it early.
// Returns the index just past the closing }.
const skipJsxExpr = (src, i) => {
  let depth = 0, str = null
  for (; i < src.length; i++) {
    const c = src[i]
    if (str) {
      if (c === '\\') i++
      else if (c === str) str = null
      else if (str === '`' && c === '$' && src[i + 1] === '{') { i++; depth++ }
    } else if (c === '"' || c === "'" || c === '`') str = c
    else if (c === '{') depth++
    else if (c === '}' && --depth === 0) return i + 1
  }
  return src.length
}

// Indices of every literal "{" sitting in MDX *prose* — outside math
// ($…$ / $$…$$), code (fences / inline), JSX tags (incl. their {…} attr
// expressions), {/* comments */}, svg-children JSX expressions, and
// import/export lines. MDX parses such a brace as a JS expression: prose
// like "and {lrcl} arrays" compiles to the variable `lrcl` and the build
// dies with "ReferenceError: lrcl is not defined" (the IA §4.1
// attribution-note bug). Mirrors remark-math where it matters: an inline
// $ with no closing $ in the same paragraph stays literal text (bare
// money dollars), so the scan for a closing $ stops at a blank line.
const proseBraceIndices = (src) => {
  const out = []
  const n = src.length
  let i = 0
  let atLineStart = true
  let svgDepth = 0
  while (i < n) {
    const c = src[i]
    if (atLineStart && /^(import|export)\s/.test(src.slice(i, i + 8))) {
      while (i < n && src[i] !== '\n') i++
      continue
    }
    atLineStart = c === '\n'
    if (c === '\\') { i += 2; continue }
    if (src.startsWith('```', i)) { // code fence
      const end = src.indexOf('```', i + 3)
      i = end === -1 ? n : end + 3
      continue
    }
    if (c === '`') { // inline code
      const end = src.indexOf('`', i + 1)
      i = end === -1 ? n : end + 1
      continue
    }
    if (c === '$') {
      if (src[i + 1] === '$') { // display math
        const end = src.indexOf('$$', i + 2)
        i = end === -1 ? n : end + 2
        continue
      }
      // inline math — may wrap lines, but never crosses a blank line
      let j = i + 1, closed = false
      while (j < n) {
        if (src[j] === '\\') { j += 2; continue }
        if (src[j] === '$') { closed = true; break }
        if (src[j] === '\n' && /^\s*\n/.test(src.slice(j + 1))) break
        j++
      }
      i = closed ? j + 1 : i + 1 // unpaired $ (money) is literal text
      continue
    }
    if (c === '<' && /[A-Za-z/!]/.test(src[i + 1] || '')) { // tag
      const isClose = src[i + 1] === '/'
      const name = (src.slice(i + 1 + isClose).match(/^[\w.-]+/) || [''])[0]
      let j = i + 1, depth = 0, str = null
      while (j < n) {
        const d = src[j]
        if (str) {
          if (d === '\\' && str === '`') j++
          else if (d === str) str = null
        } else if (d === '"' || d === "'" || d === '`') str = d
        else if (d === '{') { j = skipJsxExpr(src, j) - 1 }
        else if (d === '>' && depth === 0) break
        j++
      }
      const selfClosing = src[j - 1] === '/'
      if (name === 'svg') svgDepth = Math.max(0, svgDepth + (isClose ? -1 : selfClosing ? 0 : 1))
      i = j + 1
      continue
    }
    if (c === '{') {
      if (src.startsWith('{/*', i)) { // jsx comment
        const end = src.indexOf('*/}', i)
        i = end === -1 ? n : end + 3
        continue
      }
      if (svgDepth > 0) { i = skipJsxExpr(src, i); continue } // figure JSX
      out.push(i)
    }
    i++
  }
  return out
}

export function lintSource(src, filename = '') {
  const errors = []
  const warnings = []
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`)
  const wrn = (i, msg) => warnings.push(`L${lineOf(src, i)}: ${msg}`)

  // Literal { in prose = MDX JS expression = build-time ReferenceError.
  // See proseBraceIndices above.
  for (const i of proseBraceIndices(src)) {
    err(i, `literal "{" in prose (${JSON.stringify(src.slice(i, i + 30))}…) — MDX parses it as a JS expression and the build dies with a ReferenceError; wrap it in backticks, escape as \\{, or reword`)
  }

  // \dfrac forces displaystyle sizing and crowds adjacent lines/rows
  // ("crowned fractions"), inline AND inside $$ arrays. Always \tfrac;
  // nested (complex) fractions use \cfrac in a display block.
  for (const m of src.matchAll(/\\dfrac/g)) {
    err(m.index, '\\dfrac is banned — use \\tfrac (or \\cfrac for nested display fractions)')
  }

  // Plain \frac inside a $$ array renders at full displaystyle too and
  // reintroduces the same crowding; only \tfrac stays compact in arrays.
  for (const m of src.matchAll(/\\begin\{array\}[\s\S]*?\\end\{array\}/g)) {
    const inner = m[0].match(/(?<![tcd])\\frac/)
    if (inner) err(m.index + inner.index, '\\frac inside \\begin{array} — use \\tfrac so rows stay compact')
  }

  // KaTeX does not support the LaTeX array-package @{...} column separator;
  // it throws at render time. Use plain column specs ({rl}, {rrl}) and let
  // column spacing be what it is.
  for (const m of src.matchAll(/\\begin\{array\}\{[^}]*@[^}]*\}/g)) {
    err(m.index, 'array column spec uses @{…} — KaTeX does not support it; use a plain spec like {rl} or {rrl}')
  }

  // A single right-aligned array column mixing numbers with differing
  // \text labels right-aligns each row as one blob, so the numbers drift
  // out of alignment (the "Number formatting alignment" bug: Sandwich/
  // Water/Tax/Total labels pushed the dollar amounts apart). Numbers go in
  // their own right column, labels in a left column: {rl}. Rows whose
  // trailing labels are identical (e.g. every row ends "ounces") still
  // align and are exempt.
  for (const m of src.matchAll(/\\begin\{array\}\{r\}([\s\S]*?)\\end\{array\}/g)) {
    const rows = m[1].split(/\\\\(?:\[[^\]]*\])?/).map((r) => r.trim()).filter((r) => r && r !== '\\hline')
    const trailing = rows
      .map((r) => { const t = [...r.matchAll(/\\text\{([^}]*)\}/g)]; return t.length ? t[t.length - 1][1].trim() : null })
      .filter((l) => l !== null)
    if (trailing.length >= 2 && new Set(trailing).size > 1) {
      err(m.index, `single {r} column mixes numbers with differing \\text labels (${JSON.stringify(trailing[0])}, ${JSON.stringify(trailing.find((l) => l !== trailing[0]))}) — split into a {rl} array so the numbers align`)
    }
  }

  // Annotated worked-example step arrays ({lrcl}: explanation & LHS &=& RHS)
  // read cramped with bare \\ between steps — each step should breathe.
  // Every inter-row separator must be \\[Npt] with N ≥ 4 (tall-fraction
  // rows use \\[10pt], which passes). A trailing \\ before \end{array} is
  // not a separator and is exempt.
  for (const m of src.matchAll(/\\begin\{array\}\{lrcl\}([\s\S]*?)\\end\{array\}/g)) {
    for (const s of m[1].matchAll(/\\\\(\[([\d.]+)pt\])?/g)) {
      if (!m[1].slice(s.index + s[0].length).trim()) continue // trailing \\
      if (!s[1] || +s[2] < 4) {
        err(m.index + s.index, `{lrcl} step array row separator ${JSON.stringify(s[0])} — use \\\\[4pt] (or more) so steps have space between them`)
      }
    }
  }

  // The opening equation in a worked example must use the same relation
  // column as the steps below it. Putting the whole equation in column 4
  // (`&&& LHS=RHS`) shifts its equals sign visibly to the right.
  for (const m of src.matchAll(/\\begin\{array\}\{lrcl\}([\s\S]*?)\\end\{array\}/g)) {
    const firstRow = m[1].split(/\\\\(?:\[[^\]]*\])?/)[0].trim()
    if (firstRow.includes('&&&') && firstRow.includes('=')) {
      err(m.index, `{lrcl} opening equation is entirely in column 4 — split it as & LHS &=& RHS so its equals sign aligns with the following steps`)
    }
  }

  // Expression-chain step arrays (rows with no relation) must keep every
  // expression in the SAME column. The recurring bug: the first row lands
  // in column 2 (`& expr &&`, right-aligned) while later rows use column 4
  // (`&& & expr`, left-aligned), so step 1 sits visibly left of the rest
  // (the EA §8.2 "Write as a fraction over 1" bug). All rows go in the
  // last column: `\text{…} &&& expr`.
  for (const m of src.matchAll(/\\begin\{array\}\{lrcl\}([\s\S]*?)\\end\{array\}/g)) {
    const rows = m[1].split(/\\\\(\[[^\]]*\])?/).map((r) => (r || '').trim()).filter((r) => r && !/^\[[^\]]*\]$/.test(r))
    const cols = (r) => r.split(/(?<!\\)&/).map((c) => c.trim())
    let col2Only = 0, col4Only = 0, firstCol2 = null
    for (const r of rows) {
      const c = cols(r)
      if (c[1] && !c[2] && !c[3]) { col2Only++; firstCol2 ??= r }
      else if (!c[1] && !c[2] && c[3]) col4Only++
    }
    if (col2Only && col4Only) {
      err(m.index, `{lrcl} array mixes expression columns — row ${JSON.stringify(firstCol2.slice(0, 40))} puts its expression in column 2 while other rows use column 4, so the steps misalign; write every relation-less row as \\text{…} &&& expr`)
    }
  }

  // Unicode superscript minus can't parse as an exponent anywhere.
  for (const m of src.matchAll(/⁻/g)) {
    err(m.index, 'unicode superscript minus — write a braced exponent like 10^{-3}')
  }

  // <br/>-joined math spans in a table cell wrap mid-equation and misalign
  // the = signs. One $\begin{aligned}…\end{aligned}$ span per cell.
  const lines = src.split('\n')
  let offset = 0
  for (const line of lines) {
    if (line.includes('|') && /<br\s*\/?>/.test(line) && /\$[^$]/.test(line)) {
      err(offset, 'table cell joins math spans with <br/> — use one $\\begin{aligned}…\\end{aligned}$ span')
    }
    offset += line.length + 1
  }

  // Hotlinked images: figures must be recreated locally (license + dark
  // mode + accessibility), never embedded from openstax or elsewhere.
  for (const m of src.matchAll(/!\[[^\]]*\]\(\s*https?:|<img[^>]*src="https?:/g)) {
    err(m.index, 'hotlinked image — recreate the figure (markdown table / inline SVG) or describe it in prose')
  }

  // Hand-written coordinate-grid SVG: all coordinate-plane figures go
  // through <Graph /> (lib/graph-core.mjs owns the geometry — mapping,
  // clipping, shading, label placement). A block of faint gridlines is
  // the signature of a hand-drawn grid.
  for (const m of src.matchAll(/<svg[\s\S]*?<\/svg>/g)) {
    const gridLines = (m[0].match(/opacity="0\.2"/g) || []).length
    if (gridLines >= 6) {
      err(m.index, 'hand-written coordinate-grid SVG — use <Graph /> (see playbook "Coordinate-plane graphs" and lib/graph-core.mjs)')
    }
  }

  // Numeric long division must use the gutter-phantom layout: every row
  // except the divisor row starts with \phantom{<divisor>\,\overline{\smash{)}\,}}
  // so quotient/subtraction rows sit past the "divisor )" prefix. Plain
  // right-alignment misplaces digits once the quotient grows a decimal tail
  // (the "Long division formatting" bug) OR once there are bring-down
  // subtraction steps (the 875÷25 "Divide Polynomials" bug). Applies to
  // decimal dividends and to whole-number division with \underline
  // subtraction rows. Ladder/stacked division (no \underline), remainder
  // stacks using \hline only, and polynomial division (per-term trailing
  // phantoms) are exempt. Golden examples: prealgebra §5.3
  // 03-decimals-and-fractions.mdx, EA §6.6 (875÷25).
  for (const m of src.matchAll(/\\begin\{array\}[\s\S]*?\\end\{array\}/g)) {
    if (!m[0].includes('\\smash{)}')) continue
    const rows = m[0]
      .replace(/\\begin\{array\}\{[^}]*\}|\\end\{array\}/g, '')
      .split(/\\\\(?:\[[^\]]*\])?/)
      .map((r) => r.trim())
      .filter(Boolean)
    const divisorRow = rows.find((r) => r.includes('\\smash{)}')) || ''
    const dividend = divisorRow.split('\\smash{)}')[1] || ''
    const numeric = !/[a-zA-Z]/.test(dividend.replace(/\\[a-zA-Z]+/g, ''))
    if (!numeric) continue // polynomial division aligns per-term instead
    if (!/\d\.\d/.test(dividend) && !m[0].includes('\\underline')) continue
    for (const r of rows) {
      if (r.includes('\\smash{)}') || r.startsWith('\\phantom{')) continue
      err(m.index, `numeric long-division row ${JSON.stringify(r.slice(0, 30))} lacks the leading \\phantom{…\\overline{\\smash{)}\\,}} gutter — see prealgebra §5.3`)
    }
  }

  // --- SVG figure rules ----------------------------------------------------
  for (const m of src.matchAll(/<svg[\s\S]*?<\/svg>/g)) {
    const svg = m[0]

    // A double-headed line reusing one marker for both ends with
    // orient="auto" renders the START arrowhead pointing forward (into the
    // line) in browsers. Needs orient="auto-start-reverse" or a separate
    // reversed start marker. cairosvg previews auto-correct this, so the
    // bug hides from rasterized QA — hence the lint.
    for (const el of svg.matchAll(/<(?:line|path|polyline)\b[^>]*marker-?[sS]tart="url\(#([^)]+)\)"[^>]*>/g)) {
      const id = el[1]
      if (!new RegExp(`marker-?[eE]nd="url\\(#${id}\\)"`).test(el[0])) continue
      const mk = svg.match(new RegExp(`<marker[^>]*id="${id}"[^>]*>`))
      if (mk && /orient="auto"/.test(mk[0])) {
        err(m.index, `double-headed line reuses marker #${id} with orient="auto" — the start arrowhead points inward in browsers; use orient="auto-start-reverse" or a reversed start marker`)
      }
    }

    // Overlapping counter/node circles (the "SVG overlapping 2's" and
    // counter-figure bugs). Literal circles only (r ≥ 8 — counters and
    // tree nodes, not point dots); circles inside {….map(…)} JSX aren't
    // visible to this check, so keep spacing generous there too
    // (playbook: ≥ 2r + 8px between centres).
    const circles = [...svg.matchAll(/<circle\b[^>]*>/g)]
      .map((c) => {
        const attr = (n) => { const a = c[0].match(new RegExp(`${n}="([-\\d.]+)"`)); return a ? +a[1] : NaN }
        return { cx: attr('cx'), cy: attr('cy'), r: attr('r'), i: c.index }
      })
      .filter((c) => !isNaN(c.cx) && !isNaN(c.cy) && c.r >= 8)
    for (let i = 0; i < circles.length; i++) {
      for (let j = i + 1; j < circles.length; j++) {
        const a = circles[i], b = circles[j]
        const d = Math.hypot(a.cx - b.cx, a.cy - b.cy)
        if (d > 0.5 && d < a.r + b.r) {
          err(m.index + a.i, `circles at (${a.cx},${a.cy}) r=${a.r} and (${b.cx},${b.cy}) r=${b.r} overlap (centres ${d.toFixed(1)}px apart) — respace to ≥ 2r + 8px pitch or widen the viewBox`)
        }
      }
    }

    // Text extending past the viewBox gets clipped (the "(0, 5)" /
    // "rise −2" left-edge bugs). Width is estimated conservatively
    // (0.5em/char, 4px tolerance) so a hit means real clipping; near-edge
    // labels still deserve a rendered preview.
    const vb = svg.match(/viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/)
    if (vb) {
      const [, x0, , w] = vb.map(Number)
      for (const t of svg.matchAll(/<text([^>]*)>([^<]*)<\/text>/g)) {
        const a = t[1], str = t[2].trim()
        const gx = a.match(/x="([-\d.]+)"/)
        if (!str || !gx) continue
        const size = +((a.match(/font-?[sS]ize="?([\d.]+)/) || [])[1] || 14)
        const anchor = ((a.match(/text-?[aA]nchor="(\w+)"/) || [])[1]) || 'start'
        const wEst = str.length * size * 0.5
        const left = anchor === 'middle' ? +gx[1] - wEst / 2 : anchor === 'end' ? +gx[1] - wEst : +gx[1]
        const right = left + wEst
        if (left < x0 - 4 || right > x0 + w + 4) {
          wrn(m.index + t.index, `text ${JSON.stringify(str.slice(0, 25))} extends past the viewBox (est. x ${left.toFixed(0)}–${right.toFixed(0)}, box ${x0}–${x0 + w}) — it will clip; widen the viewBox or move the label`)
        }
      }
    }
  }

  // --- FillIn attribute rules -------------------------------------------
  for (const m of src.matchAll(/<FillIn\b([\s\S]*?)\/>/g)) {
    const attrs = {}
    for (const a of m[1].matchAll(/(\w+)=(?:"([^"]*)"|\{`([^`]*)`\})/g)) attrs[a[1]] = a[2] ?? a[3]
    const where = `FillIn (${(attrs.question || '?').slice(0, 40)}…)`

    // Unbraced negative exponent: the Compute Engine parses 10^-3 as a
    // spurious operator, so a MathLive student typing 10^{-3} grades
    // incorrect. Braced-only in answers; flag displays too.
    if (attrs.answer && /\^-/.test(attrs.answer)) {
      err(m.index, `${where}: answer has unbraced negative exponent — write 10^{-3}, never 10^-3`)
    }
    // (Only inside $…$ runs — legacy plain-text props display "10^-2"
    // literally, which is old style but not a rendering bug.)
    for (const p of ['question', 'hint', 'answerDisplay']) {
      const runs = [...(attrs[p] || '').matchAll(/\$([^$]+)\$/g)]
      if (runs.some((r) => /\^-/.test(r[1]))) {
        wrn(m.index, `${where}: ${p} has unbraced negative exponent inside $…$ — write 10^{-3}`)
      }
    }

    // A literal { outside any $…$ run in a prop is read by MDX as a JS
    // expression, not text. Set-notation like {$3x+y=0$, $x+2y=-5$} both
    // errors ("x is not defined") AND derails the parser so a later
    // \begin{array}{lrcl} misreads as {lrcl} → "ReferenceError: lrcl is
    // not defined" at build time. Put set braces inside the math as
    // \{…\}: $\{3x+y=0,\ x+2y=-5\}$. (IA §4.1 two-variable-systems bug.)
    for (const p of ['question', 'hint', 'answerDisplay']) {
      const idx = braceOutsideMath(attrs[p] || '')
      if (idx >= 0) {
        err(m.index, `${where}: ${p} has a literal "{" outside $…$ — MDX parses it as a JS expression (breaks the build). Move set braces inside the math as \\{…\\}`)
      }
    }

    // An answer that is itself a true/false statement (25\neq-12) can never
    // grade: the engine compares the student's expression to a boolean, and
    // no math-field input matches. Ask for a value or use MultipleChoice.
    // (EA §2.4 shipped two of these.)
    if (/\\ne(?:q)?\b/.test(attrs.answer || '')) {
      err(m.index, `${where}: answer is a true/false statement (contains \\neq) — ungradeable; ask for a value or use MultipleChoice`)
    }

    // Multi-part prompts folded into one exercise can only check one part.
    const q = attrs.question || ''
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) {
      wrn(m.index, `${where}: question looks multi-part ("(a)…(b)") — split into one exercise per part`)
    }
    if (/:\s*\([a-e]\)\s/.test(q)) {
      wrn(m.index, `${where}: stray part letter in a standalone question — strip the "(a)"`)
    }
  }

  // --- Knowledge Check page rules -----------------------------------------
  // A Knowledge Check is a test — hints defeat it (the one deliberate
  // departure from section-page FillIn patterns; see the KC playbook).
  if (/knowledge-check-\d+-\d+\.mdx$/.test(filename)) {
    for (const m of src.matchAll(/\bhint=/g)) {
      err(m.index, 'hint on a Knowledge Check — quizzes never have hints; delete the attribute')
    }
  }

  // --- MultipleChoice attribute rules -------------------------------------
  const graphAnswerIndexes = [] // [{ index, n }] for the spread check below
  for (const m of src.matchAll(/<MultipleChoice\b([\s\S]*?)\/>/g)) {
    const ans = m[1].match(/answer="([^"]*)"/)?.[1]
    const opts = [...(m[1].match(/options=\{\[([\s\S]*?)\]\}/)?.[1] || '').matchAll(/"([^"]*)"/g)].map((x) => x[1])
    // Grading is exact string comparison — answer must be one of options.
    if (ans != null && opts.length > 0 && !opts.includes(ans)) {
      err(m.index, `MultipleChoice: answer ${JSON.stringify(ans.slice(0, 40))} is not one of the options (exact string match required)`)
    }
    const q = m[1].match(/question="([^"]*)"/)?.[1] || ''
    // Literal { outside math in a string prop = MDX JS expression (see the
    // FillIn rule above); breaks the build. options={[…]} is a real JSX
    // expression and is matched separately, so only scan string props here.
    for (const [p, val] of [['question', q], ['hint', m[1].match(/hint="([^"]*)"/)?.[1] || '']]) {
      if (braceOutsideMath(val) >= 0) {
        err(m.index, `MultipleChoice (${q.slice(0, 40)}…): ${p} has a literal "{" outside $…$ — MDX parses it as a JS expression (breaks the build). Move set braces inside the math as \\{…\\}`)
      }
    }
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) {
      wrn(m.index, `MultipleChoice (${q.slice(0, 40)}…): question looks multi-part — split it`)
    }
    // Graph-option mode: graphOptions + answerIndex travel together, and
    // every spec needs an ariaLabel (it is the button's accessible name).
    if (/graphOptions=\{/.test(m[1])) {
      const idx = m[1].match(/answerIndex=\{(\d+)\}/)
      if (!idx) err(m.index, 'MultipleChoice: graphOptions without answerIndex={n} — nothing marks the correct graph')
      if (/answer="/.test(m[1]) || /\boptions=\{/.test(m[1])) {
        err(m.index, 'MultipleChoice: mixes graphOptions with options/answer — use one mode per exercise')
      }
      const specs = (m[1].match(/ariaLabel:/g) || []).length
      const braces = (m[1].match(/graphOptions=\{\[\s*\{/) || []).length
      if (braces && specs === 0) {
        err(m.index, 'MultipleChoice: graphOptions specs are missing ariaLabel — each graph needs a prose description (it is the accessible button name)')
      }
      if (idx && specs > 0 && Number(idx[1]) >= specs) {
        err(m.index, `MultipleChoice: answerIndex={${idx[1]}} but only ${specs} graph spec(s) found (0-based)`)
      }
      if (idx) graphAnswerIndexes.push({ index: m.index, n: Number(idx[1]) })
    }
  }
  // Position bias: if every graph MC in the file keys the same position,
  // students learn the pattern instead of the math.
  if (graphAnswerIndexes.length >= 2 && new Set(graphAnswerIndexes.map((x) => x.n)).size === 1) {
    wrn(graphAnswerIndexes[0].index, `all ${graphAnswerIndexes.length} graph MultipleChoice(s) in this file use answerIndex={${graphAnswerIndexes[0].n}} — vary the correct position`)
  }

  // --- GraphPlot attribute rules ------------------------------------------
  // Beyond presence checks, verify the LATTICE RULE mechanically for
  // numeric answers: points snap to integer intersections, so the answer
  // must be reachable from lattice points inside the visible range (two
  // per line; lattice vertex + one more for parabolas) or the exercise is
  // unsolvable. Answers with non-numeric parts are skipped (prose rule
  // still applies).
  const evalFrac = (s) => {
    const mm = String(s).trim().match(/^(-?\d+(?:\.\d+)?)(?:\s*\/\s*(-?\d+(?:\.\d+)?))?$/)
    return mm ? (mm[2] ? Number(mm[1]) / Number(mm[2]) : Number(mm[1])) : NaN
  }
  const isInt = (v) => Math.abs(v - Math.round(v)) < 1e-9
  /** balanced-brace slice of a JSX expression attr, e.g. answer={{…}} → "{…}" */
  const jsxExpr = (attrs, name) => {
    const i = attrs.indexOf(name + '={')
    if (i < 0) return null
    let d = 0, j = i + name.length + 1
    for (; j < attrs.length; j++) {
      if (attrs[j] === '{') d++
      else if (attrs[j] === '}') { d--; if (d === 0) break }
    }
    return attrs.slice(i + name.length + 2, j)
  }
  const keyNum = (expr, key) => {
    const mm = expr.match(new RegExp(`\\b${key}:\\s*([^,}\\]]+)`))
    return mm ? evalFrac(mm[1]) : undefined
  }
  for (const m of src.matchAll(/<GraphPlot\b([\s\S]*?)\/>/g)) {
    if (!/ariaLabel="/.test(m[1])) {
      err(m.index, 'GraphPlot: missing ariaLabel — describe the empty grid in prose')
    }
    if (!/answer=\{\{/.test(m[1])) {
      err(m.index, 'GraphPlot: answer must be an object expression — {{ slope, intercept }}, {{ y: b }}, {{ x: a }}, {{ system: […] }}, or {{ quadratic: {…} }}')
      continue
    }
    if (/\bsnap=/.test(m[1])) continue // custom snap → can't reason about the lattice
    const range = (k, dflt) => {
      const mm = m[1].match(new RegExp(`\\b${k}=\\{(-?\\d+)\\}`))
      return mm ? Number(mm[1]) : dflt
    }
    const [X0, X1, Y0, Y1] = [range('xMin', -7), range('xMax', 7), range('yMin', -7), range('yMax', 7)]
    const latticeOnLine = (slope, intercept) => {
      let n = 0
      for (let x = Math.ceil(X0); x <= X1; x++) {
        const y = slope * x + intercept
        if (isInt(y) && y >= Y0 - 1e-9 && y <= Y1 + 1e-9) n++
      }
      return n
    }
    const checkLine = (expr, label) => {
      const vx = keyNum(expr, 'x')
      const hy = keyNum(expr, 'y')
      if (vx !== undefined) {
        if (Number.isNaN(vx)) return
        if (!isInt(vx) || vx < X0 || vx > X1) err(m.index, `GraphPlot${label}: vertical line x = ${vx} has no lattice points in x ∈ [${X0}, ${X1}] — unsolvable`)
        return
      }
      const slope = hy !== undefined ? 0 : keyNum(expr, 'slope')
      const intercept = hy !== undefined ? hy : keyNum(expr, 'intercept')
      if (slope === undefined || intercept === undefined || Number.isNaN(slope) || Number.isNaN(intercept)) return
      if (latticeOnLine(slope, intercept) < 2) {
        err(m.index, `GraphPlot${label}: fewer than two lattice points on the line in range [${X0},${X1}]×[${Y0},${Y1}] — unsolvable; demote to a read-the-graph or match-the-graph exercise`)
      }
    }
    const ans = jsxExpr(m[1], 'answer') || ''
    const sys = ans.match(/system:\s*\[([\s\S]*)\]/)
    const quad = ans.match(/quadratic:\s*\{([^{}]*)\}/)
    if (sys) {
      const entries = [...sys[1].matchAll(/\{([^{}]*)\}/g)]
      entries.forEach((e, i) => checkLine(e[1], ` (system line ${i + 1})`))
    } else if (quad) {
      const a = keyNum(quad[1], 'a')
      const b = keyNum(quad[1], 'b') ?? 0
      const c = keyNum(quad[1], 'c') ?? 0
      if (![a, b, c].some((v) => v === undefined || Number.isNaN(v))) {
        const h = -b / (2 * a)
        const k = c - (b * b) / (4 * a)
        if (!isInt(h) || !isInt(k) || h < X0 || h > X1 || k < Y0 || k > Y1) {
          err(m.index, `GraphPlot: parabola vertex (${h}, ${k}) is not a lattice point inside the range — unsolvable`)
        } else {
          let others = 0
          for (let x = Math.ceil(X0); x <= X1; x++) {
            if (x === h) continue
            const y = a * (x - h) ** 2 + k
            if (isInt(y) && y >= Y0 - 1e-9 && y <= Y1 + 1e-9) others++
          }
          if (others < 1) err(m.index, 'GraphPlot: no lattice point on the parabola besides the vertex is inside the range — unsolvable')
        }
      }
    } else {
      checkLine(ans, '')
    }
  }

  return { errors, warnings }
}
