// 메인페이지 둘러보세요 컨텐츠 컴포넌트
import { subData } from "../data/subData";
import { Link, useLocation } from "react-router-dom";
import { catData } from "../data/catData";

import "../../css/view.css";
import { Fragment, useEffect } from "react";

import $ from "jquery";

export function View() {
  const arr = [
    // "https://cdn.pixabay.com/photo/2016/05/02/09/45/japan-1366872_1280.jpg",
    // "https://cdn.pixabay.com/photo/2015/07/15/11/51/resort-846075_640.jpg",
    // "https://cdn.pixabay.com/photo/2016/08/16/17/25/victorian-inn-1598444_640.jpg",
    // "https://cdn.pixabay.com/photo/2020/01/06/21/24/evening-4746326_640.jpg",
    // "https://cdn.pixabay.com/photo/2016/07/05/18/08/slave-quarters-1499121_640.jpg",
    // "https://cdn.pixabay.com/photo/2022/02/14/10/50/resort-7012893_640.jpg",
    // "https://cdn.pixabay.com/photo/2016/04/22/13/37/holiday-1345780_640.jpg",
    // "https://cdn.pixabay.com/photo/2019/11/20/02/11/hotel-4638955_640.jpg",
    // "https://cdn.pixabay.com/photo/2022/03/24/01/13/cabin-7088140_640.jpg",
    // "https://cdn.pixabay.com/photo/2021/07/21/06/25/outdoor-furniture-6482346_640.jpg",
  ];

  const catTxt = [
    "해변 바로 앞",
    "멋진 수영장",
    "한옥",
    "료칸",
    "통나무집",
    "캠핑장",
    "섬",
    "키클라데스 주택",
  ];

  const retRdm = () => {
    // 0~7 난수
    let rdm1 = Math.floor(Math.random() * 8);
    // 1~6 난수
    let rdm2 = Math.ceil(Math.random() * 6);

    // 새로운 조합 src
    let newSrc =
      "./images/Category/" +
      catTxt[rdm1].replace(/\s/gi, "%20") +
      "/" +
      rdm2 +
      "/1.jpg";
    return newSrc;
  };

  const filterVal = (val) => {
    let res = false;
    // console.log("필터에서 val:", val);
    // console.log("필터에서 arr:", arr);

    arr.forEach((v) => {
      if (v === val) res = true;
    });

    // console.log("검사결과:", res);
    return res;
  };

  /// for문으로 10개를 만들어 arr배열에 넣기 /////
  const makeArr = () => {
    for (let x = 0; x < 10; x++) {
      let nowRdm = retRdm();
      // console.log(Array.isArray(arr));
      while (filterVal(nowRdm)) {
        nowRdm = retRdm();
        // console.log("다시만들어!");
      } ////// while //////////

      // 통과후 반영하기
      arr.push(nowRdm);
    } ////////// for ////////////
  }; ////////// makeArr ////////////

  console.log(arr);

  makeArr();

  const setEvt = (e) => {
    const tgEle = $(e.currentTarget);
    const csrc = tgEle.attr("src");
    console.log("현재src:", csrc);

    const temp = csrc.split("/");
    console.log(temp[3], temp[4]);

    const fdata = catData.find((v) => {
      if (
        v.category === temp[3].replace(/%20/gi, " ") &&
        v.icat === Number(temp[4])
        )
        return true;
      });
      
    console.log("선택Data:", fdata);

    const loca = subData.find((v) => {
      if (v.idx === fdata.idx) return true;
    });

    $(".bigimg")
      .css("background-image", `url(${csrc})`)
      .find("h3")
      .first()
      .text(loca.gps)
      .next()
      .text("★ " + fdata.score);
  }; //////// setEvt /////////////

  const arrNum = [2, 4, 7, 8, 13, 14, 16, 17];
  const chkNum = (x) => {
    // console.log('입력:',x);
    let retVal = true;
    arrNum.forEach((v) => {
      if (v === x) retVal = false;
      // console.log('돌아!',v);
    });

    return retVal;
  }; ///////// chkNum ////////

  const makeList = () => {
    let temp = [];

    let setNum = -1;

    for (let i = 0; i < 18; i++) {
      // console.log(chkNum(i));
      temp[i] = (
        <li key={i}>
          {chkNum(i) ? (
            <img src={arr[++setNum]} alt="image" onMouseEnter={setEvt} />
          ) : (
            ""
          )}
        </li>
      );
    }

    return temp;
  }; ////////// makeList //////////////////

  return (
    <>
      {/* 전체박스 */}
      <div className="view-box">
        {/* 타이틀 */}
        <h1>둘러보세요!</h1>
        {/* 하위 박스 */}
        <div className="view-random">
          {/* 랜덤 데이터 뿌려지는 박스 */}
          <div className="random-box">
            <ul>{makeList()}</ul>
          </div>
          {/* 오버시 이미지 크게보이는 박스 */}
          <div className="bigimg">
            {/* 이미지 어두운효과 박스 */}
            <div className="blackbx"></div>
            {/* 숙소 위치 */}
            <h3>도쿄,일본</h3>
            {/* 평점 */}
            <h3>★ 4.59</h3>
          </div>
        </div>
      </div>
    </>
  );
} ///////////// View ///////////////
