"use client";

import React from "react";
import { Button } from "./ui/button";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/themeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
       shadow-2xl rounded-full flex items-center justify-center borderBlack
      hover:scale-[1.15] active:scale-105 transition-all sm:top-[0.75rem] sm:right-[1.5rem] 
      dark:bg-gray-900 dark:bg-opacity-80 dark:border dark:border-white dark:border-opacity-40"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </Button>
  );
}
