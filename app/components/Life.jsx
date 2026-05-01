"use client";
import { useState } from "react";
import Image from "next/image";
import { lifeGallery } from "../../data/portfolioData";

export default function Life() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const tags = ["All", ...new Set((lifeGallery || []).map((item) => item.tag))];

  const filteredGallery =
    activeFilter === "All"
      ? lifeGallery
      : (lifeGallery || []).filter((item) => item.tag === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  const selectedItem = selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  return (
    <section id="life" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">Outside Work</p>
            <h2 className="section-title">Life Beyond Code</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-200 ${
                  activeFilter === tag
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-text-secondary hover:border-muted hover:text-text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer bg-surface border border-border rounded-xl hover:border-muted transition-colors duration-300 aspect-[4/3] overflow-hidden relative flex flex-col"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-text-primary text-sm font-medium">{item.caption}</p>
                <p className="font-mono text-xs text-text-tertiary mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-16 text-text-tertiary font-mono text-sm">
            No images in this category.
          </div>
        )}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full max-w-5xl flex flex-col items-center">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-text-secondary hover:text-text-primary transition-colors text-sm font-mono"
            >
              Close
            </button>

            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:-mx-12 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto text-text-secondary hover:text-text-primary border border-border rounded px-4 py-2 text-xs font-mono transition-colors bg-surface"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto text-text-secondary hover:text-text-primary border border-border rounded px-4 py-2 text-xs font-mono transition-colors bg-surface"
              >
                Next
              </button>
            </div>

            <div className="relative w-full h-[60vh] sm:h-[75vh] mb-4">
              <Image
                src={selectedItem.image}
                alt={selectedItem.caption}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center" onClick={(e) => e.stopPropagation()}>
              <p className="text-text-primary text-base sm:text-lg font-medium">{selectedItem.caption}</p>
              <p className="font-mono text-xs text-text-tertiary mt-2">{selectedItem.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
