import { Home } from 'lucide-react'

const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div className="footer-brand-name">
            <Home size={18} />
            PropiyoKE
          </div>
          <p className="footer-desc">
            Modern property management for Kenya's landlords, agents, and
            Airbnb hosts. Built to scale.
          </p>
          <div className="footer-socials">
            {/* LinkedIn */}
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="footer-social-link" aria-label="Twitter / X">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-links">
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {currentYear} PropiyoKE. All rights reserved.</span>
        <span>Hosted securely in Kenya 🇰🇪</span>
      </div>
    </footer>
  )
}
