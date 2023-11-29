import { FooterArea } from "./FooterArea"
import { MainArea } from "./MainArea"
import { TopArea } from "./TopArea"
import { bnbCon } from "../modules/bnbContext"
import { useState } from "react"


// Airbnb 레이아웃 컴포넌트
export function Layout(){

    const [menuCat,setMenuCat] = useState("해변 바로 앞");

    const chgMenuCat = txt => {
        setMenuCat(txt);
    }

    return(
    <bnbCon.Provider value={{menuCat, chgMenuCat}}>
        <TopArea/>
        <MainArea value ={chgMenuCat}/>
        <FooterArea/>
    </bnbCon.Provider>
    )
} ////////////////// Layout /////////////////////