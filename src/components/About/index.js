import React from "react";
import profilePic from "../../assets/profilePic.png";
import momo from "../../assets/momo.jpg";

function About() {
  return (
    <section className="container aboutSection mw-100 mh-100">
      <img
        src={profilePic}
        className="profilePic"
        style={{ width: "10%" }}
        alt="Michael Pinkston"
      />
      <h1 id="aboutTitle">About Me</h1>
      <div>
        <p>
          Hello! My name is Michael Kolby Pinkston. I am an Appalachian born
          full-stack coder. My skills and knowledge include, but are not limited
          to, HTML, CSS, JavaScript, Node.js, OOP, MERN, MySQL, NoSQL, TDD, and
          Mongoose. For fun, I enjoy reading, gaming, kayaking, and traveling! I
          have a B.A. from Johnson University, an M.Div. from Milligan
          University, and a web-development certificate from Vanderbilt
          University. Also, I love my cat, Momo! If you wish to speak, either
          click the email icon bellow or navigate to the contact section and
          reach out!
        </p>
      </div>
      <img src={momo} className="momo" style={{ width: "10%" }} alt="Momo" />
    </section>
  );
}

export default About;
