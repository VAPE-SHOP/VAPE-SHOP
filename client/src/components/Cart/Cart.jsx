import React, { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  let [amount, setAmount] = useState(1);
  console.log('cart from cart', cart);

  const handlePrice = () => {
    let ans = 0;
    cart.map((e) => {
      ans += amount * e.price;
    });
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((e) => e._id !== id);
    setCart(arr);
    // handlePrice()
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {cart.map((item) => (
        <div className="cart-box" key={item._id}>
          <div className="cart-img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handleChange(item);
              }}
            >
              +
            </button>
            <button>{amount}</button>
            <button> - </button>
          </div>
          <div>
            <span>{item.price} </span>
            <button
              onClick={() => {
                handleRemove(item._id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of your Cart</span>
        <span>Rs ~ {price} DNT</span>
      </div>
    </article>
  );
};

export default Cart;
