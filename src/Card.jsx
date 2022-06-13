import './Card.css';
import React from 'react';
import Images from './Images';

function Card(props){
    return(
        <div className='cards'>
            <div className='card'>
                <Images imageurl={props.imgsrc}/>
                <div className='card_info'>
                <span className='card_category'>{props.category}</span>
                <h3 className='card_title'>{props.title}</h3>
                <a href={props.link} target='_blank' rel="noreferrer">
                    <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Card