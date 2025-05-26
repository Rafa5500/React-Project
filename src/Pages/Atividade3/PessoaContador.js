import React from 'react';
import './ContadorPessoas.css';

export default function PessoaContador({ titulo, quantidade, incrementar, decrementar, resetar, imagem }) {
  return (
    <div className="container">
      <h3 className="titulo">{titulo}</h3>
      <img className="icone" src={imagem} alt={titulo} />
      <div className="contador">{quantidade}</div>
      <div className="botoes">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        <button onClick={resetar}>Reset</button>
      </div>
    </div>
  );
}
