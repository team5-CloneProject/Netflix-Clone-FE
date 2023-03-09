import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { useMutation, useQueryClient } from 'react-query';
import { Login } from '../../api/user/user';
import { setCookie } from '../../api/axios/cookies';

const LoginForm = () => {
  // const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  // const queryClient = useQueryClient();

  const loginmutation = useMutation(Login, {
    onSuccess : (response) => {
      // console.log(response)
      setCookie("access_token", response.headers.authorization);
      window.location.href = "/main";
      },
    onError : (response) => {
      alert("아이디 및 비밀번호를 확인해주세요!")
    }
  });

  const onLoginHandler = (event) => {
    event.preventDefault();
    const res = {
      email, 
      password
    };
    if(!email.trim() || !password.trim()){
      alert("아이디 및 비밀번호를 확인해주세요!")
      return;
    }
    loginmutation.mutate(res);
  }

  return (
    <>
    <LoginHeader/>
    <Whole onSubmit={onLoginHandler}>
      <LoginContainer>
        <Title>로그인</Title>
        <Input 
        type = "text"
        value={email}
        name='email'
        placeholder='이메일 주소'
        onChange={(e) => setEmail(e.target.value)}/>
        <Input 
        type = "text"
        value={password}
        name='password'
        placeholder='비밀번호'
        onChange={(e) => setPassword(e.target.value)}/>
        <Btn
          backColor="red"
          textColor="white"
          // disabled={!check}
          // onClick={handleBtn}
        > 
          로그인
        </Btn> 
        <Help>
          <White to="https://help.netflix.com/ko/">
            도움이 필요하신가요?
          </White>
        </Help>
        <Footer>
          <p>
            Netflix 회원이 아니신가요?{" "}
            <White to="/signup">
              지금 가입하세요
            </White> 
          </p>
          <p>이 페이지는 아주 멋지게 만들었습니다. 한번 들어와서 구경해보시기 바랍니다.</p>
          <p>구경해본다면 후회하지 않으실꺼에요!</p>
        </Footer>
      </LoginContainer>
      <LoginFooter />
    </Whole>
    </>
  );
}

export default LoginForm

const Whole = styled.form`
  display: flex;
  justify-content: center;
  padding-top : 70px;
  min-height: 100%;
  min-width: 100%;
  /* align-items: center; */
  width: 100vw;
  height: 100vh;
  background-image:  linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url("https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/c7cd631d-4f1f-46e1-b1a4-2ea3c93d9301/KR-ko-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-repeat: no-repeat;
  background-size : cover;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top : 60px;
  width : 300px;
  height : 50vh;
  padding: 70px;
  background-color: rgba(0, 0, 0, 0.8);
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
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: ${props => props.marginBottom};
  border-radius: 5px;
  border: none;
  color: ${props => props.textColor};
  background-color: ${props => props.backColor};
  font-size: large;
  padding: ${props => props.padding};
  :hover{
    cursor: pointer;
    background-color : rgb(187, 39, 26);
  }
`;

const Help = styled.div`
  height: 20px;
  margin-top: 15px;
  color: #939393;
  text-decoration: none;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  color: #939393;
  text-align: left;
  font-weight: 500;
  font-size: large;
`;

const White = styled(Link)`
  color: white;
  /* text-decoration: none; */
  font-weight: 800;
  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  appearance: none;
  border: 1px solid #4f4f4f;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #4f4f4f;
  display: block;
  font-size: 16px;
  color : white;
  height: 50px;
  padding: 10px 11px;
  width: 100%;
  /* padding: 1px 2px; */
  margin-bottom: 16px;
  :focus{
    outline-color : orange;
  }
`