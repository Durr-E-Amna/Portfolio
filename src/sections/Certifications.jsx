import { motion } from 'framer-motion';
import { certifications } from '../data/certs';
import { SectionHeading } from './About';
import Icon from '../components/Icon';

export default function Certifications() {
  return (
    <section id="certs" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading kicker="04 — credentials" title="Certifications" />

      <div className="grid sm:grid-cols-3 gap-4 mt-12">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="bg-surface border border-line rounded-xl p-6 hover:border-mint transition-colors"
          >
            <div className="flex items-center gap-2 text-mint mb-4">
              <Icon name="award" className="w-5 h-5" />
              <span className="font-mono text-[0.66rem] text-ink-dim tracking-wide">{c.date}</span>
            </div>
            <h3 className="font-serif text-base font-semibold leading-snug mb-1 text-ink">{c.title}</h3>
            <p className="text-xs text-ink-dim font-mono">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
