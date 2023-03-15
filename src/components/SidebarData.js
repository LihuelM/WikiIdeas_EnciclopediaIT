import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icons: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Comunidad',
    path:'/comunidad',
    icons: <FaIcons.FaAmericanSignLanguageInterpreting />,
    cName: 'nav-text'
  },
  {
    title: 'Sobre Nosotros',
    path:'/sobreNosotros',
    icons: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Soporte',
    path:'/soporte',
    icons: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Configuración',
    path:'/configuracion',
    icons: <FaIcons.FaWhmcs />,
    cName: 'nav-text'
  },
];