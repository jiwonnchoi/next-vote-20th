"use client";

import { useEffect, useState } from "react";
import { getLeaderResult, getTeamResult } from "@api/result";
import { ResultM } from "src/assets/icons";
import { teamData } from "src/constants/teamData";

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

  // 굳이 필요하지 않은 부분이긴 한데... 팀이름... 백에서 주는 형식 바꾸고 싶어서...
  const changeTeamName = (apiTeamName: string) => {
    return (
      Object.keys(teamData).find(
        (teamName) => teamName.replace(/\s+/g, "").toUpperCase() === apiTeamName
      ) || apiTeamName
    );
  };

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
          setResults(
            data.results.map((r) => ({
              name: changeTeamName(r.team_name),
              voteCount: r.voteCount,
            }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, [type, userPart]);

  return (
    <>
      <div
        className={`Body_${
          type === "leader" ? 1 : 2
        }_bold relative w-[23rem] mr-7 self-center`}
      >
        <ResultM />
        <div className="absolute w-32 top-[4.85rem] left-[3.7rem] text-center">
          {results[0]?.name} | {results[0]?.voteCount}표
        </div>
        <div className="absolute w-32 text-center top-[14.78rem] right-2">
          {results[1]?.name} | {results[1]?.voteCount}표
        </div>
        <div className="absolute w-32 text-center bottom-8 left-[5.25rem]">
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
