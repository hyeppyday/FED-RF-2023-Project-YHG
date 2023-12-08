import { FooterArea } from "./FooterArea"
import { MainArea } from "./MainArea"
import { TopArea } from "./TopArea"
import { bnbCon } from "../modules/bnbContext"
import { useState } from "react"
import { useEffect } from "react"


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


    return(
    <bnbCon.Provider value={{menuCat, chgMenuCat,bNum,setBNum}}>
        <TopArea/>
        <MainArea/>
        <FooterArea/>
    </bnbCon.Provider>
    )
} ////////////////// Layout /////////////////////