import { convertMinutesToHours, formatToDollars } from "@/utils/helper";
import { FaPlay, FaRegHeart, FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import Image from "next/image";
import {
  castandCrew,
  getIMDBData,
  getTrailer,
  keywords,
  recommendations,
} from "@/lib/data-service";
import Link from "next/link";
import Recommendations from "./movieRecommendation";
import CastSlider from "../../../../components/castSlider";
import TrailerModal from "@/components/TrailerModal";
export default async function MoviesDetailsDesktop({ data }) {
  const {
    backdrop_path,
    poster_path,
    budget,
    genres,
    homepage,
    id,
    overview,
    production_companies,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
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
    <section className="hidden lg:block">
      <section>
        <div
          className="backdrop flex items-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
        <div className="container-layout h-main flex w-full gap-[3.2rem]">
          <div className="mt-[50px] h-[25rem]">
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : "/no-image.jpg"
              }
              alt={title}
              className="object-fit rounded-2xl"
              width={300}
              height={400}
            />
          </div>
          <div className="mt-[70px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-secondary font-primary text-3xl">{title}</h1>
              <span className="text-primary font-primary text-base">
                ({release_date.split("-")[0]})
              </span>
            </div>
            <div className="text-primary font-secondary flex items-center gap-[0.7rem]">
              <p className="text-secondary border-primary rounded-sm border-2 px-1.5 text-sm">
                {rated}
              </p>
              <span className="bg-secondary block h-[20px] w-[2px]"></span>
              <p className="text-sm">({convertMinutesToHours(runtime)})</p>
              <span className="bg-secondary block h-[20px] w-[2px]"></span>
              <p className="text-sm">
                {genres.map((genre) => genre.name).join(",  ")}
              </p>
              <span className="bg-secondary block h-[20px] w-[2px]"></span>
              <p className="text-sm">{release_date}</p>
              <span className="bg-secondary block h-[20px] w-[2px]"></span>
              <p className="text-sm">{country}</p>
            </div>
            <div className="flex items-center gap-6">
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
            <p className="font-secondary text-primary italic opacity-70">
              {tagline}
            </p>
            <div className="w-full">
              <p className="font-secondary text-primary max-w-[900px] text-justify text-base">
                {overview}
              </p>
            </div>
            <div className="flex items-center gap-[3rem]">
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
              <button className="flex cursor-pointer items-center gap-2 transition-transform duration-300 hover:scale-[1.07]">
                <span>
                  <FaRegHeart />
                </span>
                <span className="font-secondary">Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-layout">
          <div className="font-secondary flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">Status:</span>
              </div>
              <span className="text-primary">{status}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">Awards:</span>
              </div>
              <span className="text-primary">{awards}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">language(s):</span>
              </div>
              <span className="text-primary">{language}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">Revenue:</span>
              </div>
              <span className="text-primary">{formatToDollars(revenue)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">Budget:</span>
              </div>
              <span className="text-primary">{formatToDollars(budget)}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">BoxOffice:</span>
              </div>
              <span className="text-primary">{boxOffice}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span>
                  <GoDotFill className="text-secondary" />
                </span>
                <span className="text-secondary">IMDbVotes:</span>
              </div>
              <span className="text-primary">{imdbVotes}</span>
            </div>
          </div>
          <div className="font-secondary mt-4 flex items-center gap-1">
            <div className="flex items-center gap-1">
              <span>
                <GoDotFill className="text-secondary" />
              </span>
              <span className="text-secondary">Homepage:</span>
            </div>
            <a href={homepage} className="text-primary opacity-80">
              Vist Page
            </a>
          </div>
        </div>

        <div className="container-layout">
          <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
            Cast
          </h1>
          <CastSlider castData={castData} />
        </div>
      </section>
      <section className="mt-10">
        <div className="container-layout">
          <div className="flex justify-between gap-7">
            <div className="w-[50%]">
              <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
                Production comapanies
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {production_companies.map((company) => (
                  <p
                    className="text-primary font-secondary border-secondary w-fit rounded-sm border-2 px-1.5"
                    key={company.id}
                  >
                    {company.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-[50%]">
              <h1 className="text-secondary font-primary md:3xl text-xl lg:text-3xl">
                KeyWords
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {keywordResults.keywords.map((keyword) => (
                  <Link
                    href={`/keyword/${keyword.id}-${keyword.name}`}
                    className="text-primary font-secondary border-secondary w-fit rounded-sm border-2 px-1.5 transition-transform duration-300 hover:scale-[1.05]"
                    key={keyword.id}
                  >
                    {keyword.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Recommendations recommendationsData={recommendationsData} />
      </section>
    </section>
  );
}
