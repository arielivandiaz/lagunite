# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] — 2026-11-07

Lagunite 3 skin: same class API, new look. Brand blue `#2476ff` unchanged.
Design source: `design/lagunite3/` (tokens, components, brand book).

### Changed (visual — may affect existing pages)
- **Tokens:** cool slate neutrals (`--gray-*` now aliases `--slate-*`), new blue ramp around `#2476ff`, separated surfaces, layered cool shadows, radius scale 6–28px (`--radius-s/m/l` alias sm/md/lg). All documented text pairs pass WCAG AA in Day and Night.
- **Type:** Bricolage Grotesque (display) + Instrument Sans (text) + JetBrains Mono replace six Google families. `h1` up to 72px, `h2` up to 44px with tight tracking.
- **Base:** `body` no longer centers text; `header` and `p` no longer get margins/padding; `li` padding removed; `details` no longer uses the inverted strip; visible `:focus-visible` everywhere (was `outline: none` on all elements); `blockquote` loses the left border.
- **Buttons:** gradient + top highlight + colored lift, physical hover/press; `.alt` is a raised neutral outline (was 2px blue); `.error` is solid destructive; no `!important`.
- **Components restyled:** badges, cards, inputs, form groups, alerts, toast, tabs, segmented control, table, avatars, empty state, dropdown, tooltip, breadcrumb, modal, bottom-sheet, navbar, sidebar, topbar, footer, list-item, skeleton, stat-cards (purple → blue), picker-wheel.
- **Borders:** `--border` and `.border*` utilities are 1px neutral (were 2px brand blue).
- **`.font-*` / `.font-weight-*`:** no `!important`.
- **`.card-accent-*`:** 3px top line instead of a thick left border.
- **`.color-primary`:** uses the AA text blue (`--color-primary-text`).
- **Night:** applies to `<html>` too (no light strip when scrolling); component `.night` overrides removed in favor of tokens; also responds to `[data-theme="dark"]`.

### Added
- `.btn.soft`, `.btn.glass`, `.btn.pill`, `.btn-arrow`, `.kbd`
- `.card-featured`, `.card-glass`, `.card-sunken`, `.icon-tile`, `.icon-tile-solid`
- `.badge-announce`, `.navbar-floating`, `.brand-mark`
- `04-decorators/09-backgrounds.css`: `.bg-mesh`, `.bg-grid`, `.bg-dots`, `.bg-spotlight`, `.glass`, `.text-gradient`, `.overline-label`, `.section`
- `.font-display-l/xl/2xl`, `.font-display`
- Tokens: `--color-primary-fill/-fill-end/-text/-soft`, `--color-text-muted/-subtle`, `--color-glass`, `--color-highlight`, `--color-overlay`, `--color-border-strong`, `--shadow-xs`, `--shadow-primary(-hover)`, `--shadow-focus`, `--blur-*`, `--ease-*`, `--dur-*`, `--gradient-primary/-text/-border`
- `pocs/v3-components.html`: QA page for every restyled component

### Fixed
- `.navbar-burger` bars rendered at 0px height (menu invisible on mobile).
- Initials avatars lost their gradient in Night.

### Deprecated
- `.chip-*` (use `.badge-*-light`), `bgg-*` gradients (use `.bg-mesh` / `.bg-grid` / `.bg-spotlight`).

### Build
- CSS gzip budget raised to 60 KB (v3 ships ~56.4 KB).

## [2.1.0] — 2026-09-15

CSS runtime release: molecules complete, anti-slop defaults, canonical demos, support matrix.

### Added
- **Anti-slop defaults:** `.row`/`.col` flex-start; `.btn { margin: 0 }`; `.color-on-fill`; `.text-muted`; `.bg-surface` / `.bg-surface-raised`.
- **`.surface-glass`** — opt-in frosted panel (`04-decorators/01-effects.css`).
- **Picker wheel + selectable option** — readyToProd (`14-picker-wheel` + JS, `15-selectable-option`).
- **Canonical demos** — `demos/01`–`05` + hub (`npm run dev` → `/demos/`).
- **SUPPORT.md** — browsers, night, print (unsupported), size budget + `npm run check:size`.
- **CONTRIBUTING.md** + GitHub issue templates.
- **Source maps** in production build (`dist/*.js.map`; CSS map not emitted by Vite lib CSS extract).

### Changed
- **a11y focus:** `:focus-visible` on `.btn`, navbar, footer links, `.modal-close`, `.alert-close`.
- **Cards:** flat default; `.card-elevated` opt-in; reduced-motion on `.card-hover`.
- **Animations:** reduced-motion disables infinite `.animate-spin` / `.pulse` / `.bounce` / `.animate-infinite`.
- **Docs/skills:** deprecate `.color-text-alt` as muted → `.text-muted` / `.card-text`; `.bg-1`…`.bg-9` = theme accent fills; `bgg-*` accent-only.
- **README / README_ES** rewritten for install + quick start + v2.1 scope.
- AI-first / JSON→HTML documented as **future exploration only** (not shipped).

### Migration notes (anti-slop)

| Before | After |
| --- | --- |
| Relied on `.row`/`.col` centering content | Add `.flex-center` or `jc-c ai-c` only where center is intentional |
| Relied on `.btn` magic `1vh 1vw` margin | Use parent `gap` / `marg-*` (`.btn` margin is `0`) |
| `.color-text-alt` for muted subtitles | `.text-muted` or `.card-text`; on fills use `.color-on-fill` |
| `.bg-1`…`.bg-9` as “panel levels” | Accents only; panels → `.bg` / `.bg-surface` / `.card` |
| Full-page `bgg-*` as brand | One accent strip max, or theme `.bg` |

### Fixed
- Picker wheel broken token `--font-weight-3` → `--font-weight-medium`.
- Docs generator no longer warns about missing `07-form`.

## [2.0.23] — 2026-09

Baseline before v2.1 release engineering.
