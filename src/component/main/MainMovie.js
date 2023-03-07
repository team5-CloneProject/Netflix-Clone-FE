import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import YouTube from "react-youtube";
export const MainMovie = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  padding-bottom: 40%;
  
`;
export const MovieImg = styled.div`
  position: absolute;
  padding-bottom: 56.25%;
  width: 100%;
  height: 0;
  top: 0px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.5s;
  > img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
  &::after{
    background: rgba(0, 0, 0, 0.1);
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    content:'';
  }
`;
export const Movieplay = styled(YouTube)`
  position: absolute;
  padding-bottom: 56.25%;
  width: 100%;
  height: 0;
  overflow: hidden;
  > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: -70px;
  }
`;

export const MovieInfo = styled.div`
  position: absolute;
  width: 36%;
  z-index:3;
  left: 60px;
  bottom: 5%;
  word-break: keep-all;
`;
export const MovieTitle = styled.h3`
  font-size: 3.75rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;
export const MovieDesc = styled.p`
  color: #fff;
  font-size: 1.43rem;
  margin-top: 10px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;
export const PlayBtnWarp = styled.div`
  display: flex;
  align-items: center;
  margin-top:25px;
`;
export const PlayBtn = styled.button`
  width: 160px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;
  > span {
    color: #000;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 15px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export const PlayIcon = styled(FaPlay)`
  height: 1.5rem;
  width: 1.5rem;
`;
export const InfoIcon = styled(AiOutlineInfoCircle)`
  height: 1.8rem;
  width: 1.8rem;
  fill:#fff
`;

export const PlayInfo = styled.button`
  width: 200px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(109, 109, 110, 0.7);
  border-radius: 5px;
  outline: 0;
  border: 0;
  margin-left:20px;
  cursor: pointer;
  > span {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 15px;
  }
  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;


export const PlayButton = styled.span`
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:20px;
    > svg{
      width:30px;
      height:30px;
    }
`;
export const Playopsion = styled.div`
    bottom : 5%;
    right : 60px;
    z-index: 2;
    position:absolute;
    display:flex;
    > svg{
      width:30px;
      height:30px;
    }
`;

