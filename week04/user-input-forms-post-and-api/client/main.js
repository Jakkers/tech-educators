const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  //do something with the form data here
  const formData = new FormData(messageForm);
  const message = Object.fromEntries(formData);

  fetch("http://localhost:7373/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", //This tells the server we're sebdubg stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
