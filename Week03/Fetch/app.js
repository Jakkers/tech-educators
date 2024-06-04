console.log("👍🏼");

//fetching data
async function getMyStuffFromOverThere() {
  const response = await fetch(
    "https://corporatebs-generator.sameerkumar.website/"
  );
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data", json);
  const wrangledData = json.phrase;
  console.log(wrangledData);
  return wrangledData;
}

getMyStuffFromOverThere();

//alternative method
// fetch("./data.json")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });

const mainContainer = document.querySelector(".text");

function textContainer(text) {
  const newText = document.createElement("h1");
  newText.textContent = text;
  console.log(text);

  mainContainer.appendChild(newText);
}

async function displayText() {
  const wrangledPhrase = await getMyStuffFromOverThere();
  textContainer(wrangledPhrase);
}

displayText();
