// Temporal deadzone

// Global scope
// The easiest way to make a variable global is by defining outside of any other scopes
var globalVar = 'I am global!';

function concatString(str) {
  return str + ' ' + globalVar;
}
console.log(concatString('I am hungry!')); // 'I am hungry! I am global!

// Scope Challenge

const vegetable = 'carrot';
let value;

if(hoisted) {
  var fruit = 'apple';
}

if(!hoisted) {
  var fruit = 'banana';
}

function setString(str) {
  window.str = str;
}
function addTenToNum(num) {
  var ten = 10;
  value = ten + num;
}

setString('Hello World');
addTenToNum(5);

var str = window.str;

console.log('1: ', hoisted);
// undefined
console.log('2: ', fruit);
// banana
console.log('3: ', value);
// 15
console.log('4: ' , vegetable);
// carrot
console.log('5: ', str);
// Hello World
console.log('6: ', ten);
// reference error

var hoisted = true;