import React, { useState } from 'react'
import LoginHeader from '../login/LoginHeader'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import { useMutation, useQueryClient } from 'react-query';
import { Signup, CheckEmail } from '../../api/user/user';

const SignupForm = () => {
  const [userpassword, setUserpassword] = useState("");
  const [uservalpassword, setUservalpassword] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [usernickname, setNickname] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);


  //이메일 정규표현식
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //비밀번호 정규표현식
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  // 이메일 확인
  const checkEmailMutation = useMutation(CheckEmail, {
    onSuccess: (response) => {
      response ? setIsEmail(true) : setIsEmail(false);
      if (response) {
        setIsEmail(true);
        alert("사용가능한 이메일입니다.")
      } else {
        setIsEmail(false);
        alert("이미 사용중인 이메일입니다.")
      }
    },
    // onError: (response) => {

    // }
  });
  
  const checkEmail = (e) => {
    e.stopPropagation();
    if (!e.target.value.trim()) return;
    checkEmailMutation.mutate(e.target.value);
    };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    emailRegex.test(value) ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  //비밀번호 확인
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setUserpassword(value);
    value === uservalpassword
      ? setPasswordMatch(true)
      : setPasswordMatch(false);

    passwordRegex.test(value)
      ? setIsValidPassword(true)
      : setIsValidPassword(false);
  };
  // 가입
  const signUpMutation = useMutation(Signup, {
    onSuccess: (response) => {
      console.log(response.data);
      return response.data;
    },
    onError: (response) => {
      console.log(response.data);
      return response.data;
    }
  });

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    const res = {
      email: useremail,
      password: userpassword,
      nickname: usernickname,
    };
    signUpMutation.mutate(res);
    window.location.href = "/";
  };

  return (
    
    <Whole>
      <LoginContainer onSubmit={signupSubmitHandler}>
        <div>
          <Title>회원가입</Title>
          <Input 
          type='text'
          name='Email'
          value={useremail}
          placeholder='이메일 주소'
          onChange={handleEmailChange}
          />

          <button
            // id="check"
            type ="button"
            disabled={!isValidEmail}
            value={useremail}
            onClick={checkEmail}
          >
            중복확인
          </button>

        </div>

        <Input 
        type='text'
        value={usernickname}
        name='Username'
        placeholder='이름'
        onChange={(e) => setNickname(e.target.value)}/>
        <Input
        type='text'
        value={userpassword} 
        name='PassWord'
        placeholder='비밀번호'
        onChange={handlePasswordChange}/>
        {isValidPassword ? (
          <p style={{ color: "White" }}>사용가능한 비밀번호 입니다.</p>
        ) : (
          <p style={{ color: "#ff6666" }} >영어,숫자,특수문자를 포함한 8자이상이여야 합니다.</p>
        )}

        <CheckArea>
          <CheckBox 
          id="alertcheck"
          type="checkbox" 
          />
          <label htmlFor='alertcheck'>예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다. (필수 항목)</label>
        </CheckArea>
        <CheckArea>
          <CheckBox 
          id="alertcheck"
          type="checkbox" />
          <label htmlFor='alertcheck'>예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</label>
        </CheckArea>
        <Btn
          backColor="red"
          textColor="white"
          disabled={!(isValidEmail && isValidPassword)}          
        > 
          회원가입
        </Btn> 
        
      </LoginContainer>
    </Whole>
    
  );

};

export default SignupForm

const Whole = styled.div`
  display: flex;
  justify-content: center;
  padding-top : 70px;
  min-height: 100%;
  min-width: 100%;
  /* align-items: center; */
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url("https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/c7cd631d-4f1f-46e1-b1a4-2ea3c93d9301/KR-ko-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-repeat: no-repeat;
  background-size : cover;
`;

const LoginContainer = styled.form`
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
  margin-top: 30px;
  margin-bottom: ${props => props.marginBottom};
  border-radius: 5px;
  border: none;
  color: ${props => props.textColor};
  background-color: ${props => props.backColor};
  font-size: large;
  padding: ${props => props.padding};
  :focus {
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  box-sizing: border-box;
  background-color: initial;
  cursor: default;
  margin: 5px;
  padding: initial;
  margin : 5px;
  border: none;
  zoom : 1.5;
`;

const CheckArea = styled.div`
  align-items : center;
  padding-top : 10px;
  display : block;
`;


const Input = styled.input`
  appearance: none;
  border: 1px solid #4f4f4f;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #4f4f4f;
  display: block;
  color : white;
  font-size: 16px;
  height: 50px;
  padding: 10px 11px;
  width: 100%;
  /* padding: 1px 2px; */
  margin-bottom: 16px;
  :focus{
    outline-color : orange;
  }
`

