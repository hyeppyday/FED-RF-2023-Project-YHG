import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

export function catMenu(){
    return(
        
        menu.map((v, i) => (
        <li className="cat-menu" key={i}>
          <Link to={v.link}><img src={v.img}alt={v.txt}/>{v.txt}</Link>
        </li>
    ))
        
    )
} ///////////// showCat ///////////////