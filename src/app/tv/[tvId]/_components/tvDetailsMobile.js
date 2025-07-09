import AddToWishList from "@/components/AddToWishList";
import CastSlider from "@/components/castSlider";
import TrailerModal from "@/components/TrailerModal";
import {
  castandCrew,
  getIMDBDataForTV,
  getTrailer,
  keywords,
  recommendations,
} from "@/lib/data-service";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import TvRecommendations from "./tvRecommendations";

export default async function TVDetailsMobile({ data }) {
  const {
    backdrop_path,
    poster_path,
    homepage,
    id,
    overview,
    production_companies,
    first_air_date,
    last_air_date,
    status,
    tagline,
    name,
    number_of_episodes,
    number_of_seasons,
    vote_average,
  } = data;
  const keywordResults = await keywords(`tv/${id}/keywords`);
  const castData = await castandCrew(`tv/${id}/credits`);
  const recommendationsData = await recommendations(`tv/${id}/recommendations`);
  const IMDbResponse = await getIMDBDataForTV(`${name}`);
  const {
    Rated: rated,
    Director: director,
    Writer: writer,
    Language: language,
    Country: country,
    Awards: awards,
    Ratings: ratings,
    Genre: genre,
    imdbVotes,
  } = IMDbResponse;
  const tvTrailer = await getTrailer(`tv/${id}/videos`);
  const youtubeTrailer = tvTrailer.results.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube",
  );

  return (
    <section className="lg:hidden">
      <section className="container-layout flex h-[50dvh] md:h-[34dvh]">
        <div
          className="object-fit absolute top-0 left-0 z-[-1] h-[60dvh] w-full bg-cover bg-center bg-no-repeat md:h-[40dvh]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
        <div className="relative mt-[5rem] h-[15rem] w-[10rem] md:mt-[100px]">
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "/no-image.jpg"
            }
            alt={name}
            className="rounded-2xl object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
            priority
          />
        </div>
      </section>
      <section className="container-layout">
        <div className="mt-[50px] flex flex-col gap-4">
          <div className="mt-[50px] flex items-center gap-2 sm:mt-[30px]">
            <h1 className="text-secondary font-primary text-3xl">{name}</h1>
            <span className="text-primary font-primary text-base">
              ({first_air_date.split("-")[0]})
            </span>
          </div>
          <div className="text-primary font-secondary flex flex-col flex-wrap gap-[0.7rem] sm:flex-row">
            <p className="text-secondary border-primary w-fit rounded-sm border-2 px-1.5 text-sm">
              {rated}
            </p>
            <span className="bg-secondary hidden h-[20px] w-[2px] sm:block"></span>
            <p>
              <span className="text-secondary text-sm sm:hidden">
                Genre(s):
              </span>
              <span className="text-sm">{genre}</span>
            </p>
            <span className="bg-secondary hidden h-[20px] w-[2px] sm:block"></span>
            <p>
              <span className="text-secondary text-sm sm:hidden">
                Country:{" "}
              </span>
              <span className="text-sm">{country}</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            {ratings?.map((rating, index) => (
              <div
                key={index}
                className="text-primary font-secondary flex flex-col"
              >
                <span className="text-sm">
                  {rating.Source === "Internet Movie Database"
                    ? "IMDb"
                    : rating.Source}
                </span>
                <div className="flex items-center gap-2">
                  <FaStar color="gold" />
                  <span className="text-sm">{rating.Value}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-secondary text-primary text-base italic opacity-70">
            {tagline}
          </p>
          <p className="font-secondary text-primary text-base">{overview}</p>
          <div className="flex flex-wrap gap-[1.5rem]">
            <div className="font-secondary">
              <p className="text-primary text-sm">{writer}</p>
              <span className="text-secondary text-sm">Writer(s)</span>
            </div>
            <div className="font-secondary">
              <p className="text-primary text-sm">{director}</p>
              <span className="text-secondary text-sm">Director(s)</span>
            </div>
          </div>
          <div className="text-secondary flex gap-6">
            <TrailerModal youtubeTrailer={youtubeTrailer} />
            <AddToWishList
              id={id}
              poster_path={poster_path}
              name={name}
              first_air_date={first_air_date}
              vote_average={vote_average}
              mediaType="tv"
              content="Add to wishlist"
              content2="Remove from wishlist"
            />
          </div>
          <div className="border-secondary mt-2 border-y py-4">
            <div className="font-secondary flex flex-wrap gap-3">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">Status:</span>
                </div>
                <span className="text-primary text-sm">{status}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">
                    first Air Date:
                  </span>
                </div>
                <span className="text-primary text-sm">{first_air_date}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">Last Air Date:</span>
                </div>
                <span className="text-primary text-sm">{last_air_date}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">
                    Number of Seasons:
                  </span>
                </div>
                <span className="text-primary text-sm">
                  {number_of_seasons}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">
                    Number of episodes:
                  </span>
                </div>
                <span className="text-primary text-sm">
                  {number_of_episodes}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">Awards:</span>
                </div>
                <span className="text-primary text-sm">{awards}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">language(s):</span>
                </div>
                <span className="text-primary text-sm">{language}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">IMDbVotes:</span>
                </div>
                <span className="text-primary text-sm">{imdbVotes}</span>
              </div>
            </div>
            <div className="font-secondary mt-4 flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary text-sm">Homepage:</span>
              </div>
              <a href={homepage} className="text-primary text-sm opacity-80">
                Vist Page
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-secondary font-primary mt-4 text-center text-2xl">
            Cast
          </h1>
          <CastSlider castData={castData} />
        </div>
        <div className="mt-6 flex w-full flex-col gap-5">
          <div className="w-full">
            <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
              Production comapanies
            </h1>
            <div className="mt-2 flex flex-wrap gap-2">
              {production_companies.map((company) => (
                <p
                  className="text-primary font-secondary border-secondary w-fit space-y-2 rounded-sm border-2 px-1.5 text-sm"
                  key={company.id}
                >
                  {company.name}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
              KeyWords
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {keywordResults.results.map((keyword) => (
                <Link
                  href={`/keyword/${keyword.id}-${keyword.name}`}
                  className="text-primary font-secondary border-secondary w-fit space-y-2 rounded-sm border-2 px-1.5 text-sm transition-transform duration-300 hover:scale-[1.05]"
                  key={keyword.id}
                >
                  {keyword.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TvRecommendations recommendationsData={recommendationsData} />
    </section>
  );
}
