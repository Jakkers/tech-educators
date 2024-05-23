console.log("hello world");

// naming conventions
// myName -> camelcase; (for JS)
// main-container -> kebab case (for CSS and classnames or ids)

// Declaring vaiables
// let
let myName = "Jake"; // we declare variables just once
myName = "Joe";
console.log(myName);

// const
const myConstName = "Jake";
// myConstName = "Joe"; // this errors because I can't give a new value
console.log(myConstName);

// var
// never use var!

//concatenation -> easy mode
console.log(myName + " " + myConstName);

// template literals -> hard mode `${}`
console.log(`${myConstName} is my name. ${myName} is not my name`);

// template literals & concatenation
console.log(`${myConstName} is my name. ${myName}` + "Five");

let mySum = 1 + 7;
let myNumber1 = 5;
let myNumber2 = 9;

// console methods -> built-in function (log or dir as examples)
console.log(mySum);
console.dir(myNumber1 + myNumber2); //more info about the element
console.table(myNumber1 + myNumber2); //shows infor as a table
