import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { SectionHeading } from './About';
import Icon from '../components/Icon';

// Every card is one fixed size — tall enough to hold the LARGEST
// category (Web & Backend, 10 items) with everything visible. No
// truncation, no "+N", no modal. Cards overlap heavily in the fan;
// hovering pulls a card up above its neighbours so its full content
// (already rendered) is unobstructed.
const ANGLES = [-16, -11, -5, 0, 5, 11, 16];
const OFFSETS = [34, 22, 10, 2, 10, 22, 34];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-24 overflow-visible">
      <SectionHeading kicker="02 — skills" title="The toolkit" />

      <div className="skill-fan-wrap mt-20">
        {skillGroups.map((g, i) => {
          const isMint = g.lens === 'mint';
          const angle = ANGLES[i % ANGLES.length];
          const offset = OFFSETS[i % OFFSETS.length];

          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`skill-card ${isMint ? '' : 'lens-pink'}`}
              style={{ '--r': `${angle}deg`, '--y': `${offset}px`, '--z': i + 1 }}
            >
              <div className={`mb-4 ${isMint ? 'text-mint' : 'text-pink'}`}>
                <Icon name={g.icon} className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-lg font-semibold leading-snug text-ink mb-3">
                {g.title}
              </h3>

              {/* every skill, always rendered, nothing hidden */}
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={`text-[0.6rem] text-ink-dim bg-surface-2 border border-line rounded px-[7px] py-[2px] whitespace-nowrap transition-colors ${
                      isMint ? 'hover:border-mint hover:text-mint' : 'hover:border-pink hover:text-pink'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
