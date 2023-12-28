// 숙소 검색 컴포넌트

import $ from "jquery";


import '../../css/searching.css'
import { SchList } from "./SchList";
import { catData } from "../data/catData";


export function Searching(props){
// props.kword - 검색어전달
console.log("전달검색어:", props.kword);


// 검색기능 수행함수 ///////////////////
const searchList = () =>{
  let keyword = props.kword;
  
  const newList = catData.filter(v=>{
    if(v.scat.indexOf(keyword)!=-1)
    return true;
  })

  console.log('검색결과:',newList)
}

    // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">{props.kword}으로 검색한 숙소들</h2>
          {/* 2-3. 숙소 리스트 컴포넌트 */}
          <SchList/>
        </div>
      </section>
    </>
  );
}