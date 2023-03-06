import React from 'react'
import styled from 'styled-components'

const LoginFooter = () => {
  return  ( 
    <Footer name="site-footer">
      <p name="footer-top">질문이 있으신가요? 문의 전화: 080-001-9587 </p>
      <Div>
        <p>자주 묻는 질문</p>
        <p>고객 센터</p>
        <p>이용 약관</p>
        <p>개인정보 처리 방침</p>
      </Div>
      <Div>
        <p>쿠키 설정</p>
        <p>회사 정보</p>
        <p> </p>
        <p> </p>
      </Div>
      {/* <Div>


      </Div> */}
    </Footer>
  )
}

export default LoginFooter

const Footer = styled.div`
  background-color : rgba(0, 0, 0, 0.5);
  width : 90%;
  position : fixed;
  bottom : 0; 
  padding : 30px;
`

const Div= styled.div`
  display : flex;
  justify-content: space-between;
  /* padding : 20px; */
  /* margin : 20px; */
  width : 100%;
`