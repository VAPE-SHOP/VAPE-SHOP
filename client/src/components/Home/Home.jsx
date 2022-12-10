import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login';
import './Home.css';
import Hero from '../Hero/Hero';
import Carousel from '../Carousel/Carousell.jsx';
import About from '../About/About';

const Home = () => {
  return (
    <div className="container main-container">
      <Hero />
      <Carousel />
      <About />
    </div>
  );
};

export default Home;
