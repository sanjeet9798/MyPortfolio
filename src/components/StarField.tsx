import React , { useEffect, useRef } from 'react';

export const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    const interval = setInterval(() => {
      createStar();
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1000px' }}
    />
  );
};