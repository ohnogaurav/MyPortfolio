import { nonTechSkills } from "../../data/portfolioData";;

export default function NonTechSkills() {
  return (
    <section id="nontechskills" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="section-label">Beyond Code</p>
            <h2 className="section-title">Non-Tech Skills</h2>
          </div>

          <div className="flex flex-wrap gap-3 content-start">
            {(nonTechSkills || []).map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-border text-text-secondary font-sans text-sm rounded-full hover:border-muted hover:text-text-primary transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
