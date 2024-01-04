// 메인페이지 두번째 컨텐츠 your travel style

import { bnbCon } from "./bnbContext";
import { useCallback, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import $ from "jquery";

export function Style() {
  const myCon = useContext(bnbCon);
  const goNav = useNavigate();

  // 여행 스타일 컨텐츠 페이지 랜덤이동

  const Active = ["멋진 수영장", "해변 바로 앞", "캠핑장"];
  const Peaceful = ["한옥", "료칸", "섬"];
  const Mystic = ["통나무집", "키클라데스 주택"];

  const getRandom = (length, iam) => {
    const idx = $(iam).index();
    console.log("순번:", idx,iam);

    let newNum = parseInt(Math.random() * length);
    
    // 두자릿수로 만들기
    let doubleOne = String(idx) + newNum;
    console.log("두자릿수:",doubleOne);
    console.log("랜덤수:", doubleOne, "===", myCon.bNum);

    while (doubleOne == myCon.bNum) {
      newNum = parseInt(Math.random() * length);
      // 두자릿수로 만들기
      doubleOne = String(idx) + newNum;
      console.log("다시랜덤:", doubleOne);
    }

    myCon.setBNum(doubleOne);

    return newNum;
  };

  return (
    <>
      <section className="style">
        {/* 1. 뒷 배경색 */}
        <div className="panel">
          {/* 2. 타이틀 */}
          <h1>Your Travel Style</h1>
        </div>
        {/* 3. 이미지박스 : 이미지 + 작은타이틀 */}

        <div className="imgbx">
          <span
            
          >
            <img src="./images/style1.jpg" alt="" onClick={(e) => {
              myCon.chgMenuCat(
                Peaceful[getRandom(Peaceful.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}/>
            <h3 onClick={(e) => {
              myCon.chgMenuCat(
                Peaceful[getRandom(Peaceful.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}>Peaceful</h3>
          </span>
          <span
            
          >
            <img src="./images/style2.jpg" alt="" onClick={(e) => {
              myCon.chgMenuCat(
                Active[getRandom(Active.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}/>
            <h3 onClick={(e) => {
              myCon.chgMenuCat(
                Active[getRandom(Active.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}>Active</h3>
          </span>
          <span
            
          >
            <img src="./images/style3.jpg" alt="" onClick={(e) => {
              myCon.chgMenuCat(
                Mystic[getRandom(Mystic.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}/>
            <h3 onClick={(e) => {
              myCon.chgMenuCat(
                Mystic[getRandom(Mystic.length,
                e.currentTarget)]
              );
              goNav("/list");
            }}> Mystic</h3>
          </span>
        </div>
      </section>
    </>
  );
} ///////////// Style ///////////////
