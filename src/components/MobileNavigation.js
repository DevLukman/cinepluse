"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

const navigationLinks = [
  {
    id: 1,
    header: "movies",
    mainLink: [
      {
        theLink: "now Playing",
        href: "/movies/nowplaying",
      },
      {
        theLink: "popular",
        href: "/movies/popular",
      },
      {
        theLink: "upcoming",
        href: "/movies/upcoming",
      },
      {
        theLink: "top rated",
        href: "/movies/toprated",
      },
    ],
  },
  {
    id: 2,
    header: "tv shows",
    mainLink: [
      {
        theLink: "airing Today",
        href: "/tvshow/airingtoday",
      },
      {
        theLink: "on the air",
        href: "/tvshow/ontheair",
      },
      {
        theLink: "popular",
        href: "/tvshow/popular",
      },
      {
        theLink: "top rated",
        href: "/tvshow/toprated",
      },
    ],
  },
  {
    id: 3,
    header: "Person",
    mainLink: [
      {
        theLink: "popular",
        href: "/person",
      },
    ],
  },
];

export default function MobileNavigation() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <header className="bg-header">
        <nav className="container-layout text-primary flex w-full items-center justify-between lg:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setOpenNav((openNav) => !openNav)}
          >
            <HiBars3 size="1.5rem" />
          </button>

          <Link className="font-primary text-2xl" href="/">
            CinePluse
          </Link>
          <FaSearch size="1.2rem" cursor="pointer" />
        </nav>
      </header>
      <NavigationContainer openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
}

function NavigationContainer({ openNav, setOpenNav }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {openNav && (
        <div className="absolute top-0 left-0 h-[100dvh] w-full bg-[#0f0f0f]/10">
          <div className="bg-main relative z-20 h-[100dvh] w-[60vw]">
            <button
              className="text-primary absolute top-[5%] left-[5%] cursor-pointer"
              onClick={() => setOpenNav((openNav) => !openNav)}
            >
              <FaXmark size="1.5rem" />
            </button>
            <div className="pt-[100px]">
              <ul className="container-layout text-primary flex w-full flex-col gap-[1.5rem]">
                <Link
                  href="/"
                  className="font-primary relative w-fit cursor-pointer text-2xl"
                  onClick={() => setOpenNav((navopen) => !navopen)}
                >
                  Home
                </Link>
                {navigationLinks.map((content, index) => (
                  <Navigation
                    key={content.id}
                    header={content.header}
                    number={index}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    mainLink={content.mainLink}
                    setOpenNav={setOpenNav}
                  />
                ))}
                <Link
                  href="/wishlist"
                  className="font-primary relative w-fit cursor-pointer text-2xl"
                  onClick={() => setOpenNav((navopen) => !navopen)}
                >
                  Wishlist
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Navigation({
  header,
  mainLink,
  number,
  isOpen,
  setIsOpen,
  setOpenNav,
}) {
  const curOpen = isOpen === number;
  function handleOpen() {
    setIsOpen(curOpen ? null : number);
  }
  return (
    <li
      className="font-primary relative w-fit cursor-pointer text-2xl"
      onClick={handleOpen}
    >
      {header}
      {curOpen && (
        <div className="flex flex-col">
          {mainLink.map((mainNav, index) => (
            <Link
              key={index}
              href={mainNav.href}
              onClick={() => setOpenNav((navopen) => !navopen)}
              className="font-secondary cursor-pointer rounded-xl py-[0.7rem] text-base capitalize transition-all duration-150 hover:scale-[1.1]"
            >
              {mainNav.theLink}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
