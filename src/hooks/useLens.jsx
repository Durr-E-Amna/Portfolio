import { createContext, useContext, useState } from 'react';

// Shares the active work lens ('ai' | 'design') across the app
// so the particle field can recolor when the toggle changes.
const LensContext = createContext({ lens: 'ai', setLens: () => {} });

export function LensProvider({ children }) {
  const [lens, setLens] = useState('ai');
  return (
    <LensContext.Provider value={{ lens, setLens }}>
      {children}
    </LensContext.Provider>
  );
}

export function useLens() {
  return useContext(LensContext);
}
