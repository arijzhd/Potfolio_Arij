import React, { useEffect, useRef } from "react";
import "../../app.css"; // Ensure your CSS file is correctly imported

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let text = textRef.current;

    if (text) {
      const characters = text.innerHTML.split("");
      text.innerHTML = characters
        .map(
          (char, i) =>
            `<b style="transform:rotate(${
              i * (360 / characters.length)
            }deg)">${char}</b>`
        )
        .join("");
    }
  }, []);

  return (
    <section className="home" id="home">
      <div className="hero-info">
        <h3>Bienvenue dans mon monde</h3>
        <h1>Salut, je suis arij hammouda</h1>
        <div className="text-animate">
          <h2>Développeur Full-Stack </h2>
        </div>
        <p></p>
        <div className="btn-box">
          <a href="mailto:Hammoudaarij60@gmail.com" className="btn">
            Embauchez-moi maintenant ! <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a
            href="../../assests/shapes/Arij CV.pdf"
            target="_blank"
            className="btn d-CV"
          >
            Télécharger le CV <i className="bx bx-download"></i>
          </a>
        </div>
        <div className="social-media">
          <div className="bg-icon">
            <a href="#"></a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-github">IN</i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-twitter">GIT</i>
            </a>
            <span>s</span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bl facebook">I</i>
            </a>
            <span>s</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
