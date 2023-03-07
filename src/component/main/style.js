import styled, {keyframes} from 'styled-components';

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export const MainMovieWrap = styled.div`
  background:#000;
  /* overflow: hidden; */
  padding-bottom: 80px;
`;




/* -------------------슬라이드부분----------------------- */
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
  font-size: 1.56rem;
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


