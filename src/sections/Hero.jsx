import { motion } from 'framer-motion';
import BlobBackground from '../components/BlobBackground';
import { useMagnetic } from '../hooks/useMagnetic';
import Icon from '../components/Icon';

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.6 },
  }),
};

export default function Hero() {
  const mag = useMagnetic(0.3);

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 z-10">
      <BlobBackground />

      <motion.p custom={0} variants={rise} initial="hidden" animate="show"
        className="relative z-10 text-xs tracking-[0.22em] uppercase text-ink-dim mb-6">
        welcome <span className="text-pink">·</span> karachi, pakistan
      </motion.p>

      <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
        className="relative z-10 font-serif font-semibold leading-[1.02] mb-6"
        style={{ fontSize: 'clamp(3.2rem, 8vw, 5.6rem)' }}>
        Durr E Amna
      </motion.h1>

      <motion.p custom={2} variants={rise} initial="hidden" animate="show"
        className="relative z-10 flex items-center gap-3 flex-wrap justify-center text-sm md:text-base mb-10">
        <span className="text-pink">Full-Stack Web Developer</span>
        <span className="text-ink-dim">/</span>
        <span className="text-mint">AI/ML Engineer</span>
      </motion.p>

      <motion.div custom={3} variants={rise} initial="hidden" animate="show" className="relative z-10">
        <a
          ref={mag.ref}
          onMouseMove={mag.onMouseMove}
          onMouseLeave={mag.onMouseLeave}
          href="#work"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-line bg-surface text-sm tracking-wide hover:border-mint hover:bg-surface-2 transition-[border-color,background] duration-200 will-change-transform"
        >
          View Work <Icon name="arrowDown" className="w-4 h-4" />
        </a>
      </motion.div>

      <motion.div custom={4} variants={rise} initial="hidden" animate="show"
        className="relative z-10 flex gap-4 mt-10">
        <SocialIcon href="https://github.com/Durr-E-Amna" name="github" />
        <SocialIcon href="https://www.linkedin.com/in/durr-e-amna/" name="linkedin" />
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-dim hover:text-ink hover:border-mint hover:-translate-y-1 transition-all duration-200"
    >
      <Icon name={name} className="w-[18px] h-[18px]" />
    </a>
  );
}
