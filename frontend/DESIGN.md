---
name: Ethereal Portfolio
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#64a8fe'
  on-secondary-container: '#003c70'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#21005e'
  on-tertiary-container: '#8d72de'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#cebdff'
  on-tertiary-fixed: '#21005e'
  on-tertiary-fixed-variant: '#4f319c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  glass-fill: rgba(255, 255, 255, 0.4)
  glass-border: rgba(255, 255, 255, 0.2)
  subtle-gray: '#6B7280'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  section-gap: 160px
  section-gap-mobile: 80px
  grid-gutter: 32px
  base-unit: 8px
---

## Brand & Style

This design system is engineered for high-end personal portfolios, prioritizing an immersive, editorial feel. The brand personality is sophisticated, confident, and meticulously polished, catering to a creative professional audience. 

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes a "quiet" foundation of expansive whitespace and stark typography, punctuated by ethereal translucent layers and soft gradient accents. The goal is to create a digital gallery space where the user's work is the focal point, supported by a UI that feels like light passing through frosted glass.

## Colors

The palette is anchored by an off-white background (`#F9FAFB`) to reduce eye strain compared to pure white, while maintaining a pristine look. Deep charcoal (`#111827`) provides high-contrast legibility for typography. 

Accentuation is handled through a soft blue-to-purple gradient, used sparingly for interactive states, progress indicators, or decorative organic shapes in the background. Glassmorphism components use a semi-transparent white fill with a `backdrop-filter: blur(12px)` to create depth without visual clutter.

## Typography

The typography system relies on the technical precision of **Geist** for headings and UI labels, paired with the highly legible **Inter** for long-form body text. 

Key characteristics include:
- **Cinematic Headers:** Massive display sizes with tight tracking for a dramatic, architectural look.
- **Labeling:** Small, all-caps Geist labels with generous letter spacing (0.2em) for metadata and section headers.
- **Readability:** Body text uses a generous line height (1.6) to support the "airy" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (12 columns, 1440px max-width) to ensure portfolio assets are framed correctly. Spacing is intentionally "oversized" to evoke luxury and focus.

- **Vertical Rhythm:** Sections are separated by massive gaps (`160px`) to force the user to focus on one piece of content at a time.
- **Margins:** Use a minimum of `64px` side margins on desktop and `24px` on mobile.
- **Reflow:** On mobile, the 12-column grid collapses to a single column, with section gaps halved to maintain momentum while keeping the airy feel.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Ambient Shadows** rather than traditional stacking.

- **Surfaces:** Use `glass-fill` with a `1px` border of `glass-border`. This creates a "lens" effect over background gradients.
- **Shadows:** Avoid harsh shadows. Use a single "Soft Lift" style: `0px 20px 40px rgba(0, 0, 0, 0.04)`. This gives components a weightless, floating appearance.
- **Interactions:** On hover, the backdrop-blur intensity should increase slightly, and the `glass-border` opacity should shift from 0.2 to 0.4.

## Shapes

The design system utilizes **Rounded** geometry (`0.5rem` or `8px` base) to soften the high-contrast typography. 

- **Cards & Modals:** Use `rounded-xl` (1.5rem) to emphasize the containerized nature of the glass elements.
- **Buttons:** Use fully pill-shaped corners for a friendly, modern touch that contrasts against the sharp display headers.
- **Media:** Images and videos should always feature a soft `0.5rem` corner radius to maintain consistency with the UI components.

## Components

### Buttons
- **Primary:** Deep charcoal background, white text, pill-shaped. Hover state involves a subtle scale-up (1.02x) and a soft blue shadow.
- **Secondary (Glass):** Semi-transparent white background, 1px border, backdrop-blur. No background fill change on hover; instead, increase border opacity.

### Cards
- Glassmorphic containers with `rounded-xl` corners. 
- Content inside should have generous padding (`40px`).
- Images within cards should fill the top half and be clipped by the card's border radius.

### Input Fields
- Underline-style inputs or very light gray fills with no borders except for a bottom focus line. 
- Focus state triggers the soft blue (`#60A5FA`) accent.

### Navigation
- A floating glass dock at the bottom or top of the screen. 
- Use small `label-caps` typography for nav items.
- Backdrop blur is essential here to maintain legibility over varying portfolio content.

### Portfolio Grid
- Use asymmetrical layouts (e.g., some items spanning 8 columns, others 4) to create visual interest and an editorial rhythm.