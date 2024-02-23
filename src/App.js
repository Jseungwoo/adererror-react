import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react'
import PrivateRoute from './router/PrivateRoute';

function App() {
  const[authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
    console.log("login", authenticate);
  }, [authenticate])
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ProductAll/>}/>
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
    </Routes>
    </>
  );
}

export default App;
