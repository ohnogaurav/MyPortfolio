import { personal, links, beme } from "../../data/portfolioData";;

export default function BeMe() {
  return (
    <section id="beme" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="section-label">Identity</p>
            <h2 className="section-title">BE-ME</h2>
          </div>

          <div className="space-y-4">
            {(beme || []).map((statement, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-mono text-xs text-accent mt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text-secondary leading-relaxed border-b border-border pb-4 flex-1">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
