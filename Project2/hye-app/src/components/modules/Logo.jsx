import React from "react";
import { useContext } from "react";
import { bnbCon } from "./bnbContext";



export const Logo = () => {

  const myCon = useContext(bnbCon);

  const logoImg ='./images/airbnb_logo.png'
  

    
    // 코드리턴
    return (
      <h1 onClick={() => 
        // 컨텍스트 API 함수 호출!
        myCon.chgMenuCat('main',{})}>
        
          <img
          className="logo"
            src={logoImg}
            alt="Airbnb logo"
          />
      </h1>
    );
  }; /////////// Logo /////////////