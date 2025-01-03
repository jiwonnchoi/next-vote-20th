import { http } from "./http";

interface VoteResponse {
  timestamp: string;
  code: number;
  message: string;
  result: Record<string, unknown>;
}

export const postLeaderVote = async (
  userId: number,
  leaderCandidateId: number
): Promise<VoteResponse> => {
  try {
    return await http.post("/api/v1/vote/leader", {
      user_id: userId,
      leader_candidate_id: leaderCandidateId,
    });
  } catch (error) {
    console.error("리더 투표 실패:", error);
    throw error;
  }
};

export const postTeamVote = async (
  userId: number,
  teamCandidateId: number
): Promise<VoteResponse> => {
  try {
    return await http.post("/api/v1/vote/team", {
      user_id: userId,
      team_candidate_id: teamCandidateId,
    });
  } catch (error) {
    console.error("팀 투표 실패:", error);
    throw error;
  }
};
