import React,{ useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from "styled-components"
import { Arrow } from '../header/style';
import { MypageEdit, MypageGet } from '../../api/user/mypage';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../api/axios/axios';

function Profile() {
  const [nickname, setNickName] = useState("");
  const [images, setImages] = useState("");
  const [updateimg, setUpdateImg] = useState("");
  const fileInput = React.useRef(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {isError, isLoading, data} = useQuery("MypageGet", MypageGet);
  console.log(data)

  // 전체 조회
  // useEffect(() => {
  //   const MypageGet = async () => {
  //     const { data } = await instance.get("/api/mypage");
  //     console.log(data.response);
  //     return data.response;
  //     };
  //     MypageGet().then((result) => setList(result));
  // },[nickname]);


  const Edit_Mutation = useMutation(MypageEdit, {
    onSuccess: (response) => {
      queryClient.invalidateQueries("MypageGet");
    },
  });

  const onImgChangeHandler = (event) => {
    event.preventDefault();

    setUpdateImg([]);
    setImages(event.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      const base = reader.result;
      if (base) {
        const baseSub = base.toString();
        setUpdateImg((updateimg) => [...updateimg, baseSub]);
      }
    };
    // setUpdateImg(updateimg);
    // setNickName(nickname);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("images", images);
    const payload = {
      nickname : formData.get("nickname"),
      images : formData.get("images")
    }
    console.log(payload)
    Edit_Mutation.mutate(payload);
    setImages(payload);
    setUpdateImg(payload);

    alert("수정 완료")
    // navigate("/")
  }

  const onCancleHandler = async (event) => {
    event.preventDefault();
    navigate("/")
  }
  

  return (
    <ProflieWrap>
      <ProflieInner onSubmit={onSubmitHandler} encType="multipart/form-data">
        <Title>프로필 변경</Title>
        <Content>
          <Left>
            <IMG src={images} alt="image" />
            <InputProfile
              type="file"
              id="imagebox"
              accept="image/*"
              ref={fileInput}
              src={updateimg}
              onChange={onImgChangeHandler}
            />
            <LabelProfile htmlFor="imagebox">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-edit"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </LabelProfile>
          </Left>
          <Right>
            <Input 
            type="text" 
            name="nickname"
            value={nickname}
            onChange={(event) => {
              setNickName(event.target.value);
            }}/>
            <SmallContent>
            <Emtitle>언어</Emtitle>
            <SelectBoxWrap>
              <SelectBox>
              <option value="lang"> 언어 </option>
              <option value="lang"> 한국어</option>
              <option value="lang"> 한글</option>
              </SelectBox>
              <ArrowSelect />
            </SelectBoxWrap>

            </SmallContent>
            <Emtitle>관람등급 설정:</Emtitle>
            <SelectBoxWrap>
              <SelectBox>
                <option value="grade" >관람등급</option>
                <option value="grade" >전연령</option>
                <option value="grade" >키즈</option>
              </SelectBox>
              <ArrowSelect />
            </SelectBoxWrap>
            <CheckArea>
          <CheckBox 
          id="autoplay"
          type="checkbox" 
          />
          <label htmlFor='autoplay'>모든 디바이스에서 시리즈의 다음 화 자동 재생</label> <p />
        <CheckBox 
          id="autoplay"
          type="checkbox" 
          />
          <label htmlFor='autoplay'>모든 디바이스에서 탐색 중 미리보기 자동 재생</label>
        </CheckArea>
          </Right>
          
        </Content>
        <SaveBtn> 저장 </SaveBtn>
        <CancleBtn onClick={onCancleHandler}> 취소 </CancleBtn>

      </ProflieInner>
    </ProflieWrap>
  );
}

export default Profile
const IMG = styled.img`  
  width: 80px;
  height: 80px;
  border-radius : 5px;
`
const SaveBtn = styled.button`  
  width: 6rem;
  height: 3rem;
  font-size : 20px;
  margin : 10px;
  color: black;
  border : 1px solid;
  background-color: white;
  :hover{
  background-color : rgb(187, 39, 26);
  border-color : rgb(187, 39, 26);
  color: white;
  }
`

const CancleBtn = styled.button`  
  width: 6rem;
  height: 3rem;
  font-size : 20px;
  margin : 10px;
  color: rgb(127, 127, 127);
  border-color :rgb(127, 127, 127);
  border : 1px solid;
  background-color : rgba(255, 255, 255, 0);
  :hover{
  border-color : white;
  color: white;
  }
`
const ProflieWrap = styled.div`
  background:rgb(20, 20, 20);
  width:100%;
  min-height: 100vh;
  padding:70px 0;
  box-sizing: border-box;
`
const ProflieInner = styled.form`
  width : 60%;
  height : 80%;
  margin:0 auto;
`;

const Title = styled.div`
  /* font-size: 4.6rem; */
  font-size : 100%;
  width : 300px;
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

const SmallContent = styled.div`
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
  /* display: flex; */
  padding: 2em 0;
  /* justify-content: space-between; */
`;

const Left = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  background: #333;
  font-size: 0;
  border-radius: 5px;
  object-fit: cover;
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

const CheckBox = styled.input.attrs({type:"checkbox"})`
  margin: 5px;
  padding: initial;
  margin : 5px;
  border-radius: 50px;
  zoom : 1.5;
`;

const CheckArea = styled.div`
  align-items : center;
  padding-top : 10px;
  display : block;
`;
