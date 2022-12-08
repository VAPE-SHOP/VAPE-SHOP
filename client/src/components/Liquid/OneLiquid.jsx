import React from 'react';

import './Liquid.css';

const OneLiquid = (props) => {
  console.log(props.liquidOne);
  return (
    <div>
      <div className="container mx-auto mt-4 ">
        <div className="row ">
          <div className="d-flex justify-content-center">
            <div className="card">
              <img
                src={props.liquidOne.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{props.liquidOne.name}</h4>
                <h6>{props.liquidOne.description}</h6>
                <a href="#" className="btn mr-2">
                  <i className="fas fa-link"></i>Add To Buy
                </a>
              </div>
            </div>
            );
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneLiquid;
