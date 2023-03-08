import React from 'react'
import Header from '../component/header/Header'
import MainWarp from "../component/main/MainWarp";
import Footer from '../component/footer/Footer';
import { MainMovieWrap } from '../component/main/style';
const Page = () => {
  return (
    <MainMovieWrap>
      <Header />
      <MainWarp />
      <Footer/>
    </MainMovieWrap>
  );
};

export default Page;