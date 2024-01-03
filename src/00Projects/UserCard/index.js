//step1--importing libraries
import React from "react";
import ReactDOM from "react-dom";
import Test from './App';
// //step2-- component-- class/function
// const Test=()=>{
//   return(
//     <div><h1>
//       welcome to  test site</h1></div>
//   )
// } 
//step3-- display data
ReactDOM.render(
  <Test/>,
  document.querySelector("#root")
)

