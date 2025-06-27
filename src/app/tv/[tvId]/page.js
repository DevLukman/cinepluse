import { tvShowsDetails } from "@/lib/data-service";
import TvDetailsDesktop from "./_components/tvDetailsDesktop";
import TVDetailsMobile from "./_components/tvDetailsMobile";
export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { name } = await tvShowsDetails(`tv/${paramsId.tvId}`);

  return {
    title: `CinePluse | ${name || "TV"}`,
  };
}
export default async function moviesDetails({ params }) {
  const paramsId = await params;
  const data = await tvShowsDetails(`tv/${paramsId.tvId}`);
  return (
    <>
      <TvDetailsDesktop data={data} />
      <TVDetailsMobile data={data} />
    </>
  );
}
