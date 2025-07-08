"use client";
import AddToWishList from "@/components/AddToWishList";
import GridContainer from "@/components/GridContainer";
import Rating from "@/components/Rating";
import { getWishList } from "@/store/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const wishListContent = useSelector(getWishList);
  if (wishListContent.length === 0)
    return (
      <h1 className="font-primary text-secondary absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl sm:text-3xl">
        Your Wishlist is Empty
      </h1>
    );
  return (
    <section className="container-layout">
      <div className="mt-[80px]">
        <h1 className="font-primary text-secondary text-3xl">Wishlist</h1>;
        <GridContainer>
          {wishListContent.map((wish) => (
            <div
              key={wish.id}
              className="border-primary relative overflow-hidden border-2 pb-2"
            >
              <span className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2 py-2">
                <AddToWishList size="1.2rem" id={wish.id} />
              </span>
              <div className="relative transition-transform duration-300 hover:scale-[1.05]">
                <Link
                  href={
                    wish.mediaType === "movie"
                      ? `/movie/${wish.id}`
                      : `/tv/${wish.id}`
                  }
                >
                  <Image
                    src={
                      wish.poster_path
                        ? `https://image.tmdb.org/t/p/w500${wish.poster_path}`
                        : "/no-image.jpg"
                    }
                    alt={wish.title || wish.name}
                    className="object-cover"
                    width={300}
                    height={400}
                    priority
                  />
                </Link>
                <Rating vote_average={wish.vote_average} />
              </div>
              <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
                <p className="text-primary text-center text-sm">
                  {wish.title || wish.name}
                </p>
                <p className="text-secondary mt-1 text-sm">
                  {wish.release_date || wish.first_air_date}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
