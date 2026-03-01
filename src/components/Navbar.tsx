import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
    }}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          <div style={{ background: 'var(--brand-primary)', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
             <Home style={{ color: 'white', width: '20px', height: '20px' }} />
          </div>
          Propiyo
        </a>
        
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="nav-actions-desktop">
          <a href="http://localhost:5173" className="nav-link">Sign In</a>
          <a href="http://localhost:5173" className="btn btn-primary">
            Start Free Trial
          </a>
        </div>

        <button 
          className="nav-actions-mobile"
          style={{ background: 'none', border: 'none', color: 'white' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ 
              position: 'absolute', 
              top: 'var(--nav-height)', 
              left: 0, 
              right: 0, 
              background: '#050505', 
              borderBottom: '1px solid var(--border-color)', 
              padding: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              alignItems: 'center' 
            }}
          >
            <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#platform" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="http://localhost:5173" className="btn btn-primary" style={{ width: '100%', maxWidth: '200px' }} onClick={() => setMobileMenuOpen(false)}>
              Login / Sign Up
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
