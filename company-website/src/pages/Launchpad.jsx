import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, CheckCircle2, ArrowRight, Zap, Code, ShieldCheck, Cpu } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import CometCard from '../components/ui/CometCard';
import { Helmet } from 'react-helmet-async';

const PROCESS_STEPS = [
  { step: '01', title: 'Scope & Architecture', desc: 'Week 1: Defining technical requirements, system architecture, database schema, and design specs.' },
  { step: '02', title: 'Sprint Building', desc: 'Weeks 2–4: Rapid, test-driven full-stack development with weekly milestone demos.' },
  { step: '03', title: 'Hardening & QA', desc: 'Week 5: Performance tuning, security checks, and cross-browser/device testing.' },
  { step: '04', title: 'Deployment & Launch', desc: 'Week 6: Production rollout, CI/CD automation, telemetry setup, and developer handoff.' },
];

const STACK = ['React / Next.js', 'Node.js / Python', 'PostgreSQL / Redis', 'Docker & AWS / GCP', 'Tailwind & UI Systems'];

export default function Launchpad() {
  useScrollReveal();
  const ref = useRef(null);
  useGSAPReveal(ref);

  return (
    <>
      <Helmet>
        <title>Launchpad — MVP in 6 Weeks | Hemmingway Technologies</title>
        <meta
          name="description"
          content="From idea to production-ready MVP in 6 weeks. Rapid engineering capabilities from Hemmingway Technologies."
        />
      </Helmet>

      <section className="team-section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="tag">Launchpad</div>
          <h1>
            From idea to<br />
            <span className="gradient-text">production-ready MVP in 6 weeks</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '640px', lineHeight: '1.7', marginTop: '16px' }}>
            Launchpad is our rapid engineering service designed to help ambitious teams turn concepts into scalable, market-ready software fast. We handle architecture, development, security, and cloud deployment.
          </p>
        </div>
      </section>

      <section className="about-values" ref={ref}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Capability Overview</div>
            <h2>What Launchpad Delivers</h2>
          </div>

          <div className="values-grid">
            <CometCard className="value-card">
              <div data-reveal style={{ padding: 0 }}>
                <Zap size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h3>Rapid Engineering</h3>
                <p>Focused 6-week development lifecycle using proven modern stacks to accelerate time-to-market.</p>
              </div>
            </CometCard>

            <CometCard className="value-card">
              <div data-reveal style={{ padding: 0 }}>
                <Code size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h3>Clean Code & Standards</h3>
                <p>Maintainable, well-documented TypeScript and modular code structures ready for your internal team to take over.</p>
              </div>
            </CometCard>

            <CometCard className="value-card">
              <div data-reveal style={{ padding: 0 }}>
                <ShieldCheck size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h3>Production Hardened</h3>
                <p>Integrated auth, role-based access control, security best practices, and error tracking from day one.</p>
              </div>
            </CometCard>

            <CometCard className="value-card">
              <div data-reveal style={{ padding: 0 }}>
                <Cpu size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h3>Scalable Foundation</h3>
                <p>Containerized architecture designed to scale seamlessly from your first 100 users to thousands.</p>
              </div>
            </CometCard>
          </div>

          <div style={{ marginTop: '80px' }}>
            <div className="section-header fade-up">
              <div className="tag">Engagement Timeline</div>
              <h2>The 6-Week Roadmap</h2>
            </div>
            <div className="values-grid" style={{ marginTop: '40px' }}>
              {PROCESS_STEPS.map((s) => (
                <div key={s.step} className="value-card fade-up">
                  <div className="value-num">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '60px', padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--heading)' }}>Standard Technology Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {STACK.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(99,103,241,0.08)', border: '1px solid rgba(99,103,241,0.2)', borderRadius: '10px', fontSize: '14px', color: 'var(--text-bright)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
