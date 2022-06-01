import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>Welcome to the world of programming</p>
//   </div>, 
//   document.getElementById('root')
// );


//in React v.16.0.0 and above it is possible fot the render method to pass an array of elements
//rather than passing muktiple elements in a single div
// ReactDOM.render(
//   [
//     <h1>Hello World</h1>,
//     <p>Welcome to the world of programming</p>
//   ], 
//   document.getElementById('root')
// );


// Understanding React.Fragment :- If we use div to render multiple jsx elements
// then on inspecting the page we see that it creates a div inside the div with root=id
// so to prevent this we can use React.Fragment in place of div to display multiple
// JSX elements but on inspecting it will not create a new div and display the elements 
// inside the div with id=root. We can also write <></> instead of writing React.Fragment
// which will do the same function
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello World</h1>
//     <p>Welcome to the world of programming</p>
//   </React.Fragment>, 
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <h1>Netflix Series</h1>
//     <p>List of 5 Best Series</p>
//     <ol>
//       <li>Dark</li>
//       <li>Extra curricular</li>
//       <li>My Holo Love</li>
//       <li>My first-2 love</li>
//       <li>Mr Robot</li>
//     </ol>
//   </>, 
//   document.getElementById('root')
// );


// Javascript Expressions
// We can only use expressions inside curly braces but not statements i.e for loop , if-else etc.
// const name='Sayan Mukherjee'
// ReactDOM.render(
//   <>
//     <h1>My name is {name}</h1>
//     <h4> Addition of 2 and 3 is {2+3}</h4>
//     <h6>I am generating a random number= {Math.random()}</h6>
//   </>, 
//   document.getElementById('root')
// );

// Template Literals in JSX in ReactJS
// const fname='Sayan'
// const lname='Mukherjee'
// ReactDOM.render(
//   <>
//     <h1>{`My name is ${fname} ${lname}`}</h1>
//     <h4> Addition of 2 and 3 is {2+3}</h4>
//     <h6>I am generating a random number= {Math.random()}</h6>
//   </>, 
//   document.getElementById('root')
// );


// Challenge 2 in React
// const currentdate=new Date()
// const currDate=currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()
// const currTime=currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds()+":"+currentdate.getMilliseconds()
// const fname='Sayan'
// const lname='Mukherjee'
// ReactDOM.render(
//   <>
//     <h1>{`Hello, My name is ${fname} ${lname}`}</h1>
//     <h4>Todays date is {currDate}</h4>
//     <h4>Todays time is {currTime}</h4>
//   </>, 
//   document.getElementById('root')
// );


//JSX Attributes in ReactJS
// The JSX attributes are written in camel case. This is the convension in React
// const fname='Sayan'
// const lname='Mukherjee'
// const img1="https://picsum.photos/200/300"
// const youtube="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">{`Hello, My name is ${fname} ${lname}`}</h1>
//     <img src={img1} alt=''/>
//     <a href={youtube} target="_blank" rel="noreferrer">Click to learn React</a>
//   </>, 
//   document.getElementById('root')
// );


// CSS style and importing CSS files in React
// const fname='Sayan'
// const lname='Mukherjee'
// const img1="https://picsum.photos/200/300"
// const youtube="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
// ReactDOM.render(
//   <>
//     <h1 className='heading' contentEditable="true">{`Hello, My name is ${fname} ${lname}`}</h1>
//     <img className='image' src={img1} alt=''/>
//     <a className='link' href={youtube} target="_blank" rel="noreferrer">Click to learn React</a>
//   </>, 
//   document.getElementById('root')
// );

// Using Google fonts in React
// To use google fonts you can copy the link and paste it in index.html file
// or you can import it in the particular css file where you require the font


// Internal and Inline style in React
// const fname='Sayan'
// const lname='Mukherjee'
// const img1="https://picsum.photos/200/300"
// const youtube="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
// const heading={
//   color: 'green',
//   backgroundColor: 'white',
//   textAlign: 'center',
//   textTransform: 'uppercase',
//   fontSize: '100px',
//   fontWeight: 'bold'
// }
// ReactDOM.render(
//   <>
//     <h1 style={heading}>{`Hello, My name is ${fname} ${lname}`}</h1>
//     <img className='image' src={img1} alt=''/>
//     <a className='link' href={youtube} target="_blank" rel="noreferrer">Click to learn React</a>
//   </>, 
//   document.getElementById('root')
// );


// React challenge number 3
const date=new Date()
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

const cssGreeting={}

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
else{
  greeting='Good Evening'
  cssGreeting.color='black'
}

ReactDOM.render(
  <>
    <div style={content} className='container'>
      <h1 style={heading}>Hello Sir, <span style={cssGreeting}>{greeting}</span></h1>
    </div>
  </>, 
  document.getElementById('root')
);