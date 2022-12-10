import React from 'react';

const ManageLiquid = (props) => {
  return (
    <article>
      <a className="btn"> <i className="fas fa-link"></i>Add liquid</a>
      {props.liquid.map((e) => (
        <div className="cart-box" key={e._id}>
          <div className="cart-img">
            <img src={e.image} alt="" />
            <p></p>
          </div>
          <div></div>
          <div>
            <button className="btn">Update</button>
            <button className="btn">Remove</button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ManageLiquid;
