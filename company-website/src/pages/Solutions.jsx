import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Brain, Cloud, Lock, Smartphone, Link as LinkIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { Helmet } from 'react-helmet-async';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';

const SOLUTIONS = [
  {
    id: 'api-integrations',
    Icon: LinkIcon,
    title: 'API & Integrations',
    tagline: 'Seamless connectivity between your tools, platforms, and services.',
    description: 'We build robust APIs and integration layers that connect your ecosystem — from third-party SaaS platforms to legacy enterprise systems. RESTful, GraphQL, webhooks, and event-driven architectures.',
    features: ['REST/GraphQL APIs', 'Payment Gateway Integration', 'Webhook Systems', 'API Documentation'],
    accent: '#f59e0b',
  },
  {
    id: 'mobile-web',
    Icon: Smartphone,
    title: 'Mobile & Web Applications',
    tagline: 'Beautiful, performant applications across every platform.',
    description: 'We craft pixel-perfect web and mobile experiences using React, React Native, and native iOS/Android development. Performance, accessibility, and user delight are non-negotiable in everything we ship.',
    features: ['Web Apps (React/Next.js)', 'Mobile Apps (React Native)', 'UI/UX Design', 'Admin Dashboards'],
    accent: '#22c55e',
  },
  {
    id: 'cybersecurity',
    Icon: Lock,
    title: 'Cybersecurity',
    tagline: 'Enterprise-grade security protecting your data, users, and business.',
    description: 'We build security into every layer of your stack — from application-level protections and encryption to network security and compliance frameworks. Proactive threat detection, not reactive firefighting.',
    features: ['Pen Testing', 'Security Audits', 'Auth Systems (OAuth/JWT)', 'Compliance (ISO 27001)'],
    accent: '#f43f5e',
  },
  {
    id: 'cloud',
    Icon: Cloud,
    title: 'Cloud Architecture',
    tagline: 'Scalable, resilient cloud infrastructure built for performance.',
    description: 'We architect and deploy cloud-native infrastructure on AWS, GCP, and Azure — designed for high availability, auto-scaling, and cost efficiency. From containerized microservices to serverless architectures.',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Containerization (Docker/K8s)', 'Cost Optimization'],
    accent: '#38bdf8',
  },
  {
    id: 'ai-ml',
    Icon: Brain,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent systems that learn, adapt, and make data-driven decisions.',
    description: 'From recommendation engines to predictive analytics, we build AI solutions that transform raw data into actionable intelligence. Our team works with modern LLMs, computer vision, NLP, and custom model training.',
    features: ['LLM Agents', 'Computer Vision', 'Graph ML/GNN', 'MLOps & Deployment'],
    accent: '#a78bfa',
  },
  {
    id: 'custom-software',
    Icon: Zap,
    title: 'Custom Software Development',
    tagline: 'Bespoke applications engineered for your unique business challenges.',
    description: 'We design and build custom software solutions from the ground up — tailored to your workflows, your users, and your growth trajectory. Every system is built to scale from day one, with clean architecture and maintainable code.',
    features: ['Enterprise Software', 'MVP Development', 'Legacy Modernization', 'Tech Consulting'],
    accent: '#6367f1',
  },
];

export default function Solutions() {
  useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');

    const scrollToElement = () => {
      const el = document.getElementById(`${targetId}-wrapper`) || document.getElementById(targetId);
      if (el) {
        const navHeight = 90;
        const rect = el.getBoundingClientRect();
        const targetTop = rect.top + window.scrollY - navHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth',
        });
      }
    };

    // Trigger on mount or hash change with safe ticks
    const t1 = setTimeout(scrollToElement, 80);
    const t2 = setTimeout(scrollToElement, 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Solutions | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Explore our full range of solutions — custom software development, AI/ML, cloud architecture, cybersecurity, mobile apps, and API integrations."
        />
      </Helmet>

      {/* ── PAGE HERO ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/bg-hero.webp")' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag">Solutions</div>
          <h1>
            Full-stack engineering<br />
            <span className="gradient-text">across every domain</span>
          </h1>
          <p>
            From concept to deployment, we handle every layer of your digital stack<br />
            with precision, security, and craft.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS SCROLL STACK ── */}
      <section className="services" style={{ padding: '40px 0 100px' }}>
        <div className="container">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={60}
            itemScale={0.035}
            itemStackDistance={24}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.88}
            blurAmount={0.6}
            className="solutions-scroll-stack"
          >
            {SOLUTIONS.map((solution) => {
              const IconComponent = solution.Icon;
              return (
                <ScrollStackItem key={solution.id} id={solution.id} itemClassName="solution-stack-card">
                  <div className="solution-card-inner">
                    <div className="solution-card-left">
                      <div
                        className="service-icon"
                        style={{
                          background: `${solution.accent}18`,
                          border: `1px solid ${solution.accent}38`,
                        }}
                      >
                        <IconComponent size={28} style={{ color: solution.accent }} />
                      </div>
                      <h3 style={{ fontSize: '24px', marginTop: '20px' }}>{solution.title}</h3>
                      <p
                        className="solution-tagline"
                        style={{ color: solution.accent, fontWeight: 600, fontSize: '14px', marginTop: '8px' }}
                      >
                        {solution.tagline}
                      </p>
                      <p style={{ marginTop: '16px', lineHeight: 1.8 }}>{solution.description}</p>
                    </div>
                    <div className="solution-card-right">
                      <div className="solution-features">
                        {solution.features.map((feature) => (
                          <div key={feature} className="solution-feature">
                            <CheckCircle2 size={16} style={{ color: solution.accent, flexShrink: 0 }} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="solution-cta"
                        style={{ color: solution.accent, borderColor: `${solution.accent}38` }}
                      >
                        Discuss this solution <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner fade-up">
            <div className="tag" style={{ margin: '0 auto 24px' }}>Ready to Build?</div>
            <h2>Let's turn your vision<br /><span className="gradient-text">into reality</span></h2>
            <p>Every great product starts with a conversation. Tell us about your project and let's explore what's possible.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/projects" className="btn-ghost">Our Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
