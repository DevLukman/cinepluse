import { tvShows } from "@/lib/data-service";
import Link from "next/link";
import Image from "next/image";
import GridContainer from "@/components/GridContainer";
import AddToWishList from "@/components/AddToWishList";
import Rating from "@/components/Rating";
export const metadata = {
  title: "CINEPLUSE | Airing Today",
  description: "Airing Today of CINEPLUSE",
};
export default async function AiringToday() {
  const data = await tvShows("tv/airing_today");
  const trendingTv = data.results;
  return (
    <section className="mt-[105px] w-full">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
          Airing Today
        </h1>
        <GridContainer>
          {trendingTv.map((show) => (
            <div
              key={show.id}
              className="border-primary relative overflow-hidden border-2 pb-2"
            >
              <span className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2 py-2">
                <AddToWishList
                  size="1.2rem"
                  id={show.id}
                  title={show.name}
                  poster_path={show.poster_path}
                  vote_average={show.vote_average}
                  release_date={show.first_air_date}
                  mediaType="tv"
                />
              </span>
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
                <Rating vote_average={show.vote_average} />
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
