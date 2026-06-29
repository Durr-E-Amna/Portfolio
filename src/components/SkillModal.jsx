import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Icon from './Icon';

// Click-to-open modal for a skill category. Same light-blur
// backdrop pattern as ProjectModal — background stays visible.
export default function SkillModal({ group, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (group) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [group, onClose]);

  if (!group) return null;
  const isMint = group.lens === 'mint';

  return (
    <AnimatePresence>
      {group && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-base/40 backdrop-blur-[3px]" onClick={onClose} />

          <motion.div
            className="relative z-10 w-full max-w-md bg-surface border border-line rounded-2xl p-7"
            initial={{ scale: 0.9, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-line text-ink-dim hover:text-ink transition-colors"
            >
              ✕
            </button>

            <div className={`mb-4 ${isMint ? 'text-mint' : 'text-pink'}`}>
              <Icon name={group.icon} className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-semibold text-ink mb-5">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-[0.78rem] text-ink-dim bg-surface-2 border border-line rounded-lg px-3 py-1.5 ${
                    isMint ? 'hover:border-mint hover:text-mint' : 'hover:border-pink hover:text-pink'
                  } transition-colors`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
