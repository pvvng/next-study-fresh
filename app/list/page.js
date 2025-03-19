"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  let [수량, 수량변경] = useState([0,0,0]);

  return (  
  <div> 
      <h4 className="title">상품목록</h4>
      {상품.map((상품명, index)=>{
        return ( 
          <div key={index} className="food"> 
            <Image src={`/food${index}.png`} alt={상품명} width={150} height={150} />
            <h4>{상품명} $40</h4>
            <span> {수량} </span>
            <button onClick={()=>{ 
              let copy = [...수량]
              copy[0]++
              수량변경(copy)
            }}>+</button>
          </div>
        )
      })}
    </div>
  )
} 
