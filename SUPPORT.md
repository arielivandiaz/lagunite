# Lagunite support matrix (RTP-5)

Signed for **v2.1.0**. Validate against canonical demos in [`demos/`](./demos/).

## Browsers

| Browser | Status | Notes |
| --- | --- | --- |
| Chromium (Chrome / Edge latest 2) | **Supported** | Primary QA target; demos verified on Chromium via Vite |
| Firefox (latest 2) | **Supported** | Flex/grid/`:has()` / `color-mix` OK on current ESR+ |
| Safari macOS (latest 2) | **Supported** | Prefer latest; `:has()` required for selectable-option / some form states |
| Safari iOS (latest 2) | **Supported** | Touch + picker-wheel pointer events smoke on demos |
| Legacy (IE11, old Edge) | **Not supported** | No polyfills |

Manual matrix: run `npm run dev` → `/demos/01`–`05` at 320 / 640 / 1024 / 1440 and toggle `.night`.

## Night mode

- Activate with `class="night"` on `body` (or documented ancestor).
- Prefer semantic surfaces: `.bg`, `.card`, `.bg-surface*` — not `.bg-1`…`.bg-9` as panels.
- Muted copy: `.text-muted` / `.card-text`. On fills: `.color-on-fill`.
- Demo: [`demos/05-night-mode.html`](./demos/05-night-mode.html).

## Tokens

- Public utilities must use config tokens (`--space-*`, `--color-*`, `--radius-*`, …).
- Hardcoded lengths allowed only for component-intrinsic chrome (e.g. picker item scale) when documented in-source.
- Broken `var(--*)` = release blocker; re-run `npm run lint:css` + visual smoke after token edits.

## Accessibility (minimum for v2.1)

| Area | Expectation |
| --- | --- |
| Focus | Interactive atoms/organisms expose `:focus-visible` (btn, navbar, sidebar, topbar, modal-close, alerts, picker, selectable, tabs, …) |
| Forms | Labels + `.form-error-msg` in the same `.form-group`; placeholders gate native valid/invalid |
| Motion | Framework `.animate-*` and key compounds respect `prefers-reduced-motion` |
| ARIA | Use on alerts (`role`), listbox picker, tabs; don’t invent roles for static chrome |

Not a full WCAG certification — light gates only (`ai/skills/validate-a11y.md`).

## Print

**Not supported** in v2.1. No `@media print` stylesheet. Consumers should supply their own print CSS if needed.

## Size budget

Baseline after picker + selectable + anti-slop (build 2026-09-15):

| Asset | Raw | Gzip | Budget (gzip) |
| --- | --- | --- | --- |
| `dist/lagunite.css` | ~339 KB | **~49.4 KB** | **≤ 55 KB** |
| `dist/lagunite.js` (ESM) | ~9 KB | **~2.6 KB** | **≤ 5 KB** |

Check:

```bash
npm run build
npm run check:size
```

Fail CI if gzip CSS exceeds budget (soft until CI is wired in RTP-4).
