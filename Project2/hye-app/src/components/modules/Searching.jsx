// 숙소 검색 컴포넌트

import $ from "jquery";


import '../../css/searching.css'
import { SchList } from "./SchList";
import { catData } from "../data/catData";
import { useEffect, useState } from "react";


import { useNavigate } from 'react-router-dom';

export function Searching(props){
// props.kword - 검색어전달
console.log("전달검색어:", props.kword);

// 자식 컴포넌트 SchList에서 카운트된 검색결과 data의 개수를 부모
// 컴포넌트의 상태변수와 업데이트 함수를 통해 실시간 변경함!
const [selDataCnt,setSelDataCnt] = useState(0);
const updateCnt = (x) => setSelDataCnt(x);
const navigate = useNavigate();


    // 리턴 코드 ////////////////////////
  return (
    <>
     
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit"><button onClick={() => navigate(-1)} title="이전 페이지로">〈</button>'{props.kword}'의 검색 결과 ({selDataCnt})</h2>
          {/* 2-2. 이전페이지로 돌아가기 */}
          
          {/* 2-3. 숙소 리스트 컴포넌트 */}
          <SchList kword={props.kword}
          // 부모함수를 프롭스다운!
          dataCnt={updateCnt}/>
        </div>

    </>
  );
}