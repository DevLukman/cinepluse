"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);
export default function Footer() {
  //   useGSAP(function () {
  //     const textSplit = SplitText.create("h1", { type: "chars", mask: true });
  //   }, []);
  return (
    <footer className="flex h-[70dvh] w-full flex-col items-center justify-center">
      <h1 className="font-primary text-secondary text-7xl uppercase sm:text-6xl md:text-7xl lg:text-9xl">
        Cinepluse
      </h1>
      <p className="text-primary font-secondary text-sm">
        Home of Movies and TV shows
      </p>
      <p className="text-primary font-secondary text-sm">
        Built with a little ❤ by Lukas_Flick
      </p>
    </footer>
  );
}
