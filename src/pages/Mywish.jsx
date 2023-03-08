import React from 'react'
import Wish from '../component/wish/Wish';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { MainMovieWrap } from '../component/main/style';
const Mywish = () => {
  return (
    <MainMovieWrap>
      <Header />
      <Wish />
      <Footer />
    </MainMovieWrap>
  );
};

export default Mywish;