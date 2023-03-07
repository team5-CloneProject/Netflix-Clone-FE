import { FaPlay } from "react-icons/fa";
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineLike, AiOutlineDislike,AiOutlineInfo,AiTwotoneLike, AiTwotoneDislike,AiOutlineCheck } from "react-icons/ai";

import { MdKeyboardArrowDown} from "react-icons/md";
export const Slidehoverbox = styled.div`
    z-index: 999;
    position: absolute;
    top: -20px;
    left:0;
    right:0;
    overflow: hidden;
    border-radius: 5px;
    margin: 0 auto;
    box-sizing: border-box;
    background: rgb(24, 24, 24);
    word-break: break-all;
    box-shadow: rgb(24 24 24 / 50%) 0px 0px 15px 5px;
`;
export const Slideinfo = styled.div`
  width:100%;
  padding:30px 30px 40px;
  box-sizing: border-box;
`;
export const InfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InfoIconPlay = styled.button`
  width:38px;
  height:38px;
  display:flex;
  align-items: center;
  justify-content: center;
  background:#fff;
  border-radius: 40px;
  cursor: pointer;
  border: 0;
`
export const InfoIcon = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #fff;
  border-radius: 40px;
  margin-left:10px;
  cursor: pointer;
  background:transparent
  
`;
export const OutlinePlus = styled(AiOutlinePlus)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const OutlineCheck = styled(AiOutlineCheck)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const OutlineLike = styled(AiOutlineLike)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const OutlineDislike = styled(AiOutlineDislike)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const TwotoneLike = styled(AiTwotoneLike)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const TwotoneDislike = styled(AiTwotoneDislike)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;


export const boardArrowDown = styled(MdKeyboardArrowDown)`
  width: 18px;
  height: 18px;
  fill: #fff;
`;
export const InfoPlay = styled(FaPlay)`
  width: 15px;
  height: 15px;
  fill: #181818;
`;
export const InfoBtmTitle = styled.em`
  display: block;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-style: normal;
  margin-top:25px;
`;
export const InfoBtmP = styled.div`
  line-height: 20px;
  max-height: 40px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const InfoI = styled(AiOutlineInfo)`
  height: 20px;
  width: 20px;
  fill:#fff
`;