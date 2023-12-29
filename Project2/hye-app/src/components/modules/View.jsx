// 메인페이지 둘러보세요 컨텐츠 컴포넌트
import { subData } from "../data/subData";
import { useLocation } from "react-router-dom";

export function View() {

  // 선택 데이터
  const selData = subData;

  console.log('선택데이터:',selData)

  const arr = ['a.jpg','b.jpg','c.jpg'];

  return (
    <>
      {/* 전체박스 */}
      <div className="view-box">
        {/* 타이틀 */}
        <h1>둘러보세요!</h1>
        {/* 하위 박스 */}
        <div className="view-random">
          {/* 랜덤 데이터 뿌려지는 박스 */}
          <div className="random-box">
            <ul>
              <li><img src={arr[0]} alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src={arr[9]} alt="" /></li>
            </ul>
            

            {/* selData.map((v,i)=>{
                
            })
                
             */}
            </div>
          {/* 오버시 이미지 크게보이는 박스 */}
          <div className="bigimg">
            {/* 이미지 어두운효과 박스 */}
            <div className="blackbx"></div>
            {/* 숙소 위치 */}
            <h3></h3>
            {/* 평점 */}
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
} ///////////// View ///////////////
