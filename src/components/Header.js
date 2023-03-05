import React from 'react';
import { useState } from 'react';
import imgLogo from '../images/logos/Vector.svg';
import '../index.css';


function Header() {

//Funcion para Toggler
  const [isOpen, setIsOpen] = useState(false);

//   const navHamb = () => {
//     active === 'navUl'
//     ? setActive('navUl navActive')
//     : setActive('navUl')
//   }

// //Funcion API

//   const [data, setData] = useState(null);

// //hook para hacer la peticion http
//   useEffect(() => {
//     fetch("https://serviceone.onrender.com/apiWikiIdeasV1d/getPublicationbyCategory/IA") ///este link devuelve una promesa
//       .then ((response) => response.json()) //cuando tengamos la respuesta pasarla a json
//       .then((data) => setData(data));//
//   }, []); //array vacio[], se ejecutara una vez cuando se llame el componente

  return(
    <nav className='nav'>
      <div className='nav__container--logo'>
        <a href='/src/components'> 
          <img src={imgLogo}
            className='nav__logo' 
            alt='logo_wikiIdeas'/> 
        </a>
      </div>
      <div className={`nav--toggler ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav__container--menu ${isOpen && "open"}`}>
        <a href='/'>FrontEnd</a>
        <a href='/'>BackEnd</a>
        <a href='/LICENSE'>UX & UI Desing</a>
      </div>
    </nav>
  );
}
export default Header;