import { Logo } from "../modules/Logo";

import { List } from "../modules/List";
import { showCat } from "../modules/Cat";

import React from "react";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from 'jquery';

export function TopArea() {

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
            <a className="cat-icon" style={{ marginLeft: "auto" }}>
              
            </a>

            {/* 3. 검색, 회원가입, 로그인 링크 */}
            <li>
              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>

            {/* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */}
            {/* 유저아이콘 클릭시 회원가입, 로그인 박스 오른쪽에서 나옴 */}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
            </li>
          </ul>
        </nav>
        <List />
      </header>
    </>
  );
} //////////////////// TopArea ///////////////////////
