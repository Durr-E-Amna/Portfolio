import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aiProjects, fullstackProjects } from '../data/projects';
import { SectionHeading } from './About';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Icon from '../components/Icon';
import { useLens } from '../hooks/useLens';

export default function Work() {
  const { lens, setLens } = useLens();
  const projects = lens === 'ai' ? aiProjects : fullstackProjects;
  const [active, setActive] = useState(null); // the opened project

  return (
    <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center flex flex-col items-center">
        <SectionHeading kicker="03 — work" title="Selected work" />
        <p className="text-sm text-ink-dim mt-3">tap a card to dive in · use the arrows to browse faster</p>
      </div>

      <LensToggle lens={lens} setLens={setLens} />

      <Carousel lens={lens} projects={projects} onOpen={setActive} />

      <ProjectModal project={active} lens={lens} onClose={() => setActive(null)} />
    </section>
  );
}

// ============================================================
// Auto-sliding carousel. Drifts left continuously, pauses on
// hover or while a manual nudge (arrow click) is in progress.
// Cards are duplicated so the loop is seamless. Left/right arrows
// jump by one card width instantly — no waiting on the drift.
// ============================================================
function Carousel({ lens, projects, onOpen }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const offset = useRef(0);
  const CARD_WIDTH = 340 + 20; // card + gap, matches the classes below

  const loop = [...projects, ...projects];

  useEffect(() => {
    let raf;
    const SPEED = 0.4;

    function step() {
      const track = trackRef.current;
      if (track && !paused) {
        offset.current -= SPEED;
        const half = track.scrollWidth / 2;
        // wrap both directions so manual back-nudges past 0 loop cleanly
        if (Math.abs(offset.current) >= half) offset.current = 0;
        if (offset.current > 0) offset.current -= half;
        track.style.transform = `translateX(${offset.current}px)`;
      }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, lens]);

  useEffect(() => {
    offset.current = 0;
    if (trackRef.current) trackRef.current.style.transform = 'translateX(0)';
  }, [lens]);

  // jump by ~2 cards per click, with a smooth eased transition,
  // and pause the auto-drift briefly so the jump doesn't get
  // immediately overridden by the next animation frame
  function nudge(direction) {
    const track = trackRef.current;
    if (!track) return;

    setPaused(true);
    track.style.transition = 'transform 0.45s cubic-bezier(.22,.9,.32,1)';
    offset.current += direction * CARD_WIDTH * 2;

    const half = track.scrollWidth / 2;
    if (offset.current <= -half) offset.current += half;
    if (offset.current > 0) offset.current -= half;

    track.style.transform = `translateX(${offset.current}px)`;

    setTimeout(() => {
      if (track) track.style.transition = '';
      setPaused(false);
    }, 480);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="overflow-hidden mt-4
                   [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
      >
        <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
          {loop.map((p, i) => (
            <div key={`${p.title}-${i}`} className="w-[300px] sm:w-[340px] shrink-0">
              <ProjectCard project={p} lens={lens} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>

      {/* nav arrows */}
      <NavArrow direction="left" lens={lens} onClick={() => nudge(1)} />
      <NavArrow direction="right" lens={lens} onClick={() => nudge(-1)} />
    </div>
  );
}

function NavArrow({ direction, lens, onClick }) {
  const isLeft = direction === 'left';
  const accent = lens === 'ai' ? 'hover:border-mint hover:text-mint' : 'hover:border-pink hover:text-pink';

  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? 'Previous projects' : 'Next projects'}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${
        isLeft ? 'left-0 sm:-left-4' : 'right-0 sm:-right-4'
      } z-20 w-10 h-10 items-center justify-center rounded-full bg-surface border border-line text-ink-dim transition-colors ${accent}`}
    >
      <Icon name={isLeft ? 'arrowLeft' : 'arrowRight'} className="w-5 h-5" />
    </button>
  );
}

function LensToggle({ lens, setLens }) {
  const aiRef = useRef(null);
  const fsRef = useRef(null);
  const [pill, setPill] = useState({ left: 4, width: 0 });

  useLayoutEffect(() => {
    const target = lens === 'ai' ? aiRef.current : fsRef.current;
    if (target) setPill({ left: target.offsetLeft, width: target.offsetWidth });
  }, [lens]);

  return (
    <div className="flex justify-center my-12">
      <div className="relative flex border border-line rounded-full bg-surface p-1">
        <motion.div
          className="absolute top-1 bottom-1 rounded-full"
          animate={{ left: pill.left, width: pill.width }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          style={{ background: lens === 'ai' ? '#8FE3C0' : '#F0A8C4' }}
        />
        <button
          ref={aiRef}
          onClick={() => setLens('ai')}
          className={`relative z-10 px-7 py-2.5 text-sm rounded-full transition-colors ${
            lens === 'ai' ? 'text-[#0D1F17]' : 'text-ink-dim'
          }`}
        >
          AI / ML
        </button>
        <button
          ref={fsRef}
          onClick={() => setLens('design')}
          className={`relative z-10 px-7 py-2.5 text-sm rounded-full transition-colors ${
            lens === 'design' ? 'text-[#3A0F1E]' : 'text-ink-dim'
          }`}
        >
          Full-Stack
        </button>
      </div>
    </div>
  );
}
