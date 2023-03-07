import {
  Arr,
  Sliderwrap,
  Slide,
  Slidemovie,
  SlideImg,
  ArrowForward,
  ListLink,
  ListTitle,
  Title,
  List,
} from "../style";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import React from "react";
import Topratedhover from "./Topratedhover";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieApi } from "../../../../api/api";
import { useQuery } from "react-query";
function Toprated() {
  const { isLoading, isError, data } = useQuery("toprated", () =>
    MovieApi.topratedGet(1)
  );
  if (isLoading) {
    return <h1>"성공했습니다!"</h1>;
  }
  if (isError) {
    return <h1>"오류입니다!"</h1>;
  }
  //console.log(data);
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
    <List>
      <ListTitle>
        <Title>최다 평점 콘텐츠</Title>
        <ListLink to="/">
          <span>모두보기</span>
          <ArrowForward />
        </ListLink>
      </ListTitle>
      <Sliderwrap {...settings}>
        {data.data.response.results.map((item) => {
          return (
            <Slide key={item.id}>
              <div>
                <Slidemovie to="/">
                  <SlideImg src={item.poster_path} alt={item.title} />
                </Slidemovie>
              </div>
              <Topratedhover item={item} />
            </Slide>
          );
        })}
      </Sliderwrap>
    </List>
  );
}

export default Toprated;
