# Lagunite — Contrast & Color Pairing
> Auto-generated 2026-04-19 by `npm run contrast:update`. Do not edit manually.
> WCAG: **AAA** ≥7:1 · **AA** ≥4.5:1 · **AA18** ≥3:1 (large/bold only) · **FAIL** <3:1

---

## ⚠️ Critical: `.bg-1`…`.bg-9` are NOT neutral surfaces

They always resolve to **primary / secondary / tertiary** theme colors.
Use `.bg-gray-800` / `.bg-gray-900` for neutral dark cards in night mode.

---

## Semantic backgrounds — light & night

| Class | Light bg | Night bg | Auto text ratio (light) | Auto text ratio (night) |
|-------|----------|----------|------------------------|------------------------|
| `.bg` | `#eeeeee` | `#1a1a1a` | 10.89:1 ✅ | 14.44:1 ✅ |
| `.bg-alt` | `#222222` | `#f5f5f5` | 15.91:1 ✅ | 1.09:1 ❌ |
| `.bg-1` | `#2476ff` | `#2476ff` | 4.11:1 ⚠️ | 4.11:1 ⚠️ |
| `.bg-2` | `#5e9aff` | `#5e9aff` | 2.78:1 ❌ | 2.78:1 ❌ |
| `.bg-3` | `#0965ff` | `#0965ff` | 4.86:1 ✅ | 4.86:1 ✅ |
| `.bg-4` | `#747474` | `#747474` | 4.67:1 ✅ | 4.67:1 ✅ |
| `.bg-5` | `#333333` | `#333333` | 12.63:1 ✅ | 12.63:1 ✅ |
| `.bg-6` | `#292929` | `#292929` | 14.55:1 ✅ | 14.55:1 ✅ |
| `.bg-7` | `#f97316` | `#f97316` | 4.51:1 ✅ | 2.33:1 ❌ |
| `.bg-8` | `#ffa261` | `#ffa261` | 1.98:1 ❌ | 1.98:1 ❌ |
| `.bg-9` | `#c95300` | `#c95300` | 2.84:1 ❌ | 3.69:1 ⚠️ |
| `.bg-black` | `#000000` | `#000000` | 21:1 ✅ | 21:1 ✅ |
| `.bg-ablack` | `#333333` | `#333333` | 12.63:1 ✅ | 12.63:1 ✅ |
| `.bg-white` | `#ffffff` | `#ffffff` | 17.54:1 ✅ | 17.54:1 ✅ |
| `.bg-awhite` | `#fcfcfc` | `#fcfcfc` | 12.32:1 ✅ | 1.17:1 ❌ |
| `.bg-success` | `#98ff98` | `#98ff98` | 3.38:1 ⚠️ | 3.38:1 ⚠️ |
| `.bg-warning` | `#ffead5` | `#ffead5` | 1.94:1 ❌ | 1.94:1 ❌ |
| `.bg-error` | `#fdd0d0` | `#fdd0d0` | 2.7:1 ❌ | 2.7:1 ❌ |

> `.bg-alt` in night mode auto-sets `--gray-900` as text (not `color-text-alt`).
> Gradient classes (`bgg-*`) cannot be contrast-checked statically.

---

## Night mode neutral surfaces

Use these for dark panels, cards, modals. Never `.bg-1`–`.bg-9`.

| Class | Hex | vs `#e8eaed` (night text) | vs `#fff` |
|-------|-----|-----------------------------|------------|
| `.bg-gray-950` | `#0a0d10` | 16.2:1 ✅ | 19.5:1 ✅ |
| `.bg-gray-900` | `#141a1f` | 14.6:1 ✅ | 17.5:1 ✅ |
| `.bg-gray-800` | `#2b333b` | 10.6:1 ✅ | 12.8:1 ✅ |
| `.bg-gray-700` | `#434d56` | 7.2:1 ✅ | 8.6:1 ✅ |

---

## Palette: Gray

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
| `50` | `#f0f2f5` | `0.8862` | dark (B 18.72:1) |
| `100` | `#dee3e8` | `0.7629` | dark (B 16.26:1) |
| `200` | `#cad1d8` | `0.6312` | dark (B 13.62:1) |
| `300` | `#a9b3bc` | `0.4431` | dark (B 9.86:1) |
| `400` | `#8e99a4` | `0.3121` | dark (B 7.24:1) |
| `500` | `#74808b` | `0.2102` | dark (B 5.2:1) |
| `600` | `#5c6670` | `0.1295` | light (W 5.85:1) |
| `700` | `#434d56` | `0.0717` | light (W 8.63:1) |
| `800` | `#2b333b` | `0.032` | light (W 12.81:1) |
| `900` | `#141a1f` | `0.0099` | light (W 17.54:1) |
| `950` | `#0a0d10` | `0.0039` | light (W 19.48:1) |

## Palette: Blue

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
| `50` | `#ecf5fe` | `0.9029` | dark (B 19.06:1) |
| `100` | `#cfe6fc` | `0.7689` | dark (B 16.38:1) |
| `200` | `#9eccfa` | `0.5736` | dark (B 12.47:1) |
| `300` | `#6eb3f7` | `0.4227` | dark (B 9.45:1) |
| `400` | `#3d99f5` | `0.3037` | dark (B 7.07:1) |
| `500` | `#0d80f2` | `0.2193` | dark (B 5.39:1) |
| `600` | `#0f66bd` | `0.1328` | light (W 5.74:1) |
| `700` | `#0f4d8a` | `0.0724` | light (W 8.58:1) |
| `800` | `#0d4073` | `0.0499` | light (W 10.51:1) |
| `900` | `#08335e` | `0.0323` | light (W 12.76:1) |
| `950` | `#042649` | `0.0189` | light (W 15.23:1) |

## Palette: Green

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
| `50` | `#eefbf3` | `0.9364` | dark (B 19.73:1) |
| `100` | `#d5f6e0` | `0.8544` | dark (B 18.09:1) |
| `200` | `#adebc2` | `0.722` | dark (B 15.44:1) |
| `300` | `#85e0a3` | `0.6094` | dark (B 13.19:1) |
| `400` | `#5cd685` | `0.5206` | dark (B 11.41:1) |
| `500` | `#2eb85c` | `0.3563` | dark (B 8.13:1) |
| `600` | `#1b9844` | `0.2311` | dark (B 5.62:1) |
| `700` | `#127d36` | `0.1506` | light (W 5.23:1) |
| `800` | `#0d5926` | `0.0737` | light (W 8.49:1) |
| `900` | `#08451c` | `0.0439` | light (W 11.18:1) |
| `950` | `#042f12` | `0.021` | light (W 14.78:1) |

## Palette: Yellow

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
| `50` | `#fefaeb` | `0.9544` | dark (B 20.09:1) |
| `100` | `#fef2cd` | `0.8898` | dark (B 18.8:1) |
| `200` | `#fae39e` | `0.7773` | dark (B 16.55:1) |
| `300` | `#f7d56e` | `0.6849` | dark (B 14.7:1) |
| `400` | `#f5c73d` | `0.606` | dark (B 13.12:1) |
| `500` | `#f2b90d` | `0.536` | dark (B 11.72:1) |
| `600` | `#d49a11` | `0.3715` | dark (B 8.43:1) |
| `700` | `#ae7b13` | `0.2321` | dark (B 5.64:1) |
| `800` | `#865c13` | `0.1277` | light (W 5.91:1) |
| `900` | `#5f4011` | `0.0614` | light (W 9.43:1) |
| `950` | `#3f2a0d` | `0.0274` | light (W 13.56:1) |

## Palette: Red

| Step | Hex | Luminance | Safe text |
|------|-----|-----------|-----------|
| `50` | `#fdecec` | `0.8693` | dark (B 18.39:1) |
| `100` | `#fbd0d0` | `0.7018` | dark (B 15.04:1) |
| `200` | `#f5a3a3` | `0.4825` | dark (B 10.65:1) |
| `300` | `#f07575` | `0.3253` | dark (B 7.51:1) |
| `400` | `#eb4747` | `0.2262` | dark (B 5.52:1) |
| `500` | `#df2020` | `0.1683` | light (W 4.81:1) |
| `600` | `#b62020` | `0.1108` | light (W 6.53:1) |
| `700` | `#9c1616` | `0.077` | light (W 8.27:1) |
| `800` | `#7d1212` | `0.0484` | light (W 10.67:1) |
| `900` | `#5c0a0a` | `0.0251` | light (W 13.97:1) |
| `950` | `#470606` | `0.0148` | light (W 16.2:1) |

---

## Practical recipes

### Neutral dark card (night mode)
```html
<div class="bg-gray-800 border border-color-gray-700 border-r-l padd">
  <p class="color-text">Body copy — readable in night mode</p>
  <p class="text-muted">Muted / secondary text</p>
</div>
```

### Status badge on dark surface
```html
<!-- Soft (auto-paired, let bg-success control text): -->
<span class="badge bg-success">Active</span>

<!-- Inverted dark pill — pick step 700+ for bg, step 200 for text: -->
<span class="badge bg-green-800 color-green-200">Active</span>
```

### Primary CTA (default blue theme)
```html
<!-- .btn uses --bg-primary gradient; white text is AA18 — fine for button labels -->
<button class="btn">Label</button>

<!-- For strictly AA normal text on primary bg: use dark text -->
<button class="btn color-almost-black">Label</button>
```

### Section divider with full-bleed bg
```html
<!-- Wrong: .bg-2 = primary-light = blue fill, not a neutral strip -->
<!-- <section class="bg-2"> ✗ -->

<!-- Right: adaptive neutral -->
<section class="bg-gray-900 border-t border-color-gray-800 padd-v-l">
  <!-- content -->
</section>
```
