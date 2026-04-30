import { research } from "../../data/portfolioData";;

export default function Research() {
  return (
    <section id="research" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="section-label">Academic</p>
            <h2 className="section-title">Research</h2>
          </div>

          <div className="space-y-5">
            {(research || []).map((item) => (
              <div key={item.id} className="card group hover:border-muted">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-text-tertiary flex-shrink-0">{item.year}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {(item.tags || []).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a href={item.link} className="btn-outline text-xs px-3 py-1.5">
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
