//for..of -> simplified for loop with no acces to the index
let subjects = ["maths", "science", "french", "art"];
//length: 3
//index 0, 1, 2
for (let subject of subjects) {
  console.log(subject);
}
//can only access the values using this method

//array method forEach()
subjects.forEach(function (subject) {
  console.log(subject);
});

//forEach() other example -> we are adding each array item onto the DOM
subjects.forEach(function (subject) {
  document.createElement("p");
  myPTag.textContent = subject;
  div.appendChild(myPTag);
});
