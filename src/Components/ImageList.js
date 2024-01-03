import React from 'react';

const ImageList=(props)=>{
    const im=props.imgs.map((x)=>{
        return(
            <img key={x.id} src={x.webformatURL} alt=""></img>
        )
    })

    return(
        <div>
        {im}
        </div>
    )
}

export default ImageList;