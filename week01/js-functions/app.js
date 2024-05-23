console.log("Hello World!");

//declaring functions
function sayHello() {
  console.log("Hello World!");
}

sayHello();
sayHello();
sayHello();

// Parameters
function parameterFunction(parameter1, parameter2) {
  console.log(parameter1, parameter2);
}

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("Alice");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob");
greet("Buenos dias", "Alice");
greet("bonjour", "Charlie");

// returning values
function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}

const resultMultiply = multiply(8, 5);
console.log("The result is", resultMultiply);

function subtract(a, b) {
  return a - b;
}

const resultSubtract = subtract(8, 5);
console.log("The result is", resultSubtract);

function divide(a, b) {
  return a / b;
}

const resultDivide = divide(8, 5);
console.log("The result is", resultDivide);

let c = 1;
let d = 2;
let operator = "+";

// function calculator(c, d, operator) {
//   if (operator == "+") {
//     console.log(c + d);
//   } else if (operator == "-") {
//     console.log(c - d);
//   }
// }

function calculate(c, operator, d) {
  if (operator == "+") {
    console.log(c + d);
  } else if (operator == "-") {
    console.log(c - d);
  }
}

calculate(c, operator, d);

// const resultCalculate = calculate(c, operator, d);
// console.log("The result is, ", resultCalculate);

// function calculate(c, operator, d) {
//   if (operator == "+") {
//     let result = c + d;
//   } else if (operator == "-") {
//     let result = (c, d);
//   } else if (operator == "*") {
//     let result = (c, d);
//   } else if (operator == "/") {
//     let result = (c, d);
//   }
//   return result;
// }

// console.log("The result is", result);
