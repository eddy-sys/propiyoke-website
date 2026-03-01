# PropiyoKE Cosmic Dark Revamp — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fully revamp PropiyoKE's landing page with a premium "Cosmic Dark" theme — deep purple-black, dual violet+teal accents, glassmorphism, animated orbs, bento grid features, and a magnetic cursor glow.

**Architecture:** Pure CSS + React component rewrites. No new dependencies — Framer Motion (already installed) handles all spring animations and scroll reveals. New components (StatBar, SocialProof, CtaBand, CursorGlow) are added alongside rewrites of all existing components.

**Tech Stack:** React 19 + TypeScript + Vite + Framer Motion 12 + Lucide React + CSS custom properties

---

## Task 1: Rewrite `src/index.css` — Design System Foundation

**Files:**
- Modify: `src/index.css`

**Step 1: Replace the entire file with the new design system**

```css
/* ─── Fonts ─────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

/* ─── Design Tokens ──────────────────────────── */
:root {
  /* Backgrounds */
  --bg:               #06040f;
  --surface:          #0e0b1e;
  --surface-elevated: #141128;
  --surface-hover:    #1a1630;

  /* Borders */
  --border:           rgba(139, 92, 246, 0.12);
  --border-active:    rgba(139, 92, 246, 0.35);
  --border-bright:    rgba(139, 92, 246, 0.6);

  /* Text */
  --text-primary:     #ffffff;
  --text-secondary:   #a09cba;
  --text-tertiary:    #6b6880;

  /* Violet accent */
  --violet:           #8b5cf6;
  --violet-bright:    #a78bfa;
  --violet-dim:       rgba(139, 92, 246, 0.15);
  --violet-glow:      rgba(139, 92, 246, 0.4);

  /* Teal accent */
  --teal:             #22d3ee;
  --teal-bright:      #67e8f9;
  --teal-dim:         rgba(34, 211, 238, 0.15);
  --teal-glow:        rgba(34, 211, 238, 0.25);

  /* Gradients */
  --gradient-brand:   linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%);
  --gradient-brand-soft: linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(34,211,238,0.1) 100%);
  --gradient-text:    linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%);

  /* Layout */
  --max-width:        1200px;
  --nav-height:       72px;
  --radius-sm:        8px;
  --radius-md:        12px;
  --radius-lg:        16px;
  --radius-xl:        24px;

  /* Transitions */
  --t-fast:           0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --t-smooth:         0.35s cubic-bezier(0.16, 1, 0.3, 1);
  --t-spring:         0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ─── Reset & Base ───────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ─── Grid Overlay ───────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* ─── Typography ─────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

/* Gradient text utility */
.gradient-text {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Fade gradient heading */
.heading-gradient {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p { color: var(--text-secondary); line-height: 1.65; }

a { color: inherit; text-decoration: none; }

img, video { max-width: 100%; display: block; }

/* ─── Layout Utilities ───────────────────────── */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  position: relative;
  z-index: 1;
  padding: 100px 0;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.section-sub {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.65;
}

/* ─── Buttons ────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--t-fast);
  border: none;
  white-space: nowrap;
  text-decoration: none;
}

.btn-primary {
  background: var(--gradient-brand);
  color: #ffffff;
  box-shadow: 0 0 0 rgba(139, 92, 246, 0);
}
.btn-primary:hover {
  box-shadow: 0 0 24px rgba(139, 92, 246, 0.45), 0 0 48px rgba(34, 211, 238, 0.2);
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-active);
}
.btn-ghost:hover {
  background: var(--surface);
  border-color: var(--violet);
  color: var(--violet-bright);
}

/* ─── Card Base ──────────────────────────────── */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--t-smooth);
}
.card:hover {
  border-color: var(--border-active);
  box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.1), 0 20px 60px rgba(139, 92, 246, 0.08);
  transform: translateY(-4px);
}

/* ─── Background Orbs ────────────────────────── */
.bg-orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
}

.orb-violet {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation: float-orb 24s ease-in-out infinite;
}

.orb-teal {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%);
  top: -100px;
  right: -200px;
  animation: float-orb 20s ease-in-out infinite reverse;
  filter: blur(100px);
}

.orb-violet-dim {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  animation: float-orb 28s ease-in-out infinite 4s;
  filter: blur(140px);
}

@keyframes float-orb {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33%       { transform: translateY(-30px) translateX(15px); }
  66%       { transform: translateY(15px) translateX(-20px); }
}

/* ─── Navbar ─────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 100;
  transition: all var(--t-fast);
}

.navbar.scrolled {
  background: rgba(6, 4, 15, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(139, 92, 246, 0.15);
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.05);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.navbar-logo svg { color: var(--teal); }

.navbar-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.navbar-links a {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--t-fast);
  padding-bottom: 2px;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--teal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-fast);
}

.navbar-links a:hover {
  color: var(--text-primary);
}

.navbar-links a:hover::after {
  transform: scaleX(1);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar-signin {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--t-fast);
}
.navbar-signin:hover { color: var(--text-primary); }

.navbar-hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 4px;
}

/* Mobile nav overlay */
.mobile-nav {
  position: fixed;
  inset: 0;
  background: rgba(6, 4, 15, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.mobile-nav a {
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--t-fast);
}
.mobile-nav a:hover { color: var(--violet-bright); }

/* ─── Hero ───────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--nav-height) + 60px) 24px 80px;
  overflow: hidden;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.2);
  font-size: 13px;
  font-weight: 500;
  color: var(--teal);
  margin-bottom: 32px;
  backdrop-filter: blur(8px);
}

.hero-title {
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 24px;
  max-width: 860px;
}

.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-secondary);
  max-width: 560px;
  margin-bottom: 40px;
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 72px;
}

/* Glow rings */
.glow-rings {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 900px;
  height: 400px;
  pointer-events: none;
}

.glow-ring {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 50%;
  border-style: solid;
  animation: ring-pulse 4s ease-in-out infinite;
}

.glow-ring:nth-child(1) {
  width: 600px; height: 240px;
  border-width: 1px;
  border-color: rgba(139, 92, 246, 0.2);
  animation-delay: 0s;
}
.glow-ring:nth-child(2) {
  width: 800px; height: 320px;
  border-width: 1px;
  border-color: rgba(139, 92, 246, 0.1);
  animation-delay: 0.8s;
}
.glow-ring:nth-child(3) {
  width: 1000px; height: 400px;
  border-width: 1px;
  border-color: rgba(139, 92, 246, 0.05);
  animation-delay: 1.6s;
}

@keyframes ring-pulse {
  0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
  50%       { transform: translateX(-50%) scale(1.04); opacity: 0.7; }
}

/* Mockup frame */
.hero-mockup-wrap {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.hero-mockup-glow {
  position: absolute;
  inset: -40px;
  background: radial-gradient(ellipse 70% 50% at 50% 70%, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-mockup-frame {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.1),
    0 40px 120px rgba(139, 92, 246, 0.2),
    0 80px 160px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

/* macOS chrome bar */
.mockup-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mockup-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mockup-dot:nth-child(1) { background: rgba(255, 97, 86, 0.7); }
.mockup-dot:nth-child(2) { background: rgba(255, 189, 46, 0.7); }
.mockup-dot:nth-child(3) { background: rgba(40, 200, 64, 0.7); }

.mockup-url {
  flex: 1;
  margin: 0 12px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  font-size: 11px;
  color: var(--text-tertiary);
  text-align: center;
}

.mockup-img {
  width: 100%;
  display: block;
}

/* Hero bottom fade */
.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--bg));
  pointer-events: none;
  z-index: 2;
}

/* ─── Stats Bar ──────────────────────────────── */
.stats-bar {
  position: relative;
  z-index: 1;
  background: var(--surface);
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  padding: 48px 24px;
}

.stats-bar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.stat-item {
  text-align: center;
  padding: 0 48px;
}

.stat-item:not(:last-child) {
  border-right: 1px solid rgba(139, 92, 246, 0.12);
}

.stat-number {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--teal);
}

/* ─── Features Bento ─────────────────────────── */
.features {
  padding: 100px 0;
}

.bento-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;
}

/* Row 2 is 3-col spanning full width */
.bento-row-2 {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all var(--t-smooth);
  cursor: default;
}

.bento-card:hover {
  border-color: var(--border-active);
  transform: translateY(-6px);
  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.12),
    0 20px 60px rgba(139, 92, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Large hero card (M-Pesa) */
.bento-card-large {
  grid-row: 1 / 3;
  position: relative;
  overflow: hidden;
}

.bento-card-large::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(34,211,238,0.04) 100%);
  animation: shimmer-bg 6s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes shimmer-bg {
  from { opacity: 0.5; }
  to   { opacity: 1; }
}

.bento-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(139, 92, 246, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-bright);
  margin-bottom: 20px;
}

.bento-title {
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
  letter-spacing: -0.02em;
}

.bento-card-large .bento-title {
  font-size: 28px;
}

.bento-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ─── Social Proof ───────────────────────────── */
.social-proof {
  position: relative;
  z-index: 1;
  background: rgba(139, 92, 246, 0.03);
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  padding: 48px 0;
  overflow: hidden;
}

.social-proof-label {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 28px;
}

.marquee-track {
  display: flex;
  gap: 32px;
  animation: marquee 25s linear infinite;
  width: max-content;
}

.marquee-track:hover { animation-play-state: paused; }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.proof-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
}

.proof-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.proof-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.proof-city {
  font-size: 12px;
  color: var(--text-tertiary);
}

/* Fade edges */
.social-proof::before,
.social-proof::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}
.social-proof::before {
  left: 0;
  background: linear-gradient(to right, var(--bg), transparent);
}
.social-proof::after {
  right: 0;
  background: linear-gradient(to left, var(--bg), transparent);
}

/* ─── Pricing ────────────────────────────────── */
.pricing {
  padding: 100px 0;
}

.pricing-toggle {
  display: inline-flex;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px;
  gap: 4px;
  margin: 40px auto;
}

.pricing-toggle-btn {
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--t-fast);
}

.pricing-toggle-btn.active {
  background: var(--violet);
  color: #ffffff;
  box-shadow: 0 0 16px rgba(139, 92, 246, 0.4);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  align-items: start;
}

.pricing-card {
  position: relative;
  background: rgba(14, 11, 30, 0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all var(--t-smooth);
}

.pricing-card:hover {
  border-color: var(--border-active);
  transform: translateY(-4px);
}

/* Rotating gradient border for featured card */
.pricing-card-featured {
  border: none;
  padding: 33px; /* +1 to account for border pseudo */
}

.pricing-card-featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  padding: 1.5px;
  background: conic-gradient(from 0deg, #8b5cf6, #22d3ee, #8b5cf6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: rotate-border 3s linear infinite;
}

@keyframes rotate-border {
  from { --angle: 0deg; }
  to   { --angle: 360deg; }
}

/* fallback: just animate the conic-gradient via filter hue-rotate */
.pricing-card-featured::before {
  animation: border-spin 3s linear infinite;
  filter: hue-rotate(0deg);
}
@keyframes border-spin {
  to { filter: hue-rotate(360deg); }
}

.pricing-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--gradient-brand);
  font-size: 11px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.pricing-plan {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.pricing-price {
  font-family: 'Outfit', sans-serif;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1;
  margin: 16px 0 4px;
}

.pricing-price span {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

.pricing-units {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-bottom: 24px;
}

.pricing-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-secondary);
}

.pricing-features li::before {
  content: '✓';
  color: var(--teal);
  font-weight: 700;
  flex-shrink: 0;
}

/* ─── CTA Band ───────────────────────────────── */
.cta-band {
  position: relative;
  z-index: 1;
  padding: 100px 24px;
  text-align: center;
  overflow: hidden;
}

.cta-band::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(34,211,238,0.07) 100%);
  pointer-events: none;
}

.cta-band-border {
  position: absolute;
  inset: 0;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  pointer-events: none;
}

.cta-band-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.cta-band-sub {
  font-size: 17px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

/* ─── Footer ─────────────────────────────────── */
.footer {
  position: relative;
  z-index: 1;
  background: var(--bg);
  border-top: 1px solid rgba(139, 92, 246, 0.12);
  padding: 64px 24px 32px;
}

.footer-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.08);
}

.footer-brand-name {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.footer-brand-name svg { color: var(--teal); }

.footer-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 20px;
  max-width: 260px;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.footer-social-link {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  transition: all var(--t-fast);
}
.footer-social-link:hover {
  border-color: var(--violet);
  color: var(--violet-bright);
}

.footer-col-title {
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--t-fast);
}
.footer-links a:hover { color: var(--text-primary); }

.footer-bottom {
  max-width: var(--max-width);
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--text-tertiary);
}

/* ─── Cursor Glow ────────────────────────────── */
.cursor-glow {
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
}

@media (hover: none) {
  .cursor-glow { display: none; }
}

/* ─── Responsive ─────────────────────────────── */
@media (max-width: 768px) {
  .navbar-links,
  .navbar-actions { display: none; }

  .navbar-hamburger { display: flex; }

  .stats-bar-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .stat-item { border-right: none !important; }
  .stat-item:not(:last-child) {
    border-bottom: 1px solid rgba(139, 92, 246, 0.12);
    padding-bottom: 32px;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-card-large { grid-row: auto; }
  .bento-row-2 { grid-template-columns: 1fr; }

  .pricing-grid { grid-template-columns: 1fr; }

  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
```

**Step 2: Verify**
Open the project in the browser — it will look broken until all components are updated. That's expected.

**Step 3: Commit**
```bash
cd "C:/Users/USER/.gemini/antigravity/scratch/propiyoke-website"
git add src/index.css
git commit -m "feat: add Cosmic Dark design system tokens and global styles"
```

---

## Task 2: Create `src/components/CursorGlow.tsx`

**Files:**
- Create: `src/components/CursorGlow.tsx`

**Step 1: Write the component**

```tsx
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)
  const isHoveringCTA = useRef(false)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="cursor-glow"
      style={{
        left: springX,
        top: springY,
        background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  )
}
```

**Step 2: Commit**
```bash
git add src/components/CursorGlow.tsx
git commit -m "feat: add magnetic cursor glow component"
```

---

## Task 3: Rewrite `src/App.tsx`

**Files:**
- Modify: `src/App.tsx`

**Step 1: Rewrite the full file**

```tsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatBar from './components/StatBar'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      {/* Background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-violet" />
        <div className="orb orb-teal" />
        <div className="orb orb-violet-dim" />
      </div>

      {/* Cursor glow */}
      <CursorGlow />

      {/* Page */}
      <Navbar />
      <main>
        <Hero />
        <StatBar />
        <Features />
        <SocialProof />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
```

**Step 2: Commit**
```bash
git add src/App.tsx
git commit -m "feat: update App with new section order and CursorGlow"
```

---

## Task 4: Rewrite `src/components/Navbar.tsx`

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Rewrite the full file**

```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Platform', href: '#platform' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            <Home size={20} />
            PropiyoKE
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {links.map(link => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="navbar-actions">
            <a href="http://localhost:5173" className="navbar-signin">Sign In</a>
            <a href="http://localhost:5173" className="btn btn-primary">Get Started</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: 24, right: 24,
                background: 'none', border: 'none',
                color: 'var(--text-primary)', cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="http://localhost:5173"
              className="btn btn-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/Navbar.tsx
git commit -m "feat: rewrite Navbar with frosted glass and slide-in underline"
```

---

## Task 5: Rewrite `src/components/Hero.tsx`

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Rewrite the full file**

```tsx
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="hero">
      {/* Glow rings */}
      <div className="glow-rings" aria-hidden="true">
        <div className="glow-ring" />
        <div className="glow-ring" />
        <div className="glow-ring" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="hero-badge">
            ✦ Built for Kenya's rental market
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 className="hero-title heading-gradient" {...fadeUp(0.2)}>
          Rental management,{' '}
          <span className="gradient-text">reimagined.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p className="hero-sub" {...fadeUp(0.3)}>
          Automate M-Pesa reconciliation, track utility meters, and manage every
          unit — all from one intelligent platform built for Kenyan landlords.
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-actions" {...fadeUp(0.4)}>
          <a href="http://localhost:5173" className="btn btn-primary">
            Get Started →
          </a>
          <a href="http://localhost:5173" className="btn btn-ghost">
            Book a Demo
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          className="hero-mockup-wrap"
          initial={{ opacity: 0, rotateX: 8, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
        >
          <div className="hero-mockup-glow" aria-hidden="true" />
          <div className="hero-mockup-frame">
            {/* macOS chrome */}
            <div className="mockup-chrome">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-url">app.propiyoke.co.ke</div>
            </div>
            {/* Screenshot */}
            <img
              src="/dashboard_mockup.png"
              alt="PropiyoKE Dashboard"
              className="mockup-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/Hero.tsx
git commit -m "feat: rewrite Hero with glow rings, glass mockup frame, and gradient title"
```

---

## Task 6: Create `src/components/StatBar.tsx`

**Files:**
- Create: `src/components/StatBar.tsx`

**Step 1: Write the component**

```tsx
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  prefix?: string
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 2400, suffix: '+', label: 'Units Managed' },
  { prefix: 'KES ', value: 2.4, suffix: 'B+ Rent Processed', label: '' },
  { value: 98, suffix: '%', label: 'Platform Uptime' },
]

function CountUp({ value, prefix = '', suffix = '', trigger }: {
  value: number; prefix?: string; suffix?: string; trigger: boolean
}) {
  const [display, setDisplay] = useState(0)
  const isFloat = !Number.isInteger(value)

  useEffect(() => {
    if (!trigger) return
    const duration = 1500
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [trigger, value])

  const formatted = isFloat ? display.toFixed(1) : Math.floor(display).toLocaleString()

  return <>{prefix}{formatted}{suffix}</>
}

export default function StatBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="stats-bar" ref={ref}>
      <div className="stats-bar-inner">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-item"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-number">
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                trigger={inView}
              />
            </div>
            {stat.label && <div className="stat-label">{stat.label}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/StatBar.tsx
git commit -m "feat: add StatBar with count-up animation on scroll"
```

---

## Task 7: Rewrite `src/components/Features.tsx` — Bento Grid

**Files:**
- Modify: `src/components/Features.tsx`

**Step 1: Rewrite the full file**

```tsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard, Droplets, LayoutDashboard, Smartphone, UserCheck, BookOpen } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'M-Pesa Reconciliation',
    desc: 'Automated payment processing via Paybill and Till. Every shilling tracked, matched, and reported in real time — no spreadsheets needed.',
    large: true,
  },
  {
    icon: Droplets,
    title: 'Utility Meter Tracking',
    desc: 'Record water and electric readings per unit, auto-calculate bills, and flag outstanding balances.',
  },
  {
    icon: BookOpen,
    title: 'Dynamic Reports',
    desc: 'Export P&L statements, bad debt logs, and owner summaries in one click.',
  },
  {
    icon: Smartphone,
    title: 'Short & Long Term',
    desc: 'One platform for Airbnb vacation rentals and traditional residential leasing.',
  },
  {
    icon: UserCheck,
    title: 'Vendor & Tasks',
    desc: 'Delegate maintenance jobs to trusted vendors and track completion.',
  },
  {
    icon: LayoutDashboard,
    title: 'Feature Gating',
    desc: 'Scales from solo hosts with 3 units to agencies managing 300+.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [large, ...rest] = features
  const row1Right = rest.slice(0, 2)
  const row2 = rest.slice(2)

  return (
    <section className="features section" id="features">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="section-label">✦ Platform</span>
          <h2 className="section-title heading-gradient">
            Everything you need,<br />
            <span className="gradient-text">nothing you don't.</span>
          </h2>
          <p className="section-sub">
            Purpose-built tools for the Kenyan rental market — from M-Pesa
            to maintenance tickets.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid" ref={ref}>
          {/* Large card */}
          <motion.div
            className="bento-card bento-card-large"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="bento-icon">
              <large.icon size={22} />
            </div>
            <div className="bento-title">{large.title}</div>
            <p className="bento-desc">{large.desc}</p>
          </motion.div>

          {/* Right column — 2 stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {row1Right.map((f, i) => (
              <motion.div
                key={f.title}
                className="bento-card"
                custom={i + 1}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="bento-icon"><f.icon size={20} /></div>
                <div className="bento-title">{f.title}</div>
                <p className="bento-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 3-col spanning full width */}
          <div className="bento-row-2">
            {row2.map((f, i) => (
              <motion.div
                key={f.title}
                className="bento-card"
                custom={i + 3}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="bento-icon"><f.icon size={20} /></div>
                <div className="bento-title">{f.title}</div>
                <p className="bento-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/Features.tsx
git commit -m "feat: rewrite Features as asymmetric bento grid with staggered animation"
```

---

## Task 8: Create `src/components/SocialProof.tsx`

**Files:**
- Create: `src/components/SocialProof.tsx`

**Step 1: Write the component**

```tsx
const managers = [
  { initials: 'JM', name: 'James Mwangi', city: 'Nairobi' },
  { initials: 'AO', name: 'Amina Odhiambo', city: 'Mombasa' },
  { initials: 'PK', name: 'Peter Kamau', city: 'Kisumu' },
  { initials: 'GW', name: 'Grace Wanjiku', city: 'Nairobi' },
  { initials: 'DM', name: 'David Mutua', city: 'Eldoret' },
  { initials: 'LN', name: 'Lucy Njeri', city: 'Nakuru' },
  { initials: 'BK', name: 'Brian Kipchoge', city: 'Mombasa' },
  { initials: 'SW', name: 'Sarah Waweru', city: 'Thika' },
]

// Duplicate for seamless loop
const items = [...managers, ...managers]

export default function SocialProof() {
  return (
    <section className="social-proof">
      <p className="social-proof-label">
        Trusted by property managers across Kenya
      </p>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="marquee-track">
          {items.map((m, i) => (
            <div className="proof-item" key={i}>
              <div className="proof-avatar">{m.initials}</div>
              <div>
                <div className="proof-name">{m.name}</div>
                <div className="proof-city">{m.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/SocialProof.tsx
git commit -m "feat: add SocialProof marquee strip"
```

---

## Task 9: Rewrite `src/components/Pricing.tsx`

**Files:**
- Modify: `src/components/Pricing.tsx`

**Step 1: Rewrite the full file**

```tsx
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Mode = 'short' | 'long' | 'hybrid'

interface Plan {
  name: string
  price: string
  units: string
  features: string[]
  featured?: boolean
}

const plans: Record<Mode, Plan[]> = {
  short: [
    { name: 'Solo Host', price: '3,500', units: 'Up to 3 units', features: ['M-Pesa reconciliation', 'Utility tracking', 'Basic reports', 'Email support'] },
    { name: 'Pro Host', price: '9,500', units: 'Up to 10 units', features: ['Everything in Solo', 'Multi-property dashboard', 'Vendor management', 'Priority support'] },
    { name: 'Operator', price: '22,000', units: 'Up to 30 units', features: ['Everything in Pro', 'Short-term booking tools', 'Advanced analytics', 'Dedicated onboarding'], featured: true },
    { name: 'Agency', price: '45,000', units: 'Unlimited units', features: ['Everything in Operator', 'White-label option', 'API access', 'SLA guarantee'] },
  ],
  long: [
    { name: 'Startup', price: '15,000', units: 'Up to 10 units', features: ['M-Pesa reconciliation', 'Utility tracking', 'Tenant portal', 'Basic reports'] },
    { name: 'Professional', price: '45,000', units: 'Up to 50 units', features: ['Everything in Startup', 'Automated reminders', 'Vendor management', 'P&L exports'], featured: true },
    { name: 'Enterprise', price: '100,000', units: 'Up to 150 units', features: ['Everything in Professional', 'Custom workflows', 'API access', 'Dedicated support'] },
  ],
  hybrid: [
    { name: 'Hybrid Portfolio', price: '55,000', units: 'Up to 50 units', features: ['Short & long-term tools', 'M-Pesa reconciliation', 'Utility tracking', 'Unified reporting'] },
    { name: 'Premium Hybrid', price: '120,000', units: 'Up to 200 units', features: ['Everything in Hybrid', 'Advanced analytics', 'API access', 'White-label option'], featured: true },
  ],
}

const modeLabels: { key: Mode; label: string }[] = [
  { key: 'short', label: 'Short-Term' },
  { key: 'long', label: 'Long-Term' },
  { key: 'hybrid', label: 'Hybrid' },
]

export default function Pricing() {
  const [mode, setMode] = useState<Mode>('short')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className="section-label">✦ Pricing</span>
          <h2 className="section-title heading-gradient">
            Plans for every<br />
            <span className="gradient-text">portfolio size.</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Choose the model that fits your operation. All plans include M-Pesa
            integration and utility tracking.
          </p>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="pricing-toggle">
            {modeLabels.map(m => (
              <button
                key={m.key}
                className={`pricing-toggle-btn ${mode === m.key ? 'active' : ''}`}
                onClick={() => setMode(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="pricing-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {plans[mode].map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {plan.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}
                <div className="pricing-plan">{plan.name}</div>
                <div className="pricing-price">
                  KES {plan.price}<span>/mo</span>
                </div>
                <div className="pricing-units">{plan.units}</div>
                <ul className="pricing-features">
                  {plan.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="http://localhost:5173"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enterprise note */}
        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--text-tertiary)' }}>
          Need more than 200 units?{' '}
          <a href="mailto:sales@propiyoke.co.ke" style={{ color: 'var(--violet-bright)' }}>
            Contact our sales team →
          </a>
        </p>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/Pricing.tsx
git commit -m "feat: rewrite Pricing with glassmorphism and rotating featured card border"
```

---

## Task 10: Create `src/components/CtaBand.tsx`

**Files:**
- Create: `src/components/CtaBand.tsx`

**Step 1: Write the component**

```tsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaBand() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta-band" ref={ref}>
      <div className="cta-band-border" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          className="cta-band-title heading-gradient"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Start managing{' '}
          <span className="gradient-text">smarter.</span>
        </motion.h2>

        <motion.p
          className="cta-band-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Join property managers across Kenya who've simplified their operations
          with PropiyoKE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="http://localhost:5173" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
            Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/CtaBand.tsx
git commit -m "feat: add CtaBand full-width gradient section"
```

---

## Task 11: Rewrite `src/components/Footer.tsx`

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Rewrite the full file**

```tsx
import { Home } from 'lucide-react'

const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div className="footer-brand-name">
            <Home size={18} />
            PropiyoKE
          </div>
          <p className="footer-desc">
            Modern property management for Kenya's landlords, agents, and
            Airbnb hosts. Built to scale.
          </p>
          <div className="footer-socials">
            {/* LinkedIn */}
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="footer-social-link" aria-label="Twitter / X">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-links">
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {currentYear} PropiyoKE. All rights reserved.</span>
        <span>Hosted securely in Kenya 🇰🇪</span>
      </div>
    </footer>
  )
}
```

**Step 2: Commit**
```bash
git add src/components/Footer.tsx
git commit -m "feat: rewrite Footer with 4-col grid and social links"
```

---

## Task 12: Clean Up `src/App.css`

**Files:**
- Modify: `src/App.css`

**Step 1: Clear the legacy file**

Replace entire contents with:
```css
/* Legacy file — styles moved to index.css */
```

**Step 2: Commit**
```bash
git add src/App.css
git commit -m "chore: clear legacy App.css"
```

---

## Task 13: Verify in Browser

**Step 1: Start dev server**
```bash
cd "C:/Users/USER/.gemini/antigravity/scratch/propiyoke-website"
npm run dev
```
Expected: Server starts on `http://localhost:5174`

**Step 2: Check visually**
Open browser at `http://localhost:5174` and verify:
- [ ] Purple-black background visible with floating orbs
- [ ] Cursor glow follows mouse on desktop
- [ ] Navbar frosted glass on scroll
- [ ] Hero gradient title + glass mockup frame
- [ ] Stats bar count-up on scroll
- [ ] Bento grid layout (large M-Pesa card + 2 right + 3 bottom)
- [ ] Social proof marquee scrolling
- [ ] Pricing toggle switches between 3 modes
- [ ] Featured pricing card has rotating gradient border
- [ ] CTA band with gradient background
- [ ] Footer 4-column layout
- [ ] Mobile hamburger menu works

**Step 3: Fix any TypeScript errors**
```bash
npm run build
```
Fix any type errors reported by `tsc`.

**Step 4: Final commit**
```bash
git add -A
git commit -m "feat: complete Cosmic Dark revamp — purple-black theme, bento grid, cursor glow"
```
