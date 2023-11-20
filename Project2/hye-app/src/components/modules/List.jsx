import {catData} from '../data/catData.js'



export function List(props){
  // props.cat은 전달된 카테고리 정보(데이터 선별용)
const selData = catData.filter(v=>{if(v.category==decodeURIComponent(props.cat))return true});
  console.log(selData);
  return(
    <section className="cat-list">
        {selData.map((v, i) => (
          <div className="listbox" key={i}>
            {/* 1. 이미지박스 */}
            <div className="imbx">
              <img src={"./images/Category/"+v.category+"/"+(i+1)+"/1.jpg"} alt={v.txt} style={{height:'150px'}} />
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
