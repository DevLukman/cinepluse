import AddToWishList from "@/components/AddToWishList";
import GridContainer from "@/components/GridContainer";
import Rating from "@/components/Rating";
import { search } from "@/lib/data-service";
import Image from "next/image";
import Link from "next/link";
export async function generateMetadata({ searchParams }) {
  const { query } = await searchParams;

  return {
    title: `CinePluse | ${query}`,
  };
}
export default async function Search({ searchParams }) {
  const { query } = await searchParams;
  const { page } = await searchParams;
  const data = await search(query);
  if (!data.results.length)
    return (
      <h1 className="text-secondary font-primary mt-[100px] flex items-center justify-center text-3xl">
        {`No Search Results for '${query}'`}
      </h1>
    );
  return (
    <section className="container-layout">
      <div className="mt-[110px]">
        <h1 className="text-secondary font-primary text-3xl">
          Search Results for {query}
        </h1>

        <GridContainer>
          {data.results.map((search, index) => (
            <div
              key={index}
              className="border-primary relative overflow-hidden border-2 pb-2"
            >
              <span className="absolute top-0 right-0 z-10 cursor-pointer rounded-bl-xl bg-black px-2 py-2">
                <AddToWishList
                  size="1.2rem"
                  id={search.id}
                  title={search.title}
                  poster_path={search.poster_path}
                  vote_average={search.vote_average}
                  release_date={search.release_date}
                  mediaType={search.media_type}
                />
              </span>
              <div className="relative transition-transform duration-300 hover:scale-[1.03]">
                <Link
                  href={
                    search.media_type === "tv"
                      ? `/tv/${search.id}`
                      : `/movie/${search.id}`
                  }
                >
                  <Image
                    alt={
                      search.media_type === "tv"
                        ? search.name
                        : search.media_type === "movie"
                          ? search.title
                          : search.original_name
                    }
                    src={
                      search.poster_path
                        ? `https://image.tmdb.org/t/p/w500${search.poster_path}`
                        : "/no-image.jpg"
                    }
                    className="object-fit"
                    width={300}
                    height={400}
                    priority
                  />
                </Link>
                <Rating vote_average={search.vote_average} />
              </div>
              <div className="font-secondary mt-2 flex w-full flex-col items-center justify-center">
                <p className="text-primary text-center text-sm">
                  {search.media_type === "tv"
                    ? search.original_name
                    : search.media_type === "movie"
                      ? search.title
                      : search.original_name}
                </p>
                <p className="text-primary text-center text-sm">
                  {search.media_type === "tv"
                    ? search.first_air_date
                    : search.release_date}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
