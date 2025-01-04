"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LeaderBf } from "src/assets/icons";
import { DemoBf } from "src/assets/icons";

export default function Voting() {
  const [userPart, setUserPart] = useState<string | null>(null);

  // 클라이언트 사이드에서만 localStorage 접근
  useEffect(() => {
    setUserPart(localStorage.getItem("userPart"));
  }, []);

  return (
    <>
      <Link href="/voting/leader" className="ml-[8%] mb-10">
        <div className="relative w-[17.5rem]">
          <LeaderBf />
          <span className="Body_2_med absolute top-[4.31rem] left-[4.63rem]">
            {userPart} - LEADER
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
    </>
  );
}
