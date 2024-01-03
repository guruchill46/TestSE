
//import './App.css';
//step2-- component-- class/function
// const Test=()=>{
//   return(
//     <div><h1>
//       welcome to  test site from app.js</h1></div>
//   )
// }
// //styling syntax
// // const Test=()=>{
// //   return(
// //     <div><h1 style="background-color:blue;color:white">--error
// //       welcome to  test site from app.js</h1></div>
// //   )
// // } 
// const Test=()=>{
//   return(
//     <div><h1 style={{backgroundColor:'blue',color:'white'}}>
//       welcome to  test site from app.js</h1></div>
//   )
// }
// //using variable
// const Test=()=>{
//   var mes="Welcome to variable";
//   return(
//     <div><h1>{mes}</h1></div>
//   )
// }
// //using style as variable
// const Test=()=>{
//   var style1={backgroundColor:'red',color:'white'}
//   return(
//     <div><h1 style={style1}>
//       welcome to  test site from app.js</h1></div>
//   )
// }
//class also should be used as className inside JSX. because class keyword already used in component.
// //variable object
// const Test=()=>{
//   var info={mes:"how are you",
// name:"guru"}
//   return(
//     <div><h1>
//       {info.name}</h1></div>
//   )
// }
//as Function
// const Test=()=>{
//   function my(){
//     return "hello world"
//   }
//   return(
//     <div><h1>
//       {my()}</h1></div>
//   )
// }



//react component syntax

// class Test extends React.Component{
//   state={
//     btn_color:'button-red'
//   }
//   onClick=(event)=>{
//     this.setState({
//       btn_color:'button-blue'
//   })}
//   render(){return(
//     <div><button onClick={this.onClick} className={this.state.btn_color}>Click me to change colour!</button></div>)}
//   }
  
// export default Test;



//Components:Nesting, Reusability, Configuration
//Nesting
// import React from 'react';
// import pic1 from './images/one.jpg';
// const Test=()=>{
//   return(
//     <div className="ui comments">
//       <div className='comment'>
//         <a href="/" className='avatar'><img src={pic1} alt="no"></img></a>
//         <div className='content'>
//           <a href="/" className='author'>Raju</a>
//           <div className='metadata'>
//             <span className='date'>today by 3pm</span>
//           </div>
//           <div className='text'>This is amazing</div>
//         </div>
//       </div>
//     </div>    
//     )}
// export default Test;

//Reusability and Configuration
// import React from 'react';
// import SingleComment from './SingleComment';
// import pic1 from './images/one.jpg';
// import pic2 from './images/two.jpg';
// import pic3 from './images/three.jpg';
// const Test=()=>{
//   return(

//     <div className='ui comments'>
//         <SingleComment name='raju' time='3pm' com="hello nice" pic={pic1}></SingleComment>
//         <SingleComment name='ash' time='3.30pm' com="wow nice" pic={pic2}></SingleComment>
//         <SingleComment name='devi' time='4.33pm' com="what the hell" pic={pic3}></SingleComment>  
//         </div>
//     )}

// export default Test;


//Usercard

import React from 'react';
import SingleComment from './SingleComment';
import pic1 from './images/one.jpg';
import pic2 from './images/two.jpg';
import pic3 from './images/three.jpg';
import U from './UserCard'
const Test=()=>{
  return(

    <div className='ui comments'>
      <U>
        <SingleComment name='raju' time='3pm' com="hello nice" pic={pic1}></SingleComment></U><br></br>
        <U><SingleComment name='ash' time='3.30pm' com="wow nice" pic={pic2}></SingleComment></U><br></br>
        <U><SingleComment name='devi' time='4.33pm' com="what the hell" pic={pic3}></SingleComment></U><br></br>  
        </div>
    )}

export default Test;
