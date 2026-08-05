import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Brain, Cloud, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import CometCard from '../components/ui/CometCard';
import { Helmet } from 'react-helmet-async';

const OFFERINGS = [
  {
    id: 'launchpad',
    icon: Rocket,
    name: 'Launchpad',
    tagline: 'From idea to production-ready MVP in 6 weeks.',
    description:
      'Launchpad is our rapid engineering service designed to help ambitious teams turn concepts into scalable, market-ready software fast. We handle everything from architecture design and UI/UX prototyping to full-stack development and cloud deployment. Built with high standards for speed without sacrificing code quality, Launchpad delivers a foundation ready for real users and future expansion.',
    features: [
      'Architectural blueprint & stack selection',
      'End-to-end MVP software development',
      'Production-ready CI/CD pipeline setup',
    ],
    audience: 'Ideal for early-stage founders, innovation hubs, and teams needing fast execution.',
  },
  {
    id: 'ai-suite',
    icon: Brain,
    name: 'AI Suite',
    tagline: 'Custom LLM integrations & intelligent automation.',
    description:
      'AI Suite empowers organizations to harness cutting-edge machine learning and large language models tailored to their unique workflows. We build domain-specific AI integrations, retrieval-augmented generation (RAG) pipelines, and intelligent automation systems. Our focus is on seamless implementation, data privacy, and measurable efficiency gains across your technology stack.',
    features: [
      'Custom LLM & RAG architecture design',
      'Intelligent workflow & process automation',
      'Enterprise data privacy & guardrails',
    ],
    audience: 'Ideal for tech-forward businesses seeking data-driven automation and custom AI tools.',
  },
  {
    id: 'cloudops',
    icon: Cloud,
    name: 'CloudOps',
    tagline: 'Managed cloud infrastructure at enterprise scale.',
    description:
      'CloudOps provides end-to-end cloud infrastructure engineering, migration, and proactive management across AWS, GCP, and Azure. We design resilient, auto-scaling architectures configured for maximum uptime, high security, and optimized infrastructure costs. Our engagement includes automated provisioning, continuous monitoring, and containerized deployment pipelines.',
    features: [
      'Infrastructure as Code (IaC) & automation',
      'Multi-cloud migration & cost optimization',
      '24/7 monitoring, telemetry & reliability',
    ],
    audience: 'Ideal for growing companies upgrading legacy systems or scaling cloud footprints.',
  },
  {
    id: 'securestack',
    icon: Lock,
    name: 'SecureStack',
    tagline: 'Full-stack security audit & hardening service.',
    description:
      'SecureStack is our comprehensive cybersecurity and code hardening offering engineered to safeguard your systems before vulnerabilities become threats. We perform deep security audits, API security analyses, cloud configuration reviews, and penetration testing. We don’t just report vulnerabilities — we work directly with your codebase to implement robust security patches.',
    features: [
      'Comprehensive vulnerability & code audit',
      'API & Cloud configuration hardening',
      'Compliance readiness & security posture patch',
    ],
    audience: 'Ideal for platforms handling sensitive data, enterprise integrations, or preparing for compliance audits.',
  },
];

export default function Solutions() {
  useScrollReveal();
  const offeringsRef = useRef(null);
  useGSAPReveal(offeringsRef);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Solutions | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Explore Hemmingway Technologies' capabilities in MVP acceleration, custom AI integrations, cloud infrastructure, and cybersecurity hardening."
        />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/bg-hero.webp")' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag">Solutions & Services</div>
          <h1>
            Engineering capabilities<br />
            <span className="gradient-text">tailored for scale</span>
          </h1>
          <p>
            We provide specialized engineering services designed to help ambitious teams launch faster, automate workflows, and scale securely.
          </p>
        </div>
      </section>

      {/* ── OFFERINGS LIST ── */}
      <section className="services" ref={offeringsRef} style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Our Offerings</div>
            <h2>Capabilities engineered for<br />modern tech challenges</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '60px' }}>
            {OFFERINGS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div id={item.id} key={item.id} style={{ scrollMarginTop: '120px' }}>
                  <CometCard className="value-card">
                    <div data-reveal style={{ padding: '0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: '14px',
                            background: 'var(--primary-light)',
                            border: '1px solid rgba(99, 103, 241, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent size={28} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '26px', margin: 0, color: 'var(--heading)' }}>{item.name}</h3>
                          <div style={{ fontSize: '15px', color: 'var(--primary)', fontWeight: 600, marginTop: '4px' }}>
                            {item.tagline}
                          </div>
                        </div>
                      </div>

                      <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text)', marginBottom: '24px' }}>
                        {item.description}
                      </p>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                          gap: '12px',
                          marginBottom: '24px',
                          padding: '16px 20px',
                          background: 'rgba(255, 255, 255, 0.02)',
                          borderRadius: '12px',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {item.features.map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-bright)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'space-between',
                          flexWrap: 'wrap',
                          gap: '16px',
                          paddingTop: '16px',
                          borderTop: '1px solid var(--border)',
                        }}
                      >
                        <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          {item.audience}
                        </span>
                        <Link
                          to={`/${item.id}`}
                          className="btn-primary"
                          style={{
                            padding: '8px 18px',
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          View {item.name} Page
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </CometCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner fade-up">
            <div className="tag" style={{ margin: '0 auto 24px' }}>Get Started</div>
            <h2>
              Ready to execute your<br />
              <span className="gradient-text">next technical initiative?</span>
            </h2>
            <p>
              Partner with our engineering team to turn ambitious product visions into production-ready software.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
