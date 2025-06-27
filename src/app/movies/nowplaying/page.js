import GridContainer from "@/components/GridContainer";
import { movies } from "@/lib/data-service";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "CINEPLUSE | Now_Playing",
  description: "Now Playing of CINEPLUSE",
};

export default async function NowPlaying() {
  const data = await movies("movie/now_playing");
  const trendingMovies = data.results;

  return (
    <section className="min-h-main mt-[45px] w-full">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
          Now Playing
        </h1>
        <GridContainer>
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="border-primary overflow-hidden border-2 pb-2"
            >
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
