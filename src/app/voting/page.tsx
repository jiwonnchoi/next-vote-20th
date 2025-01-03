import { LeaderBf } from "src/assets/icons";
import { DemoBf } from "src/assets/icons";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-b from-white via-[#D2E6FD] to-white w-full mt-24 flex flex-col pt-16"
      style={{ height: "35.5rem" }}
    >
      <LeaderBf className="w-[17.5rem] ml-[8%] mb-[2.62rem]" />
      <DemoBf className="self-end w-[12.6rem] mr-[10%]" />
    </div>
  );
}
