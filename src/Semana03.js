import React from 'react';
import { Link } from 'react-router-dom';

const Semana03 = () => {
  return (
    <div>
      <h1>Semana 03</h1>
      <ul>
        <li><Link to="/atv04">Hora de Aventura</Link></li>
      </ul>
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
};

export default Semana03;