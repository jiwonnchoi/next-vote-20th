import { authHttp } from "./http";

interface LeaderResult {
  part: string;
  total_count: number;
  results: {
    leader_name: string;
    count: number;
    voteCount: number;
  }[];
}

interface TeamResult {
  total_count: number;
  results: {
    team_name: string;
    count: number;
    voteCount: number;
  }[];
}

export const getLeaderResult = async (): Promise<LeaderResult[]> => {
  try {
    const response = await authHttp.get("/api/v1/leader");
    return response.data.result;
  } catch (error) {
    console.error("리더 투표 결과 조회 실패: ", error);
    throw error;
  }
};

export const getTeamResult = async (): Promise<TeamResult> => {
  try {
    const response = await authHttp.get("/api/v1/team");
    return response.data.result;
  } catch (error) {
    console.error("팀 투표 결과 조회 실패: ", error);
    throw error;
  }
};
