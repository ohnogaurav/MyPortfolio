"use client";
import { useState } from "react";
import Image from "next/image";
import { personal, links, projects } from "../../data/portfolioData";;

const FILTERS = ["All", "ML", "Backend", "Mobile", "Security"];

function ProjectCard({ project }) {
  return (
    <div className="card group flex flex-col gap-4 hover:bg-[#131313]">
      {/* Image area */}
      <div className="w-full h-36 rounded-lg bg-subtle flex items-center justify-center overflow-hidden relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30">
            <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-mono text-xs text-muted">image</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            {project.stats && (
              <span className="font-mono text-xs text-accent">{project.stats}</span>
            )}
          </div>
          <span className="tag flex-shrink-0">{project.category}</span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {(project.tech || []).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-1">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-3 py-1.5"
          >
            Live ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-3 py-1.5"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-title">Projects</h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {(FILTERS || []).map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-200 ${
                  active === f
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-text-secondary hover:border-muted hover:text-text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(filtered || []).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-tertiary font-mono text-sm">
            No projects in this category.
          </div>
        )}
      </div>
    </section>
  );
}
