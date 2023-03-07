import React from 'react';
import { useEffect, useState } from 'react';


const Categorias = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
      fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => setPersonajes(data.results));
    }, []);
  
    return (
      <div>
        {personajes.map((personaje) => (
          <p key={personaje.url}>{personaje.name}</p>
        ))}
      </div>
    );
  }

export default Categorias;