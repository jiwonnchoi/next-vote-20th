import { teamData } from "src/constants/teamData";

type TeamName = keyof typeof teamData;

export const useTransformInfo = (inputInfo: { userTeam: TeamName | "" }) => {
  const transformedTeam = inputInfo.userTeam
    ? inputInfo.userTeam.replace(/\s+/g, "").toUpperCase()
    : "";
  return { ...inputInfo, userTeam: transformedTeam };
};
