//  Airbnb PJ 숙소 상세페이지 컴포넌트

import { subData } from "../data/subData"
import { catData } from "../data/catData"

export function Detail(){
    return(
        <>
        {/* 1. 메인사진 파트 */}
        <div className="main-img">
            {/* 메인이미지 : 첫번째 이미지*/}
            <img src="" alt=""/>
            <div className="namebx">
                {/* 숙소이름 : catData - name*/}
                <h1></h1>
                {/* 숙소평점 : catData - score*/}
                <h3></h3>
                {/* 숙소위치 : subData - gps*/}
                <h3></h3>
            </div>
        </div>
        {/* 2. 숙소 정보 파트 */}
        <div className="deinfo">
            {/* 숙소구성 : subData - room */}
            <h2></h2>
            {/* 세로 구분선 */}
            <div className="line"></div>
            {/* 숙소 상세정보 : subData - detail */}
            <p></p>
        </div>
        {/* 3. 숙소 시설 파트 */}
        <div className="amenity-box">
            {/* 백그라운드 이미지 : 두번째 이미지 */}
            <img src="" alt="" />
            {/* 설명 박스 */}
            <div className="black-box">
                <h2>Amenities</h2>
                {/* 숙소시설 : subData - ameni */}
                <h3></h3>
            </div>
        </div>
        {/* 4. 숙소 사진 파트 */}
        {/* 5. 숙소 지도 파트 */}
        </>
    )
}