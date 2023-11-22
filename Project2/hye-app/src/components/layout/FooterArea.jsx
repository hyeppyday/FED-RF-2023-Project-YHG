import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function FooterArea() {
  return (
    <>
      {/* 하단영역 */}
      {
        <div className="footer">
          <div className="info">
            <h4>
              © 2023 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 ·
              한국의 변경된 환불정책 · 회사 세부정보
            </h4>
            <div className="sns">
              <a href="https://www.facebook.com/AirbnbKorea" target="_blank">
                <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
              </a>
              <a href="https://www.instagram.com/airbnb/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a href="https://twitter.com/airbnb" target="_blank">
                <FontAwesomeIcon icon={faSquareTwitter} size="xl" />
              </a>
              <a href="https://blog.naver.com/airbnbkr" target="_blank">
                <img src="./images/naverblog.png" alt="" />
              </a>
              <a href="https://post.naver.com/airbnb_kr" target="_blank">
                <img src="./images/naverpost.jpg" alt="" />
              </a>
            </div>
          </div>

          <p>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
            Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke,
            Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자
            등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
            080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 |
            에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와
            호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비
            플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와
            책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </p>
        </div>
      }
    </>
  );
}
