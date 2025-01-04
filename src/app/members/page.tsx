"use client";

import { useState } from "react";
import { MembersMenu } from "src/assets/icons";
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
    <>
      <div className="flex flex-col w-full px-5">
        <MembersMenu className="absolute w-[21.8125rem] top-[6.25rem] right-0 mr-4" />

        {/* 파트 탭 */}
        <div className="relative flex justify-end">
          <div className="flex flex-row w-[19.8125rem] h-[2.875rem] p-3 justify-between items-center mt-[9.63rem]">
            {parts.map((part) => (
              <button
                key={part}
                className={`Body_2_bold ${
                  selectedPart === part ? "underline underline-offset-8" : ""
                }`}
                onClick={() => setSelectedPart(part)}
              >
                {part}
              </button>
            ))}
          </div>
        </div>

        {/* 그리드 */}
        <div className="flex flex-col w-fit mt-12 self-center ">
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
    </>
  );
}
