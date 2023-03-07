import React,{ useState } from 'react'
import styled from "styled-components"
import { Arrow } from '../header/style';

function Profile() {
  //미리보기를 구현하기위한 스테이트
  const [imgBaseChange, setImgBaseChange] = useState([]);
  //이미지파일을 받는 스테이트
  const [imgFile, setImgFile] = useState([]);
  const imgHandlerChange = (event) => {
    //console.log(event.target.files);
    //파일을 받아오는 이벤트
    //setImgFile(event.target.files);
    setImgBaseChange([]);
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        //파일을 버퍼에 저장시켜줌
        //정확히는 해당 파일 리더를 통해서 파일 정보를 읽는다
        let reader = new FileReader();
        //파일 정보를 입력한다.!
        reader.readAsDataURL(event.target.files[i]);
        //파일 상태 업데이트
        reader.onloadend = () => {
          //파일 읽기가 완료되면 아래코드가 실행된다.
          //reader.result는 파일을 비트맵 데이터를 리턴시켜준다.
          const base = reader.result;
          //console.log(base)
          if (base) {
            //비트맵 데이터를 저장 가능하도록 스트링으로 바꾼다.
            const baseSub = base.toString();
            //imgBase에 baseSub를 붙인 새로운 배열을 스테이트 한다.
            setImgBaseChange((imgBaseChange) => [...imgBaseChange, baseSub]);
          }
        };
      }
    }
  };

  return (
    <ProflieWrap>
      <ProflieInner>
        <Title>프로필 변경</Title>
        <Content>
          <Left>
            <img src="" alt="" />
            <InputProfile
              type="file"
              id="imagebox"
              accept="image/png,image/jpg,image/jpeg"
            />
            <LabelProfile htmlFor="imagebox">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg-icon svg-icon-edit"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </LabelProfile>
          </Left>
          <Right>
            <Input type="text" />
            <Emtitle>언어</Emtitle>
            <SelectBoxWrap>
              <SelectBox>
                <option value="한국어">한국어</option>
              </SelectBox>
              <ArrowSelect />
            </SelectBoxWrap>
            <Emtitle>게임닉네임 : </Emtitle>
            <Profiletxt>
              닉네임은 모든 넷플릭스 게임에서 다른 넷플릭스 회원들과 같이
              플레이할 때 사용되는 고유의 이름입니다.
            </Profiletxt>
            <NickName>
              <Input type="text" maxLength="16" />
              <label>0/16</label>
            </NickName>
          </Right>
        </Content>
      </ProflieInner>
    </ProflieWrap>
  );
}
const ProflieWrap = styled.div`
  background:#000;
  width:100vw;
  min-height: 100vh;
  padding:70px 0;
  box-sizing: border-box;
`
const ProflieInner = styled.div`
  width:682px;
  margin:0 auto;
`;
const Title = styled.h3`
  font-size: 4.6rem;
  margin: 0.67em 0;
  line-height: 1;
`;
const Content = styled.div`
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
  display: flex;
  padding: 2em 0;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  background: #333;
  font-size: 0;
  border-radius: 5px;
`;
const InputProfile = styled.input`
  opacity:0;
  width:0;
`;
const LabelProfile = styled.label`
  position: absolute;
  width: 28px;
  height: 28px;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Right = styled.div`
  width:calc(100% - 180px)
`;
const Input = styled.input`
  width: 100%;
  background: #666;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.3rem;
  height: 2em;
  padding: 0.2em 0.6em;
  outline: 0;
  
`;
const Emtitle = styled.em`
  color: #ccc;
  font-size: 1.5rem;
  margin-bottom: 7px;
  font-style: normal;
  display: block;
  margin-top: 2rem;
`;
const SelectBoxWrap = styled.div`
position:relative;
`;
const ArrowSelect = styled(Arrow)`
  left: 100px;
  top: 0;
  position: absolute;
  bottom: 0;
  margin: auto;
`;
const SelectBox = styled.select`
  appearance: none;
  background-color: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 500;
  height: 2.5rem;
  letter-spacing: 1px;
  line-height: 2.5rem;
  padding-left: 10px;
  padding-right: 50px;
  position: relative;
`;
const Profiletxt = styled.p`
  font-size: 1.25rem
`;

const NickName = styled.div`
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #333;
  flex-wrap:wrap;
`;

export default Profile