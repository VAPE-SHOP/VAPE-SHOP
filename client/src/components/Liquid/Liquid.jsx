import React from 'react';
import { Link } from 'react-router-dom';

import './Liquid.css';

export default function Liquid(props) {
  // console.log(props.liquids);
  return (
    <div>
      <div className="container mx-auto mt-4 ">
        <div className="row ">
          <div className=" d-flex flex-wrap">
            {props.liquids.map((e) => {
              return (
                <div className="card " key={e._id}>
                  <img src={e.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <Link to={'/oneLiquid'}>
                      <button
                        className="btn mr-2"
                        onClick={() => {
                          props.one(e._id);
                        }}
                      >
                        <i className="fas fa-link"></i>More Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
