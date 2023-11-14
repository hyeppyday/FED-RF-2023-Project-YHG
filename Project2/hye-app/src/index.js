// index.html 출력 컴포넌트 

import './css/index.css';

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
    </Routes>
  </BrowserRouter>
  )
}//////////////// App 컴포넌트 //////////////////


// 컴포넌트 출력하기
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);