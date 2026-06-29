import { useRef } from 'react';

// Returns a ref + handlers that tilt an element toward the cursor in 3D.
export function useTilt(strength = 6) {
  const ref = useRef(null);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform =
      `perspective(800px) rotateX(${relY * -strength}deg) ` +
      `rotateY(${relX * strength}deg) translateY(-4px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  }

  return { ref, onMouseMove, onMouseLeave };
}
