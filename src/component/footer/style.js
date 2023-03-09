import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Footerwrap = styled.div`
  background: #000;
  padding: 80px 0 15px;;
  
`;
const FooterInner = styled.div`
  margin:0 auto;
  max-width: 980px;
  padding: 0 4%;
  font-size:0;
  
`;
const Snswrap = styled.div`
    display:flex;
    align-items: center;
    gap: 15px;;
`
const Sns = styled(Link)``
const MemberLinkul = styled.ul`
align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 13px;
    margin: 20px 0 0px;
    padding: 0;
`
const MemberLinkli = styled.li`
    box-sizing: border-box;
    flex: 0 0 50%;
    list-style-type: none;
    margin-bottom: 16px;
    flex-basis: 25%;
    color: grey;
    font-size:14px;
`
const Copytext =styled.div`
margin-top:10px;
    > p{
        color:gray;
        font-size:12px;
    }
`

export{Footerwrap,FooterInner,Snswrap,Sns,MemberLinkul,MemberLinkli,Copytext}