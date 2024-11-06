// JavaScript Variables

let age = 25; // Number
let temperature = -3.5; // Number
let name = "John"; // String
let message = "Hello, JavaScript";

console.log("Message: ", message);

// Dynamic Typing in JS
let myVar = 10; // Number
myVar = "10"; // String

let isRaining = true; // or false

// Arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
// How to iterate through the array of numbers?
for (let i = 1; i <= numbers.length; i++) {
  /*if (i % 2 == 0) {
    console.log(i, " Even");
  } else {
    console.log(i, " Odd");
  }*/
  const msg = i % 2 == 0 ? "EVEN" : "ODD";
  console.log(i, msg);
}

// fore...of loop is used to iterate over the arrays
for (let i of numbers) {
  const msg = i % 2 == 0 ? "EVEN" : "ODD";
  console.log(i, msg);
}

//numbers.forEach(  () => {});

// Objects
let person = { name: "Alice", age: 30, isStudent: true };

let nullVar = null; // Null
let description; // Undefined
description = "Hello, JS";
description = "Hello";

const API_URL = "http://localhost:8080/api/v1/tasks"; // String
// API_URL = "Hello"; // we cannot modify the value of this variable
console.log(API_URL);

/*let day = "Monday";
switch(day){
    case "Monday":
        console.log("It is the start day of the week.")
        break;
    default:
}*/

// Operators
let n1 = 10; // Number
let n2 = "10"; // String
// === used to check equal value and equal type
// == used to check equal value

//let isEqual = n1 !== n2; // false

// Function Declaration
function greet(message) {
  //console.log(message);
  return message;
}

function isPositive(number) {
  return number >= 0;
}
console.log(greet("Hello G51."));

// Arrow Function
const addition = (num1, num2) => num1 + num2;
const _greet = (message) => console.log(message);

// Higher-Order fuction and Callbacks
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calculate(2, 5, addition));

function division(n1, n2) {
  if (n2 === 0) {
    throw new Error("Cannot devide by zero.");
  }
  return n1 / n2;
}

try {
  console.log(division(10, 0));
} catch (error) {
  console.log("Caught an error: ", error.message);
}

let text = "Hello, World!";
console.log(text.toLowerCase()); // convert to lowercase
console.log(text.toUpperCase()); // conver to uppercase
console.log(text.indexOf("World")); // index of a substring
console.log(text.slice(0, 5)); // Extract a substring

let date = new Date();
console.log(date);

let nextLectureDate = new Date("2024-11-11T09:00:00");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
