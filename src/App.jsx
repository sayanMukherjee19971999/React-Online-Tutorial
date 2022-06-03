import React from 'react';
import './App.css';

const date=new Date()
const cssGreeting={}

const heading={
    color: 'red',
    fontSize: '50px',
    fontWeight: 'bold',
    fontStyle: 'Roboto'
}
const content={
    padding: '20px 40px',
    backgroundColor: '#ffe9c5',
    borderRadius: '20px'
}

const hour=date.getHours()
let greeting=''
if(hour>=1 && hour<12){
  greeting='Good Morning'
  cssGreeting.color='green'
}
else if(hour>=12 && hour<19){
  greeting='Good Afternoon'
  cssGreeting.color='orange'
}
else if(hour>=19 && hour<=24){
  greeting='Good Evening'
  cssGreeting.color='black'
}

 function App(){
    //  return(
    //     <>
    //         <Heading />
    //         <Paragraph />
    //         <List />
    //     </>
    //  )

    return(
        <>
            <div style={content} className='container'>
                <h1 style={heading}>Hello Sir, <span style={cssGreeting}>{greeting}</span></h1>
            </div>
        </>
     )
 }

 export default App