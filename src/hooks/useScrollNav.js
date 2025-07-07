"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useWindowScroll } from "react-use";

export function useScrollNav() {
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScrollY } = useWindowScroll();
  const navRef = useRef(null);

  useGSAP(
    function () {
      if (currentScrollY === 0) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    },
    [currentScrollY, lastScrollY],
  );
  useGSAP(
    function () {
      gsap.to(navRef.current, {
        yPercent: navVisible ? 0 : -100,
        opacity: navVisible ? 1 : 0,
        duration: 0.4,
      });
    },
    [navVisible],
  );
  return navRef;
}
