import { tvShows } from "@/lib/data-service";
import { FaCaretRight, FaRegHeart } from "react-icons/fa";
import GridContainer from "./GridContainer";
import Link from "next/link";
import Image from "next/image";

export default async function TrendingShows() {
  const data = await tvShows("tv/popular");
  const trendingTv = data.results;
  return (
    <section className="mt-[50px] w-full">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
          Trending Tv shows
        </h1>
        <p className="text-primary flex items-center gap-1.5 text-base">
          <span>
            <FaCaretRight color="#29ab87" />
          </span>
          <span className="font-secondary text-[11px] sm:text-sm">
            Explore the latest and popular TV shows
          </span>
        </p>
        <GridContainer>
          {trendingTv.map((show) => (
            <div
              key={show.id}
              className="border-primary relative overflow-hidden border-2 pb-2"
            >
              <button className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2.5 py-2.5">
                <FaRegHeart color="green" size="1.2rem" />
              </button>
              <div className="relative transition-transform duration-300 hover:scale-[1.05]">
                <Link href={`/tv/${show.id}`}>
                  <Image
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                        : "/no-image.jpg"
                    }
                    alt={show.name}
                    className="object-fit"
                    width={300}
                    height={400}
                    priority
                  />
                </Link>
                <span
                  style={{
                    width: `${Math.floor(show.vote_average * 10)}%`,
                    background: `${
                      Math.floor(show.vote_average * 10) >= 67
                        ? "#008000"
                        : Math.floor(show.vote_average * 10) >= 50
                          ? "#ffff00"
                          : "#ff253a"
                    }`,
                  }}
                  className="absolute bottom-0 block h-1"
                ></span>
              </div>
              <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
                <p className="text-primary text-center text-sm">{show.name}</p>
                <p className="text-secondary mt-1 text-sm">
                  {show.first_air_date}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
