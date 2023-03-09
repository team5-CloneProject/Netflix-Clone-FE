import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup"
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import Mywish from "../pages/Mywish";
import Language from "../pages/Language";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login />}/>
        <Route path ="/signup" element={<Signup />}/>
        <Route path ="/main" element={<Main />}/>
        <Route path ="/mypage" element={<Mypage />}/>
        <Route path ="/mywish" element={<Mywish />}/>
        <Route path ="/language" element={<Language />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;