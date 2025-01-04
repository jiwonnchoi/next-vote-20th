"use client";

import { useEffect, useState } from "react";
import { getLeaderResult, getTeamResult } from "@api/result";
import Link from "next/link";
import { ResultM, Star, StarRed } from "src/assets/icons";
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
  const [userPart, setUserPart] = useState("");
  useEffect(() => {
    setUserPart(localStorage.getItem("userPart") || "");
  }, []);

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
        }_bold relative w-[23rem] mr-7 self-center scale-100 pc:scale-125 pc:mt-8`}
      >
        <ResultM />
        <Link
          className="Caption_bold absolute bottom-20 right-12  bg-black hover:bg-gradient-to-r from-[#1B7BE8] to-[#E5DCB7] bg-clip-text text-transparent"
          href={"/"}
        >
          메인으로 가기 &gt;
        </Link>
        <Star className="absolute w-28 top-48 -left-3 twinkle" />
        <StarRed className="absolute w-20 top-12 -right-5 twinkle-reverse" />
        <div className="absolute w-32 top-[4.85rem] left-[3.7rem] text-center rank-1">
          {results[0]?.name} | {results[0]?.voteCount}표
        </div>
        <div className="absolute w-32 text-center top-[14.78rem] right-2 rank-2">
          {results[1]?.name} | {results[1]?.voteCount}표
        </div>
        <div className="absolute w-32 text-center bottom-8 left-[5.25rem] rank-3">
          {results[2]?.name} | {results[2]?.voteCount}표
        </div>
      </div>
      <div className="flex flex-col self-center mt-14 ml-40 pb-20 gap-5 scale-100 pc:scale-150 pc:mt-60 pc:ml-96">
        {results.slice(3).map((result, index) => (
          <span key={index} className="Body_2_bold rank-rest">
            {index + 4}위. {result.name} | {result.voteCount}표
          </span>
        ))}
      </div>
    </>
  );
};
