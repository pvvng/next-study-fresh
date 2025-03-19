export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];

  return (  
  <div> 
      <h4 className="title">상품목록</h4>
      {상품.map((상품명, index)=>{
        return ( 
          <div key={index} className="food"> 
            <h4>{상품명} $40</h4>
            {/* 혹은  */}
            {/* <h4>{ 상품[인덱스] } $40</h4> */}
          </div>
        )
      })}
    </div>
  )
} 
