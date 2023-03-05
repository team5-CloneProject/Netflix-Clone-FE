import React, { useState, useRef } from "react";
import {
  MainMovie,
  MovieInfo,
  MovieTitle,
  MovieDesc,
  PlayBtnWarp,
  PlayBtn,
  PlayIcon,
  InfoIcon,
  PlayInfo,
  MovieImg,
  Movieplay,
  PlayButton,
} from "./MainMovie";

import { MdReplay } from "react-icons/md";

function Movie() {
  //메인 사진 호버시 4초후 재생
  const [isImgplay, setIsImgplay] = useState(false);
  
  const mainImgHandler = () => {
    setTimeout(() => {
      setIsImgplay(true);
    }, 4000);
  };
  const playerRef = useRef(null);
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
    },
  };
  const playVideo = () => {
    setIsImgplay(false);
    playerRef.current.internalPlayer.playVideo();
  };
  return (
    <MainMovie onMouseEnter={mainImgHandler}>
      {isImgplay ? (
        <Movieplay
          opts={videoOptions}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
          videoId="Trd-cwwIVhM"
        />
      ) : (
        <MovieImg>
          <img
            src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
            alt=""
          />
        </MovieImg>
      )}
      <PlayButton onClick={playVideo}>
        <MdReplay />
      </PlayButton>

      <MovieInfo>
        <MovieTitle>너에게 닿기를</MovieTitle>
        <MovieDesc>
          음산한 분위기 탓에 친구들과 어울리지 못하는 사와코. 하지만 밝고 쾌활한
          동급생이 먼저 다가와준 그날 이후, 사와코의 생활도 점점 빛이 나기
          시작한다.
        </MovieDesc>
        <PlayBtnWarp>
          <PlayBtn>
            <PlayIcon />
            <span>재생</span>
          </PlayBtn>
          <PlayInfo>
            <InfoIcon />
            <span>상세 정보</span>
          </PlayInfo>
        </PlayBtnWarp>
      </MovieInfo>
    </MainMovie>
  );
}

export default Movie