import React from 'react';
import { Link } from 'react-router-dom';

export default function Atv5() {
  return (
    <div>
      <h1>Semana 05</h1>
      <ul>
        <li><Link to="/Atividade5/formquiz">FormQuiz</Link></li>
        <li><Link to="/Atividade5/formticket">FormTicket</Link></li>
        <li><Link to="/Atividade5/accordion">Accordion</Link></li>
        <li><Link to="/Atividade5/chat">ContactList e Chat</Link></li>
      </ul>

      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
