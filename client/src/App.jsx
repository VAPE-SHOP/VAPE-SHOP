import { useState,useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import NavBar from './pages/NavBar/NavBar.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Register from "./pages/Register/Register.jsx"
import Admin from './pages/Admin/Admin.jsx';
import NotFound from "./pages/NotFound/NotFound.jsx"
import NoAccess from './pages/NoAccess/NoAccess.jsx';
import AdminRouter from './componet/AdminRouter.jsx';
import PriveteRouter from './componet/PriveteRouter.jsx';
import ForceRedirect from './componet/ForceRedirect.jsx';
import Vapes from './pages/Vapes/Vapes.jsx'
import LiquidVaping from './pages/LiquidVaping/LiquidVaping.jsx';

function App() {
  const [isConnected ,setIsconnected]=useState(false)
  const [role ,setRole]=useState()
    const user={
    isConnected:isConnected,
    role:role
  }

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

     <div class="bg-light" style={{height: "100vh"}}>
      <NavBar user={user} Logout={Logout}/>
    <Routes>
  
      <Route  path="/" element={<PriveteRouter user={user}><Home/></PriveteRouter>}/>
      <Route  path="/vapes" element={<PriveteRouter user={user}><Vapes/></PriveteRouter>}/>
      <Route  path="/liquid" element={<PriveteRouter user={user}><LiquidVaping/></PriveteRouter>}/>
     

      <Route  path="/login" element={<ForceRedirect user={user}><Login /></ForceRedirect>}/>
      <Route  path="/register" element={<ForceRedirect user={user}><Register /></ForceRedirect>}/>
      <Route  path="/admin" element={<AdminRouter user={user}><Admin/></AdminRouter>}/>
      <Route  path="/*" element={<NotFound />}/>
      <Route  path="/noaccess" element={<NoAccess />}/>

    </Routes>
    </div>
    </BrowserRouter>

   );
}

export default App;



