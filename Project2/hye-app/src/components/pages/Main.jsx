import { Video } from "../modules/Video";
import { Style } from "../modules/Style";

import "../../css/main.css";
import { useEffect } from "react";

import $ from "jquery";
import { View } from "../modules/View";

// 메인 첫 페이지 컴포넌트
export function Main() {
  useEffect(() => {
    const winH = window.innerHeight / 4;
    const tit = $("#top-area h1");
    const i3BoxTop = $(".panel").offset().top;
    const i3Tg = $(".imgbx");
    const mtit = $(".panel h1");
    const viewtit = $(".view-box h1");

    // // console.log(i3BoxTop);

    tit.css({
      opacity: 1,
      transform: "scale(1)",
      transformOrigin: "bottom",
      transition: ".5s ease-out",
    });

    const showEle = (e) => {
      let scTop = $(window).scrollTop();
      // console.log(scTop);

      /// 타이틀 ////
      if (scTop > 0 && scTop <= 112) {
        tit.css({ opacity: 0.3, transform: "scale(0.9)" });
      } else if (scTop > 112) {
        tit.css({ opacity: 0, transform: "scale(0.7)" });
      } else {
        tit.css({ opacity: 1, transform: "scale(1)" });
      }

      // 3장이미지
      if (scTop > i3BoxTop - winH * 2 && !mob) {
        i3Tg.addClass("on");
      } else {
        i3Tg.removeClass("on");
      }

      // 작은 타이틀
      mtit.css({
        opacity: 0,
        transform: "translateY(-100%)",
        transition: ".8s ease-out",
      });

      if (scTop > 800 && !mob) {
        mtit.css({ opacity: 1, transform: "translateY(0)" });
      }
      else if(mob){
        mtit.css({ opacity: 1, transform: "translateY(0)" });
      }

      // 작은 타이틀2
      viewtit.css({
        opacity: 0,
        transform: "translateY(-100%)",
        transition: ".8s ease-out",
      });

      if (scTop > 1700) {
        viewtit.css({ opacity: 1, transform: "translateY(0)" });
      }
    };

    window.addEventListener("scroll", showEle);

    ///////////////////////////////
    // 모바일적용 여부 코드 ////////
    let mob = 0; // 0-DT, 1-모바일
    // 모바일 검사함수 /////
    const chkMob = () => {
      if ($(window).width() <= 800) mob = 1;
      else mob = 0;
      console.log("모바일?", mob);
    }; /////// chkMob함수 ///////

    // 모바일 검사함수 최초호출
    chkMob();

    // 화면 리사이즈 시 모바일 검사함수 호출
    $(window).resize(chkMob);

    return () => {
      window.removeEventListener("scroll", showEle);
      chkMob();
    };
  }, []);

  return (
    <>
      <Video />
      <Style />
      <View />
    </>
  );
} ////////////// Main //////////////////
