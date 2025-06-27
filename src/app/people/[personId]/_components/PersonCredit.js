import { castCredit, crewCredit } from "@/lib/data-service";
import CastCredit from "./castCredit";
import CrewCredit from "./crewCredit";
export default async function PersonCredit({ personId }) {
  const data = await castCredit(`person/${personId}/combined_credits`);
  const castData = data.cast;
  const crew = data.crew;
  return (
    <div className="border-secondary mt-12 w-full border-t-2">
      <div>
        <h2 className="text-primary font-primary md:2xl mt-8 text-xl lg:text-3xl">
          Features
        </h2>
      </div>
      <div>
        <h2 className="text-secondary font-primary mt-8 text-2xl">cast</h2>
        <CastCredit castData={castData} />
      </div>
      <div>
        <h2 className="text-secondary font-primary mt-8 text-2xl">crew</h2>
        <CrewCredit crewData={crew} />
      </div>
    </div>
  );
}
