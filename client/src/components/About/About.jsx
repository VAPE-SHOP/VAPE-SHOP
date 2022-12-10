import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="row ">
        <div className="title">
          <h3>Meet the Team </h3>
        </div>
        <div className="column">
          <div className="card">
            <img src="./src/assets/henchiri.png" alt="Jane" />
            <div className="container">
              <h2>Ahmed Henchiri</h2>
              <p className="title">Team Member</p>

              <p>ahmedhenchiri00@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="column ">
          <div className="card">
            <img src="./src/assets/seif.jpg" alt="Jane" />
            <div className="container">
              <h2>Saif Ayari</h2>
              <p className="title">Scrum master</p>
              <p>saifayari312@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="./src/assets/Karim.jpg" alt="Jane" />
            <div className="container">
              <h2>Karim</h2>
              <p className="title">Team Member</p>
              <p>karimabdelhedi080@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
