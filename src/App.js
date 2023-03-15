import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Comunidad from './pages/Comunidad';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/comunidad' element={<Comunidad />} />
          <Route exact path='/sobreNosotros' element={<SobreNosotros />} />
          <Route exact path='/soporte' element={<Soporte />} />
          <Route exact path='/configuracion' element={<Configuracion />} />
          <Route path = '*' element={<NotFound/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
