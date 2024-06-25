// Services.js

import React from "react";
import "../../app.css"; // Importez votre fichier CSS
import cercle from "../../assests/shapes/circle.png";
import web from "../../assests/icons/app-development1.png";
import mobile from "../../assests/icons/coding1.png";
import java from "../../assests/icons/design1.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="main-text">
        <div className="allServices">
          <div className="servicesItem">
            <div className="icon-services">
              <i className="bx bx-layer">
                <img
                  src={web}
                  alt=""
                  className="ringimg"
                  style={{ width: "40px", height: "40px" }}
                />
              </i>
              <span></span>
            </div>
            <h3>Développement d'Applications</h3>
            <p>
              Nous offrons des services complets de développement
              d'applications, créant des solutions sur mesure pour les
              plateformes iOS et Android. Notre équipe assure une technologie de
              pointe et des interfaces conviviales pour vos applications
              mobiles.
            </p>
          </div>

          <div className="servicesItem">
            <div className="icon-services">
              <i className="bx bx-code-alt">
                {" "}
                <img
                  src={mobile}
                  alt=""
                  className="ringimg"
                  style={{ width: "40px", height: "40px" }}
                />
              </i>
              <span> Web</span>
            </div>
            <h3>Développement Web</h3>
            <p>
              Nos services de développement web couvrent une large gamme de
              technologies et de frameworks. Du front-end au back-end, nous
              construisons des sites web réactifs et évolutifs qui répondent à
              vos objectifs commerciaux et aux attentes des utilisateurs.
            </p>
          </div>

          <div className="servicesItem">
            <div className="icon-services">
              <i className="bx bx-desktop">
                <img
                  src={java}
                  alt=""
                  className="ringimg"
                  style={{ width: "40px", height: "40px" }}
                />
              </i>
              <span> </span>
            </div>
            <h3>Conception des interfaces Java Swing </h3>
            <p>
              Élevez votre marque avec nos services de conception Java Swing.
              Nous nous concentrons sur la création d'interfaces utilisateur
              robustes et réactives qui améliorent l'expérience utilisateur. Nos
              conceptions sont élaborées pour être en accord avec l'identité de
              votre marque, tout en offrant des performances optimales et une
              grande flexibilité.
            </p>
          </div>
        </div>
      </div>
      <div className="proposal">
        <div className="text-box">
          <span>Contactez-moi</span>
          <h3>Vous avez un projet en tête</h3>
          <a href="#contact" className="btn">
            Contactez-moi
          </a>
        </div>
        <img src="img/support.png" alt="" className="first" />
      </div>

      <div className="showcase">
        <img src={cercle} alt="" className="ring" />
        <img src={cercle} alt="" className="" />
        <img src={cercle} alt="" className="circle2" />
        <img src={cercle} alt="" className="circle3" />
        <img src="shapes/half-ring.png" alt="" className="half-ring" />
      </div>
    </section>
  );
};

export default Services;
