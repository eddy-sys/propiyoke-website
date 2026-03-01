import { motion } from 'framer-motion'
import DashboardMockup from './DashboardMockup'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
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
      </div>

      {/* Dashboard mockup — full-width, code-rendered */}
      <div style={{ perspective: 1400, width: '100%', padding: '0 32px', maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          className="hero-mockup-wrap"
          initial={{ opacity: 0, rotateX: 6, y: 48 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-mockup-glow" aria-hidden="true" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
