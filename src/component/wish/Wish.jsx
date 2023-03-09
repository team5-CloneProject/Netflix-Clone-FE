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
    return <h1>"성공했습니다!"</h1>;
  }
  if (isError) {
    return <h1>"오류입니다!"</h1>;
  }
  console.log(data);
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