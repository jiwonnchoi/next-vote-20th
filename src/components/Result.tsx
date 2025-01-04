"use client";

import { useEffect, useState } from "react";
import { getLeaderResult, getTeamResult } from "@api/result";
import { ResultM } from "src/assets/icons";

interface ResultProps {
  type: "leader" | "team";
}

interface ResultItem {
  name: string;
  voteCount: number;
}

export const Result = ({ type }: ResultProps) => {
  const [results, setResults] = useState<ResultItem[]>([]);
  const userPart = localStorage.getItem("userPart");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (type === "leader") {
          const data = await getLeaderResult();
          const partResults = data.find((r) => r.part === userPart);
          if (partResults) {
            setResults(
              partResults.results.map((r) => ({
                name: r.leader_name,
                voteCount: r.voteCount,
              }))
            );
          }
        } else {
          const data = await getTeamResult();
          const teamData = data[0];
          if (teamData) {
            setResults(
              teamData.results.map((r) => ({
                name: r.team_name,
                voteCount: r.voteCount,
              }))
            );
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, [type, userPart]);

  return (
    <>
      <div className="relative w-[23rem] mr-7 self-center">
        <ResultM />
        <div className="Body_1_bold absolute w-24 top-[4.85rem] left-[4.75rem] text-center">
          {results[0]?.name} | {results[0]?.voteCount}표
        </div>
        <div className="Body_1_bold absolute w-24 text-center top-[14.78rem] right-6">
          {results[1]?.name} | {results[1]?.voteCount}표
        </div>
        <div className="Body_1_bold absolute w-24 text-center bottom-8 left-[6.25rem]">
          {results[2]?.name} | {results[2]?.voteCount}표
        </div>
      </div>
      <div className="flex flex-col self-center mt-14 ml-40 pb-20 gap-5">
        {results.slice(3).map((result, index) => (
          <span key={index} className="Body_2_bold">
            {index + 4}위. {result.name} | {result.voteCount}표
          </span>
        ))}
      </div>
    </>
  );
};
