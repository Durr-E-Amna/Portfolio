import { useEffect, useRef } from 'react';

// Three soft morphing blobs. Lives inside a section (position relative).
export default function BlobBackground() {
  const ref = useRef(null);

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (ref.current) {
        ref.current.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
      }
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 overflow-hidden transition-transform duration-500 ease-out"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full animate-blob1"
        style={{
          width: 480, height: 480, top: '-8%', left: '18%',
          background: 'radial-gradient(circle, #8FE3C0, transparent 70%)',
          filter: 'blur(70px)', mixBlendMode: 'screen', opacity: 0.5,
        }}
      />
      <div
        className="absolute rounded-full animate-blob2"
        style={{
          width: 520, height: 520, top: '18%', left: '52%',
          background: 'radial-gradient(circle, #F0A8C4, transparent 70%)',
          filter: 'blur(70px)', mixBlendMode: 'screen', opacity: 0.5,
        }}
      />
      <div
        className="absolute rounded-full animate-blob3"
        style={{
          width: 380, height: 380, top: '38%', left: '30%',
          background: 'radial-gradient(circle, #F3C9A0, transparent 70%)',
          filter: 'blur(70px)', mixBlendMode: 'screen', opacity: 0.35,
        }}
      />
    </div>
  );
}
