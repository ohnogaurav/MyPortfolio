import Link from "next/link";
import { blogs } from "../../data/blogs";

export default function Blog() {
  return (
    <section id="blog" className="section-pad border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="section-title">Blog</h2>
          </div>
          <Link href="/blog" className="btn-outline text-sm px-4 py-2">
            View All →
          </Link>
        </div>

        <div className="space-y-4">
          {blogs.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex items-start gap-6 card hover:border-muted hover:bg-[#131313] transition-all duration-200"
            >
              <span className="font-mono text-xs text-text-tertiary w-5 mt-1 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-xs text-text-tertiary">{post.readTime}</span>
                    <span className="font-mono text-xs text-text-tertiary">{post.date}</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{post.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(post.tags || []).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <svg className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
