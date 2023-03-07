import React from 'react'
import Header from '../component/header/Header'
import MainWarp from "../component/main/MainWarp";
import Footer from '../component/footer/Footer';
const Page = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <Header />
      <MainWarp />
      <Footer/>
    </div>
  );
};

export default Page;