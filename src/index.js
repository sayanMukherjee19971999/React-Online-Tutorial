import React from 'react';
import ReactDOM from 'react-dom';

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
const name='Sayan Mukherjee'
ReactDOM.render(
  <>
    <h1>My name is {name}</h1>
    <h4> Addition of 2 and 3 is {2+3}</h4>
    <h6>I am generating a random number= {Math.random()}</h6>
  </>, 
  document.getElementById('root')
);