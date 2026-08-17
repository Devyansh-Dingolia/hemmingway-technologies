import { useRef } from 'react';
import {
  Trophy,
  Landmark,
  Shield,
  MapPin,
  TrendingUp,
  FileCheck2,
  Activity,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import { Helmet } from 'react-helmet-async';
import CometCard from '../components/ui/CometCard';
import EncryptedText from '../components/ui/EncryptedText';

const CAPABILITIES = [
  {
    Icon: FileCheck2,
    title: 'Statutory Safety Compliance',
    desc: 'Digital checklists and audit workflows aligned with Directorate General of Mines Safety (DGMS) and Ministry of Coal guidelines.',
  },
  {
    Icon: Activity,
    title: 'Real-Time Hazard Monitoring',
    desc: 'Centralized telemetry and operational anomaly tracking across active coal excavation and processing zones.',
  },
  {
    Icon: AlertTriangle,
    title: 'Incident Reporting & Triage',
    desc: 'Rapid hazard reporting with automated escalation protocols, chain-of-custody logging, and corrective action workflows.',
  },
  {
    Icon: BarChart3,
    title: 'Mine Officer Analytics',
    desc: 'High-visibility dashboard delivering actionable safety scores, compliance trends, and risk heatmaps for management.',
  },
];

export default function Projects() {
  useScrollReveal();
  const capabilitiesRef = useRef(null);
  useGSAPReveal(capabilitiesRef);

  return (
    <>
      <Helmet>
        <title>Our Projects | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Explore Suraksha Sathi — the SIH 2025 national award-winning mine safety compliance platform by Hemmingway Technologies."
        />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/bg-hero.webp")' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag">Our Projects</div>
          <h1>
            Engineering solutions that<br />
            <span className="gradient-text">make an impact</span>
          </h1>
          <p>
            From national-scale industrial safety platforms to mission-critical infrastructure —<br />
            we build software that addresses real-world challenges.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECT: SURAKSHA SATHI ── */}
      <section className="origin-section">
        <div className="container">
          <div className="origin-grid">
            <div className="origin-left">
              <div className="tag">Flagship Project</div>
              <h2 className="fade-up origin-headline">
                <span className="gradient-text">Suraksha Sathi</span> —<br />
                Mine Safety Compliance
              </h2>

              <p className="fade-up origin-lead" style={{ transitionDelay: '0.1s' }}>
                Born from our <strong>Smart India Hackathon 2025</strong> national win,
                Suraksha Sathi is a digital mine safety compliance and hazard monitoring prototype
                built to address the problem statement provided by <strong>CMPDI</strong> under the <strong>Ministry of Coal</strong>.
                The prototype is designed to elevate worker safety standards, streamline statutory oversight,
                and modernize compliance verification in Indian coal mines.
              </p>

              {/* Project highlights card */}
              <div className="sih-card fade-up" style={{ transitionDelay: '0.2s' }}>
                <div className="sih-card-header">
                  <div className="sih-trophy-wrap">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <div className="sih-card-title">SIH 2025 National Winner</div>
                    <div className="sih-card-team">Problem ID: SIH25181 · Team Vajra Dev</div>
                  </div>
                </div>

                <div className="sih-meta-grid">
                  {[
                    { icon: Landmark, label: 'Ministry', value: 'Ministry of Coal (MoC)' },
                    { icon: Shield, label: 'Domain', value: 'Mine Safety & Compliance' },
                    { icon: MapPin, label: 'Institution', value: 'NSUT, Delhi' },
                    { icon: TrendingUp, label: 'Impact', value: 'Worker Safety at Scale' },
                  ].map((m) => (
                    <div className="sih-meta-chip" key={m.label}>
                      <span className="sih-meta-icon" aria-hidden="true">
                        <m.icon size={14} />
                      </span>
                      <div>
                        <div className="sih-meta-label">{m.label}</div>
                        <div className="sih-meta-value">{m.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="fade-up origin-tagline" style={{ transitionDelay: '0.3s' }}>
                <EncryptedText
                  text="Technology that protects lives and powers industrial safety."
                  className="gradient-text"
                  speed={25}
                />
              </p>
            </div>

            {/* RIGHT: Impact stats */}
            <div className="origin-right fade-in">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center', height: '100%' }}>
                <CometCard className="bento-card" style={{ padding: '32px' }}>
                  <div>
                    <div className="bento-badge">Industrial Safety</div>
                    <h3 style={{ fontSize: '20px', marginTop: '12px' }}>Protecting India's Industrial Workforce</h3>
                    <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.7 }}>
                      Our prototype directly addresses compliance and hazard detection in one of
                      India's most vital resource sectors, providing safety inspectors and mine managers
                      with automated, reliable oversight.
                    </p>
                  </div>
                </CometCard>

                <CometCard className="bento-card" style={{ padding: '32px' }}>
                  <div>
                    <div className="bento-badge">National Impact</div>
                    <h3 style={{ fontSize: '20px', marginTop: '12px' }}>Building for the Indian Economy</h3>
                    <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.7 }}>
                      As an Indian technology enterprise incorporated in New Delhi, we are dedicated
                      to engineering homegrown technological capabilities that support national digital
                      modernization and employment creation.
                    </p>
                  </div>
                </CometCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE & CAPABILITIES ── */}
      <section className="services" ref={capabilitiesRef} style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Platform Capabilities</div>
            <h2>Engineered for<br />rigorous operational environments</h2>
            <p>Key pillars powering the Suraksha Sathi mine safety architecture.</p>
          </div>
          <div className="services-grid" style={{ marginTop: '64px' }}>
            {CAPABILITIES.map((cap, i) => {
              const IconComponent = cap.Icon;
              return (
                <div key={i} className="service-card" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="service-icon"><IconComponent size={30} /></div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
