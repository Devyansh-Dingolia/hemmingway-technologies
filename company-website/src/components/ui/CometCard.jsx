import { useEffect, useRef } from 'react';

export default function CometCard({ children, className = '' }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    let rafId = null;

    const handleMove = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -8;
        const rotateY = ((x - cx) / cx) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;

        // Comet glow follow
        const glowX = Math.round((x / rect.width) * 100);
        const glowY = Math.round((y / rect.height) * 100);
        card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,103,241,0.15) 0%, var(--bg-card) 60%)`;
      });
    };

    const handleEnter = () => {
      card.style.willChange = 'transform';
    };

    const handleLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      card.style.willChange = 'auto';
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.background = 'var(--bg-card)';
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mousemove', handleMove, { passive: true });
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`comet-card ${className}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        transition: 'transform 0.15s ease-out, background 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
