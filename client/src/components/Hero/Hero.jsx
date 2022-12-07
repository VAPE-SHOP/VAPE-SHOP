import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcome To VAPE-SHOP</h6>
        <h4 className="hero-title">
          <em> Browse </em>Our Popular Vapes and Liquid Here{' '}
        </h4>
        <div className="main-button">
          <a href="/vapes"> Browse Now To See Vapes</a><br/>
          <a href="/liquid"> Browse Now To See Liquid Vaping </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
