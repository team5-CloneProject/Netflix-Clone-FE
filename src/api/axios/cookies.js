import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, option) => {
  return cookie.set(name, value, { option });
  };
  
  export const getCookie = (name) => {
  return cookie.get(name);
  };
  
  // setCookie("ACCESS_TOKEN" , BE에서 받는 실제 token값)
  getCookie("ACCESS_TOKEN")