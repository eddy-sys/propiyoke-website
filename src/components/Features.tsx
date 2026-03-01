import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Smartphone, CreditCard, Droplets, BookOpen, UserCheck } from 'lucide-react';

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Built for Landlords & Hosts</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools built explicitly to solve the unique challenges of Kenyan property management, from automated M-Pesa to utility readings.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="features-grid"
        >
          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <CreditCard />
            </div>
            <h3 className="feature-title">M-Pesa Reconciliation</h3>
            <p className="feature-desc">
              Automatically reconcile incoming M-Pesa payments via Paybill or Till. We process the ledger and apply payments exactly where they are owed.
            </p>
          </motion.div>

          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <Droplets />
            </div>
            <h3 className="feature-title">Pending Utilities Engine</h3>
            <p className="feature-desc">
              Track water and electric meter readings accurately. Automatically bind utility arrears directly to the tenant's current rent roll snapshot.
            </p>
          </motion.div>

          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <LayoutDashboard />
            </div>
            <h3 className="feature-title">Feature Gating</h3>
            <p className="feature-desc">
              Auto-detect properties under management and scale pricing tiers exactly to what you need. From solo Airbnb hosts to 300+ unit agencies.
            </p>
          </motion.div>

          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <Smartphone />
            </div>
            <h3 className="feature-title">Short & Long Term</h3>
            <p className="feature-desc">
              Whether handling overnight bookings, 2-year leases, or a hybrid portfolio, PropiyoKE adapts perfectly to your operational tempo.
            </p>
          </motion.div>

          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <UserCheck />
            </div>
            <h3 className="feature-title">Vendor & Tasks</h3>
            <p className="feature-desc">
              Delegate maintenance reliably. Assign vendors to tasks, track status, generate payable receipts, and factor it into the exact monthly reports.
            </p>
          </motion.div>

          <motion.div variants={item} className="feature-card">
            <div className="feature-icon border border-[rgba(255,255,255,0.08)]">
              <BookOpen />
            </div>
            <h3 className="feature-title">Dynamic Reports</h3>
            <p className="feature-desc">
              Export precise P&Ls instantly. View expected gross income versus net payout while factoring in bad debt or uncollected rent balances seamlessly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
