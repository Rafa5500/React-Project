import { useState } from 'react';
import './FormTicket.css';

function FormTicket() {
  const [firstName, setFirstName] = useState('Finn');
  const [lastName, setLastName] = useState('Mertens');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="ticket-form">
      <h2>Cadastro de Aventureiro</h2>
      <label>
        Nome:
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Sobrenome:
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>Bem-vindo(a), {firstName} {lastName}! Sua jornada em Ooo começa agora.</p>
    </div>
  );
}

export default FormTicket;
