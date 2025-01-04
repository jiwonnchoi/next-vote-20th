"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LeaderBf } from "src/assets/icons";
import { DemoBf } from "src/assets/icons";

export default function Voting() {
  const [userPart, setUserPart] = useState("");
  useEffect(() => {
    setUserPart(localStorage.getItem("userPart") || "");
  }, []);

  return (
    <>
      <Link
        href="/voting/leader"
        className="ml-[8%] mb-10 scale-100 pc:scale-[1.8] pc:self-center pc:mr-[35%] pc:mt-20"
      >
        <div className="relative w-[17.5rem]">
          <LeaderBf />
          <span className="Body_2_med absolute top-[4.31rem] left-[4.63rem]">
            {userPart} - LEADER
          </span>
        </div>
      </Link>
      <Link
        href="/voting/demoday"
        className="self-end mr-[10%] scale-100 pc:scale-[1.8] pc:self-center pc:ml-[40%] pc:mt-20"
      >
        <div className="relative w-[12.6rem]">
          <DemoBf />
          <span className="Body_2_med absolute top-[7.1rem] right-[4.56rem]">
            DEMO - DAY
          </span>
        </div>
      </Link>
    </>
  );
}
