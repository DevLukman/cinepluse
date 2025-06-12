"use client";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
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

export default function DesktopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-header">
      <nav className="container-layout text-primary hidden w-full justify-between lg:flex">
        <Link className="font-primary text-2xl" href="/">
          CinePlus
        </Link>

        <div>
          <ul className="flex w-full gap-[2rem]">
            <li>
              <Link className="font-primary text-xl" href="/">
                Home
              </Link>
            </li>
            {navigationLinks.map((content, index) => (
              <Navigation
                key={content.id}
                header={content.header}
                number={index}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                mainLink={content.mainLink}
              />
            ))}
            <li>
              <Link className="font-primary text-xl" href="/wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Navigation({ header, mainLink, number, isOpen, setIsOpen }) {
  const curOpen = number === isOpen;
  function handleOpen() {
    setIsOpen(curOpen ? null : number);
  }
  function handleLeave() {
    setIsOpen(false);
  }
  return (
    <li
      className="font-primary relative h-[fit-content] cursor-pointer text-xl"
      onMouseEnter={handleOpen}
      onMouseLeave={handleLeave}
    >
      <div className="flex gap-1">
        <span>{header}</span>
        {!curOpen ? <FaCaretDown /> : <FaCaretUp />}
      </div>
      {curOpen && (
        <div className="absolute left-[50%] flex w-[175px] -translate-x-[50%] flex-col rounded-xl border-[1px]">
          {mainLink.map((mainNav, index) => (
            <Link
              key={index}
              href={mainNav.href}
              className="font-secondary cursor-pointer rounded-xl px-[1.2rem] py-[0.7rem] text-center text-base capitalize transition-all duration-150 hover:scale-[1.1]"
            >
              {mainNav.theLink}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
