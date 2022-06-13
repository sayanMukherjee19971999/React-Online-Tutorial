import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import './Card.css';
import './index.css';
// import './App.css';

// const date=new Date()
// const cssGreeting={}

// const heading={
//     color: 'red',
//     fontSize: '50px',
//     fontWeight: 'bold',
//     fontStyle: 'Roboto'
// }
// const content={
//     padding: '20px 40px',
//     backgroundColor: '#ffe9c5',
//     borderRadius: '20px'
// }

// const hour=date.getHours()
// let greeting=''
// if(hour>=1 && hour<12){
//   greeting='Good Morning'
//   cssGreeting.color='green'
// }
// else if(hour>=12 && hour<19){
//   greeting='Good Afternoon'
//   cssGreeting.color='orange'
// }
// else if(hour>=19 && hour<=24){
//   greeting='Good Evening'
//   cssGreeting.color='black'
// }

//  function App(){
//     //  return(
//     //     <>
//     //         <Heading />
//     //         <Paragraph />
//     //         <List />
//     //     </>
//     //  )

//     return(
//         <>
//             <div style={content} className='container'>
//                 <h1 style={heading}>Hello Sir, <span style={cssGreeting}>{greeting}</span></h1>
//             </div>
//         </>
//      )
//  }

//  export default App

// const youtuber="Sayan Technical"
// const favprog="React Tutorial"

// function myName(){
//     let value="Raj Mukherjee"
//     return(  
//         value
//     );
// }

// export default youtuber
// export {favprog, myName}


// Calculator in ReactJS Challenge 5
// function Sum(a,b){
//     let sum=a+b
//     return sum
// }

// function Substract(a,b){
//     let diff=a-b
//     return diff
// }

// function Multiply(a,b){
//     let mult=a*b
//     return mult
// }

// function Division(a,b){
//     let div=a/b
//     return div.toFixed(2)
// }

// export default Sum
// export {Substract, Multiply, Division}



// Netflix chalenge in ReactJS
const App=()=>(
    <>
      <h1 className='heading_style'>List of Top 6 Netflix Series in 2020</h1>
      
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
    </>
  );

  export default App;