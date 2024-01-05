import { Logo } from "../modules/Logo";

import { CatMenu } from "../modules/Cat";

import React, { useRef, useState } from "react";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { catData } from "../data/catData";

export function TopArea({ chgPageFn }) {

  
  // 검색 관련 함수들 ///////////////////////////

  
  // 1. 검색창 보이기 함수
  const showSearch = (e) => {
    // 0. a요소 기능 막기
    e.preventDefault();

    // 1. 검색창 보이기
    // $(".searchingGnb").show();
    $(".searchingGnb").toggleClass("show");
    // // 2. 입력창에 포커스 보내기
    $("#schinGnb").focus();
    
  }; ////////////// showSearch /////////////////

  // 2. 입력창에 엔터키를 누르면 검색함수 호출!
  const enterKey = (e) => {
    // console.log(e.key)
    if (e.key === "Enter") {
      // 모바일에서 열린 메뉴창 닫기
      $(".top-area").removeClass("on");
      // 입력창의 입력값 읽어오기 : val() 사용!
      let txt = $(e.target).val().replace(/(\s*)/g, "");
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달!)
      if (txt != "") {
        // 입력창 비우기 + 부모박스 닫기
        $(e.target).val("").parent().removeClass("show");

        // 검색 보내기
        goSearch(txt);
      }
    } ///////// if ///////
  }; ///////////// enterKey ////////////

  // 3. 검색 페이지로 검색어와 함께 이동하기
  const goSearch = (txt) => {
    // txt - 검색어
    // console.log('나는 검색하러 간다!!')
    // 라우터 이동함수로 이동하기
    chgPageFn("/schpage", { state: { keyword: txt } });
  }; //////////// goSearch ////////////

   // 4. 태그 랜덤생성
   const tag = ["바베큐장", "욕조", "복층", "마당", "발코니","해변 바로 앞","멋진 수영장","한옥","료칸","통나무집","캠핑장","섬","키클라데스 주택"];

   const getrd = (arr) => arr[Math.floor(Math.random() * arr.length)];


const filterVal = (val) => {
  let res = false;
  // console.log("필터에서 val:", val);
  // console.log("필터에서 arr:", arr);

  tag.forEach((v) => {
    if (v === val) res = true;
  });

  // console.log("검사결과:", res);
  return res;
};

/// for문으로 10개를 만들어 arr배열에 넣기 /////
const makeArr = () => {
  for (let x = 0; x < 4; x++) {
    let nowRdm = getrd();
    // console.log(Array.isArray(arr));
    while (filterVal(nowRdm)) {
      nowRdm = getrd();
      // console.log("다시만들어!");
    } ////// while //////////

    // 통과후 반영하기
    tag.push(nowRdm);
  } ////////// for ////////////
}; ////////// makeArr /////////

// makeArr();
console.log('배열만들기:',makeArr())

  
 


  const showSub = (e) => {
    const tg1 = $(".cat-icon");
    const tg2 = $(".incat");

    tg2.css({ transition: "1s" });
    setTimeout(() => tg1.toggleClass("on"), 0);

    setTimeout(() => {
      tg2.css({ transition: "none" });
    }, 1000);
  
  };

  return (
    <>
      {/* 상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 로고 */}
            <li>
              <Logo />
            </li>

            {/* 메뉴 아이콘 : 클릭시 카테고리 등장 */}
            <li
              className="cat-icon"
              onClick={showSub}
              style={{ marginLeft: "auto" }}
            ></li>

            <ol className="incat">
              <CatMenu />
            </ol>
            {/* 3. 검색, 회원가입, 로그인 링크 */}
            <li>
              {/* 검색입력박스 */}
              <div className="searchingGnb">
                {/* 입력창 */}
                <input
                  id="schinGnb"
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  onKeyUp={enterKey}
                />
                {/* 태그 */}
                {<div className="tags">
                  <div className="tag">#마당</div>
                  <div className="tag">#욕조</div>
                  <div className="tag">#바베큐장</div>
                </div>}
              </div>
              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} size="2xl" />
              </a>
            </li>

            {/* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */}
            {/* 유저아이콘 클릭시 회원가입, 로그인 박스 오른쪽에서 나옴 */}
            <li>
              <Link to="/member">
                <FontAwesomeIcon icon={faCircleUser} size="2xl" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} //////////////////// TopArea ///////////////////////
