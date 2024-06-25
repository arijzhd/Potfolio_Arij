import React, { useState } from "react";
import "../../app.css"; // Import your CSS file
import imgs from "../../assests/arij.png";

const skillsData = [
  {
    title: "certification",
    content: `CCNA1
    PYTHON
    certificats
    Data Base`,
  },
  {
    title: "Competitions",
    content: `HTML5 / CSS3
    base de données PL/SQL
    PHP/MySQL
    Python
    React
    Node Js
    Symfony
    Flutter
    MongoDB`,
  },
  // Add more skills as needed
  {
    title: "Educations",
    content: `2018-2019 Baccalauréat mathématiques Lycée Salem Ben Hmida Akouda
    /2019 - 2022 cycle d'ingénieur en informatique Polytechnique Sousse
    /2022-2024cycle préparatoire École Supérieure des Sciences et de la Technologie de Hammam Sousse
    `,
  },
];

const About = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={imgs} alt="" className="aboutHero" />
        <div className="showcase-ring">
          <img src="shapes/ring.png" className="ring" alt="" />
          <img src="shapes/circle.png" className="circle" alt="" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">À propos de moi</h2>
        <h3>je suis arij hammouda</h3>
        <p>
          Étudiante de premier cycle en génie informatique à l’École
          Polytechnique Sousse. Je suis motivée par les défis et j’aspire à
          élargir mes connaissances dans un environnement professionnel qui
          encourage l’innovation et la croissance.
        </p>
        <div className="about-btn">
          {["certificats ", "Compétences", "Parcours académique"].map(
            (label, index) => (
              <button
                key={index}
                className={index === activeButton ? "active" : ""}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div className="content-btn">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="content"
              style={{ display: index === activeButton ? "block" : "none" }}
            >
              <h3>{skill.title}</h3>
              <p>{skill.content}</p>
            </div>
          ))}
        </div>
        <div className="cvContent">
          <a
            href="../../assests/shapes/Arij CV.pdf"
            target="_blank"
            className="btn d-CV"
          >
            Télécharger le CV <i className="bx bx-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
