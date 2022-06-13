import React from 'react';

const Images=(props)=>{
    return(
        <img src={props.imageurl} alt='myPic' className='card_img' />
    );
}

export default Images;