/**
 * The row filter of the appendix lookup (assets/js/reference-lookup.js).
 *
 * A table appendix is long — Chemistry's Appendix G has 403 rows — and a
 * learner sent to it from an exercise wants three or four of them. They type
 * what the exercise prints, on a keyboard that has no subscripts: `SiF4` for
 * SiF₄(g), `Al3+` for Al³⁺(aq), `-1615` for −1615.0. So both the row and the
 * query are FOLDED before they are compared:
 *
 *   - compatibility forms become the plain ones (NFKC: ₄ → 4, ³⁺ → 3+);
 *   - the minus sign and the dashes a table prints for it become a hyphen;
 *   - the hydrate dot becomes a full stop (AlCl₃·6H₂O is found by AlCl3.6H2O);
 *   - the multiplication sign becomes the letter (4.6 × 10⁻⁴ by 4.6x10-4);
 *   - white space goes, inside a cell and inside the query.
 *
 * CASE is read the way a formula needs: `Co` is cobalt and `CO` is carbon
 * monoxide. A query with a capital letter is matched as typed wherever that
 * finds anything; one that finds nothing as typed ("Aluminum" against the
 * group row "aluminum"), and any query without a capital, is matched without
 * regard to case.
 *
 * A table may set its rows in GROUPS under a row that only names the group
 * (Appendix G's elements, Appendix J's metals: the name in bold in the first
 * cell and nothing else). A group's name stays while any row under it shows,
 * and a query that matches the NAME shows the whole group — "silicon" lists
 * every silicon compound.
 */

/** Fold a cell's text, or a query, to the form the two are compared in. */
export function foldLookup(text) {
  return String(text ?? '')
    .normalize('NFKC')
    // U+2212 minus sign, and the figure, en, and em dashes set in its place.
    .replace(/[\u2212\u2012\u2013\u2014]/g, '-')
    // U+00B7 middle dot, U+22C5 dot operator, U+2022 bullet.
    .replace(/[\u00b7\u22c5\u2022]/g, '.')
    // U+00D7 multiplication sign.
    .replace(/\u00d7/g, 'x')
    .replace(/\s+/g, '');
}

/** A row's cells as one folded line; a line break keeps a match inside one cell. */
function lineOf(row) {
  return row.cells.map(foldLookup).join('\n');
}

/**
 * Which rows a query shows.
 *
 * @param {{ cells: string[], group?: boolean }[]} rows  the body rows of one
 *   table, in order; `group` marks a row that only names the rows after it.
 * @param {string} query  what was typed.
 * @returns {{ visible: boolean[], matched: number, total: number }} one flag
 *   per row; `matched` and `total` count the rows that are not group names.
 */
export function filterRows(rows, query) {
  const total = rows.filter((row) => !row.group).length;
  const wanted = foldLookup(query);
  if (!wanted) return { visible: rows.map(() => true), matched: total, total };

  const lines = rows.map(lineOf);
  let hits = /\p{Lu}/u.test(wanted) ? lines.map((line) => line.includes(wanted)) : null;
  if (!hits || !hits.includes(true)) {
    const lower = wanted.toLowerCase();
    hits = lines.map((line) => line.toLowerCase().includes(lower));
  }

  const visible = rows.map(() => false);
  let group = -1;
  rows.forEach((row, index) => {
    if (row.group) {
      group = index;
      visible[index] = hits[index];
      return;
    }
    const underNamedGroup = group >= 0 && hits[group];
    visible[index] = hits[index] || underNamedGroup;
    if (visible[index] && group >= 0) visible[group] = true;
  });
  const matched = rows.filter((row, index) => !row.group && visible[index]).length;
  return { visible, matched, total };
}

/** The line a screen reader hears and a sighted reader sees beside the field. */
export function countLabel({ matched, total }, query) {
  const rows = (count) => `${count} ${count === 1 ? 'row' : 'rows'}`;
  if (!foldLookup(query)) return rows(total);
  if (matched === 0) return `No row of ${total} matches`;
  return `${matched} of ${rows(total)}`;
}
