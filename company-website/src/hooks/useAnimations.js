import { useEffect } from 'react';

// useScrollReveal — triggers .visible class when elements enter viewport.
// Pass a `deps` array when the page conditionally renders different
// .fade-up/.fade-in elements after mount (e.g. filtering a list) — otherwise
// elements added after the initial mount are never observed and stay hidden.
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.fade-up, .fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// useParallax — simple parallax on scroll
export function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const handleScroll = () => {
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
}

// useGSAPReveal — stagger animation using GSAP triggered only when in viewport
export function useGSAPReveal(containerRef, dependencies = []) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const items = el.querySelectorAll('[data-reveal]');
      items.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          observer.disconnect();

          const items = el.querySelectorAll('[data-reveal]');
          if (!items.length) return;

          try {
            const { gsap: gsapModule } = await import('gsap');
            const gsap = gsapModule.default || gsapModule;

            if (!containerRef.current) return;

            gsap.fromTo(
              items,
              { y: 35, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              }
            );
          } catch {
            // Fallback if dynamic import fails
            items.forEach(item => {
              item.style.opacity = '1';
              item.style.transform = 'none';
            });
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...dependencies]);
}
