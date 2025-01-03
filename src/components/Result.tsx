"use client";

import { useEffect, useState } from "react";
import { getLeaderResult, getTeamResult } from "@api/result";

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
          const teamData = data[0]; // 첫 번째 요소 사용
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

  const title = type === "leader" ? `${userPart} - LEADER` : "DEMO - DAY";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="Body_2_med text-center mb-8">{title} 투표 결과</h2>
      <div className="flex flex-col gap-6">
        {results.slice(0, 3).map((result, index) => (
          <div key={result.name} className="relative flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              {index + 1}위
            </div>
            <div className="flex-1">
              <div className="Body_1_bold">{result.name}</div>
              <div className="Body_2_med text-gray-600">
                {result.voteCount}표
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4">
          {results.slice(3).map((result, index) => (
            <div key={result.name} className="py-2">
              {index + 4}위. {result.name} | {result.voteCount}표
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
