import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { bnbCon } from "../modules/bnbContext";
import { useCallback, useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Airbnb 레이아웃 컴포넌트
export function Layout() {
  // ************* Hook 상태관리 변수 ******************* //
  // 1. 로그인 상태 체크변수 : 로컬스 'minfo' 초기할당!
  const [logSts, setLogSts] = useState(localStorage.getItem("minfo"));
  // 2. 로그인 환영 메시지 상태변수
  const [logMsg, setLogMsg] = useState(null);

  ////////////// 로그아웃 함수 ////////////////////
  // -> TopArea 컴포넌트에 전달함!!
  const logOut = useCallback(() => {
    // 1. 로컬스 삭제(minfo)
    localStorage.removeItem("minfo");
    // 2. 로그인 상태값 업데이트
    setLogSts(null);
    // 3. 로그인 메시지 업데이트
    setLogMsg(null);
    // 4. 첫페이지로 이동
    // chgPage("/",{});
  }, []); ///////////// logOut ///////////////

  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  }); /////////// useEffect ///////////

  // 랜더링 후 실행구역 한번만 ///
  useEffect(() => {
    // 로그인 로컬스가 있으면 환영메시지 넣기
    if (localStorage.getItem("minfo")) {
      const minfo = JSON.parse(localStorage.getItem("minfo"));
      // 유저아이콘
      const usrIcon = ["🦸‍♂", "🦸‍♀", "🕵️‍♂️", "👨‍🚀", "🧙‍♂️", "🧜‍♂️"];
      // 3. 컨텍스트 API에 공개된 로그인 메세지 업데이트하기
      setLogMsg(
        "환영합니다 " + minfo.unm +'님'+ usrIcon[Math.floor(Math.random() * 5)]
      );
    }
  }, []);
  const [menuCat, setMenuCat] = useState("해변 바로 앞");

  const chgMenuCat = (txt) => {
    setMenuCat(txt);
  };

  const [bNum, setBNum] = useState(100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   2. logSts : 로그인 상태값
   3. setLogSts : 로그인 상태값 업데이트
   4. setLogMsg : 로그인 환영 메세지 업데이트
   **********************************/

  return (
    <bnbCon.Provider
      value={{
        chgPage,
        menuCat,
        chgMenuCat,
        bNum,
        setBNum,
        logSts,
        setLogSts,
        setLogMsg,
      }}
    >
      <TopArea
        chgPageFn={chgPage}
        logSts={logSts}
        logMsg={logMsg}
        logOut={logOut}
      />
      <MainArea />
      <FooterArea />
    </bnbCon.Provider>
  );
} ////////////////// Layout /////////////////////
