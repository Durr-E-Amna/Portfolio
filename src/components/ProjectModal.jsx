import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

// Centered lightbox. Backdrop blurs + dims the page, but the
// fixed particle layer (z-0, outside this) keeps animating behind.
export default function ProjectModal({ project, lens, onClose }) {
  // close on Escape; lock body scroll while open
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  const isAi = lens === 'ai';
  const accentText = isAi ? 'text-mint' : 'text-pink';
  const chipBg = isAi ? 'bg-mint/10 text-mint' : 'bg-pink/10 text-pink';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* backdrop: light dim + soft blur, life still visible behind */}
          <div
            className="absolute inset-0 bg-base/40 backdrop-blur-[3px]"
            onClick={onClose}
          />

          {/* card */}
          <motion.div
            className="relative z-10 w-full max-w-lg bg-surface border border-line rounded-2xl p-8 shadow-2xl max-h-[88vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            {/* close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-line text-ink-dim hover:text-ink hover:border-ink-dim transition-colors"
            >
              ✕
            </button>

            {/* header */}
            <div className="flex items-center gap-2 mb-4 pr-8">
              <span className={`text-[0.7rem] tracking-wide px-3 py-1 rounded-full ${chipBg}`}>
                {project.tagline}
              </span>
              {project.status === 'progress' ? (
                <span className="flex items-center gap-1.5 text-[0.68rem] text-peach">
                  <span className="w-[7px] h-[7px] rounded-full bg-peach animate-pulseDot" />
                  in progress
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-[0.68rem] text-ink-dim">
                  <span className={`w-[7px] h-[7px] rounded-full ${isAi ? 'bg-mint' : 'bg-pink'}`} />
                  live
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">{project.title}</h3>

            <p className="text-sm text-ink-dim leading-relaxed mb-5">{project.description}</p>

            {/* milestones if present */}
            {project.milestones && (
              <div className="flex items-center mb-6 mt-2">
                {project.milestones.map((s, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 relative">
                    {i < project.milestones.length - 1 && (
                      <div
                        className="absolute top-[5px] left-1/2 w-full h-0.5"
                        style={{
                          background: s.active
                            ? 'linear-gradient(90deg, #F3C9A0, #38322E)'
                            : '#38322E',
                        }}
                      />
                    )}
                    <div
                      className={`w-[11px] h-[11px] rounded-full border-2 z-10 ${
                        s.active ? 'bg-peach border-peach animate-pulseDot' : 'bg-surface-2 border-line'
                      }`}
                    />
                    <div
                      className={`text-[0.6rem] mt-2 text-center leading-tight ${
                        s.active ? 'text-peach' : 'text-ink-dim'
                      }`}
                    >
                      {s.label}
                      <br />
                      {s.date}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* all tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.7rem] text-ink-dim bg-surface-2 border border-line rounded px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* links */}
            {(project.links?.demo || project.links?.code) && (
              <div className="flex items-center gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                      isAi ? 'bg-mint text-[#0D1F17]' : 'bg-pink text-[#3A0F1E]'
                    }`}
                  >
                    <Icon name="external" className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-line text-ink hover:border-ink-dim transition-colors"
                  >
                    <Icon name="github" className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
