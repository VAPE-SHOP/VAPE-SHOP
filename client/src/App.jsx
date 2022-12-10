import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import Vapes from './components/Vapes/Vapes.jsx';
import OneVape from './components/Vapes/OneVape.jsx';
import PostVape from './components/Vapes/Postvape.jsx';
import CarteVapes from './components/CatreVapes.jsx';
import axios from "axios";
function App() {
  const [Vape, setvape] = useState([]);
  const [oneVape,setoneVape] = useState([])
  const [carteVape, setCarteVape] = useState([]);

  useEffect(() => {
    getvapes();
  }, []);

  let handleClick = (item) => {
    let isPresent = false;
    carteVape.forEach((product) => {
      if (item._id === product._id) isPresent = true;
    });
    if (isPresent) return;
    setCarteVape([item, ...carteVape]);
  };

  let getOneVape = (name) => {
    axios.get(`http://localhost:8080/vape/${name}`).then((result) => {
      setoneVape(result.data);
    });
  };

  

  let getvapes = () => {
    axios.get(`http://localhost:8080/vape/getall`).then((result) => {
      setvape(result.data);
    });
  };
  const handleChange = (item, d) => {
    let ind = -1;
    carteVape.forEach((data, index) => {
      if (data._id === item._id) {
        ind = index;
      }
    });
    const tempArr = carteVape;
    tempArr[ind] += d;
    if (tempArr[ind].__v === 0) tempArr[ind].__v = 1;
    setCarteVape([...tempArr]);
  };

 
   
  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vapes" element={<Vapes 
       Vape={Vape}
       one={getOneVape}
       handleClick={handleClick}
      />} />
      <Route path="/OneVape" element={<OneVape oneVape={oneVape} />} />
      <Route path="/carteVape-shop" element={<CarteVapes carteVape={carteVape} setCart={setCarteVape} handleChange={handleChange} />}/>
      <Route path="/PostVape" element={<PostVape />} />
      
    </Routes>
    </>
  );
}

export default App;
