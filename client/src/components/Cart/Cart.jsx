import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ Cart }) => {
  const [price, setPrice] = useState(0);
  return (
    <article>
      {Cart.map((item) => (
        <div className="cart-box" key={item._id}>
          <div className="cart-img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Cart;
