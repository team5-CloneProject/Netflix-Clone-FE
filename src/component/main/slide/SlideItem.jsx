import React from 'react'
import Slidehover from './Slidehover';
import { Slide, Slidemovie, SlideImg } from "./nomal";
const SlideItem = () => {
  return (
    <Slide>
      <div>
        <Slidemovie to="/">
          <SlideImg
            src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
            alt="넷플릭스 인기 콘텐츠"
          />
        </Slidemovie>
      </div>
      <Slidehover />
    </Slide>
  );
};

export default SlideItem;
