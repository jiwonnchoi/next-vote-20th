"use client";
import { postLogin } from "@api/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

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
        if (axios.isAxiosError(error)) {
          const { response } = error;

          if (response) {
            const { status, data } = response;

            if (status === 404 && data.code === 3001) {
              setIsInvalidUser(true);
              setIsWrongPassword(false);
            } else if (status === 400 && data.code === 3003) {
              setIsWrongPassword(true);
              setIsInvalidUser(false);
            } else {
              console.log(error);
            }
          }
        } else {
          console.log(error);
        }
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

  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  // 입력값 재입력 시 문구 가림
  useEffect(() => {
    setIsInvalidUser(false);
    setIsWrongPassword(false);
  }, [inputInfo.username, inputInfo.password]);

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
        {isInvalidUser ? (
          <div className="flex w-full Body_2_bold text-Red py-2 px-1">
            해당 아이디를 가진 계정이 없습니다
          </div>
        ) : (
          <div className="flex w-full h-[1.19rem]"></div>
        )}
        <input
          className="w-full flex p-3 items-center border border-black Subhead_med"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleInputChange}
        />
        {isWrongPassword ? (
          <div className="flex w-full Body_2_bold text-Red py-2 px-1 mb-[1.13rem]">
            비밀번호가 일치하지 않습니다
          </div>
        ) : (
          <div className="flex w-full h-9"></div>
        )}
        <button
          className="flex w-full px-3 py-4 justify-center items-center bg-Grey-900 text-white Headline_4"
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
