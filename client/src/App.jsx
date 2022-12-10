import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar.jsx';
import Liquid from './components/Liquid/Liquid.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import OneLiquid from './components/Liquid/OneLiquid.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './components/Cart/Cart.jsx';
import About from './components/About/About.jsx';
import ManageLiquid from './components/Admin/ManageLiquid.jsx';
import Admin from './components/Admin/Admin.jsx';

function App() {
  const [liquid, setLiquid] = useState([]);
  const [oneLiquid, setOneLiquid] = useState([]);
  const [cart, setCart] = useState([]);

  console.log('cart', cart);
  useEffect(() => {
    getLiquids();
  }, []);

  let handleClick = (item) => {
    // setCart(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item._id === product._id) isPresent = true;
    });
    if (isPresent) return;
    setCart([item, ...cart]);
  };

  let getOneLiquid = (id) => {
    axios.get(`http://localhost:8080/liquid/get-by-id/${id}`).then((result) => {
      // console.log('dataaaaa', result.data);
      setOneLiquid(result.data);
    });
  };

  let getLiquids = () => {
    axios.get(`http://localhost:8080/liquid/getAll`).then((result) => {
      setLiquid(result.data);
    });
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data._id === item._id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind] += d;
    if (tempArr[ind].__v === 0) tempArr[ind].__v = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <NavBar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manageLiquid" element={<ManageLiquid liquid={liquid} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/liquid"
          element={
            <Liquid
              liquids={liquid}
              one={getOneLiquid}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/oneLiquid"
          element={<OneLiquid liquidOne={oneLiquid} />}
        />
        <Route path="/About" element={<About />} />

        <Route
          path="/cart-shop"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
