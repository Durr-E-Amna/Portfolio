import { useRef } from 'react';

// Returns a ref + handlers that pull an element toward the cursor.
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * strength}px, ${relY * strength * 1.3}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  }

  return { ref, onMouseMove, onMouseLeave };
}
