"use client";
import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import AddToWishList from "@/components/AddToWishList";
import Rating from "@/components/Rating";
export default function Recommendations({ recommendationsData }) {
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
    <section className="mt-10">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
          You May also like
        </h1>

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
            spaceBetween={12}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 5, slidesPerGroup: 5 },
            }}
          >
            {recommendationsData.results.map((recommend) => (
              <SwiperSlide
                key={recommend.id}
                className="border-primary relative overflow-hidden border-2 pb-2"
              >
                <span className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2 py-2">
                  <AddToWishList
                    size="1.2rem"
                    id={recommend.id}
                    title={recommend.title}
                    poster_path={recommend.poster_path}
                    vote_average={recommend.vote_average}
                    release_date={recommend.release_date}
                    mediaType="movie"
                  />
                </span>
                <div className="relative transition-all duration-300 ease-in-out hover:scale-[1.03]">
                  <Link href={`/movie/${recommend.id}`}>
                    <Image
                      src={
                        recommend.poster_path
                          ? `https://image.tmdb.org/t/p/w500${recommend.poster_path}`
                          : "/no-image.jpg"
                      }
                      alt={recommend.title}
                      className="object-cover"
                      width={300}
                      height={400}
                      priority
                    />
                  </Link>
                  <Rating vote_average={recommend.vote_average} />
                </div>
                <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
                  <p className="text-primary text-center text-sm">
                    {recommend.title}
                  </p>
                  <p className="text-secondary text-sm">
                    {recommend.release_date}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
