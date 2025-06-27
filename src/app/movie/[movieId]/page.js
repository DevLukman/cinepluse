import { movies, moviesDetails } from "@/lib/data-service";
import MoviesDetailsDesktop from "./_components/movieDetailsDesktop";
import MovieDetailsMobile from "./_components/movieDetailsMobile";

export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { original_title } = await moviesDetails(`movie/${paramsId.movieId}`);
  return {
    title: `CinePluse | ${original_title || "Movie"}`,
  };
}

export default async function MoviesDetails({ params }) {
  const paramsId = await params;
  const data = await moviesDetails(`movie/${paramsId.movieId}`);
  return (
    <>
      <MoviesDetailsDesktop data={data} />
      <MovieDetailsMobile data={data} />
    </>
  );
}
