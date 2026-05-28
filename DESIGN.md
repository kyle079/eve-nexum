---
name: EVE Nexum
description: Wormhole mapping war room for EVE Online
colors:
  void: "#08090f"
  surface: "#0d1117"
  surface-raised: "#111827"
  surface-input: "#0a0e1a"
  surface-hover: "#141c2e"
  border-subtle: "#1e2740"
  border-accent: "#2e4a7a"
  text-primary: "#c8d0e0"
  text-bright: "#e2e8f8"
  text-muted: "#6a7898"
  text-dim: "#5a6a8a"
  signal-blue: "#5b9bff"
  signal-blue-light: "#7ab4f0"
  signal-active: "#5a9af8"
  brand-purple: "#863bff"
  brand-purple-deep: "#7e14ff"
  brand-cyan: "#47bfff"
  status-online: "#3ddc84"
  status-hostile: "#e05a5a"
  status-warning: "#f0a030"
  status-neutral: "#8c98ac"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "calc(18px * var(--font-scale, 1))"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "calc(13px * var(--font-scale, 1))"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "calc(11px * var(--font-scale, 1))"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
components:
  toolbar-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  toolbar-toggle-active:
    backgroundColor: "#0d1a30"
    textColor: "{colors.signal-blue}"
  toolbar-toggle-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-primary}"
  input-default:
    backgroundColor: "{colors.surface-input}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "6px 10px"
  input-focus:
    backgroundColor: "{colors.surface-input}"
    textColor: "{colors.text-bright}"
  system-node:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  tooltip:
    backgroundColor: "#050810"
    textColor: "#f0f4ff"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  dropdown:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "4px 0"
---

# Design System: EVE Nexum

## 1. Overview

**Creative North Star: "The War Room Console"**

Nexum is mission control for wormhole operations. Every pixel serves the scanner, the FC, the scout checking chain status between fleet pings. The interface is dense and purposeful, alive with real-time data: presence indicators pulse, signatures update, connections appear and decay. Darkness is not decorative; it's the void of J-space, and the data projected onto it demands attention by contrast.

This system rejects three lineages explicitly. It is not a legacy EVE tool: no Pathfinder-era cramped tables, no PHP-admin chrome, no interfaces that feel abandoned. It is not generic SaaS: no cream backgrounds, no gentle gradients, no startup-pitch-deck neutrality. It is not gamified spectacle: no gratuitous neon, no particle effects, no trying-too-hard sci-fi that mistakes decoration for immersion. The game provides the fantasy. The tool provides clarity.

The result is a product that EVE players recognize instantly as something built by someone who maps wormholes, not something that looks like every other dashboard wearing a dark theme.

**Key Characteristics:**
- Dense information display optimized for multi-monitor gaming setups
- Dark surfaces with high-contrast text for long sessions in dim rooms
- Blue-purple signal palette tied to EVE's visual language without imitating it
- Real-time presence and state changes create energy without animation
- Compact, responsive controls built for speed, not discovery
- User-scalable typography via `--font-scale` (0.8x to 1.2x)

## 2. Colors: The Void Palette

A tonal dark palette anchored in deep blue-black, where color is signal. The background is not gray or charcoal; it is tinted toward the cold of space. Accent color is reserved for interaction and status. Saturated hues mean something: blue is friendly, red is hostile, orange is caution, green is alive.

### Primary

- **Signal Blue** (#5b9bff): Primary interactive color. Links, active states, friendly standings, CTA borders. The most-used accent in the system.
- **Signal Blue Light** (#7ab4f0): Secondary accent for softer emphasis, hover text highlights, and decorative subheads where Signal Blue would be too loud.
- **Signal Active** (#5a9af8): Focus rings, active borders, interactive feedback. Slightly cyan-shifted from Signal Blue to read as a distinct state.

### Secondary

- **Brand Purple** (#863bff / Display-P3 `color(display-p3 0.525 0.23 1)`): Logo mark, brand identity, occasional accent in marketing surfaces. Rarely used in product UI; its scarcity preserves brand recognition.
- **Brand Purple Deep** (#7e14ff): Inner glow and shadow layer in the logo. Not used in UI chrome.
- **Brand Cyan** (#47bfff / Display-P3 `color(display-p3 0.28 0.748 1)`): Logo highlight, occasional data visualization accent. Pairs with Brand Purple for identity moments.

### Tertiary

- **Status Online** (#3ddc84): Connected, active, online. Pilot presence indicators, successful operations.
- **Status Hostile** (#e05a5a): Hostile standings, error states, danger alerts, active PvP intel.
- **Status Warning** (#f0a030): Caution states, incursion warnings, fuel alerts, occupied-but-not-hostile intel.
- **Status Neutral** (#8c98ac): Empty, inactive, unknown. Default intel when no data is available.

### Neutral

- **Void** (#08090f): Deepest background. The canvas. Body and root-level surfaces.
- **Surface** (#0d1117): Toolbar, sidebar, panel backgrounds. One step up from Void.
- **Surface Raised** (#111827): Cards, system nodes, elevated containers. Tonal lift without shadows.
- **Surface Input** (#0a0e1a): Form inputs and text fields. Slightly darker than Surface to create inset feel.
- **Surface Hover** (#141c2e): Interactive hover state background. Appears on mouse-over across all clickable surfaces.
- **Border Subtle** (#1e2740): Default border. Separators, panel edges, card outlines. Visible but quiet.
- **Border Accent** (#2e4a7a): Emphasized borders. Active panels, focused containers, CTA outlines.
- **Text Primary** (#c8d0e0): Default body text. Tinted slightly blue, not pure gray.
- **Text Bright** (#e2e8f8): Headings, emphasized labels, active selections. Near-white with blue tint.
- **Text Muted** (#6a7898): Secondary labels, timestamps, inactive tab text. Readable but receded.
- **Text Dim** (#5a6a8a): Tertiary text, disabled states, placeholder content. Barely legible by design.

### Named Rules

**The Signal-Not-Decoration Rule.** Saturated color always means something: a state, an action, a classification. If a color doesn't carry information, it doesn't belong. Decorative accents are prohibited.

**The Void Tint Rule.** No pure black (#000) or pure white (#fff) anywhere. Every neutral is tinted toward the blue-purple hue family (chroma 0.005-0.01 in OKLCH). This keeps the palette cohesive and avoids the harsh edges that pure extremes create on dark displays.

## 3. Typography

**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** One font family, one voice. Inter's clarity at small sizes makes it ideal for the dense, data-heavy screens Nexum requires. No display font; hierarchy comes from weight and scale, not typeface contrast. The system-ui fallback guarantees readability if Inter fails to load.

### Hierarchy

- **Display** (600 weight, 18px scaled, line-height 1.2): Panel titles, modal headings, section headers. The largest text in the product. Reserved for structural landmarks.
- **Title** (600 weight, 16px scaled, line-height 1.2): Card headers, subsection titles, system names in nodes. Frequent but not dominant.
- **Body** (400 weight, 13px scaled, line-height 1.5): Default text. Signature details, panel content, descriptions, timestamps. 13px is deliberate: dense enough to fit more data, large enough to read for hours.
- **Label** (500 weight, 11-12px scaled, line-height 1.2, letter-spacing 0.02em): Status badges, tab labels, small interactive text, toolbar items. The workhorses of the dense UI.

All sizes scale via `calc(Npx * var(--font-scale, 1))`. Users control density by adjusting `--font-scale` from 0.8 to 1.2. Layout and spacing are unaffected; only text reflows.

### Named Rules

**The One Family Rule.** Inter everywhere. No secondary typeface, no monospace for "techy feel," no display font for landing page drama. Hierarchy is weight and scale, never typeface switching.

**The Tabular Numbers Rule.** All numeric displays use `font-variant-numeric: tabular-nums`. System IDs, signature counts, mass values, and timestamps must align in columns without jitter.

## 4. Elevation

Nexum is flat by design. Depth is communicated through tonal layering: Void (#08090f) sits beneath Surface (#0d1117) sits beneath Surface Raised (#111827). Darker means further back. No ambient shadows, no drop shadows on cards or panels at rest.

Shadows appear only in two contexts: floating overlays that must separate from the layer below (tooltips, dropdowns, command palette), and interactive glow on the map canvas (system node hover/selection). Both are functional, not decorative.

### Shadow Vocabulary

- **Tooltip shadow** (`0 4px 12px rgba(0, 0, 0, 0.6)`): Tight, dark. Separates the tooltip from whatever it floats over. Applied to `[data-tooltip]` pseudo-elements and floating tooltip portals.
- **Dropdown shadow** (`0 8px 24px rgba(0, 0, 0, 0.5)`): Wider spread for menus and popovers. Creates enough lift to distinguish from sidebar content below.
- **Node glow** (`0 0 12px color-mix(in srgb, var(--class-color) 30%, transparent)`): Map-specific. System nodes gain a colored halo on hover, intensifying on selection. The glow color is the wormhole class color, making it simultaneously decorative and informational.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. If something has a shadow and it isn't floating above another layer, the shadow is wrong. Remove it.

## 5. Components

### Toolbar Toggles (Primary Button Pattern)

Compact, icon-or-text buttons that line the 48px toolbar. The dominant interactive element in the product.

- **Shape:** Gently rounded (4px radius)
- **Default:** Transparent background, muted text (#6a7898). Nearly invisible until needed.
- **Hover:** Surface Hover background (#141c2e), text brightens to Text Primary (#c8d0e0). 120ms ease transition.
- **Active/On:** Dark blue tint (#0d1a30), Signal Blue text (#5b9bff). State is color, not elevation.
- **Prominent variant:** Surface Raised background (#2a3a5a) for actions that need to stand out at rest (Sign Out, critical toggles).
- **Icon-only variant:** 28x28px square, inline-flex centered. Icons are 18px Phosphor SVGs, display:block to kill baseline gap.
- **Status LED:** 6px circle at bottom-right of icon buttons. Green (#3ddc84) when on, red (#e05a5a) when off. Glows with matching box-shadow.

### Inputs / Fields

- **Shape:** Moderate rounding (6px radius)
- **Default:** Surface Input background (#0a0e1a), Border Subtle (#1e2740) border, Text Primary color.
- **Focus:** Border shifts to Signal Active (#6ea0ff), no glow. Background unchanged.
- **Size:** 6px 10px padding. Font size matches body (13px scaled). Compact vertical footprint.
- **Selects:** Same styling as text inputs. `accent-color: #5b9bff` for native checkboxes and sliders.

### System Node (Signature Component)

The map's core element. Rectangular cards on the @xyflow/react canvas representing solar systems.

- **Shape:** Rounded (8px radius), min 150x80px
- **Background:** Surface Raised (#111827)
- **Border:** 1.5px solid, tinted by wormhole class color via `color-mix(in srgb, var(--class-color) 40%, #1e2740)`. Border carries classification data.
- **Hover:** Border saturates to full class color. Glow halo appears (12px spread, 30% class color opacity).
- **Selected:** Glow intensifies (16px spread, 40% opacity). Border fully saturated.
- **Home system:** Double border style. Visually distinct at any zoom level.
- **Current system:** Yellow border (#f5c518) with golden glow. Always visible, always prominent.
- **Stale:** 45% opacity, desaturated filter. Aged connections fade rather than disappear.
- **Intel overlays:** 2.5px border in intel-specific color (friendly blue, hostile red, occupied orange).

### Tooltips

- **Shape:** Tight rounding (4px radius)
- **Background:** Near-black (#050810), 1px Border Accent (#4a6ea8) border
- **Text:** Near-white (#f0f4ff), 500 weight. High contrast for quick reads.
- **Shadow:** Tooltip shadow (0 4px 12px rgba(0,0,0,0.6))
- **Positioning:** CSS pseudo-element (`::after`) for inline tooltips, portal-rendered for floating tooltips. Both use `white-space: nowrap`.

### Dropdowns / Popovers

- **Shape:** Moderate rounding (6px radius)
- **Background:** Surface (#0d1117), 1px Border Accent (#2e4a7a) border
- **Shadow:** Dropdown shadow (0 8px 24px rgba(0,0,0,0.5))
- **Items:** 13px text, 7px vertical padding. Hover background is Surface Hover. No icons in most menus.
- **Positioning:** Fixed or absolute, z-indexed above toolbar.

### Sidebar Panels

- **Width:** 18vw (min 180px, max 360px). Resizable via drag handle.
- **Background:** Surface (#0d1117). Border Subtle edge against main content.
- **Header:** 40px height, flex row, padding 8px 12px. Contains title + collapse toggle.
- **Collapsed state:** 28px wide. Expand tab fills the rail.
- **Sections:** Collapsible with chevron caret. Content scrolls independently.

### Cards (System Panel)

- **Background:** Surface or Surface Raised depending on nesting depth
- **Border:** 1px Border Subtle (#1e2740)
- **Padding:** 8-16px internal
- **Behavior:** Drag-reorderable via @dnd-kit. Vertical stack layout.

## 6. Do's and Don'ts

### Do:

- **Do** use Signal Blue (#5b9bff) as the sole interactive accent in product UI. Every clickable, focusable, or active element uses this color or its variants.
- **Do** communicate depth through background shade stepping (Void → Surface → Surface Raised), not shadows.
- **Do** keep all transitions under 200ms with ease or ease-out timing. Controls must feel instant.
- **Do** tint every neutral toward blue-purple. Even "gray" text (#6a7898) carries the hue.
- **Do** use `color-mix()` for dynamic tinting against class colors. It keeps the wormhole palette consistent without maintaining dozens of static variants.
- **Do** use `font-variant-numeric: tabular-nums` on any column of numbers.
- **Do** scale all text through `calc(Npx * var(--font-scale, 1))` so user zoom preference is respected everywhere.

### Don't:

- **Don't** use legacy EVE tool patterns: cramped HTML tables for data, inline styles, Windows-95-era form controls, or anything that looks like it was built in 2012 PHP.
- **Don't** adopt generic SaaS aesthetics: cream/warm-gray backgrounds, gentle pastel gradients, rounded-everything with generous whitespace, or Stripe/Linear visual language.
- **Don't** add gratuitous sci-fi decoration: neon glow effects, particle systems, animated star fields, scanline overlays, or any effect that exists to "feel spacey" rather than communicate data.
- **Don't** use saturated color without semantic meaning. Every red, orange, green, or blue in the UI must map to a state or classification. Decorative accent color is prohibited.
- **Don't** add shadows to resting surfaces. If it's not floating above another layer (tooltip, dropdown, command palette), it's flat.
- **Don't** use border-left or border-right greater than 1px as a colored accent stripe on cards, alerts, or list items.
- **Don't** use gradient text (`background-clip: text` with gradient). Emphasis is weight or size, never gradient.
- **Don't** introduce a second typeface. Inter handles every role. No monospace for "technical feel," no display font for headings.
- **Don't** use pure black (#000000) or pure white (#ffffff). The Void Tint Rule applies everywhere.
- **Don't** build modal-first flows. Exhaust inline and progressive-disclosure alternatives before reaching for a modal.
