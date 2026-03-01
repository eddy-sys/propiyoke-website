# PropiyoKE — "Cosmic Dark" Revamp Design
**Date:** 2026-03-01
**Approach:** Full creative freedom — restructured layout, new sections, premium dark theme

---

## 1. Design Vision

"Cosmic Dark" — a deep purple-black SaaS aesthetic inspired by wope.com, with a dual-accent system (violet + Kenya-teal) and cinematic micro-interactions. Premium glassmorphism, animated gradients, and a magnetic cursor glow give the site a high-end, editorial feel while staying rooted in PropiyoKE's Kenyan market identity.

---

## 2. Color System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#06040f` | Page base |
| `--surface` | `#0e0b1e` | Cards, containers |
| `--surface-elevated` | `#141128` | Nested elements |
| `--border` | `rgba(139,92,246,0.12)` | Default card border |
| `--border-active` | `rgba(139,92,246,0.35)` | Hover/active border |
| `--text-primary` | `#ffffff` | Headlines |
| `--text-secondary` | `#a09cba` | Body, descriptions |
| `--text-tertiary` | `#6b6880` | Muted labels |
| `--violet` | `#8b5cf6` | Primary accent |
| `--violet-bright` | `#a78bfa` | Highlights |
| `--violet-glow` | `rgba(139,92,246,0.4)` | Glow effects |
| `--teal` | `#22d3ee` | Secondary accent |
| `--teal-glow` | `rgba(34,211,238,0.25)` | Teal glow |
| `--gradient-brand` | `135deg, #8b5cf6 → #22d3ee` | CTAs, highlights |

---

## 3. Typography

- **Display/H1:** Outfit 700–800, `clamp(48px, 6vw, 80px)`, gradient-filled (white → `rgba(255,255,255,0.65)`)
- **Accent words in headings:** brand gradient clip text (violet → teal via `background-clip: text`)
- **H2/Section titles:** Outfit 600, 36–48px, white
- **Body:** Inter 400–500, 16–18px, `#a09cba`
- **Labels/tags:** Inter 500, 11px, uppercase, `0.12em` letter-spacing, teal or violet
- **Letter spacing:** `-0.02em` to `-0.04em` on large headings

---

## 4. Page Layout — Section Order

```
1. Navbar          — frosted glass, violet glow bottom border
2. Hero            — cinematic, glow rings, floating mockup
3. Stats Bar       — count-up animated numbers, NEW
4. Features        — asymmetric bento grid, NEW layout
5. Social Proof    — marquee strip, NEW
6. Pricing         — glassmorphism cards, rotating featured border
7. CTA Band        — full-width gradient band, NEW
8. Footer          — 4-col, clean
```

---

## 5. Component Specifications

### 5.1 Navbar
- `position: fixed`, full-width
- `background: rgba(6,4,15,0.7)`, `backdrop-filter: blur(24px)`
- Bottom border: `1px solid rgba(139,92,246,0.15)` with subtle violet glow
- Logo: "PropiyoKE" white text + teal Home icon
- Nav links: hover triggers teal underline slide-in (`scaleX 0→1`, 0.2s)
- CTA button: gradient fill `violet→teal`, soft `box-shadow` glow on hover
- Mobile: hamburger toggles full-screen frosted overlay with Framer Motion

### 5.2 Hero
- `min-height: 100vh`, centered content
- **Background:** 3 animated glow orbs (violet top-left, teal top-right, dim-violet bottom-center), `blur(120px)`, `600-800px` diameter, `20-28s float`
- **Glow rings:** 3 concentric ellipses behind mockup, `border: 1px solid rgba(139,92,246,0.15/0.08/0.04)`, slow pulse `1→1.04→1`, `4s` staggered
- **Badge:** glassmorphic pill — `"✦ Built for Kenya's rental market"`, teal text
- **H1:** `"Rental management, reimagined."` — gradient text, largest on page
- **Accent:** one word or phrase in brand gradient clip text
- **Subtext:** highlight M-Pesa, utilities, multi-unit (lavender-gray)
- **CTAs:** `[Get Started →]` gradient fill + `[Book a Demo]` ghost outline, NO "free trial" language anywhere
- **Dashboard mockup:** existing `dashboard_mockup.png` (light-themed) inside a macOS-style **frosted glass browser chrome** (`rgba(255,255,255,0.06)` bg, `rgba(255,255,255,0.15)` border), subtle perspective tilt on load normalizing to flat, `box-shadow: 0 40px 120px rgba(139,92,246,0.25)` underneath
- **Bottom fade:** `linear-gradient(to bottom, transparent, #06040f)` mask at section bottom

### 5.3 Stats Bar (NEW)
- Full-width band between Hero and Features
- `background: #0e0b1e`, `border-top/bottom: 1px solid rgba(139,92,246,0.1)`
- 3 stats with count-up animation on scroll entry:
  - `2,400+` Units Managed
  - `KES 2.4B+` Rent Processed
  - `98%` Platform Uptime
- Stats separated by vertical `1px` violet hairlines
- Labels: uppercase teal, 11px; Numbers: Outfit 700, 40px, white

### 5.4 Features — Bento Grid (NEW)
- Asymmetric CSS grid, not uniform cards:
```
┌──────────────────┬──────────┐
│  M-Pesa (large)  │ Utilities│
│  spans 2 rows    ├──────────┤
│                  │ Reports  │
├─────────┬────────┴──────────┤  ← spans full width
│Short/LT │ Vendors  │ Gating │
└─────────┴──────────────────-┘
```
- Card base: `bg: #0e0b1e`, `border: 1px solid rgba(139,92,246,0.12)`, `border-radius: 16px`
- Hover: `translateY(-6px)`, border → `rgba(139,92,246,0.35)`, inner violet glow
- Large M-Pesa card: animated subtle gradient shimmer on the card background
- Icons: lucide-react, violet fill
- Staggered Framer Motion reveal (left→right, top→bottom)

### 5.5 Social Proof Strip (NEW)
- `"Trusted by property managers across Nairobi, Mombasa, Kisumu, Eldoret"`
- Infinite horizontal marquee (CSS animation, no JS needed)
- Avatar circles (initials-based placeholders) + name/city tags
- Subtle `rgba(139,92,246,0.05)` bg, violet hairlines top/bottom

### 5.6 Pricing
- Mode toggle: capsule pill tabs (Short-Term / Long-Term / Hybrid) — violet active state
- Card base: `backdrop-filter: blur(12px)`, `bg: rgba(14,11,30,0.8)`, glassmorphism
- **Featured card:** `conic-gradient(from 0deg, #8b5cf6, #22d3ee, #8b5cf6)` rotating border pseudo-element, `3s linear infinite`
- "Most Popular" badge: gradient pill, top-center of featured card
- Feature checklist: teal checkmarks
- CTA: "Get Started" (no free trial language)
- Enterprise row: contact info `sales@propiyoke.co.ke`

### 5.7 CTA Band (NEW)
- Full-width section, `linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.1))` bg
- Optional noise texture overlay (3% opacity)
- Copy: `"Start managing smarter."` — large Outfit headline
- Sub-copy: one sentence, no free trial language
- Single CTA button: `[Get Started →]` gradient
- No email input form (keeps it clean)

### 5.8 Footer
- 4 columns: Brand info | Product | Company | Legal
- `background: #06040f`, `border-top: 1px solid rgba(139,92,246,0.15)`
- Social icons row (LinkedIn, Twitter/X)
- Bottom: `"© 2026 PropiyoKE · Hosted securely in Kenya 🇰🇪"`
- Subtle violet glow on logo icon

---

## 6. Global Visual Effects

### Background Orbs (App-level)
- 3 `position: fixed` orbs behind all content
- Violet: `top: -200px, left: -200px`, `700px`, `blur(120px)`
- Teal: `top: -100px, right: -200px`, `600px`, `blur(100px)`
- Dim violet: `bottom: -300px, left: 50%`, `800px`, `blur(140px)`
- All: `pointer-events: none`, `z-index: 0`, slow float `@keyframes`

### Grid Overlay
- `::before` pseudo on body or app wrapper
- `background-image: linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)`
- `background-size: 40px 40px`

### Cursor — Magnetic Glow (NEW)
- Custom React component `<CursorGlow />`
- A `200px × 200px` radial gradient div (`pointer-events: none`, `position: fixed`, `z-index: 9999`)
- `background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)`
- Follows cursor with spring physics via Framer Motion `useSpring` (stiffness: 150, damping: 20)
- Color shifts: violet (`#8b5cf6`) on dark sections, teal (`#22d3ee`) when hovering CTAs/cards
- Hidden on mobile (`pointer-events: none`, `display: none` on touch devices)

---

## 7. Animations Summary

| Element | Animation | Duration |
|---------|-----------|----------|
| Background orbs | Float Y ±30px | 20–28s |
| Hero glow rings | Pulse scale 1→1.04 | 4s staggered |
| Rotating border | conic-gradient spin | 3s infinite |
| Stats count-up | 0 → final value | 1.5s ease-out |
| Bento cards | `y: 30→0`, opacity | 0.5s staggered |
| Cursor glow | Spring follow | stiffness:150 |
| Nav links hover | underline scaleX | 0.2s |
| Card hover | translateY -6px | 0.25s |
| Mockup entry | perspective tilt→flat | 0.8s |
| Marquee | translateX loop | 25s linear |

---

## 8. Files to Create / Modify

| File | Action |
|------|--------|
| `src/index.css` | Full rewrite — new design tokens, global styles |
| `src/App.tsx` | Update background orbs, add `<CursorGlow />` |
| `src/components/Navbar.tsx` | Rewrite — frosted glass, new hover effects |
| `src/components/Hero.tsx` | Rewrite — glow rings, new copy, glass mockup frame |
| `src/components/Features.tsx` | Rewrite — bento grid layout |
| `src/components/Pricing.tsx` | Rewrite — glassmorphism, rotating border |
| `src/components/Footer.tsx` | Rewrite — 4-col, cleaner |
| `src/components/StatBar.tsx` | CREATE — count-up stats |
| `src/components/SocialProof.tsx` | CREATE — marquee strip |
| `src/components/CtaBand.tsx` | CREATE — full-width CTA |
| `src/components/CursorGlow.tsx` | CREATE — magnetic cursor |

---

## 9. Constraints & Notes

- No "free trial" language anywhere on the page
- Dashboard mockup uses existing `public/dashboard_mockup.png` (light-themed PNG)
- All CTAs use "Get Started" or "Book a Demo"
- Enterprise contact: `sales@propiyoke.co.ke`
- Dev server runs on port 5174
- Stack: React 19 + TypeScript + Vite + Framer Motion + Lucide React
- No new dependencies needed (Framer Motion already installed covers cursor spring)
