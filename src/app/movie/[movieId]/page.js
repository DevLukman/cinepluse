import { movies, moviesDetails } from "@/lib/data-service";
import MoviesDetailsDesktop from "./_components/movieDetailsDesktop";
import MovieDetailsMobile from "./_components/movieDetailsMobile";
export async function generateStaticParams() {
  const data = await movies("movie/popular");
  const ids = data.results.map((result) => ({ movieId: String(result.id) }));
  return ids;
}
export async function generateMetadata({ params }) {
  const { movieId } = await params;
  const { original_title } = await moviesDetails(`movie/${movieId}`);
  return {
    title: `CinePluse | ${original_title || "Movie"}`,
  };
}

export default async function MoviesDetails({ params }) {
  const { movieId } = await params;
  const data = await moviesDetails(`movie/${movieId}`);
  return (
    <>
      <MoviesDetailsDesktop data={data} />
      <MovieDetailsMobile data={data} />
    </>
  );
}
