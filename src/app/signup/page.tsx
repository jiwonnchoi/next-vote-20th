"use client";
import { postSignup } from "@api/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { teamData } from "src/constants/teamData";
import { useTransformInfo } from "src/hooks/useTransformInfo";

type TeamName = keyof typeof teamData;

export default function Signup() {
  const [inputInfo, setInputInfo] = useState<{
    username: string;
    email: string;
    password: string;
    passwordRe: string;
    userTeam: TeamName | "";
    userPart: "FE" | "BE" | "";
    member: string;
  }>({
    username: "",
    email: "",
    password: "",
    passwordRe: "",
    userTeam: "",
    userPart: "FE",
    member: "",
  });

  const router = useRouter();
  const transformedInfo = useTransformInfo(inputInfo);
  const isPasswordConfirmed = inputInfo.password === inputInfo.passwordRe;

  const [isEmailValid, setIsEmailValid] = useState(false);
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const handleCheckEmail = (email: string) => {
    if (pattern.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const isActive = () => {
    const requiredFields = [
      inputInfo.username,
      inputInfo.email,
      inputInfo.password,
      inputInfo.passwordRe,
      inputInfo.userTeam,
      inputInfo.userPart,
      inputInfo.member,
    ];
    return (
      requiredFields.every((field) => field.trim() !== "") &&
      isPasswordConfirmed
    );
  };

  const handleSignup = async () => {
    if (isActive()) {
      try {
        const response = await postSignup(
          inputInfo.username,
          inputInfo.email,
          inputInfo.password,
          transformedInfo.userTeam,
          inputInfo.userPart
        );
        console.log(response.data.result);
        router.push("/login");
      } catch (error) {
        console.log("회원가입 실패:", error);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      setIsEmailValid(handleCheckEmail(value)); // 이메일 유효성 검사
    }

    setInputInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col mt-[8.13rem] px-5 overflow-hidden">
        <div className="Headline_5">SIGNUP</div>
        <div className="w-full h-[0.0625rem] bg-black mt-[0.88rem] mb-9" />

        <div className="flex flex-col">
          {/* 파트 선택 */}
          <div className="flex w-full h-[3.1875rem] flex-row">
            <label
              htmlFor="frontend"
              className={`flex w-[50%] border border-Grey-900 rounded-l-xl justify-center items-center cursor-pointer ${
                inputInfo.userPart === "FE" ? "bg-Grey-900 text-white" : ""
              }`}
            >
              <input
                id="frontend"
                type="radio"
                name="userPart"
                value="FE"
                onChange={handleInputChange}
                className="hidden"
              />
              FRONT-END
            </label>
            <label
              htmlFor="backend"
              className={`flex w-[50%] border border-Grey-900 rounded-r-xl justify-center items-center cursor-pointer ${
                inputInfo.userPart === "FE" ? "" : "bg-Grey-900 text-white"
              }`}
            >
              <input
                id="backend"
                type="radio"
                name="userPart"
                value="BE"
                onChange={handleInputChange}
                className="hidden"
              />
              BACK-END
            </label>
          </div>

          <div className="flex flex-row w-full gap-4 mt-[1.88rem]">
            {/* 팀 선택 */}
            <select
              name="userTeam"
              className="w-[50%] Body_1_med border-0 border-b border-black focus:outline-none py-3 px-1.5"
              value={inputInfo.userTeam}
              onChange={handleInputChange}
            >
              <option value="" className="text-Grey-600 ">
                팀을 선택해 주세요
              </option>
              {Object.keys(teamData).map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>

            {/* 이름 선택 */}
            <select
              name="member"
              className="w-[50%] Body_1_med border-0 border-b border-black focus:outline-none py-3 px-1.5"
              value={inputInfo.member}
              onChange={handleInputChange}
              disabled={!inputInfo.userTeam}
            >
              <option value="" className="text-Grey-600">
                이름을 선택해 주세요
              </option>
              {inputInfo.userTeam &&
                inputInfo.userPart &&
                teamData[inputInfo.userTeam][inputInfo.userPart]?.map(
                  (name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  )
                )}
            </select>
          </div>

          {/* 입력 필드 */}
          <div className="flex flex-row w-full justify-between items-center mt-[1.88rem]">
            <span className="Subhead_2_bold flex w-24">아이디</span>
            <input
              className="flex-1 min-w-64 Body_1_med placeholder-Grey-600 border-0 border-b border-black focus:outline-none p-3"
              name="username"
              placeholder="아이디를 입력해 주세요"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-row w-full justify-between items-center mt-[1.88rem]">
            <span className="Subhead_2_bold flex w-24">이메일</span>
            <input
              className="flex-1 min-w-64 Body_1_med placeholder-Grey-600 border-0 border-b border-black focus:outline-none p-3"
              name="email"
              placeholder="이메일을 입력해 주세요"
              onChange={handleInputChange}
            />
          </div>
          {inputInfo.email && !isEmailValid ? (
            <div className="flex w-full Body_2_bold text-Red py-2 px-1 ml-24">
              이메일 형식이 올바르지 않습니다
            </div>
          ) : (
            <div className="flex w-full Body_2_bold py-2 px-1 ml-24">
              &nbsp;
            </div>
          )}

          <div className="flex flex-row w-full justify-between items-center">
            <span className="Subhead_2_bold flex w-24">비밀번호</span>
            <input
              className="flex-1 min-w-64 Body_1_med placeholder-Grey-600 border-0 border-b border-black focus:outline-none p-3"
              name="password"
              placeholder="비밀번호를 입력해 주세요"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-row w-full justify-between items-center mt-[1.88rem]">
            <span className="Subhead_2_bold flex w-20 mr-4">
              비밀번호 재입력
            </span>
            <input
              className="flex-1 min-w-64 Body_1_med placeholder-Grey-600 border-0 border-b border-black focus:outline-none p-3"
              name="passwordRe"
              placeholder="비밀번호를 다시 입력해 주세요"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {inputInfo.passwordRe && !isPasswordConfirmed ? (
          <div className="flex w-full Body_2_bold text-Red py-2 px-1 ml-24">
            비밀번호가 일치하지 않습니다
          </div>
        ) : (
          <div className="flex w-full Body_2_bold py-2 px-1 ml-24">&nbsp;</div>
        )}
        <button
          className="flex w-full px-3 py-4 justify-center items-center bg-Grey-900 text-white Headline_4 mt-[0.69rem]"
          onClick={handleSignup}
        >
          회원가입하기
        </button>
      </div>
    </>
  );
}
