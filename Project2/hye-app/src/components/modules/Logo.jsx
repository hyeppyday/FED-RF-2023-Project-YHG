import React from "react";



export const Logo = () => {


  const logoImg ='./images/airbnb_logo.png'
    
    // 코드리턴
    return (
      
        <img
        className="logo"
          src={logoImg}
          alt="Airbnb logo"
        />
    );
  }; /////////// Logo /////////////