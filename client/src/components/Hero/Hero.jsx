import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/vapes">
          <a>
            <i className="fas fa-link"></i>Click To See Vapes
          </a>
          </Link>
         
          <br />
          <br />
          <Link to="liquid">
          <a href="/liquid">
            <i className="fas fa-link"></i> Click To See Liquid Vaping
          </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
