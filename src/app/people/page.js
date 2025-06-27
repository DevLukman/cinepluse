import { tvShows } from "@/lib/data-service";
import Link from "next/link";
import Image from "next/image";
import GridContainer from "@/components/GridContainer";
export const metadata = {
  title: "CINEPLUSE | People",
  description: "Popular Actors of CINEPLUSE",
};
export default async function TopRated() {
  const data = await tvShows("person/popular");
  const people = data.results;
  return (
    <section className="min-h-main mt-[50px] w-full">
      <div className="container-layout">
        <h1 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
          popular
        </h1>
        <GridContainer>
          {people.map((person) => (
            <div
              key={person.id}
              className="border-primary overflow-hidden border-2 pb-2"
            >
              <div className="relative transition-transform duration-300 hover:scale-[1.05]">
                <Link href={`/people/${person.id}`}>
                  <Image
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                        : "/no-image.jpg"
                    }
                    alt={person.name}
                    className="object-fit"
                    width={300}
                    height={400}
                    priority
                  />
                </Link>
              </div>
              <div className="mt-2 flex w-full flex-col items-center justify-center">
                <p className="text-primary font-secondary text-base">
                  {person.name}
                </p>
                <p className="text-secondary font-secondary text-base">
                  Role: {person.known_for_department}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
