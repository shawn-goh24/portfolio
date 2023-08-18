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

export default function Intro() {
  return (
    <section className="relative flex flex-col-reverse items-center justify-center text-center space-x-16 gap-8 h-screen xl:flex-row xl:text-left">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="text-2xl md:text-5xl 2xl:text-7xl mb-4">
          HEY! <span className="font-bold">I'm Shawn</span>, A <br />
          <span className="font-bold">FULL-STACK DEVELOPER</span> <br />
          BASED IN <span className="font-bold">SINGAPORE</span>
        </div>
        <div className="text-gray-500 mb-8 items-center flex flex-col xl:items-start ">
          <p>
            Passionate about coding. I have been programming websites for about
            1 year.
          </p>
          <div className="flex space-x-3 [&>*]:w-8 mt-2">
            {skills.map((skill) => (
              <Image src={skill.image} alt={skill.name} />
            ))}
          </div>
        </div>
        <div className="flex space-x-6 w-full justify-center xl:justify-start">
          <Link href="#contact">
            <Button className="rounded-full">Contact me</Button>
          </Link>
          <div className="space-x-2">
            <Link href={socialMediaLinks.github} target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <BiLogoGithub />
              </Button>
            </Link>
            <Link href={socialMediaLinks.linkedin} target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
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
