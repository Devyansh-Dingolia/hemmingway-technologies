import { useRef, useEffect, useState } from 'react';
import {
  Building2,
  Hash,
  MapPin,
  FileText,
  ShieldCheck,
  Users,
  Globe,
  Scale,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { Helmet } from 'react-helmet-async';
import Aurora from '../components/ui/Aurora';

/* ── Animated counter hook ─────────────────────────── */
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ── Copy-to-clipboard ─────────────────────────────── */
function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="corp-copy-btn"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      title="Copy to clipboard"
    >
      {copied ? <CheckCircle2 size={13} /> : <FileText size={13} />}
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}

/* ── Data ──────────────────────────────────────────── */
const STATS = [
  { label: 'Founded',         value: 2026,        isText: false },
  { label: 'Registered',      value: 'New Delhi', isText: true  },
  { label: 'Company Type',    value: 'Pvt. Ltd.', isText: true  },
  { label: 'Ministry',        value: 'MCA India', isText: true  },
];

const COMPANY_INFO = [
  {
    Icon: Building2,
    label: 'Full Legal Name',
    value: 'Hemmingway Technologies Private Limited',
    mono: false, copyable: false,
    accent: '#6367f1',
  },
  {
    Icon: Hash,
    label: 'Corporate Identification Number',
    short: 'CIN',
    value: 'U62091DC2026PTC469396',
    mono: true, copyable: true,
    accent: '#a78bfa',
  },
  {
    Icon: MapPin,
    label: 'Registered Office Address',
    value: '4th Floor, RZ F-1/380, T/F Kh No 84/15, Palam Village, New Delhi – 110045',
    mono: false, copyable: false,
    accent: '#34d399',
  },
  {
    Icon: Globe,
    label: 'Jurisdiction',
    value: 'Registrar of Companies, Delhi • Ministry of Corporate Affairs',
    mono: false, copyable: false,
    accent: '#f59e0b',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 8750908167',
    mono: true, copyable: true,
    accent: '#38bdf8',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'hemmingways.tech@gmail.com',
    mono: true, copyable: true,
    accent: '#ec4899',
  },
  {
    Icon: Calendar,
    label: 'Date of Incorporation',
    value: '2026',
    mono: false, copyable: false,
    accent: '#fb923c',
  },
];

const DIRECTORS = [
  {
    id: 'D1', initials: 'JV',
    name: 'Janardhan Verma',
    designation: 'Director',
    responsibility: 'Technology & Operations',
    color1: '#6367f1', color2: '#a78bfa',
  },
  {
    id: 'D2', initials: 'SY',
    name: 'Sakshi Yadav',
    designation: 'Director',
    responsibility: 'Marketing & Growth',
    color1: '#38bdf8', color2: '#34d399',
  },
];

/* ── Stat cell with animated counter ──────────────── */
function StatCell({ label, value, isText }) {
  const { count, ref } = useCounter(isText ? 0 : value, 1600);
  return (
    <div ref={ref} className="corp-stat-cell">
      <div className="corp-stat-value">{isText ? value : count}</div>
      <div className="corp-stat-label">{label}</div>
    </div>
  );
}

/* ── Info row with rich hover ──────────────────────── */
function InfoRow({ Icon, label, short, value, mono, copyable, accent, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`corp-detail-row${hovered ? ' corp-detail-row--active' : ''}`}
      style={{ '--row-accent': accent, '--delay': `${index * 0.06}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow sweep on hover */}
      <div className="corp-row-sweep" style={{ background: `linear-gradient(90deg, ${accent}14, ${accent}08, transparent)` }} />

      <div className="corp-detail-left">
        {/* Icon with animated ring */}
        <div className="corp-detail-icon-ring" style={{ '--accent': accent }}>
          <div
            className="corp-detail-icon-wrap"
            style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
          >
            <Icon size={18} style={{ color: accent }} />
          </div>
        </div>

        <div className="corp-detail-meta">
          <span className="corp-detail-label">
            {label}
            {short && <em className="corp-detail-short" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>{short}</em>}
          </span>
          <span
            className={`corp-detail-value${mono ? ' corp-mono' : ''}`}
            style={hovered ? { color: '#fff' } : {}}
          >
            {value}
          </span>
        </div>
      </div>

      <div className="corp-detail-right">
        {copyable && <CopyButton value={value} />}
        {/* Arrow indicator */}
        <div className="corp-row-arrow" style={{ color: accent }}>
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Left accent bar */}
      <div className="corp-detail-accent-bar" style={{ background: accent }} />
      {/* Bottom glow line */}
      <div className="corp-detail-row-line" style={{ background: `linear-gradient(90deg, ${accent}50, ${accent}10, transparent)` }} />
    </div>
  );
}

/* ── Page ──────────────────────────────────────────── */
export default function CorporateInfo() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Corporate Information | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Official corporate information for Hemmingway Technologies Private Limited — CIN, address, phone, email and director details."
        />
      </Helmet>

      {/* ════════ AURORA BACKGROUND (full page, fixed) ════════ */}
      <div className="corp-aurora-bg" aria-hidden="true">
        <Aurora
          colorStops={['#F6D3B0', '#6B6BF2', '#4BB4F9']}
          amplitude={1.2}
          blend={0.6}
          speed={0.3}
        />
      </div>

      {/* ════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="corp-hero">
        <div className="corp-hero-grid" aria-hidden="true" />
        <div className="corp-orb corp-orb-1" aria-hidden="true" />
        <div className="corp-orb corp-orb-2" aria-hidden="true" />
        <div className="corp-orb corp-orb-3" aria-hidden="true" />

        <div className="container">
          <div className="corp-hero-inner">
            {/* Left */}
            <div className="corp-hero-content">
              <div className="corp-hero-eyebrow fade-up">
                <Scale size={14} />
                <span>Legal &amp; Compliance</span>
                <span className="corp-hero-eyebrow-dot" />
                <span>MCA Registered</span>
              </div>
              <h1 className="corp-hero-title fade-up">
                Corporate
                <br />
                <span className="gradient-text">Transparency</span>
              </h1>
              <p className="corp-hero-desc fade-up">
                All statutory details of Hemmingway Technologies Private Limited
                as officially filed with the <strong>Ministry of Corporate
                Affairs</strong>, Government of India. Verified &amp; up to date.
              </p>
              <div className="corp-hero-badges fade-up">
                <span className="corp-badge corp-badge-green"><ShieldCheck size={13} /> MCA Verified</span>
                <span className="corp-badge corp-badge-blue"><Globe size={13} /> Active Entity</span>
                <span className="corp-badge corp-badge-purple"><Scale size={13} /> Pvt. Ltd.</span>
              </div>
            </div>

            {/* Right — floating identity card */}
            <div className="corp-hero-card-wrap fade-up">
              <div className="corp-hero-card">
                <div className="corp-hero-card-top">
                  <div className="corp-hero-card-logo"><Building2 size={22} /></div>
                  <span className="corp-hero-card-chip">Active ● 2026</span>
                </div>
                <div className="corp-hero-card-name">
                  Hemmingway Technologies<br />
                  <span>Private Limited</span>
                </div>
                <div className="corp-hero-card-rows">
                  <div className="corp-hero-card-row">
                    <span>CIN</span>
                    <code>U62091DC2026PTC469396</code>
                  </div>
                  <div className="corp-hero-card-row">
                    <span>Phone</span>
                    <code>+91 8750908167</code>
                  </div>
                  <div className="corp-hero-card-row">
                    <span>State</span>
                    <code>New Delhi, India</code>
                  </div>
                </div>
                <div className="corp-hero-card-footer">
                  <CheckCircle2 size={13} />
                  Registered under Companies Act, 2013
                </div>
                <div className="corp-hero-card-shimmer" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STATS BAR ══════════════════════════════════ */}
      <div className="corp-stats-bar fade-up">
        <div className="container">
          <div className="corp-stats-inner">
            {STATS.map((s) => <StatCell key={s.label} {...s} />)}
          </div>
        </div>
      </div>

      {/* ════════════════════════ COMPANY DETAILS ════════════════════════════ */}
      <section className="corp-details-section">
        <div className="container">
          <div className="corp-details-header fade-up">
            <div className="corp-details-title-wrap">
              <div className="corp-section-pill"><Building2 size={14} /> Company Details</div>
              <h2>Statutory Registration<br /><span className="gradient-text">Information</span></h2>
              <p>All details as registered with the Registrar of Companies, Delhi.</p>
            </div>
            <a
              href="https://www.mca.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="corp-mca-btn"
            >
              Verify on MCA <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="corp-details-list">
            {COMPANY_INFO.map((item, i) => (
              <InfoRow key={item.label} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ DIRECTORS ══════════════════════════════════ */}
      <section className="corp-dir-section">
        <div className="container">
          <div className="corp-details-header fade-up">
            <div className="corp-details-title-wrap">
              <div className="corp-section-pill"><Users size={14} /> Board of Directors</div>
              <h2>Appointed <span className="gradient-text">Directors</span></h2>
              <p>Officially appointed directors as per MCA statutory records.</p>
            </div>
          </div>

          <div className="corp-dir-grid">
            {DIRECTORS.map(({ id, initials, name, designation, responsibility, color1, color2 }) => (
              <div key={id} className="corp-dir-card fade-up">
                <div className="corp-dir-blob" style={{ background: `radial-gradient(circle, ${color1}30 0%, transparent 70%)` }} aria-hidden="true" />
                <div className="corp-dir-top">
                  <div className="corp-dir-avatar" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}>
                    {initials}
                  </div>
                  <div className="corp-dir-id-badge" style={{ color: color1, borderColor: `${color1}40`, background: `${color1}12` }}>
                    {id}
                  </div>
                </div>
                <div className="corp-dir-info">
                  <h3 className="corp-dir-name">{name}</h3>
                  <div className="corp-dir-role" style={{ color: color1 }}>{designation}</div>
                  <div className="corp-dir-resp">{responsibility}</div>
                </div>
                <div className="corp-dir-verify">
                  <div className="corp-dir-verify-dot" style={{ background: '#22c55e' }} />
                  <span>Officially Appointed — MCA Verified</span>
                  <ShieldCheck size={13} style={{ color: '#22c55e', marginLeft: 'auto' }} />
                </div>
                <div className="corp-dir-accent-line" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ LEGAL NOTICE ═══════════════════════════════ */}
      <section className="corp-legal-section">
        <div className="container">
          <div className="corp-legal-box fade-up">
            <div className="corp-legal-icon"><Scale size={22} /></div>
            <div className="corp-legal-body">
              <strong>Legal Disclaimer</strong>
              <p>
                The information on this page is provided for informational and transparency
                purposes only. For legally binding documents or compliance purposes, refer to
                the official{' '}
                <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer">
                  MCA Portal
                </a>{' '}
                or contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
