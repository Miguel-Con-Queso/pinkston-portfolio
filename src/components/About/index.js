import React from "react";
import profilePic from "../../assets/profilePic.jpg";

function About() {
  return (
    <section className="container">
      <h1 id="aboutTitle">About Me</h1>
      <div>
        <p>
          Hello! My name is Michael Kolby Pinkston. I am an Appalachian born
          full-stack coder. My skills and knowledge include, but are not limited
          to, HTML, CSS, JavaScript, Node.js, OOP, MERN, MySQL, NoSQL, TDD, and
          Mongoose. For fun, I enjoy reading, gaming, kayaking, and traveling! I
          have a B.A. from Johnson University, an M.Div. from Milligan
          University, and a web-development certificate from Vanderbilt
          University. If you wish to speak, scroll down to the contact section
          and reach out!
        </p>
        <img
          src={profilePic}
          className="profilePic"
          style={{ width: "15%" }}
          alt="Michael Pinkston"
        />
      </div>
    </section>
  );
}

export default About;
