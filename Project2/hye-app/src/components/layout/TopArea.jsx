import { Logo } from "../modules/Logo";

import { CatMenu } from "../modules/Cat";

import React, { memo, useRef, useState } from "react";
import { faSearch, faCircleUser, faUserPlus, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $, { get } from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { catData } from "../data/catData";

export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut }) => {
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
  const tag = [
    "바베큐장",
    "욕조",
    "복층",
    "마당",
    "발코니",
    "해변 바로 앞",
    "멋진 수영장",
    "한옥",
    "료칸",
    "통나무집",
    "캠핑장",
    "섬",
    "키클라데스 주택",
  ];
  const arr = [];

  const getrd = () => {
    let rdm1 = Math.floor(Math.random() * 10);

    let newTag = tag[rdm1];
    return newTag;
  };

  const filterVal = (val) => {
    let res = false;

    arr.forEach((v) => {
      if (v === val) res = true;
    });
    return res;
  };

  const makeArr = () => {
    for (let x = 0; x < 3; x++) {
      let nowRdm = getrd();
      while (filterVal(nowRdm)) {
        nowRdm = getrd();
        console.log("다시만들어!");
      } ////// while //////////

      arr.push(nowRdm);
    }
  };
  makeArr();
  console.log(arr);

  const clickTag = (e) => {
    let selTxt = $(e.currentTarget).text().replace("#", "");
    console.log(selTxt);
    $("#schinGnb").val(selTxt).focus();
  };

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
        {/* 로그인 환영 메시지 박스 */}
        <div className="logmsg">{logMsg}</div>
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
                {
                  <div className="tags">
                    <div
                      className="tag"
                      style={{ cursor: "pointer" }}
                      onClick={clickTag}
                    >
                      #{arr[0]}
                    </div>
                    <div
                      className="tag"
                      style={{ cursor: "pointer" }}
                      onClick={clickTag}
                    >
                      #{arr[1]}
                    </div>
                    <div
                      className="tag"
                      style={{ cursor: "pointer" }}
                      onClick={clickTag}
                    >
                      #{arr[2]}
                    </div>
                  </div>
                }
              </div>
              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} size="2xl" color="#454545"/>
              </a>
            </li>

            {/* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */}
            {/* 유저아이콘 클릭시 회원가입, 로그인 박스 오른쪽에서 나옴 */}
            {logSts === null && (
              <>
                <li>
                  <Link to="/login" title="로그인">
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" color="#454545"/>
                  </Link>
                </li>
              </>
            )}
            {
              /* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */
              logSts !== null && (
                <>
                  <li>
                    <a href="#" onClick={logOut} title="로그아웃"><FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl" color="#454545"/></a>
                  </li>
                </>
              )
            }
          </ul>
        </nav>
      </header>
    </>
  );
}); //////////////////// TopArea ///////////////////////
