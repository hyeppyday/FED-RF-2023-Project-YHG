// index.html 출력 컴포넌트 

import './css/index.css';

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Main } from './components/pages/Main';
import { MainCont } from './components/pages/MainCont';
import { Detail } from './components/modules/Detail';



export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainCont cat="해변 바로 앞" />}></Route>
          <Route path='main' element={<Main/>}></Route>
          <Route path='detail' element={<Detail/>}></Route>

        </Route>
    </Routes>
  </BrowserRouter>
  )
}//////////////// App 컴포넌트 //////////////////


// 컴포넌트 출력하기
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);