import styled from 'styled-components';
export const WishWrap = styled.div`
  padding: 100px 60px 0;
  box-sizing: border-box;
`;
export const WishConWrap = styled.ul`
  display:flex;
  flex-wrap: wrap;
  margin-top:50px;
`;
export const WishConli = styled.li`
  width: 16.38%;
  margin-right: 20px;
  margin-top: 20px;
  &:nth-child(6n) {
    margin-right: 20;
  }
  &:nth-child(-n + 6) {
    margin-top: 20;
  }
  position: relative;
  .slidehover {
    display: none;
  }
  &:hover .slidehover {
    display: block;
    width: 320px;
  }
`;