//get geolocation
// import React from 'react';
// import ReactDOM from 'react-dom';
// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (pos)=>console.log(pos),
//         (err)=>console.log(err)
//     );
//     return(
//         <div>hello</div>
//     )
    
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )



//based on Class to use state and to display result
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{

//     render(){
//     window.navigator.geolocation.getCurrentPosition(
//         (pos)=>console.log(pos),
//         (err)=>console.log(err)
//     )
//     return(
//         <div>hello</div>
//     )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )



//Based on constructor to use state
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={lat: null}
//         this.state={err: ''}

//     }

//     render(){
//     window.navigator.geolocation.getCurrentPosition(
//         (pos)=>this.setState({lat: pos.coords.latitude}),
//         (error)=>this.setState({err: error.message})
//     )
//     return(
//         <div>{this.state.lat}
//         {this.state.err}</div>
//     )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//position syntax can be put in constructor
//and using if conditions to display results-- condition based rendering
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={lat: null}
//         this.state={err: ''}
//         window.navigator.geolocation.getCurrentPosition(
//             (pos)=>this.setState({lat: pos.coords.latitude}),
//             (error)=>this.setState({err: error.message})
//         )

//     }
// render(){
//     if(this.state.lat && !this.state.err){
//         return(
//             <div>Your current location is {this.state.lat} latitude</div>    
//         )
//     }
//     if(!this.state.lat && this.state.err){
//         return(<div>Error: {this.state.err}</div>)}
//     else{return(<div style={{textAlign:"center",margin:'200px'}}><p>Click Allow to get location</p></div>)}
    
// }}
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )



//to know north or south and locD file created for reusability
import React from 'react';
import ReactDOM from 'react-dom';
import Ld from './LocD'
class App extends React.Component{

    constructor(props){
        super(props)
        this.state={lat: null}
        this.state={err: ''}
        window.navigator.geolocation.getCurrentPosition(
            (pos)=>this.setState({lat: pos.coords.latitude}),
            (error)=>this.setState({err: error.message})
        )

    }
render(){
    if(this.state.lat && !this.state.err){
        return(
            <div><Ld lat={this.state.lat}></Ld></div>    
        )
    }
    if(!this.state.lat && this.state.err){
        return(<div>Error: {this.state.err}</div>)}
    else{return(<div style={{textAlign:"center",margin:'200px'}}><p>Click Allow to get location</p></div>)}
    
}}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)