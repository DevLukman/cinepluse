"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Rating from "@/components/Rating";
export default function CastCredit({ castData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative mt-4 w-full">
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white"
      >
        <FaArrowRight />
      </button>
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white"
      >
        <FaArrowLeft />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={14}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
      >
        {castData.map((cast, index) => (
          <SwiperSlide
            key={index}
            className="border-primary overflow-hidden border-2 pb-2"
          >
            <div className="relative transition-transform duration-300 hover:scale-[1.03]">
              <Link
                href={
                  cast.media_type === "tv"
                    ? `/tv/${cast.id}`
                    : `/movie/${cast.id}`
                }
              >
                <Image
                  alt={
                    cast.media_type === "tv" ? cast.original_name : cast.title
                  }
                  src={
                    cast.poster_path
                      ? `https://image.tmdb.org/t/p/w500${cast.poster_path}`
                      : "/no-image.jpg"
                  }
                  className="object-cover"
                  width={300}
                  height={400}
                  priority
                />
              </Link>
              <Rating vote_average={cast.vote_average} />
            </div>
            <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
              <p className="text-primary text-center text-sm">
                {cast.media_type === "tv" ? cast.original_name : cast.title}
              </p>
              <p className="text-primary text-center text-sm">
                {cast.media_type === "tv"
                  ? cast.first_air_date
                  : cast.release_date}
              </p>
              <p className="text-secondary text-center text-sm">
                as {cast.character || "uncredited"}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
