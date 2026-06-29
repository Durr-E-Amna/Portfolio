import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';
import Icon from '../components/Icon';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
  }

  return (
    <section id="contact" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading kicker="06 — contact" title="Let's build something" />

      <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
        {/* left: info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base text-ink-dim leading-relaxed mb-8">
            Open to internships and junior roles in full-stack and AI/ML engineering. If you've
            got something interesting — or just want to talk shop — reach out.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-ink-dim">
              <Icon name="mail" className="w-[18px] h-[18px] text-mint" />
              durreamna14@gmail.com
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-dim">
              <Icon name="mapPin" className="w-[18px] h-[18px] text-pink" />
              Karachi, Pakistan
            </div>
          </div>
          <div className="flex gap-3">
            <SocialIcon href="https://github.com/Durr-E-Amna" name="github" />
            <SocialIcon href="https://www.linkedin.com/in/durr-e-amna/" name="linkedin" />
          </div>
        </motion.div>

        {/* right: form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <input type="text" placeholder="Your name" required
            className="bg-surface border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-dim/60 outline-none focus:border-mint transition-colors" />
          <input type="email" placeholder="Your email" required
            className="bg-surface border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-dim/60 outline-none focus:border-mint transition-colors" />
          <textarea placeholder="Your message" rows={5} required
            className="bg-surface border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-dim/60 outline-none focus:border-mint transition-colors resize-y" />
          <button type="submit"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 bg-[length:200%_100%] bg-left hover:bg-right ${
              sent
                ? 'bg-mint text-[#0D1F17]'
                : 'bg-gradient-to-r from-mint via-mint to-pink text-[#3A0F1E] hover:-translate-y-0.5'
            }`}
            style={{ transitionProperty: 'background-position, transform', transitionDuration: '600ms' }}>
            <Icon name="send" className="w-4 h-4" />
            {sent ? 'Sent!' : 'Send message'}
          </button>
        </motion.form>
      </div>

      <footer className="mt-24 pt-8 border-t border-line text-center text-xs text-ink-dim">
        © 2026 Durr E Amna · Built with React, Vite, Tailwind &amp; Framer Motion
      </footer>
    </section>
  );
}

function SocialIcon({ href, name }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-dim hover:text-ink hover:border-mint hover:-translate-y-1 transition-all duration-200">
      <Icon name={name} className="w-[18px] h-[18px]" />
    </a>
  );
}
