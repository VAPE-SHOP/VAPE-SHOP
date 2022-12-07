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

function App() {
  const [liquid, setLiquid] = useState([]);
  const [oneLiquid, setOneLiquid] = useState([]);
  useEffect(() => {
    getLiquids();
  }, []);

  let getOneLiquid = (id) => {
    axios.get(`http://localhost:8080/liquid/get-by-id/${id}`).then((result) => {
      // console.log(result.data);
      setOneLiquid(result.data);
    });
  };

  let getLiquids = () => {
    axios.get(`http://localhost:8080/liquid/getAll`).then((result) => {
      setLiquid(result.data);
    });
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/liquid"
          element={<Liquid liquids={liquid} one={getOneLiquid} />}
        />
        <Route
          path="/oneLiquid"
          element={<OneLiquid liquidOne={oneLiquid} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
