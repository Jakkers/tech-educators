console.log("Testing the test");

//fetch the data from the api

//this is an asynchronous function
async function getFoxes() {
  const response = await fetch("https://randomfox.ca/floof/");
  console.log(response);

  const data = await response.json();
  console.log(data);

  //filter the data (data wrangling) with dot notation
  const wrangledData = data.image;
  console.log(wrangledData);

  // I want to use this data outside this function
  return wrangledData;
}

getFoxes();

//select the element that will contain my fox images
const mainContainer = document.querySelector(".fox-image");

//create an element to contain my foxes
function foxContainer(foxImg) {
  const newFox = document.createElement("img");
  newFox.src = foxImg;
  console.log(foxImg);
  newFox.alt = "fox image";

  mainContainer.appendChild(newFox);
}

//display foxes on the page
async function displayFoxes() {
  //getFoxes contains my foxes images
  const myWrangledFoxes = await getFoxes();
  foxContainer(myWrangledFoxes);
}

displayFoxes();
