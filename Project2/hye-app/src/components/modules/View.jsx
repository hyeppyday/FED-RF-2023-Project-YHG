// 메인페이지 둘러보세요 컨텐츠 컴포넌트
import { subData } from "../data/subData";
import { useLocation } from "react-router-dom";

import '../../css/view.css';

export function View() {

  

  // 선택 데이터
  const selData = subData;

  console.log('선택데이터:',selData)

  const arr = [
    'https://cdn.pixabay.com/photo/2016/05/02/09/45/japan-1366872_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/07/15/11/51/resort-846075_640.jpg',
    'https://cdn.pixabay.com/photo/2016/08/16/17/25/victorian-inn-1598444_640.jpg',
    'https://cdn.pixabay.com/photo/2020/01/06/21/24/evening-4746326_640.jpg',
    'https://cdn.pixabay.com/photo/2016/07/05/18/08/slave-quarters-1499121_640.jpg',
    'https://cdn.pixabay.com/photo/2022/02/14/10/50/resort-7012893_640.jpg',
    'https://cdn.pixabay.com/photo/2016/04/22/13/37/holiday-1345780_640.jpg',
    'https://cdn.pixabay.com/photo/2019/11/20/02/11/hotel-4638955_640.jpg',
    'https://cdn.pixabay.com/photo/2022/03/24/01/13/cabin-7088140_640.jpg',
    'https://cdn.pixabay.com/photo/2021/07/21/06/25/outdoor-furniture-6482346_640.jpg'];

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
              <li><img src={arr[1]} alt="" /></li>
              <li></li>
              <li><img src={arr[9]} alt="" /></li>
              <li></li>
              <li><img src={arr[5]} alt="" /></li>
              <li><img src={arr[6]} alt="" /></li>
              <li></li>
              <li></li>
              <li><img src={arr[8]} alt="" /></li>
              <li><img src={arr[4]} alt="" /></li>
              <li><img src={arr[3]} alt="" /></li>
              <li><img src={arr[2]} alt="" /></li>
              <li></li>
              <li></li>
              <li><img src={arr[7]} alt="" /></li>
              <li></li>
              <li></li>
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
            <h3>도쿄,일본</h3>
            {/* 평점 */}
            <h3>★ 4.59</h3>
          </div>
        </div>
      </div>
    </>
  );
} ///////////// View ///////////////
