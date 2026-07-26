/**
 * Mechanical authoring lints — Hugo/shortcode edition.
 *
 * Mechanical checks for the repository's current Hugo Markdown and shortcode
 * authoring format. Math, table, exercise, and inline-SVG rules scan the raw
 * source before the production build.
 *
 * lintHugo(src, filename?) → { errors, warnings }  (zero dependencies)
 */

import { parseGraphPlotConfig } from '../assets/js/lib/graph-plot-config.mjs';

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

/** Return an exact HTML attribute value; do not confuse `role` with `data-role`. */
function htmlAttribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(
    `(?:^|\\s)${escapedName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i',
  ));
  return match ? (match[1] ?? match[2] ?? match[3]) : '';
}

function isEscaped(src, index) {
  let slashes = 0;
  while (index - slashes - 1 >= 0 && src[index - slashes - 1] === '\\') slashes += 1;
  return slashes % 2 === 1;
}

function closingBracket(src, start) {
  let depth = 1;
  for (let i = start; i < src.length; i += 1) {
    if (isEscaped(src, i)) continue;
    if (src[i] === '[') depth += 1;
    if (src[i] === ']' && --depth === 0) return i;
  }
  return -1;
}

const normalizeReferenceLabel = (label) => label
  .replace(/\\([!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-])/g, '$1')
  .trim()
  .replace(/\s+/g, ' ')
  .toLowerCase();

/** Mask fenced (including unclosed) and, optionally, indented CommonMark code blocks. */
function maskMarkdownCodeBlocks(src, blank, maskIndented = true) {
  let fence = null;
  let listIndent = null;
  return (src.match(/[^\n]*(?:\n|$)/g) || [])
    .filter((line) => line.length)
    .map((line) => {
      const body = line.endsWith('\n') ? line.slice(0, -1) : line;
      if (fence) {
        const closes = new RegExp(`^ {0,3}${fence.char}{${fence.length},}[ \\t]*$`).test(body);
        if (closes) fence = null;
        return blank(line);
      }
      const opening = body.match(/^ {0,3}(`{3,}|~{3,})/);
      if (opening) {
        fence = { char: opening[1][0], length: opening[1].length };
        return blank(line);
      }
      if (!maskIndented) return line;
      if (!body.trim()) return line;

      const indentation = body.match(/^[ \t]*/)[0]
        .replace(/\t/g, '    ')
        .length;
      const listItem = body.match(/^([ \t]*)([-+*]|\d{1,9}[.)])([ \t]+)/);
      if (listItem) {
        const prefix = listItem[1].replace(/\t/g, '    ').length;
        const spacing = listItem[3].replace(/\t/g, '    ').length;
        if (prefix <= 3 || (listIndent !== null && prefix >= listIndent)) {
          listIndent = prefix + listItem[2].length + spacing;
          return line;
        }
      }
      if (listIndent !== null && indentation >= listIndent) {
        return indentation >= listIndent + 4 ? blank(line) : line;
      }
      if (listIndent !== null && indentation < listIndent) listIndent = null;
      return indentation >= 4 ? blank(line) : line;
    })
    .join('');
}

function elementSuppliesName(block, id) {
  for (const match of block.matchAll(/<([A-Za-z][\w:.-]*)\b[^>]*>/g)) {
    if (htmlAttribute(match[0], 'id') !== id) continue;
    if (htmlAttribute(match[0], 'aria-label').trim()) return true;
    if (/\/\s*>$/.test(match[0])) return false;
    const end = block.indexOf(`</${match[1]}>`, match.index + match[0].length);
    if (end === -1) return false;
    const inner = block.slice(match.index + match[0].length, end);
    return Boolean(inner.replace(/<[^>]*>/g, '').trim());
  }
  return false;
}

function hasFileBackedCssImage(css) {
  if (/(?:-webkit-)?image-set\s*\(/i.test(css)) return true;
  for (const match of css.matchAll(/url\(\s*([^)]*?)\s*\)/gi)) {
    let target = match[1].trim();
    if ((target.startsWith('"') && target.endsWith('"')) || (target.startsWith("'") && target.endsWith("'"))) {
      target = target.slice(1, -1).trim();
    }
    if (target && !target.startsWith('#')) return true;
  }
  return false;
}

/** Parse the named params of a `{{< name … >}}` shortcode opening tag body. */
function shortcodeParams(body) {
  const p = {};
  for (const m of body.matchAll(/(\w+)="([^"]*)"/g)) p[m[1]] = m[2];
  return p;
}

/** Iterate every shortcode of `name`: yields { params, inner, index, end }. */
function* shortcodes(src, name, paired) {
  const openRe = new RegExp(`\\{\\{<\\s*${name}\\b([\\s\\S]*?)>\\}\\}`, 'g');
  let m;
  while ((m = openRe.exec(src)) !== null) {
    let inner = '';
    let end = openRe.lastIndex;
    if (paired) {
      const closeRe = new RegExp(`\\{\\{<\\s*/${name}\\s*>\\}\\}`, 'g');
      closeRe.lastIndex = openRe.lastIndex;
      const c = closeRe.exec(src);
      if (c) {
        inner = src.slice(openRe.lastIndex, c.index);
        end = closeRe.lastIndex;
        openRe.lastIndex = end;
      }
    }
    yield { params: shortcodeParams(m[1]), inner, index: m.index, end };
  }
}

export function lintHugo(src, filename = '') {
  const errors = [];
  const warnings = [];
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`);
  const wrn = (i, msg) => warnings.push(`L${lineOf(src, i)}: ${msg}`);
  // Hugo expands shortcode syntax even when Markdown presents it as code.
  // Documentation must use Hugo's comment-escaped form (`{{</* name */>}}`)
  // or the example can execute and fail the build.
  for (const code of src.matchAll(/(`+|~{3,})[\s\S]*?\1/g)) {
    const active = /\{\{[<%]\s*(?!\/\*)/.exec(code[0]);
    if (active) {
      err(code.index + active.index, 'active Hugo shortcode syntax inside a code example — use the comment-escaped `{{</* name */>}}` form');
    }
  }
  // Media examples in fenced/inline code and HTML comments are documentation,
  // not authored page content. Mask them without changing string offsets so
  // diagnostics still report the correct source line.
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  const uncommented = src.replace(/<!--[\s\S]*?-->/g, blank);
  const mediaSrc = maskMarkdownCodeBlocks(uncommented, blank)
    .replace(/(`+)([\s\S]*?)\1/g, blank)
    .replace(/<!--[\s\S]*?-->/g, blank);
  // Raw HTML remains active inside <pre>/<code>. Mask Markdown fences and
  // spans, but retain indented tags for the HTML-specific checks below.
  const htmlMediaSrc = maskMarkdownCodeBlocks(uncommented, blank, false)
    .replace(/(`+)([\s\S]*?)\1/g, blank);
  const isKnowledgeCheck = /knowledge-check-\d+-\d+\.md$/.test(filename);
  const isRegularSection = /[/\\]content[/\\]math[/\\][^/\\]+[/\\]\d{2}-[^/\\]+[/\\]\d{2}-[^/\\]+\.md$/i
    .test(filename.replace(/^\.?[/\\]?/, '/'));

  // ---- Math / array rules --------------------------------------------------

  // \dfrac forces displaystyle sizing and crowds adjacent rows.
  for (const m of mediaSrc.matchAll(/\\dfrac/g)) {
    err(m.index, '\\dfrac is banned — use \\tfrac (or \\cfrac for nested display fractions)');
  }
  // plain \frac inside a $$ array renders full-height too.
  for (const m of src.matchAll(/\\begin\{array\}[\s\S]*?\\end\{array\}/g)) {
    const inner = m[0].match(/(?<![tcd])\\frac/);
    if (inner) err(m.index + inner.index, '\\frac inside \\begin{array} — use \\tfrac so rows stay compact');
  }
  // KaTeX rejects the array-package @{…} column separator.
  for (const m of src.matchAll(/\\begin\{array\}\{[^}]*@[^}]*\}/g)) {
    err(m.index, 'array column spec uses @{…} — KaTeX does not support it; use a plain spec like {rl} or {rrl}');
  }
  // {lrcl} step arrays need \\[4pt]+ between steps.
  for (const m of src.matchAll(/\\begin\{array\}\{lrcl\}([\s\S]*?)\\end\{array\}/g)) {
    for (const s of m[1].matchAll(/\\\\(\[([\d.]+)pt\])?/g)) {
      if (!m[1].slice(s.index + s[0].length).trim()) continue; // trailing \\
      if (!s[1] || +s[2] < 4) {
        err(m.index + s.index, `{lrcl} step array row separator ${JSON.stringify(s[0])} — use \\\\[4pt] (or more)`);
      }
    }
  }
  // Unicode superscript minus can't parse as an exponent.
  for (const m of src.matchAll(/⁻/g)) {
    err(m.index, 'unicode superscript minus — write a braced exponent like 10^{-3}');
  }
  // TeX discards ordinary source whitespace in math mode. Catch the
  // high-confidence prose joins that caused visible "Ifn" / "squareof"
  // regressions, while leaving compact operator and unit notation to visual
  // review. An explicit `\ ` prevents each pattern from matching.
  for (const m of mediaSrc.matchAll(/\\(text|textit|textbf)\{([^{}\n]*[A-Za-z0-9])\}[ \t]*\\(text|textit|textbf)\{([A-Za-z0-9][^{}\n]*)\}/g)) {
    const styledInitial = m[1] === 'textbf' && /^[A-Za-z]$/.test(m[2]) && /^[a-z]/.test(m[4]);
    const hyphenJoin = /-$/.test(m[2]);
    if (!styledInitial && !hyphenJoin) {
      err(m.index, 'adjacent TeX prose commands have no rendered space — add `\\ ` or put the space inside \\text{…}');
    }
  }
  for (const m of mediaSrc.matchAll(/\\(?:text|textit|textbf)\{(?:if|then|since|for|of|with|where|when|and|or)\}[ \t]*[A-Za-z0-9]/gi)) {
    err(m.index, 'TeX prose touches the following math atom — ordinary source spaces do not render; add `\\ ` or a space inside \\text{…}');
  }
  // <br/>-joined math spans in a table cell wrap mid-equation.
  {
    let offset = 0;
    for (const line of src.split('\n')) {
      if (line.includes('|') && /<br\s*\/?>/.test(line) && /\$[^$]/.test(line)) {
        err(offset, 'table cell joins math spans with <br/> — use one $\\begin{aligned}…\\end{aligned}$ span');
      }
      offset += line.length + 1;
    }
  }
  // File-backed images are not an authoring format. Textbook equation
  // screenshots are illegible in dark mode, do not scale like KaTeX, and
  // duplicate content that should remain semantic. Ban every Markdown/HTML
  // embedding form—not just one extension—so renaming a raster or wrapping it
  // in <picture>, an SVG <image>, or a Hugo figure shortcode cannot bypass the
  // rule. Accessible SVG markup embedded directly in the page remains valid.
  const imageMessage = 'file-backed image — recreate it with KaTeX, a Markdown table, prose, or an accessible inline SVG';
  const referenceLabels = new Set();
  for (const m of mediaSrc.matchAll(/^[ \t]{0,3}\[([^\]\n]+)\]:[ \t]*\S+/gm)) {
    referenceLabels.add(normalizeReferenceLabel(m[1]));
  }

  // Parse the balanced alt-text brackets so nested CommonMark labels work.
  // An unresolved reference is text, not an embedded image, and an escaped
  // `\![…]` is a literal, so neither should be rejected.
  for (let index = mediaSrc.indexOf('!['); index !== -1; index = mediaSrc.indexOf('![', index + 2)) {
    if (isEscaped(mediaSrc, index)) continue;
    const altEnd = closingBracket(mediaSrc, index + 2);
    if (altEnd === -1) continue;
    const alt = mediaSrc.slice(index + 2, altEnd);
    const next = mediaSrc[altEnd + 1];
    if (next === '(') {
      err(index, imageMessage);
      continue;
    }
    if (next === '[') {
      const labelEnd = closingBracket(mediaSrc, altEnd + 2);
      if (labelEnd === -1) continue;
      const rawLabel = mediaSrc.slice(altEnd + 2, labelEnd) || alt;
      if (referenceLabels.has(normalizeReferenceLabel(rawLabel))) err(index, imageMessage);
      continue;
    }
    if (referenceLabels.has(normalizeReferenceLabel(alt))) err(index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:img|picture|object|embed)\b[^>]*>|<source\b[^>]*\bsrcset\s*=[^>]*>|<image\b[^>]*>/gi)) {
    err(m.index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:input|video)\b[^>]*>/gi)) {
    if (htmlAttribute(m[0], 'type').toLowerCase() === 'image' || htmlAttribute(m[0], 'poster')) {
      err(m.index, imageMessage);
    }
  }
  for (const m of htmlMediaSrc.matchAll(/<[^>]+>/g)) {
    if (hasFileBackedCssImage(htmlAttribute(m[0], 'style'))) err(m.index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    if (hasFileBackedCssImage(m[1])) err(m.index, imageMessage);
  }
  for (const m of mediaSrc.matchAll(/\{\{[<%]\s*figure\b[\s\S]*?[>%]\}\}/gi)) err(m.index, imageMessage);
  for (const m of mediaSrc.matchAll(/data:image\//gi)) err(m.index, imageMessage);
  if (hasFileBackedCssImage(mediaSrc)) {
    const match = /(?:-webkit-)?image-set\s*\(|url\(/i.exec(mediaSrc);
    err(match?.index ?? 0, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:use|feImage)\b[^>]*>/gi)) {
    const target = htmlAttribute(m[0], 'href') || htmlAttribute(m[0], 'xlink:href');
    if (target && !target.trim().startsWith('#')) err(m.index, imageMessage);
  }

  for (const m of htmlMediaSrc.matchAll(/<svg\b[^>]*>/gi)) {
    const role = htmlAttribute(m[0], 'role').trim().toLowerCase();
    const ariaLabel = htmlAttribute(m[0], 'aria-label').trim();
    const labelledBy = htmlAttribute(m[0], 'aria-labelledby').trim().split(/\s+/).filter(Boolean);
    const close = htmlMediaSrc.indexOf('</svg>', m.index + m[0].length);
    const block = close === -1 ? m[0] : htmlMediaSrc.slice(m.index, close + 6);
    const hasName = Boolean(ariaLabel)
      || (labelledBy.length > 0 && labelledBy.every((id) => elementSuppliesName(block, id)));
    if (role !== 'img' || !hasName) {
      err(m.index, 'inline SVG needs role="img" and a non-empty aria-label or aria-labelledby');
    }
  }
  for (const m of htmlMediaSrc.matchAll(/<svg\b[\s\S]*?<\/svg>/gi)) {
    const svg = m[0];
    if (/\bstyle\s*=\s*\{\{/i.test(svg)) {
      err(m.index, 'inline SVG contains React `style={{…}}` syntax — use ordinary SVG attributes');
    }
    if (/\{\s*[\w$.]+\s*\.map\s*\(|\{\s*[\s\S]*?=>[\s\S]*?\}/.test(svg)) {
      err(m.index, 'inline SVG contains an unevaluated JSX expression — render explicit SVG elements');
    }
    const jsxAttribute = /\b(?:strokeWidth|strokeDasharray|strokeLinecap|strokeLinejoin|fontSize|fontStyle|fontWeight|textAnchor|fillRule|clipRule)\s*=/i.exec(svg);
    if (jsxAttribute) {
      err(m.index + jsxAttribute.index, `inline SVG uses JSX attribute ${JSON.stringify(jsxAttribute[0].replace(/\s*=.*/, ''))} — use its kebab-case SVG spelling`);
    }
  }

  for (const m of mediaSrc.matchAll(/\*\*Solution\.\*\*[ \t]*(?:\r?\n[ \t]*)+(?=(?:\{\{<\s*(?:fillin|multiplechoice|graphplot)\b|#{1,6}\s|---[ \t]*$|(?![\s\S])))/gm)) {
    wrn(m.index, 'worked example appears to have an empty Solution block — confirm that no source solution was dropped');
  }
  for (const m of src.matchAll(/\{\{<\s*callout\b[^>]*>\}\}([\s\S]*?)\{\{<\s*\/callout\s*>\}\}/g)) {
    const meaningful = m[1].replace(/\*\*[^*]+[.:]?\*\*/g, '').trim();
    if (!meaningful) err(m.index, 'callout has a heading but no explanatory content');
  }

  // A chapter landing is a reader-facing map, not a copied print outline.
  // Keep every entry consistent: bold title, em dash, concise description.
  if (/[/\\]_index\.md$/.test(filename) && /^source_chapter:\s*\S/m.test(src)) {
    const heading = /^## Sections[ \t]*$/m.exec(src);
    if (!heading) {
      err(0, 'chapter landing is missing a `## Sections` overview');
    } else {
      const blockStart = heading.index + heading[0].length;
      const tail = src.slice(blockStart);
      const blockEndMatch = /^(?:##\s|---[ \t]*$)/m.exec(tail);
      const block = tail.slice(0, blockEndMatch?.index ?? tail.length);
      const starts = [...block.matchAll(/^- /gm)].map((match) => match.index);
      if (!starts.length) err(heading.index, 'chapter `## Sections` overview has no section bullets');
      for (let i = 0; i < starts.length; i += 1) {
        const item = block
          .slice(starts[i], starts[i + 1] ?? block.length)
          .replace(/\r?\n[ \t]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        const parts = /^- \*\*([^*]+)\*\*\s+—\s+(\S[\s\S]*)$/.exec(item);
        if (!parts) {
          err(blockStart + starts[i], 'chapter section bullet must be `- **Title** — concise description`');
        } else if (/^\d+(?:\.\d+)+\s/.test(parts[1])) {
          err(blockStart + starts[i], 'chapter section title includes a print section number — remove the visible numeric prefix');
        }
      }
    }
  }

  // Static answer reveals were an interim migration format. Authored practice
  // must use a real graded component so the learner can submit an answer.
  for (const m of mediaSrc.matchAll(/<details\b[^>]*>[\s\S]*?<summary\b[^>]*>\s*check answer\b[\s\S]*?<\/summary>/gi)) {
    err(m.index, 'legacy “Check answer” details block — use fillin, multiplechoice, or graphplot');
  }

  // ---- interactive practice-set size rule ----------------------------------
  const fillins = [...shortcodes(mediaSrc, 'fillin')];
  const multiplechoices = [...shortcodes(mediaSrc, 'multiplechoice', true)];
  const graphplots = [...shortcodes(mediaSrc, 'graphplot', true)];
  const practiceQuestions = [...fillins, ...multiplechoices, ...graphplots]
    .sort((a, b) => a.index - b.index);
  let previousQuestionEnd = -1;
  let consecutiveQuestions = 0;
  for (const { index, end } of practiceQuestions) {
    consecutiveQuestions = previousQuestionEnd >= 0
      && src.slice(previousQuestionEnd, index).trim() === ''
      ? consecutiveQuestions + 1
      : 1;
    if (!isKnowledgeCheck && consecutiveQuestions === 4) {
      err(index, 'more than three consecutive interactive questions — keep each practice set to 2–3 questions');
    }
    previousQuestionEnd = end;
  }

  // ---- fillin shortcode rules ----------------------------------------------
  for (const { params, index } of fillins) {
    const where = `fillin (${(params.question || '?').slice(0, 40)}…)`;
    const q = params.question || '';
    if (!q.trim()) err(index, 'fillin: missing non-empty question');
    if (!(params.answer || '').trim()) err(index, `${where}: missing non-empty answer`);
    if (params.answerMode && !['expression', 'unordered'].includes(params.answerMode)) {
      err(index, `${where}: answerMode must be "expression" or "unordered"`);
    }
    if (params.answerMode === 'unordered' && !(params.answer || '').includes(',')) {
      err(index, `${where}: unordered answer needs at least two comma-separated members`);
    }
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, `${where}: regular-section exercise is missing a hint`);
    }
    if (params.answer && /\^-/.test(params.answer)) {
      err(index, `${where}: answer has an unbraced negative exponent — write 10^{-3}, never 10^-3`);
    }
    if (/\\ne(?:q)?\b/.test(params.answer || '')) {
      err(index, `${where}: answer is a true/false statement (contains \\neq) — ungradeable; ask for a value or use multiplechoice`);
    }
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `${where}: ${name} contains a print-source “Try It” label — keep the source number in working notes, not the learner-facing component`);
      }
    }
    if (/\bsimplif(?:y|ied)(?:\s+if\s+possible)?\s*[:;,.-]?\s*(?:\([abc]\)|[abc]\)|[ⓐⓑⓒ])/iu.test(q)) {
      err(index, `${where}: standalone fill-in retains a print part label after “Simplify” — remove the label or split a true multipart exercise`);
    }
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) wrn(index, `${where}: question looks multi-part ("(a)…(b)") — split into one exercise per part`);
  }

  // ---- multiplechoice shortcode rules --------------------------------------
  const graphAnswerIndexes = [];
  for (const { params, inner, index } of multiplechoices) {
    const q = params.question || '';
    if (!q.trim()) err(index, 'multiplechoice: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, `multiplechoice (${q.slice(0, 40)}…): regular-section exercise is missing a hint`);
    }
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `multiplechoice (${q.slice(0, 40)}…): ${name} contains a print-source “Try It” label — keep the source number in working notes`);
      }
    }
    if (params.mode === 'graph') {
      if (params.answerIndex == null || params.answerIndex === '') {
        err(index, 'multiplechoice(graph): missing answerIndex');
      } else if (!/^\d+$/.test(params.answerIndex)) {
        err(index, `multiplechoice(graph): answerIndex must be a nonnegative integer, got ${JSON.stringify(params.answerIndex)}`);
      } else {
        const nOpts = inner.split('===OPT===').filter((s) => s.trim()).length;
        if (nOpts < 2) err(index, 'multiplechoice(graph): at least two options are required');
        if (Number(params.answerIndex) >= nOpts) err(index, `multiplechoice(graph): answerIndex ${params.answerIndex} but only ${nOpts} option(s)`);
        graphAnswerIndexes.push({ index, n: Number(params.answerIndex) });
      }
    } else {
      const opts = inner.split('\n').map((s) => s.trim()).filter(Boolean);
      if (opts.length < 2) err(index, 'multiplechoice: at least two non-empty options are required');
      if (new Set(opts).size !== opts.length) err(index, 'multiplechoice: duplicate options are not allowed');
      if (!(params.answer || '').trim()) {
        err(index, 'multiplechoice: missing non-empty answer');
      } else if (opts.length && !opts.includes(params.answer)) {
        err(index, `multiplechoice: answer ${JSON.stringify(params.answer.slice(0, 40))} is not one of the options (exact string match required)`);
      }
    }
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) wrn(index, `multiplechoice (${q.slice(0, 40)}…): question looks multi-part — split it`);
  }
  if (graphAnswerIndexes.length >= 2 && new Set(graphAnswerIndexes.map((x) => x.n)).size === 1) {
    wrn(graphAnswerIndexes[0].index, `all ${graphAnswerIndexes.length} graph multiplechoice(s) use answerIndex=${graphAnswerIndexes[0].n} — vary the correct position`);
  }

  // ---- graphplot shortcode rules -------------------------------------------
  for (const { params, inner, index } of graphplots) {
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `graphplot: ${name} contains a print-source “Try It” label — keep the source number in working notes`);
      }
    }
    if (!(params.question || '').trim()) err(index, 'graphplot: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, 'graphplot: regular-section exercise is missing a hint');
    }
    if (!params.ariaLabel) err(index, 'graphplot: missing ariaLabel — describe the empty grid in prose');
    try {
      parseGraphPlotConfig(inner.trim(), params.snap || 1);
    } catch (error) {
      err(index, `graphplot: ${error.message}`);
    }
  }

  // ---- Knowledge Check page rule -------------------------------------------
  if (isKnowledgeCheck) {
    for (const m of src.matchAll(/\bhint="/g)) {
      err(m.index, 'hint on a Knowledge Check — quizzes never have hints; delete the attribute');
    }
  }

  return { errors, warnings };
}
