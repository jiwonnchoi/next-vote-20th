"use client";
import { postLogin } from "@api/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [inputInfo, setInputInfo] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();
  const isActive =
    inputInfo.username.trim() !== "" && inputInfo.password.trim() !== "";

  const handleLogin = async () => {
    if (isActive) {
      try {
        const response = await postLogin(
          inputInfo.username,
          inputInfo.password
        );
        console.log(response.data);
        router.push("/");
      } catch (error) {
        console.log("로그인 실패:", error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col mt-[8.13rem] px-5">
        <div className="Headline_5">LOGIN</div>
        <div className="w-full h-[0.0625rem] bg-black mt-[0.88rem] mb-9" />
        <input
          className="w-full flex p-3 items-center border border-black Subhead_med"
          name="username"
          placeholder="아이디를 입력해 주세요"
          onChange={handleInputChange}
        />
        <input
          className="w-full flex p-3 items-center border border-black Subhead_med mt-[1.19rem]"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleInputChange}
        />
        <button
          className="flex w-full px-3 py-4 justify-center items-center bg-Grey-900 text-white Headline_4 mt-9"
          onClick={handleLogin}
        >
          로그인하기
        </button>
        <Link
          href="/signup"
          className="flex w-full justify-center text-center Body_1_bold text-Grey-600 mt-[1.19rem] underline decoration-solid"
        >
          아직 계정이 없나요?
          <br />
          회원가입하러 가기
        </Link>
      </div>
    </>
  );
}
