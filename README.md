# PropiyoKE — Marketing Website

> The official landing page for **PropiyoKE**, a property rental management SaaS built for Kenyan landlords and property operators. Designed to drive signups, explain the product, and present subscription plans for short-term, long-term, and hybrid rental portfolios.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React + TypeScript | 19.2 |
| Build Tool | Vite | 7.3 |
| Animations | Framer Motion | 12 |
| Icons | Lucide React | 0.575 |
| Routing | React Router DOM | 7 |
| Styling | Custom CSS with design tokens | — |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#06040f` | Page background |
| Primary | `#8b5cf6` | Violet — CTAs, highlights |
| Secondary | `#22d3ee` | Teal — accents, feature icons |
| Heading font | Outfit | All headings |
| Body font | Inter | Body copy, labels |

The site uses a dark-first aesthetic with:
- Animated gradient orbs in the background
- Subtle dot-grid overlay
- Scroll-driven entrance animations via Framer Motion
- A custom cursor glow component that follows the pointer

---

## Page Sections

```
Navbar
  ├── Logo + navigation links
  └── Get Started / Book a Demo CTAs

Hero
  ├── Headline: "Rental management, reimagined"
  ├── Sub-headline and dual CTAs
  └── Animated DashboardMockup preview

StatBar
  └── Key platform metrics

Features
  ├── M-Pesa Reconciliation     ← hero feature card
  ├── Utility Meter Tracking
  ├── Dynamic Reports
  ├── Short & Long-Term Support
  ├── Vendor & Task Management
  └── Scalable Feature Gating

SocialProof
  └── Customer testimonials and logos

Pricing
  ├── Mode toggle: Short-term / Long-term / Hybrid
  └── Tiered plan cards with full feature comparison

CTA Band
  └── Secondary conversion section

Footer
  └── Navigation links and legal

ContactModal (overlay)
  ├── Book a Demo mode
  └── Talk to Sales mode
```

---

## Pricing Tiers

### Short-Term (Airbnb-style hosts)

| Plan | Monthly Price | Unit Limit |
|---|---|---|
| Solo Host | KES 3,500 | Up to 3 units |
| Pro Host | KES 9,500 | Up to 10 units |
| Operator | KES 22,000 | Up to 30 units |
| Agency | KES 45,000 | Unlimited |

### Long-Term (Residential landlords)

| Plan | Monthly Price | Unit Limit |
|---|---|---|
| Startup | KES 15,000 | Up to 10 units |
| Professional | KES 45,000 | Up to 50 units |
| Enterprise | KES 100,000 | Up to 150 units |

### Hybrid (Mixed portfolios)

| Plan | Monthly Price | Unit Limit |
|---|---|---|
| Hybrid Portfolio | KES 55,000 | Up to 50 units |
| Premium Hybrid | KES 120,000 | Up to 200 units |

---

## Project Structure

```
propiyoke-website/
├── public/                      # Static assets and favicons
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Top navigation
│   │   ├── Hero.tsx             # Main headline section
│   │   ├── StatBar.tsx          # Platform statistics
│   │   ├── Features.tsx         # Feature grid with cards
│   │   ├── SocialProof.tsx      # Testimonials
│   │   ├── Pricing.tsx          # Tiered pricing with mode toggle
│   │   ├── CTABand.tsx          # Mid-page CTA
│   │   ├── Footer.tsx           # Footer links and legal
│   │   ├── ContactModal.tsx     # Demo / sales inquiry modal
│   │   ├── DashboardMockup.tsx  # App preview graphic
│   │   ├── AnimatedOrbs.tsx     # Background gradient orbs
│   │   └── CursorGlow.tsx       # Interactive cursor glow effect
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                # Global styles and design tokens
├── index.html
├── vite.config.ts
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5174

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Deploys to **Netlify** automatically on push to `main`.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

---

## Related

- **PropiyoKE App** — [github.com/eddy-sys/RentalManagement](https://github.com/eddy-sys/RentalManagement)
- **Live App** — [propiyoke.netlify.app](https://propiyoke.netlify.app)
