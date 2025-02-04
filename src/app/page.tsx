"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { OnboardingStars } from "src/assets/icons";
import { getCookie } from "@api/http";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const isLoggedIn = getCookie("accessToken");

  useEffect(() => {
    const hasVotedTeam = localStorage.getItem("isVotingTeam");
    const hasVotedLeader = localStorage.getItem("isVotingLeader");
    const isTeamVoted = hasVotedTeam === "true";
    const isLeaderVoted = hasVotedLeader === "true";

    setIsComplete(!!(isLoggedIn && isTeamVoted && isLeaderVoted));
  }, [isLoggedIn]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <OnboardingStars className="absolute w-[16.75rem] top-[12.13rem] right-[-1.3rem] md:w-[44.3125rem] md:right-[-6rem]" />
      <div className="Headline_1 absolute top-[10.75rem] right-[7.94rem] md:left-auto md:right-[calc(6rem+15%)] md:mt-20 md:text-7xl md:font-black">
        <span className="block md:inline">2024</span>
        <span className="block md:inline">&nbsp;세오스 어워즈</span>
      </div>
      <Link
        href="/voting"
        className="Headline_5 absolute top-[22.37rem] right-[1rem] md:top-[40rem] md:text-5xl md:right-[5.06rem]"
      >
        {isComplete ? "결과보러 가기" : "투표하러 가기"} &nbsp;&gt;
      </Link>
    </div>
  );
}
