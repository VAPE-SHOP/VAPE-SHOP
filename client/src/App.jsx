import { useState,useEffect } from 'react'; //
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home.jsx'; //
import Login from './components/Login/Login'; // 
import Vapes from './components/Vapes/Vapes.jsx'; //
import Register from './components/Register/Register.jsx'; //
import Admin  from './components/Admin/Admin.jsx'; // 
import NotFound from './components/NotFound/NotFound.jsx'; //
import NoAccess from './components/NoAccess/NoAccess.jsx'; //
import AdminRouter from '../componet/AdminRouter.jsx';//
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


import axios from "axios";
function App() {

  const [Vape, setvape] = useState([]);
  const [oneVape,setoneVape] = useState([])
  const [liquid, setLiquid] = useState([]);
  const [oneLiquid, setOneLiquid] = useState([]);
  const [cart, setCart] = useState([]);
  const [isConnected ,setIsconnected]=useState(false)
  const [role ,setRole]=useState()
  
    const user={
    isConnected:isConnected,
    role:role
    }
  
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
  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("role"));
      if (user) {
        setIsconnected(true);
        setRole(user)
      } else {
        setIsconnected(false);
      }
    }
  };
  const Logout =()=>{
    localStorage.clear();
    setIsconnected(false)
}

useEffect(() => {
  checkUserToken();
}, [isConnected]);




  return (
    <BrowserRouter>
    <div className="bg-black" style={{height: "100vh"}}>
      <NavBar size={cart.length} user={user} Logout={Logout}/>
      <Routes>
        <Route path="/" element={<PriveteRouter user={user}><Home/></PriveteRouter>} />
        <Route path="/admin" element={ <AdminRouter user={user}><Admin /> </AdminRouter>} />
        <Route path="/manageLiquid" element={<ManageLiquid liquid={liquid} />} />
        <Route
          path="/liquid"
          element={<PriveteRouter user={user}>
            <Liquid
              liquids={liquid}
              one={getOneLiquid}
              handleClick={handleClick}
            />
          </PriveteRouter>}
        />
        <Route  path="/*" element={<NotFound />}/>
        <Route  path="/noaccess" element={<NoAccess />}/>
        <Route
          path="/oneLiquid"
          element={<OneLiquid liquidOne={oneLiquid} />}
        />
        <Route path="/About" element={<PriveteRouter user={user}><About /></PriveteRouter>} />

       
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<ForceRedirect user={user}><Login /></ForceRedirect>} />
      <Route  path="/register" element={<ForceRedirect user={user}><Register /></ForceRedirect>}/>
       
      <Route path="/vapes" element={<PriveteRouter user={user}><Vapes 
       Vape={Vape}
       one={getOneVape}
       handleClick={handleClick}
      /> </PriveteRouter> } />
      <Route path="/OneVape" element={<PriveteRouter user={user}><OneVape oneVape={oneVape} /></PriveteRouter>} />
      
      <Route path="/PostVape" element={<PriveteRouter user={user}><PostVape /></PriveteRouter>} />
      
        <Route
          path="/cart-shop"
          element={<PriveteRouter user={user}>
            <Cart cart={cart} setCart={setCart}  />
            </PriveteRouter>
          }
        />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App
