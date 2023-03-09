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
        <ModalBottom></ModalBottom>
      </Modalcon>
    </InfoModalWrap>
  );
}
export default MainModal