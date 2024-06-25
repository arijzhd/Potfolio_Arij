// Portfolio.js
import "../../src/app.css";
// Portfolio.js

import React, { useState } from "react";
// Importez votre fichier CSS
import PortfolioCard from "./projectCard";
import { projcets } from "./data";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    {
      category: "all",
      title: "All Work",
      description: "All portfolio items.",
      imgSrc: "../assests/icons/app-development1.png",
    },
    {
      category: "web",
      title: "Web Development",
      description: "Web development portfolio item.",
      imgSrc: "../assests/img/1.png",
    },
    {
      category: "mobile",
      title: "mobile",
      description: "UI/UX design portfolio item.",
      imgSrc: "img/portfolio/uiux.jpg",
    },
    {
      category: "branding",
      title: "Branding Design",
      description: "Branding design portfolio item.",
      imgSrc: "../assests/img/portfolio/branding.jpg",
    },
    // Add more items as needed
  ];
  const filteredItems =
    activeFilter === "all"
      ? projcets
      : projcets.filter((item) => item.category === activeFilter);
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">Mes Services</h2>
        <span>ce que je ferai pour vous</span>
      </div>
      <div className="fillter-buttons">
        {portfolioItems.map((item) => (
          <button
            key={item.category}
            className={`button ${
              activeFilter === item.category ? "mixitup-control-active" : ""
            }`}
            onClick={() => handleFilterClick(item.category)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="portfolio-gallery">
        {filteredItems.map((item, index) => (
          <PortfolioCard
            key={index} // Make sure to include a unique key
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            task={item.tasks}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
