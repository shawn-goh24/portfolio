import Background from "@/components/ui/background";
import Nav from "../components/Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";

export default function Home() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  return (
    <>
      {/* <motion.div style={{ y }}> */}
      <Background />
      {/* </motion.div> */}
      <div className="">
        <Nav />
        <Hero />
      </div>
    </>
  );
}
