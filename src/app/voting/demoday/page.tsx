import { DemoBf } from "src/assets/icons";
import { teamData } from "src/constants/teamData";

export default function Home() {
  const teams = Object.keys(teamData);

  return (
    <>
      <div className="h-[11.3rem] ml-[13%]">
        <div className="flex flex-col gap-8 w-fit ">
          {teams.map((name) => (
            <div key={name} className="Body_1_bold text-center cursor-pointer">
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="self-end mr-[10%] relative w-[12.6rem]">
        <DemoBf />
        <span className="Body_2_med absolute top-[7.1rem] right-[4.56rem]">
          DEMO - DAY
        </span>
      </div>
    </>
  );
}
