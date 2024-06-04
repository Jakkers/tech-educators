console.log("Hello world!");

//global scope - as it's outside the function, they will effect everything.
const myName = "Jake";

// function scope -> any variables declared here are invisible to the rest of the code
function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello();
console.log(myName);

// creating variables in the function scope
function sayHello() {
  const myName = "Jake";
  console.log("Hello " + myName + "!");
}

sayHello();
console.log(myName);
