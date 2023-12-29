// DC PJ 캐릭터 검색결과 리스트 컴포넌트

import { catData } from "../data/catData.js";
import { Link } from "react-router-dom";

// 카테고리 검색 리스트 CSS 가져오기
import "../../css/list.css";
import { SwiperApp } from "../plugin/SwiperApp";

export function SchList(props) {
// props.cat은 전달된 카테고리 정보(데이터 선별용)
const selData = catData.filter((v) => {
  console.log();
  if (v.scat.join('').indexOf(props.kword)!==-1) return true;
});

console.log(selData);

  return (
    <>
      {
          <ul className="cat-list" style={{marginTop:'280px'}}>
            {selData.map((v, i) => (
              <Link
                to="/detail"
                key={i}
                state={{
                  name: v.name,
                  score: v.score,
                  idx: v.idx,
                  cat: v.category,
                  seq: i,
                }}
              >
                <div className="listbox">
                  {/* 1. 이미지박스 */}
                  <div className="imbx">
                    <div className="imslide">
                      <SwiperApp cat={v.category} seq={v.icat} />
                    </div>
                    <ol className="indic">
                      <li className={i == 0 ? "on" : ""}></li>
                    </ol>
                  </div>

                  {/* 2. 설명박스 */}
                  <div className="titbx">
                    <h2>{v.name}</h2>
                    <h3>★{v.score}</h3>
                    <h3>{v.price}/박</h3>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        
      }
    </>
  );
} //////////////// SchCatList ////////////////////
