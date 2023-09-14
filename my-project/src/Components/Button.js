import React  from "react";
const Button=({name,price,color})=>{
    //console.log("props",props)//{name: 'Apple', price: '100'}name: "Apple"price: "100"[[Prototype]] props {name: 'Apple', price: '100'}
    return(
        // <button>Apple</button>
       // <button>{props.name}</button>
      
       <div>
        <button style={{color:color}}>{name}</button>
        {
        
price ?
 <p>price of {name} is {price}</p>:
 <p>out of stock</p>
        }
         {/* <h1>{'{}'}</h1> */}
       </div>
      
        )
    }


//     <div>
//     <button style={{color: props.color}}>{props.name}</button>
//     {
    
// props.price ?
// <p>price of {props.name} is {props.price}</p>:
// <p>out of stock</p>
//     }
//    </div>
//     )
// }

export default Button


//props=>properites

// coditions => if else => ternary operater