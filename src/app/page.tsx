import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CaseStudy from "@/components/CaseStudy";
;

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <CaseStudy />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}