import React, { useState } from "react";

type MenuProps = {
  handleMenuClick: () => void;
  menuClick: string;
};

export default function Menu({ handleMenuClick, menuClick }: MenuProps) {
  return (
    <div
      className={`w-8 h-8 cursor-pointer relative ${menuClick} hidden phone:block ml-10`}
      onClick={handleMenuClick}
    >
      <div
        className={`w-8 h-[2px] rounded bg-black absolute top-4 -mt-[1px]
          transition-all duration-500 
          before:content-[''] 
          before:bg-black 
          before:w-8 
          before:h-[2px] 
          before:rounded 
          before:absolute 
          before:-translate-y-2
          before:transition-all before:duration-500 
          after:content-[''] 
          after:bg-black 
          after:w-8
          after:h-[2px] 
          after:rounded 
          after:absolute 
          after:translate-y-2
          after:transition-all
          after:duration-500
          `}
      />
    </div>
  );
}
