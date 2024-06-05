console.log("test");

//setTimeout() --> a method that takes two parameters

//the first parameter is a callback function, the second parameter is the time in milliseconds
// this task is performed ONLY ONCE
setTimeout(() => {
  document.body.style.backgroundColor = "Crimson";
  console.log("This happend after 5 seconds");
}, 5000);

// setInterval(() => {
//   document.body.style.backgroundColor = "blue";
//   console.log("I repeat myself after 3 seconds");
// }, 3000);

//a different way to write callback funtions
function repeatMyself() {
  console.log("I repeat myself after 3 seconds");
}

// setInterval(repeatMyself, 3000);

let myInterval = setInterval(function () {
  console.log("I repeat myself after 3 seconds");
}, 3000);

// clearInterval stops the interval

// function stopInterval() {
//   clearInterval(myInterval);
// }

// stopIntervalWithTimeout();

//you can combine setTimeout and set
function stopIntervalWithTimeout() {
  setTimeout(function () {
    clearInterval(myInterval);
  }, 10000);
}

stopIntervalWithTimeout();
