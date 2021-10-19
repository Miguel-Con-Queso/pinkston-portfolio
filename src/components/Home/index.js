import React from "react";
import Typed from "react-typed";

function Home() {
  return (
    <div className="homeSection">
      <div className="homeIntro">
        <h1>Welcome to Michael Pinkston's Portfolio!</h1>
        <Typed
          className="typed-text"
          strings={["Front-End", "Back-End", "Full-Stack"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}

export default Home;
