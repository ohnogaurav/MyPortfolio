"use client";
import { useState, useEffect, useRef } from "react";
import { personal, links, blog, projects, experience, skills, research, beme } from "../../data/portfolioData";;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Code", href: "#code" },
];

const dropdownLinks = [
  { label: "Research", href: "#research" },
  { label: "Blog", href: "#blog" },
  { label: "Life Beyond Code", href: "#life" },
  { label: "Non-Tech Skills", href: "#nontechskills" },
  { label: "BE-ME", href: "#beme" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "about", "projects", "experience", "skills", "code",
        "research", "blog", "life", "nontechskills", "beme", "contact",
      ];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-accent font-medium tracking-widest">
          {personal.name.split(" ")[0].toLowerCase()}.dev
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {(navLinks || []).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200 rounded ${
                isActive(l.href)
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200 rounded flex items-center gap-1 ${
                dropdownOpen ? "text-accent" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              More
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-surface border border-border rounded-lg py-1 shadow-xl">
                {(dropdownLinks || []).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-200 ${
                      isActive(l.href)
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-subtle"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className={`px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200 rounded ${
              isActive("#contact") ? "text-accent" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Contact
          </a>

          <a
            href={links.resume}
            className="ml-2 flex items-center gap-1.5 border border-accent text-accent font-mono text-xs px-3 py-1.5 rounded hover:bg-accent hover:text-black transition-colors duration-200"
          >
            Resume
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-1">
          {[...navLinks, ...dropdownLinks, { label: "Contact", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={links.resume}
            className="mt-2 btn-primary w-fit"
          >
            Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}
