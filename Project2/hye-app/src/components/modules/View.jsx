// 메인페이지 둘러보세요 컨텐츠 컴포넌트

export function View(){
    
    return(
        <>
            {/* 전체박스 */}
            <div className="view-box">
                {/* 타이틀 */}
                <h1>둘러보세요!</h1>
                {/* 하위 박스 */}
                <div className="view-random">
                    {/* 랜덤 이미지 뿌려지는 박스 */}
                    <div className="random-box">

                    </div>
                    {/* 오버시 이미지 크게보이는 박스 */}
                    <div className="bigimg">
                        {/* 숙소 위치 */}
                        <h3></h3>
                        {/* 평점 */}
                        <h3></h3>
                        {/* 이미지 어두운효과 박스 */}
                        <div className="blackbx"></div>
                    </div>
                </div>
            </div>

        </>
    )
} ///////////// View ///////////////