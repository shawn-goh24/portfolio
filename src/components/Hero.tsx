import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import me from "../assets/me.svg";
import html from "../assets/icons8-html-48.png";
import css from "../assets/icons8-css-48.png";
import js from "../assets/icons8-javascript-48.png";
import react from "../assets/icons8-react-40.png";
import node from "../assets/icons8-nodejs-48.png";
import express from "../assets/icons8-express-js-48.png";
import postgres from "../assets/icons8-postgresql-48.png";
import git from "../assets/icons8-git-48.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center w-full justify-center mt-48 space-x-40">
      <section>
        <div className="text-7xl mb-4">
          HEY! <strong>I'm Shawn</strong>, A <br />
          <strong>FULL-STACK DEVELOPER</strong> <br />
          BASED IN <strong>SINGAPORE</strong>
        </div>
        <div className="text-gray-500 mb-8">
          <p>
            Passionate about coding. I have been programming websites for about
            1 year.
          </p>
          <div className="flex space-x-3 [&>*]:w-8">
            <Image src={html} alt="html" />
            <Image src={css} alt="css" />
            <Image src={js} alt="js" />
            <Image src={react} alt="react" />
            <Image src={node} alt="node" />
            <Image src={express} alt="express" />
            <Image src={postgres} alt="postgres" />
            <Image src={git} alt="git" />
          </div>
        </div>
        <div className="flex space-x-6">
          <Button>Contact me</Button>
          <div className="space-x-2">
            <Link href="https://github.com/shawn-goh24" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <GitHubIcon />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shawngoh/" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <LinkedInIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Image src={me} alt="me" width={500} className="z-50 " />
    </div>
  );
}
