console.log("Hello world!");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);

console.table(person);

//accessing properties

console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

//adding properties

person.favouriteFood = "pizza";

console.log(person.favouriteFood);

//task

const car = {
  make: "Audi",
  model: "A3",
  colour: "Mythos black, metallic",
};

console.table(car);

const book = {
  title: "James and the giant peach",
  author: "Roald Dahl",
  pages: 160,
};

console.log(
  book.author,
  "'s best selling classic",
  book.title,
  "is a book for the whole family, it's",
  book.pages,
  "pages full of fun!"
);
