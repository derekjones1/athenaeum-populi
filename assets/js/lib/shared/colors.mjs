/**
 * The four feedback tones the exercise components paint their live regions
 * with, as CSS custom properties with the hex fallbacks that apply for the
 * moment before the stylesheet does.
 *
 * assets/css/custom.css is the source of truth for the palette; the
 * fallbacks here duplicate its `:root` values and must move with them. They
 * used to be duplicated six times — once per component, each with its own
 * "keep in step with custom.css" reminder — so keeping six copies in step
 * was itself the maintenance hazard. Each component maps its own status
 * names onto these four tones.
 */
export const TONE = Object.freeze({
  success: 'var(--ap-success, #1a7f37)',
  error: 'var(--ap-error, #b42318)',
  warning: 'var(--ap-warning, #9a6700)',
  muted: 'var(--ap-muted, #6f6e69)',
});
