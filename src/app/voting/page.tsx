import Link from "next/link";
import { LeaderBf } from "src/assets/icons";
import { DemoBf } from "src/assets/icons";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-b from-white via-[#D2E6FD] to-white w-full mt-24 flex flex-col pt-16"
      style={{ height: "35.5rem" }}
    >
      <Link href="/voting/leader" className="ml-[8%] mb-10">
        <div className="relative w-[17.5rem]">
          {" "}
          <LeaderBf />
          <span className="Body_2_med absolute top-[4.31rem] left-[4.63rem]">
            FE - LEADER
          </span>
        </div>
      </Link>
      <Link href="/voting/demoday" className="self-end mr-[10%]">
        <div className="relative w-[12.6rem]">
          <DemoBf />
          <span className="Body_2_med absolute top-[7.1rem] right-[4.56rem]">
            DEMO - DAY
          </span>
        </div>
      </Link>
    </div>
  );
}
