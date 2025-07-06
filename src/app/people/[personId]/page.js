import { personDetails } from "@/lib/data-service";
import { calculateAge } from "@/utils/helper";
import Image from "next/image";
import PersonCredit from "./_components/PersonCredit";
export async function generateMetadata({ params }) {
  const paramsId = await params;
  const { name } = await personDetails(`person/${paramsId.personId}`);
  return {
    title: `CinePluse | ${name || "Name"}`,
  };
}
export default async function PersonDetails({ params }) {
  const paramsId = await params;
  const data = await personDetails(`person/${paramsId.personId}`);
  const personInformation = data;
  return (
    <section className="container-layout w-full">
      <div className="mt-[100px] flex flex-col gap-[1.5rem] lg:flex-row lg:gap-[3rem]">
        <div className="w-full lg:w-[20%]">
          <div className="relative">
            <Image
              src={
                personInformation.profile_path
                  ? `https://image.tmdb.org/t/p/w500${personInformation.profile_path}`
                  : "/no-image.jpg"
              }
              alt={personInformation.name}
              className="object-fit rounded-xl"
              width={200}
              height={300}
              priority
            />
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-primary font-primary md:3xl text-2xl lg:text-4xl">
              {personInformation.name}
            </h1>
            <p className="font-secondary text-sm">
              <span className="text-secondary">Known For:</span>
              <span className="text-primary">
                {personInformation.known_for_department}
              </span>
            </p>
            <p className="font-secondary my-2 text-sm">
              <span className="text-secondary">Gender:</span>
              <span className="text-primary">
                {personInformation.gender === 1 ? "Female" : "Male"}
              </span>
            </p>
            <p className="font-secondary my-2 text-sm">
              <span className="text-secondary">BirthDate:</span>
              <span className="text-primary">
                {personInformation.birthday}(
                {calculateAge(personInformation.birthday)} years old)
              </span>
            </p>
            <p className="font-secondary my-2 text-sm">
              <span className="text-secondary">Place of Birth:</span>
              <span className="text-primary">
                {personInformation.place_of_birth}
              </span>
            </p>
            <p className="font-secondary my-2 text-sm">
              <span className="text-secondary">Also Know as:</span>
              <span className="text-primary">
                {personInformation.also_known_as.map((know) => know).join(", ")}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[80%]">
          <div className="w-full text-center lg:text-start">
            <h2 className="text-secondary font-primary md:3xl text-2xl lg:text-4xl">
              BioGraphy
            </h2>
            <p className="text-primary font-secondary mt-[20px] max-w-full text-justify text-sm lg:max-w-[1100px]">
              {personInformation.biography}
            </p>
          </div>
          <PersonCredit personId={paramsId.personId} />
        </div>
      </div>
    </section>
  );
}
