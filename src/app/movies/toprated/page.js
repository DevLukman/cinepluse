import AddToWishList from "@/components/AddToWishList";
import GridContainer from "@/components/GridContainer";
import { movies } from "@/lib/data-service";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
export const metadata = {
  title: "CINEPLUSE | Top Rated",
  description: "Top Rated of CINEPLUSE",
};
export default async function TopRated() {
  const data = await movies("movie/top_rated");
  const trendingMovies = data.results;

  return (
    <section className="min-h-main mt-[45px] w-full">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
          Top Rated
        </h1>
        <GridContainer>
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="border-primary relative overflow-hidden border-2 pb-2"
            >
              <span className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2 py-2">
                <AddToWishList
                  size="1.2rem"
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                  mediaType="movie"
                  content=""
                />
              </span>
              <div className="relative transition-transform duration-300 hover:scale-[1.05]">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/no-image.jpg"
                    }
                    alt={movie.title}
                    className="object-fit"
                    width={300}
                    height={400}
                    priority
                  />
                </Link>
                <span
                  style={{
                    width: `${Math.floor(movie.vote_average * 10)}%`,
                    background: `${
                      Math.floor(movie.vote_average * 10) >= 67
                        ? "#008000"
                        : Math.floor(movie.vote_average * 10) >= 50
                          ? "#ffff00"
                          : "#ff253a"
                    }`,
                  }}
                  className="absolute bottom-0 block h-1"
                ></span>
              </div>
              <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
                <p className="text-primary text-center text-base">
                  {movie.title}
                </p>
                <p className="text-secondary mt-1 text-sm">
                  {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
