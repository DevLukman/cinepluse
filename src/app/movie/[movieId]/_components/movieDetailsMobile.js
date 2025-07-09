import AddToWishList from "@/components/AddToWishList";
import TrailerModal from "@/components/TrailerModal";
import {
  castandCrew,
  getIMDBData,
  getTrailer,
  keywords,
  recommendations,
} from "@/lib/data-service";
import { convertMinutesToHours, formatToDollars } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import CastSlider from "../../../../components/castSlider";
import Recommendations from "./movieRecommendation";
export default async function MovieDetailsMobile({ data }) {
  const {
    backdrop_path,
    poster_path,
    budget,
    genres,
    homepage,
    id,
    origin_country,
    original_language,
    original_title,
    overview,
    popularity,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    vote_average,
    vote_count,
    imdb_id,
  } = data;
  const IMDbResponse = await getIMDBData(`${imdb_id}`);
  const castData = await castandCrew(`movie/${id}/credits`);
  const keywordResults = await keywords(`movie/${id}/keywords`);
  const recommendationsData = await recommendations(
    `movie/${id}/recommendations`,
  );
  const movieTrailer = await getTrailer(`movie/${id}/videos`);
  const youtubeTrailer = movieTrailer.results.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube",
  );
  const {
    Rated: rated,
    Director: director,
    Writer: writer,
    Language: language,
    Country: country,
    Awards: awards,
    BoxOffice: boxOffice,
    Ratings: ratings,
    imdbVotes,
  } = IMDbResponse;
  return (
    <section className="lg:hidden">
      <section className="container-layout flex h-[50dvh] md:h-[34dvh]">
        <div
          className="object-fit absolute top-0 left-0 z-[-1] h-[60dvh] w-full bg-cover bg-center bg-no-repeat md:h-[40dvh]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
        <div className="relative mt-[6rem] h-[15rem] w-[10rem]">
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "/no-image.jpg"
            }
            alt={title}
            className="rounded-2xl object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
          />
        </div>
      </section>
      <section className="container-layout">
        <div className="mt-[50px] flex flex-col gap-4">
          <div className="mt-[50px] flex items-center gap-2 sm:mt-[30px]">
            <h1 className="text-secondary font-primary text-3xl">{title}</h1>
            <span className="text-primary font-primary text-base">
              ({release_date.split("-")[0]})
            </span>
          </div>
          <div className="text-primary font-secondary flex flex-col flex-wrap gap-[0.7rem] sm:flex-row">
            <p className="text-secondary border-primary w-fit rounded-sm border-2 px-1.5 text-sm">
              {rated}
            </p>
            <span className="bg-secondary hidden h-[20px] w-[2px] sm:block"></span>
            <p>
              <span className="text-secondary sm:hidden">Runtime:</span>
              <span className="text-sm">
                ({convertMinutesToHours(runtime)})
              </span>
            </p>
            <span className="bg-secondary hidden h-[20px] w-[2px] sm:block"></span>
            <p>
              <span className="text-secondary text-sm sm:hidden">
                Genre(s):
              </span>
              <span className="text-sm">
                {genres.map((genre) => genre.name).join(",  ")}
              </span>
            </p>
            <span className="bg-secondary hidden h-[20px] w-[2px] sm:block"></span>
            <p>
              <span className="text-secondary text-sm sm:hidden">
                Release Date:{" "}
              </span>
              <span className="text-sm">{release_date}</span>
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
          <p className="font-secondary text-primary text-sm">{overview}</p>
          <div className="flex flex-col gap-[0.7rem]">
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
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              release_date={release_date}
              mediaType="movie"
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
                  <span className="text-secondary text-sm">Revenue:</span>
                </div>
                <span className="text-primary text-sm">
                  {formatToDollars(revenue)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">Budget:</span>
                </div>
                <span className="text-primary text-sm">
                  {formatToDollars(budget)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <GoDotFill className="text-secondary" />
                  </span>
                  <span className="text-secondary text-sm">BoxOffice:</span>
                </div>
                <span className="text-primary text-sm">{boxOffice}</span>
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
              {keywordResults.keywords.map((keyword) => (
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
      <Recommendations recommendationsData={recommendationsData} />
    </section>
  );
}
