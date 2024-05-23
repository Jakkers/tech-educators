console.log("Hello world!");

const body = document.querySelector("body");
console.log(body);

// const h1 = document.querySelector("h1");
// console.log(h1);

const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

const img = document.createElement("img");
console.log(img);

img.src =
  "https://images.unsplash.com/photo-1716221335037-13dc765ac8d0?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

img.alt = "Beautiful aurora";

mainContainer.appendChild(img);
console.log(mainContainer);

const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);

h1.textContent = "Hello world!";
console.log(h1);

// list challenge
