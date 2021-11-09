import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import eCommerce from "../../assets/projectPics/Backend/e-commerce.png";
// import socialMediaAPI from "../../assets/projectPics/Backend/socialMediaAPI.png";
// import robotGladiator from "../../assets/projectPics/Frontend/robot-gladiators.png";
// import runBuddy from "../../assets/projectPics/Frontend/run-buddy.png";
// import martiansOnly from "../../assets/projectPics/Personal/MartiansOnly.png";
// import RPGsAnonymous from "../../assets/projectPics/Personal/RPGsAnonymous.png";
// import background from "../../assets/background.jpg";

function ProjectCards(props) {
  return (
    <div className="card">
      <div className="imgContainer">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="projectTitle" id="cardTitle">
          {props.name}
        </p>
        <div id="iconContainer">
          <p id="topics">[{props.topics}]</p>
          <a href={props.github} target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              alt="Github Repository"
              id="projectIcon"
            />
          </a>
          <a href={props.deploy} target="_blank">
            <img
              src="https://img.icons8.com/color/30/000000/launched-rocket--v2.png"
              alt="Deployed Application"
              id="projectIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
