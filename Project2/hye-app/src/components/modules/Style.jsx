// 메인페이지 두번째 컨텐츠 your travel style

import { bnbCon } from "./bnbContext";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Style() {
  const myCon = useContext(bnbCon);
  const goNav = useNavigate();

  // 여행 스타일 컨텐츠 페이지 랜덤이동

  const Active = ["멋진 수영장", "해변 바로 앞", "캠핑장"];
  const Peaceful = ["한옥", "료칸", "섬"];
  const Mystic = ["통나무집", "키클라데스 주택"];

  const getRandom = (length) => {
    return parseInt(Math.random() * length);
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
            onClick={() => {
              myCon.chgMenuCat(Peaceful[getRandom(Peaceful.length)]);
              goNav("/list");
            }}
          >
            <img src="./images/style1.jpg" alt="" />
            <h3>Peaceful</h3>
          </span>
          <span
            onClick={() => {
              myCon.chgMenuCat(Active[getRandom(Active.length)]);
              goNav("/list");
            }}
          >
            <img src="./images/style2.jpg" alt="" />
            <h3>Active</h3>
          </span>
          <span
            onClick={() => {
              myCon.chgMenuCat(Mystic[getRandom(Mystic.length)]);
              goNav("/list");
            }}
          >
            <img src="./images/style3.jpg" alt="" />
            <h3>Mystic</h3>
          </span>
        </div>
      </section>
    </>
  );
} ///////////// Style ///////////////
