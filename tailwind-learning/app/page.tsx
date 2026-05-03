import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <section id="about" className="h-screen">About</section>
      <section id="skills" className="h-screen">Skills</section>
      <section id="projects" className="h-screen">Projects</section>
      <section id="experience" className="h-screen">Experience</section>
    </main>
  );
}