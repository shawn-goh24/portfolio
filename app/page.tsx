import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Intro />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
