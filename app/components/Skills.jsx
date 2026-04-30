import { skills } from "../../data/portfolioData";;

const CATEGORIES = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "devops", label: "DevOps / Cloud" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
];

function SkillGroup({ label, items }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {(items || []).map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-subtle border border-border text-text-secondary font-mono text-xs rounded hover:border-muted hover:text-text-primary transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="section-label">Stack</p>
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {(CATEGORIES || []).map(({ key, label }) => (
              <SkillGroup key={key} label={label} items={skills[key]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
