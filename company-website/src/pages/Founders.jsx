import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { FOUNDERS } from '../data/companyInfo';

export default function Founders() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Founders &amp; Leadership | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Meet the founders of Hemmingway Technologies — Sakshi, Janardhan Verma, Yash Kumar, Deepa Dingolia, Bhardwaj Kartikay, and Manish Mandia."
        />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section className="page-hero" style={{ paddingBottom: '32px' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag fade-in visible">
            <Users size={13} style={{ marginRight: 6 }} /> Founders &amp; Leadership
          </div>
          <h1 className="fade-in visible" style={{ marginTop: '16px' }}>
            The people behind<br />
            <span className="gradient-text">Hemmingway Technologies</span>
          </h1>
        </div>
      </section>

      {/* ── SIH HERITAGE STRIP ── */}
      <section style={{ padding: '0 0 48px' }}>
        <div className="container">
          <div
            className="fade-in visible"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '16px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 103, 241, 0.12)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-bright)' }}>
                  Smart India Hackathon Grand Winners &bull; Team Vajra Dev
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                  Netaji Subhas University of Technology (NSUT), Delhi &bull; Ministry of Coal
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#22c55e',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.22)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <ShieldCheck size={13} /> 6 Co-Founders
              </span>
              <Link
                to="/about"
                style={{
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none',
                }}
              >
                About Us <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 FOUNDERS GRID (Clean, Flat, Static) ── */}
      <section style={{ padding: '0 0 140px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {FOUNDERS.map((founder, idx) => (
              <div
                key={founder.id || idx}
                className="value-card fade-in visible"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: `linear-gradient(135deg, ${founder.color1}, ${founder.color2})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '18px',
                      fontFamily: 'var(--heading)',
                    }}
                  >
                    {founder.initials}
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: founder.color1,
                      background: `${founder.color1}15`,
                      border: `1px solid ${founder.color1}30`,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.2px',
                    }}
                  >
                    {founder.role}
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-bright)',
                    marginBottom: '16px',
                    fontFamily: 'var(--heading)',
                  }}
                >
                  {founder.name}
                </h3>

                {/* Footer / LinkedIn */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11.5px',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--mono)',
                    }}
                  >
                    Founding Team
                  </span>

                  {founder.linkedin ? (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6a1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                      </svg>
                      LinkedIn
                    </a>
                  ) : (
                    <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      NSUT Delhi
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
