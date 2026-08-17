import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

const COLS = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Contact', to: '/contact' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hemmingway-technologies' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/docs/legal/privacy-policy' },
      { label: 'Terms of Service', to: '/docs/legal/terms' },
      { label: 'Cookie Policy', to: '/docs/legal/cookie-policy' },
      { label: 'Disclaimer', to: '/docs/legal/disclaimer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Corporate Info', to: '/corporate-info' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      {/* top separator */}
      <div className="ftr-sep" />

      {/* ── MAIN ROW ── */}
      <div className="ftr-main">
        {/* LEFT: brand + tagline + statutory info */}
        <div className="ftr-brand">
          <div className="ftr-brand-id">
            <img src="/logo-icon.webp" alt="Hemmingway" className="ftr-brand-icon" />
            <span className="ftr-brand-name">Hemmingway Technologies</span>
          </div>

          {/* Statutory info */}
          <div className="ftr-legal">
            <p className="ftr-legal-name">{COMPANY_INFO.legalName}</p>
            <div className="ftr-legal-badges">
              <span className="ftr-legal-badge"><strong>CIN</strong> {COMPANY_INFO.cin}</span>
              <span className="ftr-legal-badge"><strong>GST</strong> {COMPANY_INFO.gst}</span>
            </div>
            <p className="ftr-legal-addr">
              <MapPin size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: 4, opacity: 0.6 }} />
              {COMPANY_INFO.address}
            </p>
            <div className="ftr-legal-contacts">
              <div className="ftr-grievance-note">In case of any grievance, call</div>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\\s/g, '')}`} className="ftr-legal-contact">
                <Phone size={12} />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="ftr-legal-contact">
                <Mail size={12} />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: link columns */}
        <div className="ftr-cols">
          {COLS.map(col => (
            <div key={col.title} className="ftr-col">
              <p className="ftr-col-title">{col.title}</p>
              <ul>
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className="ftr-link">{link.label}</Link>
                    ) : (
                      <a href={link.href} className="ftr-link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ftr-bottom-bar">
        <p className="ftr-copyright">© {year} {COMPANY_INFO.legalName}. All rights reserved.</p>
      </div>

      {/* ── GIANT WATERMARK ── */}
      <div className="ftr-watermark" aria-hidden="true">Hemmingway</div>
    </footer>
  );
}
