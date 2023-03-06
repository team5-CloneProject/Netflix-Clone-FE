import React, { useState } from 'react'
import styled from 'styled-components';
import LoginHeader from '../component/login/LoginHeader';
import SignupForm from '../component/signup/SignupForm'

const Signup = () => {
  const [isSignupMode, setIsSignupMode] = useState(false);

  function SignUpMode() {
    setIsSignupMode(true)
  }

  return (
    <div>
    <LoginHeader />
    <Whole>
      {isSignupMode ? (
        <SignupForm />
      ):(
        <Stdiv>
          <Btn onClick={SignUpMode}> 시작하기 </Btn>
        </Stdiv>
      )}
    </Whole>
    </div>
  )

  
}

export default Signup

const Stdiv = styled.div `
  padding : 200px;
`
const Whole = styled.div`
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

const Btn = styled.button`
  width: 500px;
  height: 100px;
  margin-top: 100px;
  border-radius: 5px;
  font-weight : bolder;
  border: none;
  border-color : rgb(234, 51, 35);
  color : white;
  background-color:rgb(234, 51, 35);
  font-size: 50px;
  padding: auto;
  &:hover {
    cursor: pointer;
    background-color:rgb(187, 41, 33);
  }
`;