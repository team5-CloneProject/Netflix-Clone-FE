import React, { useState } from 'react'
import { WishWrap, WishConWrap, WishConli } from "../wish/wixhstyle";
import { Title } from "../main/slide/style";
import { Slidemovie, SlideImg } from "../main/slide/style";
import { useQuery } from 'react-query';
import WishHover from '../wish/WishHover';
import { MovieApi } from '../../api/api';

function TopRated() {
  const [list, setList] = useState([]);
  const { isLoading, isError, data } = useQuery("toprated", () =>
  MovieApi.topratedGet(2),
);
if (isLoading) {
  return <h1>"성공했습니다!"</h1>;
}
if (isError) {
  return <h1>"오류입니다!"</h1>;
}
console.log(data)

  return (
      <WishWrap>
        <Title>평점높은 영화</Title>
        <WishConWrap>
          {data.data.response.results.map((item) => {
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


export default TopRated;