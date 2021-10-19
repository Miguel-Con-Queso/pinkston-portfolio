import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Invalid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="container">
      <h1 className="contactTitle">Contact Me</h1>
      <form className="justify-conent-center" id="contactForm">
        <div className="mt-5">
          <label htmlFor="name">Name:</label>
          <input
            className="formControl"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email">Email:</label>
          <input
            className="formControl"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="message">Message:</label>
          <textarea
            className="formControl"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="mt-5 mb-5">
          <button
            className="btn btn-outline-dark"
            data-testid="button"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
