import React from 'react';

const BarraDeBusqueda = () => {
  return (
    <div className='barraDeBusqueda'>
      <form className="d-flex mx-auto pt-2 w-75 " role="search">
        <input className='form-control rounded-pill  '
          type="search" 
          placeholder="Buscar" 
          aria-label="Search">
          {/* <i className="bi bi-search"> </i> */}
        </input>
      </form>
    </div>
  );
}

export default BarraDeBusqueda;