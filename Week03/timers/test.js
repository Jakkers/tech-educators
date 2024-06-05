let messageButton = document.querySelector(".button-message");

let houdiniMessage = document.querySelector(".houdini-message");

let startButton = document.querySelector(".start-button");

let stopButton = document.querySelector(".stop-button");

// let myInterval = setInterval(function () {
//   console.log("1");
// }, 1000);

messageButton.addEventListener("click", function () {
  setTimeout(function () {
    document.querySelector(".houdini-message").innerText = "...";
    console.log("Haha, i'm over here now");
  }, 5000);
});

startButton.addEventListener("click", function () {
  setInterval(function () {
    console.log("1");
  }, 1000);
});

// stopButton.addEventListener("click", function () {
//   clearInterval();
// });
