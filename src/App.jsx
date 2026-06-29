import Navbar from './components/Navbar';
import ParticleField from './components/ParticleField';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { LensProvider } from './hooks/useLens';

export default function App() {
  return (
    <LensProvider>
      {/* page-wide ambient layers */}
      <div className="grain" aria-hidden="true" />
      <ParticleField />

      <Navbar />

      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Work />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </LensProvider>
  );
}
