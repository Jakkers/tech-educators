//creating complex objects

console.log("Hello World!");

const blogPost = {
  title: "myfirst blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "this is my blog post about learning objects and arrays.",
};

console.log(blogPost);

//accessing properties

console.log(blogPost.author.name);

console.log(blogPost.tags[0]);

console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

console.log(`Tags for post "${blogPost.title}:"`);
for (let tag of blogPost.tags) {
  console.log(tag);
}

console.log(
  `${blogPost.content} my name is ${blogPost.author.name} and the tags for this post are`
);

for (let tag of blogPost.tags) {
  console.log(tag);
}

console.dir(document);
