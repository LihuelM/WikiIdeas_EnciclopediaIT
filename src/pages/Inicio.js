import React from 'react';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import SliderSlick from '../components/CarouselCategorias';

function Inicio() {
  return (
  <div className='Inicio'>
    <BarraDeBusqueda />
    <SliderSlick /> 
  </div>
  );
}

export default Inicio;