import styled, {keyframes} from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const List = styled.div`
  margin: 80px 0 0;
  position: relative;
  z-index: 3;
  
`;
export const ListTitle = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 60px;
  margin-bottom:20px;
  &:hover > a {display:block;}
`;
export const Title = styled.em`
  display: block;
  line-height: 1;
  margin-right: 20px;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
`;
const fadein = keyframes`
  from { 
   opacity: 0%;
  }
  to {
    opacity: 100%;
  }
  `;
export const ListLink = styled(Link)`
  line-height: 1;
  font-size: 0;
  display:none;
  animation: ${fadein} 0.3s;
  > span {
    line-height: 1;
    font-size: 14px;
    vertical-align: 2px;
    color: #54b9c5;
  }
`;
export const ArrowForward = styled(IoIosArrowForward)`
  font-size: 14px;
   color: #54b9c5;
 `;

export const Sliderwrap = styled(Slider)`
  width: calc(100% + 5px);
  .slick-list{
    overflow: visible;
  }
  .slick-arrow {
    height: 100%;
    z-index: 99;
    width: 60px;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .slick-prev {
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  }
  .slick-next {
    right: 0;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  }
  .slick-next:before,
  .slick-prev:before {
    content: none;
  }
  > div > div {
    left: -5px;
  }
  > div > div > div > div {
    margin-left: 5px;
  }
`;
export const Arr = styled.div`
  > svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
`;
export const Slidemovie = styled.div`
  width: 100%;
  height: 0;
  padding-bottom:150%;
  position: relative;
`;
export const Hovermovie = styled(Slidemovie)`
  padding-bottom:90%;
`;
export const SlideImg = styled.img`
  width: auto;
  height:auto;
  max-width: 100%;
  max-height: 100%;
  margin:auto;
  top:0;
  border-radius: 5px;
  bottom:0;
  left:0;
  right:0;
  position: absolute;
`;
export const Slide = styled.li`
   position: relative;
   .slidehover{
    display:none;
   }
  &:hover .slidehover{
    display:block;
    width: 320px;
  }
`
