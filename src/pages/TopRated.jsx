import React from "react";
import TopRated from "../component/Tab/TopRated";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { MainMovieWrap } from "../component/main/style";
const TopRatepage = () => {
  return (
    <MainMovieWrap>
      <Header />
      <TopRated />
      <Footer />
    </MainMovieWrap>
  );
};

export default TopRatepage;
