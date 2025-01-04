"use client";

import { useState } from "react";
import { LeaderBf, LeaderAf } from "src/assets/icons";
import { BE, FE } from "src/constants/memberData";
import { postLeaderVote } from "src/api/vote";
import { Members } from "src/types/members";
import { Result } from "@components/Result";

export default function LeaderVoting() {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const userPart = localStorage.getItem("userPart");
  const members: Members = userPart === "FE" ? FE.members : BE.members;
  const hasVoted = localStorage.getItem("isVotingLeader") === "true";

  const handleVote = async () => {
    if (!selectedName) return;
    const userId = localStorage.getItem("userId");
    const memberId = members[selectedName]?.id;
    if (!userId || !memberId) return;

    try {
      await postLeaderVote(Number(userId), memberId);
      localStorage.setItem("isVotingLeader", "true");
      window.location.reload();
    } catch (error) {
      console.error("투표 실패:", error);
    }
  };

  if (hasVoted) {
    return <Result type="leader" />;
  }

  return (
    <>
      <div className="relative w-[17.5rem] ml-[8%] mb-4">
        {selectedName ? <LeaderAf /> : <LeaderBf />}
        <span className="Body_2_med absolute top-[4.31rem] left-[4.63rem]">
          {userPart} - LEADER
        </span>
        {selectedName && (
          <button
            onClick={handleVote}
            className="Body_2_med absolute top-9 right-6 bg-black hover:bg-gradient-to-r from-[#1B7BE8] to-[#E5DCB7] bg-clip-text text-transparent "
          >
            투표하기 &gt;
          </button>
        )}
      </div>

      <div className="self-end grid grid-cols-2 gap-x-4 gap-y-8 mr-[13%]">
        {Object.keys(members).map((name) => (
          <div key={name} className="relative group">
            <div
              className={`w-14 h-14 absolute -top-5 -left-1 rounded-full bg-[#AAD2FF] blur-md transition-opacity 
            ${
              selectedName === name
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
            />
            <div
              className="relative Body_1_bold text-center cursor-pointer"
              onClick={() => setSelectedName(name)}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
