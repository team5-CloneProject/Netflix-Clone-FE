import React from "react";
import Lang from "../component/Langcate/Lang";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { MainMovieWrap } from "../component/main/style";
const Language = () => {
  return (
    <MainMovieWrap>
      <Header />
      <Lang />
      <Footer />
    </MainMovieWrap>
  );
};

export default Language;
