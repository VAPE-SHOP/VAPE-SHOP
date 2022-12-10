import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Vapes from './components/Vapes/Vapes.jsx';
import OneVape from './components/Vapes/OneVape.jsx';
import PostVape from './components/Vapes/Postvape.jsx';
import Footer from './components/Footer/Footer.jsx';
import ManageLiquid from './components/Admin/ManageLiquid.jsx';
import Admin from './components/Admin/Admin.jsx';
import OneLiquid from './components/Liquid/OneLiquid.jsx';
import Cart from './components/Cart/Cart.jsx';
import About from './components/About/About.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Liquid from './components/Liquid/Liquid.jsx';

import axios from "axios";
function App() {
  const [Vape, setvape] = useState([]);
  const [oneVape,setoneVape] = useState([])
  const [liquid, setLiquid] = useState([]);
  const [oneLiquid, setOneLiquid] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getvapes();
    getLiquids();

  },[]);
  let getLiquids = () => {
    axios.get(`http://localhost:8080/liquid/getAll`).then((result) => {
      setLiquid(result.data);
    });
  };
  

  let getOneVape = (name) => {
    axios.get(`http://localhost:8080/vape/${name}`).then((result) => {
      setoneVape(result.data);
    });
  };

  

  let getvapes = () => {
    axios.get(`http://localhost:8080/vape/getall`).then((result) => {
      setvape(result.data)  });
    };
 

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

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vapes" element={<Vapes 
       Vape={Vape}
       one={getOneVape}
       handleClick={handleClick}
      />} />
      <Route path="/OneVape" element={<OneVape oneVape={oneVape} />} />
      
      <Route path="/PostVape" element={<PostVape />} />
      
        <Route
          path="/cart-shop"
          element={
            <Cart cart={cart} setCart={setCart}  />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App
