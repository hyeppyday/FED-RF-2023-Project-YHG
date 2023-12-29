// 숙소 검색 컴포넌트

import $ from "jquery";


import '../../css/searching.css'
import { SchList } from "./SchList";
import { catData } from "../data/catData";


export function Searching(props){
// props.kword - 검색어전달
console.log("전달검색어:", props.kword);

// const sum = seldata.length;

    // 리턴 코드 ////////////////////////
  return (
    <>
     
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">'{props.kword}'의 검색 결과</h2>
          {/* 2-3. 숙소 리스트 컴포넌트 */}
          <SchList kword={props.kword} />
        </div>

    </>
  );
}