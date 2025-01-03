import { http } from "./http";

export const postSignup = async (
  username: string,
  email: string,
  password: string,
  userTeam: string,
  userPart: string
) => {
  try {
    const response = await http.post("/api/v1/auth/sign-up", {
      username,
      email,
      password,
      userTeam,
      userPart,
    });

    return Promise.resolve(response);
  } catch (error) {
    console.error("회원가입 실패:", error);
    return Promise.reject(error);
  }
};

export const postSignin = async (username: string, password: string) => {
  try {
    const response = await http.post("/api/v1/auth/sign-in", {
      username,
      password,
    });

    const { accessToken } = response.data.result;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);

    document.cookie = `accessToken=${accessToken}; expires=${expirationDate.toUTCString()};`;

    return Promise.resolve(response);
  } catch (error) {
    console.error("로그인 실패:", error);
    return Promise.reject(error);
  }
};
