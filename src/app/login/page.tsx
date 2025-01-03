"use client";
import { postSignin } from "@api/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
        const response = await postSignin(
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
        <div>LOGIN</div>
        <hr />
        <input
          name="username"
          placeholder="아이디를 입력해 주세요"
          onChange={handleInputChange}
        />
        <input
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>로그인하기</button>
        <div>
          아직 계정이 없나요?
          <br />
          회원가입하러 가기
        </div>
      </div>
    </>
  );
}
