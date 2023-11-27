// 스와이퍼 플러그인 컴포넌트

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperApp(props) {
  // props.cat - 카테고리명
  // props.seq - 순번
  // 리스트만들기 함수 ////
  const makeList = () => {
    let temp = [];
    for (let x = 0; x < 8; x++) {
      temp[x] = (
        <SwiperSlide>
          <img
            src={"./images/Category/" + props.cat + "/" + props.seq + "/" + (x + 1) + ".jpg"}
          />
        </SwiperSlide>
      );
    } /////////// for /////////////

    // 배열을 리턴
    return temp;
  }; ///////////// makeList 함수 //////////

  // 리턴코드 ///////////////////
  return (
    <>
      <Swiper
        /* ref 속성에 useRef 할당변수를 넣어서 외부에 연결함 */
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        className="mySwiper"
      >
        {makeList()}
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////
