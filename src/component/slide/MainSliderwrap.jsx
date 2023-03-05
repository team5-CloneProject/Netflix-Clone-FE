import React from 'react'
import {  Arr, Sliderwrap } from "./style";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SlideItem from "./SlideItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MainSliderwrap() {
  //슬릭 설정
  const settings = {
    dots: false,
    infinite: true, //무한 반복 옵션
    slidesToShow: 6, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 6, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    centerMode: true,
    nextArrow: (
      <Arr>
        <IoIosArrowForward />
      </Arr>
    ),
    prevArrow: (
      <Arr>
        <IoIosArrowBack />
      </Arr>
    ),
  };
  return (
    <Sliderwrap {...settings}>
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
    </Sliderwrap>
  );
}

export default MainSliderwrap;