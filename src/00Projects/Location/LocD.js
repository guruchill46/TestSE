// import React from 'react';

// const Ld=(props)=>{
//     return(
//         <div>your current latitude is {props.lat}</div>
//     )
// }

// export default Ld;


//to detect north or south ternary operator used
// import React from 'react';

// const Ld=(props)=>{
//     var reg=(props.lat>0)?'Northern':'southern';

//     return(
//         <div>you are currently in {reg} hemisphere.</div>
//     )
// }

// export default Ld;



//react knows lat is prop only. so we can directly define lat
// import React from 'react';

// const Ld=({lat})=>{
//     var reg=(lat>0)?'northern':'southern';

//     return(
//         <div>you are currently in {reg} hemisphere.</div>
//     )
// }

// export default Ld;


//adding picture
// import React from 'react';
// import No from './images/N.jpg';
// import So from './images/S.jpg';

// const Ld=({lat})=>{
//     var reg=(lat>0)?'northern':'southern';
//     var pic=(lat>0)?No:So;

//     return(
//         <div>you are currently in {reg} hemisphere.<img src={pic} alt="not available"/></div>
//     )
// }

// export default Ld;



//for big projects config is used for simplification
// import React from 'react';
// import No from './images/N.jpg';
// import So from './images/S.jpg';

// const Config={
//     northern:{
//         text: "you are in Northern Hemisphere",
//         pic: No
//     },
//     southern:{
//         text: "you are in Southern Hemisphere",
//         pic: So
//     }

// }

// const Ld=({lat})=>{
//     var reg=(lat>0)?'northern':'southern';
//     const {text,pic}=Config[reg]

//     return(
//         <div>{text}<img src={pic} alt="not available"/></div>
//     )
// }

// export default Ld;



//for styling
// import React from 'react';
// import No from './images/N.jpg';
// import So from './images/S.jpg';
// import './Loc.css';
// const Config={
//     northern:{
//         text: "you are in Northern Hemisphere",
//         pic: No
//     },
//     southern:{
//         text: "you are in Southern Hemisphere",
//         pic: So
//     }

// }

// const Ld=({lat})=>{
//     var reg=(lat>0)?'northern':'southern';
//     const {text,pic}=Config[reg]

//     return(
//         <div className={reg}>{text}<img src={pic} alt="not available"/></div>
//     )
// }

// export default Ld;



//for aligning using symenticUI
import React from 'react';
import No from './images/N.jpg';
import So from './images/S.jpg';
import './Loc.css';
const Config={
    northern:{
        text: "you are in Northern Hemisphere",
        pic: No
    },
    southern:{
        text: "you are in Southern Hemisphere",
        pic: So
    }

}

const Ld=({lat})=>{
    var reg=(lat>0)?'northern':'southern';
    const {text,pic}=Config[reg]

    return(
        <div className={reg}>
            <div className='ui raised segment'>
                <div className='image'>
                <img src={pic} alt="not available"/>
                <div className='ui teal bottom attached label' style={{textAlign:'center'}}>
                {text}
                </div>
                </div>
                </div></div>
    )
}

export default Ld;
