//  Airbnb PJ 숙소 상세페이지 컴포넌트

import { subData } from "../data/subData";
import { useLocation } from "react-router-dom";

import '../../css/detail.css'
import { data } from "jquery";

export function Detail() {
  const loc = useLocation();

  
  const idx = loc.state.idx;
  const name = loc.state.name;
  const score = loc.state.score;
  const cat = loc.state.cat;

  let seq = loc.state.seq;

  
  // 선택 데이터
  const selData = subData[idx-1];
  
  // console.log("./images/Category/"+cat+"/"+idx+"/1.jpg");


  const makeList = () => {
    let temp = [];
    for (let x = 0; x < 16; x++) {
      temp[x] = (
          <img
            src={"./images/Category/" + cat + "/" + seq+1 + "/" + (x + 1) + ".jpg"}
          />
          );
        } /////////// for /////////////
      }
      console.log(makeList())

  return (
    <>
      {/* 1. 메인사진 파트 */}
      <div className="main-img">
        {/* 메인이미지 : 첫번째 이미지*/}
        <img src={"./images/Category/"+cat+"/"+(seq+1)+"/1.jpg"} />
        <div className="namebx">
          {/* 숙소이름 : catData - name*/}
          <h1>{name}</h1>
          {/* 숙소평점 : catData - score*/}
          <ul>
              <h3>★{score}</h3>
              {/* 숙소위치 : subData - gps*/}
              <h3>{selData.gps}</h3>
          </ul>
        </div>
      </div>
      {/* 2. 숙소 정보 파트 */}
      <div className="deinfo">
        {/* 숙소구성 : subData - room */}
        <h2>{selData.room}</h2>
        {/* 세로 구분선 */}
        <div className="line"></div>
        {/* 숙소 상세정보 : subData - detail */}
        {/* 데이터에 입력된 엔터키 br로 변경해서 화면에 그대로 출력하는법
        엔터는 \n로 입력되기때문에 \n마다 잘라주고 리턴값에 <br/>로 map 돌려주기 */}
        <p>{selData.detail.split("\n").map((line)=>{
          return(
            <>
            {line}
            <br/>
            </>
          )
        })}</p>
      </div>
      {/* 3. 숙소 시설 파트 */}
      <div className="amenity-box">
        {/* 백그라운드 이미지 : 두번째 이미지 */}
        <img src={"./images/Category/"+cat+"/"+(seq+1)+"/2.jpg"} />
        {/* 설명 박스 */}
        <div className="black-box">
          <h2>Amenities</h2>
          {/* 숙소시설 : subData - ameni */}
          <h3>{selData.ameni.split("^").map((line)=>{
            return(<>
            {line}
            <br/>
            </>)
          })}</h3>
        </div>
      </div>
      {/* 4. 숙소 사진 파트 : 15장 그리드*/}
      <div className="gridbx">
        {makeList()}
      </div>
      {/* 5. 숙소 지도 파트 */}
      <div className="map">
        {/* 지도주소 */}
        <iframe src={selData.map}>
          {/* 지도정보 */}
          <div className="map-info">
            {/* 숙소이름 */}
            <h3></h3>
            {/* 숙소위치 */}
            <h3></h3>
          </div>
        </iframe>
      </div>
    </>
  );
}
