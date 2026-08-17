import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import './styles/nav-hero.css';
import './styles/sections.css';
import './styles/pages.css';
import './styles/responsive.css';

import Loader from './components/ui/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Solutions from './pages/Solutions';
import { Navigate } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/docs/legal/PrivacyPolicy';
import Terms from './pages/docs/legal/Terms';
import CookiePolicy from './pages/docs/legal/CookiePolicy';
import Disclaimer from './pages/docs/legal/Disclaimer';
import CorporateInfo from './pages/CorporateInfo';
import Founders from './pages/Founders';


function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function AppContent({ theme, toggleTheme }) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(() => {
    return sessionStorage.getItem('app_initialized') === 'true';
  });
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const handleLoaderComplete = () => {
    setLoaded(true);
    sessionStorage.setItem('app_initialized', 'true');
  };

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
      {!loaded && <Loader onComplete={handleLoaderComplete} />}
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}
