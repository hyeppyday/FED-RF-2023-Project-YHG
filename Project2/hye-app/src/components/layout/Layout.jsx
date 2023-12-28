import { FooterArea } from "./FooterArea"
import { MainArea } from "./MainArea"
import { TopArea } from "./TopArea"
import { bnbCon } from "../modules/bnbContext"
import { useCallback, useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


// Airbnb 레이아웃 컴포넌트
export function Layout(){

    const [menuCat,setMenuCat] = useState("해변 바로 앞");

    const chgMenuCat = txt => {
        setMenuCat(txt);
    }

    const [bNum,setBNum] = useState(100);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName,param) => goNav(pgName,param),[]);

    return(
    <bnbCon.Provider value={{chgPage,menuCat, chgMenuCat,bNum,setBNum}}>
        <TopArea
        chgPageFn={ chgPage } />
        <MainArea/>
        <FooterArea/>
    </bnbCon.Provider>
    )
} ////////////////// Layout /////////////////////