import { Link } from "react-router-dom";
import { menu } from "../data/gnb";
import { bnbCon } from "./bnbContext";
import { useContext } from "react";
import $ from 'jquery';
import { useNavigate } from "react-router-dom"

export function CatMenu(){
  const myCon = useContext(bnbCon);
const goNav = useNavigate();


  // console.log(menu);
    return(

        menu.map((v, i) => (
        <li className="cat-menu" key={i} onClick={(e)=>{
          myCon.chgMenuCat(v.txt);
          $('.cat-icon').removeClass('on');
        e.stopPropagation();goNav('/list');
        }}>
          <img src={v.img} alt={v.txt}/><br/>{v.txt}
        </li>
        
    ))
    
     
    )
} ///////////// showCat ///////////////