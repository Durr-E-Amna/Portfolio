import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

// Compact card: short preview only, "show more" opens the modal.
export default function ProjectCard({ project, lens, onOpen }) {
  const tilt = useTilt(5);
  const accent = lens === 'ai' ? 'mint' : 'pink';

  const chipBg = lens === 'ai' ? 'bg-mint/10 text-mint' : 'bg-pink/10 text-pink';
  const hoverBorder =
    lens === 'ai'
      ? 'hover:border-mint hover:shadow-[0_18px_40px_-20px_rgba(143,227,192,0.35)]'
      : 'hover:border-pink hover:shadow-[0_18px_40px_-20px_rgba(240,168,196,0.35)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        onClick={() => onOpen(project)}
        className={`group h-[300px] flex flex-col bg-surface border border-line rounded-xl p-6 cursor-pointer transition-[border-color,box-shadow,transform] duration-200 ${hoverBorder}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* status row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[0.66rem] tracking-wide px-3 py-1 rounded-full whitespace-nowrap truncate ${chipBg}`}>
            {project.tagline}
          </span>
          <StatusPill status={project.status} accent={accent} />
        </div>

        <h3 className="font-serif text-lg font-semibold mb-2 text-ink leading-tight">
          {project.title}
        </h3>

        {/* SHORT preview — clamped to 3 lines, never the full thing */}
        <p className="text-[0.82rem] text-ink-dim leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* tags + show more */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[0.64rem] text-ink-dim bg-surface-2 border border-line rounded px-2 py-0.5 whitespace-nowrap"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[0.64rem] text-ink-dim px-1">+{project.tags.length - 3}</span>
            )}
          </div>
          <span
            className={`text-xs font-mono inline-flex items-center gap-1.5 ${
              lens === 'ai' ? 'text-mint' : 'text-pink'
            }`}
          >
            Show more <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function StatusPill({ status, accent }) {
  if (status === 'progress') {
    return (
      <span className="flex items-center gap-1.5 text-[0.64rem] text-peach whitespace-nowrap shrink-0">
        <span className="w-[7px] h-[7px] rounded-full bg-peach animate-pulseDot" />
        in progress
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-[0.64rem] text-ink-dim whitespace-nowrap shrink-0">
      <span className={`w-[7px] h-[7px] rounded-full ${accent === 'mint' ? 'bg-mint' : 'bg-pink'}`} />
      live
    </span>
  );
}
