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
          <a href="/vapes">
            {' '}
            <i className="fas fa-link"></i>Click To See Vapes
          </a>
          <br />
          <br />
          <a href="/liquid">
            {' '}
            <i className="fas fa-link"></i> Click To See Liquid Vaping{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
