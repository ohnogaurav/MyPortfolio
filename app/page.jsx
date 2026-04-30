import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Code from "./components/Code";
import Research from "./components/Research";
import Blog from "./components/Blog";
import Life from "./components/Life";
import NonTechSkills from "./components/NonTechSkills";
import BeMe from "./components/BeMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Code />
        <Research />
        <Blog />
        <Life />
        <NonTechSkills />
        <BeMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
