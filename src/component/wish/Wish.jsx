import React from 'react'
import { WishWrap, WishConWrap, WishConli } from "./wixhstyle";
import { Title } from '../main/slide/style';
import { Slidemovie, SlideImg } from "../main/slide/style";
import { useQuery } from 'react-query';
import { MovieWish } from '../../api/api';
import WishHover from './WishHover';

function Wish() {
  const { isLoading, isError, data } = useQuery("fulfilled", MovieWish.MovieWishlist );
  if (isLoading) {
    console.log("로딩중..")
    return;
  }
  if (isError) {
    alert("잘못된 접근입니다. 다시 시도해주십시오!")
    return;
  }
  return (
    <WishWrap>
      <Title>내가찜한콘텐츠</Title>
      <WishConWrap>
        {data.data.response.map((item) => {
          return (
            <WishConli key={item.id}>
              <div>
                <Slidemovie>
                  <SlideImg src={item.poster_path} alt={item.title} />
                </Slidemovie>
              </div>
              <WishHover item={item} />
            </WishConli>
          );
        })} 
      </WishConWrap>
    </WishWrap>
  );
}



export default Wish;