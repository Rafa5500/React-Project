import React, { useState } from 'react';
import './ContadorPessoas.css';

function ContadorPessoas() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <div className="titulo">Contador de Pessoas</div>
      <div className="contador">{contador}</div>
      <div className="botoes">
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
      </div>
    </div>
  );
}

export default ContadorPessoas;
