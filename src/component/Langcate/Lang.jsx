import React from 'react'
import { WishWrap, WishConWrap, WishConli } from "../wish/wixhstyle";
import { Title } from "../main/slide/style";
import { Slidemovie, SlideImg } from "../main/slide/style";

function Lang() {
  return (
    <WishWrap>
      <Title>언어별로 찾아보기</Title>
      <WishConWrap>
        {/* {data.data.response.map((item) => {
          return ( */}
        <WishConli>
          {/* key={item.id} */}
          <div>
            <Slidemovie>
              <SlideImg />
              {/* src={item.poster_path} alt={item.title} */}
            </Slidemovie>
          </div>
          {/* <WishHover item={item} /> */}
        </WishConli>
        {/* );
        })} */}
      </WishConWrap>
    </WishWrap>
  );
}

export default Lang;