import { lifeGallery } from "../../data/portfolioData";;

export default function Life() {
  return (
    <section id="life" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label">Outside Work</p>
          <h2 className="section-title">Life Beyond Code</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {(lifeGallery || []).map((item) => (
            <div
              key={item.id}
              className="card group aspect-[4/3] flex flex-col justify-between hover:border-muted transition-colors"
            >
              {/* Emoji placeholder for image */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-5xl">{item.emoji}</span>
              </div>
              <div className="mt-2">
                <p className="text-text-secondary text-sm leading-snug">{item.caption}</p>
                <p className="font-mono text-xs text-text-tertiary mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-text-tertiary mt-6 text-center">
          Replace emoji placeholders with actual images in /public/gallery/
        </p>
      </div>
    </section>
  );
}
