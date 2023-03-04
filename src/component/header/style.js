import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderWarp = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  height: 68px;
  padding: 0 60px;
  position: fixed;
  width: 100%;
  line-height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
  transition: all 0.5s;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  .link {
    font-size: 0;
  }
`;
const Logo = styled.svg`
  fill: #e50914;
  width: 93px;
  margin-right:45px;

`;

const MenuLink = styled(Link)`
  color: #e5e5e5;
  transition: color 0.4s;
  margin-right: 20px;

  &:hover {
    color: #b3b3b3;
  }
`;
const SearchInput = styled.input`
    display:none;
`
const Rightlist = styled.li`
  margin-left: 30px;
  > .search {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const User = styled.div`
    font-size: 0;
    cursor: pointer;
`;
const UserIcon = styled.img`
width:32px;
height:32px;
border-radius: 5px;
overflow: hidden;
`
const Arrow = styled.span`
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  height: 0;
  margin-left: 10px;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  width: 0;
`;
export {HeaderWarp,Left,Logo,MenuLink,SearchInput,Rightlist,User,UserIcon,Arrow}