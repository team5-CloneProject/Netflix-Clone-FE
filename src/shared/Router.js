import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup"
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Main />}/>
        <Route path ="/input" element={<Login />}/>
        <Route path ="/list" element={<Signup />}/>
        <Route path ="/:id" element={<Mypage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;