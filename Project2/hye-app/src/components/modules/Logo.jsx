import React from "react";
import { useNavigate } from "react-router-dom";



export const Logo = (props) => {

  const goNav = useNavigate();

    // 자식컴포넌트 처리용함수
    const logoroot = (txt) => {
      // 라우터 이동하기
    goNav("/");
      console.log(txt);
    }; /////////// logoroot //////////////

  const logoImg ='./images/airbnb_logo.png'
    
    // 코드리턴
    return (
      <h1 className="logo" onClick={() => logoroot("나,로고야!")}>
        <img
          src={logoImg}
          alt="Airbnb logo"
        />
      </h1>
    );
  }; /////////// Logo /////////////