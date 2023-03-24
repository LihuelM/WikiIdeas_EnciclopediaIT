import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import imgLogo from '../images/logos/Vector.svg';
import '../styles/Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#121212'}}>
      <div className='navbar'>
        <Link to='#' className='link nav__menu--burger'>
          <FaIcons.FaBars className='icon nav__menu--burger' onClick={showSidebar} />
        </Link>

        <div className='nav__container--logo'>
          <a href='/'> 
            <img src={imgLogo}
              className='nav__logo' 
              alt='logo_wikiIdeas'/> 
          </a>
        </div>

        <div className='nav__container--search'>
          <Link to='#' className='link nav__search'>
            <AiIcons.AiOutlineSearch className='icon nav__search'/>
          </Link>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} >
                <Link to={item.path} >
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;



