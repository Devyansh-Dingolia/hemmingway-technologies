import { Link, useLocation } from 'react-router-dom';
import {
  Shield, FileText, Cookie, AlertTriangle, ChevronRight,
} from 'lucide-react';
import '../../styles/pages.css';

const LEGAL_DOCS = [
  { to: '/docs/legal/privacy-policy', label: 'Privacy Policy',   Icon: Shield },
  { to: '/docs/legal/terms',          label: 'Terms of Service', Icon: FileText },
  { to: '/docs/legal/cookie-policy',  label: 'Cookie Policy',    Icon: Cookie },
  { to: '/docs/legal/disclaimer',     label: 'Disclaimer',       Icon: AlertTriangle },
];



function NavGroup({ heading, items, pathname }) {
  return (
    <div className="docs-nav-group">
      <p className="docs-nav-heading">{heading}</p>
      <nav className="docs-nav">
        {items.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={`docs-nav-item ${pathname === to ? 'active' : ''}`}
          >
            <Icon size={15} />
            <span>{label}</span>
            <ChevronRight size={13} className="docs-nav-chevron" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function DocsLayout({ title, updated, children }) {
  const { pathname } = useLocation();

  return (
    <div className="docs-wrap">
      {/* ── Sidebar ── */}
      <aside className="docs-sidebar">
        <div className="docs-sidebar-brand">
          <span className="docs-sidebar-logo">📄</span>
          <span className="docs-sidebar-title">Documentation</span>
        </div>

        <NavGroup heading="Legal" items={LEGAL_DOCS} pathname={pathname} />

        <div className="docs-sidebar-note">
          <p>Need help?</p>
          <Link to="/contact" className="docs-contact-link">Contact us →</Link>
        </div>
      </aside>

      {/* ── Content ── */}
      <main className="docs-content">
        <div className="docs-doc-header">
          <h1 className="docs-doc-title">{title}</h1>
          {updated && <span className="docs-doc-updated">Last updated: {updated}</span>}
        </div>
        <div className="docs-body">
          {children}
        </div>
      </main>
    </div>
  );
}
