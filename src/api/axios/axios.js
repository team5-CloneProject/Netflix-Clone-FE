import axios from "axios";
import { getCookie } from "./cookies";


export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_CL_SERVER_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
instance.interceptors.request.use(
  (config) => {
    if (config.headers === undefined) return;
    const access_token = getCookie("ACCESS_TOKEN")
    config.headers["Authorization"] = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
