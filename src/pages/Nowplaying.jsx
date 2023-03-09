import React from "react";
import Nowplay from "../component/Tab/Nowplay";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { MainMovieWrap } from "../component/main/style";
const Nowplaying = () => {
  return (
    <MainMovieWrap>
      <Header />
      <Nowplay />
      <Footer />
    </MainMovieWrap>
  );
};

export default Nowplaying;
