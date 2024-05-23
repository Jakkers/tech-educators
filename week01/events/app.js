console.log("Hello World!");

const button = document.querySelector("button");
console.log(button.textContent);

// button.addEventListener("click", function () {
//   let clickMessage = "Stop clicking me";
//   console.log(`${clickMessage}`);
// });

button.addEventListener("mouseover", function () {
  let clickMessage = "mouseover";
  console.log(`${clickMessage}`);
});
