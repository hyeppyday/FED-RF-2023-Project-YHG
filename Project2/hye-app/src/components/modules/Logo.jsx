import React from "react";

export const Logo = () => {
    // 객체형 스타일 적용
    const myStyle = {
      top: {
        width: "45px",
        height: "45px",
        marginRight: "30px"
      },
      bottom: {
        height: "80px",
      },
    };
  
    // 자식컴포넌트 처리용함수
    const nayaLogo = (txt) => {
      console.log(txt);
    }; /////////// nayaLogo //////////////
  
    const logoImg ='../../public/images/airbnb_logo.png'
    
    // 코드리턴
    return (
      <h1 style={myStyle} onClick={() => nayaLogo("나,로고야!")}>
        <img
          src={logoImg}
          alt="Airbnb logo"
        />
      </h1>
    );
  }; /////////// Logo /////////////