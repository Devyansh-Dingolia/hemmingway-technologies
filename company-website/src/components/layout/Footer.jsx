import { Link } from 'react-router-dom';

const COLS = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
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
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Support', href: '#' },
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
        {/* LEFT: brand + tagline + company info */}
        <div className="ftr-brand">
          <div className="ftr-brand-id">
            <img src="/logo-icon.webp" alt="Hemmingway" className="ftr-brand-icon" />
            <span className="ftr-brand-name">Hemmingway Technologies</span>
          </div>
          <p className="ftr-tagline">© copyright {year} HEMMINGWAY TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>

          {/* Company legal info */}
          <div className="ftr-legal">
            <p className="ftr-legal-name">HEMMINGWAY TECHNOLOGIES PRIVATE LIMITED</p>
            <span className="ftr-legal-badge">CIN&nbsp;<strong>U62091DC2026PTC469396</strong></span>

            <p className="ftr-legal-addr">
              4th Floor, RZ F-1/380, T/F Kh No 84/15,<br />Palam Village, New Delhi – 110045
            </p>
            <div className="ftr-legal-contacts">
              <a href="tel:+918750908167" className="ftr-legal-contact">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8750908167
              </a>
              <a href="mailto:hemmingways.tech@gmail.com" className="ftr-legal-contact">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hemmingways.tech@gmail.com
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

      {/* ── GIANT WATERMARK ── */}
      <div className="ftr-watermark" aria-hidden="true">Hemmingway</div>
    </footer>
  );
}
