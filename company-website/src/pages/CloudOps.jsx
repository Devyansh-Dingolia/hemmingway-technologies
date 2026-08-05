import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, CheckCircle2, ArrowRight, Server, ShieldCheck, Activity, DollarSign } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import CometCard from '../components/ui/CometCard';
import { Helmet } from 'react-helmet-async';

const FEATURES = [
  { icon: Server, title: 'Infrastructure as Code', desc: 'Automated Terraform and CloudFormation scripts for reproducible, multi-region cloud deployments.' },
  { icon: Activity, title: 'High Availability & Auto-scaling', desc: 'Resilient architectures designed for 99.99% uptime with dynamic resource scaling.' },
  { icon: DollarSign, title: 'Cloud Cost Optimization', desc: 'Resource profiling and FinOps analysis to eliminate wasteful cloud spending.' },
  { icon: ShieldCheck, title: 'CI/CD & Observability', desc: 'Automated build pipelines combined with Prometheus, Grafana, and Datadog telemetry monitoring.' },
];

export default function CloudOps() {
  useScrollReveal();
  const ref = useRef(null);
  useGSAPReveal(ref);

  return (
    <>
      <Helmet>
        <title>CloudOps — Managed Infrastructure | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Managed cloud infrastructure at enterprise scale delivered by Hemmingway Technologies."
        />
      </Helmet>

      <section className="team-section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="tag">CloudOps</div>
          <h1>
            Managed cloud infrastructure at<br />
            <span className="gradient-text">enterprise scale</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '640px', lineHeight: '1.7', marginTop: '16px' }}>
            CloudOps provides end-to-end cloud infrastructure engineering, migration, and proactive management across AWS, GCP, and Azure. We design resilient, auto-scaling architectures configured for maximum uptime.
          </p>
        </div>
      </section>

      <section className="about-values" ref={ref}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Capability Overview</div>
            <h2>Resilient Cloud Systems Designed for 99.99% Uptime</h2>
          </div>

          <div className="values-grid">
            {FEATURES.map((f) => {
              const IconComp = f.icon;
              return (
                <CometCard key={f.title} className="value-card">
                  <div data-reveal style={{ padding: 0 }}>
                    <IconComp size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </CometCard>
              );
            })}
          </div>

          <div style={{ marginTop: '80px', padding: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--heading)' }}>Supported Platforms & Technologies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Kubernetes & Docker', 'Terraform & Ansible', 'Helm & ArgoCD'].map((platform) => (
                <div key={platform} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-bright)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
