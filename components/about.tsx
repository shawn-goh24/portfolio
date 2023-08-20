"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="text-center mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineering</span> and worked at Dyson as
        a Test Development Engineer, I decided to pursue my passion for
        programming. I enrolled in a Software Engineering bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> web
        application development process and the problem solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Postgres{" "}
        </span>
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching football and F1. Probably also going out with friends for a
        pint of beer to wind down
      </p>
    </section>
  );
}
