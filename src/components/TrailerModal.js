"use client";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ReactPlayer from "react-player";
export default function TrailerModal({ youtubeTrailer }) {
  const [openModal, setOpenModal] = useState(false);
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
          onClick={() => setOpenModal((open) => !open)}
          className="flex cursor-pointer items-center gap-1 text-sm transition-transform duration-300 hover:scale-[1.07]"
        >
          <span>
            <FaPlay />
          </span>
          <span className="font-secondary">Watch trailer</span>
        </button>
        {openModal ? (
          <div className="h-main fixed top-0 left-0 z-50 w-full bg-black/60">
            <button
              className="absolute top-[10%] right-[3%] cursor-pointer"
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
              key={youtubeTrailer.key}
              className="absolute top-[50%] left-[50%] aspect-video -translate-x-[50%] -translate-y-[50%]"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    )
  );
}
