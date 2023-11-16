import { catData } from "../data/catData";

export function List(props){

    const selData =

    // 리스트 만들기 함수
    const makeList = (data) => {
        // console.log(data);
        return data.map((v, i) => (
          <li key={i}>
            {/* 숙소이미지 */}
            <img src="" alt="하하" />
            {/* 숙소정보 */}
              <section className="listtit">
                <h3>{v.name}</h3>
                <h3>{v.score}</h3>
                <h3>￦{v.price}</h3>
            </section>
          </li>
        ));
      };

}

