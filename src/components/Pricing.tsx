import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SHORT_TERM_TIERS = [
  {
    name: "Solo Host",
    price: "3,500",
    period: "/ mo",
    limit: "Up to 3 units",
    features: ["Booking Calendar", "Guest Messaging", "Task Management", "Payment Tracking", "Basic Reports", "Utility Tracking"],
    featured: false
  },
  {
    name: "Pro Host",
    price: "9,500",
    period: "/ mo",
    limit: "Up to 10 units",
    features: ["All Solo Host features", "Channel Syncing (iCal)", "Auto Notifications", "Auto Utility Billing"],
    featured: false
  },
  {
    name: "Operator",
    price: "22,000",
    period: "/ mo",
    limit: "Up to 30 units",
    features: ["All Pro Host features", "Advanced Analytics", "Payment Reconciliation", "Multi-Channel Sync", "Priority Support"],
    featured: true
  },
  {
    name: "Agency",
    price: "45,000",
    period: "/ mo",
    limit: "Unlimited units",
    features: ["Everything in Operator", "Dedicated Success Manager", "Owner Portal Access", "Custom White-Labeling", "Full API Access"],
    featured: false
  }
];

const LONG_TERM_TIERS = [
  {
    name: "Startup",
    price: "15,000",
    period: "/ mo",
    limit: "Up to 10 units",
    features: ["All Premium Features included", "Lease Tracking & Ledger", "Rent Collection via M-Pesa", "Utility Meter Tracking", "Automated Task Mgmt", "Financial Reports"],
    featured: false
  },
  {
    name: "Professional",
    price: "45,000",
    period: "/ mo",
    limit: "Up to 50 units",
    features: ["Everything in Startup", "Higher Unit Limit", "Scale Operations", "Priority Support", "Advanced Analytics"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "100,000",
    period: "/ mo",
    limit: "Up to 150 units",
    features: ["Everything in Professional", "White Label Dashboard", "Dedicated Support", "Full API Access", "Custom Integrations"],
    featured: false
  }
];

const HYBRID_TIERS = [
  {
    name: "Hybrid Portfolio",
    price: "55,000",
    period: "/ mo",
    limit: "Up to 50 units",
    features: ["Mixed Long/Short Term Support", "iSync Channel Manager", "Auto Notifications", "Advanced Analytics", "Priority Support"],
    featured: false
  },
  {
    name: "Premium Hybrid",
    price: "120,000",
    period: "/ mo",
    limit: "Up to 200 units",
    features: ["Everything in Hybrid Portfolio", "Owner Trust Statements", "White Labeling", "Full API Access", "Multi-Channel Sync"],
    featured: true
  }
];

const Pricing = () => {
  const [mode, setMode] = useState<'short' | 'long' | 'hybrid'>('short');

  const getTiers = () => {
    switch (mode) {
      case 'short': return SHORT_TERM_TIERS;
      case 'long': return LONG_TERM_TIERS;
      case 'hybrid': return HYBRID_TIERS;
      default: return SHORT_TERM_TIERS;
    }
  };

  const tiers = getTiers();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">
            Tailored precisely for your operational model. Scale up effortlessly as your property portfolio grows.
          </p>
        </div>

        <div className="pricing-toggle">
          <div className="toggle-bg">
            <button
              className={`toggle-btn ${mode === 'short' ? 'active' : ''}`}
              onClick={() => setMode('short')}
            >
              Short-Term
            </button>
            <button
              className={`toggle-btn ${mode === 'long' ? 'active' : ''}`}
              onClick={() => setMode('long')}
            >
              Long-Term
            </button>
            <button
              className={`toggle-btn ${mode === 'hybrid' ? 'active' : ''}`}
              onClick={() => setMode('hybrid')}
            >
              Hybrid
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <motion.div
              key={`${mode}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.featured && <span className="card-badge">Most Popular</span>}
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">
                <span style={{ fontSize: '1.25rem', verticalAlign: 'top', fontWeight: 500, marginRight: '4px' }}>KES</span> {tier.price}
              </div>
              <div className="pricing-limit">{tier.limit}</div>

              <ul className="pricing-features">
                {tier.features.map((feature, i) => (
                  <li key={i} className="pricing-feature">
                    <Check size={18} /> {feature}
                  </li>
                ))}
              </ul>

              <a href="http://localhost:5173" className={`btn pricing-btn ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="section-subtitle" style={{ fontSize: '0.9rem' }}>
            Managing more than 200+ units?
            <a href="mailto:sales@propiyoke.co.ke" style={{ color: 'var(--primary)', fontWeight: 600, marginLeft: '5px', textDecoration: 'none' }}>
              Contact our Enterprise team
            </a> for a custom quote and 1-on-1 onboarding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
