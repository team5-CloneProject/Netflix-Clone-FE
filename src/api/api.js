import { instance } from "./axios/axios";
//슬라이드에 들어갈 녀석들....
export const MovieApi={
    popularGet:(page)=>instance.get(`/api/movie/popular?page=${page}`),//영화 인기순
    nowplayingGet:(page)=>instance.get(`/api/movie/nowplaying?page=${page}`),//지금 상영되는순
    tvpopularGet:(page)=>instance.get(`/api/movie/tvpopular?page=${page}`),//티비 인기순
    topratedGet:(page)=>instance.get(`/api/movie/toprated?page=${page}`),//영화 평점순
    searchGet:(page,search)=>instance.get(`/api/movie/search?page=${page}&query=${search}`),//영화 검색순
}
export const MovieGood={
    Movielike:(likeBtn)=>instance.post(`/api/movie/like/${likeBtn.id}`,likeBtn),//좋아요 
    Moviedislike:(disLikeBtn)=>instance.post(`/api/movie/dislike/${disLikeBtn.id}`,disLikeBtn),//싫어요
}

export const MovieWish={
    MovieWishAdd:(WishAddBtn)=>instance.post(`/api/post/like/${WishAddBtn.id}`),//찜하기 추가/삭제
    MovieWishlist:()=>instance.get(`/api/post/like`)//찜목록조회
}


