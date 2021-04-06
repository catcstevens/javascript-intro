let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// A variable can be assigned its value via destructuring, seperate from the variables declaration

let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Two variables can be swapped in one destructuring expression without using a temp variable.
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

//a variable can be assigned its value with destructuing seperate from its declaration
let a, b;
//notice the brackets! without the brackets the {a, b} is considered a block and not an object literal
({a, b} = {a: 1, b: 2});

//destructuring from nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
  // destructured twice
    const {tomorrow : { max : maxOfTomorrow  }} = forecast; 
  
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); 

  //destructuring from array - the difference is we can't choice which variables take on the new values eg: 
  const [z, x ] = [1, 2, 3, 4, 5, 6]; //will go in order and z = 1 and x =2
  //we can use empty spaces with commas to change the element that takes the new value
  const [z, x, , y] = [1, 2, 3, 4, 5, 6];
    console.log(z, x, y); // 1,2,4

//Destructuring assignment to pass an object as a function's parameters
// Useful when doing an API call to just get back the information you need, rather than a huge object
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
  //here we are passing the entire object - stats into the half function but we only need the min and max values
  //  return function half(stats) {
   //return (stats.max + stats.min) / 2.0;
   // instead we can destructure the min and max from the object 
   return function half({max, min }) {
    return (max + min) / 2.0;
   };
  
  })();
  console.log(stats); 
  console.log(half(stats)); 


