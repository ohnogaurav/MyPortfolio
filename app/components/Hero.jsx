"use client";
import { useState, useEffect } from "react";
import { personal, links, projects } from "../../data/portfolioData";;

function SpotifyNowPlaying() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotify")
      .then((r) => r.json())
      .then((data) => {
        setTrack(data);
        setLoading(false);
      })
      .catch(() => {
        setTrack({ isPlaying: false });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-text-tertiary font-mono text-xs">
        <span className="w-3 h-3 rounded-full bg-subtle animate-pulse" />
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      {track?.isPlaying ? (
        <>
          <span className="flex gap-0.5 items-end h-3">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-0.5 bg-accent rounded-sm"
                style={{
                  height: `${40 + i * 20}%`,
                  animation: `blink ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </span>
          <span className="text-text-secondary">
            <span className="text-accent">{track.title}</span>
            {" — "}
            {track.artist}
          </span>
        </>
      ) : (
        <>
          <span className="w-3 h-3 rounded-full border border-muted" />
          <span className="text-text-tertiary">Not playing anything</span>
        </>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-pad pt-32">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 w-full max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 fade-up">
            <span className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              {personal.available ? "Available for opportunities" : "Currently unavailable"}
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6 fade-up anim-delay-100">
            {personal.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "block text-text-secondary" : "block"}>
                {word}
              </span>
            ))}
          </h1>

          {/* Role */}
          <p className="font-mono text-text-secondary text-sm tracking-wider mb-4 fade-up anim-delay-200">
            {personal.role} · {personal.location}
          </p>

          {/* Tagline */}
          <p className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-10 fade-up anim-delay-300">
            {personal.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-12 fade-up anim-delay-400">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href={links.resume} className="btn-outline">
              Resume ↓
            </a>
            <a href="#contact" className="btn-outline">
              Contact
            </a>
          </div>

          {/* Status bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 fade-up anim-delay-500">
            {/* Currently building */}
            <div className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              <div>
                <span className="font-mono text-xs text-text-tertiary block">building</span>
                <span className="font-mono text-xs text-text-secondary">{personal.currentlyBuilding}</span>
              </div>
            </div>

            <div className="w-px h-6 bg-border hidden sm:block" />

            {/* Spotify */}
            <div>
              <span className="font-mono text-xs text-text-tertiary block mb-1">listening to</span>
              <SpotifyNowPlaying />
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-shrink-0 fade-up w-full md:w-auto flex justify-center md:justify-end">
          <img 
            src="/pic.jpeg" 
            alt="Profile" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border border-border bg-subtle"
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up anim-delay-500">
        <span className="font-mono text-xs text-text-tertiary">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
