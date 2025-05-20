import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li><Link to="/semana01">Semana 01</Link></li>
          <li><Link to="/semana02">Semana 02</Link></li>
          <li><Link to="/semana03">Semana 03</Link></li>

        </ul>
      </nav>
    </div>
  );
};

export default Home;