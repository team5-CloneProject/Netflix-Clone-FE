import React, { useState, useRef, useEffect } from "react";
import { MainMovie, MovieInfo, MovieTitle, MovieDesc, PlayBtnWarp, PlayBtn, PlayIcon, InfoIcon, PlayInfo, MainMovieImg, Movieplay,PlayButton, Playopsion,
} from "./MainMovie";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { MdReplay } from "react-icons/md";
import MainModal from "./MainModal/MainModal"

function Movie() {
  const [isImgplay, setIsImgplay] = useState(false); //5초후 재생
  const [timeoutId, setTimeoutId] = useState(null); // setTimeout 함수가 반환하는 id 값을 저장
  const mainImgHandler = () => {
    const id = setTimeout(() => {
      if (!infoOpen) {
        setIsImgplay(true);
      }
    }, 3000);
    setTimeoutId(id);
  };
  const playerRef = useRef(null);
  const playVideo = () => { //다시시작
    setIsImgplay(false);
    playerRef.current.playVideo();
  };
  const [isMuted, setIsMuted] = useState(true); //볼륨조절
  const toggleMute = () => {
    setIsMuted(!isMuted);
    playerRef.current.internalPlayer.setVolume(isMuted ? 0 : 100);
  };
  
  const videoOptions = {
    playerVars: {
      autoplay: 1, //자동재생
      controls: 0, //관련영상표시 x
      end: 90, //30초까지만 재생
      rel: 0, //컨트롤 바에 로고 없앰
      //mute: isMuted,
    },
  };


  //모달 관련..........
  const [infoOpen, setInfoOpen] = useState(false);
  const infoBtn = () => {
    setInfoOpen(true)
    if (timeoutId) {
      clearTimeout(timeoutId); //setTimeout 함수 취소
    }
    setIsImgplay(false);
  };
  const infoOutBtn=()=>{
    setInfoOpen(false);
  }
  useEffect(() => {
    if (infoOpen) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "";
    }
  }, [infoOpen]);
  return (
    <MainMovie onMouseEnter={mainImgHandler}>
      {isImgplay ? (
        <Movieplay
          ref={playerRef} // playerRef 설정
          opts={videoOptions}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
          videoId="Trd-cwwIVhM"
          isMuted={isMuted}
        />
      ) : (
        <MainMovieImg>
          <img
            src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
            alt=""
          />
        </MainMovieImg>
      )}
      <Playopsion>
        {/* //다시시작 */}
        <PlayButton onClick={playVideo}>
          <MdReplay />
        </PlayButton>
        {/* //소리관련 */}
        <PlayButton>
          {isMuted ? (
            <HiOutlineVolumeOff onClick={toggleMute} />
          ) : (
            <HiOutlineVolumeUp onClick={toggleMute} />
          )}
        </PlayButton>
      </Playopsion>
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
          <PlayInfo onClick={() => infoBtn()}>
            <InfoIcon />
            <span>상세 정보</span>
          </PlayInfo>
        </PlayBtnWarp>
      </MovieInfo>
      {infoOpen && (
        <MainModal setInfoOpen={setInfoOpen} infoOutBtn={infoOutBtn} />
      )}
    </MainMovie>
  );
}


export default Movie