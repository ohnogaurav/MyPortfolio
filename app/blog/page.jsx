import Link from "next/link";
import { blogs } from "../../data/blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogList() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <section className="section-pad">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary transition-colors mb-6 group">
                <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                Back to Portfolio
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                Blog
              </h1>
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
                      {post.tags.map((t) => (
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
      </main>
      <Footer />
    </>
  );
}
