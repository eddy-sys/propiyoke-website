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
    {
      name: 'Solo Host',
      price: '3,500',
      units: 'Up to 3 units',
      features: ['M-Pesa reconciliation', 'Utility tracking', 'Basic reports', 'Email support'],
    },
    {
      name: 'Pro Host',
      price: '9,500',
      units: 'Up to 10 units',
      features: ['Everything in Solo', 'Multi-property dashboard', 'Vendor management', 'Priority support'],
    },
    {
      name: 'Operator',
      price: '22,000',
      units: 'Up to 30 units',
      features: ['Everything in Pro', 'Short-term booking tools', 'Advanced analytics', 'Dedicated onboarding'],
      featured: true,
    },
    {
      name: 'Agency',
      price: '45,000',
      units: 'Unlimited units',
      features: ['Everything in Operator', 'White-label option', 'API access', 'SLA guarantee'],
    },
  ],
  long: [
    {
      name: 'Startup',
      price: '15,000',
      units: 'Up to 10 units',
      features: ['M-Pesa reconciliation', 'Utility tracking', 'Tenant portal', 'Basic reports'],
    },
    {
      name: 'Professional',
      price: '45,000',
      units: 'Up to 50 units',
      features: ['Everything in Startup', 'Automated reminders', 'Vendor management', 'P&L exports'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '100,000',
      units: 'Up to 150 units',
      features: ['Everything in Professional', 'Custom workflows', 'API access', 'Dedicated support'],
    },
  ],
  hybrid: [
    {
      name: 'Hybrid Portfolio',
      price: '55,000',
      units: 'Up to 50 units',
      features: ['Short & long-term tools', 'M-Pesa reconciliation', 'Utility tracking', 'Unified reporting'],
    },
    {
      name: 'Premium Hybrid',
      price: '120,000',
      units: 'Up to 200 units',
      features: ['Everything in Hybrid', 'Advanced analytics', 'API access', 'White-label option'],
      featured: true,
    },
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
            Choose the model that fits your operation. All plans include
            M-Pesa integration and utility tracking.
          </p>
        </div>

        {/* Mode toggle */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="pricing-toggle" role="tablist" aria-label="Pricing mode">
            {modeLabels.map(m => (
              <button
                key={m.key}
                role="tab"
                aria-selected={mode === m.key}
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {plans[mode].map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                {plan.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}
                <div className="pricing-plan">{plan.name}</div>
                <div className="pricing-price">
                  KES {plan.price}<span>/mo</span>
                </div>
                <div className="pricing-units">{plan.units}</div>
                <ul className="pricing-features" aria-label={`${plan.name} features`}>
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
