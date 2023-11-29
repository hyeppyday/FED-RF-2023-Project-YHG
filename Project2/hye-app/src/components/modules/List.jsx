
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

  // 변수설정
  let cSts = 0;
  // (4) 슬라이드순번
  let sNum = 0;

  // 슬라이드 이동구현 함수
  const goSlide = (e) => {
    // 1. 이벤트가 발생한 요소
    const tg = e.target;
    // console.log(tg)

    // 2. 대상선정
    // (1) 슬라이드
    const sldBox = $(tg).siblings(".imslide ");
    const indic = $(tg).siblings(".indic").find("li");
    // console.log(sldBox,indic)
    // (3) 슬라이드 개수
    const sCnt = sldBox.find("li").length;

    // 3. 기능구현
    // 이동버튼 클릭시

    // 0. 광클금지
    if (cSts) return;
    cSts = 1; //잠금
    setTimeout(() => (cSts = 0), 600);
    //////////////////////////////

    // 1. 오른쪽 버튼 여부
    let isR = $(tg).is(".rb");
    // console.log('버튼클릭!',isR);

    // 2. 버튼별 분기하기
    // 2-1. 오른쪽버튼
    if (isR) {
      // 슬라이드가 왼쪽으로 이동함
      // left값이 -100%
      sldBox.animate({ left: "-100%" }, 600, "easeInOutQuint", () => {
        // 콜백함수(애니후)
        // 맨앞li 맨뒤로 이동
        sldBox
          .append(sldBox.find("li").first())
          // 동시에 left값은 0으로 초기화
          .css({ left: "0" });
      }); ////////////////// animate /////////////////
      // 슬라이드 순번증가 (끝보다 크면 0)
      sNum++;
      if (sNum >= sCnt) sNum = 0;
    } //////////// if /////////////
    // 2-2. 왼쪽버튼
    else {
      // 맨뒤 li 맨앞으로 이동
      sldBox
        .prepend(sldBox.find("li").last())
        // left값 -100%
        .css({ left: "-100%" })

        // left값을 0으로 애니메이션
        .animate({ left: "0" }, 600, "easeInOutQuint");
      // 슬라이드 순번감소(0보다 작으면 끝번호)
      sNum--;
      if (sNum < 0) sNum = sCnt - 1;
    } ////////////// else ///////////////
    console.log("슬라이드순번:", sNum);

    // 블릿해당순번 클래스 'on'넣기 ( 다른 li는 클래스 제거 )
    indic.eq(sNum).addClass("on").siblings().removeClass("on");
  }; ///////////// goSlide /////////////////

  return (
    <section className="cat-list">
      {selData.map((v, i) => (
        <Link to="detail" key={i}
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
