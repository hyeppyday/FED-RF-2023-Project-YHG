import React from "react";
import { useContext } from "react";
import { bnbCon } from "./bnbContext";
import { useNavigate } from "react-router-dom"




export const Logo = () => {
  const goNav = useNavigate();

  const myCon = useContext(bnbCon);

  const logoImg ='./images/airbnb_logo.png'
  

    
    // 코드리턴
    return (
      <h1 onClick={() => goNav('/')}>
        
          <img
          className="logo"
            src={logoImg}
            alt="Airbnb logo"
          />
      </h1>
    );
  }; /////////// Logo /////////////