import { motion } from 'framer-motion';
import { experience } from '../data/certs';
import { SectionHeading } from './About';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <SectionHeading kicker="05 — experience" title="Where I've shown up" />

      <div className="mt-12 relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="flex flex-col gap-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative pl-8"
            >
              {/* node */}
              <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-surface border-2 border-mint" />

              <h3 className="font-serif text-lg font-semibold mb-1">{e.role}</h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-3">{e.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.66rem] text-ink-dim bg-surface-2 border border-line rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
