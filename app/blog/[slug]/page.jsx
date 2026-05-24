import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPage({ params }) {
  const post = blogs.find((b) => b.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="section-pad">
          <div className="max-w-[700px] mx-auto">
            <Link href="/" className="btn-outline text-sm px-4 py-2 mb-12 inline-flex items-center gap-2 w-fit group">
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              Back to Portfolio
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm text-text-tertiary">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span className="font-mono text-sm text-text-tertiary">{post.readTime}</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </header>

            <div 
              className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-headings:text-text-primary prose-a:text-accent max-w-none text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
