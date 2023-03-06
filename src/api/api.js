import instance from "./instance";

//인기순 영화 목록 조회
const movieGet = async (page)=>{
    const response = await instance.get(`/popular?page={page}`)
    console.log(page)
    return response.page;
}
export {movieGet}