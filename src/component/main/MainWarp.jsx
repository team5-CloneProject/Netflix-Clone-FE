import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  MainMovieWrap,
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
} from "./style";
function MainWarp() {
  const [isImgplay,setIsImgplay] = useState(false);
  const mainImgHandler = ()=>{
    setTimeout(()=>{
      setIsImgplay(true)
    },2000)
  }
  SwiperCore.use([Autoplay]);
  return (
    <MainMovieWrap>
      <MainMovie onMouseEnter={mainImgHandler}>
        {isImgplay ? (
          <Movieplay>
            <iframe
              frameBorder="0"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
              src="https://www.youtube.com/embed/Trd-cwwIVhM?autoplay=1&mute=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1&loop=1"
            />
          </Movieplay>
        ) : (
          <MovieImg>
            <img
              src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
              alt=""
            />
          </MovieImg>
        )}

        <MovieInfo>
          <MovieTitle>너에게 닿기를</MovieTitle>
          <MovieDesc>
            음산한 분위기 탓에 친구들과 어울리지 못하는 사와코. 하지만 밝고
            쾌활한 동급생이 먼저 다가와준 그날 이후, 사와코의 생활도 점점 빛이
            나기 시작한다.
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
      <List>
        <ListTitle>
          <Title>넷플릭스 인기 콘텐츠</Title>
          <ListLink to="/">
            <span>모두보기</span>
            <ArrowForward />
          </ListLink>
        </ListTitle>
      </List>
    </MainMovieWrap>
  );
}
const List = styled.div`
  margin:58px 0;
  position: relative;
  z-index: 3;
  `
const ListTitle = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 60px;
  
`;
const Title = styled.em`
  display: block;
  line-height: 1;
  margin-right: 20px;
  font-size: 1.56rem;
  font-style: normal;
  font-weight: 500;
`;
const ListLink = styled(Link)`
  line-height: 1;
  font-size: 0;
  > span {
    line-height: 1;
    font-size: 14px;
    vertical-align: 2px;
    color: #54b9c5;
  }
`;
const ArrowForward = styled(IoIosArrowForward)`
  font-size: 14px;
  color: #54b9c5;
`;

export default MainWarp;
