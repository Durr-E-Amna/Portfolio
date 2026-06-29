import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { stats } from '../data/certs';

export default function Stats() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 -mt-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-surface px-6 py-7 text-center"
          >
            <div className="font-serif text-3xl md:text-4xl font-semibold text-gradient">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
            </div>
            <div className="text-[0.72rem] tracking-wide text-ink-dim mt-1.5 uppercase">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
