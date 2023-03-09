import React from 'react'
import styled from 'styled-components'

const LoginFooter = () => {
  return  ( 
    <Footer name="site-footer">
      <Div>
      <p name="footer-top">질문이 있으신가요? 문의 전화: 080-001-9587 </p>
      </Div>
      <Div>
        <p>자주 묻는 질문</p>
        <p>고객 센터</p>
        <p>이용 약관</p>
        <p>개인정보 처리 방침</p>
      </Div>
      <Div>
        <p>쿠키 설정</p>
        <p>회사 정보</p>
        <p> 6조의 </p>
        <p> 클론코딩결과입니다</p>
      </Div>
      <Div>
      <SelectBoxWrap>
        <SelectBox>
        <option value="lang"> 언어 </option>
        <option value="lang"> 한국어</option>
        <option value="lang"> 한글</option>
        </SelectBox>
      </SelectBoxWrap>
      </Div>
    </Footer>
  )
}

export default LoginFooter

const Footer = styled.div`
  background-color : rgba(0, 0, 0, 0.5);
  width : 100%;
  position : fixed;
  bottom : 0; 
`

const Div= styled.div`
  display : flex;
  justify-content: space-between;
  padding : 5px;
  margin : 5px 20px 10px 20px;
  width : 90%;
`

const SelectBoxWrap = styled.div`
position:relative;
`;

const SelectBox = styled.select`
  background-color: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  height: 2rem;
  width : 4rem;
  letter-spacing: 1px;
  line-height: 2.5rem;
  padding-left: 10px;
  position: relative; 
`;

