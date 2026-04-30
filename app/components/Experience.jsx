import { experience } from "../../data/portfolioData";;

function ExperienceCard({ item, index }) {
  return (
    <div className="relative pl-8 border-l border-border pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-accent bg-bg" />

      {/* Index label */}
      <span className="font-mono text-xs text-text-tertiary">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="mt-2">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {item.role}
            </h3>
            <p className="font-mono text-sm text-accent">{item.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <span className="font-mono text-xs text-text-tertiary">{item.duration}</span>
            <span className="tag w-fit">{item.type}</span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2 mb-5">
          {(item.points || []).map((point, i) => (
            <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {(item.tech || []).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          {/* Label */}
          <div>
            <p className="section-label">Career</p>
            <h2 className="section-title">Experience</h2>
          </div>

          {/* Timeline */}
          <div className="mt-1">
            {(experience || []).map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
