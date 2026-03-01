import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard, Droplets, LayoutDashboard, Smartphone, UserCheck, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  desc: string
  large?: boolean
}

const features: Feature[] = [
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
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
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
          {/* Large hero card — M-Pesa */}
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
