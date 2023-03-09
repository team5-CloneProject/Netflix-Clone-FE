import React, { useState, useRef, useEffect } from "react";
import { WishWrap, WishConWrap, WishConli } from "../wish/wixhstyle";
import { Title } from "../main/slide/style";
import { Slidemovie, SlideImg } from "../main/slide/style";
import { useInfiniteQuery } from 'react-query';
import { MovieApi } from "../../api/api";
function Lang() {
  const containerRef = useRef(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("popular", ({ pageParam = 1 }) =>
    MovieApi.popularGet(pageParam)
  );
  const handleScroll = () => {
    const { current } = containerRef;
    if (current && hasNextPage && !isFetchingNextPage) {
      const { height, scrollTop, scrollHeight } = current;
      if (scrollTop + height >= scrollHeight) {
        fetchNextPage();
      }
    }
  };
  console.log(data);
  return (
    <WishWrap>
      <Title>언어별로 찾아보기</Title>
      <WishConWrap ref={containerRef} onScroll={handleScroll}>
        {data.pages
          .flatMap((page) => page.data.response.results)
          .map((movie) => (
            <WishConli key={movie.id}>
              <Slidemovie>
                <SlideImg src={movie.poster_path} />
              </Slidemovie>
            </WishConli>
          ))}
        {isFetchingNextPage && <div>Loading more...</div>}
        {error && <div>Error: {error.message}</div>}
      </WishConWrap>
    </WishWrap>
  );
}


export default Lang;