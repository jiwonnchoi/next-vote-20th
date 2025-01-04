"use client";

import { useState } from "react";
import { MembersMenu, MembersMenuPc } from "src/assets/icons";
import MemberCard from "@components/MemberCard";
import { FE, BE, PM, Design } from "src/constants/memberData";

//types
import { Member } from "src/types/members";
import { Executive } from "src/types/members";
import { MemberDataMap } from "src/types/members";

const memberDataMap: MemberDataMap = {
  "FRONT - END": FE,
  "BACK - END": BE,
  PM,
  DESIGN: Design,
};

export default function Members() {
  const [selectedPart, setSelectedPart] = useState("PM");
  const memberData = memberDataMap[selectedPart]?.members || {};
  const executiveData = memberDataMap[selectedPart]?.executives || {};
  const parts = ["PM", "DESIGN", "FRONT - END", "BACK - END"];

  return (
    <div className="flex flex-col w-full px-5 pc:ml-10">
      <MembersMenu className=" pc:hidden absolute w-[21.8125rem] top-[6.25rem] right-0 mr-4" />
      <MembersMenuPc className="hidden pc:block absolute w-[14.8125rem] ml-[2.37rem] mt-[11.44rem]" />

      {/* 파트 탭 */}
      <div className="relative flex justify-end pc:justify-start pc:absolute">
        <div className="flex flex-row pc:flex-col pc:w-[9.6875rem] pc:h-[18rem] pc:items-start pc:mt-[12.2rem] pc:p-5 pc:ml-[4.06rem] w-[19.8125rem] h-[2.875rem] p-3 justify-between items-center mt-[9.63rem]">
          {parts.map((part) => (
            <button
              key={part}
              className={`Body_2_bold pc:Subhead_1_bold pc:text-left ${
                selectedPart === part
                  ? "underline underline-offset-6 font-semibold"
                  : ""
              }`}
              onClick={() => setSelectedPart(part)}
            >
              {part}
            </button>
          ))}
        </div>
      </div>

      {/* 그리드 */}
      <div className="flex flex-col w-fit mt-12 self-center pc:mt-[10.69rem] pc:ml-80">
        <div className="Headline_1 mb-[1.06rem]">20th MEMBERS</div>
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[0.88rem] ">
          {Object.entries(memberData).map(
            ([name, details]: [string, Member]) => (
              <MemberCard
                key={details.id || name}
                name={name}
                major={details.major}
              />
            )
          )}
        </div>
        <div className="Headline_1 mt-12 mb-[1.06rem]">EXECUTIVES</div>
        <div className="grid grid-cols-2 gap-[0.88rem] mb-24">
          {Object.entries(executiveData).map(
            ([name, details]: [string, Executive]) => (
              <MemberCard key={name} name={name} major={details.major} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
