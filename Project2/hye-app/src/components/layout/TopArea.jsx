import { Logo } from "../modules/Logo";

import { CatMenu } from "../modules/Cat";

import React from "react";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from 'jquery';
import { useEffect } from "react";

export function TopArea() {

  let mSts = 1;

  const showSub = () => {
    const catIcon = $('.cat-icon');
    mSts? catIcon.addClass('on'):catIcon.removeClass('on');
    mSts?mSts=0:mSts=1;
  }
// useEffect(()=>{
//   $('.cat-icon ol').click(e=>e.stopPropagation())
// })
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
            <li className="cat-icon" onClick={showSub} style={{marginLeft:'auto'}}>
              
                  <ol>
                    <CatMenu />
                  </ol>

            </li>

            {/* 3. 검색, 회원가입, 로그인 링크 */}
            <li>
              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#">
                <FontAwesomeIcon icon={faSearch} size="2xl"/>
              </a>
            </li>

            {/* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */}
            {/* 유저아이콘 클릭시 회원가입, 로그인 박스 오른쪽에서 나옴 */}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCircleUser} size="2xl"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} //////////////////// TopArea ///////////////////////
