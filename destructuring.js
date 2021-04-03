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

