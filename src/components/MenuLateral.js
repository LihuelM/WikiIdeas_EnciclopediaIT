import React from 'react';
import '../index.css';
import '../styles/Header.css';
import Categorias from "./Categorias";

//Logica 
//1 Utilizamos el operador ternario
//2 Es isOpen verdader?
    //Si: Asignamos la clase sidebar open//True al Menu
    //No: Asignamos la clase sidebar    //False al Menu

const MenuLateral = ({isOpen, toggleMenu, categoria}) => {

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <i onClick={toggleMenu} className="bi bi-arrow-left fs-1"> Categorias </i>
                
                <Categorias/>
        </div>
    );
}

export default MenuLateral;