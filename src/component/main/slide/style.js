import styled from 'styled-components';
import Slider from 'react-slick';

export const Sliderwrap = styled(Slider)`
  width: calc(100% + 10px);
  .slick-list{
    overflow: visible;
  }
  .slick-active:last-of-type{
    display:flex;
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
    left: -10px;
  }
  > div > div > div > div {
    margin-left: 10px;
  }
`;
export const Arr = styled.div`
  > svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
`;

