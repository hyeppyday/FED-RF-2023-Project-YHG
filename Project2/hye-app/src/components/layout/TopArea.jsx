import { Logo } from "../modules/Logo";
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";
import { List } from "../modules/List";

import React from "react";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TopArea(props) {
  const showCat = () => {
    console.log("나야나");
    return menu.map((v, i) => (
        <li key={i}>
          <Link to={v.link}><img src={v.img}alt={v.txt}/>{v.txt}</Link>
        </li>
    ));
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
            <a className="cat-menu" style={{ marginLeft: "auto" }}>
              <img src="./images/1.jpg" alt="" />
              {showCat()}
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
