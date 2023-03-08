import { instance } from "../axios/axios";

export const MypageEdit = async (payload) => {
  try {
    const response = await instance.post("/api/mypage", {
        nickname : payload.nickname,
        images : payload.images
    }, 
    {
      headers: {
      "Content-Type": `multipart/form-data; `,
      }
    });
    console.log("업로드 성공")
    return response;

  } catch (error) {
    return error.data;
  }
};

export const MypageGet = async (payload) => {
  try {
    const {data} = await instance.get("/api/mypage");
    // console.log(data.response)
    return data.response;

  } catch (error) {
    return error.data;
  }
};