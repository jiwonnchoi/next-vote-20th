import { LeaderBf } from "src/assets/icons";
import { FE } from "src/constants/memberData";

export default function Home() {
  const feMembers = Object.keys(FE.members);

  return (
    <>
      <div className="relative w-[17.5rem] ml-[8%] mb-11">
        <LeaderBf />
        <span className="Body_2_med absolute top-[4.31rem] left-[4.63rem]">
          FE - LEADER
        </span>
      </div>
      <div className="self-end grid grid-cols-2 gap-x-4 gap-y-9 mr-[13%]">
        {feMembers.map((name) => (
          <div key={name} className="Body_1_bold text-center cursor-pointer ">
            {name}
          </div>
        ))}
      </div>
    </>
  );
}
