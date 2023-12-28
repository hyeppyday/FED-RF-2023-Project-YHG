// index.html 출력 컴포넌트

import "./css/index.css";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "lightbox.js-react/dist/index.css";

import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { MainCont } from "./components/pages/MainCont";
import { Detail } from "./components/modules/Detail";

import { Member } from "./components/pages/Member";
import { SchPage } from "./components/pages/SchPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />}/>
          <Route path="/list" element={<MainCont cat="해변 바로 앞" />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="member" element={<Member />} />
          <Route path="schpage" element={<SchPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
} //////////////// App 컴포넌트 //////////////////

// 컴포넌트 출력하기
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
