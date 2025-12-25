# PROMPT_GUIDE · Lagunite + AI

## Core Facts (tell the model up front)
- Framework: Lagunite v2, utility-first with descriptive class names.
- Breakpoints: base (no prefix), `x` = max-width 639px, `d` = min-width 640px.
- Layout: flex stacks (`.row`, `.rowr`, `.col`, `.colr`, `.row-col`, `.col-row`), gaps via `.f-gap-*`, grid via `.grid`, `.grid-auto`, `.grid-cols-1..12`, `.grid-rows-1..6`, responsive `xgrid*`/`dgrid*` and `xg-*`/`dg-*` gaps.
- Spacing: margins `.marg*`, horizontal `.marg-h*`, vertical `.marg-v*`; paddings `.padd*`, `.padd-h*`, `.padd-v*` with `x`/`d` variants. Sizes use `--space-*` tokens.
- Sizing: intrinsic `.w-auto/.h-auto`, `.w-full/.h-full`, viewport `.w-screen/.h-screen` (vw+ dvw, vh+ dvh), half/quarter screen, semantic steps `.w1..w14`, `.h1..h14`, min-width/height `.min-w1..min-w14`, percent min-width `.minwp10..minwp100` (5% steps) with `x`/`d` variants.
- Typography: case (`.uppercase`, `.lowercase`, `.capitalize`), letter spacing (`.letter-spacing*`), line height (`.lh*`), text align (`.ta-*` with `xta-*`/`dta-*`).

## Prompting Rules for the Assistant
- Say explicitly: “Use Lagunite v2 utilities only; do not invent classes.”
- Order classes base → `x` → `d`. Keep responsive intent clear (what changes on mobile/desktop).
- Prefer semantic utilities before inline styles; only fall back to inline CSS if the utility does not exist and call that out.
- Use layout utilities first (flex/grid) before manual positioning.
- Use spacing tokens via utilities (`.padd`, `.marg-h-s`) instead of raw px.
- Use semantic sizes (`.w1`, `.w-full`, `.w-screen`) before arbitrary widths.
- Keep output minimal: only the requested HTML/JSX with classes; short notes if a utility is missing.

## Ready-to-Copy Prompt Starters

**Component from scratch**
```
You are generating HTML with Lagunite v2 utilities (see cheat sheet). 
Rules: base classes first, then x-prefixed (<=639px), then d-prefixed (>=640px). 
Prefer layout utilities (row/col/grid, f-gap/g-gap). Use semantic sizes (w1..w14, h1..h14, w-full, w-screen). 
Use spacing utilities (padd*, marg*). Avoid inventing classes. If a utility is missing, mention the gap and propose closest existing. 
Return only the HTML snippet.
```

**Translate Tailwind to Lagunite**
```
Convert this Tailwind markup to Lagunite v2. Keep the structure; replace classes with Lagunite equivalents. 
Breakpoints: base, x<=639, d>=640. Use padd*/marg*, row/col/f-gap, grid/grid-cols-*, w-full/w-screen/w1..w14, h1..h14, text alignment classes. 
If an exact match does not exist, note the closest available utility instead of inventing one. Return only the converted HTML.
```

**Refine responsiveness**
```
Given this Lagunite snippet, add mobile (x*) and desktop (d*) refinements. Base stays default; x reduces spacing and stack content; d restores multi-column layout. Only use existing Lagunite utilities.
```

## How to Review AI Output Quickly
- Scan class names: they should match the cheat sheet; anything exotic is likely wrong.
- Check responsive order: base first, then `x*`, then `d*`.
- Ensure spacing and sizing rely on utilities, not inline styles.
- Verify viewport units use provided helpers (`.w-screen`, `.h-screen`, `.w-half-screen`, etc.).

## Example Request + Expected Shape
Request: “Create a two-column hero that stacks on mobile.”
Output shape (simplified):
```html
<section class="padd padd-v-l">
  <div class="grid dgrid-cols-2 xgrid-cols-1 g-gap-l">
    <div class="row f-gap padd">
      <h1 class="capitalize lh">Title</h1>
      <p class="lh">Copy</p>
    </div>
    <div class="col f-gap padd">
      <!-- media / illustration -->
    </div>
  </div>
</section>
```
Notes: base grid = 1col, desktop = 2col; spacing via utilities; no invented classes.
