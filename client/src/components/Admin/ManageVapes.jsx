import React from 'react';
import { Link } from 'react-router-dom';

const ManageVapes = (props) => {
  return (
    <article>
      <a className="btn" href="/addVape">
        <i className="fas fa-link"></i>Add liquid
      </a>
      {props.allVapes.map((e) => (
        <div className="cart-box" key={e._id}>
          <div className="cart-img">
            <img src={e.image} alt="" />
            <p></p>
          </div>
          <div></div>
          <div>
            <Link to="/update">
              <button
                className="btn"
                href="/update"
                onClick={() => {
                  props.getId(e._id);
                }}
              >
                change
              </button>
            </Link>
            <button
              className="btn"
              onClick={() => {
                props.remove(e.name);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ManageVapes;
