import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineLike, AiOutlineDislike,AiOutlineInfo } from "react-icons/ai";
import { MdKeyboardArrowDown} from "react-icons/md";

import styled from "styled-components";
export const Slidehoverbox = styled.div`
  z-index: 999;
  position: absolute;
  right: -30px;
  margin: auto;
  top: -130px;
  background: #181818;
  word-break: break-all;
  box-shadow: rgb(24 24 24 / 50%) 0px 0px 15px 5px;
`;
export const Slideinfo = styled.div`
  width:100%;
  padding:25px;
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
  border:2px solid #fff;
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