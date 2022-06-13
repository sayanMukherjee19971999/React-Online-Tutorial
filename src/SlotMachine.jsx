import React from 'react';

const SlotMachine=(props)=>{
    const {x,y,z}=props

    if((x===y) && (y===z)){
        return<>
            <h4 style={{marginBottom: '5px'}}>{x} {y} {z}</h4>
            <h3 style={{marginBottom: '5px'}}>This is Matching</h3>
            <hr/>
        </>;
    }else{
        return<>
            <h4 style={{marginBottom: '5px'}}>{x} {y} {z}</h4>
            <h3 style={{marginBottom: '5px'}}>This is Not Matching</h3>
            <hr/>
        </>;
    }
}

export default SlotMachine;