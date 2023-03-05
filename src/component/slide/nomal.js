import styled from 'styled-components';
export const Slidemovie = styled.div`
  width: 100%;
  height: 0;
  padding-bottom:56.25%;
  position: relative;
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
    width: 350px !important;
  }
`
