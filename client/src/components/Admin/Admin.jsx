import React from 'react';
import './Admin.css';
const Admin = () => {
  return (
    <div className="admin-style d-flex flex-wrap">
      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/vape-electronic-cigarette-isolated-white-background-vape-electronic-cigarette-139009816.jpg"
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b>Vapes </b>
          </h4>
          <a className="btn mr-2" href='/manageVapes'>
            <i className="fas fa-link"></i>Manage Vapes
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://vaporvapes.com/wp-content/uploads/2013/10/Flavorless_New.jpg"
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b>Liquid Vaping</b>
          </h4>
          <a className="btn mr-2" href="/manageLiquid">
            <i className="fas fa-link"></i>Manage Liquid Vaping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
