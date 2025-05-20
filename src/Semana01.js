import React from 'react';
import { Link } from 'react-router-dom';

const Semana01 = () => {
  return (
    <div>
      <h1>Semana 01</h1>
      <ul>
        <li><Link to="/atv01">Atividade 1</Link></li>
        <li><Link to="/atv02">Atividade 2</Link></li>
      </ul>
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
};

export default Semana01;