import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

/* ─────────────────────────────────────────
   Aceternity-style dropdown components
───────────────────────────────────────── */

function DropdownItem({ title, href, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="dropdown-item"
      style={{ textDecoration: 'none', display: 'block', padding: '10px 16px', borderRadius: '6px', transition: 'background 0.15s, color 0.15s' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--primary-light)';
        e.currentTarget.style.color = 'var(--primary)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-bright)';
      }}
    >
      {title}
    </Link>
  );
}

function DropdownSection({ title, items, onClick }) {
  return (
    <div className="dropdown-section">
      <div className="dropdown-section-title">{title}</div>
      <div className="dropdown-section-items">
        {items.map((item, i) => (
          <DropdownItem key={i} title={item.title} href={item.href} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ label, to = '/solutions', children, active, setActive }) {
  const isOpen = active === label;
  return (
    <div
      className="menu-item-wrap"
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
    >
      <Link
        to={to}
        className={`menu-item-btn${isOpen ? ' open' : ''}`}
        onClick={() => setActive(null)}
      >
        {label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: 4 }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>

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
    if (!active) {
      const t = setTimeout(() => setDisplay(text), 0);
      return () => clearTimeout(t);
    }
    let iter = 0;
    const step = () => {
      setDisplay(text.split('').map((c, i) => c === ' ' ? ' ' : i < iter ? text[i] : chars[Math.floor(Math.random() * chars.length)]).join(''));
      if (iter < text.length) { iter += 0.7; raf.current = requestAnimationFrame(step); }
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [active, text]);
  return display;
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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setActiveMenu(null); }, [location.pathname]);

  const isActive = p => location.pathname === p;

  const closeMenu = () => setActiveMenu(null);

  const solutionsSections = [
    {
      title: 'API & Integrations',
      items: [
        { title: 'REST/GraphQL API Development', href: '/solutions#api-integrations' },
        { title: 'Third-Party & Payment Gateway Integration', href: '/solutions#api-integrations' },
        { title: 'Webhook & Event-Driven Systems', href: '/solutions#api-integrations' },
        { title: 'API Documentation (Swagger/OpenAPI)', href: '/solutions#api-integrations' },
      ],
    },
    {
      title: 'Mobile & Web Applications',
      items: [
        { title: 'Web App Development (React/Next.js)', href: '/solutions#mobile-web' },
        { title: 'Mobile App Development (React Native)', href: '/solutions#mobile-web' },
        { title: 'UI/UX Design & Prototyping', href: '/solutions#mobile-web' },
        { title: 'Admin Dashboards & Panels', href: '/solutions#mobile-web' },
      ],
    },
    {
      title: 'Cybersecurity',
      items: [
        { title: 'Vulnerability Assessment & Pen Testing', href: '/solutions#cybersecurity' },
        { title: 'Security Audits & Code Review', href: '/solutions#cybersecurity' },
        { title: 'Authentication Systems (OAuth/JWT)', href: '/solutions#cybersecurity' },
        { title: 'Compliance (DGMS/ISO 27001)', href: '/solutions#cybersecurity' },
      ],
    },
    {
      title: 'Cloud Architecture',
      items: [
        { title: 'Cloud Migration (AWS/GCP)', href: '/solutions#cloud' },
        { title: 'CI/CD Pipeline Setup', href: '/solutions#cloud' },
        { title: 'Containerization (Docker/Kubernetes)', href: '/solutions#cloud' },
        { title: 'Cost Optimization', href: '/solutions#cloud' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      items: [
        { title: 'LLM Integration & Agents', href: '/solutions#ai-ml' },
        { title: 'Computer Vision Solutions', href: '/solutions#ai-ml' },
        { title: 'Graph ML / GNN Systems', href: '/solutions#ai-ml' },
        { title: 'MLOps & Model Deployment', href: '/solutions#ai-ml' },
      ],
    },
    {
      title: 'Custom Software Development',
      items: [
        { title: 'Enterprise Software Solutions', href: '/solutions#custom-software' },
        { title: 'MVP Development', href: '/solutions#custom-software' },
        { title: 'Legacy System Modernization', href: '/solutions#custom-software' },
        { title: 'Technical Consulting', href: '/solutions#custom-software' },
      ],
    },
  ];

  const aboutItems = [
    { title: 'Team Info', href: '/about#founders' },
    { title: 'Corporate Info', href: '/corporate-info' },
    { title: 'Legal', href: '/legal' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} onMouseLeave={() => setActiveMenu(null)}>
        <div className="nav-inner">

          {/* ── LOGO: leaf icon + brand text ── */}
          <Link to="/" className="nav-logo">
            <img src="/logo-icon.webp" alt="" className="nav-logo-icon" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Hemmingway</span>
              <span className="nav-logo-sub">Technologies</span>
            </div>
          </Link>

          {/* ── CENTER: Aceternity-style menu ── */}
          <div className="nav-menu-center">
            <NavLink to="/" label="Home" isActive={isActive('/')} />
            <NavLink to="/about" label="About" isActive={isActive('/about')} />
            <NavLink to="/projects" label="Projects" isActive={isActive('/projects')} />
            <NavLink to="/blog" label="Blog" isActive={isActive('/blog')} />
            <NavLink to="/corporate-info" label="Corporate Info" isActive={isActive('/corporate-info')} />

            <MenuItem label="About" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-about">
                <div className="dropdown-section">
                  <div className="dropdown-section-items">
                    {aboutItems.map((item, i) => (
                      <DropdownItem key={i} title={item.title} href={item.href} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
              </div>
            </MenuItem>

            <MenuItem label="Solutions" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-solutions">
                {solutionsSections.map((section, i) => (
                  <DropdownSection key={i} title={section.title} items={section.items} onClick={closeMenu} />
                ))}
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
              <img src="/logo-icon.webp" alt="" className="nav-logo-icon" />
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
            <NavLink to="/about" label="About" isActive={isActive('/about')} />
            <NavLink to="/projects" label="Projects" isActive={isActive('/projects')} />
            <NavLink to="/blog" label="Blog" isActive={isActive('/blog')} />
            <NavLink to="/corporate-info" label="Corporate Info" isActive={isActive('/corporate-info')} />

            <MenuItem label="About" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-about">
                <div className="dropdown-section">
                  <div className="dropdown-section-items">
                    {aboutItems.map((item, i) => (
                      <DropdownItem key={i} title={item.title} href={item.href} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
              </div>
            </MenuItem>

            <MenuItem label="Solutions" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-solutions">
                {solutionsSections.map((section, i) => (
                  <DropdownSection key={i} title={section.title} items={section.items} onClick={closeMenu} />
                ))}
              </div>
            </MenuItem>
          </div>
        </div>
      </nav>
    </>
  );
}