import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
