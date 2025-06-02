import React from 'react';
import { Link } from 'react-router-dom';

const Semana04 = () => {
  return (
    <div>
      <h1>Semana 04</h1>
      <ul>
        <li><Link to="/Atv05">Atividade 5</Link></li>
      </ul>
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
};

export default Semana04;