import React from 'react';
import { Link } from 'react-router-dom';

const Semana02 = () => {
  return (
    <div>
      <h1>Semana 02</h1>
      <ul>
        <li><Link to="/atv03">Contador de Pessoas</Link></li>
      </ul>
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
};

export default Semana02;