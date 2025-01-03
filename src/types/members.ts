export interface Member {
  id: number;
  univ: string;
  major: string;
}

export interface Executive {
  univ: string;
  major: string;
}

export interface PartMembers {
  members: {
    [key: string]: Member;
  };
  executives: {
    [key: string]: Executive;
  };
}
