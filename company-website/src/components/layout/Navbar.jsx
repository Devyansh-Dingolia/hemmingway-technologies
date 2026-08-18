import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Moon,
  Sun,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────
   Custom Brand SVGs for Solutions
───────────────────────────────────────── */
function ApiIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function MobileWebIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="13" height="18" x="2" y="3" rx="3" />
      <path d="M15 7h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6" />
      <circle cx="8.5" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
}

function CybersecurityIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M12 13.5v2.5" />
    </svg>
  );
}

function CloudIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M12 13v4M10 15l2-2 2 2" />
    </svg>
  );
}

function AiIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CustomSoftwareIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Solutions Mega Menu Data
───────────────────────────────────────── */
const SOLUTIONS_DATA = [
  {
    title: 'API & Integrations',
    href: '/solutions#api-integrations',
    hash: 'api-integrations',
    Icon: ApiIcon,
    accent: '#f59e0b',
    subsections: [
      'REST/GraphQL APIs',
      'Payment Gateway Integration',
      'Webhook Systems',
      'API Documentation',
    ],
  },
  {
    title: 'Mobile & Web Applications',
    href: '/solutions#mobile-web',
    hash: 'mobile-web',
    Icon: MobileWebIcon,
    accent: '#22c55e',
    subsections: [
      'Web Apps (React/Next.js)',
      'Mobile Apps (React Native)',
      'UI/UX Design',
      'Admin Dashboards',
    ],
  },
  {
    title: 'Cybersecurity',
    href: '/solutions#cybersecurity',
    hash: 'cybersecurity',
    Icon: CybersecurityIcon,
    accent: '#f43f5e',
    subsections: [
      'Pen Testing',
      'Security Audits',
      'Auth Systems (OAuth/JWT)',
      'Compliance (ISO 27001)',
    ],
  },
  {
    title: 'Cloud Architecture',
    href: '/solutions#cloud',
    hash: 'cloud',
    Icon: CloudIcon,
    accent: '#38bdf8',
    subsections: [
      'Cloud Migration',
      'CI/CD Pipelines',
      'Containerization (Docker/K8s)',
      'Cost Optimization',
    ],
  },
  {
    title: 'AI & Machine Learning',
    href: '/solutions#ai-ml',
    hash: 'ai-ml',
    Icon: AiIcon,
    accent: '#a78bfa',
    subsections: [
      'LLM Agents',
      'Computer Vision',
      'Graph ML/GNN',
      'MLOps & Deployment',
    ],
  },
  {
    title: 'Custom Software Development',
    href: '/solutions#custom-software',
    hash: 'custom-software',
    Icon: CustomSoftwareIcon,
    accent: '#6367f1',
    subsections: [
      'Enterprise Software',
      'MVP Development',
      'Legacy Modernization',
      'Tech Consulting',
    ],
  },
];

/* ─────────────────────────────────────────
   Custom Brand SVGs for Info Items
───────────────────────────────────────── */
function AboutIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M12 22V12" />
      <path d="M21 7l-9 5-9-5" />
    </svg>
  );
}

function FoundersIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CorporateIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ContactIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Info Menu Data (Clean & UI-Matched)
───────────────────────────────────────── */
const INFO_DATA = [
  {
    title: 'About Us',
    href: '/about',
    Icon: AboutIcon,
    accent: '#818cf8',
  },
  {
    title: 'Founders',
    href: '/founders',
    Icon: FoundersIcon,
    accent: '#ec4899',
  },
  {
    title: 'Corporate Info',
    href: '/corporate-info',
    Icon: CorporateIcon,
    accent: '#10b981',
  },
  {
    title: 'Contact Details',
    href: '/contact',
    Icon: ContactIcon,
    accent: '#f59e0b',
  },
];

function InfoCard({ title, href, Icon, accent, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="info-card-clean"
      style={{ '--info-accent': accent }}
    >
      <div
        className="info-card-icon"
        style={{
          color: accent,
          background: `${accent}16`,
          borderColor: `${accent}38`,
        }}
      >
        <Icon size={15} />
      </div>
      <span className="info-card-title">{title}</span>
      <ChevronRight size={13} className="info-card-arrow" />
    </Link>
  );
}

function SolutionMegaCard({ title, href, hash, Icon, accent, subsections, onClick }) {
  return (
    <div className="solution-mega-card">
      <Link to={href} onClick={onClick} className="solution-mega-header">
        <div
          className="solution-mega-icon"
          style={{
            background: `${accent}16`,
            borderColor: `${accent}38`,
            color: accent,
          }}
        >
          <Icon size={17} />
        </div>
        <span className="solution-mega-title">{title}</span>
        <ChevronRight size={13} className="solution-mega-arrow" />
      </Link>

      <div className="solution-mega-list">
        {subsections.map((sub, idx) => {
          const subName = typeof sub === 'string' ? sub : sub.name;
          const subHash = typeof sub === 'string' ? hash : (sub.hash || hash);
          const targetUrl = `${href.split('#')[0]}#${subHash}`;
          return (
            <Link
              key={idx}
              to={targetUrl}
              onClick={onClick}
              className="solution-sub-link"
            >
              <span className="solution-sub-dot" style={{ '--dot-accent': accent }} />
              <span className="solution-sub-text">{subName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Aceternity-style dropdown components
───────────────────────────────────────── */

function MenuItem({ label, children, active, setActive, isRouteActive }) {
  const isOpen = active === label;
  const [hovered, setHovered] = useState(false);
  const display = useEncrypt(label.toUpperCase(), hovered);

  return (
    <div
      className="menu-item-wrap"
      onMouseEnter={() => {
        setHovered(true);
        setActive(label);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setActive(null);
      }}
    >
      <button
        type="button"
        className={`menu-item-btn${isOpen ? ' open' : ''}${isRouteActive ? ' active' : ''}`}
        onClick={() => setActive(isOpen ? null : label)}
        aria-expanded={isOpen}
      >
        {display}
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{
            transition: 'transform 0.3s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            marginLeft: 4,
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={`menu-dropdown${isOpen ? ' open' : ''}`}>
        <div className="menu-dropdown-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Encrypted text hook (for nav hover)
───────────────────────────────────────── */
function useEncrypt(text, active) {
  const [display, setDisplay] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const raf = useRef(null);

  useEffect(() => {
    if (!active) return;

    let iter = 0;
    const step = () => {
      setDisplay(
        text
          .split('')
          .map((c, i) => (c === ' ' ? ' ' : i < iter ? text[i] : chars[Math.floor(Math.random() * chars.length)]))
          .join('')
      );
      if (iter < text.length) {
        iter += 0.8;
        raf.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [active, text]);

  return active ? display : text;
}

function NavLink({ to, label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  const display = useEncrypt(label.toUpperCase(), hovered);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link${isActive ? ' active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {display}
    </Link>
  );
}

/* ─────────────────────────────────────────
   Theme Toggle
───────────────────────────────────────── */
function ThemeToggle({ theme, toggle }) {
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
        <span className="theme-icon">{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</span>
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────── */
export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = p => location.pathname === p;

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} onMouseLeave={() => setActiveMenu(null)}>
        <div className="nav-inner">

          {/* ── LOGO: leaf icon + brand text ── */}
          <Link to="/" className="nav-logo">
            <img src="/logo-icon.webp" alt="Hemmingway logo" width={32} height={32} className="nav-logo-icon" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Hemmingway</span>
              <span className="nav-logo-sub">Technologies</span>
            </div>
          </Link>

          {/* ── CENTER: Aceternity-style menu ── */}
          <div className="nav-menu-center">
            <NavLink to="/" label="Home" isActive={isActive('/')} />

            <MenuItem
              label="SOLUTIONS"
              active={activeMenu}
              setActive={setActiveMenu}
              isRouteActive={isActive('/solutions')}
            >
              <div className="dropdown-solutions-mega">
                {SOLUTIONS_DATA.map((item) => (
                  <SolutionMegaCard
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    hash={item.hash}
                    Icon={item.Icon}
                    accent={item.accent}
                    subsections={item.subsections}
                    onClick={() => setActiveMenu(null)}
                  />
                ))}

                <div className="dropdown-solutions-footer">
                  <div className="dropdown-solutions-footer-note">
                    Enterprise engineering tailored for scalable growth.
                  </div>
                  <div className="dropdown-solutions-footer-links">
                    <Link to="/solutions" onClick={() => setActiveMenu(null)}>
                      All Solutions <ArrowRight size={13} />
                    </Link>
                    <Link to="/contact" onClick={() => setActiveMenu(null)}>
                      Book Consultation <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </MenuItem>

            <NavLink to="/projects" label="Projects" isActive={isActive('/projects')} />
            <NavLink to="/blog" label="Blog" isActive={isActive('/blog')} />

            <MenuItem
              label="INFO"
              active={activeMenu}
              setActive={setActiveMenu}
              isRouteActive={isActive('/about') || isActive('/founders') || isActive('/corporate-info') || isActive('/contact')}
            >
              <div className="dropdown-info-clean">
                {INFO_DATA.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    Icon={item.Icon}
                    accent={item.accent}
                    onClick={() => setActiveMenu(null)}
                  />
                ))}

                <div className="dropdown-info-footer-clean">
                  <div className="dropdown-info-footer-note">
                    Direct inquiries & support
                  </div>
                  <div className="dropdown-info-footer-links">
                    <Link to="/contact" onClick={() => setActiveMenu(null)}>
                      Get in Touch <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </MenuItem>
          </div>

          {/* ── RIGHT ── */}
          <div className="nav-cta">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <Link to="/contact" className="nav-btn primary">
              Get in Touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        <div className="nav-inner-mob">

          <div className="logo">
            {/* ── LOGO: leaf icon + brand text ── */}
            <Link to="/" className="nav-logo">
              <img src="/logo-icon.webp" alt="Hemmingway logo" width={32} height={32} className="nav-logo-icon" />
              <div className="nav-logo-text">
                <span className="nav-logo-name">Hemmingway</span>
                <span className="nav-logo-sub">Technologies</span>
              </div>
            </Link>

            {/* ── RIGHT ── */}
            <div className="nav-cta">
              <ThemeToggle theme={theme} toggle={toggleTheme} />
              <Link to="/contact" className="nav-btn primary">
                Get in Touch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
          {/* ── CENTER: Aceternity-style menu ── */}
          <div className="nav-menu-center">
            <NavLink to="/" label="Home" isActive={isActive('/')} />

            <MenuItem
              label="SOLUTIONS"
              active={activeMenu}
              setActive={setActiveMenu}
              isRouteActive={isActive('/solutions')}
            >
              <div className="dropdown-solutions-mega">
                {SOLUTIONS_DATA.map((item) => (
                  <SolutionMegaCard
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    hash={item.hash}
                    Icon={item.Icon}
                    accent={item.accent}
                    subsections={item.subsections}
                    onClick={() => setActiveMenu(null)}
                  />
                ))}
              </div>
            </MenuItem>

            <NavLink to="/projects" label="Projects" isActive={isActive('/projects')} />
            <NavLink to="/blog" label="Blog" isActive={isActive('/blog')} />

            <MenuItem
              label="INFO"
              active={activeMenu}
              setActive={setActiveMenu}
              isRouteActive={isActive('/about') || isActive('/founders') || isActive('/corporate-info') || isActive('/contact')}
            >
              <div className="dropdown-info-clean">
                {INFO_DATA.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    Icon={item.Icon}
                    accent={item.accent}
                    onClick={() => setActiveMenu(null)}
                  />
                ))}

                <div className="dropdown-info-footer-clean">
                  <div className="dropdown-info-footer-note">
                    Direct inquiries & support
                  </div>
                  <div className="dropdown-info-footer-links">
                    <Link to="/contact" onClick={() => setActiveMenu(null)}>
                      Get in Touch <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </MenuItem>
          </div>
        </div>
      </nav>
    </>
  );
}