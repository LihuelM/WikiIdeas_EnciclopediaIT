import React from 'react';
import './App.css';
import Header from './components/Header';
import BarraDeBusqueda from './components/BarraDeBusqueda';
// import Categorias from './components/Categorias';


function App() {
  return (
    <div className="App">
      <Header/>
      <BarraDeBusqueda />
      {/* <Categorias> Categorias </Categorias> */}
    </div>
  );
}

export default App;
