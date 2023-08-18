import About from "@/components/about";
import Intro from "@/components/intro";
// import SectionDivider from "@/components/sectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
    </main>
  );
}
