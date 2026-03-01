import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.25rem' }}>
            <Home className="w-5 h-5 text-[#0071e3]" />
            PropiyoKE
          </div>
          <p>
            The premium all-in-one SaaS solution for Kenyan property management. Built for maximum scale and operational efficiency.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <span className="link-title">Product</span>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Roadmap</a>
          </div>
          
          <div className="link-group">
            <span className="link-title">Company</span>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          
          <div className="link-group">
            <span className="link-title">Legal</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PropiyoKE. All rights reserved.</span>
        <span>Hosted securely in Kenya.</span>
      </div>
    </footer>
  );
};

export default Footer;
