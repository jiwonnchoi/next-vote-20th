import { Profile } from "src/assets/icons";

interface MemberCardProps {
  name: string;
  major: string;
}

export default function MemberCard({ name, major }: MemberCardProps) {
  return (
    <div className="w-full max-w-40 bg-Grey-300 rounded-xl flex flex-row items-center justify-between p-3 gap-[0.44rem] h-20">
      <Profile width="3.1875rem" height="3.1875rem" />
      <div className="flex flex-1 flex-col  text-center">
        <div className="Body_2_reg text-Grey-700">{name}</div>
        <hr className=" bg-Grey-400 mt-[0.19rem] mb-1" />
        <div className="Body_2_reg h-8 text-[12px] flex items-center justify-center text-white">
          {major}
        </div>
      </div>
    </div>
  );
}
