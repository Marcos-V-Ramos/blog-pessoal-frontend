import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Navbar from './components/static/navbar/Navbar';
import Home from './screens/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './screens/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/home" element={ <Home/> }/> 
          <Route path="/login" element={ <Login/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;