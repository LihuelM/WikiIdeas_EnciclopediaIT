import React from 'react';
import './App.css';
import Header from './components/Header';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import SliderSlick from './components/CarouselCategorias';



function App() {
  return (
    <div className="App">
      <Header/>
      <BarraDeBusqueda />
      <SliderSlick /> 
    </div>
  );
}

export default App;
