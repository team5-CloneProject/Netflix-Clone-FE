import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const LoginFrom = () => {
  const navigate = useNavigate();

  return (
    <Whole>
      <LoginContainer>
        <Title>로그인</Title>
        {/* {LoginDatas.map((LoginData, idx) => {
          return <LoginInput key={idx} data={LoginData} />;
        })} */}
        <label htmlFor='Email' style={{color : White}}> 이메일 </label>
        <input name='Email'/>
        <input />
        <Btn
          backColor="red"
          textColor="white"
          // disabled={!check}
          // onClick={handleBtn}
        > 
          로그인
        </Btn> 
        <Help>
          <Link to="https://www.netflix.com/kr/LoginHelp">
            도움이 필요하신가요?
          </Link>
        </Help>
        <Footer>
          <p>
            Netflix 회원이 아니신가요?{" "}
            <White to="/signup">
              지금 가입하세요
            </White> 
          </p>
          <p>이 페이지는 아주 멋집니다! 한번 들어와보시는게 어떠십니까?</p>
        </Footer>
      </LoginContainer>
    </Whole>
  );
}

export default LoginFrom

const Whole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/c7cd631d-4f1f-46e1-b1a4-2ea3c93d9301/KR-ko-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-repeat: no-repeat;
  background-size : cover;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 440px;
  padding: 70px;
  background-color: black;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
  font-size: xx-large;
  font-weight: 700;
  color: white;
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: ${props => props.marginBottom};
  border-radius: 5px;
  color: ${props => props.textColor};
  background-color: ${props => props.backColor};
  font-size: large;
  padding: ${props => props.padding};
  :focus {
    cursor: pointer;
  }
`;

const Help = styled.div`
  height: 20px;
  margin: 10px 0;
  color: #939393;
  text-decoration: none;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  color: #939393;
  text-align: left;
  font-weight: 500;
  font-size: large;
`;

const White = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
`;