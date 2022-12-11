import React from 'react'
import { Link } from 'react-router-dom'
import "./Vapes.css"
import  Search  from './Search.jsx'
const Vapes = (props) => {
  return (
    <div> 
       <div className="App">
      <Search placeholder="Enter a Book Name..." data={props.Vape} />
    </div>
      <div className="container mx-auto mt-4 ">
        <div className="row ">
          <div className=" d-flex flex-wrap">
            {props.Vape.map((e) => {
              return (
                <div className="card " key={e._id}>
                  <img src={e.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <Link to={'/OneVape'}>
                      <button
                        className="btn mr-2"
                        onClick={() => {
                          props.one(e.name);
                        }}
                      >
                        <i className="fas fa-link"></i>More Details
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        props.handleClick(e);
                      }}
                      className="btn mr-2"
                    >
                      <i className="fas fa-cart-plus"></i>Buy
                    </button>
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

export default Vapes