import React from 'react';
import '../styles/BarraDeBusqueda.css';
import { FaSearch } from 'react-icons/fa';

function BarraDeBusqueda() {
  return (
    <div className="search-bar">
      <input
        className="form-control rounded-pill"
        type="search"
        placeholder="Buscar"
        style={{
          backgroundImage: `url(${FaSearch})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          paddingLeft: '2rem',
        }}
      />
    </div>
  );
}

export default BarraDeBusqueda;