import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './index.css';
import './styles/nav-hero.css';
import './styles/sections.css';
import './styles/responsive.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Code-split other routes
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/docs/legal/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/docs/legal/Terms'));
const CookiePolicy = lazy(() => import('./pages/docs/legal/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/docs/legal/Disclaimer'));
const CorporateInfo = lazy(() => import('./pages/CorporateInfo'));
const Founders = lazy(() => import('./pages/Founders'));
const NewsletterAnnouncement = lazy(() => import('./components/ui/NewsletterAnnouncement'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(`${id}-wrapper`) || document.getElementById(id);
        if (el) {
          const navHeight = 90;
          const rect = el.getBoundingClientRect();
          const targetTop = rect.top + window.scrollY - navHeight;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
          return;
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return <div style={{ minHeight: '80vh', background: 'var(--bg)' }} aria-hidden="true" />;
}

function DeferredNewsletter() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShow(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <NewsletterAnnouncement />
    </Suspense>
  );
}

function AppContent({ theme, toggleTheme }) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/team" element={<Navigate to="/founders" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/docs/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/docs/legal/terms" element={<Terms />} />
            <Route path="/docs/legal/cookie-policy" element={<CookiePolicy />} />
            <Route path="/docs/legal/disclaimer" element={<Disclaimer />} />
            <Route path="/corporate-info" element={<CorporateInfo />} />
          </Routes>
        </Suspense>
      </main>
      <DeferredNewsletter />
      <Footer />
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <BrowserRouter>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}
