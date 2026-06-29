import { useEffect, useRef, useMemo } from 'react';
import { useLens } from '../hooks/useLens';

// Full-page floating dust. Higher count, and every dot tweens
// toward the active lens color (mint = ai, pink = design).
const COUNT = 48;

const LENS_COLOR = {
  ai: '#8FE3C0',
  design: '#F0A8C4',
};

export default function ParticleField() {
  const layerRef = useRef(null);
  const { lens } = useLens();
  const color = LENS_COLOR[lens];

  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        size: 2 + Math.random() * 6,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 13 + Math.random() * 16,
        delay: Math.random() * -25,
      })),
    []
  );

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
      }
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={layerRef}
      className="fixed inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-floatUp"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}vw`,
            top: `${p.top}vh`,
            background: color,
            filter: 'blur(1px)',
            opacity: 0,
            transition: 'background 0.6s ease',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
