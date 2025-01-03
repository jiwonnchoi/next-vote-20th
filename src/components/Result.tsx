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
      {results.map((result, index) => (
        <div key={result.name}>
          <div>
            {result.name}
            {result.voteCount}표{index + 1}위
          </div>
        </div>
      ))}
    </>
  );
};
