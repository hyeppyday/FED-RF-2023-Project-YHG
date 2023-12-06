import { Logo } from "../modules/Logo";

import { CatMenu } from "../modules/Cat";

import React from "react";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function TopArea() {

  const showSub = () => {

    const tg1 = $('.cat-icon');
    const tg2= $('.cat-icon ol');
    
    tg2.css({transition:"1s"});
    setTimeout(()=>tg1.toggleClass('on'),0);

    setTimeout(()=>{
      tg2.css({transition:'none'})
    },1000)

    

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
              <div className="mognb">
                  <ol>
                    <CatMenu />
                  </ol>
              </div>
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
              <Link to="/member">
                <FontAwesomeIcon icon={faCircleUser} size="2xl"/>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} //////////////////// TopArea ///////////////////////
