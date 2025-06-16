import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  // Estado para cuadrado
  const [lado, setLado] = useState('');
  const [areaCuadrado, setAreaCuadrado] = useState(null);

  const soloNumeros = (valor) => /^\d*$/.test(valor);

  const calcularAreaCuadrado = () => {
    if (lado) {
      setAreaCuadrado(Number(lado) * Number(lado));
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Calculadora de Áreas</h1>
      <div className="card">
        <h2>Área del Cuadrado</h2>
        <input
          type="text"
          placeholder="Lado"
          value={lado}
          onChange={(e) => soloNumeros(e.target.value) && setLado(e.target.value)}
        />
        <button onClick={calcularAreaCuadrado}>Calcular</button>
        {areaCuadrado !== null && <p className="bold">Área: {areaCuadrado} u²</p>}
      </div>
    </div>
  );
};

export default HomePage;
