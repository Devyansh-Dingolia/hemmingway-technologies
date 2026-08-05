import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Lock, CheckCircle2, ArrowRight, ShieldAlert, Code2, KeyRound, FileCheck } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import CometCard from '../components/ui/CometCard';
import { Helmet } from 'react-helmet-async';

const AUDIT_SERVICES = [
  { icon: ShieldAlert, title: 'Penetration Testing & SAST/DAST', desc: 'Thorough static and dynamic application security testing to detect exploit vectors.' },
  { icon: Code2, title: 'Code Level Hardening', desc: 'Direct remediation and code patching to fix SQL injection, XSS, and authentication flaws.' },
  { icon: KeyRound, title: 'IAM & Secrets Management', desc: 'Zero-trust access architecture, API key security, and secrets rotation implementation.' },
  { icon: FileCheck, title: 'Compliance & Audit Readiness', desc: 'Pre-audit preparation and hardening for SOC 2 Type II, ISO 27001, and HIPAA compliance.' },
];

export default function SecureStack() {
  useScrollReveal();
  const ref = useRef(null);
  useGSAPReveal(ref);

  return (
    <>
      <Helmet>
        <title>SecureStack — Security Audit & Hardening | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Full-stack security audit & hardening service provided by Hemmingway Technologies."
        />
      </Helmet>

      <section className="team-section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="tag">SecureStack</div>
          <h1>
            Full-stack security audit &<br />
            <span className="gradient-text">hardening service</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '640px', lineHeight: '1.7', marginTop: '16px' }}>
            SecureStack is our comprehensive cybersecurity and code hardening offering engineered to safeguard your systems before vulnerabilities become threats. We audit API endpoints, cloud configs, and code bases.
          </p>
        </div>
      </section>

      <section className="about-values" ref={ref}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Capability Overview</div>
            <h2>Proactive Defense & Hands-On Patching</h2>
          </div>

          <div className="values-grid">
            {AUDIT_SERVICES.map((s) => {
              const IconComp = s.icon;
              return (
                <CometCard key={s.title} className="value-card">
                  <div data-reveal style={{ padding: 0 }}>
                    <IconComp size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </CometCard>
              );
            })}
          </div>

          <div style={{ marginTop: '80px', padding: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--heading)' }}>Security Audit Scope</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {['REST & GraphQL API Endpoints', 'Authentication & OAuth Workflows', 'Database Encryption & Access Logs', 'Cloud IAM Roles & S3 Buckets', 'Dependency & Container Scanning', 'Remediation Verification Testing'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-bright)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
