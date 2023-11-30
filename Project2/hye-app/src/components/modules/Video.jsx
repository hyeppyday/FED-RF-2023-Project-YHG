// 메인페이지 비디오 컴포넌트

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              frameborder="0"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="cat-ani">
            <h3>어떤 숙소를 찾으시나요?</h3>
            <h3>➡</h3>
            <h3 className="slide">
                <div className="value">해변 바로 앞</div>
                <div className="value">멋진 수영장</div>
                <div className="value">한옥</div>
                <div className="value">료칸</div>
                <div className="value">통나무집</div>
                <div className="value">캠핑장</div>
                <div className="value">섬</div>
                <div className="value">키클라데스 주택</div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
