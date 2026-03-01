import { Home, CreditCard, Droplets, BarChart2, FileText, Settings, Bell, TrendingUp } from 'lucide-react'

// ─── Data ────────────────────────────────────────
const revenue = [320, 380, 290, 420, 460, 485]
const months  = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const peak    = Math.max(...revenue)
const W = 260, H = 72

const pts = revenue.map((v, i) => ({
  x: (i / (revenue.length - 1)) * W,
  y: H - (v / peak) * H,
}))
const line = 'M ' + pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')
const area = `M 0,${H} L ${pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')} L ${W},${H} Z`

const payments = [
  { unit: 'Unit 4A', tenant: 'J. Mwangi',    amount: 'KES 35,000', status: 'Paid',    dot: '#10b981' },
  { unit: 'Unit 2B', tenant: 'A. Odhiambo',  amount: 'KES 28,500', status: 'Paid',    dot: '#10b981' },
  { unit: 'Unit 7C', tenant: 'P. Kamau',     amount: 'KES 14,200', status: 'Pending', dot: '#f59e0b' },
  { unit: 'Unit 1A', tenant: 'G. Wanjiku',   amount: 'KES 42,000', status: 'Paid',    dot: '#10b981' },
]

const navItems = [
  { icon: Home,      label: 'Overview',   active: true  },
  { icon: CreditCard,label: 'Payments',   active: false },
  { icon: Droplets,  label: 'Utilities',  active: false },
  { icon: BarChart2, label: 'Reports',    active: false },
  { icon: FileText,  label: 'Documents',  active: false },
  { icon: Settings,  label: 'Settings',   active: false },
]

// ─── Styles ───────────────────────────────────────
const s = {
  root: {
    display: 'flex',
    height: 480,
    borderRadius: 16,
    overflow: 'hidden',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 12,
    color: '#111827',
    background: '#f5f5f9',
    boxShadow: [
      '0 0 0 1px rgba(0,0,0,0.07)',
      '0 24px 60px rgba(0,0,0,0.18)',
      '0 60px 120px rgba(139,92,246,0.12)',
    ].join(', '),
    userSelect: 'none' as const,
    pointerEvents: 'none' as const,
  },

  // Sidebar
  sidebar: {
    width: 176,
    flexShrink: 0,
    background: '#ffffff',
    borderRight: '1px solid #ebebf0',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  sidebarLogo: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '18px 14px 14px',
    borderBottom: '1px solid #f4f4f8',
  },
  logoMark: {
    width: 26, height: 26, borderRadius: 7,
    background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: { fontWeight: 700, fontSize: 13, color: '#111827' },
  nav: { flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column' as const, gap: 2 },
  navItem: (active: boolean) => ({
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '7px 10px', borderRadius: 8,
    color:      active ? '#7c3aed' : '#6b7280',
    background: active ? 'rgba(139,92,246,0.08)' : 'transparent',
    fontWeight: active ? 600 : 400,
    fontSize: 12,
  }),
  sidebarUser: {
    padding: '12px 14px',
    borderTop: '1px solid #f4f4f8',
    display: 'flex', alignItems: 'center', gap: 8,
  },
  avatar: {
    width: 26, height: 26, borderRadius: '50%',
    background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0,
  },

  // Main
  main: { flex: 1, display: 'flex', flexDirection: 'column' as const, overflow: 'hidden', minWidth: 0 },
  topbar: {
    background: '#fff',
    borderBottom: '1px solid #ebebf0',
    padding: '12px 18px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexShrink: 0,
  },
  content: { flex: 1, padding: '14px 18px', overflowY: 'auto' as const, display: 'flex', flexDirection: 'column' as const, gap: 12 },

  // Cards
  card: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #ebebf0',
    padding: '13px 14px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
  },
  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 },
  chartRow: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 10 },
  label: { fontSize: 9.5, fontWeight: 500, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 6 },
  bigNum: { fontSize: 18, fontWeight: 800, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 7 },
  badge: (color: string, bg: string) => ({
    display: 'inline-flex', alignItems: 'center', gap: 3,
    padding: '2px 7px', borderRadius: 5,
    background: bg, color, fontSize: 10, fontWeight: 600,
  }),
}

// ─── Component ────────────────────────────────────
export default function DashboardMockup() {
  return (
    <div style={s.root} aria-hidden="true">

      {/* ── Sidebar ── */}
      <div style={s.sidebar}>
        <div style={s.sidebarLogo}>
          <div style={s.logoMark}><Home size={12} color="#fff" /></div>
          <span style={s.logoText}>PropiyoKE</span>
        </div>

        <nav style={s.nav}>
          {navItems.map(({ icon: Icon, label, active }) => (
            <div key={label} style={s.navItem(active)}>
              <Icon size={13} />
              <span>{label}</span>
            </div>
          ))}
        </nav>

        <div style={s.sidebarUser}>
          <div style={s.avatar}>JM</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 11, color: '#111827' }}>John Mwangi</div>
            <div style={{ fontSize: 10, color: '#9ca3af' }}>Manager</div>
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div style={s.main}>

        {/* Top bar */}
        <div style={s.topbar}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#111827' }}>Financial Overview</div>
            <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>June 2025 · 24 active units</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ padding: '4px 10px', borderRadius: 7, background: '#f3f4f6', fontSize: 11, color: '#6b7280', fontWeight: 500 }}>
              This Month
            </div>
            <div style={{ width: 27, height: 27, borderRadius: 7, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={11} color="#6b7280" />
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={s.content}>

          {/* KPI cards */}
          <div style={s.kpiGrid}>
            {[
              { label: 'Total Income',      value: 'KES 485,000', tag: '↑ 12.4%', color: '#7c3aed', bg: 'rgba(139,92,246,0.08)' },
              { label: 'Pending Utilities', value: 'KES 14,200',  tag: '8 units',  color: '#b45309', bg: 'rgba(245,158,11,0.1)'  },
              { label: 'Net Payout',        value: 'KES 420,500', tag: '↑ 8.1%',  color: '#047857', bg: 'rgba(16,185,129,0.08)' },
            ].map(({ label, value, tag, color, bg }) => (
              <div key={label} style={s.card}>
                <div style={s.label}>{label}</div>
                <div style={s.bigNum}>{value}</div>
                <div style={s.badge(color, bg)}>{tag}</div>
              </div>
            ))}
          </div>

          {/* Chart + Payments */}
          <div style={s.chartRow}>

            {/* Revenue chart */}
            <div style={s.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 11.5, color: '#111827' }}>Revenue Trend</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: '#10b981', fontWeight: 600 }}>
                  <TrendingUp size={11} /> +15%
                </div>
              </div>
              <svg width="100%" viewBox={`0 0 ${W} ${H + 18}`} preserveAspectRatio="none" style={{ display: 'block' }}>
                <defs>
                  <linearGradient id="dash-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"    />
                  </linearGradient>
                </defs>
                <path d={area} fill="url(#dash-fill)" />
                <path d={line} fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p, i) => (
                  <g key={i}>
                    {i === pts.length - 1 && (
                      <circle cx={p.x} cy={p.y} r="4" fill="#fff" stroke="#8b5cf6" strokeWidth="1.5" />
                    )}
                    <text x={p.x} y={H + 14} textAnchor="middle" fontSize="8" fill="#9ca3af">
                      {months[i]}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Payments */}
            <div style={s.card}>
              <div style={{ fontWeight: 700, fontSize: 11.5, color: '#111827', marginBottom: 10 }}>M-Pesa Payments</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {payments.map(({ unit, tenant, amount, status, dot }, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '7px 0',
                    borderBottom: i < payments.length - 1 ? '1px solid #f4f4f8' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 600, color: '#374151', fontSize: 11 }}>{unit}</div>
                        <div style={{ fontSize: 10, color: '#9ca3af' }}>{tenant}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontSize: 11, color: '#111827' }}>{amount}</div>
                      <div style={{ fontSize: 10, fontWeight: 500, color: dot }}>{status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
