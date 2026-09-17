# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
