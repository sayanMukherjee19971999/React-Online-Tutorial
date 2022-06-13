import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
// import './Card.css';
// import './index.css';

const Netflix=()=>{
    {Sdata.map((value, index)=>{
        console.log(index)
        return(
        <Card 
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.sname} 
            category={value.title}
            link={value.link}
        />
        );
    })}
}

export default Netflix;