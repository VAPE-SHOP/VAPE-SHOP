import { useState, useEffect } from 'react'; //
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx'; //
import Login from './components/Login/Login'; //
import Vapes from './components/Vapes/Vapes.jsx'; //
import Register from './components/Register/Register.jsx'; //
import Admin from './components/Admin/Admin.jsx'; //
import NotFound from './components/NotFound/NotFound.jsx'; //
import NoAccess from './components/NoAccess/NoAccess.jsx'; //
import AdminRouter from '../componet/AdminRouter.jsx'; //
import PriveteRouter from '../componet/PriveteRouter.jsx'; //
import ForceRedirect from '../componet/ForceRedirect.jsx'; //
import OneVape from './components/Vapes/OneVape.jsx';
import PostVape from './components/Vapes/Postvape.jsx';
import Footer from './components/Footer/Footer.jsx';
import ManageLiquid from './components/Admin/ManageLiquid.jsx';
import OneLiquid from './components/Liquid/OneLiquid.jsx';
import Cart from './components/Cart/Cart.jsx';
import About from './components/About/About.jsx';
import NavBar from './components/NavBar/NavBar.jsx'; //
import Liquid from './components/Liquid/Liquid.jsx';

import axios from 'axios';
import AddLiquid from './components/Admin/AddLiquid.jsx';
import UpdateLiquid from './components/Admin/UpdateLiquid.jsx';
import ManageVapes from './components/Admin/ManageVapes.jsx';
import AddVape from './components/Admin/AddVape.jsx';
function App() {
  const [vapes, setVapes] = useState([]);
  const [oneVape, setoneVape] = useState([]);
  // creating a state for all vapes an one vape 
  const [liquid, setLiquid] = useState([]);
  const [oneLiquid, setOneLiquid] = useState([]);
  const [cart, setCart] = useState([]);
  const [isConnected, setIsconnected] = useState(false);
  const [role, setRole] = useState();
  const [idss, setId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // creating a state fol word seaech and filtre data 
  // console.log(idss);

  const user = {
    isConnected: isConnected,
    role: role,
  };

  useEffect(() => {
    getvapes();
    getLiquids();
  }, []);
  let getLiquids = () => {
    axios.get(`http://localhost:8080/liquid/getAll`).then((result) => {
      setLiquid(result.data);
    });
  };

  const addLiquid = (e) => {
    axios.post(`http://localhost:8080/liquid/add`, e).then((result) => {
      window.location.reload();
      console.log(result.data);
    });
  };

  const addVape=(e)=>{
    axios.post(`http://localhost:8080/vape/add`,e).then((result) => {
      window.location.reload();
      console.log(result.data);
    });
  }
  let getOneVape = (name) => {
    axios.get(`http://localhost:8080/vape/${name}`).then((result) => {
      setoneVape(result.data);
    });
  };
  const deleteLiquid = (id) => {
    console.error('deleted', id);
    axios.delete(`http://localhost:8080/liquid/${id}`).then((result) => {
      window.location.reload();

      console.log('yayyy deleted');
    });
  };
  const deleteVape = (id) => {
    axios.delete(`http://localhost:8080/vape/${id}`).then((result) => {
      window.location.reload();
      console.log('yayy deleted');
    });
  };

  const getId = (e) => {
    setId(e);
  };
  const updateLiquid = (e) => {
    axios.put(`http://localhost:8080/liquid/${idss}`, e).then((result) => {
      window.location.reload();
      console.log('yayyy Updateted');
    });
  };

  let getvapes = () => {
    axios.get(`http://localhost:8080/vape/getall`).then((result) => {
      setVapes(result.data);
    });
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
  const checkUserToken = () => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('role'));
      if (user) {
        setIsconnected(true);
        setRole(user);
      } else {
        setIsconnected(false);
      }
    }
  };
  const Logout = () => {
    localStorage.clear();
    setIsconnected(false);
  };

  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = Vape.filter(() => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }; 
  // creating a function to check if the value of input exist  

  return (
    <BrowserRouter>
      <div className="bg-black" style={{ height: '100vh' }}>
        <NavBar size={cart.length} user={user} Logout={Logout} />
        <Routes>
          <Route
            path="/"
            element={
              <PriveteRouter user={user}>
                <Home />
              </PriveteRouter>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRouter user={user}>
                <Admin />{' '}
              </AdminRouter>
            }
          />
          <Route
            path="/manageLiquid"
            element={
              <ManageLiquid
                liquid={liquid}
                remove={deleteLiquid}
                getId={getId}
              />
            }
          />
          <Route
            path="/manageVapes"
            element={<ManageVapes allVapes={vapes} remove={deleteVape}/>}
          />
          <Route path="/add" element={<AddLiquid add={addLiquid} />} />
          <Route path='/addVape' element={<AddVape add={addVape}/>}/>
          <Route path="/update" element={<UpdateLiquid up={updateLiquid} />} />
          <Route
            path="/liquid"
            element={
              <PriveteRouter user={user}>
                <Liquid
                  liquids={liquid}
                  one={getOneLiquid}
                  handleClick={handleClick}
                />
              </PriveteRouter>
            }
          />
          <Route path="/*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />
          <Route
            path="/oneLiquid"
            element={<OneLiquid liquidOne={oneLiquid} />}
          />
          <Route
            path="/About"
            element={
              <PriveteRouter user={user}>
                <About />
              </PriveteRouter>
            }
          />
           

          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/login"
            element={
              <ForceRedirect user={user}>
                <Login />
              </ForceRedirect>
            }
          />
          <Route
            path="/register"
            element={
              <ForceRedirect user={user}>
                <Register />
              </ForceRedirect>
            }
          />

          <Route
            path="/vapes"
            element={
              <PriveteRouter user={user}>
                <Vapes
                  allVapes={vapes}
                  one={getOneVape}
                  handleClick={handleClick}
                  term={searchTerm}
                  searchKeyword={searchHandler}
                />{' '}
              </PriveteRouter>
            }
          />
          <Route
            path="/OneVape"
            element={
              <PriveteRouter user={user}>
                <OneVape oneVape={oneVape} />
              </PriveteRouter>
            }
          /> 
           

          <Route
            path="/PostVape"
            element={
              <PriveteRouter user={user}>
                <PostVape />
              </PriveteRouter>
            }
          />

          <Route
            path="/cart-shop"
            element={
              <PriveteRouter user={user}>
                <Cart cart={cart} setCart={setCart} />
              </PriveteRouter>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
