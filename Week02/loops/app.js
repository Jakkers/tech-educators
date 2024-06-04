console.log("Hello World!");

// for (let i = 0; i < 5; i++) {
//   console.log("iteration", i);
// }

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// let keepLooping = true;
// let i = 0;

// while (keepLooping === true) {
//   console.log("iteration", i);
//   keepLooping = Math.random() < 0.1;
//   i++;
// }

// looping over arrays
// const foods = ["pizza", "chocolate", "ice cream", "cheese"];
// for (let i = 0; i < foods.length; i++) {
//   console.log(foods[i]);
// }

//alternative syntax for loops for arrays
const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

foods.forEach(function (food) {
  console.log(food);
});

foods.forEach(function (food, index) {
  console.log(index, food);
});

// workshop
const favouriteAnimals = ["mantis shrimp", "dog", "hippo"];
for (let animal of favouriteAnimals) {
  console.log(animal);
}

const favouriteColours = ["Purple", "Navy", "Coral"];
favouriteColours.forEach(function (colour) {
  console.log(colour);
});

// const foods = ["pizza", "chocolate", "ice cream", "cheese"];
// for (let i = 0; i < foods.length; i++) {
//   console.log(foods[i]);
// }

let i = 0;
// for (let i = 0; favouriteNumbers.length; i++) {
//   console.log(favouriteNumbers[i]);
// }

while (i < 10) {
  console.log("The number is ", i);
  i++;
}

do {
  i += 10;
  console.log(i);
} while (i < 5);
