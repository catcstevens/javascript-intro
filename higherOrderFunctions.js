// arrow functions work really well with higher order functions eg: map, filter, reduce
// one function takes another function as an arguement - that is a good time for an arrow function
//

// compute the score of only the positve integers in the array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const sum = (function() {
    //instead of the the (x,y,z) being passed we will use a rest operator - this will turn everything passed in to the function into an array (args)
    // return function sum(x, y, z) {
        return function sum(... args) {
    //   const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3));

  // using the rest operator we can pass in as many arguments as we like instead of just 3 when it was (x,y,z)

  // the Spread Operator on the other hand spreads out an exisiting array. It looks very similar to the Rest operator (...)
  // [...arr1]

  //Destructuring!!! assigning value of object into variables
  var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

//destructuring syntax
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79