import { useState } from "react";

export default function SmartForm() {
  // form values with initial states
  const [formValues, setFormValues] = useState({ username: "", email: "" }); //state value

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
    // setFormValues("");
  }

  //handle form input field value being changed by user
  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          name="username"
          type="text"
          id="username"
          value={formValues.username}
          onChange={handleInputChange} //connect the handler to the onChange event
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current username value is: {formValues.username}</p>
      <p>Current email value is: {formValues.email}</p>
    </>
  );
}

// onSubmit={useEffect(() => {
//     reset({
//       data: "test",
//     });
//   })}
