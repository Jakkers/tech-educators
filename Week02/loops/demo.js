// we run this code using node app

//for loops
//we use a for loop when we want to do an action for a specific amount of times

// for (initialisation; condition; afterthought) {
//   //code block
// }

//initialisation is the starting value
//afterthought we are changing the initial value, so the loop ends. If the value never changed, the loop runs forever.

for (let i = 0; i <= 5; i++) {
  //   console.log(i);
}

//first the condition is checked, then the code block runs. the afterthought runs after the code block

//example --> create more than one DOM element
// for (let i = 0; i <= 3; i++) {
//   let myPTag = document.createElement("p");
//   myPTag.textContent = `This is p tag number ${i}`;
//   div.appendChild(myPTag);
// }

let myArray = ["value", "second value", "third value"];
// length: 3
// index: 0,1,2
for (let i = 0; i <= myArray.length; i++) {
  //   console.log(i);
}

// while loop -> use when we want to run a code block for an unlimited amount of times until a condition is not met anymore.

// while (condition === true){
//     action
// }

let counter = 1;

while (counter <= 10) {
  //   console.log(counter);
  counter++; //we added an increment to stop the infinite loop
}

//example
// isLoggedIn = true;

// while (isLoggedIn) {
//this is a shortcut for inLoggedIn === true
//!isLoggedIn is a shortcut for isLoggedIn === false
//   console.log("welcome");
// }

//other types of loops

//for..of -> simplified for loop with no acces to the index
let subjects = ["maths", "science", "french"];
//length: 3
//index 0, 1, 2
for (let subject of subjects) {
  console.log(subject);
}
