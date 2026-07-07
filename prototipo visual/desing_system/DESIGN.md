---
name: Wanderlust Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#9b4500'
  on-secondary: '#ffffff'
  secondary-container: '#fc8a40'
  on-secondary-container: '#672c00'
  tertiary: '#1b1f21'
  on-tertiary: '#ffffff'
  tertiary-container: '#303436'
  on-tertiary-container: '#999c9e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68d'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#763300'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#434749'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality is rooted in the intersection of high-end editorial discovery and functional utility. It aims to evoke a sense of professional reliability mixed with the visceral excitement of global exploration. The target audience includes modern travelers who value both aesthetics and efficiency—individuals who seek "authentic" experiences but require "seamless" technology to find them.

The design style is a hybrid of **Minimalism** and **Modern Corporate**, utilizing heavy whitespace to let high-resolution travel photography act as the primary visual driver. It incorporates subtle **Glassmorphism** for navigational overlays to maintain a sense of depth and place, ensuring the UI feels like a transparent lens through which the user views the world.

## Colors
The palette is inspired by the transition from day to night. 
- **Deep Ocean Blue (#003366)**: Used for primary branding, navigation bars, and "heavy" UI elements to establish trust and depth.
- **Sunset Orange (#FF8C42)**: An energetic accent color reserved for high-intent actions, highlights, and "Discovery" badges. 
- **Clean Whites & Grays**: The foundation of the interface is built on **#FFFFFF** for surfaces and **#F4F7F9** for background layering to maintain a "breathable" feel.
- **Text**: Primary body copy uses **#1A1A1A** to ensure AA/AAA accessibility against light backgrounds.

## Typography
The typography strategy pairs the geometric strength of **Montserrat** for headings with the systematic clarity of **Inter** for functional text. 
- **Headlines**: Set in Montserrat with tighter letter-spacing to create a "premium magazine" feel. Large display types should be used sparingly to anchor key discovery sections.
- **Body & Metadata**: Inter provides high legibility for dense travel itineraries and property descriptions.
- **Labels**: Small-caps or all-caps styling is used for filter categories and "Overline" text to distinguish metadata from narrative content.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The rhythm is based on an 8px square baseline grid.

- **Desktop**: Content is capped at 1280px to prevent line lengths from becoming unreadable on ultra-wide monitors.
- **Mobile**: Margins are reduced to 16px, but vertical spacing between cards is increased to 24px to emphasize individual "moments" or "experiences."
- **White Space**: Use generous padding (64px+) between major sections to mimic the layout of a premium travel journal.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Soft Ambient Shadows**.
- **Level 1 (Surface)**: Background #F4F7F9.
- **Level 2 (Cards)**: White (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
- **Level 3 (Modals/Search)**: High-contrast white with a tighter shadow and a 1px border (#E5EAEF) to define boundaries without adding visual weight.
- **Overlays**: Use a backdrop blur (12px) with a semi-transparent white tint (80% opacity) for sticky navigation bars to keep the user grounded in the visual content as they scroll.

## Shapes
A **Rounded (0.5rem)** approach is standard for most interface elements to balance professional structure with approachability. 
- **Cards & Inputs**: 8px (0.5rem) corner radius.
- **Buttons & Chips**: 100px (Pill-shaped) to encourage interaction and provide a distinct contrast against the rectangular nature of travel photography.
- **Image Containers**: Always use the standard 8px radius to maintain a consistent "frame" across the gallery.

## Components
- **Experience Cards**: The centerpiece. Use a 4:3 or 16:9 aspect ratio for images. Title in Headline-MD (Montserrat), price/location in Body-MD (Inter). Implement a subtle hover state where the image scales slightly (1.05x) without breaking the container.
- **Search Bars**: Floating, high-elevation inputs with integrated "Guest," "Date," and "Destination" segments separated by thin vertical dividers.
- **Filter Chips**: Pill-shaped with a white background and 1px border for inactive states; Sunset Orange background with white text for active states.
- **Buttons**:
    - *Primary*: Deep Ocean Blue, pill-shaped, bold Inter text.
    - *Action*: Sunset Orange, reserved for "Book Now" or "Explore."
- **Progressive Disclosure**: Use "Show More" maps or expandable itinerary lists to keep initial views clean and discovery-focused.
- **Rating Badges**: Small Sunset Orange star icons paired with bold Inter labels for social proof.