"use client";

import Link from "next/link";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";
import me from "@/public/me.svg";
import { motion } from "framer-motion";
import { socialMediaLinks, skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex flex-col-reverse items-center justify-center text-center sm:space-x-16 gap-8 h-screen xl:flex-row xl:text-left mb-4 mt-20 sm:mt-0"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-2xl md:text-5xl 2xl:text-6xl mb-4">
          HEY! <span className="font-bold">I&apos;m Shawn</span>, A <br />
          <span className="font-bold">FULL-STACK DEVELOPER</span> <br />
          BASED IN <span className="font-bold">SINGAPORE</span>
        </h1>
        <div className="text-gray-500 mb-8 items-center flex flex-col flex-wrap w-full sm:w-[600px] xl:items-start dark:text-gray-300">
          <p className="text-sm sm:text-base">
            Passionate about coding. I have been programming websites for about
            1 year. Currently open to new opportunities in the tech industry or
            SWE position.
          </p>
          <div className="flex space-x-3 [&>*]:w-8 mt-2 flex-wrap justify-center">
            {skills.map((skill) => (
              <Image key={skill.name} src={skill.image} alt={skill.name} />
            ))}
          </div>
        </div>
        <div className="flex space-x-6 w-full justify-center xl:justify-start">
          <Link href="#contact">
            <Button
              className="rounded-full dark:bg-gray-800 dark:bg-black/60 dark:text-white/80"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
            </Button>
          </Link>
          <div className="space-x-2">
            <Link href={socialMediaLinks.github} target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent dark:bg-white/10 dark:text-white/60"
              >
                <BiLogoGithub />
              </Button>
            </Link>
            <Link href={socialMediaLinks.linkedin} target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent dark:bg-white/10 dark:text-white/60"
              >
                <FaLinkedinIn />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Image
          src={me}
          alt="me"
          className="w-[300px] sm:w-[350px] 2xl:w-[500px]"
        />
      </motion.div>
    </section>
  );
}
