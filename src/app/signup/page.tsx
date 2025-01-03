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
    userPart: "",
    member: "",
  });

  const router = useRouter();
  const transformedInfo = useTransformInfo(inputInfo);

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
      inputInfo.password === inputInfo.passwordRe
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
    setInputInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col mt-[8.13rem] px-5">
        <div>SIGNUP</div>
        <hr />

        {/* 파트 선택 */}
        <div>
          <label>
            <input
              type="radio"
              name="userPart"
              value="FE"
              onChange={handleInputChange}
            />
            FRONT-END
          </label>
          <label>
            <input
              type="radio"
              name="userPart"
              value="BE"
              onChange={handleInputChange}
            />
            BACK-END
          </label>
        </div>

        {/* 팀 선택 */}
        <select
          name="userTeam"
          className="border p-2 mb-4"
          value={inputInfo.userTeam}
          onChange={handleInputChange}
        >
          <option value="">팀을 선택해 주세요</option>
          {Object.keys(teamData).map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>

        {/* 이름 선택 */}
        <select
          name="member"
          className="border p-2 mb-4"
          value={inputInfo.member}
          onChange={handleInputChange}
          disabled={!inputInfo.userTeam}
        >
          <option value="">이름을 선택해 주세요</option>
          {inputInfo.userTeam &&
            inputInfo.userPart &&
            teamData[inputInfo.userTeam][inputInfo.userPart]?.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
        </select>

        {/* 입력 필드 */}
        <input
          name="username"
          placeholder="아이디를 입력해 주세요"
          onChange={handleInputChange}
        />
        <input
          name="email"
          placeholder="이메일을 입력해 주세요"
          onChange={handleInputChange}
        />
        <input
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleInputChange}
        />
        <input
          name="passwordRe"
          placeholder="비밀번호를 다시 입력해 주세요"
          onChange={handleInputChange}
        />
        <button onClick={handleSignup}>회원가입하기</button>
      </div>
    </>
  );
}
