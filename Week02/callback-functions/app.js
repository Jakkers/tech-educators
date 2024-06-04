//logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

//accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwsomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awsome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

//arrow function: This is the same as above, just written differently. In this case using a 'fat arrow'.
myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

//from here
function myGreatFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  //randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({ message: "This is the message of success" });
  } else {
    onFailureCallback();
  }
}

// this is the function call with two arguments. 1 arguments is 1 function, the 2nd argument is the 2nd function.
myGreatFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);

// function onAwesomeSuccess
function onAwesomeSuccess(data) {
  console.log("It was successful:", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

//mathmatical funcions

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9
