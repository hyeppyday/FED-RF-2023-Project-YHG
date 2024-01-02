//  Airbnb PJ 숙소 상세페이지 컴포넌트

import { subData } from "../data/subData";
import { useLocation } from "react-router-dom";
import React, { Component, Fragment } from "react";

import $ from 'jquery';

import "../../css/detail.css";
import { useEffect } from "react";

export function Detail() {
  const loc = useLocation();

  const idx = loc.state.idx;
  const name = loc.state.name;
  const score = loc.state.score;
  const cat = loc.state.cat;
  const icat = loc.state.icat;

  console.log("순번:",icat);

  // let seq = loc.state.seq;

  // 선택 데이터
  const selData = subData[idx - 1];

  // console.log("./images/Category/"+cat+"/"+idx+"/1.jpg");

  // 사진 리스트 만드는 함수
  const makeList = () => {
    let temp = [];
    for (let x = 0; x < 15; x++) {
      temp[x] = (
        <div className="moreimg" datatype={x+1} key={x}>
          <img
            className="w-full rounded"
            src={
              "./images/Category/" +
              cat +
              "/" +
              icat +
              "/" +
              (x + 1) +
              ".jpg"
            }
          />
        </div>
      );
    } /////////// for /////////////

    return temp;
  };
  // console.log(makeList());

  useEffect(() => {
    // 대상: .photobox
    let ptbx = $(".moreimg");

    // 포토박스 공통 대상
    let imbx = $("#imbx");
    let bgbx = $("#bgbx");

    // 포토박스 클릭시 순번
    let pseq;

    // 포토박스 개수
    let pcnt = ptbx.length;
    // console.log("포토박스개수:"+pcnt);

    ////////////////////////////////////////////
    // 3. 갤러리 박스 클릭시 큰 이미지 보이기 /////
    ////////////////////////////////////////////
    ptbx.click(function () {
      // 0. 포토박스 순번 변수에 할당!
      // 트랙이 생겼으므로 이미 할당된 순번을 읽어온다!
      // for문으로 생성시 data-seq에 순번이 있음!
      pseq = $(this).attr("datatype");
      // console.log("포토박스순번:"+pseq)

      // 1. 클릭된 박스의 하위 img 요소의 src 읽어오기
      // 속성읽기: attr(속성명)
      let isrc = $("img", this).attr("src");
      // console.log("이미지경로:" + isrc);

      // 2. 이미지경로 변경하기 -> smGallery는 불필요!
      // -> 큰 이미지경로는 mob폴더경로만 없으면됨!
      // isrc = isrc.replace("/mob", "");
      // console.log("변경경로:" + isrc);

      // 3. 이미지경로 적용하기
      // 대상: 큰 이미지 -> #imbx img
      // 사용메서드: attr(속성명,속성값)
      imbx.find("img").attr("src", isrc);


      // 5. 큰 이미지박스, 큰 이미지배경 보이기
      imbx.fadeIn(300);
      bgbx.fadeIn(300);

      // 6. 큰 이미지보기시 body의 스크롤막기
      // $("body").css({
      //     overflow: "hidden"
      // }); ////// css ////////
    }); ///////////// click ////////////////////
    ////////////////////////////////////////////

    /////////////////////////////////////////////
    //////////// 4. 닫기버튼구현 /////////////////
    /////////////////////////////////////////////
    $(".cbtn")
      .hover(
        function () {
          // over
          $(this).animate(
            {
              rotate: "90deg",
            },
            100
          ); ///// animate /////////
          // rotate속성은 회전기능
        },
        function () {
          // out
          $(this).animate(
            {
              rotate: "0deg",
            },
            100
          ); ///// animate /////////
        }
      ) ////// hover //////
      .click(function (e) {
        // 1. 기본이동막기
        e.preventDefault();

        // 2. 큰 이미지박스, 큰 이미지 배경 숨기기
        imbx.fadeOut(300);
        bgbx.fadeOut(300);

        // 3. body 스크롤막기 해제하기
        // $("body").css({
        //     overflow: "visible"
        // }); //////// css /////////
      }); ///////////// click /////////////
    /////////////////////////////////////////////

    //////////////////////////////////////////////
    /////// 5. 큰 이미지 변경 이동버튼 구현 ////////
    //////////////////////////////////////////////
    // 대상: .abtn
    // 방향구분: 클릭된 버튼이 .rb인지 .lb인지 알아냄
    // -> is() 메서드로 알아낸다!!!
    $(".abtn").click(function (e) {
      // 기본이동막기
      e.preventDefault();

      // 1. 버튼 구분하기 : is(".rb")는 오른쪽버튼인가?
      let wbtn = $(this).is(".rb");
      // console.log("오른쪽버튼?" + wbtn);

      // 2. 버튼에 따라 포토박스 순번변경하기
      // 원리: 포토박스 순번을 변경하여 이미지와 설명을 변경함
      if (wbtn) {
        // 오른쪽버튼
        pseq++;
        if (pseq === pcnt+1) pseq = 1;
        // 한계수 - 순번이 개수+1이면 처음으로
      } ////////// if문 //////////////
      else {
        // 왼쪽버튼
        pseq--;
        if (pseq === 0) pseq = pcnt;
        // 한계수 - 번호가 1보다 작으로 끝번호로
      } ////////// else문 ////////////

      // console.log("변경순번:" + pseq);

      // 3. 변경된 순번에 맞는 큰 이미지와 설명넣기
      // 3-1. 큰 이미지 변경 : 이미지이름은 순번보다 1큼
      imbx.find("img").attr("src", 
      "./images/Category/" + cat + "/" + icat + "/" + pseq + ".jpg");
    }); ////////////// click /////////////////////
    //////////////////////////////////////////////
  }, []);

  return (
    <>
      {/* 1. 메인사진 파트 */}
      <div className="main-img">
        {/* 메인이미지 : 첫번째 이미지*/}
        <img src={"./images/Category/" + cat + "/" + icat + "/1.jpg"} />
        <div className="namebx">
          {/* 숙소이름 : catData - name*/}
          <h1>{name}</h1>
          {/* 숙소평점 : catData - score*/}
          <ul>
            <h3>★{score}</h3>
            {/* 숙소위치 : subData - gps*/}
            <h3>{selData.gps}</h3>
          </ul>
        </div>
      </div>
      {/* 2. 숙소 정보 파트 */}
      <div className="deinfo">
        {/* 숙소구성 : subData - room */}
        <h2>{selData.room}</h2>
        {/* 세로 구분선 */}
        <div className="line"></div>
        {/* 숙소 상세정보 : subData - detail */}
        {/* 데이터에 입력된 엔터키 br로 변경해서 화면에 그대로 출력하는법
        엔터는 \n로 입력되기때문에 \n마다 잘라주고 리턴값에 <br/>로 map 돌려주기 */}
        <p>
          {selData.detail.split("\n").map((line,i) => {
            return (
              <Fragment key={i}>
                {line}
                <br />
              </Fragment>
            );
          })}
        </p>
      </div>
      {/* 3. 숙소 시설 파트 */}
      <div className="amenity-box">
        {/* 백그라운드 이미지 : 두번째 이미지 */}
        <img src={"./images/Category/" + cat + "/" + icat + "/2.jpg"} />
        {/* 설명 박스 */}
        <div className="black-box">
          <h2>Amenities</h2>
          {/* 숙소시설 : subData - ameni */}
          <p>
            {selData.ameni.split("\n").map((line,i) => {
              return (
                <Fragment key={i}>
                  {line}
                  <br />
                </Fragment>
              );
            })}
          </p>
        </div>
      </div>
      {/* 4. 숙소 사진 파트 : 15장 그리드*/}
      <div className="gridbx">{makeList()}</div>

      {/* 5. 숙소 지도 파트 */}
      <div className="map">
        {/* 지도주소 */}
        <iframe src={selData.map}></iframe>
        {/* 지도정보 */}
        <div className="map-info">
          {/* 숙소이름 */}
          <h3>{name}</h3>
          {/* 숙소위치 */}
          <h3>{selData.gps}</h3>
        </div>
      </div>

      {/* 큰이미지 배경박스 */}
      <div id="bgbx">
        {/* 큰이미지 박스 */}
        <div id="imbx">
          {/* 큰 이미지 */}
          <img src="images/1.jpg" alt="큰 이미지" />
          {/* 이미지 설명 */}
          <h4></h4>
        </div>

        {/* 오른쪽버튼 */}
        <a href="#" className="abtn rb">
          <span className="ir">오른쪽버튼</span>
        </a>
        {/* 왼쪽버튼 */}
        <a href="#" className="abtn lb">
          <span className="ir">왼쪽버튼</span>
        </a>
        {/* 닫기버튼 */}
        <a href="#" className="cbtn">
          <span className="ir">닫기버튼</span>
        </a>
      </div>
    </>
  );
}
