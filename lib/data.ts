import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gowhereImg from "@/public/gowhere.png";
import kachingImg from "@/public/kaching.png";
import syncalImg from "@/public/syncal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University of Glasgow",
    location: "Singapore",
    description:
      "I graduated after 2 years of studying in Bachelor of Engineering in mechatronics (First class hons)",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Test Development Engineer @ Dyson",
    location: "Singapore",
    description:
      "I worked as a Test Development Engineer for 2 years and 9 months at Dyson.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Graduated from Rocket Academy SWE Bootcamp",
    location: "Singapore, Remote",
    description:
      "I graduated after 8 months of studying. Now looking for new opportunites in the SWE role. My stack includes React, Next.js, Tailwind, Node.js, PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "GoWhere",
    description:
      "A Travel Planner web application where allows users to plan their travels together with their families and friends.",
    tags: ["React", "Firebase", "Google Maps API"],
    imageUrl: gowhereImg,
  },
  {
    title: "Kaching",
    description:
      "A Personal Finance Tracker web application to track monthly expenses and budgets based on day, month, or year.",
    tags: ["React", "MUI", "Node.js", "Express.js", "PostgreSQL", "Auth0"],
    imageUrl: kachingImg,
  },
  {
    title: "Syncal",
    description:
      "A web based calendar sharing application that facilities collaborative scheduling with friends and family.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "ChakraUI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Auth0",
      "Google Calendar API",
      "Google Auth2.0",
    ],
    imageUrl: syncalImg,
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;
