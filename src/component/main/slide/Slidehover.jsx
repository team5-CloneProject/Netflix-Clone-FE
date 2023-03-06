import React from "react";
import { Slidemovie, SlideImg } from "./nomal";
import {
  Slidehoverbox,
  Slideinfo,
  InfoTop,
  InfoIconPlay,
  InfoIcon,
  OutlinePlus,
  OutlineLike,
  OutlineDislike,
  InfoBtmTitle,
  InfoBtmP,
  InfoPlay,
  InfoI,
} from "./hover";

const Slidehover = () => {
  return (
    <Slidehoverbox className="slidehover">
      <Slidemovie>
        <SlideImg
          src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
          alt="넷플릭스 인기 콘텐츠"
        />
      </Slidemovie>
      <Slideinfo>
        <InfoTop>
          <InfoTop>
            <InfoIconPlay>
              <InfoPlay />
            </InfoIconPlay>
            <InfoIcon>
              <OutlinePlus />
            </InfoIcon>
            <InfoIcon>
              <OutlineLike />
            </InfoIcon>
            <InfoIcon>
              <OutlineDislike />
            </InfoIcon>
          </InfoTop>
          <InfoIcon>
            <InfoI />
          </InfoIcon>
        </InfoTop>
        <div>
          <InfoBtmTitle>제목을 적어주세요</InfoBtmTitle>
          <InfoBtmP>
            내용을 적어주세요 내용을 적어주세요 내용을 적어주세요 내용을
            적어주세요
          </InfoBtmP>
        </div>
      </Slideinfo>
    </Slidehoverbox>
  );
};

export default Slidehover;
