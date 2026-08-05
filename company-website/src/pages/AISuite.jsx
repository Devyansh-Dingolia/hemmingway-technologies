import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle2, ArrowRight, Bot, Database, Shield, Workflow } from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import CometCard from '../components/ui/CometCard';
import { Helmet } from 'react-helmet-async';

const CAPABILITIES = [
  { icon: Bot, title: 'Custom LLM Integration', desc: 'Deploy fine-tuned or prompt-engineered LLM models directly into your business applications.' },
  { icon: Database, title: 'Enterprise RAG Pipelines', desc: 'Connect your internal documentation and data stores with Retrieval-Augmented Generation for context-aware responses.' },
  { icon: Workflow, title: 'Intelligent Automation', desc: 'Automate repetitive workflows, document processing, and customer routing using multi-agent systems.' },
  { icon: Shield, title: 'Privacy & Guardrails', desc: 'Implement strict data boundary controls, anti-hallucination guardrails, and SOC2-compliant model hosting.' },
];

export default function AISuite() {
  useScrollReveal();
  const ref = useRef(null);
  useGSAPReveal(ref);

  return (
    <>
      <Helmet>
        <title>AI Suite — Custom LLM & Automation | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Custom LLM integrations & intelligent automation designed and engineered by Hemmingway Technologies."
        />
      </Helmet>

      <section className="team-section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="tag">AI Suite</div>
          <h1>
            Custom LLM integrations &<br />
            <span className="gradient-text">intelligent automation</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '640px', lineHeight: '1.7', marginTop: '16px' }}>
            AI Suite empowers organizations to harness machine learning and large language models tailored to their unique workflows. We build domain-specific AI integrations, enterprise RAG pipelines, and automated agent workflows.
          </p>
        </div>
      </section>

      <section className="about-values" ref={ref}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Capability Overview</div>
            <h2>Enterprise AI Engineered Responsibly</h2>
          </div>

          <div className="values-grid">
            {CAPABILITIES.map((c) => {
              const IconComp = c.icon;
              return (
                <CometCard key={c.title} className="value-card">
                  <div data-reveal style={{ padding: 0 }}>
                    <IconComp size={24} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </CometCard>
              );
            })}
          </div>

          <div style={{ marginTop: '80px', padding: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--heading)' }}>How We Engage</h3>
            <p style={{ color: 'var(--text)', lineHeight: '1.7', marginBottom: '24px' }}>
              We collaborate closely with your engineering and business stakeholders to identify high-ROI automation targets, construct robust evaluations, and deploy scalable vector databases and AI endpoints.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {['Data Audit & Feasibility Study', 'RAG Prototype Development', 'Model Fine-tuning & Guardrails', 'Production API & Agent Deployment'].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-bright)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
