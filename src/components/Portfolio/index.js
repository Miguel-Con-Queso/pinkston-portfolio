import React from "react";
import ProjectCards from "../../components/Projects";
import portfolio from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section className="container portfolioSection mw-100 mh-100">
      <div className="project">
        <h1 className="title">My Projects</h1>
      </div>

      <Wrapper id="cardData">
        {portfolio.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
