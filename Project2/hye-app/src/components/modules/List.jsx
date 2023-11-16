import {catData} from '../data/catData.js'



export function List(props){

  // 선택데이터 : 페이지 분류명으로 선택
  const selData = catData[props.cat];
  
  return(
    <section className="cat-list">
        {catData.map((v, i) => (
          <div className="listbox" key={i}>
            {/* 1. 이미지박스 */}
            <div className="imbx">
              <img src="" alt={v.txt} />
            </div>
            {/* 2. 설명박스 */}
            <div className="titbx">
              <h2>{v.name}</h2>
              <h3>★{v.score}</h3>
              <h3>{v.price}/박</h3>
            </div>
          </div>
        ))}
      </section>
  )
}
