//creating methods
console.log("hello world!");

// const person = {
//   theName: "Bob",
//   age: 30,
//   favouriteColour: "Red",
//   sayHello: function (theName) {
//     console.log("Hello " + theName + "!");
//   },
// };

// person.sayHello();

//passing arguments

// person.sayHello("Alice");

//returning values
const person = {
  theName: "Bob",
  age: 30,
  favouriteColour: "Red",
  // sayHello: function (theName) {
  //   console.log("Hello " + theName + "!");
  // },
  getAge: () => {
    return person.age;
  },
};

const age = person.getAge();

console.log(age);

//task

const car = {
  make: "Audi",
  model: "A3",
  colour: "Mythos black, metallic",
  advert: () => {
    return `The new ${car.make} ${car.model} is available in the stunning ${car.colour}, get yours today!`;
  },
};

const advert = car.advert();

console.log(advert);

const album = {
  title: "POST HUMAN: NeX GEn",
  artist: "Bring me the horizon",
  trackOne: "[ost] deamseeker",
};
