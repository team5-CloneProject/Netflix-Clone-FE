import { baseURL, instance } from "../axios/axios";

export const Login = async (payload) => {
  try {
    const response = await instance.post("/api/member/login", {
      email: payload.email,
      password: payload.password,
    });
    console.log(response)
    return response;

  } catch (error) {
    return error.data;
  }
};

export const Signup = async (payload) => {
  try {
    const data = await instance.post('/api/member/signup', {
      email: payload.email,
      password: payload.password,
      nickname: payload.nickname,
    });
    console.log(data);
    return data;
  } catch (error) {
    return error.data;
  }
};

export const CheckEmail = async (payload) => {
  try {
    const response = await instance.get(`/api/member`, {
      params: { email: payload },
    });
    console.log(response);
    return response.data.success;
  } catch (error) {
    return error.data;
  }
};
