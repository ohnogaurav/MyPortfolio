"use client";
import { useState, useEffect } from "react";

function StatBox({ label, value, loading }) {
  return (
    <div className="card text-center">
      {loading ? (
        <div className="h-8 w-16 bg-subtle rounded animate-pulse mx-auto mb-2" />
      ) : (
        <p className="font-display text-3xl font-bold text-accent">{value}</p>
      )}
      <p className="font-mono text-xs text-text-tertiary mt-1">{label}</p>
    </div>
  );
}

function RepoCard({ repo }) {
  const langColors = {
    Python: "#3572A5",
    Go: "#00ADD8",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Java: "#ED8B00",
    Rust: "#DEA584",
    default: "#888888",
  };

  const color = langColors[repo.language] || langColors.default;

  return (
    <a
      href={repo.link}
      className="card group flex flex-col gap-3 hover:border-muted transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-mono text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
          {repo.name}
        </h4>
        <svg className="w-4 h-4 text-text-tertiary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-text-tertiary text-xs leading-relaxed flex-1">{repo.description}</p>
      <div className="flex items-center gap-4 font-mono text-xs text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
          {repo.language}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
          </svg>
          {repo.stars}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {repo.forks}
        </span>
      </div>
    </a>
  );
}

export default function Code() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState([]);
  const [contribLoading, setContribLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    fetch("/api/github/contributions")
      .then((r) => r.json())
      .then((data) => {
        setContributions(data);
        setContribLoading(false);
      })
      .catch(() => setContribLoading(false));
  }, []);

  return (
    <section id="code" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label">Open Source</p>
          <h2 className="section-title">Code & GitHub</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <StatBox label="Public Repos" value={data?.repos} loading={loading} />
          <StatBox label="Total Stars" value={data?.stars} loading={loading} />
          <StatBox label="Followers" value={data?.followers} loading={loading} />
        </div>

        {/* Contribution graph */}
        <div className="card mb-10 overflow-x-auto overflow-y-hidden">
          <p className="font-mono text-xs text-text-tertiary mb-4">Contribution Activity</p>
          <img
            src="https://ghchart.rshah.org/ohnogaurav"
            alt="GitHub contribution graph"
            className="w-full"
          />
        </div>

        {/* Featured repos */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-5">
            Featured Repositories
          </p>
          {loading ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card h-36 animate-pulse bg-subtle" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-4">
              {(data?.featuredRepos || []).map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          )}
        </div>

        {/* Open Source Contributions */}
        <div className="mt-16">
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-5">
            Open Source Contributions
          </p>
          
          {contribLoading ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card h-32 animate-pulse bg-subtle" />
              ))}
            </div>
          ) : contributions.length === 0 ? (
            <div className="card text-center py-10">
              <p className="font-mono text-sm text-text-tertiary">
                No open source contributions yet — coming soon
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-4">
              {contributions.map((contrib, i) => (
                <a
                  key={i}
                  href={contrib.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex flex-col gap-3 hover:border-muted transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-mono text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                      {contrib.name}
                    </h4>
                    <svg className="w-4 h-4 text-text-tertiary flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-text-tertiary text-xs leading-relaxed flex-1">
                    {contrib.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-block px-2 py-1 rounded text-[10px] font-mono tracking-wider bg-accent/10 text-green-400 border border-green-400/20">
                      {contrib.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
