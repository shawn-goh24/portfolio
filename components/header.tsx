"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import logo from "@/app/favicon.ico";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex items-center fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem]"
        // sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Image
          src={logo}
          alt="logo"
          className="fixed top-[1rem] left-[1.5rem] w-[36px] h-[36px] justify-center items-center hidden sm:flex"
        />
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.3rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex w-full items-center justify-center px-3 hover:text-gray-950 transition"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-[1.5rem] top-[1rem] justify-center items-center hidden sm:flex rounded-full"
        >
          <MdOutlineDarkMode />
        </Button>
      </motion.div>
    </header>
  );
}
