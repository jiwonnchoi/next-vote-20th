import { teamData } from "src/constants/teamData";
type TeamName = keyof typeof teamData;

export interface InputInfo {
  username: string;
  email: string;
  password: string;
  passwordRe: string;
  userTeam: TeamName | "";
  userPart: "FE" | "BE" | "";
  member: string;
}

export interface TeamMembers {
  id: number;
  FE: string[];
  BE: string[];
}

export interface Teams {
  [key: string]: TeamMembers;
}
