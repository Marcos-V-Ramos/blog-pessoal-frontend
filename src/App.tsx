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
import CadastroPost from './components/postagens/cadastroPostagem/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

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

          <Route path='/formularioPostagem' element={<CadastroPost/>}/>
          <Route path='/formularioPostagem/:id' element={<CadastroPost/>}/>
          <Route path='/formularioTema' element={<CadastroTema/>}/>
          <Route path='/formularioTema/:id' element={<CadastroTema/>}/>
          <Route path='/deletarPostagem/:id'element={<DeletarPostagem/>}/>
          <Route path='/deletarTema/:id' element={<DeletarTema/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;