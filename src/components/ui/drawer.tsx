import React from "react";

type DrawerProps = {
  handleMenuClick: () => void;
  drawer: string;
};

export default function Drawer({ handleMenuClick, drawer }: DrawerProps) {
  return (
    <div
      className={`bg-gray-950/60 text-white absolute top-16 w-full h-[calc(100%-4rem)] transition-all duration-500 ${drawer} tablet:-translate-x-full screen:-translate-x-full`}
    >
      <ul className="flex flex-col items-center justify-around w-full font-bold text-5xl space-y-10 pt-10">
        <li>
          <a href="#timeline" onClick={handleMenuClick}>
            Timeline
          </a>
        </li>
        <li>
          <a href="#work" onClick={handleMenuClick}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
