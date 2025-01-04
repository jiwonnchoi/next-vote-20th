import Link from "next/link";
import { OnboardingStars } from "src/assets/icons";
import { getCookie } from "@api/http";

export const dynamic = "force-dynamic";

export default function Home() {
  const isLogin = getCookie("accessToken");
  const isComplete =
    isLogin &&
    window.localStorage.getItem("isVotingTeam") &&
    window.localStorage.getItem("isVotingLeader");

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <OnboardingStars className="absolute w-[16.75rem] top-[12.13rem] right-[-1.3rem]" />
      <div className="Headline_1 absolute top-[10.75rem] left-[5.06rem]">
        2024
        <br />
        세오스 어워즈
      </div>
      <Link
        href="/voting"
        className="Headline_5 absolute top-[22.37rem] right-[1rem]"
      >
        {isComplete ? "결과보러 가기" : "투표하러 가기"} &nbsp;&gt;
      </Link>
    </div>
  );
}
