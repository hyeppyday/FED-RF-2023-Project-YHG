import { Link } from "react-router-dom";
import { menu } from "../data/gnb";
import { bnbCon } from "./bnbContext";
import { useContext } from "react";

export function CatMenu(){
  const myCon = useContext(bnbCon);

  console.log(menu);
    return(
        menu.map((v, i) => (
        <li className="cat-menu" key={i} onClick={(e)=>{myCon.chgMenuCat(v.txt);e.stopPropagation()}}>
          <img src={v.img} alt={v.txt}/><br/>{v.txt}
        </li>
    ))
        
    )
} ///////////// showCat ///////////////