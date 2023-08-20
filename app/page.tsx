import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-2">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
