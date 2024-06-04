console.log("hello world!");

// const blogPosts = [
//   "my first blog post",
//   "my second blog post",
//   "my third blog post",
// ];

// console.log(blogPosts);

const blogPosts = [
  "my first blog post",
  "my second blog post",
  "my third blog post",
  "my fourth blog post",
];

blogPosts[3] = "my fourth blog post";

console.log(blogPosts[3]);

const favouriteFoods = ["rump steak", "pancake", "udon peanut satay"];

console.log(favouriteFoods);

console.log(favouriteFoods[favouriteFoods.length - 1]);

const favouriteColours = ["Purple", "coral", "Navy", "darkslategrey"];

console.log(favouriteColours);

const favouriteNumbers = [3.14, 42, 101];
console.log(favouriteNumbers);

favouriteNumbers.push(50);
console.log(favouriteNumbers);

favouriteColours.pop();
console.log(favouriteColours);
