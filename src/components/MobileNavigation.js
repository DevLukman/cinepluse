"use client";
import { useScrollNav } from "@/hooks/useScrollNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import SearchButton from "./searchButton";

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
        href: "/people",
      },
    ],
  },
];

export default function MobileNavigation() {
  const [openNav, setOpenNav] = useState(false);
  const scrollNav = useScrollNav();

  useEffect(
    function () {
      if (openNav) {
        document.body.classList.add("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    },

    [openNav],
  );
  return (
    <>
      <header
        className="bg-header fixed top-0 left-0 z-50 w-full"
        ref={scrollNav}
      >
        <nav className="container-layout text-primary relative flex w-full items-center justify-between py-2 lg:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setOpenNav((openNav) => !openNav)}
            type="button"
          >
            <HiBars3 size="1.5rem" />
          </button>
          <Link className="font-primary text-2xl" href="/">
            CinePluse
          </Link>
          <SearchButton />
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
        <div className="fixed top-0 left-0 z-50 h-[100dvh] w-full bg-black/50">
          <div className="bg-main relative h-[100dvh] w-[60vw]">
            <button
              className="text-primary absolute top-[5%] left-[5%] cursor-pointer"
              onClick={() => setOpenNav((openNav) => !openNav)}
              type="button"
            >
              <FaXmark size="1.5rem" />
            </button>
            <div className="pt-[100px]">
              <ul className="container-layout text-primary flex w-full flex-col gap-[1.5rem]">
                <Link
                  href="/"
                  className="font-primary relative w-fit cursor-pointer text-2xl"
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

function Navigation({ header, mainLink, number, isOpen, setIsOpen }) {
  const curOpen = isOpen === number;
  function handleOpen() {
    setIsOpen(curOpen ? null : number);
  }
  return (
    <li
      className="font-primary relative w-fit cursor-pointer text-2xl"
      onClick={handleOpen}
    >
      <div className="flex items-center gap-1">
        <span> {header}</span>
        <span> {!curOpen ? <FaCaretDown /> : <FaCaretUp />}</span>
      </div>
      {curOpen && (
        <div className="flex flex-col">
          {mainLink.map((mainNav, index) => (
            <Link
              key={index}
              href={mainNav.href}
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
