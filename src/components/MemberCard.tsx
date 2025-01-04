import { Profile } from "src/assets/icons";

interface MemberCardProps {
  name: string;
  univ: string;
  major: string;
}

export default function MemberCard({ name, univ, major }: MemberCardProps) {
  return (
    <div className="w-full bg-Grey-300 rounded-xl flex flex-row items-center justify-between p-3 gap-[0.44rem]">
      <Profile width="3.1875rem" height="3.1875rem" />
      <div className="flex flex-1 flex-col justify-center text-center">
        <div className="Body_2_reg text-Grey-700">{name}</div>
        <hr className=" bg-Grey-400 mt-[0.19rem] mb-1" />
        <div className="Body_2_reg text-white">{univ}</div>
        <div className="Body_2_reg text-[12px] text-white">{major}</div>
      </div>
    </div>
  );
}
