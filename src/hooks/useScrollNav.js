// "use client";
// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { useWindowScroll } from "react-use";

// export function useScrollNav() {
//   const [navVisible, setNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const { y: currentScrollY } = useWindowScroll();
//   const navRef = useRef(null);

//   useEffect(
//     function () {
//       if (currentScrollY === 0) {
//         setNavVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         setNavVisible(false);
//       } else if (currentScrollY < lastScrollY) {
//         setNavVisible(true);
//       }
//       setLastScrollY(currentScrollY);
//     },
//     [currentScrollY, lastScrollY],
//   );
//   useEffect(
//     function () {
//       gsap.to(navRef.current, {
//         y: navVisible ? 0 : -100,
//         opacity: navVisible ? 1 : 0,
//         duration: 0.4,
//       });
//     },
//     [navVisible],
//   );
//   return navRef;
// }
