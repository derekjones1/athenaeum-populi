/*
 * Athenaeum Populi — interactive Web Components entry point.
 *
 * This is the single esbuild entry (bundled by Hugo Pipes js.Build, ESM +
 * code-splitting). Each component registers its own custom element. Heavy,
 * page-specific deps (MathLive, the Compute Engine grader) are DYNAMICALLY
 * imported inside the components, so esbuild splits them into lazy chunks that
 * never touch this shared bundle.
 *
 * <ap-hello> is the Phase 0 pipeline smoke test; <fill-in> is the Phase 1
 * component (lib/check-answer.mjs ported as-is).
 */
import './components/fill-in.js';
import './components/multiple-choice.js';
import './components/graph-plot.js';

class ApHello extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "world";
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host {
          display: inline-block;
          padding: 0.35em 0.7em;
          border: 1px solid var(--ap-border, #d8d5cf);
          border-radius: 6px;
          font-family: var(--ap-mono, monospace);
          color: var(--ap-success, #1a7f37);
        }
      </style>
      <span>Web Components pipeline OK — hello, ${name}.</span>
    `;
  }
}

if (!customElements.get("ap-hello")) {
  customElements.define("ap-hello", ApHello);
}
