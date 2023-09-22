// 메인 JS - main.js

// 부드러운 스크롤 불러오기
import { startSS, setPos } from "./smoothScroll20.js";
// DOM 함수 불러오기
import dFn from "./dom.js";

// 부드러운 스크롤 호출
startSS();

// 0. 새로고침 시 맨 위로 이동
setTimeout(() => {
    // 윈도우 스크롤 맨위로
    window.scrollTo(0, 0);
    // 부드러운 스크롤 위치값 반영
    setPos(0);
    // 안하면 원래 위치로 스크롤 시 튐 !
  }, 400);
  
  // 0-1. 스크롤 바 트랙을 잡고 마우스로 위치 이동시 위치값 반영
  dFn.addEvt(window,'mouseup',()=>{
      setPos(window.scrollY);
  });
  // 0-2. 키보드 방향키 이동시 위치값 반영
  dFn.addEvt(window,'keyup',()=>{
      setPos(window.scrollY);
  });


// 1. 대상선정
const infoBox = dFn.qsa('.bx-info');
console.log(infoBox);

// 2. 이벤트 설정 /////////////////////////////////
// 대상 : window / 이벤트 종류 : scroll
dFn.addEvt(window, "scroll", scrollFn);


// 3. 함수 만들기 ////////////////////////////////
// 3-1. 스크롤 이벤트 함수
function scrollFn() {
    //   console.log("스크롤~~~!");
    
      // 1) 대상1 : 글자박스 패럴렉스 호출
      infoBox.forEach(ele=>
        moveEl(dFn.getBCR(ele),ele,setH1));
    } //////////// scrollFn ////////////////////////////

    // 셋팅값 변수 ////
// 윈도우 높이값
const winH = window.innerHeight;
// 패럴렉스 범위
const setH1 = 280

// 3-2. 패럴렉스 이동함수 /////////////////////////
function moveEl(elPos, ele, setH) {
  // 전달변수 :
  // (1) elPos - 위치값(getBCL값)
  // (2) ele - 대상요소(패럴렉스 대상)
  // (3) setH - 움직일 범위 수 (클수록 빨리 이동)

//   console.log(
//             "위치:", elPos,
//             "\n대상:", ele,
//             "\n범위:", setH);
    
    // [패럴렉스 범위 : 윈도우 높이값 ~ 0]
    // 화면에서 완전히 사라질 때 범위는 0보다 작다(약간의 마이너스 값)
    if(elPos < winH && elPos > -200){
        // 1. 위치이동값 계산
        // 실제이동값 = 정한범위 - (위치값*정한범위 / 전체범위)
        let x = setH - (elPos*setH / winH);
        console.log('x:',-x);

        // 2. 해당요소의 위치값 이동 CSS반영하기
        // Y축이동시 위쪽방향은 마이너스임 !! -x
        ele.style.transform = `
            translateY(${-x}px)
        `;
    } //////////////////////// if ///////////////////////////
}


/////// 뷰프로젝트 클릭시 영상 보이기
// 대상: 이벤트 - .cont-mvbtn , 변경 - .vpj
// 변경내용 : 버튼 클릭시 .vpj에 클래스 on 넣기
//           닫기 버튼 클릭시 .vpj에 클래스 on 빼기

// 1. 대상선정 //
const mvbtn = dFn.qs('.cont-mvbtn');
const vpj = dFn.qs('.vpj');
const cbtn = dFn.qs('.cbtn');
console.log('대상:',mvbtn,vpj,cbtn);

// 2. 이벤트설정 및 함수구현
// 2-1. 뷰프로젝트 버튼 클릭시
dFn.addEvt(mvbtn,'click',()=>{
  /* 영상보이기 */
  vpj.classList.add('on');
  /* 가림막보이기 */
  document.body.classList.add('on');

  
}); //////// click이벤트함수 ////////


// 2-2. 닫기버튼 클릭시
dFn.addEvt(cbtn,'click',()=>{
  /* 영상숨기기 */
  vpj.classList.remove('on');
  /* 가림막숨기기 */
  document.body.classList.remove('on');
}); //////// click이벤트함수 ////////



