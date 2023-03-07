import React from 'react';
import { useState } from 'react';
import imgLogo from '../images/logos/Vector.svg';
import MenuLateral from './MenuLateral';
import '../index.css';
import '../styles/Header.css';


function Header() {

//Funcion para Toggler
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <nav className='nav'>
      <div className='nav__container--logo'>
        <a href='/'> 
          <img src={imgLogo}
            className='nav__logo' 
            alt='logo_wikiIdeas'/> 
        </a>
      </div>

      <div className='nav--toggler'>
        <i onClick={toggleMenu} class="bi bi-grid-3x3-gap-fill fs-1"></i>
      </div>

      <MenuLateral className='nav__container--menu' isOpen={isOpen} toggleMenu={toggleMenu}/>

    </nav>
  );
}

export default Header;