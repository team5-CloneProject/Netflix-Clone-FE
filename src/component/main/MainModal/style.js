import styled from "styled-components";
import { InfoTop} from "../slide/hover";
export const InfoModalWrap = styled.div`
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  justify-content: center;
  z-index: 99;
  overflow-y: scroll;
  left:0;
  top:0;
  padding:100px 0 0 
`;
export const Modalcon = styled.div`
  width: 900px;
  background: #181818;
  border-radius: 20px;
`;
export const ModalTop = styled.div`
  position: relative;
  height: 506px;
  
`;
export const ModalInfo = styled(InfoTop)`
  position: absolute;
  z-index: 9;
  left: 60px;
  bottom: 60px;
`;

export const OutBtn = styled.div`
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
export const ModalBottom = styled.div`
  display:flex;
  padding:30px 60px 60px;
  box-sizing: border-box;
`
export const Left = styled.div`
  width:500px;
  margin-right:30px;
`;
export const Title = styled.em`
  font-size:1.56rem;
  line-height: 1;
  margin-bottom:20px;
  font-style: normal;
  font-weight: 700;
  display:block;
`;
export const Content = styled.p`
  line-height: 26px;
  max-height: 156px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
export const Right = styled.div`
  width:calc(100% - 530px);
  font-size:0;
  >p{
    font-size:1rem
  }
  >p span{
    width:63px;
    color: #777;
    font-size:1rem;
    display:inline-block;
  }
`;