```markdown
# Design System: The Digital Atelier

## 1. Overview & Creative North Star
This design system is anchored by the Creative North Star: **"The Digital Curator."** 

Moving away from the sterile, rigid grids of standard utility apps, this system treats the user’s wardrobe as a high-end editorial collection. We achieve a premium feel through **intentional asymmetry**, where large `display-lg` typography overlaps container edges, and **tonal depth**, where elements are separated by soft shifts in lightness rather than harsh lines. The goal is to make the interface feel tactile—like flipping through a heavy-stock fashion lookbook—rather than scrolling through a database.

---

## 2. Colors & Surface Philosophy
The palette is grounded in natural, textile-inspired tones. The interplay between `surface` and its variants creates an atmosphere of organized calm.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** To define boundaries, designers must use background color shifts. A `surface-container-low` section sitting on a `background` provides all the definition needed. This "borderless" approach ensures the UI feels like a single, cohesive fabric rather than a collection of boxes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine linen.
- **Background (`#faf9f7`):** The base canvas.
- **Surface-Container-Low (`#f4f3f1`):** For secondary content areas.
- **Surface-Container-Lowest (`#ffffff`):** For high-priority interactive cards, creating a "lifted" feel against the warmer background.

### The "Glass & Gradient" Rule
To elevate the "boutique" feel, floating elements (like Navigation Bars or Detail Overlays) should utilize **Glassmorphism**. Use `surface` colors at 80% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#6c5e06) to `primary_container` (#cbb95d) at a 135-degree angle. This adds a "silk-like" sheen that flat color cannot replicate.

---

## 3. Typography
We use a dual-typeface system to balance editorial authority with functional clarity.

*   **Display & Headlines (Manrope):** Chosen for its geometric elegance. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments. This is the "voice" of the curator.
*   **Body & Labels (Inter):** Chosen for its exceptional legibility at small scales. Inter handles the "logistics"—care instructions, fabric compositions, and dates.

**Editorial Hierarchy:**
- **The Power Shift:** Pair a `display-sm` Manrope headline with a `label-md` Inter caption in all caps (letter-spacing: 0.1em) to create an immediate high-fashion aesthetic.

---

## 4. Elevation & Depth
In this system, depth is a whisper, not a shout.

*   **The Layering Principle:** Avoid shadows for static cards. Instead, place a `surface-container-highest` card on a `surface` background to create a soft, natural focal point.
*   **Ambient Shadows:** For elevated elements like Modals or floating Action Buttons, use extra-diffused shadows: `box-shadow: 0 12px 40px rgba(26, 28, 27, 0.06)`. Note the color: we use a tint of `on_surface` (#1a1c1b), never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (Primary to Primary-Container), `xl` (1.5rem) rounded corners. Text is `on_primary` (#ffffff).
- **Secondary:** `surface-container-high` background with `on_secondary` text. No border.
- **Tertiary:** Purely typographic using `label-md`, with a `2px` underline in `tertiary` (#006e20) for a "fresh" care accent.

### Cards & Wardrobe Slots
- **Rule:** Forbid divider lines.
- **Styling:** Use `surface-container-lowest` backgrounds with `lg` (1rem) corner radius. Use the Spacing Scale `6` (2rem) for internal padding to give the garment photography "room to breathe."

### Input Fields
- **State:** Instead of a border, active fields should transition from `surface-container-highest` to a subtle `primary_fixed` glow.
- **Labeling:** Use `label-sm` in `secondary` (#5f5e5e), floating above the input area to maintain a minimalist footprint.

### Special App Components: The "Care Tag"
- **Chips:** Small, pill-shaped (`full` roundedness) containers using `tertiary_container` (#69ce6d) for "Fresh/Clean" status and `primary_fixed` (#f7e382) for "Maintenance Required."

---

## 6. Do's and Don'ts

### Do:
- **Use White Space as a Tool:** Use spacing scale `12` (4rem) and `16` (5.5rem) between major sections to emphasize the premium, unhurried vibe.
- **Asymmetric Imagery:** Allow garment photos to break the container grid slightly (e.g., a 5px negative margin) to create a "layered paper" effect.
- **Tonal Transitions:** Transition hover states by moving one step up the surface-container scale (e.g., `low` to `lowest`).

### Don't:
- **Never use pure black (#000000).** It breaks the natural, organic feel of the "Sand" and "Charcoal" palette.
- **Avoid high-contrast dividers.** If you feel the need to separate two items, increase the vertical spacing (`3.5rem`) instead of drawing a line.
- **No aggressive rounding.** Avoid "bubbly" looks. Stick to the `lg` (1rem) and `xl` (1.5rem) tokens for a sophisticated, architectural curve.

---

## 7. Spacing & Rhythm
Consistency is maintained through a base-7 scale (derived from the `0.35rem` increment). 
- Use **Spacing 4 (1.4rem)** for standard gutter widths.
- Use **Spacing 8 (2.75rem)** for vertical separation of related content blocks.
- **The "Breathe" Rule:** Every screen must contain at least one "Void" area (using Spacing 20 or 24) to ensure the UI never feels cluttered or utilitarian.```