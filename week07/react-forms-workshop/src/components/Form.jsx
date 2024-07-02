import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState(""); //state value

  function handleSubmit(event) {
    event.preventDefault();
  }

  //handle form input field value being changed by user
  function handleInputChange(event) {
    setUsername(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          name="username"
          type="text"
          id="username"
          value={username}
          onChange={handleInputChange} //connect the handler to the onChange event
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current value is: {username}</p>
    </>
  );
}
