import { motion } from 'framer-motion';

const cards = [
  {
    accent: 'pink',
    title: 'Who I am',
    body: 'A final-year CS student and full-stack web developer who also builds AI/ML systems — comfortable across the whole stack.',
  },
  {
    accent: 'mint',
    title: 'How I work',
    body: 'Ship working software, then refine how it looks and feels. Design sense is a tool I bring to web dev, not a separate job.',
  },
  {
    accent: 'peach',
    title: 'What I want',
    body: 'A team where I can own features end to end, ship real products, and keep growing fast as an engineer.',
  },
];

const accentMap = {
  mint: 'text-mint border-l-mint',
  pink: 'text-pink border-l-pink',
  peach: 'text-peach border-l-peach',
};

export default function About() {
  return (
    <section id="about" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading kicker="01 — about" title="Full-stack, plus AI" />

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-2xl md:text-[1.7rem] leading-snug text-ink"
        >
          I build <span className="text-pink">full-stack web applications</span> and{' '}
          <span className="text-mint">AI/ML systems</span> end to end — from the model and the API
          to the interface someone actually uses. A strong design sense keeps the front end clean;
          the engineering underneath keeps it solid.
        </motion.p>

        <div className="flex flex-col gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={`bg-surface border border-line border-l-2 rounded-lg p-5 ${accentMap[c.accent]}`}
            >
              <h3 className="font-mono text-sm mb-1.5">{c.title}</h3>
              <p className="text-[0.82rem] text-ink-dim leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-xs tracking-[0.18em] uppercase text-ink-dim mb-3">{kicker}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold">{title}</h2>
    </motion.div>
  );
}
