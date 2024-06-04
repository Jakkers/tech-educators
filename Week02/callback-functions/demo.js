//callback functions

function myFunction(a, b) {
  console.log(a + b);
}

myFunction(2, 4);
//let a = 2;
//let b = 4;
//I have two parameters (a,b) and two arguments (2,4)
//parameters are variables and arguments are the values stored in the parameters.

//callback functions
//a function as a parameter -> the value is the function call, which does an action

function doAction() {
  console.log("Action done");
}
// doAction();

function doAnotherAction() {
  console.log("Another action done");
}
// doAnotherAction();

//You can combine callback functions and
function doManyActions(myFunctionParameter) {
  console.log("Doing some actions...");
  myFunctionParameter();
}

doManyActions(doAction);
doManyActions(doAnotherAction);
//myFunction Parameter is a callback function

//you can call other functions inside a function
function doManyActions() {
  console.log();
}

//callback functions in event listeners
button.addEventListener("click", function () {
  //action
});

//simplify how we write functions -> arrow functions
button.addEventListener("mouseover", () => {});
