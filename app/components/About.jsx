import { personal, links } from "../../data/portfolioData";;

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          {/* Label column */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">Who I am</h2>
          </div>

          {/* Content column */}
          <div className="space-y-8">
            <p className="text-text-secondary text-lg leading-relaxed">
              {personal.bio}
            </p>

            {/* Focus areas */}
            <div>
              <p className="font-mono text-xs text-text-tertiary tracking-widest uppercase mb-4">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {(personal.focusAreas || []).map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 border border-border text-text-secondary font-mono text-xs rounded hover:border-muted transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Career direction */}
            <div className="border-l-2 border-accent pl-5">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">Direction</p>
              <p className="text-text-secondary leading-relaxed">{personal.careerDirection}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
