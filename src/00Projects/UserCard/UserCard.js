import React from 'react'
const Uc=(props)=>{
    return(
    <div>
        <div className="ui card">
            <div className="content">
                <p className="header">Name</p>
                <div className="description">
                {props.children}
                    Please click below add him/her as friend
                </div></div>
                <div className='ui bottom button'>
                    <i className='add icon'></i>Add Friend
                </div>
            </div>



    </div>

    )
}

export default Uc;