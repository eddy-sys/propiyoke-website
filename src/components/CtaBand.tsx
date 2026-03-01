import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaBand() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta-band" ref={ref} aria-labelledby="cta-heading">
      <div className="cta-band-border" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          id="cta-heading"
          className="cta-band-title heading-gradient"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Start managing{' '}
          <span className="gradient-text">smarter.</span>
        </motion.h2>

        <motion.p
          className="cta-band-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Join property managers across Kenya who've simplified their operations
          with PropiyoKE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <a
            href="http://localhost:5173"
            className="btn btn-primary"
            style={{ fontSize: 16, padding: '14px 32px' }}
          >
            Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
