import { Logo } from "../modules/Logo";
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

export function TopArea() {
  return (
    <>
      {/* 1. 상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 로고 */}
            <li>
              <Logo />
            </li>
            {/* 메뉴 아이콘 : 클릭시 카테고리 등장 */}
            <div className="gnb-icon">
              {menu.map((v, i) => (
                <li key={i}>
                  <Link to={v.link}>{v.txt}</Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
        <ul>
          {/* 로그인 */}
          <li></li>
          {/* 검색 */}
          <li></li>
        </ul>
      </header>
    </>
  );
} //////////////////// TopArea ///////////////////////
