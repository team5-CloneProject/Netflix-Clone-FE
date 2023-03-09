import React from 'react'

import { MovieImg } from '../MainMovie';
import {
  InfoTop,
  InfoIconPlay,
  InfoIcon,
  OutlinePlus,
  OutlineLike,
  OutlineDislike,
  InfoPlay,
} from "../slide/hover";
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
} from "./style";

function MainModal({ setInfoOpen, infoOutBtn }) {
  return (
    <InfoModalWrap setInfoOpen={setInfoOpen}>
      <Modalcon>
        <ModalTop>
          <OutBtn onClick={infoOutBtn}>x</OutBtn>
          <MovieImg>
            <img
              src="https://i1.ytimg.com/vi/Trd-cwwIVhM/maxresdefault.jpg"
              alt=""
            />
          </MovieImg>
          <ModalInfo>
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
          </ModalInfo>
        </ModalTop>
        <ModalBottom>
          <Left>
            <Title>너에게 닿기를</Title>
            <Content>
              음산한 분위기 탓에 친구들과 어울리지 못하는 사와코. 하지만 밝고
              쾌활한 동급생이 먼저 다가와준 그날 이후, 사와코의 생활도 점점 빛이
              나기 시작한다.
            </Content>
          </Left>
          <Right>
            <p>
              <span>언어 : </span>
              JP
            </p>
            <p>
              <span>개봉일 : </span>
              2010-09-25
            </p>
            <p>
              <span>평점 : </span>
              8.1
            </p>
            <p>
              <span>관객수 : </span>
             
            </p>
            <p>
              <span>투표수 : </span>
              
            </p>
          </Right>
        </ModalBottom>
      </Modalcon>
    </InfoModalWrap>
  );
}
export default MainModal