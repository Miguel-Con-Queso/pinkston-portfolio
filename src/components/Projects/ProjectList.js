import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      id: 0,
      name: "e-commerce",
      category: "Backend",
      github: "https://github.com/Miguel-Con-Queso/e-commerce.git",
      description:
        "This project implements MySQL2, Sequelize, and Express.js to create a database used for e-commerce.",
    },

    {
      id: 1,
      name: "socialMediaAPI",
      category: "Backend",
      github: "https://github.com/Miguel-Con-Queso/socialMediaAPI.git",
      description:
        "This project utilizes Mongoose, MongoDB, and Express.js to create a NoSQL database for a Social Media Network API.",
    },

    {
      id: 2,
      name: "run-buddy",
      category: "Frontend",
      github: "https://github.com/Miguel-Con-Queso/run-buddy.git",
      description:
        "This project uses HTMl5, CSS, and JavaScript to create a visually appealing web page for the fictional company, Run Buddy.",
    },

    {
      id: 3,
      name: "robot-gladiators",
      category: "Frontend",
      github: "https://github.com/Miguel-Con-Queso/robot-gladiators.git",
      description:
        "This project leverages JavaScript to create a simple text-based game where the user fights robots!",
    },

    {
      id: 4,
      name: "RPGsAnonymous",
      category: "Personal",
      github: "https://github.com/Miguel-Con-Queso/RPGsAnonymous.git",
      description:
        "This project is a personal hobby and work in process. I initially used HTML, CSS, and JavaScript to create it, but am working to udate it to use the full MERN stack. Stay tuned!",
    },

    {
      id: 5,
      name: "MartiansOnly",
      category: "Personal",
      github: "https://github.com/Miguel-Con-Queso/MartiansOnly.git",
      description:
        "This project is a fun lesson in API's. We use NASA API's to help you book a trip to mars and give you a look at your destination!",
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/projectPics/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, 1)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
