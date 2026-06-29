import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'certs', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/90 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#home" className="font-serif font-semibold text-2xl">
          D<span className="text-mint">·</span>A
        </a>

        <ul className="hidden md:flex gap-9 text-sm tracking-wide">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-ink-dim hover:text-ink transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-surface border-b border-line px-6 py-3 flex flex-col">
          {LINKS.map(({ id, label }) => (
            <li key={id} className="border-b border-line last:border-0">
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-ink-dim hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
