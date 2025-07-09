"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ReactPlayer from "react-player";
export default function TrailerModal({ youtubeTrailer }) {
  const [openModal, setOpenModal] = useState(false);
  const closeRef = useOutsideClick(setOpenModal);
  useEffect(
    function () {
      if (openModal) {
        document.body.classList.add("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    },

    [openModal],
  );
  return (
    youtubeTrailer && (
      <div className="overflow-hidden">
        <button
          type="button"
          onClick={() => setOpenModal((open) => !open)}
          className="flex cursor-pointer items-center gap-1 transition-transform duration-300 hover:scale-[1.07]"
        >
          <span>
            <FaPlay />
          </span>
          <span className="font-secondary text-sm">Watch trailer</span>
        </button>
        {openModal ? (
          <div className="h-main fixed top-0 left-0 z-50 w-full bg-black/60">
            <button
              type="button"
              className="absolute top-[7%] z-50 cursor-pointer sm:top-[10%] sm:right-[3%]"
              onClick={() => setOpenModal(false)}
            >
              <FaXmark size="2rem" color="red" />
            </button>
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${youtubeTrailer.key}`}
              width="75%"
              height="75%"
              controls
              autoPlay
              playsInline
              ref={closeRef}
              key={youtubeTrailer.key}
              className="absolute top-[50%] left-[50%] z-30 aspect-video -translate-x-[50%] -translate-y-[50%]"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    )
  );
}
