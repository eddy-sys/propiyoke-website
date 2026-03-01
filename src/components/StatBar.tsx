import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  prefix?: string
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 120, suffix: '+', label: 'Units Managed' },
  { prefix: 'KES ', value: 48, suffix: 'M+ Processed', label: 'Rent & Utilities' },
  { value: 99, suffix: '%', label: 'Uptime' },
]

function CountUp({ value, prefix = '', suffix = '', trigger }: {
  value: number
  prefix?: string
  suffix?: string
  trigger: boolean
}) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef<number>(0)
  const isFloat = !Number.isInteger(value)

  useEffect(() => {
    if (!trigger) return
    const duration = 1500
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(eased * value)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [trigger, value])

  const formatted = isFloat
    ? display.toFixed(1)
    : Math.floor(display).toLocaleString()

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
            key={stat.label}
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
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
