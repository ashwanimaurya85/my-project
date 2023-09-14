import React from "react"

import Button from "./Components/Button" 
// function App(){



//     /*return <h1>Hello World</h1>*/
//     let a=10
//     let hello="ashwani Kumar"
//   //   let styleH1={
//   //     color:"tomato",
//   //     textAlign:"center",
//   //   }
//     return (
//    <div>
  
//     {/* <h1 style={styleH1}> Hello World ,{a}</h1> */}
//   <h1 style={{color:"tomato",textAlign:"center"}}> Hello World ,{a}</h1>
//     <p>{23+13+7663}</p>
//     {hello}
//      <p className='para'>this is a paragrpgh</p>
//         <button>Apple</button>
//      <button>red</button>
//      <button>My Button</button>
//     </div>
//     )
    
//   }
//   export default App

const App=()=>{

    return(
        <div>
            <h1>fruits</h1>
            <Button name="Apple" price={100} color="green" 
           // featchers={["A","B","C"]}
            />
            <Button name="Orange" color="orange"/>
        <Button name="Mangao" price="300" color="yellow"/>  

        </div>
    )
}

export default App
