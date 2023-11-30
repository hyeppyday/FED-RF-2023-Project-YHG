
import { catData } from "../data/catData.js";
import { Link } from "react-router-dom";
import $ from "jquery";
import { SwiperApp } from "../plugin/SwiperApp.jsx";

export function List(props) {
  // props.cat은 전달된 카테고리 정보(데이터 선별용)
  const selData = catData.filter((v) => {
    if (v.category == decodeURIComponent(props.cat)) return true;
  });
  // console.log(selData);


  return (
    <section className="cat-list">
      {selData.map((v, i) => (
        <Link to="/detail" key={i}
        state={{
          name: v.name,
          score: v.score,
          idx: v.idx,
          cat: v.category,
          seq: i,
        }}>
          <div className="listbox">
            {/* 1. 이미지박스 */}
            <div className="imbx">
              <div className="imslide">
                <SwiperApp cat={v.category} seq={i+1} />
              </div>
              {/* 양쪽이동버튼 */}
              {/* <button className="abtn lb" onClick={goSlide}>
                ＜
              </button>
              <button className="abtn rb" onClick={goSlide}>
                ＞
              </button> */}
              {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기*/}
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
    </section>
  );
}
