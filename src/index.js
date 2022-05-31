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
ReactDOM.render(
  [
    <h1>Hello World</h1>,
    <p>Welcome to the world of programming</p>
  ], 
  document.getElementById('root')
);