import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Approach";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return <main>
    <Navbar />
    <Hero />
    <About />
    <WhatIDo />
    <Process />
    <Skills />
    <CaseStudy />
    <Projects />
    <Contact />
    <Footer />
  </main>;
}
