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