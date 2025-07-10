"use client";
import Form from "next/form";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
export default function SearchButton() {
  const [showForm, setShowForm] = useState(false);
  function handleClose() {
    setShowForm(false);
  }
  return (
    <>
      <li className="relative">
        <button
          onClick={() => setShowForm((showForm) => !showForm)}
          className="flex items-center justify-center"
          type="button"
        >
          <FaSearch size="1.2rem" cursor="pointer" />
        </button>
        {showForm && (
          <Form action="/search" onSubmit={handleClose} role="search">
            <div className="fixed top-[70px] left-0 z-50 w-full">
              <div className="container-layout flex w-full items-center">
                <input
                  required
                  className="font-secondary bg-primary h-[3rem] w-full rounded-l-lg px-4 font-medium text-black placeholder:text-sm focus:outline-none md:placeholder:text-base"
                  type="text"
                  id="search-input"
                  name="query"
                  placeholder="Search for Movies,TvShows,Crew and Collections"
                  aria-label="search"
                />
                <input type="hidden" name="page" value="1" />
                <button
                  type="button"
                  className="bg-primary flex h-[3rem] w-16 cursor-pointer items-center justify-center md:w-14"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm((showForm) => !showForm);
                  }}
                >
                  <FaXmark className="text-xl text-[red] transition-all group-hover:scale-[1.15]" />
                </button>
                <button
                  type="submit"
                  className="group bg-secondary flex h-[3rem] w-16 cursor-pointer items-center justify-center rounded-r-lg md:w-14"
                >
                  <FaSearch className="text-[1.2rem] text-white transition-all group-hover:scale-[1.15]" />
                </button>
              </div>
            </div>
          </Form>
        )}
      </li>
    </>
  );
}
