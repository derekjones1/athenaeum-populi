/**
 * A rubric clause read as a run of its model answer's words.
 *
 * A `selfcheck` checkpoint is a checkbox label and prints as plain text, while
 * the model answer above it is Markdown with TeX, `\ce{}` and inline HTML. So
 * the two are compared as READ, not as typed: `$m_l$` and `mₗ` are one word,
 * `$\frac{4}{5}$` and `4/5` one value, `4*s*` and `4s` one subshell. Capitals,
 * punctuation and spacing are folded; a plus or a minus sign is not, so a
 * clause cannot turn `δ−` into `δ+` or `−1` into `+1`.
 */

const GREEK = Object.freeze({
  alpha: 'α', beta: 'β', gamma: 'γ', Gamma: 'Γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε', varepsilon: 'ε',
  zeta: 'ζ', eta: 'η', theta: 'θ', Theta: 'Θ', kappa: 'κ', lambda: 'λ', Lambda: 'Λ', mu: 'μ', nu: 'ν',
  xi: 'ξ', pi: 'π', Pi: 'Π', rho: 'ρ', sigma: 'σ', Sigma: 'Σ', tau: 'τ', phi: 'φ', varphi: 'φ', Phi: 'Φ',
  chi: 'χ', psi: 'ψ', Psi: 'Ψ', omega: 'ω', Omega: 'Ω',
});

const MINUS = '−';

/** The `{…}` group opening at `open` (which must be a `{`): its inside and the index after its `}`. */
function group(tex, open) {
  let depth = 0;
  for (let i = open; i < tex.length; i++) {
    if (tex[i] === '\\') { i++; continue; }
    if (tex[i] === '{') depth++;
    else if (tex[i] === '}' && --depth === 0) return { inner: tex.slice(open + 1, i), end: i + 1 };
  }
  return null;
}

/** Rewrite every `\name{A}{B}` by `write(A, B)`, innermost last, so a nested fraction is read whole. */
function twoArgs(tex, names, write) {
  const re = new RegExp(`\\\\(?:${names.join('|')})\\s*(?=\\{)`, 'g');
  let out = '';
  let from = 0;
  for (let m = re.exec(tex); m; m = re.exec(tex)) {
    const a = group(tex, m.index + m[0].length);
    const b = a && tex[a.end] === '{' ? group(tex, a.end) : null;
    if (!b) continue;
    out += tex.slice(from, m.index) + write(twoArgs(a.inner, names, write), twoArgs(b.inner, names, write));
    from = b.end;
    re.lastIndex = from;
  }
  return out + tex.slice(from);
}

/** One span of TeX as the words and values a reader says. */
function readTex(tex) {
  let s = tex;
  // A braced hyphen is the bond between two symbols (`{\text{C}}{-}{\text{H}}`), a dash, not a sign.
  s = s.replace(/\{-\}/g, ' ');
  s = twoArgs(s, ['dfrac', 'tfrac', 'frac'], (top, bottom) => ` ${top} / ${bottom} `);
  // `\overset{δ−}{C}` reads base first, as a caption of the drawing would: "C δ−".
  s = twoArgs(s, ['overset'], (over, base) => ` ${base} ${over} `);
  s = twoArgs(s, ['underset'], (under, base) => ` ${base} ${under} `);
  s = s.replace(/\\(?:begin|end)\s*\{[^}]*\}/g, ' ');
  s = s.replace(/\\\\(?:\[[^\]]*\])?/g, ' ');
  s = s.replace(/\\([A-Za-z]+)/g, (whole, name) => GREEK[name] ?? ' ');
  s = s.replace(/\\./g, ' ');
  // A sign typed in math is a minus; `->` is an arrow of `\ce{}` and is punctuation.
  s = s.replace(/-+>/g, ' ').replace(/-/g, MINUS);
  // Subscripts, superscripts and the braces that group them join their base: `m_l` is "ml".
  return s.replace(/[_^{}]/g, '').replace(/&/g, ' ');
}

/** Markdown with TeX, inline HTML and shortcodes, as plain text. */
export function readPlain(text) {
  let s = String(text ?? '');
  // A shortcode's tag is markup (a drawing's alt is not the model answer's sentence).
  s = s.replace(/\{\{[<%][\s\S]*?[%>]\}\}/g, ' ');
  const spans = [];
  const keep = (tex) => `\u0000${spans.push(readTex(tex)) - 1}\u0000`;
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (whole, tex) => ` ${keep(tex)} `);
  s = s.replace(/(?<!\\)\$((?:\\.|[^$\\])+?)\$/g, (whole, tex) => keep(tex));
  s = s.replace(/<\/?[a-zA-Z][^>]*>/g, '');
  s = s.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1');
  s = s.replace(/\*+/g, '');
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
  s = s.replace(/\u0000(\d+)\u0000/g, (whole, n) => spans[Number(n)]);
  return s.normalize('NFKC');
}

/** The words of a text as read: letters, digits and signs, lowercase. */
export function readWords(text) {
  return readPlain(text).toLowerCase().match(/[\p{L}\p{N}+−]+/gu) ?? [];
}

/**
 * Is `clause` a run of `model`'s words? Spacing inside the run is not
 * compared (`ΔT` and `Δ T` are one reading), but the run starts at the start
 * of a word of the model answer and ends at the end of one.
 */
export function isWordRun(clause, model) {
  const needle = readWords(clause).join('');
  if (!needle) return true;
  const words = readWords(model);
  const starts = new Set();
  const ends = new Set();
  let stream = '';
  for (const word of words) {
    starts.add(stream.length);
    stream += word;
    ends.add(stream.length);
  }
  for (let at = stream.indexOf(needle); at !== -1; at = stream.indexOf(needle, at + 1)) {
    if (starts.has(at) && ends.has(at + needle.length)) return true;
  }
  return false;
}
