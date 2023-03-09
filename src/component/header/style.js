import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderWarp = styled.div`
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
  z-index: 9;
  transition: all 0.5s;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  .link {
    font-size: 0;
  }
`;
export const Logo = styled.svg`
  fill: #e50914;
  width: 93px;
  margin-right:45px;

`;

export const MenuLink = styled(Link)`
  color: #e5e5e5;
  transition: color 0.4s;
  margin-right: 20px;

  &:hover {
    color: #b3b3b3;
  }
`;
export const SearchInput = styled.input`
    display:none;
`
export const Rightlist = styled.li`
  margin-left: 30px;
  > .search {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
export const User = styled.div`
    font-size: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
`;
export const UserIcon = styled.img`
width:32px;
height:32px;
border-radius: 5px;
overflow: hidden;
`
export const Arrow = styled.span`
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  height: 0;
  width: 0;
  margin-left: 10px;
  transition: transform 367ms cubic-bezier(.21,0,.07,1);
  display:inline-block;
  &.on{
    transform: rotate(180deg);
  }
  
`;

export const Profile = styled.ul`
  position: absolute;
  bottom:-120px;
  box-sizing: border-box;
  right: 50px;
  width:180px;
  background:rgba(14, 8, 4, 0.7);
  border-radius: 5px;
  text-align: center;
  > li{
    display: block;
    height: 60px;
    line-height: 60px;
  }
  > li:last-child {
    border-top:1px solid rgba(255,255,255,0.2);
    
  }
  ::after{
    border-color: #000 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    height: 0;
    width: 0;
    content: '';
    position: absolute;
    top:-5px;
    right: 10px;
    transform: rotate(180deg);
  }
`
