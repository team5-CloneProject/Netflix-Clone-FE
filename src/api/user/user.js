import { instance } from "../axios/axios";

export const Login = async (payload) => {
  try {
    const response = await instance.post("/api/member/login", {
      email: payload.id,
      password: payload.password,
    });

    return response;
  } catch (error) {
  }
};

export const Signup = async (payload) => {
  try {
    const data = await instance.post("/api/member/signup", {
      name: payload.id,
      password: payload.password,
      email: payload.email,
    });
    return data;
  } catch (error) {
  }
};

export const CheckEmail = async (payload) => {
  console.log(payload);
  try {
    const response = await instance.get(`/api/member`, {
      params: { email: payload },
    });
    console.log(response.data);
    return response.data.success;
  } catch (error) {
  }
};
