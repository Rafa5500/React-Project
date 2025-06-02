import React from 'react';
import { Link } from 'react-router-dom';

export default function Semana05() {
  return (
    <div>
      <h1>Semana 05</h1>
      <ul>
        <li><Link to="Pages/semana05/formquiz">FormQuiz</Link></li>
        <li><Link to="Pages/semana05/formticket">FormTicket</Link></li>
        <li><Link to="Pages/semana05/accordion">Accordion</Link></li>
        <li><Link to="Pages/semana05/chat">ContactList e Chat</Link></li>
      </ul>

      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
