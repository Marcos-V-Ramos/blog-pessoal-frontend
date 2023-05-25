import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Navbar from './components/static/navbar/Navbar';
import Home from './screens/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './screens/login/Login';
import CadastroUsuario from './screens/cadastroUsuario/cadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Login/> }/>
          <Route path="/home" element={ <Home/> }/> 
          <Route path="/cadastroUsuario" element={ <CadastroUsuario/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/temas" element={ <ListaTema/> }/>
          <Route path="/posts" element={ <ListaPostagem/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;