import React, {useRef} from "react";
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
  } = useInfiniteQuery(
    "popular",
    ({ pageParam = 1 }) => MovieApi.popularGet(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { page, total_pages: totalPages } = lastPage.data;
        return page < totalPages ? page + 1 : undefined;
      },
    }
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
  console.log(status);
  return (
    <WishWrap>
      <Title>언어별로 찾아보기</Title>
      <WishConWrap ref={containerRef} onScroll={handleScroll}>
        
        {data.pages.map((page) => (
          <React.Fragment key={page.data.page}>
            {page.data.results.map((movie) => (
              <WishConli key={movie.id}>
                  <Slidemovie>
                    <SlideImg src={movie.poster_path} />
                  </Slidemovie>
                </WishConli>
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && <div>Loading more...</div>}
        {error && <div>Error: {error.message}</div>}
      </WishConWrap>
    </WishWrap>
  );
}


export default Lang;