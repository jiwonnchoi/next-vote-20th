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
    //const { id } = response.data.result;
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
    // const { grantType, access_token, refresh_token } = response.data.result;
    return Promise.resolve(response);
  } catch (error) {
    console.error("로그인 실패:", error);
    return Promise.reject(error);
  }
};
