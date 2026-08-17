import { useRef } from 'react';
import { BadgeInfo, Building2, Hash, Landmark, Layers3, School2, Trophy, MapPin, Users } from 'lucide-react';
import { DIRECTORS } from '../data/companyInfo';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';
import EncryptedText from '../components/ui/EncryptedText';
import CometCard from '../components/ui/CometCard';
import SIHGallery from '../components/ui/SIHGallery';
import { Helmet } from 'react-helmet-async';

const VALUES = [
  { num: '01', title: 'Craft Over Speed', desc: 'We take pride in the quality of every line of code, every pixel, every decision. Shortcuts are not in our vocabulary.' },
  { num: '02', title: 'Radical Transparency', desc: 'You will always know the state of your project. No surprises, no hidden costs — just honest communication.' },
  { num: '03', title: 'Human-Centred Design', desc: 'Technology should serve people. Every system we build starts with the user and works backward to the code.' },
  { num: '04', title: 'Continuous Learning', desc: "The tech landscape evolves daily. We invest in our team's growth so you always get the most current thinking." },
];

const SIH_META = [
  { icon: BadgeInfo, label: 'Problem ID', value: 'SIH25181' },
  { icon: Landmark, label: 'Ministry', value: 'Ministry of Coal (MoC)' },
  { icon: Building2, label: 'Organisation', value: 'CMPDI' },
  { icon: School2, label: 'Institution', value: 'NSUT, Delhi' },
  { icon: Layers3, label: 'Category', value: 'Software' },
  { icon: Hash, label: 'Team ID', value: '102387' },
];

const FOUNDERS = ['Devyansh Dingolia', 'Janardhan Verma', 'Manish Mandia', 'Yash Kumar', 'Sakshi Yadav', 'Bhardwaj Kartikay'];

export default function About() {
  useScrollReveal();
  const valuesRef = useRef(null);
  useGSAPReveal(valuesRef);

  return (
    <>
      <Helmet>
        <title>About Us | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Learn about Hemmingway Technologies, our mission, team, and vision for AI-powered software innovation."
        />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/bg-hero.webp")' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag">About Us</div>
          <h1>
            Built by engineers,<br />
            <span className="gradient-text">for ambitious teams</span>
          </h1>
          <p>
            Six founders. One hackathon win. <br /> A company born from 36 hours of relentless building.
          </p>
        </div>
      </section>

      {/* ── UNIFIED STORY + SIH ── */}
      <section className="origin-section">
        <div className="container">
          <div className="origin-grid">

            {/* ── LEFT: Story + SIH Card ── */}
            <div className="origin-left">
              <div className="tag">Our Origin Story</div>
              <h2 className="fade-up origin-headline">
                We won <span className="gradient-text">Smart India<br />Hackathon</span> — then<br />built a company.
              </h2>

              <p className="fade-up origin-lead" style={{ transitionDelay: '0.1s' }}>
                Team <strong>Vajra Dev</strong> from <strong>Netaji Subhas University of Technology, Delhi</strong> was assigned
                a real government problem: build a software solution for the{' '}
                <strong>Ministry of Coal</strong> through <strong>Central Mine Planning & Design Institute (CMPDI)</strong>.
                We shipped a production-grade app prototype in 36 sleepless hours — and Won!
              </p>

              {/* SIH Detail Card */}
              <div className="sih-card fade-up" style={{ transitionDelay: '0.2s' }}>
                {/* Trophy Header */}
                <div className="sih-card-header">
                  <div className="sih-trophy-wrap">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <div className="sih-card-title">Smart India Hackathon — Grand Winner</div>
                    <div className="sih-card-team">Team &ldquo;Vajra Dev&rdquo; · Team ID #102387</div>
                  </div>
                </div>

                {/* Meta chips */}
                <div className="sih-meta-grid">
                  {SIH_META.map((m) => (
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

                {/* Founders row */}
                <div className="sih-founders">
                  <Users size={13} />
                  <span className="sih-founders-label">Founders —</span>
                  {FOUNDERS.map((f, i) => (
                    <span key={f} className="sih-founder-pill">
                      {f}{i < FOUNDERS.length - 1 ? '' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <p className="fade-up origin-tagline" style={{ transitionDelay: '0.3s' }}>
                <EncryptedText
                  text="We don't just ship code. We build the foundation your business runs on."
                  className="gradient-text"
                  speed={25}
                />
              </p>

              {/* Vision */}
              <p className="fade-up origin-lead" style={{ transitionDelay: '0.25s', fontSize: '15px', marginTop: '24px' }}>
                Our vision is to build technology that transforms industries —
                from mine safety and government infrastructure to AI-powered enterprise solutions.
                We're just getting started.
              </p>

              {/* Stats row */}
              <div className="origin-stats fade-up" style={{ transitionDelay: '0.35s' }}>
                <div className="origin-stat">
                  <span className="origin-stat-num gradient-text">1.5L+</span>
                  <span className="origin-stat-label">Competitors</span>
                </div>
                <div className="origin-stat-divider" />
                <div className="origin-stat">
                  <span className="origin-stat-num gradient-text">36h</span>
                  <span className="origin-stat-label">Non-stop build</span>
                </div>
                <div className="origin-stat-divider" />
                
                <div className="origin-stat">
                  <MapPin size={14} style={{ color: 'var(--primary)', marginBottom: 2 }} />
                  <span className="origin-stat-label">NSUT, Delhi</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Gallery ── */}
            <div className="origin-right fade-in">
              <SIHGallery />
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values" ref={valuesRef}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Our Values</div>
            <h2>The principles that<br />guide everything we do</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <CometCard key={i} className="value-card">
                <div data-reveal style={{ padding: '0' }}>
                  <div className="value-num">{v.num}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="about-values" style={{ paddingBottom: '160px' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag">Founders</div>
            <h2>The people behind<br /><span className="gradient-text">Hemmingway Technologies</span></h2>
          </div>
          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1000px', margin: '48px auto 0' }}>
            {DIRECTORS.map((director) => (
              <CometCard key={director.id} className="value-card">
                <div data-reveal style={{ padding: '0', textAlign: 'center' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '20px',
                    background: `linear-gradient(135deg, ${director.color1}, ${director.color2})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: '22px',
                    fontFamily: 'var(--heading)', margin: '0 auto 16px',
                  }}>
                    {director.initials}
                  </div>
                  <h3 style={{ marginBottom: '4px' }}>{director.name}</h3>
                  <p style={{ margin: '0 0 4px', color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>{director.designation || 'Founder'}</p>
                  {director.linkedin && (
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text)', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6a1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z"/></svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
