import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login';
import './Home.css';
import Hero from '../Hero/Hero';

const Home = () => {
  return <div className='container main-container'>
  <Hero />
  </div>;
};

export default Home;
