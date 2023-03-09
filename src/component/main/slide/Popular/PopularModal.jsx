import React from 'react'
import { MovieImg } from '../../MainMovie';
import {
  InfoTop,
  InfoIconPlay,
  InfoPlay,
  OutlinePlus,
  InfoIcon,
  OutlineLike,
  TwotoneLike,
  OutlineDislike,
  TwotoneDislike,
  OutlineCheck
} from "../hover";
import {
  InfoModalWrap,
  Modalcon,
  ModalTop,
  ModalInfo,
  ModalBottom,
  OutBtn,
  Left,
  Right,
  Title,
  Content,
} from "../../MainModal/style";
function PopularModal({
  setInfoOpen,
  infoOutBtn,
  item,
  like,
  likeHander,
  disLikeHander,
  disLike,
  WishAddHander,
  wishAdd
}) {
  return (
    <InfoModalWrap setInfoOpen={setInfoOpen} item={item}>
      <Modalcon>
        <ModalTop>
          <OutBtn onClick={infoOutBtn}>x</OutBtn>
          <MovieImg>
            <img src={item.poster_path} alt={item.title} />
          </MovieImg>
          <ModalInfo>
            <InfoTop>
              <InfoIconPlay>
                <InfoPlay />
              </InfoIconPlay>
              <InfoIcon onClick={() => WishAddHander(item.id)}>
              {wishAdd ? <OutlineCheck /> : <OutlinePlus />}
            </InfoIcon>
              <InfoIcon onClick={() => likeHander(item.id, item.status)}>
                {like ? <TwotoneLike /> : <OutlineLike />}
              </InfoIcon>
              <InfoIcon onClick={() => disLikeHander(item.id, item.status)}>
                {disLike ? <TwotoneDislike /> : <OutlineDislike />}
              </InfoIcon>
            </InfoTop>
          </ModalInfo>
        </ModalTop>
        <ModalBottom>
          <Left>
            <Title>{item.title}</Title>
            <Content>{item.overview}</Content>
          </Left>
          <Right>
            <p>
              <span>언어 : </span>
              {item.original_language}
            </p>
            <p>
              <span>개봉일 : </span>
              {item.release_date}
            </p>
            <p>
              <span>평점 : </span>
              {item.vote_average}
            </p>
            <p>
              <span>관객수 : </span>
              {item.popularity}
            </p>
            <p>
              <span>투표수 : </span>
              {item.vote_count}
            </p>
          </Right>
        </ModalBottom>
      </Modalcon>
    </InfoModalWrap>
  );
}

export default PopularModal