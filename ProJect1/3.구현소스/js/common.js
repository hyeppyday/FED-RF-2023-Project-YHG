export function setHam() {
  ////////////// 모바일 시 기능구현 ///////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  // 1. 햄버거 버튼 클릭시 메뉴 나오게
  // 대상: .ham / .header
  const hEle = $(".header");
  $(".ham").click(() => {
    hEle.toggleClass("on");

    // is() 메서드 : 선택요소의 이름확인!
    console.log("지금.header에 .on있니?", hEle.is(".on"));
    // 만약 .header.on 이면 body에 스크롤바 숨기기
    if (hEle.is(".on")) $("html,body").css({ overflow: "hidden" });
    // 아니면 넣었던 스타일 지우기
    else $("html,body").attr("style", "");
  }); //////// click ////////////

  // 2. 메뉴 클릭시 하위메뉴 보이기 //////
  // 대상: .gnb>li
  $(".gnb li").click(function () {
    if (!mob) return; //모바일 아니면 나가!

    console.log("나클릭?", this);
    // 서브메뉴 슬라이드 애니로 보이기/숨기기
    // 대상: .smenu
    $(this)
      .find(".sub-menu") // 클릭된li 하위 .smenu
      .slideToggle(300, "easeInOutQuad") // 열거나 닫거나함
      .parent() // 부모로 올라감 li
      .siblings()
      .find(".sub-menu") // 다른 li들 하위 .smenu
      .slideUp(300, "easeInOutQuad"); // 스르륵 닫힘! 모두
  }); //////////// click ////////////////

  // 모바일일 경우에만 서브페이지 있는 li a태그 기본이동 막기
  $(".noclick").click(function (e) {
    if (!mob) return;
    e.preventDefault();
  });
} ///////// setHam ////////////////////
