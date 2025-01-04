export interface Member {
  id: number;
  univ: string;
  major: string;
}

export interface Members {
  [key: string]: Member;
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

export interface MemberDataMap {
  [key: string]: {
    members: { [key: string]: Member };
    executives: { [key: string]: Executive };
  };
}
