export interface TeamMembers {
  id: number;
  FE: string[];
  BE: string[];
}

export interface Teams {
  [key: string]: TeamMembers;
}
