console.log("Hello World!");

const button = document.querySelector("button");
console.log(button.textContent);

// button.addEventListener("click", function () {
//   let clickMessage = "Stop clicking me";
//   console.log(`${clickMessage}`);
// });

// my JS is expecting a user action on the page
// in my addEventListener method, I have two parameters
//- the action
//- anonymous funcion -> we only want ot use it once (dont use it outside the block of code)
button.addEventListener("click", function () {
  let clickMessage = "hello";
  console.log(`${clickMessage}`);
});

// you can add an event listener to any dom element
function myfunction() {}

//examples
//a button to count from 0 to infinity and beyond (week 3?)

const countingButton = document.getElementById("counting-button");
// const countingButton = document.querySelector("#counting-button");
console.log(countingButton);

// document.getElementById = method

//we declare this variable with global scope
let clicks = 0;

countingButton.addEventListener("click", function () {
  clicks = clicks + 1;
  console.log(clicks);
  countingButton.textContent = clicks;
});

const mainContainer = document.getElementById("main-container");
console.log(mainContainer);
const messageButton = document.querySelector("#message-button");
console.log(messageButton);

// this event is dynamically creating DOM elements
messageButton.addEventListener("click", function () {
  //create an element
  let newP = document.createElement("p");
  //add content to the p tag
  newP.textContent = "Welcome to my website!";

  // create new DOM elements that can be targeted in CSS
  newP.className = "message-p-tag";
  //add p tag to the div parent
  //parent.appendChild(child)
  mainContainer.appendChild(newP);
});
