import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main>
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <GitHubActivity />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
