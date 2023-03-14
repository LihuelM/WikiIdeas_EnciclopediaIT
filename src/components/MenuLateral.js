import React from 'react';
import '../index.css';
import '../styles/Header.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreNosotros from '../pages/SobreNosotros';
import Soporte from '../pages/Soporte';
import Configuracion from '../pages/Configuracion';
import Comunidad from '../pages/Comunidad';
import NotFound from '../pages/NotFound';


//Logica 
//1 Utilizamos el operador ternario
//2 Es isOpen verdader?
    //Si: Asignamos la clase sidebar open//True al Menu
    //No: Asignamos la clase sidebar    //False al Menu

const MenuLateral = ({isOpen, toggleMenu, categoria}) => {

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <i onClick={toggleMenu} className="bi bi-arrow-left fs-1"></i>
      <BrowserRouter>
        <Routes>
          <Route exact path='/Comunidad' element={<Comunidad />} >Comunidad</Route>
          <Route exact path='/SobreNosotros' element={<SobreNosotros/>} >SobreNosotros</Route>
          <Route exact path='/Soporte' element={<Soporte/>} >Soporte</Route>
          <Route exact path='/Configuracion' element={<Configuracion/>} >Configuracion</Route>
          <Route path = '*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default MenuLateral;