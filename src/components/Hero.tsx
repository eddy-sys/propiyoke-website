import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow" />

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">
            <span style={{ color: 'var(--brand-accent)', marginRight: '6px' }}>★</span>
            PropiyoKE 2.0 is now live
          </span>

          <h1 className="hero-title">
            Modern rental management<br />
            for the Kenyan market.
          </h1>

          <p className="hero-desc">
            Automate M-Pesa reconciliations, track pending utilities, manage multi-unit properties, and generate instant financial reports. Designed for scale.
          </p>

          <div className="hero-actions">
            <a href="http://localhost:5173" className="btn btn-primary">
              Start your free trial <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn btn-secondary">
              View Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            background: '#f8fafc'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
            <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>propiyoke.co.ke/dashboard</div>
          </div>

          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', background: '#ffffff' }}>
            {/* Mock Dashboard UI snippet */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b' }}>Financial Overview</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', background: '#f1f5f9', color: '#64748b', padding: '4px 12px', borderRadius: '99px', fontWeight: 600 }}>Monthly</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Wallet size={14} color="#0071e3" /> Total Income
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Outfit', color: '#0f172a', position: 'relative', zIndex: 1 }}>KES 485,000</div>

                {/* Mini Chart */}
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '40px', opacity: 0.15 }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,20 L0,15 L10,12 L20,16 L30,10 L40,14 L50,8 L60,11 L70,5 L80,9 L90,4 L100,6 L100,20 Z" fill="#0071e3" />
                    <path d="M0,15 L10,12 L20,16 L30,10 L40,14 L50,8 L60,11 L70,5 L80,9 L90,4 L100,6" fill="none" stroke="#0071e3" strokeWidth="1" />
                  </svg>
                </div>

                <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontWeight: 700 }}>↑ 12.5%</span> <span style={{ color: '#94a3b8' }}>vs last month</span>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)' }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Clock size={14} color="#f59e0b" /> Pending Utilities
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Outfit', color: '#0f172a' }}>KES 14,200</div>
                <div style={{ fontSize: '0.8rem', color: '#f59e0b', marginTop: '0.75rem', fontWeight: 600 }}>8 Units Outstanding</div>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)' }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <BarChart3 size={14} color="#6366f1" /> Net Payout
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Outfit', color: '#0f172a' }}>KES 420,500</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.75rem' }}>Automated calculation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
