import React from 'react'
import styled from "styled-components";
import { MovieImg } from '../MainMovie';
import {
  InfoTop,
  InfoIconPlay,
  InfoPlay,
  OutlinePlus,
  InfoIcon,
  OutlineLike,
  OutlineDislike,
} from "../slide/hover";
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
        <ModalBottom></ModalBottom>
      </Modalcon>
    </InfoModalWrap>
  );
}
const InfoModalWrap = styled.div`
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  z-index: 99;
  overflow-y: scroll;
`;
const Modalcon = styled.div`
  width: 900px;
  background: #181818;
  top: 100px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
`;
const ModalTop = styled.div`
  position: relative;
  height: 506px;
  
`;
const ModalInfo = styled(InfoTop)`
  position: absolute;
  z-index: 9;
  left: 60px;
  bottom: 60px;
`;
const ModalBottom = styled.div`

`
const OutBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 99;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  line-height: 36px;
  background: #333;
`;

;
export default MainModal