import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import NavBar from '../src/components/NavBar/NavBar.jsx';

import './App.css';

function App() {
  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
