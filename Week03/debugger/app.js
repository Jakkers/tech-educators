console.log("test");

let myVariable = 56;

function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    debugger;
  }
}

countToTen();

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  debugger; //we can see that our parameters are undefined, unless we give them arguments in the call
}
