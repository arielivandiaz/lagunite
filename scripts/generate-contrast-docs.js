#!/usr/bin/env node
/**
 * generate-contrast-docs.js
 *
 * Reads src/css/00-config/01-pallete.css and 03-theme.css,
 * computes WCAG contrast ratios, then:
 *   1. Regenerates ai/skills/contrast.md
 *   2. Injects a pre-computed data block into pocs/poc-contrast-grid.html
 *
 * Run: npm run contrast:update
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.join(__dirname, '..')
const read      = f => fs.readFileSync(path.join(ROOT, f), 'utf8')
const write     = (f, s) => fs.writeFileSync(path.join(ROOT, f), s, 'utf8')

// ─── Color math ──────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  hex = hex.trim().replace(/^#/, '')
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
  const n = parseInt(hex, 16)
  return [n >> 16 & 255, n >> 8 & 255, n & 255]
}

function hslToRgb(h, s, l) {
  s /= 100; l /= 100
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
}

function sRGB(c) {
  c /= 255
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

function luminance([r, g, b]) {
  return 0.2126 * sRGB(r) + 0.7152 * sRGB(g) + 0.0722 * sRGB(b)
}

function contrastRatio(l1, l2) {
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1]
  return (hi + 0.05) / (lo + 0.05)
}

function wcagRating(ratio) {
  if (ratio >= 7)   return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3)   return 'AA18'
  return 'FAIL'
}

function ratingEmoji(rating) {
  return { AAA: '✅', AA: '✅', AA18: '⚠️', FAIL: '❌' }[rating]
}

// ─── CSS variable parser ──────────────────────────────────────────────────────

/**
 * Extract --name: value pairs from a CSS block string.
 * Handles multiline values (gradients etc.) by collecting until the next --
 * or closing brace.
 */
function extractVars(block) {
  const vars = {}
  const re = /--([\w-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(block)) !== null) {
    vars['--' + m[1]] = m[2].trim()
  }
  return vars
}

function parseRootVars(css) {
  const m = css.match(/:root\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s)
  return m ? extractVars(m[1]) : {}
}

function parseNightVars(css) {
  // Match .night, .night * { ... } block
  const m = css.match(/\.night[\s\S]*?\{([\s\S]*?)\}/m)
  return m ? extractVars(m[1]) : {}
}

/**
 * Resolve a CSS var reference like 'var(--foo)' using known vars map.
 * Returns resolved string or null if unresolvable.
 */
function resolveValue(value, vars, depth = 0) {
  if (depth > 5) return null
  const ref = value.match(/^var\((--[\w-]+)\)$/)
  if (ref) {
    const resolved = vars[ref[1]]
    return resolved ? resolveValue(resolved.trim(), vars, depth + 1) : null
  }
  return value
}

/**
 * Parse a color string to [r,g,b] or null if not a solid color.
 */
function parseColorValue(raw, vars) {
  if (!raw) return null
  const value = resolveValue(raw.trim(), vars) || raw.trim()

  // Gradient or other complex values → skip
  if (/linear-gradient|radial-gradient|repeating/i.test(value)) return null

  // #hex
  if (/^#[0-9a-f]{3,6}$/i.test(value)) return hexToRgb(value)

  // hsl(H deg S% L%)  or  hsl(H, S%, L%)
  const hslDeg = value.match(/hsl\(\s*([\d.]+)deg\s+([\d.]+)%\s+([\d.]+)%\s*\)/i)
  if (hslDeg) return hslToRgb(+hslDeg[1], +hslDeg[2], +hslDeg[3])

  const hslComma = value.match(/hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)/i)
  if (hslComma) return hslToRgb(+hslComma[1], +hslComma[2], +hslComma[3])

  // rgb(R, G, B)
  const rgb = value.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)
  if (rgb) return [+rgb[1], +rgb[2], +rgb[3]]

  return null
}

function rgbToHex([r, g, b]) {
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('')
}

// ─── Load and resolve all colors ─────────────────────────────────────────────

const paletteCss = read('src/css/00-config/01-pallete.css')
const themeCss   = read('src/css/00-config/03-theme.css')

const paletteVars  = parseRootVars(paletteCss)
const themeVars    = parseRootVars(themeCss)
const nightVars    = parseNightVars(themeCss)
const allVars      = { ...paletteVars, ...themeVars }
const allNightVars = { ...paletteVars, ...themeVars, ...nightVars }

// Resolve a var name → { hex, rgb, luminance } in a given var context
function resolveColor(varName, vars) {
  const raw = vars[varName]
  if (!raw) return null
  const rgb = parseColorValue(raw, vars)
  if (!rgb) return null
  return { hex: rgbToHex(rgb), rgb, lum: luminance(rgb) }
}

// ─── Build palette data ───────────────────────────────────────────────────────

const FAMILIES = ['gray', 'blue', 'green', 'yellow', 'red']
const STEPS    = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function buildPaletteData() {
  const data = {}
  const WHITE = [255, 255, 255]
  const BLACK = [0, 0, 0]
  const wL = luminance(WHITE)
  const bL = luminance(BLACK)

  for (const fam of FAMILIES) {
    data[fam] = {}
    for (const step of STEPS) {
      const varName = `--${fam}-${step}`
      const raw = paletteVars[varName]
      const rgb = raw ? parseColorValue(raw, paletteVars) : null
      if (!rgb) continue
      const bgL    = luminance(rgb)
      const rWhite = contrastRatio(wL, bgL)
      const rBlack = contrastRatio(bL, bgL)
      data[fam][step] = {
        hex:        rgbToHex(rgb),
        lum:        +bgL.toFixed(4),
        vsWhite:    { ratio: +rWhite.toFixed(2), rating: wcagRating(rWhite) },
        vsBlack:    { ratio: +rBlack.toFixed(2), rating: wcagRating(rBlack) },
        safeText:   rBlack >= 4.5 ? 'dark' : rWhite >= 4.5 ? 'light' : 'aa18-only',
      }
    }
  }
  return data
}

// ─── Build semantic bg data ───────────────────────────────────────────────────

const SEMANTIC_BGS = {
  '.bg':       { bgVar: '--color-bg',         textVar: '--color-text-base' },
  '.bg-alt':   { bgVar: '--color-bg-alt',      textVar: '--color-text-alt' },
  '.bg-1':     { bgVar: '--color-primary',     textVar: '--color-text-alt' },
  '.bg-2':     { bgVar: '--color-primary-light', textVar: '--color-text-alt' },
  '.bg-3':     { bgVar: '--color-primary-dark',  textVar: '--color-text-alt' },
  '.bg-4':     { bgVar: '--color-secondary',     textVar: '--color-text-alt' },
  '.bg-5':     { bgVar: '--color-secondary-light', textVar: '--color-text-alt' },
  '.bg-6':     { bgVar: '--color-secondary-dark',  textVar: '--color-text-alt' },
  '.bg-7':     { bgVar: '--color-tertiary',     textVar: '--color-text-base' },
  '.bg-8':     { bgVar: '--color-tertiary-light', textVar: '--color-text-alt' },
  '.bg-9':     { bgVar: '--color-tertiary-dark',  textVar: '--color-text-base' },
  '.bg-black': { bgVal: '#000000',             textVar: '--color-text-alt' },
  '.bg-ablack':{ bgVar: '--color-almost-black', textVar: '--color-text-alt' },
  '.bg-white': { bgVal: '#ffffff',              textVar: null },  // uses gray-900
  '.bg-awhite':{ bgVar: '--color-almost-white', textVar: '--color-text-base' },
  '.bg-success':{ bgVar: '--color-success-light', textVar: '--color-success' },
  '.bg-warning':{ bgVar: '--color-warning-light', textVar: '--color-warning' },
  '.bg-error':  { bgVar: '--color-error-light',   textVar: '--color-error' },
}

function buildSemanticData(vars) {
  const out = {}
  for (const [cls, def] of Object.entries(SEMANTIC_BGS)) {
    const bgRaw  = def.bgVal  ? def.bgVal : vars[def.bgVar]
    const txtRaw = def.textVar ? vars[def.textVar] : vars['--gray-900'] || '#141618'

    const bgRgb  = bgRaw  ? parseColorValue(bgRaw,  vars) : null
    const txtRgb = txtRaw ? parseColorValue(txtRaw, vars) : null

    if (!bgRgb) { out[cls] = { gradient: true }; continue }

    const bgL   = luminance(bgRgb)
    const txtL  = txtRgb ? luminance(txtRgb) : null
    const ratio = txtL !== null ? contrastRatio(bgL, txtL) : null

    out[cls] = {
      hex:       rgbToHex(bgRgb),
      lum:       +bgL.toFixed(4),
      autoText:  txtRgb ? rgbToHex(txtRgb) : null,
      autoRatio: ratio !== null ? +ratio.toFixed(2) : null,
      autoRating:ratio !== null ? wcagRating(ratio) : null,
    }
  }
  return out
}

// ─── Generate skill markdown ──────────────────────────────────────────────────

function paletteSafeTextLabel(entry) {
  if (!entry) return '—'
  if (entry.safeText === 'dark')     return `dark (B ${entry.vsBlack.ratio}:1)`
  if (entry.safeText === 'light')    return `light (W ${entry.vsWhite.ratio}:1)`
  return `⚠️ AA18 only (W ${entry.vsWhite.ratio} / B ${entry.vsBlack.ratio})`
}

function semanticRow(cls, light, night) {
  const lEntry = light[cls]
  const nEntry = night[cls]
  const lHex   = lEntry?.gradient ? 'gradient' : (lEntry?.hex || '—')
  const nHex   = nEntry?.gradient ? 'gradient' : (nEntry?.hex || lHex)

  const lRatio = lEntry?.autoRatio ? `${lEntry.autoRatio}:1 ${ratingEmoji(lEntry.autoRating)}` : '—'
  const nRatio = nEntry?.autoRatio ? `${nEntry.autoRatio}:1 ${ratingEmoji(nEntry.autoRating)}`
               : lEntry?.autoRatio ? `${lEntry.autoRatio}:1 ${ratingEmoji(lEntry.autoRating)}` : '—'

  return `| \`${cls}\` | \`${lHex}\` | \`${nHex}\` | ${lRatio} | ${nRatio} |`
}

function generateSkillMd(lightSemantic, nightSemantic, paletteData) {
  const ts = new Date().toISOString().slice(0, 10)

  // Palette table rows
  const palRows = {}
  for (const fam of FAMILIES) {
    palRows[fam] = STEPS.map(step => {
      const e = paletteData[fam]?.[step]
      if (!e) return `| \`${step}\` | — | — | — |`
      return `| \`${step}\` | \`${e.hex}\` | \`${e.lum}\` | ${paletteSafeTextLabel(e)} |`
    }).join('\n')
  }

  const semanticTable = Object.keys(SEMANTIC_BGS)
    .map(cls => semanticRow(cls, lightSemantic, nightSemantic))
    .join('\n')

  return `# Lagunite — Contrast & Color Pairing
> Auto-generated ${ts} by \`npm run contrast:update\`. Do not edit manually.
> WCAG: **AAA** ≥7:1 · **AA** ≥4.5:1 · **AA18** ≥3:1 (large/bold only) · **FAIL** <3:1

---

## ⚠️ Critical: \`.bg-1\`…\`.bg-9\` are NOT neutral surfaces

They always resolve to **primary / secondary / tertiary** theme colors.
Use \`.bg-gray-800\` / \`.bg-gray-900\` for neutral dark cards in night mode.

---

## Semantic backgrounds — light & night

| Class | Light bg | Night bg | Auto text ratio (light) | Auto text ratio (night) |
|-------|----------|----------|------------------------|------------------------|
${semanticTable}

> \`.bg-alt\` in night mode auto-sets \`--gray-900\` as text (not \`color-text-alt\`).
> Gradient classes (\`bgg-*\`) cannot be contrast-checked statically.

---

## Night mode neutral surfaces

Use these for dark panels, cards, modals. Never \`.bg-1\`–\`.bg-9\`.

| Class | Hex | vs \`#e8eaed\` (night text) | vs \`#fff\` |
|-------|-----|-----------------------------|------------|
${['--gray-950','--gray-900','--gray-800','--gray-700'].map(v => {
    const e = resolveColor(v, allVars)
    if (!e) return ''
    const nightText = parseColorValue(allNightVars['--color-text-base'] || '#e8eaed', allNightVars) || [232,234,237]
    const r1 = contrastRatio(e.lum, luminance(nightText))
    const r2 = contrastRatio(e.lum, luminance([255,255,255]))
    const cls = `.bg${v.replace('--', '-')}`  // --gray-900 → .bg-gray-900... wait that's wrong
    // Actually .bg-gray-900 is the class
    const bgClass = `.bg-gray-${v.match(/\d+/)[0]}`
    return `| \`${bgClass}\` | \`${e.hex}\` | ${r1.toFixed(1)}:1 ${ratingEmoji(wcagRating(r1))} | ${r2.toFixed(1)}:1 ${ratingEmoji(wcagRating(r2))} |`
  }).filter(Boolean).join('\n')}

---

## Palette: Gray

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
${palRows.gray}

## Palette: Blue

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
${palRows.blue}

## Palette: Green

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
${palRows.green}

## Palette: Yellow

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
${palRows.yellow}

## Palette: Red

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
${palRows.red}

---

## Practical recipes

### Neutral dark card (night mode)
\`\`\`html
<div class="bg-gray-800 border border-color-gray-700 border-r-l padd">
  <p class="color-text">Body copy — readable in night mode</p>
  <p class="color-text-alt">Muted / secondary text</p>
</div>
\`\`\`

### Status badge on dark surface
\`\`\`html
<!-- Soft (auto-paired, let bg-success control text): -->
<span class="badge bg-success">Active</span>

<!-- Inverted dark pill — pick step 700+ for bg, step 200 for text: -->
<span class="badge bg-green-800 color-green-200">Active</span>
\`\`\`

### Primary CTA (default blue theme)
\`\`\`html
<!-- .btn uses --bg-primary gradient; white text is AA18 — fine for button labels -->
<button class="btn">Label</button>

<!-- For strictly AA normal text on primary bg: use dark text -->
<button class="btn color-almost-black">Label</button>
\`\`\`

### Section divider with full-bleed bg
\`\`\`html
<!-- Wrong: .bg-2 = primary-light = blue fill, not a neutral strip -->
<!-- <section class="bg-2"> ✗ -->

<!-- Right: adaptive neutral -->
<section class="bg-gray-900 border-t border-color-gray-800 padd-v-l">
  <!-- content -->
</section>
\`\`\`
`
}

// ─── Inject data block into POC ───────────────────────────────────────────────

const DATA_START = '<!-- CONTRAST-DATA:START -->'
const DATA_END   = '<!-- CONTRAST-DATA:END -->'

function updatePoc(paletteData, lightSemantic) {
  const pocPath = 'pocs/poc-contrast-grid.html'
  let html = read(pocPath)

  const json = JSON.stringify({ palette: paletteData, semantic: lightSemantic }, null, 2)
  const block = `${DATA_START}
<script id="contrast-data-source" type="application/json">
${json}
</script>
${DATA_END}`

  if (html.includes(DATA_START)) {
    html = html.replace(new RegExp(`${DATA_START}[\\s\\S]*?${DATA_END}`), block)
  } else {
    // Inject just before </body>
    html = html.replace('</body>', `\n${block}\n</body>`)
  }

  write(pocPath, html)
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const paletteData    = buildPaletteData()
const lightSemantic  = buildSemanticData(allVars)
const nightSemantic  = buildSemanticData(allNightVars)

const skillMd = generateSkillMd(lightSemantic, nightSemantic, paletteData)
write('ai/skills/contrast.md', skillMd)
console.log('✅  ai/skills/contrast.md updated')

updatePoc(paletteData, lightSemantic)
console.log('✅  pocs/poc-contrast-grid.html data block updated')

// Summary
const issues = []
for (const [fam, steps] of Object.entries(paletteData)) {
  for (const [step, e] of Object.entries(steps)) {
    if (e.safeText === 'aa18-only') issues.push(`  ⚠️  .bg-${fam}-${step} — neither white nor dark gives AA`)
  }
}
if (issues.length) {
  console.log(`\n⚠️  ${issues.length} palette steps with no clean AA pairing:`)
  issues.forEach(i => console.log(i))
}

for (const [cls, e] of Object.entries(lightSemantic)) {
  if (e.gradient) continue
  if (e.autoRating === 'AA18' || e.autoRating === 'FAIL') {
    console.log(`  ⚠️  ${cls} auto text is ${e.autoRating} (${e.autoRatio}:1)`)
  }
}
