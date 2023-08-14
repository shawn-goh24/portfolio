import React from "react";
import Image from "next/image";
import greenVector from "../../assets/greenVector.svg";
import redVector from "../../assets/redVector.svg";
import blueVector from "../../assets/blueVector.svg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Background() {
  return (
    <div className="h-full w-full">
      {/* <Parallax pages={4}> */}
      {/* <ParallaxLayer speed={1}> */}
      <Image src={greenVector} alt="S" className="absolute -z-20 right-0" />
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={1} speed={0.5}> */}
      <Image src={redVector} alt="S" className="absolute -z-10 top-72 left-0" />
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={2} speed={0.25}> */}
      <Image
        src={blueVector}
        alt="S"
        className="absolute -z-10 top-[800px] right-0"
      />
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
}
