import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeMe from "../components/BeMe";

export default function BeMePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>
        <BeMe />
      </main>
      <Footer />
    </>
  );
}
