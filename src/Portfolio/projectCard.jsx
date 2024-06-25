// PortfolioCard.js

import React from 'react';
import '../app.css'
const PortfolioCard = ({ title, description, imgSrc, category,task, activeFilter }) => (
    <div className={`portfolio-box mix ${category === activeFilter || activeFilter === 'all' ? 'active' : ''}`}>
        <div className="portfolio-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="readMore">
                Explorer Plus
            </a>
        </div>
        <div className="portfolio-img">
            <img src={imgSrc} alt="" />
        </div>
    </div>
);

export default PortfolioCard;
