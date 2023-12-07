// 메인페이지 비디오 컴포넌트

import $ from 'jquery'
import { SwiperTxt } from '../plugin/SwiperTxt';


export function Video() {
  

return (
    <>
      <div id="top-area">
        <h1>
          여행은, <br />
          살아보는 거야!
        </h1>
        <div className="vidbx">
          <div className="video">
            <div className="bdbx"></div>
            <iframe
              src="https://www.youtube.com/embed/TAf1_23Ihmw?autoplay=1&mute=1&controls=0&loop=1&playlist=TAf1_23Ihmw"
              style={{border:'none'}}
              allow="autoplay"
            ></iframe>
          </div>
          <div className="cat-ani">
            <h3>어떤 숙소를 찾으시나요?</h3>
            <h3>➡</h3>
            <h3 className="slide">
                <SwiperTxt/>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
