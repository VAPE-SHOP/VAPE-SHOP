import React from 'react';

import './Liquid.css';

const OneLiquid = ({ liquidOne, handleClick }) => {
  // console.log(liquidOne);
  return (
    <div>
      <div className="container mx-auto mt-4 ">
        <div className="row ">
          <div className="d-flex justify-content-center">
            <div className="card">
              <img src={liquidOne.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{liquidOne.name}</h4>
                <h6>{liquidOne.description}</h6>
                <h3>{liquidOne.price}DTN</h3>
                <button
                  onClick={() => {
                    handleClick(liquidOne);
                  }}
                  href="#"
                  className="btn mr-2"
                >
                  <i className="fas fa-link"></i>Add To Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneLiquid;
