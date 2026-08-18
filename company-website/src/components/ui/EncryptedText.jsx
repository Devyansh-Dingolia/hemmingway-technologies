import { useEffect, useRef } from 'react';

export default function EncryptedText({ text, className = '', speed = 30 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = text;
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iteration = 0;
    let rafId;
    let lastTime = 0;
    const len = text.length;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();

        const step = (timestamp) => {
          if (!lastTime) lastTime = timestamp;
          const elapsed = timestamp - lastTime;

          if (elapsed >= speed) {
            lastTime = timestamp;
            let result = '';
            const currentIter = Math.floor(iteration);

            for (let i = 0; i < len; i++) {
              const char = text[i];
              if (char === ' ') {
                result += ' ';
              } else if (i < currentIter) {
                result += char;
              } else {
                result += chars[Math.floor(Math.random() * chars.length)];
              }
            }

            el.textContent = result;
            iteration += 1.5;
          }

          if (iteration < len) {
            rafId = requestAnimationFrame(step);
          } else {
            el.textContent = text;
          }
        };

        rafId = requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [text, speed]);

  return <span ref={ref} className={className} style={{ display: 'inline-block', fontFamily: 'var(--mono)', letterSpacing: '0' }}>{text}</span>;
}
