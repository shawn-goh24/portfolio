import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Menu from "./ui/menu";
import Drawer from "./ui/drawer";

export default function Nav() {
  const [menuClick, setMenuClick] = useState<string>("");
  const [drawer, setDrawer] = useState<string>("-translate-x-full");
  const handleMenuClick = () => {
    setMenuClick((prev) => (prev === "toggle-menu" ? "" : "toggle-menu"));
    setDrawer((prev) =>
      prev === "-translate-x-full" ? "" : "-translate-x-full"
    );
  };
  return (
    <>
      <nav className="flex justify-between h-16 items-center border-b-2 border-gray-200 bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10 ">
        <Menu handleMenuClick={handleMenuClick} menuClick={menuClick} />
        <Image src={logo} alt="S" width={65} />
        <ul className="flex justify-around w-96 phone:hidden">
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Button className="rounded-xl mr-10">Button</Button>
        <Drawer handleMenuClick={handleMenuClick} drawer={drawer} />
      </nav>
    </>
  );
}
