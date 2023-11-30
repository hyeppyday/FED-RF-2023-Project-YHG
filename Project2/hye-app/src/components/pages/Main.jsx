// 메인 첫 페이지 컴포넌트
import { useNavigate } from "react-router-dom"

export function Main(){
   const goNav = useNavigate();
   const goList = ()=>{
      goNav('/list');
   };


 return(
    <>
    <h1>나는 메인페이지!!</h1>
    </>
 )

} ////////////// Main //////////////////